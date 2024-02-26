const forBox = document.querySelectorAll(".for-box-you");
const YouContent = document.querySelectorAll(".foryou-lg-content-item");
const forImg = document.querySelectorAll(".forImg");
const sideLeftBar = document.querySelector(".sideLeftBar");
const trigger = document.getElementById('trigger');

console.log(sideLeftBar);
console.log(trigger);

for (let i = 0; i < YouContent.length; i++) {
  YouContent[i].addEventListener("click", () => {
    // forImg[i].classList.toggle("for-modal");
    forBox[i].classList.toggle("for-modal");
  });
}

trigger.addEventListener('click', () => {

  if (sideLeftBar.classList.toggle('open')) {
    sideLeftBar.classList.add('open')
  } else {
    sideLeftBar.classList.remove('open')
  }
})
