import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rprrladgbergrtndtzni.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcnJsYWRnYmVyZ3J0bmR0em5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NzQ1MjMsImV4cCI6MjA0ODM1MDUyM30.w-ioN-pGnLqulr5XyNBbGzrTTe0Vn8wz-JuptFY5Lig";

export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchFavorites = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", user.id);

  if (error) throw error;
  return data;
};

export const saveFavoriteMovie = async (movie) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { error } = await supabase.from("favorites").insert([
    {
      user_id: user.id,
      movie_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
    },
  ]);

  if (error) throw error;
};
