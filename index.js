const RamenMenu = [
    {
        "id": 1,
        "name": "Shoyu ramen",
        "restaurant": "Ichiran",
        "image": "/image/shoyu.jpg",
        "rating": 4.2,
        "comment": "The services are superb!"
    
    },
    {
        "id": 2,
        "name": "Nirvana ramen",
        "restaurant": "Shinka",
        "image": "/image/nirvana.jpg",
        "rating": 4.8,
        "comment": "Best meal l have ever had!"
    
    },
    {
        "id": 3,
        "name": "Naruto ramen",
        "restaurant": "Menyya",
        "image": "/image/naruto.jpg",
        "rating": 2.5,
        "comment": "Poor quality of services!"
    
    },
    {
        "id": 4,
        "name": "Kojiro ramen",
        "restaurant": "Kwamin",
        "image": "/image/kojiro.jpg",
        "rating": 3.8,
        "comment": "Among the best l have seen!"
    
    },
    {
        "id": 5,
        "name": "Gyukotsu ramen",
        "restaurant": "Ramen-ya",
        "image": "/image/gyukotsu.jpg",
        "rating": 4.0,
        "comment": "Hope to come again!"
    
    },
];

const ramenInfoDiv = document.getElementById("Ramen info");
const ramenMenuDiv = document.getElementById("Ramen options");
const reviewForm = document.getElementById("Review Form");
const overallRatingElement = document.querySelector(".overall-rating");
const commentElement = document.querySelector(".comment");
const detailImage = document.querySelector(".detail-image");
const nameElement = document.querySelector(".name");
const restaurantElement = document.querySelector(".restaurant");


function displayRamenMenu () {
    ramenMenuDiv.innerHTML = '';
    RamenMenu.forEach((ramen) => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.className = "ramen-image";

        img.addEventListener("click", () => handleClick(ramen));
        ramenMenuDiv.appendChild(img);
    });
}

function handleClick(ramen) {
    
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    nameElement.textContent = ramen.name;
    restaurantElement.textContent = ramen.restaurant;
    overallRatingElement.textContent = ramen.rating;
    commentElement.textContent = ramen.comment;
}    
function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(reviewForm);
    const newRamen = {
        id: RamenMenu.length + 1,
        name: formData.get("Dish"),
        restaurant: formData.get("Restaurant"),
        image: formData.get("Image") || "/image/default.jpg",
        rating: parseFloat(formData.get("rating")),
        comment: formData.get("comment")
    };
    RamenMenu.push(newRamen);
    displayRamenMenu();

    reviewForm.reset();
}
function setupEventListeners () {
reviewForm.addEventListener("submit", handleFormSubmit) 
}
document.addEventListener("DOMContentLoaded",
    function () {
        displayRamenMenu();
        setupEventListeners();
        
        addSubmitListener();
    });
