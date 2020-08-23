import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../contexts/auth';

import styles from './styles';

const Login: React.FC = () => {
  const { loggedIn, login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(loggedIn);

  function handleLogin() {
    login(email, password);
  };

  return (
    <View style={styles.container}>

      <View style={styles.inputBlock}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="youremail@example.com"
          placeholderTextColor="#C1BCCC"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your password"
          placeholderTextColor="#C1BCCC"
          textContentType="password"
          passwordRules="minlength: 20;"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <RectButton onPress={handleLogin} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Login</Text>
        </RectButton>
      </View>



    </View>
  );
};

export default Login;
