const initialState = {
  nombre: '',
  apellido: '',
  edad: null,
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
    default:
      return state;
  }
}
