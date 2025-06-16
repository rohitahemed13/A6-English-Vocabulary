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
    alert("Invalid Pin");
  }
});


const learnVocabulary = async() => {
  const response =await fetch("https://openapi.programming-hero.com/api/levels/all");
  const data =await response.json();
learnValues(data.data);
}



     const learnValues = (element) => {
  const learnContainer = document.getElementById("lern-container");
 
  element.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${element.lessonName}</h2>

    `;

   learnContainer.appendChild(div); 
  });

 
};







learnVocabulary();



















// document.getElementById("get-btn").addEventListener("click", function(event) {
//   event.preventDefault();
//   const pin = document.getElementById("passward-btn").value;
//   if (pin === "123456") { // compare as string
//     document.getElementById("nav-hide").style.display = "none";
//   } else {
//     alert("PIN IS INVALID");
//   }
// });
