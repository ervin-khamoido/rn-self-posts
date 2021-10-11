import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {useDispatch} from 'react-redux';

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";

export const CreateScreen = ({navigation}) => {
   const [text, setText] = useState('');
   const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg';

   const dispatch = useDispatch();

   const saveHandler = () => {
      const post = {
         date: new Date().toJSON(),
         text: text,
         booked: false,
         img
      };

      dispatch(addPost(post));
      navigation.navigate('Main');
   }

   return (
      <ScrollView style={styles.wrapper}>
         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
               <Text style={styles.title}>Create a new post</Text>

               <TextInput
                  style={styles.textarea}
                  placeholder='Enter the post text'
                  value={text}
                  onChangeText={setText}
                  multiline
               />

               <Image style={{width: '100%', height: 200, marginBottom: 10}} source={{uri: img}} />
               <Button title='Create the post' color={THEME.MAIN_COLOR} onPress={saveHandler} />
            </View>
         </TouchableWithoutFeedback>
      </ScrollView>
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
   wrapper: {
      padding: 10
   },
   title: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'open-sans-regular',
      marginVertical: 10
   },
   textarea: {
      padding: 10,
      marginBottom: 10
   }
})