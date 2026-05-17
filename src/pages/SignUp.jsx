import AuthLayout from "../components/Layouts/AuthLayouts";
import FormSignUp from "../components/Fragments/FormSignUp";

const SignUp = () => {
  return (
    <AuthLayout title="Create an account">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUp;