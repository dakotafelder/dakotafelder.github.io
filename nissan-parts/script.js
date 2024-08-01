document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("speedSlider");
    const html = document.documentElement;
  
    slider.addEventListener("input", function() {
      const speed = 50 - slider.value + 1; // Invert the direction
      html.style.animationDuration = `${speed}s`;
    });
  });