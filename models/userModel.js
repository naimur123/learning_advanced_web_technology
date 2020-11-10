const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where username='"+user.UserName+"' and password='"+user.Password+"'";
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
		var sql = "select * from employeer";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "Insert into employeer (ename,cname,contactno,username,password) VALUES('"+user.ename+"','"+user.cname+"','"+user.contactno+"','"+user.username+"', '"+user.password+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update:function(user, callback){
		var sql = "update employeer set ename = '"+user.ename+"',cname = '"+user.cname+"',contactno = '"+user.contactno+"',username = '"+user.username+"' where ID = '"+user.id+"'";
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

	}
} 