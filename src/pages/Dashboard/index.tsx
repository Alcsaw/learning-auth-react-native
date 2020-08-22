import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
