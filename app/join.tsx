import { RouteProp, useRoute } from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const BLUE_THEME = "rgb(0, 0, 255)";

type JoinParams = {
  Join: {
    id: string;
  }
};

export const Join = () => {
  const route = useRoute<RouteProp<JoinParams, 'Join'>>();
  const navigation = useNavigation();

  const [hitJoined, joining] = React.useState(false);

  const validId = Boolean(route.params?.id);

  const redirectIn3 = () => {
    window.setTimeout(() => navigation.navigate('notifs' as never), 2000);
  }

  const joinButton = () => (
    <>
      {validId ? (
        <Button color={BLUE_THEME} title={`Join: ${route.params.id}`} onPress={() => {
          joining(true);
          redirectIn3();
        }}/>
      ) : (
        <Text>Invalid join link</Text>
      )}
    </>
  );

  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {hitJoined ? (
        <Text>Noted. Redirecting to <Link style={{ textDecorationStyle: 'dotted' }} href="/notifs">log in..</Link></Text>
      ) : (
        joinButton()
      )
      }
    </View>
</>
  );
}

export default Join;
