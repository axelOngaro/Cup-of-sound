import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
const target = document.querySelector("#about-page");

const scrollAbout = (scroll, target) => {
  console.log("scrollmdr");
  scroll.scrollTo(target);
};

export default scrollAbout;
