const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const app				= express();

const login				= require('./controllers/login');
const home				= require('./controllers/home');
const user				= require('./controllers/user');
const logout			= require('./controllers/logout');

const port				= 3000;

//configuration
app.set('view engine', 'ejs');


//middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/login',login);
app.use('/home',home);
app.use('/user',user);
app.use('/logout', logout);

//router
app.get('/', (req, res)=>{
	res.send('Welcome');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
}); 