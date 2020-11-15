const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from admin where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){

	},
	getAll: function(callback){
		var sql = "select * from customer";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	update:function(user,callback){
		var sql = "update employeer set ename = '"+user.ename+"',cname = '"+user.cname+"',contactno = '"+user.contactno+"',username = '"+user.username+"',pic = '"+user.file+"' where ID = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},
	delete: function(user, callback){
		var sql = "delete from employeer where ID = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});

	},
	insert2: function(user, callback){
		var sql = "Insert into customer (name,age,contactno,username,email,password) VALUES('"+user.cname+"','"+user.age+"','"+user.contactno+"','"+user.username+"','"+user.email+"', '"+user.password+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	validate2: function(user, callback){
		var sql = "select * from customer where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
	
} 