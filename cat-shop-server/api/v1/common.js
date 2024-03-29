const router = require('express').Router();
const fs = require('fs');
const moment = require('moment');
const multer = require('multer');

const path = './public/uploads';
if (!fs.existsSync(path)) {
  fs.mkdirSync(path, { recursive: true })
}

const todayDir = moment().format('YYYYHHDD');
if (!fs.existsSync(`${path}/${todayDir}`)) {
  fs.mkdirSync(`${path}/${todayDir}`, { recursive: true })
}

const storage = multer.diskStorage({
  // 文件上传路径
  destination: function (req, file, cb) {
    cb(null, `${path}/${todayDir}`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + file.originalname.split('.').slice(-1))
  }
})

const upload = multer({ storage: storage });

router.post('/file_upload', upload.single('file'), (req, res) => {
  res.json({
    code: 'success',
    message: '文件上传成功',
    info: `/uploads/${todayDir}/${req.file.filename}`,
  })
})

module.exports = router;