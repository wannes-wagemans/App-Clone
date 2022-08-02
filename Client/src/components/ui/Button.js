import styled from 'styled-components';

export const Button = ({ logo, text, primary }) => {
  const StyledButton = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: none;
    background-color: ${primary ? 'rgb(44, 165, 141)' : 'rgb(250, 250, 250)'};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${primary ? 'white' : 'rgb(97, 97, 97)'};
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
    > img {
      width: 14px;
    }

    :hover {
      cursor: pointer;
      border: 1px solid gray;
    }
  `;

  return (
    <StyledButton>
      {logo && <img src={logo} alt='logo' />}
      <p>{text}</p>
    </StyledButton>
  );
};
