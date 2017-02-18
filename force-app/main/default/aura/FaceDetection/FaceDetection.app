<aura:application >
    <ltng:require styles="{!$Resource.SLDS104 + '/assets/styles/salesforce-lightning-design-system.css'}" />
    <div class="slds-grid slds-wrap">
        <div class="slds-col slds-size--1-of-1">
            <div class="slds-page-header" role="banner">
                <div class="slds-media">
                    <div class="slds-media__figure">
                        <c:svg svgPath="{!$Resource.SLDS104 + '/assets/icons/standard-sprite/svg/symbols.svg#photo'}"
                            category="standard" size="large" name="photo" />
                    </div>
                    <div class="slds-media__body">
                        <p class="slds-page-header__title slds-truncate slds-align-middle"
                            title="Face Detection App">Face Detection App</p>
                        <p class="slds-text-body--small slds-page-header__info">TrailHeaDX '16 • San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="slds-col--padded slds-size--1-of-1">
            <c:DropZone />
        </div>
        <nav class="slds-col--padded slds-size--1-of-2">
            <c:ImageAnalyzer />
        </nav>
        <div class="slds-col--padded slds-size--1-of-2">
            <c:ContactsZone />
        </div>
    </div>
</aura:application>