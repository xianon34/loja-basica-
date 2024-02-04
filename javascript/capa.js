document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cta").addEventListener("click", function() {
        window.location.href = "home.html"; // Redireciona para a página principal
    });

    setTimeout(function() {
        document.getElementById("instruction").classList.remove("hidden");
        document.getElementById("instruction").style.opacity = "1";
    }, 1000); // Adiciona atraso para a animação iniciar após 1 segundo
});
