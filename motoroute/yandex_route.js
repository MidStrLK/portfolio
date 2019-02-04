var myMap, routeRRRR, ch =1;
var point = [];	
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center:[55.76, 37.64],
        zoom:8
    });
	
    myMap.controls
        .add('zoomControl', { left: 5, top: 5 })
        .add('typeSelector', { left: 35, top: 40 })
        .add('mapTools', { left: 35, top: 5 });
	myMap.behaviors.enable('scrollZoom'); 	
	
	myyPlacemark = new ymaps.Placemark([55.66777, 37.545616], {
            balloonContentHeader: "Родной дом",
            hintContent: "Родной дом",
        });
    myMap.geoObjects.add(myyPlacemark);

var CherVisible = false;
		//Отслеживаем событие клика по карте		
	/*	myMap.events.add('click', function (e) {                
            var coords = e.get('coordPosition');

			if(markers.length < 10)
			{
             myPlacemark = new ymaps.Placemark([coords[0].toPrecision(6),coords[1].toPrecision(6)], {
                    // Свойства
                    // Текст метки
                    iconContent: ch
                }, {
                    // Опции
                    // Иконка метки будет растягиваться под ее контент
                    preset: 'twirl#blueStretchyIcon'
                });     

			 markers.push(myPlacemark);
			 myMap.geoObjects.add(myPlacemark);
			 ch++;
			 }
			 else
			 {
			 alert("Вы задали максимальное количество точек");
			 }
            });			*/	
};
 
function calcRoute(yacity, yatitleClass, yai) {		
	/*for(var i=0; i<bigObject[yatitleClass][yai].arrRoute.length; i++){
		myPlacemark = new ymaps.Placemark(bigObject[yatitleClass][yai].arrRoute[i], {
                    // Свойства
                    // Текст метки
                    iconContent: i
                }, {
                    // Опции
                    // Иконка метки будет растягиваться под ее контент
                    preset: 'twirl#blueStretchyIcon'
                });     

			 bigObject[yatitleClass][yai].markers.push(myPlacemark);
			// myMap.geoObjects.add(myPlacemark);
	};*/
 
            ymaps.route(bigObject[yatitleClass][yai].arrRoute, {
                // Опции маршрутизатора
                mapStateAutoApply: true // автоматически позиционировать карту
				
            }).then(function (router) {
 
				bigObject[yatitleClass][yai].route = router;
				bigObject[yatitleClass][yai].route.options.set({ strokeColor: bigObject[yatitleClass][yai].color});
                myMap.geoObjects.add(bigObject[yatitleClass][yai].route);
				// С помощью метода getWayPoints() получаем массив точек маршрута 
                    // (массив транзитных точек маршрута можно получить с помощью метода getViaPoints)
                    var points = bigObject[yatitleClass][yai].route.getWayPoints();  
                    // Задаем стиль метки - иконки будут красного цвета, и
                    // их изображения будут растягиваться под контент
                    points.options.set('preset', 'twirl#motobikeIcon');
                    // Задаем контент меток конечной точках
					//последняя точка и название маршрута
					var lastPoint = null;
					if(bigObject[yatitleClass][yai].lastPoint != undefined){
						lastPoint = bigObject[yatitleClass][yai].lastPoint;
					}
					else{
						lastPoint = (bigObject[yatitleClass][yai].arrRoute.length - 1);
					};
					var lastTitle = bigObject[yatitleClass][yai].title.replace('<strong>', '');
					var lastTitle = lastTitle.replace('</strong>', '');
					points.get(lastPoint).options.set('preset', 'twirl#blueStretchyIcon');	
                    points.get(lastPoint).properties.set('iconContent', lastTitle);	
            }, function (error) {
                alert("Возникла ошибка: " + error.message);
            });	
		};

//Удаление маршрута и меток с карты и очистка данных
function reset(yacity, yatitleClass, yai) {
	bigObject[yatitleClass][yai].route && myMap.geoObjects.remove(bigObject[yatitleClass][yai].route);
	for(var i = 0, l = bigObject[yatitleClass][yai].markers.length; i < l; i++) {
		myMap.geoObjects.remove(bigObject[yatitleClass][yai].markers[i]);
	}
	bigObject[yatitleClass][yai].markers = []; 
};