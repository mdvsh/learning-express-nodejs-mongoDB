var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, maxlength: 100, minlength: 3 },
});

// Virtual property for genre url
GenreSchema.virtual("url").get(function () {
  return "catalog/genre/" + this._id;
});

module.exports = mongoose.model("Genre", GenreSchema);
