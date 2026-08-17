import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://missing-supabase-config.invalid';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'missing-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabaseConfigured = Boolean(
	import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY,
);