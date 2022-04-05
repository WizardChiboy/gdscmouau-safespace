import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import pic from "../assets/images/don.jpg";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const profile = () => {
    navigation.navigate("Profile");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.welcomeUserHeader}>
            <Text style={styles.welcomeUser}>
              good morning <Text style={styles.userName}>stephen</Text>
            </Text>

            <View>
              <TouchableOpacity onPress={profile}>
                <Image source={pic} style={styles.dp} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.welcomeText}> Welcome to your SafeSpace</Text>
        </View>

        {/* <View style={styles.feeling}>
          <Text style={styles.feeling__question}>
            Wow are you feeling today?
          </Text>
        </View> */}

        <View style={styles.colorFeel}>
          <Text style={styles.firstColor}>You</Text>
          <Text style={styles.secondColor}>Are</Text>
          <Text style={styles.thirdColor}>The</Text>
          <Text style={styles.fourthColor}>Best</Text>
        </View>

        <View style={styles.firstBox}>
          <Text style={styles.vibeRateTextHeading}>
            Rate Your energy and emotions.
          </Text>
          <Text style={styles.vibeRateTextContent}>
            Check-in and track your self-care and happiness today
          </Text>
          <TouchableOpacity
            style={styles.vibeCheck}
            onPress={() => {
              navigation.navigate("VibeCheck");
            }}
          >
            <Text style={styles.vibeCheckText}>Vibe Check</Text>
            {/* <View style={styles.welcomeText}> &#8594</View> */}
          </TouchableOpacity>
        </View>

        <View style={styles.motivationContainer}>
          <Text style={styles.motivationHeader}>Daily Affirmation</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I deserve the very best life has to offer
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I can overcome any obstacle that stands in my way.
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I can be anything I want to be
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I am stronger than I look
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    It’s gonna be alright, I’m gonna figure this out too
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I’m fine wine; I get better with age
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I love myself
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I don’t need anybody’s validation, I am enough.
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I’m grateful for every good thing in my life
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I am in line with opportunities that will make my life
                    better
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    It won’t always be night
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I’ll get to my goals no matter what
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    Today is another opportunity to be world class
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I deserve happiness and peace.
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>I am strong</Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>I am Amazing</Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I can move any mountain
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    My mind is sharp and focused
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I am unstoppable
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I may fall but I will not remain down
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    My mistakes are lessons I have learned from
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    Every inch of me is beautiful
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I am in control of my actions every day
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I chose to rise above the noise
                  </Text>
                </View>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "(145deg, rgba(27, 190, 255, 0.1) -21.24%, rgba(134, 28, 253, 0.1) 95.63%);",
                  "transparent",
                ]}
                style={styles.motivationContent}
              >
                <View style={styles.motivationContent}>
                  <Text style={styles.motivationContentText}>
                    I believe in myself
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
  },

  dp: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  welcomeUserHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },

  welcomeUser: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  userName: {
    color: "#861CFD",
  },

  welcomeText: {
    marginTop: 10,
    fontSize: 18,
  },

  feeling: {
    marginTop: 20,
  },

  feeling__question: {
    color: "#861CFD",
    fontSize: 16,
  },

  firstBox: {
    height: 250,
    width: "100%",
    // backgroundColor: linear-gradient(to bottom, #398dcaaa, #a365beaa);
    backgroundColor: "#398dcaaa",
    borderRadius: 20,
    padding: 25,
    marginBottom: 25,
    position: "relative",
    marginTop: 20,
  },

  vibeRateTextHeading: {
    fontSize: 25,
    marginBottom: 9,
    fontWeight: "bold",
    lineHeight: 28,
  },

  vibeRateTextContent: {
    fontSize: 16,
    width: "100%",
    marginBottom: 18,
  },

  vibeCheck: {
    backgroundColor: "#861CFD",
    width: "50%",
    borderRadius: 20,
  },

  vibeCheckText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },

  motivationContainer: {
    marginTop: 10,
  },

  motivationHeader: {
    marginTop: 2,
    color: "#861CFD",
    fontSize: 16,
  },

  motivationContent: {
    marginTop: 10,
    padding: 10,
    width: "95%",
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 50,
  },

  motivationContentText: {
    fontSize: 16,
    textAlign: "center",
  },

  colorFeel: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  firstColor: {
    backgroundColor: "rgba(253, 68, 28, 0.1)",
    color: "#FD441C",
    borderRadius: 20,
    width: "20%",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },

  secondColor: {
    backgroundColor: "rgba(27, 190, 255, 0.1)",
    color: "#1BBEFF",
    borderRadius: 20,
    width: "20%",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },

  thirdColor: {
    backgroundColor: "rgba(160, 39, 36, 0.1)",
    color: "#A02724",
    borderRadius: 20,
    width: "20%",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },

  fourthColor: {
    backgroundColor: "rgba(24, 185, 59, 0.1)",
    color: "#18B93B",
    borderRadius: 20,
    width: "20%",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
});
