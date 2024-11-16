function updateClock(time){
    const now = new Date();
    const hours = String(now.getUTCHours() + time).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2,'0');
    const ceconds = String(now.getUTCSeconds()).padStart(2,'0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${ceconds}`;

    timeZona = parseInt(selectTimeZona.value, 10);
    // console.log(timeZona);

    
}

// updateClock(timeZona);

let timeZona;
const selectTimeZona = document.getElementById("timeZona");

setInterval(updateClock(timeZona), 1000);
updateClock(timeZona);




// const difrent_time_UtC = new Date().getTimezoneOffset() / 60;
// const timeZona = Intl.DateTimeFormat().resolvedOptions().timeZona;


// document.getElementById('clock2').textContent = timeZona;