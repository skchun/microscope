Meteor.methods({
  'addPost': function(urlVar,titleVar){
    Posts.insert({
      title: titleVar,
      url: urlVar
    });
  }
});