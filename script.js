// //slideshow stuff attempt with added start and stop button
// const pausePlayBtns = document.querySelectorAll('.pause-play-btn');
// const slideTracks = document.querySelectorAll('.slide-track');

// pausePlayBtns.forEach((btn, index) => {
//   let isPlaying = true;
//   // how does the index reset, it doesn't??
//   //make an if statement and reset it back to 0
//   const slideTrack = slideTracks[index];

//   btn.addEventListener('click', () => {
//     if (isPlaying) {
//       slideTrack.style.animationPlayState = 'paused';
//       btn.textContent = 'Play';
//     } else {
//       slideTrack.style.animationPlayState = 'running';
//       btn.textContent = 'Pause';
//     }
//     isPlaying = !isPlaying;
//   });
// });




//modal image stuff 1
var modal = document.getElementById("myModal");

var img = document.getElementById("Monteverde_main");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

