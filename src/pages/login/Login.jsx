import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to Mickey!</h1>
          <p>
            Where memes are born, friends are made, and boredom goes to die.
            Sign up now and let's make your feed fun!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
