$(document).ready(function(){
    $('table td').each(function(){
        // Types
        if ($(this).text() == 'Melee') {
            $(this).css('color', '#fe1c12');
        } else if ($(this).text() == 'Range') {
            $(this).css('color', '#bc12fd');
        } else if ($(this).text() == 'Armor') {
            $(this).css('color', '#188eff');
        } else if ($(this).text() == 'Pet') {
            $(this).css('color', '#80e125');
        } else if ($(this).text() == 'Skin') {
            $(this).css('color', '#fee000');
        }
        // Rarities
        else if ($(this).text() == 'Common') {
            $(this).css('color', '#dad5d1');
        } else if ($(this).text() == 'Rare') {
            $(this).css('color', '#abddaa');
        } else if ($(this).text() == 'Unique') {
            $(this).css('color', '#cc5d15');
        }
        // code-128
        
        else if ((($(this).text().length) == 8) && !($(this).text().indexOf(' ') >= 0)) {
            $(this).css('font-family', 'consolas');
        }
    });

    $('th').click(function() {
        var $th = $(this).closest('th');
        $th.toggleClass('selected');
        var isSelected = $th.hasClass('selected');
        var isInput = $th.hasClass('input');
        var column = $th.index();
        var $table = $th.closest('table');
        var isNum= $table.find('tbody > tr').children('td').eq(column).hasClass('num');
        var rows = $table.find('tbody > tr').get();
        rows.sort(function(rowA,rowB) {
        if (isInput) {
            var keyA = $(rowA).children('td').eq(column).children('input').val().toUpperCase();
            var keyB = $(rowB).children('td').eq(column).children('input').val().toUpperCase();
        } else {
            var keyA = $(rowA).children('td').eq(column).text().toUpperCase();
            var keyB = $(rowB).children('td').eq(column).text().toUpperCase();
        }
        if (isSelected) return OrderBy(keyA,keyB,isNum);
            return OrderBy(keyB,keyA,isNum);
        });
        $.each(rows, function(index,row) {
            $table.children('tbody').append(row);
        });
        return false;
    });
});

function OrderBy(a,b,n) {
    if (n) return a-b;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

