const profileHandler=(req,res,knex)=>{
    const {id}=req.params;
    knex.select('*').from('users').where ({
        id:id
    }).then(user=>{
        if(user.length > 0){
      res.json(user[0]);
        }else{
            res.status(400).json("Not found");
        }
    }).catch(error=>{
     res.status(400).json('user doesn\'t exist');
    })  
    }
    module.exports={
       profileHandler:profileHandler
    }