const express= require ('express');
const app= express();
const bodyParser= require ('body-parser');

const routes= require ('./routes/router.js');
// const utils= require ('./utils');

app.use (express.static ('../front/dist'));;

app.get ('/*', (req,res) => {
	res.sendFile ('/home/javi/Desktop/Bootcamp/omdb/front/index.html')
});


app.use (bodyParser.urlencoded ({ extended : true }));
app.use (bodyParser.json());

app.listen(3000, function (){
	console.log ('Listening on port 3000');	
});
