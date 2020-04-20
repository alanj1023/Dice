// make dice roll
// toggle number of dice
// deffine variables
var hide = document.querySelector('.dice2');

document.getElementById('rd').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    
    if (hide.style.display === 'block') {
    hide.style.display = 'block';
    hide.src = 'dice-' + dice2 + '.png';
    } else {
        hide.style.display = 'none';
    }
});

/*document.querySelector('.number-dice').addEventListener('click', function() {
    if (document.querySelector('.dice2').style.display = 'none') {
        document.querySelector('.dice2').style.diplay = 'block';
    } else { 
        document.querySelector('.dice2').style.diplay = 'none';
    }

});*/

document.querySelector('.number-dice').addEventListener('click', function() {
    
    if (hide.style.display === 'none'){
        hide.style.display = 'block';
    } else {
        hide.style.display = 'none';
    }


});

