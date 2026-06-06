

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabase = createClient(
  'https://bcmfhgwyzgkjwvlyjyid.supabase.co',
  'sb_publishable_Fch-yRqNmOB3PAqEptw3Ew_ROxnsnTj'
)

// make it global so other scripts can use it
window.supabase = supabase