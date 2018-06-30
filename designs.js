// Select color input
// Select size input
let height, width, colour;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    // console.log('Height: ' + height + ' and width: ' + width);
})

function makeGrid(x, y) {
    // remove any previously created grid
    $('tr').remove();
    
    // Your code goes here!
    for (let i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let j = 1; j <=y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    // add color to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
        
