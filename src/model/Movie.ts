import {model, Schema} from 'mongoose'

const movieSchema = new Schema(
  {
    title: {type: String},
    raint: {type: Number},
    description: {type: String},
    director: {type: String},
    starts: {type: Array},
    poster: {type: String}
  }
)

export const MovieMovel = model('movie', movieSchema)