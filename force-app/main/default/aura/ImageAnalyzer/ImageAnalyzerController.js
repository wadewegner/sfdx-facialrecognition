({
    handlePhotoDroppedEvent : function(component, event, helper) {
        $A.createComponent(
            "c:Photo",
            {   
                "photo" : event.getParam("photoData")
            },
            function(newPhoto) {
                component.set("v.body", [newPhoto]);
            });
    }
})