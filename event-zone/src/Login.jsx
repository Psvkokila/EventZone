import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>EventZone Login</h1>

      <input placeholder="Email" /><br/><br/>
      <input type="password" placeholder="Password" /><br/><br/>

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;