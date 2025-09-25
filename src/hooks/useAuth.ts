import { useState, useEffect } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase, testSupabaseConnection } from '../lib/supabase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Test connection first
        const connectionTest = await testSupabaseConnection();
        if (!connectionTest.success) {
          setError(`Connection failed: ${connectionTest.error}`);
          setLoading(false);
          return;
        }

        // Get initial session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          setError(sessionError.message);
        } else {
          setSession(session);
          setUser(session?.user ?? null);
          setError(null);
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
        setError(err instanceof Error ? err.message : 'Authentication initialization failed');
      } finally {
        setLoading(false);
      }
    };

    initAuth();
    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      setError(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async (): Promise<{ error: AuthError | null }> => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}`
        }
      });
      return { error };
    } catch (err) {
      console.error('Google sign in error:', err);
      return { error: new Error(err instanceof Error ? err.message : 'Google sign in failed') as AuthError };
    }
  };

  const signInWithEmail = async (email: string, password: string): Promise<{ error: AuthError | null }> => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    } catch (err) {
      console.error('Email sign in error:', err);
      return { error: new Error(err instanceof Error ? err.message : 'Email sign in failed') as AuthError };
    }
  };

  const signUpWithEmail = async (email: string, password: string): Promise<{ error: AuthError | null }> => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: undefined, // Disable email confirmation
        }
      });
      return { error };
    } catch (err) {
      console.error('Email sign up error:', err);
      return { error: new Error(err instanceof Error ? err.message : 'Email sign up failed') as AuthError };
    }
  };
  
  const signOut = async (): Promise<{ error: AuthError | null }> => {
    try {
      const { error } = await supabase.auth.signOut();
      return { error };
    } catch (err) {
      console.error('Sign out error:', err);
      return { error: new Error(err instanceof Error ? err.message : 'Sign out failed') as AuthError };
    }
  };

  return {
    user,
    session,
    loading,
    error,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    isAuthenticated: !!user
  };
}