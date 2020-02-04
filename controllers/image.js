const Clarifai = require('clarifai');
 const app= new Clarifai.App({
    apiKey:'37047032eaec4831af5bd77ffb38c7f5'
  });
  const apiHandler=(req,res)=>{
  app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input )
  .then(response=>{
    res.json(response);
}).catch(err=>res.status(400).json('unable to get data'))
  } 

module.exports={
    apiHandler:apiHandler
}