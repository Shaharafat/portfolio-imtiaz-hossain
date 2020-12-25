function callBack(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("off-animation")
      entry.target.classList.add("on-animation");
    }
  });
}

export function createObserver(element) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  let observer = new IntersectionObserver(callBack, options);
  observer.observe(element);
}
