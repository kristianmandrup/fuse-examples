var Observable = require('FuseJS/Observable');
var Camera = require('FuseJS/Camera');

var picture = Observable();

function takePicture(){
	Camera.takePicture({targetWidth:1000, targetHeight:1200}).then(function(file){
		picture.value = file;
	}).catch(function(e){
		console.log(e);
	});
}

module.exports = {
	picture: picture,
	takePicture: takePicture
};
