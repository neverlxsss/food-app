import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { colors, fonts, images } from '@theme';
import { Image } from 'expo-image';

const Welcome = () => {
  return (
    <ImageBackground style={styles.backgroundImage} source={images.welcomeBg}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </View>

          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              Welcome to <Text style={styles.welcomeTextTitle}>FoodHub</Text>
            </Text>
            <Text style={styles.welcomeSubText}>
              Your favourite foods delivered {'\n'}fast at your door.
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.signInWithContainer}>
              <View style={styles.signInWithLine} />
              <Text style={styles.signInWithText}>sign in with</Text>
              <View style={styles.signInWithLine} />
            </View>

            <View style={styles.socialsContainer}>
              <View style={styles.socialButton}>
                <Image source={images.facebookLogo} style={styles.socialLogo} />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </View>
              <View style={styles.socialButton}>
                <Image source={images.googleLogo} style={styles.socialLogo} />
                <Text style={styles.socialButtonText}>Google</Text>
              </View>
            </View>

            <View style={styles.startWithEmailButton}>
              <Text style={styles.startWithEmailButtonText}>Start with email or phone</Text>
            </View>

            <Text style={styles.haveAccountText}>
              Already have an account? <Text style={styles.signInText}>Sign in</Text>
            </Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  welcomeContainer: {
    marginTop: 160,
    marginLeft: 28,
    marginRight: 36,
  },
  welcomeText: {
    fontFamily: fonts.sofiaPro.bold,
    fontSize: 53,
    lineHeight: 68,
  },
  welcomeTextTitle: {
    color: colors.orange,
    fontSize: 45,
  },
  welcomeSubText: {
    marginTop: 9,
    marginLeft: 2,
    marginRight: 43,
    color: colors.gray,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.sofiaPro.regular,
  },
  skipButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 27.5,
    width: 55,
    height: 32,
    borderRadius: 27.5,
    backgroundColor: colors.white,
  },
  skipButtonText: {
    alignSelf: 'center',
    color: colors.orange,
    fontSize: 14,
    fontWeight: '400',
  },
  signInWithContainer: {
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInWithText: {
    paddingHorizontal: 16,
    fontFamily: fonts.sofiaPro.regular,
    color: colors.white,
    fontSize: 16,
  },
  signInWithLine: {
    width: 84,
    height: 1,
    marginTop: 6,
    backgroundColor: colors.white,
  },
  socialsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 23,
    gap: 35,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 140,
    height: 54,
    borderRadius: 27.5,
    backgroundColor: colors.white,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  socialLogo: {
    marginLeft: 14,
    width: 28,
    height: 28,
  },
  socialButtonText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.sofiaPro.semiBold,
    textTransform: 'uppercase',
    fontSize: 13,
    color: colors.black,
    letterSpacing: 0.65,
  },
  startWithEmailButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    width: 315,
    height: 54,
    backgroundColor: 'rgba(255, 255, 255, 0.21)',
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.white,
  },
  startWithEmailButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.sofiaPro.regular,
    fontSize: 17,
  },
  haveAccountText: {
    color: colors.white,
    marginBottom: 25,
    alignSelf: 'center',
    fontFamily: fonts.sofiaPro.regular,
  },
  signInText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.white,
  },
});
