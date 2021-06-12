import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import styled from '@emotion/native';
import BrandedButton from '../../atoms/BrandedButton';
import BlueBackground from '../../atoms/BlueBackground';

const Auth: React.FC = () => {
  return (
    <Container>
      <BlueBackground height="60%" />
      <ButtonContainer>
        <BrandedButton color="primary" onPress={() => {}}>
          <Text>Crear cuenta</Text>
        </BrandedButton>
        <BrandedButton color="secondary" onPress={() => {}}>
          <Text>Iniciar sesión</Text>
        </BrandedButton>
      </ButtonContainer>
    </Container>
  );
};

// Estilos con emotion/styled-components
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ButtonContainer = styled.View`
  height: 40%;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

// Estilos con Stylesheet nativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blueBackground: {
    height: '60%',
    width: '100%',
    backgroundColor: '#0055b8',
    borderBottomRightRadius: 80,
  },
});

export default Auth;
