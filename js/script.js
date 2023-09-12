const prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  steps = document.querySelectorAll(".step"),
  progress = document.getElementById("progress");

let currentActive = 1;

const updateStepStatus = () => {
    steps.forEach((step, i) => {
      if(i < currentActive) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }

      const actives = document.querySelectorAll('.active');
      progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%';

      if(currentActive === steps.length) {
        next.disabled = true;
      } else if (currentActive === 1) {
        prev.disabled = true;
      } else {
        next.disabled = false;
        prev.disabled = false;
      }
    })
}

next.addEventListener("click", () => {
    currentActive++;

    if(currentActive === steps.length) {
        currentActive = steps.length;
    }

    updateStepStatus()
});

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive === 1) {
        currentActive = 1;
    }

    updateStepStatus()
});