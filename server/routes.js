var when = require('when')
var request = require('request')

module.exports = {
	"/v1/functions/swapnil": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				swapnil: "is awesome"
			})
		}
	},
	"/v1/functions/chinu": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				chinu: "happy birthdayyy"
			})
		}
	},
	"/v1/functions/smita": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				smita: "is awesome"
			})
		}
	},
	"/v1/functions/altamash": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				altamash: "is aagau :D"
			})
		}
	},
	"/v1/functions/rohini": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				Rohini: "is aagau :D"
			})
		}
	},
	"/v1/functions/abhijeet": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				working: "GET call"
			})
		},
		POST: function(req, res){
			this.resSuccess(req, res, {
				working: "Post call"
			})
		},
		PUT: function(req, res){
			this.resSuccess(req, res, {
				working: "PUT call"
			})
		}
	},
	"/v1/functions/createPerson": {
		POST: function(req, res){
			req.logger.log("request payload", req.payload)
			req.logger.log("App options", req.builtApp.options)
			var that = this
			req.builtApp.Class('person').Object(req.payload.data)
			.save()
			.then(function(person){
				return that.resSuccess(req, res, person)
			})
			.catch(function(err){
				console.log(err, "=========")
			})
		}
	},
	"/v1/functions/test" : {
		POST: function(req, res){
			var that = this
			req.builtApp = req.builtApp
			
			var response = {}

			return req.builtApp.Class('person').Object(req.payload.data.person)
			.save()
			.then(function(person){
				response['person'] = person.toJSON()
				return req.builtApp.Class('address').Object(req.payload.data.address)
				.save()
			})
			.then(function(address){
				response['address'] = address.toJSON()
				return that.resSuccess(req, res, response)
			})
		}
	},
	"/v1/functions/validError" : {
		POST: function(req, res){
			var that = this
			return that.resError(req, res, {
				name: "is not a string"
			})
		}
	},
	"/v1/functions/throwError" : {
		POST: function(req, res){
			var that = this
			throw {
				name: "is not a string"
			}
		}
	},
	"/v1/classes/person/objects": {
		POST: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("age", 44)
				req.bobjekt = req.bobjekt.setReferenceWhere("address", {
					"city": "Mumbai"
				})
				return when.resolve()
			},
			_post: function(req, res) {
				req.bobjekt['new_field'] = "new_value"
				return when.resolve()
			}
		}
	}/*,
	"/v1/classes/person/objects/:objectUid": {
		PUT:{
			_pre: function(req, res){
				req.logger.warn("warn")
				req.bobjekt = req.bobjekt.set("name", "smita")
				return when.resolve()
			},
			_post: function(req, res){
				req.bobjekt['extra_field'] = "added"
				return when.resolve()
			}
		},
		GET: {
			_post: function(req, res){
				req.bobjekt.name = "bindok_"+req.bobjekt.name
				return when.resolve()
			}
		},
		DELETE : {
			_pre: function(req, res){
				console.log("_pre")
				return when.resolve()	
			},
			_post: function(req, res){
				console.log("_post")
				var defered = utils.Promise.defer()
				setTimeout(function(){
					console.log("Timeout completed")
					defered.resolve()
				},1000)

				return defered.promise
			}
		}
	}*/
}
