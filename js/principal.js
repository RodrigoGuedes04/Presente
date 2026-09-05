document.addEventListener(
    "DOMContentLoaded",
    () => {

        const fundo =
            document.getElementById("coracoes");

        if (!fundo) {
            return;
        }


        const elementos = [
            "❤️",
            "❤️",
            "❤️",
            "💕",
            "💗",
            "♡",
            "♡",
            "✦",
            "✧",
            "⋆",
            "❀"
        ];


        function sortear(lista) {

            return lista[
                Math.floor(
                    Math.random() * lista.length
                )
            ];

        }


        function criarParticula() {

            const item =
                document.createElement("span");

            item.classList.add(
                "particula"
            );

            item.textContent =
                sortear(elementos);


            item.style.left =
                Math.random() * 100 + "vw";


            item.style.fontSize =
                (
                    9 +
                    Math.random() * 19
                ) + "px";


            item.style.animationDuration =
                (
                    6 +
                    Math.random() * 8
                ) + "s";


            item.style.opacity =
                0.2 +
                Math.random() * 0.5;


            fundo.appendChild(
                item
            );


            setTimeout(
                () => item.remove(),
                15000
            );

        }


        /*
        Mais partículas que antes.
        */

        setInterval(
            criarParticula,
            420
        );


        /*
        Já cria algumas ao abrir
        para não começar vazio.
        */

        for (
            let i = 0;
            i < 15;
            i++
        ) {

            setTimeout(
                criarParticula,
                i * 120
            );

        }

    }
);