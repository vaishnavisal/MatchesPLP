function toggleContent() {
  var container = document.querySelector(".text-container");
  container.classList.toggle("expanded");

  var button = document.querySelector("button");
  button.textContent = container.classList.contains("expanded")
    ? "Show Less"
    : "Show More";
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


  function openMenu() {
    document.querySelector(".hamburger-menu").classList.add("open");
  }

  document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.remove("open");
  });