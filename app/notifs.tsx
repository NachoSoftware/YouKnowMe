import { Text, View } from "react-native";
import { validateUser } from "./be";

export default function Notifs() {

  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Notifs here..</Text>
    </View>
</>
  );
}
