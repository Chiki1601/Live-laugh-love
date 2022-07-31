const el = document.querySelector("#liveLaughLove");

gsap.timeline({ repeat: -1, defaults: {
    duration: 1,
    ease: 'expo.inOut' } }).

to(el, {
  attr: { viewBox: "180 120 300 200" } }).

to(el, {
  attr: { viewBox: "100 200 450 350" } }).

to(el, {
  attr: { viewBox: "200 450 250 300" } }).

to(el, {
  attr: { viewBox: "0 0 864 864" } });