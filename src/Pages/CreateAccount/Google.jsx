import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Btn, Span } from "./styled";

const Google = () => {
  const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google sign-in successful:", user);
      
      // Kullanıcı bilgilerini localStorage'a kaydedin
      localStorage.setItem('users', JSON.stringify(user));
      
      toast.success("Google sign-in successful!");
      
      // Ana sayfaya yönlendirme ve sayfayı yenileme
        navigate('/');
      window.location.reload();
      
    } catch (error) {
      // Hata yönetimi
      const errorMessage = error.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  return (
    <Btn type="button" onClick={handleGoogleSignIn} className="btn google">
      <svg
        version="1.1"
        width="20"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: "new 0 0 512 512" }}
      >
        <path
          style={{ fill: "#FBBB00" }}
          d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.631l25.409,58.184c-5.528,16.019-8.523,33.158-8.523,48.917C103.516,279.945,107.054,295.047,113.47,309.408z"
        />
        <path
          style={{ fill: "#518EF8" }}
          d="M507.527,208.176C509.327,218.518,512,239.82,512,256c0,19.22-2.862,42.021-7.732,61.352c-15.607,64.894-56.254,119.741-108.771,155.659l-87.748-4.475l-12.415-64.106c35.862-20.887,65.727-52.899,81.254-91.16H261.963v-93.354h245.564H507.527z"
        />
        <path
          style={{ fill: "#28B446" }}
          d="M396.729,472.234C355.002,502.3,306.038,512,256,512c-97.047,0-182.07-54.073-225.491-134.682l82.473-67.91c22.759,53.431,75.623,91.376,143.021,91.376c27.972,0,54.073-7.379,76.553-20.27L396.729,472.234z"
        />
        <path
          style={{ fill: "#F14336" }}
          d="M399.601,39.933l-81.82,67.097c-22.713-14.18-50.565-22.646-79.781-22.646c-69.114,0-127.809,44.291-149.071,109.249l-81.924-68.172h-0.011C74.522,54.195,159.232,0,256,0C306.268,0,354.22,15.725,399.601,39.933z"
        />
      </svg>
      <Span>Sign in with Google</Span>
    </Btn>
  );
};

export default Google;
