var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt917c46b3de8e419f')
// .setHost('localhost')
// .setPort(8000)
.setHost("dev-api.built.io")
// .setProtocol("http")
// .setPort(80)
.setMasterKey('blte09616313f4eaf7a')

var extensionSDK = app.Extension({
	secret_key     : 'blt58ad75ec596875b3',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


