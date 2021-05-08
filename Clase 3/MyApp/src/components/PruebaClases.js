import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getPosts, updateName} from '../store/actions/prueba';

export class PruebaClases extends Component {
  componentDidMount() {
    this.props.updateNameProp('Cristian');
    this.props.getPostsProp();
  }

  render() {
    return (
      <View>
        <Text>Hola Clase</Text>
        <Text>{this.props.nombre}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nombre: state.nombre,
  apellido: state.apellido,
});

const mapDispatchToProps = dispatch => ({
  updateNameProp: nombre => dispatch(updateName(nombre)),
  getPostsProp: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PruebaClases);
