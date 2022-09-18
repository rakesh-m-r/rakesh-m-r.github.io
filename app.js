
let github = document.querySelector('.github');

let githubAnimation = bodymovin.loadAnimation({
  container: github,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: "./github.json"
});

github.addEventListener('mouseenter', function() {
  githubAnimation.play();
});

github.addEventListener('mouseleave', function() {
  githubAnimation.pause();
});

let instagram = document.querySelector('.instagram');

let instagramAnimation = bodymovin.loadAnimation({
  container: instagram,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: "./instagram.json"
});

instagram.addEventListener('mouseenter', function() {
  instagramAnimation.play();
});

instagram.addEventListener('mouseleave', function() {
  instagramAnimation.pause();
});

let linkedin = document.querySelector('.linkedin');

let linkedinAnimation = bodymovin.loadAnimation({
  container: linkedin,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: "./linkedin.json"
});

linkedin.addEventListener('mouseenter', function() {
  linkedinAnimation.play();
});

linkedin.addEventListener('mouseleave', function() {
  linkedinAnimation.pause();
});

let twitter = document.querySelector('.twitter');

let twitterAnimation = bodymovin.loadAnimation({
  container: twitter,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: "./twitter.json"
});

twitter.addEventListener('mouseenter', function() {
  twitterAnimation.play();
});

twitter.addEventListener('mouseleave', function() {
  twitterAnimation.pause();
});
