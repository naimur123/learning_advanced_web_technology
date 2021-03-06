const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();


router.get('*',  (req, res, next)=>{
	if(req.cookies['username'] == null)
	{		
		res.redirect('/login');			
	}
	else{		
		next();			
	}		
});
router.get('/', (req, res)=>{	
	res.render('home/home');	
})
router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results)
	{
					 res.render('home/userlist', {users: results});
		});
	})
module.exports = router; 