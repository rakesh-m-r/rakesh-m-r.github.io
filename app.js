document.querySelector('.menu').style="display: none;"
function menubar() {
    if (document.querySelector('.menubar').textContent == 'menu') {
      document.querySelector('.menubar').textContent = 'close'
      document.querySelector('.menu').style="display: block;"
    } 
    else if(document.querySelector('.menubar').textContent == 'close') {
      document.querySelector('.menubar').textContent = 'menu'
      document.querySelector('.menu').style="display: none;"
    }
  }