
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

interface Props
{
    title: string
    date: any
    author: string
    imageUrl?: string
    description: string
    content: string
    navigation: any
}

const ItemNews: React.FC<Props> = ({title, date, author, imageUrl, description, content, navigation}) => {
    const ToPageNews = () =>
    {
        navigation.navigate('PageNews', {title: title, date: date, author: author, imageUrl: imageUrl, description: description, content: content});
    }
    return (
        <TouchableOpacity style={styles.Button} onPressOut={ToPageNews}>
            <Text style={styles.Title}>{title}</Text>
            <Text style={styles.Date}>{date}</Text>
            <Image source={{uri: imageUrl}} style={styles.Image}/>
            <Text style={styles.Description}>{description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#69d3a0',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    Date: {
        fontSize: 11
    },
    Image: {
        width: '100%',
        height: 40,
        resizeMode: 'cover'
    },
    Description: {
        fontSize: 10
    },
});

export default ItemNews;
