/**
 * Created by petr on 08.09.16.
 */
var JSONRestContactsStore = {
    target: "data.json",

    query: function() {
        return $.get(this.target);
    }
};