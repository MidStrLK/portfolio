(function ($) {

    //define product model
    var ProtoObject = Backbone.Model.extend({
			data: '2000',
			title: '<strong>неопознано</strong>',
			name: 'noname',
			km: '0 км',
			hours: '0 ч',
			route : null,
			showMap : true,
			markers : [],
			arrRoute : [],
			comment : '',
			tooltip : ''
    });

    //define directory collection
    var CompletedCollection = Backbone.Collection.extend({
        model: ProtoObject
    });
	
    //define individual contact view
    var CompletedView = Backbone.View.extend({
        template: $("#routeTemplate").html(),

        render: function () {
            var tmpl = _.template(this.template);
            
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });
	
    //define master view
    var CompView = Backbone.View.extend({
        el: $("#completedList"),

        initialize: function () {
            this.completedColl = new CompletedCollection(bigObject['completed']);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(this.completedColl.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var compView = new CompletedView({
                model: item
            });
            this.$el.append(compView.render().el);
        }
    });
	
    var UncompView = Backbone.View.extend({
        el: $("#uncompletedList"),

        initialize: function () {
			this.uncompletedColl = new CompletedCollection(bigObject['uncompleted']);
            this.render();
        },

        render: function () {
			var that = this;
            _.each(this.uncompletedColl.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var uncompView = new CompletedView({
                model: item
            });
            this.$el.append(uncompView.render().el);
        }
    });
	
    var FView = Backbone.View.extend({
        el: $("#festList"),

        initialize: function () {
			this.festColl = new CompletedCollection(bigObject['fest']);
            this.render();
        },

        render: function () {
			var that = this;
            _.each(this.festColl.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var festView = new CompletedView({
                model: item
            });
            this.$el.append(festView.render().el);
        }
    });
    //create instance of master view
    var cview = new CompView();
	var uncview = new UncompView();
	var feview = new FView();

} (jQuery));