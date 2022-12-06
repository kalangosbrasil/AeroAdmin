'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for ICAO
var IcaoSchema = new Schema({
  sigla:{
    type: String,
    required: 'Insira a sigla do aeroporto',
    unique: true,
    lowercase: true
  },
  nome: {
    type: String,
    required: 'Insira o nome do aeroporto'
  },
  categoria: {
    type: String,
    required: 'Insira a categoria do aeroporto'
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
  // ,
  // contato: {
  //   responsavel: {
  //     nome: String,
  //     fone: String,
  //     email: String
  //   },
  //   endereco: {
  //     cep: String,
  //     rua: String,
  //     numero: String
  //   }
  // }
});

module.exports = mongoose.model('Icao', IcaoSchema);