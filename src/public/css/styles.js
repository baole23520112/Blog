// Initialize Quill editor
var toolbarOptions = [
	['bold', 'italic', 'underline', 'strike'], // toggled buttons
	['blockquote', 'code-block'],

	[{ header: 1 }, { header: 2 }], // custom button values
	[{ list: 'ordered' }, { list: 'bullet' }],
	[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
	[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
	[{ direction: 'rtl' }], // text direction

	[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
	[{ header: [1, 2, 3, 4, 5, 6, false] }],
	['link', 'image', 'video', 'formula'], // add's image support
	[{ color: [] }, { background: [] }], // dropdown with defaults from theme
	[{ font: [] }],
	[{ align: [] }],

	['clean'], // remove formatting button
];

const quill = new Quill('#editor', {
	modules: {
		toolbar: toolbarOptions,
	},
	theme: 'snow',
});

const content = document.querySelector('input[name=content]');

document.querySelector('form').onsubmit = () => {
	const editorContent = quill.getSemanticHTML(0, Number.MAX_SAFE_INTEGER);
	// Add <br> at the end of each HTML block tag
	const modifiedContent = editorContent.replace(
		/<\/(div|p|h[1-6]|blockquote|pre|ul|ol|li|dl|dt|dd|table|tr|th|td)>/g,
		'</$1><br>'
	);
	// Transfer the content from the editor to the hidden input field
	content.value = modifiedContent;
};

