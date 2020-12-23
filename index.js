const express = require('express');
const app = express();

app.listen('3000', ()=>{console.log('server init port 3000')});

app.get('/test', (req, res)=>{
	res.send({'data': 'Sucess two ok f friend okdd'})
})

