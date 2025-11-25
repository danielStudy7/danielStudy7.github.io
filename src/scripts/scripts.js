document.addEventListener('DOMContentLoaded', () => {
    const elementsLeft = document.querySelectorAll(".reveal-from-left");
    const elementsRight = document.querySelectorAll(".reveal-from-right");
    const elementsDown = document.querySelectorAll(".reveal-from-down");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elementsLeft.forEach(el => observer.observe(el));
    elementsRight.forEach(el => observer.observe(el));
    elementsDown.forEach(el => observer.observe(el));
})