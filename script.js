function bin2dec() {
  //return parseInt(bin, 2);
  let bin = document.getElementById("input").value;
  let dec = parseInt(bin, 2); 
  let error = document.getElementById("error");
  
  for (let i= 0; i < bin.length; i++) {
    if ((bin[i] !== '1') && (bin[i] !== '0')) {
      document.getElementById("result").innerHTML = 'ERROR';
      error.innerHTML = 'Binary numbers contain only 1 and 0'; 
      error.classList.add("error-message_display_block");
      return;
    } 
    
    if (document.getElementById("input") === document.hasFocus()) {
      error.classList.remove("error-message_display_block");
    } else if (bin.length > 8) {
      document.getElementById("result").innerHTML = 'ERROR';
      error.innerHTML = 'Please, enter binary number that 8 or less digits'; 
      error.classList.add("error-message_display_block");
      return;
    } else {
      document.getElementById("result").innerHTML = dec;
    };
    error.classList.remove("error-message_display_block");
  } 
}

function hideErrorMessage() {
  document.getElementById("error").classList.remove("error-message_display_block");
}