// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Pop-up alert for contact links
  document.querySelector("#contact").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      alert(`You are about to visit ${event.target.textContent}.`);
    }
  });
  