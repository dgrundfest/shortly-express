var db = require('../config');
// var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
 var bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  links: function(){
    return this.hasMany(Link);
  },
  initialize: function(){
    this.on('creating',function(model,attrs,options){
      model.set('username', attrs.username);
   //   model.set('password', bcrypt.hashSync(attrs.password, null, null));
        // .then(function(hash){
        //   console.log(hash);
        // }));
    });
  },
  login :function (password){
   // return bcrypt.compareSync(password,model.get('password'));
    //.then(function(result){console.log(result);});
  }

});



module.exports = User;





/*
bcrypt.hash("bacon", null, null, function(err, hash) {


    // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});

bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});

 */
