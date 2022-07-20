import { Button as BNButton, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title : String
}

export function Button({title, ...rest} : Props) {
  return (
    <BNButton 
    h={14}
    bg="green.700"
    fontSize="sm"
    rounded="sm"
    _pressed={{bg: "green.500"}}
    {...rest }>
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </BNButton>
    
  );
}