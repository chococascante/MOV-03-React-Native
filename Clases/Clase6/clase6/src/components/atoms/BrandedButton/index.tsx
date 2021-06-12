import React from 'react';
import {View, Text} from 'react-native';
import styled from '@emotion/native';

interface BrandedButtonProps {
  color?: string;
  text?: string;
  icon?: string;
  onPress: () => void;
}

const BrandedButton: React.FC<BrandedButtonProps> = ({
  color,
  text,
  icon,
  onPress,
}) => {
  return (
    <StyledButton onPress={onPress}>
      <Text>{text}</Text>
    </StyledButton>
  );
};

const getButtonColor = (color: string) => {
  switch (color) {
    case 'primary':
      return '#0055b8';
    case 'secondary':
      return '#fafafa';
    default:
      return '#fff';
  }
};

const StyledButton = styled.TouchableOpacity<{color?: string}>`
  width: 300px;
  background-color: ${props => props.color && getButtonColor(props.color)};
  margin-bottom: 12px;
  padding: 28px 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
`;

export default BrandedButton;
