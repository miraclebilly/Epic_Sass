
import { createClient } from '@supabase/supabase-js'



const supabaseUrl = 'https://xkxavelhdnybwndyzrws.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhreGF2ZWxoZG55YnduZHl6cndzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODI2ODg5NiwiZXhwIjoyMDIzODQ0ODk2fQ.rc1ExtBlY-FqwP5021ix3KMm3LQuNAonxkHQ_38QLlo'

export const supabase = createClient(supabaseUrl, supabaseKey)

