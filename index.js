const express = require('express'); 
const path = require('path');
const app = express(); 
var cors = require('cors'); 
app.use(cors());

//configuraciones
app.set('port', process.env.PORT || 4000); 

app.use(express.static(path.join(__dirname, 'src', 'public')));

//star server 
app.listen(app.get('port'), () => {
    console.log(`servidor backend ${app.get('port')} iniciado`);
}); 