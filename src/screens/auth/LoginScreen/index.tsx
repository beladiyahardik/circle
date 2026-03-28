import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../../components/Input';
import { Icons } from '../../../assets/images/icons';
import { fontSize, hp, isIOS, wp } from '../../../utils';
import {
  GoogleSignin,
  SignInResponse,
} from '@react-native-google-signin/google-signin';
const PRIMARY_COLOR = '#0064e0';

GoogleSignin.configure({
  // Use the WEB CLIENT ID from GCP here
  webClientId:
    '599060133162-ak3fhhrh3qd8pp87p0m3u97t3p80srv7.apps.googleusercontent.com',
  offlineAccess: true,
});

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: SignInResponse = await GoogleSignin.signIn();
      if (userInfo.data) {
        console.log(userInfo.data.user);
        // ✅ Now save user data to your Zustand store
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <View style={styles.inner}>
          {/* Header */}
          <View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Sign in to stay connected with your circle.
            </Text>
          </View>

          {/* Input Fields */}
          <View style={styles.form}>
            <Input
              label="Email"
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              label="Password"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              isPassword
            />
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.line} />
          </View>

          {/* Social Logins */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
              <Icons.GoogleIcon width={24} height={24} />
            </TouchableOpacity>

            {isIOS && (
              <TouchableOpacity style={[styles.socialButton]}>
                <Icons.AppleIcon width={24} height={24} />
              </TouchableOpacity>
            )}
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  flex: { flex: 1 },
  inner: {
    flex: 1,
    padding: wp(6),
    justifyContent: 'center',
    flexDirection: 'column',
    gap: hp(2.5),
  },
  title: {
    fontSize: fontSize(32),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: hp(2),
  },
  subtitle: { fontSize: fontSize(16), color: '#666' },
  form: { gap: hp(2.5) },
  forgotText: { color: PRIMARY_COLOR, textAlign: 'right', fontWeight: '600' },
  loginButton: {
    backgroundColor: PRIMARY_COLOR,
    height: hp(6),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: fontSize(18),
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(3),
  },
  line: { flex: 1, height: 1, backgroundColor: '#eee' },
  dividerText: {
    marginHorizontal: wp(4),
    color: '#999',
    fontSize: fontSize(14),
  },
  socialContainer: { flexDirection: 'row', gap: hp(2) },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    height: hp(5),
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleButton: { backgroundColor: '#000', borderColor: '#000' },
  socialButtonText: {
    fontSize: fontSize(16),
    fontWeight: '600',
    color: '#000',
  },
  socialIcon: { fontSize: fontSize(20), fontWeight: 'bold' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  footerText: { color: '#666', fontSize: fontSize(15) },
  signUpLink: {
    color: PRIMARY_COLOR,
    fontSize: fontSize(15),
    fontWeight: 'bold',
  },
});
