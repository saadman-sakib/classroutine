// scrape routine.json and display it in the table
$.getJSON("routine.json", function (data) {
    var table = $("#table-body");
    for (var day in data) {
        var row = $("<tr>");
        row.append($("<th>").text(day));
        for (var time in data[day]) {
            // s append break after every word in the string
            var text = data[day][time].split(" ").join("</br>");
            row.append($("<td>").html(text));
        }

        // if 2 consecutive same values, then merge them
        var prev = row.children().eq(1).text();
        for (var i = 2; i < row.children().length; i++) {
            var curr = row.children().eq(i).text();
            if (prev == curr) {
                row.children().eq(i).remove();
                row.children().eq(i - 1).attr("colspan", 2);
            } else {
                prev = curr;
            }
        }
        table.append(row);
    }
    
});


// screape notifications.json and display it in the ul
$.getJSON("notifications.json", function (data) {
    notifications = data["notifications"];
    var ul = $("#notifications");
    for (var i = 0; i < notifications.length; i++) {
        ul.append( `<li class="list-group-item" > ${notifications[i]} </li>`);
    }
});