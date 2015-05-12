$(document).ready(function(){
  // code in here!
	$.get("mock_data.js", render(mockData))
  
	console.log("here's your data:", mockData)
	function render(data){
	var children = data.data
	children.forEach(function(item,i){
		var gif = item.images.fixed_height.url;
		$("#blah").append("<img src='" + gif + "'>"); // mind the single vs. double quotes!
		})  
	}

	$('#searchForm').submit(function(event){
		event.preventDefault();
		var inputVal = $(this.search).val();
		console.log(inputVal)
		$.get("http://api.giphy.com/v1/gifs/search?q="+inputVal+"&api_key=dc6zaTOxFJmzC", function (data){
			var children = data.data
			$("#blah").empty();
			children.forEach(function(item,i){
			var gif = item.images.fixed_height.url;	
			$("#blah").append("<img src='" + gif + "'>");


		})
		})

})

});


