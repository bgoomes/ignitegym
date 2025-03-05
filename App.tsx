
import { Text, View } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {fonstLoaded ? <Text>Home</Text> : <View />}
    </View>
  );
}
