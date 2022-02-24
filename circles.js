function t(t) {
  return function () {
    t = (1831565813 + (t |= 0)) | 0;
    var r = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (((r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r) ^ (r >>> 14)) >>> 0) /
      4294967296
    );
  };
}
registerPaint(
  "circles",
  class {
    static get inputProperties() {
      return [
        "--colors",
        "--min-radius",
        "--max-radius",
        "--min-opacity",
        "--max-opacity",
        "--num-circles",
        "--seed",
      ];
    }
    constructor() {
      this.getRandom = t(0);
    }
    parseProps(props) {
      return [
        "--colors",
        "--min-radius",
        "--max-radius",
        "--min-opacity",
        "--max-opacity",
        "--num-circles",
        "--seed",
      ].map((propName) => {
        const a = props.get(propName);
        if (
          "undefined" == typeof CSSUnparsedValue ||
          a instanceof CSSUnparsedValue
        ) {
          if (!a.length || "" === a) return;
          switch (propName) {
            case "--min-radius":
            case "--max-radius":
            case "--min-opacity":
            case "--max-opacity":
            case "--num-circles":
            case "--seed":
              return parseInt(a.toString());
            case "--colors":
              return a
                .toString()
                .split(",")
                .map((t) => t.trim());
            default:
              return a.toString().trim();
          }
        }
        if (!(a instanceof CSSUnparsedValue) || a.length)
          return a instanceof CSSUnitValue
            ? a.value
            : "--colors" === propName
            ? props.getAll(propName).map((t) => t.toString().trim())
            : a.toString().trim();
      });
    }
    paint(ctx, size, properties) {
      const { width, height } = size,
        [
          s = ["#71a7ee", "#7940c1"],
          c = 10,
          o = 50,
          l = 10,
          u = 80,
          d = 5,
          m = 0,
        ] = this.parseProps(properties);
      this.getRandom = t(m);
      for (let t = 0, a = d; t < a; t++)
        this.drawCircle(ctx, {
          x: this.rand(0, width),
          y: this.rand(0, height),
          r: this.rand(c, o),
          color: s[this.rand(0, s.length - 1)],
          alpha: this.rand(l, u),
        });
    }
    drawCircle(t, r) {
      (t.globalAlpha = r.alpha / 100),
        t.beginPath(),
        t.arc(r.x, r.y, r.r, 0, 2 * Math.PI, !0),
        (t.fillStyle = r.color),
        t.fill(),
        t.closePath();
    }
    rand(t, r) {
      return Math.floor(this.getRandom() * (r - t + 1)) + t;
    }
  }
);
