
import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const PageNews = ({route, navigation}: any) => 
{
    const { title, date, author, imageUrl, description, content} = route.params;
    navigation.setOptions({ title: title })
    return (
        <View style={styles.View}>
            <Text style={styles.Title}>{title}</Text>
            <Text style={styles.Date}>{date}</Text>
            <Text style={styles.Author}>{author}</Text>
            <Image source={{uri: imageUrl}} style={styles.Image}/>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Description</Text>
            <Text style={styles.Description}>{description}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Content</Text>
            <Text style={styles.Content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
        width: '90%',
        height: '80%',
        backgroundColor: '#69d3a0',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        alignSelf: 'center', 
        top: 20
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    Date: {
        fontSize: 11
    },
    Author: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    Image: {
        width: '100%',
        height: 140,
        resizeMode: 'cover'
    },
    Description: {
        fontSize: 10
    },
    Content: {
        fontSize: 10
    },
});

export default PageNews;
