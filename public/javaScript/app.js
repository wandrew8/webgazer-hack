let xCoordinates = 0;
let yCoordinates = 0;

function hideVideo(bool) {
    webgazer.showVideo(bool);
    webgazer.showFaceOverlay(bool)
    webgazer.showFaceFeedbackBox(bool)
}

webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    xCoordinates = data.x; //these x coordinates are relative to the viewport
    yCoordinates = data.y; //these y coordinates are relative to the viewport
    console.log(xCoordinates)
}).begin()

//Heatmap configuration and setup 

const config = {
    container: document.querySelector('.heatmap'),
    radius: 50,
    maxOpacity: 1,
    minOpacity: 0.1,
    blur: .75,
    gradient: {
      // enter n keys between 0 and 1 here
      // for gradient color customization
      '0.8': '#1abc9c',
      '0.8': '#2ecc71',
      '0.8': '#3498db'
    }
  };
const heatmapInstance = h337.create(config);
  document.querySelector('.demo-wrapper').onmousemove = function(ev) {
    heatmapInstance.addData({
      x: xCoordinates,
      y: yCoordinates,
      value: 1
    });
  };


const images = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
];

const imageHolder = document.querySelector(".imageHolder");
const changeImagesButton = document.querySelector(".imagebutton");
const hideVideoButton = document.querySelector(".hideVideoButton");
let isVideoShown = true;

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let ranNums = shuffle(images);
console.log(ranNums[0])


function addImages() {
    imageHolder.innerHTML = `
    <img src="${ranNums[0]}">
    <img src="${ranNums[1]}">
    <img src="${ranNums[2]}">
    <img src="${ranNums[3]}">
    `
}


//Event Listeners

changeImagesButton.addEventListener('click', function() { 
    shuffle(images);   
    addImages();
})

hideVideoButton.addEventListener("click", function() {
    if(isVideoShown === true) {
        isVideoShown = false;
        hideVideoButton.textContent = "Hide Video"
        hideVideo(true)
    } else {
        isVideoShown = true;
        hideVideoButton.textContent = "Show Video"
        hideVideo(false);
    }
})

document.addEventListener('DOMContentLoaded', function() {
    addImages();
});
