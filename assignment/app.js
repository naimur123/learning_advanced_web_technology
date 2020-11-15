const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');


const path              = require('path');



const app				= express();


const login				= require('./controllers/login');
const clogin			= require('./controllers/clogin');
const select			= require('./controllers/select');
const register			= require('./controllers/register');
const home				= require('./controllers/home');
const chome				= require('./controllers/chome');



const port				= 3000;

//configuration
app.set('view engine', 'ejs');







//middleware
app.use(express.static(path.join(__dirname+'/public'))); 
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));




app.use('/home',home);
//app.use('/user',user);
//app.use('/logout', logout);
app.use('/register', register);
app.use('/clogin',clogin);
app.use('/chome',chome);
app.use('/login',login);
app.use('/select',select);



//router
app.get('/', (req, res)=>{
	res.send('Welcome');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
}); 