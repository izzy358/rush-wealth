(function () {
  var fades = document.querySelectorAll(".fade");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  fades.forEach(function (el) { observer.observe(el); });
}());
