function irAContacto() {
    // Ajusta esto según el ID o ruta de tu sección de contacto
    window.location.href = "#contacto";
}

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".nosotros");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
            }
        },
        {
            threshold: 0.3,
        }
    );

    observer.observe(section);
});