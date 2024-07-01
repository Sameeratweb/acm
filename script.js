// below code is for performing for performing moving effect below about section
window.addEventListener("wheel", function(dets) {
    if (dets.deltaY > 0) {
        gsap.to(".marque", {
            x: "translateX(-200%)",
            duration: 4,
            repeat: -1,
            ease: "none"
        });
    } else {
        gsap.to(".marque", {
            x: "translateX(0%)",
            duration: 4,
            repeat: -1,
            ease: "none"
        });
    }
});

