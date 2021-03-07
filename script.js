const shareBtn = document.querySelector('.share-btn');
const tooltip = document.querySelector('.tooltip-container');

shareBtn.addEventListener('click', ()=>{
  tooltip.classList.toggle('active');
}) 