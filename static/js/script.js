// greet = () => { alert('You clicked a button')};

greet = () => {
  const name = document.querySelector('.user-name');
  const weight = parseFloat(document.querySelector('.weight-input').value);
  const height = parseFloat(document.querySelector('.height-input').value);
  let result_disp = document.querySelector('.result-display');
  let color = document.querySelector('.status-color');
  let bmi_status = document.querySelector('.status');

  const bmi = weight / (height * height);
  result_disp.innerHTML = `BMI: ${bmi.toFixed(2)}`;

  if (isNaN(weight) || isNaN(height)) {
    result_disp.innerHTML = 'Please enter valid numbers for weight and height.';
    color.style.backgroundColor = 'white';
    result_disp.style.fontSize = '20px';
    result_disp.style.color = 'red';
    return;
  }
  if (bmi < 18.5) {
    color.style.backgroundColor = 'red';
    result_disp.style.color = 'black';
    bmi_status.innerHTML = 'Underweight!';
    result_disp.style.fontSize = '40px';
  } if (bmi >= 18.5 && bmi < 25) {
    color.style.backgroundColor = 'green';
    result_disp.style.color = 'black';
    bmi_status.innerHTML = 'Normal';
    result_disp.style.fontSize = '40px';
  } if (bmi >= 25 && bmi < 30) {
    color.style.backgroundColor = 'purple';
    result_disp.style.color = 'black';
    bmi_status.innerHTML = 'Overweight!';
    result_disp.style.fontSize = '40px';
  } if (bmi >= 30 && bmi < 35) {
    color.style.backgroundColor = 'pink';
    result_disp.style.color = 'black';
    bmi_status.innerHTML = 'Obese - Class 1';
    result_disp.style.fontSize = '40px';
  } if (bmi > 35) {
    color.style.backgroundColor = 'crimson';
    result_disp.style.color = 'black';
    bmi_status.innerHTML = 'Obese - Class 2';
    result_disp.style.fontSize = '40px';
  }
}  