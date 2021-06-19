import styled from '@emotion/native';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import BlueBackground from '../../atoms/BlueBackground';
import BottomForm from '../../molecules/BottomForm';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  return (
    <Container>
      <BlueBackground height="40%" />
      <BottomForm>
        <Text>Crear mi cuenta</Text>
        <Text>Ingrese su correo electrónico para registrarse.</Text>

        <StyledInput placeholder="Correo electrónico" />
        <StyledInput placeholder="Nombre completo" />
        <StyledInput keyboardType="numeric" placeholder="Número de teléfono" />
        <StyledInput secureTextEntry={true} placeholder="Contraseña" />
      </BottomForm>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`;

const StyledInput = styled.TextInput`
  border-bottom-color: #000;
  border-bottom-width: 1px;
`;

// const styles =  StyleSheet.create({
//   input: {
//     bor
//   }
// })

export default Signin;
