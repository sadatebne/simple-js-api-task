const loadMeal = (searchValue) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => disPlay(data.meals));
}
const disPlay = meals => {
    const mealCon = document.getElementById('meals-container')
    mealCon.innerHTML = ''
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

          <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
          Details</button>
        </div>
       
        `
        mealCon.appendChild(mealDiv)
    });
}

const searchBtn = () => {
    const getText = document.getElementById('text').value
    loadMeal(getText);
    //console.log(getText.value)
}

const loadMealDetails=(getId)=>{
  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getId}`
  fetch (url)
  .then(res=>res.json())
  .then(data=>showModalMeals(data.meals[0]))
}

const showModalMeals=show=>{
const modalHead=document.getElementById('mealDetailsLabel')
modalHead.innerText=show.strMeal;
const modalDiv=document.getElementById('modalbody')
modalDiv.innerHTML=`
<img class="img-fluid" src="${show.strMealThumb}">
`
}


loadMeal('fish');