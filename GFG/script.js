function showSlidebar(){
  const slidebar= document.querySelector('.sliderbar');
  slidebar.style.display = 'flex';
}

function hideSlidebar(){
  const slidebar = document.querySelector('.sliderbar');
  slidebar.style.display='none';
}

const accordians = document.querySelectorAll('.que');
accordians.forEach(accordian => {
  const icon = accordian.querySelector('.cross');
  const answer = accordian.querySelector('.ans');

  accordian.addEventListener('click',()=>{
    icon.classList.toggle('active');
    answer.classList.toggle('active');
  })
});