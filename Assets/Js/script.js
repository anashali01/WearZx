// id="number_up"
var finalValue = 120; // The final value to be displayed
var startValue = 0;
var time;
var x;
var numString ='';
var valueLength = finalValue.toString().length;

//to increase speed, reduce the value of "i"
for (var i = 10; i < valueLength; i++) { 
  numString += '1';
}
x = Number(numString);
function upValue(){
  if(startValue <= finalValue){
    setTimeout(function(){
      document.getElementById('number_up').innerText = startValue;
      if(x > 0){
        startValue = startValue + x;
        time = 1;
      }else{
        startValue = startValue + 1;
        time = 5;
      }
      upValue();
    },time);
  }else{
    setTimeout(function(){
      document.getElementById('number_up').innerText = finalValue;
    },time);
  }
}
upValue();


const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}
const element = document.querySelectorAll(".badge__char");
const step = 360/element.length;

element.forEach((elem, i) => {
  elem.style.setProperty('--char-rotate', (i * step) + 'deg');
})

const foo = (360 / 7);

for (i = 0; i <= 7; i++) {
  console.log((i * foo) + 'deg');
}

