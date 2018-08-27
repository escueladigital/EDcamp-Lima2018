export const countdown = {}

// obtener el tiempo restante
countdown.getRemainingTime =  (deadline) => {

  let now = new Date(),
    endTime = new Date(deadline),
    remainTime = (Date.parse(deadline) - now + 1000) / 1000,
    timeOffset = (now.getTimezoneOffset() - endTime.getTimezoneOffset()) / 60,
    days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'],
    endDay = days[endTime.getDay()],
    endDate = endTime.getDate(),
    endMonth = months[endTime.getMonth()],
    endHours = endTime.getHours() + timeOffset,
    isPm = endHours >= 12,
    endMinutes = `0${endTime.getMinutes()}`.slice(-2),
    remainSeconds = `0${Math.floor(remainTime % 60)}`.slice(-2),
    remainMinutes = `0${Math.floor(remainTime / 60 % 60)}`.slice(-2),
    remainHours = `0${Math.floor(remainTime / 3600 % 24)}`.slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  endHours = isPm
                  ? endHours = endHours === 12
                    ? endHours
                    : endHours - 12
                  : endHours
  let endFormated = `${endDay} ${endDate} de ${endMonth} ${endHours}:${endMinutes}`
  endFormated = isPm ? `${endFormated}pm` : `${endFormated}am`

  return {
    remainDays,
    remainHours,
    remainMinutes,
    remainSeconds,
    remainTime,
    endDay,
    endDate,
    endMonth,
    endHours,
    endMinutes,
    endFormated
  }
}

// ejecutar el countDown
countdown.run = (deadline, elem, message) => {
  let timerUpdate = setInterval(function () {
    let el = document.getElementById(elem),
      t = timer.getRemainingTime(deadline);
    el.innerHTML = `
      <div class="next-lesson__remain">
        <span>${t.remainDays}</span>D:
        <span>${t.remainHours}</span>H:
        <span>${t.remainMinutes}</span>M:
        <span>${t.remainSeconds}</span>S      
      </div>    
    `;
    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = message;
    }
  }, 1000);
}
