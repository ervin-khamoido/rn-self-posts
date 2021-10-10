import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const CreateScreen = ({}) => {

   return (
      <View style={styles.center}>
         <Text>Create screen</Text>
      </View>
   )
}

CreateScreen.navigationOptions = ({navigation}) => ({
   headerTitle: 'Create a post',
   headerLeft: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
         <Item 
            title="Toggle drawer" 
            iconName="ios-menu" 
            onPress={() => navigation.toggleDrawer()} 
         />
      </HeaderButtons>
   )
})

const styles = StyleSheet.create({
   center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})