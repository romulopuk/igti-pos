window.addEventListener('load', () => {
    const timer = document.querySelector('#timer');
    let count = 0;

    const interval = setInterval(() => {
        timer.textContent = ++count;

        if (count === 15) {
            this.clearInterval(interval);
        } 
        else if (count %5 === 0) {
            setTimeout(() => {
                timer.textContent = count + ',5';
            }, 500);
        }
    }, 1000);

    
})