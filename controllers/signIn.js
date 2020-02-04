const signInHandler=(req,res,knex,bcrypt)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json('unable to login')
    }
    // Load hash from your password DB.
knex.select('email','hash').from('login').where('email', '=',email).then(
   data=>{
      const isValid= bcrypt.compareSync(password, data[0].hash);
           if(isValid){
             return  knex.select('*').from('users').where('email', '=', email).then(user=>{ 
               res.json(user[0])
              
              }
               ).catch(err=>res.status(400).json('unable to login'));
               
           }else{
               res.status(400).json('unable to retrieve data');
           }
   }
).catch(err=>res.status(400).json('unable to retrieve data'));

}
module.exports={
    signInHandler :signInHandler  
}
//export const signInHandler = signInHandler;