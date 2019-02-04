$(document).ready(function(){

/*Выпадающие списки*/

	$(".ul-dropfree").find("li:has(ul)").prepend('<div class="drop"></div>');
	$(".ul-dropfree div.drop").click(function() {
		if ($(this).nextAll("ul").css('display')=='none') {
			$(this).nextAll("ul").slideDown(400);
			$(this).css({'background-position':"-11px 0"});
		} else {
			$(this).nextAll("ul").slideUp(400);
			$(this).css({'background-position':"0 0"});
		}
	});
	//$(".ul-dropfree").find("ul").slideUp(400).parents("li").children("div.drop").css({'background-position':"0 0"});

/*Изменение масштаба*/
	
	$("#Scale").click(function(event){
		var id = event.target.id
		var $tableCell = $('#rightTable tr td');
		var $span = $(this).find('span');
		var tableCellWidth = parseInt($tableCell.css('min-width'));
		var newWidth = null;
		if (id == 'decScale') {
			if ( tableCellWidth > 50 ) { 
				newWidth = tableCellWidth - 20;
				newWidth += 'px';
				$tableCell.css('min-width', newWidth);
				$span.css('display','none');
			}
			else {
				$span.text('Достигнут минимальный масштаб.');
				$span.css('display','inline');
			}
		}else {
			if ( tableCellWidth < 400 ) { 
				newWidth = tableCellWidth + 20;
				newWidth += 'px';
				$tableCell.css('min-width', newWidth);
				$span.css('display','none');
			}
			else {
				$span.text('Достигнут максимальный масштаб.');
				$span.css('display','inline');
			}
		};
	});	
	
	
});