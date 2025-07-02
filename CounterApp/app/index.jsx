import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <View style={style.container}>
        <Text style={style.heading}>Counter App</Text>
        <Text style={style.text}>{counter}</Text>
        <View style={style.btnContainer}>
          <Button onPress={increment} title="Increment" color={"#cc00cc"} />
          <Button onPress={decrement} title="Decrement" color={"#cc00cc"} />
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 50,
    marginBottom: 20,
    backgroundColor: "#ff9999",
    padding: 10,
    borderRadius: 12,
  },
  heading: {
    fontSize: 32,
    marginBottom: 32,
  },
  btnContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
  },
});
