const multer = require('multer');
const path = require('path');
const fs = require('fs');

try {
  fs.readdirSync('image');
} catch (error) {
  console.error('image 폴더가 없어 Image 폴더를 생성합니다.');
  fs.mkdirSync('image');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'image/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

exports.upload = upload;