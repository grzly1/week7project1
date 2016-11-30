var $xhr = $.getJSON('http://www.omdbapi.com/?t=Inception');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }

    console.log(data);
});

$(document.ready(function() {

        $('#submitBtn').on('click', function() {
                $('#searchResults').empty();

                let searchText = $("#searchBox").val();
                let $jquery = $.getJSON('http://www.ombdapi.com/?s=' + searchText);

                $query.done((data)) => {

                    if ($query.status !== 200) {
                        return;
                    }

                    console.log(data);
                    let results = data.Search;

                    //function to take JSON object and populate the HTML DOM//
                    breaDownSearchResults(results)

                    $query.fail(function(err) {
                        console.log(err)
                    });

                });

        });




});
