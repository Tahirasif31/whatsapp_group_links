import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://stztlejwyqghedzfvpmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0enRsZWp3eXFnaGVkemZ2cG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTk0MDMsImV4cCI6MjAyMTMzNTQwM30.v1PWqPeEpO9DuCIOGRbHzUVWSlfs8mi5lpDkb-QyRn4";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
