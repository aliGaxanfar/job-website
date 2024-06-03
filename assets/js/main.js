/**
* Template Name: Impact
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";


  /**
   * Navbar links active state on scroll
   */
  // let navbarlinks = document.querySelectorAll('#navbar a');

  // function navbarlinksActive() {
  //   navbarlinks.forEach(navbarlink => {

  //     if (!navbarlink.hash) return;

  //     let section = document.querySelector(navbarlink.hash);
  //     if (!section) return;

  //     let position = window.scrollY + 200;

  //     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
  //       navbarlink.classList.add('active');
  //     } else {
  //       navbarlink.classList.remove('active');
  //     }
  //   })
  // }
  // window.addEventListener('load', navbarlinksActive);
  // document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  // const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  // navDropdowns.forEach(el => {
  //   el.addEventListener('click', function(event) {
  //     if (document.querySelector('.mobile-nav-active')) {
  //       event.preventDefault();
  //       this.classList.toggle('active');
  //       this.nextElementSibling.classList.toggle('dropdown-active');

  //       let dropDownIndicator = this.querySelector('.dropdown-indicator');
  //       dropDownIndicator.classList.toggle('bi-chevron-up');
  //       dropDownIndicator.classList.toggle('bi-chevron-down');
  //     }
  //   })
  // });


  
    // Scroll top button
   
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }


});


function submitted(){
  console.log("Form submitted")
}