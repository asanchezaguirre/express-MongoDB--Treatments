const mongoose = require('mongoose');
const Treatment = require('../../models/Treatment')
const Appointment = require('../../models/Appointment')


const index = (req, res) =>{
	Treatment
		.find()
		.exec()
		.then(data => {
			res
				.json({
					type:'Getting treatments',
					data:data
				})
				.status(200)
			})
			.catch(err => {
				console.log(`caugth error: ${err}`);
				return res.status(500).json(err);
			})
	}

const findBy = (req,res) =>{
		Treatment

		.findById(req.params.treatmentId)
		.then(data => {
			res
				.json({
					type: "Found Treatment by Id",
					data: data
				})
				.status(200)
		})
		.catch(err =>{
			console.log(`caugth error: ${err}`);
			return res.status(500).json(err);
		})
	}

const createAppointment = (body, day) =>{
	//console.log(body.user);
	const newAppointment = new Appointment ({
		_id: mongoose.Types.ObjectId(),
		name: body.name,
		phoneNumber: body.phoneNumber,
		treatmentId: body._id,
		user: body.user,
		day
	})

	newAppointment.save()
		return newAppointment._id
}


const create = (req, res) =>{
		
		const newIds = req.body.listOfTreatments.split(' ')
		const newTreatment = new Treatment({  
			_id: mongoose.Types.ObjectId(), 
			description: req.body.description,
			listOfTreatments: req.body.listOfTreatments,
			user: req.body.user,
			listOfAppointments: newIds.map((day) => createAppointment(req.body, day))
		});

		newTreatment
		.save()
		.then(data => {
			res
				.json({
					type:"New Treatment",
					data: data
				})
				.status(200)
		})
		.catch(err => {
			console.log(`caugth error: ${err}`);
			return res.status(500).json({message: 'Post Failed'});
		})
	}




module.exports = {
	index,
	findBy,
	create
	
}