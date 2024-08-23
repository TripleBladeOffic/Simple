document.addEventListener("scroll", function() {
  const boxes = document.querySelectorAll(".box");
  const triggerPoint = window.innerHeight / 1.3;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    
    if (boxTop < triggerPoint) {
      setTimeout(() => {
        box.classList.add("visible");
      }, index * 200); // Delay each box appearance by 200ms
    }
  });
});
