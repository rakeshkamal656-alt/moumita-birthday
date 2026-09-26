```javascript
const DRIVE_VIDEO_ID = "1c4y-jZe_V0VNQ4Es21mCz-o9e13K3OST";

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(id);

    if (nextScreen) {
        nextScreen.classList.add("active");
        window.scrollTo(0, 0);
    }
}

// Simple built-in sound — no external audio file needed
function playSound(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        if (type === "success") {
            oscillator.frequency.value = 700;
        } else if (type === "wrong") {
            oscillator.frequency.value = 180;
        } else {
            oscillator.frequency.value = 450;
        }

        oscillator.type = "sine";
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + 0.18
        );

        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.18);
    } catch (error) {
        console.log("Sound error:", error);
    }
}


// START
function startGame() {
    playSound("click");
    showScreen("level1");
}


// MISSION 1
function heartFound() {
    playSound("success");
    createConfetti();

    alert("Yessss! You found the special heart! ❤️");

    setTimeout(function () {
        showScreen("level2");
    }, 500);
}


// MISSION 2
function showMemoryQuestion() {
    playSound("click");

    const emoji = document.getElementById("memoryEmoji");
    const text = document.getElementById("memoryText");
    const button = document.getElementById("memoryButton");
    const question = document.getElementById("memoryQuestion");

    if (emoji) emoji.style.display = "none";

    if (text) {
        text.innerText = "Okayyy... let's test your memory! 😏";
    }

    if (button) button.style.display = "none";

    if (question) question.classList.remove("hidden");
}


function memoryAnswer(answer) {

    if (answer === "🎈") {

        playSound("success");
        createConfetti();

        alert("Correct! Your memory is actually good! 😂🧠");

        setTimeout(function () {
            showScreen("level3");
        }, 500);

    } else {

        playSound("wrong");

        alert("Oops! Try again, Birthday Girl! 😂");
    }
}


// MISSION 3
function funnyAnswer() {

    playSound("success");

    alert("HAHAHA! 😂 We both know the answer!");

    setTimeout(function () {
        showScreen("level4");
    }, 500);
}


// FINAL QUESTION
function finalAnswer() {

    playSound("success");

    showScreen("secret");
}


// SECRET CODE
function checkCode() {

    const input = document.getElementById("secretInput");
    const message = document.getElementById("codeMessage");

    if (!input || !message) return;

    const code = input.value.trim().toUpperCase();

    if (code === "MOUMITA") {

        playSound("success");
        createConfetti();

        message.innerText = "🔓 Correct! Surprise unlocked! ❤️";

        setTimeout(function () {
            showScreen("gift");
        }, 1200);

    } else {

        playSound("wrong");

        message.innerText =
            "❌ Wrong code! Hint: It's her name 😜";
    }
}


// GIFT BOX
function openGift() {

    playSound("success");
    createConfetti();

    const gift = document.getElementById("giftBox");

    if (gift) {
        gift.style.animation = "none";
        gift.style.transform = "scale(1.25) rotate(5deg)";
    }

    setTimeout(function () {

        showScreen("videoScreen");

        const videoFrame =
            document.getElementById("driveVideo");

        if (videoFrame) {
            videoFrame.src =
                "https://drive.google.com/file/d/" +
                DRIVE_VIDEO_ID +
                "/preview";
        }

    }, 1000);
}


// CONFETTI
function createConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "❤️",
        "💕",
        "✨",
        "🌸",
        "🎂",
        "💖"
    ];

    for (let i = 0; i < 45; i++) {

        const confetti = document.createElement("div");

        confetti.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-40px";

        confetti.style.fontSize =
            15 + Math.random() * 25 + "px";

        confetti.style.zIndex = "99999";
        confetti.style.pointerEvents = "none";

        confetti.style.transition =
            "transform 3s linear, opacity 3s";

        document.body.appendChild(confetti);

        setTimeout(function () {

            confetti.style.transform =
                "translateY(" +
                (window.innerHeight + 150) +
                "px) rotate(" +
                Math.random() * 720 +
                "deg)";

            confetti.style.opacity = "0";

        }, 50);

        setTimeout(function () {
            confetti.remove();
        }, 3200);
    }
}


// ENTER KEY FOR SECRET CODE
document.addEventListener("DOMContentLoaded", function () {

    const input =
        document.getElementById("secretInput");

    if (input) {

        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                checkCode();
            }

        });
    }
});
```
