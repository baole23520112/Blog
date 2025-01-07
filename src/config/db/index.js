import mongoose from 'mongoose';

// Established connection
async function connect() {
	try {
		await mongoose.connect('mongodb+srv://moda:moda123@cluster0.d6sfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
		console.log('CONNECT SUCCESSFULLY');
	} catch (error) {
		console.error('FAIL TO CONNECT');
	}
}

export default connect;
