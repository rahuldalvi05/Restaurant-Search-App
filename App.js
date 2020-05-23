import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen'
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Show: ResultShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Seach"
    }
  }
);

export default createAppContainer(navigator);