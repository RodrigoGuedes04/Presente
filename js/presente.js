document.addEventListener(
    "DOMContentLoaded",
    () => {

        const audio =
            document.getElementById(
                "audioSecreto"
            );

        const botao =
            document.getElementById(
                "botaoPlay"
            );

        const barra =
            document.getElementById(
                "barraProgresso"
            );

        const atual =
            document.getElementById(
                "tempoAtual"
            );

        const total =
            document.getElementById(
                "tempoTotal"
            );

        const player =
            document.getElementById(
                "playerSecreto"
            );


        if (
            !audio ||
            !botao ||
            !barra
        ) {

            return;

        }


        function formatarTempo(
            segundos
        ) {

            if (
                !Number.isFinite(
                    segundos
                )
            ) {

                return "0:00";

            }


            const minutos =
                Math.floor(
                    segundos / 60
                );


            const resto =
                Math.floor(
                    segundos % 60
                );


            return (
                minutos +
                ":" +
                resto
                    .toString()
                    .padStart(2, "0")
            );

        }


        botao.addEventListener(
            "click",
            () => {

                if (
                    audio.paused
                ) {

                    audio.play();

                } else {

                    audio.pause();

                }

            }
        );


        audio.addEventListener(
            "play",
            () => {

                botao.textContent =
                    "❚❚";

                player.classList.add(
                    "tocando"
                );

            }
        );


        audio.addEventListener(
            "pause",
            () => {

                botao.textContent =
                    "▶";

                player.classList.remove(
                    "tocando"
                );

            }
        );


        audio.addEventListener(
            "loadedmetadata",
            () => {

                total.textContent =
                    formatarTempo(
                        audio.duration
                    );

            }
        );


        audio.addEventListener(
            "timeupdate",
            () => {

                if (
                    !audio.duration
                ) {
                    return;
                }


                const porcentagem =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;


                barra.value =
                    porcentagem;


                atual.textContent =
                    formatarTempo(
                        audio.currentTime
                    );

            }
        );


        barra.addEventListener(
            "input",
            () => {

                if (
                    !audio.duration
                ) {
                    return;
                }


                audio.currentTime =
                    (
                        barra.value / 100
                    ) *
                    audio.duration;

            }
        );


        audio.addEventListener(
            "ended",
            () => {

                botao.textContent =
                    "▶";

                barra.value =
                    0;

                player.classList.remove(
                    "tocando"
                );

            }
        );

    }
);