import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Form } from "react-router-dom";
import FormSignIn from "../components/Fragments/FormSignIn";

function SignIn() {
    return (
        <AuthLayouts>
            <FormSignIn />
        </AuthLayouts>
    );
}

export default SignIn;