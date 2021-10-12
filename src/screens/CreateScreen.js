import React, { useState, useRef } from "react";
import {View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {useDispatch} from 'react-redux';

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PhotoPicker } from "../components/PhotoPicker";
import { addPost } from "../store/actions/post";
import { THEME } from "../theme";

export const CreateScreen = ({navigation}) => {
   const [text, setText] = useState('');
   const [img, setImg] = useState(null);

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

   const photoPickHandler = uri => {
      setImg(uri)
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

               <PhotoPicker onPick={photoPickHandler} />

               <Button 
                  title='Create the post' 
                  color={THEME.MAIN_COLOR} 
                  onPress={saveHandler} 
                  disabled={!text || !img}
               />
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