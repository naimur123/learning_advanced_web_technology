
const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	    = express.Router();	




router.get('/',(req,res)=>{
    res.render('login/login');
})
router.post('/',(req,res)=>{
    var user=
    {
        UserName: req.body.username,
        Password: req.body.password

    };
    userModel.validate(user, function(status){

        if(status){
    
        res.cookie('username', req.body.username);
        res.redirect('/home');
        }
        else{
                    res.redirect('/login');
        }
    });
})
module.exports = router; 