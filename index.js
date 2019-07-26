var welcome = $('.welcome');
var introduction = $('h3');
var instructions = $('#instructions');
var button = $('button');
var input = $('.name').val();

button.on("click", goaway);

function goaway() {
var input = $('.name').val();
welcome.text(`Don't worry, ${input}.`);
introduction.text('You are loved.');
instructions.text('There is no quiz. I just wanted to remind you.');
button.css('backgroundColor', 'lightblue');
button.text(':)');
}
