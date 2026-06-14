import AuthLayout from "../components/Layouts/AuthLayouts";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleRegister = async (name, email, password) => {
    try {
      await registerService(name, email, password);
      // Jika berhasil mendaftar, langsung arahkan ke halaman login
      navigate("/login");
    } catch (error) {
      console.error(error.msg);
    }
  };

  return (
    <AuthLayout title="Create an account">
      <FormSignUp onSubmit={handleRegister} />
    </AuthLayout>
  );
};

export default SignUp;