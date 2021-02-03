// Volume number/slider

document.getElementById('volume-number').addEventListener('input',function(){

    var number = document.getElementById('volume-number').value;

    document.getElementById('volume-slider').value = number;

    if (number >= 67) {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById('horn-btn').disabled = false;
    }
    else if (number >= 34) {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById('horn-btn').disabled = false;
    }
    else if (number >= 1) {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById('horn-btn').disabled = false;
    }
    else {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById('horn-btn').disabled = true;
    }

});

document.getElementById('volume-slider').addEventListener('input',function(){

    var slider = document.getElementById('volume-slider').value;

    document.getElementById('volume-number').value = slider;

    if (slider >= 67) {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById('horn-btn').disabled = false;
    }
    else if (slider >= 34) {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById('horn-btn').disabled = false;
    }
    else if (slider >= 1) {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById('horn-btn').disabled = false;
    }
    else {
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById('horn-btn').disabled = true;
    }

});

// Radio buttons


document.getElementById('audio-selection').addEventListener('change',function(){
    if (document.getElementById('radio-air-horn').checked) {
        document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3"
        document.getElementById('sound-image').src = "./assets/media/images/air-horn.svg"
    }
    else if (document.getElementById('radio-car-horn').checked) {
        document.getElementById('horn-sound').src = "./assets/media/audio/car-horn.mp3"
        document.getElementById('sound-image').src = "./assets/media/images/car.svg"
    }
    else if (document.getElementById('radio-party-horn').checked) {
        document.getElementById('horn-sound').src = "./assets/media/audio/party-horn.mp3"
        document.getElementById('sound-image').src = "./assets/media/images/party-horn.svg"
    }
});


// Horn button

document.getElementById('honk-btn').addEventListener('click',function(event){

    event.preventDefault();

    var number = document.getElementById('volume-number').value;

    if (number >= 1) {
        document.getElementById('horn-sound').volume = number / 100;
        document.getElementById('horn-sound').play();
    }

});