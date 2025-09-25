import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client if environment variables are not set
const createMockSupabaseClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithOAuth: () => Promise.resolve({ error: new Error('Supabase not configured') }),
    signOut: () => Promise.resolve({ error: null })
  },
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ error: null }),
    upsert: () => Promise.resolve({ error: null }),
    delete: () => Promise.resolve({ error: null }),
    eq: function() { return this; }
  })
});

export const supabase = (!supabaseUrl || !supabaseAnonKey) 
  ? createMockSupabaseClient()
  : createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          sub_lesson_id: string;
          completed_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_id: string;
          sub_lesson_id: string;
          completed_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          lesson_id?: string;
          sub_lesson_id?: string;
          completed_at?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_achievements: {
        Row: {
          id: string;
          user_id: string;
          achievement_id: string;
          unlocked_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          achievement_id: string;
          unlocked_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          achievement_id?: string;
          unlocked_at?: string;
        };
      };
    };
  };
};