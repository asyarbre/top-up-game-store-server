var express = require("express");
var router = express.Router();
const { index, viewCreate, actionCreate, viewEdit, actionEdit } = require("./controller");
const multer = require("multer");
const os = require("os");

/* GET home page. */
router.get("/", index);
router.get('/create', viewCreate);
router.post('/create', multer({ dest: os.tmpdir()}).single('thumbnail'), actionCreate);
router.get('/edit/:id', viewEdit);
router.put('/edit/:id', multer({ dest: os.tmpdir()}).single('thumbnail'), actionEdit);
// router.delete('/delete/:id', actionDelete);

module.exports = router;
