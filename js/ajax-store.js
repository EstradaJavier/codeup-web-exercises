
    (function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json

        $.get('data/inventory.json')
            .done(handleResponse);


    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

        function handleResponse(items) {
            let html = "";
            console.log("items (api response):")
            console.log(items)
            items.forEach(function(item) {
                // generate html for this item
                let itemHtml = '<div class="col-sm-6">'
                itemHtml += '<h2>' + item.name + '</h2>';
                itemHtml += '<p>' + item.description + '</p>';
                itemHtml += '<p>Price: $' + item.price + '</p>';
                itemHtml += '</div>';
                console.log('inside forEach loop, itemHtml:')
                console.log(itemHtml);
                html += itemHtml;
            });
            console.log('finished the forEach loop, html:')
            console.log(html);
            $('#items').html(html);
        }

    })();

