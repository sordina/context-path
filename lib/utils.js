function merge(arr) {
	var result = {}

	$.each(arr, function(i,obj){
		for( k in obj ) {
			result[k] = obj[k]
		}
	})

	return result
}
