import { FcGoogle } from "react-icons/fc";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../FireBaseConfig";

import { useAuth } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {setUser} = useAuth()

  const handleLogin = async () => {
    
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user)
      if (user) {
        navigate("/game")
      }
    } catch(e) {
      alert("Erro ao fazer login");
      navigate("/");
    }
    // console.log(user)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950">
      <h1 className="text-white text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-white hover:bg-slate-300 text-blue-600 rounded-lg shadow-lg flex items-center justify-center gap-5"
      >
        <FcGoogle />
        Login com Google
      </button>
    </div>
  );
}

export default Login