import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.checked ? 'rgb(44, 165, 141)' : 'rgb(250, 250, 250)'};
  border-radius: 3px;
  border: 1px solid;
  border-color: rgb(200, 200, 200);
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox='0 0 24 24'>
        <polyline points='20 6 9 17 4 12' />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
