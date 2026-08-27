import { createClient } from '@supabase/supabase-js';

const configuredUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const configuredAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();
const hasValidUrl = Boolean(configuredUrl && /^https:\/\/[^\s/]+\.supabase\.co(?:\/.*)?$/i.test(configuredUrl));
const hasValidKey = Boolean(configuredAnonKey && !/^sua[-_]?chave|missing-supabase/i.test(configuredAnonKey));
const supabaseUrl = hasValidUrl ? configuredUrl : 'https://missing-supabase-config.invalid';
const supabaseAnonKey = hasValidKey ? configuredAnonKey : 'missing-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabaseConfigured = hasValidUrl && hasValidKey;