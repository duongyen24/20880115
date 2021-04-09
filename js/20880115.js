function loadData (request, targetID, sourceID) {    // viet 1 function chung de dua du lieu vao dung 3 vi tri
	$.ajax({  // ham jquery goi api
	  url: 'https://web1-api.herokuapp.com/api/' + request,
	  cache: false,   // moi lan lay data la lay moi
	  success: function(data) {
		let jsonData = {
		  data: data
		};
		let target = $(targetID); // get id news
		let source = $(sourceID).html();
		let template = Handlebars.compile(source);
		$(target).html(template(jsonData));
	  }       
	});
  }