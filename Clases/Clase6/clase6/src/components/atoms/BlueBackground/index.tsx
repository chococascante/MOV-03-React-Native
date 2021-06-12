import styled from '@emotion/native';

const BlueBackground = styled.View<{height: string}>`
  height: ${props => props.height};
  width: 100%;
  background-color: #0055b8;
  border-radius: 0 0 80px 0;
`;

export default BlueBackground;
