import React, { useState } from 'react';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            My Social Stats
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <InputField
                id="email-address"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={setEmail}
              />
            </div>
            <div>
              <InputField
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
              />
            </div>
          </div>

          <div>
            <SubmitButton text="Sign in" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
