import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Slot/>
    // <Stack>
    
    //   <Stack.Screen name="index" options={{ title: "Login" }} />
    //   <Stack.Screen name="register" options={{ title: "Register" }} />
    //   <Stack.Screen name="dashboard" options={{ title: "Dashboard" }} />
    // </Stack>
  );
}
