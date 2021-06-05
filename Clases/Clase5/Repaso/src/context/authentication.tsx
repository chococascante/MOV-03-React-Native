// High Order Component o HOC
import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';

interface AuthenticationContextProps {
  usuarioActual: null | string;
  setUsuarioActual: (usuario: string | null) => void;
  usuarios: [];
  setUsuarios: (usuarios: []) => void;
  fetchUsuarios: () => Promise<void>;
}

const AuthenticationContext = createContext<AuthenticationContextProps>({
  usuarioActual: null,
  usuarios: [],
  setUsuarioActual: () => {},
  setUsuarios: () => {},
  fetchUsuarios: () => new Promise(() => {}),
});

export const AuthenticationProvider: React.FC = ({children}) => {
  const [usuarioActual, setUsuarioActual] = useState<null | string>(null);
  const [usuarios, setUsuarios] = useState<[]>([]);

  const fetchUsuarios = async () => {
    try {
      const usuarios = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsuarios(usuarios.data);
    } catch (error) {
      console.log(error);
    }
  };

  const val = {
    usuarioActual,
    usuarios,
    setUsuarioActual,
    setUsuarios,
    fetchUsuarios,
  };

  return (
    <AuthenticationContext.Provider value={val}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
