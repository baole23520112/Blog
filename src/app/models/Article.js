import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Article = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		content: { type: String, required: true },
		author: { type: String },
		slug: { type: String },
		image: { type: String },
		avatar: { type: String },
		profile: { type: String },
	},
	{ timestamps: true }
);

// Create model: Auto convert to lowercase and add 's' at the end
export default mongoose.model('Article', Article);
