function Validation(values){
    let error={}
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email===""){
        error.email="Name should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email didn't Match"
    }
    else{
        error.email=""
    }

    if(values.password===""){
        error.password="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password didn't Match"
    }
    else{
        error.password=""
    }
    return error;
}

export default Validation;





// function Validation(values) {
//     const errors = {};
  
//     // Email validation
//     if (!values.email) {
//       errors.email = "Email should not be empty";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
//       errors.email = "Invalid email format";
//     }
  
//     // Password validation
//     if (!values.password) {
//       errors.password = "Password should not be empty";
//     } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(values.password)) {
//       errors.password = "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit no special characters allowe";
//     }
  
//     return errors;
//   }
  
//   export default Validation;
  