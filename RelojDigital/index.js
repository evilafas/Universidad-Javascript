const time = document.getElementById("time");
const fecha = document.getElementById("fecha");

setInterval(() => {
    const date = new Date();
    const datetime = `${date.getHours()}:${date.getMinutes()}: ${date.getSeconds()}`;
    const day = { weekday: 'long' };
    const dayOfWeek = date.toLocaleString('es-ES', day);
    const month = { month: 'long' };
    const monthName = date.toLocaleString('es-ES', month);
    const fechaCompleta = `${dayOfWeek}, ${date.getDay()} de ${monthName} del ${date.getFullYear()}`
    time.innerText = datetime;
    fecha.innerText = fechaCompleta;
}, 1000);
