let inputValue = document.getElementById("validation-input");

let totalLength = inputValue.getAttribute("data-length");
let intTotallength = parseInt(totalLength, 10);

inputValue.oninput = function () {
  if (inputValue.value.length === intTotallength) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  }
  if (inputValue.value.length === 0) {
    inputValue.classList.remove("valid");
    inputValue.classList.remove("invalid");
  }
  if (
    inputValue.value.length !== intTotallength &&
    inputValue.value.length !== 0
  ) {
    inputValue.classList.add("invalid");
  }
};
