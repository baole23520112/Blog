import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Article = new Schema({
	name: { type: String, maxLength: 255, default: 'modafinil' },
	description: { type: String, maxLength: 600, default: 'Share knowledge' },
	image: { type: String, maxLength: 255, default: 'image.png' },
	author: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

// Create model: Auto convert to lowercase and add 's' at the end
export default mongoose.model('Article', Article);
