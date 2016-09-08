/**
 * Created by petr on 08.09.16.
 */
var app;

(function() {
    const TEMPLATE = [
        "<div class='container'>",
            "<input type='text' placeholder='Type to filter'>",
            "<div class='list-container'></div>",
        "</div>"].join("");

    app = {
        containerId: null,
        list: ContactsList,
        model: ContactsModel,

        render: function(id) {
            if(id != null) {
                this.containerId = id;
                document.getElementById(id).innerHTML = TEMPLATE;
                this.loadData();
                this.attachEvents();
            }
        },

        _renderContacts: function(contacts) {
            var container;

            container = document.getElementById(this.containerId)
                .querySelector(".list-container");

            this.list.render(container, contacts);
        },

        _errorHandler: function() {
            alert("An error occured!");
        },

        loadData: function() {
            var self = this;

            this.model.queryAll().then(
                self._renderContacts.bind(self),
                self._errorHandler
            );
        },

        attachEvents: function() {
            var self = this;

            $("#"+ this.containerId +" input").on("keyup", function(event) {
                var filterKey;
                var filteredContacts;

                debugger;

                filterKey = event.target.value;
                filteredContacts = self.model.filter(filterKey);

                self._renderContacts(filteredContacts);
            });
        }
    };
})();
