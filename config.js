module.exports = {
	// port and address for the server
	port	: process.env.OPENSHIFT_NODEJS_PORT,	// OpenShift port
	address	: process.env.OPENSHIFT_NODEJS_IP,		// OpenShift address
	// the database url to connect
	dburl 	: process.env.OPENSHIFT_MONGODB_DB_URL,	// OpenShift db
	dbname 	: 'campakcampakjerapi'
}