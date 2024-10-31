        const playSound = () => {
            const sound = new Audio('Crash.ogg'); 
            sound.play();
        };

        
        document.getElementById('changeColorBtn').addEventListener('click', () => {
            playSound();
        });

        document.getElementById('theme-toggle').addEventListener('click', () => {
            playSound();
        });