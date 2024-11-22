const $textarea = document.querySelector("#textarea");
const $totalCounter = document.querySelector("#total-counter");
const $remainingCounter = document.querySelector("#remaining-counter");

const textLimit = 10;

$remainingCounter.innerText = textLimit;
$totalCounter.textContent = 0;

// 1 решение
// $textarea.setAttribute("maxlength", textLimit);

// 2 решение
$textarea.removeAttribute("maxlength");

// $textarea.addEventListener("change", function () {
//     const text = $textarea.value;
//     $totalCounter.textContent = text.length;
// });
$textarea.addEventListener("input", function () {
  const text = $textarea.value;
  $totalCounter.textContent = text.length;
  $remainingCounter.textContent = textLimit - text.length;
  // $textarea.value = text.slice(0, textLimit - 1);

  if (text.length > textLimit) {
    $textarea.classList.add("error");
  } else {
    $textarea.classList.remove("error");
  }
});
