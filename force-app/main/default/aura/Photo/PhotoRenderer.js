({
    afterRender: function(component, helper) {
        var img = component.find("photo").getElement();
        if (img.getAttribute("src")) {
            var tracker = new tracking.ObjectTracker("face");
            tracking.track(img, tracker);

            tracker.on("track", function(event) {
                event.data.forEach(function(rect) {
                    var faceDetectedEvent = component.getEvent("faceDetectedEvent");
                    faceDetectedEvent.setParam("photoId", component.getGlobalId());
                    faceDetectedEvent.setParam("width", rect.width);
                    faceDetectedEvent.setParam("height", rect.height);
                    faceDetectedEvent.setParam("relLeft", img.offsetLeft + rect.x);
                    faceDetectedEvent.setParam("relTop", img.offsetTop + rect.y);
                    faceDetectedEvent.setParam("faceLeft", rect.x);
                    faceDetectedEvent.setParam("faceTop", rect.y);
                    faceDetectedEvent.fire();
                });
            });
        }
    }
})