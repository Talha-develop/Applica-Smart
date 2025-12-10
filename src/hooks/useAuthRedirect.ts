import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useAuthRedirect = (redirectTo: string = "/dashboard") => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log("🔄 useAuthRedirect check:", { 
      hasUser: !!user, 
      userEmail: user?.email,
      loading, 
      redirectTo 
    });

    // Don't redirect while still loading auth state
    if (loading) {
      console.log("⏳ Still loading, not redirecting yet");
      return;
    }
    
    // If user is authenticated, redirect to dashboard
    if (user) {
      console.log("✅ User found, redirecting to:", redirectTo);
      navigate(redirectTo, { replace: true });
    } else {
      console.log("ℹ️ No user, staying on current page");
    }
  }, [user, loading, navigate, redirectTo]);
};
