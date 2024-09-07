import mongoose from 'mongoose';

// Established connection
async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/blog');
		console.log('CONNECT SUCCESSFULLY');
	} catch (error) {
		console.error('FAIL TO CONNECT');
	}
}

export default connect;
