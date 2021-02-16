window.addEventListener("DOMContentLoaded", (event) => {
  var i = 0;
  var j = 0;
  var animateText = "Jonghyun Kang";
  var animateP = "Welcome to this page";
  var speed = 150;

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
      setTimeout(textWriter, speed);
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


});
