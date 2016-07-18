var keystone = require('keystone'),
	Types = keystone.Field.Types;


var Church = new keystone.List('Church',{
	map: { name: 'title'},
	autokey: { path: 'slug', from: 'title', unique: true }
});

Church.add({
	title: { type: String, unique: true },
	siteUrl: { 
		streamingfaith: { type: Types.Url, unique: false },
		piksel: { type: Types.Url, unique: false },
		private: { type: Types.Url, unique: false }
	},
	contact: { 
		email1: { type: Types.Email, unique: false },
		email2: { type: Types.Email, unique: false },
		email3: { type: Types.Email, unique: false },		
		phone1: { type: Types.Number, unique: false },
		phone2: { type: Types.Number, unique: false },
		phone3: { type: Types.Number, unique: false }
	},	
	supported: { type: Boolean },
	notes: { type: Types.Html, wysiwyg: true, height: 150 },
	akamai: { 
		hds: { 
			hundred: { type: Types.Url, unique: false },
			threehundred: { type: Types.Url, unique: false },
			fivehundred: { type: Types.Url, unique: false },
			sevenfifty: { type: Types.Url, unique: false },
			thousand: { type: Types.Url, unique: false }
		},
		hls: { type: Types.Url, unique: false }
	}

});

Church.defaultColumns = 'title,siteUrl';
Church.register();