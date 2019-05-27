function greenBorder() {
   document.getElementById("colorDiv").style.background = "-webkit-linear-gradient(top, slategray,  rgb(96, 221, 190))";
}

function pinkBorder() {
   document.getElementById("colorDiv").style.background = "-webkit-linear-gradient(top, slategray, pink)";
}

function textColorChange() {
   // document.getElementById("textColor1").style.color = "purple";
   // document.getElementById("textColor2").style.color = "purple";
   // document.getElementsByClassName("postContent").style.color = "purple";

   // I did not realize I had to iterate through to make this work!
   var colorChange1 = document.getElementsByClassName("postContent");
   var colorChange2 = document.getElementsByClassName("postOnlyContent");

   for (var i = 0, length = colorChange1.length; i < length; i++) {
      colorChange1[i].style.color = "purple";
   }
   for (var i = 0, length = colorChange2.length; i < length; i++) {
      colorChange2[i].style.color = "purple";
   }
}