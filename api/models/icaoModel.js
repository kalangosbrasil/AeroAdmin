'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for 
var IcaoSchema = new Schema({
  sigla:{
    type: String,
    required: 'Insira a sigla do aeroporto',
    unique: true,
    lowercase: true
  },
  nome: {
    type: String,
    required: 'Insira o nome do Aeroporto'
  },
  categoria: {
    type: String,
    required: 'Kindly enter the category of the task'
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  },
  situacao: {
    tipo: [{
      type: String,
      enum: ['Regularizado', 'Com restrições', 'Fechado']
    }]
  }
});

module.exports = mongoose.model('Icao', IcaoSchema);