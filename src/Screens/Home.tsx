
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  View,
  Text,
} from 'react-native';

import {API_KEY} from '../Assets/Config'
import ItemNews from '../Components/ItemNews';
import ButtonCategory from '../Components/ButtonCategory';

const Home = ( {navigation} : any) => {

    const [News, SetNews] = useState<any[]>([])
    const [Category, SetCategory] = useState<string>('sport')
    const [Search, SetSearch] = useState<string>('')
    const [SearchFocus, SetSearchFocus] = useState<boolean>(false)
    let Categories = ['sport', 'general', 'business', 'health', 'technology', 'science']

    useEffect(() => {
        ///API///
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=' + API_KEY)
            .then(res => res.json())
            .then(response => {
              SetNews(response.articles);
            })
            .catch(error => {
              console.log(error);
            });
            ///Search///
            if(SearchFocus && Search.length > 3)
            {
                const delayDebounceFn = setTimeout(() => 
                {
                    const ddd = News.filter(item => {
                        return item.title.indexOf(Search) > -1;
                    });
                    SetNews(ddd);
                }, 1000) 
                return () => clearTimeout(delayDebounceFn)
            }
    }, [Search]);
    return (
        <SafeAreaView>
            <TextInput placeholderTextColor="#000" style={styles.InputText} placeholder='Search'
                  onChangeText={(value) => SetSearch(value)} maxLength={12} 
                  onFocus={() => SetSearchFocus(true)} onBlur={() => SetSearchFocus(false)}/>
            <View style={styles.Buttons}>
                {Categories.map((state) => 
                {
                    return <ButtonCategory title={state} SetNews={SetNews} active={Category} setActive={SetCategory}/>
                })}
            </View>
            <FlatList style={styles.FlatList}
                data={News.slice(0,10)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                    <ItemNews title={item.title} date={item.publishedAt} imageUrl={item.urlToImage} 
                    description={item.description} author={item.author} content= {item.content} navigation={navigation}/>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    FlatList: {
        height: '70%', 
        width: '90%', 
        backgroundColor: '#00000020', 
        padding: 10, 
        alignSelf: 'center'
    },
    InputText:
    {
      width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: '#7fdbae',
      height: 30,
      padding:'2%',
      fontSize: 14,
      margin: 10,
      alignSelf: 'center'
    },
    Buttons: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        flexWrap: "wrap"
    }
});

export default Home;