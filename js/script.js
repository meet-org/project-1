/* counter scripts starts */
const countersElem = document.querySelectorAll(".counter");

countersElem.forEach(function (counterElem) {
   let counterType = counterElem.dataset.type;
   let counterTarget = counterElem.dataset.target;
   let counterNumber = 0;

   let counter = setInterval(function () {
      if (counterType === "int") {
         counterNumber++;
         counterElem.innerText = counterNumber + "k";
      } else {
         counterNumber += 0.1;
         counterElem.innerText = counterNumber.toFixed(1);
      }

      if (counterNumber >= counterTarget) {
         clearInterval(counter);
      }
   }, 10);
});
/* counter scripts ends */
