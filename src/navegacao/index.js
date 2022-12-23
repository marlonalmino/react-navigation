import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Tab from './Tab'
// import Stack from './Stack'

export default props => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Tab />
      {/* <Stack /> */}
    </NavigationContainer>
  </SafeAreaView>
)