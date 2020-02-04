const registerHandler=(req,res,knex,bcrypt)=>{
    const {email,password,username} =req.body;
    if(!email || !password|| !username){
        return res.status(400).json('unable to submit form')
    }
          // convert  password to hash and saves in DB.
        const hash= bcrypt.hashSync(password);
        knex.transaction(trx=>{
            trx.insert({
                hash:hash,
                email:email
            }).into('login')
            .returning('email')
            .then(loginEmail=>{
                return trx('users')
                .returning('*')
                .insert(
                {username:username,
                email:loginEmail[0],
                joined: new Date()
                }).then(user=>{
                    res.json(user[0]);
                    console.log(user);
                    })
                })
                .then(trx.commit)
                .catch(trx.rollback)
        }) 

        .catch(error=>res.status(400).json('unable to register'));
        }

 module.exports={
            registerHandler : registerHandler
 }
        //e
//export const registerHandler = registerHandler;
//returns last user