// src/services/game/game-model.js

'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref 'user'},
  score: { type: Number, required: true},
})

const gameSchema = new Schema({
  players: [playerSchema],
  started: { type: Boolean, required: true, 'default': false },
  turn: { type: Number, required: true, 'default': 0 },
  winner: { type: Number, required: false}
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
