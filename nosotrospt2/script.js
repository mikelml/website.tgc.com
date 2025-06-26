document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".quadrant h2");

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', '').replace(',', ''));
        let count = 0;

        const increment = Math.ceil(target / 400); // velocidad de incremento

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = `+${count}`;
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = `+${target}`;
            }
        };

        updateCount();
    });
}); 