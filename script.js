document.addEventListener("scroll", function() {
  const boxes = document.querySelectorAll(".box");
  const triggerBottom = window.innerHeight * 0.9;

  // Change background color on scroll
  if (window.scrollY > 50) {
    document.body.classList.add("visible-body");
  } else {
    document.body.classList.remove("visible-body");
  }

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("visible");
    }
  });
});

