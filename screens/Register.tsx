import React from 'react'
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { registerUser } from '../store/actions'
import { Formik } from 'formik'

const Register = ({ navigation, registerUser, error }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Sign Up</Text>
      <ScrollView>
      
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          phone: '',
          password: '',
        }}
        onSubmit={(values) => {
          registerUser({
            name: values.name,
            email: values.email,
            password: values.password
          }, navigation)
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.home}>
            <TextInput
              placeholder="First Name"
              style={styles.field}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              blurOnSubmit
            />
            <TextInput
              placeholder="Last Name"
              style={styles.field}
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
              blurOnSubmit
            />
            <TextInput
              placeholder="Email"
              style={styles.field}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              blurOnSubmit
            />
            <TextInput
              placeholder="Phone Number"
              style={styles.field}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
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
            <TextInput
              placeholder="Repeat Password"
              style={styles.password}
              onChangeText={handleChange('password2')}
              onBlur={handleBlur('password2')}
              value={values.password2}
              secureTextEntry={true}
            />
            { error ? <Text>{ error }</Text> : null }
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.btnText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 18, textAlign: 'center', marginTop: 20}}>
              Already have an account?
              <Text
                style={styles.text}
                onPress={() => navigation.navigate('Login')}>
                {' '}
                Sign In
              </Text>
            </Text>
          </View>
        )}
      </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  home: {
    marginTop: 30
  },
  title: {
    fontSize: 36,
    fontStyle: 'normal',
    color: '#FF6645',
    fontWeight: '700',
    lineHeight: 43,
    marginBottom: 15,
  },
  field: {
    height: 30,
    padding: 2,
    fontSize: 18,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  password: {
    height: 40,
    padding: 2,
    fontSize: 18,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  privacy: {
    fontSize: 18,
    textAlign: 'center',
  },
  terms: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF6645',
    fontWeight: '400',
  },
  button: {
    marginTop: 25,
    paddingTop: 14,
    paddingBottom: 14,
    borderColor: '#FF6645',
    borderWidth: 1,
    borderRadius: 10,
  },
  btnText: {
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


export default connect(mapStateToProps, { registerUser })(Register);
