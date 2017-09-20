import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import CardsScreen from './src/screens/CardsScreen';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Cards: {
    screen: CardsScreen,
  },
});
