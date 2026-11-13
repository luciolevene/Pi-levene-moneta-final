import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../screens/Home";
import NuevoPost from "../screens/NuevoPost";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

function HomeMenu() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={ Home }
                options={ { tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> } }
            />
            <Tab.Screen
                name="NuevoPost"
                component={ NuevoPost }
                options={ { tabBarIcon: () => <FontAwesome name="plus-circle" size={24} color="black" /> } }
            />
            <Tab.Screen
                name="Profile"
                component={ Profile }
                options={ { tabBarIcon: () => <FontAwesome name="user" size={24} color="black" /> } }
            />
        </Tab.Navigator>
    )
}

export default HomeMenu
