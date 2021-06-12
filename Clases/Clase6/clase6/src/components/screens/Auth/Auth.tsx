import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import styled from '@emotion/native';

const Auth = () => {
  return (
    <Container>
      <BlueBackground />
      <ButtonContainer>
        <BrandedButton onPress={() => {}}>
          <Text>Crear cuenta</Text>
        </BrandedButton>
        <BrandedButton onPress={() => {}}>
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

const BrandedButton = styled.TouchableOpacity`
  width: 200px;
  background-color: #0055b8;
  margin-bottom: 12px;
  padding: 28px 32px;
`;

const BlueBackground = styled.View`
  height: 60%;
  width: 100%;
  background-color: #0055b8;
  border-radius: 0 0 80px 0;
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
