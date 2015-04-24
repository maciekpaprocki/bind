/* 
 * Bureau for Visual Affairs 
 * Dev:Maciej Paprocki
 */
module.exports = (function () {

    var extend = require('extend');
    var guid = 1;
    var unque_id = 1;
    function proxy(fn, context) {
        var tmp, args, proxy;

        if (typeof context === "string") {
            tmp = fn[ context ];
            context = fn;
            fn = tmp;
        }

        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function () {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };

        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || guid++;
        
        return proxy;
    }
   

    Atom.extend = function (ob) {
        return extend(Atom.prototype,ob)
    };
    return Atom;
})();

