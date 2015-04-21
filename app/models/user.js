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
      model.set('password', bcrypt.hashSync(model.get('password'), null, null));
    });
  },
  login :function (password){
    var success = bcrypt.compareSync(password,this.get('password'));
    console.log(password, success);
    return success;

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
