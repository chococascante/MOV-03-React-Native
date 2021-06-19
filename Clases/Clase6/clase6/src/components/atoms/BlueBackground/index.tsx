import styled from '@emotion/native';

const BlueBackground = styled.View<{height: string; round?: boolean}>`
  height: ${props => props.height};
  width: 100%;
  background-color: #0055b8;
  border-radius: ${props => props.round && '0 0 80px 0'};
`;

export default BlueBackground;
