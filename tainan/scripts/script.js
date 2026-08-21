// ボタンを取得
const buttons=document.querySelectorAll(".open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");
const image=document.getElementById("modalImage");
// 開く
buttons.forEach(function(button){

    button.addEventListener("click",function(){

        image.src=this.dataset.image;

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