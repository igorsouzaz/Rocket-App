import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Solicitações"/>

      <Input 
        placeholder='Número do Patrimônio'
      />

      <Input 
        placeholder='Descrição do Problema'
        flex={1}
        mt={5}
        multiline={true}
        textAlignVertical="top"
      />
      
      <Button
        title="Cadastrar"
        mt={5}
      />
    </VStack>
  );
}