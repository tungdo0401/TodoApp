import useUserGlobalStore from "@/store/useUserGlobalStore"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
// import AppStackNavigator from "./app-stack-navigator"
// import AuthStackNavigator from "./auth-stack-navigator"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppStackParamList } from "./types"
import BottomTabNavigator from "./bottom-tab-navigator"
import WelcomeScreen from "@/screens/welcome-screen"
import SignInScreen from "@/screens/sign-in-screen"
import SignUpScreen from "@/screens/sign-up-screen"

const Stack = createNativeStackNavigator()
const Navigation = () => {
  const { user } = useUserGlobalStore()
  console.log(user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (<><Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        /></>) : (<><Stack.Screen
          name="Welcome"
          options={{
            headerShown: false,
          }} 
          component={WelcomeScreen}
        />
          <Stack.Screen
            name="SignIn"
            options={{
              headerShown: false,
            }}
            component={SignInScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{
              headerShown: false,
            }}
            component={SignUpScreen}

          />
        </>)}
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation
