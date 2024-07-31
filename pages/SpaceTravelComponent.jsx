import React, { useEffect } from "react";
import "./style.css"; // Assuming you moved the styles here

function SpaceTravelComponent() {
  useEffect(() => {
    const canvas = document.getElementById("2dcanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");

    let numStars = 1000;
    const stars = [];
    let speed = 0.5;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    function createStar() {
      let x, y;
      do {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      } while (Math.hypot(x - mouseX, y - mouseY) < 3);

      return {
        x,
        y,
        z: Math.random() * canvas.width,
        o: Math.random(),
        size: Math.random() * 3 + 2, // Random size between 3 and 6
      };
    }

    function populateStars() {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
      }
    }

    

    function updateStars() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        star.z -= speed;

        if (star.z <= 0) {
          Object.assign(star, createStar());
          star.z = canvas.width;
        }

        const sx = (star.x - mouseX) * (canvas.width / star.z) + mouseX;
        const sy = (star.y - mouseY) * (canvas.width / star.z) + mouseY;
        const size = (1 - star.z / canvas.width) * star.size;
        context.fillStyle = "white";
        context.fillRect(sx, sy, size, size);
      }

      requestAnimationFrame(updateStars);
    }

    populateStars();
    updateStars();
  }, []);

  return (
    <div id="main">
      {/* Your HTML structure adapted to JSX */}
      <div style={{ zIndex: -1 }}>
        <canvas id="2dcanvas"></canvas>
      </div>
    </div>
  );
}

export default SpaceTravelComponent;
