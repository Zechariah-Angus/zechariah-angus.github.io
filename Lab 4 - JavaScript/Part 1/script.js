// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

const characters = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"] 

const places = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
]

const events = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and slithered away"
] 


// Partial return random string function

function returnRandomStoryString() {

    // Adding in the three constants
    // Got TypeError: characters.randomValueFromArray is not a funtion because I was treating the raw text strings as objects: characters.randomValueFromArray(characters) to randomValueFromArray(characters)
    const randomCharacter = randomValueFromArray(characters);
    const randomPlaces = randomValueFromArray(places);
    const randomEvents = randomValueFromArray(events);
   
    // Have to use concatenation to get the text to work properly, originally I just used "" + "" which doesn't work when embedding into text.
    let storyText = 

   `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlaces}, they stared in horror for a few moments, then ${randomEvents}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {

    // Needed so it can create new random story, can't be equal to storyText will only generate once.
    let newStory = returnRandomStoryString();

    if (customName.value !== "") {
        const name = customName.value;
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + " stones";
        const temperature = Math.round((94-32)*1.8) + " Celsius";
        newStory = newStory.replace("300 pounds", weight);
        newStory = newStory.replace("94 Fahrenheit", temperature)
    }

    // TODO: replace "" with the correct expression
    story.textContent = newStory;
    story.style.visibility = "visible";
}
