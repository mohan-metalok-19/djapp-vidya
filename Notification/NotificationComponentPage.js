import React from 'react';

import {Image, Text, View} from 'react-native';

const NotificationComponentPage = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
      }}>
      <Image source={require('../Artwork.png')} />

      <Text>No Notifications!</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor
      </Text>
    </View>
  );
};

export default NotificationComponentPage;
