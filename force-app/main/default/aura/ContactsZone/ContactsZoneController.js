({
    handleContactCreatedEvent: function(component, event, helper) {
        $A.createComponent(
            "c:Contact", {
                "firstName": event.getParam("firstName"),
                "lastName": event.getParam("lastName"),
                "accountName": event.getParam("accountName"),
                "faceData": event.getParam("faceData")
            },
            function(newContact) {
                var body = component.get("v.body");
                body.push(newContact);
                component.set("v.body", body);
            });

    }
})