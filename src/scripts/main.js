import "../assets/styles/main.scss"
import $ from "jquery"

console.info(`[${new Date().toISOString()}] Page loaded!`)

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "" && this.pathname === "/") {
            // Prevent default anchor click behavior
            event.preventDefault()
            // Store hash
            var hash = this.hash
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                600,
                () => {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash
                }
            )
        }
    })

    $(".cmd_sidenav_open").on("click", function(event) {
        $(".sidenav").addClass("sidenav_opened")
    })
    $(".cmd_sidenav_close").on("click", function(event) {
        $(".sidenav").removeClass("sidenav_opened")
    })
})
