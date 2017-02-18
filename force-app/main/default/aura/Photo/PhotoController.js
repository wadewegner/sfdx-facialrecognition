({
    handleFaceDetectedEvent: function(component, event, helper) {
        $A.createComponent(
            "c:FaceHalo", {
                "photoId": event.getParam("photoId"),
                "width": event.getParam("width"),
                "height": event.getParam("height"),
                "relLeft": event.getParam("relLeft"),
                "relTop": event.getParam("relTop"),
                "faceLeft": event.getParam("faceLeft"),
                "faceTop": event.getParam("faceTop")
            },
            function(newHalo) {
                var body = component.get("v.body");
                body.push(newHalo);
                component.set("v.body", body);
            });
    }
})