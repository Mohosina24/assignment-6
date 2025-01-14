const loadCategories = () => {

  fetch(" https://openapi.programming-hero.com/api/peddy/categories")
  .then(res => res.json())
  .then(data => displayCategories(data.categories))
  .catch(error => console.log(error));

};
// load all image 
const loadImage = () =>{

  fetch("https://openapi.programming-hero.com/api/peddy/pets")
  .then(res => res.json())
  .then(data => displayImage(data.pets))
  .catch(error => console.log(error))
}

 const  removeActiveClass = () =>{
      
        const buttons = document.getElementsByClassName("category-btn");
        console.log(buttons);
        for(let btn of buttons){
          btn.classList.remove("active");
        }

 }

// category id wise image show korabe

const loadCategoryImage = (id) => {
 
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
  .then(res => res.json())
  .then(data =>
    {
      
    removeActiveClass();
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add("active")
    displayImage(`data.category`)

  }
)
  .catch(error => console.log(error));

}


// display all image

const displayImage = (pets) =>{

  const imageContainer = document.getElementById('petImage')
  imageContainer.innerHTML = "";

  if(pets.length == 0){
    imageContainer.classList.remove("grid");
    imageContainer.innerHTML=`
    <div class="min-h-[300px] flex flex-col justify-center items-center gap-5" >
         <img src="images/error.webp"/>;
         <h2 class =" text-2xl font-bold text-center" >
         No Information Available
         </h2>
         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
    
    `;
    return;

  }else{
    imageContainer.classList.add("grid")

  }

  pets.forEach(image =>{
    console.log(image);
    const card = document.createElement("div");
    card.classList ="card border-2 border-gray-200"
    card.innerHTML=`
    
     <figure class="px-5 pt-5">
    <img
      src= ${image.image}
      class="rounded-xl" />
  </figure>
  <div class=" px-5 pt-3 items-start ">
    <h2 class="card-title font-bold ">${image.pet_name}</h2>
    <p  class="text-gray-600">
     Breed: ${image.breed}
    </p>
    <p class="text-gray-600">Birth: ${image.date_of_birth}</p>
    <p class="text-gray-600">
        Gender: ${image.gender}
    </p>
    <p class="text-gray-600">
        Price: ${image.price}$
    </p>
    <hr class="border-1 my-2"/>
    <div class="flex my-3 gap-2 gap-1  ">
      <a class="btn bg-white w-12 ">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#020812" d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"/></svg>
      </a>
      <a class="btn bg-white w-15 text-[#0E7A81] font-bold ">
         Adopt
      </a>
       <a class="btn bg-white w-15 text-[#0E7A81] font-bold ">
         Details
      </a>
     
      </div>
    </div>
  </div>
    
    
    
    `;
    imageContainer.append(card);
  })

}


// displayCategories btn

const displayCategories =(categories) => {
  const categoryContainer = document.getElementById('categories')

  categories.forEach((item) =>{
        console.log(item);
        const buttonContainer = document.createElement("div")
        buttonContainer.innerHTML = `
        
        <button id ="btn-${item.id}" class="btn px-20 py-3 border-1 border-green-700 rounded-full mx-5 category-btn" onclick="loadCategoryImage(${item.id})">
       
       <img class="w-6" src="${item.category_icon}"/>
       <a>${item.category}</a>

        </button>
        `
      categoryContainer.append(buttonContainer);
  })
}



loadCategories();
loadImage();