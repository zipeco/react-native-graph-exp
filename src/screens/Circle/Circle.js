import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("screen").width - 50;
const Circle = () => {
  const data = {
    labels: ["B", "C"],
    data: [0.4, 0.8],
  };

  const chartConfig = {
    backgroundColor: "#123123",
    // backgroundGradientFrom: "#321321",
    // backgroundGradientFromOpacity: 0.3,
    // backgroundGradientTo: "#123123",
    // backgroundGradientToOpacity: 0.3,
    color: (o) => "rgba(100, 100, 100, 1)",
    // strokeWidth: 3,
    // barPercentage: 0.5,
    // useShadowColorFromDataset: false,
  };

  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={screenWidth}
        chartConfig={chartConfig}
        height={220}
        strokeWidth={16}
        radius={40}
        hideLegend={false}
      />
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
