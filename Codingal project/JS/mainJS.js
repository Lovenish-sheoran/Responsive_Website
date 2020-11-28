function togglePopup(){
    document.getElementById("popupModal").classList.toggle("active");
}

function countDownTimer() {
    let totalSeconds = 60 * 10;
    let timer = setInterval(function () {
        let minutes = parseInt(totalSeconds / 60),
            seconds = totalSeconds - minutes * 60;
        minutes = minutes > 9 ? minutes : "0" + minutes;
        seconds = seconds > 9 ? seconds : "0" + seconds;
        document.getElementById("timer").innerHTML = minutes+" : "+seconds;
        totalSeconds--;
        if(totalSeconds < 0) {
            clearInterval(timer);
            let endClassButton = document.getElementsByClassName("endClassButton")[0];
            endClassButton.disabled = true;
            endClassButton.classList.add("inactiveButton");
            document.getElementById("popupModal").classList.remove("active");
        }
    },1000);
    window.timer = timer;
}

function showTimeRemaining() {
    document.getElementsByClassName("hamburgerIcon")[0].classList.add("hide");
    document.getElementsByClassName("closeBtn")[0].classList.remove("hide");
    document.getElementsByClassName("codingalLogo")[0].classList.add("hide");
    document.getElementsByClassName("heading")[0].classList.add("showClassName");
    document.getElementsByClassName("timerAndEndClass")[0].classList.add("showTimerInMobile");
}

function showMobileHomeScreen() {
    document.getElementsByClassName("hamburgerIcon")[0].classList.remove("hide");
    document.getElementsByClassName("closeBtn")[0].classList.add("hide");
    document.getElementsByClassName("codingalLogo")[0].classList.remove("hide");
    document.getElementsByClassName("heading")[0].classList.remove("showClassName");
    document.getElementsByClassName("timerAndEndClass")[0].classList.remove("showTimerInMobile");
}

function endClass() {
    togglePopup();
    clearInterval(window.timer);
    let endClassButton = document.getElementsByClassName("endClassButton")[0];
    endClassButton.disabled = true;
    endClassButton.classList.add("inactiveButton");
}

window.onload = function () {
    countDownTimer();
};