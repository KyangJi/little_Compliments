const compliment = document.getElementById("compliment");
const button = document.getElementById("newCompliment");

const compliments = [
  "You have a really nice vibe! ✨",
  "You're cooler than you think. 😎",
  "Your smile can brighten someone's day! ☀️",
  "You're doing better than you realize. 🌷",
  "You deserve good things in life. 💛",
  "You seem like someone who's fun to talk to! 😊",
  "Never underestimate how awesome you are. ⭐",
  "The world needs more people like you. 🌍",
  "I hope something good happens to you today! 🍀",
  "Your existence makes this world a little more interesting. 🌈",
  "Keep being your wonderfully unique self! 🦋",
  "Friendly reminder: you're pretty amazing. 💫",
  "You deserve a break and your favorite snack. 🍰",
  "You have main-character energy today. 🎬",
  "Someone out there appreciates your kindness. 🌻",
];

let previousIndex = -1;

button.addEventListener("click", () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * compliments.length);
  } while (compliments.length > 1 && randomIndex === previousIndex);

  previousIndex = randomIndex;

  compliment.style.opacity = "0";

  setTimeout(() => {
    compliment.textContent = compliments[randomIndex];
    compliment.style.opacity = "1";
  }, 200);
});
