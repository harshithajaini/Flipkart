import { useState } from 'react';
import './styles.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if(username && password)
    {
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
          throw new Error('Authentication failed');
        }

        const data = await response.json();
        localStorage.setItem('token', JSON.stringify(data.token));
        window.location.href = '/';
        // setUsername('')
        // setPassword('');
        // setError('');

      } catch (error) {
        setError(error.message);
      }
    }
    else{
      setError('Enter valid username and password')

    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <h3>SIGN IN TO YOUR ACCOUNT</h3>
          <input
            type="text"
            required
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button className="verify-btn" type='submit' onClick={handleLogin}>Login</button>

        </form>
      </div>
    </div>
  );
}

export default Login;
