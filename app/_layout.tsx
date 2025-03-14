import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'YOU KNOW ME.GOV' }} />
      <Stack.Screen name="notifs" options={{ title: 'Notifications' }} />
      <Stack.Screen name="codes" options={{ title: 'Codes' }} />
      <Stack.Screen name="new" options={{ title: 'New Group' }} />
    </Stack>)
    ;
}
