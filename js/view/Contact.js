var Contact = {
    getHTML: function(contactData) {
        return [
            "<div class='contact'>",
                "<img src='",
                    contactData.photo,
                "'>",
                "<label class='name'>",
                    contactData.first_name,
                    "<br>",
                    contactData.last_name,
                "</label>",
                "<label class='gender'>",
                    contactData.gender,
                "</label>",
                "<br>",
                "<a href='mailto:",
                    contactData.email,
                "' class='email'>",
                    contactData.email,
                "</a>",
            "</div>"
        ].join("");
    }
};