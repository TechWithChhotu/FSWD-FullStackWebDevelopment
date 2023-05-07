// Get all the anchor tags
var myLinks = document.querySelectorAll(".Topic");
var currentIndex = 0;

// Add click event listeners to all anchor tags
myLinks.forEach(function (link, index) {
  link.addEventListener("click", function () {
    // Remove active class from all anchor tags
    myLinks.forEach(function (link) {
      link.classList.remove("active", "next", "previous");
    });

    // Add active class to the clicked anchor tag
    this.classList.add("active");

    // Determine the next and previous anchor tags
    var nextIndex = (index + 1) % myLinks.length;
    var prevIndex = (index - 1 + myLinks.length) % myLinks.length;

    // Add next and previous classes to the corresponding anchor tags
    myLinks[nextIndex].classList.add("next");
    myLinks[prevIndex].classList.add("previous");

    // Update the currentIndex variable
    currentIndex = index;
  });
});

/*===============================
 Copy text and edit text btn code
================================= */

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", function () {
  const textToCopy = document.getElementById("CopyText").innerText;

  // This line uses the Clipboard API's writeText() method to write the textToCopy variable to the clipboard.
  navigator.clipboard
    .writeText(textToCopy)

    .then(() => {
      // This line uses the Clipboard API's writeText() method to write the textToCopy variable to the clipboard.
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      // This code block is executed if the copy operation fails for some reason. It logs an error message to the console along with the error object.
      console.error("Failed to copy text: ", err);
    });
});

const myDiv = document.getElementById("CopyText");
const editButton = document.getElementById("editButton");

editButton.addEventListener("click", function () {
  if (myDiv.contentEditable === "false") {
    myDiv.contentEditable = "true";
    // editButton.textContent = "Save Text";

    myDiv.focus();
  } else {
    myDiv.contentEditable = "false";
    // editButton.textContent = "Edit Text";
  }
});

// jdoodle online IDE
<script
  src="https://www.jdoodle.com/assets/jdoodle-pym.min.js"
  type="text/javascript"></script>;
