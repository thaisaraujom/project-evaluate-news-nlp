const cors = require('cors');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

dotenv.config();

const URL_MEANING_CLOUD = "https://api.meaningcloud.com/sentiment-2.1"

const fetchSentimentMeaningCloudAPI = async function(req, res) {

    const urlRequest = `${URL_MEANING_CLOUD}?key=${process.env.API_KEY}&lang=en&url=${req.body.url}`

    console.log(`Body request: ${req.body.url}`);
    console.log(`URL request: ${urlRequest}`);

    const response = await fetch(urlRequest)
    try {
        const data = await response.json()
        res.send(data)
    }
    catch{
        console.error("Something went wrong :(");
    }
}


const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/getSentiment', fetchSentimentMeaningCloudAPI)
