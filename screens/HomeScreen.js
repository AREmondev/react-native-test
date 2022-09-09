import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    let navigator = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigator.navigate('Product')}
      >
        <Text>Got To Product</Text>
      </TouchableOpacity>
    </View>
  )
}