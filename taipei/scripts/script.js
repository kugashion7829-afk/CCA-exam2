// ボタンを取得
const buttons = document.querySelectorAll(".open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");
const image = document.getElementById("modalImage");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");
const time = document.getElementById("modalTime");

// 開く
buttons.forEach(function (button) {

  button.addEventListener("click", function () {

    image.src = this.dataset.image;
    title.textContent = this.dataset.title;
    text.textContent = this.dataset.text;
    time.innerHTML = this.dataset.time;

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

//ローディング画面　スクロール不可
//document.body.classList.add("loading");

//window.addEventListener("load", () => {

  //const loading = document.getElementById("loading");

  //setTimeout(() => {

    //loading.style.opacity = "0";

   // setTimeout(() => {
     // loading.style.display = "none";
    // document.body.classList.remove("loading");
 //   }, 800);

//  }, 2000);

//});