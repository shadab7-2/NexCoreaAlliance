import "./global.css";

import { useState } from "react";
import { useRouter } from "next/router";
import { singIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSummit = async (e) => {
    e.preventDefatult();
    setError(null);

    const result = await singIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.ok) {
      router.push("/profile");
    } else {
      setError("Invaild email or password");
    }
  };
  return (
    <div className="bg-gray-500 px-6 py-10 flex flex-col items-center justify-center gap-8 border-2 m-20 rounded-4xl w-140 h-140 text-white b">
      <h1 onSubmit={handleSummit} className="font-bold font-size text-5xl">
        Login Page
      </h1>
      {error && <p style={{color: "red"}}>{error}</p>} 
      <form action="" className="flex flex-col ">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email "
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className=" "
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default login;
