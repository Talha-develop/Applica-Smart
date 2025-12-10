import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { User, Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import type { Profile } from "../lib/supabase";
import { profileService } from "../services/profile.service";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshProfile = async () => {
    if (!user?.id) {
      console.warn("Cannot refresh profile: no user ID");
      return;
    }

    try {
      const { data, error } = await profileService.getProfile(user.id);
      if (error) {
        console.error("Error refreshing profile:", error);
        return;
      }
      if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.error("Failed to refresh profile:", error);
    }
  };

  useEffect(() => {
    let mounted = true;

    // Get initial session
    const initializeAuth = async () => {
      try {
        console.log("🔐 Initializing auth...");
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (!mounted) return;

        if (error) {
          console.error("❌ Error getting session:", error);
          setLoading(false);
          return;
        }

        console.log(
          "✅ Session retrieved:",
          session?.user?.email || "No session"
        );
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          // Fetch profile data (non-blocking)
          console.log("📋 Fetching profile for user:", session.user.id);
          profileService
            .getProfile(session.user.id)
            .then(({ data: profileData, error: profileError }) => {
              if (profileError) {
                console.warn("⚠️ Profile fetch error:", profileError);
              }
              if (mounted && profileData) {
                console.log("✅ Profile loaded:", profileData.email);
                setProfile(profileData);
              }
            })
            .catch((err) => {
              console.error("❌ Profile fetch failed:", err);
            });
        }
      } catch (error) {
        console.error("❌ Auth initialization error:", error);
      } finally {
        if (mounted) {
          console.log(
            "✅ Auth initialization complete, setting loading to false"
          );
          setLoading(false);
        }
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("🔄 Auth state changed:", event, session?.user?.email);

      if (!mounted) return;

      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        // Fetch profile data on auth change (non-blocking)
        profileService
          .getProfile(session.user.id)
          .then(({ data }) => {
            if (mounted && data) {
              console.log("✅ Profile loaded on auth change:", data.email);
              setProfile(data);
            }
          })
          .catch((err) => {
            console.error("❌ Profile fetch failed on auth change:", err);
          });
      } else {
        setProfile(null);
      }

      // CRITICAL: Always set loading to false after auth state change
      console.log("✅ Setting loading to FALSE after auth state change");
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  const value = {
    user,
    session,
    profile,
    loading,
    signOut,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
