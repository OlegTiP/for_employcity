 
//  burger menu
$(document).ready(function() {
  $('.header__burger').click(function() {
      $('.header__nav').toggleClass('active');
      $('body').toggleClass('stop-scroll');

      $(this).toggleClass('active');
  });
});

 
const progressRange = document.getElementById('progressRange');
const progressValue = document.getElementById('progressValue');

progressRange.addEventListener('input', () => {
    const currentValue = progressRange.value;
    progressValue.textContent = `${currentValue}%`;

    progressRange.style.background = `linear-gradient(to right, #0099ff ${currentValue}%, #ddd ${currentValue}%)`;
});
const selectContainer = document.querySelector('.form__select');
const selectTitle = selectContainer.querySelector('.form__select-title');
const selectLabels = selectContainer.querySelectorAll('.form__select-label');

selectTitle.addEventListener('click', (e) => {
  e.stopPropagation(); 
  if (selectContainer.getAttribute('data-state') === 'active') {
    selectContainer.setAttribute('data-state', '');
  } else {
    selectContainer.setAttribute('data-state', 'active');
  }
});

selectLabels.forEach(label => {
  label.addEventListener('click', (event) => {
    selectTitle.textContent = event.target.textContent;
    selectContainer.setAttribute('data-state', '');
  });
});

document.addEventListener('click', (e) => {
  if (!selectContainer.contains(e.target)) {
    selectContainer.setAttribute('data-state', '');
  }
});
