// ボタンを取得
const buttons=document.querySelectorAll(".open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");
const image1=document.getElementById("modalImage1");
const image2=document.getElementById("modalImage2");
const title=document.getElementById("modalTitle");
const text=document.getElementById("modalText");
// 開く
buttons.forEach(function(button){

    button.addEventListener("click",function(){

        image1.src=this.dataset.image1;

        image2.src=this.dataset.image2;

        title.textContent=this.dataset.title;

        text.innerHTML=this.dataset.text;



   modal.style.display = "block";

    requestAnimationFrame(() => {
      modal.classList.add("show");
    });

  });

});

// 閉じる
function closeModal() {
  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
  }, 350); // transitionと同じ時間
}

close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// 背景クリック
overlay.addEventListener("click", function () {

  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
  }, 400);

});