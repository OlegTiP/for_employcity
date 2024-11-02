 
//  burger menu
 $(document).ready(function() {
   $('.header').click(function() {
     $('.header__links').toggleClass('active');
     $('body').toggleClass('stop-skroll');
   });
 });
 
// Получаем элементы ползунка и отображаемого значения
const progressRange = document.getElementById('progressRange');
const progressValue = document.getElementById('progressValue');

// Обновляем текст при изменении значения ползунка
progressRange.addEventListener('input', () => {
    // Устанавливаем текстовое значение в зависимости от текущего значения ползунка
    const currentValue = progressRange.value;
    progressValue.textContent = `${currentValue}%`;

    // Можно также изменить ширину заполнения для наглядного прогресс-бара
    progressRange.style.background = `linear-gradient(to right, #0099ff ${currentValue}%, #ddd ${currentValue}%)`;
});
const selectContainer = document.querySelector('.form__select');
const selectTitle = selectContainer.querySelector('.form__select-title');
const selectLabels = selectContainer.querySelectorAll('.form__select-label');

// Toggle menu
selectTitle.addEventListener('click', (e) => {
  e.stopPropagation(); // Остановить всплытие, чтобы клик не дошел до document
  if (selectContainer.getAttribute('data-state') === 'active') {
    selectContainer.setAttribute('data-state', '');
  } else {
    selectContainer.setAttribute('data-state', 'active');
  }
});

// Close when clicking on an option
selectLabels.forEach(label => {
  label.addEventListener('click', (event) => {
    selectTitle.textContent = event.target.textContent;
    selectContainer.setAttribute('data-state', '');
  });
});

// Close when clicking outside of the select container
document.addEventListener('click', (e) => {
  if (!selectContainer.contains(e.target)) {
    selectContainer.setAttribute('data-state', '');
  }
});
