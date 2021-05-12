import multer from 'multer';

import path from 'path';
const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'public'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        console.log(file);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
    },
});

const multerFilter = (req: any, file: any, cb: Function) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb('Please upload only images.', false);
    }
};
const maxFileSize = 1 * 1000 * 1000; // 1 mb

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: maxFileSize },
});

const uploadFiles = upload.single('images');

export default uploadFiles;
