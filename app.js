function menubar() {
    if (document.querySelector('.menubar').textContent == 'menu') {
      document.querySelector('.menubar').textContent = 'close'
    } 
    else if(document.querySelector('.menubar').textContent == 'close') {
      document.querySelector('.menubar').textContent = 'menu'
    }
  }