window.addEventListener("DOMContentLoaded", (event) => {
  var i = 0;
  var j = 0;
  var animateText = "Jonghyun Kang";
  var animateP = "I am a Software Engineer, \nDevoted to JavaScript & React \nReliable and Patient \nEnthusiastic \nLoyal and Hard-working \nEnthusiastic Foodie \nHappy Gamer."; 
  var speed = 150;
  var speedB = 50;

  function typeWriter() {
    if (i < animateText.length) {
      document.querySelector(".typewritter").innerHTML += animateText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      textWriter();
    }
  }

  function textWriter() {
    if (j < animateP.length) {
      document.querySelector(".textwritter").innerHTML += animateP.charAt(j);
      j++;
      setTimeout(textWriter, speedB);
    }
  }

  typeWriter();

  function buttonAnimate() {
    var id = null;
    var id2 = null;
    const element = document.querySelector(".animate-button");
    let position = 0;

    clearInterval(id);
    id = setInterval(botFrame, 50);

    function botFrame() {
      if (position == 30) {
        clearInterval(id);
        id2 = setInterval(topFrame, 50);
      } else {
        position++;
        element.style.top = position + "px";
      }

      function topFrame() {
        if (position == 0) {
          clearInterval(id2);
          id = setInterval(botFrame, 50);
        } else {
          position--;
          element.style.top = position + "px";
        }
      }
    }
  }

  buttonAnimate();

var animateBtn = document.querySelector(".animate-button");

animateBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: `smooth` })
})

var imgClass = document.querySelector(".flex-img-4");
var centered = document.querySelector(".centered");
var modal = document.getElementById("modal");

imgClass.addEventListener("click", function() {
  centered.style.visibility = "visible";
  console.log(centered.style.visibility = "visible");
})

window.onclick = function(event) {
  if (event.target == modal) {
    centered.style.visibility = "hidden";
  }
}

});

