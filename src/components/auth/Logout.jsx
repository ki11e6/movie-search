import { supabase } from "../../services/supabase";

const Logout = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert("Logged out successfully!");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
