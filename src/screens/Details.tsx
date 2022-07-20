import { VStack, Heading, useTheme } from 'native-base';

import { Header} from '../components/Header';

export function Details() {

  return (
    <VStack flex={1} bg="gray.700">
      <Header title="Solicitação"/>   
    </VStack>
  );
}