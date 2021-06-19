import React from 'react';
import styled from '@emotion/native';

const BottomForm: React.FC = ({children}) => {
  return <WhiteBackground>{children}</WhiteBackground>;
};

const WhiteBackground = styled.View`
  background-color: #fff;
  height: 80%;
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 5%;
  border-radius: 40px 0 0 0;
  padding: 46px 32px;
`;

export default BottomForm;
