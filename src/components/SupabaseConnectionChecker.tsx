import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Loader, Settings, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ConnectionStatus {
  envVars: 'success' | 'error' | 'warning';
  connection: 'success' | 'error' | 'loading' | 'warning';
  auth: 'success' | 'error' | 'loading' | 'warning';
  database: 'success' | 'error' | 'loading' | 'warning';
  overall: 'success' | 'error' | 'loading' | 'warning';
  details: {
    envVars: string;
    connection: string;
    auth: string;
    database: string;
  };
}

export default function SupabaseConnectionChecker() {
  const [status, setStatus] = useState<ConnectionStatus>({
    envVars: 'loading',
    connection: 'loading',
    auth: 'loading',
    database: 'loading',
    overall: 'loading',
    details: {
      envVars: 'Checking environment variables...',
      connection: 'Testing connection...',
      auth: 'Testing authentication...',
      database: 'Testing database access...'
    }
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const checkSupabaseConnection = async () => {
    setIsRunning(true);
    setStatus(prev => ({
      ...prev,
      envVars: 'loading',
      connection: 'loading',
      auth: 'loading',
      database: 'loading',
      overall: 'loading',
      details: {
        envVars: 'Checking environment variables...',
        connection: 'Testing connection...',
        auth: 'Testing authentication...',
        database: 'Testing database access...'
      }
    }));

    try {
      // Step 1: Check environment variables
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      let envStatus: 'success' | 'error' | 'warning' = 'error';
      let envMessage = '';

      if (!supabaseUrl || !supabaseKey) {
        envStatus = 'error';
        envMessage = 'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY';
      } else if (supabaseUrl.includes('your-project') || supabaseKey.includes('your_actual_supabase_anon_key_here')) {
        envStatus = 'warning';
        envMessage = 'Using placeholder values. Replace with actual Supabase credentials.';
      } else if (!supabaseUrl.includes('supabase.co') || supabaseKey.length < 100) {
        envStatus = 'error';
        envMessage = 'Invalid format for Supabase URL or key';
      } else {
        envStatus = 'success';
        envMessage = `Connected to ${supabaseUrl.split('.')[0].split('//')[1]}`;
      }

      setStatus(prev => ({
        ...prev,
        envVars: envStatus,
        details: { ...prev.details, envVars: envMessage }
      }));

      if (envStatus === 'error') {
        setStatus(prev => ({
          ...prev,
          connection: 'error',
          auth: 'error',
          database: 'error',
          overall: 'error',
          details: {
            ...prev.details,
            connection: 'Cannot test - invalid environment variables',
            auth: 'Cannot test - invalid environment variables',
            database: 'Cannot test - invalid environment variables'
          }
        }));
        return;
      }

      if (envStatus === 'warning') {
        setStatus(prev => ({
          ...prev,
          connection: 'warning',
          auth: 'warning',
          database: 'warning',
          overall: 'warning',
          details: {
            ...prev.details,
            connection: 'Using local storage fallback',
            auth: 'Using local storage fallback',
            database: 'Using local storage fallback'
          }
        }));
        return;
      }

      // Step 2: Test basic connection
      await new Promise(resolve => setTimeout(resolve, 500));
      try {
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError && sessionError.message.includes('refused to connect')) {
          setStatus(prev => ({
            ...prev,
            connection: 'error',
            details: { ...prev.details, connection: 'Connection refused - project might be paused' }
          }));
        } else {
          setStatus(prev => ({
            ...prev,
            connection: 'success',
            details: { ...prev.details, connection: 'Connection established' }
          }));
        }
      } catch (error: any) {
        setStatus(prev => ({
          ...prev,
          connection: 'error',
          details: { ...prev.details, connection: error.message || 'Connection failed' }
        }));
      }

      // Step 3: Test authentication
      await new Promise(resolve => setTimeout(resolve, 500));
      try {
        const { data: user } = await supabase.auth.getUser();
        setStatus(prev => ({
          ...prev,
          auth: 'success',
          details: { ...prev.details, auth: user.user ? 'User authenticated' : 'Authentication service working' }
        }));
      } catch (error: any) {
        setStatus(prev => ({
          ...prev,
          auth: 'error',
          details: { ...prev.details, auth: error.message || 'Authentication test failed' }
        }));
      }

      // Step 4: Test database access
      await new Promise(resolve => setTimeout(resolve, 500));
      try {
        const { data, error } = await supabase.from('user_progress').select('count', { count: 'exact', head: true });
        if (error) {
          setStatus(prev => ({
            ...prev,
            database: 'error',
            details: { ...prev.details, database: error.message }
          }));
        } else {
          setStatus(prev => ({
            ...prev,
            database: 'success',
            details: { ...prev.details, database: 'Database accessible' }
          }));
        }
      } catch (error: any) {
        setStatus(prev => ({
          ...prev,
          database: 'error',
          details: { ...prev.details, database: error.message || 'Database test failed' }
        }));
      }

      // Determine overall status
      const finalStatus = status;
      const hasError = [finalStatus.envVars, finalStatus.connection, finalStatus.auth, finalStatus.database].includes('error');
      const hasWarning = [finalStatus.envVars, finalStatus.connection, finalStatus.auth, finalStatus.database].includes('warning');
      
      setStatus(prev => ({
        ...prev,
        overall: hasError ? 'error' : hasWarning ? 'warning' : 'success'
      }));

    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    checkSupabaseConnection();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'loading':
        return <Loader className="w-4 h-4 text-blue-600 animate-spin" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'loading':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow z-50"
        title="Check Supabase Connection"
      >
        <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-md z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Supabase Connection Status</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={checkSupabaseConnection}
            disabled={isRunning}
            className="p-1 text-gray-400 hover:text-gray-600 disabled:animate-spin"
            title="Refresh Status"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className={`flex items-center justify-between p-2 rounded border ${getStatusColor(status.envVars)}`}>
          <span className="text-xs font-medium">Environment Variables</span>
          {getStatusIcon(status.envVars)}
        </div>
        
        <div className={`flex items-center justify-between p-2 rounded border ${getStatusColor(status.connection)}`}>
          <span className="text-xs font-medium">Connection</span>
          {getStatusIcon(status.connection)}
        </div>
        
        <div className={`flex items-center justify-between p-2 rounded border ${getStatusColor(status.auth)}`}>
          <span className="text-xs font-medium">Authentication</span>
          {getStatusIcon(status.auth)}
        </div>
        
        <div className={`flex items-center justify-between p-2 rounded border ${getStatusColor(status.database)}`}>
          <span className="text-xs font-medium">Database</span>
          {getStatusIcon(status.database)}
        </div>
      </div>

      <div className={`mt-3 p-2 rounded border ${getStatusColor(status.overall)}`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold">Overall Status</span>
          {getStatusIcon(status.overall)}
        </div>
        <div className="text-xs space-y-1">
          <div><strong>Environment:</strong> {status.details.envVars}</div>
          <div><strong>Connection:</strong> {status.details.connection}</div>
          <div><strong>Auth:</strong> {status.details.auth}</div>
          <div><strong>Database:</strong> {status.details.database}</div>
        </div>
      </div>

      {status.overall === 'warning' && (
        <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
          <strong>💡 Tip:</strong> Update your .env file with real Supabase credentials to enable full functionality.
        </div>
      )}

      {status.overall === 'error' && (
        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-800">
          <strong>🔧 Fix:</strong> Check your Supabase project dashboard and ensure the project is active.
        </div>
      )}
    </div>
  );
}