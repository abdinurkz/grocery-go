import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Splash from './Splash';
import { connect } from 'react-redux'
import { loginUser } from '../store/actions'
import axios from 'axios'
import {Formik} from 'formik';

const Login = ({ navigation, loginUser, error }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{email: 'kuatbekabdinur@gmail.com', password: 'leomessi10'}}
        onSubmit={(values) => {
          loginUser({
            ...values
          }, navigation)
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.home}>
            <TextInput
              placeholder="Email or phone number"
              style={styles.field}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              blurOnSubmit
            />
            <TextInput
              placeholder="Password"
              style={styles.field}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            { error ? <Text>{ error }</Text> : null }
            <Text dataDetectorType="link" style={styles.text}>
              Forgot password?
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.loginBtn}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              Haven’t an account?
              <Text
                style={styles.text}
                onPress={() => navigation.navigate('Register')}>
                {' '}
                Sign Up
              </Text>
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 116,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 36,
    fontStyle: 'normal',
    color: '#FF6645',
    fontWeight: '700',
    lineHeight: 43,
    marginBottom: 40,
  },
  field: {
    height: 40,
    padding: 2,
    fontSize: 18,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF6645',
    fontWeight: '400',
  },
  button: {
    marginTop: 40,
    paddingTop: 14,
    paddingBottom: 14,
    borderColor: '#FF6645',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 80,
  },
  loginBtn: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF6645',
    fontWeight: 'bold',
    lineHeight: 22,
  },
});


const mapStateToProps = (state) => ({
  error: state.Auth.error
})

export default connect(mapStateToProps, {
  loginUser
})(Login);
