const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();


router.get('*',  (req, res, next)=>{
	if(req.cookies['username'] == null)
	{		
		res.redirect('/clogin');			
	}
	else{		
		next();			
	}		
});
router.get('/', (req, res)=>{	
	res.render('home/chome');	
})



module.exports = router; 