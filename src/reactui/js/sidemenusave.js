/// <reference path="../../lib/react.d.ts" />
///
/// <reference path="../js/eventlistener.d.ts" />
var UIComponents;
(function (UIComponents) {
    UIComponents.SideMenuSave = React.createClass({
        handleSave: function () {
            eventManager.dispatchEvent({
                type: "makeSavePopup", content: ""
            });
        },
        handleLoad: function () {
            eventManager.dispatchEvent({
                type: "makeLoadPopup", content: ""
            });
        },
        render: function () {
            return (React.DOM.div({ id: "save-buttons", className: "grid-row" }, React.DOM.div({
                className: "grid-cell interactive",
                onClick: this.handleSave,
                onTouch: this.handleSave
            }, "save"), React.DOM.div({
                className: "grid-cell interactive",
                onClick: this.handleLoad,
                onTouch: this.handleLoad
            }, "load")));
        }
    });
})(UIComponents || (UIComponents = {}));
//# sourceMappingURL=sidemenusave.js.map