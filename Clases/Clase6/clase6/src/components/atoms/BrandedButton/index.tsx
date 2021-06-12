import styled from '@emotion/native';

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

const BrandedButton = styled.TouchableOpacity<{color: string}>`
  width: 300px;
  background-color: ${props => getButtonColor(props.color)};
  margin-bottom: 12px;
  padding: 28px 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
`;

export default BrandedButton;
