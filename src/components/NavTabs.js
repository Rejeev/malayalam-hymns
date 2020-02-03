import { createMaterialTopTabNavigator } from "react-navigation";
import SearchByHymn from '../screens/SearchByHymn';
import SearchBySubject from '../screens/SearchBySubject';

const NavTabs = createMaterialTopTabNavigator(
  {
    SearchByText: {
        screen: SearchByHymn
   },
   SearchBySubject: {
       screen: SearchBySubject
   }
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#ddd",
      tabStyle: {
        justifyContent: "center"
      },
      indicatorStyle: {
        backgroundColor: "#fcc11e"
      },
      style: {
        backgroundColor: "#347ed8"
      }
    }
  }
);

export default NavTabs;