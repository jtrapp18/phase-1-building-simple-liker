// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartChange = {
  '♡': '♥',
  '♥': '♡'
}

// const toggleHide = () => document.querySelector("#modal").classList.toggle("hidden")

const heartIcons = document.querySelectorAll(".like-glyph")
heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.textContent === EMPTY_HEART) {

      mimicServerCall()
      .then(response => {
        document.querySelector("#modal").classList.remove("hidden")
        setTimeout(() => {document.querySelector("#modal").classList.add("hidden")}, 3000)

        if (response==="Pretend remote server notified of action!") {
          
          icon.textContent = heartChange[icon.textContent]
          icon.classList.add("activated-heart")
        }
      })
      .catch(() => {document.querySelector("#modal").classList.remove("hidden")})
    }
    else {
      icon.textContent = heartChange[icon.textContent]
      icon.classList.remove("activated-heart")
    }
  }

  )
})


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
