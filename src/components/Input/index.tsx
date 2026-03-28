import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { fontSize, hp, wp } from '../../utils';
import { Icons } from '../../assets/images/icons';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  isPassword?: boolean;
}

const PRIMARY_COLOR = '#0064e0';

const Input = ({ label, error, isPassword, style, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(isPassword);

  console.log('secureText', secureText);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.focusedBorder,
          error ? styles.errorBorder : null,
        ]}
      >
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor="#999"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureText}
          // Pass all other props (value, onChangeText, etc.)
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
          >
            {secureText ? (
              <Icons.OpenEyeIcon width={24} height={24} />
            ) : (
              <Icons.CloseEyeIcon width={24} height={24} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: fontSize(14),
    fontWeight: '600',
    color: '#333',
    marginBottom: hp(0.6),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: wp(2.8),
    height: hp(6),
    paddingHorizontal: wp(3),
  },
  input: {
    flex: 1,
    fontSize: fontSize(16),
    color: '#000',
    height: '100%',
  },
  focusedBorder: {
    borderColor: PRIMARY_COLOR,
  },
  errorBorder: {
    borderColor: '#ff4d4f',
  },
  toggleText: {
    fontSize: fontSize(14),
    color: PRIMARY_COLOR,
    fontWeight: '700',
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: fontSize(12),
    marginTop: hp(0.5),
  },
});
