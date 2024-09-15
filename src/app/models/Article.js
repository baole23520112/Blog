import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const articleSchema = new Schema(
	{
		title: { type: String, maxLength: 125, required: true },
		description: { type: String, maxLength: 125 },
		content: { type: String, required: true },
		author: { type: String, required: true },
		slug: { type: String },
		image: { type: String, required: true },
		avatar: { type: String, default: '#' },
		profile: { type: String, default: '#' },
		slug: { type: String, slug: 'title', unique: true },
	},
	{ timestamps: true }
);

// Custom query helpers
articleSchema.query.sortable = function(req) {
	if (req.query.hasOwnProperty('_sort')) {
		const isValidType = ['ascending', 'descending'].includes(req.query.type);
		return this.sort({
			[req.query.column]: isValidType ? req.query.type : 'descending',
		});
	}

	return this;
}

// Add plugin
mongoose.plugin(slug);
articleSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

// Create model: Auto convert to lowercase and add 's' at the end
export default mongoose.model('Article', articleSchema);
