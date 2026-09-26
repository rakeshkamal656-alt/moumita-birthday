```javascript
/* ================================= */
/* GOOGLE DRIVE VIDEO */
/* ================================= */

const DRIVE_VIDEO_ID =
    "1c4y-jZe_V0VNQ4Es21mCz-o9e13K3OST";


/* ================================= */
/* SCREEN CONTROL */
/* ================================= */

const screens =
    document.querySelectorAll(".screen");


function showScreen(id) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    const target =
        document.getElementById(id);

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================= */
/* SOUND */
/* ================================= */

function playSound(type) {

    try {

        let sound;

        if (type === "click") {

            sound =
                document.getElementById(
                    "clickSound"
                );

        }

        if (type === "success") {

            sound =
                document.getElementById(
                    "successSound"
                );

        }

        if (type === "wrong") {

            sound =
                document.getElementById(
                    "wrongSound"
                );

        }

        if (sound) {

            sound.currentTime = 0;

            sound.play().catch(() => {});

        }

    } catch (error) {

        console.log(error);

    }
}


/* ================================= */
/* START */
/* ================================= */

function startGame() {

    playSound("click");

    showScreen("level1");

}


/* ================================= */
/* HEART HUNT */
/* ================================= */

function heartFound() {

    playSound("success");

    createConfetti();

    alert(
        "Yessss! You found the special heart! ❤️"
    );

    setTimeout(() => {

        showScreen("level2");

    }, 500);
}


/* ================================= */
/* MEMORY */
/* ================================= */

function showMemoryQuestion() {

    playSound("click");

    document.getElementById(
        "memoryEmoji"
    ).style.display = "none";

    document.getElementById(
        "memoryText"
    ).innerText =
        "Okayyy... let's test your memory! 😏";

    document.getElementById(
        "memoryButton"
    ).style.display = "none";

    document.getElementById(
        "memoryQuestion"
    ).classList.remove("hidden");

}


function memoryAnswer(answer) {

    if (answer === "🎈") {

        playSound("success");

        createConfetti();

        alert(
            "Correct! Your memory is actually good! 😂🧠"
        );

        setTimeout(() => {

            showScreen("level3");

        }, 500);

    } else {

        playSound("wrong");

        alert(
            "Oops! Try again, Birthday Girl! 😂"
        );

    }

}


/* ================================= */
/* FUNNY MCQ */
/* ================================= */

function funnyAnswer() {

    playSound("success");

    alert(
        "HAHAHA! 😂 We both know the answer!"
    );

    setTimeout(() => {

        showScreen("level4");

    }, 500);

}


/* ================================= */
/* FINAL QUESTION */
/* ================================= */

function finalAnswer() {

    playSound("success");

    showScreen("secret");

}


/* ================================= */
/* SECRET CODE */
/* ================================= */

function checkCode() {

    const input =
        document.getElementById(
            "secretInput"
        )
        .value
        .trim()
        .toUpperCase();


    const message =
        document.getElementById(
            "codeMessage"
        );


    if (input === "MOUMITA") {

        playSound("success");

        message.innerText =
            "🔓 Correct! Surprise unlocked! ❤️";

        createConfetti();

        setTimeout(() => {

            showScreen("gift");

        }, 1200);

    } else {

        playSound("wrong");

        message.innerText =
            "❌ Wrong code! Hint: It's her name 😜";

    }

}


/* ================================= */
/* OPEN GIFT */
/* ================================= */

function openGift() {

    playSound("success");

    const gift =
        document.getElementById(
            "giftBox"
        );


    gift.style.animation = "none";

    gift.style.transform =
        "scale(1.25) rotate(5deg)";


    createConfetti();


    setTimeout(() => {

        showScreen("videoScreen");


        /*
         * Google Drive preview player
         */

        const videoFrame =
            document.getElementById(
                "driveVideo"
            );


        videoFrame.src =
            "https://drive.google.com/file/d/"
            + DRIVE_VIDEO_ID
            + "/preview";


    }, 1000);

}


/* ================================= */
/* CONFETTI */
/* ================================= */

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


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.innerText =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random()
            * 100
            + "vw";


        confetti.style.top =
            "-40px";


        confetti.style.fontSize =
            (
                15
                +
                Math.random()
                * 25
            )
            + "px";


        confetti.style.zIndex =
            "99999";


        confetti.style.pointerEvents =
            "none";


        confetti.style.transition =
            "transform 3s linear, opacity 3s";


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.style.transform =
                "translateY("
                +
                (
                    window.innerHeight
                    + 150
                )
                +
                "px) rotate("
                +
                (
                    Math.random()
                    * 720
                )
                +
                "deg)";


            confetti.style.opacity =
                "0";


        }, 50);


        setTimeout(() => {

            confetti.remove();

        }, 3200);

    }

}


/* ================================= */
/* ENTER KEY FOR SECRET CODE */
/* ================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const input =
            document.getElementById(
                "secretInput"
            );


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key
                    ===
                    "Enter"
                ) {

                    checkCode();

                }

            }
        );

    }
);
```
