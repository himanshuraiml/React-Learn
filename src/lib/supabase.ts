import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Enhanced validation for environment variables
const validateSupabaseConfig = () => {
  console.log('🔍 Checking Supabase configuration...');
  console.log('Environment variables:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    urlPreview: supabaseUrl ? supabaseUrl.substring(0, 30) + '...' : 'Not set',
    keyLength: supabaseAnonKey ? supabaseAnonKey.length : 0
  });

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing Supabase environment variables');
    console.error('💡 Solutions:');
    console.error('   1. Create a .env file in your project root');
    console.error('   2. Add VITE_SUPABASE_URL=https://your-project.supabase.co');
    console.error('   3. Add VITE_SUPABASE_ANON_KEY=your_actual_anon_key');
    return false;
  }

  // Check for placeholder values
  const hasPlaceholders = 
    supabaseUrl.includes('your-project') || 
    supabaseUrl.includes('your_supabase_url') ||
    supabaseAnonKey.includes('your_actual_anon_key_here') ||
    supabaseAnonKey.includes('your_supabase_anon_key') ||
    supabaseAnonKey.includes('placeholder');

  if (hasPlaceholders) {
    console.error('❌ Supabase environment variables contain placeholder values');
    console.error('💡 Get your real credentials from: https://app.supabase.com → Project Settings → API');
    return false;
  }

  // Validate URL format
  if (!supabaseUrl.startsWith('https://') || !supabaseUrl.includes('supabase.co')) {
    console.error('❌ Invalid Supabase URL format. Should be: https://yourproject.supabase.co');
    return false;
  }

  // Validate key format (JWT tokens are long)
  if (supabaseAnonKey.length < 100) {
    console.error('❌ Invalid Supabase key - too short. Should be a long JWT token.');
    return false;
  }

  console.log('✅ Supabase configuration looks valid');
  return true;
};

// Create Supabase client - always create real client, never mock
let supabaseClient;
const isConfigValid = validateSupabaseConfig();

if (!isConfigValid) {
  console.error('❌ Cannot create Supabase client - invalid configuration');
  console.error('🔧 Fix your .env file with proper Supabase credentials');
  throw new Error('Supabase configuration invalid. Check console for details.');
} else {
  console.log('✅ Creating Supabase client...');
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
}

// Export the client
export const supabase = supabaseClient;

// Test connection function
export const testSupabaseConnection = async () => {
  try {
    console.log('🔍 Testing Supabase connection...');
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('❌ Supabase connection failed:', error.message);
      
      if (error.message.includes('refused to connect') || error.message.includes('ERR_CONNECTION_REFUSED')) {
        console.error('🔧 Possible fixes:');
        console.error('   • Your Supabase project might be paused - check dashboard');
        console.error('   • Network connectivity issues');
        console.error('   • Project still initializing (wait 2-3 minutes)');
        console.error('   • URL might be incorrect');
      } else if (error.message.includes('Invalid JWT')) {
        console.error('🔧 Fix: Check your VITE_SUPABASE_ANON_KEY in .env file');
      } else if (error.message.includes('CORS')) {
        console.error('🔧 Fix: Check Supabase authentication settings');
      }
      
      return { success: false, error: error.message };
    }
    
    console.log('✅ Supabase connection successful');
    return { success: true, error: null };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ Supabase connection test failed:', errorMessage);
    return { success: false, error: errorMessage };
  }
};

// Export connection status checker
export const isSupabaseConnected = async () => {
  const result = await testSupabaseConnection();
  return result.success;
};

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