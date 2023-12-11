import { Asset } from 'expo-asset';
import { ImageSourcePropType } from 'react-native';

export const images: { [key: string]: ImageSourcePropType } = {
  welcomeBg: require('@assets/images/welcome-bg.jpg'),
  facebookLogo: require('@assets/images/socials/facebook.svg'),
  googleLogo: require('@assets/images/socials/google.svg'),
  logo: require('@assets/images/logo.svg'),
  logo_sm: require('@assets/images/logo-sm.png'),
  logo_lg: require('@assets/images/logo-lg.png'),
};

type VirtualAssetModuleType = number | string;

// preload images
const imageAssets = Object.keys(images).map(key => {
  return Asset.fromModule(images[key] as VirtualAssetModuleType).downloadAsync();
});

export const loadImages = () => Promise.all(imageAssets);
