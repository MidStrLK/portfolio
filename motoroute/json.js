var titleClassCSS = {
	completed : {'background-color':'#191970', 'color':'white'},
	uncompleted : {'background-color':'#CD5C5C', 'color':'white'},
	fest : {'background-color':'#006400', 'color':'white'}
}

var bigObject = {
	completed : [
		{
			data: '2012',
			title: 'Долгая дорога в <strong>Череповец</strong>',
			name: 'Cherepovets',
			km: '1 100 км',
			hours: '24 ч',
			route : null,
			color : '191970',
			lastPoint : 8,
			showMap : true,
			markers : [],
			comment : 'Долго же я ехал в этот чертов Череп овец',
			tooltip : 'tooltip yellow-tooltip',
			arrRoute : [
				[55.668007, 37.545488],
				[56.321836, 38.136794],
				[57.212432, 37.870384],
				[57.349176, 37.609413],
				[57.777028, 36.696453],
				[58.642056, 37.253397],
				[58.842044, 36.437017],
				[58.957259, 36.527811],
				[59.132143, 37.908963],
				[58.510498, 39.120158],
				[58.060446, 38.850826],
				[57.785343, 38.492002],
				[57.528550, 38.324323],
				[56.755854, 38.175286],
				[55.667790, 37.546175]
			]
	
		},
		{
			data: '2013',
			title: 'Страх и ненависть в <strong>Кимрах</strong>',
			name: 'Kimri',
			km: '330 км',
			hours: '7 ч',
			route : null,
			color : '191970',
			lastPoint : 4,
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668127, 37.545171],
				[55.911025, 37.544478],
				[56.691712, 37.191676],
				[56.868090, 37.370534],
				[56.884868, 37.368238],
				[56.728100, 37.536411],
				[56.356165, 37.525007],
				[55.667726, 37.546393]
			]
	
		},	
		{
			data: '2011',
			title: 'Просто<strong> Дача</strong>',
			name: 'Dacha',
			km: '65 км',
			hours: '1,5 ч',
			route : null,
			color : '191970',
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668127, 37.545171],
				[55.226601, 37.237494]
			]
	
		},
		{
			data: '25.04 2014',
			title: '<strong>Переславль-Залесский</strong> - очень дерзкий',
			name: 'PereslavlZaleski',
			km: '320 км',
			hours: '8 ч',
			route : null,
			color : '191970',
			lastPoint : 2,
			showMap : true,
			markers : [],
			comment : 'Посетил Красную площадь, которая на самом деле зеленая. Посмотрел храмы и соборы. Погулял в красивейшем ДендроСаду. Покушал на берегу Плещеева озера в кафе \"Ботик\". Также на протяжении всего пути был сильнейший ветер, сдувающий с дороги.',
			tooltip : 'tooltip yellow-tooltip',
			arrRoute : [
				[55.668007, 37.545488],
				[56.500251, 38.489871],
				[56.735874, 38.851523],
				[56.522959, 38.486126],
				[55.667790, 37.546175]
			]
	
		}		
	],

	uncompleted : [
	
	],

	fest : [
		{
			data: '19.04',
			title: 'Открытие мотосезона в <strong>Москве</strong>',
			name: 'MoscowOpenNW',
			km: '19 км',
			hours: '34 м',
			route : null,
			color : '000000',
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668007, 37.545488],
				[55.764935, 37.472343]
			]
	
		},
		{
			data: '30.05 01.06',
			title: 'Синие дни - веселые ночи в <strong>Пушкино</strong>',
			name: 'Orel',
			km: '70 км',
			hours: '1,5 ч',
			route : null,
			color : '000000',
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668127, 37.545171],
				[56.105497, 37.757560]
			]
	
		},
		{
			data: '31.05',
			title: '<strong>Киржач</strong> - Владимирская Русь',
			name: 'Kirzach',
			km: '120 км',
			hours: '2,5 ч',
			route : null,
			color : '000000',
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668127, 37.545171],
				[56.161679, 38.872079]
			]
	
		},	
		{
			data: '25.06 29.06',
			title: 'Мото-<strong>Малоярославец</strong>',
			name: 'Malojaroslavets',
			km: '140 км',
			hours: '3,5 ч',
			route : null,
			color : '000000',
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668127, 37.545171],
				[55.076937, 36.010396]
			]
	
		},		
		{
			data: '04.07 06.07',
			title: 'В гостях у мотосемьи <strong>Можайск</strong>',
			name: 'Motosemja',
			km: '97 км',
			hours: '1,5 ч',
			route : null,
			color : '000000',
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668127, 37.545171],
				[55.485759, 36.228393]
			]
	
		},	
		{
			data: '25.07 27.07',
			title: 'Мотопикник «Байки из леса 2014» <strong>Вышний Волочек</strong>',
			name: 'Volochok',
			km: '310 км',
			hours: '5 ч',
			route : null,
			color : '000000',
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668127, 37.545171],
				[57.583556, 34.560255]
			]
	
		},	
		{
			data: '8.08 10.08',
			title: 'ХIХ Meждународное Байк-Шоу в <strong>Севастополе</strong>',
			name: 'Sevastopol',
			km: '1500 км',
			hours: '20 ч',
			route : null,
			color : '000000',
			showMap : true,
			markers : [],
			comment : '',
			tooltip : '',
			arrRoute : [
				[55.668127, 37.545171],
				[44.616649, 33.525360]
			]
	
		},
	]
};