const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');

async function addUser(req, res){
bcrypt.hash(req.body.password , 10 , (err, hash)=>{
    if(err){
        return res.status(500).json({
            error:err
        })
    }
    else{
        const user = new userModel({
            
            username: req.body.username,
            password: hash,
            email: req.body.email
        })
        user.save()
        .then(result=>{
            res.status(200).json({
                message: 'user saved successfully',
                new_user: result,
            })
        })
        .catch(err=>{
            res.status(500).json({
                error: err
            })
        })
    }
})
}

module.exports= addUser;