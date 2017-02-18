({
    reposition: function(component) {
        var div = component.find("faceHalo").getElement();
        div.style.width = component.get("v.width") + "px";
        div.style.height = component.get("v.height") + "px";
        div.style.left = component.get("v.relLeft") + "px";
        div.style.top = component.get("v.relTop") + "px";
    },

    cropFace: function(component) {
        var photoComponent = $A.getComponent(component.get("v.photoId"));
        var img = photoComponent.find("photo").getElement();
        var canvas = document.createElement('canvas');
        var context = canvas.getContext("2d");

        var sourceX = component.get("v.faceLeft"),
            sourceY = component.get("v.faceTop"),
            sourceWidth = component.get("v.width"),
            sourceHeight = component.get("v.height")
        context.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight);
        var faceData = canvas.toDataURL("image/png");
        return faceData;
    }
})