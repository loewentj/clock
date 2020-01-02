const clock = document.querySelector('main .jumbotron .clock');
const todaysDate = document.querySelector('main .jumbotron .date');
const getDate = new Date();



const tick = () => {

    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const minutes = m > 9 ? m : '0' + m;
    const s = now.getSeconds();
    const seconds = s > 9 ? s : '0' + s;
    const html = `${h} : ${minutes} : ${seconds}`;
    clock.innerHTML = html;

};

const currentDate = () => {


    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const fullDate = getDate.toLocaleDateString('en-AUS', options);



    // todaysDate.innerHTML = fullDate;

};

setInterval(tick, 1000);

currentDate();