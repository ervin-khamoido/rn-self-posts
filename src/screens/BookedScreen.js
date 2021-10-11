import React from "react";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector} from "react-redux";

import { PostList } from "../components/PostList";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const BookedScreen = ({navigation}) => {
   const openPostHanlder = post => {
      navigation.navigate('Post', {
         postId: post.id, 
         date: post.date, 
         booked: post.booked
      })
   }

   const bookedPosts = useSelector(state => state.post.bookedPosts)

   return <PostList data={bookedPosts} onOpen={openPostHanlder} />
}

BookedScreen.navigationOptions = ({navigation}) => ({
   headerTitle: 'Favorites',
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