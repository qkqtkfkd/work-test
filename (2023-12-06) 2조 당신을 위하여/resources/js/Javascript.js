const contentName = document.querySelectorAll(".body_name");
const showContent = document.querySelectorAll(".body_content");
const sideLeftBar = document.querySelector(".sideLeftBar");
const trigger = document.getElementById('trigger');

console.log(sideLeftBar);
console.log(trigger);

for (let i = 0; i < contentName.length; i++) {
  contentName[i].addEventListener("click", () => {
    for (let j = 0; j < contentName.length; j++) {
      showContent[j].classList.remove("show");
    }
    showContent[i].classList.add("show");
  });
}

trigger.addEventListener('click', () => {

  if (sideLeftBar.classList.toggle('open')) {
    sideLeftBar.classList.add('open')
  } else {
    sideLeftBar.classList.remove('open')
  }
})
