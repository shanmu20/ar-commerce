           var _this = this
            var domElement = document.createElement('video');
            domElement.setAttribute('autoplay', '');
            domElement.setAttribute('muted', '');
            domElement.setAttribute('playsinline', '');
            domElement.style.width = '1280px'
            domElement.style.height = '720px'
            if (navigator.mediaDevices === undefined 
                    || navigator.mediaDevices.enumerateDevices === undefined 
                    || navigator.mediaDevices.getUserMedia === undefined  ){
                alert("WebRTC issue! navigator.mediaDevices.enumerateDevices not present in your browser");		
            }
            navigator.mediaDevices.enumerateDevices().then(function(devices) {
                        var userMediaConstraints = {
                    audio: false,
                    video: {
                        facingMode: 'environment',
                       width: 1280, height: 720
                    }
                        }
                navigator.mediaDevices.getUserMedia(userMediaConstraints).then(function success(stream) {
                    // set the .src of the domElement
                    domElement.srcObject = stream;
                    // to start the video, when it is possible to start it only on userevent. like in android
                    document.body.addEventListener('click', function(){
                        domElement.play();
                    })
                    document.body.appendChild(domElement);
                }).catch(function(error) {
                    console.log("Can't access user media", error);
                    alert("Can't access user media :()");
                });
            }).catch(function(err) {
                console.log(err.name + ": " + err.message);
            });