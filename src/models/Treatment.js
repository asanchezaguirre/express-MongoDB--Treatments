const mongoose = require('mongoose');
const {Schema} = mongoose

const treatmentSchema = new Schema({
	_id: Schema.Types.ObjectId,
	description: { type: String, required: true },
	listOfTreatments:[{ type: String, required: true }],
	user: { type: Schema.Types.ObjectId, ref: 'User'},
	listOfAppointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
});


module.exports = mongoose.model('Treatment', treatmentSchema);

