import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rvfjgncjljbwplinsxfh.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2ZmpnbmNqbGpid3BsaW5zeGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNjUyODUsImV4cCI6MjAyNTY0MTI4NX0.7vH4mTU0BZuddm1OK6E8ocfAmkjHUZDLkOnSUGg2Uvo'

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

export const createUser = async (userObj: any) => {
  return await supabaseClient.from('annotate').insert(userObj)
}

export const readUserFromSupabase = async (
  email: any,
  licenseCode: any
  // hostname: any
) => {
  try {
    await supabaseClient.from('annotate').select('*')
  } catch (error) {
    console.log(error)
  }
  // .eq('email', email)
  // .eq('license', licenseCode)
  // .eq('hostname', hostname)
  return await supabaseClient.from('annotate').select('*')
}

export const updatedUser = async (User: any) => {
  return await supabaseClient
    .from('annotate')
    .update({ hostname: User.hostname }) // Update only hostname
    .eq('email', User.email)
}
