import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";
import type { LoginFormData } from "../utils/validators/loginSchema";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const login = async (data: LoginFormData) => {
    setIsLoading(true);
    setError("");

    try {
      const { data: authData, error: authError } = await authService.signIn({
        email: data.email,
        password: data.password,
      });

      if (authError) {
        setError(authError);
        throw new Error(authError);
      }

      if (!authData?.user || !authData?.session) {
        throw new Error("Login failed - no session created");
      }

      // Small delay to ensure auth state is propagated
      await new Promise(resolve => setTimeout(resolve, 100));

      // Redirect to dashboard
      navigate("/dashboard", { replace: true });
      
      return authData;
    } catch (err: any) {
      const errorMessage = err.message || "Invalid email or password. Please try again.";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
