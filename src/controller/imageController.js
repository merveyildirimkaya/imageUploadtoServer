const uploadImage = (req,res, next)=>{
    console.log("File might be dowloaded Please check")
   
    res.send(req.file)

}

module.exports = {uploadImage}