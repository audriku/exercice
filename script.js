$(document).ready(function () {
  $("#toggler").click(function () {
    $(".menu").toggleClass("active");
    $(".toggle").toggleClass("open");
  });
});

function closeNonLanguageDropdowns(exceptId = null) {
  const dropdowns = [
    { id: "drop2", class: "show2" },
    { id: "drop3", class: "show3" },
    { id: "drop4", class: "show4" }
  ];

  dropdowns.forEach(({ id, class: className }) => {
    const el = document.getElementById(id);
    if (el && id !== exceptId) {
      el.classList.remove(className);
    }
  });
}

function Language() {
  document.getElementById("drop").classList.toggle("show");
}

function Drop2() {
  const el = document.getElementById("drop2");
  const isActive = el.classList.contains("show2");
  closeNonLanguageDropdowns();
  if (!isActive) el.classList.add("show2");
}

function Drop3() {
  const el = document.getElementById("drop3");
  const isActive = el.classList.contains("show3");
  closeNonLanguageDropdowns();
  if (!isActive) el.classList.add("show3");
}

function Drop4() {
  const el = document.getElementById("drop4");
  const isActive = el.classList.contains("show4");
  closeNonLanguageDropdowns();
  if (!isActive) el.classList.add("show4");
}