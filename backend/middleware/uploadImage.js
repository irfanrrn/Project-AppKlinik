const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const imgPath = path.join(__dirname, '../public/img'); 
        
        if (!fs.existsSync(imgPath)) {
            fs.mkdirSync(imgPath); 
        }
        cb(null, imgPath); 
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + Math.round(Math.random() * 1E9);
    
        const ext = path.extname(file.originalname);
        
        cb(null, file.fieldname + '-' + unique + ext);
    }
});

const upload = multer({ storage });
module.exports = { upload };