import { useState } from "react";
import { supabase } from "../../services/supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else alert("Logged in successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">LogIn</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;