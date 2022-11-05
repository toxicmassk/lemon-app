'use strict';

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Sweets', 'Drinks']
    },
    picture: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    ingredients: {
      type: [String],
      required: true
    },
    instruction: {
      type: String,
      required: true
    },
    alkalinefood: {
      type: [String]
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
