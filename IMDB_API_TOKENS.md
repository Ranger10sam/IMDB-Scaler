# IMDB API Tokens

These are the tokens for accessing the IMDB API:

## API Read Access Token
```
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWNjM30TBkNTBmM2I5ZmMyZWZiNGMwN4EY2Y5OS1m5ZiI6MTYxMjQzN3S4zMTksN1Yi6IjYwMWJjNzdiZDZhNzBhDAxyM30TA1M1ysInJhb3BlIj6yJhcGIefmVhZCJLdCJZXJzaW9uIjoxfQ.c6cHUCr-HGBF9CjDCjBqFwb4n42_HmNqsirF-BBks
```

## API Key
```
3aec63790d5bf39bf2cfb4c158ac6f99
```

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWNjM30TBkNTBmM2I5ZmMyZWZiNGMwN4EY2Y5OS1m5ZiI6MTYxMjQzN3S4zMTksN1Yi6IjYwMWJjNzdiZDZhNzBhDAxyM30TA1M1ysInJhb3BlIj6yJhcGIefmVhZCJLdCJZXJzaW9uIjoxfQ.c6cHUCr-HGBF9CjDCjBqFwb4n42_HmNqsirF-BBks`
    }
};

fetch('https://imdb-api.com/en/API/Top250Movies/k_3aec63790d5bf39bf2cfb4c158ac6f99', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));