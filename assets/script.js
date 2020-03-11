const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

// function toggleMode() {
//     var element = document.getElementsByTagName("body");
//     element.classList.toggle("light");
//   }

let checkBox = document.querySelector('#on1');
checkBox.addEventListener("click", toggleMode);

function toggleMode(event) {
    const item = document.getElementsByTagName("body");
    item.classList.toggle("light");
    
    console.log(item)
}