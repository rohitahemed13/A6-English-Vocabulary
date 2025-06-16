   document.getElementById("nav-hide").style.display ="none";
   document.getElementById("main-hide").style.display ="none";


document.getElementById("get-btn").addEventListener("click", function (event){
  event.preventDefault();
  const pin = document.getElementById("passward-btn").value;

  if( pin  ==="123456"){
    document.getElementById("nav-hide").style.display ="block";
    document.getElementById("main-hide").style.display ="block";
    document.getElementById("bannet-hide").style.display ="none";
   

  }else {
    alert("PIN IS INVALID");
  }
})



















// document.getElementById("get-btn").addEventListener("click", function(event) {
//   event.preventDefault();
//   const pin = document.getElementById("passward-btn").value;
//   if (pin === "123456") { // compare as string
//     document.getElementById("nav-hide").style.display = "none";
//   } else {
//     alert("PIN IS INVALID");
//   }
// });
