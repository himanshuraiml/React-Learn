import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Enhanced validation for environment variables
const isValidSupabaseUrl = supabaseUrl && 
  !supabaseUrl.includes('your-project') && 
  !supabaseUrl.includes('your_supabase_url') &&
  supabaseUrl.startsWith('http') &&
  supabaseUrl.includes('supabase.co');

const isValidSupabaseKey = supabaseAnonKey && 
  !supabaseAnonKey.includes('your_actual_anon_key_here') &&
  !supabaseAnonKey.includes('your_supabase_anon_key') &&
  supabaseAnonKey.length > 50; // Supabase keys are typically long JWT tokens

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

// Create Supabase client with error handling
let supabaseClient;

try {
  if (!isValidSupabaseUrl || !isValidSupabaseKey) {
    console.warn('🔄 Supabase not configured - using local storage fallback');
    console.log('Environment check:', {
      hasUrl: !!supabaseUrl,
      urlValid: isValidSupabaseUrl,
      hasKey: !!supabaseAnonKey,
      keyValid: isValidSupabaseKey,
      currentUrl: supabaseUrl ? supabaseUrl.substring(0, 30) + '...' : 'Not set'
    });
    supabaseClient = createMockSupabaseClient();
  } else {
    console.log('✅ Creating Supabase client with valid credentials');
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    
    // Test connection
    supabaseClient.auth.getSession().catch(error => {
      console.error('❌ Supabase connection failed:', error.message);
      console.log('🔄 Falling back to mock client');
    });
  }
} catch (error) {
  console.error('❌ Failed to create Supabase client:', error);
  console.log('🔄 Using mock client as fallback');
  supabaseClient = createMockSupabaseClient();
}

export const supabase = supabaseClient;

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