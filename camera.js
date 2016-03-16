/**
 * Created by Atiwong on 2/10/2016.
 */

var seconds=4;
var CameraTool = {
    element: undefined,
    video:undefined,
    status:"uninit",
    localMediaStream:undefined,
    state: function(){
        return this.state;
    },
    initCameraOn : function(id) {
        this.element = $("#"+id);
        this.video = $("<video></video>").css({"width":"100%","height":"100%"});
        //this.video = $("<video></video>");
        this.element.addClass("camera").html("").append(this.video);
        navigator.getUserMedia
            = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                {audio: false, video: true},
                function (stream) {
                    CameraTool.video.attr("src", window.URL.createObjectURL(stream));
                    CameraTool.video[0].play();
                    CameraTool.status = "on";
                    localMediaStream = stream.getTracks()[0];
                }, handleInitError);
        } else {
            handleInitError();
        }
        function handleInitError() {
            video.remove();
            element.append($("<div>Cannot initialize the video stream</div>"));
        }
    },
    captureTo: function(id){
        var canvas = $("#"+id);
        canvas[0].getContext("2d").drawImage(CameraTool.video[0],0,0,canvas.width(),canvas.height());
        this.status = "loaded";

    },
    hideCamera: function(){
        this.element.html("");
        this.status = "uninit";
        localMediaStream.stop();
    },
};
function count(){
    seconds-=1;
    if(seconds<1){
        $("#countdown").html("");
        CameraTool.captureTo("photo");
        CameraTool.hideCamera("camera");
        return;
        }
    $("#countdown").html(seconds);
    setTimeout("count()",1000);
}

CameraTool.initCameraOn("camera");
function capcam(){
            count();

        }








