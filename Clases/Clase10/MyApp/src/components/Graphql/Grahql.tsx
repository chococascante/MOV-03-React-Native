import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {GET_USER} from './query';

const Grahql = () => {
  const {loading, error, data, refetch} = useQuery(GET_USER, {
    variables: {id: 1},
    fetchPolicy: 'no-cache',
    pollInterval: 0,
  });

  console.log('Loading', loading);
  console.log('Error', error);
  console.log('Data', data);

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 3000);
  }, []);

  return <View>{data && <Text>{data.user.name}</Text>}</View>;
};

export default Grahql;
