import { StatusBar } from "expo-status-bar";
import { Avatar } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
const jobTitle = [
  { title: "Full-time" },
  { title: "Part-time" },
  { title: "Contractor" },
];

const nearByJobs = [
  {
    title: "Senior React Developer",
    description: "Contract",
    icon: require("./assets/Upwork.png"),
    id: "1",
  },
  {
    title: "React Developer",
    description: "Contract",
    icon: require("./assets/zora.png"),
    id: "2",
  },
  {
    title: "Looking for a react developer",
    description: "Full-time",
    icon: require("./assets/Upwork.png"),
    id: "3",
  },
  {
    title: "Senior Node/React developer",
    description: "Full-time",
    icon: require("./assets/zora.png"),
    id: "4",
  },
  {
    title: "Mid software developer",
    description: "Per-time",
    icon: require("./assets/icon.png"),
    id: "5",
  },
  {
    title: "Looking for a react developer",
    description: "Full-time",
    icon: require("./assets/zora.png"),
    id: "6",
  },
  {
    title: "Senior Node/React developer",
    description: "Full-time",
    icon: require("./assets/Upwork.png"),
    id: "7",
  },
  {
    title: "Mid software engineer",
    description: "Per-time",
    icon: require("./assets/icon.png"),
    id: "8",
  },
];
interface Props {
  title: string;
  description: string;
  icon: React.JSX.Element;
}
export default function App({ title, description, icon }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
        </View>
        <Avatar
          rounded
          title="SM"
          activeOpacity={0.7}
          source={{
            uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />
      </View>

      <View style={{ marginTop: 25, marginBottom: 25 }}>
        <Text style={styles.userName}>Hello Samson</Text>
        <Text style={styles.jobSearch}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder=" What are you looking for?"
          style={styles.searchInput}
          placeholderTextColor="#667085"
        />
        <Image
          style={{
            height: 50,
            width: 50,
            backgroundColor: "orange",
            borderColor: "rgb(242, 244, 252)",
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={require("./assets/Magnifier.svg")}
          resizeMode="contain"
        />
      </View>

      <FlatList
        data={jobTitle}
        contentContainerStyle={{ flexDirection: "row", gap: 15 }}
        renderItem={({ item }) => (
          <ScrollView style={styles.jobTitleContainer}>
            <View style={styles.jobBtn}>{item.title}</View>
          </ScrollView>
        )}
        keyExtractor={(item) => item.title}
      />

      <View style={styles.boxContainer}>
        <Text style={styles.popular}>Popular Job</Text>
        <Text style={{ color: "#667085" }}>Show all</Text>
      </View>

      <View style={styles.popularJob}>
        <View>
          <Image
            style={{ height: 60, width: 60 }}
            source={require("./assets/zora.png")}
            resizeMode="contain"
          />
          <Text>Zora</Text>
        </View>
        <View>
          <Image
            style={{ height: 60, width: 60 }}
            source={require("./assets/Upwork.png")}
            resizeMode="contain"
          />
          <Text>Upwork</Text>
        </View>
      </View>
      <View style={styles.popularJob}>
        <Text style={styles.popular}>React Developer</Text>

        <Text style={styles.popular}>Looking for</Text>
      </View>

      <View style={styles.nearJobs}>
        <Text style={styles.popular}>Near by jobs</Text>
        <Text style={{ color: "#667085" }}>Show all</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={nearByJobs}
          renderItem={({ item }) => (
            <View style={styles.jobDescriptionContainer}>
              <Image style={{ height: 30, width: 60 }} source={item.icon} />
              <View>
                <View style={styles.items}>{item.title}</View>
                <View style={styles.description}>{item.description}</View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    // height:
    position: "relative",
    top: 0,

    // position: "fixed",
    // gap: 5,
  },
  nearJobs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 55,
    marginBottom: 30,
  },
  bar: {
    width: "40px",
    height: 3,
    backgroundColor: "#000",
    flexDirection: "column",
    marginBottom: 6,
  },
  avatar: {
    width: "15%",
    height: 40,
    backgroundColor: "grey",
    borderRadius: 5,
  },
  userName: {
    fontSize: 18,
    color: "#667085",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  jobSearch: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchInput: {
    backgroundColor: "rgb(242, 244, 252)",
    height: 50,
    paddingLeft: 10,
    borderRadius: 10,
    width: "100%",
    borderColor: "none",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  jobTitleContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    gap: 8,
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
  },
  jobBtn: {
    // width: "100%",
    borderColor: "rgb(242, 244, 252)",
    borderWidth: 3,
    borderRadius: 10,
    padding: 4,
  },
  popular: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#667085",
  },
  popularJob: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingLeft: 6,
    paddingRight: 6,
  },
  jobDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 35,
    marginBottom: 30,
  },
  items: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#667085",
  },
  description: {
    color: "#667085",
    fontSize: 12,
  },
});
