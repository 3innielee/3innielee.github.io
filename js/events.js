const switchSoundOn = new Audio('assets/sounds/switch-on.mp3');
const switchSoundOff = new Audio('assets/sounds/switch-off.mp3');

document.getElementById('theme-toggle').addEventListener('click', function() {
  if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
    document.documentElement.setAttribute('data-bs-theme','light')
    switchSoundOn.play();
    this.textContent = 'dark_mode';
    this.setAttribute('data-bs-theme-value','dark');
  }else {
    document.documentElement.setAttribute('data-bs-theme','dark')
    switchSoundOff.play();
    this.textContent = 'light_mode';
    this.setAttribute('data-bs-theme-value','light');
  }
});