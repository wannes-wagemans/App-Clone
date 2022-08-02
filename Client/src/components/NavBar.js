import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  const Nav = styled.div`
    background-color: ${({ theme }) => theme.color};
  `;

  const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    gap: 20px;
    padding-right: 100px;
    height: 50px;
  `;

  const NavLink = styled.p`
    color: #333;
    text-decoration: none;
  `;

  return (
    <Nav>
      <NavContainer>
        <Link to='/'>
          <NavLink>Home</NavLink>
        </Link>
        <Link to='/login'>
          <NavLink>Login</NavLink>
        </Link>
        <Link to='/settings'>
          <NavLink>Settings</NavLink>
        </Link>
        <Link to='/users'>
          <NavLink>Users</NavLink>
        </Link>
      </NavContainer>
    </Nav>
  );
};
