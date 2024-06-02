// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password
//         })
//       });

//       if (!response.ok) {
//         throw new Error("Failed to log in");
//       }

//       const result = await response.json();

//       if (result.status === "success") {
//         if (result.role === "admin") {
//           navigate("/home", { state: { username: username } });
//         } else if (result.role === "user") {
//           navigate("/home", { state: { username: username } });
//         } else {
//           setError("Invalid role received");
//         }
//       } else {
//         setError(result.message || "Invalid credentials");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             className="form-control"
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             className="form-control"
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-primary" type="submit">
//           Log In
//         </button>
//         {error && <div className="text-danger">{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8080/login", {
//         username: username,
//         password: password,
//       });

//       const role = response.data;
//       // Handle the role based on the response
//       if (role === "admin") {
//         // navigate("/admin");
//         navigate("/admin", { state: { username: username } });
//       } else if (role === "user") {
//         // Redirect to the user page
//         navigate("/", { state: { username: username } });
//         // navigate("/user");
//         setError("User logged");
//       } else {
//         setError("Invalid credentials");
//       }
//     } catch (error) {
//       setError("Failed to log in");
//     }
//   };

//   return (
//     // <div className="container">
//     //   <h2>Login</h2>
//     //   <form onSubmit={handleSubmit}>
//     //     <div className="form-group">
//     //       <label htmlFor="username">Username:</label>
//     //       <input
//     //         className="form-control"
//     //         type="text"
//     //         id="username"
//     //         value={username}
//     //         onChange={(e) => setUsername(e.target.value)}
//     //       />
//     //     </div>
//     //     <div className="form-group">
//     //       <label htmlFor="password">Password:</label>
//     //       <input
//     //         className="form-control"
//     //         type="password"
//     //         id="password"
//     //         value={password}
//     //         onChange={(e) => setPassword(e.target.value)}
//     //       />
//     //     </div>
//     //     <button className="btn btn-primary" type="submit">
//     //       Log In
//     //     </button>
//     //     {error && <div className="text-danger">{error}</div>}
//     //   </form>
//     // </div>
//     <main
//       class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
//     >
//       <form onSubmit={handleSubmit}>
//       <section class="flex w-[30rem] flex-col space-y-10">
//         <div class="text-center text-4xl font-medium">Log In</div>
//         <div
//           class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
//         >
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Username"
//             class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
//           />
//         </div>

//         <div
//           class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
//         >
//           <input
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
//           />
//         </div>

//         <button
//           class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400" type="submit"
//         >
//           LOG IN
//         </button>


//         <p class="text-center text-lg">
//           No account?
//           <a
//             href="#"
//             class="font-medium text-indigo-500 underline-offset-4 hover:underline"
//           > Create One</a>
//         </p>
//     </section>
//     </form>

//     </main>
//   );
// };

// export default Login;


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8080/login", {
      username,
      password,
    });

    const role = response.data;
    if (role === "admin" || role === "user") {
      // Use the login function to set user data
      login({ username, role });
      // Navigate to the appropriate route based on role
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } else {
      setError("Invalid credentials");
    }
  } catch (error) {
    setError("Failed to log in");
  }
};

return (
  <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <form onSubmit={handleSubmit}>
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
        <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400" type="submit">
          LOG IN
        </button>
        {error && <div className="text-danger">{error}</div>}
        {/* <p className="text-center text-lg">
          No account?
          <a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline"> Create One</a>
        </p> */}
      </section>
    </form>
  </main>
);
};

export default Login;