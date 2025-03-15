import { Link, useNavigation } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

const BLUE_THEME = "rgb(0, 0, 255)";

export default function Index() {
  const navigation = useNavigation();
  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button color={BLUE_THEME} title="Create New Group" onPress={() => navigation.navigate('new' as never)}/>
    </View>
</>
  );
}
