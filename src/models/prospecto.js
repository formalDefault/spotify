const mongoose = require('mongoose');
const {Schema} = mongoose;

const prospectoSchema = new Schema({
    nombreNegocio: {type: String, require: true},
    telefono: {type: Number, require: true},
    direccion: {type: mongoose.Schema.Types.Mixed, require: true},
    primeraLlamada: {type: Date, require: true},
    segundaLlamada: {type: Date, require: true},
    recordatorios: {type: mongoose.Schema.Types.Mixed, default: null},
    clasficacion: {type: String, require: true},

})

module.exports = mongoose.model('Prospecto', prospectoSchema);