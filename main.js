// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButton = document.getElementsByClassName('like-glyph')
for (const i of likeButton) {
  i.addEventListener('click', mimicServerCall)
}
const errorMessage = document.getElementById('modal');

const getResponse = fetch('http://mimicServer.example.com').then(function(response){
  object.innerHTML = FULL_HEART
  }
).catch(function(error){
errorMessage.removeAttribute('hidden')
});



// function (event){
//   i.innerHTML = FULL_HEART
// }
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
