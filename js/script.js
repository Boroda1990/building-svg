var stages = document.querySelectorAll('.stage');

let floor = document.querySelector('#floor');
let rooms = document.querySelector('#rooms');

stages.forEach(element => {
  element.addEventListener("mouseenter", () => {

    var dataFloor = element.getAttribute('data-floor');
    var dataRoom = element.getAttribute('data-rooms');


    floor.innerText = dataFloor;
    rooms.innerText = dataRoom;
    console.log(dataFloor, dataRoom);
  })
});