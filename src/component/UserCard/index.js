import {Text, View, StyleSheet} from "react-native";

const UserCard = ({title}) => {
  return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
  )
}

export default UserCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#BC011E',
  },
  text: {
    color: '#ffffff'
  }
})
