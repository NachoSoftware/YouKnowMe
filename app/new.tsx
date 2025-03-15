import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { getLink } from "./be";

const BLUE_THEME = "rgb(0, 0, 255)";


export default function New() {
  const [nLinks, setNLinks] = React.useState(0);
  const [links, setLinks] = React.useState<Array<string>>([]);

  const isGenerated = links.length > 0;

  const getLinks = (n: number) => {
    const linkArr = [];
    for (let i = 0; i < nLinks; i++){
      linkArr.push(getLink(i))
    }
    setLinks(linkArr);
  };

 
  return (
    <>
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          color: 'black',
          margin: 5,
          fontSize: 30,
      }}>
        Number of People to Invite: {nLinks}
      </Text>
      {!isGenerated && (
        <>
          <View style={{flexDirection: 'row', gap: 50, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => setNLinks(nLinks + 1)}>
              <Text style={{fontSize: 30}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setNLinks(nLinks - 1)}>
              <Text style={{fontSize: 30}}>-</Text>
            </TouchableOpacity>
          </View>
          <Button title="GO" onPress={() => getLinks(nLinks)}/>
        </>
      )}

      {links.map(link => <Text style={{margin: 10, padding: 4, backgroundColor: 'rgba(255, 255, 255, 128)' }} key={link}>
        {link}
      </Text>)}
    </View>
</>
  );
}
