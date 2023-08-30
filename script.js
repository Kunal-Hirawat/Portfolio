 //  For NavBar Scroll 


let scrollpos = window.scrollY 

const navbar = document.querySelector(".navbar")
const scrollChange = 20

const add_class_on_scroll = () => navbar.classList.add("scroll")
const remove_class_on_scroll = () => navbar.classList.remove("scroll")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})


//  For Toggle Menu 

    let toggle_menu = document.querySelector(".menu-btn"); 
    toggle_menu.addEventListener('click',function(){
        let toggle_menu_navbar = document.querySelector(".navbar .menu"); 
        let close = document.querySelector(".menu-btn i")
        toggle_menu_navbar.classList.toggle("toggle");
        close.classList.toggle("toggle");
    })


    // let animate = document.querySelector(".content span")
    // animate.addEventListener('',function(){})
    //   ;
    

    // Owl- Carousel 
$(document).ready(function(){
  
  $('.carousel').owlCarousel({
      margin:20 ,
      loop: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      responsive: {
        0:{
          items: 1
        },
       
        1000:{
          items: 2
          
        }

      }
  });
  
});





