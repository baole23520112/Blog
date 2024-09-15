
import Handlebars from 'handlebars';

export default {
    json: (context) => {
        return JSON.stringify(context);
    },

    sum: (a, b) => a + b,
    convert: (html) => {
        const template = Handlebars.compile(html);
        return new Handlebars.SafeString(template());
    },

    addBr: (html) => {
        const modifiedContent = html.replace(/<\/(div|p|h[1-6]|blockquote|pre|ul|ol|li|dl|dt|dd|table|tr|th|td)>/g, '</$1><br>');
        return modifiedContent;
    },
    
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: `<svg
                    class="inline-block h-4 w-4 text-current text-center -mt-0.5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    {" "}
                    <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                    /> <polyline points="8 9 12 5 16 9" /> <polyline points="16 15 12 19 8 15" />
                    </svg>`,
            ascending: `<svg
                        class="inline-block h-4 w-4 text-current text-center -mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                        />
                        </svg>`,
            descending: `<svg
                        class="inline-block h-4 w-4 text-current text-center -mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                        />
                        </svg>`,
        }
        const types = {
            default: 'descending',
            descending: 'ascending',
            ascending: 'descending',
        }

        const icon = icons[sortType] || icons['default'];
        const type = types[sortType] || types['default'];

        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

        const output =  `<a href="${href}">
                            ${icon}
                        </a>`;
        
        return new Handlebars.SafeString(output);
    }
};