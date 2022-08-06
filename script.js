// scrape routine.json and display it in the table
$.getJSON("routine.json", function (data) {
    console.log(data);
});
// scrape routine.json and display it in the table
$.getJSON("routine.json", function (data) {
    console.log(data);
    var table = $("#table-body");
    for (var day in data) {
        var row = $("<tr>");
        row.append($("<th>").text(day));
        for (var time in data[day]) {
            // s append break after every word in the string
            var text = data[day][time].split(" ").join("</br>");
            row.append($("<td>").html(text));
            // row.append($("<td>").text(data[day][time]));
        }
        table.append(row);
    }
});