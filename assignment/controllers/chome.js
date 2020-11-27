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
	var user=req.cookies['username']
	userModel.getAll3(user,function(results)
	{
	   res.render('home/chome', {users: results});
	});	
})
router.get('/searchbook', (req, res) => {
    res.render('home/searchbook');
});

router.post('/searchbook', (req, res) => {
    userModel.search(req.body.search, (result) => {
        res.json({
            results: result
        });
    });
});



module.exports = router; 