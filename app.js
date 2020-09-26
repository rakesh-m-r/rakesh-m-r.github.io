document.querySelector('.menu').style = "display: none;"

function menubar() {
  if (document.querySelector('.menubar').textContent == 'menu') {
    document.querySelector('.menubar').textContent = 'close'
    document.querySelector('.menubar').style = "color: #fefefe"
    document.querySelector('.menu').style = "display: block;"
    document.querySelector('.menu').style = "animation: fadeInLeft;animation-duration: 0.5s;"
    document.querySelector('#ani0').style = "animation: fadeInLeft;animation-duration: 2s;";
    document.querySelector('#ani1').style = "animation: fadeInLeft;animation-duration: 2s;";
    document.querySelector('#ani2').style = "animation: fadeInLeft;animation-duration: 2s;";
    document.querySelector('#ani3').style = "animation: fadeInLeft;animation-duration: 2s;";

  } else if (document.querySelector('.menubar').textContent == 'close') {
    document.querySelector('.menu').style = "display: none"
    document.querySelector('.menubar').textContent = 'menu'
    document.querySelector('.menubar').style = "color: black"
  }
}
