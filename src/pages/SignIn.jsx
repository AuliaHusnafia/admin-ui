import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Form } from "react-router-dom";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function SignIn() {
    const { login } = useContext(AuthContext);
    const handleLogin = async (email, password) => {
        try {
            const { refreshToken } = await loginService(email, password);

            login(refreshToken);
        } catch (err) {
            console.error(err.msg);
        }
    };

    return (
        <AuthLayouts>
            <FormSignIn onSubmit={handleLogin} />
        </AuthLayouts>
    );
}

export default SignIn;