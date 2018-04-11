var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt21c702c3fdc6f721')
.setHost("stag-api.built.io")
.setProtocol("https")
.setMasterKey('bltf35c4c90e33c52c4')

var extensionSDK = app.Extension({
	secret_key     : 'cliveblt_sec',
	extension_key	 : 'cliveblt_ext',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


