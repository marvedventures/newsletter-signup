import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, children, disabled }) => {
  return (
    <Pressable
      style={[buttonStyles.buttonWrapper, disabled && buttonStyles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={buttonStyles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const buttonStyles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#495E57',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: '16',
    color: 'white',
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
});
export default Button;
