$(function() {
 
    
    Parse.$ = jQuery;
 
    Parse.initialize("LsZ5uUaakzgsrZA2Q9Si4DA3tQ5ZqkvfAtMpQiyE", "2TPFEGQpaELEAQaQrzkFUpe6burE4VEaAygCIuYj");
 
$('.form-signin').on('submit', function(e) {
 

    e.preventDefault();
 

    var data = $(this).serializeArray(),
        username = data[0].value,
        password = data[1].value;
 
    
    Parse.User.logIn(username, password, {
        
        success: function(user) {
            alert('Welcome!');
        },
        
        error: function(user, error) {
            console.log(error);
        }
    });
 
});