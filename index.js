var welcome = $('.welcome');
var introduction = $('h3');
var instructions = $('#instructions');
var button = $('button');
var input = $('.name').val();

button.on("click", goaway);

function goaway() {
var input = $('.name').val();
welcome.text(`Go away, ${input}!`);
introduction.text('I said GO AWAY!');
instructions.text('There is no quiz.');
button.css('backgroundColor', 'red');
button.text('You lose.');
}
