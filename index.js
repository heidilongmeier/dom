var welcome = $('.welcome');
var introduction = $('h3');
var instructions = $('#instructions');
var button = $('button');
var input = $('.name').val();
var notascam = $('#notascam');
button.on("click", youreloved);

function youreloved() {
var input = $('.name').val();
welcome.text(`Don't worry, ${input}.`);
introduction.text('You are loved.');
instructions.text('There is no quiz.')';
notascam.text('I just wanted to brighten your day.');
button.css('backgroundColor', 'lightblue');
button.text(':)');
}
