const {Schema, model} =  require('mongoose');

const UserSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: String,  require: true},

})

module.exports = model('User', UserSchema);