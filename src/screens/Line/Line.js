import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width - 50;
const Line = () => {
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [100, 200, 150, 250, 300, 188],
        color: (opacity = 1) => `rgba(255, 255, 146, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Legendary"],
  };

  const lineConfig = {
    backgroundColor: "salmon",
    // backgroundGradientFrom: "#1E2923",
    // backgroundGradientFromOpacity: 0.5,
    // backgroundGradientTo: "#1E2923",
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(25, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    barRadius: 50,
    decimalPlaces: 1,
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={lineData}
        width={screenWidth}
        height={220}
        chartConfig={lineConfig}
        style={styles.chart}
        bezier
      />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    borderRadius: 40,
    elevation: 10,
    backgroundColor: "salmon",
  },
});
