document.addEventListener('DOMContentLoaded', function(){
   //ハンバーガーメニュー
  document.getElementById("menuButton").addEventListener("click", function(){
    this.classList.toggle("active");
    document.getElementById("spHeader-menu").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
    document.getElementById("title").classList.toggle("active");
    document.getElementById("spHeader").classList.toggle("active");

  })
});
