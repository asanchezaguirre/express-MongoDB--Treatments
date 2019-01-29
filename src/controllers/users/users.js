const mongoose = require('mongoose');
const User = require('../../models/User')
const Treatment = require('../../models/Treatment')


const index = (req, res) =>{
	User
		.find()
		.exec()
		.then(data => {
			res
				.json({
					type:'Getting users',
					data:data
				})
				.status(200)
			})
			.catch(err => {
				console.log(`caugth error: ${err}`);
				return res.status(500).json(err);
			})
	}

const create = (req, res) =>{
		const newUser = new User({  
			_id: mongoose.Types.ObjectId(), 
			name: req.body.name,
			email: req.body.email,
		});

		newUser
		.save()
		.then(data => {
			res
				.json({
					type:"New User",
					data: data
				})
				.status(200)
		})
		.catch(err => {
			console.log(`caugth error: ${err}`);
			return res.status(500).json({message: 'Post Failed'});
		})
	}

const findBy = (req,res) =>{
		User

		.findById(req.params.userId)
		.then(data => {
			res
				.json({
					type: "Found User by Id",
					data: data
				})
				.status(200)
		})
		.catch(err =>{
			console.log(`caugth error: ${err}`);
			return res.status(500).json(err);
		})
	}

const updateBy = (req,res) =>{
		User
		.updateOne(
			{_id:req.params.userId},
			{name: req.body.name,
			email: req.body.email}
			)

		.then(data => {
			res
				.json({
					type: "User Updated",
					data: data
				})
				.status(200)
		})
		.catch(err =>{
			console.log(`caugth error: ${err}`);
			return res.status(500).json(err);
		})
	}

const findTreatmentsBy = (req, res) =>{
	Treatment
		.find({ user: req.params.userId })
		.exec()
		.then(data =>{
			res.json({
				type: 'Finding the treatment',
				data: data
			})
			.status(200)
		})
		.catch(err =>{
			console.log(`caugth err: ${err}`);
			return res.status(500).json(err);
		})

}









module.exports = {
	index,
	create,
	findBy,
	updateBy,
	findTreatmentsBy
}