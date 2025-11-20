// assets/js/script.js
(function () {
  const footer = document.querySelector('footer p');
  if (footer) {
    const now = new Date();
    footer.insertAdjacentHTML('beforeend', ' — ενημερώθηκε: ' + now.toLocaleString());
  }
})();
