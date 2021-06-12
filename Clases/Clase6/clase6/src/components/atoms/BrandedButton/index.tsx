import styled from '@emotion/native';

const BrandedButton = styled.TouchableOpacity<{color: string}>`
  width: 300px;
  background-color: ${props => props.color};
  margin-bottom: 12px;
  padding: 28px 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
`;

export default BrandedButton;
