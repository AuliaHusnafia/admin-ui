import AuthLayout from "../components/Layouts/AuthLayouts";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppSnackbar from "../components/Elements/AppSnackbar";

const SignUp = () => {
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name, email, password) => {
    try {
      await registerService(name, email, password);
      setSnackbar({ open: true, message: "Register Berhasil", severity: "success" });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setSnackbar({ open: true, message: error.msg || "Register failed", severity: "error" });
    }
  };

  return (
    <AuthLayout title="Create an account">
      <FormSignUp onSubmit={handleRegister} />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
};

export default SignUp;