import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#ecf1f5",
    flex: 1
  },
  header: {
    marginTop: 50,
    margin: 15,
    flex: 1
  },
  container: {
    margin: 15,
    // maxHeight: 550
    flex: 6
  },
  footer: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
    flex: 1
  },
  h1: {
    fontSize: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  betitem: {
    height: 100,
    marginTop: 5,
    marginBottom: 10,
    margin: 5,
    padding: 10,
    backgroundColor: "white",
    shadowOpacity: 0.75,
    shadowRadius: 2,
    shadowColor: "gray",
    shadowOffset: { height: 2, width: 2 },
    borderRadius: 10
  },
  navitem: {
    margin: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  activenav: {
    borderTopColor: "#28628F",
    borderTopWidth: 3
  },
  activeimg: {
    tintColor: "#28628F"
  },
  centertext: {
    padding: 20
  },
  withLeftborder: {
    borderLeftColor: "gray",
    borderLeftWidth: 1
  },
  iconimg: {
    width: 36,
    height: 36
  }
});

export default styles;
