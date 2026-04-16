import { Link } from "react-router-dom";

function Register(){

  return(
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>Register Page</h1>

      <input placeholder="Name"/><br/><br/>
      <input placeholder="Email"/><br/><br/>
      <input type="password" placeholder="Password"/><br/><br/>

      <button>Register</button>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  )

}

export default Register;