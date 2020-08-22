import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
  const { loggedIn, login } = useAuth();

  console.log(loggedIn);

  function handleLogin() {

    login();
  };

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
