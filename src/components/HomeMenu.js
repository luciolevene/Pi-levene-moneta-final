import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import NuevoPost from "../screens/NuevoPost";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

function HomeMenu() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
        }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{ tabBarIcon: () => <FontAwesome name="home" size={26} color="#000000" /> }}
            />
            <Tab.Screen
                name="NuevoPost"
                component={NuevoPost}
                options={{ tabBarIcon: () => <FontAwesome name="plus-circle" size={30} color="#c8f010" /> }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ tabBarIcon: () => <FontAwesome name="user" size={26} color="#000000" /> }}
            />
        </Tab.Navigator>
    )
}

export default HomeMenu