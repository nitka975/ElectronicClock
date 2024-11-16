function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const ceconds = String(now.getSeconds()).padStart(2,'0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${ceconds}`;
}

setInterval(updateClock, 1000);
