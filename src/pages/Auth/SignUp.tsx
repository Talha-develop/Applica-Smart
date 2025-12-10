import AuthLayout from "../../components/auth/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthFormWrapper from "../../components/auth/AuthFormWrapper";
import AuthFooter from "../../components/auth/AuthFooter";
import SignUpForm from "../../components/auth/SignUpForm";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

const SignUp = () => {
  // Redirect if already authenticated
  useAuthRedirect();

  return (
    <AuthLayout>
      <AuthHeader
        title="Create your account"
        description="Join thousands of job seekers automating their applications"
      />

      <AuthFormWrapper>
        <SignUpForm />
      </AuthFormWrapper>

      <AuthFooter
        text="Already have an account?"
        linkText="Sign In"
        linkTo="/login"
      />
    </AuthLayout>
  );
};

export default SignUp;
