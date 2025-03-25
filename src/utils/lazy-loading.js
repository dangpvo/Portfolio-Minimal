const lazyLoading = function () {
  const lazyImgs = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("loading");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    },
    {
      root: null, //entire page should be observe
      rootMargin: "0px", //default
      threshold: 0, //how much the image will be visible at the moment we observe
    }
  );

  lazyImgs.forEach(function (img) {
    observer.observe(img);
  });
};

export default lazyLoading;
