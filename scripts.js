$(document).ready(function(){
    $('table td').each(function(){
        let text = $(this).text()
        // Types
        if (text == 'Melee') {
            $(this).css('color', '#fe1c12');
        } else if (text == 'Range') {
            $(this).css('color', '#bc12fd');
        } else if (text == 'Armor') {
            $(this).css('color', '#188eff');
        } else if (text == 'Pet') {
            $(this).css('color', '#80e125');
        } else if (text == 'Skin') {
            $(this).css('color', '#fee000');
        }
        // Rarities
        else if (text == 'Common') {
            $(this).css('color', '#dad5d1');
        } else if (text == 'Rare') {
            $(this).css('color', '#abddaa');
        } else if (text == 'Unique') {
            $(this).css('color', '#cc5d15');
        }
        // code-128
        
        else if ((text.length == 8) && !(text.indexOf(' ') >= 0)) {
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

