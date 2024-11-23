import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
    phone:""
  })

  const [errors, setErrors] = useState({})
  const [showPopup, setShowPopup] = useState(false)

  const handleChange =(e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = {}

  if(!formData.username.trim()){
    validationErrors.username = "username is required";
  } else if (/\s/.test(formData.username)) {
    validationErrors.username = "No spaces are allowed in the username";
  }

 
  if (!formData.email.trim()) {
    validationErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    validationErrors.email = "Email is not valid";
  } else if (/\s/.test(formData.username)) {
    validationErrors.username = "No spaces are allowed in the email";
  }
  

  if(!formData.password.trim()){
    validationErrors.password = "password is required";
  }else if(formData.password.length < 6){
    validationErrors.password = "password should be st least 6 character";
  } else if (/\s/.test(formData.username)) {
    validationErrors.username = "No spaces are allowed in the password";
  }else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.password)) {
    validationErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }
  

  if(!formData.confirmpassword.trim()){
    validationErrors.confirmpassword = " confirm password is required";
  }else if(formData.confirmpassword !== formData.password){
    validationErrors.confirmpassword = "password is not matched by confirm password";
  } else if (/\s/.test(formData.username)) {
    validationErrors.username = "No spaces are allowed in the confirm password";
  }

  if(!formData.phone.trim()){
    validationErrors.phone = "phone number is required";
  }else if(!/^[0-9]{10}$/.test(formData.phone)){
    validationErrors.phone = "phone number is not valid";
  } else if (/\s/.test(formData.username)) {
    validationErrors.username = "No spaces are allowed in the phone number";
  }else if (formData.phone.length !== 10) {
    validationErrors.phone = "Phone number must be exactly 10 digits";
  }
  
 setErrors(validationErrors)

  if(Object.keys(validationErrors).length == 0){
    setShowPopup(true)

    // alert(`Form Submitted Successfully
    //   Name: ${formData.username}
    //   Email: ${formData.email}
    //   Password: ${formData.password}
    //   Phone Number: ${formData.phone}
    //   `)
  }
}
 const handleClosePopup = () => {
  setShowPopup(false);
 }


 
  return (
    <>
        <div className="container mt-5">
      
          <h2 className='fw-bold'>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-bold">Name:</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              autoComplete="on" 
              name="username" 
              id="username" 
              className="form-control" 
              onChange={handleChange}
              />
              {errors.username && <span style={{color:'red'}}>{errors.username}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email:</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              autoComplete="on" 
              name="email" 
              id="email" 
              className="form-control" 
              
              onChange={handleChange}
              />
              {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Password:</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              autoComplete="on" 
              name="password" 
              id="password" 
              className="form-control" 
              
              onChange={handleChange}
              />
              {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label fw-bold">Confirm Password:</label>
            <input 
              type="confirmpassword"
              placeholder="Enter your confirm password" 
              autoComplete="on" 
              name="confirmpassword" 
              id="confirmpassword" 
              className="form-control" 
              
              onChange={handleChange}
              />
              {errors.confirmpassword && <span style={{color:'red'}}>{errors.confirmpassword}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-bold">Phone No.:</label>
            <input 
              type="tel" 
              placeholder="Enter your phone number" 
              autoComplete="on" 
              name="phone" 
              id="phone" 
              className="form-control" 
              
              onChange={handleChange} 
              />
              {errors.phone && <span style={{color:'red'}}>{errors.phone}</span>}
          </div>
          <input type="submit" className="btn btn-primary" value="Submit"/>
        </form>
      </div>

      {/*Modal for displaying form data*/}

      <div className={`modal fade ${showPopup ? 'show' : ''}`} tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden={!showPopup} style={{ display: showPopup ? 'block' : 'none' }}>
        <div className="modal-dialog" role='popup'>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">Form Data</h5>
              <button type="button" className="btn-close" onClick={handleClosePopup}></button>
            </div>
            <div className="modal-body">
              <p><strong>Name:</strong> {formData.username}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Password:</strong> {formData.password}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      </div>















    </>
  )
}

export default App
