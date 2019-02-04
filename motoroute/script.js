$(document).on('click', '.sidebar', function(e){
	var target = e.target;
	var city = null;
	var cityTable = null;
	
	//Находим таблицу с нужным элементом
	var cityTable = $(target).closest('.menu');
	var city = cityTable.attr('id');
	if(!city) return false;
	
	//Выясняем тип маршрута(заверш, незаверш, фест)
	var titleClass = cityTable.closest('.mainmenu').attr('id');

		//Переберем все объеты массива bigObject
		for(var i=0; i<bigObject[titleClass].length; i++) {
			//Найдем объект с нужным городом
			if(bigObject[titleClass][i].name == city){
				//Если он не отрисован - рисуем
				if ( bigObject[titleClass][i].showMap == true) {
					calcRoute(city, titleClass, i);
					cityTable.css(titleClassCSS[titleClass]);
					bigObject[titleClass][i].showMap = false;
				}
				//Если отрисован - удаляем
				else {
					reset(city, titleClass, i);
					cityTable.css({'background-color':'#2B2C39', 'color':'#DCDCDC'});
					bigObject[titleClass][i].showMap = true;
				}
			} 
		}
	return false;
});

/*function showRoute(city){
	if ( bigObject[city].showMap == true) {
		calcRoute(city);
		bigObject[city].showMap = false;
	}
	else {
		reset(city);
		bigObject[city].showMap = true;
	}
}*/

//$(document).on("click", ".completed", function () { return false;});
//$(document).on("click", ".uncompleted", function () { return false;});