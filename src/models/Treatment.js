const mongoose = require('mongoose');
const {Schema} = mongoose

const treatmentSchema = new Schema({
	_id: Schema.Types.ObjectId,
	description: { type: String, required: true },
	list_of_treatments:[{ type: String, required: true }],
	user: { type: Schema.Types.ObjectId, ref: 'User'},
	list_of_appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
});


module.exports = mongoose.model('Treatment', treatmentSchema);

