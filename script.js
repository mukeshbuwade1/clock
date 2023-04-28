
let hourElement = document.querySelector('[hour]');
let minuteElement = document.querySelector('[minute]');
let secondElement = document.querySelector('[second]');


function getCurrentTime() {
    const current_date = new Date();
    let second = current_date.getSeconds() / 60;
    let minute = (second + current_date.getMinutes()) / 60;
    let hour = (minute + current_date.getHours()) / 12;

    console.log(`${hour}:${minute}:${second}`)
    setStyle(secondElement, second)
    setStyle(minuteElement, minute)
    setStyle(hourElement, hour)
}

function setStyle(ele, rotation) {
    ele.style.transform = `translate(-50%) rotate(${rotation * 360}deg)`

}

setInterval(getCurrentTime, 1000);

