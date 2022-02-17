function _extends() {
    return (_extends = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    }).apply(this, arguments)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

!function (e) {
    Array.prototype.map || (Array.prototype.map = function (e, t) {
        var i, n, r;
        if (null == this) throw new TypeError(" this is null or not defined");
        var o = Object(this), a = o.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (t && (i = t), n = Array(a), r = 0; r < a;) {
            var s, l;
            r in o && (s = o[r], l = e.call(i, s, r, o), n[r] = l), r++
        }
        return n
    });
    var t = e.detect = function () {
        var t, c = function () {
        };
        c.parsers = ["device_parsers", "browser_parsers", "os_parsers", "mobile_os_families", "mobile_browser_families"], c.types = ["browser", "os", "device"], c.regexes = {
            browser_parsers: [{
                regex: "^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii",
                family_replacement: "Wii",
                manufacturer: "Nintendo"
            }, {
                regex: "(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
                family_replacement: "Camino",
                other: !0
            }, {
                regex: "(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
                family_replacement: "Pale Moon (Firefox Variant)",
                other: !0
            }, {
                regex: "(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
                family_replacement: "Firefox Mobile"
            }, {
                regex: "(Fennec)/(\\d+)\\.(\\d+)(pre)",
                family_replacment: "Firefox Mobile"
            }, {
                regex: "(Fennec)/(\\d+)\\.(\\d+)",
                family_replacement: "Firefox Mobile"
            }, {
                regex: "Mobile.*(Firefox)/(\\d+)\\.(\\d+)",
                family_replacement: "Firefox Mobile"
            }, {
                regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",
                family_replacement: "Firefox ($1)"
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
                family_replacement: "Firefox Alpha"
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
                family_replacement: "Firefox Beta"
            }, {
                regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
                family_replacement: "Firefox Alpha"
            }, {
                regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
                family_replacement: "Firefox Beta"
            }, {
                regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",
                family_replacement: "Firefox ($1)"
            }, {
                regex: "(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "MicroB",
                tablet: !0
            }, {regex: "(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"}, {
                regex: "(Flock)/(\\d+)\\.(\\d+)(b\\d+?)",
                family_replacement: "Flock",
                other: !0
            }, {
                regex: "(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Rockmelt",
                other: !0
            }, {
                regex: "(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Netscape"
            }, {
                regex: "(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",
                family_replacement: "Netscape"
            }, {
                regex: "(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Netscape"
            }, {
                regex: "(MyIBrow)/(\\d+)\\.(\\d+)",
                family_replacement: "My Internet Browser",
                other: !0
            }, {
                regex: "(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                family_replacement: "Opera Tablet",
                tablet: !0
            }, {
                regex: "(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",
                family_replacement: "Opera Mobile"
            }, {regex: "Opera Mobi", family_replacement: "Opera Mobile"}, {
                regex: "(Opera Mini)/(\\d+)\\.(\\d+)",
                family_replacement: "Opera Mini"
            }, {
                regex: "(Opera Mini)/att/(\\d+)\\.(\\d+)",
                family_replacement: "Opera Mini"
            }, {
                regex: "(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                family_replacement: "Opera"
            }, {
                regex: "(OPR)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                family_replacement: "Opera"
            }, {
                regex: "(webOSBrowser)/(\\d+)\\.(\\d+)",
                family_replacement: "webOS"
            }, {
                regex: "(webOS)/(\\d+)\\.(\\d+)",
                family_replacement: "webOS"
            }, {
                regex: "(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)",
                family_replacement: "webOS TouchPad"
            }, {
                regex: "(luakit)",
                family_replacement: "LuaKit",
                other: !0
            }, {
                regex: "(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)",
                family_replacement: "Lightning",
                other: !0
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",
                family_replacement: "Swiftfox",
                other: !0
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",
                family_replacement: "Swiftfox",
                other: !0
            }, {
                regex: "rekonq",
                family_replacement: "Rekonq",
                other: !0
            }, {
                regex: "(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
                family_replacement: "Conkeror",
                other: !0
            }, {
                regex: "(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Konqueror",
                other: !0
            }, {
                regex: "(WeTab)-Browser",
                family_replacement: "WeTab",
                other: !0
            }, {
                regex: "(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Comodo Dragon",
                other: !0
            }, {
                regex: "(YottaaMonitor)",
                family_replacement: "Yottaa Monitor",
                other: !0
            }, {regex: "(Kindle)/(\\d+)\\.(\\d+)", family_replacement: "Kindle"}, {
                regex: "(Symphony) (\\d+).(\\d+)",
                family_replacement: "Symphony",
                other: !0
            }, {regex: "Minimo", family_replacement: "Minimo", other: !0}, {
                regex: "(Edge)/(\\d+)\\.(\\d+)",
                family_replacement: "Edge"
            }, {
                regex: "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Chrome Mobile"
            }, {
                regex: "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Chrome Mobile iOS"
            }, {
                regex: "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",
                family_replacement: "Chrome Mobile"
            }, {
                regex: "(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Chrome Frame"
            }, {
                regex: "(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "UC Browser",
                other: !0
            }, {
                regex: "(SLP Browser)/(\\d+)\\.(\\d+)",
                family_replacement: "Tizen Browser",
                other: !0
            }, {
                regex: "(Epiphany)/(\\d+)\\.(\\d+).(\\d+)",
                family_replacement: "Epiphany",
                other: !0
            }, {
                regex: "(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",
                family_replacement: "Sogou Explorer",
                other: !0
            }, {
                regex: "(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",
                family_replacement: "PingdomBot",
                other: !0
            }, {
                regex: "(facebookexternalhit)/(\\d+)\\.(\\d+)",
                family_replacement: "FacebookBot"
            }, {
                regex: "(Twitterbot)/(\\d+)\\.(\\d+)",
                family_replacement: "TwitterBot"
            }, {regex: "(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"}, {regex: "(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)"}, {regex: "(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"}, {regex: "(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"}, {
                regex: "(Android) Donut",
                v2_replacement: "2",
                v1_replacement: "1"
            }, {regex: "(Android) Eclair", v2_replacement: "1", v1_replacement: "2"}, {
                regex: "(Android) Froyo",
                v2_replacement: "2",
                v1_replacement: "2"
            }, {
                regex: "(Android) Gingerbread",
                v2_replacement: "3",
                v1_replacement: "2"
            }, {regex: "(Android) Honeycomb", v1_replacement: "3"}, {
                regex: "(IEMobile)[ /](\\d+)\\.(\\d+)",
                family_replacement: "IE Mobile"
            }, {
                regex: "(MSIE) (\\d+)\\.(\\d+).*XBLWP7",
                family_replacement: "IE Large Screen"
            }, {regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"}, {regex: "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"}, {
                regex: "(Obigo)InternetBrowser",
                other: !0
            }, {regex: "(Obigo)\\-Browser", other: !0}, {
                regex: "(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",
                other: !0
            }, {
                regex: "(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",
                family_replacement: "Maxthon",
                other: !0
            }, {regex: "(Maxthon|MyIE2|Uzbl|Shiira)", v1_replacement: "0", other: !0}, {
                regex: "(PLAYSTATION) (\\d+)",
                family_replacement: "PlayStation",
                manufacturer: "Sony"
            }, {
                regex: "(PlayStation Portable)[^\\d]+(\\d+).(\\d+)",
                manufacturer: "Sony"
            }, {regex: "(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)", other: !0}, {
                regex: "(POLARIS)/(\\d+)\\.(\\d+)",
                family_replacement: "Polaris",
                other: !0
            }, {
                regex: "(Embider)/(\\d+)\\.(\\d+)",
                family_replacement: "Polaris",
                other: !0
            }, {
                regex: "(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Bon Echo",
                other: !0
            }, {
                regex: "(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPod).*Version/(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPod)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone).*Version/(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                tablet: !0,
                manufacturer: "Apple"
            }, {
                regex: "(iPad).*Version/(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                tablet: !0,
                manufacturer: "Apple"
            }, {
                regex: "(iPad)",
                family_replacement: "Mobile Safari",
                tablet: !0,
                manufacturer: "Apple"
            }, {regex: "(AvantGo) (\\d+).(\\d+)", other: !0}, {
                regex: "(Avant)",
                v1_replacement: "1",
                other: !0
            }, {
                regex: "^(Nokia)",
                family_replacement: "Nokia Services (WAP) Browser",
                manufacturer: "Nokia"
            }, {
                regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",
                manufacturer: "Nokia"
            }, {
                regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",
                manufacturer: "Nokia"
            }, {
                regex: "(NokiaBrowser)/(\\d+)\\.(\\d+)",
                manufacturer: "Nokia"
            }, {
                regex: "(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",
                family_replacement: "NokiaBrowser",
                manufacturer: "Nokia"
            }, {
                regex: "(Series60)/5\\.0",
                v2_replacement: "0",
                v1_replacement: "7",
                family_replacement: "NokiaBrowser",
                manufacturer: "Nokia"
            }, {
                regex: "(Series60)/(\\d+)\\.(\\d+)",
                family_replacement: "Nokia OSS Browser",
                manufacturer: "Nokia"
            }, {
                regex: "(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Nokia Series 40 Ovi Browser",
                manufacturer: "Nokia"
            }, {
                regex: "(Nokia)[EN]?(\\d+)",
                manufacturer: "Nokia"
            }, {
                regex: "(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Blackberry WebKit",
                tablet: !0,
                manufacturer: "Nokia"
            }, {
                regex: "(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Blackberry WebKit",
                manufacturer: "RIM"
            }, {
                regex: "(Black[bB]erry)\\s?(\\d+)",
                family_replacement: "Blackberry",
                manufacturer: "RIM"
            }, {regex: "(OmniWeb)/v(\\d+)\\.(\\d+)", other: !0}, {
                regex: "(Blazer)/(\\d+)\\.(\\d+)",
                family_replacement: "Palm Blazer",
                manufacturer: "Palm"
            }, {
                regex: "(Pre)/(\\d+)\\.(\\d+)",
                family_replacement: "Palm Pre",
                manufacturer: "Palm"
            }, {regex: "(Links) \\((\\d+)\\.(\\d+)", other: !0}, {
                regex: "(QtWeb) Internet Browser/(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
                other: !0,
                tablet: !0
            }, {
                regex: "(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/",
                family_replacement: "WebKit Nightly"
            }, {
                regex: "(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",
                family_replacement: "Safari"
            }, {regex: "(Safari)/\\d+"}, {
                regex: "(OLPC)/Update(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(OLPC)/Update()\\.(\\d+)",
                v1_replacement: "0",
                other: !0
            }, {regex: "(SEMC\\-Browser)/(\\d+)\\.(\\d+)", other: !0}, {
                regex: "(Teleca)",
                family_replacement: "Teleca Browser",
                other: !0
            }, {regex: "Trident(.*)rv.(\\d+)\\.(\\d+)", family_replacement: "IE"}, {
                regex: "(MSIE) (\\d+)\\.(\\d+)",
                family_replacement: "IE"
            }],
            os_parsers: [{regex: "(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"}, {regex: "(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"}, {
                regex: "(Android) Donut",
                os_v2_replacement: "2",
                os_v1_replacement: "1"
            }, {regex: "(Android) Eclair", os_v2_replacement: "1", os_v1_replacement: "2"}, {
                regex: "(Android) Froyo",
                os_v2_replacement: "2",
                os_v1_replacement: "2"
            }, {
                regex: "(Android) Gingerbread",
                os_v2_replacement: "3",
                os_v1_replacement: "2"
            }, {regex: "(Android) Honeycomb", os_v1_replacement: "3"}, {
                regex: "(Silk-Accelerated=[a-z]{4,5})",
                os_replacement: "Android"
            }, {regex: "(Windows Phone 6\\.5)"}, {
                regex: "(Windows (?:NT 5\\.2|NT 5\\.1))",
                os_replacement: "Windows XP"
            }, {regex: "(XBLWP7)", os_replacement: "Windows Phone OS"}, {
                regex: "(Windows NT 6\\.1)",
                os_replacement: "Windows 7"
            }, {
                regex: "(Windows NT 6\\.0)",
                os_replacement: "Windows Vista"
            }, {regex: "(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"}, {
                regex: "(Windows NT 6\\.4|Windows NT 10\\.0)",
                os_replacement: "Windows 10"
            }, {regex: "(Windows NT 6\\.2)", os_replacement: "Windows 8"}, {
                regex: "(Windows Phone 8)",
                os_replacement: "Windows Phone 8"
            }, {
                regex: "(Windows NT 5\\.0)",
                os_replacement: "Windows 2000"
            }, {regex: "(Windows Phone OS) (\\d+)\\.(\\d+)"}, {
                regex: "(Windows ?Mobile)",
                os_replacement: "Windows Mobile"
            }, {regex: "(WinNT4.0)", os_replacement: "Windows NT 4.0"}, {
                regex: "(Win98)",
                os_replacement: "Windows 98"
            }, {regex: "(Tizen)/(\\d+)\\.(\\d+)", other: !0}, {
                regex: "(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?",
                manufacturer: "Apple"
            }, {
                regex: "(?:PPC|Intel) (Mac OS X)",
                manufacturer: "Apple"
            }, {
                regex: "(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",
                os_replacement: "iOS",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone|iPad|iPod); Opera",
                os_replacement: "iOS",
                manufacturer: "Apple"
            }, {
                regex: "(iPad); Opera",
                tablet: !0,
                manufacturer: "Apple"
            }, {
                regex: "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",
                os_replacement: "iOS",
                manufacturer: "Apple"
            }, {
                regex: "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                os_replacement: "Chrome OS"
            }, {
                regex: "(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                other: !0
            }, {
                regex: "(Linux Mint)(?:/(\\d+))?",
                other: !0
            }, {
                regex: "(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                other: !0
            }, {
                regex: "(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",
                os_replacement: "Symbian OS"
            }, {
                regex: "(Symbian/3).+NokiaBrowser/7\\.3",
                os_replacement: "Symbian^3 Anna"
            }, {regex: "(Symbian/3).+NokiaBrowser/7\\.4", os_replacement: "Symbian^3 Belle"}, {
                regex: "(Symbian/3)",
                os_replacement: "Symbian^3"
            }, {regex: "(Series 60|SymbOS|S60)", os_replacement: "Symbian OS"}, {
                regex: "(MeeGo)",
                other: !0
            }, {
                regex: "Symbian [Oo][Ss]",
                os_replacement: "Symbian OS"
            }, {
                regex: "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                os_replacement: "BlackBerry OS",
                manufacturer: "RIM"
            }, {
                regex: "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                os_replacement: "BlackBerry OS",
                manufacturer: "RIM"
            }, {
                regex: "(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",
                os_replacement: "BlackBerry Tablet OS",
                tablet: !0,
                manufacturer: "RIM"
            }, {
                regex: "(Play[Bb]ook)",
                os_replacement: "BlackBerry Tablet OS",
                tablet: !0,
                manufacturer: "RIM"
            }, {
                regex: "(Black[Bb]erry)",
                os_replacement: "Blackberry OS",
                manufacturer: "RIM"
            }, {
                regex: "(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                os_replacement: "webOS"
            }, {
                regex: "(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)",
                other: !0
            }, {regex: "(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"}, {regex: "(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"}, {
                regex: "(Linux|BSD)",
                other: !0
            }],
            mobile_os_families: ["Windows Phone 6.5", "Windows CE", "Symbian OS"],
            device_parsers: [{
                regex: "HTC ([A-Z][a-z0-9]+) Build",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC_Touch_([A-Za-z0-9]+)",
                device_replacement: "HTC Touch ($1)",
                manufacturer: "HTC"
            }, {
                regex: "USCCHTC(\\d+)",
                device_replacement: "HTC $1 (US Cellular)",
                manufacturer: "HTC"
            }, {
                regex: "Sprint APA(9292)",
                device_replacement: "HTC $1 (Sprint)",
                manufacturer: "HTC"
            }, {
                regex: "HTC ([A-Za-z0-9]+ [A-Z])",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC-([A-Za-z0-9]+)",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC_([A-Za-z0-9]+)",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC ([A-Za-z0-9]+)",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {regex: "(ADR[A-Za-z0-9]+)", device_replacement: "HTC $1", manufacturer: "HTC"}, {
                regex: "(HTC)",
                manufacturer: "HTC"
            }, {
                regex: "SonyEricsson([A-Za-z0-9]+)/",
                device_replacement: "Ericsson $1",
                other: !0,
                manufacturer: "Sony"
            }, {regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"}, {regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"}, {regex: "Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"}, {regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"}, {regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"}, {
                regex: "NokiaN([0-9]+)",
                device_replacement: "Nokia N$1",
                manufacturer: "Nokia"
            }, {
                regex: "Nokia([A-Za-z0-9\\v-]+)",
                device_replacement: "Nokia $1",
                manufacturer: "Nokia"
            }, {
                regex: "NOKIA ([A-Za-z0-9\\-]+)",
                device_replacement: "Nokia $1",
                manufacturer: "Nokia"
            }, {
                regex: "Nokia ([A-Za-z0-9\\-]+)",
                device_replacement: "Nokia $1",
                manufacturer: "Nokia"
            }, {
                regex: "Lumia ([A-Za-z0-9\\-]+)",
                device_replacement: "Lumia $1",
                manufacturer: "Nokia"
            }, {
                regex: "Symbian",
                device_replacement: "Nokia",
                manufacturer: "Nokia"
            }, {
                regex: "(PlayBook).+RIM Tablet OS",
                device_replacement: "Blackberry Playbook",
                tablet: !0,
                manufacturer: "RIM"
            }, {regex: "(Black[Bb]erry [0-9]+);", manufacturer: "RIM"}, {
                regex: "Black[Bb]erry([0-9]+)",
                device_replacement: "BlackBerry $1",
                manufacturer: "RIM"
            }, {
                regex: "(Pre)/(\\d+)\\.(\\d+)",
                device_replacement: "Palm Pre",
                manufacturer: "Palm"
            }, {
                regex: "(Pixi)/(\\d+)\\.(\\d+)",
                device_replacement: "Palm Pixi",
                manufacturer: "Palm"
            }, {
                regex: "(Touchpad)/(\\d+)\\.(\\d+)",
                device_replacement: "HP Touchpad",
                manufacturer: "HP"
            }, {
                regex: "HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",
                device_replacement: "HP iPAQ $1",
                manufacturer: "HP"
            }, {
                regex: "Palm([A-Za-z0-9]+)",
                device_replacement: "Palm $1",
                manufacturer: "Palm"
            }, {
                regex: "Treo([A-Za-z0-9]+)",
                device_replacement: "Palm Treo $1",
                manufacturer: "Palm"
            }, {
                regex: "webOS.*(P160UNA)/(\\d+).(\\d+)",
                device_replacement: "HP Veer",
                manufacturer: "HP"
            }, {regex: "(Kindle Fire)", manufacturer: "Amazon"}, {
                regex: "(Kindle)",
                manufacturer: "Amazon"
            }, {
                regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
                device_replacement: "Kindle Fire",
                tablet: !0,
                manufacturer: "Amazon"
            }, {regex: "(iPad) Simulator;", manufacturer: "Apple"}, {
                regex: "(iPad);",
                manufacturer: "Apple"
            }, {regex: "(iPod);", manufacturer: "Apple"}, {
                regex: "(iPhone) Simulator;",
                manufacturer: "Apple"
            }, {regex: "(iPhone);", manufacturer: "Apple"}, {
                regex: "Nexus\\ ([A-Za-z0-9\\-]+)",
                device_replacement: "Nexus $1"
            }, {
                regex: "acer_([A-Za-z0-9]+)_",
                device_replacement: "Acer $1",
                manufacturer: "Acer"
            }, {
                regex: "acer_([A-Za-z0-9]+)_",
                device_replacement: "Acer $1",
                manufacturer: "Acer"
            }, {
                regex: "Amoi\\-([A-Za-z0-9]+)",
                device_replacement: "Amoi $1",
                other: !0,
                manufacturer: "Amoi"
            }, {
                regex: "AMOI\\-([A-Za-z0-9]+)",
                device_replacement: "Amoi $1",
                other: !0,
                manufacturer: "Amoi"
            }, {
                regex: "Asus\\-([A-Za-z0-9]+)",
                device_replacement: "Asus $1",
                manufacturer: "Asus"
            }, {
                regex: "ASUS\\-([A-Za-z0-9]+)",
                device_replacement: "Asus $1",
                manufacturer: "Asus"
            }, {
                regex: "BIRD\\-([A-Za-z0-9]+)",
                device_replacement: "Bird $1",
                other: !0
            }, {
                regex: "BIRD\\.([A-Za-z0-9]+)",
                device_replacement: "Bird $1",
                other: !0
            }, {regex: "BIRD ([A-Za-z0-9]+)", device_replacement: "Bird $1", other: !0}, {
                regex: "Dell ([A-Za-z0-9]+)",
                device_replacement: "Dell $1",
                manufacturer: "Dell"
            }, {
                regex: "DoCoMo/2\\.0 ([A-Za-z0-9]+)",
                device_replacement: "DoCoMo $1",
                other: !0
            }, {
                regex: "([A-Za-z0-9]+)\\_W\\;FOMA",
                device_replacement: "DoCoMo $1",
                other: !0
            }, {
                regex: "([A-Za-z0-9]+)\\;FOMA",
                device_replacement: "DoCoMo $1",
                other: !0
            }, {
                regex: "vodafone([A-Za-z0-9]+)",
                device_replacement: "Huawei Vodafone $1",
                other: !0
            }, {
                regex: "i\\-mate ([A-Za-z0-9]+)",
                device_replacement: "i-mate $1",
                other: !0
            }, {
                regex: "Kyocera\\-([A-Za-z0-9]+)",
                device_replacement: "Kyocera $1",
                other: !0
            }, {
                regex: "KWC\\-([A-Za-z0-9]+)",
                device_replacement: "Kyocera $1",
                other: !0
            }, {
                regex: "Lenovo\\-([A-Za-z0-9]+)",
                device_replacement: "Lenovo $1",
                manufacturer: "Lenovo"
            }, {
                regex: "Lenovo\\_([A-Za-z0-9]+)",
                device_replacement: "Lenovo $1",
                manufacturer: "Levovo"
            }, {
                regex: "LG/([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LG-LG([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LGE-LG([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LGE VX([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LG ([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LGE LG\\-AX([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LG\\-([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LGE\\-([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LG([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "(KIN)\\.One (\\d+)\\.(\\d+)",
                device_replacement: "Microsoft $1"
            }, {
                regex: "(KIN)\\.Two (\\d+)\\.(\\d+)",
                device_replacement: "Microsoft $1"
            }, {regex: "(Motorola)\\-([A-Za-z0-9]+)", manufacturer: "Motorola"}, {
                regex: "MOTO\\-([A-Za-z0-9]+)",
                device_replacement: "Motorola $1",
                manufacturer: "Motorola"
            }, {
                regex: "MOT\\-([A-Za-z0-9]+)",
                device_replacement: "Motorola $1",
                manufacturer: "Motorola"
            }, {
                regex: "Philips([A-Za-z0-9]+)",
                device_replacement: "Philips $1",
                manufacturer: "Philips"
            }, {
                regex: "Philips ([A-Za-z0-9]+)",
                device_replacement: "Philips $1",
                manufacturer: "Philips"
            }, {
                regex: "SAMSUNG-([A-Za-z0-9\\-]+)",
                device_replacement: "Samsung $1",
                manufacturer: "Samsung"
            }, {
                regex: "SAMSUNG\\; ([A-Za-z0-9\\-]+)",
                device_replacement: "Samsung $1",
                manufacturer: "Samsung"
            }, {
                regex: "Softbank/1\\.0/([A-Za-z0-9]+)",
                device_replacement: "Softbank $1",
                other: !0
            }, {
                regex: "Softbank/2\\.0/([A-Za-z0-9]+)",
                device_replacement: "Softbank $1",
                other: !0
            }, {
                regex: "(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",
                device_replacement: "Generic Smartphone"
            }, {
                regex: "^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",
                device_replacement: "Generic Feature Phone"
            }, {
                regex: "^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",
                device_replacement: "Generic Feature Phone"
            }, {
                regex: "^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",
                device_replacement: "Generic Feature Phone"
            }, {
                regex: "^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)",
                device_replacement: "Generic Feature Phone"
            }, {
                regex: "(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)",
                device_replacement: "Spider"
            }],
            mobile_browser_families: ["Firefox Mobile", "Opera Mobile", "Opera Mini", "Mobile Safari", "webOS", "IE Mobile", "Playstation Portable", "Nokia", "Blackberry", "Palm", "Silk", "Android", "Maemo", "Obigo", "Netfront", "AvantGo", "Teleca", "SEMC-Browser", "Bolt", "Iris", "UP.Browser", "Symphony", "Minimo", "Bunjaloo", "Jasmine", "Dolfin", "Polaris", "BREW", "Chrome Mobile", "Chrome Mobile iOS", "UC Browser", "Tizen Browser"]
        }, c.families = (t = {}, c.types.map(function (e) {
            t[e] = []
        }), t);
        var e = Array.prototype, a = (Object.prototype, Function.prototype, e.forEach);
        e.indexOf;
        var d = function (e, t) {
            for (var i = {}, n = 0; t.length > n && !(i = t[n](e)); n++) ;
            return i
        }, p = forEach = function (e, t, i) {
            if (null != e) if (a && e.forEach === a) e.forEach(t, i); else if (e.length === +e.length) for (var n = 0, r = e.length; n < r; n++) t.call(i, e[n], n, e); else for (var o in e) _.has(e, o) && t.call(i, e[o], o, e)
        }, u = function (e) {
            return !(!e || void 0 === e || null == e)
        }, f = function (e) {
            var t = "";
            return u(e = e || {}) && u(e.major) && (t += e.major, u(e.minor) && (t += "." + e.minor, u(e.patch) && (t += "." + e.patch))), t
        }, m = function (e) {
            var t = f(e = e || {});
            return t && (t = " " + t), e && u(e.family) ? e.family + t : ""
        };
        return c.parse = function (e) {
            var t = function (e) {
                return c.regexes[e + "_parsers"].map(function (n) {
                    var r = RegExp(n.regex), o = n[("browser" === e ? "family" : e) + "_replacement"],
                        a = n.major_version_replacement;
                    return function (e) {
                        var t = e.match(r);
                        if (!t) return null;
                        var i = {};
                        return i.family = (o ? o.replace("$1", t[1]) : t[1]) || "other", i.major = parseInt(a || t[2]) || null, i.minor = t[3] ? parseInt(t[3]) : null, i.patch = t[4] ? parseInt(t[4]) : null, i.tablet = n.tablet, i.man = n.manufacturer || null, i
                    }
                })
            }, i = t("browser"), n = t("os"), r = t("device"), o = new function () {
            };
            o.source = e, o.browser = d(e, i), u(o.browser) ? (o.browser.name = m(o.browser), o.browser.version = f(o.browser)) : o.browser = {}, o.os = d(e, n), u(o.os) ? (o.os.name = m(o.os), o.os.version = f(o.os)) : o.os = {}, o.device = d(e, r), u(o.device) ? (o.device.name = m(o.device), o.device.version = f(o.device)) : o.device = {
                tablet: !1,
                family: "Other"
            };
            var a, s, l = {};
            return c.regexes.mobile_browser_families.map(function (e) {
                l[e] = !0
            }), c.regexes.mobile_os_families.map(function (e) {
                l[e] = !0
            }), o.device.type = "Spider" === o.browser.family ? "Spider" : o.browser.tablet || o.os.tablet || o.device.tablet ? "Tablet" : l.hasOwnProperty(o.browser.family) ? "Mobile" : "Desktop", o.device.manufacturer = o.browser.man || o.os.man || o.device.man || null, a = [o.browser, o.os, o.device], s = ["tablet", "man"], p(a, function (t) {
                p(s, function (e) {
                    delete t[e]
                })
            }), o
        }, c
    }();
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = t), exports.detect = t) : e.detect = t, "function" == typeof define && define.amd && define(function () {
        return t
    })
}(window), function (i) {
    function n(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {i: e, l: !1, exports: {}};
        return i[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports
    }

    var r = {};
    n.m = i, n.c = r, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: i})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function (e, t, i) {
    "use strict";
    var n, r, o;
    "function" == typeof Symbol && Symbol.iterator, r = [i(2)], void 0 !== (o = "function" == typeof (n = function (e) {
        return e
    }) ? n.apply(t, r) : n) && (e.exports = o)
}, function (e, t, i) {
    "use strict";
    var n, r, o, ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r = [i(0), i(10), i(11)], void 0 !== (o = "function" == typeof (n = function (X, Q, Y, J) {
        function ee(e, t, i) {
            if (!(this instanceof ee)) return new ee(e, t, i);
            this.el = J, this.events = {}, this.maskset = J, !(this.refreshValue = !1) !== i && (X.isPlainObject(e) ? t = e : (t = t || {}).alias = e, this.opts = X.extend(!0, {}, this.defaults, t), this.noMasksCache = t && t.definitions !== J, this.userOptions = t || {}, this.isRTL = this.opts.numericInput, d(this.opts.alias, t, this.opts))
        }

        function d(e, t, i) {
            var n = ee.prototype.aliases[e];
            return n ? (n.alias && d(n.alias, J, i), X.extend(!0, i, n), X.extend(!0, i, t), !0) : (null === i.mask && (i.mask = e), !1)
        }

        function o(i, s) {
            function e(e, t, i) {
                var n = !1;
                if (null !== e && "" !== e || ((n = null !== i.regex) ? e = (e = i.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (n = !0, e = ".*")), 1 === e.length && !1 === i.greedy && 0 !== i.repeat && (i.placeholder = ""), 0 < i.repeat || "*" === i.repeat || "+" === i.repeat) {
                    var r = "*" === i.repeat ? 0 : "+" === i.repeat ? 1 : i.repeat;
                    e = i.groupmarker.start + e + i.groupmarker.end + i.quantifiermarker.start + r + "," + i.repeat + i.quantifiermarker.end
                }
                var o, a = n ? "regex_" + i.regex : i.numericInput ? e.split("").reverse().join("") : e;
                return ee.prototype.masksCache[a] === J || !0 === s ? (o = {
                    mask: e,
                    maskToken: ee.prototype.analyseMask(e, n, i),
                    validPositions: {},
                    _buffer: J,
                    buffer: J,
                    tests: {},
                    metadata: t,
                    maskLength: J
                }, !0 !== s && (ee.prototype.masksCache[a] = o, o = X.extend(!0, {}, ee.prototype.masksCache[a]))) : o = X.extend(!0, {}, ee.prototype.masksCache[a]), o
            }

            if (X.isFunction(i.mask) && (i.mask = i.mask(i)), X.isArray(i.mask)) {
                if (1 < i.mask.length) {
                    i.keepStatic = null === i.keepStatic || i.keepStatic;
                    var n = i.groupmarker.start;
                    return X.each(i.numericInput ? i.mask.reverse() : i.mask, function (e, t) {
                        1 < n.length && (n += i.groupmarker.end + i.alternatormarker + i.groupmarker.start), t.mask === J || X.isFunction(t.mask) ? n += t : n += t.mask
                    }), e(n += i.groupmarker.end, i.mask, i)
                }
                i.mask = i.mask.pop()
            }
            return i.mask && i.mask.mask !== J && !X.isFunction(i.mask.mask) ? e(i.mask.mask, i.mask, i) : e(i.mask, i.mask, i)
        }

        function te(e, t, H) {
            function r(e, t, i) {
                t = t || 0;
                for (var n, r, o, a = [], s = 0, l = A(); !0 === e && G().validPositions[s] ? (r = (o = G().validPositions[s]).match, n = o.locator.slice(), a.push(!0 === i ? o.input : !1 === i ? r.nativeDef : $(s, r))) : (r = (o = b(s, n, s - 1)).match, n = o.locator.slice(), (!1 === H.jitMasking || s < l || "number" == typeof H.jitMasking && isFinite(H.jitMasking) && H.jitMasking > s) && a.push(!1 === i ? r.nativeDef : $(s, r))), s++, (R === J || s < R) && (null !== r.fn || "" !== r.def) || s < t;) ;
                return "" === a[a.length - 1] && a.pop(), G().maskLength = s + 1, a
            }

            function G() {
                return t
            }

            function S(e) {
                var t = G();
                t.buffer = J, !0 !== e && (t.validPositions = {}, t.p = 0)
            }

            function A(e, t, i) {
                var n = -1, r = -1, o = i || G().validPositions;
                for (var a in e === J && (e = -1), o) {
                    var s = parseInt(a);
                    o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), e <= s && (r = s))
                }
                return -1 !== n && 1 < e - n || r < e ? n : r
            }

            function k(e, t, i, n) {
                var r, o = e, a = X.extend(!0, {}, G().validPositions), s = !1;
                for (G().p = e, r = t - 1; o <= r; r--) G().validPositions[r] !== J && (!0 !== i && (!G().validPositions[r].match.optionality && function (e) {
                    var t = G().validPositions[e];
                    if (t !== J && null === t.match.fn) {
                        var i = G().validPositions[e - 1], n = G().validPositions[e + 1];
                        return i !== J && n !== J
                    }
                    return !1
                }(r) || !1 === H.canClearPosition(G(), r, A(), n, H)) || delete G().validPositions[r]);
                for (S(!0), r = o + 1; r <= A();) {
                    for (; G().validPositions[o] !== J;) o++;
                    if (r < o && (r = o + 1), G().validPositions[r] === J && O(r)) r++; else {
                        var l = b(r);
                        !1 === s && a[o] && a[o].match.def === l.match.def ? (G().validPositions[o] = X.extend(!0, {}, a[o]), G().validPositions[o].input = l.input, delete G().validPositions[r], r++) : x(o, l.match.def) ? !1 !== _(o, l.input || $(r), !0) && (delete G().validPositions[r], r++, s = !0) : O(r) || (r++, o--), o++
                    }
                }
                S(!0)
            }

            function f(e, t) {
                for (var i, n = e, r = A(), o = G().validPositions[r] || C(0)[0], a = o.alternation !== J ? o.locator[o.alternation].toString().split(",") : [], s = 0; s < n.length && (!((i = n[s]).match && (H.greedy && !0 !== i.match.optionalQuantifier || (!1 === i.match.optionality || !1 === i.match.newBlockMarker) && !0 !== i.match.optionalQuantifier) && (o.alternation === J || o.alternation !== i.alternation || i.locator[o.alternation] !== J && m(i.locator[o.alternation].toString().split(","), a))) || !0 === t && (null !== i.match.fn || /[0-9a-bA-Z]/.test(i.match.def))); s++) ;
                return i
            }

            function b(e, t, i) {
                return G().validPositions[e] || f(C(e, t ? t.slice() : t, i))
            }

            function v(e) {
                return G().validPositions[e] ? G().validPositions[e] : C(e)[0]
            }

            function x(e, t) {
                for (var i = !1, n = C(e), r = 0; r < n.length; r++) if (n[r].match && n[r].match.def === t) {
                    i = !0;
                    break
                }
                return i
            }

            function C(R, e, t) {
                function I($, N, e, t) {
                    function z(e, i, t) {
                        function o(i, n) {
                            var r = 0 === X.inArray(i, n.matches);
                            return r || X.each(n.matches, function (e, t) {
                                if (!0 === t.isQuantifier && (r = o(i, n.matches[e - 1]))) return !1
                            }), r
                        }

                        function l(e, r, o) {
                            var a, s;
                            if (G().validPositions[e - 1] && o && G().tests[e]) for (var t = G().validPositions[e - 1].locator, i = G().tests[e][0].locator, n = 0; n < o; n++) if (t[n] !== i[n]) return t.slice(o + 1);
                            return (G().tests[e] || G().validPositions[e]) && X.each(G().tests[e] || [G().validPositions[e]], function (e, t) {
                                var i = o !== J ? o : t.alternation,
                                    n = t.locator[i] !== J ? t.locator[i].toString().indexOf(r) : -1;
                                (s === J || n < s) && -1 !== n && (a = t, s = n)
                            }), a ? a.locator.slice((o !== J ? o : a.alternation) + 1) : o !== J ? l(e, r) : J
                        }

                        if (1e4 < L) throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + G().mask;
                        if (L === R && e.matches === J) return B.push({match: e, locator: i.reverse(), cd: j}), !0;
                        if (e.matches !== J) {
                            if (e.isGroup && t !== e) {
                                if (e = z($.matches[X.inArray(e, $.matches) + 1], i)) return !0
                            } else if (e.isOptional) {
                                var n = e;
                                if (e = I(e, N, i, t)) {
                                    if (!o(D = B[B.length - 1].match, n)) return !0;
                                    F = !0, L = R
                                }
                            } else if (e.isAlternator) {
                                var r, a = e, s = [], c = B.slice(), d = i.length, p = 0 < N.length ? N.shift() : -1;
                                if (-1 === p || "string" == typeof p) {
                                    var u, f = L, m = N.slice(), h = [];
                                    if ("string" == typeof p) h = p.split(","); else for (u = 0; u < a.matches.length; u++) h.push(u);
                                    for (var g = 0; g < h.length; g++) {
                                        if (u = parseInt(h[g]), B = [], N = l(L, u, d) || m.slice(), !0 !== (e = z(a.matches[u] || $.matches[u], [u].concat(i), t) || e) && e !== J && h[h.length - 1] < a.matches.length) {
                                            var v = X.inArray(e, $.matches) + 1;
                                            $.matches.length > v && (e = z($.matches[v], [v].concat(i.slice(1, i.length)), t)) && (h.push(v.toString()), X.each(B, function (e, t) {
                                                t.alternation = i.length - 1
                                            }))
                                        }
                                        r = B.slice(), L = f, B = [];
                                        for (var y = 0; y < r.length; y++) {
                                            var k = r[y], b = !1;
                                            k.alternation = k.alternation || d;
                                            for (var x = 0; x < s.length; x++) {
                                                var w = s[x];
                                                if ("string" != typeof p || -1 !== X.inArray(k.locator[k.alternation].toString(), h)) {
                                                    if (M = w, (E = k).match.nativeDef === M.match.nativeDef || E.match.def === M.match.nativeDef || E.match.nativeDef === M.match.def) {
                                                        b = !0, k.alternation === w.alternation && -1 === w.locator[w.alternation].toString().indexOf(k.locator[k.alternation]) && (w.locator[w.alternation] = w.locator[w.alternation] + "," + k.locator[k.alternation], w.alternation = k.alternation), k.match.nativeDef === w.match.def && (k.locator[k.alternation] = w.locator[w.alternation], s.splice(s.indexOf(w), 1, k));
                                                        break
                                                    }
                                                    if (k.match.def === w.match.def) {
                                                        b = !1;
                                                        break
                                                    }
                                                    if (O = w, null === (_ = k).match.fn && null !== O.match.fn && O.match.fn.test(_.match.def, G(), R, !1, H, !1) || (P = w, null !== (T = k).match.fn && null !== P.match.fn && P.match.fn.test(T.match.def.replace(/[\[\]]/g, ""), G(), R, !1, H, !1))) {
                                                        k.alternation === w.alternation && -1 === k.locator[k.alternation].toString().indexOf(w.locator[w.alternation].toString().split("")[0]) && (k.na = k.na || k.locator[k.alternation].toString(), -1 === k.na.indexOf(k.locator[k.alternation].toString().split("")[0]) && (k.na = k.na + "," + k.locator[w.alternation].toString().split("")[0]), b = !0, k.locator[k.alternation] = w.locator[w.alternation].toString().split("")[0] + "," + k.locator[k.alternation], s.splice(s.indexOf(w), 0, k));
                                                        break
                                                    }
                                                }
                                            }
                                            b || s.push(k)
                                        }
                                    }
                                    "string" == typeof p && (s = X.map(s, function (e, t) {
                                        if (isFinite(t)) {
                                            var i = e.alternation, n = e.locator[i].toString().split(",");
                                            e.locator[i] = J, e.alternation = J;
                                            for (var r = 0; r < n.length; r++) -1 !== X.inArray(n[r], h) && (e.locator[i] !== J ? (e.locator[i] += ",", e.locator[i] += n[r]) : e.locator[i] = parseInt(n[r]), e.alternation = i);
                                            if (e.locator[i] !== J) return e
                                        }
                                    })), B = c.concat(s), L = R, F = 0 < B.length, e = 0 < s.length, N = m.slice()
                                } else e = z(a.matches[p] || $.matches[p], [p].concat(i), t);
                                if (e) return !0
                            } else if (e.isQuantifier && t !== $.matches[X.inArray(e, $.matches) - 1]) for (var S = e, A = 0 < N.length ? N.shift() : 0; A < (isNaN(S.quantifier.max) ? A + 1 : S.quantifier.max) && L <= R; A++) {
                                var C = $.matches[X.inArray(S, $.matches) - 1];
                                if (e = z(C, [A].concat(i), C)) {
                                    if ((D = B[B.length - 1].match).optionalQuantifier = A > S.quantifier.min - 1, o(D, C)) {
                                        if (A > S.quantifier.min - 1) {
                                            F = !0, L = R;
                                            break
                                        }
                                        return !0
                                    }
                                    return !0
                                }
                            } else if (e = I(e, N, i, t)) return !0
                        } else L++;
                        var T, P, _, O, E, M
                    }

                    for (var i = 0 < N.length ? N.shift() : 0; i < $.matches.length; i++) if (!0 !== $.matches[i].isQuantifier) {
                        var n = z($.matches[i], [i].concat(e), t);
                        if (n && L === R) return n;
                        if (R < L) break
                    }
                }

                function i(e) {
                    if (H.keepStatic && 0 < R && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && !0 !== e[0].match.optionality && !0 !== e[0].match.optionalQuantifier && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def)) {
                        if (G().validPositions[R - 1] === J) return [f(e)];
                        if (G().validPositions[R - 1].alternation === e[0].alternation) return [f(e)];
                        if (G().validPositions[R - 1]) return [f(e)]
                    }
                    return e
                }

                var D, n, r, o = G().maskToken, L = e ? t : 0, a = e ? e.slice() : [0], B = [], F = !1,
                    j = e ? e.join("") : "";
                if (-1 < R) {
                    if (e === J) {
                        for (var s, l = R - 1; (s = G().validPositions[l] || G().tests[l]) === J && -1 < l;) l--;
                        s !== J && -1 < l && (n = s, r = [], X.isArray(n) || (n = [n]), 0 < n.length && (n[0].alternation === J ? 0 === (r = f(n.slice()).locator.slice()).length && (r = n[0].locator.slice()) : X.each(n, function (e, t) {
                            if ("" !== t.def) if (0 === r.length) r = t.locator.slice(); else for (var i = 0; i < r.length; i++) t.locator[i] && -1 === r[i].toString().indexOf(t.locator[i]) && (r[i] += "," + t.locator[i])
                        })), j = (a = r).join(""), L = l)
                    }
                    if (G().tests[R] && G().tests[R][0].cd === j) return i(G().tests[R]);
                    for (var c = a.shift(); c < o.length && !(I(o[c], a, [c]) && L === R || R < L); c++) ;
                }
                return (0 === B.length || F) && B.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: !0,
                        casing: null,
                        def: "",
                        placeholder: ""
                    }, locator: [], cd: j
                }), e !== J && G().tests[R] ? i(X.extend(!0, [], B)) : (G().tests[R] = X.extend(!0, [], B), i(G().tests[R]))
            }

            function y() {
                return G()._buffer === J && (G()._buffer = r(!1, 1), G().buffer === J && (G().buffer = G()._buffer.slice())), G()._buffer
            }

            function T(e) {
                return G().buffer !== J && !0 !== e || (G().buffer = r(!0, A(), !0)), G().buffer
            }

            function P(e, t, i) {
                var n, r;
                if (!0 === e) S(), e = 0, t = i.length; else for (n = e; n < t; n++) delete G().validPositions[n];
                for (n = r = e; n < t; n++) if (S(!0), i[n] !== H.skipOptionalPartCharacter) {
                    var o = _(r, i[n], !0, !0);
                    !1 !== o && (S(!0), r = o.caret !== J ? o.caret : o.pos + 1)
                }
            }

            function m(e, t, i) {
                for (var n, r = H.greedy ? t : t.slice(0, 1), o = !1, a = i !== J ? i.split(",") : [], s = 0; s < a.length; s++) -1 !== (n = e.indexOf(a[s])) && e.splice(n, 1);
                for (var l = 0; l < e.length; l++) if (-1 !== X.inArray(e[l], r)) {
                    o = !0;
                    break
                }
                return o
            }

            function _(h, e, t, w, i, n) {
                function g(e) {
                    var t = L ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1;
                    return t && 0 === e.begin && e.end === G().maskLength ? "full" : t
                }

                function o(p, u, f) {
                    var m = !1;
                    return X.each(C(p), function (e, t) {
                        for (var i = t.match, n = u ? 1 : 0, r = "", o = i.cardinality; n < o; o--) r += (a = p - (o - 1), G().validPositions[a] === J ? $(a) : G().validPositions[a].input);
                        var a;
                        if (u && (r += u), T(!0), !1 !== (m = null != i.fn ? i.fn.test(r, G(), p, f, H, g(h)) : (u === i.def || u === H.skipOptionalPartCharacter) && "" !== i.def && {
                            c: $(p, i, !0) || i.def,
                            pos: p
                        })) {
                            var s = m.c !== J ? m.c : u;
                            s = s === H.skipOptionalPartCharacter && null === i.fn ? $(p, i, !0) || i.def : s;
                            var l = p, c = T();
                            if (m.remove !== J && (X.isArray(m.remove) || (m.remove = [m.remove]), X.each(m.remove.sort(function (e, t) {
                                return t - e
                            }), function (e, t) {
                                k(t, t + 1, !0)
                            })), m.insert !== J && (X.isArray(m.insert) || (m.insert = [m.insert]), X.each(m.insert.sort(function (e, t) {
                                return e - t
                            }), function (e, t) {
                                _(t.pos, t.c, !0, w)
                            })), m.refreshFromBuffer) {
                                var d = m.refreshFromBuffer;
                                if (P(!0 === d ? d : d.start, d.end, c), m.pos === J && m.c === J) return m.pos = A(), !1;
                                if ((l = m.pos !== J ? m.pos : p) !== p) return m = X.extend(m, _(l, s, !0, w)), !1
                            } else if (!0 !== m && m.pos !== J && m.pos !== p && (l = m.pos, P(p, l, T().slice()), l !== p)) return m = X.extend(m, _(l, s, !0)), !1;
                            return (!0 === m || m.pos !== J || m.c !== J) && (0 < e && S(!0), v(l, X.extend({}, t, {
                                input: function (e, t, i) {
                                    switch (H.casing || t.casing) {
                                        case"upper":
                                            e = e.toUpperCase();
                                            break;
                                        case"lower":
                                            e = e.toLowerCase();
                                            break;
                                        case"title":
                                            var n = G().validPositions[i - 1];
                                            e = 0 === i || n && n.input === String.fromCharCode(ee.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                            break;
                                        default:
                                            if (X.isFunction(H.casing)) {
                                                var r = Array.prototype.slice.call(arguments);
                                                r.push(G().validPositions), e = H.casing.apply(this, r)
                                            }
                                    }
                                    return e
                                }(s, i, l)
                            }), w, g(h)) || (m = !1), !1)
                        }
                    }), m
                }

                function v(e, t, i, n) {
                    if (n || H.insertMode && G().validPositions[e] !== J && i === J) {
                        var r, o = X.extend(!0, {}, G().validPositions), a = A(J, !0);
                        for (r = e; r <= a; r++) delete G().validPositions[r];
                        G().validPositions[e] = X.extend(!0, {}, t);
                        var s, l = !0, c = G().validPositions, d = !1, p = G().maskLength;
                        for (r = s = e; r <= a; r++) {
                            var u = o[r];
                            if (u !== J) for (var f = s; f < G().maskLength && (null === u.match.fn && c[r] && (!0 === c[r].match.optionalQuantifier || !0 === c[r].match.optionality) || null != u.match.fn);) {
                                if (f++, !1 === d && o[f] && o[f].match.def === u.match.def) G().validPositions[f] = X.extend(!0, {}, o[f]), G().validPositions[f].input = u.input, y(f), s = f, l = !0; else if (x(f, u.match.def)) {
                                    var m = _(f, u.input, !0, !0);
                                    l = !1 !== m, s = m.caret || m.insert ? A() : f, d = !0
                                } else if (!(l = !0 === u.generatedInput) && f >= G().maskLength - 1) break;
                                if (G().maskLength < p && (G().maskLength = p), l) break
                            }
                            if (!l) break
                        }
                        if (!l) return G().validPositions = X.extend(!0, {}, o), S(!0), !1
                    } else G().validPositions[e] = X.extend(!0, {}, t);
                    return S(!0), !0
                }

                function y(e) {
                    for (var t = e - 1; -1 < t && !G().validPositions[t]; t--) ;
                    var i, n;
                    for (t++; t < e; t++) G().validPositions[t] === J && (!1 === H.jitMasking || H.jitMasking > t) && ("" === (n = C(t, b(t - 1).locator, t - 1).slice())[n.length - 1].match.def && n.pop(), (i = f(n)) && (i.match.def === H.radixPointDefinitionSymbol || !O(t, !0) || X.inArray(H.radixPoint, T()) < t && i.match.fn && i.match.fn.test($(t), G(), t, !1, H)) && !1 !== (a = o(t, $(t, i.match, !0) || (null == i.match.fn ? i.match.def : "" !== $(t) ? $(t) : T()[t]), !0)) && (G().validPositions[a.pos || t].generatedInput = !0))
                }

                t = !0 === t;
                var r = h;
                h.begin !== J && (r = L && !g(h) ? h.end : h.begin);
                var a = !0, s = X.extend(!0, {}, G().validPositions);
                if (X.isFunction(H.preValidation) && !t && !0 !== w && !0 !== n && (a = H.preValidation(T(), r, e, g(h), H)), !0 === a) {
                    if (y(r), g(h) && (N(J, ee.keyCode.DELETE, h, !0, !0), r = G().p), r < G().maskLength && (R === J || r < R) && (a = o(r, e, t), (!t || !0 === w) && !1 === a && !0 !== n)) {
                        var l = G().validPositions[r];
                        if (!l || null !== l.match.fn || l.match.def !== e && e !== H.skipOptionalPartCharacter) {
                            if ((H.insertMode || G().validPositions[E(r)] === J) && !O(r, !0)) for (var c = r + 1, d = E(r); c <= d; c++) if (!1 !== (a = o(c, e, t))) {
                                !function (e, t) {
                                    var i = G().validPositions[t];
                                    if (i) for (var a = i.locator, s = a.length, n = e; n < t; n++) if (G().validPositions[n] === J && !O(n, !0)) {
                                        var r = C(n).slice(), l = f(r, !0), c = -1;
                                        "" === r[r.length - 1].match.def && r.pop(), X.each(r, function (e, t) {
                                            for (var i = 0; i < s; i++) {
                                                if (t.locator[i] === J || !m(t.locator[i].toString().split(","), a[i].toString().split(","), t.na)) {
                                                    var n = a[i], r = l.locator[i], o = t.locator[i];
                                                    n - r > Math.abs(n - o) && (l = t);
                                                    break
                                                }
                                                c < i && (c = i, l = t)
                                            }
                                        }), (l = X.extend({}, l, {input: $(n, l.match, !0) || l.match.def})).generatedInput = !0, v(n, l, !0), G().validPositions[t] = J, o(t, i.input, !0)
                                    }
                                }(r, a.pos !== J ? a.pos : c), r = c;
                                break
                            }
                        } else a = {caret: E(r)}
                    }
                    !1 === a && H.keepStatic && !t && !0 !== i && (a = function (d, p, u) {
                        var e, f, t, i, m, h, g, v, y = X.extend(!0, {}, G().validPositions), k = !1, n = A();
                        for (i = G().validPositions[n]; 0 <= n; n--) if ((t = G().validPositions[n]) && t.alternation !== J) {
                            if (e = n, f = G().validPositions[e].alternation, i.locator[t.alternation] !== t.locator[t.alternation]) break;
                            i = t
                        }
                        if (f !== J) {
                            v = parseInt(e);
                            var b = i.locator[i.alternation || f] !== J ? i.locator[i.alternation || f] : g[0];
                            0 < b.length && (b = b.split(",")[0]);
                            var x = G().validPositions[v], r = G().validPositions[v - 1];
                            X.each(C(v, r ? r.locator : J, v - 1), function (e, t) {
                                g = t.locator[f] ? t.locator[f].toString().split(",") : [];
                                for (var i = 0; i < g.length; i++) {
                                    var n = [], r = 0, o = 0, a = !1;
                                    if (b < g[i] && (t.na === J || -1 === X.inArray(g[i], t.na.split(",")) || -1 === X.inArray(b.toString(), g))) {
                                        G().validPositions[v] = X.extend(!0, {}, t);
                                        var s = G().validPositions[v].locator;
                                        for (G().validPositions[v].locator[f] = parseInt(g[i]), null == t.match.fn ? (x.input !== t.match.def && (a = !0) !== x.generatedInput && n.push(x.input), o++, G().validPositions[v].generatedInput = !/[0-9a-bA-Z]/.test(t.match.def), G().validPositions[v].input = t.match.def) : G().validPositions[v].input = x.input, m = v + 1; m < A(J, !0) + 1; m++) (h = G().validPositions[m]) && !0 !== h.generatedInput && /[0-9a-bA-Z]/.test(h.input) ? n.push(h.input) : m < d && r++, delete G().validPositions[m];
                                        for (a && n[0] === t.match.def && n.shift(), S(!0), k = !0; 0 < n.length;) {
                                            var l = n.shift();
                                            if (l !== H.skipOptionalPartCharacter && !(k = _(A(J, !0) + 1, l, !1, w, !0))) break
                                        }
                                        if (k) {
                                            G().validPositions[v].locator = s;
                                            var c = A(d) + 1;
                                            for (m = v + 1; m < A() + 1; m++) ((h = G().validPositions[m]) === J || null == h.match.fn) && m < d + (o - r) && o++;
                                            k = _((d += o - r) > c ? c : d, p, u, w, !0)
                                        }
                                        if (k) return !1;
                                        S(), G().validPositions = X.extend(!0, {}, y)
                                    }
                                }
                            })
                        }
                        return k
                    }(r, e, t)), !0 === a && (a = {pos: r})
                }
                if (X.isFunction(H.postValidation) && !1 !== a && !t && !0 !== w && !0 !== n) {
                    var p = H.postValidation(T(!0), a, H);
                    if (p.refreshFromBuffer && p.buffer) {
                        var u = p.refreshFromBuffer;
                        P(!0 === u ? u : u.start, u.end, p.buffer)
                    }
                    a = !0 === p ? a : p
                }
                return a && a.pos === J && (a.pos = r), !1 !== a && !0 !== n || (S(!0), G().validPositions = X.extend(!0, {}, s)), a
            }

            function O(e, t) {
                var i = b(e).match;
                if ("" === i.def && (i = v(e).match), null != i.fn) return i.fn;
                if (!0 !== t && -1 < e) {
                    var n = C(e);
                    return n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0)
                }
                return !1
            }

            function E(e, t) {
                var i = G().maskLength;
                if (i <= e) return i;
                var n = e;
                for (1 < C(i + 1).length && (r(!0, i + 1, !0), i = G().maskLength); ++n < i && (!0 === t && (!0 !== v(n).match.newBlockMarker || !O(n)) || !0 !== t && !O(n));) ;
                return n
            }

            function w(e, t) {
                var i, n = e;
                if (n <= 0) return 0;
                for (; 0 < --n && (!0 === t && !0 !== v(n).match.newBlockMarker || !0 !== t && !O(n) && ((i = C(n)).length < 2 || 2 === i.length && "" === i[1].match.def));) ;
                return n
            }

            function M(e, t, i, n, r) {
                if (n && X.isFunction(H.onBeforeWrite)) {
                    var o = H.onBeforeWrite.call(D, n, t, i, H);
                    if (o) {
                        if (o.refreshFromBuffer) {
                            var a = o.refreshFromBuffer;
                            P(!0 === a ? a : a.start, a.end, o.buffer || t), t = T(!0)
                        }
                        i !== J && (i = o.caret !== J ? o.caret : i)
                    }
                }
                e !== J && (e.inputmask._valueSet(t.join("")), i === J || n !== J && "blur" === n.type ? p(e, i, 0 === t.length) : oe && n && "input" === n.type ? setTimeout(function () {
                    h(e, i)
                }, 0) : h(e, i), !0 === r && (B = !0, X(e).trigger("input")))
            }

            function $(e, t, i) {
                if ((t = t || v(e).match).placeholder !== J || !0 === i) return X.isFunction(t.placeholder) ? t.placeholder(H) : t.placeholder;
                if (null === t.fn) {
                    if (-1 < e && G().validPositions[e] === J) {
                        var n, r = C(e), o = [];
                        if (r.length > 1 + ("" === r[r.length - 1].match.def ? 1 : 0)) for (var a = 0; a < r.length; a++) if (!0 !== r[a].match.optionality && !0 !== r[a].match.optionalQuantifier && (null === r[a].match.fn || n === J || !1 !== r[a].match.fn.test(n.match.def, G(), e, !0, H)) && (o.push(r[a]), null === r[a].match.fn && (n = r[a]), 1 < o.length && /[0-9a-bA-Z]/.test(o[0].match.def))) return H.placeholder.charAt(e % H.placeholder.length)
                    }
                    return t.def
                }
                return H.placeholder.charAt(e % H.placeholder.length)
            }

            function d(p, e, u, t, i) {
                var f = t.slice(), m = "", h = -1, g = J;
                if (S(), u || !0 === H.autoUnmask) h = E(h); else {
                    var n = y().slice(0, E(-1)).join(""),
                        r = f.join("").match(new RegExp("^" + ee.escapeRegex(n), "g"));
                    r && 0 < r.length && (f.splice(0, r.length * n.length), h = E(h))
                }
                if (-1 === h ? (G().p = E(h), h = 0) : G().p = h, X.each(f, function (e, t) {
                    if (t !== J) if (G().validPositions[e] === J && f[e] === $(e) && O(e, !0) && !1 === _(e, f[e], !0, J, J, !0)) G().p++; else {
                        var i = new X.Event("_checkval");
                        i.which = t.charCodeAt(0), m += t;
                        var n = A(J, !0), r = G().validPositions[n], o = b(n + 1, r ? r.locator.slice() : J, n);
                        if (c = h, d = m, -1 === y().slice(c, E(c)).join("").indexOf(d) || O(c) || v(c).match.nativeDef !== d.charAt(d.length - 1) || u || H.autoUnmask) {
                            var a = u ? e : null == o.match.fn && o.match.optionality && n + 1 < G().p ? n + 1 : G().p;
                            g = U.keypressEvent.call(p, i, !0, !1, u, a), h = a + 1, m = ""
                        } else g = U.keypressEvent.call(p, i, !0, !1, !0, n + 1);
                        if (!1 !== g && !u && X.isFunction(H.onBeforeWrite)) {
                            var s = g;
                            if (g = H.onBeforeWrite.call(D, i, T(), g.forwardPosition, H), (g = X.extend(s, g)) && g.refreshFromBuffer) {
                                var l = g.refreshFromBuffer;
                                P(!0 === l ? l : l.start, l.end, g.buffer), S(!0), g.caret && (G().p = g.caret, g.forwardPosition = g.caret)
                            }
                        }
                    }
                    var c, d
                }), e) {
                    var o = J;
                    Y.activeElement === p && g && (o = H.numericInput ? w(g.forwardPosition) : g.forwardPosition), M(p, T(), o, i || new X.Event("checkval"), i && "input" === i.type)
                }
            }

            function i(e) {
                if (e) {
                    if (e.inputmask === J) return e.value;
                    e.inputmask && e.inputmask.refreshValue && U.setValueEvent.call(e)
                }
                var t = [], i = G().validPositions;
                for (var n in i) i[n].match && null != i[n].match.fn && t.push(i[n].input);
                var r = 0 === t.length ? "" : (L ? t.reverse() : t).join("");
                if (X.isFunction(H.onUnMask)) {
                    var o = (L ? T().slice().reverse() : T()).join("");
                    r = H.onUnMask.call(D, o, r, H)
                }
                return r
            }

            function h(e, t, i, n) {
                function r(e) {
                    return !0 === n || !L || "number" != typeof e || H.greedy && "" === H.placeholder || (e = T().join("").length - e), e
                }

                var o;
                if (t === J) return e.setSelectionRange ? (t = e.selectionStart, i = e.selectionEnd) : Q.getSelection ? (o = Q.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset, i = o.endOffset) : Y.selection && Y.selection.createRange && (i = (t = 0 - (o = Y.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length), {
                    begin: r(t),
                    end: r(i)
                };
                if (t.begin !== J && (i = t.end, t = t.begin), "number" == typeof t) {
                    t = r(t), i = "number" == typeof (i = r(i)) ? i : t;
                    var a = parseInt(((e.ownerDocument.defaultView || Q).getComputedStyle ? (e.ownerDocument.defaultView || Q).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                    if (e.scrollLeft = a > e.scrollWidth ? a : 0, ie || !1 !== H.insertMode || t !== i || i++, e.setSelectionRange) e.selectionStart = t, e.selectionEnd = i; else if (Q.getSelection) {
                        if (o = Y.createRange(), e.firstChild === J || null === e.firstChild) {
                            var s = Y.createTextNode("");
                            e.appendChild(s)
                        }
                        o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), o.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), o.collapse(!0);
                        var l = Q.getSelection();
                        l.removeAllRanges(), l.addRange(o)
                    } else e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", i), o.moveStart("character", t), o.select());
                    p(e, {begin: t, end: i})
                }
            }

            function a(e) {
                var t, i, n = T(), r = n.length, o = A(), a = {}, s = G().validPositions[o],
                    l = s !== J ? s.locator.slice() : J;
                for (t = o + 1; t < n.length; t++) l = (i = b(t, l, t - 1)).locator.slice(), a[t] = X.extend(!0, {}, i);
                var c = s && s.alternation !== J ? s.locator[s.alternation] : J;
                for (t = r - 1; o < t && ((i = a[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || c && (c !== a[t].locator[s.alternation] && null != i.match.fn || null === i.match.fn && i.locator[s.alternation] && m(i.locator[s.alternation].toString().split(","), c.toString().split(",")) && "" !== C(t)[0].def)) && n[t] === $(t, i.match); t--) r--;
                return e ? {l: r, def: a[r] ? a[r].match : J} : r
            }

            function l(e) {
                for (var t, i = a(), n = e.length, r = G().validPositions[A()]; i < n && !O(i, !0) && (t = r !== J ? b(i, r.locator.slice(""), r) : v(i)) && !0 !== t.match.optionality && (!0 !== t.match.optionalQuantifier && !0 !== t.match.newBlockMarker || i + 1 === n && "" === (r !== J ? b(i + 1, r.locator.slice(""), r) : v(i + 1)).match.def);) i++;
                for (; (t = G().validPositions[i - 1]) && t && t.match.optionality && t.input === H.skipOptionalPartCharacter;) i--;
                return e.splice(i), e
            }

            function g(e) {
                if (X.isFunction(H.isComplete)) return H.isComplete(e, H);
                if ("*" === H.repeat) return J;
                var t = !1, i = a(!0), n = w(i.l);
                if (i.def === J || i.def.newBlockMarker || i.def.optionality || i.def.optionalQuantifier) {
                    t = !0;
                    for (var r = 0; r <= n; r++) {
                        var o = b(r).match;
                        if (null !== o.fn && G().validPositions[r] === J && !0 !== o.optionality && !0 !== o.optionalQuantifier || null === o.fn && e[r] !== $(r, o)) {
                            t = !1;
                            break
                        }
                    }
                }
                return t
            }

            function N(a, e, t, i, n) {
                if ((H.numericInput || L) && (e === ee.keyCode.BACKSPACE ? e = ee.keyCode.DELETE : e === ee.keyCode.DELETE && (e = ee.keyCode.BACKSPACE), L)) {
                    var r = t.end;
                    t.end = t.begin, t.begin = r
                }
                e === ee.keyCode.BACKSPACE && (t.end - t.begin < 1 || !1 === H.insertMode) ? (t.begin = w(t.begin), G().validPositions[t.begin] !== J && G().validPositions[t.begin].input === H.groupSeparator && t.begin--) : e === ee.keyCode.DELETE && t.begin === t.end && (t.end = O(t.end, !0) && G().validPositions[t.end] && G().validPositions[t.end].input !== H.radixPoint ? t.end + 1 : E(t.end) + 1, G().validPositions[t.begin] !== J && G().validPositions[t.begin].input === H.groupSeparator && t.end++), k(t.begin, t.end, !1, i), !0 !== i && function () {
                    if (H.keepStatic) {
                        for (var e = [], t = A(-1, !0), i = X.extend(!0, {}, G().validPositions), n = G().validPositions[t]; 0 <= t; t--) {
                            var r = G().validPositions[t];
                            if (r) {
                                if (!0 !== r.generatedInput && /[0-9a-bA-Z]/.test(r.input) && e.push(r.input), delete G().validPositions[t], r.alternation !== J && r.locator[r.alternation] !== n.locator[r.alternation]) break;
                                n = r
                            }
                        }
                        if (-1 < t) for (G().p = E(A(-1, !0)); 0 < e.length;) {
                            var o = new X.Event("keypress");
                            o.which = e.pop().charCodeAt(0), U.keypressEvent.call(a, o, !0, !1, !1, G().p)
                        } else G().validPositions = X.extend(!0, {}, i)
                    }
                }();
                var o = A(t.begin, !0);
                if (o < t.begin) G().p = E(o); else if (!0 !== i && (G().p = t.begin, !0 !== n)) for (; G().p < o && G().validPositions[G().p] === J;) G().p++
            }

            function o(c) {
                var d = (c.ownerDocument.defaultView || Q).getComputedStyle(c, null), e = Y.createElement("div");
                e.style.width = d.width, e.style.textAlign = d.textAlign, (I = Y.createElement("div")).className = "im-colormask", c.parentNode.insertBefore(I, c), c.parentNode.removeChild(c), I.appendChild(e), I.appendChild(c), c.style.left = e.offsetLeft + "px", X(c).on("click", function (e) {
                    return h(c, function (e) {
                        var t, i = Y.createElement("span");
                        for (var n in d) isNaN(n) && -1 !== n.indexOf("font") && (i.style[n] = d[n]);
                        i.style.textTransform = d.textTransform, i.style.letterSpacing = d.letterSpacing, i.style.position = "absolute", i.style.height = "auto", i.style.width = "auto", i.style.visibility = "hidden", i.style.whiteSpace = "nowrap", Y.body.appendChild(i);
                        var r, o = c.inputmask._valueGet(), a = 0;
                        for (t = 0, r = o.length; t <= r; t++) {
                            if (i.innerHTML += o.charAt(t) || "_", i.offsetWidth >= e) {
                                var s = e - a, l = i.offsetWidth - e;
                                i.innerHTML = o.charAt(t), t = (s -= i.offsetWidth / 3) < l ? t - 1 : t;
                                break
                            }
                            a = i.offsetWidth
                        }
                        return Y.body.removeChild(i), t
                    }(e.clientX)), U.clickEvent.call(c, [e])
                }), X(c).on("keydown", function (e) {
                    e.shiftKey || !1 === H.insertMode || setTimeout(function () {
                        p(c)
                    }, 0)
                })
            }

            function p(t, i, e) {
                function n() {
                    c || null !== o.fn && a.input !== J ? c && (null !== o.fn && a.input !== J || "" === o.def) && (c = !1, l += "</span>") : (c = !0, l += "<span class='im-static'>")
                }

                function r(e) {
                    !0 !== e && d !== i.begin || Y.activeElement !== t || (l += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>")
                }

                var o, a, s, l = "", c = !1, d = 0;
                if (I !== J) {
                    var p = T();
                    if (i === J ? i = h(t) : i.begin === J && (i = {begin: i, end: i}), !0 !== e) {
                        for (var u = A(); r(), G().validPositions[d] ? (a = G().validPositions[d], o = a.match, s = a.locator.slice(), n(), l += p[d]) : (a = b(d, s, d - 1), o = a.match, s = a.locator.slice(), (!1 === H.jitMasking || d < u || "number" == typeof H.jitMasking && isFinite(H.jitMasking) && H.jitMasking > d) && (n(), l += $(d, o))), d++, (R === J || d < R) && (null !== o.fn || "" !== o.def) || d < u || c;) ;
                        -1 === l.indexOf("im-caret") && r(!0), c && n()
                    }
                    var f = I.getElementsByTagName("div")[0];
                    f.innerHTML = l, t.inputmask.positionColorMask(t, f)
                }
            }

            t = t || this.maskset, H = H || this.opts;
            var z, s, R, I, n, D = this, c = this.el, L = this.isRTL, u = !1, B = !1, F = !1, j = !1, W = {
                on: function (e, t, o) {
                    var i = function (e) {
                        if (this.inputmask === J && "FORM" !== this.nodeName) {
                            var t = X.data(this, "_inputmask_opts");
                            t ? new ee(t).mask(this) : W.off(this)
                        } else {
                            if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === H.tabThrough && e.keyCode === ee.keyCode.TAB))) {
                                switch (e.type) {
                                    case"input":
                                        if (!0 === B) return B = !1, e.preventDefault();
                                        break;
                                    case"keydown":
                                        B = u = !1;
                                        break;
                                    case"keypress":
                                        if (!0 === u) return e.preventDefault();
                                        u = !0;
                                        break;
                                    case"click":
                                        if (ne || re) {
                                            var i = this, n = arguments;
                                            return setTimeout(function () {
                                                o.apply(i, n)
                                            }, 0), !1
                                        }
                                }
                                var r = o.apply(this, arguments);
                                return !1 === r && (e.preventDefault(), e.stopPropagation()), r
                            }
                            e.preventDefault()
                        }
                    };
                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(i), -1 !== X.inArray(t, ["submit", "reset"]) ? null !== e.form && X(e.form).on(t, i) : X(e).on(t, i)
                }, off: function (n, e) {
                    var t;
                    n.inputmask && n.inputmask.events && (e ? (t = [])[e] = n.inputmask.events[e] : t = n.inputmask.events, X.each(t, function (e, t) {
                        for (; 0 < t.length;) {
                            var i = t.pop();
                            -1 !== X.inArray(e, ["submit", "reset"]) ? null !== n.form && X(n.form).off(e, i) : X(n).off(e, i)
                        }
                        delete n.inputmask.events[e]
                    }))
                }
            }, U = {
                keydownEvent: function (e) {
                    var t, i, n, r = this, o = X(r), a = e.keyCode, s = h(r);
                    if (a === ee.keyCode.BACKSPACE || a === ee.keyCode.DELETE || re && a === ee.keyCode.BACKSPACE_SAFARI || e.ctrlKey && a === ee.keyCode.X && (t = Y.createElement("input"), (n = (i = "oncut") in t) || (t.setAttribute(i, "return;"), n = "function" == typeof t[i]), t = null, !n)) e.preventDefault(), N(r, a, s), M(r, T(!0), G().p, e, r.inputmask._valueGet() !== T().join("")), r.inputmask._valueGet() === y().join("") ? o.trigger("cleared") : !0 === g(T()) && o.trigger("complete"); else if (a === ee.keyCode.END || a === ee.keyCode.PAGE_DOWN) {
                        e.preventDefault();
                        var l = E(A());
                        H.insertMode || l !== G().maskLength || e.shiftKey || l--, h(r, e.shiftKey ? s.begin : l, l, !0)
                    } else a === ee.keyCode.HOME && !e.shiftKey || a === ee.keyCode.PAGE_UP ? (e.preventDefault(), h(r, 0, e.shiftKey ? s.begin : 0, !0)) : (H.undoOnEscape && a === ee.keyCode.ESCAPE || 90 === a && e.ctrlKey) && !0 !== e.altKey ? (d(r, !0, !1, z.split("")), o.trigger("click")) : a !== ee.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === H.tabThrough && a === ee.keyCode.TAB ? (!0 === e.shiftKey ? (null === v(s.begin).match.fn && (s.begin = E(s.begin)), s.end = w(s.begin, !0), s.begin = w(s.end, !0)) : (s.begin = E(s.begin, !0), s.end = E(s.begin, !0), s.end < G().maskLength && s.end--), s.begin < G().maskLength && (e.preventDefault(), h(r, s.begin, s.end))) : e.shiftKey || !1 === H.insertMode && (a === ee.keyCode.RIGHT ? setTimeout(function () {
                        var e = h(r);
                        h(r, e.begin)
                    }, 0) : a === ee.keyCode.LEFT && setTimeout(function () {
                        var e = h(r);
                        h(r, L ? e.begin + 1 : e.begin - 1)
                    }, 0)) : (H.insertMode = !H.insertMode, h(r, H.insertMode || s.begin !== G().maskLength ? s.begin : s.begin - 1));
                    H.onKeyDown.call(this, e, T(), h(r).begin, H), F = -1 !== X.inArray(a, H.ignorables)
                }, keypressEvent: function (e, t, i, n, r) {
                    var o = this, a = X(o), s = e.which || e.charCode || e.keyCode;
                    if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || F)) return s === ee.keyCode.ENTER && z !== T().join("") && (z = T().join(""), setTimeout(function () {
                        a.trigger("change")
                    }, 0)), !0;
                    if (s) {
                        46 === s && !1 === e.shiftKey && "" !== H.radixPoint && (s = H.radixPoint.charCodeAt(0));
                        var l, c = t ? {begin: r, end: r} : h(o), d = String.fromCharCode(s);
                        G().writeOutBuffer = !0;
                        var p = _(c, d, n);
                        if (!1 !== p && (S(!0), l = p.caret !== J ? p.caret : t ? p.pos + 1 : E(p.pos), G().p = l), !1 !== i && (setTimeout(function () {
                            H.onKeyValidation.call(o, s, p, H)
                        }, 0), G().writeOutBuffer && !1 !== p)) {
                            var u = T();
                            M(o, u, H.numericInput && p.caret === J ? w(l) : l, e, !0 !== t), !0 !== t && setTimeout(function () {
                                !0 === g(u) && a.trigger("complete")
                            }, 0)
                        }
                        if (e.preventDefault(), t) return !1 !== p && (p.forwardPosition = l), p
                    }
                }, pasteEvent: function (e) {
                    var t, i = this, n = e.originalEvent || e, r = X(i), o = i.inputmask._valueGet(!0), a = h(i);
                    L && (t = a.end, a.end = a.begin, a.begin = t);
                    var s = o.substr(0, a.begin), l = o.substr(a.end, o.length);
                    if (s === (L ? y().reverse() : y()).slice(0, a.begin).join("") && (s = ""), l === (L ? y().reverse() : y()).slice(a.end).join("") && (l = ""), L && (t = s, s = l, l = t), Q.clipboardData && Q.clipboardData.getData) o = s + Q.clipboardData.getData("Text") + l; else {
                        if (!n.clipboardData || !n.clipboardData.getData) return !0;
                        o = s + n.clipboardData.getData("text/plain") + l
                    }
                    var c = o;
                    if (X.isFunction(H.onBeforePaste)) {
                        if (!1 === (c = H.onBeforePaste.call(D, o, H))) return e.preventDefault();
                        c || (c = o)
                    }
                    return d(i, !1, !1, L ? c.split("").reverse() : c.toString().split("")), M(i, T(), E(A()), e, z !== T().join("")), !0 === g(T()) && r.trigger("complete"), e.preventDefault()
                }, inputFallBackEvent: function (e) {
                    var n = this, t = n.inputmask._valueGet();
                    if (T().join("") !== t) {
                        var i = h(n);
                        if (!1 === function (e, t, i) {
                            if ("." === t.charAt(i.begin - 1) && "" !== H.radixPoint && ((t = t.split(""))[i.begin - 1] = H.radixPoint.charAt(0), t = t.join("")), t.charAt(i.begin - 1) === H.radixPoint && t.length > T().length) {
                                var n = new X.Event("keypress");
                                return n.which = H.radixPoint.charCodeAt(0), U.keypressEvent.call(e, n, !0, !0, !1, i.begin - 1), !1
                            }
                        }(n, t, i)) return !1;
                        if (t = t.replace(new RegExp("(" + ee.escapeRegex(y().join("")) + ")*"), ""), !1 === function (e, t, i) {
                            if (ne) {
                                var n = t.replace(T().join(""), "");
                                if (1 === n.length) {
                                    var r = new X.Event("keypress");
                                    return r.which = n.charCodeAt(0), U.keypressEvent.call(e, r, !0, !0, !1, G().validPositions[i.begin - 1] ? i.begin : i.begin - 1), !1
                                }
                            }
                        }(n, t, i)) return !1;
                        i.begin > t.length && (h(n, t.length), i = h(n));
                        var r = T().join(""), o = t.substr(0, i.begin), a = t.substr(i.begin), s = r.substr(0, i.begin),
                            l = r.substr(i.begin), c = i, d = "", p = !1;
                        if (o !== s) {
                            c.begin = 0;
                            for (var u = (p = o.length >= s.length) ? o.length : s.length, f = 0; o.charAt(f) === s.charAt(f) && f < u; f++) c.begin++;
                            p && (d += o.slice(c.begin, c.end))
                        }
                        a !== l && (a.length > l.length ? p && (c.end = c.begin) : a.length < l.length ? c.end += l.length - a.length : a.charAt(0) !== l.charAt(0) && c.end++), M(n, T(), c), 0 < d.length ? X.each(d.split(""), function (e, t) {
                            var i = new X.Event("keypress");
                            i.which = t.charCodeAt(0), F = !1, U.keypressEvent.call(n, i)
                        }) : (c.begin === c.end - 1 && h(n, w(c.begin + 1), c.end), e.keyCode = ee.keyCode.DELETE, U.keydownEvent.call(n, e)), e.preventDefault()
                    }
                }, setValueEvent: function (e) {
                    this.inputmask.refreshValue = !1;
                    var t = this.inputmask._valueGet(!0);
                    X.isFunction(H.onBeforeMask) && (t = H.onBeforeMask.call(D, t, H) || t), t = t.split(""), d(this, !0, !1, L ? t.reverse() : t), z = T().join(""), (H.clearMaskOnLostFocus || H.clearIncomplete) && this.inputmask._valueGet() === y().join("") && this.inputmask._valueSet("")
                }, focusEvent: function (e) {
                    var t = this, i = t.inputmask._valueGet();
                    H.showMaskOnFocus && (!H.showMaskOnHover || H.showMaskOnHover && "" === i) && (t.inputmask._valueGet() !== T().join("") ? M(t, T(), E(A())) : !1 === j && h(t, E(A()))), !0 === H.positionCaretOnTab && !1 === j && "" !== i && (M(t, T(), h(t)), U.clickEvent.apply(t, [e, !0])), z = T().join("")
                }, mouseleaveEvent: function (e) {
                    if (j = !1, H.clearMaskOnLostFocus && Y.activeElement !== this) {
                        var t = T().slice(), i = this.inputmask._valueGet();
                        i !== this.getAttribute("placeholder") && "" !== i && (-1 === A() && i === y().join("") ? t = [] : l(t), M(this, t))
                    }
                }, clickEvent: function (e, c) {
                    var d = this;
                    setTimeout(function () {
                        if (Y.activeElement === d) {
                            var e = h(d);
                            if (c && (L ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (H.positionCaretOnClick) {
                                case"none":
                                    break;
                                case"radixFocus":
                                    if (function (e) {
                                        if ("" !== H.radixPoint) {
                                            var t = G().validPositions;
                                            if (t[e] === J || t[e].input === $(e)) {
                                                if (e < E(-1)) return !0;
                                                var i = X.inArray(H.radixPoint, T());
                                                if (-1 !== i) {
                                                    for (var n in t) if (i < n && t[n].input !== $(n)) return !1;
                                                    return !0
                                                }
                                            }
                                        }
                                        return !1
                                    }(e.begin)) {
                                        var t = T().join("").indexOf(H.radixPoint);
                                        h(d, H.numericInput ? E(t) : t);
                                        break
                                    }
                                default:
                                    var i = e.begin, n = A(i, !0), r = E(n);
                                    if (i < r) h(d, O(i, !0) || O(i - 1, !0) ? i : E(i)); else {
                                        var o = G().validPositions[n], a = b(r, o ? o.match.locator : J, o),
                                            s = $(r, a.match);
                                        if ("" !== s && T()[r] !== s && !0 !== a.match.optionalQuantifier && !0 !== a.match.newBlockMarker || !O(r, !0) && a.match.def === s) {
                                            var l = E(r);
                                            (l <= i || i === r) && (r = l)
                                        }
                                        h(d, r)
                                    }
                            }
                        }
                    }, 0)
                }, dblclickEvent: function (e) {
                    var t = this;
                    setTimeout(function () {
                        h(t, 0, E(A()))
                    }, 0)
                }, cutEvent: function (e) {
                    var t = this, i = X(t), n = h(t), r = e.originalEvent || e, o = Q.clipboardData || r.clipboardData,
                        a = L ? T().slice(n.end, n.begin) : T().slice(n.begin, n.end);
                    o.setData("text", L ? a.reverse().join("") : a.join("")), Y.execCommand && Y.execCommand("copy"), N(t, ee.keyCode.DELETE, n), M(t, T(), G().p, e, z !== T().join("")), t.inputmask._valueGet() === y().join("") && i.trigger("cleared")
                }, blurEvent: function (e) {
                    var t = X(this);
                    if (this.inputmask) {
                        var i = this.inputmask._valueGet(), n = T().slice();
                        "" !== i && (H.clearMaskOnLostFocus && (-1 === A() && i === y().join("") ? n = [] : l(n)), !1 === g(n) && (setTimeout(function () {
                            t.trigger("incomplete")
                        }, 0), H.clearIncomplete && (S(), n = H.clearMaskOnLostFocus ? [] : y().slice())), M(this, n, J, e)), z !== T().join("") && (z = n.join(""), t.trigger("change"))
                    }
                }, mouseenterEvent: function (e) {
                    j = !0, Y.activeElement !== this && H.showMaskOnHover && this.inputmask._valueGet() !== T().join("") && M(this, T())
                }, submitEvent: function (e) {
                    z !== T().join("") && s.trigger("change"), H.clearMaskOnLostFocus && -1 === A() && c.inputmask._valueGet && c.inputmask._valueGet() === y().join("") && c.inputmask._valueSet(""), H.removeMaskOnSubmit && (c.inputmask._valueSet(c.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                        M(c, T())
                    }, 0))
                }, resetEvent: function (e) {
                    c.inputmask.refreshValue = !0, setTimeout(function () {
                        s.trigger("setvalue")
                    }, 0)
                }
            };
            if (ee.prototype.positionColorMask = function (e, t) {
                e.style.left = t.offsetLeft + "px"
            }, e !== J) switch (e.action) {
                case"isComplete":
                    return c = e.el, g(T());
                case"unmaskedvalue":
                    return c !== J && e.value === J || (n = e.value, n = (X.isFunction(H.onBeforeMask) && H.onBeforeMask.call(D, n, H) || n).split(""), d(J, !1, !1, L ? n.reverse() : n), X.isFunction(H.onBeforeWrite) && H.onBeforeWrite.call(D, J, T(), 0, H)), i(c);
                case"mask":
                    !function (e) {
                        W.off(e);
                        var t = function (e, s) {
                            var t = e.getAttribute("type"),
                                i = "INPUT" === e.tagName && -1 !== X.inArray(t, s.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                            if (!i) if ("INPUT" === e.tagName) {
                                var n = Y.createElement("input");
                                n.setAttribute("type", t), i = "text" === n.type, n = null
                            } else i = "partial";
                            return !1 !== i ? function (e) {
                                function t() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== A() || !0 !== s.nullable ? Y.activeElement === this && s.clearMaskOnLostFocus ? (L ? l(T().slice()).reverse() : l(T().slice())).join("") : n.call(this) : "" : n.call(this)
                                }

                                function i(e) {
                                    r.call(this, e), this.inputmask && X(this).trigger("setvalue")
                                }

                                var n, r, o;
                                if (!e.inputmask.__valueGet) {
                                    if (!0 !== s.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === ae("test".__proto__) ? function (e) {
                                                return e.__proto__
                                            } : function (e) {
                                                return e.constructor.prototype
                                            });
                                            var a = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : J;
                                            a && a.get && a.set ? (n = a.get, r = a.set, Object.defineProperty(e, "value", {
                                                get: t,
                                                set: i,
                                                configurable: !0
                                            })) : "INPUT" !== e.tagName && (n = function () {
                                                return this.textContent
                                            }, r = function (e) {
                                                this.textContent = e
                                            }, Object.defineProperty(e, "value", {get: t, set: i, configurable: !0}))
                                        } else Y.__lookupGetter__ && e.__lookupGetter__("value") && (n = e.__lookupGetter__("value"), r = e.__lookupSetter__("value"), e.__defineGetter__("value", t), e.__defineSetter__("value", i));
                                        e.inputmask.__valueGet = n, e.inputmask.__valueSet = r
                                    }
                                    e.inputmask._valueGet = function (e) {
                                        return L && !0 !== e ? n.call(this.el).split("").reverse().join("") : n.call(this.el)
                                    }, e.inputmask._valueSet = function (e, t) {
                                        r.call(this.el, null === e || e === J ? "" : !0 !== t && L ? e.split("").reverse().join("") : e)
                                    }, n === J && (n = function () {
                                        return this.value
                                    }, r = function (e) {
                                        this.value = e
                                    }, function (e) {
                                        if (X.valHooks && (X.valHooks[e] === J || !0 !== X.valHooks[e].inputmaskpatch)) {
                                            var i = X.valHooks[e] && X.valHooks[e].get ? X.valHooks[e].get : function (e) {
                                                    return e.value
                                                },
                                                r = X.valHooks[e] && X.valHooks[e].set ? X.valHooks[e].set : function (e, t) {
                                                    return e.value = t, e
                                                };
                                            X.valHooks[e] = {
                                                get: function (e) {
                                                    if (e.inputmask) {
                                                        if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                        var t = i(e);
                                                        return -1 !== A(J, J, e.inputmask.maskset.validPositions) || !0 !== s.nullable ? t : ""
                                                    }
                                                    return i(e)
                                                }, set: function (e, t) {
                                                    var i, n = X(e);
                                                    return i = r(e, t), e.inputmask && n.trigger("setvalue"), i
                                                }, inputmaskpatch: !0
                                            }
                                        }
                                    }(e.type), o = e, W.on(o, "mouseenter", function (e) {
                                        var t = X(this);
                                        this.inputmask._valueGet() !== T().join("") && t.trigger("setvalue")
                                    }))
                                }
                            }(e) : e.inputmask = J, i
                        }(e, H);
                        if (!1 !== t && (s = X(c = e), -1 === (R = c !== J ? c.maxLength : J) && (R = J), !0 === H.colorMask && o(c), oe && (c.hasOwnProperty("inputmode") && (c.inputmode = H.inputmode, c.setAttribute("inputmode", H.inputmode)), "rtfm" === H.androidHack && (!0 !== H.colorMask && o(c), c.type = "password")), !0 === t && (W.on(c, "submit", U.submitEvent), W.on(c, "reset", U.resetEvent), W.on(c, "mouseenter", U.mouseenterEvent), W.on(c, "blur", U.blurEvent), W.on(c, "focus", U.focusEvent), W.on(c, "mouseleave", U.mouseleaveEvent), !0 !== H.colorMask && W.on(c, "click", U.clickEvent), W.on(c, "dblclick", U.dblclickEvent), W.on(c, "paste", U.pasteEvent), W.on(c, "dragdrop", U.pasteEvent), W.on(c, "drop", U.pasteEvent), W.on(c, "cut", U.cutEvent), W.on(c, "complete", H.oncomplete), W.on(c, "incomplete", H.onincomplete), W.on(c, "cleared", H.oncleared), oe || !0 === H.inputEventOnly ? c.removeAttribute("maxLength") : (W.on(c, "keydown", U.keydownEvent), W.on(c, "keypress", U.keypressEvent)), W.on(c, "compositionstart", X.noop), W.on(c, "compositionupdate", X.noop), W.on(c, "compositionend", X.noop), W.on(c, "keyup", X.noop), W.on(c, "input", U.inputFallBackEvent), W.on(c, "beforeinput", X.noop)), W.on(c, "setvalue", U.setValueEvent), z = y().join(""), "" !== c.inputmask._valueGet(!0) || !1 === H.clearMaskOnLostFocus || Y.activeElement === c)) {
                            var i = X.isFunction(H.onBeforeMask) && H.onBeforeMask.call(D, c.inputmask._valueGet(!0), H) || c.inputmask._valueGet(!0);
                            "" !== i && d(c, !0, !1, L ? i.split("").reverse() : i.split(""));
                            var n = T().slice();
                            z = n.join(""), !1 === g(n) && H.clearIncomplete && S(), H.clearMaskOnLostFocus && Y.activeElement !== c && (-1 === A() ? n = [] : l(n)), M(c, n), Y.activeElement === c && h(c, E(A()))
                        }
                    }(c);
                    break;
                case"format":
                    return n = (X.isFunction(H.onBeforeMask) && H.onBeforeMask.call(D, e.value, H) || e.value).split(""), d(J, !0, !1, L ? n.reverse() : n), e.metadata ? {
                        value: L ? T().slice().reverse().join("") : T().join(""),
                        metadata: te.call(this, {action: "getmetadata"}, t, H)
                    } : L ? T().slice().reverse().join("") : T().join("");
                case"isValid":
                    e.value ? (n = e.value.split(""), d(J, !0, !0, L ? n.reverse() : n)) : e.value = T().join("");
                    for (var Z = T(), V = a(), q = Z.length - 1; V < q && !O(q); q--) ;
                    return Z.splice(V, q + 1 - V), g(Z) && e.value === T().join("");
                case"getemptymask":
                    return y().join("");
                case"remove":
                    return c && c.inputmask && (s = X(c), c.inputmask._valueSet(H.autoUnmask ? i(c) : c.inputmask._valueGet(!0)), W.off(c), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(c), "value") && c.inputmask.__valueGet && Object.defineProperty(c, "value", {
                        get: c.inputmask.__valueGet,
                        set: c.inputmask.__valueSet,
                        configurable: !0
                    }) : Y.__lookupGetter__ && c.__lookupGetter__("value") && c.inputmask.__valueGet && (c.__defineGetter__("value", c.inputmask.__valueGet), c.__defineSetter__("value", c.inputmask.__valueSet)), c.inputmask = J), c;
                case"getmetadata":
                    if (X.isArray(t.metadata)) {
                        var K = r(!0, 0, !1).join("");
                        return X.each(t.metadata, function (e, t) {
                            if (t.mask === K) return K = t, !1
                        }), K
                    }
                    return t.metadata
            }
        }

        var e = navigator.userAgent, ie = /mobile/i.test(e), ne = /iemobile/i.test(e), re = /iphone/i.test(e) && !ne,
            oe = /android/i.test(e) && !ne;
        return ee.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: {start: "[", end: "]"},
                quantifiermarker: {start: "{", end: "}"},
                groupmarker: {start: "(", end: ")"},
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: X.noop,
                onincomplete: X.noop,
                oncleared: X.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: X.noop,
                onBeforeMask: null,
                onBeforePaste: function (e, t) {
                    return X.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: X.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixPointDefinitionSymbol: J,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "password"],
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                canClearPosition: X.noop,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: J,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                androidHack: !1,
                importDataAttributes: !0
            },
            definitions: {
                9: {validator: "[0-9１-９]", cardinality: 1, definitionSymbol: "*"},
                a: {validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, definitionSymbol: "*"},
                "*": {validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1}
            },
            aliases: {},
            masksCache: {},
            mask: function (e) {
                var r = this;
                return "string" == typeof e && (e = Y.getElementById(e) || Y.querySelectorAll(e)), e = e.nodeName ? [e] : e, X.each(e, function (e, t) {
                    var i = X.extend(!0, {}, r.opts);
                    !function (i, e, n, r) {
                        if (!0 === e.importDataAttributes) {
                            var t, o, a, s, l = function (e, t) {
                                null !== (t = t !== J ? t : i.getAttribute(r + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = Q[t] : "false" === t ? t = !1 : "true" === t && (t = !0)), n[e] = t)
                            }, c = i.getAttribute(r);
                            if (c && "" !== c && (c = c.replace(new RegExp("'", "g"), '"'), o = JSON.parse("{" + c + "}")), o) for (s in a = J, o) if ("alias" === s.toLowerCase()) {
                                a = o[s];
                                break
                            }
                            for (t in l("alias", a), n.alias && d(n.alias, n, e), e) {
                                if (o) for (s in a = J, o) if (s.toLowerCase() === t.toLowerCase()) {
                                    a = o[s];
                                    break
                                }
                                l(t, a)
                            }
                        }
                        X.extend(!0, e, n), ("rtl" === i.dir || e.rightAlign) && (i.style.textAlign = "right"), ("rtl" === i.dir || e.numericInput) && (i.dir = "ltr", i.removeAttribute("dir"), e.isRTL = !0)
                    }(t, i, X.extend(!0, {}, r.userOptions), r.dataAttribute);
                    var n = o(i, r.noMasksCache);
                    n !== J && (t.inputmask !== J && (t.inputmask.opts.autoUnmask = !0, t.inputmask.remove()), t.inputmask = new ee(J, J, !0), t.inputmask.opts = i, t.inputmask.noMasksCache = r.noMasksCache, t.inputmask.userOptions = X.extend(!0, {}, r.userOptions), t.inputmask.isRTL = i.isRTL || i.numericInput, (t.inputmask.el = t).inputmask.maskset = n, X.data(t, "_inputmask_opts", i), te.call(t.inputmask, {action: "mask"}))
                }), e && e[0] && e[0].inputmask || this
            },
            option: function (e, t) {
                return "string" == typeof e ? this.opts[e] : "object" === (void 0 === e ? "undefined" : ae(e)) ? (X.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function (e) {
                return this.maskset = this.maskset || o(this.opts, this.noMasksCache), te.call(this, {
                    action: "unmaskedvalue",
                    value: e
                })
            },
            remove: function () {
                return te.call(this, {action: "remove"})
            },
            getemptymask: function () {
                return this.maskset = this.maskset || o(this.opts, this.noMasksCache), te.call(this, {action: "getemptymask"})
            },
            hasMaskedValue: function () {
                return !this.opts.autoUnmask
            },
            isComplete: function () {
                return this.maskset = this.maskset || o(this.opts, this.noMasksCache), te.call(this, {action: "isComplete"})
            },
            getmetadata: function () {
                return this.maskset = this.maskset || o(this.opts, this.noMasksCache), te.call(this, {action: "getmetadata"})
            },
            isValid: function (e) {
                return this.maskset = this.maskset || o(this.opts, this.noMasksCache), te.call(this, {
                    action: "isValid",
                    value: e
                })
            },
            format: function (e, t) {
                return this.maskset = this.maskset || o(this.opts, this.noMasksCache), te.call(this, {
                    action: "format",
                    value: e,
                    metadata: t
                })
            },
            analyseMask: function (e, p, u) {
                function t(e, t, i, n) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }

                function o(i, e, n) {
                    n = n !== J ? n : i.matches.length;
                    var r = i.matches[n - 1];
                    if (p) 0 === e.indexOf("[") || h && /\\d|\\s|\\w]/i.test(e) || "." === e ? i.matches.splice(n++, 0, {
                        fn: new RegExp(e, u.casing ? "i" : ""),
                        cardinality: 1,
                        optionality: i.isOptional,
                        newBlockMarker: r === J || r.def !== e,
                        casing: null,
                        def: e,
                        placeholder: J,
                        nativeDef: e
                    }) : (h && (e = e[e.length - 1]), X.each(e.split(""), function (e, t) {
                        r = i.matches[n - 1], i.matches.splice(n++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: i.isOptional,
                            newBlockMarker: r === J || r.def !== t && null !== r.fn,
                            casing: null,
                            def: u.staticDefinitionSymbol || t,
                            placeholder: u.staticDefinitionSymbol !== J ? t : J,
                            nativeDef: t
                        })
                    })), h = !1; else {
                        var t = (u.definitions ? u.definitions[e] : J) || ee.prototype.definitions[e];
                        if (t && !h) {
                            for (var o = t.prevalidator, a = o ? o.length : 0, s = 1; s < t.cardinality; s++) {
                                var l = s <= a ? o[s - 1] : [], c = l.validator, d = l.cardinality;
                                i.matches.splice(n++, 0, {
                                    fn: c ? "string" == typeof c ? new RegExp(c, u.casing ? "i" : "") : new function () {
                                        this.test = c
                                    } : new RegExp("."),
                                    cardinality: d || 1,
                                    optionality: i.isOptional,
                                    newBlockMarker: r === J || r.def !== (t.definitionSymbol || e),
                                    casing: t.casing,
                                    def: t.definitionSymbol || e,
                                    placeholder: t.placeholder,
                                    nativeDef: e
                                }), r = i.matches[n - 1]
                            }
                            i.matches.splice(n++, 0, {
                                fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator, u.casing ? "i" : "") : new function () {
                                    this.test = t.validator
                                } : new RegExp("."),
                                cardinality: t.cardinality,
                                optionality: i.isOptional,
                                newBlockMarker: r === J || r.def !== (t.definitionSymbol || e),
                                casing: t.casing,
                                def: t.definitionSymbol || e,
                                placeholder: t.placeholder,
                                nativeDef: e
                            })
                        } else i.matches.splice(n++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: i.isOptional,
                            newBlockMarker: r === J || r.def !== e && null !== r.fn,
                            casing: null,
                            def: u.staticDefinitionSymbol || e,
                            placeholder: u.staticDefinitionSymbol !== J ? e : J,
                            nativeDef: e
                        }), h = !1
                    }
                }

                function i() {
                    if (0 < v.length) {
                        if (o(s = v[v.length - 1], r), s.isAlternator) {
                            l = v.pop();
                            for (var e = 0; e < l.matches.length; e++) l.matches[e].isGroup = !1;
                            0 < v.length ? (s = v[v.length - 1]).matches.push(l) : g.matches.push(l)
                        }
                    } else o(g, r)
                }

                var n, r, a, s, l, c, d, f = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    m = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    h = !1, g = new t, v = [], y = [];
                for (p && (u.optionalmarker.start = J, u.optionalmarker.end = J); n = p ? m.exec(e) : f.exec(e);) {
                    if (r = n[0], p) switch (r.charAt(0)) {
                        case"?":
                            r = "{0,1}";
                            break;
                        case"+":
                        case"*":
                            r = "{" + r + "}"
                    }
                    if (h) i(); else switch (r.charAt(0)) {
                        case u.escapeChar:
                            h = !0, p && i();
                            break;
                        case u.optionalmarker.end:
                        case u.groupmarker.end:
                            if ((a = v.pop()).openGroup = !1, a !== J) if (0 < v.length) {
                                if ((s = v[v.length - 1]).matches.push(a), s.isAlternator) {
                                    l = v.pop();
                                    for (var k = 0; k < l.matches.length; k++) l.matches[k].isGroup = !1, l.matches[k].alternatorGroup = !1;
                                    0 < v.length ? (s = v[v.length - 1]).matches.push(l) : g.matches.push(l)
                                }
                            } else g.matches.push(a); else i();
                            break;
                        case u.optionalmarker.start:
                            v.push(new t(!1, !0));
                            break;
                        case u.groupmarker.start:
                            v.push(new t(!0));
                            break;
                        case u.quantifiermarker.start:
                            var b = new t(!1, !1, !0), x = (r = r.replace(/[{}]/g, "")).split(","),
                                w = isNaN(x[0]) ? x[0] : parseInt(x[0]),
                                S = 1 === x.length ? w : isNaN(x[1]) ? x[1] : parseInt(x[1]);
                            if ("*" !== S && "+" !== S || (w = "*" === S ? 0 : 1), b.quantifier = {
                                min: w,
                                max: S
                            }, 0 < v.length) {
                                var A = v[v.length - 1].matches;
                                (n = A.pop()).isGroup || ((d = new t(!0)).matches.push(n), n = d), A.push(n), A.push(b)
                            } else (n = g.matches.pop()).isGroup || (p && null === n.fn && "." === n.def && (n.fn = new RegExp(n.def, u.casing ? "i" : "")), (d = new t(!0)).matches.push(n), n = d), g.matches.push(n), g.matches.push(b);
                            break;
                        case u.alternatormarker:
                            if (0 < v.length) {
                                var C = (s = v[v.length - 1]).matches[s.matches.length - 1];
                                c = s.openGroup && (C.matches === J || !1 === C.isGroup && !1 === C.isAlternator) ? v.pop() : s.matches.pop()
                            } else c = g.matches.pop();
                            if (c.isAlternator) v.push(c); else if (c.alternatorGroup ? (l = v.pop(), c.alternatorGroup = !1) : l = new t(!1, !1, !1, !0), l.matches.push(c), v.push(l), c.openGroup) {
                                var T = new t(!(c.openGroup = !1));
                                T.alternatorGroup = !0, v.push(T)
                            }
                            break;
                        default:
                            i()
                    }
                }
                for (; 0 < v.length;) a = v.pop(), g.matches.push(a);
                return 0 < g.matches.length && (function n(r) {
                    r && r.matches && X.each(r.matches, function (e, t) {
                        var i = r.matches[e + 1];
                        (i === J || i.matches === J || !1 === i.isQuantifier) && t && t.isGroup && (t.isGroup = !1, p || (o(t, u.groupmarker.start, 0), !0 !== t.openGroup && o(t, u.groupmarker.end))), n(t)
                    })
                }(g), y.push(g)), (u.numericInput || u.isRTL) && function e(t) {
                    for (var i in t.matches = t.matches.reverse(), t.matches) if (t.matches.hasOwnProperty(i)) {
                        var n = parseInt(i);
                        if (t.matches[i].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                            var r = t.matches[i];
                            t.matches.splice(i, 1), t.matches.splice(n + 1, 0, r)
                        }
                        t.matches[i].matches !== J ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((o = t.matches[i]) === u.optionalmarker.start ? o = u.optionalmarker.end : o === u.optionalmarker.end ? o = u.optionalmarker.start : o === u.groupmarker.start ? o = u.groupmarker.end : o === u.groupmarker.end && (o = u.groupmarker.start), o)
                    }
                    var o;
                    return t
                }(y[0]), y
            }
        }, ee.extendDefaults = function (e) {
            X.extend(!0, ee.prototype.defaults, e)
        }, ee.extendDefinitions = function (e) {
            X.extend(!0, ee.prototype.definitions, e)
        }, ee.extendAliases = function (e) {
            X.extend(!0, ee.prototype.aliases, e)
        }, ee.format = function (e, t, i) {
            return ee(t).format(e, i)
        }, ee.unmask = function (e, t) {
            return ee(t).unmaskedvalue(e)
        }, ee.isValid = function (e, t) {
            return ee(t).isValid(e)
        }, ee.remove = function (e) {
            X.each(e, function (e, t) {
                t.inputmask && t.inputmask.remove()
            })
        }, ee.escapeRegex = function (e) {
            return e.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1")
        }, ee.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
            X: 88
        }, ee
    }) ? n.apply(t, r) : n) && (e.exports = o)
}, function (e, t) {
    e.exports = jQuery
}, function (e, t, i) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {default: e}
    }

    i(4), i(9), i(12), i(13), i(14), i(15);
    var r = n(i(1)), o = n(i(0)), a = n(i(2));
    o.default === a.default && i(16), window.Inputmask = r.default
}, function (e, t, i) {
    var n = i(5);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var r = {hmr: !0, transform: void 0};
    i(7)(n, r), n.locals && (e.exports = n.locals)
}, function (e, t, i) {
    (e.exports = i(6)(void 0)).push([e.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", ""])
}, function (e, t) {
    function n(e, t) {
        var i, n = e[1] || "", r = e[3];
        if (!r) return n;
        if (t && "function" == typeof btoa) {
            var o = (i = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
                a = r.sources.map(function (e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                });
            return [n].concat(a).concat([o]).join("\n")
        }
        return [n].join("\n")
    }

    e.exports = function (i) {
        var a = [];
        return a.toString = function () {
            return this.map(function (e) {
                var t = n(e, i);
                return e[2] ? "@media " + e[2] + "{" + t + "}" : t
            }).join("")
        }, a.i = function (e, t) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var i = {}, n = 0; n < this.length; n++) {
                var r = this[n][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (n = 0; n < e.length; n++) {
                var o = e[n];
                "number" == typeof o[0] && i[o[0]] || (t && !o[2] ? o[2] = t : t && (o[2] = "(" + o[2] + ") and (" + t + ")"), a.push(o))
            }
        }, a
    }
}, function (e, t, i) {
    function l(e, t) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i], r = h[n.id];
            if (r) {
                for (r.refs++, a = 0; a < r.parts.length; a++) r.parts[a](n.parts[a]);
                for (; a < n.parts.length; a++) r.parts.push(s(n.parts[a], t))
            } else {
                for (var o = [], a = 0; a < n.parts.length; a++) o.push(s(n.parts[a], t));
                h[n.id] = {id: n.id, refs: 1, parts: o}
            }
        }
    }

    function c(e, t) {
        for (var i = [], n = {}, r = 0; r < e.length; r++) {
            var o = e[r], a = t.base ? o[0] + t.base : o[0], s = {css: o[1], media: o[2], sourceMap: o[3]};
            n[a] ? n[a].parts.push(s) : i.push(n[a] = {id: a, parts: [s]})
        }
        return i
    }

    function d(e, t) {
        var i = a(e.insertInto);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = y[y.length - 1];
        if ("top" === e.insertAt) n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild), y.push(t); else if ("bottom" === e.insertAt) i.appendChild(t); else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = a(e.insertInto + " " + e.insertAt.before);
            i.insertBefore(t, r)
        }
    }

    function p(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = y.indexOf(e);
        0 <= t && y.splice(t, 1)
    }

    function u(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", f(t, e.attrs), d(e, t), t
    }

    function f(t, i) {
        Object.keys(i).forEach(function (e) {
            t.setAttribute(e, i[e])
        })
    }

    function s(t, e) {
        var i, n, r, o, a, s;
        if (e.transform && t.css) {
            if (!(o = e.transform(t.css))) return function () {
            };
            t.css = o
        }
        if (e.singleton) {
            var l = v++;
            i = g || (g = u(e)), n = m.bind(null, i, l, !1), r = m.bind(null, i, l, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = e, s = document.createElement("link"), a.attrs.type = "text/css", a.attrs.rel = "stylesheet", f(s, a.attrs), d(a, s), n = function (e, t, i) {
            var n = i.css, r = i.sourceMap, o = void 0 === t.convertToAbsoluteUrls && r;
            (t.convertToAbsoluteUrls || o) && (n = k(n)), r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var a = new Blob([n], {type: "text/css"}), s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, i = s, e), r = function () {
            p(i), i.href && URL.revokeObjectURL(i.href)
        }) : (i = u(e), n = function (e, t) {
            var i = t.css, n = t.media;
            if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = i; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i))
            }
        }.bind(null, i), r = function () {
            p(i)
        });
        return n(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                n(t = e)
            } else r()
        }
    }

    function m(e, t, i, n) {
        var r = i ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, r); else {
            var o = document.createTextNode(r), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }

    var n, r, h = {}, o = function () {
        return void 0 === r && (r = function () {
            return window && document && document.all && !window.atob
        }.apply(this, arguments)), r
    }, a = (n = {}, function (e) {
        if (void 0 === n[e]) {
            var t = function (e) {
                return document.querySelector(e)
            }.call(this, e);
            if (t instanceof window.HTMLIFrameElement) try {
                t = t.contentDocument.head
            } catch (e) {
                t = null
            }
            n[e] = t
        }
        return n[e]
    }), g = null, v = 0, y = [], k = i(8);
    e.exports = function (e, a) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}, a.singleton || (a.singleton = o()), a.insertInto || (a.insertInto = "head"), a.insertAt || (a.insertAt = "bottom");
        var s = c(e, a);
        return l(s, a), function (e) {
            for (var t = [], i = 0; i < s.length; i++) {
                var n = s[i];
                (r = h[n.id]).refs--, t.push(r)
            }
            for (e && l(c(e, a), a), i = 0; i < t.length; i++) {
                var r = t[i];
                if (0 === r.refs) {
                    for (var o = 0; o < r.parts.length; o++) r.parts[o]();
                    delete h[r.id]
                }
            }
        }
    };
    var b, x = (b = [], function (e, t) {
        return b[e] = t, b.filter(Boolean).join("\n")
    })
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var r = t.protocol + "//" + t.host, o = r + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var i, n = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(n) ? e : (i = 0 === n.indexOf("//") ? n : 0 === n.indexOf("/") ? r + n : o + n.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function (e, t, i) {
    "use strict";
    var n, r, o;
    "function" == typeof Symbol && Symbol.iterator, r = [i(0), i(1)], void 0 !== (o = "function" == typeof (n = function (a, s) {
        return s.extendAliases({
            "dd/mm/yyyy": {
                mask: "1/2/y",
                placeholder: "dd/mm/yyyy",
                regex: {
                    val1pre: new RegExp("[0-3]"),
                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + t + "[01])")
                    },
                    val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|[12][0-9])" + t + "(0[1-9]|1[012]))|(30" + t + "(0[13-9]|1[012]))|(31" + t + "(0[13578]|1[02]))")
                    }
                },
                leapday: "29/02/",
                separator: "/",
                yearrange: {minyear: 1900, maxyear: 2099},
                isInYearRange: function (e, t, i) {
                    if (isNaN(e)) return !1;
                    var n = parseInt(e.concat(t.toString().slice(e.length))),
                        r = parseInt(e.concat(i.toString().slice(e.length)));
                    return !isNaN(n) && t <= n && n <= i || !isNaN(r) && t <= r && r <= i
                },
                determinebaseyear: function (e, t, i) {
                    var n = (new Date).getFullYear();
                    if (n < e) return e;
                    if (t < n) {
                        for (var r = t.toString().slice(0, 2), o = t.toString().slice(2, 4); t < r + i;) r--;
                        var a = r + o;
                        return a < e ? e : a
                    }
                    if (e <= n && n <= t) {
                        for (var s = n.toString().slice(0, 2); t < s + i;) s--;
                        var l = s + i;
                        return l < e ? e : l
                    }
                    return n
                },
                onKeyDown: function (e, t, i, n) {
                    var r = a(this);
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        var o = new Date;
                        r.val(o.getDate().toString() + (o.getMonth() + 1).toString() + o.getFullYear().toString()), r.trigger("setvalue")
                    }
                },
                getFrontValue: function (e, t, i) {
                    for (var n = 0, r = 0, o = 0; o < e.length && "2" !== e.charAt(o); o++) {
                        var a = i.definitions[e.charAt(o)];
                        a ? (n += r, r = a.cardinality) : r++
                    }
                    return t.join("").substr(n, r)
                },
                postValidation: function (e, t, i) {
                    var n, r, o, a = e.join("");
                    return 0 === i.mask.indexOf("y") ? (r = a.substr(0, 4), n = a.substring(4, 10)) : (r = a.substring(6, 10), n = a.substr(0, 6)), t && (n !== i.leapday || (o = r, isNaN(o) || 29 === new Date(o, 2, 0).getDate()))
                },
                definitions: {
                    1: {
                        validator: function (e, t, i, n, r) {
                            var o = r.regex.val1.test(e);
                            return n || o || e.charAt(1) !== r.separator && -1 === "-./".indexOf(e.charAt(1)) || !(o = r.regex.val1.test("0" + e.charAt(0))) ? o : (t.buffer[i - 1] = "0", {
                                refreshFromBuffer: {
                                    start: i - 1,
                                    end: i
                                }, pos: i, c: e.charAt(0)
                            })
                        }, cardinality: 2, prevalidator: [{
                            validator: function (e, t, i, n, r) {
                                var o = e;
                                isNaN(t.buffer[i + 1]) || (o += t.buffer[i + 1]);
                                var a = 1 === o.length ? r.regex.val1pre.test(o) : r.regex.val1.test(o);
                                if (a && t.validPositions[i] && (r.regex.val2(r.separator).test(e + t.validPositions[i].input) || (t.validPositions[i].input = "0" === e ? "1" : "0")), !n && !a) {
                                    if (a = r.regex.val1.test(e + "0")) return t.buffer[i] = e, t.buffer[++i] = "0", {
                                        pos: i,
                                        c: "0"
                                    };
                                    if (a = r.regex.val1.test("0" + e)) return t.buffer[i] = "0", {pos: ++i}
                                }
                                return a
                            }, cardinality: 1
                        }]
                    }, 2: {
                        validator: function (e, t, i, n, r) {
                            var o = r.getFrontValue(t.mask, t.buffer, r);
                            -1 !== o.indexOf(r.placeholder[0]) && (o = "01" + r.separator);
                            var a = r.regex.val2(r.separator).test(o + e);
                            return n || a || e.charAt(1) !== r.separator && -1 === "-./".indexOf(e.charAt(1)) || !(a = r.regex.val2(r.separator).test(o + "0" + e.charAt(0))) ? a : (t.buffer[i - 1] = "0", {
                                refreshFromBuffer: {
                                    start: i - 1,
                                    end: i
                                }, pos: i, c: e.charAt(0)
                            })
                        }, cardinality: 2, prevalidator: [{
                            validator: function (e, t, i, n, r) {
                                isNaN(t.buffer[i + 1]) || (e += t.buffer[i + 1]);
                                var o = r.getFrontValue(t.mask, t.buffer, r);
                                -1 !== o.indexOf(r.placeholder[0]) && (o = "01" + r.separator);
                                var a = 1 === e.length ? r.regex.val2pre(r.separator).test(o + e) : r.regex.val2(r.separator).test(o + e);
                                return a && t.validPositions[i] && (r.regex.val2(r.separator).test(e + t.validPositions[i].input) || (t.validPositions[i].input = "0" === e ? "1" : "0")), n || a || !(a = r.regex.val2(r.separator).test(o + "0" + e)) ? a : (t.buffer[i] = "0", {pos: ++i})
                            }, cardinality: 1
                        }]
                    }, y: {
                        validator: function (e, t, i, n, r) {
                            return r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear)
                        }, cardinality: 4, prevalidator: [{
                            validator: function (e, t, i, n, r) {
                                var o = r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear);
                                if (!n && !o) {
                                    var a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e + "0").toString().slice(0, 1);
                                    if (o = r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[i++] = a.charAt(0), {pos: i};
                                    if (a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e + "0").toString().slice(0, 2), o = r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[i++] = a.charAt(0), t.buffer[i++] = a.charAt(1), {pos: i}
                                }
                                return o
                            }, cardinality: 1
                        }, {
                            validator: function (e, t, i, n, r) {
                                var o = r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear);
                                if (!n && !o) {
                                    var a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e).toString().slice(0, 2);
                                    if (o = r.isInYearRange(e[0] + a[1] + e[1], r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[i++] = a.charAt(1), {pos: i};
                                    if (a = r.determinebaseyear(r.yearrange.minyear, r.yearrange.maxyear, e).toString().slice(0, 2), o = r.isInYearRange(a + e, r.yearrange.minyear, r.yearrange.maxyear)) return t.buffer[i - 1] = a.charAt(0), t.buffer[i++] = a.charAt(1), t.buffer[i++] = e.charAt(0), {
                                        refreshFromBuffer: {
                                            start: i - 3,
                                            end: i
                                        }, pos: i
                                    }
                                }
                                return o
                            }, cardinality: 2
                        }, {
                            validator: function (e, t, i, n, r) {
                                return r.isInYearRange(e, r.yearrange.minyear, r.yearrange.maxyear)
                            }, cardinality: 3
                        }]
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy", alias: "dd/mm/yyyy", regex: {
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + t + "[0-3])|(02" + t + "[0-2])")
                    }, val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + t + "30)|((0[13578]|1[02])" + t + "31)")
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                }, leapday: "02/29/", onKeyDown: function (e, t, i, n) {
                    var r = a(this);
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        var o = new Date;
                        r.val((o.getMonth() + 1).toString() + o.getDate().toString() + o.getFullYear().toString()), r.trigger("setvalue")
                    }
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                leapday: "/02/29",
                onKeyDown: function (e, t, i, n) {
                    var r = a(this);
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        var o = new Date;
                        r.val(o.getFullYear().toString() + (o.getMonth() + 1).toString() + o.getDate().toString()), r.trigger("setvalue")
                    }
                }
            },
            "dd.mm.yyyy": {
                mask: "1.2.y",
                placeholder: "dd.mm.yyyy",
                leapday: "29.02.",
                separator: ".",
                alias: "dd/mm/yyyy"
            },
            "dd-mm-yyyy": {
                mask: "1-2-y",
                placeholder: "dd-mm-yyyy",
                leapday: "29-02-",
                separator: "-",
                alias: "dd/mm/yyyy"
            },
            "mm.dd.yyyy": {
                mask: "1.2.y",
                placeholder: "mm.dd.yyyy",
                leapday: "02.29.",
                separator: ".",
                alias: "mm/dd/yyyy"
            },
            "mm-dd-yyyy": {
                mask: "1-2-y",
                placeholder: "mm-dd-yyyy",
                leapday: "02-29-",
                separator: "-",
                alias: "mm/dd/yyyy"
            },
            "yyyy.mm.dd": {
                mask: "y.1.2",
                placeholder: "yyyy.mm.dd",
                leapday: ".02.29",
                separator: ".",
                alias: "yyyy/mm/dd"
            },
            "yyyy-mm-dd": {
                mask: "y-1-2",
                placeholder: "yyyy-mm-dd",
                leapday: "-02-29",
                separator: "-",
                alias: "yyyy/mm/dd"
            },
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-4]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-4]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]"),
                    mspre: new RegExp("[0-5]"),
                    ms: new RegExp("[0-5][0-9]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function (e, t, i, n, r) {
                            if ("24" === r.hourFormat && 24 === parseInt(e, 10)) return t.buffer[i - 1] = "0", t.buffer[i] = "0", {
                                refreshFromBuffer: {
                                    start: i - 1,
                                    end: i
                                }, c: "0"
                            };
                            var o = r.regex.hrs.test(e);
                            if (!n && !o && (e.charAt(1) === r.timeseparator || -1 !== "-.:".indexOf(e.charAt(1))) && (o = r.regex.hrs.test("0" + e.charAt(0)))) return t.buffer[i - 1] = "0", t.buffer[i] = e.charAt(0), {
                                refreshFromBuffer: {
                                    start: ++i - 2,
                                    end: i
                                }, pos: i, c: r.timeseparator
                            };
                            if (o && "24" !== r.hourFormat && r.regex.hrs24.test(e)) {
                                var a = parseInt(e, 10);
                                return t.buffer[i + 5] = 24 === a ? "a" : "p", t.buffer[i + 6] = "m", (a -= 12) < 10 ? (t.buffer[i] = a.toString(), t.buffer[i - 1] = "0") : (t.buffer[i] = a.toString().charAt(1), t.buffer[i - 1] = a.toString().charAt(0)), {
                                    refreshFromBuffer: {
                                        start: i - 1,
                                        end: i + 6
                                    }, c: t.buffer[i]
                                }
                            }
                            return o
                        }, cardinality: 2, prevalidator: [{
                            validator: function (e, t, i, n, r) {
                                var o = r.regex.hrspre.test(e);
                                return n || o || !(o = r.regex.hrs.test("0" + e)) ? o : (t.buffer[i] = "0", {pos: ++i})
                            }, cardinality: 1
                        }]
                    },
                    s: {
                        validator: "[0-5][0-9]", cardinality: 2, prevalidator: [{
                            validator: function (e, t, i, n, r) {
                                var o = r.regex.mspre.test(e);
                                return n || o || !(o = r.regex.ms.test("0" + e)) ? o : (t.buffer[i] = "0", {pos: ++i})
                            }, cardinality: 1
                        }]
                    },
                    t: {
                        validator: function (e, t, i, n, r) {
                            return r.regex.ampm.test(e + "m")
                        }, casing: "lower", cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {
                mask: "1/2/y h:s t\\m",
                placeholder: "dd/mm/yyyy hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "mm/dd/yyyy hh:mm xm": {
                mask: "1/2/y h:s t\\m",
                placeholder: "mm/dd/yyyy hh:mm xm",
                alias: "datetime12",
                regex: {
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + t + "[0-3])|(02" + t + "[0-2])")
                    }, val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + t + "30)|((0[13578]|1[02])" + t + "31)")
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function (e, t, i, n) {
                    var r = a(this);
                    if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                        var o = new Date;
                        r.val((o.getMonth() + 1).toString() + o.getDate().toString() + o.getFullYear().toString()), r.trigger("setvalue")
                    }
                }
            },
            "hh:mm t": {mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12"},
            "h:s t": {mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12"},
            "hh:mm:ss": {mask: "h:s:s", placeholder: "hh:mm:ss", alias: "datetime", autoUnmask: !1},
            "hh:mm": {mask: "h:s", placeholder: "hh:mm", alias: "datetime", autoUnmask: !1},
            date: {alias: "dd/mm/yyyy"},
            "mm/yyyy": {mask: "1/y", placeholder: "mm/yyyy", leapday: "donotuse", separator: "/", alias: "mm/dd/yyyy"},
            shamsi: {
                regex: {
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "[0-3])")
                    }, val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + t + "30)|((0[1-6])" + t + "31)")
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                },
                yearrange: {minyear: 1300, maxyear: 1499},
                mask: "y/1/2",
                leapday: "/12/30",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                clearIncomplete: !0
            },
            "yyyy-mm-dd hh:mm:ss": {
                mask: "y-1-2 h:s:s",
                placeholder: "yyyy-mm-dd hh:mm:ss",
                alias: "datetime",
                separator: "-",
                leapday: "-02-29",
                regex: {
                    val2pre: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + t + "[0-3])|(02" + t + "[0-2])")
                    }, val2: function (e) {
                        var t = s.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + t + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + t + "30)|((0[13578]|1[02])" + t + "31)")
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                },
                onKeyDown: function (e, t, i, n) {
                }
            }
        }), s
    }) ? n.apply(t, r) : n) && (e.exports = o)
}, function (e, t, i) {
    "use strict";
    var n;
    "function" == typeof Symbol && Symbol.iterator, void 0 !== (n = function () {
        return window
    }.call(t, i, t, e)) && (e.exports = n)
}, function (e, t, i) {
    "use strict";
    var n;
    "function" == typeof Symbol && Symbol.iterator, void 0 !== (n = function () {
        return document
    }.call(t, i, t, e)) && (e.exports = n)
}, function (e, t, i) {
    "use strict";
    var n, r, o;
    "function" == typeof Symbol && Symbol.iterator, r = [i(0), i(1)], void 0 !== (o = "function" == typeof (n = function (e, t) {
        return t.extendDefinitions({
            A: {validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper"},
            "&": {validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper"},
            "#": {validator: "[0-9A-Fa-f]", cardinality: 1, casing: "upper"}
        }), t.extendAliases({
            url: {
                definitions: {i: {validator: ".", cardinality: 1}},
                mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
                insertMode: !1,
                autoUnmask: !1,
                inputmode: "url"
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]", definitions: {
                    i: {
                        validator: function (e, t, i, n, r) {
                            return -1 < i - 1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = -1 < i - 2 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                        }, cardinality: 1
                    }
                }, onUnMask: function (e, t, i) {
                    return e
                }, inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                onBeforePaste: function (e, t) {
                    return (e = e.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]", cardinality: 1, casing: "lower"},
                    "-": {validator: "[0-9A-Za-z-]", cardinality: 1, casing: "lower"}
                },
                onUnMask: function (e, t, i) {
                    return e
                },
                inputmode: "email"
            },
            mac: {mask: "##:##:##:##:##:##"},
            vin: {
                mask: "V{13}9{4}",
                definitions: {V: {validator: "[A-HJ-NPR-Za-hj-npr-z\\d]", cardinality: 1, casing: "upper"}},
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), t
    }) ? n.apply(t, r) : n) && (e.exports = o)
}, function (e, t, i) {
    "use strict";
    var n, r, o;
    "function" == typeof Symbol && Symbol.iterator, r = [i(0), i(1)], void 0 !== (o = "function" == typeof (n = function (h, g, v) {
        function o(e, t) {
            for (var i = "", n = 0; n < e.length; n++) g.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker.start === e.charAt(n) || t.optionalmarker.end === e.charAt(n) || t.quantifiermarker.start === e.charAt(n) || t.quantifiermarker.end === e.charAt(n) || t.groupmarker.start === e.charAt(n) || t.groupmarker.end === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
            return i
        }

        return g.extendAliases({
            numeric: {
                mask: function (e) {
                    if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = v), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
                        var t = Math.floor(e.integerDigits / e.groupSize), i = e.integerDigits % e.groupSize;
                        e.integerDigits = parseInt(e.integerDigits) + (0 === i ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*")
                    }
                    1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                    var n = "[+]";
                    if (n += o(e.prefix, e), !0 === e.integerOptional ? n += "~{1," + e.integerDigits + "}" : n += "~{" + e.integerDigits + "}", e.digits !== v) {
                        e.radixPointDefinitionSymbol = e.decimalProtect ? ":" : e.radixPoint;
                        var r = e.digits.toString().split(",");
                        isFinite(r[0] && r[1] && isFinite(r[1])) ? n += e.radixPointDefinitionSymbol + ";{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional ? n += "[" + e.radixPointDefinitionSymbol + ";{1," + e.digits + "}]" : n += e.radixPointDefinitionSymbol + ";{" + e.digits + "}")
                    }
                    return n += o(e.suffix, e), n += "[-]", e.greedy = !1, n
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {front: "-", back: ""},
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function (e, t, i, n, r) {
                    if ("-" === i || i === r.negationSymbol.front) return !0 === r.allowMinus && (r.isNegative = r.isNegative === v || !r.isNegative, "" === e.join("") || {
                        caret: t,
                        dopost: !0
                    });
                    if (!1 === n && i === r.radixPoint && r.digits !== v && (isNaN(r.digits) || 0 < parseInt(r.digits))) {
                        var o = h.inArray(r.radixPoint, e);
                        if (-1 !== o) return !0 === r.numericInput ? t === o : {caret: o + 1}
                    }
                    return !0
                },
                postValidation: function (e, t, i) {
                    var n = i.suffix.split(""), r = i.prefix.split("");
                    if (t.pos === v && t.caret !== v && !0 !== t.dopost) return t;
                    var o = t.caret !== v ? t.caret : t.pos, a = e.slice();
                    i.numericInput && (o = a.length - o - 1, a = a.reverse());
                    var s = a[o];
                    if (s === i.groupSeparator && (s = a[o += 1]), o === a.length - i.suffix.length - 1 && s === i.radixPoint) return t;
                    s !== v && s !== i.radixPoint && s !== i.negationSymbol.front && s !== i.negationSymbol.back && (a[o] = "?", 0 < i.prefix.length && o >= (!1 === i.isNegative ? 1 : 0) && o < i.prefix.length - 1 + (!1 === i.isNegative ? 1 : 0) ? r[o - (!1 === i.isNegative ? 1 : 0)] = "?" : 0 < i.suffix.length && o >= a.length - i.suffix.length - (!1 === i.isNegative ? 1 : 0) && (n[o - (a.length - i.suffix.length - (!1 === i.isNegative ? 1 : 0))] = "?")), r = r.join(""), n = n.join("");
                    var l = a.join("").replace(r, "");
                    if (l = (l = (l = (l = l.replace(n, "")).replace(new RegExp(g.escapeRegex(i.groupSeparator), "g"), "")).replace(new RegExp("[-" + g.escapeRegex(i.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(g.escapeRegex(i.negationSymbol.back) + "$"), ""), isNaN(i.placeholder) && (l = l.replace(new RegExp(g.escapeRegex(i.placeholder), "g"), "")), 1 < l.length && 1 !== l.indexOf(i.radixPoint) && ("0" === s && (l = l.replace(/^\?/g, "")), l = l.replace(/^0/g, "")), l.charAt(0) === i.radixPoint && "" !== i.radixPoint && !0 !== i.numericInput && (l = "0" + l), "" !== l) {
                        if (l = l.split(""), (!i.digitsOptional || i.enforceDigitsOnBlur && "blur" === t.event) && isFinite(i.digits)) {
                            var c = h.inArray(i.radixPoint, l), d = h.inArray(i.radixPoint, a);
                            -1 === c && (l.push(i.radixPoint), c = l.length - 1);
                            for (var p = 1; p <= i.digits; p++) i.digitsOptional && (!i.enforceDigitsOnBlur || "blur" !== t.event) || l[c + p] !== v && l[c + p] !== i.placeholder.charAt(0) ? -1 !== d && a[d + p] !== v && (l[c + p] = l[c + p] || a[d + p]) : l[c + p] = t.placeholder || i.placeholder.charAt(0)
                        }
                        if (!0 !== i.autoGroup || "" === i.groupSeparator || s === i.radixPoint && t.pos === v && !t.dopost) l = l.join(""); else {
                            var u = l[l.length - 1] === i.radixPoint && t.c === i.radixPoint;
                            l = g(function (e, t) {
                                var i = "";
                                if (i += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                                    var n = e.join("").split(t.radixPoint);
                                    n[1] && (i += t.radixPoint + "*{" + n[1].match(/^\d*\??\d*/)[0].length + "}")
                                }
                                return i
                            }(l, i), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {"*": {validator: "[0-9?]", cardinality: 1}}
                            }).format(l.join("")), u && (l += i.radixPoint), l.charAt(0) === i.groupSeparator && l.substr(1)
                        }
                    }
                    if (i.isNegative && "blur" === t.event && (i.isNegative = "0" !== l), l = r + l, l += n, i.isNegative && (l = i.negationSymbol.front + l, l += i.negationSymbol.back), l = l.split(""), s !== v) if (s !== i.radixPoint && s !== i.negationSymbol.front && s !== i.negationSymbol.back) -1 < (o = h.inArray("?", l)) ? l[o] = s : o = t.caret || 0; else if (s === i.radixPoint || s === i.negationSymbol.front || s === i.negationSymbol.back) {
                        var f = h.inArray(s, l);
                        -1 !== f && (o = f)
                    }
                    i.numericInput && (o = l.length - o - 1, l = l.reverse());
                    var m = {
                        caret: s === v || t.pos !== v ? o + (i.numericInput ? -1 : 1) : o,
                        buffer: l,
                        refreshFromBuffer: t.dopost || e.join("") !== l.join("")
                    };
                    return m.refreshFromBuffer ? m : t
                },
                onBeforeWrite: function (e, t, i, n) {
                    if (e) switch (e.type) {
                        case"keydown":
                            return n.postValidation(t, {caret: i, dopost: !0}, n);
                        case"blur":
                        case"checkval":
                            var r;
                            if ((o = n).parseMinMaxOptions === v && (null !== o.min && (o.min = o.min.toString().replace(new RegExp(g.escapeRegex(o.groupSeparator), "g"), ""), "," === o.radixPoint && (o.min = o.min.replace(o.radixPoint, ".")), o.min = isFinite(o.min) ? parseFloat(o.min) : NaN, isNaN(o.min) && (o.min = Number.MIN_VALUE)), null !== o.max && (o.max = o.max.toString().replace(new RegExp(g.escapeRegex(o.groupSeparator), "g"), ""), "," === o.radixPoint && (o.max = o.max.replace(o.radixPoint, ".")), o.max = isFinite(o.max) ? parseFloat(o.max) : NaN, isNaN(o.max) && (o.max = Number.MAX_VALUE)), o.parseMinMaxOptions = "done"), null !== n.min || null !== n.max) {
                                if (r = n.onUnMask(t.join(""), v, h.extend({}, n, {unmaskAsNumber: !0})), null !== n.min && r < n.min) return n.isNegative = n.min < 0, n.postValidation(n.min.toString().replace(".", n.radixPoint).split(""), {
                                    caret: i,
                                    dopost: !0,
                                    placeholder: "0"
                                }, n);
                                if (null !== n.max && r > n.max) return n.isNegative = n.max < 0, n.postValidation(n.max.toString().replace(".", n.radixPoint).split(""), {
                                    caret: i,
                                    dopost: !0,
                                    placeholder: "0"
                                }, n)
                            }
                            return n.postValidation(t, {caret: i, placeholder: "0", event: "blur"}, n);
                        case"_checkval":
                            return {caret: i}
                    }
                    var o
                },
                regex: {
                    integerPart: function (e, t) {
                        return t ? new RegExp("[" + g.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + g.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
                    }, integerNPart: function (e) {
                        return new RegExp("[\\d" + g.escapeRegex(e.groupSeparator) + g.escapeRegex(e.placeholder.charAt(0)) + "]+")
                    }
                },
                definitions: {
                    "~": {
                        validator: function (e, t, i, n, r, o) {
                            var a = n ? new RegExp("[0-9" + g.escapeRegex(r.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e);
                            if (!0 === a) {
                                if (!0 !== r.numericInput && t.validPositions[i] !== v && "~" === t.validPositions[i].match.def && !o) {
                                    var s = t.buffer.join(""),
                                        l = (s = (s = s.replace(new RegExp("[-" + g.escapeRegex(r.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(g.escapeRegex(r.negationSymbol.back) + "$"), "")).split(r.radixPoint);
                                    1 < l.length && (l[1] = l[1].replace(/0/g, r.placeholder.charAt(0))), "0" === l[0] && (l[0] = l[0].replace(/0/g, r.placeholder.charAt(0))), s = l[0] + r.radixPoint + l[1] || "";
                                    var c = t._buffer.join("");
                                    for (s === r.radixPoint && (s = c); null === s.match(g.escapeRegex(c) + "$");) c = c.slice(1);
                                    a = (s = (s = s.replace(c, "")).split(""))[i] === v ? {pos: i, remove: i} : {pos: i}
                                }
                            } else n || e !== r.radixPoint || t.validPositions[i - 1] !== v || (t.buffer[i] = "0", a = {pos: i + 1});
                            return a
                        }, cardinality: 1
                    }, "+": {
                        validator: function (e, t, i, n, r) {
                            return r.allowMinus && ("-" === e || e === r.negationSymbol.front)
                        }, cardinality: 1, placeholder: ""
                    }, "-": {
                        validator: function (e, t, i, n, r) {
                            return r.allowMinus && e === r.negationSymbol.back
                        }, cardinality: 1, placeholder: ""
                    }, ":": {
                        validator: function (e, t, i, n, r) {
                            var o = "[" + g.escapeRegex(r.radixPoint) + "]", a = new RegExp(o).test(e);
                            return a && t.validPositions[i] && t.validPositions[i].match.placeholder === r.radixPoint && (a = {caret: i + 1}), a
                        }, cardinality: 1, placeholder: function (e) {
                            return e.radixPoint
                        }
                    }
                },
                onUnMask: function (e, t, i) {
                    if ("" === t && !0 === i.nullable) return t;
                    var n = e.replace(i.prefix, "");
                    return n = (n = n.replace(i.suffix, "")).replace(new RegExp(g.escapeRegex(i.groupSeparator), "g"), ""), "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(g.escapeRegex.call(this, i.radixPoint), ".")), n = (n = n.replace(new RegExp("^" + g.escapeRegex(i.negationSymbol.front)), "-")).replace(new RegExp(g.escapeRegex(i.negationSymbol.back) + "$"), ""), Number(n)) : n
                },
                isComplete: function (e, t) {
                    var i = e.join("");
                    if (e.slice().join("") !== i) return !1;
                    var n = i.replace(t.prefix, "");
                    return n = (n = n.replace(t.suffix, "")).replace(new RegExp(g.escapeRegex(t.groupSeparator), "g"), ""), "," === t.radixPoint && (n = n.replace(g.escapeRegex(t.radixPoint), ".")), isFinite(n)
                },
                onBeforeMask: function (e, t) {
                    if (t.isNegative = v, e = e.toString().charAt(e.length - 1) === t.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== t.radixPoint && isFinite(e)) {
                        var i = e.split("."), n = "" !== t.groupSeparator ? parseInt(t.groupSize) : 0;
                        2 === i.length && (i[0].length > n || i[1].length > n || i[0].length <= n && i[1].length < n) && (e = e.replace(".", t.radixPoint))
                    }
                    var r = e.match(/,/g), o = e.match(/\./g);
                    if (e = o && r ? o.length > r.length ? (e = e.replace(/\./g, "")).replace(",", t.radixPoint) : r.length > o.length ? (e = e.replace(/,/g, "")).replace(".", t.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(g.escapeRegex(t.groupSeparator), "g"), ""), 0 === t.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== t.radixPoint && isFinite(t.digits) && -1 !== e.indexOf(t.radixPoint)) {
                        var a = e.split(t.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(t.digits) < a.toString().length) {
                            var s = Math.pow(10, parseInt(t.digits));
                            e = e.replace(g.escapeRegex(t.radixPoint), "."), e = (e = Math.round(parseFloat(e) * s) / s).toString().replace(".", t.radixPoint)
                        }
                    }
                    return e
                },
                canClearPosition: function (e, t, i, n, r) {
                    var o = e.validPositions[t],
                        a = o.input !== r.radixPoint || null !== e.validPositions[t].match.fn && !1 === r.decimalProtect || o.input === r.radixPoint && e.validPositions[t + 1] && null === e.validPositions[t + 1].match.fn || isFinite(o.input) || t === i || o.input === r.groupSeparator || o.input === r.negationSymbol.front || o.input === r.negationSymbol.back;
                    return !a || "+" !== o.match.nativeDef && "-" !== o.match.nativeDef || (r.isNegative = !1), a
                },
                onKeyDown: function (e, t, i, n) {
                    var r = h(this);
                    if (e.ctrlKey) switch (e.keyCode) {
                        case g.keyCode.UP:
                            r.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)), r.trigger("setvalue");
                            break;
                        case g.keyCode.DOWN:
                            r.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)), r.trigger("setvalue")
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {alias: "numeric"},
            integer: {alias: "numeric", digits: 0, radixPoint: ""},
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), g
    }) ? n.apply(t, r) : n) && (e.exports = o)
}, function (e, t, i) {
    "use strict";
    var n, r, o;
    "function" == typeof Symbol && Symbol.iterator, r = [i(0), i(1)], void 0 !== (o = "function" == typeof (n = function (a, t) {
        function i(e, t) {
            var i = (e.mask || e).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                n = (t.mask || t).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                r = (e.mask || e).split("#")[0], o = (t.mask || t).split("#")[0];
            return 0 === o.indexOf(r) ? -1 : 0 === r.indexOf(o) ? 1 : i.localeCompare(n)
        }

        var n = t.prototype.analyseMask;
        return t.prototype.analyseMask = function (l, e, o) {
            var c = {};
            return o.phoneCodes && (o.phoneCodes && 1e3 < o.phoneCodes.length && (function e(t, i, n) {
                n = n || c, "" !== (i = i || "") && (n[i] = {});
                for (var r = "", o = n[i] || n, a = t.length - 1; 0 <= a; a--) o[r = (l = t[a].mask || t[a]).substr(0, 1)] = o[r] || [], o[r].unshift(l.substr(1)), t.splice(a, 1);
                for (var s in o) 500 < o[s].length && e(o[s].slice(), s, o)
            }((l = l.substr(1, l.length - 2)).split(o.groupmarker.end + o.alternatormarker + o.groupmarker.start)), l = function e(t) {
                var i = "", n = [];
                for (var r in t) a.isArray(t[r]) ? 1 === t[r].length ? n.push(r + t[r]) : n.push(r + o.groupmarker.start + t[r].join(o.groupmarker.end + o.alternatormarker + o.groupmarker.start) + o.groupmarker.end) : n.push(r + e(t[r]));
                return 1 === n.length ? i += n[0] : i += o.groupmarker.start + n.join(o.groupmarker.end + o.alternatormarker + o.groupmarker.start) + o.groupmarker.end, i
            }(c)), l = l.replace(/9/g, "\\9")), n.call(this, l, e, o)
        }, t.extendAliases({
            abstractphone: {
                groupmarker: {start: "<", end: ">"},
                countrycode: "",
                phoneCodes: [],
                mask: function (e) {
                    return e.definitions = {"#": t.prototype.definitions[9]}, e.phoneCodes.sort(i)
                },
                keepStatic: !0,
                onBeforeMask: function (e, t) {
                    var i = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (1 < i.indexOf(t.countrycode) || -1 === i.indexOf(t.countrycode)) && (i = "+" + t.countrycode + i), i
                },
                onUnMask: function (e, t, i) {
                    return e.replace(/[()#-]/g, "")
                },
                inputmode: "tel"
            }
        }), t
    }) ? n.apply(t, r) : n) && (e.exports = o)
}, function (e, t, i) {
    "use strict";
    var n, r, o;
    "function" == typeof Symbol && Symbol.iterator, r = [i(0), i(1)], void 0 !== (o = "function" == typeof (n = function (x, e) {
        return e.extendAliases({
            Regex: {
                mask: "r",
                greedy: !1,
                repeat: "*",
                regex: null,
                regexTokens: null,
                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                quantifierFilter: /[0-9]+[^,]/,
                isComplete: function (e, t) {
                    return new RegExp(t.regex, t.casing ? "i" : "").test(e.join(""))
                },
                definitions: {
                    r: {
                        validator: function (e, t, i, n, g) {
                            function c(e, t) {
                                this.matches = [], this.isGroup = e || !1, this.isQuantifier = t || !1, this.quantifier = {
                                    min: 1,
                                    max: 1
                                }, this.repeaterPart = void 0
                            }

                            function v(e, t) {
                                var i = !1;
                                t && (k += "(", b++);
                                for (var n = 0; n < e.matches.length; n++) {
                                    var r = e.matches[n];
                                    if (!0 === r.isGroup) i = v(r, !0); else if (!0 === r.isQuantifier) {
                                        var o = x.inArray(r, e.matches), a = e.matches[o - 1], s = k;
                                        if (isNaN(r.quantifier.max)) {
                                            for (; r.repeaterPart && r.repeaterPart !== k && r.repeaterPart.length > k.length && !(i = v(a, !0));) ;
                                            (i = i || v(a, !0)) && (r.repeaterPart = k), k = s + r.quantifier.max
                                        } else {
                                            for (var l = 0, c = r.quantifier.max - 1; l < c && !(i = v(a, !0)); l++) ;
                                            k = s + "{" + r.quantifier.min + "," + r.quantifier.max + "}"
                                        }
                                    } else if (void 0 !== r.matches) for (var d = 0; d < r.length && !(i = v(r[d], t)); d++) ; else {
                                        var p;
                                        if ("[" == r.charAt(0)) {
                                            for (p = k, p += r, m = 0; m < b; m++) p += ")";
                                            i = (h = new RegExp("^(" + p + ")$", g.casing ? "i" : "")).test(y)
                                        } else for (var u = 0, f = r.length; u < f; u++) if ("\\" !== r.charAt(u)) {
                                            p = k, p = (p += r.substr(0, u + 1)).replace(/\|$/, "");
                                            for (var m = 0; m < b; m++) p += ")";
                                            var h = new RegExp("^(" + p + ")$", g.casing ? "i" : "");
                                            if (i = h.test(y)) break
                                        }
                                        k += r
                                    }
                                    if (i) break
                                }
                                return t && (k += ")", b--), i
                            }

                            var y, d, r = t.buffer.slice(), k = "", o = !1, b = 0;
                            null === g.regexTokens && function () {
                                var e, t, i = new c, n = [];
                                for (g.regexTokens = []; e = g.tokenizer.exec(g.regex);) switch ((t = e[0]).charAt(0)) {
                                    case"(":
                                        n.push(new c(!0));
                                        break;
                                    case")":
                                        d = n.pop(), 0 < n.length ? n[n.length - 1].matches.push(d) : i.matches.push(d);
                                        break;
                                    case"{":
                                    case"+":
                                    case"*":
                                        var r = new c(!1, !0), o = (t = t.replace(/[{}]/g, "")).split(","),
                                            a = isNaN(o[0]) ? o[0] : parseInt(o[0]),
                                            s = 1 === o.length ? a : isNaN(o[1]) ? o[1] : parseInt(o[1]);
                                        if (r.quantifier = {min: a, max: s}, 0 < n.length) {
                                            var l = n[n.length - 1].matches;
                                            (e = l.pop()).isGroup || ((d = new c(!0)).matches.push(e), e = d), l.push(e), l.push(r)
                                        } else (e = i.matches.pop()).isGroup || ((d = new c(!0)).matches.push(e), e = d), i.matches.push(e), i.matches.push(r);
                                        break;
                                    default:
                                        0 < n.length ? n[n.length - 1].matches.push(t) : i.matches.push(t)
                                }
                                0 < i.matches.length && g.regexTokens.push(i)
                            }(), r.splice(i, 0, e), y = r.join("");
                            for (var a = 0; a < g.regexTokens.length; a++) {
                                var s = g.regexTokens[a];
                                if (o = v(s, s.isGroup)) break
                            }
                            return o
                        }, cardinality: 1
                    }
                }
            }
        }), e
    }) ? n.apply(t, r) : n) && (e.exports = o)
}, function (e, t, i) {
    "use strict";
    var n, r, o, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r = [i(2), i(1)], void 0 !== (o = "function" == typeof (n = function (r, o) {
        return void 0 === r.fn.inputmask && (r.fn.inputmask = function (e, t) {
            var i, n = this[0];
            if (void 0 === t && (t = {}), "string" == typeof e) switch (e) {
                case"unmaskedvalue":
                    return n && n.inputmask ? n.inputmask.unmaskedvalue() : r(n).val();
                case"remove":
                    return this.each(function () {
                        this.inputmask && this.inputmask.remove()
                    });
                case"getemptymask":
                    return n && n.inputmask ? n.inputmask.getemptymask() : "";
                case"hasMaskedValue":
                    return !(!n || !n.inputmask) && n.inputmask.hasMaskedValue();
                case"isComplete":
                    return !n || !n.inputmask || n.inputmask.isComplete();
                case"getmetadata":
                    return n && n.inputmask ? n.inputmask.getmetadata() : void 0;
                case"setvalue":
                    r(n).val(t), n && void 0 === n.inputmask && r(n).triggerHandler("setvalue");
                    break;
                case"option":
                    if ("string" != typeof t) return this.each(function () {
                        if (void 0 !== this.inputmask) return this.inputmask.option(t)
                    });
                    if (n && void 0 !== n.inputmask) return n.inputmask.option(t);
                    break;
                default:
                    return t.alias = e, i = new o(t), this.each(function () {
                        i.mask(this)
                    })
            } else {
                if ("object" == (void 0 === e ? "undefined" : a(e))) return i = new o(e), void 0 === e.mask && void 0 === e.alias ? this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(e);
                    i.mask(this)
                }) : this.each(function () {
                    i.mask(this)
                });
                if (void 0 === e) return this.each(function () {
                    (i = new o(t)).mask(this)
                })
            }
        }), r.fn.inputmask
    }) ? n.apply(t, r) : n) && (e.exports = o)
}]), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (c) {
    "use strict";
    var r, a = window.Slick || {};
    (r = 0, a = function (e, t) {
        var i, n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = r++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, a.prototype.addSlide = a.prototype.slickAdd = function (e, t, i) {
        var n = this;
        if ("boolean" == typeof t) i = t, t = null; else if (t < 0 || t >= n.slideCount) return !1;
        n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (e, t) {
            c(t).attr("data-slick-index", e)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, a.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed)
        }
    }, a.prototype.animateSlide = function (e, t) {
        var i = {}, n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({left: e}, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({top: e}, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({animStart: n.currentLeft}).animate({animStart: e}, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
            },
            complete: function () {
                t && t.call()
            }
        })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function () {
            n.disableTransition(), t.call()
        }, n.options.speed))
    }, a.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)), e
    }, a.prototype.asNavFor = function (t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function () {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, a.prototype.applyTransition = function (e) {
        var t = this, i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, a.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, a.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, a.prototype.autoPlayIterator = function () {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, a.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, a.prototype.buildDots = function () {
        var e, t, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, a.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, a.prototype.buildRows = function () {
        var e, t, i, n, r, o, a, s = this;
        if (n = document.createDocumentFragment(), o = s.$slider.children(), 1 < s.options.rows) {
            for (a = s.options.slidesPerRow * s.options.rows, r = Math.ceil(o.length / a), e = 0; e < r; e++) {
                var l = document.createElement("div");
                for (t = 0; t < s.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < s.options.slidesPerRow; i++) {
                        var d = e * a + (t * s.options.slidesPerRow + i);
                        o.get(d) && c.appendChild(o.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            s.$slider.empty().append(n), s.$slider.children().children().children().css({
                width: 100 / s.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, a.prototype.checkResponsive = function (e, t) {
        var i, n, r, o = this, a = !1, s = o.$slider.width(), l = window.innerWidth || c(window).width();
        if ("window" === o.respondTo ? r = l : "slider" === o.respondTo ? r = s : "min" === o.respondTo && (r = Math.min(l, s)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
            for (i in n = null, o.breakpoints) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[i] && (n = o.breakpoints[i]) : r > o.breakpoints[i] && (n = o.breakpoints[i]));
            null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || t) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = n), e || !1 === a || o.$slider.trigger("breakpoint", [o, a])
        }
    }, a.prototype.changeSlide = function (e, t) {
        var i, n, r = this, o = c(e.currentTarget);
        switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                n = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, t);
                break;
            case"next":
                n = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, t);
                break;
            case"index":
                var a = 0 === e.data.index ? 0 : e.data.index || o.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(a), !1, t), o.children().trigger("focus");
                break;
            default:
                return
        }
    }, a.prototype.checkNavigable = function (e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1]; else for (var n in t) {
            if (e < t[n]) {
                e = i;
                break
            }
            i = t[n]
        }
        return e
    }, a.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, a.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, a.prototype.cleanUpRows = function () {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, a.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, a.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, a.prototype.disableTransition = function (e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, a.prototype.fadeSlide = function (e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({zIndex: i.options.zIndex}), i.$slides.eq(e).animate({opacity: 1}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function () {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, a.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, a.prototype.filterSlides = a.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, a.prototype.focusHandler = function () {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function () {
                i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, a.prototype.getDotCount = function () {
        var e = this, t = 0, i = 0, n = 0;
        if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++n; else for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) n = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }, a.prototype.getLeft = function (e) {
        var t, i, n, r, o = this, a = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? r = -1.5 : 1 === o.options.slidesToShow && (r = -2)), a = i * o.options.slidesToShow * r), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, a = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, a = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, a = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (a = o.slideOffset = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + a, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
    }, a.prototype.getOption = a.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, a.prototype.getNavigableIndexes = function () {
        var e, t = this, i = 0, n = 0, r = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return r
    }, a.prototype.getSlick = function () {
        return this
    }, a.prototype.getSlideCount = function () {
        var i, n, r = this;
        return n = !0 === r.options.centerMode ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function (e, t) {
            if (t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * r.swipeLeft) return i = t, !1
        }), Math.abs(c(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
    }, a.prototype.goTo = a.prototype.slickGoTo = function (e, t) {
        this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
    }, a.prototype.init = function (e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, a.prototype.initADA = function () {
        var i = this, n = Math.ceil(i.slideCount / i.options.slidesToShow),
            r = i.getNavigableIndexes().filter(function (e) {
                return 0 <= e && e < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (e) {
            var t = r.indexOf(e);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + i.instanceUid + e,
                tabindex: -1
            }), -1 !== t && c(this).attr({"aria-describedby": "slick-slide-control" + i.instanceUid + t})
        }), i.$dots.attr("role", "tablist").find("li").each(function (e) {
            var t = r[e];
            c(this).attr({role: "presentation"}), c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + i.instanceUid + e,
                "aria-controls": "slick-slide" + i.instanceUid + t,
                "aria-label": e + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(i.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.$slides.eq(e).attr("tabindex", 0);
        i.activateADA()
    }, a.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, a.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (c("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, a.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }, a.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
    }, a.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, a.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
    }, a.prototype.lazyLoad = function () {
        function e(e) {
            c("img[data-lazy]", e).each(function () {
                var e = c(this), t = c(this).attr("data-lazy"), i = c(this).attr("data-srcset"),
                    n = c(this).attr("data-sizes") || o.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        i && (e.attr("srcset", i), n && e.attr("sizes", n)), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, t])
                }, r.src = t
            })
        }

        var t, i, n, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (0 < i && i--, n <= o.slideCount && n++)), t = o.$slider.find(".slick-slide").slice(i, n), "anticipated" === o.options.lazyLoad) for (var r = i - 1, a = n, s = o.$slider.find(".slick-slide"), l = 0; l < o.options.slidesToScroll; l++) r < 0 && (r = o.slideCount - 1), t = (t = t.add(s.eq(r))).add(s.eq(a)), r--, a++;
        e(t), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, a.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, a.prototype.next = a.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, a.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, a.prototype.pause = a.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, a.prototype.play = a.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, a.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, a.prototype.prev = a.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, a.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, a.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, i, n, r, o, a = this, s = c("img[data-lazy]", a.$slider);
        s.length ? (t = s.first(), i = t.attr("data-lazy"), n = t.attr("data-srcset"), r = t.attr("data-sizes") || a.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function () {
            n && (t.attr("srcset", n), r && t.attr("sizes", r)), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, t, i]), a.progressiveLazyLoad()
        }, o.onerror = function () {
            e < 3 ? setTimeout(function () {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, t, i]), a.progressiveLazyLoad())
        }, o.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }, a.prototype.refresh = function (e) {
        var t, i, n = this;
        i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {currentSlide: t}), n.init(), e || n.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, a.prototype.registerBreakpoints = function () {
        var e, t, i, n = this, r = n.options.responsive || null;
        if ("array" === c.type(r) && r.length) {
            for (e in n.respondTo = n.options.respondTo || "window", r) if (i = n.breakpoints.length - 1, r.hasOwnProperty(e)) {
                for (t = r[e].breakpoint; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                n.breakpoints.push(t), n.breakpointSettings[t] = r[e].settings
            }
            n.breakpoints.sort(function (e, t) {
                return n.options.mobileFirst ? e - t : t - e
            })
        }
    }, a.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, a.prototype.resize = function () {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, a.prototype.removeSlide = a.prototype.slickRemove = function (e, t, i) {
        var n = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, a.prototype.setCSS = function (e) {
        var t, i, n = this, r = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", r[n.positionProp] = e, !1 === n.transformsEnabled || (!(r = {}) === n.cssTransitions ? r[n.animType] = "translate(" + t + ", " + i + ")" : r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(r)
    }, a.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, a.prototype.setFade = function () {
        var i, n = this;
        n.$slides.each(function (e, t) {
            i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({position: "relative", left: i, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
        }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
    }, a.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, a.prototype.setOption = a.prototype.slickSetOption = function () {
        var e, t, i, n, r, o = this, a = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[i] = n; else if ("multiple" === r) c.each(i, function (e, t) {
            o.options[e] = t
        }); else if ("responsive" === r) for (t in n) if ("array" !== c.type(o.options.responsive)) o.options.responsive = [n[t]]; else {
            for (e = o.options.responsive.length - 1; 0 <= e;) o.options.responsive[e].breakpoint === n[t].breakpoint && o.options.responsive.splice(e, 1), e--;
            o.options.responsive.push(n[t])
        }
        a && (o.unload(), o.reinit())
    }, a.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, a.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, a.prototype.setSlideClasses = function (e) {
        var t, i, n, r, o = this;
        if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode) {
            var a = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t <= e && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + a, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e, i.slice(n - t + 1 + a, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, a.prototype.setupInfinite = function () {
        var e, t, i, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
            for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i + n.slideCount; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                c(this).attr("id", "")
            })
        }
    }, a.prototype.interrupt = function (e) {
        e || this.autoPlay(), this.interrupted = e
    }, a.prototype.selectHandler = function (e) {
        var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
            i = parseInt(t.attr("data-slick-index"));
        i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
    }, a.prototype.slideHandler = function (e, t, i) {
        var n, r, o, a, s, l = null, c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function () {
            c.postSlide(n)
        }) : c.postSlide(n)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function () {
            c.postSlide(n)
        }) : c.postSlide(n)); else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (s = (s = c.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(r, function () {
                c.postSlide(r)
            })) : c.postSlide(r), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, function () {
                c.postSlide(r)
            }) : c.postSlide(r)
        }
    }, a.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, a.prototype.swipeDirection = function () {
        var e, t, i, n, r = this;
        return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === r.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === r.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
    }, a.prototype.swipeEnd = function (e) {
        var t, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
        if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case"left":
                case"down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, a.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
                t.swipeStart(e);
                break;
            case"move":
                t.swipeMove(e);
                break;
            case"end":
                t.swipeEnd(e)
        }
    }, a.prototype.swipeMove = function (e) {
        var t, i, n, r, o, a, s = this;
        return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || s.scrolling || o && 1 !== o.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))), !s.options.verticalSwiping && !s.swiping && 4 < a ? !(s.scrolling = !0) : (!0 === s.options.verticalSwiping && (s.touchObject.swipeLength = a), i = s.swipeDirection(), void 0 !== e.originalEvent && 4 < s.touchObject.swipeLength && (s.swiping = !0, e.preventDefault()), r = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, (s.touchObject.edgeHit = !1) === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + n * r : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * r, !0 === s.options.verticalSwiping && (s.swipeLeft = t + n * r), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))))
    }, a.prototype.swipeStart = function (e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, a.prototype.unload = function () {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, a.prototype.unslick = function (e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, a.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, a.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, a.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function () {
        var e, t, i = this, n = arguments[0], r = Array.prototype.slice.call(arguments, 1), o = i.length;
        for (e = 0; e < o; e++) if ("object" == typeof n || void 0 === n ? i[e].slick = new a(i[e], n) : t = i[e].slick[n].apply(i[e].slick, r), void 0 !== t) return t;
        return i
    }
}), function (i) {
    "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function (e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), i(t), t
    } : i(jQuery)
}(function (_) {
    function n(e, t, i) {
        "string" == typeof i && (i = {className: i}), this.options = m(o, _.isPlainObject(i) ? i : {}), this.loadHTML(), this.wrapper = _(r.html), this.options.clickToHide && this.wrapper.addClass(l + "-hidable"), this.wrapper.data(l, this), this.arrow = this.wrapper.find("." + l + "-arrow"), this.container = this.wrapper.find("." + l + "-container"), this.container.append(this.userContainer), e && e.length && (this.elementType = e.attr("type"), this.originalElement = e, this.elem = v(e), this.elem.data(l, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(t)
    }

    var O = [].indexOf || function (e) {
            for (var t = 0, i = this.length; t < i; t++) if (t in this && this[t] === e) return t;
            return -1
        }, a = "notify", l = a + "js", s = a + "!blank",
        E = {t: "top", m: "middle", b: "bottom", l: "left", c: "center", r: "right"}, M = ["l", "c", "r"],
        $ = ["t", "m", "b"], N = ["t", "b", "l", "r"], z = {t: "b", m: null, b: "t", l: "r", c: null, r: "l"}, c = {},
        r = {
            name: "core",
            html: '<div class="' + l + '-wrapper">\n\t<div class="' + l + '-arrow"></div>\n\t<div class="' + l + '-container"></div>\n</div>',
            css: "." + l + "-corner {\n\tposition: fixed;\n\tmargin: 5px;\n\tz-index: 1050;\n}\n\n." + l + "-corner ." + l + "-wrapper,\n." + l + "-corner ." + l + "-container {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\twidth: inherit;\n\tmargin: 3px;\n}\n\n." + l + "-wrapper {\n\tz-index: 1;\n\tposition: absolute;\n\tdisplay: inline-block;\n\theight: 0;\n\twidth: 0;\n}\n\n." + l + "-container {\n\tdisplay: none;\n\tz-index: 1;\n\tposition: absolute;\n}\n\n." + l + "-hidable {\n\tcursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n\tposition: relative;\n}\n\n." + l + "-arrow {\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 0;\n\theight: 0;\n}"
        }, d = {"border-radius": ["-webkit-", "-moz-"]}, e = function (e, i) {
            if (!e) throw"Missing Style name";
            if (!i) throw"Missing Style definition";
            if (!i.html) throw"Missing Style HTML";
            var t = c[e];
            t && t.cssElem && (window.console && console.warn(a + ": overwriting style '" + e + "'"), c[e].cssElem.remove()), i.name = e, c[e] = i;
            var r = "";
            i.classes && _.each(i.classes, function (e, t) {
                return r += "." + l + "-" + i.name + "-" + e + " {\n", _.each(t, function (i, n) {
                    return d[i] && _.each(d[i], function (e, t) {
                        return r += "\t" + t + i + ": " + n + ";\n"
                    }), r += "\t" + i + ": " + n + ";\n"
                }), r += "}\n"
            }), i.css && (r += "/* styles for " + i.name + " */\n" + i.css), r && (i.cssElem = p(r), i.cssElem.attr("id", "notify-" + i.name));
            var n = {}, o = _(i.html);
            u("html", o, n), u("text", o, n), i.fields = n
        }, p = function (t) {
            var i;
            (i = h("style")).attr("type", "text/css"), _("head").append(i);
            try {
                i.html(t)
            } catch (e) {
                i[0].styleSheet.cssText = t
            }
            return i
        }, u = function (t, e, i) {
            var n;
            return "html" !== t && (t = "text"), f(e, "[" + (n = "data-notify-" + t) + "]").each(function () {
                var e;
                (e = _(this).attr(n)) || (e = s), i[e] = t
            })
        }, f = function (e, t) {
            return e.is(t) ? e : e.find(t)
        }, o = {
            clickToHide: !0,
            autoHide: !0,
            autoHideDelay: 5e3,
            arrowShow: !0,
            arrowSize: 5,
            breakNewLines: !0,
            elementPosition: "bottom",
            globalPosition: "top right",
            style: "bootstrap",
            className: "error",
            showAnimation: "slideDown",
            showDuration: 400,
            hideAnimation: "slideUp",
            hideDuration: 200,
            gap: 5
        }, m = function (e, t) {
            var i;
            return (i = function () {
            }).prototype = e, _.extend(!0, new i, t)
        }, h = function (e) {
            return _("<" + e + "></" + e + ">")
        }, g = {}, v = function (i) {
            return i.is("[type=radio]") && (i = i.parents("form:first").find("[type=radio]").filter(function (e, t) {
                return _(t).attr("name") === i.attr("name")
            }).first()), i
        }, R = function (e, t, i) {
            var n;
            if ("string" == typeof i) i = parseInt(i, 10); else if ("number" != typeof i) return;
            if (!isNaN(i)) return n = E[z[t.charAt(0)]], t, void 0 !== e[n] && (t = E[n.charAt(0)], i = -i), void 0 === e[t] ? e[t] = i : e[t] += i, null
        }, I = function (e, t, i) {
            if ("l" === e || "t" === e) return 0;
            if ("c" === e || "m" === e) return i / 2 - t / 2;
            if ("r" === e || "b" === e) return i - t;
            throw"Invalid alignment"
        }, y = function (e) {
            return y.e = y.e || h("div"), y.e.text(e).html()
        };
    n.prototype.loadHTML = function () {
        var e;
        e = this.getStyle(), this.userContainer = _(e.html), this.userFields = e.fields
    }, n.prototype.show = function (e, t) {
        var i, n, r, o, a, s;
        if (n = function () {
            if (!e && !s.elem && s.destroy(), t) return t()
        }, a = 0 < (s = this).container.parent().parents(":hidden").length, r = this.container.add(this.arrow), i = [], a && e) o = "show"; else if (a && !e) o = "hide"; else if (!a && e) o = this.options.showAnimation, i.push(this.options.showDuration); else {
            if (a || e) return n();
            o = this.options.hideAnimation, i.push(this.options.hideDuration)
        }
        return i.push(n), r[o].apply(r, i)
    }, n.prototype.setGlobalPosition = function () {
        var e = this.getPosition(), t = e[0], i = e[1], n = E[t], r = E[i], o = t + "|" + i, a = g[o];
        if (!a || !document.body.contains(a[0])) {
            a = g[o] = h("div");
            var s = {};
            s[n] = 0, "middle" === r ? s.top = "45%" : "center" === r ? s.left = "45%" : s[r] = 0, a.css(s).addClass(l + "-corner"), _("body").append(a)
        }
        return a.prepend(this.wrapper)
    }, n.prototype.setElementPosition = function () {
        var e, t, i, n, r, o, a, s, l, c, d, p, u, f, m, h, g, v, y, k, b, x, w, S, A, C, T, P;
        for (w = (C = this.getPosition())[0], x = C[1], C[2], d = this.elem.position(), s = this.elem.outerHeight(), p = this.elem.outerWidth(), l = this.elem.innerHeight(), c = this.elem.innerWidth(), P = this.wrapper.position(), r = this.container.height(), o = this.container.width(), v = E[w], (a = {})[b = E[k = z[w]]] = "b" === w ? s : "r" === w ? p : 0, R(a, "top", d.top - P.top), R(a, "left", d.left - P.left), f = 0, h = (T = ["top", "left"]).length; f < h; f++) S = T[f], (y = parseInt(this.elem.css("margin-" + S), 10)) && R(a, S, y);
        if (u = Math.max(0, this.options.gap - (this.options.arrowShow ? i : 0)), R(a, b, u), this.options.arrowShow) {
            for (i = this.options.arrowSize, t = _.extend({}, a), e = this.userContainer.css("border-color") || this.userContainer.css("border-top-color") || this.userContainer.css("background-color") || "white", m = 0, g = N.length; m < g; m++) A = E[S = N[m]], S !== k && (n = A === v ? e : "transparent", t["border-" + A] = i + "px solid " + n);
            R(a, E[k], i), 0 <= O.call(N, x) && R(t, E[x], 2 * i)
        } else this.arrow.hide();
        if (0 <= O.call($, w) ? (R(a, "left", I(x, o, p)), t && R(t, "left", I(x, i, c))) : 0 <= O.call(M, w) && (R(a, "top", I(x, r, s)), t && R(t, "top", I(x, i, l))), this.container.is(":visible") && (a.display = "block"), this.container.removeAttr("style").css(a), t) return this.arrow.removeAttr("style").css(t)
    }, n.prototype.getPosition = function () {
        var e, t, i, n, r, o, a, s, l, c;
        if (s = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), l = s, c = [], _.each(l.split(/\W+/), function (e, t) {
            var i;
            if (i = t.toLowerCase().charAt(0), E[i]) return c.push(i)
        }), 0 === (e = c).length && (e[0] = "b"), t = e[0], O.call(N, t) < 0) throw"Must be one of [" + N + "]";
        return (1 === e.length || (i = e[0], 0 <= O.call($, i) && (n = e[1], O.call(M, n) < 0)) || (r = e[0], 0 <= O.call(M, r) && (o = e[1], O.call($, o) < 0))) && (e[1] = (a = e[0], 0 <= O.call(M, a) ? "m" : "l")), 2 === e.length && (e[2] = e[1]), e
    }, n.prototype.getStyle = function (e) {
        var t;
        if (e || (e = this.options.style), e || (e = "default"), !(t = c[e])) throw"Missing style: " + e;
        return t
    }, n.prototype.updateClasses = function () {
        var e, t;
        return e = ["base"], _.isArray(this.options.className) ? e = e.concat(this.options.className) : this.options.className && e.push(this.options.className), t = this.getStyle(), e = _.map(e, function (e) {
            return l + "-" + t.name + "-" + e
        }).join(" "), this.userContainer.attr("class", e)
    }, n.prototype.run = function (e, t) {
        var i, n, r, o, a;
        if (_.isPlainObject(t) ? _.extend(this.options, t) : "string" === _.type(t) && (this.options.className = t), !this.container || e) {
            if (this.container || e) {
                for (r in n = {}, _.isPlainObject(e) ? n = e : n[s] = e, n) i = n[r], (o = this.userFields[r]) && ("text" === o && (i = y(i), this.options.breakNewLines && (i = i.replace(/\n/g, "<br/>"))), a = r === s ? "" : "=" + r, f(this.userContainer, "[data-notify-" + o + a + "]").html(i));
                this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide && (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(this.show.bind(this, !1), this.options.autoHideDelay))
            }
        } else this.show(!1)
    }, n.prototype.destroy = function () {
        this.wrapper.data(l, null), this.wrapper.remove()
    }, _[a] = function (e, t, i) {
        return e && e.nodeName || e.jquery ? _(e)[a](t, i) : (i = t, new n(null, t = e, i)), e
    }, _.fn[a] = function (t, i) {
        return _(this).each(function () {
            var e = v(_(this)).data(l);
            e && e.destroy();
            new n(_(this), t, i)
        }), this
    }, _.extend(_[a], {
        defaults: function (e) {
            return _.extend(o, e)
        }, addStyle: e, removeStyle: function (e) {
            if (!e) throw"Missing Style name";
            c[e] && delete c[e]
        }, pluginOptions: o, getStyle: function (e) {
            return c[e]
        }, insertCSS: p
    }), e("bootstrap", {
        html: "<div>\n<span data-notify-text></span>\n</div>", classes: {
            base: {
                "font-weight": "bold",
                padding: "8px 15px 8px 14px",
                "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
                "background-color": "#fcf8e3",
                border: "1px solid #fbeed5",
                "border-radius": "4px",
                "white-space": "nowrap",
                "padding-left": "25px",
                "background-repeat": "no-repeat",
                "background-position": "3px 7px"
            },
            error: {
                color: "#B94A48",
                "background-color": "#F2DEDE",
                "border-color": "#EED3D7",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
            },
            success: {
                color: "#468847",
                "background-color": "#DFF0D8",
                "border-color": "#D6E9C6",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
            },
            info: {
                color: "#3A87AD",
                "background-color": "#D9EDF7",
                "border-color": "#BCE8F1",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
            },
            warn: {
                color: "#C09853",
                "background-color": "#FCF8E3",
                "border-color": "#FBEED5",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
            }
        }
    }), _(function () {
        p(r.css).attr("id", "core-notify"), _(document).on("click", "." + l + "-hidable", function (e) {
            _(this).trigger("notify-hide")
        }), _(document).on("notify-hide", "." + l + "-wrapper", function (e) {
            var t = _(this).data(l);
            t && t.show(!1)
        })
    })
}), function (e, t) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], t); else if ("undefined" != typeof exports) t(module, exports); else {
        var i = {exports: {}};
        t(i, i.exports), e.WOW = i.exports
    }
}(this, function (e, t) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        return 0 <= t.indexOf(e)
    }

    function n(e, t, i) {
        null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
    }

    function o(e, t, i) {
        null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a, s, l = function () {
            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, i) {
                return t && n(e.prototype, t), i && n(e, i), e
            }
        }(), c = window.WeakMap || window.MozWeakMap || function () {
            function e() {
                i(this, e), this.keys = [], this.values = []
            }

            return l(e, [{
                key: "get", value: function (e) {
                    for (var t = 0; t < this.keys.length; t++) {
                        if (this.keys[t] === e) return this.values[t]
                    }
                }
            }, {
                key: "set", value: function (e, t) {
                    for (var i = 0; i < this.keys.length; i++) {
                        if (this.keys[i] === e) return this.values[i] = t, this
                    }
                    return this.keys.push(e), this.values.push(t), this
                }
            }]), e
        }(),
        d = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (s = a = function () {
            function e() {
                i(this, e), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
            }

            return l(e, [{
                key: "observe", value: function () {
                }
            }]), e
        }(), a.notSupported = !0, s), p = window.getComputedStyle || function (i) {
            var n = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function (e) {
                    "float" === e && (e = "styleFloat"), n.test(e) && e.replace(n, function (e, t) {
                        return t.toUpperCase()
                    });
                    var t = i.currentStyle;
                    return (null != t ? t[e] : void 0) || null
                }
            }
        }, u = function () {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                i(this, t), this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                    resetAnimation: !0
                }, this.animate = "requestAnimationFrame" in window ? function (e) {
                    return window.requestAnimationFrame(e)
                } : function (e) {
                    return e()
                }, this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = function (e, t) {
                    for (var i in t) if (null == e[i]) {
                        var n = t[i];
                        e[i] = n
                    }
                    return e
                }(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new c, this.wowEvent = function (e) {
                    var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
                        i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                        n = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3], r = void 0;
                    return null != document.createEvent ? (r = document.createEvent("CustomEvent")).initCustomEvent(e, t, i, n) : null != document.createEventObject ? (r = document.createEventObject()).eventType = e : r.eventName = e, r
                }(this.config.boxClass)
            }

            return l(t, [{
                key: "init", value: function () {
                    this.element = window.document.documentElement, r(document.readyState, ["interactive", "complete"]) ? this.start() : n(document, "DOMContentLoaded", this.start), this.finished = []
                }
            }, {
                key: "start", value: function () {
                    var o = this;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (var e = 0; e < this.boxes.length; e++) {
                        var t = this.boxes[e];
                        this.applyStyle(t, !0)
                    }
                    (this.disabled() || (n(this.config.scrollContainer || window, "scroll", this.scrollHandler), n(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) && new d(function (e) {
                        for (var t = 0; t < e.length; t++) for (var i = e[t], n = 0; n < i.addedNodes.length; n++) {
                            var r = i.addedNodes[n];
                            o.doSync(r)
                        }
                    }).observe(document.body, {childList: !0, subtree: !0})
                }
            }, {
                key: "stop", value: function () {
                    this.stopped = !0, o(this.config.scrollContainer || window, "scroll", this.scrollHandler), o(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                }
            }, {
                key: "sync", value: function () {
                    d.notSupported && this.doSync(this.element)
                }
            }, {
                key: "doSync", value: function (e) {
                    if (null != e || (e = this.element), 1 === e.nodeType) for (var t = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass), i = 0; i < t.length; i++) {
                        var n = t[i];
                        r(n, this.all) || (this.boxes.push(n), this.all.push(n), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(n, !0), this.scrolled = !0)
                    }
                }
            }, {
                key: "show", value: function (e) {
                    return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), t = e, i = this.wowEvent, null != t.dispatchEvent ? t.dispatchEvent(i) : i in (null != t) ? t[i]() : "on" + i in (null != t) && t["on" + i](), this.config.resetAnimation && (n(e, "animationend", this.resetAnimation), n(e, "oanimationend", this.resetAnimation), n(e, "webkitAnimationEnd", this.resetAnimation), n(e, "MSAnimationEnd", this.resetAnimation)), e;
                    var t, i
                }
            }, {
                key: "applyStyle", value: function (e, t) {
                    var i = this, n = e.getAttribute("data-wow-duration"), r = e.getAttribute("data-wow-delay"),
                        o = e.getAttribute("data-wow-iteration");
                    return this.animate(function () {
                        return i.customStyle(e, t, n, r, o)
                    })
                }
            }, {
                key: "resetStyle", value: function () {
                    for (var e = 0; e < this.boxes.length; e++) {
                        this.boxes[e].style.visibility = "visible"
                    }
                }
            }, {
                key: "resetAnimation", value: function (e) {
                    if (0 <= e.type.toLowerCase().indexOf("animationend")) {
                        var t = e.target || e.srcElement;
                        t.className = t.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, {
                key: "customStyle", value: function (e, t, i, n, r) {
                    return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(e.style, {animationDuration: i}), n && this.vendorSet(e.style, {animationDelay: n}), r && this.vendorSet(e.style, {animationIterationCount: r}), this.vendorSet(e.style, {animationName: t ? "none" : this.cachedAnimationName(e)}), e
                }
            }, {
                key: "vendorSet", value: function (e, t) {
                    for (var i in t) if (t.hasOwnProperty(i)) {
                        var n = t[i];
                        e["" + i] = n;
                        for (var r = 0; r < this.vendors.length; r++) {
                            e["" + this.vendors[r] + i.charAt(0).toUpperCase() + i.substr(1)] = n
                        }
                    }
                }
            }, {
                key: "vendorCSS", value: function (e, t) {
                    for (var i = p(e), n = i.getPropertyCSSValue(t), r = 0; r < this.vendors.length; r++) {
                        var o = this.vendors[r];
                        n = n || i.getPropertyCSSValue("-" + o + "-" + t)
                    }
                    return n
                }
            }, {
                key: "animationName", value: function (t) {
                    var i = void 0;
                    try {
                        i = this.vendorCSS(t, "animation-name").cssText
                    } catch (e) {
                        i = p(t).getPropertyValue("animation-name")
                    }
                    return "none" === i ? "" : i
                }
            }, {
                key: "cacheAnimationName", value: function (e) {
                    return this.animationNameCache.set(e, this.animationName(e))
                }
            }, {
                key: "cachedAnimationName", value: function (e) {
                    return this.animationNameCache.get(e)
                }
            }, {
                key: "scrollHandler", value: function () {
                    this.scrolled = !0
                }
            }, {
                key: "scrollCallback", value: function () {
                    if (this.scrolled) {
                        this.scrolled = !1;
                        for (var e = [], t = 0; t < this.boxes.length; t++) {
                            var i = this.boxes[t];
                            if (i) {
                                if (this.isVisible(i)) {
                                    this.show(i);
                                    continue
                                }
                                e.push(i)
                            }
                        }
                        this.boxes = e, this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, {
                key: "offsetTop", value: function (e) {
                    for (; void 0 === e.offsetTop;) e = e.parentNode;
                    for (var t = e.offsetTop; e.offsetParent;) t += (e = e.offsetParent).offsetTop;
                    return t
                }
            }, {
                key: "isVisible", value: function (e) {
                    var t = e.getAttribute("data-wow-offset") || this.config.offset,
                        i = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        n = i + Math.min(this.element.clientHeight, "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - t,
                        r = this.offsetTop(e), o = r + e.clientHeight;
                    return r <= n && i <= o
                }
            }, {
                key: "disabled", value: function () {
                    return !this.config.mobile && (e = navigator.userAgent, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));
                    var e
                }
            }]), t
        }();
    t.default = u, e.exports = t.default
}), function (o) {
    var p = o(window), u = [], f = [], r = !1, m = 0, h = {top: 0, right: 0, bottom: 0, left: 0};

    function a() {
        ++m;
        var a, s, l, c, d, e = p.scrollTop(), t = p.scrollLeft(), i = t + p.width(), n = e + p.height(),
            r = (a = e + h.top, s = i + h.right, l = n + h.bottom, c = t + h.left, d = o(), o.each(u, function (e, t) {
                var i = t.offset().top, n = t.offset().left, r = n + t.width(), o = i + t.height();
                !(s < n || r < c || l < i || o < a) && d.push(t)
            }), d);
        o.each(r, function (e, t) {
            "number" != typeof t.data("scrollSpy:ticks") && t.triggerHandler("scrollSpy:enter"), t.data("scrollSpy:ticks", m)
        }), o.each(f, function (e, t) {
            var i = t.data("scrollSpy:ticks");
            "number" == typeof i && i !== m && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null))
        }), f = r
    }

    function t() {
        p.trigger("scrollSpy:winSize")
    }

    var g = Date.now || function () {
        return (new Date).getTime()
    };

    function s(i, n, r) {
        var o, a, s, l = null, c = 0;
        r || (r = {});
        var d = function () {
            c = !1 === r.leading ? 0 : g(), l = null, s = i.apply(o, a), o = a = null
        };
        return function () {
            var e = g();
            c || !1 !== r.leading || (c = e);
            var t = n - (e - c);
            return o = this, a = arguments, t <= 0 ? (clearTimeout(l), l = null, c = e, s = i.apply(o, a), o = a = null) : l || !1 === r.trailing || (l = setTimeout(d, t)), s
        }
    }

    o.scrollSpy = function (e, t) {
        (e = o(e)).each(function (e, t) {
            u.push(o(t))
        }), t = t || {throttle: 100}, h.top = t.offsetTop || 0, h.right = t.offsetRight || 0, h.bottom = t.offsetBottom || 0, h.left = t.offsetLeft || 0;
        var i = s(a, t.throttle || 100), n = function () {
            o(document).ready(i)
        };
        return r || (p.on("scroll", n), p.on("resize", n), r = !0), setTimeout(n, 0), e
    }, o.winSizeSpy = function (e) {
        return o.winSizeSpy = function () {
            return p
        }, e = e || {throttle: 100}, p.on("resize", s(t, e.throttle || 100))
    }, o.fn.scrollSpy = function (e) {
        return o.scrollSpy(o(this), e)
    }
}(jQuery), function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t()
}("undefined" != typeof window ? window : global, function () {
    var d = function (e, t) {
        var f = Object.create(d.prototype), r = 0, m = 0, o = 0, h = 0, g = [], v = !0,
            i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (e) {
                return setTimeout(e, 1e3 / 60)
            }, n = null, a = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
            s = window.transformProp || function () {
                var e = document.createElement("div");
                if (null === e.style.transform) {
                    var t, i = ["Webkit", "Moz", "ms"];
                    for (t in i) if (void 0 !== e.style[i[t] + "Transform"]) return i[t] + "Transform"
                }
                return "transform"
            }();
        f.options = {
            speed: -2,
            center: !1,
            wrapper: null,
            relativeToWrapper: !1,
            round: !0,
            vertical: !0,
            horizontal: !1,
            callback: function () {
            }
        }, t && Object.keys(t).forEach(function (e) {
            f.options[e] = t[e]
        }), e || (e = ".rellax");
        var l = "string" == typeof e ? document.querySelectorAll(e) : [e];
        if (0 < l.length) {
            if (f.elems = l, f.options.wrapper && !f.options.wrapper.nodeType) {
                if (!(l = document.querySelector(f.options.wrapper))) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                f.options.wrapper = l
            }
            var y = function () {
                for (var e = 0; e < g.length; e++) f.elems[e].style.cssText = g[e].style;
                for (g = [], m = window.innerHeight, h = window.innerWidth, k(), e = 0; e < f.elems.length; e++) {
                    var t = f.elems[e], i = t.getAttribute("data-rellax-percentage"),
                        n = t.getAttribute("data-rellax-speed"), r = t.getAttribute("data-rellax-zindex") || 0,
                        o = t.getAttribute("data-rellax-min"), a = t.getAttribute("data-rellax-max"),
                        s = f.options.wrapper ? f.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    f.options.relativeToWrapper && (s = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - f.options.wrapper.offsetTop);
                    var l = f.options.vertical && (i || f.options.center) ? s : 0,
                        c = f.options.horizontal && (i || f.options.center) ? f.options.wrapper ? f.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0;
                    s = l + t.getBoundingClientRect().top;
                    var d = t.clientHeight || t.offsetHeight || t.scrollHeight, p = c + t.getBoundingClientRect().left,
                        u = t.clientWidth || t.offsetWidth || t.scrollWidth;
                    l = i || (l - s + m) / (d + m), i = i || (c - p + h) / (u + h), f.options.center && (l = i = .5), n = n || f.options.speed, i = b(i, l, n), l = "", 0 <= (t = t.style.cssText).indexOf("transform") && (l = t.indexOf("transform"), l = (c = (l = t.slice(l)).indexOf(";")) ? " " + l.slice(11, c).replace(/\s/g, "") : " " + l.slice(11).replace(/\s/g, "")), g.push({
                        baseX: i.x,
                        baseY: i.y,
                        top: s,
                        left: p,
                        height: d,
                        width: u,
                        speed: n,
                        style: t,
                        transform: l,
                        zindex: r,
                        min: o,
                        max: a
                    })
                }
                v && (window.addEventListener("resize", y), v = !1), x()
            }, k = function () {
                var e = r, t = o;
                return r = f.options.wrapper ? f.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, o = f.options.wrapper ? f.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, f.options.relativeToWrapper && (r = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - f.options.wrapper.offsetTop), !!(e != r && f.options.vertical || t != o && f.options.horizontal)
            }, b = function (e, t, i) {
                var n = {};
                return e = 100 * i * (1 - e), t = 100 * i * (1 - t), n.x = f.options.round ? Math.round(e) : Math.round(100 * e) / 100, n.y = f.options.round ? Math.round(t) : Math.round(100 * t) / 100, n
            }, c = function () {
                k() && !1 === v && x(), n = i(c)
            }, x = function () {
                for (var e, t = 0; t < f.elems.length; t++) {
                    var i = (e = b((o - g[t].left + h) / (g[t].width + h), (r - g[t].top + m) / (g[t].height + m), g[t].speed)).y - g[t].baseY,
                        n = e.x - g[t].baseX;
                    null !== g[t].min && (f.options.vertical && !f.options.horizontal && (i = i <= g[t].min ? g[t].min : i), f.options.horizontal && !f.options.vertical && (n = n <= g[t].min ? g[t].min : n)), null !== g[t].max && (f.options.vertical && !f.options.horizontal && (i = i >= g[t].max ? g[t].max : i), f.options.horizontal && !f.options.vertical && (n = n >= g[t].max ? g[t].max : n)), f.elems[t].style[s] = "translate3d(" + (f.options.horizontal ? n : "0") + "px," + (f.options.vertical ? i : "0") + "px," + g[t].zindex + "px) " + g[t].transform
                }
                f.options.callback(e)
            };
            return f.destroy = function () {
                for (var e = 0; e < f.elems.length; e++) f.elems[e].style.cssText = g[e].style;
                v || (window.removeEventListener("resize", y), v = !0), a(n), n = null
            }, y(), c(), f.refresh = y, f
        }
        console.warn("Rellax: The elements you're trying to select don't exist.")
    };
    return d
}), function (e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t()
}(this, function () {
    "use strict";
    var e = "undefined" != typeof window,
        r = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        t = e && "IntersectionObserver" in window, c = e && "classList" in document.createElement("p"), i = {
            elements_selector: "img",
            container: r || e ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            auto_unobserve: !0,
            callback_enter: null,
            callback_exit: null,
            callback_reveal: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            use_native: !1
        }, o = function (e, t) {
            var i, n = new e(t);
            try {
                i = new CustomEvent("LazyLoad::Initialized", {detail: {instance: n}})
            } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {instance: n})
            }
            window.dispatchEvent(i)
        }, p = function (e, t) {
            return e.getAttribute("data-" + t)
        }, u = function (e, t, i) {
            var n = "data-" + t;
            null !== i ? e.setAttribute(n, i) : e.removeAttribute(n)
        }, f = function (e) {
            return "true" === p(e, "was-processed")
        }, m = function (e, t) {
            return u(e, "ll-timeout", t)
        }, h = function (e) {
            return p(e, "ll-timeout")
        }, g = function (e, t) {
            e && e(t)
        }, v = function (e, t) {
            e._loadingCount += t, 0 === e._elements.length && 0 === e._loadingCount && g(e._settings.callback_finish)
        }, n = function (e) {
            for (var t, i = [], n = 0; t = e.children[n]; n += 1) "SOURCE" === t.tagName && i.push(t);
            return i
        }, a = function (e, t, i) {
            i && e.setAttribute(t, i)
        }, s = function (e, t) {
            a(e, "sizes", p(e, t.data_sizes)), a(e, "srcset", p(e, t.data_srcset)), a(e, "src", p(e, t.data_src))
        }, y = {
            IMG: function (e, t) {
                var i = e.parentNode;
                i && "PICTURE" === i.tagName && n(i).forEach(function (e) {
                    s(e, t)
                }), s(e, t)
            }, IFRAME: function (e, t) {
                a(e, "src", p(e, t.data_src))
            }, VIDEO: function (e, t) {
                n(e).forEach(function (e) {
                    a(e, "src", p(e, t.data_src))
                }), a(e, "src", p(e, t.data_src)), e.load()
            }
        }, k = function (e, t) {
            c ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
        }, b = function (e, t, i) {
            e.addEventListener(t, i)
        }, l = function (e, t, i) {
            e.removeEventListener(t, i)
        }, x = function (e, t, i) {
            l(e, "load", t), l(e, "loadeddata", t), l(e, "error", i)
        }, w = function (e, t, i) {
            var n, r, o = i._settings, a = t ? o.class_loaded : o.class_error, s = t ? o.callback_loaded : o.callback_error,
                l = e.target;
            n = l, r = o.class_loading, c ? n.classList.remove(r) : n.className = n.className.replace(new RegExp("(^|\\s+)" + r + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, ""), k(l, a), g(s, l), v(i, -1)
        }, S = ["IMG", "IFRAME", "VIDEO"], A = function (e, t) {
            var i = t._observer;
            d(e, t), i && t._settings.auto_unobserve && i.unobserve(e)
        }, C = function (e) {
            var t = h(e);
            t && (clearTimeout(t), m(e, null))
        }, d = function (e, t, i) {
            var n, r, o, a, s, l, c, d = t._settings;
            !i && f(e) || (-1 < S.indexOf(e.tagName) && (r = t, l = function e(t) {
                w(t, !0, r), x(n, e, c)
            }, s = c = function e(t) {
                w(t, !1, r), x(n, l, e)
            }, b(o = n = e, "load", a = l), b(o, "loadeddata", a), b(o, "error", s), k(e, d.class_loading)), function (e, t) {
                var i, n, r, o, a, s, l = t._settings, c = e.tagName, d = y[c];
                if (d) return d(e, l), v(t, 1), t._elements = (i = t._elements, n = e, i.filter(function (e) {
                    return e !== n
                }));
                a = p(r = e, (o = l).data_src), s = p(r, o.data_bg), a && (r.style.backgroundImage = 'url("'.concat(a, '")')), s && (r.style.backgroundImage = s)
            }(e, t), u(e, "was-processed", "true"), g(d.callback_reveal, e), g(d.callback_set, e))
        }, T = function (p) {
            return !!t && (p._observer = new IntersectionObserver(function (e) {
                e.forEach(function (e) {
                    return (d = e).isIntersecting || 0 < d.intersectionRatio ? (n = e.target, c = (r = p)._settings, g(c.callback_enter, n), void (c.load_delay ? (o = n, s = (a = r)._settings.load_delay, (l = h(o)) || (l = setTimeout(function () {
                        A(o, a), C(o)
                    }, s), m(o, l))) : A(n, r))) : (t = e.target, i = p._settings, g(i.callback_exit, t), void (i.load_delay && C(t)));
                    var t, i, n, r, o, a, s, l, c, d
                })
            }, {
                root: (e = p._settings).container === document ? null : e.container,
                rootMargin: e.thresholds || e.threshold + "px"
            }), !0);
            var e
        }, P = ["IMG", "IFRAME"], _ = function (e, t) {
            return (n = e || (i = t, i.container.querySelectorAll(i.elements_selector)), Array.prototype.slice.call(n)).filter(function (e) {
                return !f(e)
            });
            var i, n
        }, O = function (e, t) {
            this._settings = _extends({}, i, e), this._loadingCount = 0, T(this), this.update(t)
        };
    return O.prototype = {
        update: function (e) {
            var t, i = this, n = this._settings;
            this._elements = _(e, n), !r && this._observer ? (n.use_native && "loading" in HTMLImageElement.prototype && ((t = this)._elements.forEach(function (e) {
                -1 !== P.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), d(e, t))
            }), this._elements = _(e, n)), this._elements.forEach(function (e) {
                i._observer.observe(e)
            })) : this.loadAll()
        }, destroy: function () {
            var t = this;
            this._observer && (this._elements.forEach(function (e) {
                t._observer.unobserve(e)
            }), this._observer = null), this._elements = null, this._settings = null
        }, load: function (e, t) {
            d(e, this, t)
        }, loadAll: function () {
            var t = this;
            this._elements.forEach(function (e) {
                A(e, t)
            })
        }
    }, e && function (e, t) {
        if (t) if (t.length) for (var i, n = 0; i = t[n]; n += 1) o(e, i); else o(e, t)
    }(O, window.lazyLoadOptions), O
}), jQuery.cookie = function (e, t, i) {
    if (void 0 === t) {
        var n = null;
        if (document.cookie && "" != document.cookie) for (var r = document.cookie.split(";"), o = 0; o < r.length; o++) {
            var a = jQuery.trim(r[o]);
            if (a.substring(0, e.length + 1) == e + "=") {
                n = decodeURIComponent(a.substring(e.length + 1));
                break
            }
        }
        return n
    }
    i = i || {}, null === t && (t = "", i.expires = -1);
    var s, l = "";
    i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (s = new Date).setTime(s.getTime() + 24 * i.expires * 60 * 60 * 1e3) : s = i.expires, l = "; expires=" + s.toUTCString());
    var c = i.path ? "; path=" + i.path : "", d = i.domain ? "; domain=" + i.domain : "",
        p = i.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), l, c, d, p].join("")
}, $(document).ready(function () {
    $(function () {
        if (1799 < $(document).width()) new Rellax(".icon_fly", {center: !0})
    }), $(".feedback-slider").slick({
        infinite: !0,
        arrows: !0,
        prevArrow: '<div class="slider_arrow slider_arrow-prev feedback-slider_arrow-prev"></div>',
        nextArrow: '<div class="slider_arrow slider_arrow-next feedback-slider_arrow-next"></div>',
        dots: !0,
        dotsClass: "feedback-slider-dots",
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        responsive: [{breakpoint: 1200, settings: {arrows: !1}}]
    }), $(function () {
        var e = $("#openModal-feedback"), t = $("#modal-feedback"), i = $("#closeModal-feedback"), n = $("body");
        e.click(function () {
            t.fadeIn(), n.addClass("scroll-hidden-mob")
        }), i.click(function () {
            t.fadeOut(), n.removeClass("scroll-hidden-mob")
        }), t.click(function (e) {
            0 === t.has(e.target).length && (t.fadeOut(), n.removeClass("scroll-hidden-mob"))
        })
    }), $("#footerContactsButton").click(function () {
        $("#footerContactsModal").slideToggle("300"), $("#footerContactsModal").toggleClass(".footer-contacts-window-active")
    }), $("#footerContactsClose").click(function () {
        $("#footerContactsModal").slideToggle("300")
    }), $("input[type=tel]").inputmask("+375(99) 999-99-99"), $(window).scroll(function () {
        800 < $(this).scrollTop() ? $("#toTop").fadeIn() : $("#toTop").fadeOut()
    }), $("#toTop").click(function () {
        $("body,html").animate({scrollTop: 0}, 1400)
    }), WOW.prototype.addBox = function (e) {
        this.boxes.push(e)
    };
    var e = new WOW;
    e.init(), $(".wow").on("scrollSpy:exit", function () {
        $(this).css({visibility: "hidden", "animation-name": "none"}).removeClass("animated"), e.addBox(this)
    }).scrollSpy();
    new LazyLoad({elements_selector: ".lazy"}), new LazyLoad({
        elements_selector: ".lazy-bg",
        threshold: 650,
        callback_set: function (e) {
            e.classList.add("loaded")
        }
    });
    $(".price_block-item").each(function () {
        var e = $(this).find(".price__item-title"), t = $(this).find(".price__item-descr"), i = !1;
        e.click(function () {
            i || (i = !0, t.slideToggle({
                complete: function () {
                    i = !1
                }
            }), $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active"))
        })
    });
    var s = !1;
    $("form").submit(function (e) {
        e.preventDefault();
        var t = $(this).find("input[type=tel]"), i = t.val().substring(5, 7), n = t.val().replace(/[^0-9]/g, "");
        if (0 !== n.length) if (n.length < 12 && 4 <= n.length) t.notify("Номер ввеxдён не полностью", {
            position: "bottom",
            className: "warn",
            gap: 0,
            autoHideDelay: 3e3
        }); else if (n.length <= 0 || "29" === i || "33" === i || "44" === i || "25" === i || "17" === i) {
            if (12 === n.length && !s && ("29" === i || "33" === i || "44" === i || "25" === i || "17" === i)) {
                s = !0;
                var r = $(this).serializeArray();
                r.push({name: "user_client", value: l}), r.push({name: "href", value: c}), r.push({
                    name: "search",
                    value: d
                }), r.push({name: "term", value: p.utm_term}), r.push({
                    name: "content",
                    value: p.utm_content
                }), r.push({name: "campaign", value: p.utm_campaign}), r.push({
                    name: "medium",
                    value: p.utm_medium
                }), r.push({name: "source", value: p.utm_source}), r.push({name: "ref", value: u});
                var o = $(this), a = o.find("button");
                return $.ajax({
                    url: "php/mail.php", type: "POST", data: r, beforeSend: function (e) {
                        console.log(r)
                        a.notify("Отправка заявки", {position: "bottom center", className: "info"})
                    }, success: function (e) {
                        console.log(e), a.notify("Заявка принята", {
                            position: "bottom center",
                            className: "success"
                        }), o.trigger("reset"), $.cookie("utm_mas", null), $.cookie("refSave", null), s = !1, dataLayer.push({event: "formsend"})
                    }, error: function (e) {
                        a.notify("Ошибка на сервере", {
                            position: "bottom center",
                            className: "error"
                        }), o.trigger("reset"), s = !1
                    }
                }), !1
            }
        } else t.notify("Проверьте введённый номер", {
            position: "bottom",
            className: "warn",
            gap: 0,
            autoHideDelay: 3e3
        }); else t.notify("Введите номер телефона", {position: "bottom", className: "error"})
    });
    var t,
        l = (t = detect.parse(navigator.userAgent)).device.type + " " + t.browser.name + " " + t.os.name + " Устр. " + t.device.family,
        c = window.location.href, d = window.location.search, n = [], p = {}, u = document.referrer;
    if (null !== $.cookie("refSave") ? u = $.cookie("refSave") : $.cookie("refSave", u), -1 != c.indexOf("?") && (c = c.slice(0, c.indexOf("?")), n = (d = d.slice(1)).split("&"), $.cookie("utm_mas", JSON.stringify(n))), null !== $.cookie("utm_mas")) {
        var r = JSON.parse($.cookie("utm_mas"));
        for (i = 0; i < r.length; i++) p[r[i].split("=")[0]] = r[i].split("=")[1];
        "undefined" != p.utm_term && (p.utm_term = decodeURIComponent(p.utm_term)), "undefined" == p.utm_term && (p.utm_term = "")
    }
    if (-1 != c.indexOf("?") && null == $.cookie("utm_mas")) {
        for (i = 0; i < n.length; i++) p[n[i].split("=")[0]] = n[i].split("=")[1];
        "undefined" != p.utm_term && (p.utm_term = decodeURIComponent(p.utm_term)), "undefined" == p.utm_term && (p.utm_term = "")
    }
    $(function () {
        dateNew = [-2, -5, -7, -11, -15, -17, -20, -24, -25, -28, -33, -34, -37, -38, -42, -46, -48, -50].map(function (e) {
            var t = new Date(parseInt((new Date).getTime()) - 864e5 * -e),
                i = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
            return t.getDate() + "." + i[t.getMonth()] + "." + t.getFullYear() + " г."
        }), null !== localStorage.getItem("dateFeedback") ? (dateNewSave = localStorage.dateFeedback ? JSON.parse(localStorage.dateFeedback) : [], $(".feedback-person-date").text(function (e) {
            return dateNewSave[e - 1]
        })) : ($(".feedback-person-date").text(function (e) {
            return dateNew[e - 1]
        }), localStorage.dateFeedback = JSON.stringify(dateNew))
    })
});