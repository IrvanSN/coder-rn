import {TextInput, StyleSheet} from "react-native";

const DetailLoginInput = ({value, ...restProps}) => {
  return (
      <TextInput
          style={styles.stylingTextInput}
          value={value}
          {...restProps}
      />
  )
}

export default DetailLoginInput;

const styles = StyleSheet.create({
  stylingTextInput: {
    backgroundColor: 'beige', borderWidth: 2, width: 300, paddingHorizontal: 10, paddingVertical: 5
  },
})
