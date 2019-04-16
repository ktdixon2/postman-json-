foodFactory = (foodItem) => {
    return `<h2>${foodItem.name}</h2>`
}

addFoodToDom = (foodAsHTML) => {
    const el = document.querySelector("#foodList");
        el.innerHTML += foodAsHTML;
}

// function getData () {
//     el.innerHTML = "";

    fetch("http://localhost:8888/food")
        .then(foods => foods.json())
        .then(parseFoods => {
            parseFoods.forEach(food => {
                const foodAsHTML = foodFactory(food);
                addFoodToDom(foodAsHTML);
            })
        })
    fetch("http://localhost:8888/drinks")
        .then(drinks => drinks.json())
        .then(parseDrinks => {
            parseDrinks.forEach(drink => {
                const foodAsHTML = foodFactory(drink);
                addFoodToDom(foodAsHTML);    
            });

        })
const getDataButton = document.getElementById("btn-getData");
getDataButton.addEventListener("click", () =>  getData("drinks"));   

const getDataButton2 = document.getElementById("btn-getData2");
getDataButton2.addEventListener("click", () => getData("food"));
// }

// getData ()



// const foodString = document.querySelector("#foodList") {
//      for (let i = 0; i < food.length; i++) {
//         const foods = foods[i]
//         foodlist.innerHTML += (parsedFoods)
//      }    

// }

