/* Progress bar */
var h = document.documentElement,
	b = document.body,
	st = 'scrollTop',
	sh = 'scrollHeight',
	progress = document.querySelector('#progress'),
	scroll;
var scrollpos = window.scrollY;
var header = document.getElementById('header');

document.addEventListener('scroll', function () {
	/*Refresh scroll % width*/
	scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
	progress.style.setProperty('--scroll', scroll + '%');

	/*Apply classes for slide in bar*/
	scrollpos = window.scrollY;

	if (scrollpos > 100) {
		header.classList.remove('hidden');
		header.classList.remove('fadeOutUp');
		header.classList.add('slideInDown');
	} else {
		header.classList.remove('slideInDown');
		header.classList.add('fadeOutUp');
		header.classList.add('hidden');
	}
});

// scroll to top
const t = document.querySelector('.js-scroll-top');
if (t) {
	t.onclick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	const e = document.querySelector('.scroll-top path'),
		o = e.getTotalLength();
	(e.style.transition = e.style.WebkitTransition = 'none'),
		(e.style.strokeDasharray = `${o} ${o}`),
		(e.style.strokeDashoffset = o),
		e.getBoundingClientRect(),
		(e.style.transition = e.style.WebkitTransition =
			'stroke-dashoffset 10ms linear');
	const n = function () {
		const t =
				window.scrollY ||
				window.scrollTopBtn ||
				document.documentElement.scrollTopBtn,
			n = Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight
			),
			s = Math.max(
				document.documentElement.clientHeight,
				window.innerHeight || 0
			);
		var l = o - (t * o) / (n - s);
		e.style.strokeDashoffset = l;
	};
	n();
	const s = 100;
	window.addEventListener(
		'scroll',
		function (e) {
			n();
			(window.scrollY ||
				window.scrollTopBtn ||
				document.getElementsByTagName('html')[0].scrollTopBtn) > s
				? t.classList.add('is-active')
				: t.classList.remove('is-active');
		},
		!1
	);
}

function IsImageOk(img) {
	if (!img.complete) {
		return false;
	}

	if (img.naturalWidth === 0) {
		return false;
	}

	return true;
}

// Hidden author avatar
document.addEventListener('DOMContentLoaded', function () {
	const imgs = document.querySelectorAll('img');
	imgs.forEach((img) => {
		img.addEventListener('load', function () {
			if (!IsImageOk(img)) {
				img.style.display = 'none';
			}
		});
		img.addEventListener('error', function () {
			img.style.display = 'none';
		});
	});
});

// Display created date
document.addEventListener('DOMContentLoaded', function () {
	const timeElements = document.querySelectorAll('.created-at');
	if (!timeElements) return;
	timeElements.forEach((timeEle) => {
		const time = timeEle.textContent;
		let newTime = '';
		let count = 0;
		for (let i = 0; i < time.length; ++i) {
			if (time[i] === ' ') {
				count++;
			}
			if (count === 4) {
				break;
			}
			newTime += time[i];
		}
		timeEle.textContent = newTime;
	});
});

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