import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/Logo.png';
import GoogleLogo from '../assets/Google.svg';
import styled from 'styled-components';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import { useState } from 'react';
import { Line } from '../components/ui/Line';

export const Login = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.backgroundColor};
    height: 100vh;
  `;

  const LoginContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    width: 420px;
    border: 1px solid;
    border-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    > * {
      width: 100%;
      text-align: center;
      text-decoration: none;
    }

    > h3 {
      color: ${({ theme }) => theme.secondColor};
      font-size: 16px;
      font-weight: 400;
      margin: -10px 0;
    }

    > h2 {
      color: ${({ theme }) => theme.color};
      font-weight: 600;
      font-size: 20px;
    }

    > p {
      font-size: 14px;
      font-weight: 500;
    }

    > a {
      text-decoration: none;
      color: rgb(33, 33, 33);
      > p {
        font-size: 14px;
        font-weight: 500;
      }
    }
  `;

  const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    > img {
      width: 30px;
    }
    > p {
      font-weight: 600;
      font-size: 20px;
      letter-spacing: -1.7px;
    }
  `;

  const Remember = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgb(100, 100, 100);

    > p {
      font-size: 14px;
    }
  `;

  const LoginOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.color};
      font-weight: 500;
      font-size: 14px;
    }
  `;

  return (
    <Container>
      <LoginContainer>
        <Logo>
          <img src={companyLogo} alt='logo' />
          <p>WAWA</p>
        </Logo>
        <h2>Hi, Welcome Back</h2>
        <h3>Enter your credentials to continue</h3>
        <Button logo={GoogleLogo} text='Sign In Width Google' />
        <Line margin text='OR' />
        <p>Sign in with Email address</p>
        <Input type='email' label='Email Address' />
        <Input type='password' label='Password' />
        <LoginOptions>
          <Remember>
            <Checkbox checked={checked} onChange={handleCheckbox} />
            <p>Remember me</p>
          </Remember>
          <Link to='../forgot-password'>
            <p>Forgot Password?</p>
          </Link>
        </LoginOptions>
        <Link to='../signup'>
          <Button primary text='Sign In' />
        </Link>
        <Line />
        <Link to='../register'>
          <p>Don't have an account?</p>
        </Link>
      </LoginContainer>
    </Container>
  );
};
