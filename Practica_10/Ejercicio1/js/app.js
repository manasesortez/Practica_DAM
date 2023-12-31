const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

const weekdays =[
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

giveaway.textContent = `giveway ends on ${weekday}, ${date} ${month} 
${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemaingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = t/oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    })

    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Lo siento, este giveway ha espirado!</h4>`

    }
}

let countdown = setInterval(getRemaingTime, 1000);
getRemaingTime();