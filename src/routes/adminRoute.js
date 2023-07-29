var express = require('express')
var router = express.Router()
const adminController = require('../controllers/adminController')
const verifyTokenmiddleware = require('../middleware/verifyToken') 
const fileUploadmiddleware = require('../middleware/fileUpload') 
require('dotenv').config()

router.get('/dockerCheck',adminController.dockerCheck)
router.post('/file',fileUploadmiddleware.upload.single('file'),adminController.file)
router.post('/addfood',fileUploadmiddleware.upload.single('file'),adminController.addFood)
router.get('/getallfooditem',adminController.getallFoodItem)
router.post('/editfoodwithimage',fileUploadmiddleware.upload.single('file'), adminController.editFoodWithImage )
router.post('/editfood',adminController.editFood)
router.delete('/deletefood/:id',verifyTokenmiddleware.verifyToken,adminController.deleteFood)
router.get('/getalluser',adminController.getallUser)
router.delete('/blockuser/:id',adminController.block)
router.delete('/unblockuser/:id',adminController.unblock)
router.get('/getallorders',verifyTokenmiddleware.verifyToken,adminController.getallOrders)
router.post('/updateorderstatus',verifyTokenmiddleware.verifyToken,adminController.updateorderstatus)
router.delete('/deleteorder/:id',verifyTokenmiddleware.verifyToken,adminController.deleteOrder)
router.get('/getoneorder/:id',verifyTokenmiddleware.verifyToken,adminController.getoneOrder)
router.get('/getoneuser/:id',verifyTokenmiddleware.verifyToken,adminController.getOneuser)
router.get('/getorderhistory/:date',verifyTokenmiddleware.verifyToken,adminController.getorderHistory)
router.post('/updatepaymentstatus',verifyTokenmiddleware.verifyToken,adminController.updatePaymentstatus)
router.get('/getallfeedback',verifyTokenmiddleware.verifyToken,adminController.getallFeedback)
router.delete('/deletefeedback/:id',verifyTokenmiddleware.verifyToken,adminController.deleteFeedback)
router.get('/getqrcode/:id',verifyTokenmiddleware.verifyToken,adminController.getQrcode)







module.exports = router