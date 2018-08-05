
var result = 
  [       
       {
        'sourcename':'cnn',
    'title':'Trump Kim',
    'score': '.08',
    'url': 'http://',
    'filename': 'file1.txt'
     
},
      {
        'sourcename':'fox',
    'title':'Trump Kim',
    'score': '.01',
    'url': 'http://',
    'filename': 'file1.txt'
     
} ,
 {
        'sourcename':'abc',
    'title':'Trump Kim',
    'score': '.05',
    'url': 'http://',
    'filename': 'file1.txt'
     
} 
  ]
  
    setResult(result);
  
  
function getGoogleApiAuth(){
    // Imports the Google Cloud client library.
const Storage = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = new Storage();

// Makes an authenticated API request.
storage
  .getBuckets()
  .then((results) => {
    const buckets = results[0];

    console.log('Buckets:');
    buckets.forEach((bucket) => {
      console.log(bucket.name);
    });
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
}

getGoogleApiAuth();


function NLP_API(){

   // Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = 'Hello, world!';

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

 
   $addCallback();
   
   try{
    
// Detects the sentiment of the text
client.analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log('Text: ${text}');
    console.log('Sentiment score: ${sentiment.score}');
    console.log('Sentiment magnitude: ${sentiment.magnitude}');
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
     ctx.res.setHeader('Content-Type', 'application/octet-stream');
      setResult(result);
   } 
    catch(e){
          return e;  
        }
   
    
      $finishCallback();
}
//NLP_API()
 