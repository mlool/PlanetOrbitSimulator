const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set the canvas size to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the two planets
const planet1 = {
  x: canvas.width / 2 - 100,
  y: canvas.height / 2,
  radius: 40,
  color: "red"
};

const planet2 = {
  x: canvas.width / 2 + 100,
  y: canvas.height / 2,
  radius: 20,
  color: "blue"
};

// Define the orbit radius and angle for each planet
const orbitRadius1 = 200;
const orbitRadius2 = 100;
let angle1 = 0;
let angle2 = 0;

// Define the orbit speed for each planet
const orbitSpeed1 = 0.01;
const orbitSpeed2 = 0.02;

// Draw function that updates the canvas on every animation frame
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate the new x and y position for each planet based on the orbit radius and angle
  planet1.x = canvas.width / 2 + Math.cos(angle1) * orbitRadius1;
  planet1.y = canvas.height / 2 + Math.sin(angle1) * orbitRadius1;
  planet2.x = canvas.width / 2 + Math.cos(angle2) * orbitRadius2;
  planet2.y = canvas.height / 2 + Math.sin(angle2) * orbitRadius2;

  // Draw the path of each planet
  ctx.beginPath();
  ctx.strokeStyle = planet1.color;
  ctx.arc(canvas.width / 2, canvas.height / 2, orbitRadius1, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = planet2.color;
  ctx.arc(canvas.width / 2, canvas.height / 2, orbitRadius2, 0, 2 * Math.PI);
  ctx.stroke();

  // Draw the two planets
  ctx.beginPath();
  ctx.fillStyle = planet1.color;
  ctx.arc(planet1.x, planet1.y, planet1.radius, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = planet2.color;
  ctx.arc(planet2.x, planet2.y, planet2.radius, 0, 2 * Math.PI);
  ctx.fill();

  // Update the angle for each planet
  angle1 += orbitSpeed1;
  angle2 += orbitSpeed2;

  // Call the draw function on the next animation frame
  requestAnimationFrame(draw);
}

// Start the animation
draw();