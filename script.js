document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id);
      let range = end - start;
      let startTime;
      
      function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = start + range * progress;
        obj.textContent = Math.floor(current);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }
      
      requestAnimationFrame(updateCounter);
    }
    
    counter("count1", 0, 450, 2000);
    counter("count2", 0, 1938, 2500);
    counter("count3", 0, 95, 3000);
    counter("count4", 0, 2110, 3000);
  });
  



function updateText() {
    const navbarText = document.querySelector('.navbar-text.usingJs');
    if (window.innerWidth >= 768) {
        navbarText.innerHTML = 'কাজিয়ার চর হামিদিয়া শুকুরিয়া আলিম মাদ্রাসা<br><small style="font-size: 12px; margin: 0; line-height: 1;">স্থাপিত : ১৯৩৮</small><br><small style="font-size: 12px; margin: 0; line-height: 1;">জাজিরা, শরীয়তপুর</small>';
        navbarText.style.fontSize = '20px';
        navbarText.style.color = 'black'; // Set text color to black
    } else {
        navbarText.textContent = 'কাজিয়ার চর আলিম মাদ্রাসা';
        navbarText.style.fontSize = '16px';
        navbarText.style.color = 'black'; // Set text color to black
    }
}
updateText();

window.addEventListener('resize', updateText);


// button setings


const button = document.querySelector('.madrasaButtonss');

        button.addEventListener('mouseenter', () => {
            button.style.transition = 'background 0.5s ease, color 0.6s ease, background-position 0.5s ease';
            button.style.backgroundPosition = 'left center';
            button.style.background = 'linear-gradient(to right, #fed400, #f76d57)';
            button.style.color = '#073a5d';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transition = 'background 0.5s ease, color 0.6s ease, background-position 0.5s ease';
            button.style.backgroundPosition = 'right center';
            button.style.background = 'linear-gradient(to right, #75f958, #2bc0e4)';
            button.style.color = '#40b406';
        });
        

        document.addEventListener("DOMContentLoaded", () => {
          const columns = document.querySelectorAll('.col-md-6');
          
          columns.forEach((column) => {
            column.classList.add('slide-in'); // Add the class to trigger the animation
          });
        });
        


        $(document).ready(function(){
          $('.madrasaNewsUpdates').slick({
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: [
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                      }
                  },
                  {
                      breakpoint: 576,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                      }
                  }
              ]
          });
      });




      
    // Function to update the number of columns based on screen size
    function updateColumns() {
        const windowWidth = window.innerWidth;

        if (windowWidth >= 1200) {
            // Large screens (lg and xl)
            document.querySelectorAll('.justifyCon').forEach((element) => {
                element.classList.remove('col-md-6', 'col-lg-3', 'col-xl-3');
                element.classList.add('col-lg-3', 'col-xl-3');
            });
        } else if (windowWidth >= 992) {
            // Medium screens (md)
            document.querySelectorAll('.justifyCon').forEach((element) => {
                element.classList.remove('col-md-6', 'col-lg-3', 'col-xl-3');
                element.classList.add('col-md-6');
            });
        } else {
            // Small screens (sm and xs)
            document.querySelectorAll('.justifyCon').forEach((element) => {
                element.classList.remove('col-md-6', 'col-lg-3', 'col-xl-3');
            });
        }
    }

    // Call the updateColumns function on page load
    window.addEventListener('load', updateColumns);

    // Call the updateColumns function when the window is resized
    window.addEventListener('resize', updateColumns);



    // JavaScript for responsive header
const menuIcon = document.getElementById('menu-icon');
const responsiveNavbar = document.getElementById('responsive-navbar');

menuIcon.addEventListener('click', () => {
  responsiveNavbar.classList.toggle('show');
});

window.addEventListener('resize', () => {
  // Check the screen width and hide the responsive menu if needed
  if (window.innerWidth > 768) {
    responsiveNavbar.classList.remove('show');
  }
});
