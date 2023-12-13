        // Создание элемента и добавление его в body
        let upButton = document.createElement('div');
        upButton.className = 'upbtn';
        document.body.appendChild(upButton);

        // Добавление обработчика события прокрутки
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                upButton.style.right = '-110px';
                upButton.style.bottom = '-120px';
            } else {
                upButton.style.right = '-220px';
                upButton.style.bottom = '-220px';
            }
        });

        // Добавление обработчика события для кнопки "наверх"
        upButton.addEventListener('click', function () {
            scrollToTop(500);
        });

        // Функция для плавной прокрутки вверх
        function scrollToTop(duration) {
            let start = window.pageYOffset,
                startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

            function scroll() {
                let currentTime = 'now' in window.performance ? performance.now() : new Date().getTime(),
                    timeElapsed = currentTime - startTime;

                window.scroll(0, easeInOutQuad(timeElapsed, start, -start, duration));

                if (timeElapsed < duration)
                    requestAnimationFrame(scroll);
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(scroll);
        }