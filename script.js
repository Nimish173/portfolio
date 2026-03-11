new Typed("#typing", {
    strings: [
        "Android Developer",
        "Software Engineer",
        "AI Enthusiast",
        "Mobile App Builder"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});


particlesJS("particles-js", {

    particles: {

        number: { value: 60 },

        color: { value: "#38bdf8" },

        shape: { type: "circle" },

        opacity: { value: 0.5 },

        size: { value: 3 },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.3
        },

        move: {
            enable: true,
            speed: 2
        }

    }

});


window.onscroll = function () {

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progress").style.width = scrolled + "%";

};