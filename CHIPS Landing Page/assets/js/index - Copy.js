/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle= document.getElementById('nav-toggle'),
navClose= document.getElementById('nav-close')

//   menu show

if (navToggle) {
  navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
  });
}

// Menu hidden

if (navClose) {
  navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
  });
}


/*=============== REMOVE MENU MOBILE ===============*/

   const navLink = document.querySelectorAll('.nav__link')

   const linkAction = ()=>
      {
          const navMenu = document.getElementById('nav-menu')
          // When we click on each nav__link, we remove the show-menu class
          navMenu.classList.remove('show-menu')
      }

    navLink.forEach(n=>n.addEventListener('click',linkAction))  

// /*=============== SHADOW HEADER ===============*/

const shadowHeader = ()=>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')

}

 window.addEventListener('scroll',shadowHeader);
/*=============== SWIPER FAVORITES ===============*/ 


const swiperFavorites = new Swiper('.favorites__swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true
});


 /*=============== SHOW SCROLL UP ===============*/ 

const scrollUp =()=>{
  const scrollup = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
  : scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive =()=>{
  const scrollDown = window.scrollY

  sections.forEach(current=>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)
          {
              sectionsClass.classList.add('active-link')
          }

          else{
              sectionsClass.classList.remove('active-link')
          }
      })
}

 window.addEventListener('scroll',scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay:300,
})
sr.reveal(`.contact,.container, .care`,{ distance:'0px',duration:800,delay:200})
sr.reveal(`.home__data`)
sr.reveal(`.home__circle, .home__img`, {delay:600, scale: .5})
sr.reveal(`.home__chips-3`, {delay:600, interval: 1000})
sr.reveal(`.home__chips-1, .home__chips-2,`, {delay:800, interval:100})
sr.reveal(`.home__chips-1, .home__chips-2, .leaf3`, {delay:800, interval:100})
sr.reveal(`.home__tomato-1, .home__tomato-2`, {delay:800, interval:100})



