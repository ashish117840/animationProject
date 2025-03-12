//add new feature -button
document.getElementById("animateBtn").addEventListener("click", function() {
  const dynamicText = document.getElementById("dynamicText");
  dynamicText.textContent = "You clicked the button!";
  dynamicText.style.color = "white";
  dynamicText.style.fontSize = "1.5rem";
  dynamicText.style.transition = "color 0.5s ease-in-out, font-size 0.5s ease-in-out";
});