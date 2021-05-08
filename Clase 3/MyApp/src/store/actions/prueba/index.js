import {UPDATE_NAME, UPDATE_POSTS} from '..';
import axios from 'axios';

export const updateName = payload => ({
  type: UPDATE_NAME,
  payload,
});

export const updatePosts = payload => ({
  type: UPDATE_POSTS,
  payload,
});

export const getPosts = () => async dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    console.log(response),
  );
};

class ClaseEjemplo {
  constructor(nombre) {
    this._nombre = nombre; //ABSOLUTAMENTE NADA
  }

  _cambiarNombre() {}
}

// Closures
function Clase2() {
  const nombre = '';
  const apellido = '';

  function cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  function verNombre() {
    return this.nombre;
  }

  return {
    cambiarNombre,
  };
}

const clase2 = Clase2();
clase2.cambiarNombre('Luis');
console.log(clase2);
