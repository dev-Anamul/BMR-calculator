// ! all the dom elements captured here
const submitButton = document.getElementById('submit_btn');
const form = document.getElementById('form');
const resultDiv = document.querySelector('.result');

const submitFunction = (e) => {
  e.preventDefault();
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const gender = document.getElementById('gender').value;
  const activity = document.getElementById('activity').value;
  const initialInputAlet = document.querySelector('.input_alert');
  if (initialInputAlet) {
    initialInputAlet.remove();
  }

  if (!age || !height || !weight || !gender || !activity) {
    const wrnMsg = `<div class="alert alert-danger input_alert" role="alert">Please fillup all the filelds.</div>`;
    form.insertAdjacentHTML('afterbegin', wrnMsg);
  } else {
    const inputAlet = document.querySelector('.input_alert');
    if (inputAlet) {
      inputAlet.remove();
    }

    // ! male functionality block
    if (gender === 'male') {
      //! benedict formula
      // For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
      //   const BMR = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;

      //! muffin formula
      //   BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + 5 (kcal / day)

      // ! calculate the calories
      const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      const targetCalories = Math.round(BMR * activity);
      const caloriesLoaseFat = Math.round(targetCalories * 0.9);
      const caloriesGainMucle = Math.round(targetCalories * 1.26);

      // ! calculate protein
      const weightInPound = Math.round(weight * 2.20462);
      const minimunProtein = Math.round(weightInPound * 0.72);
      const generallyProtein = Math.round(weightInPound * 1);
      const maximumProtein = Math.round(weightInPound * 1.5);

      // ! output html
      const outputCard = `<div>
     <div class="card my-3">
       <div class="card-body">
         <h5 class="card-title">Your Daily Calories Target For :</h5>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Lose Fat : </span>
           <span>${caloriesLoaseFat}</span>
         </p>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Maintain Weight : </span>
           <span>${targetCalories}</span>
         </p>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Gain Muscle : </span>
           <span>${caloriesGainMucle}</span>
         </p>
       </div>
     </div>
     <div class="card">
       <div class="card-body">
         <h5 class="card-title">Your Daily Protein Target</h5>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Minimum Protein : </span>
           <span>${minimunProtein}g</span>
         </p>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Recommended Protein : </span>
           <span>${generallyProtein}g</span>
         </p>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Maximum Protein : </span>
           <span>${maximumProtein}g</span>
         </p>
       </div>
     </div>
   </div>`;

      // ! render html to the dom
      resultDiv.innerHTML = outputCard;
    }
    // ! female functionality block
    if (gender === 'female') {
      // benedict formula
      // For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)
      //   const BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

      // muffin formula
      //   BMR (kcal / day)= 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) – 161 (kcal / day)

      //! calory calculation
      const BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      const targetCalories = Math.round(BMR * activity);
      const caloriesLoaseFat = Math.round(targetCalories * 0.9);
      const caloriesGainMucle = Math.round(targetCalories * 1.26);

      // ! protein calculation
      const weightInPound = Math.round(weight * 2.20462);
      const minimunProtein = Math.round(weightInPound * 0.72);
      const generallyProtein = Math.round(weightInPound);
      const maximumProtein = Math.round(weightInPound * 1.5);

      // ! output html
      const outputCard = `<div>
     <div class="card my-3">
       <div class="card-body">
         <h5 class="card-title">Your Daily Calories Target For :</h5>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Lose Fat : </span>
           <span>${caloriesLoaseFat}</span>
         </p>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Maintain Weight : </span>
           <span>${targetCalories}</span>
         </p>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Gain Muscle : </span>
           <span>${caloriesGainMucle}</span>
         </p>
       </div>
     </div>
     <div class="card">
       <div class="card-body">
         <h5 class="card-title">Your Daily Protein Target</h5>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Minimum Protein : </span>
           <span>${minimunProtein}g</span>
         </p>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Recommended Protein : </span>
           <span>${generallyProtein}g</span>
         </p>
         <p
           class="card-text d-flex justify-content-between px-5 border p-2"
         >
           <span class="fw-bold">Maximum Protein : </span>
           <span>${maximumProtein}g</span>
         </p>
       </div>
     </div>
   </div>`;

      // ! render html to the dom
      resultDiv.innerHTML = outputCard;
    }
  }

  console.log(
    `age: ${age} height: ${height} weight: ${weight} gender: ${gender} activity: ${activity}`
  );
};

submitButton.addEventListener('click', submitFunction);
