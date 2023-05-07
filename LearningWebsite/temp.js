// JavaScript code
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (let i = 0; i <= x.length; i++) {
    console.log(x.length);
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
      x[i].style.color = "red";
      x[i].style.display = "block";
    }
  }
}
