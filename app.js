var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt5c940d4cee95252b')
.setHost("api.built.io")
.setProtocol("https")
.setMasterKey('blt422dd757addf7dd2')

var extensionSDK = app.Extension({
	secret_key     : 'cliveblt_secret',
	extension_key	 : 'cliveblt_ext',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


