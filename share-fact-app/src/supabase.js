import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gwgmkvqwnxcrotyuugnp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3Z21rdnF3bnhjcm90eXV1Z25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MzYyMjEsImV4cCI6MjA0NzAxMjIyMX0.3SR4m1qF5HI3Nf9Ow3Yf_Ge7PrDLsxFb_5RD9mRqft0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
