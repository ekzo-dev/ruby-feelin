var feel = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // entry.js
  var entry_exports = {};
  __export(entry_exports, {
    SyntaxError: () => SyntaxError2,
    date: () => date,
    duration: () => duration,
    evaluate: () => evaluate,
    json: () => json,
    parseExpression: () => parseExpression,
    parseUnaryTests: () => parseUnaryTests,
    unaryTest: () => unaryTest
  });

  // node_modules/luxon/build/es6/luxon.mjs
  var LuxonError = class extends Error {
  };
  var InvalidDateTimeError = class extends LuxonError {
    constructor(reason) {
      super(`Invalid DateTime: ${reason.toMessage()}`);
    }
  };
  var InvalidIntervalError = class extends LuxonError {
    constructor(reason) {
      super(`Invalid Interval: ${reason.toMessage()}`);
    }
  };
  var InvalidDurationError = class extends LuxonError {
    constructor(reason) {
      super(`Invalid Duration: ${reason.toMessage()}`);
    }
  };
  var ConflictingSpecificationError = class extends LuxonError {
  };
  var InvalidUnitError = class extends LuxonError {
    constructor(unit) {
      super(`Invalid unit ${unit}`);
    }
  };
  var InvalidArgumentError = class extends LuxonError {
  };
  var ZoneIsAbstractError = class extends LuxonError {
    constructor() {
      super("Zone is an abstract class");
    }
  };
  var n = "numeric";
  var s = "short";
  var l = "long";
  var DATE_SHORT = {
    year: n,
    month: n,
    day: n
  };
  var DATE_MED = {
    year: n,
    month: s,
    day: n
  };
  var DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
  };
  var DATE_FULL = {
    year: n,
    month: l,
    day: n
  };
  var DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
  };
  var TIME_SIMPLE = {
    hour: n,
    minute: n
  };
  var TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
  };
  var TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
  };
  var TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
  };
  var TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hourCycle: "h23"
  };
  var TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23"
  };
  var TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: s
  };
  var TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: l
  };
  var DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
  };
  var DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
  };
  var DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
  };
  var DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
  };
  var DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
  };
  var DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
  };
  var DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
  };
  var DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
  };
  var DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
  };
  var Zone = class {
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get type() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
    get name() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The IANA name of this zone.
     * Defaults to `name` if not overwritten by a subclass.
     * @abstract
     * @type {string}
     */
    get ianaName() {
      return this.name;
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
    get isUniversal() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    offsetName(ts, opts) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns the offset's value as a string
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(ts, format) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    offset(ts) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return whether this Zone is equal to another zone
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(otherZone) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return whether this Zone is valid.
     * @abstract
     * @type {boolean}
     */
    get isValid() {
      throw new ZoneIsAbstractError();
    }
  };
  var singleton$1 = null;
  var SystemZone = class _SystemZone extends Zone {
    /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */
    static get instance() {
      if (singleton$1 === null) {
        singleton$1 = new _SystemZone();
      }
      return singleton$1;
    }
    /** @override **/
    get type() {
      return "system";
    }
    /** @override **/
    get name() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    /** @override **/
    get isUniversal() {
      return false;
    }
    /** @override **/
    offsetName(ts, { format, locale }) {
      return parseZoneInfo(ts, format, locale);
    }
    /** @override **/
    formatOffset(ts, format) {
      return formatOffset(this.offset(ts), format);
    }
    /** @override **/
    offset(ts) {
      return -new Date(ts).getTimezoneOffset();
    }
    /** @override **/
    equals(otherZone) {
      return otherZone.type === "system";
    }
    /** @override **/
    get isValid() {
      return true;
    }
  };
  var dtfCache = /* @__PURE__ */ new Map();
  function makeDTF(zoneName) {
    let dtf = dtfCache.get(zoneName);
    if (dtf === void 0) {
      dtf = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zoneName,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
      });
      dtfCache.set(zoneName, dtf);
    }
    return dtf;
  }
  var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
  };
  function hackyOffset(dtf, date2) {
    const formatted = dtf.format(date2).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
    return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
  }
  function partsOffset(dtf, date2) {
    const formatted = dtf.formatToParts(date2);
    const filled = [];
    for (let i = 0; i < formatted.length; i++) {
      const { type, value } = formatted[i];
      const pos = typeToPos[type];
      if (type === "era") {
        filled[pos] = value;
      } else if (!isUndefined(pos)) {
        filled[pos] = parseInt(value, 10);
      }
    }
    return filled;
  }
  var ianaZoneCache = /* @__PURE__ */ new Map();
  var IANAZone = class _IANAZone extends Zone {
    /**
     * @param {string} name - Zone name
     * @return {IANAZone}
     */
    static create(name2) {
      let zone = ianaZoneCache.get(name2);
      if (zone === void 0) {
        ianaZoneCache.set(name2, zone = new _IANAZone(name2));
      }
      return zone;
    }
    /**
     * Reset local caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCache() {
      ianaZoneCache.clear();
      dtfCache.clear();
    }
    /**
     * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
     * @param {string} s - The string to check validity on
     * @example IANAZone.isValidSpecifier("America/New_York") //=> true
     * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
     * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
     * @return {boolean}
     */
    static isValidSpecifier(s2) {
      return this.isValidZone(s2);
    }
    /**
     * Returns whether the provided string identifies a real zone
     * @param {string} zone - The string to check
     * @example IANAZone.isValidZone("America/New_York") //=> true
     * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
     * @example IANAZone.isValidZone("Sport~~blorp") //=> false
     * @return {boolean}
     */
    static isValidZone(zone) {
      if (!zone) {
        return false;
      }
      try {
        new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
        return true;
      } catch (e) {
        return false;
      }
    }
    constructor(name2) {
      super();
      this.zoneName = name2;
      this.valid = _IANAZone.isValidZone(name2);
    }
    /**
     * The type of zone. `iana` for all instances of `IANAZone`.
     * @override
     * @type {string}
     */
    get type() {
      return "iana";
    }
    /**
     * The name of this zone (i.e. the IANA zone name).
     * @override
     * @type {string}
     */
    get name() {
      return this.zoneName;
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year:
     * Always returns false for all IANA zones.
     * @override
     * @type {boolean}
     */
    get isUniversal() {
      return false;
    }
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    offsetName(ts, { format, locale }) {
      return parseZoneInfo(ts, format, locale, this.name);
    }
    /**
     * Returns the offset's value as a string
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(ts, format) {
      return formatOffset(this.offset(ts), format);
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @override
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    offset(ts) {
      if (!this.valid) return NaN;
      const date2 = new Date(ts);
      if (isNaN(date2)) return NaN;
      const dtf = makeDTF(this.name);
      let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date2) : hackyOffset(dtf, date2);
      if (adOrBc === "BC") {
        year = -Math.abs(year) + 1;
      }
      const adjustedHour = hour === 24 ? 0 : hour;
      const asUTC = objToLocalTS({
        year,
        month,
        day,
        hour: adjustedHour,
        minute,
        second,
        millisecond: 0
      });
      let asTS = +date2;
      const over = asTS % 1e3;
      asTS -= over >= 0 ? over : 1e3 + over;
      return (asUTC - asTS) / (60 * 1e3);
    }
    /**
     * Return whether this Zone is equal to another zone
     * @override
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(otherZone) {
      return otherZone.type === "iana" && otherZone.name === this.name;
    }
    /**
     * Return whether this Zone is valid.
     * @override
     * @type {boolean}
     */
    get isValid() {
      return this.valid;
    }
  };
  var intlLFCache = {};
  function getCachedLF(locString, opts = {}) {
    const key = JSON.stringify([locString, opts]);
    let dtf = intlLFCache[key];
    if (!dtf) {
      dtf = new Intl.ListFormat(locString, opts);
      intlLFCache[key] = dtf;
    }
    return dtf;
  }
  var intlDTCache = /* @__PURE__ */ new Map();
  function getCachedDTF(locString, opts = {}) {
    const key = JSON.stringify([locString, opts]);
    let dtf = intlDTCache.get(key);
    if (dtf === void 0) {
      dtf = new Intl.DateTimeFormat(locString, opts);
      intlDTCache.set(key, dtf);
    }
    return dtf;
  }
  var intlNumCache = /* @__PURE__ */ new Map();
  function getCachedINF(locString, opts = {}) {
    const key = JSON.stringify([locString, opts]);
    let inf = intlNumCache.get(key);
    if (inf === void 0) {
      inf = new Intl.NumberFormat(locString, opts);
      intlNumCache.set(key, inf);
    }
    return inf;
  }
  var intlRelCache = /* @__PURE__ */ new Map();
  function getCachedRTF(locString, opts = {}) {
    const { base, ...cacheKeyOpts } = opts;
    const key = JSON.stringify([locString, cacheKeyOpts]);
    let inf = intlRelCache.get(key);
    if (inf === void 0) {
      inf = new Intl.RelativeTimeFormat(locString, opts);
      intlRelCache.set(key, inf);
    }
    return inf;
  }
  var sysLocaleCache = null;
  function systemLocale() {
    if (sysLocaleCache) {
      return sysLocaleCache;
    } else {
      sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
      return sysLocaleCache;
    }
  }
  var intlResolvedOptionsCache = /* @__PURE__ */ new Map();
  function getCachedIntResolvedOptions(locString) {
    let opts = intlResolvedOptionsCache.get(locString);
    if (opts === void 0) {
      opts = new Intl.DateTimeFormat(locString).resolvedOptions();
      intlResolvedOptionsCache.set(locString, opts);
    }
    return opts;
  }
  var weekInfoCache = /* @__PURE__ */ new Map();
  function getCachedWeekInfo(locString) {
    let data = weekInfoCache.get(locString);
    if (!data) {
      const locale = new Intl.Locale(locString);
      data = "getWeekInfo" in locale ? locale.getWeekInfo() : locale.weekInfo;
      if (!("minimalDays" in data)) {
        data = { ...fallbackWeekSettings, ...data };
      }
      weekInfoCache.set(locString, data);
    }
    return data;
  }
  function parseLocaleString(localeStr) {
    const xIndex = localeStr.indexOf("-x-");
    if (xIndex !== -1) {
      localeStr = localeStr.substring(0, xIndex);
    }
    const uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) {
      return [localeStr];
    } else {
      let options;
      let selectedStr;
      try {
        options = getCachedDTF(localeStr).resolvedOptions();
        selectedStr = localeStr;
      } catch (e) {
        const smaller = localeStr.substring(0, uIndex);
        options = getCachedDTF(smaller).resolvedOptions();
        selectedStr = smaller;
      }
      const { numberingSystem, calendar } = options;
      return [selectedStr, numberingSystem, calendar];
    }
  }
  function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (outputCalendar || numberingSystem) {
      if (!localeStr.includes("-u-")) {
        localeStr += "-u";
      }
      if (outputCalendar) {
        localeStr += `-ca-${outputCalendar}`;
      }
      if (numberingSystem) {
        localeStr += `-nu-${numberingSystem}`;
      }
      return localeStr;
    } else {
      return localeStr;
    }
  }
  function mapMonths(f) {
    const ms = [];
    for (let i = 1; i <= 12; i++) {
      const dt = DateTime.utc(2009, i, 1);
      ms.push(f(dt));
    }
    return ms;
  }
  function mapWeekdays(f) {
    const ms = [];
    for (let i = 1; i <= 7; i++) {
      const dt = DateTime.utc(2016, 11, 13 + i);
      ms.push(f(dt));
    }
    return ms;
  }
  function listStuff(loc, length, englishFn, intlFn) {
    const mode2 = loc.listingMode();
    if (mode2 === "error") {
      return null;
    } else if (mode2 === "en") {
      return englishFn(length);
    } else {
      return intlFn(length);
    }
  }
  function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") {
      return false;
    } else {
      return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || getCachedIntResolvedOptions(loc.locale).numberingSystem === "latn";
    }
  }
  var PolyNumberFormatter = class {
    constructor(intl, forceSimple, opts) {
      this.padTo = opts.padTo || 0;
      this.floor = opts.floor || false;
      const { padTo, floor, ...otherOpts } = opts;
      if (!forceSimple || Object.keys(otherOpts).length > 0) {
        const intlOpts = { useGrouping: false, ...opts };
        if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
        this.inf = getCachedINF(intl, intlOpts);
      }
    }
    format(i) {
      if (this.inf) {
        const fixed = this.floor ? Math.floor(i) : i;
        return this.inf.format(fixed);
      } else {
        const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
        return padStart(fixed, this.padTo);
      }
    }
  };
  var PolyDateFormatter = class {
    constructor(dt, intl, opts) {
      this.opts = opts;
      this.originalZone = void 0;
      let z = void 0;
      if (this.opts.timeZone) {
        this.dt = dt;
      } else if (dt.zone.type === "fixed") {
        const gmtOffset = -1 * (dt.offset / 60);
        const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
        if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
          z = offsetZ;
          this.dt = dt;
        } else {
          z = "UTC";
          this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
          this.originalZone = dt.zone;
        }
      } else if (dt.zone.type === "system") {
        this.dt = dt;
      } else if (dt.zone.type === "iana") {
        this.dt = dt;
        z = dt.zone.name;
      } else {
        z = "UTC";
        this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
        this.originalZone = dt.zone;
      }
      const intlOpts = { ...this.opts };
      intlOpts.timeZone = intlOpts.timeZone || z;
      this.dtf = getCachedDTF(intl, intlOpts);
    }
    format() {
      if (this.originalZone) {
        return this.formatToParts().map(({ value }) => value).join("");
      }
      return this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
      const parts = this.dtf.formatToParts(this.dt.toJSDate());
      if (this.originalZone) {
        return parts.map((part) => {
          if (part.type === "timeZoneName") {
            const offsetName = this.originalZone.offsetName(this.dt.ts, {
              locale: this.dt.locale,
              format: this.opts.timeZoneName
            });
            return {
              ...part,
              value: offsetName
            };
          } else {
            return part;
          }
        });
      }
      return parts;
    }
    resolvedOptions() {
      return this.dtf.resolvedOptions();
    }
  };
  var PolyRelFormatter = class {
    constructor(intl, isEnglish, opts) {
      this.opts = { style: "long", ...opts };
      if (!isEnglish && hasRelative()) {
        this.rtf = getCachedRTF(intl, opts);
      }
    }
    format(count, unit) {
      if (this.rtf) {
        return this.rtf.format(count, unit);
      } else {
        return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
      }
    }
    formatToParts(count, unit) {
      if (this.rtf) {
        return this.rtf.formatToParts(count, unit);
      } else {
        return [];
      }
    }
  };
  var fallbackWeekSettings = {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7]
  };
  var Locale = class _Locale {
    static fromOpts(opts) {
      return _Locale.create(
        opts.locale,
        opts.numberingSystem,
        opts.outputCalendar,
        opts.weekSettings,
        opts.defaultToEN
      );
    }
    static create(locale, numberingSystem, outputCalendar, weekSettings, defaultToEN = false) {
      const specifiedLocale = locale || Settings.defaultLocale;
      const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
      const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
      const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
      const weekSettingsR = validateWeekSettings(weekSettings) || Settings.defaultWeekSettings;
      return new _Locale(localeR, numberingSystemR, outputCalendarR, weekSettingsR, specifiedLocale);
    }
    static resetCache() {
      sysLocaleCache = null;
      intlDTCache.clear();
      intlNumCache.clear();
      intlRelCache.clear();
      intlResolvedOptionsCache.clear();
      weekInfoCache.clear();
    }
    static fromObject({ locale, numberingSystem, outputCalendar, weekSettings } = {}) {
      return _Locale.create(locale, numberingSystem, outputCalendar, weekSettings);
    }
    constructor(locale, numbering, outputCalendar, weekSettings, specifiedLocale) {
      const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
      this.locale = parsedLocale;
      this.numberingSystem = numbering || parsedNumberingSystem || null;
      this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
      this.weekSettings = weekSettings;
      this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
      this.weekdaysCache = { format: {}, standalone: {} };
      this.monthsCache = { format: {}, standalone: {} };
      this.meridiemCache = null;
      this.eraCache = {};
      this.specifiedLocale = specifiedLocale;
      this.fastNumbersCached = null;
    }
    get fastNumbers() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }
      return this.fastNumbersCached;
    }
    listingMode() {
      const isActuallyEn = this.isEnglish();
      const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
      return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    }
    clone(alts) {
      if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
        return this;
      } else {
        return _Locale.create(
          alts.locale || this.specifiedLocale,
          alts.numberingSystem || this.numberingSystem,
          alts.outputCalendar || this.outputCalendar,
          validateWeekSettings(alts.weekSettings) || this.weekSettings,
          alts.defaultToEN || false
        );
      }
    }
    redefaultToEN(alts = {}) {
      return this.clone({ ...alts, defaultToEN: true });
    }
    redefaultToSystem(alts = {}) {
      return this.clone({ ...alts, defaultToEN: false });
    }
    months(length, format = false) {
      return listStuff(this, length, months, () => {
        const monthSpecialCase = this.intl === "ja" || this.intl.startsWith("ja-");
        format &= !monthSpecialCase;
        const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
        if (!this.monthsCache[formatStr][length]) {
          const mapper = !monthSpecialCase ? (dt) => this.extract(dt, intl, "month") : (dt) => this.dtFormatter(dt, intl).format();
          this.monthsCache[formatStr][length] = mapMonths(mapper);
        }
        return this.monthsCache[formatStr][length];
      });
    }
    weekdays(length, format = false) {
      return listStuff(this, length, weekdays, () => {
        const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
        if (!this.weekdaysCache[formatStr][length]) {
          this.weekdaysCache[formatStr][length] = mapWeekdays(
            (dt) => this.extract(dt, intl, "weekday")
          );
        }
        return this.weekdaysCache[formatStr][length];
      });
    }
    meridiems() {
      return listStuff(
        this,
        void 0,
        () => meridiems,
        () => {
          if (!this.meridiemCache) {
            const intl = { hour: "numeric", hourCycle: "h12" };
            this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
              (dt) => this.extract(dt, intl, "dayperiod")
            );
          }
          return this.meridiemCache;
        }
      );
    }
    eras(length) {
      return listStuff(this, length, eras, () => {
        const intl = { era: length };
        if (!this.eraCache[length]) {
          this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(
            (dt) => this.extract(dt, intl, "era")
          );
        }
        return this.eraCache[length];
      });
    }
    extract(dt, intlOpts, field) {
      const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
      return matching ? matching.value : null;
    }
    numberFormatter(opts = {}) {
      return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    }
    dtFormatter(dt, intlOpts = {}) {
      return new PolyDateFormatter(dt, this.intl, intlOpts);
    }
    relFormatter(opts = {}) {
      return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    }
    listFormatter(opts = {}) {
      return getCachedLF(this.intl, opts);
    }
    isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || getCachedIntResolvedOptions(this.intl).locale.startsWith("en-us");
    }
    getWeekSettings() {
      if (this.weekSettings) {
        return this.weekSettings;
      } else if (!hasLocaleWeekInfo()) {
        return fallbackWeekSettings;
      } else {
        return getCachedWeekInfo(this.locale);
      }
    }
    getStartOfWeek() {
      return this.getWeekSettings().firstDay;
    }
    getMinDaysInFirstWeek() {
      return this.getWeekSettings().minimalDays;
    }
    getWeekendDays() {
      return this.getWeekSettings().weekend;
    }
    equals(other) {
      return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    }
    toString() {
      return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
    }
  };
  var singleton = null;
  var FixedOffsetZone = class _FixedOffsetZone extends Zone {
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    static get utcInstance() {
      if (singleton === null) {
        singleton = new _FixedOffsetZone(0);
      }
      return singleton;
    }
    /**
     * Get an instance with a specified offset
     * @param {number} offset - The offset in minutes
     * @return {FixedOffsetZone}
     */
    static instance(offset2) {
      return offset2 === 0 ? _FixedOffsetZone.utcInstance : new _FixedOffsetZone(offset2);
    }
    /**
     * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
     * @param {string} s - The offset string to parse
     * @example FixedOffsetZone.parseSpecifier("UTC+6")
     * @example FixedOffsetZone.parseSpecifier("UTC+06")
     * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
     * @return {FixedOffsetZone}
     */
    static parseSpecifier(s2) {
      if (s2) {
        const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (r) {
          return new _FixedOffsetZone(signedOffset(r[1], r[2]));
        }
      }
      return null;
    }
    constructor(offset2) {
      super();
      this.fixed = offset2;
    }
    /**
     * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
     * @override
     * @type {string}
     */
    get type() {
      return "fixed";
    }
    /**
     * The name of this zone.
     * All fixed zones' names always start with "UTC" (plus optional offset)
     * @override
     * @type {string}
     */
    get name() {
      return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
    }
    /**
     * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
     *
     * @override
     * @type {string}
     */
    get ianaName() {
      if (this.fixed === 0) {
        return "Etc/UTC";
      } else {
        return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
      }
    }
    /**
     * Returns the offset's common name at the specified timestamp.
     *
     * For fixed offset zones this equals to the zone name.
     * @override
     */
    offsetName() {
      return this.name;
    }
    /**
     * Returns the offset's value as a string
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(ts, format) {
      return formatOffset(this.fixed, format);
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year:
     * Always returns true for all fixed offset zones.
     * @override
     * @type {boolean}
     */
    get isUniversal() {
      return true;
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     *
     * For fixed offset zones, this is constant and does not depend on a timestamp.
     * @override
     * @return {number}
     */
    offset() {
      return this.fixed;
    }
    /**
     * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
     * @override
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(otherZone) {
      return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    }
    /**
     * Return whether this Zone is valid:
     * All fixed offset zones are valid.
     * @override
     * @type {boolean}
     */
    get isValid() {
      return true;
    }
  };
  var InvalidZone = class extends Zone {
    constructor(zoneName) {
      super();
      this.zoneName = zoneName;
    }
    /** @override **/
    get type() {
      return "invalid";
    }
    /** @override **/
    get name() {
      return this.zoneName;
    }
    /** @override **/
    get isUniversal() {
      return false;
    }
    /** @override **/
    offsetName() {
      return null;
    }
    /** @override **/
    formatOffset() {
      return "";
    }
    /** @override **/
    offset() {
      return NaN;
    }
    /** @override **/
    equals() {
      return false;
    }
    /** @override **/
    get isValid() {
      return false;
    }
  };
  function normalizeZone(input, defaultZone2) {
    if (isUndefined(input) || input === null) {
      return defaultZone2;
    } else if (input instanceof Zone) {
      return input;
    } else if (isString(input)) {
      const lowered = input.toLowerCase();
      if (lowered === "default") return defaultZone2;
      else if (lowered === "local" || lowered === "system") return SystemZone.instance;
      else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
      else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
    } else if (isNumber(input)) {
      return FixedOffsetZone.instance(input);
    } else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") {
      return input;
    } else {
      return new InvalidZone(input);
    }
  }
  var numberingSystems = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
  };
  var numberingSystemsUTF16 = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881]
  };
  var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
  function parseDigits(str) {
    let value = parseInt(str, 10);
    if (isNaN(value)) {
      value = "";
      for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (str[i].search(numberingSystems.hanidec) !== -1) {
          value += hanidecChars.indexOf(str[i]);
        } else {
          for (const key in numberingSystemsUTF16) {
            const [min, max] = numberingSystemsUTF16[key];
            if (code >= min && code <= max) {
              value += code - min;
            }
          }
        }
      }
      return parseInt(value, 10);
    } else {
      return value;
    }
  }
  var digitRegexCache = /* @__PURE__ */ new Map();
  function resetDigitRegexCache() {
    digitRegexCache.clear();
  }
  function digitRegex({ numberingSystem }, append = "") {
    const ns = numberingSystem || "latn";
    let appendCache = digitRegexCache.get(ns);
    if (appendCache === void 0) {
      appendCache = /* @__PURE__ */ new Map();
      digitRegexCache.set(ns, appendCache);
    }
    let regex = appendCache.get(append);
    if (regex === void 0) {
      regex = new RegExp(`${numberingSystems[ns]}${append}`);
      appendCache.set(append, regex);
    }
    return regex;
  }
  var now = () => Date.now();
  var defaultZone = "system";
  var defaultLocale = null;
  var defaultNumberingSystem = null;
  var defaultOutputCalendar = null;
  var twoDigitCutoffYear = 60;
  var throwOnInvalid;
  var defaultWeekSettings = null;
  var Settings = class {
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    static get now() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    static set now(n2) {
      now = n2;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * Use the value "system" to reset this value to the system's time zone.
     * @type {string}
     */
    static set defaultZone(zone) {
      defaultZone = zone;
    }
    /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */
    static get defaultZone() {
      return normalizeZone(defaultZone, SystemZone.instance);
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultLocale() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultLocale(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultNumberingSystem() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultNumberingSystem(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultOutputCalendar() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultOutputCalendar(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * @typedef {Object} WeekSettings
     * @property {number} firstDay
     * @property {number} minimalDays
     * @property {number[]} weekend
     */
    /**
     * @return {WeekSettings|null}
     */
    static get defaultWeekSettings() {
      return defaultWeekSettings;
    }
    /**
     * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
     * how many days are required in the first week of a year.
     * Does not affect existing instances.
     *
     * @param {WeekSettings|null} weekSettings
     */
    static set defaultWeekSettings(weekSettings) {
      defaultWeekSettings = validateWeekSettings(weekSettings);
    }
    /**
     * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
     * @type {number}
     */
    static get twoDigitCutoffYear() {
      return twoDigitCutoffYear;
    }
    /**
     * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
     * @type {number}
     * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
     * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
     * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
     * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
     * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
     */
    static set twoDigitCutoffYear(cutoffYear) {
      twoDigitCutoffYear = cutoffYear % 100;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    static get throwOnInvalid() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    static set throwOnInvalid(t2) {
      throwOnInvalid = t2;
    }
    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCaches() {
      Locale.resetCache();
      IANAZone.resetCache();
      DateTime.resetCache();
      resetDigitRegexCache();
    }
  };
  var Invalid = class {
    constructor(reason, explanation) {
      this.reason = reason;
      this.explanation = explanation;
    }
    toMessage() {
      if (this.explanation) {
        return `${this.reason}: ${this.explanation}`;
      } else {
        return this.reason;
      }
    }
  };
  var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  function unitOutOfRange(unit, value) {
    return new Invalid(
      "unit out of range",
      `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
    );
  }
  function dayOfWeek(year, month, day) {
    const d = new Date(Date.UTC(year, month - 1, day));
    if (year < 100 && year >= 0) {
      d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    const js = d.getUTCDay();
    return js === 0 ? 7 : js;
  }
  function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
  }
  function uncomputeOrdinal(year, ordinal) {
    const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
    return { month: month0 + 1, day };
  }
  function isoWeekdayToLocal(isoWeekday, startOfWeek) {
    return (isoWeekday - startOfWeek + 7) % 7 + 1;
  }
  function gregorianToWeek(gregObj, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = isoWeekdayToLocal(dayOfWeek(year, month, day), startOfWeek);
    let weekNumber = Math.floor((ordinal - weekday + 14 - minDaysInFirstWeek) / 7), weekYear;
    if (weekNumber < 1) {
      weekYear = year - 1;
      weekNumber = weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek);
    } else if (weekNumber > weeksInWeekYear(year, minDaysInFirstWeek, startOfWeek)) {
      weekYear = year + 1;
      weekNumber = 1;
    } else {
      weekYear = year;
    }
    return { weekYear, weekNumber, weekday, ...timeObject(gregObj) };
  }
  function weekToGregorian(weekData, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = isoWeekdayToLocal(dayOfWeek(weekYear, 1, minDaysInFirstWeek), startOfWeek), yearInDays = daysInYear(weekYear);
    let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 7 + minDaysInFirstWeek, year;
    if (ordinal < 1) {
      year = weekYear - 1;
      ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
      year = weekYear + 1;
      ordinal -= daysInYear(weekYear);
    } else {
      year = weekYear;
    }
    const { month, day } = uncomputeOrdinal(year, ordinal);
    return { year, month, day, ...timeObject(weekData) };
  }
  function gregorianToOrdinal(gregData) {
    const { year, month, day } = gregData;
    const ordinal = computeOrdinal(year, month, day);
    return { year, ordinal, ...timeObject(gregData) };
  }
  function ordinalToGregorian(ordinalData) {
    const { year, ordinal } = ordinalData;
    const { month, day } = uncomputeOrdinal(year, ordinal);
    return { year, month, day, ...timeObject(ordinalData) };
  }
  function usesLocalWeekValues(obj, loc) {
    const hasLocaleWeekData = !isUndefined(obj.localWeekday) || !isUndefined(obj.localWeekNumber) || !isUndefined(obj.localWeekYear);
    if (hasLocaleWeekData) {
      const hasIsoWeekData = !isUndefined(obj.weekday) || !isUndefined(obj.weekNumber) || !isUndefined(obj.weekYear);
      if (hasIsoWeekData) {
        throw new ConflictingSpecificationError(
          "Cannot mix locale-based week fields with ISO-based week fields"
        );
      }
      if (!isUndefined(obj.localWeekday)) obj.weekday = obj.localWeekday;
      if (!isUndefined(obj.localWeekNumber)) obj.weekNumber = obj.localWeekNumber;
      if (!isUndefined(obj.localWeekYear)) obj.weekYear = obj.localWeekYear;
      delete obj.localWeekday;
      delete obj.localWeekNumber;
      delete obj.localWeekYear;
      return {
        minDaysInFirstWeek: loc.getMinDaysInFirstWeek(),
        startOfWeek: loc.getStartOfWeek()
      };
    } else {
      return { minDaysInFirstWeek: 4, startOfWeek: 1 };
    }
  }
  function hasInvalidWeekData(obj, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const validYear = isInteger(obj.weekYear), validWeek = integerBetween(
      obj.weekNumber,
      1,
      weeksInWeekYear(obj.weekYear, minDaysInFirstWeek, startOfWeek)
    ), validWeekday = integerBetween(obj.weekday, 1, 7);
    if (!validYear) {
      return unitOutOfRange("weekYear", obj.weekYear);
    } else if (!validWeek) {
      return unitOutOfRange("week", obj.weekNumber);
    } else if (!validWeekday) {
      return unitOutOfRange("weekday", obj.weekday);
    } else return false;
  }
  function hasInvalidOrdinalData(obj) {
    const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validOrdinal) {
      return unitOutOfRange("ordinal", obj.ordinal);
    } else return false;
  }
  function hasInvalidGregorianData(obj) {
    const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validMonth) {
      return unitOutOfRange("month", obj.month);
    } else if (!validDay) {
      return unitOutOfRange("day", obj.day);
    } else return false;
  }
  function hasInvalidTimeData(obj) {
    const { hour, minute, second, millisecond } = obj;
    const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
    if (!validHour) {
      return unitOutOfRange("hour", hour);
    } else if (!validMinute) {
      return unitOutOfRange("minute", minute);
    } else if (!validSecond) {
      return unitOutOfRange("second", second);
    } else if (!validMillisecond) {
      return unitOutOfRange("millisecond", millisecond);
    } else return false;
  }
  function isUndefined(o) {
    return typeof o === "undefined";
  }
  function isNumber(o) {
    return typeof o === "number";
  }
  function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
  }
  function isString(o) {
    return typeof o === "string";
  }
  function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
  }
  function hasRelative() {
    try {
      return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
      return false;
    }
  }
  function hasLocaleWeekInfo() {
    try {
      return typeof Intl !== "undefined" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch (e) {
      return false;
    }
  }
  function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [thing];
  }
  function bestBy(arr, by, compare) {
    if (arr.length === 0) {
      return void 0;
    }
    return arr.reduce((best, next) => {
      const pair2 = [by(next), next];
      if (!best) {
        return pair2;
      } else if (compare(best[0], pair2[0]) === best[0]) {
        return best;
      } else {
        return pair2;
      }
    }, null)[1];
  }
  function pick(obj, keys) {
    return keys.reduce((a, k) => {
      a[k] = obj[k];
      return a;
    }, {});
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  function validateWeekSettings(settings) {
    if (settings == null) {
      return null;
    } else if (typeof settings !== "object") {
      throw new InvalidArgumentError("Week settings must be an object");
    } else {
      if (!integerBetween(settings.firstDay, 1, 7) || !integerBetween(settings.minimalDays, 1, 7) || !Array.isArray(settings.weekend) || settings.weekend.some((v) => !integerBetween(v, 1, 7))) {
        throw new InvalidArgumentError("Invalid week settings");
      }
      return {
        firstDay: settings.firstDay,
        minimalDays: settings.minimalDays,
        weekend: Array.from(settings.weekend)
      };
    }
  }
  function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
  }
  function floorMod(x, n2) {
    return x - n2 * Math.floor(x / n2);
  }
  function padStart(input, n2 = 2) {
    const isNeg = input < 0;
    let padded;
    if (isNeg) {
      padded = "-" + ("" + -input).padStart(n2, "0");
    } else {
      padded = ("" + input).padStart(n2, "0");
    }
    return padded;
  }
  function parseInteger(string2) {
    if (isUndefined(string2) || string2 === null || string2 === "") {
      return void 0;
    } else {
      return parseInt(string2, 10);
    }
  }
  function parseFloating(string2) {
    if (isUndefined(string2) || string2 === null || string2 === "") {
      return void 0;
    } else {
      return parseFloat(string2);
    }
  }
  function parseMillis(fraction) {
    if (isUndefined(fraction) || fraction === null || fraction === "") {
      return void 0;
    } else {
      const f = parseFloat("0." + fraction) * 1e3;
      return Math.floor(f);
    }
  }
  function roundTo(number2, digits, rounding = "round") {
    const factor = 10 ** digits;
    switch (rounding) {
      case "expand":
        return number2 > 0 ? Math.ceil(number2 * factor) / factor : Math.floor(number2 * factor) / factor;
      case "trunc":
        return Math.trunc(number2 * factor) / factor;
      case "round":
        return Math.round(number2 * factor) / factor;
      case "floor":
        return Math.floor(number2 * factor) / factor;
      case "ceil":
        return Math.ceil(number2 * factor) / factor;
      default:
        throw new RangeError(`Value rounding ${rounding} is out of range`);
    }
  }
  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function daysInMonth(year, month) {
    const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) {
      return isLeapYear(modYear) ? 29 : 28;
    } else {
      return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
    }
  }
  function objToLocalTS(obj) {
    let d = Date.UTC(
      obj.year,
      obj.month - 1,
      obj.day,
      obj.hour,
      obj.minute,
      obj.second,
      obj.millisecond
    );
    if (obj.year < 100 && obj.year >= 0) {
      d = new Date(d);
      d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
    }
    return +d;
  }
  function firstWeekOffset(year, minDaysInFirstWeek, startOfWeek) {
    const fwdlw = isoWeekdayToLocal(dayOfWeek(year, 1, minDaysInFirstWeek), startOfWeek);
    return -fwdlw + minDaysInFirstWeek - 1;
  }
  function weeksInWeekYear(weekYear, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const weekOffset = firstWeekOffset(weekYear, minDaysInFirstWeek, startOfWeek);
    const weekOffsetNext = firstWeekOffset(weekYear + 1, minDaysInFirstWeek, startOfWeek);
    return (daysInYear(weekYear) - weekOffset + weekOffsetNext) / 7;
  }
  function untruncateYear(year) {
    if (year > 99) {
      return year;
    } else return year > Settings.twoDigitCutoffYear ? 1900 + year : 2e3 + year;
  }
  function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
    const date2 = new Date(ts), intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    if (timeZone) {
      intlOpts.timeZone = timeZone;
    }
    const modified = { timeZoneName: offsetFormat, ...intlOpts };
    const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date2).find((m) => m.type.toLowerCase() === "timezonename");
    return parsed ? parsed.value : null;
  }
  function signedOffset(offHourStr, offMinuteStr) {
    let offHour = parseInt(offHourStr, 10);
    if (Number.isNaN(offHour)) {
      offHour = 0;
    }
    const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
  }
  function asNumber(value) {
    const numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || !Number.isFinite(numericValue))
      throw new InvalidArgumentError(`Invalid unit value ${value}`);
    return numericValue;
  }
  function normalizeObject(obj, normalizer) {
    const normalized = {};
    for (const u in obj) {
      if (hasOwnProperty(obj, u)) {
        const v = obj[u];
        if (v === void 0 || v === null) continue;
        normalized[normalizer(u)] = asNumber(v);
      }
    }
    return normalized;
  }
  function formatOffset(offset2, format) {
    const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
    switch (format) {
      case "short":
        return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
      case "narrow":
        return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
      case "techie":
        return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
      default:
        throw new RangeError(`Value format ${format} is out of range for property format`);
    }
  }
  function timeObject(obj) {
    return pick(obj, ["hour", "minute", "second", "millisecond"]);
  }
  var monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  function months(length) {
    switch (length) {
      case "narrow":
        return [...monthsNarrow];
      case "short":
        return [...monthsShort];
      case "long":
        return [...monthsLong];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      case "2-digit":
        return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      default:
        return null;
    }
  }
  var weekdaysLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
  function weekdays(length) {
    switch (length) {
      case "narrow":
        return [...weekdaysNarrow];
      case "short":
        return [...weekdaysShort];
      case "long":
        return [...weekdaysLong];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7"];
      default:
        return null;
    }
  }
  var meridiems = ["AM", "PM"];
  var erasLong = ["Before Christ", "Anno Domini"];
  var erasShort = ["BC", "AD"];
  var erasNarrow = ["B", "A"];
  function eras(length) {
    switch (length) {
      case "narrow":
        return [...erasNarrow];
      case "short":
        return [...erasShort];
      case "long":
        return [...erasLong];
      default:
        return null;
    }
  }
  function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
  }
  function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
  }
  function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
  }
  function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
  }
  function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
    const units = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."]
    };
    const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
      const isDay = unit === "days";
      switch (count) {
        case 1:
          return isDay ? "tomorrow" : `next ${units[unit][0]}`;
        case -1:
          return isDay ? "yesterday" : `last ${units[unit][0]}`;
        case 0:
          return isDay ? "today" : `this ${units[unit][0]}`;
      }
    }
    const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
  }
  function stringifyTokens(splits, tokenToString) {
    let s2 = "";
    for (const token of splits) {
      if (token.literal) {
        s2 += token.val;
      } else {
        s2 += tokenToString(token.val);
      }
    }
    return s2;
  }
  var macroTokenToFormatOpts = {
    D: DATE_SHORT,
    DD: DATE_MED,
    DDD: DATE_FULL,
    DDDD: DATE_HUGE,
    t: TIME_SIMPLE,
    tt: TIME_WITH_SECONDS,
    ttt: TIME_WITH_SHORT_OFFSET,
    tttt: TIME_WITH_LONG_OFFSET,
    T: TIME_24_SIMPLE,
    TT: TIME_24_WITH_SECONDS,
    TTT: TIME_24_WITH_SHORT_OFFSET,
    TTTT: TIME_24_WITH_LONG_OFFSET,
    f: DATETIME_SHORT,
    ff: DATETIME_MED,
    fff: DATETIME_FULL,
    ffff: DATETIME_HUGE,
    F: DATETIME_SHORT_WITH_SECONDS,
    FF: DATETIME_MED_WITH_SECONDS,
    FFF: DATETIME_FULL_WITH_SECONDS,
    FFFF: DATETIME_HUGE_WITH_SECONDS
  };
  var Formatter = class _Formatter {
    static create(locale, opts = {}) {
      return new _Formatter(locale, opts);
    }
    static parseFormat(fmt) {
      let current = null, currentFull = "", bracketed = false;
      const splits = [];
      for (let i = 0; i < fmt.length; i++) {
        const c = fmt.charAt(i);
        if (c === "'") {
          if (currentFull.length > 0 || bracketed) {
            splits.push({
              literal: bracketed || /^\s+$/.test(currentFull),
              val: currentFull === "" ? "'" : currentFull
            });
          }
          current = null;
          currentFull = "";
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c;
        } else if (c === current) {
          currentFull += c;
        } else {
          if (currentFull.length > 0) {
            splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
          }
          currentFull = c;
          current = c;
        }
      }
      if (currentFull.length > 0) {
        splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
      }
      return splits;
    }
    static macroTokenToFormatOpts(token) {
      return macroTokenToFormatOpts[token];
    }
    constructor(locale, formatOpts) {
      this.opts = formatOpts;
      this.loc = locale;
      this.systemLoc = null;
    }
    formatWithSystemDefault(dt, opts) {
      if (this.systemLoc === null) {
        this.systemLoc = this.loc.redefaultToSystem();
      }
      const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
      return df.format();
    }
    dtFormatter(dt, opts = {}) {
      return this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    }
    formatDateTime(dt, opts) {
      return this.dtFormatter(dt, opts).format();
    }
    formatDateTimeParts(dt, opts) {
      return this.dtFormatter(dt, opts).formatToParts();
    }
    formatInterval(interval, opts) {
      const df = this.dtFormatter(interval.start, opts);
      return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
    }
    resolvedOptions(dt, opts) {
      return this.dtFormatter(dt, opts).resolvedOptions();
    }
    num(n2, p = 0, signDisplay = void 0) {
      if (this.opts.forceSimple) {
        return padStart(n2, p);
      }
      const opts = { ...this.opts };
      if (p > 0) {
        opts.padTo = p;
      }
      if (signDisplay) {
        opts.signDisplay = signDisplay;
      }
      return this.loc.numberFormatter(opts).format(n2);
    }
    formatDateTimeFromString(dt, fmt) {
      const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string2 = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }
        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string2({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string2(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string2(
        standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
        "weekday"
      ), maybeMacro = (token) => {
        const formatOpts = _Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string2({ era: length }, "era"), tokenToString = (token) => {
        switch (token) {
          // ms
          case "S":
            return this.num(dt.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(dt.millisecond, 3);
          // seconds
          case "s":
            return this.num(dt.second);
          case "ss":
            return this.num(dt.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt.millisecond / 100));
          // minutes
          case "m":
            return this.num(dt.minute);
          case "mm":
            return this.num(dt.minute, 2);
          // hours
          case "h":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return this.num(dt.hour);
          case "HH":
            return this.num(dt.hour, 2);
          // offset
          case "Z":
            return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
          // zone
          case "z":
            return dt.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string2({ day: "numeric" }, "day") : this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string2({ day: "2-digit" }, "day") : this.num(dt.day, 2);
          // weekdays - standalone
          case "c":
            return this.num(dt.weekday);
          case "ccc":
            return weekday("short", true);
          case "cccc":
            return weekday("long", true);
          case "ccccc":
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            return this.num(dt.weekday);
          case "EEE":
            return weekday("short", false);
          case "EEEE":
            return weekday("long", false);
          case "EEEEE":
            return weekday("narrow", false);
          // months - standalone
          case "L":
            return useDateTimeFormatter ? string2({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
          case "LL":
            return useDateTimeFormatter ? string2({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
          case "LLL":
            return month("short", true);
          case "LLLL":
            return month("long", true);
          case "LLLLL":
            return month("narrow", true);
          // months - format
          case "M":
            return useDateTimeFormatter ? string2({ month: "numeric" }, "month") : this.num(dt.month);
          case "MM":
            return useDateTimeFormatter ? string2({ month: "2-digit" }, "month") : this.num(dt.month, 2);
          case "MMM":
            return month("short", false);
          case "MMMM":
            return month("long", false);
          case "MMMMM":
            return month("narrow", false);
          // years
          case "y":
            return useDateTimeFormatter ? string2({ year: "numeric" }, "year") : this.num(dt.year);
          case "yy":
            return useDateTimeFormatter ? string2({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            return useDateTimeFormatter ? string2({ year: "numeric" }, "year") : this.num(dt.year, 4);
          case "yyyyyy":
            return useDateTimeFormatter ? string2({ year: "numeric" }, "year") : this.num(dt.year, 6);
          // eras
          case "G":
            return era("short");
          case "GG":
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt.weekYear, 4);
          case "W":
            return this.num(dt.weekNumber);
          case "WW":
            return this.num(dt.weekNumber, 2);
          case "n":
            return this.num(dt.localWeekNumber);
          case "nn":
            return this.num(dt.localWeekNumber, 2);
          case "ii":
            return this.num(dt.localWeekYear.toString().slice(-2), 2);
          case "iiii":
            return this.num(dt.localWeekYear, 4);
          case "o":
            return this.num(dt.ordinal);
          case "ooo":
            return this.num(dt.ordinal, 3);
          case "q":
            return this.num(dt.quarter);
          case "qq":
            return this.num(dt.quarter, 2);
          case "X":
            return this.num(Math.floor(dt.ts / 1e3));
          case "x":
            return this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };
      return stringifyTokens(_Formatter.parseFormat(fmt), tokenToString);
    }
    formatDurationFromString(dur, fmt) {
      const invertLargest = this.opts.signMode === "negativeLargestOnly" ? -1 : 1;
      const tokenToField = (token) => {
        switch (token[0]) {
          case "S":
            return "milliseconds";
          case "s":
            return "seconds";
          case "m":
            return "minutes";
          case "h":
            return "hours";
          case "d":
            return "days";
          case "w":
            return "weeks";
          case "M":
            return "months";
          case "y":
            return "years";
          default:
            return null;
        }
      }, tokenToString = (lildur, info) => (token) => {
        const mapped = tokenToField(token);
        if (mapped) {
          const inversionFactor = info.isNegativeDuration && mapped !== info.largestUnit ? invertLargest : 1;
          let signDisplay;
          if (this.opts.signMode === "negativeLargestOnly" && mapped !== info.largestUnit) {
            signDisplay = "never";
          } else if (this.opts.signMode === "all") {
            signDisplay = "always";
          } else {
            signDisplay = "auto";
          }
          return this.num(lildur.get(mapped) * inversionFactor, token.length, signDisplay);
        } else {
          return token;
        }
      }, tokens = _Formatter.parseFormat(fmt), realTokens = tokens.reduce(
        (found, { literal: literal2, val }) => literal2 ? found : found.concat(val),
        []
      ), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t2) => t2)), durationInfo = {
        isNegativeDuration: collapsed < 0,
        // this relies on "collapsed" being based on "shiftTo", which builds up the object
        // in order
        largestUnit: Object.keys(collapsed.values)[0]
      };
      return stringifyTokens(tokens, tokenToString(collapsed, durationInfo));
    }
  };
  var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
  function combineRegexes(...regexes) {
    const full = regexes.reduce((f, r) => f + r.source, "");
    return RegExp(`^${full}$`);
  }
  function combineExtractors(...extractors) {
    return (m) => extractors.reduce(
      ([mergedVals, mergedZone, cursor], ex) => {
        const [val, zone, next] = ex(m, cursor);
        return [{ ...mergedVals, ...val }, zone || mergedZone, next];
      },
      [{}, null, 1]
    ).slice(0, 2);
  }
  function parse(s2, ...patterns) {
    if (s2 == null) {
      return [null, null];
    }
    for (const [regex, extractor] of patterns) {
      const m = regex.exec(s2);
      if (m) {
        return extractor(m);
      }
    }
    return [null, null];
  }
  function simpleParse(...keys) {
    return (match2, cursor) => {
      const ret = {};
      let i;
      for (i = 0; i < keys.length; i++) {
        ret[keys[i]] = parseInteger(match2[cursor + i]);
      }
      return [ret, null, cursor + i];
    };
  }
  var offsetRegex = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/;
  var isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
  var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
  var isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
  var isoTimeExtensionRegex = RegExp(`(?:[Tt]${isoTimeRegex.source})?`);
  var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
  var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
  var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
  var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
  var extractISOOrdinalData = simpleParse("year", "ordinal");
  var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
  var sqlTimeRegex = RegExp(
    `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
  );
  var sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
  function int(match2, pos, fallback) {
    const m = match2[pos];
    return isUndefined(m) ? fallback : parseInteger(m);
  }
  function extractISOYmd(match2, cursor) {
    const item = {
      year: int(match2, cursor),
      month: int(match2, cursor + 1, 1),
      day: int(match2, cursor + 2, 1)
    };
    return [item, null, cursor + 3];
  }
  function extractISOTime(match2, cursor) {
    const item = {
      hours: int(match2, cursor, 0),
      minutes: int(match2, cursor + 1, 0),
      seconds: int(match2, cursor + 2, 0),
      milliseconds: parseMillis(match2[cursor + 3])
    };
    return [item, null, cursor + 4];
  }
  function extractISOOffset(match2, cursor) {
    const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
    return [{}, zone, cursor + 3];
  }
  function extractIANAZone(match2, cursor) {
    const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
    return [{}, zone, cursor + 1];
  }
  var isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
  var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
  function extractISODuration(match2) {
    const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
    const hasNegativePrefix = s2[0] === "-";
    const negativeSeconds = secondStr && secondStr[0] === "-";
    const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
    return [
      {
        years: maybeNegate(parseFloating(yearStr)),
        months: maybeNegate(parseFloating(monthStr)),
        weeks: maybeNegate(parseFloating(weekStr)),
        days: maybeNegate(parseFloating(dayStr)),
        hours: maybeNegate(parseFloating(hourStr)),
        minutes: maybeNegate(parseFloating(minuteStr)),
        seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
        milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
      }
    ];
  }
  var obsOffsets = {
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    const result = {
      year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
      month: monthsShort.indexOf(monthStr) + 1,
      day: parseInteger(dayStr),
      hour: parseInteger(hourStr),
      minute: parseInteger(minuteStr)
    };
    if (secondStr) result.second = parseInteger(secondStr);
    if (weekdayStr) {
      result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
    }
    return result;
  }
  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
  function extractRFC2822(match2) {
    const [
      ,
      weekdayStr,
      dayStr,
      monthStr,
      yearStr,
      hourStr,
      minuteStr,
      secondStr,
      obsOffset,
      milOffset,
      offHourStr,
      offMinuteStr
    ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    let offset2;
    if (obsOffset) {
      offset2 = obsOffsets[obsOffset];
    } else if (milOffset) {
      offset2 = 0;
    } else {
      offset2 = signedOffset(offHourStr, offMinuteStr);
    }
    return [result, new FixedOffsetZone(offset2)];
  }
  function preprocessRFC2822(s2) {
    return s2.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
  }
  var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
  var rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
  var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
  function extractRFC1123Or850(match2) {
    const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [result, FixedOffsetZone.utcInstance];
  }
  function extractASCII(match2) {
    const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [result, FixedOffsetZone.utcInstance];
  }
  var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
  var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
  var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
  var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
  var extractISOYmdTimeAndOffset = combineExtractors(
    extractISOYmd,
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  var extractISOWeekTimeAndOffset = combineExtractors(
    extractISOWeekData,
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  var extractISOOrdinalDateAndTime = combineExtractors(
    extractISOOrdinalData,
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  var extractISOTimeAndOffset = combineExtractors(
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  function parseISODate(s2) {
    return parse(
      s2,
      [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
      [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
      [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
      [isoTimeCombinedRegex, extractISOTimeAndOffset]
    );
  }
  function parseRFC2822Date(s2) {
    return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
  }
  function parseHTTPDate(s2) {
    return parse(
      s2,
      [rfc1123, extractRFC1123Or850],
      [rfc850, extractRFC1123Or850],
      [ascii, extractASCII]
    );
  }
  function parseISODuration(s2) {
    return parse(s2, [isoDuration, extractISODuration]);
  }
  var extractISOTimeOnly = combineExtractors(extractISOTime);
  function parseISOTimeOnly(s2) {
    return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
  }
  var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
  var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
  var extractISOTimeOffsetAndIANAZone = combineExtractors(
    extractISOTime,
    extractISOOffset,
    extractIANAZone
  );
  function parseSQL(s2) {
    return parse(
      s2,
      [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
      [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
    );
  }
  var INVALID$2 = "Invalid Duration";
  var lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1e3
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1e3
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
    minutes: { seconds: 60, milliseconds: 60 * 1e3 },
    seconds: { milliseconds: 1e3 }
  };
  var casualMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1e3
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1e3
    },
    ...lowOrderMatrix
  };
  var daysInYearAccurate = 146097 / 400;
  var daysInMonthAccurate = 146097 / 4800;
  var accurateMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: daysInYearAccurate * 24 / 4,
      minutes: daysInYearAccurate * 24 * 60 / 4,
      seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
    },
    ...lowOrderMatrix
  };
  var orderedUnits$1 = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
  ];
  var reverseUnits = orderedUnits$1.slice(0).reverse();
  function clone$1(dur, alts, clear = false) {
    const conf = {
      values: clear ? alts.values : { ...dur.values, ...alts.values || {} },
      loc: dur.loc.clone(alts.loc),
      conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
      matrix: alts.matrix || dur.matrix
    };
    return new Duration(conf);
  }
  function durationToMillis(matrix, vals) {
    let sum2 = vals.milliseconds ?? 0;
    for (const unit of reverseUnits.slice(1)) {
      if (vals[unit]) {
        sum2 += vals[unit] * matrix[unit]["milliseconds"];
      }
    }
    return sum2;
  }
  function normalizeValues(matrix, vals) {
    const factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;
    orderedUnits$1.reduceRight((previous, current) => {
      if (!isUndefined(vals[current])) {
        if (previous) {
          const previousVal = vals[previous] * factor;
          const conv = matrix[current][previous];
          const rollUp = Math.floor(previousVal / conv);
          vals[current] += rollUp * factor;
          vals[previous] -= rollUp * conv * factor;
        }
        return current;
      } else {
        return previous;
      }
    }, null);
    orderedUnits$1.reduce((previous, current) => {
      if (!isUndefined(vals[current])) {
        if (previous) {
          const fraction = vals[previous] % 1;
          vals[previous] -= fraction;
          vals[current] += fraction * matrix[previous][current];
        }
        return current;
      } else {
        return previous;
      }
    }, null);
  }
  function removeZeroes(vals) {
    const newVals = {};
    for (const [key, value] of Object.entries(vals)) {
      if (value !== 0) {
        newVals[key] = value;
      }
    }
    return newVals;
  }
  var Duration = class _Duration {
    /**
     * @private
     */
    constructor(config) {
      const accurate = config.conversionAccuracy === "longterm" || false;
      let matrix = accurate ? accurateMatrix : casualMatrix;
      if (config.matrix) {
        matrix = config.matrix;
      }
      this.values = config.values;
      this.loc = config.loc || Locale.create();
      this.conversionAccuracy = accurate ? "longterm" : "casual";
      this.invalid = config.invalid || null;
      this.matrix = matrix;
      this.isLuxonDuration = true;
    }
    /**
     * Create Duration from a number of milliseconds.
     * @param {number} count of milliseconds
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    static fromMillis(count, opts) {
      return _Duration.fromObject({ milliseconds: count }, opts);
    }
    /**
     * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
     * If this object is empty then a zero milliseconds duration is returned.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.quarters
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {Object} [opts=[]] - options for creating this Duration
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the custom conversion system to use
     * @return {Duration}
     */
    static fromObject(obj, opts = {}) {
      if (obj == null || typeof obj !== "object") {
        throw new InvalidArgumentError(
          `Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`
        );
      }
      return new _Duration({
        values: normalizeObject(obj, _Duration.normalizeUnit),
        loc: Locale.fromObject(opts),
        conversionAccuracy: opts.conversionAccuracy,
        matrix: opts.matrix
      });
    }
    /**
     * Create a Duration from DurationLike.
     *
     * @param {Object | number | Duration} durationLike
     * One of:
     * - object with keys like 'years' and 'hours'.
     * - number representing milliseconds
     * - Duration instance
     * @return {Duration}
     */
    static fromDurationLike(durationLike) {
      if (isNumber(durationLike)) {
        return _Duration.fromMillis(durationLike);
      } else if (_Duration.isDuration(durationLike)) {
        return durationLike;
      } else if (typeof durationLike === "object") {
        return _Duration.fromObject(durationLike);
      } else {
        throw new InvalidArgumentError(
          `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
        );
      }
    }
    /**
     * Create a Duration from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the preset conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */
    static fromISO(text, opts) {
      const [parsed] = parseISODuration(text);
      if (parsed) {
        return _Duration.fromObject(parsed, opts);
      } else {
        return _Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
      }
    }
    /**
     * Create a Duration from an ISO 8601 time string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
     * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @return {Duration}
     */
    static fromISOTime(text, opts) {
      const [parsed] = parseISOTimeOnly(text);
      if (parsed) {
        return _Duration.fromObject(parsed, opts);
      } else {
        return _Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
      }
    }
    /**
     * Create an invalid Duration.
     * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Duration}
     */
    static invalid(reason, explanation = null) {
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
      }
      const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidDurationError(invalid);
      } else {
        return new _Duration({ invalid });
      }
    }
    /**
     * @private
     */
    static normalizeUnit(unit) {
      const normalized = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[unit ? unit.toLowerCase() : unit];
      if (!normalized) throw new InvalidUnitError(unit);
      return normalized;
    }
    /**
     * Check if an object is a Duration. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isDuration(o) {
      return o && o.isLuxonDuration || false;
    }
    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @type {string}
     */
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
     * * `S` for milliseconds
     * * `s` for seconds
     * * `m` for minutes
     * * `h` for hours
     * * `d` for days
     * * `w` for weeks
     * * `M` for months
     * * `y` for years
     * Notes:
     * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
     * * Tokens can be escaped by wrapping with single quotes.
     * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
     * @param {string} fmt - the format string
     * @param {Object} opts - options
     * @param {boolean} [opts.floor=true] - floor numerical values
     * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
     * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
     * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
     * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
     * @return {string}
     */
    toFormat(fmt, opts = {}) {
      const fmtOpts = {
        ...opts,
        floor: opts.round !== false && opts.floor !== false
      };
      return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
    }
    /**
     * Returns a string representation of a Duration with all units included.
     * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
     * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
     * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
     * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
     * @example
     * ```js
     * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
     * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
     * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
     * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
     * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
     * ```
     */
    toHuman(opts = {}) {
      if (!this.isValid) return INVALID$2;
      const showZeros = opts.showZeros !== false;
      const l2 = orderedUnits$1.map((unit) => {
        const val = this.values[unit];
        if (isUndefined(val) || val === 0 && !showZeros) {
          return null;
        }
        return this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) }).format(val);
      }).filter((n2) => n2);
      return this.loc.listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts }).format(l2);
    }
    /**
     * Returns a JavaScript object with this Duration's values.
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {Object}
     */
    toObject() {
      if (!this.isValid) return {};
      return { ...this.values };
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
     * @return {string}
     */
    toISO() {
      if (!this.isValid) return null;
      let s2 = "P";
      if (this.years !== 0) s2 += this.years + "Y";
      if (this.months !== 0 || this.quarters !== 0) s2 += this.months + this.quarters * 3 + "M";
      if (this.weeks !== 0) s2 += this.weeks + "W";
      if (this.days !== 0) s2 += this.days + "D";
      if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
        s2 += "T";
      if (this.hours !== 0) s2 += this.hours + "H";
      if (this.minutes !== 0) s2 += this.minutes + "M";
      if (this.seconds !== 0 || this.milliseconds !== 0)
        s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
      if (s2 === "P") s2 += "T0S";
      return s2;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
     * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
     * @return {string}
     */
    toISOTime(opts = {}) {
      if (!this.isValid) return null;
      const millis = this.toMillis();
      if (millis < 0 || millis >= 864e5) return null;
      opts = {
        suppressMilliseconds: false,
        suppressSeconds: false,
        includePrefix: false,
        format: "extended",
        ...opts,
        includeOffset: false
      };
      const dateTime = DateTime.fromMillis(millis, { zone: "UTC" });
      return dateTime.toISOTime(opts);
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */
    toJSON() {
      return this.toISO();
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */
    toString() {
      return this.toISO();
    }
    /**
     * Returns a string representation of this Duration appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      if (this.isValid) {
        return `Duration { values: ${JSON.stringify(this.values)} }`;
      } else {
        return `Duration { Invalid, reason: ${this.invalidReason} }`;
      }
    }
    /**
     * Returns an milliseconds value of this Duration.
     * @return {number}
     */
    toMillis() {
      if (!this.isValid) return NaN;
      return durationToMillis(this.matrix, this.values);
    }
    /**
     * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
     * @return {number}
     */
    valueOf() {
      return this.toMillis();
    }
    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    plus(duration2) {
      if (!this.isValid) return this;
      const dur = _Duration.fromDurationLike(duration2), result = {};
      for (const k of orderedUnits$1) {
        if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
          result[k] = dur.get(k) + this.get(k);
        }
      }
      return clone$1(this, { values: result }, true);
    }
    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    minus(duration2) {
      if (!this.isValid) return this;
      const dur = _Duration.fromDurationLike(duration2);
      return this.plus(dur.negate());
    }
    /**
     * Scale this Duration by the specified amount. Return a newly-constructed Duration.
     * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
     * @return {Duration}
     */
    mapUnits(fn2) {
      if (!this.isValid) return this;
      const result = {};
      for (const k of Object.keys(this.values)) {
        result[k] = asNumber(fn2(this.values[k], k));
      }
      return clone$1(this, { values: result }, true);
    }
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
     * @return {number}
     */
    get(unit) {
      return this[_Duration.normalizeUnit(unit)];
    }
    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {Object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */
    set(values) {
      if (!this.isValid) return this;
      const mixed = { ...this.values, ...normalizeObject(values, _Duration.normalizeUnit) };
      return clone$1(this, { values: mixed });
    }
    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */
    reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
      const loc = this.loc.clone({ locale, numberingSystem });
      const opts = { loc, matrix, conversionAccuracy };
      return clone$1(this, opts);
    }
    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */
    as(unit) {
      return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }
    /**
     * Reduce this Duration to its canonical representation in its current units.
     * Assuming the overall value of the Duration is positive, this means:
     * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
     * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
     *   the overall value would be negative, see third example)
     * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
     *
     * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
     * @return {Duration}
     */
    normalize() {
      if (!this.isValid) return this;
      const vals = this.toObject();
      normalizeValues(this.matrix, vals);
      return clone$1(this, { values: vals }, true);
    }
    /**
     * Rescale units to its largest representation
     * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
     * @return {Duration}
     */
    rescale() {
      if (!this.isValid) return this;
      const vals = removeZeroes(this.normalize().shiftToAll().toObject());
      return clone$1(this, { values: vals }, true);
    }
    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */
    shiftTo(...units) {
      if (!this.isValid) return this;
      if (units.length === 0) {
        return this;
      }
      units = units.map((u) => _Duration.normalizeUnit(u));
      const built = {}, accumulated = {}, vals = this.toObject();
      let lastUnit;
      for (const k of orderedUnits$1) {
        if (units.indexOf(k) >= 0) {
          lastUnit = k;
          let own = 0;
          for (const ak in accumulated) {
            own += this.matrix[ak][k] * accumulated[ak];
            accumulated[ak] = 0;
          }
          if (isNumber(vals[k])) {
            own += vals[k];
          }
          const i = Math.trunc(own);
          built[k] = i;
          accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
        } else if (isNumber(vals[k])) {
          accumulated[k] = vals[k];
        }
      }
      for (const key in accumulated) {
        if (accumulated[key] !== 0) {
          built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        }
      }
      normalizeValues(this.matrix, built);
      return clone$1(this, { values: built }, true);
    }
    /**
     * Shift this Duration to all available units.
     * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
     * @return {Duration}
     */
    shiftToAll() {
      if (!this.isValid) return this;
      return this.shiftTo(
        "years",
        "months",
        "weeks",
        "days",
        "hours",
        "minutes",
        "seconds",
        "milliseconds"
      );
    }
    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */
    negate() {
      if (!this.isValid) return this;
      const negated = {};
      for (const k of Object.keys(this.values)) {
        negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
      }
      return clone$1(this, { values: negated }, true);
    }
    /**
     * Removes all units with values equal to 0 from this Duration.
     * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
     * @return {Duration}
     */
    removeZeros() {
      if (!this.isValid) return this;
      const vals = removeZeroes(this.values);
      return clone$1(this, { values: vals }, true);
    }
    /**
     * Get the years.
     * @type {number}
     */
    get years() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */
    get quarters() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */
    get months() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */
    get weeks() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */
    get days() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */
    get hours() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */
    get minutes() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */
    get seconds() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */
    get milliseconds() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
    get isValid() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */
    equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }
      if (!this.loc.equals(other.loc)) {
        return false;
      }
      function eq(v1, v2) {
        if (v1 === void 0 || v1 === 0) return v2 === void 0 || v2 === 0;
        return v1 === v2;
      }
      for (const u of orderedUnits$1) {
        if (!eq(this.values[u], other.values[u])) {
          return false;
        }
      }
      return true;
    }
  };
  var INVALID$1 = "Invalid Interval";
  function validateStartEnd(start, end) {
    if (!start || !start.isValid) {
      return Interval.invalid("missing or invalid start");
    } else if (!end || !end.isValid) {
      return Interval.invalid("missing or invalid end");
    } else if (end < start) {
      return Interval.invalid(
        "end before start",
        `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
      );
    } else {
      return null;
    }
  }
  var Interval = class _Interval {
    /**
     * @private
     */
    constructor(config) {
      this.s = config.start;
      this.e = config.end;
      this.invalid = config.invalid || null;
      this.isLuxonInterval = true;
    }
    /**
     * Create an invalid Interval.
     * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Interval}
     */
    static invalid(reason, explanation = null) {
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
      }
      const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidIntervalError(invalid);
      } else {
        return new _Interval({ invalid });
      }
    }
    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|Date|Object} start
     * @param {DateTime|Date|Object} end
     * @return {Interval}
     */
    static fromDateTimes(start, end) {
      const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
      const validateError = validateStartEnd(builtStart, builtEnd);
      if (validateError == null) {
        return new _Interval({
          start: builtStart,
          end: builtEnd
        });
      } else {
        return validateError;
      }
    }
    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|Date|Object} start
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static after(start, duration2) {
      const dur = Duration.fromDurationLike(duration2), dt = friendlyDateTime(start);
      return _Interval.fromDateTimes(dt, dt.plus(dur));
    }
    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static before(end, duration2) {
      const dur = Duration.fromDurationLike(duration2), dt = friendlyDateTime(end);
      return _Interval.fromDateTimes(dt.minus(dur), dt);
    }
    /**
     * Create an Interval from an ISO 8601 string.
     * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
     * @param {string} text - the ISO string to parse
     * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {Interval}
     */
    static fromISO(text, opts) {
      const [s2, e] = (text || "").split("/", 2);
      if (s2 && e) {
        let start, startIsValid;
        try {
          start = DateTime.fromISO(s2, opts);
          startIsValid = start.isValid;
        } catch (e2) {
          startIsValid = false;
        }
        let end, endIsValid;
        try {
          end = DateTime.fromISO(e, opts);
          endIsValid = end.isValid;
        } catch (e2) {
          endIsValid = false;
        }
        if (startIsValid && endIsValid) {
          return _Interval.fromDateTimes(start, end);
        }
        if (startIsValid) {
          const dur = Duration.fromISO(e, opts);
          if (dur.isValid) {
            return _Interval.after(start, dur);
          }
        } else if (endIsValid) {
          const dur = Duration.fromISO(s2, opts);
          if (dur.isValid) {
            return _Interval.before(end, dur);
          }
        }
      }
      return _Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
    /**
     * Check if an object is an Interval. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isInterval(o) {
      return o && o.isLuxonInterval || false;
    }
    /**
     * Returns the start of the Interval
     * @type {DateTime}
     */
    get start() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval. This is the first instant which is not part of the interval
     * (Interval is half-open).
     * @type {DateTime}
     */
    get end() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns the last DateTime included in the interval (since end is not part of the interval)
     * @type {DateTime}
     */
    get lastDateTime() {
      return this.isValid ? this.e ? this.e.minus(1) : null : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
    get isValid() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */
    length(unit = "milliseconds") {
      return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
    }
    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
     * @return {number}
     */
    count(unit = "milliseconds", opts) {
      if (!this.isValid) return NaN;
      const start = this.start.startOf(unit, opts);
      let end;
      if (opts?.useLocaleWeeks) {
        end = this.end.reconfigure({ locale: start.locale });
      } else {
        end = this.end;
      }
      end = end.startOf(unit, opts);
      return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
    }
    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */
    hasSame(unit) {
      return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    }
    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */
    isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
    /**
     * Return whether this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isAfter(dateTime) {
      if (!this.isValid) return false;
      return this.s > dateTime;
    }
    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isBefore(dateTime) {
      if (!this.isValid) return false;
      return this.e <= dateTime;
    }
    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    contains(dateTime) {
      if (!this.isValid) return false;
      return this.s <= dateTime && this.e > dateTime;
    }
    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {Object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */
    set({ start, end } = {}) {
      if (!this.isValid) return this;
      return _Interval.fromDateTimes(start || this.s, end || this.e);
    }
    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTime} dateTimes - the unit of time to count.
     * @return {Array}
     */
    splitAt(...dateTimes) {
      if (!this.isValid) return [];
      const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort((a, b) => a.toMillis() - b.toMillis()), results = [];
      let { s: s2 } = this, i = 0;
      while (s2 < this.e) {
        const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
        results.push(_Interval.fromDateTimes(s2, next));
        s2 = next;
        i += 1;
      }
      return results;
    }
    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|Object|number} duration - The length of each resulting interval.
     * @return {Array}
     */
    splitBy(duration2) {
      const dur = Duration.fromDurationLike(duration2);
      if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
        return [];
      }
      let { s: s2 } = this, idx = 1, next;
      const results = [];
      while (s2 < this.e) {
        const added = this.start.plus(dur.mapUnits((x) => x * idx));
        next = +added > +this.e ? this.e : added;
        results.push(_Interval.fromDateTimes(s2, next));
        s2 = next;
        idx += 1;
      }
      return results;
    }
    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {Array}
     */
    divideEqually(numberOfParts) {
      if (!this.isValid) return [];
      return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }
    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */
    overlaps(other) {
      return this.e > other.s && this.s < other.e;
    }
    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsStart(other) {
      if (!this.isValid) return false;
      return +this.e === +other.s;
    }
    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsEnd(other) {
      if (!this.isValid) return false;
      return +other.e === +this.s;
    }
    /**
     * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
     * @param {Interval} other
     * @return {boolean}
     */
    engulfs(other) {
      if (!this.isValid) return false;
      return this.s <= other.s && this.e >= other.e;
    }
    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */
    equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }
      return this.s.equals(other.s) && this.e.equals(other.e);
    }
    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * Returns null if the intersection is empty, meaning, the intervals don't intersect.
     * @param {Interval} other
     * @return {Interval}
     */
    intersection(other) {
      if (!this.isValid) return this;
      const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
      if (s2 >= e) {
        return null;
      } else {
        return _Interval.fromDateTimes(s2, e);
      }
    }
    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */
    union(other) {
      if (!this.isValid) return this;
      const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
      return _Interval.fromDateTimes(s2, e);
    }
    /**
     * Merge an array of Intervals into an equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
     * and ending with the latest.
     *
     * @param {Array} intervals
     * @return {Array}
     */
    static merge(intervals) {
      const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        },
        [[], null]
      );
      if (final) {
        found.push(final);
      }
      return found;
    }
    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {Array} intervals
     * @return {Array}
     */
    static xor(intervals) {
      let start = null, currentCount = 0;
      const results = [], ends = intervals.map((i) => [
        { time: i.s, type: "s" },
        { time: i.e, type: "e" }
      ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
      for (const i of arr) {
        currentCount += i.type === "s" ? 1 : -1;
        if (currentCount === 1) {
          start = i.time;
        } else {
          if (start && +start !== +i.time) {
            results.push(_Interval.fromDateTimes(start, i.time));
          }
          start = null;
        }
      }
      return _Interval.merge(results);
    }
    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {Array}
     */
    difference(...intervals) {
      return _Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
    }
    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */
    toString() {
      if (!this.isValid) return INVALID$1;
      return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
    }
    /**
     * Returns a string representation of this Interval appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      if (this.isValid) {
        return `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`;
      } else {
        return `Interval { Invalid, reason: ${this.invalidReason} }`;
      }
    }
    /**
     * Returns a localized string representing this Interval. Accepts the same options as the
     * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
     * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
     * is browser-specific, but in general it will return an appropriate representation of the
     * Interval in the assigned locale. Defaults to the system's locale if no locale has been
     * specified.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
     * Intl.DateTimeFormat constructor options.
     * @param {Object} opts - Options to override the configuration of the start DateTime.
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
     * @return {string}
     */
    toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
      return this.isValid ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
    toISO(opts) {
      if (!this.isValid) return INVALID$1;
      return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
    }
    /**
     * Returns an ISO 8601-compliant string representation of date of this Interval.
     * The time components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {string}
     */
    toISODate() {
      if (!this.isValid) return INVALID$1;
      return `${this.s.toISODate()}/${this.e.toISODate()}`;
    }
    /**
     * Returns an ISO 8601-compliant string representation of time of this Interval.
     * The date components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
    toISOTime(opts) {
      if (!this.isValid) return INVALID$1;
      return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
    }
    /**
     * Returns a string representation of this Interval formatted according to the specified format
     * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
     * formatting tool.
     * @param {string} dateFormat - The format string. This string formats the start and end time.
     * See {@link DateTime#toFormat} for details.
     * @param {Object} opts - Options.
     * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
     * representations.
     * @return {string}
     */
    toFormat(dateFormat, { separator = " \u2013 " } = {}) {
      if (!this.isValid) return INVALID$1;
      return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
    }
    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */
    toDuration(unit, opts) {
      if (!this.isValid) {
        return Duration.invalid(this.invalidReason);
      }
      return this.e.diff(this.s, unit, opts);
    }
    /**
     * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
     * @param {function} mapFn
     * @return {Interval}
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
     */
    mapEndpoints(mapFn) {
      return _Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    }
  };
  var Info = class {
    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */
    static hasDST(zone = Settings.defaultZone) {
      const proto = DateTime.now().setZone(zone).set({ month: 12 });
      return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
    }
    /**
     * Return whether the specified zone is a valid IANA specifier.
     * @param {string} zone - Zone to check
     * @return {boolean}
     */
    static isValidIANAZone(zone) {
      return IANAZone.isValidZone(zone);
    }
    /**
     * Converts the input into a {@link Zone} instance.
     *
     * * If `input` is already a Zone instance, it is returned unchanged.
     * * If `input` is a string containing a valid time zone name, a Zone instance
     *   with that name is returned.
     * * If `input` is a string that doesn't refer to a known time zone, a Zone
     *   instance with {@link Zone#isValid} == false is returned.
     * * If `input is a number, a Zone instance with the specified fixed offset
     *   in minutes is returned.
     * * If `input` is `null` or `undefined`, the default zone is returned.
     * @param {string|Zone|number} [input] - the value to be converted
     * @return {Zone}
     */
    static normalizeZone(input) {
      return normalizeZone(input, Settings.defaultZone);
    }
    /**
     * Get the weekday on which the week starts according to the given locale.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
     */
    static getStartOfWeek({ locale = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale)).getStartOfWeek();
    }
    /**
     * Get the minimum number of days necessary in a week before it is considered part of the next year according
     * to the given locale.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number}
     */
    static getMinimumDaysInFirstWeek({ locale = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale)).getMinDaysInFirstWeek();
    }
    /**
     * Get the weekdays, which are considered the weekend according to the given locale
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
     */
    static getWeekendWeekdays({ locale = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale)).getWeekendDays().slice();
    }
    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {Array}
     */
    static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
      return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    }
    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link Info#months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {Array}
     */
    static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
      return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    }
    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     * @return {Array}
     */
    static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
    }
    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link Info#weekdays}
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @return {Array}
     */
    static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
      return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    }
    /**
     * Return an array of meridiems.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
     * @return {Array}
     */
    static meridiems({ locale = null } = {}) {
      return Locale.create(locale).meridiems();
    }
    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {Array}
     */
    static eras(length = "short", { locale = null } = {}) {
      return Locale.create(locale, null, "gregory").eras(length);
    }
    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `relative`: whether this environment supports relative time formatting
     * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
     * @example Info.features() //=> { relative: false, localeWeek: true }
     * @return {Object}
     */
    static features() {
      return { relative: hasRelative(), localeWeek: hasLocaleWeekInfo() };
    }
  };
  function dayDiff(earlier, later) {
    const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(Duration.fromMillis(ms).as("days"));
  }
  function highOrderDiffs(cursor, later, units) {
    const differs = [
      ["years", (a, b) => b.year - a.year],
      ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
      ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
      [
        "weeks",
        (a, b) => {
          const days = dayDiff(a, b);
          return (days - days % 7) / 7;
        }
      ],
      ["days", dayDiff]
    ];
    const results = {};
    const earlier = cursor;
    let lowestOrder, highWater;
    for (const [unit, differ] of differs) {
      if (units.indexOf(unit) >= 0) {
        lowestOrder = unit;
        results[unit] = differ(cursor, later);
        highWater = earlier.plus(results);
        if (highWater > later) {
          results[unit]--;
          cursor = earlier.plus(results);
          if (cursor > later) {
            highWater = cursor;
            results[unit]--;
            cursor = earlier.plus(results);
          }
        } else {
          cursor = highWater;
        }
      }
    }
    return [cursor, results, highWater, lowestOrder];
  }
  function diff(earlier, later, units, opts) {
    let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
    const remainingMillis = later - cursor;
    const lowerOrderUnits = units.filter(
      (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
    );
    if (lowerOrderUnits.length === 0) {
      if (highWater < later) {
        highWater = cursor.plus({ [lowestOrder]: 1 });
      }
      if (highWater !== cursor) {
        results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
      }
    }
    const duration2 = Duration.fromObject(results, opts);
    if (lowerOrderUnits.length > 0) {
      return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration2);
    } else {
      return duration2;
    }
  }
  var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
  function intUnit(regex, post = (i) => i) {
    return { regex, deser: ([s2]) => post(parseDigits(s2)) };
  }
  var NBSP = String.fromCharCode(160);
  var spaceOrNBSP = `[ ${NBSP}]`;
  var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
  function fixListRegex(s2) {
    return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
  }
  function stripInsensitivities(s2) {
    return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
  }
  function oneOf(strings, startIndex) {
    if (strings === null) {
      return null;
    } else {
      return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
      };
    }
  }
  function offset(regex, groups) {
    return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
  }
  function simple(regex) {
    return { regex, deser: ([s2]) => s2 };
  }
  function escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function unitForToken(token, loc) {
    const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal2 = (t2) => ({ regex: RegExp(escapeToken(t2.val)), deser: ([s2]) => s2, literal: true }), unitate = (t2) => {
      if (token.literal) {
        return literal2(t2);
      }
      switch (t2.val) {
        // era
        case "G":
          return oneOf(loc.eras("short"), 0);
        case "GG":
          return oneOf(loc.eras("long"), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true), 1);
        case "MMMM":
          return oneOf(loc.months("long", true), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        // this special-case "token" represents a place where a macro-token expanded into a white-space literal
        // in this case we accept any non-newline white-space
        case " ":
          return simple(/[^\S\n\r]/);
        default:
          return literal2(t2);
      }
    };
    const unit = unitate(token) || {
      invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
  }
  var partTypeStyleToTokenVal = {
    year: {
      "2-digit": "yy",
      numeric: "yyyyy"
    },
    month: {
      numeric: "M",
      "2-digit": "MM",
      short: "MMM",
      long: "MMMM"
    },
    day: {
      numeric: "d",
      "2-digit": "dd"
    },
    weekday: {
      short: "EEE",
      long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {
      numeric: "h",
      "2-digit": "hh"
    },
    hour24: {
      numeric: "H",
      "2-digit": "HH"
    },
    minute: {
      numeric: "m",
      "2-digit": "mm"
    },
    second: {
      numeric: "s",
      "2-digit": "ss"
    },
    timeZoneName: {
      long: "ZZZZZ",
      short: "ZZZ"
    }
  };
  function tokenForPart(part, formatOpts, resolvedOpts) {
    const { type, value } = part;
    if (type === "literal") {
      const isSpace2 = /^\s+$/.test(value);
      return {
        literal: !isSpace2,
        val: isSpace2 ? " " : value
      };
    }
    const style = formatOpts[type];
    let actualType = type;
    if (type === "hour") {
      if (formatOpts.hour12 != null) {
        actualType = formatOpts.hour12 ? "hour12" : "hour24";
      } else if (formatOpts.hourCycle != null) {
        if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") {
          actualType = "hour12";
        } else {
          actualType = "hour24";
        }
      } else {
        actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
      }
    }
    let val = partTypeStyleToTokenVal[actualType];
    if (typeof val === "object") {
      val = val[style];
    }
    if (val) {
      return {
        literal: false,
        val
      };
    }
    return void 0;
  }
  function buildRegex(units) {
    const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
    return [`^${re}$`, units];
  }
  function match(input, regex, handlers) {
    const matches2 = input.match(regex);
    if (matches2) {
      const all = {};
      let matchIndex = 1;
      for (const i in handlers) {
        if (hasOwnProperty(handlers, i)) {
          const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
          if (!h.literal && h.token) {
            all[h.token.val[0]] = h.deser(matches2.slice(matchIndex, matchIndex + groups));
          }
          matchIndex += groups;
        }
      }
      return [matches2, all];
    } else {
      return [matches2, {}];
    }
  }
  function dateTimeFromMatches(matches2) {
    const toField = (token) => {
      switch (token) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
        case "H":
          return "hour";
        case "d":
          return "day";
        case "o":
          return "ordinal";
        case "L":
        case "M":
          return "month";
        case "y":
          return "year";
        case "E":
        case "c":
          return "weekday";
        case "W":
          return "weekNumber";
        case "k":
          return "weekYear";
        case "q":
          return "quarter";
        default:
          return null;
      }
    };
    let zone = null;
    let specificOffset;
    if (!isUndefined(matches2.z)) {
      zone = IANAZone.create(matches2.z);
    }
    if (!isUndefined(matches2.Z)) {
      if (!zone) {
        zone = new FixedOffsetZone(matches2.Z);
      }
      specificOffset = matches2.Z;
    }
    if (!isUndefined(matches2.q)) {
      matches2.M = (matches2.q - 1) * 3 + 1;
    }
    if (!isUndefined(matches2.h)) {
      if (matches2.h < 12 && matches2.a === 1) {
        matches2.h += 12;
      } else if (matches2.h === 12 && matches2.a === 0) {
        matches2.h = 0;
      }
    }
    if (matches2.G === 0 && matches2.y) {
      matches2.y = -matches2.y;
    }
    if (!isUndefined(matches2.u)) {
      matches2.S = parseMillis(matches2.u);
    }
    const vals = Object.keys(matches2).reduce((r, k) => {
      const f = toField(k);
      if (f) {
        r[f] = matches2[k];
      }
      return r;
    }, {});
    return [vals, zone, specificOffset];
  }
  var dummyDateTimeCache = null;
  function getDummyDateTime() {
    if (!dummyDateTimeCache) {
      dummyDateTimeCache = DateTime.fromMillis(1555555555555);
    }
    return dummyDateTimeCache;
  }
  function maybeExpandMacroToken(token, locale) {
    if (token.literal) {
      return token;
    }
    const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
    const tokens = formatOptsToTokens(formatOpts, locale);
    if (tokens == null || tokens.includes(void 0)) {
      return token;
    }
    return tokens;
  }
  function expandMacroTokens(tokens, locale) {
    return Array.prototype.concat(...tokens.map((t2) => maybeExpandMacroToken(t2, locale)));
  }
  var TokenParser = class {
    constructor(locale, format) {
      this.locale = locale;
      this.format = format;
      this.tokens = expandMacroTokens(Formatter.parseFormat(format), locale);
      this.units = this.tokens.map((t2) => unitForToken(t2, locale));
      this.disqualifyingUnit = this.units.find((t2) => t2.invalidReason);
      if (!this.disqualifyingUnit) {
        const [regexString, handlers] = buildRegex(this.units);
        this.regex = RegExp(regexString, "i");
        this.handlers = handlers;
      }
    }
    explainFromTokens(input) {
      if (!this.isValid) {
        return { input, tokens: this.tokens, invalidReason: this.invalidReason };
      } else {
        const [rawMatches, matches2] = match(input, this.regex, this.handlers), [result, zone, specificOffset] = matches2 ? dateTimeFromMatches(matches2) : [null, null, void 0];
        if (hasOwnProperty(matches2, "a") && hasOwnProperty(matches2, "H")) {
          throw new ConflictingSpecificationError(
            "Can't include meridiem when specifying 24-hour format"
          );
        }
        return {
          input,
          tokens: this.tokens,
          regex: this.regex,
          rawMatches,
          matches: matches2,
          result,
          zone,
          specificOffset
        };
      }
    }
    get isValid() {
      return !this.disqualifyingUnit;
    }
    get invalidReason() {
      return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
    }
  };
  function explainFromTokens(locale, input, format) {
    const parser2 = new TokenParser(locale, format);
    return parser2.explainFromTokens(input);
  }
  function parseFromTokens(locale, input, format) {
    const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
    return [result, zone, specificOffset, invalidReason];
  }
  function formatOptsToTokens(formatOpts, locale) {
    if (!formatOpts) {
      return null;
    }
    const formatter = Formatter.create(locale, formatOpts);
    const df = formatter.dtFormatter(getDummyDateTime());
    const parts = df.formatToParts();
    const resolvedOpts = df.resolvedOptions();
    return parts.map((p) => tokenForPart(p, formatOpts, resolvedOpts));
  }
  var INVALID = "Invalid DateTime";
  var MAX_DATE = 864e13;
  function unsupportedZone(zone) {
    return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
  }
  function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) {
      dt.weekData = gregorianToWeek(dt.c);
    }
    return dt.weekData;
  }
  function possiblyCachedLocalWeekData(dt) {
    if (dt.localWeekData === null) {
      dt.localWeekData = gregorianToWeek(
        dt.c,
        dt.loc.getMinDaysInFirstWeek(),
        dt.loc.getStartOfWeek()
      );
    }
    return dt.localWeekData;
  }
  function clone(inst, alts) {
    const current = {
      ts: inst.ts,
      zone: inst.zone,
      c: inst.c,
      o: inst.o,
      loc: inst.loc,
      invalid: inst.invalid
    };
    return new DateTime({ ...current, ...alts, old: current });
  }
  function fixOffset(localTS, o, tz) {
    let utcGuess = localTS - o * 60 * 1e3;
    const o2 = tz.offset(utcGuess);
    if (o === o2) {
      return [utcGuess, o];
    }
    utcGuess -= (o2 - o) * 60 * 1e3;
    const o3 = tz.offset(utcGuess);
    if (o2 === o3) {
      return [utcGuess, o2];
    }
    return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
  }
  function tsToObj(ts, offset2) {
    ts += offset2 * 60 * 1e3;
    const d = new Date(ts);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate(),
      hour: d.getUTCHours(),
      minute: d.getUTCMinutes(),
      second: d.getUTCSeconds(),
      millisecond: d.getUTCMilliseconds()
    };
  }
  function objToTS(obj, offset2, zone) {
    return fixOffset(objToLocalTS(obj), offset2, zone);
  }
  function adjustTime(inst, dur) {
    const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
      ...inst.c,
      year,
      month,
      day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }, millisToAdd = Duration.fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = objToLocalTS(c);
    let [ts, o] = fixOffset(localTS, oPre, inst.zone);
    if (millisToAdd !== 0) {
      ts += millisToAdd;
      o = inst.zone.offset(ts);
    }
    return { ts, o };
  }
  function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
    const { setZone, zone } = opts;
    if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
      const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
        ...opts,
        zone: interpretationZone,
        specificOffset
      });
      return setZone ? inst : inst.setZone(zone);
    } else {
      return DateTime.invalid(
        new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`)
      );
    }
  }
  function toTechFormat(dt, format, allowZ = true) {
    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
      allowZ,
      forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
  }
  function toISODate(o, extended, precision) {
    const longFormat = o.c.year > 9999 || o.c.year < 0;
    let c = "";
    if (longFormat && o.c.year >= 0) c += "+";
    c += padStart(o.c.year, longFormat ? 6 : 4);
    if (precision === "year") return c;
    if (extended) {
      c += "-";
      c += padStart(o.c.month);
      if (precision === "month") return c;
      c += "-";
    } else {
      c += padStart(o.c.month);
      if (precision === "month") return c;
    }
    c += padStart(o.c.day);
    return c;
  }
  function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone, precision) {
    let showSeconds = !suppressSeconds || o.c.millisecond !== 0 || o.c.second !== 0, c = "";
    switch (precision) {
      case "day":
      case "month":
      case "year":
        break;
      default:
        c += padStart(o.c.hour);
        if (precision === "hour") break;
        if (extended) {
          c += ":";
          c += padStart(o.c.minute);
          if (precision === "minute") break;
          if (showSeconds) {
            c += ":";
            c += padStart(o.c.second);
          }
        } else {
          c += padStart(o.c.minute);
          if (precision === "minute") break;
          if (showSeconds) {
            c += padStart(o.c.second);
          }
        }
        if (precision === "second") break;
        if (showSeconds && (!suppressMilliseconds || o.c.millisecond !== 0)) {
          c += ".";
          c += padStart(o.c.millisecond, 3);
        }
    }
    if (includeOffset) {
      if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
        c += "Z";
      } else if (o.o < 0) {
        c += "-";
        c += padStart(Math.trunc(-o.o / 60));
        c += ":";
        c += padStart(Math.trunc(-o.o % 60));
      } else {
        c += "+";
        c += padStart(Math.trunc(o.o / 60));
        c += ":";
        c += padStart(Math.trunc(o.o % 60));
      }
    }
    if (extendedZone) {
      c += "[" + o.zone.ianaName + "]";
    }
    return c;
  }
  var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  var defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  var defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
  var orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
  function normalizeUnit(unit) {
    const normalized = {
      year: "year",
      years: "year",
      month: "month",
      months: "month",
      day: "day",
      days: "day",
      hour: "hour",
      hours: "hour",
      minute: "minute",
      minutes: "minute",
      quarter: "quarter",
      quarters: "quarter",
      second: "second",
      seconds: "second",
      millisecond: "millisecond",
      milliseconds: "millisecond",
      weekday: "weekday",
      weekdays: "weekday",
      weeknumber: "weekNumber",
      weeksnumber: "weekNumber",
      weeknumbers: "weekNumber",
      weekyear: "weekYear",
      weekyears: "weekYear",
      ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  function normalizeUnitWithLocalWeeks(unit) {
    switch (unit.toLowerCase()) {
      case "localweekday":
      case "localweekdays":
        return "localWeekday";
      case "localweeknumber":
      case "localweeknumbers":
        return "localWeekNumber";
      case "localweekyear":
      case "localweekyears":
        return "localWeekYear";
      default:
        return normalizeUnit(unit);
    }
  }
  function guessOffsetForZone(zone) {
    if (zoneOffsetTs === void 0) {
      zoneOffsetTs = Settings.now();
    }
    if (zone.type !== "iana") {
      return zone.offset(zoneOffsetTs);
    }
    const zoneName = zone.name;
    let offsetGuess = zoneOffsetGuessCache.get(zoneName);
    if (offsetGuess === void 0) {
      offsetGuess = zone.offset(zoneOffsetTs);
      zoneOffsetGuessCache.set(zoneName, offsetGuess);
    }
    return offsetGuess;
  }
  function quickDT(obj, opts) {
    const zone = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    }
    const loc = Locale.fromObject(opts);
    let ts, o;
    if (!isUndefined(obj.year)) {
      for (const u of orderedUnits) {
        if (isUndefined(obj[u])) {
          obj[u] = defaultUnitValues[u];
        }
      }
      const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
      if (invalid) {
        return DateTime.invalid(invalid);
      }
      const offsetProvis = guessOffsetForZone(zone);
      [ts, o] = objToTS(obj, offsetProvis, zone);
    } else {
      ts = Settings.now();
    }
    return new DateTime({ ts, zone, loc, o });
  }
  function diffRelative(start, end, opts) {
    const round = isUndefined(opts.round) ? true : opts.round, rounding = isUndefined(opts.rounding) ? "trunc" : opts.rounding, format = (c, unit) => {
      c = roundTo(c, round || opts.calendary ? 0 : 2, opts.calendary ? "round" : rounding);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    }, differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };
    if (opts.unit) {
      return format(differ(opts.unit), opts.unit);
    }
    for (const unit of opts.units) {
      const count = differ(unit);
      if (Math.abs(count) >= 1) {
        return format(count, unit);
      }
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
  }
  function lastOpts(argList) {
    let opts = {}, args;
    if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
      opts = argList[argList.length - 1];
      args = Array.from(argList).slice(0, argList.length - 1);
    } else {
      args = Array.from(argList);
    }
    return [opts, args];
  }
  var zoneOffsetTs;
  var zoneOffsetGuessCache = /* @__PURE__ */ new Map();
  var DateTime = class _DateTime {
    /**
     * @access private
     */
    constructor(config) {
      const zone = config.zone || Settings.defaultZone;
      let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
      this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
      let c = null, o = null;
      if (!invalid) {
        const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
        if (unchanged) {
          [c, o] = [config.old.c, config.old.o];
        } else {
          const ot = isNumber(config.o) && !config.old ? config.o : zone.offset(this.ts);
          c = tsToObj(this.ts, ot);
          invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
          c = invalid ? null : c;
          o = invalid ? null : ot;
        }
      }
      this._zone = zone;
      this.loc = config.loc || Locale.create();
      this.invalid = invalid;
      this.weekData = null;
      this.localWeekData = null;
      this.c = c;
      this.o = o;
      this.isLuxonDateTime = true;
    }
    // CONSTRUCT
    /**
     * Create a DateTime for the current instant, in the system's time zone.
     *
     * Use Settings to override these default values if needed.
     * @example DateTime.now().toISO() //~> now in the ISO format
     * @return {DateTime}
     */
    static now() {
      return new _DateTime({});
    }
    /**
     * Create a local DateTime
     * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month, 1-indexed
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example DateTime.local()                                  //~> now
     * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
     * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
     * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
     * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
     * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
     * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
     * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
     * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
     * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
     * @return {DateTime}
     */
    static local() {
      const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
      return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
    }
    /**
     * Create a DateTime in UTC
     * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @param {Object} options - configuration options for the DateTime
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
     * @example DateTime.utc()                                              //~> now
     * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
     * @return {DateTime}
     */
    static utc() {
      const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
      opts.zone = FixedOffsetZone.utcInstance;
      return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
    }
    /**
     * Create a DateTime from a JavaScript Date object. Uses the default zone.
     * @param {Date} date - a JavaScript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */
    static fromJSDate(date2, options = {}) {
      const ts = isDate(date2) ? date2.valueOf() : NaN;
      if (Number.isNaN(ts)) {
        return _DateTime.invalid("invalid input");
      }
      const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
      if (!zoneToUse.isValid) {
        return _DateTime.invalid(unsupportedZone(zoneToUse));
      }
      return new _DateTime({
        ts,
        zone: zoneToUse,
        loc: Locale.fromObject(options)
      });
    }
    /**
     * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromMillis(milliseconds, options = {}) {
      if (!isNumber(milliseconds)) {
        throw new InvalidArgumentError(
          `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
        );
      } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
        return _DateTime.invalid("Timestamp out of range");
      } else {
        return new _DateTime({
          ts: milliseconds,
          zone: normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    }
    /**
     * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} seconds - a number of seconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromSeconds(seconds, options = {}) {
      if (!isNumber(seconds)) {
        throw new InvalidArgumentError("fromSeconds requires a numerical input");
      } else {
        return new _DateTime({
          ts: seconds * 1e3,
          zone: normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    }
    /**
     * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.localWeekYear - a week year, according to the locale
     * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
     * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {Object} opts - options for creating this DateTime
     * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
     * @return {DateTime}
     */
    static fromObject(obj, opts = {}) {
      obj = obj || {};
      const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
      if (!zoneToUse.isValid) {
        return _DateTime.invalid(unsupportedZone(zoneToUse));
      }
      const loc = Locale.fromObject(opts);
      const normalized = normalizeObject(obj, normalizeUnitWithLocalWeeks);
      const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, loc);
      const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
        );
      }
      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }
      const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
      let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
      if (useWeekData) {
        units = orderedWeekUnits;
        defaultValues = defaultWeekUnitValues;
        objNow = gregorianToWeek(objNow, minDaysInFirstWeek, startOfWeek);
      } else if (containsOrdinal) {
        units = orderedOrdinalUnits;
        defaultValues = defaultOrdinalUnitValues;
        objNow = gregorianToOrdinal(objNow);
      } else {
        units = orderedUnits;
        defaultValues = defaultUnitValues;
      }
      let foundFirst = false;
      for (const u of units) {
        const v = normalized[u];
        if (!isUndefined(v)) {
          foundFirst = true;
        } else if (foundFirst) {
          normalized[u] = defaultValues[u];
        } else {
          normalized[u] = objNow[u];
        }
      }
      const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
      if (invalid) {
        return _DateTime.invalid(invalid);
      }
      const gregorian = useWeekData ? weekToGregorian(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new _DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc
      });
      if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
        return _DateTime.invalid(
          "mismatched weekday",
          `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
        );
      }
      if (!inst.isValid) {
        return _DateTime.invalid(inst.invalid);
      }
      return inst;
    }
    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */
    static fromISO(text, opts = {}) {
      const [vals, parsedZone] = parseISODate(text);
      return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    }
    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */
    static fromRFC2822(text, opts = {}) {
      const [vals, parsedZone] = parseRFC2822Date(text);
      return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    }
    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */
    static fromHTTP(text, opts = {}) {
      const [vals, parsedZone] = parseHTTPDate(text);
      return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    }
    /**
     * Create a DateTime from an input string and format string.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromFormat(text, fmt, opts = {}) {
      if (isUndefined(text) || isUndefined(fmt)) {
        throw new InvalidArgumentError("fromFormat requires an input string and a format");
      }
      const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true
      }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
      if (invalid) {
        return _DateTime.invalid(invalid);
      } else {
        return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
      }
    }
    /**
     * @deprecated use fromFormat instead
     */
    static fromString(text, fmt, opts = {}) {
      return _DateTime.fromFormat(text, fmt, opts);
    }
    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @example DateTime.fromSQL('2017-05-15')
     * @example DateTime.fromSQL('2017-05-15 09:12:34')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example DateTime.fromSQL('09:12:34.342')
     * @return {DateTime}
     */
    static fromSQL(text, opts = {}) {
      const [vals, parsedZone] = parseSQL(text);
      return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    }
    /**
     * Create an invalid DateTime.
     * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {DateTime}
     */
    static invalid(reason, explanation = null) {
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
      }
      const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidDateTimeError(invalid);
      } else {
        return new _DateTime({ invalid });
      }
    }
    /**
     * Check if an object is an instance of DateTime. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isDateTime(o) {
      return o && o.isLuxonDateTime || false;
    }
    /**
     * Produce the format string for a set of options
     * @param formatOpts
     * @param localeOpts
     * @returns {string}
     */
    static parseFormatForOpts(formatOpts, localeOpts = {}) {
      const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
      return !tokenList ? null : tokenList.map((t2) => t2 ? t2.val : null).join("");
    }
    /**
     * Produce the the fully expanded format token for the locale
     * Does NOT quote characters, so quoted tokens will not round trip correctly
     * @param fmt
     * @param localeOpts
     * @returns {string}
     */
    static expandFormat(fmt, localeOpts = {}) {
      const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
      return expanded.map((t2) => t2.val).join("");
    }
    static resetCache() {
      zoneOffsetTs = void 0;
      zoneOffsetGuessCache.clear();
    }
    // INFO
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    get(unit) {
      return this[unit];
    }
    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @type {boolean}
     */
    get isValid() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
    get outputCalendar() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
    get zone() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */
    get zoneName() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
    get year() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
    get quarter() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
    get month() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
    get day() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
    get hour() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
    get minute() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
    get second() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
    get millisecond() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
    get weekYear() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
    get weekNumber() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
    get weekday() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Returns true if this date is on a weekend according to the locale, false otherwise
     * @returns {boolean}
     */
    get isWeekend() {
      return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
    }
    /**
     * Get the day of the week according to the locale.
     * 1 is the first day of the week and 7 is the last day of the week.
     * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
     * @returns {number}
     */
    get localWeekday() {
      return this.isValid ? possiblyCachedLocalWeekData(this).weekday : NaN;
    }
    /**
     * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
     * because the week can start on different days of the week (see localWeekday) and because a different number of days
     * is required for a week to count as the first week of a year.
     * @returns {number}
     */
    get localWeekNumber() {
      return this.isValid ? possiblyCachedLocalWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
     * differently, see localWeekNumber.
     * @returns {number}
     */
    get localWeekYear() {
      return this.isValid ? possiblyCachedLocalWeekData(this).weekYear : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
    get ordinal() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
    get monthShort() {
      return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
    get monthLong() {
      return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
    get weekdayShort() {
      return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
    get weekdayLong() {
      return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
    get offset() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
    get offsetNameShort() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
    get offsetNameLong() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
    get isOffsetFixed() {
      return this.isValid ? this.zone.isUniversal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
    get isInDST() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
      }
    }
    /**
     * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
     * in this DateTime's zone. During DST changes local time can be ambiguous, for example
     * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
     * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
     * @returns {DateTime[]}
     */
    getPossibleOffsets() {
      if (!this.isValid || this.isOffsetFixed) {
        return [this];
      }
      const dayMs = 864e5;
      const minuteMs = 6e4;
      const localTS = objToLocalTS(this.c);
      const oEarlier = this.zone.offset(localTS - dayMs);
      const oLater = this.zone.offset(localTS + dayMs);
      const o1 = this.zone.offset(localTS - oEarlier * minuteMs);
      const o2 = this.zone.offset(localTS - oLater * minuteMs);
      if (o1 === o2) {
        return [this];
      }
      const ts1 = localTS - o1 * minuteMs;
      const ts2 = localTS - o2 * minuteMs;
      const c1 = tsToObj(ts1, o1);
      const c2 = tsToObj(ts2, o2);
      if (c1.hour === c2.hour && c1.minute === c2.minute && c1.second === c2.second && c1.millisecond === c2.millisecond) {
        return [clone(this, { ts: ts1 }), clone(this, { ts: ts2 })];
      }
      return [this];
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
    get isInLeapYear() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
    get daysInMonth() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
    get daysInYear() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
    get weeksInWeekYear() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's local week year
     * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
     * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
     * @type {number}
     */
    get weeksInLocalWeekYear() {
      return this.isValid ? weeksInWeekYear(
        this.localWeekYear,
        this.loc.getMinDaysInFirstWeek(),
        this.loc.getStartOfWeek()
      ) : NaN;
    }
    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {Object} opts - the same options as toLocaleString
     * @return {Object}
     */
    resolvedLocaleOptions(opts = {}) {
      const { locale, numberingSystem, calendar } = Formatter.create(
        this.loc.clone(opts),
        opts
      ).resolvedOptions(this);
      return { locale, numberingSystem, outputCalendar: calendar };
    }
    // TRANSFORM
    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link DateTime#setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {Object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */
    toUTC(offset2 = 0, opts = {}) {
      return this.setZone(FixedOffsetZone.instance(offset2), opts);
    }
    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */
    toLocal() {
      return this.setZone(Settings.defaultZone);
    }
    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
     * @param {Object} opts - options
     * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */
    setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
      zone = normalizeZone(zone, Settings.defaultZone);
      if (zone.equals(this.zone)) {
        return this;
      } else if (!zone.isValid) {
        return _DateTime.invalid(unsupportedZone(zone));
      } else {
        let newTS = this.ts;
        if (keepLocalTime || keepCalendarTime) {
          const offsetGuess = zone.offset(this.ts);
          const asObj = this.toObject();
          [newTS] = objToTS(asObj, offsetGuess, zone);
        }
        return clone(this, { ts: newTS, zone });
      }
    }
    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {Object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */
    reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
      const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
      return clone(this, { loc });
    }
    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */
    setLocale(locale) {
      return this.reconfigure({ locale });
    }
    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
     *
     * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
     * They cannot be mixed with ISO-week units like `weekday`.
     * @param {Object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @return {DateTime}
     */
    set(values) {
      if (!this.isValid) return this;
      const normalized = normalizeObject(values, normalizeUnitWithLocalWeeks);
      const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, this.loc);
      const settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
        );
      }
      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }
      let mixed;
      if (settingWeekStuff) {
        mixed = weekToGregorian(
          { ...gregorianToWeek(this.c, minDaysInFirstWeek, startOfWeek), ...normalized },
          minDaysInFirstWeek,
          startOfWeek
        );
      } else if (!isUndefined(normalized.ordinal)) {
        mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
      } else {
        mixed = { ...this.toObject(), ...normalized };
        if (isUndefined(normalized.day)) {
          mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
      }
      const [ts, o] = objToTS(mixed, this.o, this.zone);
      return clone(this, { ts, o });
    }
    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.now().plus(123) //~> in 123 milliseconds
     * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
     * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
     * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
     * @return {DateTime}
     */
    plus(duration2) {
      if (!this.isValid) return this;
      const dur = Duration.fromDurationLike(duration2);
      return clone(this, adjustTime(this, dur));
    }
    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link DateTime#plus}
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
     */
    minus(duration2) {
      if (!this.isValid) return this;
      const dur = Duration.fromDurationLike(duration2).negate();
      return clone(this, adjustTime(this, dur));
    }
    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */
    startOf(unit, { useLocaleWeeks = false } = {}) {
      if (!this.isValid) return this;
      const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
      switch (normalizedUnit) {
        case "years":
          o.month = 1;
        // falls through
        case "quarters":
        case "months":
          o.day = 1;
        // falls through
        case "weeks":
        case "days":
          o.hour = 0;
        // falls through
        case "hours":
          o.minute = 0;
        // falls through
        case "minutes":
          o.second = 0;
        // falls through
        case "seconds":
          o.millisecond = 0;
          break;
      }
      if (normalizedUnit === "weeks") {
        if (useLocaleWeeks) {
          const startOfWeek = this.loc.getStartOfWeek();
          const { weekday } = this;
          if (weekday < startOfWeek) {
            o.weekNumber = this.weekNumber - 1;
          }
          o.weekday = startOfWeek;
        } else {
          o.weekday = 1;
        }
      }
      if (normalizedUnit === "quarters") {
        const q = Math.ceil(this.month / 3);
        o.month = (q - 1) * 3 + 1;
      }
      return this.set(o);
    }
    /**
     * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */
    endOf(unit, opts) {
      return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit, opts).minus(1) : this;
    }
    // OUTPUT
    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @param {string} fmt - the format string
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
     * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */
    toFormat(fmt, opts = {}) {
      return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
    }
    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toLocaleString(); //=> 4/20/2017
     * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
     * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
     * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
     * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
     * @return {string}
     */
    toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
      return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
    }
    /**
     * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.now().toLocaleParts(); //=> [
     *                                   //=>   { type: 'day', value: '25' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'month', value: '05' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'year', value: '1982' }
     *                                   //=> ]
     */
    toLocaleParts(opts = {}) {
      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
     * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
     * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
     * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
     * @return {string|null}
     */
    toISO({
      format = "extended",
      suppressSeconds = false,
      suppressMilliseconds = false,
      includeOffset = true,
      extendedZone = false,
      precision = "milliseconds"
    } = {}) {
      if (!this.isValid) {
        return null;
      }
      precision = normalizeUnit(precision);
      const ext = format === "extended";
      let c = toISODate(this, ext, precision);
      if (orderedUnits.indexOf(precision) >= 3) c += "T";
      c += toISOTime(
        this,
        ext,
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone,
        precision
      );
      return c;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @param {Object} opts - options
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
     * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
     * @return {string|null}
     */
    toISODate({ format = "extended", precision = "day" } = {}) {
      if (!this.isValid) {
        return null;
      }
      return toISODate(this, format === "extended", normalizeUnit(precision));
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */
    toISOWeekDate() {
      return toTechFormat(this, "kkkk-'W'WW-c");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
     * @return {string}
     */
    toISOTime({
      suppressMilliseconds = false,
      suppressSeconds = false,
      includeOffset = true,
      includePrefix = false,
      extendedZone = false,
      format = "extended",
      precision = "milliseconds"
    } = {}) {
      if (!this.isValid) {
        return null;
      }
      precision = normalizeUnit(precision);
      let c = includePrefix && orderedUnits.indexOf(precision) >= 3 ? "T" : "";
      return c + toISOTime(
        this,
        format === "extended",
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone,
        precision
      );
    }
    /**
     * Returns an RFC 2822-compatible string representation of this DateTime
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */
    toRFC2822() {
      return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     * @return {string}
     */
    toHTTP() {
      return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     * @return {string|null}
     */
    toSQLDate() {
      if (!this.isValid) {
        return null;
      }
      return toISODate(this, true);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
     * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     * @return {string}
     */
    toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
      let fmt = "HH:mm:ss.SSS";
      if (includeZone || includeOffset) {
        if (includeOffsetSpace) {
          fmt += " ";
        }
        if (includeZone) {
          fmt += "z";
        } else if (includeOffset) {
          fmt += "ZZ";
        }
      }
      return toTechFormat(this, fmt, true);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
     * @return {string}
     */
    toSQL(opts = {}) {
      if (!this.isValid) {
        return null;
      }
      return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
    }
    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */
    toString() {
      return this.isValid ? this.toISO() : INVALID;
    }
    /**
     * Returns a string representation of this DateTime appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      if (this.isValid) {
        return `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`;
      } else {
        return `DateTime { Invalid, reason: ${this.invalidReason} }`;
      }
    }
    /**
     * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
     * @return {number}
     */
    valueOf() {
      return this.toMillis();
    }
    /**
     * Returns the epoch milliseconds of this DateTime.
     * @return {number}
     */
    toMillis() {
      return this.isValid ? this.ts : NaN;
    }
    /**
     * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
     * @return {number}
     */
    toSeconds() {
      return this.isValid ? this.ts / 1e3 : NaN;
    }
    /**
     * Returns the epoch seconds (as a whole number) of this DateTime.
     * @return {number}
     */
    toUnixInteger() {
      return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
    }
    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */
    toJSON() {
      return this.toISO();
    }
    /**
     * Returns a BSON serializable equivalent to this DateTime.
     * @return {Date}
     */
    toBSON() {
      return this.toJSDate();
    }
    /**
     * Returns a JavaScript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {Object}
     */
    toObject(opts = {}) {
      if (!this.isValid) return {};
      const base = { ...this.c };
      if (opts.includeConfig) {
        base.outputCalendar = this.outputCalendar;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }
      return base;
    }
    /**
     * Returns a JavaScript Date equivalent to this DateTime.
     * @return {Date}
     */
    toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }
    // COMPARE
    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */
    diff(otherDateTime, unit = "milliseconds", opts = {}) {
      if (!this.isValid || !otherDateTime.isValid) {
        return Duration.invalid("created by diffing an invalid DateTime");
      }
      const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };
      const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
      return otherIsLater ? diffed.negate() : diffed;
    }
    /**
     * Return the difference between this DateTime and right now.
     * See {@link DateTime#diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    diffNow(unit = "milliseconds", opts = {}) {
      return this.diff(_DateTime.now(), unit, opts);
    }
    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Interval|DateTime}
     */
    until(otherDateTime) {
      return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    }
    /**
     * Return whether this DateTime is in the same unit of time as another DateTime.
     * Higher-order units must also be identical for this function to return `true`.
     * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
     * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
     * @return {boolean}
     */
    hasSame(otherDateTime, unit, opts) {
      if (!this.isValid) return false;
      const inputMs = otherDateTime.valueOf();
      const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
      return adjustedToZone.startOf(unit, opts) <= inputMs && inputMs <= adjustedToZone.endOf(unit, opts);
    }
    /**
     * Equality check
     * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
     * To compare just the millisecond values, use `+dt1 === +dt2`.
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */
    equals(other) {
      return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    }
    /**
     * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
     * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
     * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
     * @param {boolean} [options.round=true] - whether to round the numbers in the output.
     * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
     * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
     * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
     * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
     * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
     * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
     * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
     */
    toRelative(options = {}) {
      if (!this.isValid) return null;
      const base = options.base || _DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
      let units = ["years", "months", "days", "hours", "minutes", "seconds"];
      let unit = options.unit;
      if (Array.isArray(options.unit)) {
        units = options.unit;
        unit = void 0;
      }
      return diffRelative(base, this.plus(padding), {
        ...options,
        numeric: "always",
        units,
        unit
      });
    }
    /**
     * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
     * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
     * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
     * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
     */
    toRelativeCalendar(options = {}) {
      if (!this.isValid) return null;
      return diffRelative(options.base || _DateTime.fromObject({}, { zone: this.zone }), this, {
        ...options,
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: true
      });
    }
    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime} the min DateTime, or undefined if called with no argument
     */
    static min(...dateTimes) {
      if (!dateTimes.every(_DateTime.isDateTime)) {
        throw new InvalidArgumentError("min requires all arguments be DateTimes");
      }
      return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
    }
    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime} the max DateTime, or undefined if called with no argument
     */
    static max(...dateTimes) {
      if (!dateTimes.every(_DateTime.isDateTime)) {
        throw new InvalidArgumentError("max requires all arguments be DateTimes");
      }
      return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
    }
    // MISC
    /**
     * Explain how a string would be parsed by fromFormat()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options taken by fromFormat()
     * @return {Object}
     */
    static fromFormatExplain(text, fmt, options = {}) {
      const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true
      });
      return explainFromTokens(localeToUse, text, fmt);
    }
    /**
     * @deprecated use fromFormatExplain instead
     */
    static fromStringExplain(text, fmt, options = {}) {
      return _DateTime.fromFormatExplain(text, fmt, options);
    }
    /**
     * Build a parser for `fmt` using the given locale. This parser can be passed
     * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
     * can be used to optimize cases where many dates need to be parsed in a
     * specific format.
     *
     * @param {String} fmt - the format the string is expected to be in (see
     * description)
     * @param {Object} options - options used to set locale and numberingSystem
     * for parser
     * @returns {TokenParser} - opaque object to be used
     */
    static buildFormatParser(fmt, options = {}) {
      const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true
      });
      return new TokenParser(localeToUse, fmt);
    }
    /**
     * Create a DateTime from an input string and format parser.
     *
     * The format parser must have been created with the same locale as this call.
     *
     * @param {String} text - the string to parse
     * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
     * @param {Object} opts - options taken by fromFormat()
     * @returns {DateTime}
     */
    static fromFormatParser(text, formatParser, opts = {}) {
      if (isUndefined(text) || isUndefined(formatParser)) {
        throw new InvalidArgumentError(
          "fromFormatParser requires an input string and a format parser"
        );
      }
      const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true
      });
      if (!localeToUse.equals(formatParser.locale)) {
        throw new InvalidArgumentError(
          `fromFormatParser called with a locale of ${localeToUse}, but the format parser was created for ${formatParser.locale}`
        );
      }
      const { result, zone, specificOffset, invalidReason } = formatParser.explainFromTokens(text);
      if (invalidReason) {
        return _DateTime.invalid(invalidReason);
      } else {
        return parseDataToDateTime(
          result,
          zone,
          opts,
          `format ${formatParser.format}`,
          text,
          specificOffset
        );
      }
    }
    // FORMAT PRESETS
    /**
     * {@link DateTime#toLocaleString} format like 10/14/1983
     * @type {Object}
     */
    static get DATE_SHORT() {
      return DATE_SHORT;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
    static get DATE_MED() {
      return DATE_MED;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
    static get DATE_MED_WITH_WEEKDAY() {
      return DATE_MED_WITH_WEEKDAY;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
    static get DATE_FULL() {
      return DATE_FULL;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
    static get DATE_HUGE() {
      return DATE_HUGE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_SIMPLE() {
      return TIME_SIMPLE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_SECONDS() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_SHORT_OFFSET() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_LONG_OFFSET() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_SIMPLE() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_SECONDS() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_SHORT_OFFSET() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_LONG_OFFSET() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_SHORT() {
      return DATETIME_SHORT;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_SHORT_WITH_SECONDS() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED() {
      return DATETIME_MED;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED_WITH_SECONDS() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED_WITH_WEEKDAY() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_FULL() {
      return DATETIME_FULL;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_FULL_WITH_SECONDS() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_HUGE() {
      return DATETIME_HUGE;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_HUGE_WITH_SECONDS() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  };
  function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) {
      return dateTimeish;
    } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
      return DateTime.fromJSDate(dateTimeish);
    } else if (dateTimeish && typeof dateTimeish === "object") {
      return DateTime.fromObject(dateTimeish);
    } else {
      throw new InvalidArgumentError(
        `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
      );
    }
  }

  // node_modules/@lezer/common/dist/index.js
  var DefaultBufferLength = 1024;
  var nextPropID = 0;
  var Range = class {
    constructor(from, to) {
      this.from = from;
      this.to = to;
    }
  };
  var NodeProp = class {
    /**
    Create a new node prop type.
    */
    constructor(config = {}) {
      this.id = nextPropID++;
      this.perNode = !!config.perNode;
      this.deserialize = config.deserialize || (() => {
        throw new Error("This node type doesn't define a deserialize function");
      });
      this.combine = config.combine || null;
    }
    /**
    This is meant to be used with
    [`NodeSet.extend`](#common.NodeSet.extend) or
    [`LRParser.configure`](#lr.ParserConfig.props) to compute
    prop values for each node type in the set. Takes a [match
    object](#common.NodeType^match) or function that returns undefined
    if the node type doesn't get this prop, and the prop's value if
    it does.
    */
    add(match2) {
      if (this.perNode)
        throw new RangeError("Can't add per-node props to node types");
      if (typeof match2 != "function")
        match2 = NodeType.match(match2);
      return (type) => {
        let result = match2(type);
        return result === void 0 ? null : [this, result];
      };
    }
  };
  NodeProp.closedBy = new NodeProp({ deserialize: (str) => str.split(" ") });
  NodeProp.openedBy = new NodeProp({ deserialize: (str) => str.split(" ") });
  NodeProp.group = new NodeProp({ deserialize: (str) => str.split(" ") });
  NodeProp.isolate = new NodeProp({ deserialize: (value) => {
    if (value && value != "rtl" && value != "ltr" && value != "auto")
      throw new RangeError("Invalid value for isolate: " + value);
    return value || "auto";
  } });
  NodeProp.contextHash = new NodeProp({ perNode: true });
  NodeProp.lookAhead = new NodeProp({ perNode: true });
  NodeProp.mounted = new NodeProp({ perNode: true });
  var MountedTree = class {
    constructor(tree, overlay, parser2, bracketed = false) {
      this.tree = tree;
      this.overlay = overlay;
      this.parser = parser2;
      this.bracketed = bracketed;
    }
    /**
    @internal
    */
    static get(tree) {
      return tree && tree.props && tree.props[NodeProp.mounted.id];
    }
  };
  var noProps = /* @__PURE__ */ Object.create(null);
  var NodeType = class _NodeType {
    /**
    @internal
    */
    constructor(name2, props, id2, flags = 0) {
      this.name = name2;
      this.props = props;
      this.id = id2;
      this.flags = flags;
    }
    /**
    Define a node type.
    */
    static define(spec) {
      let props = spec.props && spec.props.length ? /* @__PURE__ */ Object.create(null) : noProps;
      let flags = (spec.top ? 1 : 0) | (spec.skipped ? 2 : 0) | (spec.error ? 4 : 0) | (spec.name == null ? 8 : 0);
      let type = new _NodeType(spec.name || "", props, spec.id, flags);
      if (spec.props)
        for (let src of spec.props) {
          if (!Array.isArray(src))
            src = src(type);
          if (src) {
            if (src[0].perNode)
              throw new RangeError("Can't store a per-node prop on a node type");
            props[src[0].id] = src[1];
          }
        }
      return type;
    }
    /**
    Retrieves a node prop for this type. Will return `undefined` if
    the prop isn't present on this node.
    */
    prop(prop) {
      return this.props[prop.id];
    }
    /**
    True when this is the top node of a grammar.
    */
    get isTop() {
      return (this.flags & 1) > 0;
    }
    /**
    True when this node is produced by a skip rule.
    */
    get isSkipped() {
      return (this.flags & 2) > 0;
    }
    /**
    Indicates whether this is an error node.
    */
    get isError() {
      return (this.flags & 4) > 0;
    }
    /**
    When true, this node type doesn't correspond to a user-declared
    named node, for example because it is used to cache repetition.
    */
    get isAnonymous() {
      return (this.flags & 8) > 0;
    }
    /**
    Returns true when this node's name or one of its
    [groups](#common.NodeProp^group) matches the given string.
    */
    is(name2) {
      if (typeof name2 == "string") {
        if (this.name == name2)
          return true;
        let group = this.prop(NodeProp.group);
        return group ? group.indexOf(name2) > -1 : false;
      }
      return this.id == name2;
    }
    /**
    Create a function from node types to arbitrary values by
    specifying an object whose property names are node or
    [group](#common.NodeProp^group) names. Often useful with
    [`NodeProp.add`](#common.NodeProp.add). You can put multiple
    names, separated by spaces, in a single property name to map
    multiple node names to a single value.
    */
    static match(map) {
      let direct = /* @__PURE__ */ Object.create(null);
      for (let prop in map)
        for (let name2 of prop.split(" "))
          direct[name2] = map[prop];
      return (node) => {
        for (let groups = node.prop(NodeProp.group), i = -1; i < (groups ? groups.length : 0); i++) {
          let found = direct[i < 0 ? node.name : groups[i]];
          if (found)
            return found;
        }
      };
    }
  };
  NodeType.none = new NodeType(
    "",
    /* @__PURE__ */ Object.create(null),
    0,
    8
    /* NodeFlag.Anonymous */
  );
  var NodeSet = class _NodeSet {
    /**
    Create a set with the given types. The `id` property of each
    type should correspond to its position within the array.
    */
    constructor(types) {
      this.types = types;
      for (let i = 0; i < types.length; i++)
        if (types[i].id != i)
          throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    /**
    Create a copy of this set with some node properties added. The
    arguments to this method can be created with
    [`NodeProp.add`](#common.NodeProp.add).
    */
    extend(...props) {
      let newTypes = [];
      for (let type of this.types) {
        let newProps = null;
        for (let source of props) {
          let add = source(type);
          if (add) {
            if (!newProps)
              newProps = Object.assign({}, type.props);
            let value = add[1], prop = add[0];
            if (prop.combine && prop.id in newProps)
              value = prop.combine(newProps[prop.id], value);
            newProps[prop.id] = value;
          }
        }
        newTypes.push(newProps ? new NodeType(type.name, newProps, type.id, type.flags) : type);
      }
      return new _NodeSet(newTypes);
    }
  };
  var CachedNode = /* @__PURE__ */ new WeakMap();
  var CachedInnerNode = /* @__PURE__ */ new WeakMap();
  var IterMode;
  (function(IterMode2) {
    IterMode2[IterMode2["ExcludeBuffers"] = 1] = "ExcludeBuffers";
    IterMode2[IterMode2["IncludeAnonymous"] = 2] = "IncludeAnonymous";
    IterMode2[IterMode2["IgnoreMounts"] = 4] = "IgnoreMounts";
    IterMode2[IterMode2["IgnoreOverlays"] = 8] = "IgnoreOverlays";
    IterMode2[IterMode2["EnterBracketed"] = 16] = "EnterBracketed";
  })(IterMode || (IterMode = {}));
  var Tree = class _Tree {
    /**
    Construct a new tree. See also [`Tree.build`](#common.Tree^build).
    */
    constructor(type, children, positions, length, props) {
      this.type = type;
      this.children = children;
      this.positions = positions;
      this.length = length;
      this.props = null;
      if (props && props.length) {
        this.props = /* @__PURE__ */ Object.create(null);
        for (let [prop, value] of props)
          this.props[typeof prop == "number" ? prop : prop.id] = value;
      }
    }
    /**
    @internal
    */
    toString() {
      let mounted = MountedTree.get(this);
      if (mounted && !mounted.overlay)
        return mounted.tree.toString();
      let children = "";
      for (let ch of this.children) {
        let str = ch.toString();
        if (str) {
          if (children)
            children += ",";
          children += str;
        }
      }
      return !this.type.name ? children : (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (children.length ? "(" + children + ")" : "");
    }
    /**
    Get a [tree cursor](#common.TreeCursor) positioned at the top of
    the tree. Mode can be used to [control](#common.IterMode) which
    nodes the cursor visits.
    */
    cursor(mode2 = 0) {
      return new TreeCursor(this.topNode, mode2);
    }
    /**
    Get a [tree cursor](#common.TreeCursor) pointing into this tree
    at the given position and side (see
    [`moveTo`](#common.TreeCursor.moveTo).
    */
    cursorAt(pos, side = 0, mode2 = 0) {
      let scope = CachedNode.get(this) || this.topNode;
      let cursor = new TreeCursor(scope);
      cursor.moveTo(pos, side);
      CachedNode.set(this, cursor._tree);
      return cursor;
    }
    /**
    Get a [syntax node](#common.SyntaxNode) object for the top of the
    tree.
    */
    get topNode() {
      return new TreeNode(this, 0, 0, null);
    }
    /**
    Get the [syntax node](#common.SyntaxNode) at the given position.
    If `side` is -1, this will move into nodes that end at the
    position. If 1, it'll move into nodes that start at the
    position. With 0, it'll only enter nodes that cover the position
    from both sides.
    
    Note that this will not enter
    [overlays](#common.MountedTree.overlay), and you often want
    [`resolveInner`](#common.Tree.resolveInner) instead.
    */
    resolve(pos, side = 0) {
      let node = resolveNode(CachedNode.get(this) || this.topNode, pos, side, false);
      CachedNode.set(this, node);
      return node;
    }
    /**
    Like [`resolve`](#common.Tree.resolve), but will enter
    [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
    pointing into the innermost overlaid tree at the given position
    (with parent links going through all parent structure, including
    the host trees).
    */
    resolveInner(pos, side = 0) {
      let node = resolveNode(CachedInnerNode.get(this) || this.topNode, pos, side, true);
      CachedInnerNode.set(this, node);
      return node;
    }
    /**
    In some situations, it can be useful to iterate through all
    nodes around a position, including those in overlays that don't
    directly cover the position. This method gives you an iterator
    that will produce all nodes, from small to big, around the given
    position.
    */
    resolveStack(pos, side = 0) {
      return stackIterator(this, pos, side);
    }
    /**
    Iterate over the tree and its children, calling `enter` for any
    node that touches the `from`/`to` region (if given) before
    running over such a node's children, and `leave` (if given) when
    leaving the node. When `enter` returns `false`, that node will
    not have its children iterated over (or `leave` called).
    */
    iterate(spec) {
      let { enter, leave, from = 0, to = this.length } = spec;
      let mode2 = spec.mode || 0, anon = (mode2 & IterMode.IncludeAnonymous) > 0;
      for (let c = this.cursor(mode2 | IterMode.IncludeAnonymous); ; ) {
        let entered = false;
        if (c.from <= to && c.to >= from && (!anon && c.type.isAnonymous || enter(c) !== false)) {
          if (c.firstChild())
            continue;
          entered = true;
        }
        for (; ; ) {
          if (entered && leave && (anon || !c.type.isAnonymous))
            leave(c);
          if (c.nextSibling())
            break;
          if (!c.parent())
            return;
          entered = true;
        }
      }
    }
    /**
    Get the value of the given [node prop](#common.NodeProp) for this
    node. Works with both per-node and per-type props.
    */
    prop(prop) {
      return !prop.perNode ? this.type.prop(prop) : this.props ? this.props[prop.id] : void 0;
    }
    /**
    Returns the node's [per-node props](#common.NodeProp.perNode) in a
    format that can be passed to the [`Tree`](#common.Tree)
    constructor.
    */
    get propValues() {
      let result = [];
      if (this.props)
        for (let id2 in this.props)
          result.push([+id2, this.props[id2]]);
      return result;
    }
    /**
    Balance the direct children of this tree, producing a copy of
    which may have children grouped into subtrees with type
    [`NodeType.none`](#common.NodeType^none).
    */
    balance(config = {}) {
      return this.children.length <= 8 ? this : balanceRange(NodeType.none, this.children, this.positions, 0, this.children.length, 0, this.length, (children, positions, length) => new _Tree(this.type, children, positions, length, this.propValues), config.makeTree || ((children, positions, length) => new _Tree(NodeType.none, children, positions, length)));
    }
    /**
    Build a tree from a postfix-ordered buffer of node information,
    or a cursor over such a buffer.
    */
    static build(data) {
      return buildTree(data);
    }
  };
  Tree.empty = new Tree(NodeType.none, [], [], 0);
  var FlatBufferCursor = class _FlatBufferCursor {
    constructor(buffer, index) {
      this.buffer = buffer;
      this.index = index;
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    get pos() {
      return this.index;
    }
    next() {
      this.index -= 4;
    }
    fork() {
      return new _FlatBufferCursor(this.buffer, this.index);
    }
  };
  var TreeBuffer = class _TreeBuffer {
    /**
    Create a tree buffer.
    */
    constructor(buffer, length, set) {
      this.buffer = buffer;
      this.length = length;
      this.set = set;
    }
    /**
    @internal
    */
    get type() {
      return NodeType.none;
    }
    /**
    @internal
    */
    toString() {
      let result = [];
      for (let index = 0; index < this.buffer.length; ) {
        result.push(this.childString(index));
        index = this.buffer[index + 3];
      }
      return result.join(",");
    }
    /**
    @internal
    */
    childString(index) {
      let id2 = this.buffer[index], endIndex = this.buffer[index + 3];
      let type = this.set.types[id2], result = type.name;
      if (/\W/.test(result) && !type.isError)
        result = JSON.stringify(result);
      index += 4;
      if (endIndex == index)
        return result;
      let children = [];
      while (index < endIndex) {
        children.push(this.childString(index));
        index = this.buffer[index + 3];
      }
      return result + "(" + children.join(",") + ")";
    }
    /**
    @internal
    */
    findChild(startIndex, endIndex, dir, pos, side) {
      let { buffer } = this, pick2 = -1;
      for (let i = startIndex; i != endIndex; i = buffer[i + 3]) {
        if (checkSide(side, pos, buffer[i + 1], buffer[i + 2])) {
          pick2 = i;
          if (dir > 0)
            break;
        }
      }
      return pick2;
    }
    /**
    @internal
    */
    slice(startI, endI, from) {
      let b = this.buffer;
      let copy = new Uint16Array(endI - startI), len = 0;
      for (let i = startI, j = 0; i < endI; ) {
        copy[j++] = b[i++];
        copy[j++] = b[i++] - from;
        let to = copy[j++] = b[i++] - from;
        copy[j++] = b[i++] - startI;
        len = Math.max(len, to);
      }
      return new _TreeBuffer(copy, len, this.set);
    }
  };
  function checkSide(side, pos, from, to) {
    switch (side) {
      case -2:
        return from < pos;
      case -1:
        return to >= pos && from < pos;
      case 0:
        return from < pos && to > pos;
      case 1:
        return from <= pos && to > pos;
      case 2:
        return to > pos;
      case 4:
        return true;
    }
  }
  function resolveNode(node, pos, side, overlays) {
    var _a;
    while (node.from == node.to || (side < 1 ? node.from >= pos : node.from > pos) || (side > -1 ? node.to <= pos : node.to < pos)) {
      let parent = !overlays && node instanceof TreeNode && node.index < 0 ? null : node.parent;
      if (!parent)
        return node;
      node = parent;
    }
    let mode2 = overlays ? 0 : IterMode.IgnoreOverlays;
    if (overlays)
      for (let scan = node, parent = scan.parent; parent; scan = parent, parent = scan.parent) {
        if (scan instanceof TreeNode && scan.index < 0 && ((_a = parent.enter(pos, side, mode2)) === null || _a === void 0 ? void 0 : _a.from) != scan.from)
          node = parent;
      }
    for (; ; ) {
      let inner = node.enter(pos, side, mode2);
      if (!inner)
        return node;
      node = inner;
    }
  }
  var BaseNode = class {
    cursor(mode2 = 0) {
      return new TreeCursor(this, mode2);
    }
    getChild(type, before2 = null, after = null) {
      let r = getChildren(this, type, before2, after);
      return r.length ? r[0] : null;
    }
    getChildren(type, before2 = null, after = null) {
      return getChildren(this, type, before2, after);
    }
    resolve(pos, side = 0) {
      return resolveNode(this, pos, side, false);
    }
    resolveInner(pos, side = 0) {
      return resolveNode(this, pos, side, true);
    }
    matchContext(context) {
      return matchNodeContext(this.parent, context);
    }
    enterUnfinishedNodesBefore(pos) {
      let scan = this.childBefore(pos), node = this;
      while (scan) {
        let last2 = scan.lastChild;
        if (!last2 || last2.to != scan.to)
          break;
        if (last2.type.isError && last2.from == last2.to) {
          node = scan;
          scan = last2.prevSibling;
        } else {
          scan = last2;
        }
      }
      return node;
    }
    get node() {
      return this;
    }
    get next() {
      return this.parent;
    }
  };
  var TreeNode = class _TreeNode extends BaseNode {
    constructor(_tree, from, index, _parent) {
      super();
      this._tree = _tree;
      this.from = from;
      this.index = index;
      this._parent = _parent;
    }
    get type() {
      return this._tree.type;
    }
    get name() {
      return this._tree.type.name;
    }
    get to() {
      return this.from + this._tree.length;
    }
    nextChild(i, dir, pos, side, mode2 = 0) {
      for (let parent = this; ; ) {
        for (let { children, positions } = parent._tree, e = dir > 0 ? children.length : -1; i != e; i += dir) {
          let next = children[i], start = positions[i] + parent.from, mounted;
          if (!(mode2 & IterMode.EnterBracketed && next instanceof Tree && (mounted = MountedTree.get(next)) && !mounted.overlay && mounted.bracketed && pos >= start && pos <= start + next.length) && !checkSide(side, pos, start, start + next.length))
            continue;
          if (next instanceof TreeBuffer) {
            if (mode2 & IterMode.ExcludeBuffers)
              continue;
            let index = next.findChild(0, next.buffer.length, dir, pos - start, side);
            if (index > -1)
              return new BufferNode(new BufferContext(parent, next, i, start), null, index);
          } else if (mode2 & IterMode.IncludeAnonymous || (!next.type.isAnonymous || hasChild(next))) {
            let mounted2;
            if (!(mode2 & IterMode.IgnoreMounts) && (mounted2 = MountedTree.get(next)) && !mounted2.overlay)
              return new _TreeNode(mounted2.tree, start, i, parent);
            let inner = new _TreeNode(next, start, i, parent);
            return mode2 & IterMode.IncludeAnonymous || !inner.type.isAnonymous ? inner : inner.nextChild(dir < 0 ? next.children.length - 1 : 0, dir, pos, side, mode2);
          }
        }
        if (mode2 & IterMode.IncludeAnonymous || !parent.type.isAnonymous)
          return null;
        if (parent.index >= 0)
          i = parent.index + dir;
        else
          i = dir < 0 ? -1 : parent._parent._tree.children.length;
        parent = parent._parent;
        if (!parent)
          return null;
      }
    }
    get firstChild() {
      return this.nextChild(
        0,
        1,
        0,
        4
        /* Side.DontCare */
      );
    }
    get lastChild() {
      return this.nextChild(
        this._tree.children.length - 1,
        -1,
        0,
        4
        /* Side.DontCare */
      );
    }
    childAfter(pos) {
      return this.nextChild(
        0,
        1,
        pos,
        2
        /* Side.After */
      );
    }
    childBefore(pos) {
      return this.nextChild(
        this._tree.children.length - 1,
        -1,
        pos,
        -2
        /* Side.Before */
      );
    }
    prop(prop) {
      return this._tree.prop(prop);
    }
    enter(pos, side, mode2 = 0) {
      let mounted;
      if (!(mode2 & IterMode.IgnoreOverlays) && (mounted = MountedTree.get(this._tree)) && mounted.overlay) {
        let rPos = pos - this.from, enterBracketed = mode2 & IterMode.EnterBracketed && mounted.bracketed;
        for (let { from, to } of mounted.overlay) {
          if ((side > 0 || enterBracketed ? from <= rPos : from < rPos) && (side < 0 || enterBracketed ? to >= rPos : to > rPos))
            return new _TreeNode(mounted.tree, mounted.overlay[0].from + this.from, -1, this);
        }
      }
      return this.nextChild(0, 1, pos, side, mode2);
    }
    nextSignificantParent() {
      let val = this;
      while (val.type.isAnonymous && val._parent)
        val = val._parent;
      return val;
    }
    get parent() {
      return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
      return this._parent && this.index >= 0 ? this._parent.nextChild(
        this.index + 1,
        1,
        0,
        4
        /* Side.DontCare */
      ) : null;
    }
    get prevSibling() {
      return this._parent && this.index >= 0 ? this._parent.nextChild(
        this.index - 1,
        -1,
        0,
        4
        /* Side.DontCare */
      ) : null;
    }
    get tree() {
      return this._tree;
    }
    toTree() {
      return this._tree;
    }
    /**
    @internal
    */
    toString() {
      return this._tree.toString();
    }
  };
  function getChildren(node, type, before2, after) {
    let cur = node.cursor(), result = [];
    if (!cur.firstChild())
      return result;
    if (before2 != null)
      for (let found = false; !found; ) {
        found = cur.type.is(before2);
        if (!cur.nextSibling())
          return result;
      }
    for (; ; ) {
      if (after != null && cur.type.is(after))
        return result;
      if (cur.type.is(type))
        result.push(cur.node);
      if (!cur.nextSibling())
        return after == null ? result : [];
    }
  }
  function matchNodeContext(node, context, i = context.length - 1) {
    for (let p = node; i >= 0; p = p.parent) {
      if (!p)
        return false;
      if (!p.type.isAnonymous) {
        if (context[i] && context[i] != p.name)
          return false;
        i--;
      }
    }
    return true;
  }
  var BufferContext = class {
    constructor(parent, buffer, index, start) {
      this.parent = parent;
      this.buffer = buffer;
      this.index = index;
      this.start = start;
    }
  };
  var BufferNode = class _BufferNode extends BaseNode {
    get name() {
      return this.type.name;
    }
    get from() {
      return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
      return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    constructor(context, _parent, index) {
      super();
      this.context = context;
      this._parent = _parent;
      this.index = index;
      this.type = context.buffer.set.types[context.buffer.buffer[index]];
    }
    child(dir, pos, side) {
      let { buffer } = this.context;
      let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.context.start, side);
      return index < 0 ? null : new _BufferNode(this.context, this, index);
    }
    get firstChild() {
      return this.child(
        1,
        0,
        4
        /* Side.DontCare */
      );
    }
    get lastChild() {
      return this.child(
        -1,
        0,
        4
        /* Side.DontCare */
      );
    }
    childAfter(pos) {
      return this.child(
        1,
        pos,
        2
        /* Side.After */
      );
    }
    childBefore(pos) {
      return this.child(
        -1,
        pos,
        -2
        /* Side.Before */
      );
    }
    prop(prop) {
      return this.type.prop(prop);
    }
    enter(pos, side, mode2 = 0) {
      if (mode2 & IterMode.ExcludeBuffers)
        return null;
      let { buffer } = this.context;
      let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], side > 0 ? 1 : -1, pos - this.context.start, side);
      return index < 0 ? null : new _BufferNode(this.context, this, index);
    }
    get parent() {
      return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(dir) {
      return this._parent ? null : this.context.parent.nextChild(
        this.context.index + dir,
        dir,
        0,
        4
        /* Side.DontCare */
      );
    }
    get nextSibling() {
      let { buffer } = this.context;
      let after = buffer.buffer[this.index + 3];
      if (after < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length))
        return new _BufferNode(this.context, this._parent, after);
      return this.externalSibling(1);
    }
    get prevSibling() {
      let { buffer } = this.context;
      let parentStart = this._parent ? this._parent.index + 4 : 0;
      if (this.index == parentStart)
        return this.externalSibling(-1);
      return new _BufferNode(this.context, this._parent, buffer.findChild(
        parentStart,
        this.index,
        -1,
        0,
        4
        /* Side.DontCare */
      ));
    }
    get tree() {
      return null;
    }
    toTree() {
      let children = [], positions = [];
      let { buffer } = this.context;
      let startI = this.index + 4, endI = buffer.buffer[this.index + 3];
      if (endI > startI) {
        let from = buffer.buffer[this.index + 1];
        children.push(buffer.slice(startI, endI, from));
        positions.push(0);
      }
      return new Tree(this.type, children, positions, this.to - this.from);
    }
    /**
    @internal
    */
    toString() {
      return this.context.buffer.childString(this.index);
    }
  };
  function iterStack(heads) {
    if (!heads.length)
      return null;
    let pick2 = 0, picked = heads[0];
    for (let i = 1; i < heads.length; i++) {
      let node = heads[i];
      if (node.from > picked.from || node.to < picked.to) {
        picked = node;
        pick2 = i;
      }
    }
    let next = picked instanceof TreeNode && picked.index < 0 ? null : picked.parent;
    let newHeads = heads.slice();
    if (next)
      newHeads[pick2] = next;
    else
      newHeads.splice(pick2, 1);
    return new StackIterator(newHeads, picked);
  }
  var StackIterator = class {
    constructor(heads, node) {
      this.heads = heads;
      this.node = node;
    }
    get next() {
      return iterStack(this.heads);
    }
  };
  function stackIterator(tree, pos, side) {
    let inner = tree.resolveInner(pos, side), layers = null;
    for (let scan = inner instanceof TreeNode ? inner : inner.context.parent; scan; scan = scan.parent) {
      if (scan.index < 0) {
        let parent = scan.parent;
        (layers || (layers = [inner])).push(parent.resolve(pos, side));
        scan = parent;
      } else {
        let mount = MountedTree.get(scan.tree);
        if (mount && mount.overlay && mount.overlay[0].from <= pos && mount.overlay[mount.overlay.length - 1].to >= pos) {
          let root = new TreeNode(mount.tree, mount.overlay[0].from + scan.from, -1, scan);
          (layers || (layers = [inner])).push(resolveNode(root, pos, side, false));
        }
      }
    }
    return layers ? iterStack(layers) : inner;
  }
  var TreeCursor = class {
    /**
    Shorthand for `.type.name`.
    */
    get name() {
      return this.type.name;
    }
    /**
    @internal
    */
    constructor(node, mode2 = 0) {
      this.buffer = null;
      this.stack = [];
      this.index = 0;
      this.bufferNode = null;
      this.mode = mode2 & ~IterMode.EnterBracketed;
      if (node instanceof TreeNode) {
        this.yieldNode(node);
      } else {
        this._tree = node.context.parent;
        this.buffer = node.context;
        for (let n2 = node._parent; n2; n2 = n2._parent)
          this.stack.unshift(n2.index);
        this.bufferNode = node;
        this.yieldBuf(node.index);
      }
    }
    yieldNode(node) {
      if (!node)
        return false;
      this._tree = node;
      this.type = node.type;
      this.from = node.from;
      this.to = node.to;
      return true;
    }
    yieldBuf(index, type) {
      this.index = index;
      let { start, buffer } = this.buffer;
      this.type = type || buffer.set.types[buffer.buffer[index]];
      this.from = start + buffer.buffer[index + 1];
      this.to = start + buffer.buffer[index + 2];
      return true;
    }
    /**
    @internal
    */
    yield(node) {
      if (!node)
        return false;
      if (node instanceof TreeNode) {
        this.buffer = null;
        return this.yieldNode(node);
      }
      this.buffer = node.context;
      return this.yieldBuf(node.index, node.type);
    }
    /**
    @internal
    */
    toString() {
      return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    /**
    @internal
    */
    enterChild(dir, pos, side) {
      if (!this.buffer)
        return this.yield(this._tree.nextChild(dir < 0 ? this._tree._tree.children.length - 1 : 0, dir, pos, side, this.mode));
      let { buffer } = this.buffer;
      let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.buffer.start, side);
      if (index < 0)
        return false;
      this.stack.push(this.index);
      return this.yieldBuf(index);
    }
    /**
    Move the cursor to this node's first child. When this returns
    false, the node has no child, and the cursor has not been moved.
    */
    firstChild() {
      return this.enterChild(
        1,
        0,
        4
        /* Side.DontCare */
      );
    }
    /**
    Move the cursor to this node's last child.
    */
    lastChild() {
      return this.enterChild(
        -1,
        0,
        4
        /* Side.DontCare */
      );
    }
    /**
    Move the cursor to the first child that ends after `pos`.
    */
    childAfter(pos) {
      return this.enterChild(
        1,
        pos,
        2
        /* Side.After */
      );
    }
    /**
    Move to the last child that starts before `pos`.
    */
    childBefore(pos) {
      return this.enterChild(
        -1,
        pos,
        -2
        /* Side.Before */
      );
    }
    /**
    Move the cursor to the child around `pos`. If side is -1 the
    child may end at that position, when 1 it may start there. This
    will also enter [overlaid](#common.MountedTree.overlay)
    [mounted](#common.NodeProp^mounted) trees unless `overlays` is
    set to false.
    */
    enter(pos, side, mode2 = this.mode) {
      if (!this.buffer)
        return this.yield(this._tree.enter(pos, side, mode2));
      return mode2 & IterMode.ExcludeBuffers ? false : this.enterChild(1, pos, side);
    }
    /**
    Move to the node's parent node, if this isn't the top node.
    */
    parent() {
      if (!this.buffer)
        return this.yieldNode(this.mode & IterMode.IncludeAnonymous ? this._tree._parent : this._tree.parent);
      if (this.stack.length)
        return this.yieldBuf(this.stack.pop());
      let parent = this.mode & IterMode.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
      this.buffer = null;
      return this.yieldNode(parent);
    }
    /**
    @internal
    */
    sibling(dir) {
      if (!this.buffer)
        return !this._tree._parent ? false : this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + dir, dir, 0, 4, this.mode));
      let { buffer } = this.buffer, d = this.stack.length - 1;
      if (dir < 0) {
        let parentStart = d < 0 ? 0 : this.stack[d] + 4;
        if (this.index != parentStart)
          return this.yieldBuf(buffer.findChild(
            parentStart,
            this.index,
            -1,
            0,
            4
            /* Side.DontCare */
          ));
      } else {
        let after = buffer.buffer[this.index + 3];
        if (after < (d < 0 ? buffer.buffer.length : buffer.buffer[this.stack[d] + 3]))
          return this.yieldBuf(after);
      }
      return d < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + dir, dir, 0, 4, this.mode)) : false;
    }
    /**
    Move to this node's next sibling, if any.
    */
    nextSibling() {
      return this.sibling(1);
    }
    /**
    Move to this node's previous sibling, if any.
    */
    prevSibling() {
      return this.sibling(-1);
    }
    atLastNode(dir) {
      let index, parent, { buffer } = this;
      if (buffer) {
        if (dir > 0) {
          if (this.index < buffer.buffer.buffer.length)
            return false;
        } else {
          for (let i = 0; i < this.index; i++)
            if (buffer.buffer.buffer[i + 3] < this.index)
              return false;
        }
        ({ index, parent } = buffer);
      } else {
        ({ index, _parent: parent } = this._tree);
      }
      for (; parent; { index, _parent: parent } = parent) {
        if (index > -1)
          for (let i = index + dir, e = dir < 0 ? -1 : parent._tree.children.length; i != e; i += dir) {
            let child = parent._tree.children[i];
            if (this.mode & IterMode.IncludeAnonymous || child instanceof TreeBuffer || !child.type.isAnonymous || hasChild(child))
              return false;
          }
      }
      return true;
    }
    move(dir, enter) {
      if (enter && this.enterChild(
        dir,
        0,
        4
        /* Side.DontCare */
      ))
        return true;
      for (; ; ) {
        if (this.sibling(dir))
          return true;
        if (this.atLastNode(dir) || !this.parent())
          return false;
      }
    }
    /**
    Move to the next node in a
    [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
    traversal, going from a node to its first child or, if the
    current node is empty or `enter` is false, its next sibling or
    the next sibling of the first parent node that has one.
    */
    next(enter = true) {
      return this.move(1, enter);
    }
    /**
    Move to the next node in a last-to-first pre-order traversal. A
    node is followed by its last child or, if it has none, its
    previous sibling or the previous sibling of the first parent
    node that has one.
    */
    prev(enter = true) {
      return this.move(-1, enter);
    }
    /**
    Move the cursor to the innermost node that covers `pos`. If
    `side` is -1, it will enter nodes that end at `pos`. If it is 1,
    it will enter nodes that start at `pos`.
    */
    moveTo(pos, side = 0) {
      while (this.from == this.to || (side < 1 ? this.from >= pos : this.from > pos) || (side > -1 ? this.to <= pos : this.to < pos))
        if (!this.parent())
          break;
      while (this.enterChild(1, pos, side)) {
      }
      return this;
    }
    /**
    Get a [syntax node](#common.SyntaxNode) at the cursor's current
    position.
    */
    get node() {
      if (!this.buffer)
        return this._tree;
      let cache = this.bufferNode, result = null, depth = 0;
      if (cache && cache.context == this.buffer) {
        scan: for (let index = this.index, d = this.stack.length; d >= 0; ) {
          for (let c = cache; c; c = c._parent)
            if (c.index == index) {
              if (index == this.index)
                return c;
              result = c;
              depth = d + 1;
              break scan;
            }
          index = this.stack[--d];
        }
      }
      for (let i = depth; i < this.stack.length; i++)
        result = new BufferNode(this.buffer, result, this.stack[i]);
      return this.bufferNode = new BufferNode(this.buffer, result, this.index);
    }
    /**
    Get the [tree](#common.Tree) that represents the current node, if
    any. Will return null when the node is in a [tree
    buffer](#common.TreeBuffer).
    */
    get tree() {
      return this.buffer ? null : this._tree._tree;
    }
    /**
    Iterate over the current node and all its descendants, calling
    `enter` when entering a node and `leave`, if given, when leaving
    one. When `enter` returns `false`, any children of that node are
    skipped, and `leave` isn't called for it.
    */
    iterate(enter, leave) {
      for (let depth = 0; ; ) {
        let mustLeave = false;
        if (this.type.isAnonymous || enter(this) !== false) {
          if (this.firstChild()) {
            depth++;
            continue;
          }
          if (!this.type.isAnonymous)
            mustLeave = true;
        }
        for (; ; ) {
          if (mustLeave && leave)
            leave(this);
          mustLeave = this.type.isAnonymous;
          if (!depth)
            return;
          if (this.nextSibling())
            break;
          this.parent();
          depth--;
          mustLeave = true;
        }
      }
    }
    /**
    Test whether the current node matches a given context—a sequence
    of direct parent node names. Empty strings in the context array
    are treated as wildcards.
    */
    matchContext(context) {
      if (!this.buffer)
        return matchNodeContext(this.node.parent, context);
      let { buffer } = this.buffer, { types } = buffer.set;
      for (let i = context.length - 1, d = this.stack.length - 1; i >= 0; d--) {
        if (d < 0)
          return matchNodeContext(this._tree, context, i);
        let type = types[buffer.buffer[this.stack[d]]];
        if (!type.isAnonymous) {
          if (context[i] && context[i] != type.name)
            return false;
          i--;
        }
      }
      return true;
    }
  };
  function hasChild(tree) {
    return tree.children.some((ch) => ch instanceof TreeBuffer || !ch.type.isAnonymous || hasChild(ch));
  }
  function buildTree(data) {
    var _a;
    let { buffer, nodeSet, maxBufferLength = DefaultBufferLength, reused = [], minRepeatType = nodeSet.types.length } = data;
    let cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
    let types = nodeSet.types;
    let contextHash = 0, lookAhead = 0;
    function takeNode(parentStart, minPos, children2, positions2, inRepeat, depth) {
      let { id: id2, start, end, size } = cursor;
      let lookAheadAtStart = lookAhead, contextAtStart = contextHash;
      if (size < 0) {
        cursor.next();
        if (size == -1) {
          let node2 = reused[id2];
          children2.push(node2);
          positions2.push(start - parentStart);
          return;
        } else if (size == -3) {
          contextHash = id2;
          return;
        } else if (size == -4) {
          lookAhead = id2;
          return;
        } else {
          throw new RangeError(`Unrecognized record size: ${size}`);
        }
      }
      let type = types[id2], node, buffer2;
      let startPos = start - parentStart;
      if (end - start <= maxBufferLength && (buffer2 = findBufferSize(cursor.pos - minPos, inRepeat))) {
        let data2 = new Uint16Array(buffer2.size - buffer2.skip);
        let endPos = cursor.pos - buffer2.size, index = data2.length;
        while (cursor.pos > endPos)
          index = copyToBuffer(buffer2.start, data2, index);
        node = new TreeBuffer(data2, end - buffer2.start, nodeSet);
        startPos = buffer2.start - parentStart;
      } else {
        let endPos = cursor.pos - size;
        cursor.next();
        let localChildren = [], localPositions = [];
        let localInRepeat = id2 >= minRepeatType ? id2 : -1;
        let lastGroup = 0, lastEnd = end;
        while (cursor.pos > endPos) {
          if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {
            if (cursor.end <= lastEnd - maxBufferLength) {
              makeRepeatLeaf(localChildren, localPositions, start, lastGroup, cursor.end, lastEnd, localInRepeat, lookAheadAtStart, contextAtStart);
              lastGroup = localChildren.length;
              lastEnd = cursor.end;
            }
            cursor.next();
          } else if (depth > 2500) {
            takeFlatNode(start, endPos, localChildren, localPositions);
          } else {
            takeNode(start, endPos, localChildren, localPositions, localInRepeat, depth + 1);
          }
        }
        if (localInRepeat >= 0 && lastGroup > 0 && lastGroup < localChildren.length)
          makeRepeatLeaf(localChildren, localPositions, start, lastGroup, start, lastEnd, localInRepeat, lookAheadAtStart, contextAtStart);
        localChildren.reverse();
        localPositions.reverse();
        if (localInRepeat > -1 && lastGroup > 0) {
          let make = makeBalanced(type, contextAtStart);
          node = balanceRange(type, localChildren, localPositions, 0, localChildren.length, 0, end - start, make, make);
        } else {
          node = makeTree(type, localChildren, localPositions, end - start, lookAheadAtStart - end, contextAtStart);
        }
      }
      children2.push(node);
      positions2.push(startPos);
    }
    function takeFlatNode(parentStart, minPos, children2, positions2) {
      let nodes = [];
      let nodeCount = 0, stopAt = -1;
      while (cursor.pos > minPos) {
        let { id: id2, start, end, size } = cursor;
        if (size > 4) {
          cursor.next();
        } else if (stopAt > -1 && start < stopAt) {
          break;
        } else {
          if (stopAt < 0)
            stopAt = end - maxBufferLength;
          nodes.push(id2, start, end);
          nodeCount++;
          cursor.next();
        }
      }
      if (nodeCount) {
        let buffer2 = new Uint16Array(nodeCount * 4);
        let start = nodes[nodes.length - 2];
        for (let i = nodes.length - 3, j = 0; i >= 0; i -= 3) {
          buffer2[j++] = nodes[i];
          buffer2[j++] = nodes[i + 1] - start;
          buffer2[j++] = nodes[i + 2] - start;
          buffer2[j++] = j;
        }
        children2.push(new TreeBuffer(buffer2, nodes[2] - start, nodeSet));
        positions2.push(start - parentStart);
      }
    }
    function makeBalanced(type, contextHash2) {
      return (children2, positions2, length2) => {
        let lookAhead2 = 0, lastI = children2.length - 1, last2, lookAheadProp;
        if (lastI >= 0 && (last2 = children2[lastI]) instanceof Tree) {
          if (!lastI && last2.type == type && last2.length == length2)
            return last2;
          if (lookAheadProp = last2.prop(NodeProp.lookAhead))
            lookAhead2 = positions2[lastI] + last2.length + lookAheadProp;
        }
        return makeTree(type, children2, positions2, length2, lookAhead2, contextHash2);
      };
    }
    function makeRepeatLeaf(children2, positions2, base, i, from, to, type, lookAhead2, contextHash2) {
      let localChildren = [], localPositions = [];
      while (children2.length > i) {
        localChildren.push(children2.pop());
        localPositions.push(positions2.pop() + base - from);
      }
      children2.push(makeTree(nodeSet.types[type], localChildren, localPositions, to - from, lookAhead2 - to, contextHash2));
      positions2.push(from - base);
    }
    function makeTree(type, children2, positions2, length2, lookAhead2, contextHash2, props) {
      if (contextHash2) {
        let pair2 = [NodeProp.contextHash, contextHash2];
        props = props ? [pair2].concat(props) : [pair2];
      }
      if (lookAhead2 > 25) {
        let pair2 = [NodeProp.lookAhead, lookAhead2];
        props = props ? [pair2].concat(props) : [pair2];
      }
      return new Tree(type, children2, positions2, length2, props);
    }
    function findBufferSize(maxSize, inRepeat) {
      let fork = cursor.fork();
      let size = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
      let result = { size: 0, start: 0, skip: 0 };
      scan: for (let minPos = fork.pos - maxSize; fork.pos > minPos; ) {
        let nodeSize2 = fork.size;
        if (fork.id == inRepeat && nodeSize2 >= 0) {
          result.size = size;
          result.start = start;
          result.skip = skip;
          skip += 4;
          size += 4;
          fork.next();
          continue;
        }
        let startPos = fork.pos - nodeSize2;
        if (nodeSize2 < 0 || startPos < minPos || fork.start < minStart)
          break;
        let localSkipped = fork.id >= minRepeatType ? 4 : 0;
        let nodeStart = fork.start;
        fork.next();
        while (fork.pos > startPos) {
          if (fork.size < 0) {
            if (fork.size == -3 || fork.size == -4)
              localSkipped += 4;
            else
              break scan;
          } else if (fork.id >= minRepeatType) {
            localSkipped += 4;
          }
          fork.next();
        }
        start = nodeStart;
        size += nodeSize2;
        skip += localSkipped;
      }
      if (inRepeat < 0 || size == maxSize) {
        result.size = size;
        result.start = start;
        result.skip = skip;
      }
      return result.size > 4 ? result : void 0;
    }
    function copyToBuffer(bufferStart, buffer2, index) {
      let { id: id2, start, end, size } = cursor;
      cursor.next();
      if (size >= 0 && id2 < minRepeatType) {
        let startIndex = index;
        if (size > 4) {
          let endPos = cursor.pos - (size - 4);
          while (cursor.pos > endPos)
            index = copyToBuffer(bufferStart, buffer2, index);
        }
        buffer2[--index] = startIndex;
        buffer2[--index] = end - bufferStart;
        buffer2[--index] = start - bufferStart;
        buffer2[--index] = id2;
      } else if (size == -3) {
        contextHash = id2;
      } else if (size == -4) {
        lookAhead = id2;
      }
      return index;
    }
    let children = [], positions = [];
    while (cursor.pos > 0)
      takeNode(data.start || 0, data.bufferStart || 0, children, positions, -1, 0);
    let length = (_a = data.length) !== null && _a !== void 0 ? _a : children.length ? positions[0] + children[0].length : 0;
    return new Tree(types[data.topID], children.reverse(), positions.reverse(), length);
  }
  var nodeSizeCache = /* @__PURE__ */ new WeakMap();
  function nodeSize(balanceType, node) {
    if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType)
      return 1;
    let size = nodeSizeCache.get(node);
    if (size == null) {
      size = 1;
      for (let child of node.children) {
        if (child.type != balanceType || !(child instanceof Tree)) {
          size = 1;
          break;
        }
        size += nodeSize(balanceType, child);
      }
      nodeSizeCache.set(node, size);
    }
    return size;
  }
  function balanceRange(balanceType, children, positions, from, to, start, length, mkTop, mkTree) {
    let total = 0;
    for (let i = from; i < to; i++)
      total += nodeSize(balanceType, children[i]);
    let maxChild = Math.ceil(
      total * 1.5 / 8
      /* Balance.BranchFactor */
    );
    let localChildren = [], localPositions = [];
    function divide(children2, positions2, from2, to2, offset2) {
      for (let i = from2; i < to2; ) {
        let groupFrom = i, groupStart = positions2[i], groupSize = nodeSize(balanceType, children2[i]);
        i++;
        for (; i < to2; i++) {
          let nextSize = nodeSize(balanceType, children2[i]);
          if (groupSize + nextSize >= maxChild)
            break;
          groupSize += nextSize;
        }
        if (i == groupFrom + 1) {
          if (groupSize > maxChild) {
            let only = children2[groupFrom];
            divide(only.children, only.positions, 0, only.children.length, positions2[groupFrom] + offset2);
            continue;
          }
          localChildren.push(children2[groupFrom]);
        } else {
          let length2 = positions2[i - 1] + children2[i - 1].length - groupStart;
          localChildren.push(balanceRange(balanceType, children2, positions2, groupFrom, i, groupStart, length2, null, mkTree));
        }
        localPositions.push(groupStart + offset2 - start);
      }
    }
    divide(children, positions, from, to, 0);
    return (mkTop || mkTree)(localChildren, localPositions, length);
  }
  var Parser = class {
    /**
    Start a parse, returning a [partial parse](#common.PartialParse)
    object. [`fragments`](#common.TreeFragment) can be passed in to
    make the parse incremental.
    
    By default, the entire input is parsed. You can pass `ranges`,
    which should be a sorted array of non-empty, non-overlapping
    ranges, to parse only those ranges. The tree returned in that
    case will start at `ranges[0].from`.
    */
    startParse(input, fragments, ranges) {
      if (typeof input == "string")
        input = new StringInput(input);
      ranges = !ranges ? [new Range(0, input.length)] : ranges.length ? ranges.map((r) => new Range(r.from, r.to)) : [new Range(0, 0)];
      return this.createParse(input, fragments || [], ranges);
    }
    /**
    Run a full parse, returning the resulting tree.
    */
    parse(input, fragments, ranges) {
      let parse2 = this.startParse(input, fragments, ranges);
      for (; ; ) {
        let done = parse2.advance();
        if (done)
          return done;
      }
    }
  };
  var StringInput = class {
    constructor(string2) {
      this.string = string2;
    }
    get length() {
      return this.string.length;
    }
    chunk(from) {
      return this.string.slice(from);
    }
    get lineChunks() {
      return false;
    }
    read(from, to) {
      return this.string.slice(from, to);
    }
  };
  var stoppedInner = new NodeProp({ perNode: true });

  // node_modules/@lezer/lr/dist/index.js
  var Stack = class _Stack {
    /**
    @internal
    */
    constructor(p, stack, state, reducePos, pos, score, buffer, bufferBase, curContext, lookAhead = 0, parent) {
      this.p = p;
      this.stack = stack;
      this.state = state;
      this.reducePos = reducePos;
      this.pos = pos;
      this.score = score;
      this.buffer = buffer;
      this.bufferBase = bufferBase;
      this.curContext = curContext;
      this.lookAhead = lookAhead;
      this.parent = parent;
    }
    /**
    @internal
    */
    toString() {
      return `[${this.stack.filter((_, i) => i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    // Start an empty stack
    /**
    @internal
    */
    static start(p, state, pos = 0) {
      let cx = p.parser.context;
      return new _Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, 0, null);
    }
    /**
    The stack's current [context](#lr.ContextTracker) value, if
    any. Its type will depend on the context tracker's type
    parameter, or it will be `null` if there is no context
    tracker.
    */
    get context() {
      return this.curContext ? this.curContext.context : null;
    }
    // Push a state onto the stack, tracking its start position as well
    // as the buffer base at that point.
    /**
    @internal
    */
    pushState(state, start) {
      this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
      this.state = state;
    }
    // Apply a reduce action
    /**
    @internal
    */
    reduce(action) {
      var _a;
      let depth = action >> 19, type = action & 65535;
      let { parser: parser2 } = this.p;
      let lookaheadRecord = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
      let dPrec = parser2.dynamicPrecedence(type);
      if (dPrec)
        this.score += dPrec;
      if (depth == 0) {
        if (type < parser2.minRepeatTerm && this.reducePos < this.pos)
          this.reducePos = this.pos;
        this.pushState(parser2.getGoto(this.state, type, true), this.reducePos);
        if (type < parser2.minRepeatTerm)
          this.storeNode(type, this.reducePos, this.reducePos, lookaheadRecord ? 8 : 4, true);
        this.reduceContext(type, this.reducePos);
        return;
      }
      let base = this.stack.length - (depth - 1) * 3 - (action & 262144 ? 6 : 0);
      let start = base ? this.stack[base - 2] : this.p.ranges[0].from;
      if (type < parser2.minRepeatTerm && start == this.reducePos && this.reducePos < this.pos)
        this.reducePos = this.pos;
      let size = this.reducePos - start;
      if (size >= 2e3 && !((_a = this.p.parser.nodeSet.types[type]) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
        if (start == this.p.lastBigReductionStart) {
          this.p.bigReductionCount++;
          this.p.lastBigReductionSize = size;
        } else if (this.p.lastBigReductionSize < size) {
          this.p.bigReductionCount = 1;
          this.p.lastBigReductionStart = start;
          this.p.lastBigReductionSize = size;
        }
      }
      let bufferBase = base ? this.stack[base - 1] : 0, count = this.bufferBase + this.buffer.length - bufferBase;
      if (type < parser2.minRepeatTerm || action & 131072) {
        let pos = parser2.stateFlag(
          this.state,
          1
          /* StateFlag.Skipped */
        ) ? this.pos : this.reducePos;
        this.storeNode(type, start, pos, count + 4, true);
      }
      if (action & 262144) {
        this.state = this.stack[base];
      } else {
        let baseStateID = this.stack[base - 3];
        this.state = parser2.getGoto(baseStateID, type, true);
      }
      while (this.stack.length > base)
        this.stack.pop();
      this.reduceContext(type, start);
    }
    // Shift a value into the buffer
    /**
    @internal
    */
    storeNode(term, start, end, size = 4, mustSink = false) {
      if (term == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
        let top = this.buffer.length;
        if (top > 0 && this.buffer[top - 4] == 0 && this.buffer[top - 1] > -1) {
          if (start == end)
            return;
          if (this.buffer[top - 2] >= start) {
            this.buffer[top - 2] = end;
            return;
          }
        }
      }
      if (!mustSink || this.pos == end) {
        this.buffer.push(term, start, end, size);
      } else {
        let index = this.buffer.length;
        if (index > 0 && (this.buffer[index - 4] != 0 || this.buffer[index - 1] < 0)) {
          let mustMove = false;
          for (let scan = index; scan > 0 && this.buffer[scan - 2] > end; scan -= 4) {
            if (this.buffer[scan - 1] >= 0) {
              mustMove = true;
              break;
            }
          }
          if (mustMove)
            while (index > 0 && this.buffer[index - 2] > end) {
              this.buffer[index] = this.buffer[index - 4];
              this.buffer[index + 1] = this.buffer[index - 3];
              this.buffer[index + 2] = this.buffer[index - 2];
              this.buffer[index + 3] = this.buffer[index - 1];
              index -= 4;
              if (size > 4)
                size -= 4;
            }
        }
        this.buffer[index] = term;
        this.buffer[index + 1] = start;
        this.buffer[index + 2] = end;
        this.buffer[index + 3] = size;
      }
    }
    // Apply a shift action
    /**
    @internal
    */
    shift(action, type, start, end) {
      if (action & 131072) {
        this.pushState(action & 65535, this.pos);
      } else if ((action & 262144) == 0) {
        let nextState = action, { parser: parser2 } = this.p;
        this.pos = end;
        let skipped = parser2.stateFlag(
          nextState,
          1
          /* StateFlag.Skipped */
        );
        if (!skipped && (end > start || type <= parser2.maxNode))
          this.reducePos = end;
        this.pushState(nextState, skipped ? start : Math.min(start, this.reducePos));
        this.shiftContext(type, start);
        if (type <= parser2.maxNode)
          this.buffer.push(type, start, end, 4);
      } else {
        this.pos = end;
        this.shiftContext(type, start);
        if (type <= this.p.parser.maxNode)
          this.buffer.push(type, start, end, 4);
      }
    }
    // Apply an action
    /**
    @internal
    */
    apply(action, next, nextStart, nextEnd) {
      if (action & 65536)
        this.reduce(action);
      else
        this.shift(action, next, nextStart, nextEnd);
    }
    // Add a prebuilt (reused) node into the buffer.
    /**
    @internal
    */
    useNode(value, next) {
      let index = this.p.reused.length - 1;
      if (index < 0 || this.p.reused[index] != value) {
        this.p.reused.push(value);
        index++;
      }
      let start = this.pos;
      this.reducePos = this.pos = start + value.length;
      this.pushState(next, start);
      this.buffer.push(
        index,
        start,
        this.reducePos,
        -1
        /* size == -1 means this is a reused value */
      );
      if (this.curContext)
        this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this, this.p.stream.reset(this.pos - value.length)));
    }
    // Split the stack. Due to the buffer sharing and the fact
    // that `this.stack` tends to stay quite shallow, this isn't very
    // expensive.
    /**
    @internal
    */
    split() {
      let parent = this;
      let off = parent.buffer.length;
      if (off && parent.buffer[off - 4] == 0)
        off -= 4;
      while (off > 0 && parent.buffer[off - 2] > parent.reducePos)
        off -= 4;
      let buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
      while (parent && base == parent.bufferBase)
        parent = parent.parent;
      return new _Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base, this.curContext, this.lookAhead, parent);
    }
    // Try to recover from an error by 'deleting' (ignoring) one token.
    /**
    @internal
    */
    recoverByDelete(next, nextEnd) {
      let isNode = next <= this.p.parser.maxNode;
      if (isNode)
        this.storeNode(next, this.pos, nextEnd, 4);
      this.storeNode(0, this.pos, nextEnd, isNode ? 8 : 4);
      this.pos = this.reducePos = nextEnd;
      this.score -= 190;
    }
    /**
    Check if the given term would be able to be shifted (optionally
    after some reductions) on this stack. This can be useful for
    external tokenizers that want to make sure they only provide a
    given token when it applies.
    */
    canShift(term) {
      for (let sim = new SimulatedStack(this); ; ) {
        let action = this.p.parser.stateSlot(
          sim.state,
          4
          /* ParseState.DefaultReduce */
        ) || this.p.parser.hasAction(sim.state, term);
        if (action == 0)
          return false;
        if ((action & 65536) == 0)
          return true;
        sim.reduce(action);
      }
    }
    // Apply up to Recover.MaxNext recovery actions that conceptually
    // inserts some missing token or rule.
    /**
    @internal
    */
    recoverByInsert(next) {
      if (this.stack.length >= 300)
        return [];
      let nextStates = this.p.parser.nextStates(this.state);
      if (nextStates.length > 4 << 1 || this.stack.length >= 120) {
        let best = [];
        for (let i = 0, s2; i < nextStates.length; i += 2) {
          if ((s2 = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s2, next))
            best.push(nextStates[i], s2);
        }
        if (this.stack.length < 120)
          for (let i = 0; best.length < 4 << 1 && i < nextStates.length; i += 2) {
            let s2 = nextStates[i + 1];
            if (!best.some((v, i2) => i2 & 1 && v == s2))
              best.push(nextStates[i], s2);
          }
        nextStates = best;
      }
      let result = [];
      for (let i = 0; i < nextStates.length && result.length < 4; i += 2) {
        let s2 = nextStates[i + 1];
        if (s2 == this.state)
          continue;
        let stack = this.split();
        stack.pushState(s2, this.pos);
        stack.storeNode(0, stack.pos, stack.pos, 4, true);
        stack.shiftContext(nextStates[i], this.pos);
        stack.reducePos = this.pos;
        stack.score -= 200;
        result.push(stack);
      }
      return result;
    }
    // Force a reduce, if possible. Return false if that can't
    // be done.
    /**
    @internal
    */
    forceReduce() {
      let { parser: parser2 } = this.p;
      let reduce = parser2.stateSlot(
        this.state,
        5
        /* ParseState.ForcedReduce */
      );
      if ((reduce & 65536) == 0)
        return false;
      if (!parser2.validAction(this.state, reduce)) {
        let depth = reduce >> 19, term = reduce & 65535;
        let target = this.stack.length - depth * 3;
        if (target < 0 || parser2.getGoto(this.stack[target], term, false) < 0) {
          let backup = this.findForcedReduction();
          if (backup == null)
            return false;
          reduce = backup;
        }
        this.storeNode(0, this.pos, this.pos, 4, true);
        this.score -= 100;
      }
      this.reducePos = this.pos;
      this.reduce(reduce);
      return true;
    }
    /**
    Try to scan through the automaton to find some kind of reduction
    that can be applied. Used when the regular ForcedReduce field
    isn't a valid action. @internal
    */
    findForcedReduction() {
      let { parser: parser2 } = this.p, seen = [];
      let explore = (state, depth) => {
        if (seen.includes(state))
          return;
        seen.push(state);
        return parser2.allActions(state, (action) => {
          if (action & (262144 | 131072)) ;
          else if (action & 65536) {
            let rDepth = (action >> 19) - depth;
            if (rDepth > 1) {
              let term = action & 65535, target = this.stack.length - rDepth * 3;
              if (target >= 0 && parser2.getGoto(this.stack[target], term, false) >= 0)
                return rDepth << 19 | 65536 | term;
            }
          } else {
            let found = explore(action, depth + 1);
            if (found != null)
              return found;
          }
        });
      };
      return explore(this.state, 0);
    }
    /**
    @internal
    */
    forceAll() {
      while (!this.p.parser.stateFlag(
        this.state,
        2
        /* StateFlag.Accepting */
      )) {
        if (!this.forceReduce()) {
          this.storeNode(0, this.pos, this.pos, 4, true);
          break;
        }
      }
      return this;
    }
    /**
    Check whether this state has no further actions (assumed to be a direct descendant of the
    top state, since any other states must be able to continue
    somehow). @internal
    */
    get deadEnd() {
      if (this.stack.length != 3)
        return false;
      let { parser: parser2 } = this.p;
      return parser2.data[parser2.stateSlot(
        this.state,
        1
        /* ParseState.Actions */
      )] == 65535 && !parser2.stateSlot(
        this.state,
        4
        /* ParseState.DefaultReduce */
      );
    }
    /**
    Restart the stack (put it back in its start state). Only safe
    when this.stack.length == 3 (state is directly below the top
    state). @internal
    */
    restart() {
      this.storeNode(0, this.pos, this.pos, 4, true);
      this.state = this.stack[0];
      this.stack.length = 0;
    }
    /**
    @internal
    */
    sameState(other) {
      if (this.state != other.state || this.stack.length != other.stack.length)
        return false;
      for (let i = 0; i < this.stack.length; i += 3)
        if (this.stack[i] != other.stack[i])
          return false;
      return true;
    }
    /**
    Get the parser used by this stack.
    */
    get parser() {
      return this.p.parser;
    }
    /**
    Test whether a given dialect (by numeric ID, as exported from
    the terms file) is enabled.
    */
    dialectEnabled(dialectID) {
      return this.p.parser.dialect.flags[dialectID];
    }
    shiftContext(term, start) {
      if (this.curContext)
        this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    reduceContext(term, start) {
      if (this.curContext)
        this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    /**
    @internal
    */
    emitContext() {
      let last2 = this.buffer.length - 1;
      if (last2 < 0 || this.buffer[last2] != -3)
        this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
    }
    /**
    @internal
    */
    emitLookAhead() {
      let last2 = this.buffer.length - 1;
      if (last2 < 0 || this.buffer[last2] != -4)
        this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
    }
    updateContext(context) {
      if (context != this.curContext.context) {
        let newCx = new StackContext(this.curContext.tracker, context);
        if (newCx.hash != this.curContext.hash)
          this.emitContext();
        this.curContext = newCx;
      }
    }
    /**
    @internal
    */
    setLookAhead(lookAhead) {
      if (lookAhead <= this.lookAhead)
        return false;
      this.emitLookAhead();
      this.lookAhead = lookAhead;
      return true;
    }
    /**
    @internal
    */
    close() {
      if (this.curContext && this.curContext.tracker.strict)
        this.emitContext();
      if (this.lookAhead > 0)
        this.emitLookAhead();
    }
  };
  var StackContext = class {
    constructor(tracker, context) {
      this.tracker = tracker;
      this.context = context;
      this.hash = tracker.strict ? tracker.hash(context) : 0;
    }
  };
  var SimulatedStack = class {
    constructor(start) {
      this.start = start;
      this.state = start.state;
      this.stack = start.stack;
      this.base = this.stack.length;
    }
    reduce(action) {
      let term = action & 65535, depth = action >> 19;
      if (depth == 0) {
        if (this.stack == this.start.stack)
          this.stack = this.stack.slice();
        this.stack.push(this.state, 0, 0);
        this.base += 3;
      } else {
        this.base -= (depth - 1) * 3;
      }
      let goto = this.start.p.parser.getGoto(this.stack[this.base - 3], term, true);
      this.state = goto;
    }
  };
  var StackBufferCursor = class _StackBufferCursor {
    constructor(stack, pos, index) {
      this.stack = stack;
      this.pos = pos;
      this.index = index;
      this.buffer = stack.buffer;
      if (this.index == 0)
        this.maybeNext();
    }
    static create(stack, pos = stack.bufferBase + stack.buffer.length) {
      return new _StackBufferCursor(stack, pos, pos - stack.bufferBase);
    }
    maybeNext() {
      let next = this.stack.parent;
      if (next != null) {
        this.index = this.stack.bufferBase - next.bufferBase;
        this.stack = next;
        this.buffer = next.buffer;
      }
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    next() {
      this.index -= 4;
      this.pos -= 4;
      if (this.index == 0)
        this.maybeNext();
    }
    fork() {
      return new _StackBufferCursor(this.stack, this.pos, this.index);
    }
  };
  function decodeArray(input, Type = Uint16Array) {
    if (typeof input != "string")
      return input;
    let array = null;
    for (let pos = 0, out = 0; pos < input.length; ) {
      let value = 0;
      for (; ; ) {
        let next = input.charCodeAt(pos++), stop = false;
        if (next == 126) {
          value = 65535;
          break;
        }
        if (next >= 92)
          next--;
        if (next >= 34)
          next--;
        let digit = next - 32;
        if (digit >= 46) {
          digit -= 46;
          stop = true;
        }
        value += digit;
        if (stop)
          break;
        value *= 46;
      }
      if (array)
        array[out++] = value;
      else
        array = new Type(value);
    }
    return array;
  }
  var CachedToken = class {
    constructor() {
      this.start = -1;
      this.value = -1;
      this.end = -1;
      this.extended = -1;
      this.lookAhead = 0;
      this.mask = 0;
      this.context = 0;
    }
  };
  var nullToken = new CachedToken();
  var InputStream = class {
    /**
    @internal
    */
    constructor(input, ranges) {
      this.input = input;
      this.ranges = ranges;
      this.chunk = "";
      this.chunkOff = 0;
      this.chunk2 = "";
      this.chunk2Pos = 0;
      this.next = -1;
      this.token = nullToken;
      this.rangeIndex = 0;
      this.pos = this.chunkPos = ranges[0].from;
      this.range = ranges[0];
      this.end = ranges[ranges.length - 1].to;
      this.readNext();
    }
    /**
    @internal
    */
    resolveOffset(offset2, assoc) {
      let range = this.range, index = this.rangeIndex;
      let pos = this.pos + offset2;
      while (pos < range.from) {
        if (!index)
          return null;
        let next = this.ranges[--index];
        pos -= range.from - next.to;
        range = next;
      }
      while (assoc < 0 ? pos > range.to : pos >= range.to) {
        if (index == this.ranges.length - 1)
          return null;
        let next = this.ranges[++index];
        pos += next.from - range.to;
        range = next;
      }
      return pos;
    }
    /**
    @internal
    */
    clipPos(pos) {
      if (pos >= this.range.from && pos < this.range.to)
        return pos;
      for (let range of this.ranges)
        if (range.to > pos)
          return Math.max(pos, range.from);
      return this.end;
    }
    /**
    Look at a code unit near the stream position. `.peek(0)` equals
    `.next`, `.peek(-1)` gives you the previous character, and so
    on.
    
    Note that looking around during tokenizing creates dependencies
    on potentially far-away content, which may reduce the
    effectiveness incremental parsing—when looking forward—or even
    cause invalid reparses when looking backward more than 25 code
    units, since the library does not track lookbehind.
    */
    peek(offset2) {
      let idx = this.chunkOff + offset2, pos, result;
      if (idx >= 0 && idx < this.chunk.length) {
        pos = this.pos + offset2;
        result = this.chunk.charCodeAt(idx);
      } else {
        let resolved = this.resolveOffset(offset2, 1);
        if (resolved == null)
          return -1;
        pos = resolved;
        if (pos >= this.chunk2Pos && pos < this.chunk2Pos + this.chunk2.length) {
          result = this.chunk2.charCodeAt(pos - this.chunk2Pos);
        } else {
          let i = this.rangeIndex, range = this.range;
          while (range.to <= pos)
            range = this.ranges[++i];
          this.chunk2 = this.input.chunk(this.chunk2Pos = pos);
          if (pos + this.chunk2.length > range.to)
            this.chunk2 = this.chunk2.slice(0, range.to - pos);
          result = this.chunk2.charCodeAt(0);
        }
      }
      if (pos >= this.token.lookAhead)
        this.token.lookAhead = pos + 1;
      return result;
    }
    /**
    Accept a token. By default, the end of the token is set to the
    current stream position, but you can pass an offset (relative to
    the stream position) to change that.
    */
    acceptToken(token, endOffset = 0) {
      let end = endOffset ? this.resolveOffset(endOffset, -1) : this.pos;
      if (end == null || end < this.token.start)
        throw new RangeError("Token end out of bounds");
      this.token.value = token;
      this.token.end = end;
    }
    /**
    Accept a token ending at a specific given position.
    */
    acceptTokenTo(token, endPos) {
      this.token.value = token;
      this.token.end = endPos;
    }
    getChunk() {
      if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
        let { chunk, chunkPos } = this;
        this.chunk = this.chunk2;
        this.chunkPos = this.chunk2Pos;
        this.chunk2 = chunk;
        this.chunk2Pos = chunkPos;
        this.chunkOff = this.pos - this.chunkPos;
      } else {
        this.chunk2 = this.chunk;
        this.chunk2Pos = this.chunkPos;
        let nextChunk = this.input.chunk(this.pos);
        let end = this.pos + nextChunk.length;
        this.chunk = end > this.range.to ? nextChunk.slice(0, this.range.to - this.pos) : nextChunk;
        this.chunkPos = this.pos;
        this.chunkOff = 0;
      }
    }
    readNext() {
      if (this.chunkOff >= this.chunk.length) {
        this.getChunk();
        if (this.chunkOff == this.chunk.length)
          return this.next = -1;
      }
      return this.next = this.chunk.charCodeAt(this.chunkOff);
    }
    /**
    Move the stream forward N (defaults to 1) code units. Returns
    the new value of [`next`](#lr.InputStream.next).
    */
    advance(n2 = 1) {
      this.chunkOff += n2;
      while (this.pos + n2 >= this.range.to) {
        if (this.rangeIndex == this.ranges.length - 1)
          return this.setDone();
        n2 -= this.range.to - this.pos;
        this.range = this.ranges[++this.rangeIndex];
        this.pos = this.range.from;
      }
      this.pos += n2;
      if (this.pos >= this.token.lookAhead)
        this.token.lookAhead = this.pos + 1;
      return this.readNext();
    }
    setDone() {
      this.pos = this.chunkPos = this.end;
      this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
      this.chunk = "";
      return this.next = -1;
    }
    /**
    @internal
    */
    reset(pos, token) {
      if (token) {
        this.token = token;
        token.start = pos;
        token.lookAhead = pos + 1;
        token.value = token.extended = -1;
      } else {
        this.token = nullToken;
      }
      if (this.pos != pos) {
        this.pos = pos;
        if (pos == this.end) {
          this.setDone();
          return this;
        }
        while (pos < this.range.from)
          this.range = this.ranges[--this.rangeIndex];
        while (pos >= this.range.to)
          this.range = this.ranges[++this.rangeIndex];
        if (pos >= this.chunkPos && pos < this.chunkPos + this.chunk.length) {
          this.chunkOff = pos - this.chunkPos;
        } else {
          this.chunk = "";
          this.chunkOff = 0;
        }
        this.readNext();
      }
      return this;
    }
    /**
    @internal
    */
    read(from, to) {
      if (from >= this.chunkPos && to <= this.chunkPos + this.chunk.length)
        return this.chunk.slice(from - this.chunkPos, to - this.chunkPos);
      if (from >= this.chunk2Pos && to <= this.chunk2Pos + this.chunk2.length)
        return this.chunk2.slice(from - this.chunk2Pos, to - this.chunk2Pos);
      if (from >= this.range.from && to <= this.range.to)
        return this.input.read(from, to);
      let result = "";
      for (let r of this.ranges) {
        if (r.from >= to)
          break;
        if (r.to > from)
          result += this.input.read(Math.max(r.from, from), Math.min(r.to, to));
      }
      return result;
    }
  };
  var TokenGroup = class {
    constructor(data, id2) {
      this.data = data;
      this.id = id2;
    }
    token(input, stack) {
      let { parser: parser2 } = stack.p;
      readToken(this.data, input, stack, this.id, parser2.data, parser2.tokenPrecTable);
    }
  };
  TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
  var LocalTokenGroup = class {
    constructor(data, precTable, elseToken) {
      this.precTable = precTable;
      this.elseToken = elseToken;
      this.data = typeof data == "string" ? decodeArray(data) : data;
    }
    token(input, stack) {
      let start = input.pos, skipped = 0;
      for (; ; ) {
        let atEof = input.next < 0, nextPos = input.resolveOffset(1, 1);
        readToken(this.data, input, stack, 0, this.data, this.precTable);
        if (input.token.value > -1)
          break;
        if (this.elseToken == null)
          return;
        if (!atEof)
          skipped++;
        if (nextPos == null)
          break;
        input.reset(nextPos, input.token);
      }
      if (skipped) {
        input.reset(start, input.token);
        input.acceptToken(this.elseToken, skipped);
      }
    }
  };
  LocalTokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
  var ExternalTokenizer = class {
    /**
    Create a tokenizer. The first argument is the function that,
    given an input stream, scans for the types of tokens it
    recognizes at the stream's position, and calls
    [`acceptToken`](#lr.InputStream.acceptToken) when it finds
    one.
    */
    constructor(token, options = {}) {
      this.token = token;
      this.contextual = !!options.contextual;
      this.fallback = !!options.fallback;
      this.extend = !!options.extend;
    }
  };
  function readToken(data, input, stack, group, precTable, precOffset) {
    let state = 0, groupMask = 1 << group, { dialect } = stack.p.parser;
    scan: for (; ; ) {
      if ((groupMask & data[state]) == 0)
        break;
      let accEnd = data[state + 1];
      for (let i = state + 3; i < accEnd; i += 2)
        if ((data[i + 1] & groupMask) > 0) {
          let term = data[i];
          if (dialect.allows(term) && (input.token.value == -1 || input.token.value == term || overrides(term, input.token.value, precTable, precOffset))) {
            input.acceptToken(term);
            break;
          }
        }
      let next = input.next, low = 0, high = data[state + 2];
      if (input.next < 0 && high > low && data[accEnd + high * 3 - 3] == 65535) {
        state = data[accEnd + high * 3 - 1];
        continue scan;
      }
      for (; low < high; ) {
        let mid = low + high >> 1;
        let index = accEnd + mid + (mid << 1);
        let from = data[index], to = data[index + 1] || 65536;
        if (next < from)
          high = mid;
        else if (next >= to)
          low = mid + 1;
        else {
          state = data[index + 2];
          input.advance();
          continue scan;
        }
      }
      break;
    }
  }
  function findOffset(data, start, term) {
    for (let i = start, next; (next = data[i]) != 65535; i++)
      if (next == term)
        return i - start;
    return -1;
  }
  function overrides(token, prev, tableData, tableOffset) {
    let iPrev = findOffset(tableData, tableOffset, prev);
    return iPrev < 0 || findOffset(tableData, tableOffset, token) < iPrev;
  }
  var verbose = typeof process != "undefined" && process.env && /\bparse\b/.test(process.env.LOG);
  var stackIDs = null;
  function cutAt(tree, pos, side) {
    let cursor = tree.cursor(IterMode.IncludeAnonymous);
    cursor.moveTo(pos);
    for (; ; ) {
      if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos)))
        for (; ; ) {
          if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError)
            return side < 0 ? Math.max(0, Math.min(
              cursor.to - 1,
              pos - 25
              /* Lookahead.Margin */
            )) : Math.min(tree.length, Math.max(
              cursor.from + 1,
              pos + 25
              /* Lookahead.Margin */
            ));
          if (side < 0 ? cursor.prevSibling() : cursor.nextSibling())
            break;
          if (!cursor.parent())
            return side < 0 ? 0 : tree.length;
        }
    }
  }
  var FragmentCursor = class {
    constructor(fragments, nodeSet) {
      this.fragments = fragments;
      this.nodeSet = nodeSet;
      this.i = 0;
      this.fragment = null;
      this.safeFrom = -1;
      this.safeTo = -1;
      this.trees = [];
      this.start = [];
      this.index = [];
      this.nextFragment();
    }
    nextFragment() {
      let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
      if (fr) {
        this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
        this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
        while (this.trees.length) {
          this.trees.pop();
          this.start.pop();
          this.index.pop();
        }
        this.trees.push(fr.tree);
        this.start.push(-fr.offset);
        this.index.push(0);
        this.nextStart = this.safeFrom;
      } else {
        this.nextStart = 1e9;
      }
    }
    // `pos` must be >= any previously given `pos` for this cursor
    nodeAt(pos) {
      if (pos < this.nextStart)
        return null;
      while (this.fragment && this.safeTo <= pos)
        this.nextFragment();
      if (!this.fragment)
        return null;
      for (; ; ) {
        let last2 = this.trees.length - 1;
        if (last2 < 0) {
          this.nextFragment();
          return null;
        }
        let top = this.trees[last2], index = this.index[last2];
        if (index == top.children.length) {
          this.trees.pop();
          this.start.pop();
          this.index.pop();
          continue;
        }
        let next = top.children[index];
        let start = this.start[last2] + top.positions[index];
        if (start > pos) {
          this.nextStart = start;
          return null;
        }
        if (next instanceof Tree) {
          if (start == pos) {
            if (start < this.safeFrom)
              return null;
            let end = start + next.length;
            if (end <= this.safeTo) {
              let lookAhead = next.prop(NodeProp.lookAhead);
              if (!lookAhead || end + lookAhead < this.fragment.to)
                return next;
            }
          }
          this.index[last2]++;
          if (start + next.length >= Math.max(this.safeFrom, pos)) {
            this.trees.push(next);
            this.start.push(start);
            this.index.push(0);
          }
        } else {
          this.index[last2]++;
          this.nextStart = start + next.length;
        }
      }
    }
  };
  var TokenCache = class {
    constructor(parser2, stream) {
      this.stream = stream;
      this.tokens = [];
      this.mainToken = null;
      this.actions = [];
      this.tokens = parser2.tokenizers.map((_) => new CachedToken());
    }
    getActions(stack) {
      let actionIndex = 0;
      let main = null;
      let { parser: parser2 } = stack.p, { tokenizers } = parser2;
      let mask = parser2.stateSlot(
        stack.state,
        3
        /* ParseState.TokenizerMask */
      );
      let context = stack.curContext ? stack.curContext.hash : 0;
      let lookAhead = 0;
      for (let i = 0; i < tokenizers.length; i++) {
        if ((1 << i & mask) == 0)
          continue;
        let tokenizer = tokenizers[i], token = this.tokens[i];
        if (main && !tokenizer.fallback)
          continue;
        if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
          this.updateCachedToken(token, tokenizer, stack);
          token.mask = mask;
          token.context = context;
        }
        if (token.lookAhead > token.end + 25)
          lookAhead = Math.max(token.lookAhead, lookAhead);
        if (token.value != 0) {
          let startIndex = actionIndex;
          if (token.extended > -1)
            actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
          actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
          if (!tokenizer.extend) {
            main = token;
            if (actionIndex > startIndex)
              break;
          }
        }
      }
      while (this.actions.length > actionIndex)
        this.actions.pop();
      if (lookAhead)
        stack.setLookAhead(lookAhead);
      if (!main && stack.pos == this.stream.end) {
        main = new CachedToken();
        main.value = stack.p.parser.eofTerm;
        main.start = main.end = stack.pos;
        actionIndex = this.addActions(stack, main.value, main.end, actionIndex);
      }
      this.mainToken = main;
      return this.actions;
    }
    getMainToken(stack) {
      if (this.mainToken)
        return this.mainToken;
      let main = new CachedToken(), { pos, p } = stack;
      main.start = pos;
      main.end = Math.min(pos + 1, p.stream.end);
      main.value = pos == p.stream.end ? p.parser.eofTerm : 0;
      return main;
    }
    updateCachedToken(token, tokenizer, stack) {
      let start = this.stream.clipPos(stack.pos);
      tokenizer.token(this.stream.reset(start, token), stack);
      if (token.value > -1) {
        let { parser: parser2 } = stack.p;
        for (let i = 0; i < parser2.specialized.length; i++)
          if (parser2.specialized[i] == token.value) {
            let result = parser2.specializers[i](this.stream.read(token.start, token.end), stack);
            if (result >= 0 && stack.p.parser.dialect.allows(result >> 1)) {
              if ((result & 1) == 0)
                token.value = result >> 1;
              else
                token.extended = result >> 1;
              break;
            }
          }
      } else {
        token.value = 0;
        token.end = this.stream.clipPos(start + 1);
      }
    }
    putAction(action, token, end, index) {
      for (let i = 0; i < index; i += 3)
        if (this.actions[i] == action)
          return index;
      this.actions[index++] = action;
      this.actions[index++] = token;
      this.actions[index++] = end;
      return index;
    }
    addActions(stack, token, end, index) {
      let { state } = stack, { parser: parser2 } = stack.p, { data } = parser2;
      for (let set = 0; set < 2; set++) {
        for (let i = parser2.stateSlot(
          state,
          set ? 2 : 1
          /* ParseState.Actions */
        ); ; i += 3) {
          if (data[i] == 65535) {
            if (data[i + 1] == 1) {
              i = pair(data, i + 2);
            } else {
              if (index == 0 && data[i + 1] == 2)
                index = this.putAction(pair(data, i + 2), token, end, index);
              break;
            }
          }
          if (data[i] == token)
            index = this.putAction(pair(data, i + 1), token, end, index);
        }
      }
      return index;
    }
  };
  var Parse = class {
    constructor(parser2, input, fragments, ranges) {
      this.parser = parser2;
      this.input = input;
      this.ranges = ranges;
      this.recovering = 0;
      this.nextStackID = 9812;
      this.minStackPos = 0;
      this.reused = [];
      this.stoppedAt = null;
      this.lastBigReductionStart = -1;
      this.lastBigReductionSize = 0;
      this.bigReductionCount = 0;
      this.stream = new InputStream(input, ranges);
      this.tokens = new TokenCache(parser2, this.stream);
      this.topTerm = parser2.top[1];
      let { from } = ranges[0];
      this.stacks = [Stack.start(this, parser2.top[0], from)];
      this.fragments = fragments.length && this.stream.end - from > parser2.bufferLength * 4 ? new FragmentCursor(fragments, parser2.nodeSet) : null;
    }
    get parsedPos() {
      return this.minStackPos;
    }
    // Move the parser forward. This will process all parse stacks at
    // `this.pos` and try to advance them to a further position. If no
    // stack for such a position is found, it'll start error-recovery.
    //
    // When the parse is finished, this will return a syntax tree. When
    // not, it returns `null`.
    advance() {
      let stacks = this.stacks, pos = this.minStackPos;
      let newStacks = this.stacks = [];
      let stopped, stoppedTokens;
      if (this.bigReductionCount > 300 && stacks.length == 1) {
        let [s2] = stacks;
        while (s2.forceReduce() && s2.stack.length && s2.stack[s2.stack.length - 2] >= this.lastBigReductionStart) {
        }
        this.bigReductionCount = this.lastBigReductionSize = 0;
      }
      for (let i = 0; i < stacks.length; i++) {
        let stack = stacks[i];
        for (; ; ) {
          this.tokens.mainToken = null;
          if (stack.pos > pos) {
            newStacks.push(stack);
          } else if (this.advanceStack(stack, newStacks, stacks)) {
            continue;
          } else {
            if (!stopped) {
              stopped = [];
              stoppedTokens = [];
            }
            stopped.push(stack);
            let tok = this.tokens.getMainToken(stack);
            stoppedTokens.push(tok.value, tok.end);
          }
          break;
        }
      }
      if (!newStacks.length) {
        let finished = stopped && findFinished(stopped);
        if (finished) {
          if (verbose)
            console.log("Finish with " + this.stackID(finished));
          return this.stackToTree(finished);
        }
        if (this.parser.strict) {
          if (verbose && stopped)
            console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
          throw new SyntaxError("No parse at " + pos);
        }
        if (!this.recovering)
          this.recovering = 5;
      }
      if (this.recovering && stopped) {
        let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0] : this.runRecovery(stopped, stoppedTokens, newStacks);
        if (finished) {
          if (verbose)
            console.log("Force-finish " + this.stackID(finished));
          return this.stackToTree(finished.forceAll());
        }
      }
      if (this.recovering) {
        let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3;
        if (newStacks.length > maxRemaining) {
          newStacks.sort((a, b) => b.score - a.score);
          while (newStacks.length > maxRemaining)
            newStacks.pop();
        }
        if (newStacks.some((s2) => s2.reducePos > pos))
          this.recovering--;
      } else if (newStacks.length > 1) {
        outer: for (let i = 0; i < newStacks.length - 1; i++) {
          let stack = newStacks[i];
          for (let j = i + 1; j < newStacks.length; j++) {
            let other = newStacks[j];
            if (stack.sameState(other) || stack.buffer.length > 500 && other.buffer.length > 500) {
              if ((stack.score - other.score || stack.buffer.length - other.buffer.length) > 0) {
                newStacks.splice(j--, 1);
              } else {
                newStacks.splice(i--, 1);
                continue outer;
              }
            }
          }
        }
        if (newStacks.length > 12) {
          newStacks.sort((a, b) => b.score - a.score);
          newStacks.splice(
            12,
            newStacks.length - 12
            /* Rec.MaxStackCount */
          );
        }
      }
      this.minStackPos = newStacks[0].pos;
      for (let i = 1; i < newStacks.length; i++)
        if (newStacks[i].pos < this.minStackPos)
          this.minStackPos = newStacks[i].pos;
      return null;
    }
    stopAt(pos) {
      if (this.stoppedAt != null && this.stoppedAt < pos)
        throw new RangeError("Can't move stoppedAt forward");
      this.stoppedAt = pos;
    }
    // Returns an updated version of the given stack, or null if the
    // stack can't advance normally. When `split` and `stacks` are
    // given, stacks split off by ambiguous operations will be pushed to
    // `split`, or added to `stacks` if they move `pos` forward.
    advanceStack(stack, stacks, split) {
      let start = stack.pos, { parser: parser2 } = this;
      let base = verbose ? this.stackID(stack) + " -> " : "";
      if (this.stoppedAt != null && start > this.stoppedAt)
        return stack.forceReduce() ? stack : null;
      if (this.fragments) {
        let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
        for (let cached = this.fragments.nodeAt(start); cached; ) {
          let match2 = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser2.getGoto(stack.state, cached.type.id) : -1;
          if (match2 > -1 && cached.length && (!strictCx || (cached.prop(NodeProp.contextHash) || 0) == cxHash)) {
            stack.useNode(cached, match2);
            if (verbose)
              console.log(base + this.stackID(stack) + ` (via reuse of ${parser2.getName(cached.type.id)})`);
            return true;
          }
          if (!(cached instanceof Tree) || cached.children.length == 0 || cached.positions[0] > 0)
            break;
          let inner = cached.children[0];
          if (inner instanceof Tree && cached.positions[0] == 0)
            cached = inner;
          else
            break;
        }
      }
      let defaultReduce = parser2.stateSlot(
        stack.state,
        4
        /* ParseState.DefaultReduce */
      );
      if (defaultReduce > 0) {
        stack.reduce(defaultReduce);
        if (verbose)
          console.log(base + this.stackID(stack) + ` (via always-reduce ${parser2.getName(
            defaultReduce & 65535
            /* Action.ValueMask */
          )})`);
        return true;
      }
      if (stack.stack.length >= 8400) {
        while (stack.stack.length > 6e3 && stack.forceReduce()) {
        }
      }
      let actions = this.tokens.getActions(stack);
      for (let i = 0; i < actions.length; ) {
        let action = actions[i++], term = actions[i++], end = actions[i++];
        let last2 = i == actions.length || !split;
        let localStack = last2 ? stack : stack.split();
        let main = this.tokens.mainToken;
        localStack.apply(action, term, main ? main.start : localStack.pos, end);
        if (verbose)
          console.log(base + this.stackID(localStack) + ` (via ${(action & 65536) == 0 ? "shift" : `reduce of ${parser2.getName(
            action & 65535
            /* Action.ValueMask */
          )}`} for ${parser2.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
        if (last2)
          return true;
        else if (localStack.pos > start)
          stacks.push(localStack);
        else
          split.push(localStack);
      }
      return false;
    }
    // Advance a given stack forward as far as it will go. Returns the
    // (possibly updated) stack if it got stuck, or null if it moved
    // forward and was given to `pushStackDedup`.
    advanceFully(stack, newStacks) {
      let pos = stack.pos;
      for (; ; ) {
        if (!this.advanceStack(stack, null, null))
          return false;
        if (stack.pos > pos) {
          pushStackDedup(stack, newStacks);
          return true;
        }
      }
    }
    runRecovery(stacks, tokens, newStacks) {
      let finished = null, restarted = false;
      for (let i = 0; i < stacks.length; i++) {
        let stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
        let base = verbose ? this.stackID(stack) + " -> " : "";
        if (stack.deadEnd) {
          if (restarted)
            continue;
          restarted = true;
          stack.restart();
          if (verbose)
            console.log(base + this.stackID(stack) + " (restarted)");
          let done = this.advanceFully(stack, newStacks);
          if (done)
            continue;
        }
        let force = stack.split(), forceBase = base;
        for (let j = 0; j < 10 && force.forceReduce(); j++) {
          if (verbose)
            console.log(forceBase + this.stackID(force) + " (via force-reduce)");
          let done = this.advanceFully(force, newStacks);
          if (done)
            break;
          if (verbose)
            forceBase = this.stackID(force) + " -> ";
        }
        for (let insert of stack.recoverByInsert(token)) {
          if (verbose)
            console.log(base + this.stackID(insert) + " (via recover-insert)");
          this.advanceFully(insert, newStacks);
        }
        if (this.stream.end > stack.pos) {
          if (tokenEnd == stack.pos) {
            tokenEnd++;
            token = 0;
          }
          stack.recoverByDelete(token, tokenEnd);
          if (verbose)
            console.log(base + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
          pushStackDedup(stack, newStacks);
        } else if (!finished || finished.score < force.score) {
          finished = force;
        }
      }
      return finished;
    }
    // Convert the stack's buffer to a syntax tree.
    stackToTree(stack) {
      stack.close();
      return Tree.build({
        buffer: StackBufferCursor.create(stack),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: stack.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm
      });
    }
    stackID(stack) {
      let id2 = (stackIDs || (stackIDs = /* @__PURE__ */ new WeakMap())).get(stack);
      if (!id2)
        stackIDs.set(stack, id2 = String.fromCodePoint(this.nextStackID++));
      return id2 + stack;
    }
  };
  function pushStackDedup(stack, newStacks) {
    for (let i = 0; i < newStacks.length; i++) {
      let other = newStacks[i];
      if (other.pos == stack.pos && other.sameState(stack)) {
        if (newStacks[i].score < stack.score)
          newStacks[i] = stack;
        return;
      }
    }
    newStacks.push(stack);
  }
  var Dialect = class {
    constructor(source, flags, disabled) {
      this.source = source;
      this.flags = flags;
      this.disabled = disabled;
    }
    allows(term) {
      return !this.disabled || this.disabled[term] == 0;
    }
  };
  var id = (x) => x;
  var ContextTracker = class {
    /**
    Define a context tracker.
    */
    constructor(spec) {
      this.start = spec.start;
      this.shift = spec.shift || id;
      this.reduce = spec.reduce || id;
      this.reuse = spec.reuse || id;
      this.hash = spec.hash || (() => 0);
      this.strict = spec.strict !== false;
    }
  };
  var LRParser = class _LRParser extends Parser {
    /**
    @internal
    */
    constructor(spec) {
      super();
      this.wrappers = [];
      if (spec.version != 14)
        throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (${14})`);
      let nodeNames = spec.nodeNames.split(" ");
      this.minRepeatTerm = nodeNames.length;
      for (let i = 0; i < spec.repeatNodeCount; i++)
        nodeNames.push("");
      let topTerms = Object.keys(spec.topRules).map((r) => spec.topRules[r][1]);
      let nodeProps = [];
      for (let i = 0; i < nodeNames.length; i++)
        nodeProps.push([]);
      function setProp(nodeID, prop, value) {
        nodeProps[nodeID].push([prop, prop.deserialize(String(value))]);
      }
      if (spec.nodeProps)
        for (let propSpec of spec.nodeProps) {
          let prop = propSpec[0];
          if (typeof prop == "string")
            prop = NodeProp[prop];
          for (let i = 1; i < propSpec.length; ) {
            let next = propSpec[i++];
            if (next >= 0) {
              setProp(next, prop, propSpec[i++]);
            } else {
              let value = propSpec[i + -next];
              for (let j = -next; j > 0; j--)
                setProp(propSpec[i++], prop, value);
              i++;
            }
          }
        }
      this.nodeSet = new NodeSet(nodeNames.map((name2, i) => NodeType.define({
        name: i >= this.minRepeatTerm ? void 0 : name2,
        id: i,
        props: nodeProps[i],
        top: topTerms.indexOf(i) > -1,
        error: i == 0,
        skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i) > -1
      })));
      if (spec.propSources)
        this.nodeSet = this.nodeSet.extend(...spec.propSources);
      this.strict = false;
      this.bufferLength = DefaultBufferLength;
      let tokenArray = decodeArray(spec.tokenData);
      this.context = spec.context;
      this.specializerSpecs = spec.specialized || [];
      this.specialized = new Uint16Array(this.specializerSpecs.length);
      for (let i = 0; i < this.specializerSpecs.length; i++)
        this.specialized[i] = this.specializerSpecs[i].term;
      this.specializers = this.specializerSpecs.map(getSpecializer);
      this.states = decodeArray(spec.states, Uint32Array);
      this.data = decodeArray(spec.stateData);
      this.goto = decodeArray(spec.goto);
      this.maxTerm = spec.maxTerm;
      this.tokenizers = spec.tokenizers.map((value) => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
      this.topRules = spec.topRules;
      this.dialects = spec.dialects || {};
      this.dynamicPrecedences = spec.dynamicPrecedences || null;
      this.tokenPrecTable = spec.tokenPrec;
      this.termNames = spec.termNames || null;
      this.maxNode = this.nodeSet.types.length - 1;
      this.dialect = this.parseDialect();
      this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(input, fragments, ranges) {
      let parse2 = new Parse(this, input, fragments, ranges);
      for (let w of this.wrappers)
        parse2 = w(parse2, input, fragments, ranges);
      return parse2;
    }
    /**
    Get a goto table entry @internal
    */
    getGoto(state, term, loose = false) {
      let table = this.goto;
      if (term >= table[0])
        return -1;
      for (let pos = table[term + 1]; ; ) {
        let groupTag = table[pos++], last2 = groupTag & 1;
        let target = table[pos++];
        if (last2 && loose)
          return target;
        for (let end = pos + (groupTag >> 1); pos < end; pos++)
          if (table[pos] == state)
            return target;
        if (last2)
          return -1;
      }
    }
    /**
    Check if this state has an action for a given terminal @internal
    */
    hasAction(state, terminal) {
      let data = this.data;
      for (let set = 0; set < 2; set++) {
        for (let i = this.stateSlot(
          state,
          set ? 2 : 1
          /* ParseState.Actions */
        ), next; ; i += 3) {
          if ((next = data[i]) == 65535) {
            if (data[i + 1] == 1)
              next = data[i = pair(data, i + 2)];
            else if (data[i + 1] == 2)
              return pair(data, i + 2);
            else
              break;
          }
          if (next == terminal || next == 0)
            return pair(data, i + 1);
        }
      }
      return 0;
    }
    /**
    @internal
    */
    stateSlot(state, slot) {
      return this.states[state * 6 + slot];
    }
    /**
    @internal
    */
    stateFlag(state, flag) {
      return (this.stateSlot(
        state,
        0
        /* ParseState.Flags */
      ) & flag) > 0;
    }
    /**
    @internal
    */
    validAction(state, action) {
      return !!this.allActions(state, (a) => a == action ? true : null);
    }
    /**
    @internal
    */
    allActions(state, action) {
      let deflt = this.stateSlot(
        state,
        4
        /* ParseState.DefaultReduce */
      );
      let result = deflt ? action(deflt) : void 0;
      for (let i = this.stateSlot(
        state,
        1
        /* ParseState.Actions */
      ); result == null; i += 3) {
        if (this.data[i] == 65535) {
          if (this.data[i + 1] == 1)
            i = pair(this.data, i + 2);
          else
            break;
        }
        result = action(pair(this.data, i + 1));
      }
      return result;
    }
    /**
    Get the states that can follow this one through shift actions or
    goto jumps. @internal
    */
    nextStates(state) {
      let result = [];
      for (let i = this.stateSlot(
        state,
        1
        /* ParseState.Actions */
      ); ; i += 3) {
        if (this.data[i] == 65535) {
          if (this.data[i + 1] == 1)
            i = pair(this.data, i + 2);
          else
            break;
        }
        if ((this.data[i + 2] & 65536 >> 16) == 0) {
          let value = this.data[i + 1];
          if (!result.some((v, i2) => i2 & 1 && v == value))
            result.push(this.data[i], value);
        }
      }
      return result;
    }
    /**
    Configure the parser. Returns a new parser instance that has the
    given settings modified. Settings not provided in `config` are
    kept from the original parser.
    */
    configure(config) {
      let copy = Object.assign(Object.create(_LRParser.prototype), this);
      if (config.props)
        copy.nodeSet = this.nodeSet.extend(...config.props);
      if (config.top) {
        let info = this.topRules[config.top];
        if (!info)
          throw new RangeError(`Invalid top rule name ${config.top}`);
        copy.top = info;
      }
      if (config.tokenizers)
        copy.tokenizers = this.tokenizers.map((t2) => {
          let found = config.tokenizers.find((r) => r.from == t2);
          return found ? found.to : t2;
        });
      if (config.specializers) {
        copy.specializers = this.specializers.slice();
        copy.specializerSpecs = this.specializerSpecs.map((s2, i) => {
          let found = config.specializers.find((r) => r.from == s2.external);
          if (!found)
            return s2;
          let spec = Object.assign(Object.assign({}, s2), { external: found.to });
          copy.specializers[i] = getSpecializer(spec);
          return spec;
        });
      }
      if (config.contextTracker)
        copy.context = config.contextTracker;
      if (config.dialect)
        copy.dialect = this.parseDialect(config.dialect);
      if (config.strict != null)
        copy.strict = config.strict;
      if (config.wrap)
        copy.wrappers = copy.wrappers.concat(config.wrap);
      if (config.bufferLength != null)
        copy.bufferLength = config.bufferLength;
      return copy;
    }
    /**
    Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
    are registered for this parser.
    */
    hasWrappers() {
      return this.wrappers.length > 0;
    }
    /**
    Returns the name associated with a given term. This will only
    work for all terms when the parser was generated with the
    `--names` option. By default, only the names of tagged terms are
    stored.
    */
    getName(term) {
      return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
    }
    /**
    The eof term id is always allocated directly after the node
    types. @internal
    */
    get eofTerm() {
      return this.maxNode + 1;
    }
    /**
    The type of top node produced by the parser.
    */
    get topNode() {
      return this.nodeSet.types[this.top[1]];
    }
    /**
    @internal
    */
    dynamicPrecedence(term) {
      let prec = this.dynamicPrecedences;
      return prec == null ? 0 : prec[term] || 0;
    }
    /**
    @internal
    */
    parseDialect(dialect) {
      let values = Object.keys(this.dialects), flags = values.map(() => false);
      if (dialect)
        for (let part of dialect.split(" ")) {
          let id2 = values.indexOf(part);
          if (id2 >= 0)
            flags[id2] = true;
        }
      let disabled = null;
      for (let i = 0; i < values.length; i++)
        if (!flags[i]) {
          for (let j = this.dialects[values[i]], id2; (id2 = this.data[j++]) != 65535; )
            (disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id2] = 1;
        }
      return new Dialect(dialect, flags, disabled);
    }
    /**
    Used by the output of the parser generator. Not available to
    user code. @hide
    */
    static deserialize(spec) {
      return new _LRParser(spec);
    }
  };
  function pair(data, off) {
    return data[off] | data[off + 1] << 16;
  }
  function findFinished(stacks) {
    let best = null;
    for (let stack of stacks) {
      let stopped = stack.p.stoppedAt;
      if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) && stack.p.parser.stateFlag(
        stack.state,
        2
        /* StateFlag.Accepting */
      ) && (!best || best.score < stack.score))
        best = stack;
    }
    return best;
  }
  function getSpecializer(spec) {
    if (spec.external) {
      let mask = spec.extend ? 1 : 0;
      return (value, stack) => spec.external(value, stack) << 1 | mask;
    }
    return spec.get;
  }

  // node_modules/min-dash/dist/index.js
  var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
  function isNil(obj) {
    return obj == null;
  }
  function has(target, key) {
    return !isNil(target) && nativeHasOwnProperty.call(target, key);
  }

  // node_modules/@lezer/highlight/dist/index.js
  var nextTagID = 0;
  var Tag = class _Tag {
    /**
    @internal
    */
    constructor(name2, set, base, modified) {
      this.name = name2;
      this.set = set;
      this.base = base;
      this.modified = modified;
      this.id = nextTagID++;
    }
    toString() {
      let { name: name2 } = this;
      for (let mod of this.modified)
        if (mod.name)
          name2 = `${mod.name}(${name2})`;
      return name2;
    }
    static define(nameOrParent, parent) {
      let name2 = typeof nameOrParent == "string" ? nameOrParent : "?";
      if (nameOrParent instanceof _Tag)
        parent = nameOrParent;
      if (parent === null || parent === void 0 ? void 0 : parent.base)
        throw new Error("Can not derive from a modified tag");
      let tag2 = new _Tag(name2, [], null, []);
      tag2.set.push(tag2);
      if (parent)
        for (let t2 of parent.set)
          tag2.set.push(t2);
      return tag2;
    }
    /**
    Define a tag _modifier_, which is a function that, given a tag,
    will return a tag that is a subtag of the original. Applying the
    same modifier to a twice tag will return the same value (`m1(t1)
    == m1(t1)`) and applying multiple modifiers will, regardless or
    order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
    
    When multiple modifiers are applied to a given base tag, each
    smaller set of modifiers is registered as a parent, so that for
    example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
    `m1(m3(t1)`, and so on.
    */
    static defineModifier(name2) {
      let mod = new Modifier(name2);
      return (tag2) => {
        if (tag2.modified.indexOf(mod) > -1)
          return tag2;
        return Modifier.get(tag2.base || tag2, tag2.modified.concat(mod).sort((a, b) => a.id - b.id));
      };
    }
  };
  var nextModifierID = 0;
  var Modifier = class _Modifier {
    constructor(name2) {
      this.name = name2;
      this.instances = [];
      this.id = nextModifierID++;
    }
    static get(base, mods) {
      if (!mods.length)
        return base;
      let exists = mods[0].instances.find((t2) => t2.base == base && sameArray(mods, t2.modified));
      if (exists)
        return exists;
      let set = [], tag2 = new Tag(base.name, set, base, mods);
      for (let m of mods)
        m.instances.push(tag2);
      let configs = powerSet(mods);
      for (let parent of base.set)
        if (!parent.modified.length)
          for (let config of configs)
            set.push(_Modifier.get(parent, config));
      return tag2;
    }
  };
  function sameArray(a, b) {
    return a.length == b.length && a.every((x, i) => x == b[i]);
  }
  function powerSet(array) {
    let sets = [[]];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0, e = sets.length; j < e; j++) {
        sets.push(sets[j].concat(array[i]));
      }
    }
    return sets.sort((a, b) => b.length - a.length);
  }
  function styleTags(spec) {
    let byName = /* @__PURE__ */ Object.create(null);
    for (let prop in spec) {
      let tags2 = spec[prop];
      if (!Array.isArray(tags2))
        tags2 = [tags2];
      for (let part of prop.split(" "))
        if (part) {
          let pieces = [], mode2 = 2, rest = part;
          for (let pos = 0; ; ) {
            if (rest == "..." && pos > 0 && pos + 3 == part.length) {
              mode2 = 1;
              break;
            }
            let m = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(rest);
            if (!m)
              throw new RangeError("Invalid path: " + part);
            pieces.push(m[0] == "*" ? "" : m[0][0] == '"' ? JSON.parse(m[0]) : m[0]);
            pos += m[0].length;
            if (pos == part.length)
              break;
            let next = part[pos++];
            if (pos == part.length && next == "!") {
              mode2 = 0;
              break;
            }
            if (next != "/")
              throw new RangeError("Invalid path: " + part);
            rest = part.slice(pos);
          }
          let last2 = pieces.length - 1, inner = pieces[last2];
          if (!inner)
            throw new RangeError("Invalid path: " + part);
          let rule = new Rule(tags2, mode2, last2 > 0 ? pieces.slice(0, last2) : null);
          byName[inner] = rule.sort(byName[inner]);
        }
    }
    return ruleNodeProp.add(byName);
  }
  var ruleNodeProp = new NodeProp({
    combine(a, b) {
      let cur, root, take;
      while (a || b) {
        if (!a || b && a.depth >= b.depth) {
          take = b;
          b = b.next;
        } else {
          take = a;
          a = a.next;
        }
        if (cur && cur.mode == take.mode && !take.context && !cur.context)
          continue;
        let copy = new Rule(take.tags, take.mode, take.context);
        if (cur)
          cur.next = copy;
        else
          root = copy;
        cur = copy;
      }
      return root;
    }
  });
  var Rule = class {
    constructor(tags2, mode2, context, next) {
      this.tags = tags2;
      this.mode = mode2;
      this.context = context;
      this.next = next;
    }
    get opaque() {
      return this.mode == 0;
    }
    get inherit() {
      return this.mode == 1;
    }
    sort(other) {
      if (!other || other.depth < this.depth) {
        this.next = other;
        return this;
      }
      other.next = this.sort(other.next);
      return other;
    }
    get depth() {
      return this.context ? this.context.length : 0;
    }
  };
  Rule.empty = new Rule([], 2, null);
  function tagHighlighter(tags2, options) {
    let map = /* @__PURE__ */ Object.create(null);
    for (let style of tags2) {
      if (!Array.isArray(style.tag))
        map[style.tag.id] = style.class;
      else
        for (let tag2 of style.tag)
          map[tag2.id] = style.class;
    }
    let { scope, all = null } = options || {};
    return {
      style: (tags3) => {
        let cls = all;
        for (let tag2 of tags3) {
          for (let sub of tag2.set) {
            let tagClass = map[sub.id];
            if (tagClass) {
              cls = cls ? cls + " " + tagClass : tagClass;
              break;
            }
          }
        }
        return cls;
      },
      scope
    };
  }
  var t = Tag.define;
  var comment = t();
  var name = t();
  var typeName = t(name);
  var propertyName = t(name);
  var literal = t();
  var string = t(literal);
  var number = t(literal);
  var content = t();
  var heading = t(content);
  var keyword = t();
  var operator = t();
  var punctuation = t();
  var bracket = t(punctuation);
  var meta = t();
  var tags = {
    /**
    A comment.
    */
    comment,
    /**
    A line [comment](#highlight.tags.comment).
    */
    lineComment: t(comment),
    /**
    A block [comment](#highlight.tags.comment).
    */
    blockComment: t(comment),
    /**
    A documentation [comment](#highlight.tags.comment).
    */
    docComment: t(comment),
    /**
    Any kind of identifier.
    */
    name,
    /**
    The [name](#highlight.tags.name) of a variable.
    */
    variableName: t(name),
    /**
    A type [name](#highlight.tags.name).
    */
    typeName,
    /**
    A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
    */
    tagName: t(typeName),
    /**
    A property or field [name](#highlight.tags.name).
    */
    propertyName,
    /**
    An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
    */
    attributeName: t(propertyName),
    /**
    The [name](#highlight.tags.name) of a class.
    */
    className: t(name),
    /**
    A label [name](#highlight.tags.name).
    */
    labelName: t(name),
    /**
    A namespace [name](#highlight.tags.name).
    */
    namespace: t(name),
    /**
    The [name](#highlight.tags.name) of a macro.
    */
    macroName: t(name),
    /**
    A literal value.
    */
    literal,
    /**
    A string [literal](#highlight.tags.literal).
    */
    string,
    /**
    A documentation [string](#highlight.tags.string).
    */
    docString: t(string),
    /**
    A character literal (subtag of [string](#highlight.tags.string)).
    */
    character: t(string),
    /**
    An attribute value (subtag of [string](#highlight.tags.string)).
    */
    attributeValue: t(string),
    /**
    A number [literal](#highlight.tags.literal).
    */
    number,
    /**
    An integer [number](#highlight.tags.number) literal.
    */
    integer: t(number),
    /**
    A floating-point [number](#highlight.tags.number) literal.
    */
    float: t(number),
    /**
    A boolean [literal](#highlight.tags.literal).
    */
    bool: t(literal),
    /**
    Regular expression [literal](#highlight.tags.literal).
    */
    regexp: t(literal),
    /**
    An escape [literal](#highlight.tags.literal), for example a
    backslash escape in a string.
    */
    escape: t(literal),
    /**
    A color [literal](#highlight.tags.literal).
    */
    color: t(literal),
    /**
    A URL [literal](#highlight.tags.literal).
    */
    url: t(literal),
    /**
    A language keyword.
    */
    keyword,
    /**
    The [keyword](#highlight.tags.keyword) for the self or this
    object.
    */
    self: t(keyword),
    /**
    The [keyword](#highlight.tags.keyword) for null.
    */
    null: t(keyword),
    /**
    A [keyword](#highlight.tags.keyword) denoting some atomic value.
    */
    atom: t(keyword),
    /**
    A [keyword](#highlight.tags.keyword) that represents a unit.
    */
    unit: t(keyword),
    /**
    A modifier [keyword](#highlight.tags.keyword).
    */
    modifier: t(keyword),
    /**
    A [keyword](#highlight.tags.keyword) that acts as an operator.
    */
    operatorKeyword: t(keyword),
    /**
    A control-flow related [keyword](#highlight.tags.keyword).
    */
    controlKeyword: t(keyword),
    /**
    A [keyword](#highlight.tags.keyword) that defines something.
    */
    definitionKeyword: t(keyword),
    /**
    A [keyword](#highlight.tags.keyword) related to defining or
    interfacing with modules.
    */
    moduleKeyword: t(keyword),
    /**
    An operator.
    */
    operator,
    /**
    An [operator](#highlight.tags.operator) that dereferences something.
    */
    derefOperator: t(operator),
    /**
    Arithmetic-related [operator](#highlight.tags.operator).
    */
    arithmeticOperator: t(operator),
    /**
    Logical [operator](#highlight.tags.operator).
    */
    logicOperator: t(operator),
    /**
    Bit [operator](#highlight.tags.operator).
    */
    bitwiseOperator: t(operator),
    /**
    Comparison [operator](#highlight.tags.operator).
    */
    compareOperator: t(operator),
    /**
    [Operator](#highlight.tags.operator) that updates its operand.
    */
    updateOperator: t(operator),
    /**
    [Operator](#highlight.tags.operator) that defines something.
    */
    definitionOperator: t(operator),
    /**
    Type-related [operator](#highlight.tags.operator).
    */
    typeOperator: t(operator),
    /**
    Control-flow [operator](#highlight.tags.operator).
    */
    controlOperator: t(operator),
    /**
    Program or markup punctuation.
    */
    punctuation,
    /**
    [Punctuation](#highlight.tags.punctuation) that separates
    things.
    */
    separator: t(punctuation),
    /**
    Bracket-style [punctuation](#highlight.tags.punctuation).
    */
    bracket,
    /**
    Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
    tokens).
    */
    angleBracket: t(bracket),
    /**
    Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
    tokens).
    */
    squareBracket: t(bracket),
    /**
    Parentheses (usually `(` and `)` tokens). Subtag of
    [bracket](#highlight.tags.bracket).
    */
    paren: t(bracket),
    /**
    Braces (usually `{` and `}` tokens). Subtag of
    [bracket](#highlight.tags.bracket).
    */
    brace: t(bracket),
    /**
    Content, for example plain text in XML or markup documents.
    */
    content,
    /**
    [Content](#highlight.tags.content) that represents a heading.
    */
    heading,
    /**
    A level 1 [heading](#highlight.tags.heading).
    */
    heading1: t(heading),
    /**
    A level 2 [heading](#highlight.tags.heading).
    */
    heading2: t(heading),
    /**
    A level 3 [heading](#highlight.tags.heading).
    */
    heading3: t(heading),
    /**
    A level 4 [heading](#highlight.tags.heading).
    */
    heading4: t(heading),
    /**
    A level 5 [heading](#highlight.tags.heading).
    */
    heading5: t(heading),
    /**
    A level 6 [heading](#highlight.tags.heading).
    */
    heading6: t(heading),
    /**
    A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
    */
    contentSeparator: t(content),
    /**
    [Content](#highlight.tags.content) that represents a list.
    */
    list: t(content),
    /**
    [Content](#highlight.tags.content) that represents a quote.
    */
    quote: t(content),
    /**
    [Content](#highlight.tags.content) that is emphasized.
    */
    emphasis: t(content),
    /**
    [Content](#highlight.tags.content) that is styled strong.
    */
    strong: t(content),
    /**
    [Content](#highlight.tags.content) that is part of a link.
    */
    link: t(content),
    /**
    [Content](#highlight.tags.content) that is styled as code or
    monospace.
    */
    monospace: t(content),
    /**
    [Content](#highlight.tags.content) that has a strike-through
    style.
    */
    strikethrough: t(content),
    /**
    Inserted text in a change-tracking format.
    */
    inserted: t(),
    /**
    Deleted text.
    */
    deleted: t(),
    /**
    Changed text.
    */
    changed: t(),
    /**
    An invalid or unsyntactic element.
    */
    invalid: t(),
    /**
    Metadata or meta-instruction.
    */
    meta,
    /**
    [Metadata](#highlight.tags.meta) that applies to the entire
    document.
    */
    documentMeta: t(meta),
    /**
    [Metadata](#highlight.tags.meta) that annotates or adds
    attributes to a given syntactic element.
    */
    annotation: t(meta),
    /**
    Processing instruction or preprocessor directive. Subtag of
    [meta](#highlight.tags.meta).
    */
    processingInstruction: t(meta),
    /**
    [Modifier](#highlight.Tag^defineModifier) that indicates that a
    given element is being defined. Expected to be used with the
    various [name](#highlight.tags.name) tags.
    */
    definition: Tag.defineModifier("definition"),
    /**
    [Modifier](#highlight.Tag^defineModifier) that indicates that
    something is constant. Mostly expected to be used with
    [variable names](#highlight.tags.variableName).
    */
    constant: Tag.defineModifier("constant"),
    /**
    [Modifier](#highlight.Tag^defineModifier) used to indicate that
    a [variable](#highlight.tags.variableName) or [property
    name](#highlight.tags.propertyName) is being called or defined
    as a function.
    */
    function: Tag.defineModifier("function"),
    /**
    [Modifier](#highlight.Tag^defineModifier) that can be applied to
    [names](#highlight.tags.name) to indicate that they belong to
    the language's standard environment.
    */
    standard: Tag.defineModifier("standard"),
    /**
    [Modifier](#highlight.Tag^defineModifier) that indicates a given
    [names](#highlight.tags.name) is local to some scope.
    */
    local: Tag.defineModifier("local"),
    /**
    A generic variant [modifier](#highlight.Tag^defineModifier) that
    can be used to tag language-specific alternative variants of
    some common tag. It is recommended for themes to define special
    forms of at least the [string](#highlight.tags.string) and
    [variable name](#highlight.tags.variableName) tags, since those
    come up a lot.
    */
    special: Tag.defineModifier("special")
  };
  for (let name2 in tags) {
    let val = tags[name2];
    if (val instanceof Tag)
      val.name = name2;
  }
  var classHighlighter = tagHighlighter([
    { tag: tags.link, class: "tok-link" },
    { tag: tags.heading, class: "tok-heading" },
    { tag: tags.emphasis, class: "tok-emphasis" },
    { tag: tags.strong, class: "tok-strong" },
    { tag: tags.keyword, class: "tok-keyword" },
    { tag: tags.atom, class: "tok-atom" },
    { tag: tags.bool, class: "tok-bool" },
    { tag: tags.url, class: "tok-url" },
    { tag: tags.labelName, class: "tok-labelName" },
    { tag: tags.inserted, class: "tok-inserted" },
    { tag: tags.deleted, class: "tok-deleted" },
    { tag: tags.literal, class: "tok-literal" },
    { tag: tags.string, class: "tok-string" },
    { tag: tags.number, class: "tok-number" },
    { tag: [tags.regexp, tags.escape, tags.special(tags.string)], class: "tok-string2" },
    { tag: tags.variableName, class: "tok-variableName" },
    { tag: tags.local(tags.variableName), class: "tok-variableName tok-local" },
    { tag: tags.definition(tags.variableName), class: "tok-variableName tok-definition" },
    { tag: tags.special(tags.variableName), class: "tok-variableName2" },
    { tag: tags.definition(tags.propertyName), class: "tok-propertyName tok-definition" },
    { tag: tags.typeName, class: "tok-typeName" },
    { tag: tags.namespace, class: "tok-namespace" },
    { tag: tags.className, class: "tok-className" },
    { tag: tags.macroName, class: "tok-macroName" },
    { tag: tags.propertyName, class: "tok-propertyName" },
    { tag: tags.operator, class: "tok-operator" },
    { tag: tags.comment, class: "tok-comment" },
    { tag: tags.meta, class: "tok-meta" },
    { tag: tags.invalid, class: "tok-invalid" },
    { tag: tags.punctuation, class: "tok-punctuation" }
  ]);

  // node_modules/lezer-feel/dist/index.js
  var propertyIdentifier = 124;
  var identifier = 125;
  var nameIdentifier = 126;
  var insertSemi = 127;
  var expression0 = 131;
  var ForExpression = 4;
  var forExpressionStart = 134;
  var ForInExpression = 7;
  var Name = 8;
  var Identifier = 9;
  var AdditionalIdentifier = 10;
  var forExpressionBodyStart = 140;
  var IfExpression = 21;
  var ifExpressionStart = 141;
  var QuantifiedExpression = 25;
  var quantifiedExpressionStart = 142;
  var QuantifiedInExpression = 29;
  var PositiveUnaryTest = 39;
  var ArithmeticExpression = 43;
  var arithmeticPlusStart = 145;
  var arithmeticTimesStart = 146;
  var arithmeticExpStart = 147;
  var arithmeticUnaryStart = 148;
  var VariableName = 49;
  var PathExpression = 70;
  var pathExpressionStart = 154;
  var PathName = 71;
  var FilterExpression = 73;
  var filterExpressionStart = 155;
  var FunctionInvocation = 75;
  var functionInvocationStart = 156;
  var ParameterName = 79;
  var nil = 161;
  var NumericLiteral = 82;
  var StringLiteral = 83;
  var BooleanLiteral = 84;
  var listStart = 168;
  var List = 92;
  var FunctionDefinition = 93;
  var functionDefinitionStart = 170;
  var Context = 100;
  var contextStart = 172;
  var ContextEntry = 101;
  var PropertyName = 103;
  var PropertyIdentifier = 104;
  var LOG_PARSE = typeof process != "undefined" && process.env && /\bfparse(:dbg)?\b/.test(process.env.LOG);
  var LOG_PARSE_DEBUG = typeof process != "undefined" && process.env && /\bfparse:dbg\b/.test(process.env.LOG);
  var LOG_VARS = typeof process != "undefined" && process.env && /\bcontext\b/.test(process.env.LOG);
  var spaceChars = [
    9,
    11,
    12,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288
  ];
  var newlineChars = chars("\n\r");
  var asterix = "*".charCodeAt(0);
  var additionalNameChars = chars("'./-+*^");
  function chars(str) {
    return Array.from(str).map((s2) => s2.charCodeAt(0));
  }
  function isStartChar(ch) {
    return ch === 63 || ch >= 65 && ch <= 90 || ch === 95 || ch >= 97 && ch <= 122 || ch >= 192 && ch <= 214 || ch >= 216 && ch <= 246 || ch >= 248 && ch <= 767 || ch >= 880 && ch <= 893 || ch >= 895 && ch <= 8191 || ch >= 8204 && ch <= 8205 || ch >= 8304 && ch <= 8591 || ch >= 11264 && ch <= 12271 || ch >= 12289 && ch <= 55295 || ch >= 63744 && ch <= 64975 || ch >= 65008 && ch <= 65533 || ch >= 55296 && ch <= 56319 || ch >= 56320 && ch <= 57343;
  }
  function isAdditional(ch) {
    return additionalNameChars.includes(ch);
  }
  function isPartChar(ch) {
    return ch >= 48 && ch <= 57 || ch === 183 || ch >= 768 && ch <= 879 || ch >= 8255 && ch <= 8256;
  }
  function isSpace(ch) {
    return spaceChars.includes(ch);
  }
  function indent(str, spaces) {
    return spaces.concat(
      str.split(/\n/g).join("\n" + spaces)
    );
  }
  function parseAdditionalSymbol(input, offset2 = 0) {
    const next = input.peek(offset2);
    if (next === asterix && input.peek(offset2 + 1) === asterix) {
      return {
        offset: 2,
        token: "**"
      };
    }
    if (isAdditional(next)) {
      return {
        offset: 1,
        token: String.fromCharCode(next)
      };
    }
    return null;
  }
  function parseIdentifier(input, offset2 = 0, namePart = false) {
    for (let inside = false, chars3 = [], i = 0; ; i++) {
      const next = input.peek(offset2 + i);
      if (isStartChar(next) || (inside || namePart) && isPartChar(next)) {
        if (!inside) {
          inside = true;
        }
        chars3.push(next);
      } else {
        if (chars3.length) {
          return {
            token: String.fromCharCode(...chars3),
            offset: i
          };
        }
        return null;
      }
    }
  }
  function parseSpaces(input, offset2) {
    for (let inside = false, i = 0; ; i++) {
      let next = input.peek(offset2 + i);
      if (isSpace(next)) {
        if (!inside) {
          inside = true;
        }
      } else {
        if (inside) {
          return {
            token: " ",
            offset: i
          };
        }
        return null;
      }
    }
  }
  function parseName(input, variables) {
    const {
      keys,
      prefixes
    } = variables.contextCache();
    const start = variables.tokens;
    for (let i = 0, tokens = [], nextMatch = null; ; ) {
      const namePart = start.length + tokens.length > 0;
      const maybeSpace = tokens.length > 0;
      const match2 = parseIdentifier(input, i, namePart) || namePart && parseAdditionalSymbol(input, i) || maybeSpace && parseSpaces(input, i);
      if (!match2) {
        return nextMatch;
      }
      const {
        token,
        offset: offset2
      } = match2;
      i += offset2;
      if (token === " ") {
        continue;
      }
      tokens = [...tokens, token];
      const name2 = [...start, ...tokens].join(" ");
      if (keys.has(name2)) {
        const token2 = tokens[0];
        nextMatch = {
          token: token2,
          offset: token2.length,
          term: nameIdentifier
        };
      }
      if (prefixes.has(name2)) {
        continue;
      }
      if (dateTimeIdentifiers.some((el) => el === name2)) {
        const token2 = tokens[0];
        nextMatch = {
          token: token2,
          offset: token2.length,
          term: identifier
        };
      }
      if (dateTimeIdentifiers.some((el) => el.startsWith(name2))) {
        continue;
      }
      return nextMatch;
    }
  }
  var identifiersMap = {
    [identifier]: "identifier",
    [nameIdentifier]: "nameIdentifier"
  };
  var identifiers = new ExternalTokenizer((input, stack) => {
    LOG_PARSE_DEBUG && console.log("%s: T <identifier | nameIdentifier>", input.pos);
    const nameMatch = parseName(input, stack.context);
    const start = stack.context.tokens;
    const match2 = nameMatch || parseIdentifier(input, 0, start.length > 0);
    if (match2) {
      input.advance(match2.offset);
      input.acceptToken(nameMatch ? nameMatch.term : identifier);
      LOG_PARSE && console.log("%s: MATCH <%s> <%s>", input.pos, nameMatch ? identifiersMap[nameMatch.term] : "identifier", match2.token);
    }
  }, { contextual: true });
  var propertyIdentifiers = new ExternalTokenizer((input, stack) => {
    LOG_PARSE_DEBUG && console.log("%s: T <propertyIdentifier>", input.pos);
    const start = stack.context.tokens;
    const match2 = parseIdentifier(input, 0, start.length > 0);
    if (match2) {
      input.advance(match2.offset);
      input.acceptToken(propertyIdentifier);
      LOG_PARSE && console.log("%s: MATCH <propertyIdentifier> <%s>", input.pos, match2.token);
    }
  });
  var insertSemicolon = new ExternalTokenizer((input, stack) => {
    LOG_PARSE_DEBUG && console.log("%s: T <insertSemi>", input.pos);
    let offset2;
    let insert = false;
    for (offset2 = 0; ; offset2++) {
      const char = input.peek(offset2);
      if (spaceChars.includes(char)) {
        continue;
      }
      if (newlineChars.includes(char)) {
        insert = true;
      }
      break;
    }
    if (insert) {
      const identifier2 = parseIdentifier(input, offset2 + 1);
      const spaces = parseSpaces(input, offset2 + 1);
      if (spaces || identifier2 && /^(then|else|return|satisfies)$/.test(identifier2.token)) {
        return;
      }
      LOG_PARSE && console.log("%s: MATCH <insertSemi>", input.pos);
      input.acceptToken(insertSemi);
    }
  });
  var prefixedContextStarts = {
    [functionInvocationStart]: "FunctionInvocation",
    [filterExpressionStart]: "FilterExpression",
    [pathExpressionStart]: "PathExpression"
  };
  var contextStarts = {
    [contextStart]: "Context",
    [functionDefinitionStart]: "FunctionDefinition",
    [forExpressionStart]: "ForExpression",
    [listStart]: "List",
    [ifExpressionStart]: "IfExpression",
    [quantifiedExpressionStart]: "QuantifiedExpression"
  };
  var contextEnds = {
    [Context]: "Context",
    [FunctionDefinition]: "FunctionDefinition",
    [ForExpression]: "ForExpression",
    [List]: "List",
    [IfExpression]: "IfExpression",
    [QuantifiedExpression]: "QuantifiedExpression",
    [PathExpression]: "PathExpression",
    [FunctionInvocation]: "FunctionInvocation",
    [FilterExpression]: "FilterExpression",
    [ArithmeticExpression]: "ArithmeticExpression"
  };
  var ValueProducer = class _ValueProducer {
    /**
     * @param { Function } fn
     */
    constructor(fn2) {
      this.fn = fn2;
    }
    get(variables) {
      return this.fn(variables);
    }
    /**
     * @param { (variables: Variables) => ContextValue } fn
     *
     * @return { ValueProducer }
     */
    static of(fn2) {
      return new _ValueProducer(fn2);
    }
  };
  var dateTimeLiterals = {
    "date and time": 1,
    "date": 1,
    "time": 1,
    "duration": 1
  };
  var dateTimeIdentifiers = Object.keys(dateTimeLiterals);
  function getPrefixes(str) {
    const prefixes = [];
    for (let i = 1; i <= str.length; i++) {
      prefixes.push(str.substring(0, i));
    }
    return prefixes;
  }
  function cacheKey(key, cache) {
    const normalizedKey = normalizeContextKey(key);
    const prefixes = getPrefixes(normalizedKey);
    cache.keys.add(normalizedKey);
    for (const prefix of prefixes) {
      cache.prefixes.add(prefix);
    }
    cache.originalMap.set(normalizedKey, key);
    return cache;
  }
  function computeContextCache(context) {
    const cache = createContextCache();
    for (const key of context.getKeys()) {
      cacheKey(key, cache);
    }
    return cache;
  }
  function createContextCache(from) {
    return {
      keys: new Set(from?.keys),
      prefixes: new Set(from?.prefixes),
      originalMap: new Map(from?.originalMap)
    };
  }
  var VariableContext = class {
    /**
     * Creates a new context from a JavaScript object.
     *
     * @param {any} [value]
     */
    constructor(value = {}) {
      this.value = value;
    }
    /**
     * Return all defined keys of the context.
     *
     * @returns {string[] } the keys of the context
     */
    getKeys() {
      return Object.keys(this.value);
    }
    /**
     * Returns the value of the given key.
     *
     * If the value represents a context itself, it should be wrapped in a
     * context class.
     *
     * @param {string} key
     * @returns {VariableContext|ValueProducer|null}
     */
    get(key) {
      const result = this.value[key];
      const constructor = (
        /** @type { typeof VariableContext } */
        this.constructor
      );
      if (constructor.isAtomic(result)) {
        return result;
      }
      return constructor.of(result);
    }
    /**
     * Creates a new context with the given key added.
     *
     * @param {string} key
     * @param {any} value
     *
     * @returns {VariableContext} new context with the given key added
     */
    set(key, value) {
      const constructor = (
        /** @type { typeof VariableContext } */
        this.constructor
      );
      return new constructor({
        ...this.value,
        [key]: value
      });
    }
    /**
     * Non-destructively merge another context into this one,
     * and return the result.
     *
     * @param {ContextValue} other
     *
     * @return {VariableContext}
     */
    merge(other) {
      const constructor = (
        /** @type { typeof VariableContext } */
        this.constructor
      );
      return new constructor(
        constructor.__merge(this.value, other)
      );
    }
    /**
     * Wether the given value is atomic. Non-atomic values need to be wrapped in a
     * context Class.
     *
     * @param {any} value
     * @returns {Boolean}
     */
    static isAtomic(value) {
      return value === null || value === void 0 || value instanceof this || value instanceof ValueProducer || typeof value !== "object";
    }
    /**
     * Takes any number of Contexts and merges them into a single context.
     *
     * @param { ...(VariableContext | undefined) } contexts
     * @returns { VariableContext }
     */
    static of(...contexts) {
      const merged = contexts.reduce((context, otherContext) => {
        return this.__merge(context, otherContext);
      }, {});
      return new this(merged);
    }
    /**
     * Returns the raw representation of the given context.
     *
     * @param {VariableContext | any} context
     *
     * @return {any}
     */
    static __unwrap(context) {
      if (!context) {
        return {};
      }
      if (context instanceof this) {
        return context.value;
      }
      if (this.isAtomic(context)) {
        return {};
      }
      return context;
    }
    /**
     * Non-destructively merges two contexts (or their values)
     * with each other, returning the result.
     *
     * @param {ContextValue} context
     * @param {ContextValue} other
     *
     * @return {ContextValue} merged context value
     */
    static __merge(context, other) {
      const merged = Object.assign({}, this.__unwrap(context));
      for (const [key, value] of Object.entries(this.__unwrap(other))) {
        if (value instanceof ValueProducer) {
          merged[key] = value;
          continue;
        }
        if (has(merged, key)) {
          merged[key] = this.__merge(merged[key], value);
          continue;
        }
        merged[key] = value;
      }
      return merged;
    }
  };
  var Variables = class _Variables {
    /**
     * @param { {
     *   name?: string,
     *   tokens?: string[],
     *   children?: Variables[],
     *   parent: Variables | null
     *   context: VariableContext,
     *   value?: any,
     *   raw?: any,
     *   __cache?: CacheMap
     * } } options
     */
    constructor({
      name: name2 = "Expressions",
      tokens = [],
      children = [],
      parent = null,
      context,
      value,
      raw,
      __cache
    }) {
      this.name = name2;
      this.tokens = tokens;
      this.children = children;
      this.parent = parent;
      this.context = context;
      this.value = value;
      this.raw = raw;
      this.__cache = __cache;
    }
    /**
     * Get the root Variables instance by traversing up the parent chain.
     *
     * @returns {Variables}
     */
    get root() {
      let current = (
        /** @type {Variables} */
        this
      );
      while (current.parent) {
        current = current.parent;
      }
      return current;
    }
    /**
     * Get the root Variables instance by traversing up the parent chain.
     *
     * @returns {CacheMap}
     */
    get cache() {
      const root = this.root;
      if (!root.__cache) {
        root.__cache = /* @__PURE__ */ new WeakMap();
      }
      return root.__cache;
    }
    enterScope(name2) {
      const childScope = this.of({
        name: name2,
        parent: this
      });
      LOG_VARS && console.log("[%s] enter", childScope.path, childScope.context);
      return childScope;
    }
    exitScope(str) {
      if (!this.parent) {
        LOG_VARS && console.log("[%s] NO exit %o\n%s", this.path, this.context, indent(str, "  "));
        return this;
      }
      LOG_VARS && console.log("[%s] exit %o\n%s", this.path, this.context, indent(str, "  "));
      return this.parent.pushChild(this);
    }
    token(part) {
      LOG_VARS && console.log("[%s] token <%s> + <%s>", this.path, this.tokens.join(" "), part);
      return this.assign({
        tokens: [...this.tokens, part]
      });
    }
    literal(value) {
      LOG_VARS && console.log("[%s] literal %o", this.path, value);
      return this.pushChild(this.of({
        name: "Literal",
        value
      }));
    }
    /**
     * Return computed scope value
     *
     * @return {any}
     */
    computedValue() {
      for (let scope = (
        /** @type {Variables} */
        this
      ); ; scope = last(scope.children)) {
        if (!scope) {
          return null;
        }
        if (!isNil(scope.value)) {
          return scope.value;
        }
      }
    }
    /**
     * Get or compute the context cache for fast retrieval
     * of keys, prefixes and original mappings.
     *
     * @returns {ContextCache}
     */
    contextCache() {
      let cache = this.cache.get(this.context);
      if (!cache) {
        cache = computeContextCache(this.context);
        this.cache.set(this.context, cache);
      }
      return cache;
    }
    get path() {
      return this.parent?.path?.concat(" > ", this.name) || this.name;
    }
    /**
     * Return value of variable.
     *
     * @param { string } variable
     * @return { any } value
     */
    get(variable) {
      const normalizedVariable = variable && normalizeContextKey(variable);
      const contextKey = this.contextCache().originalMap.get(normalizedVariable);
      if (typeof contextKey === "undefined") {
        return void 0;
      }
      const val = this.context.get(contextKey);
      if (val instanceof ValueProducer) {
        return val.get(this);
      } else {
        return val;
      }
    }
    resolveName(name2) {
      const variable = this.tokens.join(" ");
      const tokens = [];
      const parentScope = this.assign({
        tokens
      });
      const variableScope = this.of({
        name: name2,
        parent: parentScope,
        value: this.get(variable),
        raw: variable
      });
      LOG_VARS && console.log("[%s] resolve %s <%s=%s>", name2, variableScope.path, variable, variableScope.value);
      return parentScope.pushChild(variableScope);
    }
    pushChild(child) {
      if (!child) {
        return this;
      }
      const parent = this.assign({
        children: [...this.children, child]
      });
      child.parent = parent;
      return parent;
    }
    pushChildren(children) {
      let parent = this;
      for (const child of children) {
        parent = parent.pushChild(child);
      }
      return parent;
    }
    declareName() {
      if (this.tokens.length === 0) {
        throw Error("no tokens to declare name");
      }
      const variableName = this.tokens.join(" ");
      LOG_VARS && console.log("[%s] declareName <%s>", this.path, variableName);
      return this.assign({
        tokens: []
      }).pushChild(
        this.of({
          name: "Name",
          value: variableName
        })
      );
    }
    define(name2, value) {
      if (typeof name2 !== "string") {
        LOG_VARS && console.log("[%s] no define <%s=%s>", this.path, name2, value);
        return this;
      }
      LOG_VARS && console.log("[%s] define <%s=%s>", this.path, name2, value);
      const oldContext = this.context;
      const newContext = oldContext.set(name2, value);
      const oldCache = this.cache.get(oldContext) || computeContextCache(oldContext);
      const newCache = cacheKey(
        name2,
        createContextCache(oldCache)
      );
      this.cache.set(newContext, newCache);
      return this.assign({
        context: newContext
      });
    }
    /**
     * @param { Record<string, any> } [options]
     *
     * @return { Variables }
     */
    assign(options = {}) {
      return _Variables.of({
        ...this,
        ...options
      });
    }
    /**
     * @param { Record<string, any> } [options]
     *
     * @return { Variables }
     */
    of(options = {}) {
      const defaultOptions = {
        context: this.context,
        parent: this.parent
      };
      return _Variables.of({
        ...defaultOptions,
        ...options
      });
    }
    /**
     * @param { {
     *   name?: string,
     *   tokens?: string[],
     *   children?: Variables[],
     *   parent?: Variables | null
     *   context: VariableContext,
     *   value?: any,
     *   raw?: any,
     *   __cache?: CacheMap
     * } } options
     *
     * @return {Variables}
     */
    static of(options) {
      const {
        name: name2,
        tokens = [],
        children = [],
        parent = null,
        context,
        value,
        raw,
        __cache
      } = options;
      if (!context) {
        throw new Error("must provide <context>");
      }
      return new _Variables({
        name: name2,
        tokens: [...tokens],
        children: [...children],
        context,
        parent,
        value,
        raw,
        __cache
      });
    }
  };
  function normalizeContextKey(name2) {
    return name2.replace(/\s*([./\-'+]|\*\*?)\s*/g, " $1 ").replace(/\s{2,}/g, " ").trim();
  }
  function wrap(variables, scopeName, code) {
    const parts = variables.children.filter((c) => c.name !== scopeName);
    const children = variables.children.filter((c) => c.name === scopeName);
    const namePart = parts[0];
    const valuePart = parts[Math.max(1, parts.length - 1)];
    const name2 = namePart?.computedValue();
    const value = valuePart?.computedValue() ?? null;
    return variables.assign({
      children
    }).enterScope(scopeName).pushChildren(parts).exitScope(code).define(name2, value);
  }
  function trackVariables(context = {}, Context2 = VariableContext) {
    const start = Variables.of({
      context: Context2.of(context)
    });
    return new ContextTracker({
      start,
      reduce(variables, term, stack, input) {
        if (term === IfExpression) {
          const [thenPart, elsePart] = variables.children.slice(-2);
          variables = variables.assign({
            value: Context2.of(
              thenPart?.computedValue(),
              elsePart?.computedValue()
            )
          });
        }
        if (term === List) {
          variables = variables.assign({
            value: Context2.of(
              ...variables.children.map(
                (c) => c?.computedValue()
              )
            )
          });
        }
        if (term === FilterExpression) {
          const [sourcePart, _] = variables.children.slice(-2);
          variables = variables.assign({
            value: sourcePart?.computedValue()
          });
        }
        if (term === FunctionInvocation) {
          const [
            name2,
            ...args
          ] = variables.children;
          if (name2?.raw === "get value") {
            variables = getContextValue(variables, args);
          } else {
            variables = variables.assign({
              value: name2?.computedValue() || Context2.of(void 0)
            });
          }
        }
        const start2 = contextStarts[term];
        if (start2) {
          return variables.enterScope(start2);
        }
        const prefixedStart = prefixedContextStarts[term];
        if (prefixedStart) {
          const {
            children: currentChildren,
            context: currentContext
          } = variables;
          const children = currentChildren.slice(0, -1);
          const lastChild = last(currentChildren);
          let newContext = null;
          if (term === pathExpressionStart) {
            newContext = Context2.of(lastChild?.computedValue());
          }
          if (term === filterExpressionStart) {
            newContext = Context2.of(
              currentContext,
              lastChild?.computedValue()
            ).set("item", lastChild?.computedValue());
          }
          return variables.assign({ children }).enterScope(prefixedStart).pushChild(lastChild).assign({ context: newContext || currentContext });
        }
        const code = input.read(input.pos, stack.pos);
        const end = contextEnds[term];
        if (end) {
          return variables.exitScope(code);
        }
        if (term === ContextEntry) {
          const parts = variables.children.filter((c) => c.name !== "ContextEntry");
          const name2 = parts[0];
          const value = last(parts);
          return wrap(variables, "ContextEntry", code).assign(
            {
              value: Context2.of(variables.value).set(name2?.computedValue(), value?.computedValue())
            }
          );
        }
        if (term === ForInExpression || term === QuantifiedInExpression) {
          return wrap(variables, "InExpression", code);
        }
        if (term === forExpressionBodyStart) {
          return variables.define(
            "partial",
            ValueProducer.of((variables2) => {
              return last(variables2.children)?.computedValue();
            })
          );
        }
        if (term === ParameterName) {
          const name2 = last(variables.children).computedValue();
          return variables.define(name2, 1);
        }
        if (term === arithmeticPlusStart || term === arithmeticTimesStart || term === arithmeticExpStart) {
          const children = variables.children.slice(0, -1);
          const lastChild = last(variables.children);
          return variables.assign({
            children
          }).enterScope("ArithmeticExpression").pushChild(lastChild);
        }
        if (term === arithmeticUnaryStart) {
          return variables.enterScope("ArithmeticExpression");
        }
        if (term === Identifier || term === AdditionalIdentifier || term === PropertyIdentifier) {
          return variables.token(code);
        }
        if (term === StringLiteral) {
          return variables.literal(code.replace(/^"|"$/g, "").replace(/\\(["\\])/g, "$1"));
        }
        if (term === BooleanLiteral) {
          return variables.literal(code === "true" ? true : false);
        }
        if (term === NumericLiteral) {
          return variables.literal(parseFloat(code));
        }
        if (term === nil) {
          return variables.literal(null);
        }
        if (term === VariableName) {
          return variables.resolveName("VariableName");
        }
        if (term === PathName) {
          return variables.resolveName("PathName");
        }
        if (term === Name || term === PropertyName) {
          return variables.declareName();
        }
        if (term === expression0 || term === PositiveUnaryTest) {
          if (variables.tokens.length > 0) {
            throw new Error("uncleared name");
          }
        }
        if (term === expression0) {
          let parent = variables;
          while (parent.parent) {
            parent = parent.exitScope(code);
          }
          return parent;
        }
        return variables;
      }
    });
  }
  var variableTracker = trackVariables({});
  function getContextValue(variables, args) {
    if (!args.length) {
      return variables.assign({
        value: null
      });
    }
    if (args[0].name === "Name") {
      args = extractNamedArgs(args, ["m", "key"]);
    }
    if (args.length !== 2) {
      return variables.assign({
        value: null
      });
    }
    const [
      context,
      key
    ] = args;
    const keyValue = key?.computedValue();
    const contextValue = context?.computedValue();
    if (!contextValue || typeof contextValue !== "object" || typeof keyValue !== "string") {
      return variables.assign({
        value: null
      });
    }
    return variables.assign({
      value: [normalizeContextKey(keyValue), keyValue].reduce((value, keyValue2) => {
        return contextValue.get(keyValue2) || value;
      }, null)
    });
  }
  function extractNamedArgs(args, argNames) {
    const context = {};
    for (let i = 0; i < args.length; i += 2) {
      const [name2, value] = args.slice(i, i + 2);
      context[name2.value] = value;
    }
    return argNames.map((name2) => context[name2]);
  }
  function last(arr) {
    return arr[arr.length - 1];
  }
  var feelHighlighting = styleTags({
    StringLiteral: tags.string,
    NumericLiteral: tags.number,
    BooleanLiteral: tags.bool,
    "AtLiteral!": tags.special(tags.string),
    CompareOp: tags.compareOperator,
    ArithOp: tags.arithmeticOperator,
    "for if then else some every return": tags.controlKeyword,
    "in instance of and or satisfies between as": tags.operatorKeyword,
    function: tags.definitionKeyword,
    "Type/...": tags.typeName,
    "Wildcard!": tags.modifier,
    null: tags.null,
    LineComment: tags.lineComment,
    BlockComment: tags.blockComment,
    "VariableName!": tags.variableName,
    '"?"': tags.self,
    "DateTimeConstructor! SpecialFunctionName!": tags.standard(tags.function(tags.variableName)),
    "FunctionInvocation/VariableName!": tags.function(tags.variableName),
    "Name!": tags.definition(tags.variableName),
    "Key/Name! ContextEntryType/Name!": tags.definition(tags.propertyName),
    "PathExpression/PathName!": tags.propertyName,
    "FormalParameter/ParameterName!": tags.function(tags.definition(tags.variableName)),
    "( )": tags.paren,
    "[ ]": tags.squareBracket,
    "{ }": tags.brace,
    ".": tags.derefOperator,
    ", ;": tags.separator,
    "..": tags.punctuation
  });
  var spec_identifier = { __proto__: null, for: 10, in: 34, return: 40, if: 44, then: 46, else: 48, some: 52, every: 54, satisfies: 60, or: 64, and: 68, between: 76, instance: 90, of: 93, days: 105, time: 107, duration: 109, years: 111, months: 113, date: 115, list: 121, context: 127, function: 134, null: 162, true: 332, false: 332, "?": 176, external: 192, not: 217 };
  var parser = LRParser.deserialize({
    version: 14,
    states: "CvO`QYOOO`QYOOO$yQYOOOOQU'#Ce'#CeO%TQYO'#C`O&^QYO'#FTOOQQ'#Ff'#FfO&hQYO'#FfO`QYO'#DXOOQU'#Eq'#EqO(_Q^O'#D_OOQU'#D`'#D`OOQU'#D_'#D_OOQO'#Fn'#FnO*[QWO'#DyOOQQ'#EQ'#EQOOQQ'#ER'#EROOQQ'#ES'#ESO*aOWO'#EVO*[QWO'#ETOOQQ'#ET'#ETOOQQ'#Ft'#FtOOQQ'#Fr'#FrOOQQ'#Fz'#FzOOQQ'#EX'#EXO`QYO'#EZOOQQ'#FV'#FVO*iQ^O'#FVO,`QYO'#E[O,gQWO'#E]OOQP'#GO'#GOO,lQXO'#EdOOQQ'#F{'#F{OOQQ'#FU'#FUQOQWOOOOQQ'#FW'#FWOOQQ'#F_'#F_O`QYO'#CqOOQQ'#F`'#F`O%TQYO'#CuO,zQYO'#DzOOQQ'#Fs'#FsO-PQYO'#EUOOQO'#EU'#EUO`QYO'#EYO`QYO'#EXOOQO'#F|'#F|Q-XQWOOO-^QYO'#DTO.TQWO'#FbOOQO'#DV'#DVO.`QYO'#FfO.gQWOOO/^QYO'#CdO/kQYO'#FYOOQQ'#Cc'#CcO/pQYO'#FXOOQQ'#Cb'#CbO/xQYO,58zO`QYO,59kOOQQ'#Fc'#FcOOQQ'#Fd'#FdOOQQ'#Fe'#FeO`QYO,59sO`QYO,59sO`QYO,59sOOQQ'#Fl'#FlO/}QYO,5:`OOQQ'#Fm'#FmO`QYO,5:cO`QYO,59gO`QYO,59iO`QYO,59kO1|QYO,59kO2TQYO,59tOOQQ,5:l,5:lO2YQYO,59sOOQU-E8o-E8oO3|QYO'#FoOOQQ,5:e,5:eOOQQ,5:q,5:qOOQQ,5:o,5:oO4TQYO,5:uOOQQ,5;q,5;qO4_QYO,5:tO4lQWO,5:vO4qQYO,5:wOOQP'#Eh'#EhO5hQXO'#EgOOQO'#Ef'#EfO5oQWO'#EeO5tQWO'#GPO5|QWO,5;OO6RQYO,59]OOQQ'#Cy'#CyO6YQYO'#FaOOQQ'#Cx'#CxO6bQYO,59aO6gQYO,5:fO6lQYO,5:pO6qQYO,5:tO6xQYO,5:sO`QYO'#EzQ-XQWOOO`QYO'#EpO7oQWO,5;|O`QYOOOOQR'#Cf'#CfOOQQ'#Em'#EmO8iQYO,59OO`QYO,5;tOOQQ'#F['#F[O%TQYO'#EnO8yQYO,5;sO`QYO1G.fOOQQ'#F^'#F^O9pQYO1G/VO<gQYO1G/_O<qQYO1G/_O<{QYO1G/_O>oQYO'#DuOOQQ'#Du'#DuOOQQ1G/z1G/zO@iQYO1G/}O@pQYO1G/ROAyQYO1G/TOCSQYO1G/VO`QYO1G/VOOQQ1G/V1G/VOCjQYO1G/`ODXQ^O'#CdOEkQYO'#FqOOQO'#D}'#D}OEuQWO'#D|OEzQWO'#FpOOQO'#D{'#D{OOQO'#EO'#EOOFSQWO,5<ZOOQQ1G0a1G0aO`QYO1G0`O`QYO'#EvOFXQWO,5<]OOQQ1G0b1G0bOFdQWO'#E_OFoQWO'#F}OOQO'#E^'#E^OFwQWO1G0cOOQP'#Ex'#ExOF|QXO,5;RO`QYO,5;POGTQXO'#EyOG`QWO,5<kOOQQ1G0j1G0jO`QYO1G.wO%TQYO'#EoOGhQYO,5;{O`QYO1G.{OGpQYO1G0QOOQO1G0[1G0[OOQO,5;f,5;fOOQO-E8x-E8xOOQO,5;[,5;[OOQO-E8n-E8nOGuQWOOOOQQ-E8k-E8kOGzQYO'#CnOOQQ1G1`1G1`OOQQ,5;Y,5;YOOQQ-E8l-E8lOH[QYO7+$QOOQQ7+%i7+%iO`QYO7+$qOIRQYO,5:uOI`QWO7+$qOIeQYO'#D^OOQQ'#D]'#D]OKXQYO'#DaOK^QYO'#DaOKcQYO'#DaOKhQ`O'#DiOKmQ`O'#DlOKrQ`O'#DpOOQQ7+$z7+$zO`QYO,5:hO%TQYO'#EuOKwQWO,5<[OOQQ1G1u1G1uOL}QYO7+%zOM[QYO,5;bOOQO-E8t-E8tOCjQYO,5:yO%TQYO'#EwOMiQWO,5<iOMqQYO7+%}OOQP-E8v-E8vOMxQYO1G0kOOQO,5;e,5;eOOQO-E8w-E8wONSQYO7+$cOOQQ,5;Z,5;ZOOQQ-E8m-E8mONZQYO7+$gOOQO7+%l7+%lO`QYO,59YO! QQYO<<H]OOQQ<<H]<<H]O/}QYO'#ErO!!ZQYO,59xO!#}QYO,59{O!$SQYO,59{O!$XQYO,59{O!$^QYO,5:TO%TQYO,5:WO!${QbO,5:[O!%SQYO1G0SOOQO,5;a,5;aOOQO-E8s-E8sO!%^QYO<<IfOOQQ<<If<<IfOOQO1G0e1G0eOOQO,5;c,5;cOOQO-E8u-E8uO!(`QYO'#EaOOQQ<<Ii<<IiO`QYO<<IiO`QYO<<G}O!)VQYO1G.tOOQQ,5;^,5;^OOQQ-E8p-E8pO!)dQYO1G/gOOQQ1G/g1G/gO!)iQbO'#D_O!)zQ`O'#D^O!*VQ`O1G/oO!*[QWO'#DoO!*aQ`O'#FhOOQO'#Dn'#DnO!*iQ`O1G/rOOQO'#Ds'#DsO!*nQ`O'#FjOOQO'#Dr'#DrO!*vQ`O1G/vOOQQAN?TAN?TO!*{QYOAN=iOOQQ7+%R7+%RO!+rQ`O,59xOOQQ7+%Z7+%ZO!$^QYO,5:ZO%TQYO'#EsO!+}Q`O,5<SOOQQ7+%^7+%^O!$^QYO'#EtO!,VQ`O,5<UO!,_Q`O7+%bOOQO1G/u1G/uOOQO,5;_,5;_OOQO-E8q-E8qOOQO,5;`,5;`OOQO-E8r-E8rOCjQYO<<H|OOQQAN>hAN>hO/}QYO'#ErO!$^QYO<<H|O!,dQ`O7+%bO!,iQ`O1G/vO!${QbO,5:[O!,nQ`O'#Dp",
    stateData: "!-R~O#uOS#vOSPOSQOS~OTsO[VO]UOftOjvOkvOt}Ou}OxiO!V{O!W{O!XxO!ZzO!e!OO!j|O!lgO!syO!zjO#VnO#qRO#rRO$ZZO$i_O$j`O$k`O$laO$mbO~OTsO]UOftOjvOkvOt}Ou}OxiO!V{O!W{O!XxO!ZzO!e!OO!j|O!lgO!syO!zjO#VnO#qRO#rRO$ZZO$i_O$j`O$k`O$laO$mbO~O[!TO#`!UO~P#VO#qRO#rRO~OZ!dO[!^O]!^O^!_O_!_O`!`Oa!kOp!hOr!iOt!]Ou!]Ov!jO}!lO!l!fOx$bX~O#o#wX$t#wX~P%]O$i!mOT$YX[$YX]$YXf$YXj$YXk$YXt$YXu$YXx$YX!V$YX!W$YX!X$YX!Z$YX!e$YX!j$YX!l$YX!s$YX!z$YX#V$YX#q$YX#r$YX$Z$YX$j$YX$k$YX$l$YX$m$YX~O#qRO#rROZ!RX[!RX]!RX^!RX_!RX`!RXa!RXp!RXr!RXt!RXu!RXv!RXx!RX}!RX!l!RX#o!RX#s!RX$t!RX$P!RXc!RXz!RX!j!RXg!RXd!RX#U!RXh!RXn!RX~Ox!pO~O$j`O$k`O~O#s!uOZ#yX[#yX]#yX^#yX_#yX`#yXa#yXp#yXr#yXt#yXu#yXv#yXx#yX}#yX!l#yX#o#yX$t#yX$P#yXc#yXz#yX!j#yXg#yXd#yX#U#yXh#yXn#yX~O!j$eP~P`Ox!xO~O#p!yO$j`O$k`O#U$sP~Or#UO~Or#VOx!xX~O$t#YO~O#owX$PwX$twXzwXcwX!jwXgwXdwX#UwXhwXnwX~P%]O$P#[O#o$UXz$UX~O#o#_X~P&hOx#^O~OZ#_O[#_O]#_O^#_O_#_O`#_O#qRO#rRO#}#_O$]WX~OaWXzWX$PWX~P.lOa#cO~O$P#dOd#{X~Od#gO~O#qRO#rRO$ZZO~OTsO[VO]UOftOjvOkvOt}Ou}O!V{O!W{O!XxO!ZzO!e!OO!j|O!lgO!syO!zjO#VnO#qRO#rRO$ZZO$i_O$j`O$k`O$laO$mbO~Ox#sO~P0YO!O#uO~OZ!dO}!lO!l!fO[{a]{a^{a_{a`{aa{ap{ar{at{au{av{ax$bX#o{a$t{a$P{ac{az{a!j{ag{ad{a#U{ah{an{a~Oz$eP~P`Oc$POz$OO~P%]Oc$PO$P$QO!j$eX~P%]O!j$SO~O#qRO#rROz$qP~OZ#_O[#_O]#_O^#_O_#_O`#_O#p!yO#}#_O~O$]#ZX~P4|O$]$ZO~O$P$[O#U$sX~O#U$^O~Og$_O~P%]O$P$`On$TX~On$bO~O!Y$cO~O!V$dO~Oc$PO~P%]O#o!{a$t!{a$P!{ac!{az!{a!j!{ag!{ad!{a#U!{ah!{an!{a~P%]O$P#[O#o$Uaz$Ua~OZ#_O[#_O]#_O^#_O_#_O`#_O#qRO#rRO#}#_O~OaWa$]WazWa$PWa~P7zO$P#dOd#{a~OZ!dO[!^O]!^O^!_O_!_O`!`O}!lO!l!fOx$bX~Oasipsirsitsiusivsi#osi$tsi$Psicsizsi!jsigsidsi#Usihsinsi~P9ROZ!dO`!`O}!lO!l!fO[{i]{ia{ip{ir{it{iu{iv{ix$bX#o{i$t{i$P{ic{iz{i!j{ig{id{i#U{ih{in{i~O^!_O_!_O~P:yO^{i_{i~P:yOZ!dO}!lO!l!fO[{i]{i^{i_{i`{ia{ip{ir{it{iu{iv{ix$bX#o{i$t{i$P{ic{iz{i!j{ig{id{i#U{ih{in{i~O#qRO#rROZ!iX[!iX]!iX^!iX_!iX`!iXa!iXp!iXr!iXt!iXu!iXv!iXx!iX}!iX!l!iX#o!iX$t!iX$P!iXc!iXz!iX!j!iXg!iXd!iX#U!iXh!iXn!iX~O!j$pO~P%]Oa!kOr!iOt!]Ou!]Ov!jOpoi#ooi$toi$Poicoizoi!joigoidoi#Uoihoinoi~P9ROa!kOt!]Ou!]Ov!jOpqirqi#oqi$tqi$Pqicqizqi!jqigqidqi#Uqihqinqi~P9ROa!kOp!hOr$qOt!]Ou!]Ov!jO~P9RO!U$vO!X$wO!Z$xO!^$yO!a$zO!e${O#qRO#rRO$ZZO~OZ#eX[#eX]#eX^#eX_#eX`#eXa#eXp#eXr#eXt#eXu#eXv#eXx#eXz#eX}#eX!l#eX#q#eX#r#eX#s#eX$P#eX~P.lO$P$QOz$eX~P%]O$]$}O~O$P%OOz$dX~Oz%QO~O$P$QO!j$eaz$ea~O$]%UOz#RX$P#RX~O$P%VOz$qX~Oz%XO~O$]#Za~P4|O#p!yO$j`O$k`O~O$P$[O#U$sa~O$P$`On$Ta~O!W%bO~OzrO~Oc%cOdbX$PbXnbX~P%]O#oSq$tSq$PSqcSqzSq!jSqgSqdSq#USqhSqnSq~P%]Oc$POz$OO$PwX~P%]Oz%eO~OZ%fO[!QX]!QX^!QX_!QX`!QXa!QXp!QXr!QXt!QXu!QXv!QXx!QX}!QX!l!QX#o!QX$t!QX$P!QXc!QXz!QX!j!QXg!QXd!QX#U!QXh!QXn!QX~Or%hO~Or%iO~Or%jO~O!_%kO~O!_%lO~O!_%mO~O$P%OOz$da~OZ!dO[!^O]!^O^!_O_!_O`!`Oa!kOp!hOr!iOt!]Ou!]Ov!jO}!lOx$bX~Oz%rO!j%rO!l%qO~PLPO!j#ja$P#jaz#ja~P%]O$P%VOz$qa~O#S%xO~P`O#U#Xi$P#Xi~P%]Oh%yO~P%]O#oiq$tiq$Piqciqziq!jiqgiqdiq#Uiqhiqniq~P%]Oasypsyrsytsyusyvsy#osy$tsy$Psycsyzsy!jsygsydsy#Usyhsynsy~P9ROZ%fO[!Qa]!Qa^!Qa_!Qa`!Qaa!Qap!Qar!Qat!Qau!Qav!Qax!Qa}!Qa!l!Qa#o!Qa$t!Qa$P!Qac!Qaz!Qa!j!Qag!Qad!Qa#U!Qah!Qan!Qa~O!V%}O~O!Y%}O~O!V&OO~O!U$vO!X$wO!Z$xO!^$yO!a$zO!e&tO#qRO#rRO$ZZO~O![$^P~P!$^Oz!pi$P!pi~P%]OT$aXZ!|y[$aX]$aX^!|y_!|y`!|ya!|yf$aXj$aXk$aXp!|yr!|yt$aXu$aXv!|yx$aX}!|y!V$aX!W$aX!X$aX!Z$aX!e$aX!j$aX!l$aX!s$aX!z$aX#V$aX#o!|y#q$aX#r$aX$Z$aX$i$aX$j$aX$k$aX$l$aX$m$aX$t!|y$P!|yc!|yz!|yg!|yd!|y#U!|yh!|yn!|y~O#o#TX$t#TX$P#TXc#TXz#TX!j#TXg#TXd#TX#U#TXh#TXn#TX~P%]Odbi$Pbinbi~P%]O!W&^O~O#qRO#rROZ!RX![!RX$P!RX~OZ&oO![!QX$P!QX~O![&`O~O$]&aO~O$P&bO![$[X~O![&dO~O$P&eO![$^X~O![&gO~O#oe!R$te!R$Pe!Rce!Rze!R!je!Rge!Rde!R#Ue!Rhe!Rne!R~P%]OZ&oO![!Qa$P!Qa~O$P&bO![$[a~O$P&eO![$^a~O$_&mO~O$_&pO~O![&qO~O!_&sO~O$Z$j~$j$k`_$iZQP^Q~",
    goto: "E`$tPPPP$uP%m%p%v&W'qPPPPPPP'zPP$uPPP$uPP'}(QP$uP$uP$uPPP(WP(cP$u$uPP(l)R)^*g)RPPPPPPP)RPP)RP+m+p)RP+v+|$u,TP$uP$u,W-O-R-X-OP-a.X-a-a/W0OP$u0v$u1n1n2f2iP2oPP1n2u2{/S3PPP3XP3[3c3i3o3u5S5^5d5j5p5w5}6T6ZPPPPPPPP6a6j8n9f:^:aP:iP:l:o;g<_<b<g=T=r>bP?YP?]P?a@R@sAkAqAt$uAzAzPPPPPBr8nCjDbDeE]!kjOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yR![SQ!YSR$m#dW!WSw#d$`W#x!p!x%O%VT&S%l&b#WXOPQWYilu|}!]!a!b!c!e!g!h!i!j!k#Y#[#^#b#f#l#s#u$P$Q$Z$_$b$q$}%U%X%c%f%k%m%x%y&P&a&e&m&o&p&sb!VSw!x#d$`%O%V%l&bU#`!V#a#vR#v!pU#`!V#a#vT$X!z$YR$l#bR#TwQ#RwR%_$`U!RQ#^#sQ#t!kR$g#[QrQQ$i#^R$s#sQ$|#uQ%s%UQ&R%kU&W%m&e&sQ&h&aT&n&m&pc$u#u%U%k%m&a&e&m&p&s!jkOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yU$t#u%U&mS%{%f&o]&Q%k%m&a&e&p&s#Q[OPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s#u$P$Q$Z$_$b$q$}%U%X%c%f%k%m%x%y&a&e&m&o&p&sR#m!eR&V%lQ&T%lR&i&bQ&Z%mR&r&sS&X%m&sR&k&eR#n!e!k]OPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yR#}!pQ#z!pR%o%OS#y!p%OT$T!x%V!keOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%y!jeOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yQ!rbT!{o$[!kcOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%y!kdOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%y!khOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%y!kpOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yR$W!xQ$U!xR%t%VQ%w%XR&[%xQ!}oR%[$[T!|o$[S!zo$[T$X!z$YRrQS#a!V#vR$j#aQ#e!YR$n#eQ$a#RR%`$aQ#]!RR$h#]!rYOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s#u$P$Q$Z$_$b$q$}%U%X%c%f%x%y&mU!oY#l&PQ#l!e_&P%k%m&a&e&o&p&sQ%g$tS%|%g&_R&_&QQ&c&TR&j&cQ&f&XR&l&fQ%P#zR%p%PS$R!v#wR%T$RQ%W$UR%u%WQ$Y!zR%Y$YQ$]!}R%]$]Q#Z!PR$f#ZQrOQ!PPR$e#YUTOP#YW!QQ!k#[#^Q!nWQ!tiQ!vlQ#PuQ#W|Q#X}Q#h!]Q#i!aQ#j!bQ#k!cQ#o!gQ#p!hQ#q!iQ#r!jQ#w!pQ$k#bQ$o#fQ$r#sQ%R$PQ%S$QQ%Z$ZQ%^$_Q%a$bQ%d$qQ%n$}S%v%X%xQ%z%cR&]%y!kqOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%y!kSOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yR!ZSS!XS#dT#Qw$`R#b!WR#f![!kuOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%y!kwOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yR#SwV!SQ#^#s!V!aT!Q!t!v#P#W#X#h#o#p#q#r#w$k$o$r%R%S%Z%^%a%d%n%v%z&]!X!bT!Q!t!v#P#W#X#h#i#o#p#q#r#w$k$o$r%R%S%Z%^%a%d%n%v%z&]!Z!cT!Q!t!v#P#W#X#h#i#j#o#p#q#r#w$k$o$r%R%S%Z%^%a%d%n%v%z&]!kWOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yR&U%lT&Y%m&s!_!eT!Q!n!t!v#P#W#X#h#i#j#k#o#p#q#r#w$k$o$r%R%S%Z%^%a%d%n%v%z&]!_!gT!Q!n!t!v#P#W#X#h#i#j#k#o#p#q#r#w$k$o$r%R%S%Z%^%a%d%n%v%z&]!k^OPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yQ!q^R!scR#{!pQ!wlR#|!p!kfOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%y!klOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%y!kmOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yR$V!x!koOPQWilu|}!]!a!b!c!g!h!i!j!k!p#Y#[#^#b#f#s$P$Q$Z$_$b$q$}%X%c%x%yR#Oo",
    nodeNames: "\u26A0 LineComment BlockComment Expression ForExpression for InExpressions InExpression Name Identifier Identifier . ArithOp ArithOp ArithOp ArithOp ArithOp in IterationContext .. return IfExpression if then else QuantifiedExpression some every InExpressions InExpression satisfies Disjunction or Conjunction and Comparison CompareOp CompareOp between PositiveUnaryTest ( PositiveUnaryTests ) ArithmeticExpression InstanceOfExpression instance of Type QualifiedName VariableName BacktickIdentifier SpecialType days time duration years months date > ListType list < ContextType context ContextEntryTypes ContextEntryType FunctionType function ArgumentTypes ArgumentType PathExpression PathName ] FilterExpression [ FunctionInvocation SpecialFunctionName NamedParameters NamedParameter ParameterName PositionalParameters null NumericLiteral StringLiteral BooleanLiteral DateTimeLiteral DateTimeConstructor AtLiteral ? SimplePositiveUnaryTest Interval ParenthesizedExpression List FunctionDefinition FormalParameters FormalParameter external FunctionBody } { Context ContextEntry Key Name Identifier Expressions UnaryTests Wildcard not",
    maxTerm: 174,
    context: variableTracker,
    nodeProps: [
      ["group", -17, 4, 21, 25, 31, 33, 35, 43, 44, 70, 73, 75, 88, 89, 91, 92, 93, 100, "Expr", 49, "Expr Expr", -5, 81, 82, 83, 84, 85, "Expr Literal"],
      ["closedBy", 40, ")", 74, "]", 99, "}"],
      ["openedBy", 42, "(", 72, "[", 98, "{"]
    ],
    propSources: [feelHighlighting],
    skippedNodes: [0, 1, 2],
    repeatNodeCount: 14,
    tokenData: ".v~RvXY#iYZ$^Z[#i]^$^pq#iqr$crs$nwx(Wxy(]yz(bz{(g{|(t|}(y}!O)O!O!P)]!P!Q*g!Q![,b![!],y!]!^-O!^!_-T!_!`$i!`!a-d!b!c-n!}#O-s#P#Q-x#Q#R(o#S#T-}#o#p.l#q#r.q$f$g#i#BY#BZ#i$IS$I_#i$I|$I}$^$I}$JO$^$JT$JU#i$KV$KW#i&FU&FV#i?HT?HU#i~#nY#u~XY#iZ[#ipq#i$f$g#i#BY#BZ#i$IS$I_#i$JT$JU#i$KV$KW#i&FU&FV#i?HT?HU#i~$cO#v~~$fP!_!`$i~$nOt~~$qXOY$nYZ%^Zr$nrs&zs#O$n#O#P'R#P;'S$n;'S;=`(Q<%lO$n~%aVOr%^rs%vs#O%^#O#P%{#P;'S%^;'S;=`&t<%lO%^~%{O$j~~&ORO;'S%^;'S;=`&X;=`O%^~&[WOr%^rs%vs#O%^#O#P%{#P;'S%^;'S;=`&t;=`<%l%^<%lO%^~&wP;=`<%l%^~'RO$j~$k~~'URO;'S$n;'S;=`'_;=`O$n~'bYOY$nYZ%^Zr$nrs&zs#O$n#O#P'R#P;'S$n;'S;=`(Q;=`<%l$n<%lO$n~(TP;=`<%l$n~(]O#}~~(bOx~~(gOz~~(lP_~z{(o~(tO`~~(yO]~~)OO$P~R)TP[P!`!a)WQ)]O$_Q~)bQZ~!O!P)h!Q![)m~)mOc~~)rR$i~!Q![)m!g!h){#X#Y){~*OR{|*X}!O*X!Q![*_~*[P!Q![*_~*dP$i~!Q![*_~*lQ^~z{*r!P!Q+y~*uTOz*rz{+U{;'S*r;'S;=`+s<%lO*r~+XVOz*rz{+U{!P*r!P!Q+n!Q;'S*r;'S;=`+s<%lO*r~+sOQ~~+vP;=`<%l*r~,OSP~OY+yZ;'S+y;'S;=`,[<%lO+y~,_P;=`<%l+y~,gS$i~!O!P,s!Q![,b!g!h){#X#Y){~,vP!Q![)m~-OO$]~~-TO$t~R-[P!_QuP!_!`-_P-dOuPR-kP![QuP!_!`-_~-sO$m~~-xO!l~~-}O!j~~.QTO#S-}#S#T.a#T;'S-};'S;=`.f<%lO-}~.fO$Z~~.iP;=`<%l-}~.qO#V~~.vO#U~",
    tokenizers: [propertyIdentifiers, identifiers, insertSemicolon, 0, 1],
    topRules: { "Expression": [0, 3], "Expressions": [1, 105], "UnaryTests": [2, 106] },
    dialects: { camunda: 2657 },
    dynamicPrecedences: { "33": -1, "70": 1, "75": -1, "77": -1 },
    specialized: [{ term: 125, get: (value) => spec_identifier[value] || -1 }],
    tokenPrec: 2660
  });

  // node_modules/feelin/dist/index.js
  function parseParameterNames(fn2) {
    if (Array.isArray(fn2.$args)) {
      return fn2.$args;
    }
    const code = fn2.toString();
    const match2 = /^(?:[^(]*\s*)?\(([^)]+)?\)/.exec(code);
    if (!match2) {
      throw new Error("failed to parse params: " + code);
    }
    const [_, params] = match2;
    if (!params) {
      return [];
    }
    return params.split(",").map((p) => p.trim());
  }
  function notImplemented(thing) {
    return new Error(`not implemented: ${thing}`);
  }
  function isNotImplemented(err) {
    return /^not implemented/.test(err.message);
  }
  function has2(context, name2) {
    if (Object.prototype.hasOwnProperty.call(context, name2)) {
      return true;
    }
    for (let proto = Object.getPrototypeOf(context); proto && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
      const descriptor = Object.getOwnPropertyDescriptor(proto, name2);
      if (descriptor) {
        return typeof descriptor.get === "function";
      }
    }
    return false;
  }
  function getFromContext(name2, context) {
    if (["nil", "boolean", "number", "string"].includes(getType(context))) {
      return void 0;
    }
    if (has2(context, name2)) {
      return context[name2];
    }
    const normalizedName = normalizeContextKey(name2);
    if (has2(context, normalizedName)) {
      return context[normalizedName];
    }
    const entry = Object.entries(context).find(([key]) => normalizedName === normalizeContextKey(key));
    if (entry) {
      return entry[1];
    }
    return void 0;
  }
  function isNil2(e) {
    return e === null || e === void 0;
  }
  function isContext(e) {
    return !isNil2(e) && Object.getPrototypeOf(e) === Object.prototype;
  }
  function isDateTime(obj) {
    return DateTime.isDateTime(obj);
  }
  function isDuration(obj) {
    return Duration.isDuration(obj);
  }
  function isArray(e) {
    return Array.isArray(e);
  }
  function isBoolean(e) {
    return typeof e === "boolean";
  }
  function getType(e) {
    if (isNil2(e)) {
      return "nil";
    }
    if (isBoolean(e)) {
      return "boolean";
    }
    if (isNumber2(e)) {
      return "number";
    }
    if (isString2(e)) {
      return "string";
    }
    if (isContext(e)) {
      return "context";
    }
    if (isArray(e)) {
      return "list";
    }
    if (isDuration(e)) {
      return "duration";
    }
    if (isDateTime(e)) {
      if (e.year === 1900 && e.month === 1 && e.day === 1) {
        return "time";
      }
      if (e.hour === 0 && e.minute === 0 && e.second === 0 && e.millisecond === 0 && e.zone === FixedOffsetZone.utcInstance) {
        return "date";
      }
      return "date time";
    }
    if (e instanceof Range2) {
      return "range";
    }
    if (e instanceof FunctionWrapper) {
      return "function";
    }
    return "literal";
  }
  function isType(el, type) {
    return getType(el) === type;
  }
  function typeCast(obj, type) {
    if (isDateTime(obj)) {
      if (type === "time") {
        return obj.set({
          year: 1900,
          month: 1,
          day: 1
        });
      }
      if (type === "date") {
        return obj.setZone("utc", { keepLocalTime: true }).startOf("day");
      }
      if (type === "date time") {
        return obj;
      }
    }
    return null;
  }
  var Range2 = class {
    constructor(props) {
      Object.assign(this, props);
    }
  };
  function isNumber2(obj) {
    return typeof obj === "number";
  }
  function isString2(obj) {
    return typeof obj === "string";
  }
  function equals(a, b, strict = false) {
    if (a === null && b !== null || a !== null && b === null) {
      return false;
    }
    if (isArray(a) && a.length < 2) {
      a = a[0];
    }
    if (isArray(b) && b.length < 2) {
      b = b[0];
    }
    const aType = getType(a);
    const bType = getType(b);
    const temporalTypes = ["date time", "time", "date"];
    if (temporalTypes.includes(aType)) {
      if (!temporalTypes.includes(bType)) {
        return null;
      }
      if (aType === "time" && bType !== "time") {
        return null;
      }
      if (bType === "time" && aType !== "time") {
        return null;
      }
      if (strict || a.zone === SystemZone.instance || b.zone === SystemZone.instance) {
        return a.equals(b);
      } else {
        return a.toUTC().valueOf() === b.toUTC().valueOf();
      }
    }
    if (aType !== bType) {
      return null;
    }
    if (aType === "nil") {
      return true;
    }
    if (aType === "list") {
      if (a.length !== b.length) {
        return false;
      }
      return a.every((element, idx) => equals(element, b[idx]));
    }
    if (aType === "duration") {
      if (Math.abs(a.as("days")) > 180) {
        return Math.trunc(a.minus(b).as("months")) === 0;
      } else {
        return Math.trunc(a.minus(b).as("seconds")) === 0;
      }
    }
    if (aType === "context") {
      const aEntries = Object.entries(a);
      const bEntries = Object.entries(b);
      if (aEntries.length !== bEntries.length) {
        return false;
      }
      return aEntries.every(([key, value]) => has2(b, key) && equals(value, b[key]));
    }
    if (aType === "range") {
      return [
        [a.start, b.start],
        [a.end, b.end],
        [a["start included"], b["start included"]],
        [a["end included"], b["end included"]]
      ].every(([a2, b2]) => a2 === b2);
    }
    if (a == b) {
      return true;
    }
    return aType === bType ? false : null;
  }
  var FUNCTION_PARAMETER_MISSMATCH = {};
  var FunctionWrapper = class {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(fn2, parameterNames) {
      this.fn = fn2;
      this.parameterNames = parameterNames;
    }
    invoke(contextOrArgs) {
      let params;
      if (isArray(contextOrArgs)) {
        params = contextOrArgs;
        if (params.length > this.parameterNames.length) {
          const lastParam = this.parameterNames[this.parameterNames.length - 1];
          if (!lastParam || !lastParam.startsWith("...")) {
            return FUNCTION_PARAMETER_MISSMATCH;
          }
        }
      } else {
        if (Object.keys(contextOrArgs).some((key) => !this.parameterNames.includes(key) && !this.parameterNames.includes(`...${key}`))) {
          return FUNCTION_PARAMETER_MISSMATCH;
        }
        params = this.parameterNames.reduce((params2, name2) => {
          if (name2.startsWith("...")) {
            name2 = name2.slice(3);
            const value = contextOrArgs[name2];
            if (!value) {
              return params2;
            } else {
              return [...params2, ...isArray(value) ? value : [value]];
            }
          }
          return [...params2, contextOrArgs[name2]];
        }, []);
      }
      return this.fn.call(null, ...params);
    }
  };
  function duration(opts) {
    if (typeof opts === "number") {
      return Duration.fromMillis(opts);
    }
    return Duration.fromISO(opts);
  }
  function date(str = null, time = null, zone = null) {
    if (time) {
      if (str) {
        throw new Error("<str> and <time> provided");
      }
      return date(`1900-01-01T${time}`, null);
    }
    if (typeof str === "string") {
      if (str.startsWith("-")) {
        throw notImplemented("negative date");
      }
      if (!str.includes("T")) {
        return date(str + "T00:00:00", null, zone || FixedOffsetZone.utcInstance);
      }
      if (str.includes("@")) {
        if (zone) {
          throw new Error("<zone> already provided");
        }
        const [datePart, zonePart] = str.split("@");
        return date(datePart, null, Info.normalizeZone(zonePart));
      }
      return DateTime.fromISO(str.toUpperCase(), {
        setZone: true,
        zone
      });
    }
    return DateTime.now();
  }
  var builtins = {
    // 10.3.4.1 Conversion functions
    "number": fn(function(from, groupingSeparator, decimalSeparator) {
      if (arguments.length !== 3) {
        return null;
      }
      if (groupingSeparator) {
        from = from.split(groupingSeparator).join("");
      }
      if (decimalSeparator && decimalSeparator !== ".") {
        from = from.split(".").join("#").split(decimalSeparator).join(".");
      }
      const number2 = +from;
      if (isNaN(number2)) {
        return null;
      }
      return number2;
    }, ["string", "string?", "string?"], ["from", "grouping separator", "decimal separator"]),
    "string": fn(function(from) {
      if (from === null) {
        return null;
      }
      return toString(from);
    }, ["any"], ["from"]),
    // date(from) => date string
    // date(from) => date and time
    // date(year, month, day)
    "date": fn(function(year, month, day, from) {
      if (!from && !isNumber2(year)) {
        from = year;
        year = null;
      }
      let d;
      if (isString2(from)) {
        d = date(from);
      }
      if (isDateTime(from)) {
        d = from;
      }
      if (year) {
        if (!isNumber2(month) || !isNumber2(day)) {
          return null;
        }
        d = date().setZone("utc").set({
          year,
          month,
          day
        });
      }
      return d && ifValid(d.setZone("utc").startOf("day")) || null;
    }, ["any?", "number?", "number?", "any?"], ["year", "month", "day", "from"]),
    // date and time(from) => date time string
    // date and time(date, time)
    "date and time": fn(function(d, time, from) {
      let dt;
      if (isDateTime(d) && isDateTime(time)) {
        const dLocal = d.toLocal();
        dt = time.set({
          year: dLocal.year,
          month: dLocal.month,
          day: dLocal.day
        });
      }
      if (isString2(d)) {
        from = d;
        d = null;
      }
      if (isString2(from)) {
        dt = date(from, null, from.includes("@") ? null : SystemZone.instance);
      }
      return dt && ifValid(dt) || null;
    }, ["any?", "time?", "string?"], ["date", "time", "from"]),
    // time(from) => time string
    // time(from) => time, date and time
    // time(hour, minute, second, offset?) => ...
    "time": fn(function(hour, minute, second, offset2, from) {
      let t2;
      if (offset2) {
        throw notImplemented("time(..., offset)");
      }
      if (isString2(hour) || isDateTime(hour)) {
        from = hour;
        hour = null;
      }
      if (isString2(from) && from) {
        t2 = date(null, from);
      }
      if (isDateTime(from)) {
        t2 = from.set({
          year: 1900,
          month: 1,
          day: 1
        });
      }
      if (isNumber2(hour)) {
        if (!isNumber2(minute) || !isNumber2(second)) {
          return null;
        }
        t2 = date().set({
          hour,
          minute,
          second
        }).set({
          year: 1900,
          month: 1,
          day: 1,
          millisecond: 0
        });
      }
      return t2 && ifValid(t2) || null;
    }, ["any?", "number?", "number?", "any?", "any?"], ["hour", "minute", "second", "offset", "from"]),
    "duration": fn(function(from) {
      return ifValid(duration(from));
    }, ["string"], ["from"]),
    "years and months duration": fn(function(from, to) {
      return ifValid(to.diff(from, ["years", "months"]));
    }, ["date", "date"], ["from", "to"]),
    "@": fn(function(string2) {
      let t2;
      if (/^-?P/.test(string2)) {
        t2 = duration(string2);
      } else if (/^[\d]{1,2}:[\d]{1,2}:[\d]{1,2}/.test(string2)) {
        t2 = date(null, string2);
      } else {
        t2 = date(string2);
      }
      return t2 && ifValid(t2) || null;
    }, ["string"]),
    "now": fn(function() {
      return date();
    }, [], []),
    "today": fn(function() {
      return date().startOf("day");
    }, [], []),
    // 10.3.4.2 Boolean function
    "not": fn(function(negand) {
      return isType(negand, "boolean") ? !negand : null;
    }, ["any"], ["negand"]),
    // 10.3.4.3 String functions
    "substring": fn(function(string2, start, length) {
      const _start = start < 0 ? string2.length + start : start - 1;
      const arr = Array.from(string2);
      return (typeof length !== "undefined" ? arr.slice(_start, _start + length) : arr.slice(_start)).join("");
    }, ["string", "number", "number?"], ["string", "start position", "length"]),
    "string length": fn(function(string2) {
      return countSymbols(string2);
    }, ["string"], ["string"]),
    "upper case": fn(function(string2) {
      return string2.toUpperCase();
    }, ["string"], ["string"]),
    "lower case": fn(function(string2) {
      return string2.toLowerCase();
    }, ["string"], ["string"]),
    "substring before": fn(function(string2, match2) {
      const index = string2.indexOf(match2);
      if (index === -1) {
        return "";
      }
      return string2.substring(0, index);
    }, ["string", "string"], ["string", "match"]),
    "substring after": fn(function(string2, match2) {
      const index = string2.indexOf(match2);
      if (index === -1) {
        return "";
      }
      return string2.substring(index + match2.length);
    }, ["string", "string"], ["string", "match"]),
    "replace": fn(function(input, pattern, replacement, flags) {
      const regexp = createRegexp(pattern, flags || "", "g");
      return regexp && input.replace(regexp, replacement.replace(/\$0/g, "$$&"));
    }, ["string", "string", "string", "string?"], ["input", "pattern", "replacement", "flags"]),
    "contains": fn(function(string2, match2) {
      return string2.includes(match2);
    }, ["string", "string"], ["string", "match"]),
    "matches": fn(function(input, pattern, flags) {
      const regexp = createRegexp(pattern, flags || "", "");
      return regexp && regexp.test(input);
    }, ["string", "string", "string?"], ["input", "pattern", "flags"]),
    "starts with": fn(function(string2, match2) {
      return string2.startsWith(match2);
    }, ["string", "string"], ["string", "match"]),
    "ends with": fn(function(string2, match2) {
      return string2.endsWith(match2);
    }, ["string", "string"], ["string", "match"]),
    "split": fn(function(string2, delimiter) {
      const regexp = createRegexp(delimiter, "", "");
      return regexp && string2.split(regexp);
    }, ["string", "string"], ["string", "delimiter"]),
    "string join": fn(function(list, delimiter) {
      if (list.some((e) => !isString2(e) && e !== null)) {
        return null;
      }
      return list.filter((l2) => l2 !== null).join(delimiter || "");
    }, ["list", "string?"], ["list", "delimiter"]),
    // 10.3.4.4 List functions
    "list contains": fn(function(list, element) {
      return list.some((el) => matches(el, element));
    }, ["list", "any?"], ["list", "element"]),
    // list replace(list, position, newItem)
    // list replace(list, match, newItem)
    "list replace": fn(function(list, position, newItem, match2) {
      const matcher = position || match2;
      if (!["number", "function"].includes(getType(matcher))) {
        return null;
      }
      return listReplace(list, position || match2, newItem);
    }, ["list", "any?", "any", "function?"], ["list", "position", "newItem", "match"]),
    "count": fn(function(list) {
      return list.length;
    }, ["list"], ["list"]),
    "min": listFn(function(...list) {
      return list.reduce((min, el) => min === null ? el : Math.min(min, el), null);
    }, "number", ["...list"]),
    "max": listFn(function(...list) {
      return list.reduce((max, el) => max === null ? el : Math.max(max, el), null);
    }, "number", ["...list"]),
    "sum": listFn(function(...list) {
      return sum(list);
    }, "number", ["...list"]),
    "mean": listFn(function(...list) {
      const s2 = sum(list);
      return s2 === null ? s2 : s2 / list.length;
    }, "number", ["...list"]),
    "all": listFn(function(...list) {
      let nonBool = false;
      for (const o of list) {
        if (o === false) {
          return false;
        }
        if (typeof o !== "boolean") {
          nonBool = true;
        }
      }
      return nonBool ? null : true;
    }, "any?", ["...list"]),
    "any": listFn(function(...list) {
      let nonBool = false;
      for (const o of list) {
        if (o === true) {
          return true;
        }
        if (typeof o !== "boolean") {
          nonBool = true;
        }
      }
      return nonBool ? null : false;
    }, "any?", ["...list"]),
    "sublist": fn(function(list, start, length) {
      const _start = start < 0 ? list.length + start : start - 1;
      return typeof length !== "undefined" ? list.slice(_start, _start + length) : list.slice(_start);
    }, ["list", "number", "number?"], ["list", "start", "length"]),
    "append": fn(function(list, ...items) {
      return list.concat(items);
    }, ["list", "any?"], ["list", "...item"]),
    "concatenate": fn(function(...list) {
      return list.reduce((result, arg) => {
        return result.concat(arg);
      }, []);
    }, ["any"], ["...list"]),
    "insert before": fn(function(list, position, newItem) {
      return list.slice(0, position - 1).concat([newItem], list.slice(position - 1));
    }, ["list", "number", "any?"], ["list", "position", "newItem"]),
    "remove": fn(function(list, position) {
      return list.slice(0, position - 1).concat(list.slice(position));
    }, ["list", "number"], ["list", "position"]),
    "reverse": fn(function(list) {
      return list.slice().reverse();
    }, ["list"], ["list"]),
    "index of": fn(function(list, match2) {
      return list.reduce(function(result, element, index) {
        if (matches(element, match2)) {
          result.push(index + 1);
        }
        return result;
      }, []);
    }, ["list", "any"], ["list", "match"]),
    "union": listFn(function(...lists) {
      return lists.reduce((result, list) => {
        return list.reduce((result2, e) => {
          if (!result2.some((r) => equals(e, r))) {
            result2.push(e);
          }
          return result2;
        }, result);
      }, []);
    }, "list", ["...list"]),
    "distinct values": fn(function(list) {
      return list.reduce((result, e) => {
        if (!result.some((r) => equals(e, r))) {
          result.push(e);
        }
        return result;
      }, []);
    }, ["list"], ["list"]),
    "flatten": fn(function(list) {
      return flatten(list);
    }, ["list"], ["list"]),
    "product": listFn(function(...list) {
      if (list.length === 0) {
        return null;
      }
      return list.reduce((result, n2) => {
        return result * n2;
      }, 1);
    }, "number", ["...list"]),
    "median": listFn(function(...list) {
      if (list.length === 0) {
        return null;
      }
      return median(list);
    }, "number", ["...list"]),
    "stddev": listFn(function(...list) {
      if (list.length < 2) {
        return null;
      }
      return stddev(list);
    }, "number", ["...list"]),
    "mode": listFn(function(...list) {
      return mode(list);
    }, "number", ["...list"]),
    // 10.3.4.5 Numeric functions
    "decimal": fn(function(n2, scale) {
      if (n2 === null || scale === null)
        return null;
      return offsetted(bankersRound, n2, scale);
    }, ["number", "number"], ["n", "scale"]),
    "floor": fn(function(n2, scale = 0) {
      if (scale === null) {
        return null;
      }
      const adjust = Math.pow(10, scale);
      return Math.floor(n2 * adjust) / adjust;
    }, ["number", "number?"], ["n", "scale"]),
    "ceiling": fn(function(n2, scale = 0) {
      if (scale === null) {
        return null;
      }
      const adjust = Math.pow(10, scale);
      return Math.ceil(n2 * adjust) / adjust;
    }, ["number", "number?"], ["n", "scale"]),
    "abs": fn(function(n2) {
      if (typeof n2 !== "number") {
        return null;
      }
      return Math.abs(n2);
    }, ["number"], ["n"]),
    "round up": fn(function(n2, scale) {
      if (n2 === null || scale === null)
        return null;
      return n2 > 0 ? offsetted(Math.ceil, n2, scale) : offsetted(Math.floor, n2, scale);
    }, ["number", "number"], ["n", "scale"]),
    "round down": fn(function(n2, scale) {
      if (n2 === null || scale === null)
        return null;
      return n2 > 0 ? offsetted(Math.floor, n2, scale) : offsetted(Math.ceil, n2, scale);
    }, ["number", "number"], ["n", "scale"]),
    "round half up": fn(function(n2, scale) {
      if (n2 === null || scale === null)
        return null;
      const remainder = n2 * Math.pow(10, scale) % 1;
      if (Math.abs(remainder) === 0.5) {
        return offsetted(n2 > 0 ? Math.ceil : Math.floor, n2, scale);
      }
      return offsetted(Math.round, n2, scale);
    }, ["number", "number"], ["n", "scale"]),
    "round half down": fn(function(n2, scale) {
      if (n2 === null || scale === null)
        return null;
      const remainder = n2 * Math.pow(10, scale) % 1;
      if (Math.abs(remainder) === 0.5) {
        return offsetted(n2 > 0 ? Math.floor : Math.ceil, n2, scale);
      }
      return offsetted(Math.round, n2, scale);
    }, ["number", "number"], ["n", "scale"]),
    "modulo": fn(function(dividend, divisor) {
      if (!divisor) {
        return null;
      }
      const adjust = 1e9;
      return Math.round((dividend % divisor + divisor) % divisor * adjust) / adjust;
    }, ["number", "number"], ["dividend", "divisor"]),
    "sqrt": fn(function(number2) {
      if (number2 < 0) {
        return null;
      }
      return Math.sqrt(number2);
    }, ["number"], ["number"]),
    "log": fn(function(number2) {
      if (number2 <= 0) {
        return null;
      }
      return Math.log(number2);
    }, ["number"], ["number"]),
    "exp": fn(function(number2) {
      return Math.exp(number2);
    }, ["number"], ["number"]),
    "odd": fn(function(number2) {
      return Math.abs(number2) % 2 === 1;
    }, ["number"], ["number"]),
    "even": fn(function(number2) {
      return Math.abs(number2) % 2 === 0;
    }, ["number"], ["number"]),
    // 10.3.4.6 Date and time functions
    "is": fn(function(value1, value2) {
      if (typeof value1 === "undefined" || typeof value2 === "undefined") {
        return false;
      }
      return equals(value1, value2, true);
    }, ["any?", "any?"], ["value1", "value2"]),
    // 10.3.4.7 Range Functions
    "before": fn(function(a, b) {
      return before(a, b);
    }, ["any", "any"], ["a", "b"]),
    "after": fn(function(a, b) {
      return before(b, a);
    }, ["any", "any"], ["a", "b"]),
    "meets": fn(function(range1, range2) {
      return meetsRange(range1, range2);
    }, ["range", "range"], ["range1", "range2"]),
    "met by": fn(function(range1, range2) {
      return meetsRange(range2, range1);
    }, ["range", "range"], ["range1", "range2"]),
    "overlaps": fn(function(range1, range2) {
      return !before(range1, range2) && !before(range2, range1);
    }, ["range", "range"], ["range1", "range2"]),
    "overlaps before": fn(function() {
      throw notImplemented("overlaps before");
    }, ["any?"]),
    "overlaps after": fn(function() {
      throw notImplemented("overlaps after");
    }, ["any?"]),
    "finishes": fn(function() {
      throw notImplemented("finishes");
    }, ["any?"]),
    "finished by": fn(function() {
      throw notImplemented("finished by");
    }, ["any?"]),
    "includes": fn(function(range, value) {
      return includesRange(range, value);
    }, ["range", "any"], ["range", "value"]),
    "during": fn(function() {
      throw notImplemented("during");
    }, ["any?"]),
    "starts": fn(function() {
      throw notImplemented("starts");
    }, ["any?"]),
    "started by": fn(function() {
      throw notImplemented("started by");
    }, ["any?"]),
    "coincides": fn(function() {
      throw notImplemented("coincides");
    }, ["any?"]),
    // 10.3.4.8 Temporal built-in functions
    "day of year": fn(function(date2) {
      return date2.ordinal;
    }, ["date time"], ["date"]),
    "day of week": fn(function(date2) {
      return date2.weekdayLong;
    }, ["date time"], ["date"]),
    "month of year": fn(function(date2) {
      return date2.monthLong;
    }, ["date time"], ["date"]),
    "week of year": fn(function(date2) {
      return date2.weekNumber;
    }, ["date time"], ["date"]),
    // 10.3.4.9 Sort
    "sort": fn(function(list, precedes) {
      return Array.from(list).sort((a, b) => precedes.invoke([a, b]) ? -1 : 1);
    }, ["list", "function"], ["list", "precedes"]),
    // 10.3.4.10 Context function
    "get value": fn(function(m, key) {
      const value = getFromContext(key, m);
      return value != void 0 ? value : null;
    }, ["context", "string"], ["m", "key"]),
    "get entries": fn(function(m) {
      if (arguments.length !== 1) {
        return null;
      }
      if (Array.isArray(m)) {
        return null;
      }
      return Object.entries(m).map(([key, value]) => ({ key, value }));
    }, ["context"], ["m"]),
    "context": listFn(function(...entries) {
      const context = entries.reduce((context2, entry) => {
        if (context2 === FALSE || !["key", "value"].every((e) => e in entry)) {
          return FALSE;
        }
        const key = entry.key;
        if (key === null) {
          return FALSE;
        }
        if (has2(context2, key)) {
          return FALSE;
        }
        return Object.assign(Object.assign({}, context2), { [entry.key]: entry.value });
      }, {});
      if (context === FALSE) {
        return null;
      }
      return context;
    }, "context", ["...entries"]),
    "context merge": listFn(function(...contexts) {
      return Object.assign({}, ...contexts);
    }, "context", ["...contexts"]),
    "context put": fn(function(context, keys, value, key) {
      if (typeof keys === "undefined" && typeof key === "undefined") {
        return null;
      }
      return contextPut(context, keys || [key], value);
    }, ["context", "list?", "any", "string?"], ["context", "keys", "value", "key"])
  };
  function contextPut(context, keys, value) {
    const [key, ...remainingKeys] = keys;
    if (getType(key) !== "string") {
      return null;
    }
    if (getType(context) === "nil") {
      return null;
    }
    if (remainingKeys.length) {
      value = contextPut(context[key], remainingKeys, value);
      if (value === null) {
        return null;
      }
    }
    return Object.assign(Object.assign({}, context), { [key]: value });
  }
  function matches(a, b) {
    return a === b;
  }
  var FALSE = {};
  function createArgTester(arg) {
    const optional = arg.endsWith("?");
    const type = optional ? arg.substring(0, arg.length - 1) : arg;
    return function(obj) {
      const arr = Array.isArray(obj);
      if (type === "list") {
        if (arr || optional && typeof obj === "undefined") {
          return obj;
        } else {
          return obj === null ? FALSE : [obj];
        }
      }
      if (type !== "any" && arr && obj.length === 1) {
        obj = obj[0];
      }
      const objType = getType(obj);
      if (type === "any" || type === objType) {
        return optional ? obj : typeof obj !== "undefined" ? obj : FALSE;
      }
      if (objType === "nil") {
        return optional ? obj : FALSE;
      }
      return typeCast(obj, type) || FALSE;
    };
  }
  function createArgsValidator(argDefinitions) {
    const tests = argDefinitions.map(createArgTester);
    return function(args) {
      while (args.length < argDefinitions.length) {
        args.push(void 0);
      }
      return args.reduce((result, arg, index) => {
        if (result === false) {
          return result;
        }
        const test = tests[index];
        const conversion = test ? test(arg) : arg;
        if (conversion === FALSE) {
          return false;
        }
        result.push(conversion);
        return result;
      }, []);
    };
  }
  function listFn(fnDefinition, type, parameterNames = null) {
    const tester = createArgTester(type);
    const wrappedFn = function(...args) {
      if (args.length === 0) {
        return null;
      }
      if (Array.isArray(args[0]) && args.length === 1) {
        args = args[0];
      }
      if (!args.every((arg) => tester(arg) !== FALSE)) {
        return null;
      }
      return fnDefinition(...args);
    };
    wrappedFn.$args = parameterNames || parseParameterNames(fnDefinition);
    return wrappedFn;
  }
  function fn(fnDefinition, argDefinitions, parameterNames = null) {
    const checkArgs = createArgsValidator(argDefinitions);
    parameterNames = parameterNames || parseParameterNames(fnDefinition);
    const wrappedFn = function(...args) {
      const convertedArgs = checkArgs(args);
      if (!convertedArgs) {
        return null;
      }
      return fnDefinition(...convertedArgs);
    };
    wrappedFn.$args = parameterNames;
    return wrappedFn;
  }
  function meetsRange(a, b) {
    return [
      a.end === b.start,
      a["end included"] === true,
      b["start included"] === true
    ].every((v) => v);
  }
  function before(a, b) {
    if (a instanceof Range2 && b instanceof Range2) {
      return a.end < b.start || (!a["end included"] || !b["start included"]) && a.end == b.start;
    }
    if (a instanceof Range2) {
      return a.end < b || !a["end included"] && a.end === b;
    }
    if (b instanceof Range2) {
      return b.start > a || !b["start included"] && b.start === a;
    }
    return a < b;
  }
  function includesRange(container, value) {
    if (!(container instanceof Range2)) {
      return false;
    }
    if (value instanceof Range2) {
      const startOk = container.start < value.start || container.start === value.start && (container["start included"] || !value["start included"]);
      const endOk = container.end > value.end || container.end === value.end && (container["end included"] || !value["end included"]);
      return startOk && endOk;
    }
    const afterStart = value > container.start || value === container.start && container["start included"];
    const beforeEnd = value < container.end || value === container.end && container["end included"];
    return afterStart && beforeEnd;
  }
  function sum(list) {
    return list.reduce((sum2, el) => sum2 === null ? el : sum2 + el, null);
  }
  function flatten([x, ...xs]) {
    return x !== void 0 ? [...Array.isArray(x) ? flatten(x) : [x], ...flatten(xs)] : [];
  }
  function toKeyString(key) {
    if (typeof key === "string" && /\W/.test(key)) {
      return toString(key, true);
    }
    return key;
  }
  function toDeepString(obj) {
    return toString(obj, true);
  }
  function escapeStr(str) {
    return str.replace(/("|\\)/g, "\\$1");
  }
  function toString(obj, wrap2 = false) {
    var _a, _b, _c, _d;
    const type = getType(obj);
    if (type === "nil") {
      return "null";
    }
    if (type === "string") {
      return wrap2 ? `"${escapeStr(obj)}"` : obj;
    }
    if (type === "boolean" || type === "number") {
      return String(obj);
    }
    if (type === "list") {
      return "[" + obj.map(toDeepString).join(", ") + "]";
    }
    if (type === "context") {
      return "{" + Object.entries(obj).map(([key, value]) => {
        return toKeyString(key) + ": " + toDeepString(value);
      }).join(", ") + "}";
    }
    if (type === "duration") {
      return obj.shiftTo("years", "months", "days", "hours", "minutes", "seconds").normalize().toISO();
    }
    if (type === "date time") {
      if (obj.zone === SystemZone.instance) {
        return obj.toISO({ suppressMilliseconds: true, includeOffset: false });
      }
      if ((_a = obj.zone) === null || _a === void 0 ? void 0 : _a.zoneName) {
        return obj.toISO({ suppressMilliseconds: true, includeOffset: false }) + "@" + ((_b = obj.zone) === null || _b === void 0 ? void 0 : _b.zoneName);
      }
      return obj.toISO({ suppressMilliseconds: true });
    }
    if (type === "date") {
      return obj.toISODate();
    }
    if (type === "range") {
      return "<range>";
    }
    if (type === "time") {
      if (obj.zone === SystemZone.instance) {
        return obj.toISOTime({ suppressMilliseconds: true, includeOffset: false });
      }
      if ((_c = obj.zone) === null || _c === void 0 ? void 0 : _c.zoneName) {
        return obj.toISOTime({ suppressMilliseconds: true, includeOffset: false }) + "@" + ((_d = obj.zone) === null || _d === void 0 ? void 0 : _d.zoneName);
      }
      return obj.toISOTime({ suppressMilliseconds: true });
    }
    if (type === "function") {
      return "<function>";
    }
    throw notImplemented("string(" + type + ")");
  }
  function countSymbols(str) {
    return str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length;
  }
  function offsetted(func, n2, scale) {
    const result = func(n2 * Math.pow(10, scale)) / Math.pow(10, scale);
    return isNaN(result) ? n2 : result;
  }
  function bankersRound(n2) {
    const floored = Math.floor(n2);
    const decimalPart = n2 - floored;
    if (decimalPart === 0.5) {
      return floored % 2 === 0 ? floored : floored + 1;
    }
    return Math.round(n2);
  }
  function stddev(array) {
    const n2 = array.length;
    const mean = array.reduce((a, b) => a + b) / n2;
    return Math.sqrt(array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / (n2 - 1));
  }
  function listReplace(list, matcher, newItem) {
    if (isNumber2(matcher)) {
      return [...list.slice(0, matcher - 1), newItem, ...list.slice(matcher)];
    }
    return list.map((item, _idx) => {
      if (matcher.invoke([item, newItem])) {
        return newItem;
      } else {
        return item;
      }
    });
  }
  function median(array) {
    const n2 = array.length;
    const sorted = array.slice().sort();
    const mid = n2 / 2 - 1;
    const index = Math.ceil(mid);
    if (mid === index) {
      return (sorted[index] + sorted[index + 1]) / 2;
    }
    return sorted[index];
  }
  function mode(array) {
    if (array.length < 2) {
      return array;
    }
    const buckets = {};
    for (const n2 of array) {
      buckets[n2] = (buckets[n2] || 0) + 1;
    }
    const sorted = Object.entries(buckets).sort((a, b) => b[1] - a[1]);
    return sorted.filter((s2) => s2[1] === sorted[0][1]).map((e) => +e[0]);
  }
  function ifValid(o) {
    return o.isValid ? o : null;
  }
  function buildFlags(flags, defaultFlags) {
    const unsupportedFlags = flags.replace(/[smix]/g, "");
    if (unsupportedFlags) {
      throw new Error("illegal flags: " + unsupportedFlags);
    }
    if (/x/.test(flags)) {
      throw notImplemented("matches <x> flag");
    }
    return flags + defaultFlags;
  }
  function createRegexp(pattern, flags, defaultFlags = "") {
    try {
      return new RegExp(pattern, "u" + buildFlags(flags, defaultFlags));
    } catch (_err) {
      if (isNotImplemented(_err)) {
        throw _err;
      }
    }
    return null;
  }
  function parseExpression(expression, context = {}, dialect) {
    return parser.configure({
      top: "Expression",
      contextTracker: trackVariables(context),
      dialect
    }).parse(expression);
  }
  function parseUnaryTests(expression, context = {}, dialect) {
    return parser.configure({
      top: "UnaryTests",
      contextTracker: trackVariables(context),
      dialect
    }).parse(expression);
  }
  var SyntaxError2 = class extends Error {
    constructor(message, details) {
      super(message);
      Object.assign(this, details);
    }
  };
  function formatDetails(template, values) {
    return Object.keys(values).reduce((message, key) => {
      return message.replace(`{${key}}`, `'${formatValue(values[key])}'`);
    }, template);
  }
  var InterpreterContext = class {
    constructor() {
      this.warnings = [];
    }
    addWarning(node, type, details) {
      this.warnings.push({
        type,
        message: formatDetails(details.template, details.values),
        details,
        position: node.position
      });
    }
    getWarnings() {
      return this.warnings;
    }
  };
  var Interpreter = class {
    _buildExecutionTree(tree, input, interpreterContext) {
      const root = {
        args: [],
        node: {
          name: "__ROOT",
          input,
          position: {
            from: 0,
            to: input.length
          }
        }
      };
      const stack = [root];
      tree.iterate({
        enter(nodeRef) {
          const { isError, isSkipped } = nodeRef.type;
          if (isError) {
            throw lintError(input, nodeRef);
          }
          if (isSkipped) {
            return false;
          }
          const { from, to, name: name2 } = nodeRef;
          stack.push({
            args: [],
            node: {
              name: name2,
              input: input.slice(from, to),
              position: {
                from,
                to
              }
            }
          });
        },
        leave(nodeRef) {
          if (nodeRef.type.isSkipped) {
            return;
          }
          const { node, args } = stack.pop();
          const parent = stack[stack.length - 1];
          const expr = evalNode(node, args, interpreterContext);
          parent.args.push(expr);
        }
      });
      return {
        root: root.args[root.args.length - 1]
      };
    }
    evaluate(expression, evalContext, dialect, interpreterContext) {
      const parseTree = parseExpression(expression, evalContext, dialect);
      const { root } = this._buildExecutionTree(parseTree, expression, interpreterContext);
      return {
        parseTree,
        root
      };
    }
    unaryTest(expression, evalContext, dialect, interpreterContext) {
      const parseTree = parseUnaryTests(expression, evalContext, dialect);
      const { root } = this._buildExecutionTree(parseTree, expression, interpreterContext);
      return {
        parseTree,
        root
      };
    }
  };
  var interpreter = new Interpreter();
  function unaryTest(expression, evalContext = {}, dialect) {
    const interpreterContext = new InterpreterContext();
    const value = evalContext["?"] !== void 0 ? evalContext["?"] : null;
    const { root } = interpreter.unaryTest(expression, evalContext, dialect, interpreterContext);
    const test = root(evalContext);
    const testResult = test(value);
    return {
      value: testResult,
      warnings: interpreterContext.getWarnings()
    };
  }
  function evaluate(expression, evalContext = {}, dialect) {
    const interpreterContext = new InterpreterContext();
    const { root } = interpreter.evaluate(expression, evalContext, dialect, interpreterContext);
    const result = root(evalContext);
    return {
      value: result,
      warnings: interpreterContext.getWarnings()
    };
  }
  function evalNode(node, args, interpreterContext) {
    switch (node.name) {
      case "ArithOp":
        return (context) => {
          const nullable = (op, opName, types = ["number"]) => (a, b) => {
            const left = a(context);
            const right = b(context);
            if (isArray(left) || isArray(right)) {
              interpreterContext.addWarning(node, "INVALID_TYPE", {
                template: `Can't ${opName} {right} to {left}`,
                values: {
                  left,
                  right
                }
              });
              return null;
            }
            const leftType = getType(left);
            const rightType = getType(right);
            const temporal = ["date", "time", "date time", "duration"];
            if (temporal.includes(leftType)) {
              if (!temporal.includes(rightType)) {
                interpreterContext.addWarning(node, "INVALID_TYPE", {
                  template: `Can't ${opName} {right} to {left}`,
                  values: {
                    left,
                    right
                  }
                });
                return null;
              }
            } else if (leftType !== rightType || !types.includes(leftType)) {
              interpreterContext.addWarning(node, "INVALID_TYPE", {
                template: `Can't ${opName} {right} to {left}`,
                values: {
                  left,
                  right
                }
              });
              return null;
            }
            return op(left, right);
          };
          switch (node.input) {
            case "+":
              return nullable((a, b) => {
                if (isDuration(a) && !isDuration(b)) {
                  const tmp = a;
                  a = b;
                  b = tmp;
                }
                if (isType(a, "time") && isDuration(b)) {
                  return a.plus(b).set({
                    year: 1900,
                    month: 1,
                    day: 1
                  });
                } else if (isDateTime(a) && isDateTime(b)) {
                  return null;
                } else if (isDateTime(a) && isDuration(b)) {
                  return a.plus(b);
                } else if (isDuration(a) && isDuration(b)) {
                  return a.plus(b);
                }
                return a + b;
              }, "add", ["string", "number", "date", "time", "duration", "date time"]);
            case "-":
              return nullable((a, b) => {
                if (isType(a, "time") && isDuration(b)) {
                  return a.minus(b).set({
                    year: 1900,
                    month: 1,
                    day: 1
                  });
                } else if (isDateTime(a) && isDateTime(b)) {
                  return a.diff(b);
                } else if (isDateTime(a) && isDuration(b)) {
                  return a.minus(b);
                } else if (isDuration(a) && isDuration(b)) {
                  return a.minus(b);
                }
                return a - b;
              }, "subtract", ["number", "date", "time", "duration", "date time"]);
            case "*":
              return nullable((a, b) => a * b, "multiply", ["number"]);
            case "/":
              return nullable((a, b) => !b ? null : a / b, "divide", ["number"]);
            case "**":
            case "^":
              return nullable((a, b) => Math.pow(a, b), "exponentiate", ["number"]);
          }
        };
      case "CompareOp":
        return tag(() => {
          switch (node.input) {
            case ">":
              return (b) => createRange(b, null, false, false);
            case ">=":
              return (b) => createRange(b, null, true, false);
            case "<":
              return (b) => createRange(null, b, false, false);
            case "<=":
              return (b) => createRange(null, b, false, true);
            case "=":
              return (b) => (a) => equals(a, b);
            case "!=":
              return (b) => (a) => !equals(a, b);
          }
        }, "test");
      case "BacktickIdentifier":
        return node.input.replace(/`/g, "");
      case "Wildcard":
        return (_context) => true;
      case "null":
        return tag((_context) => {
          return null;
        }, "nil");
      case "Disjunction":
        return tag((context) => {
          const left = args[0](context);
          const right = args[2](context);
          const matrix = [
            [true, true, true],
            [true, false, true],
            [true, null, true],
            [false, true, true],
            [false, false, false],
            [false, null, null],
            [null, true, true],
            [null, false, null],
            [null, null, null]
          ];
          const a = typeof left === "boolean" ? left : null;
          const b = typeof right === "boolean" ? right : null;
          return matrix.find((el) => el[0] === a && el[1] === b)[2];
        }, "test");
      case "Conjunction":
        return tag((context) => {
          const left = args[0](context);
          const right = args[2](context);
          const matrix = [
            [true, true, true],
            [true, false, false],
            [true, null, null],
            [false, true, false],
            [false, false, false],
            [false, null, false],
            [null, true, null],
            [null, false, false],
            [null, null, null]
          ];
          const a = typeof left === "boolean" ? left : null;
          const b = typeof right === "boolean" ? right : null;
          return matrix.find((el) => el[0] === a && el[1] === b)[2];
        }, "test");
      case "Context":
        return (context) => {
          return args.slice(1, -1).reduce((obj, arg) => {
            const [key, value] = arg(Object.assign(Object.assign({}, context), obj));
            return Object.assign(Object.assign({}, obj), { [key]: value });
          }, {});
        };
      case "FunctionBody":
        return args[0];
      case "FormalParameters":
        return args;
      case "FormalParameter":
        return args[0];
      case "ParameterName":
        return args.join(" ");
      case "FunctionDefinition":
        return (context) => {
          const parameterNames = args[2];
          const fnBody = args[4];
          return wrapFunction((...args2) => {
            const fnContext = parameterNames.reduce((context2, name2, idx) => {
              context2[name2] = args2[idx];
              return context2;
            }, Object.assign({}, context));
            return fnBody(fnContext);
          }, parameterNames);
        };
      case "ContextEntry":
        return (context) => {
          const key = typeof args[0] === "function" ? args[0](context) : args[0];
          const value = args[1](context);
          return [key, value];
        };
      case "Key":
        return args[0];
      case "Identifier":
        return node.input;
      case "SpecialFunctionName":
        return (context) => getBuiltin(node.input);
      // preserve spaces in name, but compact multiple
      // spaces into one (token)
      case "Name":
        return node.input.replace(/\s{2,}/g, " ");
      case "PathName":
        return tag((context) => {
          const name2 = args.join(" ");
          const contextValue = getFromContext(name2, context);
          if (typeof contextValue !== "undefined") {
            return contextValue;
          }
          if (isContext(context)) {
            interpreterContext.addWarning(node, "NO_CONTEXT_ENTRY_FOUND", {
              template: `Key '${name2}' not found in {target}`,
              values: {
                target: context
              }
            });
          } else {
            interpreterContext.addWarning(node, "NO_PROPERTY_FOUND", {
              template: `Property '${name2}' not found in {target}`,
              values: {
                target: context
              }
            });
          }
          return null;
        }, "any");
      case "VariableName":
        return tag((context) => {
          const name2 = args.join(" ");
          const contextValue = getFromContext(name2, context);
          if (typeof contextValue !== "undefined") {
            return contextValue;
          }
          const builtin = getBuiltin(name2);
          if (builtin) {
            return builtin;
          }
          interpreterContext.addWarning(node, "NO_VARIABLE_FOUND", {
            template: `Variable '${name2}' not found`,
            values: {}
          });
          return null;
        }, "any");
      case "QualifiedName":
        return (context) => {
          return args.reduce((context2, arg) => arg(context2), context);
        };
      case "?":
        return (context) => getFromContext("?", context);
      // expression
      // expression ".." expression
      case "IterationContext":
        return (context) => {
          const a = args[0](context);
          const b = args[2] && args[2](context);
          return b ? createRange(a, b) : a;
        };
      case "Type":
        return args[0];
      // (x in [ [1,2], [3,4] ]), (y in x)
      case "InExpressions":
        return (context) => {
          const isValidContexts = (contexts) => {
            if (contexts === null || contexts.some((arr) => getType(arr) === "nil")) {
              return false;
            }
            return true;
          };
          const join = (aContexts, bContextProducer) => {
            return [].concat(...aContexts.map((aContext) => {
              const bContexts = bContextProducer(Object.assign(Object.assign({}, context), aContext));
              if (!isValidContexts(bContexts)) {
                return null;
              }
              return bContexts.map((bContext) => {
                return Object.assign(Object.assign({}, aContext), bContext);
              });
            }));
          };
          const cartesian = (aContexts, bContextProducer, ...otherContextProducers) => {
            if (!isValidContexts(aContexts)) {
              return null;
            }
            if (!bContextProducer) {
              return aContexts;
            }
            return cartesian(join(aContexts, bContextProducer), ...otherContextProducers);
          };
          const cartesianProduct = (contextProducers) => {
            const [aContextProducer, ...otherContextProducers] = contextProducers;
            const aContexts = aContextProducer(context);
            return cartesian(aContexts, ...otherContextProducers);
          };
          const product = cartesianProduct(args);
          return product && product.map((p) => {
            return Object.assign(Object.assign({}, context), p);
          });
        };
      // Name kw<"in"> Expr
      case "InExpression":
        return (context) => {
          return extractValue(context, args[0], args[2]);
        };
      case "SpecialType":
        throw notImplemented("SpecialType");
      case "InstanceOfExpression":
        return tag((context) => {
          const a = args[0](context);
          const b = args[3](context);
          return a instanceof b;
        }, "test");
      case "every":
        return tag((context) => {
          return (_contexts, _condition) => {
            const contexts = _contexts(context);
            if (getType(contexts) !== "list") {
              return contexts;
            }
            return contexts.every((ctx) => isTruthy(_condition(ctx)));
          };
        }, "test");
      case "some":
        return tag((context) => {
          return (_contexts, _condition) => {
            const contexts = _contexts(context);
            if (getType(contexts) !== "list") {
              return contexts;
            }
            return contexts.some((ctx) => isTruthy(_condition(ctx)));
          };
        }, "test");
      case "NumericLiteral":
        return tag((_context) => node.input.includes(".") ? parseFloat(node.input) : parseInt(node.input), "number");
      case "BooleanLiteral":
        return tag((_context) => node.input === "true" ? true : false, "boolean");
      case "StringLiteral":
        return tag((_context) => parseString(node.input), "string");
      case "PositionalParameters":
        return (context) => args.map((arg) => arg(context));
      case "NamedParameter":
        return (context) => {
          const name2 = args[0];
          const value = args[1](context);
          return [name2, value];
        };
      case "NamedParameters":
        return (context) => args.reduce((args2, arg) => {
          const [name2, value] = arg(context);
          args2[name2] = value;
          return args2;
        }, {});
      case "DateTimeConstructor":
        return (context) => {
          return getBuiltin(node.input);
        };
      case "DateTimeLiteral":
        return tag((context) => {
          if (args.length === 1) {
            return args[0](context);
          } else {
            const target = args[0](context);
            const wrappedFn = wrapFunction(target);
            if (!wrappedFn) {
              interpreterContext.addWarning(node, "NO_FUNCTION_FOUND", {
                template: "Cannot invoke {target}",
                values: {
                  target
                }
              });
              return null;
            }
            const contextOrArgs = args[2](context);
            const result = wrappedFn.invoke(contextOrArgs);
            if (result === FUNCTION_PARAMETER_MISSMATCH) {
              interpreterContext.addWarning(node, "FUNCTION_INVOCATION_FAILURE", {
                template: "Cannot invoke {target} with parameters {params}",
                values: {
                  target: wrappedFn,
                  params: contextOrArgs
                }
              });
              return null;
            }
            return result;
          }
        }, "date");
      case "AtLiteral":
        return tag((context) => {
          const wrappedFn = wrapFunction(getBuiltin("@"));
          if (!wrappedFn) {
            interpreterContext.addWarning(node, "NO_FUNCTION_FOUND", {
              template: "Cannot invoke '@'",
              values: {}
            });
            return null;
          }
          return wrappedFn.invoke([args[0](context)]);
        }, "date");
      case "FunctionInvocation":
        return tag((context) => {
          const target = args[0](context);
          const wrappedFn = wrapFunction(target);
          if (!wrappedFn) {
            interpreterContext.addWarning(node, "NO_FUNCTION_FOUND", {
              template: "Cannot invoke {target}",
              values: {
                target
              }
            });
            return null;
          }
          const contextOrArgs = args[2](context);
          const result = wrappedFn.invoke(contextOrArgs);
          if (result === FUNCTION_PARAMETER_MISSMATCH) {
            interpreterContext.addWarning(node, "FUNCTION_INVOCATION_FAILURE", {
              template: "Cannot invoke {target} with parameters {params}",
              values: {
                target: wrappedFn,
                params: contextOrArgs
              }
            });
            return null;
          }
          return result;
        }, "any");
      case "IfExpression":
        return (function() {
          const ifCondition = args[1];
          const thenValue = args[3];
          const elseValue = args[5];
          const type = coalecenseTypes(thenValue, elseValue);
          return tag((context) => {
            if (isTruthy(ifCondition(context))) {
              return thenValue(context);
            } else {
              return elseValue ? elseValue(context) : null;
            }
          }, type);
        })();
      case "Parameters":
        return args.length === 3 ? args[1] : (_context) => [];
      case "Comparison":
        return tag((context) => {
          const operator2 = args[1];
          if (operator2 === "in") {
            return compareIn(args[0](context), (args[3] || args[2])(context));
          }
          if (operator2 === "between") {
            const start = args[2](context);
            const end = args[4](context);
            if (start === null || end === null) {
              return null;
            }
            return createRange(start, end).includes(args[0](context));
          }
          const left = args[0](context);
          const right = args[2](context);
          const test = operator2()(right);
          return compareValue(test, left);
        }, "test");
      case "QuantifiedExpression":
        return tag((context) => {
          const testFn = args[0](context);
          const contexts = args[1];
          const condition = args[3];
          return testFn(contexts, condition);
        }, "test");
      // DMN 1.2 - 10.3.2.14
      // kw<"for"> commaSep1<InExpression<IterationContext>> kw<"return"> expression
      case "ForExpression":
        return (context) => {
          const extractor = args[args.length - 1];
          const iterationContexts = args[1](context);
          if (getType(iterationContexts) !== "list") {
            return iterationContexts;
          }
          const partial = [];
          for (const ctx of iterationContexts) {
            partial.push(extractor(Object.assign(Object.assign({}, ctx), { partial })));
          }
          return partial;
        };
      case "ArithmeticExpression":
        return (function() {
          if (args.length === 3) {
            const [a, op, b] = args;
            return tag((context) => {
              return op(context)(a, b);
            }, coalecenseTypes(a, b));
          }
          if (args.length === 2) {
            const [op, value] = args;
            return tag((context) => {
              return op(context)(() => 0, value);
            }, value.type);
          }
        })();
      case "PositiveUnaryTest":
        return (context) => {
          if (args[0].type === "boolean" && has(context, "?")) {
            return args[0](context) === context["?"];
          }
          return args[0](context);
        };
      case "ParenthesizedExpression":
        return args[1];
      // expr "."" pathName
      case "PathExpression":
        return tag((context) => {
          const pathTarget = args[0](context);
          const pathProp = args[2];
          if (isArray(pathTarget)) {
            return pathTarget.map((value) => pathProp(value));
          } else {
            return pathProp(pathTarget);
          }
        }, "any");
      // expression !filter "[" expression "]"
      case "FilterExpression":
        return tag((context) => {
          const target = args[0](context);
          const filterFn = args[2];
          const filterTarget = isArray(target) ? target : [target];
          if (target === null) {
            return null;
          }
          const type = filterFn.type;
          if (["number", "boolean", "any"].includes(type)) {
            const idx = filterFn(context);
            if (isBoolean(idx)) {
              if (idx === true) {
                return target;
              } else {
                return [];
              }
            }
            if (!isNumber2(idx)) {
              return [];
            }
            const value = filterTarget[idx < 0 ? filterTarget.length + idx : idx - 1];
            if (typeof value === "undefined") {
              return null;
            } else {
              return value;
            }
          }
          if (type === "string") {
            const value = filterFn(context);
            return filterTarget.filter((el) => el === value);
          }
          if (type === "test") {
            return filterTarget.map((el) => {
              const iterationContext = Object.assign(Object.assign(Object.assign({}, context), { item: el }), el);
              let result = filterFn(iterationContext);
              if (typeof result === "function") {
                result = result(el);
              }
              if (result instanceof Range2) {
                result = result.includes(el);
              }
              if (result === true) {
                return el;
              }
              return result;
            }).filter(isTruthy);
          }
          return null;
        }, "any");
      case "SimplePositiveUnaryTest":
        return tag((context) => {
          if (args.length === 1) {
            return args[0](context);
          }
          return args[0](context)(args[1](context));
        }, "test");
      case "List":
        return (context) => {
          return args.slice(1, -1).map((arg) => arg(context));
        };
      // "[" endpoint ".." endpoint "]"
      case "Interval":
        return tag((context) => {
          const left = args[1](context);
          const right = args[3](context);
          const startIncluded = left !== null && args[0] === "[";
          const endIncluded = right !== null && args[4] === "]";
          return createRange(left, right, startIncluded, endIncluded);
        }, "test");
      case "PositiveUnaryTests":
      case "Expressions":
        return (context) => {
          return args.map((a) => a(context));
        };
      case "Expression":
        return (context) => {
          return args[0](context);
        };
      case "UnaryTests":
        return (context) => {
          return (value = null) => {
            const negate = args[0] === "not";
            const tests = negate ? args.slice(2, -1) : args;
            const matches2 = tests.map((test) => test(context)).flat(1).map((test) => {
              if (isArray(test)) {
                return test.includes(value);
              }
              if (typeof test === "boolean") {
                return test;
              }
              return compareValue(test, value);
            }).some((v) => v === true);
            return matches2 === null ? null : negate ? !matches2 : matches2;
          };
        };
      default:
        return node.name;
    }
  }
  function getBuiltin(name2, _context) {
    return getFromContext(name2, builtins);
  }
  function extractValue(context, prop, _target) {
    const target = _target(context);
    if (["list", "range"].includes(getType(target))) {
      return target.map((t2) => ({ [prop]: t2 }));
    }
    return null;
  }
  function compareIn(value, tests) {
    if (!isArray(tests)) {
      if (getType(tests) === "nil") {
        return null;
      }
      tests = [tests];
    }
    return tests.some((test) => compareValue(test, value));
  }
  function compareValue(test, value) {
    if (typeof test === "function") {
      return test(value);
    }
    if (test instanceof Range2) {
      return test.includes(value);
    }
    return equals(test, value);
  }
  var chars2 = Array.from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
  function isTyped(type, values) {
    return values.some((e) => getType(e) === type) && values.every((e) => e === null || getType(e) === type);
  }
  var nullRange = new Range2({
    start: null,
    end: null,
    "start included": false,
    "end included": false,
    map() {
      return [];
    },
    includes() {
      return null;
    }
  });
  function createRange(start, end, startIncluded = true, endIncluded = true) {
    if (isTyped("string", [start, end])) {
      return createStringRange(start, end, startIncluded, endIncluded);
    }
    if (isTyped("number", [start, end])) {
      return createNumberRange(start, end, startIncluded, endIncluded);
    }
    if (isTyped("duration", [start, end])) {
      return createDurationRange(start, end, startIncluded, endIncluded);
    }
    if (isTyped("time", [start, end])) {
      return createDateTimeRange(start, end, startIncluded, endIncluded);
    }
    if (isTyped("date time", [start, end])) {
      return createDateTimeRange(start, end, startIncluded, endIncluded);
    }
    if (isTyped("date", [start, end])) {
      return createDateTimeRange(start, end, startIncluded, endIncluded);
    }
    if (start === null && end === null) {
      return nullRange;
    }
    throw new Error(`unsupported range: ${start}..${end}`);
  }
  function noopMap() {
    return () => {
      throw new Error("unsupported range operation: map");
    };
  }
  function valuesMap(values) {
    return (fn2) => values.map(fn2);
  }
  function valuesIncludes(values) {
    return (value) => values.includes(value);
  }
  function numberMap(start, end, startIncluded, endIncluded) {
    const direction = start > end ? -1 : 1;
    return (fn2) => {
      const result = [];
      for (let i = start; ; i += direction) {
        if (i === 0 && !startIncluded) {
          continue;
        }
        if (i === end && !endIncluded) {
          break;
        }
        result.push(fn2(i));
        if (i === end) {
          break;
        }
      }
      return result;
    };
  }
  function includesStart(n2, inclusive) {
    if (inclusive) {
      return (value) => n2 <= value;
    } else {
      return (value) => n2 < value;
    }
  }
  function includesEnd(n2, inclusive) {
    if (inclusive) {
      return (value) => n2 >= value;
    } else {
      return (value) => n2 > value;
    }
  }
  function anyIncludes(start, end, startIncluded, endIncluded, conversion = (v) => v) {
    let tests = [];
    if (start === null && end === null) {
      return () => null;
    }
    if (start !== null && end !== null) {
      if (start > end) {
        tests = [
          includesStart(end, endIncluded),
          includesEnd(start, startIncluded)
        ];
      } else {
        tests = [
          includesStart(start, startIncluded),
          includesEnd(end, endIncluded)
        ];
      }
    } else if (end !== null) {
      tests = [
        includesEnd(end, endIncluded)
      ];
    } else if (start !== null) {
      tests = [
        includesStart(start, startIncluded)
      ];
    }
    return (value) => value === null ? null : tests.every((t2) => t2(conversion(value)));
  }
  function createStringRange(start, end, startIncluded = true, endIncluded = true) {
    const singleStartChar = start !== null && chars2.includes(start);
    const singleEndChar = end !== null && chars2.includes(end);
    let values;
    if (singleStartChar && singleEndChar) {
      let startIdx = chars2.indexOf(start);
      let endIdx = chars2.indexOf(end);
      const direction = startIdx > endIdx ? -1 : 1;
      if (startIncluded === false) {
        startIdx += direction;
      }
      if (endIncluded === false) {
        endIdx -= direction;
      }
      values = chars2.slice(startIdx, endIdx + 1);
    }
    const map = values ? valuesMap(values) : noopMap();
    const includes = values ? valuesIncludes(values) : anyIncludes(start, end, startIncluded, endIncluded);
    return new Range2({
      start,
      end,
      "start included": startIncluded,
      "end included": endIncluded,
      map,
      includes
    });
  }
  function createNumberRange(start, end, startIncluded, endIncluded) {
    const map = start !== null && end !== null ? numberMap(start, end, startIncluded, endIncluded) : noopMap();
    const includes = anyIncludes(start, end, startIncluded, endIncluded);
    return new Range2({
      start,
      end,
      "start included": startIncluded,
      "end included": endIncluded,
      map,
      includes
    });
  }
  function createDurationRange(start, end, startIncluded, endIncluded) {
    const toMillis = (d) => d ? Duration.fromDurationLike(d).toMillis() : null;
    const map = noopMap();
    const includes = anyIncludes(toMillis(start), toMillis(end), startIncluded, endIncluded, toMillis);
    return new Range2({
      start,
      end,
      "start included": startIncluded,
      "end included": endIncluded,
      map,
      includes
    });
  }
  function createDateTimeRange(start, end, startIncluded, endIncluded) {
    const map = noopMap();
    const includes = anyIncludes(start, end, startIncluded, endIncluded);
    return new Range2({
      start,
      end,
      "start included": startIncluded,
      "end included": endIncluded,
      map,
      includes
    });
  }
  function coalecenseTypes(a, b) {
    if (!b) {
      return a.type;
    }
    if (a.type === b.type) {
      return a.type;
    }
    return "any";
  }
  function tag(fn2, type) {
    return Object.assign(fn2, {
      type,
      toString() {
        return `TaggedFunction[${type}] ${Function.prototype.toString.call(fn2)}`;
      }
    });
  }
  function isTruthy(obj) {
    return obj !== false && obj !== null;
  }
  function wrapFunction(fn2, parameterNames = null) {
    if (!fn2) {
      return null;
    }
    if (fn2 instanceof FunctionWrapper) {
      return fn2;
    }
    if (fn2 instanceof Range2) {
      return new FunctionWrapper((value) => fn2.includes(value), ["value"]);
    }
    if (typeof fn2 !== "function") {
      return null;
    }
    return new FunctionWrapper(fn2, parameterNames || parseParameterNames(fn2));
  }
  function parseString(str) {
    if (str.startsWith('"')) {
      str = str.slice(1);
    }
    if (str.endsWith('"')) {
      str = str.slice(0, -1);
    }
    return str.replace(/(\\")|(\\\\)|(\\n)|(\\r)|(\\t)|(\\u[a-fA-F0-9]{5,6})|((?:\\u[a-fA-F0-9]{1,4})+)/ig, function(substring, ...groups) {
      const [quotes, backslash, newline, carriageReturn, tab, codePoint, charCodes] = groups;
      if (quotes) {
        return '"';
      }
      if (newline) {
        return "\n";
      }
      if (carriageReturn) {
        return "\r";
      }
      if (tab) {
        return "	";
      }
      if (backslash) {
        return "\\";
      }
      const escapePattern = /\\u([a-fA-F0-9]+)/ig;
      if (codePoint) {
        const codePointMatch = escapePattern.exec(codePoint);
        return String.fromCodePoint(parseInt(codePointMatch[1], 16));
      }
      if (charCodes) {
        const chars3 = [];
        let charCodeMatch;
        while ((charCodeMatch = escapePattern.exec(substring)) !== null) {
          chars3.push(parseInt(charCodeMatch[1], 16));
        }
        return String.fromCharCode(...chars3);
      }
      throw new Error("illegal match");
    });
  }
  function lintErrorDetails(errorNodeRef) {
    const node = errorNodeRef.node;
    const parent = node.parent;
    const { from, to } = node;
    if (node.from !== node.to) {
      return {
        message: `Unrecognized token in <${parent.name}>`,
        position: {
          from,
          to
        }
      };
    }
    const next = findNext(node);
    if (next) {
      return {
        message: `Unrecognized token <${next.name}> in <${parent.name}>`,
        position: {
          from: next.from,
          to: next.to
        }
      };
    } else {
      const unfinished = parent.enterUnfinishedNodesBefore(errorNodeRef.to);
      return {
        message: `Incomplete <${(unfinished || parent).name}>`,
        position: {
          from,
          to
        }
      };
    }
  }
  function lintError(input, errorNodeRef) {
    const { message, position } = lintErrorDetails(errorNodeRef);
    return new SyntaxError2(message, {
      input: input.slice(position.from, position.to),
      position
    });
  }
  function findNext(nodeRef) {
    const node = nodeRef.node;
    let next, parent = node;
    do {
      next = parent.nextSibling;
      if (next) {
        return next;
      }
      parent = parent.parent;
    } while (parent);
    return null;
  }
  function formatValue(value) {
    const type = getType(value);
    if (type === "string") {
      return `"${String(value)}"`;
    }
    if (type === "list") {
      return `[${value.length} items]`;
    }
    if (type === "context") {
      return "{...}";
    }
    if (type === "function") {
      const parameterNames = value.parameterNames;
      if (parameterNames) {
        return `function(${parameterNames.join(", ")})`;
      }
      return "function";
    }
    if (type === "nil") {
      return "null";
    }
    return String(value);
  }

  // entry.js
  function syntaxError(input, node) {
    const parent = node.parent;
    let message, position = { from: node.from, to: node.to };
    if (node.from !== node.to) {
      message = `Unrecognized token in <${parent.name}>`;
    } else {
      let next = null;
      for (let current = node; current && !next; current = current.parent) {
        next = current.nextSibling;
      }
      if (next) {
        message = `Unrecognized token <${next.name}> in <${parent.name}>`;
        position = { from: next.from, to: next.to };
      } else {
        message = `Incomplete <${(parent.enterUnfinishedNodesBefore(node.to) || parent).name}>`;
      }
    }
    return new SyntaxError2(message, { input: input.slice(position.from, position.to), position });
  }
  function toAst(tree, input) {
    const build = (node) => {
      if (node.type.isError) {
        throw syntaxError(input, node);
      }
      const children = [];
      for (let child = node.firstChild; child; child = child.nextSibling) {
        children.push(build(child));
      }
      return { type: node.name, from: node.from, to: node.to, text: input.slice(node.from, node.to), children };
    };
    return build(tree.topNode);
  }
  function replacer(key, value) {
    const raw = this[key];
    if (raw && (raw.isLuxonDateTime || raw.isLuxonDuration)) {
      return evaluate("string(v)", { v: raw }).value;
    }
    return value;
  }
  var toJson = (value) => JSON.stringify(value === void 0 ? null : value, replacer);
  var functions = {};
  var hasFunctions = false;
  function readContext(contextJson) {
    const context = (contextJson == null ? null : JSON.parse(contextJson)) || {};
    return hasFunctions ? Object.assign(context, functions) : context;
  }
  var json = {
    evaluate: (expression, contextJson) => toJson(evaluate(expression, readContext(contextJson)).value),
    unaryTest: (expression, contextJson) => toJson(unaryTest(expression, readContext(contextJson)).value),
    parseExpression: (expression, contextJson) => JSON.stringify(toAst(parseExpression(expression, readContext(contextJson)), expression)),
    parseUnaryTests: (expression, contextJson) => JSON.stringify(toAst(parseUnaryTests(expression, readContext(contextJson)), expression)),
    addFunction: (name2) => {
      functions[name2] = function(...args) {
        return globalThis[name2](...args);
      };
      hasFunctions = true;
    }
  };
  return __toCommonJS(entry_exports);
})();
