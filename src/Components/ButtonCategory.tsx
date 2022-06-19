
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {RequestAPI} from '../Assets/ConfigAPI'

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
        RequestAPI(title).then(result => {
            if(result == 'error') console.log('Error Get API');
            else {
                SetNews(result);
                setActive(title)
            }
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
