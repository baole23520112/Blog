import Handlebars from 'handlebars';

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});