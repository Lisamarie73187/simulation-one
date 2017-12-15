require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); 
// simulation 76D 
const cors = require('cors');
const massive = require('massive');
const ctr = require('./controller')

const app = express(); 
// simulation 74C
app.use(bodyParser.json());
// simulation 76D
app.use(cors());

// simulation 70C - massive connection
massive(process.env.CONNECTION_STRING).then(db => {app.set('db',db);})

app.get('api/bin/:id', ctr.getOne)
// simulation 74D-1
app.get('api/bin',ctr.readAll)
app.put('api/create/:id', ctr.update)
// simulation 74D-3
app.post('api/create/:id', ctr.add)
// simulation 74D-4
app.delete('api/create/:id', ctr.delete)




const port = 3001;
app.listen(port, () => console.log(`I'm listening...on port ${port}`));