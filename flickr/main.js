/* Сделал Дмитрий Елагин */


// создаем объект
var app = app || {};

//создаем прототип нашей модели
var ImgModel = Backbone.Model.extend({
    defaults: {
		photo: 'photo',
		link: 'link',
		title: 'Без Названия'
    },
    initialize: function() {}
});

var ImgCollection = Backbone.Collection.extend({
    model: ImgModel
});

//Создаем представление
var ImgView = Backbone.View.extend({
    
	tagName: 'div',
	
	className: 'img',

    initialize: function () {
        this.template = _.template($('#viewImg').html());
    },

    render: function () {
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
        return this.$el;
    }
});

var ImagesView = Backbone.View.extend({

    events: {
		"click .Button": "clickButton",
		'keypress #box': 'filterOnEnter'
    },

    initialize: function() {
        this.template = _.template($('#viewBase').html());
        this.$el.html(this.template());
        this.coll = new ImgCollection();
        this.listenTo(this.coll, "add", this.addOne);
    },

    render: function() {
    },
	
	clickButton: function() {
		var that = this;
		that.coll.reset();
		$('.imgList').children().remove();
		var pic=$("#box").val();
		$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?&tags='
		+pic+"&tagmode=any&format=json&jsoncallback=?",	
		function(data){
			if (data.items.length != 0){
				var titleSpace = null;
					for( var i=0; i<12; i++) {
					//Проверка на строки из одних пробелов
					if(!/^\s+$/.test(data.items[i].title)) {titleSpace = data.items[i].title}
					else {titleSpace = 'Без Названия'};
						that.coll.add({
							photo : data.items[i].media.m,
							link : data.items[i].link,
							title : titleSpace
						});
					};
			}
			else {
				for( var i=0; i<12; i++) {
					that.coll.add({
						photo : 'notfound.jpg',
						link : '',
						title : 'НИЧЕГО НЕ НАЙДЕНО'
					});
				};
			};
		})
	},
	
	filterOnEnter: function(e) {
        if (e.keyCode != 13) return;
        this.clickButton();
	},
	
    addOne: function(model) {
        var view = new ImgView({model: model});
        this.$('.imgList').append(view.render());
    }
});



$(function () {

    $.fn.main = function(cmd) {
        if (!window._main) {
            window._main = {};
        }
        if (cmd == 'create') {
            var id = Math.random();
            $(this).attr('data-main-id',id);
            window._main[id] = new ImagesView({
                el: this
            });

        } if (cmd == 'json') {
            var id = $(this).attr('data-main-id');
            return window._main[id].coll.toJSON();
        }
    }

    $('#main').main('create');
	
});
