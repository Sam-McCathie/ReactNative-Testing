import React from 'react';
import {View, Text, Button} from 'react-native';

// Works much the same as regular React
type Props = {
  name: string;
  id: number;
  buttonColour: string;
  action: () => void;
};

const Custom: React.FC<Props> = ({name, id, buttonColour, action}) => {
  return (
    <View>
      <Text>
        Hello {name}, {id}.
      </Text>
      <Button
        title="Prop Function"
        color={buttonColour}
        onPress={action}></Button>
    </View>
  );
};

const CustomComponentsAndProps: React.FC = () => {
  return (
    <View>
      <Text>Custom Components And Props</Text>
      <Custom
        name="Sammy"
        id={26}
        buttonColour="red"
        action={() => console.log('Clicked')}
      />
    </View>
  );
};

export default CustomComponentsAndProps;
