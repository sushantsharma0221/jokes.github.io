const text = document.getElementById('text');
const nextBtn = document.getElementById('nextBtn');

const jokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const response = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await response.json();
        text.innerHTML = data.joke;
    }
    catch (err) {
        console.log(`the error is ${err}`);
    }
}
nextBtn.addEventListener('click', jokes);
jokes();