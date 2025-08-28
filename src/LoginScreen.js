import React, { useState } from 'react';

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            setError('Please enter both username and password.');
        } else if (username === 'user' && password === 'password') {
            alert('Login successful!'); // In a real application, redirect to dashboard
            setError('');
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <br />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default LoginScreen;
