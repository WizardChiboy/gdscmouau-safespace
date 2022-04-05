import { React, useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewVentButton from "./Components/NewVentButton";
import db from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Vent = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const myDocs = await getDocs(collection(db, "vent"));
      setPost(myDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, [posts]);

  const [showMoreButton, setShowMoreButton] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 3);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 3 && !textShown) {
        setShowMoreButton(true);
        setNumLines(3);
      }
    },
    [textShown]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.ventHeading}> VentSpace </Text>
          <Text style={styles.ventHappening}>
            Whats happening? Share anonymously
          </Text>
        </View>

        {posts.map((post, id) => {
          return (
            <>
              <View style={styles.vent} key={post.id}>
                <View style={styles.ventHead}>
                  <Text style={styles.ventUser}>
                    {post.name} . {post.timeStamp}
                  </Text>
                  <Text style={styles.ventTime}>{post.time}</Text>
                </View>

                <View style={styles.ventBody}>
                  <Text style={styles.ventSubject}>{post.title}</Text>
                  <Text
                    style={styles.ventContent}
                    onTextLayout={onTextLayout}
                    numberOfLines={numLines}
                    ellipsizeMode="tail"
                  >
                    {post.content}
                  </Text>

                  {showMoreButton ? (
                    <Text onPress={toggleTextShown}>
                      {textShown ? "Read Less" : "Read More"}
                    </Text>
                  ) : null}
                </View>
                {/* 
                <View style={styles.ventFooter}>
                  <View>
                    <TouchableOpacity style={styles.likes}>
                      <Text style={styles.footerText}>
                        I can relate to this
                      </Text>

                      <Text style={styles.footerLikes}> 12</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity style={styles.likes}>
                      <Text style={styles.footerText}>Sorry about this</Text>

                      <Text style={styles.footerLikes}> 12</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity style={styles.likes}>
                      <Text style={styles.footerText}>Happy to hear this</Text>

                      <Text style={styles.footerLikes}> 12</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity style={styles.likes}>
                      <Text style={styles.footerText}>Stay hopeful</Text>

                      <Text style={styles.footerLikes}> 12</Text>
                    </TouchableOpacity>
                  </View>
                </View> */}
              </View>
            </>
          );
        })}
      </ScrollView>
      <NewVentButton />
    </SafeAreaView>
  );
};

export default Vent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
  },

  ventHeading: {
    marginTop: 50,
    color: "#861CFD",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },

  ventHappening: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginTop: 5,
  },

  vent: {
    marginTop: 30,
    borderBottomColor: "#e0ebeb",
    borderBottomWidth: 1,
  },

  ventHead: {
    flexDirection: "row",
    alignItems: "center",
  },

  ventUser: {
    fontSize: 18,
    color: "#861CFD",
    marginRight: 10,
  },

  ventTime: {
    fontSize: 14,
    color: "gray",
  },

  ventBody: {
    marginTop: 5,
    padding: 10,
  },

  ventSubject: {
    fontSize: 20,
    marginBottom: 5,
  },

  ventContent: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 5,
    // backgroundColor: "#861CFD",
    color: "black",
    // padding: 0,
    borderRadius: 20,
  },

  ventFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto",
    marginBottom: 20,
  },

  likes: {
    borderColor: "#861CFD",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    width: 150,
  },

  footerText: {
    fontSize: 10,
  },

  footerLikes: {
    fontSize: 10,
  },
});
