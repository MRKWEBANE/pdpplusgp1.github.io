(function() {

  var parent = document.querySelector(".range-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);
			
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();

 // this is for scrolll section
 const offerSlider = document.getElementById("offerSlider");
    const items = offerSlider.children;
    const totalItems = items.length;
    let currentIndex = 0;

    function moveSlider() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0; // Loop back to the beginning
        }

        // Scroll to the next item
        offerSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Set interval for automatic sliding (adjust the time for the speed)
    setInterval(moveSlider, 3000); // Move every 3 seconds
