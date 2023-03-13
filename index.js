const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("Joke")


const apiKey = "vC5yQ9LrgN5LKWwsi5TRkg==gEnMwa8TtpGXTbjh";

const options = {
    method: "GET",

     headers: { "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"

async function getJoke() {
try {
      jokeEl.innerText = "Updating...";
   btnEl.disabled = true;
   btnEl.innerText = "Loading...";

const response = await fetch(apiURL,options);
const data = await response.json();

btnEl.disabled = false;
btnEl.innerText = "Tell me a joke";

jokeEl.innerText = data[0].joke;

} catch (error) {
 jokeEl.innerText = "An error happened, please try again later!"  
 
btnEl.disabled = false;
btnEl.innerText = "Tell me a joke"; 
}
 
}

btn.addEventListener("click", getJoke);
