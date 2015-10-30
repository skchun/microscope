Template.postForm.events({

  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();
    var urlVar = event.target.url.value;
    var titleVar = event.target.title.value;
    Meteor.call('addPost', urlVar, titleVar);

    template.find("form").reset();
  }

});