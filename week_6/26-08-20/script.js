var Tv = /** @class */ (function () {
    function Tv(val) {
        var _this = this;
        this.playvid = function () {
            _this.playOpt.play();
        };
        this.pausevid = function () {
            _this.playOpt.pause();
        };
        this.mute = function () {
            if (_this.flag) {
                _this.playOpt.muted = true;
                _this.flag = false;
            }
            else {
                _this.playOpt.muted = false;
                _this.flag = true;
            }
        };
        this.next = function () {
            _this.playOpt.setAttribute('src', _this.playOpt[_this.i]);
            _this.playOpt.play();
            _this.i++;
            if (_this.i > 1) {
                _this.i = 0;
            }
        };
        this.tvOff = function () {
            _this.playOpt.setAttribute('src', '#');
        };
        this.tvOn = function () {
            _this.next();
        };
        this.volUP = function () {
            _this.playOpt.volume += 0.2;
        };
        this.volDW = function () {
            _this.playOpt.volume -= 0.2;
        };
        var vid = document.querySelector('video');
        vid.setAttribute("id", "placeFrame");
        vid.setAttribute("type", "video/mp4");
        document.querySelector("#gh").append(vid);
        this.playlist = val;
        this.i = 0;
        this.playOpt = vid;
        this.flag = true;
        this.playOpt.volume = 0;
    }
    return Tv;
}());
;
var veo = ['./sample-mp4-file.mp4', './toystory.mp4'];
var a = new Tv(veo);
var options = function (passVal) {
    switch (passVal) {
        case "playvid":
            a.playvid();
            break;
        case "pausevid":
            a.pausevid();
            break;
        case "mute":
            a.mute();
            break;
        case "next":
            a.next();
            break;
        case "tvOff":
            a.tvOff();
            break;
        case "tvOn":
            a.tvOn();
            break;
        case "volUP":
            a.volUP();
            break;
        case "volDW":
            a.volDW();
            break;
    }
};
