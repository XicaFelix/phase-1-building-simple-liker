// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//  Step 1 - Click on Heart and activate server response
function thatCallback(e){
const targetHeart = e.target;
mimicServerCall('some URL').then(function (){
// Step 2 - Success Server Response:
// If the Heart is Empty: 
  if (targetHeart.innerHTML === EMPTY_HEART) {
    // Change the heart to full
    targetHeart.innerHTML = FULL_HEART;
    // Add activated class
    targetHeart.classList.add('activated-Heart');
  } else {
    // If the heart is full:
    // Remove Activated Class
    targetHeart.removeAttribute('activated-Heart');
    // Change the Heart to empty
    targetHeart.innerHTML = EMPTY_HEART;
  }
  //  Step 3 - Failed Server Response
  // Use catch and display error message
}).catch(function (error){
  // Display the error message for 3 seconds
  const theMessage = document.getElementById('modal');
  theMessage.removeAttribute('hidden');
  setTimeout(()=> theMessage.className = 'hidden', 3000); 
})
}


const likeButton = document.getElementsByClassName('like-glyph')
for (const i of likeButton){
  i.addEventListener('click',thatCallback)}


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
