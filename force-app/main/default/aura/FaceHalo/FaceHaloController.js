({
    createContact: function(component, event, helper) {
        var nameInputs = component.find("faceName").get("v.value").split(/\s+/),
            firstName = nameInputs[0],
            lastName = nameInputs[1],
            accountName = component.find("accountName").get("v.value"),
            faceData = helper.cropFace(component);

        var contactCreatedEvent = $A.get("e.c:ContactCreatedEvent");
        contactCreatedEvent.setParam("firstName", firstName);
        contactCreatedEvent.setParam("lastName", lastName);
        contactCreatedEvent.setParam("accountName", accountName);
        contactCreatedEvent.setParam("faceData", faceData);
        contactCreatedEvent.fire();
    }
})