const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', async(req, res) => {
  
  const response = await fetch('https://www.fruityvice.com/api/fruit/all');
  const data = await response.json();
  res.render('index', {data});
});

app.post('/', async (req, res) => {
  const response = await fetch('https://www.fruityvice.com/api/fruit/' + req.body.name);
  const data = await response.json();
  res.render('single', {data});
})

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });