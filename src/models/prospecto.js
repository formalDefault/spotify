const mongoose = require('mongoose');
const {Schema} = mongoose;

const prospectoSchema = new Schema({
    nombreNegocio: {type: String, require: true, default: ''},
    telefono: {type: Number, require: true, default: ''},
    direccion: {type: String, require: true, default: ''},
    primeraLlamada: {type: Date, require: true, default: Date.now},
    segundaLlamada: {type: Date, default: null},
    recordatorios: {type: String, default: ''},
    clasificacion: {type: String, require: true, default: ''},

})
 
module.exports = mongoose.model('Prospecto', prospectoSchema);