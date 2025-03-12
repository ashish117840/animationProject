document.getElementById("animateBtn").addEventListener("click", function() {
  const box = document.querySelector(".box");
  box.style.transform = "translateY(-50px) scale(1.2)";
  setTimeout(() => {
      box.style.transform = "translateY(0) scale(1)";
  }, 500);
});