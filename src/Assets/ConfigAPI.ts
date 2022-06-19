const API_KEY = '13b2de64ad4e49eca7c6a008c3f55690';

export async function RequestAPI(Category : string) {
    var result = 'none'
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category='+ Category +'&apiKey=' + API_KEY)
        .then(res => res.json())
        .then(response => {
            result = response.articles;
        })
        .catch(error => {
            result = 'error';
        });
    return result;
}