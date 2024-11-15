import multer from 'multer';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getUploadPath = (mimeType) => {
    if (mimeType.startsWith('image/')) {
        return path.join(__dirname, '../uploads/images/');  
    }
    if (mimeType.startsWith('video/')) {
        return path.join(__dirname, '../uploads/videos/');  
    }
    console.error('Unsupported file type:', mimeType); 
    throw new Error('Unsupported file type');
};

const getFileExtension = (mimeType) => {
    if (mimeType.startsWith('image/')) {
        return '.webp';
    } 
    if (mimeType.startsWith('video/')) {
        return '.mp4';
    }
    throw new Error('Unsupported file type');
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try {
            const uploadPath = getUploadPath(file.mimetype);
            cb(null, uploadPath);
        } 
        catch (error) {
            cb(error, null);
        }
    },

    filename: (req, file, cb) => {
        try {
            const fileName = req.file_name ? req.file_name : 'FILE';
            const extension = getFileExtension(file.mimetype);

            cb(null, `${fileName}-${Date.now()}${extension}`);
        } 
        catch (error) {
            cb(error, null);
        }
    }
});

const fileFilter = (req, file, cb) => {
    const mimeType = file.mimetype;
    if (mimeType.startsWith('image/') || mimeType.startsWith('video/')) {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file type'), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 500 * 1024 * 1024 } 
});
//filesizr расчет ограничения на 500мегабутов


export default upload;
