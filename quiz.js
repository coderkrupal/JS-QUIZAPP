const  buttton =  document.querySelector('#submit_btn');
const li = document.querySelectorAll('#opt');
const input = document.querySelectorAll('#check');
 
 
  buttton.addEventListener('click',(e)=>{
    let totalscore = 0;
    let allAnswered = true; 
    const questionNames = ['question1','question2','question3','question4']; 
    questionNames.forEach(name => {
      const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
      if (selectedOption) {
        // Add the selected value to the total score
        totalscore += parseInt(selectedOption.value);
      } else {
        allAnswered = false; // If no option is selected for this question
      }
    });
      window.location.href = `results.html?score=${totalscore}`;
  });