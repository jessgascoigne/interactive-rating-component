//update rating to thank you//
function thankYou() {
  if (yourRating !== null) {
    let ratingComponent = document.querySelector("#rating-component");
    ratingComponent.innerHTML = `<img src="images/illustration-thank-you.svg" alt="submission illustration"/>
     <h4>
     You selected ${yourRating} out of 5
   </h4>
   <h2>Thank you!</h2>
   <p>
     We appreciate you taking the time to give a rating. If you ever need
     more support, don’t hesitate to get in touch!
   </p>`;
  } else {
    alert("Please select a rating.");
  }
}

//handle submission//
document.querySelector("#submit-btn").addEventListener("click", thankYou);

//record rating//
let yourRating = null;
let rating1 = document.querySelector("#rating-1");
let rating2 = document.querySelector("#rating-2");
let rating3 = document.querySelector("#rating-3");
let rating4 = document.querySelector("#rating-4");
let rating5 = document.querySelector("#rating-5");

rating1.addEventListener("click", function rateOne() {
  yourRating = "1";
  rating1.classList.replace("non-active-rating", "active-rating");
  rating2.classList.replace("active-rating", "non-active-rating");
  rating3.classList.replace("active-rating", "non-active-rating");
  rating4.classList.replace("active-rating", "non-active-rating");
  rating5.classList.replace("active-rating", "non-active-rating");
});

rating2.addEventListener("click", function rateTwo() {
  yourRating = "2";
  rating2.classList.replace("non-active-rating", "active-rating");
  rating1.classList.replace("active-rating", "non-active-rating");
  rating3.classList.replace("active-rating", "non-active-rating");
  rating4.classList.replace("active-rating", "non-active-rating");
  rating5.classList.replace("active-rating", "non-active-rating");
});

rating3.addEventListener("click", function rateThree() {
  yourRating = "3";
  rating3.classList.replace("non-active-rating", "active-rating");
  rating1.classList.replace("active-rating", "non-active-rating");
  rating2.classList.replace("active-rating", "non-active-rating");
  rating4.classList.replace("active-rating", "non-active-rating");
  rating5.classList.replace("active-rating", "non-active-rating");
});

rating4.addEventListener("click", function rateFour() {
  yourRating = "4";
  rating4.classList.replace("non-active-rating", "active-rating");
  rating1.classList.replace("active-rating", "non-active-rating");
  rating2.classList.replace("active-rating", "non-active-rating");
  rating3.classList.replace("active-rating", "non-active-rating");
  rating5.classList.replace("active-rating", "non-active-rating");
});

rating5.addEventListener("click", function rateFive() {
  yourRating = "5";
  rating5.classList.replace("non-active-rating", "active-rating");
  rating1.classList.replace("active-rating", "non-active-rating");
  rating2.classList.replace("active-rating", "non-active-rating");
  rating3.classList.replace("active-rating", "non-active-rating");
  rating4.classList.replace("active-rating", "non-active-rating");
});
