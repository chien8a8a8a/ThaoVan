const textConfig = {
  text1: "He luu Thảo Vân",
  text2: "Ngày hôm nay của em thế  nào??? Xíu kể anh nghe nhé",
  text11:
    "Còn giờ thì nhắn anh đi thui",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // let audio_bg = new Audio("sound/sound.mp3");
  // audio_bg.play();
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  // $("#text3").html(textConfig.text3);
  // $("#text4").html(textConfig.text4);
  // $("#no").html(textConfig.text5);
  // $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content1").hide();
    $(".content2").hide();
    $(".content3").hide();
    $(".content4").hide();
    $(".content5").hide();
    // $(".screen1").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/doreveo.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
      confirmButtonText: "Okila"
    }).then(function () {
      Swal.fire({
        text: "Tập đàn đến bài nào rùi để hôm tới anh kiểm tra nhó",
        imageUrl: "img/cuteCat.jpg",
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: "Custom image",
        confirmButtonText: "Dạ"
      }).then(()=>{$(".content1").show(2000);
    
      setTimeout(screen1toscreen2, 4000);
    
    })
      
    });
  }

  function screen1toscreen2() {
    
    $(".content2").show(2000)
    $(".content1").hide()
    setTimeout(screen2toscreen3, 4000);

  }

  function screen2toscreen3() {
    
    $(".content3").show(2000)
    $(".content2").hide()
    setTimeout(screen3toscreen4, 4000);

  }

  function screen3toscreen4() {
    
    $(".content4").show(2000)
    $(".content3").hide()
    setTimeout(screen4toscreen5, 5000);

  }

  function screen4toscreen5() {
    
    $(".content5").show(2000)
    $(".content4").hide()
    // setTimeout(screen1toscreen2, 3000);

  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      width: 900,
      confirmButtonText: textConfig.text12,
      background: '#fff url("img/doremon_background.jpg")',
      title: textConfig.text11,
      confirmButtonColor: "#83d0c9",
      onClose: () => {
        window.location = "https://www.facebook.com/profile.php?id=100009453670596";
      },
    });

    // $("#txtReason").focus(function () {
    //   var handleWriteText = setInterval(function () {
    //     textGenerate();
    //   }, 10);
    //   $("#txtReason").blur(function () {
    //     clearInterval(handleWriteText);
    //   });
    // });
  });
});
