/// <reference path="../../lib/react.d.ts" />
///
/// <reference path="../js/eventlistener.d.ts" />
var UIComponents;
(function (UIComponents) {
    UIComponents.SideMenuZoom = React.createClass({
        handleZoomChange: function (event) {
            var target = event.target;

            this.setState({ zoom: parseFloat(target.value) });
        },
        handleZoomSubmit: function (event) {
            event.preventDefault();
            eventManager.dispatchEvent({ type: "changeZoom", content: this.state.zoom });
            return false;
        },
        componentDidMount: function () {
            var self = this;
            var el = this.refs.zoomValue.getDOMNode();

            eventManager.addEventListener("updateZoomValue", function (e) {
                el.value = e.content.toFixed(3);
                self.setState({ zoom: e.content });
            });
        },
        render: function () {
            return (React.DOM.form({
                id: "size-menu-zoom",
                className: "grid-row",
                onSubmit: this.handleZoomSubmit
            }, React.DOM.input({
                id: "zoom-amount",
                ref: "zoomValue",
                className: "grid-row",
                type: "number",
                defaultValue: "1",
                step: 0.1,
                onChange: this.handleZoomChange
            }), React.DOM.button({ id: "zoomBtn", className: "grid-row" }, "zoom")));
        }
    });
})(UIComponents || (UIComponents = {}));
//# sourceMappingURL=sidemenuzoom.js.map