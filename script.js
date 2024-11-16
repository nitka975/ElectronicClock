function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const ceconds = String(now.getSeconds()).padStart(2,'0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${ceconds}`;

}
setInterval(updateClock, 1000);

function updateClock_timezona() {
    const now_local = new Date();
    const select_timezona = -5; //NewYork
    const hours = String(now_local.getHours()+select_timezona-1).padStart(2, '0');
    const minutes = String(now_local.getMinutes()).padStart(2,'0');
    const ceconds = String(now_local.getSeconds()).padStart(2,'0');
    
    document.getElementById('timezona').textContent = `${hours}:${minutes}:${ceconds}`;
}

setInterval(updateClock_timezona, 100);