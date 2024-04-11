// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Your login logic here, for example, you can send a request to your backend
//     console.log('Logging in with:', username, password);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input 
//         type="text" 
//         placeholder="Username" 
//         value={username} 
//         onChange={(e) => setUsername(e.target.value)} 
//       />
//       <input 
//         type="password" 
//         placeholder="Password" 
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)} 
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;




// Login.js
import React, { useState } from 'react';
import './login.css'; // Import CSS file for styling
import Register from './register';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const handleRegisterClick = () => {
    setShowRegister(true);
  };
  const handleLogin = () => {
    // Login logic goes here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
      {showRegister && <Register/>}
    </div>
  );
};

export default Login;
