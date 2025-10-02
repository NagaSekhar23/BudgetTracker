import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sakxvmcoikvdjcbdaait.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNha3h2bWNvaWt2ZGpjYmRhYWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNTU5NjgsImV4cCI6MjA3NDkzMTk2OH0.J7af2JykQ6w0_UlLAmx9XCfqNotu8esOEr9_iVbqbcc'

export const supabase = createClient(supabaseUrl, supabaseKey)
