function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  let accou=document.querySelectorAll(".accordion-item")
  let ab=document.querySelectorAll(".accordion-button")
  accou.forEach((acc,i) => {
    acc.addEventListener("click",()=>{
      ab.forEach((ab) => {
        ab.classList.remove("active")
      });
      ab[i].classList.add("active")
    })
  });

  // slick slider

  $('#slick1').slick({
		rows: 2,
    dots: true,
		arrows: false,
    autoplay: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
});

