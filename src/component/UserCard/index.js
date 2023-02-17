import {Text, View, StyleSheet} from "react-native";
import Separator from "../Separator";

const UserCard = ({title, value}) => {
  return (
      <View style={styles.wrapper}>
        <View style={styles.bgText}>
          <Text style={styles.text}>{title}:</Text>
        </View>
        <Separator size={5} position={'horizontal'} />
        <View style={styles.bgText}>
          <Text style={styles.text}>{value}</Text>
        </View>
      </View>
  )
}

export default UserCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginBottom: 2
  },
  text: {
    color: 'black'
  },
  bgText: {
    backgroundColor: 'beige'
  }
})
