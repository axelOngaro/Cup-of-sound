import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

const linkClicked = () => {
  console.log(event.srcElement.id);
};

// link.addEventListener('click', () => {
//   linkClicked();
// });

// li.addEventListener('click', () => {
//   scroll.scrollTo(target);
// });
const scrollNav = (link, target) => {
  scroll.scrollTo(target);
};

//Home scroll
const homeLink = document.querySelector('#homeLink');
const homePage = document.querySelector('#home-page');

homeLink.addEventListener('click', () => {
  scroll.scrollTo(homePage, { easing: [0.09, 1.05, 0.01, 0.89] });
});
//about scroll
const aboutLink = document.querySelector('#aboutLink');
const aboutPage = document.querySelector('#about-page');

aboutLink.addEventListener('click', () => {
  scroll.scrollTo(aboutPage, { easing: [0.09, 1.05, 0.01, 0.89] });
});

//Work scroll
const workLink = document.querySelector('#workLink');
const workPage = document.querySelector('#work-page');
workLink.addEventListener('click', () => {
  scroll.scrollTo(workPage, { easing: [0.09, 1.05, 0.01, 0.89] });
});

//contact scroll
const contactLink = document.querySelector('#contactLink');
const contactPage = document.querySelector('#contact-page');
contactLink.addEventListener('click', () => {
  scroll.scrollTo(contactPage, { easing: [0.09, 1.05, 0.01, 0.89] });
});

//check visible element

console.log(scroll);

const toggleTheme = document.querySelector('#toggleTheme');
const main = document.querySelector('#body');
toggleTheme.addEventListener('click', () => {
  main.classList.toggle('darkTheme');
});
