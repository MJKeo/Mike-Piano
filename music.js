var clip = document.getElementById("clip");

document.addEventListener('keydown', (e) => {
    if (e.code === "Digit1") {
        playSound("G2");
        document.getElementById("G2").classList.add("white-selected");
    } else if(e.code == "Digit2") {
        playSound("Gs2");
        document.getElementById("Gs2").classList.add("black-selected");
    } else if(e.code == "Digit3") {
        playSound("A2");
        document.getElementById("A2").classList.add("white-selected");
    } else if(e.code == "Digit4") {
        playSound("Bb2");
        document.getElementById("Bb2").classList.add("black-selected");
    } else if(e.code == "Digit5") {
        playSound("B2");
        document.getElementById("B2").classList.add("white-selected");
    } else if(e.code == "Digit6") {
        playSound("C3");
        document.getElementById("C3").classList.add("white-selected");
    } else if(e.code == "Digit7") {
        playSound("Cs3");
        document.getElementById("Cs3").classList.add("black-selected");
    } else if(e.code == "Digit8") {
        playSound("D3");
        document.getElementById("D3").classList.add("white-selected");
    } else if(e.code == "Digit9") {
        playSound("Eb3");
        document.getElementById("Eb3").classList.add("black-selected");
    } else if(e.code == "Digit0") {
        playSound("E3");
        document.getElementById("E3").classList.add("white-selected");
    } else if(e.code == "Minus") {
        playSound("F3");
        document.getElementById("F3").classList.add("white-selected");
    } else if(e.code == "Equal") {
        playSound("Fs3");
        document.getElementById("Fs3").classList.add("black-selected");
    }
    console.log(e.key +  " down");
  });

  document.addEventListener('keyup', (e) => {
    if (e.code === "Digit1") {
        document.getElementById("G2").classList.remove("white-selected");
    } else if(e.code == "Digit2") {
        document.getElementById("Gs2").classList.remove("black-selected");
    } else if(e.code == "Digit3") {
        document.getElementById("A2").classList.remove("white-selected");
    } else if(e.code == "Digit4") {
        document.getElementById("Bb2").classList.remove("black-selected");
    } else if(e.code == "Digit5") {
        document.getElementById("B2").classList.remove("white-selected");
    } else if(e.code == "Digit6") {
        document.getElementById("C3").classList.remove("white-selected");
    } else if(e.code == "Digit7") {
        document.getElementById("Cs3").classList.remove("black-selected");
    } else if(e.code == "Digit8") {
        document.getElementById("D3").classList.remove("white-selected");
    } else if(e.code == "Digit9") {
        document.getElementById("Eb3").classList.remove("black-selected");
    } else if(e.code == "Digit0") {
        document.getElementById("E3").classList.remove("white-selected");
    } else if(e.code == "Minus") {
        document.getElementById("F3").classList.remove("white-selected");
    } else if(e.code == "Equal") {
        document.getElementById("Fs3").classList.remove("black-selected");
    }
    console.log(e.key +  " up");
  });

function playSound(note) {
    clip.src = "./notes/" + note + ".mp3";
    clip.playbackRate = 2;
    clip.play();
    console.log(note);
}