import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './FooterStyles';
import {useNavigation} from '@react-navigation/native';

const FooterComponent = () => {
  const [filteredLocation, setFilteredLocation] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.footerMainCon}>
      <View>
        <Image source={require('../assests//home-foot-icon.png')} />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('LocationPage')}>
          <View>
            <Image source={require('../assests/search.png')} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Image source={require('../assests/dj.png')} />
      </View>
      <View>
        <Image source={require('../assests/event.png')} />
      </View>
      <View>
        <Image
          source={require('../assests/Profile.png')}
          style={{height: 35, width: 35}}
        />
      </View>
    </View>
  );
};

export default FooterComponent;
