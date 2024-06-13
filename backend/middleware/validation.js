const { body, check, validationResult } = require('express-validator');

const createPostValidation = [
    body('name')
        .exists({ checkFalsy: true })
        .withMessage('name wajib diisi')
        .isString()
        .withMessage('name harus string'),
    body('phone_number')
        .exists({ checkFalsy: true })
        .withMessage('phone_number wajib diisi')
        .isString()
        .withMessage('phone_number harus string')
        .isLength({ min: 5 })
        .withMessage("phone_number minimal 12 number"),
    body('specialization')
        .exists({ checkFalsy: true })
        .withMessage('specialization wajib diisi')
        .isString()
        .withMessage('specialization harus string'),
    body('qualification')
        .exists({ checkFalsy: true })
        .withMessage('qualification wajib diisi')
        .isString()
        .withMessage('qualification harus string'),
    check('image')
        .custom((value, {req}) => {
            // console.log("File yang diunggah di validasi:", req.file); 
            if(!req.file){
                throw new Error('Silahkan upload gambar terlebih dulu')
            }
            const allowedExtensions = ['image/jpeg', 'image/png'];
            // mime : file extensions
            if (!allowedExtensions.includes(req.file.mimetype)) {
                throw new Error('Hanya file JPG atau PNG yang diperbolehkan');
            }
            return true;
        })
]

const updatePostValidation = [
    body('name')
        .optional()
        .isLength({ min: 3, max: 20 })
        .withMessage('Panjang konten antara 3-20 karakter'),
    body('phone_number')
        .optional()
        .isLength({ min: 12, max: 20 })
        .withMessage('Panjang konten antara 5-20 karakter'),
    body('specialization')
        .optional()
        .isLength({ min: 5, max: 30 })
        .withMessage('Panjang konten antara 5-20 karakter'),
    body('qualification')
        .optional()
        .isLength({ min: 5, max: 30 })
        .withMessage('Panjang konten antara 5-20 karakter'),
    check('image')
        .custom((value, {req}) => {
		   if(!req.file){
				return true;
		   }
           const allowedExtensions = ['image/jpeg', 'image/png']; 

           if (!allowedExtensions.includes(req.file.mimetype)) {
           		throw new Error('Hanya file JPG atau PNG yang diperbolehkan');
           }
		   return true;
        })
]

const result = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    next();
};

module.exports = {
    createPostValidation,
    updatePostValidation,
    result
}