import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Text, View } from "../components/Themed";

import * as Linking from "expo-linking";

export default function Resources() {
  const depression = [
    {
      link: "https://www.healthline.com/health/how-to-stop-a-panic-attack",
      id: 1,
    },

    {
      link: "https://www.healthline.com/health/depression/symptoms-of-depression-in-men",
      id: 2,
    },

    {
      link: "https://www.healthline.com/health/mental-health/therapy-for-couples",

      id: 3,
    },

    {
      link: "https://www.psycom.net/depression.central.gabapentin.html",

      id: 4,
    },

    {
      link: "https://www.verywellmind.com/relationships-and-depression-10-tips-to-cope-1067466",
      id: 5,
    },

    {
      link: "https://www.verywellmind.com/how-to-cope-with-regret-5218665",
      id: 6,
    },

    {
      link: "https://www.verywellmind.com/how-to-make-yourself-feel-better-right-now-5093352",
      id: 7,
    },

    {
      link: "https://www.verywellmind.com/9-things-to-do-if-you-feel-hopeless-5081877",
      id: 8,
    },

    {
      link: "https://www.verywellmind.com/7-things-to-do-if-you-feel-unappreciated-5081881",
      id: 9,
    },

    {
      link: "https://www.verywellmind.com/5-things-to-do-if-you-feel-angry-5092021",
      id: 10,
    },
  ];

  const panic = [
    {
      link: "https://www.healthline.com/health/mental-health/how-to-make-friends-with-anxiety-a-simple-technique-to-gain-perspective",
      id: 1,
    },

    {
      link: "https://www.healthline.com/health/how-to-stop-a-panic-attack",
      id: 2,
    },

    {
      link: "https://www.psycom.net/when-panic-attacks-how-to-stop",

      id: 3,
    },

    {
      link: "https://www.verywellmind.com/dr-wendy-suzuki-the-verywell-mind-podcast-5222007",

      id: 4,
    },

    {
      link: "https://www.verywellmind.com/coping-with-existential-anxiety-4163485",
      id: 5,
    },

    {
      link: "https://www.verywellmind.com/how-to-self-soothe-when-coping-with-anxiety-5199606",
      id: 6,
    },

    {
      link: "https://www.verywellmind.com/learning-how-to-cope-with-relationship-anxiety-5186885",
      id: 7,
    },

    {
      link: "https://www.verywellmind.com/extreme-anxiety-symptoms-types-treatments-and-coping-5201901",
      id: 8,
    },

    {
      link: "https://www.verywellmind.com/symptoms-of-panic-disorder-and-attacks-2584246",
      id: 9,
    },

    {
      link: "https://www.verywellmind.com/online-support-for-panic-disorder-2584363",
      id: 10,
    },
  ];

  const bipolar = [
    {
      link: "https://www.healthline.com/health/bipolar-disorder/bipolar-depression",
      id: 1,
    },
    {
      link: "https://www.verywellmind.com/managing-a-hypomanic-or-manic-episode-5213815",
      id: 2,
    },
    { link: "https://www.verywellmind.com/bipolar-mania-quiz-380310", id: 3 },
  ];

  const trauma = [
    {
      link: "https://www.healthline.com/health/mental-health/racial-trauma",
      id: 1,
    },

    {
      link: "https://www.verywellmind.com/sexual-trauma-causes-symptoms-consequences-and-treatments-5217579",
      id: 2,
    },
    {
      link: "https://www.verywellmind.com/how-to-find-emotional-healing-5214462",
      id: 3,
    },
    {
      link: "https://www.verywellmind.com/what-to-know-about-miscarriage-grief-and-how-to-cope-5210598",
      id: 4,
    },
    {
      link: "https://www.verywellmind.com/why-am-i-always-angry-5184554",
      id: 5,
    },
    { link: "https://www.verywellmind.com/primary-emotions-2797378", id: 6 },
    {
      link: "https://www.verywellmind.com/ptsd-in-women-signs-and-symptoms-5198684",
      id: 7,
    },

    {
      link: "https://www.verywellmind.com/ptsd-and-eating-disorders-4172983",
      id: 8,
    },
    {
      link: "https://www.verywellmind.com/accelerated-resolution-therapy-overview-4588053",
      id: 9,
    },
    {
      link: "https://www.verywellmind.com/guilt-complex-definition-symptoms-traits-causes-treatment-5115946",
      id: 10,
    },
  ];

  const sucide = [
    {
      link: "https://www.healthline.com/health/mental-health/suicide-resource-guide",
      id: 1,
    },
    {
      link: "https://www.healthline.com/health/depression/suicidal-but-afraid-to-die",
      id: 2,
    },
    { link: "https://www.psycom.net/suicide-warning-signs", id: 3 },
    {
      link: "https://www.verywellmind.com/what-to-do-when-you-feel-like-giving-up-on-life-5186949",
      id: 4,
    },
    { link: "https://www.verywellmind.com/suicide-safety-plan-1067524", id: 5 },

    {
      link: "https://www.verywellmind.com/tips-for-coping-with-suicidal-thoughts-1067530",
      id: 6,
    },
    {
      link: "https://www.verywellmind.com/what-to-do-when-a-friend-is-suicidal-1065472",
      id: 7,
    },
    { link: "https://www.verywellmind.com/youth-suicide-facts-1066787", id: 8 },
    {
      link: "https://www.verywellmind.com/suicide-prevention-tips-1067531",
      id: 9,
    },
  ];

  const stress = [
    {
      link: "https://www.healthline.com/health/mind-body/9-tips-for-meditating-when-youre-an-overthinker",
      id: 1,
    },

    {
      link: "https://www.healthline.com/health/mental-health/burnout-recovery",
      id: 2,
    },

    {
      link: "https://www.healthline.com/health/mental-health/how-to-control-your-mind",
      id: 3,
    },

    { link: "https://www.healthline.com/health/best-guided-journals", id: 4 },

    {
      link: "https://www.health.harvard.edu/mind-and-mood/finding-your-focus",
      id: 5,
    },

    {
      link: "https://www.health.harvard.edu/mind-and-mood/getting-through-grief",
      id: 6,
    },

    {
      link: "https://www.health.harvard.edu/mind-and-mood/managing-intrusive-thoughts",
      id: 7,
    },

    {
      link: "https://www.verywellmind.com/anxiety-about-ukraine-and-the-threat-of-war-5221204",
      id: 8,
    },

    {
      link: "https://www.verywellmind.com/how-to-cope-with-fomo-4174664",
      id: 9,
    },
    {
      link: "https://www.verywellmind.com/top-school-stress-relievers-for-students-3145179",
      id: 10,
    },
  ];

  const anciety = [
    {
      link: "https://www.verywellmind.com/how-do-i-maintain-good-eye-contact-3024392",
      id: 1,
    },

    {
      link: "https://www.verywellmind.com/how-to-cope-with-social-awkwardness-after-covid-19-5180279",
      id: 2,
    },

    {
      link: "https://www.verywellmind.com/things-people-with-social-anxiety-crave-3024726",
      id: 3,
    },

    {
      link: "https://www.verywellmind.com/what-are-negative-automatic-thoughts-3024608",
      id: 4,
    },

    { link: "https://www.verywellmind.com/the-panic-cycle-3024888", id: 5 },

    {
      link: "https://www.verywellmind.com/imposter-syndrome-and-social-anxiety-disorder-4156469",
      id: 6,
    },

    {
      link: "https://www.verywellmind.com/why-do-people-with-social-anxiety-disorder-blush-3024878",
      id: 7,
    },

    {
      link: "https://www.verywellmind.com/meditation-for-social-anxiety-3024211",
      id: 8,
    },

    {
      link: "https://www.verywellmind.com/how-is-aromatherapy-used-for-social-anxiety-disorder-3024210",
      id: 9,
    },
    {
      link: "https://www.verywellmind.com/cognitive-behavioral-group-therapy-social-anxiety-disorder-3024944",
      id: 10,
    },
  ];

  const ocd = [
    {
      link: "https://www.verywellmind.com/obsessive-compulsive-disorder-ocd-signs-and-symptoms-5217606",
      id: 1,
    },

    { link: "https://www.verywellmind.com/top-ocd-facts-2510674", id: 2 },

    {
      link: "https://www.verywellmind.com/thought-action-fusion-and-ocd-2510478",
      id: 3,
    },

    {
      link: "https://www.verywellmind.com/coping-with-treatment-resistant-ocd-2510637",
      id: 4,
    },

    {
      link: "https://www.verywellmind.com/ocd-and-perfectionism-2510483",
      id: 5,
    },

    {
      link: "https://www.verywellmind.com/how-do-i-cope-with-a-teenager-with-ocd-2510570",
      id: 6,
    },

    {
      link: "https://www.verywellmind.com/habit-reversal-training-2510618",
      id: 7,
    },

    {
      link: "https://www.verywellmind.com/herbal-remedies-for-ocd-2510631",
      id: 8,
    },

    {
      link: "https://www.verywellmind.com/group-cognitive-behavioral-therapy-for-ocd-2510611",
      id: 9,
    },

    {
      link: "https://www.verywellmind.com/group-cognitive-behavioral-therapy-for-ocd-2510611",
      id: 10,
    },
    { link: "https://www.verywellmind.com/ocd-self-help-2510625", id: 11 },
  ];

  const improve = [
    {
      link: "https://www.verywellmind.com/how-to-meditation-done-your-way-5203772",
      id: 1,
    },

    {
      link: "https://www.verywellmind.com/6-ways-to-become-a-nicer-person-5194074",
      id: 2,
    },
    {
      link: "https://www.verywellmind.com/i-m-not-good-at-anything-combatting-low-self-esteem-5216365",
      id: 3,
    },

    {
      link: "https://www.verywellmind.com/how-to-manage-a-short-temper-5186900",
      id: 4,
    },

    {
      link: "https://www.verywellmind.com/how-to-stop-being-a-people-pleaser-5184412",
      id: 5,
    },

    { link: "https://www.verywellmind.com/best-massagers-5096177", id: 6 },

    {
      link: "https://www.verywellmind.com/skip-the-new-year-s-resolutions-and-set-realistic-goals-5095010",
      id: 7,
    },

    {
      link: "https://www.verywellmind.com/how-do-you-live-in-the-present-5204439",
      id: 8,
    },

    {
      link: "https://www.verywellmind.com/what-to-do-when-you-feel-like-you-cant-do-anything-right-5218204",
      id: 9,
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.resourceHeading}> Resources </Text>

          <Text style={styles.resourceM}> Get motivational books </Text>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> DEPRESSION</Text>
            {depression.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> PANIC ATTACKS AND ANXIETY </Text>
            {panic.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> BIPLOLAR DISORDER </Text>
            {bipolar.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> TRAUMA AND PTSD </Text>
            {trauma.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> SUICIDAL HELP GUIDE </Text>
            {sucide.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> MANAGING STRESS </Text>
            {stress.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> SOCIAL ANXIETY</Text>
            {anciety.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> OBSESSIVE COMPULSIVE DISORDER</Text>
            {ocd.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>

          <View style={styles.resourceContainer}>
            <Text style={styles.title}> SELF-IMPROVEMENTS</Text>
            {improve.map((i) => {
              return (
                <>
                  <View key={i.id} style={styles.linkContainer}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(i.link)}
                    >
                      {i.id}- {i.link}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
  },

  resourceHeading: {
    marginTop: 50,
    color: "#861CFD",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },

  resourceM: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginTop: 5,
    marginBottom: 40,
  },

  resourceContainer: {
    marginBottom: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },

  title: {
    color: "#861CFD",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  link: {
    marginBottom: 30,
    color: "blue",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  linkContainer: {},
});
