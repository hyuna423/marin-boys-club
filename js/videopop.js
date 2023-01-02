/* var btnPopClose = document.querySelectorAll('.mrbc_video_pop .xi-close-thin');
var targetID;
for(var j = 0; j < target.length; j++){
    btnPopClose[j].addEventListener('click', function(){
      this.parentNode.parentNode.style.display = 'none';
    });
  } */


  const popBtn = document.querySelector('.xi-close-thin');
  const popUp = document.querySelector('.mrbc_video_pop');

  popBtn.addEventListener("click" , () => {
    popUp.style.display = "none";
  })