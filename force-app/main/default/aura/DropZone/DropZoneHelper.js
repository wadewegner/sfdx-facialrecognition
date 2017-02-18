({
    handleDragOver : function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    },

    handleDrop : function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        
        var reader = new FileReader();
        reader.onload = function(event) {
            // Once the data is fully loaded, propagate an event
            var photoData = event.target.result;
            var photoDroppedEvent = $A.get("e.c:PhotoDroppedEvent")
            photoDroppedEvent.setParam("photoData", photoData);
            photoDroppedEvent.fire();
        };
        
        reader.readAsDataURL(evt.dataTransfer.files[0]); // Grab the first file that was dropped
    }
})