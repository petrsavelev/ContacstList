/**
 * Created by petr on 08.09.16.
 */
var ContactsList = {
    render: function(container, data) {
        var html = [];

        data.forEach(function(item){
            html.push(Contact.getHTML(item));
        });

        container.innerHTML = html.join("");
    }
};