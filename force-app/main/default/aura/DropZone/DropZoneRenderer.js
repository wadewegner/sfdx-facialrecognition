({
    afterRender : function(component, helper) {
        // Register the event listener for drop target
        this.superAfterRender();
        var photoDropZone = component.find("photoDropZone").getElement();
        photoDropZone.addEventListener('dragover', helper.handleDragOver, false);
        photoDropZone.addEventListener('drop', helper.handleDrop, false);
    }
})