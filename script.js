


let tag = document.getElementById('joke-display');
const fetchJoke = async () => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        const data = await response.json();
        if (data.joke) {
            tag.innerHTML = data.joke;
    } else {
        tag.innerHTML = `${data.setup} - ${data.delivery}`;
    }
        
        console.log(data);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}





