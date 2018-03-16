$(document).ready(function(){
	setTimeout(function(){
			var element = document.getElementsByClassName('a-canvas')[0];
			var hammertime = new Hammer(element);
			hammertime.get('pinch').set({ enable: true });
			hammertime.on('pinch', function(ev) {
				//var entity = $('.asset-entity');
				var entity =  document.querySelectorAll('.asset-entity');
				var entity_len = entity.length;
				for (var i=0; i<entity_len; i++){
					var scale_val =  entity[i].getAttribute('scale');
					if (ev.type === 'pinch' && ev.additionalEvent == "pinchout") {
						var scale_x = scale_val.x + scale_val.x/10;
						var scale_y = scale_val.y + scale_val.y/10;
						var scale_z = scale_val.z + scale_val.z/10;
						var final_val = scale_x + ' ' + scale_y + ' ' + scale_z;
						
					}else if(ev.type === 'pinch'  && ev.additionalEvent == "pinchin"){
						if(scale_val.x>=0){
							var scale_x = scale_val.x - scale_val.x/10;
							var scale_y = scale_val.y - scale_val.y/10;
							var scale_z = scale_val.z - scale_val.z/10;
							var final_val = scale_x + ' ' + scale_y + ' ' + scale_z;
						}
					}
					entity[i].setAttribute('scale',final_val);
				}
			});
	},1000);
});