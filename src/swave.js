var Swave = (function () {
    function Swave(selector, config) {
        if (selector === void 0) { selector = ''; }
        if (config === void 0) { config = {}; }
        this.selector = '';
        this.config = {};
        this.selector = selector;
        this.config = config;
        this.init();
    }
    Swave.prototype.init = function () {
        this.setConfig();
        document.querySelector(this.selector).innerHTML = this.generateSvg();
    };
    Swave.prototype.setConfig = function () {
        for (var key in Swave._config) {
            if (Swave._config.hasOwnProperty(key)) {
                if (!this.config[key]) {
                    this.config[key] = Swave._config[key];
                }
            }
        }
    };
    Swave.prototype.generateSvg = function () {
        console.log(this.config);
        return "<svg width=\"" + this.config.width + "px\" height=\"" + this.config.height + "\">\n      <path d=\"M 0 " + this.config.height / 2 + ", Q " + this.config.height / 2 + " 0, " + this.config.width / 4 + " " + this.config.height / 2 + " T " + this.config.width + " " + this.config.height / 2 + " L " + this.config.width + " " + this.config
            .height + ", 0 " + this.config.height + " Z\" stroke=\"" + this.config.color + "\" fill=\"" + this.config.color + "\" stroke-width=\"2\">\n        <animate attributeType=\"XML\" attributeName=\"d\" dur=\"" + this.config.duration + "s\" repeatCount=\"indefinite\" values=\"M 0 " + this.config.height / 2 + ", Q " + this.config.height / 2 + " 0, " + this.config.width / 4 + " " + this.config
            .height / 2 + " T " + this.config.width + " " + this.config.height / 2 + " L " + this.config.width + " " + this.config
            .height + ", 0 " + this.config.height + " Z;M 0 100, Q 100 100, 200 100 T 400 100 L 400 200, 0 200 Z;M 0 " + this.config.height / 2 + ", Q " + this.config.height / 2 + " 0, " + this.config.width / 4 + " " + this.config
            .height / 2 + " T " + this.config.width + " " + this.config.height / 2 + " L " + this.config.width + " " + this.config
            .height + ", 0 " + this.config.height + " Z;\"></animate>\n      </path>\n    </svg>";
    };
    Swave._config = {
        width: 1000,
        height: 300,
        duration: 4,
        color: '#ddd'
    };
    return Swave;
}());
//# sourceMappingURL=swave.js.map