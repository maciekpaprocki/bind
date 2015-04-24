
var Atom = require('Atom');

module.exports = Atom.extend({
    
    initialize: function () {

    },
    tagName: 'li',
    events: {
        'click tap, :scope > .nav': 'open'
    },
});
