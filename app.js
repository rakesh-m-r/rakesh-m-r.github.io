
let github = document.querySelector('.github');

let githubAnimation = bodymovin.loadAnimation({
  container: github,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "./lottieFiles/github.json"
});

github.addEventListener('mouseenter', function() {
  githubAnimation.play();
});

github.addEventListener('mouseleave', function() {
  githubAnimation.goToAndStop(0,true);
});

let linkedin = document.querySelector('.linkedin');

let linkedinAnimation = bodymovin.loadAnimation({
  container: linkedin,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "./lottieFiles/linkedin.json"
});

linkedin.addEventListener('mouseenter', function() {
  linkedinAnimation.play();
});

linkedin.addEventListener('mouseleave', function() {
  linkedinAnimation.goToAndStop(0,true);
});

let twitter = document.querySelector('.twitter');

let twitterAnimation = bodymovin.loadAnimation({
  container: twitter,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "./lottieFiles/twitter.json"
});

twitter.addEventListener('mouseenter', function() {
  twitterAnimation.play();
});

twitter.addEventListener('mouseleave', function() {
  twitterAnimation.goToAndStop(0,true);
});
