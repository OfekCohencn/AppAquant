
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {API_KEY} from '../Assets/Config'

interface Props
{
    title: string
    SetNews: React.Dispatch<React.SetStateAction<any>>
    active: string
    setActive: React.Dispatch<React.SetStateAction<any>>
}

const ButtonCategory: React.FC<Props> = ({title, SetNews, active, setActive}) => {
    const pressCategory = () =>
    {
        fetch(
            'https://newsapi.org/v2/top-headlines?country=us&category='+ title + '&apiKey=' + API_KEY,
          )
            .then(res => res.json())
            .then(response => {
                SetNews(response.articles);
                setActive(title)
            })
            .catch(error => {
              console.log(error);
            });
    }
    return (
        <TouchableOpacity style={{backgroundColor: active == title ? '#7fdbae' : '#ddd', width: '28%', padding: 10, borderRadius: 20, margin: 10}} onPress={pressCategory}>
            <Text style={styles.Title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Title: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
});

export default ButtonCategory;
