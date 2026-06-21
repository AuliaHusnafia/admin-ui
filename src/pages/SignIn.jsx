import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Form } from "react-router-dom";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService"
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignIn() {
    const { login } = useContext(AuthContext);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const handleLogin = async (email, password) => {
        try {
            const { refreshToken } = await loginService(email, password);

            login(refreshToken);
        } catch (err) {
            setSnackbar({ open: true, message: err.msg, severity: "error" });
        }
    };

    return (
        <AuthLayouts>
            <FormSignIn onSubmit={handleLogin} />

            <AppSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />
        </AuthLayouts>
    );
}

export default SignIn;