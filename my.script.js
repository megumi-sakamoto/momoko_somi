
  // pc用トップ
    // var images = [ 'url(img/photograph-2015-06_pc.JPG)', 'url(img/photograph-2017-01-02_pc.jpg)', 'url(img/photograph-2017-02-04_pc.JPG)' ];
    // $(function(){
    // var backgroundRandom = function(){
    //   var number = Math.floor(Math.random() * images.length);
    //   var selectedImg = images[number];
    //   $('#randomImg-pc').css('background-image',selectedImg);
    // };
    // setInterval(backgroundRandom, 5000);
    // });
  
    // モバイル用トップ
      // var images = [ 'url(img/randomImg-01_sp.JPG)', 'url(img/randomImg-02_sp.JPG)', 'url(img/randomImg-03_sp.JPG)' ];
      // $(function(){
      // var backgroundRandom = function(){
      //   var number = Math.floor(Math.random() * images.length);
      //   var selectedImg = images[number];
      //   $('#randomImg-sp').css('background-image',selectedImg);
      // };
      // setInterval(backgroundRandom, 5000);
      // });

document.addEventListener('DOMContentLoaded', function(){
  //背景
  if (window.matchMedia( "(max-width: 740px)" ).matches) {
    var images = [ 'url(img/randomImg-01_sp.JPG)', 'url(img/randomImg-02_sp.JPG)', 'url(img/randomImg-03_sp.JPG)' ];
  $(function(){
  var backgroundRandom = function(){
    var number = Math.floor(Math.random() * images.length);
    var selectedImg = images[number];
    $('#randomImg-sp').css('background-image',selectedImg);
  };
  setInterval(backgroundRandom, 5000);
  });
  } else {
    var images = [ 'url(img/photograph-2015-06_pc.JPG)', 'url(img/photograph-2017-01-02_pc.jpg)', 'url(img/photograph-2017-02-04_pc.JPG)' ];
    $(function(){
    var backgroundRandom = function(){
      var number = Math.floor(Math.random() * images.length);
      var selectedImg = images[number];
      $('#randomImg-pc').css('background-image',selectedImg);
    };
    setInterval(backgroundRandom, 5000);
    });
  }
  // ハンバーガーメニュー
  document.getElementById("menuButton").addEventListener("click", function(){
    this.classList.toggle("active");
    document.getElementById("spHeader-menu").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
    document.getElementById("title").classList.toggle("active");
    document.getElementById("spHeader").classList.toggle("active");

  })
});
  






      
