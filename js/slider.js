document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    arrows: true,
    pagination: true,
    pauseOnHover: true,
  }).mount();
});
