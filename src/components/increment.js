export function increaseNumberAnimation(elementId, endNumber, totalDuration = 2000) {
  const element = document.getElementById(elementId);

  if (!element) return;

  const animationRunning = JSON.parse(element.dataset.animationRunning ?? false);

  if (animationRunning) return;

  element.dataset.animationRunning = true;

  const speed = totalDuration / endNumber;
  incNbrRec(0, endNumber, element, speed);
}

function incNbrRec(currentNumber, endNumber, element, speed) {
  if (currentNumber <= endNumber) {
    element.innerHTML = currentNumber;
    setTimeout(() => {
      incNbrRec(currentNumber + 1, endNumber, element, speed);
    }, speed);
  } else {
    element.dataset.animationRunning = false;
  }
}
