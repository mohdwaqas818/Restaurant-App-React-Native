import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TextScreen from "./src/screens/TextScreen";
import SeperateScreen from "./src/screens/SeperateScreen";

const navigator = createStackNavigator(
  {
    TextScreen: TextScreen,
    SeperateScreen: SeperateScreen,
  },
  {
    initialRouteName: "TextScreen",
    defaultNavigationOptions: {
      title: "Restaurant App"
    }
  }
);

export default createAppContainer(navigator);
