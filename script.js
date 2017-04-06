  var start = new Date().getTime();

  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }


  function makeShapeappear() {
      var top = Math.random() * 400;
      document.getElementById("shape").style.top = top + "px";

      var right = Math.random() * 400;
      document.getElementById("shape").style.left = right + "px";

      var width = Math.random() * 400;
      document.getElementById("shape").style.width = width + "px";
      document.getElementById("shape").style.height = width + "px";

      document.getElementById("shape").style.backgroundColor = getRandomColor();

      if (Math.random() > .5) {
          document.getElementById("shape").style.borderRadius = "50%";
      } else {
          document.getElementById("shape").style.borderRadius = Math.random() * 50 + "px";
      }

      document.getElementById("shape").style.display = "block";
      start = new Date().getTime();
  }

  function appearAfterdelay() {
      setTimeout(makeShapeappear, Math.random() * 2000);
  }
  appearAfterdelay();
  document.getElementById("shape").onclick = function() {
      document.getElementById("shape").style.display = "none";
      var end = new Date().getTime();
      var timeTaken = (end - start) / 1000;
      document.getElementById("timeTaken").innerHTML = timeTaken + "s";
      appearAfterdelay();
  }