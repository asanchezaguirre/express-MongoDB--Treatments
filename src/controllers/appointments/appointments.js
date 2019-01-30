const mongoose = require('mongoose');
const Treatment = require('../../models/Treatment')
const Appointment = require('../../models/Appointment')


const index = (req, res) =>{
	Appointment
		.find()
		.exec()
		.then(data => {
			res
				.json({
					type:'Getting Appointment',
					data:data
				})
				.status(200)
			})
			.catch(err => {
				console.log(`caugth error: ${err}`);
				return res.status(500).json(err);
			})
	}



module.exports = {
	index,

	
	
}