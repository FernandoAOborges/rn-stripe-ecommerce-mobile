import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

type DimensionsType = {
  WIDTH: number;
  HEIGHT: number;
};

const dimensions: DimensionsType = {
  WIDTH: width,
  HEIGHT: height,
};

export default dimensions;
