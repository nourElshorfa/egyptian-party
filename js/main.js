// let x = console.log($(".sideBar").innerWidth());
// console.log(x);

$("#x-Mark").click(function(){
    $(".sideBar").animate({left:-$(".sideBar").innerWidth()},400)
    $(".navsIcon").animate({left:0})
})

$(".navsIcon").click(function(){
    $(".sideBar").animate({left:0},400)
    $(".navsIcon").animate({left:$(".sideBar").innerWidth()})
})

$(".sideBar").animate({left:-$(".sideBar").innerWidth()})



$(".singerBar").click(function(){
   $(".singerQuote").not($(this).next()).slideUp(500)
   $(this).next().slideToggle(500)
})


let countDownDate = new Date("Oct 25, 2024 23:59:59").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#days").text(`${days} D`);
  $("#hours").text(`${hours} h`);
  $("#minutes").text(`${minutes} m`);
  $("#seconds").text(`${seconds} s`);
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timeOut .contant .container").innerHTML =
      "Party Now";
  }
}, 1000);


let maxWords = 100;

$("textarea").keyup(function(){
   let letter = $(this).val().length;
   console.log(letter);
   let letterLength = maxWords - letter ;
   $("#countNumber").text(letterLength)
   if (letterLength <= 0) {
    $("#countNumber").text(`Your Capcity is 100 Letter Only`)
   }

})

