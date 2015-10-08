//My Scripts
var greetings =["hello : ","Greatings : ", "Sup : ", "Yo : "];

// Default show no name
var rand = ((Math.random() * 4) + 1);


////Get and first name
//var firstName = prompt();
//
////get and store last name
//var lastName = prompt();

////display name
//$('.first').text(firstName);
//$('.last').text(lastName);

// for fun
$('.first').hover(function(){
    $(this).css("color", "purple");
}, function(){
    $(this).css("color", "cornflowerblue");
});

$('.last').hover(function(){
    $(this).css("color", "hotpink");
}, function(){
    $(this).css("color", "limegreen");
});

//turn on lettering
$('h1').lettering();