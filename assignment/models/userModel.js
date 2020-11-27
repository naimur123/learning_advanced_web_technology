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
		var sql = "select * from booklist where ID='"+id+ "'";
		db.getResults(sql, function(result){
			callback(result);
		});

	},
	getAll: function(callback){
		var sql = "select * from customer";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll2: function(callback){
		var sql = "select * from booklist";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	update:function(user,callback){
		var sql = "update booklist set bookname = '"+user.bname+"',bookauthor = '"+user.baname+"',bookadition = '"+user.badition+"',catagories = '"+user.bcatagories+"',price = '"+user.bprice+"',description = '"+user.bdescription+"' where ID = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},
	delete: function(user, callback){
		var sql = "delete from customer where ID = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});

	},
	insert: function(user, callback){
		var sql = "Insert into booklist (bookname,bookauthor,bookadition,catagories,price,description) VALUES('"+user.bname+"','"+user.baname+"','"+user.badition+"','"+user.bcatagories+"','"+user.bprice+"','"+user.bdescription+"')";
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
	},
	getAll3: function(user,callback){
		var sql = "select * from booklist ";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	search: (search, callback) => {
		var sql = "SELECT * FROM booklist WHERE bookname = '"+search+"' OR bookauthor = '"+search+"' OR bookadition = '"+search+"' OR catagories = '"+search+"' OR price = '"+search+"' OR description = '"+search+"' ";
		db.getResults(sql, (results) => {
			callback(results);
		});
	}
	
} 