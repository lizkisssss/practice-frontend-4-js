const navEl = document.querySelector(".js-nav");

let currentBtn = null;

navEl.addEventListener("click", (event) => {
    if(event.target.nodeName !== "BUTTON") {
        return 
    }

 // 1
//   const activeBtn = document.querySelector(".btn.active");
//   if (activeBtn) {
//     activeBtn.classList.remove("active");
//   }
//  event.target.classList.add("active");

// 2 with variable currentBtn
  if (currentBtn){
    currentBtn.classList.remove("active");
  }
  event.target.classList.add("active");
  currentBtn = event.target;

  console.log(event.target.dataset.value);
});