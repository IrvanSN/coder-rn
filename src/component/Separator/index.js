import {View} from "react-native";

const Separator = ({size, position}) => {
  return (
      <View style={position === 'horizontal' ? {marginHorizontal: size} : {marginVertical: size}} />
  )
}

export default Separator;
