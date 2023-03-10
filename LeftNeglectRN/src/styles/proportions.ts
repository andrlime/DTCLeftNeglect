import { Dimensions } from "react-native";

// We can safely call Dimensions.get() here because
// Dimensions is initialized upon launching the app
export const StandardComponent = {
  width: Dimensions.get("screen").width * 0.85,
  borderRadius: 12,
};
