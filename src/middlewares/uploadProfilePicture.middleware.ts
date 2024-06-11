import multer from 'multer';

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './uploads/profilePictures/');
    },
    filename(req, file, callback) {
        const uniqueName = `${Date.now()}_${Math.round(Math.random() * 1e9)}.${file.originalname.split('.').pop()}`;
        callback(null, uniqueName);
    },
});

const upload = multer({
    storage,
    fileFilter(req, file, callback) {
        if (file.mimetype.startsWith('image/')) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    limits: { fileSize: 1024 * 1024 * 5 },
});

export default upload;
