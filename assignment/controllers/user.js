const express 	= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/create', (req, res)=>{
	res.render('user/create');
});
router.post('/create', (req, res)=>{

    var user=
    {
        bname: req.body.bname,
        baname: req.body.baname,
        badition: req.body.badition,
        bcatagories: req.body.bcatagories,
        bprice: req.body.bprice,
        bdescription: req.body.bdescription
      

    };
    userModel.insert(user, function(status){

        if(status){
    
            console.log("Created");
            res.redirect('/home');
          
        }
        else{
              console.log("Error");  
        }
    });
});
router.get('/edit/:id', (req, res)=>{
   
    userModel.getById(req.params.id, (result) => {
        res.render('user/edit', { user: result[0] });
    });
       
});

router.post('/edit/:id', (req, res)=>{
    var user = {
        id: req.params.id,
        bname: req.body.bname,
        baname: req.body.baname,
        badition: req.body.badition,
        bcatagories: req.body.bcatagories,
        bprice: req.body.bprice,
        bdescription: req.body.bdescription

	};
    userModel.update(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/home/booklist');
          
        }
        else{
              console.log("Error");  
        }
});
})
router.get('/delete/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('user/delete',user);
});

router.post('/delete/:id', (req, res)=>{
    var user = {
        id: req.params.id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/home/userlist');
          
        }
        else{
              console.log("Error");  
        }
});
})
router.get('/addjob', (req, res)=>{
	res.render('user/addjob');
});
router.post('/addjob', (req, res)=>{

    var user=
    {
        username: req.body.username,
        enewcompany: req.body.enewcompany,
        jtitle: req.body.jtitle,
        jlocation: req.body.jlocation
       
      

    };
    userModel.insert3(user, function(status){

        if(status){
    
            console.log("added");
         
           
            res.redirect('/ehome');
          
        }
        else{
              console.log("Error");  
        }
    });
});


module.exports = router;