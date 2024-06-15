document.addEventListener("DOMContentLoaded", function () {
  const profileCard = document.getElementById("profile-card");
  const image = profileCard.querySelector("img");

  profileCard.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.

    // Adjust these values to control the effect's intensity and direction
    const intensity = 20;
    const xMove = ((x - rect.width / 2) / rect.width) * intensity;
    const yMove = ((y - rect.height / 2) / rect.height) * intensity;

    image.style.transform = `translate(${xMove}px, ${yMove}px)`;
  });

  profileCard.addEventListener("mouseleave", () => {
    image.style.transform = "translate(0px, 0px)"; // Reset position on mouse leave
  });
});
