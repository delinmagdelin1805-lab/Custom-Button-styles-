/* Custom Button Styles */

const buttons =
    document.querySelectorAll("button");

/* Button Click Animation */

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform =
            "scale(0.95)";

        setTimeout(() => {

            button.style.transform =
                "";

        }, 150);
    });
});