import { useState } from 'react';
import { VStack , HStack, Center, IconButton, useTheme, Text, Heading, FlatList} from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';

export function Home() {
  const [StatusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([]);

  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack 
        w="full"
        bg="gray.600"
        justifyContent="space-between"
        alignItems="center"
        pt={12} pb={5} px={6}
      >
        <Logo />

        <IconButton 
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
          <Heading color="gray.100">
            Meus chamados
          </Heading>
          
          <Text color="gray.200">
            3
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter 
            title="Em andamento"
            type="open"
            onPress={() => setStatusSelected('open')}
            isActive={StatusSelected === 'open'}
          />

          <Filter
            title="Finalizados"
            type="closed"
            onPress={() => setStatusSelected('closed')}
            isActive={StatusSelected === 'closed'}
          />
        </HStack>

        <FlatList 
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Order data={item}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        ListEmptyComponent={() => (
          <Center>
            <ChatTeardropText color={colors.gray[300]} size={40}/>
            <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
              Você ainda não possui {"\n"}
              solicitações {StatusSelected === 'open' ? 'em aberto' : 'finalizadas' }
            </Text>
          </Center>
        )}
        />
      <Button title="Nova solicitação"></Button>
      </VStack>
    </VStack>
  );
}