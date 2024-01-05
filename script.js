const cubeSwitch = document.querySelector(".cube-switch")
const lightBulb = document.getElementById("light-bulb")


cubeSwitch.addEventListener('click', ()=>{
// get button state, have active class or not
// if switch donst active class then add active class on cubeSwitch
// also  add "on" class on bulb 

// 
let isSwitchActive = cubeSwitch.classList.contains("active")

if( isSwitchActive ){
    cubeSwitch.classList.remove("active")
    lightBulb.className= "off"
}else{
    cubeSwitch.classList.add("active")
    lightBulb.className= "on"
}
})
