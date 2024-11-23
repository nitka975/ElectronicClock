const selectTimeZona = document.getElementById('timeZona');
const clockElement = document.getElementById('clock');
const local_timeZona = document.getElementById('local_timeZona');

function updateClock(){
    const now = new Date();

    timeZona = parseInt(selectTimeZona.value, 10);

    const hours = String((now.getUTCHours() + timeZona) % 24).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2,'0');
    const ceconds = String(now.getUTCSeconds()).padStart(2,'0');
    
    clockElement.textContent = `${hours}:${minutes}:${ceconds}`;

    // console.log(timeZona);
    local_timeZona.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;

}

// updateClock(timeZona);

let timeZona;

setInterval(updateClock, 1000);
selectTimeZona.addEventListener('change', updateClock);





// const difrent_time_UtC = new Date().getTimezoneOffset() / 60;
// const timeZona = Intl.DateTimeFormat().resolvedOptions().timeZona;


// document.getElementById('clock2').textContent = timeZona;