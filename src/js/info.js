const info = document.querySelector('#info');
const infoBtn = info.querySelector('.circle');
const infoBox = info.querySelector('#info-container');

infoBtn.addEventListener('click', () => {
  if (infoBox.classList.contains('standby')) {
    infoBox.classList.remove('standby');
    infoBox.classList.add('on');
  } else if (infoBox.classList.contains('on')) {
    infoBox.classList.remove('on');
    infoBox.classList.add('off');
  } else if (infoBox.classList.contains('off')) {
    infoBox.classList.remove('off');
    infoBox.classList.add('on');
  }
});
