console.log('Script file loaded successfully'); document.querySelector('h1' ).addEventListener('click', function() { alert('Yeh ek fake news

website hai!');

});

document.querySelector('bod y').addEventListener('load', function() {

console.log('Website fully loaded'); });

function fakeNewsAlert() {

alert('This is a fake news website, be careful!');

}

setTimeout(fakeNewsAlert, 5000); // alert box will appear after 5 seconds
