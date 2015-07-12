$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("LsZ5uUaakzgsrZA2Q9Si4DA3tQ5ZqkvfAtMpQiyE", "2TPFEGQpaELEAQaQrzkFUpe6burE4VEaAygCIuYj");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});