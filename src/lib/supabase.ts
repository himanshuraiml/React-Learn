import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client if environment variables are not set
const createMockSupabaseClient = () => ({
  auth: {
    getSession: () => {
      console.log('🔄 Using mock auth - localStorage fallback');
      return Promise.resolve({ data: { session: null } });
    },
    getUser: () => {
      console.log('🔄 Using mock getUser - localStorage fallback');
      return Promise.resolve({ data: { user: null }, error: null });
    },
    onAuthStateChange: () => {
      console.log('🔄 Using mock auth state changes');
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
    signInWithOAuth: () => {
      console.warn('⚠️ Supabase not configured - authentication disabled');
      return Promise.resolve({ error: new Error('Supabase not configured. Using local storage.') });
    },
    signInWithPassword: () => {
      console.warn('⚠️ Supabase not configured - using local storage');
      return Promise.resolve({ error: new Error('Supabase not configured. Using local storage.') });
    },
    signUp: () => {
      console.warn('⚠️ Supabase not configured - using local storage');
      return Promise.resolve({ error: new Error('Supabase not configured. Using local storage.') });
    },
    signOut: () => Promise.resolve({ error: null })
  },
  from: () => ({
    select: () => {
      console.log('🔄 Using mock database - localStorage fallback');
      return Promise.resolve({ data: [], error: null });
    },
    insert: () => Promise.resolve({ error: null }),
    upsert: () => Promise.resolve({ error: null }),
    delete: () => Promise.resolve({ error: null }),
    eq: function() { return this; }
  })
});

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
    console.warn('⚠️ Missing Supabase environment variables');
    return false;
  }

  // Check for placeholder values
  const hasPlaceholders = 
    supabaseUrl.includes('your-project') || 
    supabaseUrl.includes('your_supabase_url') ||
    supabaseAnonKey.includes('your_actual_anon_key_here') ||
    supabaseAnonKey.includes('your_supabase_anon_key');

  if (hasPlaceholders) {
    console.warn('⚠️ Supabase environment variables contain placeholder values');
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

  return true;
};

// Test Supabase connection
const testSupabaseConnection = async (client: any) => {
  try {
    console.log('🔍 Testing Supabase connection...');
    const { data, error } = await client.auth.getSession();
    
    if (error && error.message.includes('refused to connect')) {
      console.error('❌ Connection refused - Supabase project might be paused or unreachable');
      console.error('💡 Solutions:');
      console.error('   1. Check if your Supabase project is active');
      console.error('   2. Verify the URL is correct');
      console.error('   3. Try refreshing your Supabase project dashboard');
      console.error('   4. Wait a few minutes if project was just created');
      return false;
    }
    
    if (error) {
      console.error('❌ Supabase connection failed:', error.message);
      return false;
    }
    
    console.log('✅ Supabase connection successful');
    return true;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('refused to connect') || error.message.includes('ERR_CONNECTION_REFUSED')) {
        console.error('❌ Connection refused to Supabase');
        console.error('🔧 Possible fixes:');
        console.error('   • Your Supabase project might be paused - check dashboard');
        console.error('   • Network connectivity issues');
        console.error('   • Project still initializing (wait 2-3 minutes)');
        console.error('   • URL might be incorrect');
      } else if (error.message.includes('CORS')) {
        console.error('❌ CORS error - check Supabase authentication settings');
      } else {
        console.error('❌ Supabase connection test failed:', error.message);
      }
    }
    return false;
  }
};

// Create Supabase client with error handling
let supabaseClient;
let isSupabaseWorking = false;

(async () => {
  try {
    if (!validateSupabaseConfig()) {
      console.warn('🔄 Using local storage fallback');
      supabaseClient = createMockSupabaseClient();
      return;
    }

    console.log('✅ Creating Supabase client...');
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    
    // Test connection in background
    testSupabaseConnection(supabaseClient).then((working) => {
      isSupabaseWorking = working;
      if (!working) {
        console.warn('🔄 Supabase connection failed - app will use local storage');
      }
    });
    
  } catch (error) {
    console.error('❌ Failed to create Supabase client:', error);
    console.log('🔄 Using mock client as fallback');
    supabaseClient = createMockSupabaseClient();
  }
})();

// Initialize with mock client first to prevent undefined errors
supabaseClient = createMockSupabaseClient();

// Create a proxy to handle the async initialization
export const supabase = new Proxy({} as any, {
  get(target, prop) {
    if (supabaseClient) {
      return supabaseClient[prop as keyof typeof supabaseClient];
    }
    // Return mock client methods if real client isn't ready yet
    const mockClient = createMockSupabaseClient();
    return mockClient[prop as keyof typeof mockClient];
  }
});

// Export connection status checker
export const isSupabaseConnected = () => isSupabaseWorking;

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