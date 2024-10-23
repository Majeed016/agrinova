window.onload = function () {
    const popup = document.getElementById('languagePopup');
    const confirmButton = document.getElementById('confirmLanguage');
  
    // Show popup on page load
    popup.classList.remove('hidden');
  
    // Handle language selection confirmation
    confirmButton.addEventListener('click', function () {
      const selectedLanguage = document.getElementById('language').value;
      alert('You selected: ' + selectedLanguage);
      popup.classList.add('hidden');
    });
  };
  