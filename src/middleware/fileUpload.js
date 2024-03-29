var multer = require('multer')
require('dotenv').config()
// addfood image
function getTime() {
    var today = new Date().toLocaleDateString()
    today = today.toString().replace('/', '-')
    today = today.replace('/', '-')

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    today += '-' + h + '-' + m + '-' + s

    return today+"-";
}


 //mongo server image
 var storage = multer.diskStorage({

     destination: (req, file, callBack) => {
         callBack(null, "C:\\Users\\eyaba\\Desktop\\LesSaveursDeFatma_FrontSide\\src\\assets\\foodImages")
         
     },
     filename: (req, file, callBack) => {
         callBack(null, `${getTime()}-${file.originalname}`)
     }
 })
 exports.upload = multer({ storage: storage })


