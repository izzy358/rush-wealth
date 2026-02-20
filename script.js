(function () {
  var fromEl = document.getElementById("score-from");
  var toEl = document.getElementById("score-to");
  var fades = document.querySelectorAll(".fade");

  function animateValue(el, start, end, duration) {
    var startTime = performance.now();
    function frame(now) {
      var progress = Math.min((now - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(start + (end - start) * eased);
      el.textContent = value;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  animateValue(fromEl, 500, 500, 900);
  animateValue(toEl, 500, 750, 1800);

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
