// Define Breakpoints
// Create object which will feed into SASS and our JS Breakpoint Function

var bpObj = {
	convertToPx: function(){
		this.pxData = this.data;
		for(key in this.pxData){
		 	this.pxData[key] += "px";
		}
		return this.pxData;
	}
};

bpObj.data = breakpoints;

// Breakpoint detection function
// eg: if(bp("med")){
var bp = function(size){
	if(window.innerWidth <= bpObj["data"][size]){
		return true;
	}
	else {
		return false;
	}
}