import React, { useContext, useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPath';
import { UserContext } from '../../context/UserContext';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const{updateUser}=useContext(UserContext)
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    setError(null);
    if (!validateEmail(email)){
      setError("Please enter a valid email adress");
      return;
    }
    if(!password.trim()){
      setError("Please enter the password");
      return;
    }

    //Login Api Call
    try{
      const response= await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
        email,
        password,
      });
      const {token,user}= response.data;
      if(token){
        localStorage.setItem("token",token);
        updateUser(user);
        navigate("/dashboard");
      }
    }catch(error){
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
      }else{
        setError("Something went wrong. Please try again");
      }
    }
    



  };

  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your deatils to log in
        </p>

        <form onSubmit={handlelogin}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
          <button type='submit' className='btn-primary'>
            Login
          </button>
          <p className='text-[13px] text-slate-800 mt-3'>
            Don't Have An Account?{""}
            <Link className='font-medium text-violet-700 underline' to="/signup">
            SignUp
            </Link>
          </p>


        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
