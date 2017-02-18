({
    rerender : function(component, helper) {
        this.superRerender();
        helper.reposition(component);
    },
    
    afterRender : function(component, helper) {
        this.superAfterRender();
        helper.reposition(component);
    }
})