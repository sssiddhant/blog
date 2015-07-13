$(function() {
 
    Parse.$ = jQuery;
 
    Parse.initialize("LsZ5uUaakzgsrZA2Q9Si4DA3tQ5ZqkvfAtMpQiyE", "2TPFEGQpaELEAQaQrzkFUpe6burE4VEaAygCIuYj");
 
    var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
 
});
$('.form-signin').on('submit', function(e) {
 
    // Prevent Default Submit Event
    e.preventDefault();
 
    // Get data from the form and put them into variables
    var data = $(this).serializeArray(),
        username = data[0].value,
        password = data[1].value;
 
    // Call Parse Login function with those variables
    Parse.User.logIn(username, password, {
        // If the username and password matches
        success: function(user) {
            alert('Welcome!');
        },
        // If there is an error
        error: function(user, error) {
            console.log(error);
        }
    });
 
});