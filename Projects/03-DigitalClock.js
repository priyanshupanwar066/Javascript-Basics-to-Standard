const clock = document.getElementById('clock')
// document.querySelector(#clock)

setInterval (function() {
    let date = new Date();
    // console.log(date.toLocaleString());
    clock.innerHTML  = date.toLocaleTimeString()
}, 1000)