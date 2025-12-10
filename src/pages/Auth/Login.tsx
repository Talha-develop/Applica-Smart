import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthFormWrapper from "../../components/auth/AuthFormWrapper";
import AuthFooter from "../../components/auth/AuthFooter";
import LoginForm from "../../components/auth/LoginForm";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

const Login = () => {
  // Redirect if already authenticated
  useAuthRedirect();

  return (
    <AuthLayout>
      <AuthHeader
        title="Welcome back!"
        description="Sign in to continue your job search automation"
      />

      <AuthFormWrapper>
        <LoginForm />
      </AuthFormWrapper>

      <AuthFooter
        text="Don't have an account?"
        linkText="Sign Up"
        linkTo="/signup"
      />
    </AuthLayout>
  );
};

export default Login;
