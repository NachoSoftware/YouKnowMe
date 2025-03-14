import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>That's not a page don't snoop around <Link href="/">go back to the home page</Link></Text>
    </View>
</>
  );
}
