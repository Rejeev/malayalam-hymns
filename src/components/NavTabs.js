import { createMaterialTopTabNavigator } from "react-navigation";
import SearchByHymn from '../screens/SearchByHymn';
import SearchBySubject from '../screens/SearchBySubject';

const NavTabs = createMaterialTopTabNavigator(
  {
    SearchByText: {
        screen: SearchByHymn,
        navigationOptions: {  tabBarLabel: 'FIRST LINES' },
   },
   SearchBySubject: {
       screen: SearchBySubject,
       navigationOptions: {  tabBarLabel: 'SUBJECTS' }, 
   },
   SearchByHistory: {
    screen: SearchBySubject,
    navigationOptions: {  tabBarLabel: 'HISTORY' }, 
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
        height: '100%',
        backgroundColor: "#fcc11e"
      },
      style: {
        backgroundColor: "#347ed8"
      }
    }
  }
);

export default NavTabs;