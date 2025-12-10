import { supabase } from '../lib/supabase';

export interface SignUpData {
  email: string;
  password: string;
  fullName: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  // Sign up new user
  async signUp({ email, password, fullName }: SignUpData) {
    try {
      // 1. Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
          emailRedirectTo: undefined, // Disable email confirmation redirect for now
        },
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('User creation failed');

      // Check if email confirmation is required
      if (authData.session === null && authData.user && !authData.user.confirmed_at) {
        console.warn('Email confirmation required. User must verify email before logging in.');
      }

      // 2. Create profile in profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          name: fullName,
          email: email,
          education: [],
          skills: [],
          experience: [],
          hobbies: [],
        });

      if (profileError) {
        console.error('Profile creation error:', profileError);
        // Note: Auth user is already created, profile creation failure is logged but not thrown
      }

      return { data: authData, error: null };
    } catch (error: any) {
      console.error('Sign up error:', error);
      return { data: null, error: error.message || 'Sign up failed' };
    }
  },

  // Sign in existing user
  async signIn({ email, password }: LoginData) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Provide more helpful error messages
        if (error.message.includes('Email not confirmed')) {
          throw new Error('Please verify your email before logging in. Check your inbox for the confirmation link.');
        }
        if (error.message.includes('Invalid login credentials')) {
          throw new Error('Invalid email or password. Please check your credentials and try again.');
        }
        throw error;
      }

      if (!data.session) {
        throw new Error('Login failed. Please try again.');
      }

      return { data, error: null };
    } catch (error: any) {
      console.error('Sign in error:', error);
      return { data: null, error: error.message || 'Sign in failed' };
    }
  },

  // Sign out
  async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Sign out error:', error);
      return { error: error.message || 'Sign out failed' };
    }
  },

  // Get current session
  async getSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      return { data: data.session, error: null };
    } catch (error: any) {
      console.error('Get session error:', error);
      return { data: null, error: error.message };
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      return { data: user, error: null };
    } catch (error: any) {
      console.error('Get user error:', error);
      return { data: null, error: error.message };
    }
  },

  // Sign in with OAuth (Google, GitHub)
  async signInWithOAuth(provider: 'google' | 'github') {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('OAuth sign in error:', error);
      return { data: null, error: error.message || 'OAuth sign in failed' };
    }
  },

  // Reset password
  async resetPassword(email: string) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Password reset error:', error);
      return { error: error.message || 'Password reset failed' };
    }
  },

  // Update password
  async updatePassword(newPassword: string) {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Update password error:', error);
      return { error: error.message || 'Password update failed' };
    }
  },
};
