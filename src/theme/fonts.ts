import { loadAsync } from 'expo-font';

export const fonts = {
  sofiaPro: {
    regular: 'sofiaPro',
    semiBold: 'sofiaPro_semiBold',
    bold: 'sofiaPro_bold',
  },
};

// preload fonts
export const loadFonts = () =>
  loadAsync({
    sofiaPro: require('@assets/fonts/sofia-pro.ttf'),
    sofiaPro_semiBold: require('@assets/fonts/sofia-pro-semi-bold.otf'),
    sofiaPro_bold: require('@assets/fonts/sofia-pro-bold.otf'),
  });
