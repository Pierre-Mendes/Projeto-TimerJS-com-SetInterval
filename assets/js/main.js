function timer() {
  function getTimeSeconds(seconds) {
    const date = new Date(seconds * 1000);
    
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const clock = document.querySelector('.relogio');
  let seconds = 0;
  let timer;

  function startTimer() {
    timer = setInterval(function() {
      seconds++;
      clock.innerHTML = getTimeSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      clock.innerHTML = '00:00:00';
      clock.classList.remove('pausado');
      seconds = 0;
    }

    if (el.classList.contains('iniciar')) {
      clock.classList.remove('pausado');
      clearInterval(timer);
      startTimer();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      clock.classList.add('pausado');
    }
  });
}
timer();
