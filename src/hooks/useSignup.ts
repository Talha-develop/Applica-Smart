import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";
import type { SignupFormData } from "../utils/validators/signupSchema";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [needsEmailConfirmation, setNeedsEmailConfirmation] = useState(false);
  const navigate = useNavigate();

  const signup = async (data: SignupFormData) => {
    setIsLoading(true);
    setError("");
    setNeedsEmailConfirmation(false);

    try {
      const { data: authData, error: authError } = await authService.signUp({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
      });

      if (authError) {
        setError(authError);
        throw new Error(authError);
      }

      if (!authData?.user) {
        throw new Error("Sign up failed");
      }

      // Check if email confirmation is required
      if (authData.session === null && authData.user && !authData.user.confirmed_at) {
        setNeedsEmailConfirmation(true);
        setError("Account created! Please check your email to verify your account before logging in.");
        return authData;
      }

      // If session exists, user is logged in automatically
      navigate("/dashboard");
      
      return authData;
    } catch (err: any) {
      const errorMessage = err.message || "Failed to sign up. Please try again.";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error, needsEmailConfirmation };
};
