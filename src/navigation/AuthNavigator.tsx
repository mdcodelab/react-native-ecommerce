import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screen/auth/LoginScreen";
import SignUpScreen from "../screen/auth/SignUpScreen";

const Stack = createStackNavigator();


function AuthNavigator() {
  return (
    <Stack.Navigator 
    screenOptions={{ headerShown: false }}
     >  

        <Stack.Screen 
        name="Login"
        component={LoginScreen}
        />

        <Stack.Screen 
        name="SignUp"
        component={SignUpScreen}
        />

    </Stack.Navigator>
  )
}

export default AuthNavigator;

