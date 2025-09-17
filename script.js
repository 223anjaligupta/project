// GSAP Animations
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0 });
gsap.from(".home-text h1", { duration: 1.2, x: -100, opacity: 0, delay: 0.3 });
gsap.from(".home-image img", { duration: 1.2, x: 100, opacity: 0, delay: 0.5 });

// Scroll Animations
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Typing Effect
new Typed("#typing", {
  strings: ["Frontend Developer 💻", "Designer 🎨", "Coder 👩‍💻", "Tech Enthusiast 🚀"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
