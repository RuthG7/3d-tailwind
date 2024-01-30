document.getElementById('toggleContent').addEventListener('click', function() {
  const content = document.querySelector('.hidden');
  const dropdownIcon = document.getElementById('dropdownIcon');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    dropdownIcon.classList.add('rotate-180');
  } else {
    content.style.display = 'none';
    dropdownIcon.classList.remove('rotate-180');
  }
});