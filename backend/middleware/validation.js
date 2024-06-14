const { body, check, validationResult } = require('express-validator');

const createPostValidation = [
    body('name')
        .exists({ checkFalsy: true })
        .withMessage('The name field has not been filled in, please fill it in completely')
        .isString()
        .withMessage('name must be a string'),
    body('phone_number')
        .exists({ checkFalsy: true })
        .withMessage('The phone_number field has not been filled in, please fill it in completely')
        .isString()
        .withMessage('phone_number must be a string')
        .isLength({ min: 5 })
        .withMessage("phone_number minimum 12 numbers"),
    body('specialization')
        .exists({ checkFalsy: true })
        .withMessage('The specialization field has not been filled in, please fill it in completely')
        .isString()
        .withMessage('specialization must be a string'),
    body('qualification')
        .exists({ checkFalsy: true })
        .withMessage('qThe qualification field has not been filled in, please fill it in completely')
        .isString()
        .withMessage('qualification must be a string'),
    check('image')
        .custom((value, {req}) => {
            // console.log("File yang diunggah di validasi:", req.file); 
            if(!req.file){
                throw new Error('Please upload an image first')
            }
            const allowedExtensions = ['image/jpeg', 'image/png'];
            // mime : file extensions
            if (!allowedExtensions.includes(req.file.mimetype)) {
                throw new Error('Only JPG or PNG files are allowed');
            }
            return true;
        })
]

const updatePostValidation = [
    body('name')
        .optional()
        .isLength({ min: 3, max: 20 })
        .withMessage('Content length between 3-20 characters'),
    body('phone_number')
        .optional()
        .isLength({ min: 12, max: 20 })
        .withMessage('Content length between 12-20 characters'),
    body('specialization')
        .optional()
        .isLength({ min: 5, max: 30 })
        .withMessage('Content length between 5-30 characters'),
    body('qualification')
        .optional()
        .isLength({ min: 5, max: 30 })
        .withMessage('Content length between 5-30 characters'),
    check('image')
        .custom((value, {req}) => {
		   if(!req.file){
				return true;
		   }
           const allowedExtensions = ['image/jpeg', 'image/png']; 

           if (!allowedExtensions.includes(req.file.mimetype)) {
           		throw new Error('Only JPG or PNG files are allowed');
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