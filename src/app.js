const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Slingo",
  "Antwoman",
  "Mask",
  "Tiger",
  "Cap Shield",
  "Catwoman",
  "Fish",
  "Hulk",
  "Deadpool",
  "Black Panther",
  "Doctor Strange",
  "Thor",
  "Manhunter",
  "Yellowjacket",
  "Thanos",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  // Create players using for loop
  // Type your code here
  players.forEach((player, index) => {
    detailedPlayers.push({
      name: player,
      strength: getRandomStrength(), 
      image: "images/super-" + (index +1) + ".png",
      type: index % 2 == 0 ? "hero" : "villain",
      id: index + 1,
    });
  });
  return detailedPlayers;
};
// console.log(initPlayers)

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  return Math.ceil(Math.random() * 100);
};
// console.log(getRandomStrength())

