const loadProduct = async () => {
 const response = await fetch("https://openapi.programming-hero.com/api/level/1");
    const data = await response.json();
   showData(data.data)
  
};

const loadCategories = async () => {
const response = await fetch("https://openapi.programming-hero.com/api/level/2");
    const data = await response.json();
  showData(data.data);
 
};

const loadProduct3  = async () => {
const response = await fetch("https://openapi.programming-hero.com/api/level/3");
    const data = await response.json();
  showData(data.data);
 
};


const loadProduct4 = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/level/4");
    const data = await response.json();
  showData(data.data);
}

const loadProduct5 = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/level/5");
    const data = await response.json();
  showData(data.data);
}


const loadProduct6 = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/level/6");
    const data = await response.json();
  showData(data.data);
}





const showData = (element) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // ✅ Clear previous cards

  element.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="  w-95 mx-auto  space-y-3 bg-[#FFFFFF] shadow-sm">
  <div class="card-body">
    <h2 class="card-title flex justify-center text-[32px] font-bold">${element.word}</h2>
    <p class="text-[18px] font-normal">Meaning /Pronounciation</p>
    <h2 class="text-[22px] font-medium">"${element.meaning}/ ${element.pronunciation}"</h2>
     <div class="flex justify-around">
      <i id="info-btn" class="fa-solid fa-circle-info text-green-500 "></i>
      <i class="fa-solid fa-volume-high text-blue-500"></i>
     </div>
    </div>
 <figure>

 </figure>
 
</div>

    `;

  cardContainer.appendChild(div); // ✅ Add each card
  });

  hideLoadingMessage(); // Hide the "count" message
};


   const showDatas = (element) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; 
   const div = document.createElement("div");

    div.innerHTML = `
    <img class="mb-4 w-16 h-16"  src="assets/alert-error.png" alt="">
       <p class="text-[13.38] font-normal">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
       <h2 class="text-[34] font-medium">নেক্সট Lesson এ যান</h2>
    `;
    cardContainer.appendChild(div); 
 
  hideLoadingMessage(); 
};


const showLoadingMessage = () => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = `
    <div id="count" class="p-16 col-span-3">
      <p class="text-[13.5px] font-normal">Loading lesson content, please wait...</p>
      <h2 class="text-[34.5px] font-medium animate-pulse">Loading...</h2>
    </div>
  `;
};

const showData4 = (element) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; 

  const div = document.createElement("div");

 
  div.classList.add(
    "flex", 
    "flex-col", 
    "items-center", 
    "justify-center", 
    "text-center", 
    "h-[300px]"
  );

  div.innerHTML = `
    <img class="mb-4 w-16 h-16" src="assets/alert-error.png" alt="">
    <p class="text-[13.38px] font-normal mb-2">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি। </p>
    <h2 class="text-[34px] font-medium">নেক্সট Lesson এ যান </h2>
  `;

  cardContainer.appendChild(div);

  hideLoadingMessage(); 
};



const ids = ["lesson1", "lesson2", "lesson3","lesson4", "lesson5", "lesson6","lesson7"];

  ids.forEach(id => {
    const btn = document.getElementById(id);

    btn.addEventListener("click", () => {
      
      ids.forEach(i => {
        document.getElementById(i).classList.remove("bg-blue-500", "text-white");
        document.getElementById(i).classList.add("bg-gray-300");
      });

      
      btn.classList.remove("bg-gray-300");
      btn.classList.add("bg-blue-500", "text-white");
    });
  });




  document.getElementById("btn-scroll").addEventListener("click", function () {

  window.scrollBy({ top: 1000, behavior: "smooth" });

});

 document.getElementById("btn-logout").addEventListener("click", function(){
    document.getElementById("bannet-hide").style.display ="block";
     document.getElementById("nav-hide").style.display ="none";
 })
  
   


const hideLoadingMessage = () => {
  const count = document.getElementById("count");
  if (count) {
    count.style.display = "none";
  }
};







