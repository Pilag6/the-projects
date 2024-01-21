const cookiesContainer = document.querySelector(".cookies-container");
const cookiesBtns = document.querySelectorAll(".cookies-btns");

const cookiesExecute = () => {
    // Check if the cookie is set or not (Accept or Decline)
    // If the cookie is set by clicking (Accept) stop showing the message
    // If the cookie is set by clicking (Decline) stop showing the message and don't show it again

    if (
        document.cookie.includes("websiteName") ||
        localStorage.getItem("cookiesDeclined")
    )
        return;

    // When the page is loaded add the active class to the cookies container and show the message
    cookiesContainer.classList.add("active");

    // When the user clicks on the accept or decline button remove the active class from the cookies container and hide the message
    cookiesBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // Prevent the default behavior of the button just in case
            e.preventDefault();

            // Remove the active class from the cookies container when the user clicks on the accept or decline button
            cookiesContainer.classList.remove("active");

            if (e.target.classList.contains("btn-accept")) {
                // Set cookie for 30 days => 60 = 1 minute, 60 = 1 hour, 24 = 1 day, 30 = 1 month
                document.cookie =
                    "cookieBy=websiteName; max-age=" + 60 * 60 * 24 * 30;
            } else {
                // Don't set cookies and store the value in the local storage to check if the user declined the cookies or not
                localStorage.setItem("cookiesDeclined", "true");
            }
        });
    });
};

window.addEventListener("load", cookiesExecute);
