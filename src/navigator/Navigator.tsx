import { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAppModule } from '@modules/app.module';
import { AuthStackNavigator } from './stack';

function Navigator() {
  const { dispatch, checked, loggedIn, loadUser } = useAppModule();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  // TODO: switch router by loggedIn status
  console.log('[##] loggedIn', loggedIn);

  return checked && loggedIn ? (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  ) : (
    <View />
  );
}

export default Navigator;
