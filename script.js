//your JS code here. If required.
function rotateLine() {
  const line = document.getElementById('line');
  let rotation = 0;

  function animateRotation() {
    rotation += 1;
    line.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    requestAnimationFrame(animateRotation);
  }

  animateRotation();
}
rotateLine();