const mongoose = require('mongoose');
const {Schema} = mongoose

const appointmentSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: { type: String, required: true },
	phone_number:{ type: Number, required: true },
	day:{ type: String, required: true },
	treatment:{ type: Schema.Types.ObjectId, ref: 'Treatment'},
	user: { type: Schema.Types.ObjectId, ref: 'User'},
});


module.exports = mongoose.model('Appointment', appointmentSchema);
