const scrollUp=document.querySelector("#scroll-up");
        scrollUp.addEventListener("click", ()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior: "smooth"
            })
        })
                //este script maneja el menu de hamburguesa cuando la anchura de la pantalla baja de 720px
        const hamburguesa = document.querySelector("#menu-hamburguesa");
        const ul= document.querySelector("nav ul");
        const nav = document.querySelector("nav");
        hamburguesa.addEventListener("click", ()=>{
            ul.classList.toggle("show");
        });

        const navLink = document.querySelectorALL("nav-enlace");
            navLink.forEach((link) =>
                link.addEventListener("click", ()=> {ul.classList.remove("show");
        })
        );