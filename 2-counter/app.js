// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");

// querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
// NodeList objects are collections of nodes - Although NodeList is not an Array, it is possible to iterate over it with forEach()
const btns = document.querySelectorAll(".btn");

// So we're able to iterator over all the Nodes that contain  "btn"
btns.forEach(function (btn) {
  // add an event listner to each Node
  btn.addEventListener("click", function (e) {
    // identifies the current target for the event -> then we grab the classList associated with our target, in this case "btn"
    // btn decrease - btn reset - btn increase
    const styles = e.currentTarget.classList;

    // from there we just implement the logic
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
