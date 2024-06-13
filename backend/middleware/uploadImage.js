// import multer from "multer";
// import path from "path";
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs';
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// const __filename = __filename;
// const __dirname = __dirname;

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const imgPath = path.join(__dirname, '../img'); 
        
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