
const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	    = express.Router();	




router.get('/',(req,res)=>{
    res.render('login/elogin');
})
router.post('/',(req,res)=>{
    var user=
    {
        username: req.body.username,
        password: req.body.password

    };
    userModel.validate2(user, function(status){

        if(status){
    
        res.cookie('username', req.body.username);
        console.log("Success");
        res.redirect('/ehome');
        }
        else{
                    res.redirect('/elogin');
        }
    });
})
module.exports = router; 