/**
 * Created by petr on 08.09.16.
 */
var ContactsModel = {
    data: [],
    store: JSONRestContactsStore,

    filter: function(filterKey) {
        var data = this.data.slice(0);
        var value;

        filterKey = (filterKey || "").toLowerCase();

        data = data.filter(function(item) {
            for(var key in item) {
                value = (item[key] + "").toLowerCase();

                if(value.indexOf(filterKey) != -1) {
                    return true;
                }
            }
        });

        return data;
    },

    queryAll: function() {
        var self = this;
        var promise = this.store.query();

        promise.then(function(data) {
            self.data = data;
        });

        return promise;
    }
};
