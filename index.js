if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg=>{
          console.log('Registered',reg);
        }).catch(err=>{
          console.log('Registeration failed',err);
        });
    });
  }
  window.addEventListener('beforeinstallPrompt',(e)=>{
    e.preventDefault();
    deferredPrompt=e;
    btnAdd.style.display='block';
  });
  
  