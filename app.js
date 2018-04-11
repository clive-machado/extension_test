var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltb62a403faff09784')
.setHost("dev-api.built.io")
.setProtocol("https")
.setMasterKey('blta0f3474316380510')

var extensionSDK = app.Extension({
	secret_key     : 'cliveblt_secret',
	extension_key	 : 'cliveblt_ext',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


