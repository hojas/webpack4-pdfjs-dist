var rp = Object.defineProperty;
var Bd = (c) => {
  throw TypeError(c);
};
var ap = (c, e, t) => e in c ? rp(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var G = (c, e, t) => ap(c, typeof e != "symbol" ? e + "" : e, t), tc = (c, e, t) => e.has(c) || Bd("Cannot " + t);
var a = (c, e, t) => (tc(c, e, "read from private field"), t ? t.call(c) : e.get(c)), b = (c, e, t) => e.has(c) ? Bd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(c) : e.set(c, t), m = (c, e, t, s) => (tc(c, e, "write to private field"), s ? s.call(c, t) : e.set(c, t), t), y = (c, e, t) => (tc(c, e, "access private method"), t);
var ue = (c, e, t, s) => ({
  set _(i) {
    m(c, e, i, t);
  },
  get _() {
    return a(c, e, s);
  }
});
var op = {
  /***/
  9306: (
    /***/
    (c, e, t) => {
      var s = t(4901), i = t(6823), n = TypeError;
      c.exports = function(r) {
        if (s(r)) return r;
        throw new n(i(r) + " is not a function");
      };
    }
  ),
  /***/
  3506: (
    /***/
    (c, e, t) => {
      var s = t(3925), i = String, n = TypeError;
      c.exports = function(r) {
        if (s(r)) return r;
        throw new n("Can't set " + i(r) + " as a prototype");
      };
    }
  ),
  /***/
  7080: (
    /***/
    (c, e, t) => {
      var s = t(4402).has;
      c.exports = function(i) {
        return s(i), i;
      };
    }
  ),
  /***/
  679: (
    /***/
    (c, e, t) => {
      var s = t(1625), i = TypeError;
      c.exports = function(n, r) {
        if (s(r, n)) return n;
        throw new i("Incorrect invocation");
      };
    }
  ),
  /***/
  8551: (
    /***/
    (c, e, t) => {
      var s = t(34), i = String, n = TypeError;
      c.exports = function(r) {
        if (s(r)) return r;
        throw new n(i(r) + " is not an object");
      };
    }
  ),
  /***/
  7811: (
    /***/
    (c) => {
      c.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
    }
  ),
  /***/
  7394: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(6706), n = t(2195), r = s.ArrayBuffer, o = s.TypeError;
      c.exports = r && i(r.prototype, "byteLength", "get") || function(l) {
        if (n(l) !== "ArrayBuffer") throw new o("ArrayBuffer expected");
        return l.byteLength;
      };
    }
  ),
  /***/
  3238: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(7476), n = t(7394), r = s.ArrayBuffer, o = r && r.prototype, l = o && i(o.slice);
      c.exports = function(h) {
        if (n(h) !== 0 || !l) return !1;
        try {
          return l(h, 0, 0), !1;
        } catch {
          return !0;
        }
      };
    }
  ),
  /***/
  5169: (
    /***/
    (c, e, t) => {
      var s = t(3238), i = TypeError;
      c.exports = function(n) {
        if (s(n)) throw new i("ArrayBuffer is detached");
        return n;
      };
    }
  ),
  /***/
  5636: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(9504), n = t(6706), r = t(7696), o = t(5169), l = t(7394), h = t(4483), d = t(1548), u = s.structuredClone, f = s.ArrayBuffer, p = s.DataView, g = Math.min, v = f.prototype, w = p.prototype, A = i(v.slice), S = n(v, "resizable", "get"), x = n(v, "maxByteLength", "get"), T = i(w.getInt8), E = i(w.setInt8);
      c.exports = (d || h) && function(C, R, I) {
        var P = l(C), F = R === void 0 ? P : r(R), L = !S || !S(C), q;
        if (o(C), d && (C = u(C, { transfer: [C] }), P === F && (I || L)))
          return C;
        if (P >= F && (!I || L))
          q = A(C, 0, F);
        else {
          var Y = I && !L && x ? { maxByteLength: x(C) } : void 0;
          q = new f(F, Y);
          for (var K = new p(C), gt = new p(q), _ = g(F, P), k = 0; k < _; k++) E(gt, k, T(K, k));
        }
        return d || h(C), q;
      };
    }
  ),
  /***/
  4644: (
    /***/
    (c, e, t) => {
      var s = t(7811), i = t(3724), n = t(4576), r = t(4901), o = t(34), l = t(9297), h = t(6955), d = t(6823), u = t(6699), f = t(6840), p = t(2106), g = t(1625), v = t(2787), w = t(2967), A = t(8227), S = t(3392), x = t(1181), T = x.enforce, E = x.get, C = n.Int8Array, R = C && C.prototype, I = n.Uint8ClampedArray, P = I && I.prototype, F = C && v(C), L = R && v(R), q = Object.prototype, Y = n.TypeError, K = A("toStringTag"), gt = S("TYPED_ARRAY_TAG"), _ = "TypedArrayConstructor", k = s && !!w && h(n.opera) !== "Opera", nt = !1, lt, At, Pt, ut = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      }, mt = {
        BigInt64Array: 8,
        BigUint64Array: 8
      }, bs = function(It) {
        if (!o(It)) return !1;
        var Mt = h(It);
        return Mt === "DataView" || l(ut, Mt) || l(mt, Mt);
      }, ys = function(V) {
        var It = v(V);
        if (o(It)) {
          var Mt = E(It);
          return Mt && l(Mt, _) ? Mt[_] : ys(It);
        }
      }, N = function(V) {
        if (!o(V)) return !1;
        var It = h(V);
        return l(ut, It) || l(mt, It);
      }, M = function(V) {
        if (N(V)) return V;
        throw new Y("Target is not a typed array");
      }, D = function(V) {
        if (r(V) && (!w || g(F, V))) return V;
        throw new Y(d(V) + " is not a typed array constructor");
      }, Q = function(V, It, Mt, As) {
        if (i) {
          if (Mt) for (var de in ut) {
            var Gt = n[de];
            if (Gt && l(Gt.prototype, V)) try {
              delete Gt.prototype[V];
            } catch {
              try {
                Gt.prototype[V] = It;
              } catch {
              }
            }
          }
          (!L[V] || Mt) && f(L, V, Mt ? It : k && R[V] || It, As);
        }
      }, vt = function(V, It, Mt) {
        var As, de;
        if (i) {
          if (w) {
            if (Mt) {
              for (As in ut)
                if (de = n[As], de && l(de, V)) try {
                  delete de[V];
                } catch {
                }
            }
            if (!F[V] || Mt)
              try {
                return f(F, V, Mt ? It : k && F[V] || It);
              } catch {
              }
            else return;
          }
          for (As in ut)
            de = n[As], de && (!de[V] || Mt) && f(de, V, It);
        }
      };
      for (lt in ut)
        At = n[lt], Pt = At && At.prototype, Pt ? T(Pt)[_] = At : k = !1;
      for (lt in mt)
        At = n[lt], Pt = At && At.prototype, Pt && (T(Pt)[_] = At);
      if ((!k || !r(F) || F === Function.prototype) && (F = function() {
        throw new Y("Incorrect invocation");
      }, k))
        for (lt in ut)
          n[lt] && w(n[lt], F);
      if ((!k || !L || L === q) && (L = F.prototype, k))
        for (lt in ut)
          n[lt] && w(n[lt].prototype, L);
      if (k && v(P) !== L && w(P, L), i && !l(L, K)) {
        nt = !0, p(L, K, {
          configurable: !0,
          get: function() {
            return o(this) ? this[gt] : void 0;
          }
        });
        for (lt in ut) n[lt] && u(n[lt], gt, lt);
      }
      c.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: k,
        TYPED_ARRAY_TAG: nt && gt,
        aTypedArray: M,
        aTypedArrayConstructor: D,
        exportTypedArrayMethod: Q,
        exportTypedArrayStaticMethod: vt,
        getTypedArrayConstructor: ys,
        isView: bs,
        isTypedArray: N,
        TypedArray: F,
        TypedArrayPrototype: L
      };
    }
  ),
  /***/
  5370: (
    /***/
    (c, e, t) => {
      var s = t(6198);
      c.exports = function(i, n, r) {
        for (var o = 0, l = arguments.length > 2 ? r : s(n), h = new i(l); l > o; ) h[o] = n[o++];
        return h;
      };
    }
  ),
  /***/
  9617: (
    /***/
    (c, e, t) => {
      var s = t(5397), i = t(5610), n = t(6198), r = function(o) {
        return function(l, h, d) {
          var u = s(l), f = n(u);
          if (f === 0) return !o && -1;
          var p = i(d, f), g;
          if (o && h !== h) {
            for (; f > p; )
              if (g = u[p++], g !== g) return !0;
          } else for (; f > p; p++)
            if ((o || p in u) && u[p] === h) return o || p || 0;
          return !o && -1;
        };
      };
      c.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: r(!0),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: r(!1)
      };
    }
  ),
  /***/
  4527: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(4376), n = TypeError, r = Object.getOwnPropertyDescriptor, o = s && !function() {
        if (this !== void 0) return !0;
        try {
          Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (l) {
          return l instanceof TypeError;
        }
      }();
      c.exports = o ? function(l, h) {
        if (i(l) && !r(l, "length").writable)
          throw new n("Cannot set read only .length");
        return l.length = h;
      } : function(l, h) {
        return l.length = h;
      };
    }
  ),
  /***/
  7680: (
    /***/
    (c, e, t) => {
      var s = t(9504);
      c.exports = s([].slice);
    }
  ),
  /***/
  7628: (
    /***/
    (c, e, t) => {
      var s = t(6198);
      c.exports = function(i, n) {
        for (var r = s(i), o = new n(r), l = 0; l < r; l++) o[l] = i[r - l - 1];
        return o;
      };
    }
  ),
  /***/
  9928: (
    /***/
    (c, e, t) => {
      var s = t(6198), i = t(1291), n = RangeError;
      c.exports = function(r, o, l, h) {
        var d = s(r), u = i(l), f = u < 0 ? d + u : u;
        if (f >= d || f < 0) throw new n("Incorrect index");
        for (var p = new o(d), g = 0; g < d; g++) p[g] = g === f ? h : r[g];
        return p;
      };
    }
  ),
  /***/
  6319: (
    /***/
    (c, e, t) => {
      var s = t(8551), i = t(9539);
      c.exports = function(n, r, o, l) {
        try {
          return l ? r(s(o)[0], o[1]) : r(o);
        } catch (h) {
          i(n, "throw", h);
        }
      };
    }
  ),
  /***/
  2195: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = s({}.toString), n = s("".slice);
      c.exports = function(r) {
        return n(i(r), 8, -1);
      };
    }
  ),
  /***/
  6955: (
    /***/
    (c, e, t) => {
      var s = t(2140), i = t(4901), n = t(2195), r = t(8227), o = r("toStringTag"), l = Object, h = n(/* @__PURE__ */ function() {
        return arguments;
      }()) === "Arguments", d = function(u, f) {
        try {
          return u[f];
        } catch {
        }
      };
      c.exports = s ? n : function(u) {
        var f, p, g;
        return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (p = d(f = l(u), o)) == "string" ? p : h ? n(f) : (g = n(f)) === "Object" && i(f.callee) ? "Arguments" : g;
      };
    }
  ),
  /***/
  7740: (
    /***/
    (c, e, t) => {
      var s = t(9297), i = t(5031), n = t(7347), r = t(4913);
      c.exports = function(o, l, h) {
        for (var d = i(l), u = r.f, f = n.f, p = 0; p < d.length; p++) {
          var g = d[p];
          !s(o, g) && !(h && s(h, g)) && u(o, g, f(l, g));
        }
      };
    }
  ),
  /***/
  2211: (
    /***/
    (c, e, t) => {
      var s = t(9039);
      c.exports = !s(function() {
        function i() {
        }
        return i.prototype.constructor = null, Object.getPrototypeOf(new i()) !== i.prototype;
      });
    }
  ),
  /***/
  2529: (
    /***/
    (c) => {
      c.exports = function(e, t) {
        return { value: e, done: t };
      };
    }
  ),
  /***/
  6699: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(4913), n = t(6980);
      c.exports = s ? function(r, o, l) {
        return i.f(r, o, n(1, l));
      } : function(r, o, l) {
        return r[o] = l, r;
      };
    }
  ),
  /***/
  6980: (
    /***/
    (c) => {
      c.exports = function(e, t) {
        return {
          enumerable: !(e & 1),
          configurable: !(e & 2),
          writable: !(e & 4),
          value: t
        };
      };
    }
  ),
  /***/
  4659: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(4913), n = t(6980);
      c.exports = function(r, o, l) {
        s ? i.f(r, o, n(0, l)) : r[o] = l;
      };
    }
  ),
  /***/
  2106: (
    /***/
    (c, e, t) => {
      var s = t(283), i = t(4913);
      c.exports = function(n, r, o) {
        return o.get && s(o.get, r, { getter: !0 }), o.set && s(o.set, r, { setter: !0 }), i.f(n, r, o);
      };
    }
  ),
  /***/
  6840: (
    /***/
    (c, e, t) => {
      var s = t(4901), i = t(4913), n = t(283), r = t(9433);
      c.exports = function(o, l, h, d) {
        d || (d = {});
        var u = d.enumerable, f = d.name !== void 0 ? d.name : l;
        if (s(h) && n(h, f, d), d.global)
          u ? o[l] = h : r(l, h);
        else {
          try {
            d.unsafe ? o[l] && (u = !0) : delete o[l];
          } catch {
          }
          u ? o[l] = h : i.f(o, l, {
            value: h,
            enumerable: !1,
            configurable: !d.nonConfigurable,
            writable: !d.nonWritable
          });
        }
        return o;
      };
    }
  ),
  /***/
  6279: (
    /***/
    (c, e, t) => {
      var s = t(6840);
      c.exports = function(i, n, r) {
        for (var o in n) s(i, o, n[o], r);
        return i;
      };
    }
  ),
  /***/
  9433: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = Object.defineProperty;
      c.exports = function(n, r) {
        try {
          i(s, n, { value: r, configurable: !0, writable: !0 });
        } catch {
          s[n] = r;
        }
        return r;
      };
    }
  ),
  /***/
  3724: (
    /***/
    (c, e, t) => {
      var s = t(9039);
      c.exports = !s(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  ),
  /***/
  4483: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(9429), n = t(1548), r = s.structuredClone, o = s.ArrayBuffer, l = s.MessageChannel, h = !1, d, u, f, p;
      if (n)
        h = function(g) {
          r(g, { transfer: [g] });
        };
      else if (o) try {
        l || (d = i("worker_threads"), d && (l = d.MessageChannel)), l && (u = new l(), f = new o(2), p = function(g) {
          u.port1.postMessage(null, [g]);
        }, f.byteLength === 2 && (p(f), f.byteLength === 0 && (h = p)));
      } catch {
      }
      c.exports = h;
    }
  ),
  /***/
  4055: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(34), n = s.document, r = i(n) && i(n.createElement);
      c.exports = function(o) {
        return r ? n.createElement(o) : {};
      };
    }
  ),
  /***/
  6837: (
    /***/
    (c) => {
      var e = TypeError, t = 9007199254740991;
      c.exports = function(s) {
        if (s > t) throw e("Maximum allowed index exceeded");
        return s;
      };
    }
  ),
  /***/
  5002: (
    /***/
    (c) => {
      c.exports = {
        IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
        DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
        HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
        WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
        InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
        NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
        NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 },
        NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
        NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
        InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
        InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
        SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
        InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 },
        NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
        InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
        ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
        TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
        SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
        NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
        AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
        URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
        QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
        TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
        InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
        DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 }
      };
    }
  ),
  /***/
  8727: (
    /***/
    (c) => {
      c.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  ),
  /***/
  6193: (
    /***/
    (c, e, t) => {
      var s = t(4215);
      c.exports = s === "NODE";
    }
  ),
  /***/
  2839: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = s.navigator, n = i && i.userAgent;
      c.exports = n ? String(n) : "";
    }
  ),
  /***/
  9519: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(2839), n = s.process, r = s.Deno, o = n && n.versions || r && r.version, l = o && o.v8, h, d;
      l && (h = l.split("."), d = h[0] > 0 && h[0] < 4 ? 1 : +(h[0] + h[1])), !d && i && (h = i.match(/Edge\/(\d+)/), (!h || h[1] >= 74) && (h = i.match(/Chrome\/(\d+)/), h && (d = +h[1]))), c.exports = d;
    }
  ),
  /***/
  4215: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(2839), n = t(2195), r = function(o) {
        return i.slice(0, o.length) === o;
      };
      c.exports = function() {
        return r("Bun/") ? "BUN" : r("Cloudflare-Workers") ? "CLOUDFLARE" : r("Deno/") ? "DENO" : r("Node.js/") ? "NODE" : s.Bun && typeof Bun.version == "string" ? "BUN" : s.Deno && typeof Deno.version == "object" ? "DENO" : n(s.process) === "process" ? "NODE" : s.window && s.document ? "BROWSER" : "REST";
      }();
    }
  ),
  /***/
  8574: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = Error, n = s("".replace), r = function(h) {
        return String(new i(h).stack);
      }("zxcasd"), o = /\n\s*at [^:]*:[^\n]*/, l = o.test(r);
      c.exports = function(h, d) {
        if (l && typeof h == "string" && !i.prepareStackTrace)
          for (; d--; ) h = n(h, o, "");
        return h;
      };
    }
  ),
  /***/
  6518: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(7347).f, n = t(6699), r = t(6840), o = t(9433), l = t(7740), h = t(2796);
      c.exports = function(d, u) {
        var f = d.target, p = d.global, g = d.stat, v, w, A, S, x, T;
        if (p ? w = s : g ? w = s[f] || o(f, {}) : w = s[f] && s[f].prototype, w) for (A in u) {
          if (x = u[A], d.dontCallGetSet ? (T = i(w, A), S = T && T.value) : S = w[A], v = h(p ? A : f + (g ? "." : "#") + A, d.forced), !v && S !== void 0) {
            if (typeof x == typeof S) continue;
            l(x, S);
          }
          (d.sham || S && S.sham) && n(x, "sham", !0), r(w, A, x, d);
        }
      };
    }
  ),
  /***/
  9039: (
    /***/
    (c) => {
      c.exports = function(e) {
        try {
          return !!e();
        } catch {
          return !0;
        }
      };
    }
  ),
  /***/
  8745: (
    /***/
    (c, e, t) => {
      var s = t(616), i = Function.prototype, n = i.apply, r = i.call;
      c.exports = typeof Reflect == "object" && Reflect.apply || (s ? r.bind(n) : function() {
        return r.apply(n, arguments);
      });
    }
  ),
  /***/
  6080: (
    /***/
    (c, e, t) => {
      var s = t(7476), i = t(9306), n = t(616), r = s(s.bind);
      c.exports = function(o, l) {
        return i(o), l === void 0 ? o : n ? r(o, l) : function() {
          return o.apply(l, arguments);
        };
      };
    }
  ),
  /***/
  616: (
    /***/
    (c, e, t) => {
      var s = t(9039);
      c.exports = !s(function() {
        var i = (function() {
        }).bind();
        return typeof i != "function" || i.hasOwnProperty("prototype");
      });
    }
  ),
  /***/
  9565: (
    /***/
    (c, e, t) => {
      var s = t(616), i = Function.prototype.call;
      c.exports = s ? i.bind(i) : function() {
        return i.apply(i, arguments);
      };
    }
  ),
  /***/
  350: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(9297), n = Function.prototype, r = s && Object.getOwnPropertyDescriptor, o = i(n, "name"), l = o && (function() {
      }).name === "something", h = o && (!s || s && r(n, "name").configurable);
      c.exports = {
        EXISTS: o,
        PROPER: l,
        CONFIGURABLE: h
      };
    }
  ),
  /***/
  6706: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = t(9306);
      c.exports = function(n, r, o) {
        try {
          return s(i(Object.getOwnPropertyDescriptor(n, r)[o]));
        } catch {
        }
      };
    }
  ),
  /***/
  7476: (
    /***/
    (c, e, t) => {
      var s = t(2195), i = t(9504);
      c.exports = function(n) {
        if (s(n) === "Function") return i(n);
      };
    }
  ),
  /***/
  9504: (
    /***/
    (c, e, t) => {
      var s = t(616), i = Function.prototype, n = i.call, r = s && i.bind.bind(n, n);
      c.exports = s ? r : function(o) {
        return function() {
          return n.apply(o, arguments);
        };
      };
    }
  ),
  /***/
  9429: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(6193);
      c.exports = function(n) {
        if (i) {
          try {
            return s.process.getBuiltinModule(n);
          } catch {
          }
          try {
            return Function('return require("' + n + '")')();
          } catch {
          }
        }
      };
    }
  ),
  /***/
  7751: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(4901), n = function(r) {
        return i(r) ? r : void 0;
      };
      c.exports = function(r, o) {
        return arguments.length < 2 ? n(s[r]) : s[r] && s[r][o];
      };
    }
  ),
  /***/
  1767: (
    /***/
    (c) => {
      c.exports = function(e) {
        return {
          iterator: e,
          next: e.next,
          done: !1
        };
      };
    }
  ),
  /***/
  8646: (
    /***/
    (c, e, t) => {
      var s = t(9565), i = t(8551), n = t(1767), r = t(851);
      c.exports = function(o, l) {
        (!l || typeof o != "string") && i(o);
        var h = r(o);
        return n(i(h !== void 0 ? s(h, o) : o));
      };
    }
  ),
  /***/
  851: (
    /***/
    (c, e, t) => {
      var s = t(6955), i = t(5966), n = t(4117), r = t(6269), o = t(8227), l = o("iterator");
      c.exports = function(h) {
        if (!n(h)) return i(h, l) || i(h, "@@iterator") || r[s(h)];
      };
    }
  ),
  /***/
  81: (
    /***/
    (c, e, t) => {
      var s = t(9565), i = t(9306), n = t(8551), r = t(6823), o = t(851), l = TypeError;
      c.exports = function(h, d) {
        var u = arguments.length < 2 ? o(h) : d;
        if (i(u)) return n(s(u, h));
        throw new l(r(h) + " is not iterable");
      };
    }
  ),
  /***/
  5966: (
    /***/
    (c, e, t) => {
      var s = t(9306), i = t(4117);
      c.exports = function(n, r) {
        var o = n[r];
        return i(o) ? void 0 : s(o);
      };
    }
  ),
  /***/
  3789: (
    /***/
    (c, e, t) => {
      var s = t(9306), i = t(8551), n = t(9565), r = t(1291), o = t(1767), l = "Invalid size", h = RangeError, d = TypeError, u = Math.max, f = function(p, g) {
        this.set = p, this.size = u(g, 0), this.has = s(p.has), this.keys = s(p.keys);
      };
      f.prototype = {
        getIterator: function() {
          return o(i(n(this.keys, this.set)));
        },
        includes: function(p) {
          return n(this.has, this.set, p);
        }
      }, c.exports = function(p) {
        i(p);
        var g = +p.size;
        if (g !== g) throw new d(l);
        var v = r(g);
        if (v < 0) throw new h(l);
        return new f(p, v);
      };
    }
  ),
  /***/
  4576: (
    /***/
    function(c) {
      var e = function(t) {
        return t && t.Math === Math && t;
      };
      c.exports = // eslint-disable-next-line es/no-global-this -- safe
      e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      e(typeof self == "object" && self) || e(typeof global == "object" && global) || e(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
      /* @__PURE__ */ function() {
        return this;
      }() || Function("return this")();
    }
  ),
  /***/
  9297: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = t(8981), n = s({}.hasOwnProperty);
      c.exports = Object.hasOwn || function(o, l) {
        return n(i(o), l);
      };
    }
  ),
  /***/
  421: (
    /***/
    (c) => {
      c.exports = {};
    }
  ),
  /***/
  397: (
    /***/
    (c, e, t) => {
      var s = t(7751);
      c.exports = s("document", "documentElement");
    }
  ),
  /***/
  5917: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(9039), n = t(4055);
      c.exports = !s && !i(function() {
        return Object.defineProperty(n("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  ),
  /***/
  7055: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = t(9039), n = t(2195), r = Object, o = s("".split);
      c.exports = i(function() {
        return !r("z").propertyIsEnumerable(0);
      }) ? function(l) {
        return n(l) === "String" ? o(l, "") : r(l);
      } : r;
    }
  ),
  /***/
  3167: (
    /***/
    (c, e, t) => {
      var s = t(4901), i = t(34), n = t(2967);
      c.exports = function(r, o, l) {
        var h, d;
        return (
          // it can work only with native `setPrototypeOf`
          n && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
          s(h = o.constructor) && h !== l && i(d = h.prototype) && d !== l.prototype && n(r, d), r
        );
      };
    }
  ),
  /***/
  3706: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = t(4901), n = t(7629), r = s(Function.toString);
      i(n.inspectSource) || (n.inspectSource = function(o) {
        return r(o);
      }), c.exports = n.inspectSource;
    }
  ),
  /***/
  1181: (
    /***/
    (c, e, t) => {
      var s = t(8622), i = t(4576), n = t(34), r = t(6699), o = t(9297), l = t(7629), h = t(6119), d = t(421), u = "Object already initialized", f = i.TypeError, p = i.WeakMap, g, v, w, A = function(E) {
        return w(E) ? v(E) : g(E, {});
      }, S = function(E) {
        return function(C) {
          var R;
          if (!n(C) || (R = v(C)).type !== E)
            throw new f("Incompatible receiver, " + E + " required");
          return R;
        };
      };
      if (s || l.state) {
        var x = l.state || (l.state = new p());
        x.get = x.get, x.has = x.has, x.set = x.set, g = function(E, C) {
          if (x.has(E)) throw new f(u);
          return C.facade = E, x.set(E, C), C;
        }, v = function(E) {
          return x.get(E) || {};
        }, w = function(E) {
          return x.has(E);
        };
      } else {
        var T = h("state");
        d[T] = !0, g = function(E, C) {
          if (o(E, T)) throw new f(u);
          return C.facade = E, r(E, T, C), C;
        }, v = function(E) {
          return o(E, T) ? E[T] : {};
        }, w = function(E) {
          return o(E, T);
        };
      }
      c.exports = {
        set: g,
        get: v,
        has: w,
        enforce: A,
        getterFor: S
      };
    }
  ),
  /***/
  4209: (
    /***/
    (c, e, t) => {
      var s = t(8227), i = t(6269), n = s("iterator"), r = Array.prototype;
      c.exports = function(o) {
        return o !== void 0 && (i.Array === o || r[n] === o);
      };
    }
  ),
  /***/
  4376: (
    /***/
    (c, e, t) => {
      var s = t(2195);
      c.exports = Array.isArray || function(n) {
        return s(n) === "Array";
      };
    }
  ),
  /***/
  1108: (
    /***/
    (c, e, t) => {
      var s = t(6955);
      c.exports = function(i) {
        var n = s(i);
        return n === "BigInt64Array" || n === "BigUint64Array";
      };
    }
  ),
  /***/
  4901: (
    /***/
    (c) => {
      var e = typeof document == "object" && document.all;
      c.exports = typeof e > "u" && e !== void 0 ? function(t) {
        return typeof t == "function" || t === e;
      } : function(t) {
        return typeof t == "function";
      };
    }
  ),
  /***/
  2796: (
    /***/
    (c, e, t) => {
      var s = t(9039), i = t(4901), n = /#|\.prototype\./, r = function(u, f) {
        var p = l[o(u)];
        return p === d ? !0 : p === h ? !1 : i(f) ? s(f) : !!f;
      }, o = r.normalize = function(u) {
        return String(u).replace(n, ".").toLowerCase();
      }, l = r.data = {}, h = r.NATIVE = "N", d = r.POLYFILL = "P";
      c.exports = r;
    }
  ),
  /***/
  4117: (
    /***/
    (c) => {
      c.exports = function(e) {
        return e == null;
      };
    }
  ),
  /***/
  34: (
    /***/
    (c, e, t) => {
      var s = t(4901);
      c.exports = function(i) {
        return typeof i == "object" ? i !== null : s(i);
      };
    }
  ),
  /***/
  3925: (
    /***/
    (c, e, t) => {
      var s = t(34);
      c.exports = function(i) {
        return s(i) || i === null;
      };
    }
  ),
  /***/
  6395: (
    /***/
    (c) => {
      c.exports = !1;
    }
  ),
  /***/
  757: (
    /***/
    (c, e, t) => {
      var s = t(7751), i = t(4901), n = t(1625), r = t(7040), o = Object;
      c.exports = r ? function(l) {
        return typeof l == "symbol";
      } : function(l) {
        var h = s("Symbol");
        return i(h) && n(h.prototype, o(l));
      };
    }
  ),
  /***/
  507: (
    /***/
    (c, e, t) => {
      var s = t(9565);
      c.exports = function(i, n, r) {
        for (var o = r ? i : i.iterator, l = i.next, h, d; !(h = s(l, o)).done; )
          if (d = n(h.value), d !== void 0) return d;
      };
    }
  ),
  /***/
  2652: (
    /***/
    (c, e, t) => {
      var s = t(6080), i = t(9565), n = t(8551), r = t(6823), o = t(4209), l = t(6198), h = t(1625), d = t(81), u = t(851), f = t(9539), p = TypeError, g = function(w, A) {
        this.stopped = w, this.result = A;
      }, v = g.prototype;
      c.exports = function(w, A, S) {
        var x = S && S.that, T = !!(S && S.AS_ENTRIES), E = !!(S && S.IS_RECORD), C = !!(S && S.IS_ITERATOR), R = !!(S && S.INTERRUPTED), I = s(A, x), P, F, L, q, Y, K, gt, _ = function(nt) {
          return P && f(P, "normal", nt), new g(!0, nt);
        }, k = function(nt) {
          return T ? (n(nt), R ? I(nt[0], nt[1], _) : I(nt[0], nt[1])) : R ? I(nt, _) : I(nt);
        };
        if (E)
          P = w.iterator;
        else if (C)
          P = w;
        else {
          if (F = u(w), !F) throw new p(r(w) + " is not iterable");
          if (o(F)) {
            for (L = 0, q = l(w); q > L; L++)
              if (Y = k(w[L]), Y && h(v, Y)) return Y;
            return new g(!1);
          }
          P = d(w, F);
        }
        for (K = E ? w.next : P.next; !(gt = i(K, P)).done; ) {
          try {
            Y = k(gt.value);
          } catch (nt) {
            f(P, "throw", nt);
          }
          if (typeof Y == "object" && Y && h(v, Y)) return Y;
        }
        return new g(!1);
      };
    }
  ),
  /***/
  9539: (
    /***/
    (c, e, t) => {
      var s = t(9565), i = t(8551), n = t(5966);
      c.exports = function(r, o, l) {
        var h, d;
        i(r);
        try {
          if (h = n(r, "return"), !h) {
            if (o === "throw") throw l;
            return l;
          }
          h = s(h, r);
        } catch (u) {
          d = !0, h = u;
        }
        if (o === "throw") throw l;
        if (d) throw h;
        return i(h), l;
      };
    }
  ),
  /***/
  9462: (
    /***/
    (c, e, t) => {
      var s = t(9565), i = t(2360), n = t(6699), r = t(6279), o = t(8227), l = t(1181), h = t(5966), d = t(7657).IteratorPrototype, u = t(2529), f = t(9539), p = o("toStringTag"), g = "IteratorHelper", v = "WrapForValidIterator", w = l.set, A = function(T) {
        var E = l.getterFor(T ? v : g);
        return r(i(d), {
          next: function() {
            var R = E(this);
            if (T) return R.nextHandler();
            try {
              var I = R.done ? void 0 : R.nextHandler();
              return u(I, R.done);
            } catch (P) {
              throw R.done = !0, P;
            }
          },
          return: function() {
            var C = E(this), R = C.iterator;
            if (C.done = !0, T) {
              var I = h(R, "return");
              return I ? s(I, R) : u(void 0, !0);
            }
            if (C.inner) try {
              f(C.inner.iterator, "normal");
            } catch (P) {
              return f(R, "throw", P);
            }
            return R && f(R, "normal"), u(void 0, !0);
          }
        });
      }, S = A(!0), x = A(!1);
      n(x, p, "Iterator Helper"), c.exports = function(T, E) {
        var C = function(I, P) {
          P ? (P.iterator = I.iterator, P.next = I.next) : P = I, P.type = E ? v : g, P.nextHandler = T, P.counter = 0, P.done = !1, w(this, P);
        };
        return C.prototype = E ? S : x, C;
      };
    }
  ),
  /***/
  713: (
    /***/
    (c, e, t) => {
      var s = t(9565), i = t(9306), n = t(8551), r = t(1767), o = t(9462), l = t(6319), h = o(function() {
        var d = this.iterator, u = n(s(this.next, d)), f = this.done = !!u.done;
        if (!f) return l(d, this.mapper, [u.value, this.counter++], !0);
      });
      c.exports = function(u) {
        return n(this), i(u), new h(r(this), {
          mapper: u
        });
      };
    }
  ),
  /***/
  7657: (
    /***/
    (c, e, t) => {
      var s = t(9039), i = t(4901), n = t(34), r = t(2360), o = t(2787), l = t(6840), h = t(8227), d = t(6395), u = h("iterator"), f = !1, p, g, v;
      [].keys && (v = [].keys(), "next" in v ? (g = o(o(v)), g !== Object.prototype && (p = g)) : f = !0);
      var w = !n(p) || s(function() {
        var A = {};
        return p[u].call(A) !== A;
      });
      w ? p = {} : d && (p = r(p)), i(p[u]) || l(p, u, function() {
        return this;
      }), c.exports = {
        IteratorPrototype: p,
        BUGGY_SAFARI_ITERATORS: f
      };
    }
  ),
  /***/
  6269: (
    /***/
    (c) => {
      c.exports = {};
    }
  ),
  /***/
  6198: (
    /***/
    (c, e, t) => {
      var s = t(8014);
      c.exports = function(i) {
        return s(i.length);
      };
    }
  ),
  /***/
  283: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = t(9039), n = t(4901), r = t(9297), o = t(3724), l = t(350).CONFIGURABLE, h = t(3706), d = t(1181), u = d.enforce, f = d.get, p = String, g = Object.defineProperty, v = s("".slice), w = s("".replace), A = s([].join), S = o && !i(function() {
        return g(function() {
        }, "length", { value: 8 }).length !== 8;
      }), x = String(String).split("String"), T = c.exports = function(E, C, R) {
        v(p(C), 0, 7) === "Symbol(" && (C = "[" + w(p(C), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), R && R.getter && (C = "get " + C), R && R.setter && (C = "set " + C), (!r(E, "name") || l && E.name !== C) && (o ? g(E, "name", { value: C, configurable: !0 }) : E.name = C), S && R && r(R, "arity") && E.length !== R.arity && g(E, "length", { value: R.arity });
        try {
          R && r(R, "constructor") && R.constructor ? o && g(E, "prototype", { writable: !1 }) : E.prototype && (E.prototype = void 0);
        } catch {
        }
        var I = u(E);
        return r(I, "source") || (I.source = A(x, typeof C == "string" ? C : "")), E;
      };
      Function.prototype.toString = T(function() {
        return n(this) && f(this).source || h(this);
      }, "toString");
    }
  ),
  /***/
  741: (
    /***/
    (c) => {
      var e = Math.ceil, t = Math.floor;
      c.exports = Math.trunc || function(i) {
        var n = +i;
        return (n > 0 ? t : e)(n);
      };
    }
  ),
  /***/
  6043: (
    /***/
    (c, e, t) => {
      var s = t(9306), i = TypeError, n = function(r) {
        var o, l;
        this.promise = new r(function(h, d) {
          if (o !== void 0 || l !== void 0) throw new i("Bad Promise constructor");
          o = h, l = d;
        }), this.resolve = s(o), this.reject = s(l);
      };
      c.exports.f = function(r) {
        return new n(r);
      };
    }
  ),
  /***/
  2603: (
    /***/
    (c, e, t) => {
      var s = t(655);
      c.exports = function(i, n) {
        return i === void 0 ? arguments.length < 2 ? "" : n : s(i);
      };
    }
  ),
  /***/
  4149: (
    /***/
    (c) => {
      var e = RangeError;
      c.exports = function(t) {
        if (t === t) return t;
        throw new e("NaN is not allowed");
      };
    }
  ),
  /***/
  2360: (
    /***/
    (c, e, t) => {
      var s = t(8551), i = t(6801), n = t(8727), r = t(421), o = t(397), l = t(4055), h = t(6119), d = ">", u = "<", f = "prototype", p = "script", g = h("IE_PROTO"), v = function() {
      }, w = function(E) {
        return u + p + d + E + u + "/" + p + d;
      }, A = function(E) {
        E.write(w("")), E.close();
        var C = E.parentWindow.Object;
        return E = null, C;
      }, S = function() {
        var E = l("iframe"), C = "java" + p + ":", R;
        return E.style.display = "none", o.appendChild(E), E.src = String(C), R = E.contentWindow.document, R.open(), R.write(w("document.F=Object")), R.close(), R.F;
      }, x, T = function() {
        try {
          x = new ActiveXObject("htmlfile");
        } catch {
        }
        T = typeof document < "u" ? document.domain && x ? A(x) : S() : A(x);
        for (var E = n.length; E--; ) delete T[f][n[E]];
        return T();
      };
      r[g] = !0, c.exports = Object.create || function(C, R) {
        var I;
        return C !== null ? (v[f] = s(C), I = new v(), v[f] = null, I[g] = C) : I = T(), R === void 0 ? I : i.f(I, R);
      };
    }
  ),
  /***/
  6801: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(8686), n = t(4913), r = t(8551), o = t(5397), l = t(1072);
      e.f = s && !i ? Object.defineProperties : function(d, u) {
        r(d);
        for (var f = o(u), p = l(u), g = p.length, v = 0, w; g > v; ) n.f(d, w = p[v++], f[w]);
        return d;
      };
    }
  ),
  /***/
  4913: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(5917), n = t(8686), r = t(8551), o = t(6969), l = TypeError, h = Object.defineProperty, d = Object.getOwnPropertyDescriptor, u = "enumerable", f = "configurable", p = "writable";
      e.f = s ? n ? function(v, w, A) {
        if (r(v), w = o(w), r(A), typeof v == "function" && w === "prototype" && "value" in A && p in A && !A[p]) {
          var S = d(v, w);
          S && S[p] && (v[w] = A.value, A = {
            configurable: f in A ? A[f] : S[f],
            enumerable: u in A ? A[u] : S[u],
            writable: !1
          });
        }
        return h(v, w, A);
      } : h : function(v, w, A) {
        if (r(v), w = o(w), r(A), i) try {
          return h(v, w, A);
        } catch {
        }
        if ("get" in A || "set" in A) throw new l("Accessors not supported");
        return "value" in A && (v[w] = A.value), v;
      };
    }
  ),
  /***/
  7347: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(9565), n = t(8773), r = t(6980), o = t(5397), l = t(6969), h = t(9297), d = t(5917), u = Object.getOwnPropertyDescriptor;
      e.f = s ? u : function(p, g) {
        if (p = o(p), g = l(g), d) try {
          return u(p, g);
        } catch {
        }
        if (h(p, g)) return r(!i(n.f, p, g), p[g]);
      };
    }
  ),
  /***/
  8480: (
    /***/
    (c, e, t) => {
      var s = t(1828), i = t(8727), n = i.concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function(o) {
        return s(o, n);
      };
    }
  ),
  /***/
  3717: (
    /***/
    (c, e) => {
      e.f = Object.getOwnPropertySymbols;
    }
  ),
  /***/
  2787: (
    /***/
    (c, e, t) => {
      var s = t(9297), i = t(4901), n = t(8981), r = t(6119), o = t(2211), l = r("IE_PROTO"), h = Object, d = h.prototype;
      c.exports = o ? h.getPrototypeOf : function(u) {
        var f = n(u);
        if (s(f, l)) return f[l];
        var p = f.constructor;
        return i(p) && f instanceof p ? p.prototype : f instanceof h ? d : null;
      };
    }
  ),
  /***/
  1625: (
    /***/
    (c, e, t) => {
      var s = t(9504);
      c.exports = s({}.isPrototypeOf);
    }
  ),
  /***/
  1828: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = t(9297), n = t(5397), r = t(9617).indexOf, o = t(421), l = s([].push);
      c.exports = function(h, d) {
        var u = n(h), f = 0, p = [], g;
        for (g in u) !i(o, g) && i(u, g) && l(p, g);
        for (; d.length > f; ) i(u, g = d[f++]) && (~r(p, g) || l(p, g));
        return p;
      };
    }
  ),
  /***/
  1072: (
    /***/
    (c, e, t) => {
      var s = t(1828), i = t(8727);
      c.exports = Object.keys || function(r) {
        return s(r, i);
      };
    }
  ),
  /***/
  8773: (
    /***/
    (c, e) => {
      var t = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, i = s && !t.call({ 1: 2 }, 1);
      e.f = i ? function(r) {
        var o = s(this, r);
        return !!o && o.enumerable;
      } : t;
    }
  ),
  /***/
  2967: (
    /***/
    (c, e, t) => {
      var s = t(6706), i = t(34), n = t(7750), r = t(3506);
      c.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var o = !1, l = {}, h;
        try {
          h = s(Object.prototype, "__proto__", "set"), h(l, []), o = l instanceof Array;
        } catch {
        }
        return function(u, f) {
          return n(u), r(f), i(u) && (o ? h(u, f) : u.__proto__ = f), u;
        };
      }() : void 0);
    }
  ),
  /***/
  4270: (
    /***/
    (c, e, t) => {
      var s = t(9565), i = t(4901), n = t(34), r = TypeError;
      c.exports = function(o, l) {
        var h, d;
        if (l === "string" && i(h = o.toString) && !n(d = s(h, o)) || i(h = o.valueOf) && !n(d = s(h, o)) || l !== "string" && i(h = o.toString) && !n(d = s(h, o))) return d;
        throw new r("Can't convert object to primitive value");
      };
    }
  ),
  /***/
  5031: (
    /***/
    (c, e, t) => {
      var s = t(7751), i = t(9504), n = t(8480), r = t(3717), o = t(8551), l = i([].concat);
      c.exports = s("Reflect", "ownKeys") || function(d) {
        var u = n.f(o(d)), f = r.f;
        return f ? l(u, f(d)) : u;
      };
    }
  ),
  /***/
  8235: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = t(9297), n = SyntaxError, r = parseInt, o = String.fromCharCode, l = s("".charAt), h = s("".slice), d = s(/./.exec), u = {
        '\\"': '"',
        "\\\\": "\\",
        "\\/": "/",
        "\\b": "\b",
        "\\f": "\f",
        "\\n": `
`,
        "\\r": "\r",
        "\\t": "	"
      }, f = /^[\da-f]{4}$/i, p = /^[\u0000-\u001F]$/;
      c.exports = function(g, v) {
        for (var w = !0, A = ""; v < g.length; ) {
          var S = l(g, v);
          if (S === "\\") {
            var x = h(g, v, v + 2);
            if (i(u, x))
              A += u[x], v += 2;
            else if (x === "\\u") {
              v += 2;
              var T = h(g, v, v + 4);
              if (!d(f, T)) throw new n("Bad Unicode escape at: " + v);
              A += o(r(T, 16)), v += 4;
            } else throw new n('Unknown escape sequence: "' + x + '"');
          } else if (S === '"') {
            w = !1, v++;
            break;
          } else {
            if (d(p, S)) throw new n("Bad control character in string literal at: " + v);
            A += S, v++;
          }
        }
        if (w) throw new n("Unterminated string at: " + v);
        return { value: A, end: v };
      };
    }
  ),
  /***/
  1103: (
    /***/
    (c) => {
      c.exports = function(e) {
        try {
          return { error: !1, value: e() };
        } catch (t) {
          return { error: !0, value: t };
        }
      };
    }
  ),
  /***/
  7750: (
    /***/
    (c, e, t) => {
      var s = t(4117), i = TypeError;
      c.exports = function(n) {
        if (s(n)) throw new i("Can't call method on " + n);
        return n;
      };
    }
  ),
  /***/
  9286: (
    /***/
    (c, e, t) => {
      var s = t(4402), i = t(8469), n = s.Set, r = s.add;
      c.exports = function(o) {
        var l = new n();
        return i(o, function(h) {
          r(l, h);
        }), l;
      };
    }
  ),
  /***/
  3440: (
    /***/
    (c, e, t) => {
      var s = t(7080), i = t(4402), n = t(9286), r = t(5170), o = t(3789), l = t(8469), h = t(507), d = i.has, u = i.remove;
      c.exports = function(p) {
        var g = s(this), v = o(p), w = n(g);
        return r(g) <= v.size ? l(g, function(A) {
          v.includes(A) && u(w, A);
        }) : h(v.getIterator(), function(A) {
          d(g, A) && u(w, A);
        }), w;
      };
    }
  ),
  /***/
  4402: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = Set.prototype;
      c.exports = {
        // eslint-disable-next-line es/no-set -- safe
        Set,
        add: s(i.add),
        has: s(i.has),
        remove: s(i.delete),
        proto: i
      };
    }
  ),
  /***/
  8750: (
    /***/
    (c, e, t) => {
      var s = t(7080), i = t(4402), n = t(5170), r = t(3789), o = t(8469), l = t(507), h = i.Set, d = i.add, u = i.has;
      c.exports = function(p) {
        var g = s(this), v = r(p), w = new h();
        return n(g) > v.size ? l(v.getIterator(), function(A) {
          u(g, A) && d(w, A);
        }) : o(g, function(A) {
          v.includes(A) && d(w, A);
        }), w;
      };
    }
  ),
  /***/
  4449: (
    /***/
    (c, e, t) => {
      var s = t(7080), i = t(4402).has, n = t(5170), r = t(3789), o = t(8469), l = t(507), h = t(9539);
      c.exports = function(u) {
        var f = s(this), p = r(u);
        if (n(f) <= p.size) return o(f, function(v) {
          if (p.includes(v)) return !1;
        }, !0) !== !1;
        var g = p.getIterator();
        return l(g, function(v) {
          if (i(f, v)) return h(g, "normal", !1);
        }) !== !1;
      };
    }
  ),
  /***/
  3838: (
    /***/
    (c, e, t) => {
      var s = t(7080), i = t(5170), n = t(8469), r = t(3789);
      c.exports = function(l) {
        var h = s(this), d = r(l);
        return i(h) > d.size ? !1 : n(h, function(u) {
          if (!d.includes(u)) return !1;
        }, !0) !== !1;
      };
    }
  ),
  /***/
  8527: (
    /***/
    (c, e, t) => {
      var s = t(7080), i = t(4402).has, n = t(5170), r = t(3789), o = t(507), l = t(9539);
      c.exports = function(d) {
        var u = s(this), f = r(d);
        if (n(u) < f.size) return !1;
        var p = f.getIterator();
        return o(p, function(g) {
          if (!i(u, g)) return l(p, "normal", !1);
        }) !== !1;
      };
    }
  ),
  /***/
  8469: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = t(507), n = t(4402), r = n.Set, o = n.proto, l = s(o.forEach), h = s(o.keys), d = h(new r()).next;
      c.exports = function(u, f, p) {
        return p ? i({ iterator: h(u), next: d }, f) : l(u, f);
      };
    }
  ),
  /***/
  4916: (
    /***/
    (c, e, t) => {
      var s = t(7751), i = function(n) {
        return {
          size: n,
          has: function() {
            return !1;
          },
          keys: function() {
            return {
              next: function() {
                return { done: !0 };
              }
            };
          }
        };
      };
      c.exports = function(n) {
        var r = s("Set");
        try {
          new r()[n](i(0));
          try {
            return new r()[n](i(-1)), !1;
          } catch {
            return !0;
          }
        } catch {
          return !1;
        }
      };
    }
  ),
  /***/
  5170: (
    /***/
    (c, e, t) => {
      var s = t(6706), i = t(4402);
      c.exports = s(i.proto, "size", "get") || function(n) {
        return n.size;
      };
    }
  ),
  /***/
  3650: (
    /***/
    (c, e, t) => {
      var s = t(7080), i = t(4402), n = t(9286), r = t(3789), o = t(507), l = i.add, h = i.has, d = i.remove;
      c.exports = function(f) {
        var p = s(this), g = r(f).getIterator(), v = n(p);
        return o(g, function(w) {
          h(p, w) ? d(v, w) : l(v, w);
        }), v;
      };
    }
  ),
  /***/
  4204: (
    /***/
    (c, e, t) => {
      var s = t(7080), i = t(4402).add, n = t(9286), r = t(3789), o = t(507);
      c.exports = function(h) {
        var d = s(this), u = r(h).getIterator(), f = n(d);
        return o(u, function(p) {
          i(f, p);
        }), f;
      };
    }
  ),
  /***/
  6119: (
    /***/
    (c, e, t) => {
      var s = t(5745), i = t(3392), n = s("keys");
      c.exports = function(r) {
        return n[r] || (n[r] = i(r));
      };
    }
  ),
  /***/
  7629: (
    /***/
    (c, e, t) => {
      var s = t(6395), i = t(4576), n = t(9433), r = "__core-js_shared__", o = c.exports = i[r] || n(r, {});
      (o.versions || (o.versions = [])).push({
        version: "3.39.0",
        mode: s ? "pure" : "global",
        copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  ),
  /***/
  5745: (
    /***/
    (c, e, t) => {
      var s = t(7629);
      c.exports = function(i, n) {
        return s[i] || (s[i] = n || {});
      };
    }
  ),
  /***/
  1548: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(9039), n = t(9519), r = t(4215), o = s.structuredClone;
      c.exports = !!o && !i(function() {
        if (r === "DENO" && n > 92 || r === "NODE" && n > 94 || r === "BROWSER" && n > 97) return !1;
        var l = new ArrayBuffer(8), h = o(l, { transfer: [l] });
        return l.byteLength !== 0 || h.byteLength !== 8;
      });
    }
  ),
  /***/
  4495: (
    /***/
    (c, e, t) => {
      var s = t(9519), i = t(9039), n = t(4576), r = n.String;
      c.exports = !!Object.getOwnPropertySymbols && !i(function() {
        var o = Symbol("symbol detection");
        return !r(o) || !(Object(o) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && s && s < 41;
      });
    }
  ),
  /***/
  5610: (
    /***/
    (c, e, t) => {
      var s = t(1291), i = Math.max, n = Math.min;
      c.exports = function(r, o) {
        var l = s(r);
        return l < 0 ? i(l + o, 0) : n(l, o);
      };
    }
  ),
  /***/
  5854: (
    /***/
    (c, e, t) => {
      var s = t(2777), i = TypeError;
      c.exports = function(n) {
        var r = s(n, "number");
        if (typeof r == "number") throw new i("Can't convert number to bigint");
        return BigInt(r);
      };
    }
  ),
  /***/
  7696: (
    /***/
    (c, e, t) => {
      var s = t(1291), i = t(8014), n = RangeError;
      c.exports = function(r) {
        if (r === void 0) return 0;
        var o = s(r), l = i(o);
        if (o !== l) throw new n("Wrong length or index");
        return l;
      };
    }
  ),
  /***/
  5397: (
    /***/
    (c, e, t) => {
      var s = t(7055), i = t(7750);
      c.exports = function(n) {
        return s(i(n));
      };
    }
  ),
  /***/
  1291: (
    /***/
    (c, e, t) => {
      var s = t(741);
      c.exports = function(i) {
        var n = +i;
        return n !== n || n === 0 ? 0 : s(n);
      };
    }
  ),
  /***/
  8014: (
    /***/
    (c, e, t) => {
      var s = t(1291), i = Math.min;
      c.exports = function(n) {
        var r = s(n);
        return r > 0 ? i(r, 9007199254740991) : 0;
      };
    }
  ),
  /***/
  8981: (
    /***/
    (c, e, t) => {
      var s = t(7750), i = Object;
      c.exports = function(n) {
        return i(s(n));
      };
    }
  ),
  /***/
  9590: (
    /***/
    (c, e, t) => {
      var s = t(1291), i = RangeError;
      c.exports = function(n) {
        var r = s(n);
        if (r < 0) throw new i("The argument can't be less than 0");
        return r;
      };
    }
  ),
  /***/
  2777: (
    /***/
    (c, e, t) => {
      var s = t(9565), i = t(34), n = t(757), r = t(5966), o = t(4270), l = t(8227), h = TypeError, d = l("toPrimitive");
      c.exports = function(u, f) {
        if (!i(u) || n(u)) return u;
        var p = r(u, d), g;
        if (p) {
          if (f === void 0 && (f = "default"), g = s(p, u, f), !i(g) || n(g)) return g;
          throw new h("Can't convert object to primitive value");
        }
        return f === void 0 && (f = "number"), o(u, f);
      };
    }
  ),
  /***/
  6969: (
    /***/
    (c, e, t) => {
      var s = t(2777), i = t(757);
      c.exports = function(n) {
        var r = s(n, "string");
        return i(r) ? r : r + "";
      };
    }
  ),
  /***/
  2140: (
    /***/
    (c, e, t) => {
      var s = t(8227), i = s("toStringTag"), n = {};
      n[i] = "z", c.exports = String(n) === "[object z]";
    }
  ),
  /***/
  655: (
    /***/
    (c, e, t) => {
      var s = t(6955), i = String;
      c.exports = function(n) {
        if (s(n) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return i(n);
      };
    }
  ),
  /***/
  6823: (
    /***/
    (c) => {
      var e = String;
      c.exports = function(t) {
        try {
          return e(t);
        } catch {
          return "Object";
        }
      };
    }
  ),
  /***/
  3392: (
    /***/
    (c, e, t) => {
      var s = t(9504), i = 0, n = Math.random(), r = s(1 .toString);
      c.exports = function(o) {
        return "Symbol(" + (o === void 0 ? "" : o) + ")_" + r(++i + n, 36);
      };
    }
  ),
  /***/
  7040: (
    /***/
    (c, e, t) => {
      var s = t(4495);
      c.exports = s && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  ),
  /***/
  8686: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(9039);
      c.exports = s && i(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: !1
        }).prototype !== 42;
      });
    }
  ),
  /***/
  2812: (
    /***/
    (c) => {
      var e = TypeError;
      c.exports = function(t, s) {
        if (t < s) throw new e("Not enough arguments");
        return t;
      };
    }
  ),
  /***/
  8622: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(4901), n = s.WeakMap;
      c.exports = i(n) && /native code/.test(String(n));
    }
  ),
  /***/
  8227: (
    /***/
    (c, e, t) => {
      var s = t(4576), i = t(5745), n = t(9297), r = t(3392), o = t(4495), l = t(7040), h = s.Symbol, d = i("wks"), u = l ? h.for || h : h && h.withoutSetter || r;
      c.exports = function(f) {
        return n(d, f) || (d[f] = o && n(h, f) ? h[f] : u("Symbol." + f)), d[f];
      };
    }
  ),
  /***/
  6573: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(2106), n = t(3238), r = ArrayBuffer.prototype;
      s && !("detached" in r) && i(r, "detached", {
        configurable: !0,
        get: function() {
          return n(this);
        }
      });
    }
  ),
  /***/
  7936: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(5636);
      i && s({ target: "ArrayBuffer", proto: !0 }, {
        transferToFixedLength: function() {
          return i(this, arguments.length ? arguments[0] : void 0, !1);
        }
      });
    }
  ),
  /***/
  8100: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(5636);
      i && s({ target: "ArrayBuffer", proto: !0 }, {
        transfer: function() {
          return i(this, arguments.length ? arguments[0] : void 0, !0);
        }
      });
    }
  ),
  /***/
  4114: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(8981), n = t(6198), r = t(4527), o = t(6837), l = t(9039), h = l(function() {
        return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
      }), d = function() {
        try {
          Object.defineProperty([], "length", { writable: !1 }).push();
        } catch (f) {
          return f instanceof TypeError;
        }
      }, u = h || !d();
      s({ target: "Array", proto: !0, arity: 1, forced: u }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        push: function(p) {
          var g = i(this), v = n(g), w = arguments.length;
          o(v + w);
          for (var A = 0; A < w; A++)
            g[v] = arguments[A], v++;
          return r(g, v), v;
        }
      });
    }
  ),
  /***/
  8111: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(4576), n = t(679), r = t(8551), o = t(4901), l = t(2787), h = t(2106), d = t(4659), u = t(9039), f = t(9297), p = t(8227), g = t(7657).IteratorPrototype, v = t(3724), w = t(6395), A = "constructor", S = "Iterator", x = p("toStringTag"), T = TypeError, E = i[S], C = w || !o(E) || E.prototype !== g || !u(function() {
        E({});
      }), R = function() {
        if (n(this, g), l(this) === g) throw new T("Abstract class Iterator not directly constructable");
      }, I = function(P, F) {
        v ? h(g, P, {
          configurable: !0,
          get: function() {
            return F;
          },
          set: function(L) {
            if (r(this), this === g) throw new T("You can't redefine this property");
            f(this, P) ? this[P] = L : d(this, P, L);
          }
        }) : g[P] = F;
      };
      f(g, x) || I(x, S), (C || !f(g, A) || g[A] === Object) && I(A, R), R.prototype = g, s({ global: !0, constructor: !0, forced: C }, {
        Iterator: R
      });
    }
  ),
  /***/
  9314: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(9565), n = t(8551), r = t(1767), o = t(4149), l = t(9590), h = t(9462), d = t(6395), u = h(function() {
        for (var f = this.iterator, p = this.next, g, v; this.remaining; )
          if (this.remaining--, g = n(i(p, f)), v = this.done = !!g.done, v) return;
        if (g = n(i(p, f)), v = this.done = !!g.done, !v) return g.value;
      });
      s({ target: "Iterator", proto: !0, real: !0, forced: d }, {
        drop: function(p) {
          n(this);
          var g = l(o(+p));
          return new u(r(this), {
            remaining: g
          });
        }
      });
    }
  ),
  /***/
  1148: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(2652), n = t(9306), r = t(8551), o = t(1767);
      s({ target: "Iterator", proto: !0, real: !0 }, {
        every: function(h) {
          r(this), n(h);
          var d = o(this), u = 0;
          return !i(d, function(f, p) {
            if (!h(f, u++)) return p();
          }, { IS_RECORD: !0, INTERRUPTED: !0 }).stopped;
        }
      });
    }
  ),
  /***/
  2489: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(9565), n = t(9306), r = t(8551), o = t(1767), l = t(9462), h = t(6319), d = t(6395), u = l(function() {
        for (var f = this.iterator, p = this.predicate, g = this.next, v, w, A; ; ) {
          if (v = r(i(g, f)), w = this.done = !!v.done, w) return;
          if (A = v.value, h(f, p, [A, this.counter++], !0)) return A;
        }
      });
      s({ target: "Iterator", proto: !0, real: !0, forced: d }, {
        filter: function(p) {
          return r(this), n(p), new u(o(this), {
            predicate: p
          });
        }
      });
    }
  ),
  /***/
  531: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(9565), n = t(9306), r = t(8551), o = t(1767), l = t(8646), h = t(9462), d = t(9539), u = t(6395), f = h(function() {
        for (var p = this.iterator, g = this.mapper, v, w; ; ) {
          if (w = this.inner) try {
            if (v = r(i(w.next, w.iterator)), !v.done) return v.value;
            this.inner = null;
          } catch (A) {
            d(p, "throw", A);
          }
          if (v = r(i(this.next, p)), this.done = !!v.done) return;
          try {
            this.inner = l(g(v.value, this.counter++), !1);
          } catch (A) {
            d(p, "throw", A);
          }
        }
      });
      s({ target: "Iterator", proto: !0, real: !0, forced: u }, {
        flatMap: function(g) {
          return r(this), n(g), new f(o(this), {
            mapper: g,
            inner: null
          });
        }
      });
    }
  ),
  /***/
  1701: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(713), n = t(6395);
      s({ target: "Iterator", proto: !0, real: !0, forced: n }, {
        map: i
      });
    }
  ),
  /***/
  3579: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(2652), n = t(9306), r = t(8551), o = t(1767);
      s({ target: "Iterator", proto: !0, real: !0 }, {
        some: function(h) {
          r(this), n(h);
          var d = o(this), u = 0;
          return i(d, function(f, p) {
            if (h(f, u++)) return p();
          }, { IS_RECORD: !0, INTERRUPTED: !0 }).stopped;
        }
      });
    }
  ),
  /***/
  1689: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(4576), n = t(8745), r = t(7680), o = t(6043), l = t(9306), h = t(1103), d = i.Promise, u = !1, f = !d || !d.try || h(function() {
        d.try(function(p) {
          u = p === 8;
        }, 8);
      }).error || !u;
      s({ target: "Promise", stat: !0, forced: f }, {
        try: function(p) {
          var g = arguments.length > 1 ? r(arguments, 1) : [], v = o.f(this), w = h(function() {
            return n(l(p), void 0, g);
          });
          return (w.error ? v.reject : v.resolve)(w.value), v.promise;
        }
      });
    }
  ),
  /***/
  4628: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(6043);
      s({ target: "Promise", stat: !0 }, {
        withResolvers: function() {
          var r = i.f(this);
          return {
            promise: r.promise,
            resolve: r.resolve,
            reject: r.reject
          };
        }
      });
    }
  ),
  /***/
  7642: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(3440), n = t(4916);
      s({ target: "Set", proto: !0, real: !0, forced: !n("difference") }, {
        difference: i
      });
    }
  ),
  /***/
  8004: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(9039), n = t(8750), r = t(4916), o = !r("intersection") || i(function() {
        return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
      });
      s({ target: "Set", proto: !0, real: !0, forced: o }, {
        intersection: n
      });
    }
  ),
  /***/
  3853: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(4449), n = t(4916);
      s({ target: "Set", proto: !0, real: !0, forced: !n("isDisjointFrom") }, {
        isDisjointFrom: i
      });
    }
  ),
  /***/
  5876: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(3838), n = t(4916);
      s({ target: "Set", proto: !0, real: !0, forced: !n("isSubsetOf") }, {
        isSubsetOf: i
      });
    }
  ),
  /***/
  2475: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(8527), n = t(4916);
      s({ target: "Set", proto: !0, real: !0, forced: !n("isSupersetOf") }, {
        isSupersetOf: i
      });
    }
  ),
  /***/
  5024: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(3650), n = t(4916);
      s({ target: "Set", proto: !0, real: !0, forced: !n("symmetricDifference") }, {
        symmetricDifference: i
      });
    }
  ),
  /***/
  1698: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(4204), n = t(4916);
      s({ target: "Set", proto: !0, real: !0, forced: !n("union") }, {
        union: i
      });
    }
  ),
  /***/
  7467: (
    /***/
    (c, e, t) => {
      var s = t(7628), i = t(4644), n = i.aTypedArray, r = i.exportTypedArrayMethod, o = i.getTypedArrayConstructor;
      r("toReversed", function() {
        return s(n(this), o(this));
      });
    }
  ),
  /***/
  4732: (
    /***/
    (c, e, t) => {
      var s = t(4644), i = t(9504), n = t(9306), r = t(5370), o = s.aTypedArray, l = s.getTypedArrayConstructor, h = s.exportTypedArrayMethod, d = i(s.TypedArrayPrototype.sort);
      h("toSorted", function(f) {
        f !== void 0 && n(f);
        var p = o(this), g = r(l(p), p);
        return d(g, f);
      });
    }
  ),
  /***/
  9577: (
    /***/
    (c, e, t) => {
      var s = t(9928), i = t(4644), n = t(1108), r = t(1291), o = t(5854), l = i.aTypedArray, h = i.getTypedArrayConstructor, d = i.exportTypedArrayMethod, u = !!function() {
        try {
          new Int8Array(1).with(2, { valueOf: function() {
            throw 8;
          } });
        } catch (f) {
          return f === 8;
        }
      }();
      d("with", function(f, p) {
        var g = l(this), v = r(f), w = n(g) ? o(p) : +p;
        return s(g, h(g), v, w);
      }, !u);
    }
  ),
  /***/
  8992: (
    /***/
    (c, e, t) => {
      t(8111);
    }
  ),
  /***/
  4743: (
    /***/
    (c, e, t) => {
      t(9314);
    }
  ),
  /***/
  3215: (
    /***/
    (c, e, t) => {
      t(1148);
    }
  ),
  /***/
  4520: (
    /***/
    (c, e, t) => {
      t(2489);
    }
  ),
  /***/
  670: (
    /***/
    (c, e, t) => {
      t(531);
    }
  ),
  /***/
  1454: (
    /***/
    (c, e, t) => {
      t(1701);
    }
  ),
  /***/
  7550: (
    /***/
    (c, e, t) => {
      t(3579);
    }
  ),
  /***/
  8335: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(3724), n = t(4576), r = t(7751), o = t(9504), l = t(9565), h = t(4901), d = t(34), u = t(4376), f = t(9297), p = t(655), g = t(6198), v = t(4659), w = t(9039), A = t(8235), S = t(4495), x = n.JSON, T = n.Number, E = n.SyntaxError, C = x && x.parse, R = r("Object", "keys"), I = Object.getOwnPropertyDescriptor, P = o("".charAt), F = o("".slice), L = o(/./.exec), q = o([].push), Y = /^\d$/, K = /^[1-9]$/, gt = /^[\d-]$/, _ = /^[\t\n\r ]$/, k = 0, nt = 1, lt = function(N, M) {
        N = p(N);
        var D = new mt(N, 0), Q = D.parse(), vt = Q.value, V = D.skip(_, Q.end);
        if (V < N.length)
          throw new E('Unexpected extra character: "' + P(N, V) + '" after the parsed data at: ' + V);
        return h(M) ? At({ "": vt }, "", M, Q) : vt;
      }, At = function(N, M, D, Q) {
        var vt = N[M], V = Q && vt === Q.value, It = V && typeof Q.source == "string" ? { source: Q.source } : {}, Mt, As, de, Gt, wr;
        if (d(vt)) {
          var qh = u(vt), Nl = V ? Q.nodes : qh ? [] : {};
          if (qh)
            for (Mt = Nl.length, de = g(vt), Gt = 0; Gt < de; Gt++)
              Pt(vt, Gt, At(vt, "" + Gt, D, Gt < Mt ? Nl[Gt] : void 0));
          else
            for (As = R(vt), de = g(As), Gt = 0; Gt < de; Gt++)
              wr = As[Gt], Pt(vt, wr, At(vt, wr, D, f(Nl, wr) ? Nl[wr] : void 0));
        }
        return l(D, N, M, vt, It);
      }, Pt = function(N, M, D) {
        if (i) {
          var Q = I(N, M);
          if (Q && !Q.configurable) return;
        }
        D === void 0 ? delete N[M] : v(N, M, D);
      }, ut = function(N, M, D, Q) {
        this.value = N, this.end = M, this.source = D, this.nodes = Q;
      }, mt = function(N, M) {
        this.source = N, this.index = M;
      };
      mt.prototype = {
        fork: function(N) {
          return new mt(this.source, N);
        },
        parse: function() {
          var N = this.source, M = this.skip(_, this.index), D = this.fork(M), Q = P(N, M);
          if (L(gt, Q)) return D.number();
          switch (Q) {
            case "{":
              return D.object();
            case "[":
              return D.array();
            case '"':
              return D.string();
            case "t":
              return D.keyword(!0);
            case "f":
              return D.keyword(!1);
            case "n":
              return D.keyword(null);
          }
          throw new E('Unexpected character: "' + Q + '" at: ' + M);
        },
        node: function(N, M, D, Q, vt) {
          return new ut(M, Q, N ? null : F(this.source, D, Q), vt);
        },
        object: function() {
          for (var N = this.source, M = this.index + 1, D = !1, Q = {}, vt = {}; M < N.length; ) {
            if (M = this.until(['"', "}"], M), P(N, M) === "}" && !D) {
              M++;
              break;
            }
            var V = this.fork(M).string(), It = V.value;
            M = V.end, M = this.until([":"], M) + 1, M = this.skip(_, M), V = this.fork(M).parse(), v(vt, It, V), v(Q, It, V.value), M = this.until([",", "}"], V.end);
            var Mt = P(N, M);
            if (Mt === ",")
              D = !0, M++;
            else if (Mt === "}") {
              M++;
              break;
            }
          }
          return this.node(nt, Q, this.index, M, vt);
        },
        array: function() {
          for (var N = this.source, M = this.index + 1, D = !1, Q = [], vt = []; M < N.length; ) {
            if (M = this.skip(_, M), P(N, M) === "]" && !D) {
              M++;
              break;
            }
            var V = this.fork(M).parse();
            if (q(vt, V), q(Q, V.value), M = this.until([",", "]"], V.end), P(N, M) === ",")
              D = !0, M++;
            else if (P(N, M) === "]") {
              M++;
              break;
            }
          }
          return this.node(nt, Q, this.index, M, vt);
        },
        string: function() {
          var N = this.index, M = A(this.source, this.index + 1);
          return this.node(k, M.value, N, M.end);
        },
        number: function() {
          var N = this.source, M = this.index, D = M;
          if (P(N, D) === "-" && D++, P(N, D) === "0") D++;
          else if (L(K, P(N, D))) D = this.skip(Y, D + 1);
          else throw new E("Failed to parse number at: " + D);
          if (P(N, D) === "." && (D = this.skip(Y, D + 1)), P(N, D) === "e" || P(N, D) === "E") {
            D++, (P(N, D) === "+" || P(N, D) === "-") && D++;
            var Q = D;
            if (D = this.skip(Y, D), Q === D) throw new E("Failed to parse number's exponent value at: " + D);
          }
          return this.node(k, T(F(N, M, D)), M, D);
        },
        keyword: function(N) {
          var M = "" + N, D = this.index, Q = D + M.length;
          if (F(this.source, D, Q) !== M) throw new E("Failed to parse value at: " + D);
          return this.node(k, N, D, Q);
        },
        skip: function(N, M) {
          for (var D = this.source; M < D.length && L(N, P(D, M)); M++) ;
          return M;
        },
        until: function(N, M) {
          M = this.skip(_, M);
          for (var D = P(this.source, M), Q = 0; Q < N.length; Q++) if (N[Q] === D) return M;
          throw new E('Unexpected character: "' + D + '" at: ' + M);
        }
      };
      var bs = w(function() {
        var N = "9007199254740993", M;
        return C(N, function(D, Q, vt) {
          M = vt.source;
        }), M !== N;
      }), ys = S && !w(function() {
        return 1 / C("-0 	") !== -1 / 0;
      });
      s({ target: "JSON", stat: !0, forced: bs }, {
        parse: function(M, D) {
          return ys && !h(D) ? C(M) : lt(M, D);
        }
      });
    }
  ),
  /***/
  5247: (
    /***/
    (c, e, t) => {
      t(1689);
    }
  ),
  /***/
  4979: (
    /***/
    (c, e, t) => {
      var s = t(6518), i = t(4576), n = t(7751), r = t(6980), o = t(4913).f, l = t(9297), h = t(679), d = t(3167), u = t(2603), f = t(5002), p = t(8574), g = t(3724), v = t(6395), w = "DOMException", A = n("Error"), S = n(w), x = function() {
        h(this, T);
        var _ = arguments.length, k = u(_ < 1 ? void 0 : arguments[0]), nt = u(_ < 2 ? void 0 : arguments[1], "Error"), lt = new S(k, nt), At = new A(k);
        return At.name = w, o(lt, "stack", r(1, p(At.stack, 1))), d(lt, this, x), lt;
      }, T = x.prototype = S.prototype, E = "stack" in new A(w), C = "stack" in new S(1, 2), R = S && g && Object.getOwnPropertyDescriptor(i, w), I = !!R && !(R.writable && R.configurable), P = E && !I && !C;
      s({ global: !0, constructor: !0, forced: v || P }, {
        // TODO: fix export logic
        DOMException: P ? x : S
      });
      var F = n(w), L = F.prototype;
      if (L.constructor !== F) {
        v || o(L, "constructor", r(1, F));
        for (var q in f) if (l(f, q)) {
          var Y = f[q], K = Y.s;
          l(F, K) || o(F, K, r(6, Y.c));
        }
      }
    }
  ),
  /***/
  4603: (
    /***/
    (c, e, t) => {
      var s = t(6840), i = t(9504), n = t(655), r = t(2812), o = URLSearchParams, l = o.prototype, h = i(l.append), d = i(l.delete), u = i(l.forEach), f = i([].push), p = new o("a=1&a=2&b=3");
      p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && s(l, "delete", function(g) {
        var v = arguments.length, w = v < 2 ? void 0 : arguments[1];
        if (v && w === void 0) return d(this, g);
        var A = [];
        u(this, function(P, F) {
          f(A, { key: F, value: P });
        }), r(v, 1);
        for (var S = n(g), x = n(w), T = 0, E = 0, C = !1, R = A.length, I; T < R; )
          I = A[T++], C || I.key === S ? (C = !0, d(this, I.key)) : E++;
        for (; E < R; )
          I = A[E++], I.key === S && I.value === x || h(this, I.key, I.value);
      }, { enumerable: !0, unsafe: !0 });
    }
  ),
  /***/
  7566: (
    /***/
    (c, e, t) => {
      var s = t(6840), i = t(9504), n = t(655), r = t(2812), o = URLSearchParams, l = o.prototype, h = i(l.getAll), d = i(l.has), u = new o("a=1");
      (u.has("a", 2) || !u.has("a", void 0)) && s(l, "has", function(p) {
        var g = arguments.length, v = g < 2 ? void 0 : arguments[1];
        if (g && v === void 0) return d(this, p);
        var w = h(this, p);
        r(g, 1);
        for (var A = n(v), S = 0; S < w.length; )
          if (w[S++] === A) return !0;
        return !1;
      }, { enumerable: !0, unsafe: !0 });
    }
  ),
  /***/
  8721: (
    /***/
    (c, e, t) => {
      var s = t(3724), i = t(9504), n = t(2106), r = URLSearchParams.prototype, o = i(r.forEach);
      s && !("size" in r) && n(r, "size", {
        get: function() {
          var h = 0;
          return o(this, function() {
            h++;
          }), h;
        },
        configurable: !0,
        enumerable: !0
      });
    }
  )
  /******/
}, Hd = {};
function rt(c) {
  var e = Hd[c];
  if (e !== void 0)
    return e.exports;
  var t = Hd[c] = {
    /******/
    // no module.id needed
    /******/
    // no module.loaded needed
    /******/
    exports: {}
    /******/
  };
  return op[c].call(t.exports, t, t.exports, rt), t.exports;
}
rt.d = (c, e) => {
  for (var t in e)
    rt.o(e, t) && !rt.o(c, t) && Object.defineProperty(c, t, { enumerable: !0, get: e[t] });
};
rt.o = (c, e) => Object.prototype.hasOwnProperty.call(c, e);
var W = globalThis.pdfjsLib = {};
rt.d(W, {
  AbortException: () => (
    /* reexport */
    sn
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    md
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    it
  ),
  AnnotationEditorType: () => (
    /* reexport */
    Z
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    vr
  ),
  AnnotationLayer: () => (
    /* reexport */
    sm
  ),
  AnnotationMode: () => (
    /* reexport */
    xi
  ),
  ColorPicker: () => (
    /* reexport */
    Eh
  ),
  DOMSVGFactory: () => (
    /* reexport */
    Md
  ),
  DrawLayer: () => (
    /* reexport */
    yd
  ),
  FeatureTest: () => (
    /* reexport */
    be
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    bi
  ),
  ImageKind: () => (
    /* reexport */
    Ul
  ),
  InvalidPDFException: () => (
    /* reexport */
    hc
  ),
  MissingPDFException: () => (
    /* reexport */
    ro
  ),
  OPS: () => (
    /* reexport */
    ss
  ),
  OutputScale: () => (
    /* reexport */
    dc
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    lf
  ),
  PDFDateString: () => (
    /* reexport */
    Cd
  ),
  PDFWorker: () => (
    /* reexport */
    Lr
  ),
  PasswordResponses: () => (
    /* reexport */
    dp
  ),
  PermissionFlag: () => (
    /* reexport */
    cp
  ),
  PixelsPerInch: () => (
    /* reexport */
    nn
  ),
  RenderingCancelledException: () => (
    /* reexport */
    xd
  ),
  TextLayer: () => (
    /* reexport */
    ao
  ),
  TouchManager: () => (
    /* reexport */
    wh
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    bh
  ),
  Util: () => (
    /* reexport */
    U
  ),
  VerbosityLevel: () => (
    /* reexport */
    Vh
  ),
  XfaLayer: () => (
    /* reexport */
    cf
  ),
  build: () => (
    /* reexport */
    Fg
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    gp
  ),
  fetchData: () => (
    /* reexport */
    Kh
  ),
  getDocument: () => (
    /* reexport */
    Rg
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    xp
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    Tp
  ),
  getXfaPageViewport: () => (
    /* reexport */
    Cp
  ),
  isDataScheme: () => (
    /* reexport */
    Qh
  ),
  isPdfFile: () => (
    /* reexport */
    Td
  ),
  noContextMenu: () => (
    /* reexport */
    ms
  ),
  normalizeUnicode: () => (
    /* reexport */
    wp
  ),
  setLayerDimensions: () => (
    /* reexport */
    mr
  ),
  shadow: () => (
    /* reexport */
    st
  ),
  stopEvent: () => (
    /* reexport */
    Ue
  ),
  version: () => (
    /* reexport */
    kg
  )
});
rt(4114);
rt(6573);
rt(8100);
rt(7936);
rt(7467);
rt(4732);
rt(9577);
rt(5247);
rt(4979);
rt(4603);
rt(7566);
rt(8721);
const ce = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), au = [1, 0, 0, 1, 0, 0], lc = [1e-3, 0, 0, 1e-3, 0, 0], lp = 1e7, ec = 1.35, $e = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, xi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, hp = "pdfjs_internal_editor_", Z = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, it = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35,
  DRAW_STEP: 41
}, cp = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, se = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Ul = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Bt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  WIDGET: 20
}, Ba = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, Vh = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, ss = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93
}, dp = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Wh = Vh.WARNINGS;
function up(c) {
  Number.isInteger(c) && (Wh = c);
}
function fp() {
  return Wh;
}
function Xh(c) {
  Wh >= Vh.INFOS && console.log(`Info: ${c}`);
}
function X(c) {
  Wh >= Vh.WARNINGS && console.log(`Warning: ${c}`);
}
function bt(c) {
  throw new Error(c);
}
function Ft(c, e) {
  c || bt(e);
}
function pp(c) {
  switch (c == null ? void 0 : c.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function gp(c, e = null, t = null) {
  if (!c)
    return null;
  try {
    if (t && typeof c == "string") {
      if (t.addDefaultProtocol && c.startsWith("www.")) {
        const i = c.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (c = `http://${c}`);
      }
      if (t.tryConvertEncoding)
        try {
          c = Ap(c);
        } catch {
        }
    }
    const s = e ? new URL(c, e) : new URL(c);
    if (pp(s))
      return s;
  } catch {
  }
  return null;
}
function st(c, e, t, s = !1) {
  return Object.defineProperty(c, e, {
    value: t,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), t;
}
const an = function() {
  function e(t, s) {
    this.message = t, this.name = s;
  }
  return e.prototype = new Error(), e.constructor = e, e;
}();
class $d extends an {
  constructor(e, t) {
    super(e, "PasswordException"), this.code = t;
  }
}
class sc extends an {
  constructor(e, t) {
    super(e, "UnknownErrorException"), this.details = t;
  }
}
class hc extends an {
  constructor(e) {
    super(e, "InvalidPDFException");
  }
}
class ro extends an {
  constructor(e) {
    super(e, "MissingPDFException");
  }
}
class bh extends an {
  constructor(e, t) {
    super(e, "UnexpectedResponseException"), this.status = t;
  }
}
class mp extends an {
  constructor(e) {
    super(e, "FormatError");
  }
}
class sn extends an {
  constructor(e) {
    super(e, "AbortException");
  }
}
function ou(c) {
  (typeof c != "object" || (c == null ? void 0 : c.length) === void 0) && bt("Invalid argument for bytesToString");
  const e = c.length, t = 8192;
  if (e < t)
    return String.fromCharCode.apply(null, c);
  const s = [];
  for (let i = 0; i < e; i += t) {
    const n = Math.min(i + t, e), r = c.subarray(i, n);
    s.push(String.fromCharCode.apply(null, r));
  }
  return s.join("");
}
function Yh(c) {
  typeof c != "string" && bt("Invalid argument for stringToBytes");
  const e = c.length, t = new Uint8Array(e);
  for (let s = 0; s < e; ++s)
    t[s] = c.charCodeAt(s) & 255;
  return t;
}
function vp(c) {
  return String.fromCharCode(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255);
}
function Sd(c) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const [t, s] of c)
    e[t] = s;
  return e;
}
function bp() {
  const c = new Uint8Array(4);
  return c[0] = 1, new Uint32Array(c.buffer, 0, 1)[0] === 1;
}
function yp() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class be {
  static get isLittleEndian() {
    return st(this, "isLittleEndian", bp());
  }
  static get isEvalSupported() {
    return st(this, "isEvalSupported", yp());
  }
  static get isOffscreenCanvasSupported() {
    return st(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return st(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? st(this, "platform", {
      isMac: navigator.platform.includes("Mac"),
      isWindows: navigator.platform.includes("Win"),
      isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
    }) : st(this, "platform", {
      isMac: !1,
      isWindows: !1,
      isFirefox: !1
    });
  }
  static get isCSSRoundSupported() {
    var e, t;
    return st(this, "isCSSRoundSupported", (t = (e = globalThis.CSS) == null ? void 0 : e.supports) == null ? void 0 : t.call(e, "width: round(1.5px, 1px)"));
  }
}
const ic = Array.from(Array(256).keys(), (c) => c.toString(16).padStart(2, "0"));
var yi, Gl, cc;
class U {
  static makeHexColor(e, t, s) {
    return `#${ic[e]}${ic[t]}${ic[s]}`;
  }
  static scaleMinMax(e, t) {
    let s;
    e[0] ? (e[0] < 0 && (s = t[0], t[0] = t[2], t[2] = s), t[0] *= e[0], t[2] *= e[0], e[3] < 0 && (s = t[1], t[1] = t[3], t[3] = s), t[1] *= e[3], t[3] *= e[3]) : (s = t[0], t[0] = t[1], t[1] = s, s = t[2], t[2] = t[3], t[3] = s, e[1] < 0 && (s = t[1], t[1] = t[3], t[3] = s), t[1] *= e[1], t[3] *= e[1], e[2] < 0 && (s = t[0], t[0] = t[2], t[2] = s), t[0] *= e[2], t[2] *= e[2]), t[0] += e[4], t[1] += e[5], t[2] += e[4], t[3] += e[5];
  }
  static transform(e, t) {
    return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]];
  }
  static applyTransform(e, t) {
    const s = e[0] * t[0] + e[1] * t[2] + t[4], i = e[0] * t[1] + e[1] * t[3] + t[5];
    return [s, i];
  }
  static applyInverseTransform(e, t) {
    const s = t[0] * t[3] - t[1] * t[2], i = (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / s, n = (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / s;
    return [i, n];
  }
  static getAxialAlignedBoundingBox(e, t) {
    const s = this.applyTransform(e, t), i = this.applyTransform(e.slice(2, 4), t), n = this.applyTransform([e[0], e[3]], t), r = this.applyTransform([e[2], e[1]], t);
    return [Math.min(s[0], i[0], n[0], r[0]), Math.min(s[1], i[1], n[1], r[1]), Math.max(s[0], i[0], n[0], r[0]), Math.max(s[1], i[1], n[1], r[1])];
  }
  static inverseTransform(e) {
    const t = e[0] * e[3] - e[1] * e[2];
    return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t];
  }
  static singularValueDecompose2dScale(e) {
    const t = [e[0], e[2], e[1], e[3]], s = e[0] * t[0] + e[1] * t[2], i = e[0] * t[1] + e[1] * t[3], n = e[2] * t[0] + e[3] * t[2], r = e[2] * t[1] + e[3] * t[3], o = (s + r) / 2, l = Math.sqrt((s + r) ** 2 - 4 * (s * r - n * i)) / 2, h = o + l || 1, d = o - l || 1;
    return [Math.sqrt(h), Math.sqrt(d)];
  }
  static normalizeRect(e) {
    const t = e.slice(0);
    return e[0] > e[2] && (t[0] = e[2], t[2] = e[0]), e[1] > e[3] && (t[1] = e[3], t[3] = e[1]), t;
  }
  static intersect(e, t) {
    const s = Math.max(Math.min(e[0], e[2]), Math.min(t[0], t[2])), i = Math.min(Math.max(e[0], e[2]), Math.max(t[0], t[2]));
    if (s > i)
      return null;
    const n = Math.max(Math.min(e[1], e[3]), Math.min(t[1], t[3])), r = Math.min(Math.max(e[1], e[3]), Math.max(t[1], t[3]));
    return n > r ? null : [s, n, i, r];
  }
  static bezierBoundingBox(e, t, s, i, n, r, o, l, h) {
    return h ? (h[0] = Math.min(h[0], e, o), h[1] = Math.min(h[1], t, l), h[2] = Math.max(h[2], e, o), h[3] = Math.max(h[3], t, l)) : h = [Math.min(e, o), Math.min(t, l), Math.max(e, o), Math.max(t, l)], y(this, yi, cc).call(this, e, s, n, o, t, i, r, l, 3 * (-e + 3 * (s - n) + o), 6 * (e - 2 * s + n), 3 * (s - e), h), y(this, yi, cc).call(this, e, s, n, o, t, i, r, l, 3 * (-t + 3 * (i - r) + l), 6 * (t - 2 * i + r), 3 * (i - t), h), h;
  }
}
yi = new WeakSet(), Gl = function(e, t, s, i, n, r, o, l, h, d) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, f = h * h, p = f * h, g = u * (u * (u * e + 3 * h * t) + 3 * f * s) + p * i, v = u * (u * (u * n + 3 * h * r) + 3 * f * o) + p * l;
  d[0] = Math.min(d[0], g), d[1] = Math.min(d[1], v), d[2] = Math.max(d[2], g), d[3] = Math.max(d[3], v);
}, cc = function(e, t, s, i, n, r, o, l, h, d, u, f) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(d) >= 1e-12 && y(this, yi, Gl).call(this, e, t, s, i, n, r, o, l, -u / d, f);
    return;
  }
  const p = d ** 2 - 4 * u * h;
  if (p < 0)
    return;
  const g = Math.sqrt(p), v = 2 * h;
  y(this, yi, Gl).call(this, e, t, s, i, n, r, o, l, (-d + g) / v, f), y(this, yi, Gl).call(this, e, t, s, i, n, r, o, l, (-d - g) / v, f);
}, b(U, yi);
function Ap(c) {
  return decodeURIComponent(escape(c));
}
let nc = null, jd = null;
function wp(c) {
  return nc || (nc = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, jd = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), c.replaceAll(nc, (e, t, s) => t ? t.normalize("NFKC") : jd.get(s));
}
function Sp() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const c = new Uint8Array(32);
  return crypto.getRandomValues(c), ou(c);
}
const Ed = "pdfjs_internal_id_";
function Ep(c) {
  return Uint8Array.prototype.toBase64 ? c.toBase64() : btoa(ou(c));
}
rt(4628);
rt(7642);
rt(8004);
rt(3853);
rt(5876);
rt(2475);
rt(5024);
rt(1698);
rt(1454);
rt(8992);
rt(4743);
rt(3215);
rt(7550);
rt(8335);
const Us = "http://www.w3.org/2000/svg", cn = class cn {
};
G(cn, "CSS", 96), G(cn, "PDF", 72), G(cn, "PDF_TO_CSS_UNITS", cn.CSS / cn.PDF);
let nn = cn;
async function Kh(c, e = "text") {
  if (Ua(c, document.baseURI)) {
    const t = await fetch(c);
    if (!t.ok)
      throw new Error(t.statusText);
    switch (e) {
      case "arraybuffer":
        return t.arrayBuffer();
      case "blob":
        return t.blob();
      case "json":
        return t.json();
    }
    return t.text();
  }
  return new Promise((t, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", c, !0), i.responseType = e, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (e) {
            case "arraybuffer":
            case "blob":
            case "json":
              t(i.response);
              return;
          }
          t(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class Dl {
  constructor({
    viewBox: e,
    userUnit: t,
    scale: s,
    rotation: i,
    offsetX: n = 0,
    offsetY: r = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = e, this.userUnit = t, this.scale = s, this.rotation = i, this.offsetX = n, this.offsetY = r, s *= t;
    const l = (e[2] + e[0]) / 2, h = (e[3] + e[1]) / 2;
    let d, u, f, p;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        d = -1, u = 0, f = 0, p = 1;
        break;
      case 90:
        d = 0, u = 1, f = 1, p = 0;
        break;
      case 270:
        d = 0, u = -1, f = -1, p = 0;
        break;
      case 0:
        d = 1, u = 0, f = 0, p = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (f = -f, p = -p);
    let g, v, w, A;
    d === 0 ? (g = Math.abs(h - e[1]) * s + n, v = Math.abs(l - e[0]) * s + r, w = (e[3] - e[1]) * s, A = (e[2] - e[0]) * s) : (g = Math.abs(l - e[0]) * s + n, v = Math.abs(h - e[1]) * s + r, w = (e[2] - e[0]) * s, A = (e[3] - e[1]) * s), this.transform = [d * s, u * s, f * s, p * s, g - d * s * l - f * s * h, v - u * s * l - p * s * h], this.width = w, this.height = A;
  }
  get rawDims() {
    const {
      userUnit: e,
      viewBox: t
    } = this, s = t.map((i) => i * e);
    return st(this, "rawDims", {
      pageWidth: s[2] - s[0],
      pageHeight: s[3] - s[1],
      pageX: s[0],
      pageY: s[1]
    });
  }
  clone({
    scale: e = this.scale,
    rotation: t = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: n = !1
  } = {}) {
    return new Dl({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: e,
      rotation: t,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  convertToViewportPoint(e, t) {
    return U.applyTransform([e, t], this.transform);
  }
  convertToViewportRectangle(e) {
    const t = U.applyTransform([e[0], e[1]], this.transform), s = U.applyTransform([e[2], e[3]], this.transform);
    return [t[0], t[1], s[0], s[1]];
  }
  convertToPdfPoint(e, t) {
    return U.applyInverseTransform([e, t], this.transform);
  }
}
class xd extends an {
  constructor(e, t = 0) {
    super(e, "RenderingCancelledException"), this.extraDelay = t;
  }
}
function Qh(c) {
  const e = c.length;
  let t = 0;
  for (; t < e && c[t].trim() === ""; )
    t++;
  return c.substring(t, t + 5).toLowerCase() === "data:";
}
function Td(c) {
  return typeof c == "string" && /\.pdf$/i.test(c);
}
function xp(c) {
  return [c] = c.split(/[#?]/, 1), c.substring(c.lastIndexOf("/") + 1);
}
function Tp(c, e = "document.pdf") {
  if (typeof c != "string")
    return e;
  if (Qh(c))
    return X('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), e;
  const t = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = t.exec(c);
  let n = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (n && (n = n[0], n.includes("%")))
    try {
      n = s.exec(decodeURIComponent(n))[0];
    } catch {
    }
  return n || e;
}
class Ud {
  constructor() {
    G(this, "started", /* @__PURE__ */ Object.create(null));
    G(this, "times", []);
  }
  time(e) {
    e in this.started && X(`Timer is already running for ${e}`), this.started[e] = Date.now();
  }
  timeEnd(e) {
    e in this.started || X(`Timer has not been started for ${e}`), this.times.push({
      name: e,
      start: this.started[e],
      end: Date.now()
    }), delete this.started[e];
  }
  toString() {
    const e = [];
    let t = 0;
    for (const {
      name: s
    } of this.times)
      t = Math.max(s.length, t);
    for (const {
      name: s,
      start: i,
      end: n
    } of this.times)
      e.push(`${s.padEnd(t)} ${n - i}ms
`);
    return e.join("");
  }
}
function Ua(c, e) {
  try {
    const {
      protocol: t
    } = e ? new URL(c, e) : new URL(c);
    return t === "http:" || t === "https:";
  } catch {
    return !1;
  }
}
function ms(c) {
  c.preventDefault();
}
function Ue(c) {
  c.preventDefault(), c.stopPropagation();
}
var lo;
class Cd {
  static toDateObject(e) {
    if (!e || typeof e != "string")
      return null;
    a(this, lo) || m(this, lo, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const t = a(this, lo).exec(e);
    if (!t)
      return null;
    const s = parseInt(t[1], 10);
    let i = parseInt(t[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let n = parseInt(t[3], 10);
    n = n >= 1 && n <= 31 ? n : 1;
    let r = parseInt(t[4], 10);
    r = r >= 0 && r <= 23 ? r : 0;
    let o = parseInt(t[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(t[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = t[7] || "Z";
    let d = parseInt(t[8], 10);
    d = d >= 0 && d <= 23 ? d : 0;
    let u = parseInt(t[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, h === "-" ? (r += d, o += u) : h === "+" && (r -= d, o -= u), new Date(Date.UTC(s, i, n, r, o, l));
  }
}
lo = new WeakMap(), b(Cd, lo);
function Cp(c, {
  scale: e = 1,
  rotation: t = 0
}) {
  const {
    width: s,
    height: i
  } = c.attributes.style, n = [0, 0, parseInt(s), parseInt(i)];
  return new Dl({
    viewBox: n,
    userUnit: 1,
    scale: e,
    rotation: t
  });
}
function Rd(c) {
  if (c.startsWith("#")) {
    const e = parseInt(c.slice(1), 16);
    return [(e & 16711680) >> 16, (e & 65280) >> 8, e & 255];
  }
  return c.startsWith("rgb(") ? c.slice(4, -1).split(",").map((e) => parseInt(e)) : c.startsWith("rgba(") ? c.slice(5, -1).split(",").map((e) => parseInt(e)).slice(0, 3) : (X(`Not a valid color format: "${c}"`), [0, 0, 0]);
}
function Rp(c) {
  const e = document.createElement("span");
  e.style.visibility = "hidden", document.body.append(e);
  for (const t of c.keys()) {
    e.style.color = t;
    const s = window.getComputedStyle(e).color;
    c.set(t, Rd(s));
  }
  e.remove();
}
function Et(c) {
  const {
    a: e,
    b: t,
    c: s,
    d: i,
    e: n,
    f: r
  } = c.getTransform();
  return [e, t, s, i, n, r];
}
function ws(c) {
  const {
    a: e,
    b: t,
    c: s,
    d: i,
    e: n,
    f: r
  } = c.getTransform().invertSelf();
  return [e, t, s, i, n, r];
}
function mr(c, e, t = !1, s = !0) {
  if (e instanceof Dl) {
    const {
      pageWidth: i,
      pageHeight: n
    } = e.rawDims, {
      style: r
    } = c, o = be.isCSSRoundSupported, l = `var(--scale-factor) * ${i}px`, h = `var(--scale-factor) * ${n}px`, d = o ? `round(down, ${l}, var(--scale-round-x, 1px))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    !t || e.rotation % 180 === 0 ? (r.width = d, r.height = u) : (r.width = u, r.height = d);
  }
  s && c.setAttribute("data-main-rotation", e.rotation);
}
class dc {
  constructor() {
    const e = window.devicePixelRatio || 1;
    this.sx = e, this.sy = e;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
}
var Ti, un, is, fn, ho, co, Ch, lu, ye, hu, cu, zl, du, fc;
const Vs = class Vs {
  constructor(e) {
    b(this, ye);
    b(this, Ti, null);
    b(this, un, null);
    b(this, is);
    b(this, fn, null);
    b(this, ho, null);
    m(this, is, e), a(Vs, co) || m(Vs, co, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const e = m(this, Ti, document.createElement("div"));
    e.classList.add("editToolbar", "hidden"), e.setAttribute("role", "toolbar");
    const t = a(this, is)._uiManager._signal;
    e.addEventListener("contextmenu", ms, {
      signal: t
    }), e.addEventListener("pointerdown", y(Vs, Ch, lu), {
      signal: t
    });
    const s = m(this, fn, document.createElement("div"));
    s.className = "buttons", e.append(s);
    const i = a(this, is).toolbarPosition;
    if (i) {
      const {
        style: n
      } = e, r = a(this, is)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      n.insetInlineEnd = `${100 * r}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return y(this, ye, du).call(this), e;
  }
  get div() {
    return a(this, Ti);
  }
  hide() {
    var e;
    a(this, Ti).classList.add("hidden"), (e = a(this, un)) == null || e.hideDropdown();
  }
  show() {
    var e;
    a(this, Ti).classList.remove("hidden"), (e = a(this, ho)) == null || e.shown();
  }
  async addAltText(e) {
    const t = await e.render();
    y(this, ye, zl).call(this, t), a(this, fn).prepend(t, a(this, ye, fc)), m(this, ho, e);
  }
  addColorPicker(e) {
    m(this, un, e);
    const t = e.renderButton();
    y(this, ye, zl).call(this, t), a(this, fn).prepend(t, a(this, ye, fc));
  }
  remove() {
    var e;
    a(this, Ti).remove(), (e = a(this, un)) == null || e.destroy(), m(this, un, null);
  }
};
Ti = new WeakMap(), un = new WeakMap(), is = new WeakMap(), fn = new WeakMap(), ho = new WeakMap(), co = new WeakMap(), Ch = new WeakSet(), lu = function(e) {
  e.stopPropagation();
}, ye = new WeakSet(), hu = function(e) {
  a(this, is)._focusEventsAllowed = !1, Ue(e);
}, cu = function(e) {
  a(this, is)._focusEventsAllowed = !0, Ue(e);
}, zl = function(e) {
  const t = a(this, is)._uiManager._signal;
  e.addEventListener("focusin", y(this, ye, hu).bind(this), {
    capture: !0,
    signal: t
  }), e.addEventListener("focusout", y(this, ye, cu).bind(this), {
    capture: !0,
    signal: t
  }), e.addEventListener("contextmenu", ms, {
    signal: t
  });
}, du = function() {
  const {
    editorType: e,
    _uiManager: t
  } = a(this, is), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", a(Vs, co)[e]), y(this, ye, zl).call(this, s), s.addEventListener("click", (i) => {
    t.delete();
  }, {
    signal: t._signal
  }), a(this, fn).append(s);
}, fc = function() {
  const e = document.createElement("div");
  return e.className = "divider", e;
}, b(Vs, Ch), b(Vs, co, null);
let uc = Vs;
var uo, pn, gn, rn, uu, fu, pu;
class Pp {
  constructor(e) {
    b(this, rn);
    b(this, uo, null);
    b(this, pn, null);
    b(this, gn);
    m(this, gn, e);
  }
  show(e, t, s) {
    const [i, n] = y(this, rn, fu).call(this, t, s), {
      style: r
    } = a(this, pn) || m(this, pn, y(this, rn, uu).call(this));
    e.append(a(this, pn)), r.insetInlineEnd = `${100 * i}%`, r.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    a(this, pn).remove();
  }
}
uo = new WeakMap(), pn = new WeakMap(), gn = new WeakMap(), rn = new WeakSet(), uu = function() {
  const e = m(this, pn, document.createElement("div"));
  e.className = "editToolbar", e.setAttribute("role", "toolbar"), e.addEventListener("contextmenu", ms, {
    signal: a(this, gn)._signal
  });
  const t = m(this, uo, document.createElement("div"));
  return t.className = "buttons", e.append(t), y(this, rn, pu).call(this), e;
}, fu = function(e, t) {
  let s = 0, i = 0;
  for (const n of e) {
    const r = n.y + n.height;
    if (r < s)
      continue;
    const o = n.x + (t ? n.width : 0);
    if (r > s) {
      i = o, s = r;
      continue;
    }
    t ? o > i && (i = o) : o < i && (i = o);
  }
  return [t ? 1 - i : i, s];
}, pu = function() {
  const e = document.createElement("button");
  e.className = "highlightButton", e.tabIndex = 0, e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const t = document.createElement("span");
  e.append(t), t.className = "visuallyHidden", t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = a(this, gn)._signal;
  e.addEventListener("contextmenu", ms, {
    signal: s
  }), e.addEventListener("click", () => {
    a(this, gn).highlightSelection("floating_button");
  }, {
    signal: s
  }), a(this, uo).append(e);
};
function yh(c, e, t) {
  for (const s of t)
    e.addEventListener(s, c[s].bind(c));
}
var Rh;
class Ip {
  constructor() {
    b(this, Rh, 0);
  }
  get id() {
    return `${hp}${ue(this, Rh)._++}`;
  }
}
Rh = new WeakMap();
var Or, fo, re, Dr, Vl;
const Ld = class Ld {
  constructor() {
    b(this, Dr);
    b(this, Or, Sp());
    b(this, fo, 0);
    b(this, re, null);
  }
  static get _isSVGFittingCanvas() {
    const e = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = e;
    const n = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return st(this, "_isSVGFittingCanvas", n);
  }
  async getFromFile(e) {
    const {
      lastModified: t,
      name: s,
      size: i,
      type: n
    } = e;
    return y(this, Dr, Vl).call(this, `${t}_${s}_${i}_${n}`, e);
  }
  async getFromUrl(e) {
    return y(this, Dr, Vl).call(this, e, e);
  }
  async getFromBlob(e, t) {
    const s = await t;
    return y(this, Dr, Vl).call(this, e, s);
  }
  async getFromId(e) {
    a(this, re) || m(this, re, /* @__PURE__ */ new Map());
    const t = a(this, re).get(e);
    if (!t)
      return null;
    if (t.bitmap)
      return t.refCounter += 1, t;
    if (t.file)
      return this.getFromFile(t.file);
    if (t.blobPromise) {
      const {
        blobPromise: s
      } = t;
      return delete t.blobPromise, this.getFromBlob(t.id, s);
    }
    return this.getFromUrl(t.url);
  }
  getFromCanvas(e, t) {
    a(this, re) || m(this, re, /* @__PURE__ */ new Map());
    let s = a(this, re).get(e);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(t.width, t.height);
    return i.getContext("2d").drawImage(t, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${a(this, Or)}_${ue(this, fo)._++}`,
      refCounter: 1,
      isSvg: !1
    }, a(this, re).set(e, s), a(this, re).set(s.id, s), s;
  }
  getSvgUrl(e) {
    const t = a(this, re).get(e);
    return t != null && t.isSvg ? t.svgUrl : null;
  }
  deleteId(e) {
    var i;
    a(this, re) || m(this, re, /* @__PURE__ */ new Map());
    const t = a(this, re).get(e);
    if (!t || (t.refCounter -= 1, t.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = t;
    if (!t.url && !t.file) {
      const n = new OffscreenCanvas(s.width, s.height);
      n.getContext("bitmaprenderer").transferFromImageBitmap(s), t.blobPromise = n.convertToBlob();
    }
    (i = s.close) == null || i.call(s), t.bitmap = null;
  }
  isValidId(e) {
    return e.startsWith(`image_${a(this, Or)}_`);
  }
};
Or = new WeakMap(), fo = new WeakMap(), re = new WeakMap(), Dr = new WeakSet(), Vl = async function(e, t) {
  a(this, re) || m(this, re, /* @__PURE__ */ new Map());
  let s = a(this, re).get(e);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${a(this, Or)}_${ue(this, fo)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof t == "string" ? (s.url = t, i = await Kh(t, "blob")) : t instanceof File ? i = s.file = t : t instanceof Blob && (i = t), i.type === "image/svg+xml") {
      const n = Ld._isSVGFittingCanvas, r = new FileReader(), o = new Image(), l = new Promise((h, d) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, r.onload = async () => {
          const u = s.svgUrl = r.result;
          o.src = await n ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = r.onerror = d;
      });
      r.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    X(i), s = null;
  }
  return a(this, re).set(e, s), s && a(this, re).set(s.id, s), s;
};
let pc = Ld;
var Lt, Ci, po, Tt;
class Mp {
  constructor(e = 128) {
    b(this, Lt, []);
    b(this, Ci, !1);
    b(this, po);
    b(this, Tt, -1);
    m(this, po, e);
  }
  add({
    cmd: e,
    undo: t,
    post: s,
    mustExec: i,
    type: n = NaN,
    overwriteIfSameType: r = !1,
    keepUndo: o = !1
  }) {
    if (i && e(), a(this, Ci))
      return;
    const l = {
      cmd: e,
      undo: t,
      post: s,
      type: n
    };
    if (a(this, Tt) === -1) {
      a(this, Lt).length > 0 && (a(this, Lt).length = 0), m(this, Tt, 0), a(this, Lt).push(l);
      return;
    }
    if (r && a(this, Lt)[a(this, Tt)].type === n) {
      o && (l.undo = a(this, Lt)[a(this, Tt)].undo), a(this, Lt)[a(this, Tt)] = l;
      return;
    }
    const h = a(this, Tt) + 1;
    h === a(this, po) ? a(this, Lt).splice(0, 1) : (m(this, Tt, h), h < a(this, Lt).length && a(this, Lt).splice(h)), a(this, Lt).push(l);
  }
  undo() {
    if (a(this, Tt) === -1)
      return;
    m(this, Ci, !0);
    const {
      undo: e,
      post: t
    } = a(this, Lt)[a(this, Tt)];
    e(), t == null || t(), m(this, Ci, !1), m(this, Tt, a(this, Tt) - 1);
  }
  redo() {
    if (a(this, Tt) < a(this, Lt).length - 1) {
      m(this, Tt, a(this, Tt) + 1), m(this, Ci, !0);
      const {
        cmd: e,
        post: t
      } = a(this, Lt)[a(this, Tt)];
      e(), t == null || t(), m(this, Ci, !1);
    }
  }
  hasSomethingToUndo() {
    return a(this, Tt) !== -1;
  }
  hasSomethingToRedo() {
    return a(this, Tt) < a(this, Lt).length - 1;
  }
  cleanType(e) {
    if (a(this, Tt) !== -1) {
      for (let t = a(this, Tt); t >= 0; t--)
        if (a(this, Lt)[t].type !== e) {
          a(this, Lt).splice(t + 1, a(this, Tt) - t), m(this, Tt, t);
          return;
        }
      a(this, Lt).length = 0, m(this, Tt, -1);
    }
  }
  destroy() {
    m(this, Lt, null);
  }
}
Lt = new WeakMap(), Ci = new WeakMap(), po = new WeakMap(), Tt = new WeakMap();
var Ph, gu;
class kl {
  constructor(e) {
    b(this, Ph);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: t
    } = be.platform;
    for (const [s, i, n = {}] of e)
      for (const r of s) {
        const o = r.startsWith("mac+");
        t && o ? (this.callbacks.set(r.slice(4), {
          callback: i,
          options: n
        }), this.allKeys.add(r.split("+").at(-1))) : !t && !o && (this.callbacks.set(r, {
          callback: i,
          options: n
        }), this.allKeys.add(r.split("+").at(-1)));
      }
  }
  exec(e, t) {
    if (!this.allKeys.has(t.key))
      return;
    const s = this.callbacks.get(y(this, Ph, gu).call(this, t));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: n = !1,
        args: r = [],
        checker: o = null
      }
    } = s;
    o && !o(e, t) || (i.bind(e, ...r, t)(), n || Ue(t));
  }
}
Ph = new WeakSet(), gu = function(e) {
  e.altKey && this.buffer.push("alt"), e.ctrlKey && this.buffer.push("ctrl"), e.metaKey && this.buffer.push("meta"), e.shiftKey && this.buffer.push("shift"), this.buffer.push(e.key);
  const t = this.buffer.join("+");
  return this.buffer.length = 0, t;
};
const Ih = class Ih {
  get _colors() {
    const e = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Rp(e), st(this, "_colors", e);
  }
  convert(e) {
    const t = Rd(e);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return t;
    for (const [s, i] of this._colors)
      if (i.every((n, r) => n === t[r]))
        return Ih._colorsMapping.get(s);
    return t;
  }
  getHexCode(e) {
    const t = this._colors.get(e);
    return t ? U.makeHexColor(...t) : e;
  }
};
G(Ih, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let gc = Ih;
var kr, Pe, $t, Qt, Fr, Xs, Nr, Ve, Ri, mn, Br, vn, xs, ns, bn, go, mo, Hr, vo, Ts, Pi, $r, Ii, Cs, Mh, Mi, bo, _i, yn, yo, Ao, zt, ct, Ys, An, wo, So, Li, Rs, Ks, Eo, We, O, Wl, mc, mu, vu, Xl, bu, yu, Au, vc, wu, bc, yc, Su, fe, Gs, Eu, xu, Ac, Tu, Ga, wc;
const Ir = class Ir {
  constructor(e, t, s, i, n, r, o, l, h, d, u, f, p) {
    b(this, O);
    b(this, kr, new AbortController());
    b(this, Pe, null);
    b(this, $t, /* @__PURE__ */ new Map());
    b(this, Qt, /* @__PURE__ */ new Map());
    b(this, Fr, null);
    b(this, Xs, null);
    b(this, Nr, null);
    b(this, Ve, new Mp());
    b(this, Ri, null);
    b(this, mn, null);
    b(this, Br, 0);
    b(this, vn, /* @__PURE__ */ new Set());
    b(this, xs, null);
    b(this, ns, null);
    b(this, bn, /* @__PURE__ */ new Set());
    G(this, "_editorUndoBar", null);
    b(this, go, !1);
    b(this, mo, !1);
    b(this, Hr, !1);
    b(this, vo, null);
    b(this, Ts, null);
    b(this, Pi, null);
    b(this, $r, null);
    b(this, Ii, !1);
    b(this, Cs, null);
    b(this, Mh, new Ip());
    b(this, Mi, !1);
    b(this, bo, !1);
    b(this, _i, null);
    b(this, yn, null);
    b(this, yo, null);
    b(this, Ao, null);
    b(this, zt, Z.NONE);
    b(this, ct, /* @__PURE__ */ new Set());
    b(this, Ys, null);
    b(this, An, null);
    b(this, wo, null);
    b(this, So, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    b(this, Li, [0, 0]);
    b(this, Rs, null);
    b(this, Ks, null);
    b(this, Eo, null);
    b(this, We, null);
    const g = this._signal = a(this, kr).signal;
    m(this, Ks, e), m(this, Eo, t), m(this, Fr, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
      signal: g
    }), i._on("pagechanging", this.onPageChanging.bind(this), {
      signal: g
    }), i._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: g
    }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: g
    }), i._on("setpreference", this.onSetPreference.bind(this), {
      signal: g
    }), i._on("switchannotationeditorparams", (v) => this.updateParams(v.type, v.value), {
      signal: g
    }), y(this, O, bu).call(this), y(this, O, Su).call(this), y(this, O, vc).call(this), m(this, Xs, n.annotationStorage), m(this, vo, n.filterFactory), m(this, An, r), m(this, $r, o || null), m(this, go, l), m(this, mo, h), m(this, Hr, d), m(this, Ao, u || null), this.viewParameters = {
      realScale: nn.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = f || null, this._supportsPinchToZoom = p !== !1;
  }
  static get _keyboardManager() {
    const e = Ir.prototype, t = (r) => a(r, Ks).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && r.hasSomethingToControl(), s = (r, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
    return st(this, "_keyboardManager", new kl([[["ctrl+a", "mac+meta+a"], e.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], e.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], e.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], e.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], e.addNewEditorFromKeyboard, {
      checker: (r, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && a(r, Ks).contains(o) && !r.isEnterHandled
    }], [[" ", "mac+ "], e.addNewEditorFromKeyboard, {
      checker: (r, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && a(r, Ks).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], e.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], e.translateSelectedEditors, {
      args: [-i, 0],
      checker: t
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e.translateSelectedEditors, {
      args: [-n, 0],
      checker: t
    }], [["ArrowRight", "mac+ArrowRight"], e.translateSelectedEditors, {
      args: [i, 0],
      checker: t
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e.translateSelectedEditors, {
      args: [n, 0],
      checker: t
    }], [["ArrowUp", "mac+ArrowUp"], e.translateSelectedEditors, {
      args: [0, -i],
      checker: t
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e.translateSelectedEditors, {
      args: [0, -n],
      checker: t
    }], [["ArrowDown", "mac+ArrowDown"], e.translateSelectedEditors, {
      args: [0, i],
      checker: t
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e.translateSelectedEditors, {
      args: [0, n],
      checker: t
    }]]));
  }
  destroy() {
    var e, t, s, i, n;
    (e = a(this, We)) == null || e.resolve(), m(this, We, null), (t = a(this, kr)) == null || t.abort(), m(this, kr, null), this._signal = null;
    for (const r of a(this, Qt).values())
      r.destroy();
    a(this, Qt).clear(), a(this, $t).clear(), a(this, bn).clear(), m(this, Pe, null), a(this, ct).clear(), a(this, Ve).destroy(), (s = a(this, Fr)) == null || s.destroy(), (i = a(this, Cs)) == null || i.hide(), m(this, Cs, null), a(this, Ts) && (clearTimeout(a(this, Ts)), m(this, Ts, null)), a(this, Rs) && (clearTimeout(a(this, Rs)), m(this, Rs, null)), (n = this._editorUndoBar) == null || n.destroy();
  }
  combinedSignal(e) {
    return AbortSignal.any([this._signal, e.signal]);
  }
  get mlManager() {
    return a(this, Ao);
  }
  get useNewAltTextFlow() {
    return a(this, mo);
  }
  get useNewAltTextWhenAddingImage() {
    return a(this, Hr);
  }
  get hcmFilter() {
    return st(this, "hcmFilter", a(this, An) ? a(this, vo).addHCMFilter(a(this, An).foreground, a(this, An).background) : "none");
  }
  get direction() {
    return st(this, "direction", getComputedStyle(a(this, Ks)).direction);
  }
  get highlightColors() {
    return st(this, "highlightColors", a(this, $r) ? new Map(a(this, $r).split(",").map((e) => e.split("=").map((t) => t.trim()))) : null);
  }
  get highlightColorNames() {
    return st(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (e) => e.reverse())) : null);
  }
  setCurrentDrawingSession(e) {
    e ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), m(this, mn, e);
  }
  setMainHighlightColorPicker(e) {
    m(this, yo, e);
  }
  editAltText(e, t = !1) {
    var s;
    (s = a(this, Fr)) == null || s.editAltText(this, e, t);
  }
  switchToMode(e, t) {
    this._eventBus.on("annotationeditormodechanged", t, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: e
    });
  }
  setPreference(e, t) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: e,
      value: t
    });
  }
  onSetPreference({
    name: e,
    value: t
  }) {
    switch (e) {
      case "enableNewAltTextWhenAddingImage":
        m(this, Hr, t);
        break;
    }
  }
  onPageChanging({
    pageNumber: e
  }) {
    m(this, Br, e - 1);
  }
  focusMainContainer() {
    a(this, Ks).focus();
  }
  findParent(e, t) {
    for (const s of a(this, Qt).values()) {
      const {
        x: i,
        y: n,
        width: r,
        height: o
      } = s.div.getBoundingClientRect();
      if (e >= i && e <= i + r && t >= n && t <= n + o)
        return s;
    }
    return null;
  }
  disableUserSelect(e = !1) {
    a(this, Eo).classList.toggle("noUserSelect", e);
  }
  addShouldRescale(e) {
    a(this, bn).add(e);
  }
  removeShouldRescale(e) {
    a(this, bn).delete(e);
  }
  onScaleChanging({
    scale: e
  }) {
    var t;
    this.commitOrRemove(), this.viewParameters.realScale = e * nn.PDF_TO_CSS_UNITS;
    for (const s of a(this, bn))
      s.onScaleChanging();
    (t = a(this, mn)) == null || t.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: e
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = e;
  }
  highlightSelection(e = "") {
    const t = document.getSelection();
    if (!t || t.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: i,
      focusNode: n,
      focusOffset: r
    } = t, o = t.toString(), h = y(this, O, Wl).call(this, t).closest(".textLayer"), d = this.getSelectionBoxes(h);
    if (!d)
      return;
    t.empty();
    const u = y(this, O, mc).call(this, h), f = a(this, zt) === Z.NONE, p = () => {
      u == null || u.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: e,
        boxes: d,
        anchorNode: s,
        anchorOffset: i,
        focusNode: n,
        focusOffset: r,
        text: o
      }), f && this.showAllEditors("highlight", !0, !0);
    };
    if (f) {
      this.switchToMode(Z.HIGHLIGHT, p);
      return;
    }
    p();
  }
  addToAnnotationStorage(e) {
    !e.isEmpty() && a(this, Xs) && !a(this, Xs).has(e.id) && a(this, Xs).setValue(e.id, e);
  }
  blur() {
    if (this.isShiftKeyDown = !1, a(this, Ii) && (m(this, Ii, !1), y(this, O, Xl).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: e
    } = document;
    for (const t of a(this, ct))
      if (t.div.contains(e)) {
        m(this, yn, [t, e]), t._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!a(this, yn))
      return;
    const [e, t] = a(this, yn);
    m(this, yn, null), t.addEventListener("focusin", () => {
      e._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), t.focus();
  }
  addEditListeners() {
    y(this, O, vc).call(this), y(this, O, bc).call(this);
  }
  removeEditListeners() {
    y(this, O, wu).call(this), y(this, O, yc).call(this);
  }
  dragOver(e) {
    for (const {
      type: t
    } of e.dataTransfer.items)
      for (const s of a(this, ns))
        if (s.isHandlingMimeForPasting(t)) {
          e.dataTransfer.dropEffect = "copy", e.preventDefault();
          return;
        }
  }
  drop(e) {
    for (const t of e.dataTransfer.items)
      for (const s of a(this, ns))
        if (s.isHandlingMimeForPasting(t.type)) {
          s.paste(t, this.currentLayer), e.preventDefault();
          return;
        }
  }
  copy(e) {
    var s;
    if (e.preventDefault(), (s = a(this, Pe)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const t = [];
    for (const i of a(this, ct)) {
      const n = i.serialize(!0);
      n && t.push(n);
    }
    t.length !== 0 && e.clipboardData.setData("application/pdfjs", JSON.stringify(t));
  }
  cut(e) {
    this.copy(e), this.delete();
  }
  async paste(e) {
    e.preventDefault();
    const {
      clipboardData: t
    } = e;
    for (const n of t.items)
      for (const r of a(this, ns))
        if (r.isHandlingMimeForPasting(n.type)) {
          r.paste(n, this.currentLayer);
          return;
        }
    let s = t.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (n) {
      X(`paste: "${n.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const n = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h)
          return;
        n.push(h);
      }
      const r = () => {
        for (const l of n)
          y(this, O, Ac).call(this, l);
        y(this, O, wc).call(this, n);
      }, o = () => {
        for (const l of n)
          l.remove();
      };
      this.addCommands({
        cmd: r,
        undo: o,
        mustExec: !0
      });
    } catch (n) {
      X(`paste: "${n.message}".`);
    }
  }
  keydown(e) {
    !this.isShiftKeyDown && e.key === "Shift" && (this.isShiftKeyDown = !0), a(this, zt) !== Z.NONE && !this.isEditorHandlingKeyboard && Ir._keyboardManager.exec(this, e);
  }
  keyup(e) {
    this.isShiftKeyDown && e.key === "Shift" && (this.isShiftKeyDown = !1, a(this, Ii) && (m(this, Ii, !1), y(this, O, Xl).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: e
  }) {
    switch (e) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[e]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(e) {
    e ? (y(this, O, yu).call(this), y(this, O, bc).call(this), y(this, O, fe).call(this, {
      isEditing: a(this, zt) !== Z.NONE,
      isEmpty: y(this, O, Ga).call(this),
      hasSomethingToUndo: a(this, Ve).hasSomethingToUndo(),
      hasSomethingToRedo: a(this, Ve).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (y(this, O, Au).call(this), y(this, O, yc).call(this), y(this, O, fe).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(e) {
    if (!a(this, ns)) {
      m(this, ns, e);
      for (const t of a(this, ns))
        y(this, O, Gs).call(this, t.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return a(this, Mh).id;
  }
  get currentLayer() {
    return a(this, Qt).get(a(this, Br));
  }
  getLayer(e) {
    return a(this, Qt).get(e);
  }
  get currentPageIndex() {
    return a(this, Br);
  }
  addLayer(e) {
    a(this, Qt).set(e.pageIndex, e), a(this, Mi) ? e.enable() : e.disable();
  }
  removeLayer(e) {
    a(this, Qt).delete(e.pageIndex);
  }
  async updateMode(e, t = null, s = !1) {
    var i;
    if (a(this, zt) !== e && !(a(this, We) && (await a(this, We).promise, !a(this, We)))) {
      if (m(this, We, Promise.withResolvers()), m(this, zt, e), e === Z.NONE) {
        this.setEditingState(!1), y(this, O, xu).call(this), (i = this._editorUndoBar) == null || i.hide(), a(this, We).resolve();
        return;
      }
      this.setEditingState(!0), await y(this, O, Eu).call(this), this.unselectAll();
      for (const n of a(this, Qt).values())
        n.updateMode(e);
      if (!t) {
        s && this.addNewEditorFromKeyboard(), a(this, We).resolve();
        return;
      }
      for (const n of a(this, $t).values())
        n.annotationElementId === t ? (this.setSelected(n), n.enterInEditMode()) : n.unselect();
      a(this, We).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(e) {
    e !== a(this, zt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: e
    });
  }
  updateParams(e, t) {
    var s;
    if (a(this, ns)) {
      switch (e) {
        case it.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case it.HIGHLIGHT_DEFAULT_COLOR:
          (s = a(this, yo)) == null || s.updateColor(t);
          break;
        case it.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (a(this, wo) || m(this, wo, /* @__PURE__ */ new Map())).set(e, t), this.showAllEditors("highlight", t);
          break;
      }
      for (const i of a(this, ct))
        i.updateParams(e, t);
      for (const i of a(this, ns))
        i.updateDefaultParams(e, t);
    }
  }
  showAllEditors(e, t, s = !1) {
    var n;
    for (const r of a(this, $t).values())
      r.editorType === e && r.show(t);
    (((n = a(this, wo)) == null ? void 0 : n.get(it.HIGHLIGHT_SHOW_ALL)) ?? !0) !== t && y(this, O, Gs).call(this, [[it.HIGHLIGHT_SHOW_ALL, t]]);
  }
  enableWaiting(e = !1) {
    if (a(this, bo) !== e) {
      m(this, bo, e);
      for (const t of a(this, Qt).values())
        e ? t.disableClick() : t.enableClick(), t.div.classList.toggle("waiting", e);
    }
  }
  getEditors(e) {
    const t = [];
    for (const s of a(this, $t).values())
      s.pageIndex === e && t.push(s);
    return t;
  }
  getEditor(e) {
    return a(this, $t).get(e);
  }
  addEditor(e) {
    a(this, $t).set(e.id, e);
  }
  removeEditor(e) {
    var t;
    e.div.contains(document.activeElement) && (a(this, Ts) && clearTimeout(a(this, Ts)), m(this, Ts, setTimeout(() => {
      this.focusMainContainer(), m(this, Ts, null);
    }, 0))), a(this, $t).delete(e.id), this.unselect(e), (!e.annotationElementId || !a(this, vn).has(e.annotationElementId)) && ((t = a(this, Xs)) == null || t.remove(e.id));
  }
  addDeletedAnnotationElement(e) {
    a(this, vn).add(e.annotationElementId), this.addChangedExistingAnnotation(e), e.deleted = !0;
  }
  isDeletedAnnotationElement(e) {
    return a(this, vn).has(e);
  }
  removeDeletedAnnotationElement(e) {
    a(this, vn).delete(e.annotationElementId), this.removeChangedExistingAnnotation(e), e.deleted = !1;
  }
  setActiveEditor(e) {
    a(this, Pe) !== e && (m(this, Pe, e), e && y(this, O, Gs).call(this, e.propertiesToUpdate));
  }
  updateUI(e) {
    a(this, O, Tu) === e && y(this, O, Gs).call(this, e.propertiesToUpdate);
  }
  updateUIForDefaultProperties(e) {
    y(this, O, Gs).call(this, e.defaultPropertiesToUpdate);
  }
  toggleSelected(e) {
    if (a(this, ct).has(e)) {
      a(this, ct).delete(e), e.unselect(), y(this, O, fe).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    a(this, ct).add(e), e.select(), y(this, O, Gs).call(this, e.propertiesToUpdate), y(this, O, fe).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(e) {
    var t;
    (t = a(this, mn)) == null || t.commitOrRemove();
    for (const s of a(this, ct))
      s !== e && s.unselect();
    a(this, ct).clear(), a(this, ct).add(e), e.select(), y(this, O, Gs).call(this, e.propertiesToUpdate), y(this, O, fe).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(e) {
    return a(this, ct).has(e);
  }
  get firstSelectedEditor() {
    return a(this, ct).values().next().value;
  }
  unselect(e) {
    e.unselect(), a(this, ct).delete(e), y(this, O, fe).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return a(this, ct).size !== 0;
  }
  get isEnterHandled() {
    return a(this, ct).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var e;
    a(this, Ve).undo(), y(this, O, fe).call(this, {
      hasSomethingToUndo: a(this, Ve).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: y(this, O, Ga).call(this)
    }), (e = this._editorUndoBar) == null || e.hide();
  }
  redo() {
    a(this, Ve).redo(), y(this, O, fe).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: a(this, Ve).hasSomethingToRedo(),
      isEmpty: y(this, O, Ga).call(this)
    });
  }
  addCommands(e) {
    a(this, Ve).add(e), y(this, O, fe).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: y(this, O, Ga).call(this)
    });
  }
  cleanUndoStack(e) {
    a(this, Ve).cleanType(e);
  }
  delete() {
    var n;
    this.commitOrRemove();
    const e = (n = this.currentLayer) == null ? void 0 : n.endDrawingSession(!0);
    if (!this.hasSelection && !e)
      return;
    const t = e ? [e] : [...a(this, ct)], s = () => {
      var r;
      (r = this._editorUndoBar) == null || r.show(i, t.length === 1 ? t[0].editorType : t.length);
      for (const o of t)
        o.remove();
    }, i = () => {
      for (const r of t)
        y(this, O, Ac).call(this, r);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var e;
    (e = a(this, Pe)) == null || e.commitOrRemove();
  }
  hasSomethingToControl() {
    return a(this, Pe) || this.hasSelection;
  }
  selectAll() {
    for (const e of a(this, ct))
      e.commit();
    y(this, O, wc).call(this, a(this, $t).values());
  }
  unselectAll() {
    var e;
    if (!(a(this, Pe) && (a(this, Pe).commitOrRemove(), a(this, zt) !== Z.NONE)) && !((e = a(this, mn)) != null && e.commitOrRemove()) && this.hasSelection) {
      for (const t of a(this, ct))
        t.unselect();
      a(this, ct).clear(), y(this, O, fe).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(e, t, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    a(this, Li)[0] += e, a(this, Li)[1] += t;
    const [i, n] = a(this, Li), r = [...a(this, ct)], o = 1e3;
    a(this, Rs) && clearTimeout(a(this, Rs)), m(this, Rs, setTimeout(() => {
      m(this, Rs, null), a(this, Li)[0] = a(this, Li)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of r)
            a(this, $t).has(l.id) && l.translateInPage(i, n);
        },
        undo: () => {
          for (const l of r)
            a(this, $t).has(l.id) && l.translateInPage(-i, -n);
        },
        mustExec: !1
      });
    }, o));
    for (const l of r)
      l.translateInPage(e, t);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), m(this, xs, /* @__PURE__ */ new Map());
      for (const e of a(this, ct))
        a(this, xs).set(e, {
          savedX: e.x,
          savedY: e.y,
          savedPageIndex: e.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!a(this, xs))
      return !1;
    this.disableUserSelect(!1);
    const e = a(this, xs);
    m(this, xs, null);
    let t = !1;
    for (const [{
      x: i,
      y: n,
      pageIndex: r
    }, o] of e)
      o.newX = i, o.newY = n, o.newPageIndex = r, t || (t = i !== o.savedX || n !== o.savedY || r !== o.savedPageIndex);
    if (!t)
      return !1;
    const s = (i, n, r, o) => {
      if (a(this, $t).has(i.id)) {
        const l = a(this, Qt).get(o);
        l ? i._setParentAndPosition(l, n, r) : (i.pageIndex = o, i.x = n, i.y = r);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: n,
          newY: r,
          newPageIndex: o
        }] of e)
          s(i, n, r, o);
      },
      undo: () => {
        for (const [i, {
          savedX: n,
          savedY: r,
          savedPageIndex: o
        }] of e)
          s(i, n, r, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(e, t) {
    if (a(this, xs))
      for (const s of a(this, xs).keys())
        s.drag(e, t);
  }
  rebuild(e) {
    if (e.parent === null) {
      const t = this.getLayer(e.pageIndex);
      t ? (t.changeParent(e), t.addOrRebuild(e)) : (this.addEditor(e), this.addToAnnotationStorage(e), e.rebuild());
    } else
      e.parent.addOrRebuild(e);
  }
  get isEditorHandlingKeyboard() {
    var e;
    return ((e = this.getActive()) == null ? void 0 : e.shouldGetKeyboardEvents()) || a(this, ct).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(e) {
    return a(this, Pe) === e;
  }
  getActive() {
    return a(this, Pe);
  }
  getMode() {
    return a(this, zt);
  }
  get imageManager() {
    return st(this, "imageManager", new pc());
  }
  getSelectionBoxes(e) {
    if (!e)
      return null;
    const t = document.getSelection();
    for (let h = 0, d = t.rangeCount; h < d; h++)
      if (!e.contains(t.getRangeAt(h).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: i,
      width: n,
      height: r
    } = e.getBoundingClientRect();
    let o;
    switch (e.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, d, u, f) => ({
          x: (d - i) / r,
          y: 1 - (h + u - s) / n,
          width: f / r,
          height: u / n
        });
        break;
      case "180":
        o = (h, d, u, f) => ({
          x: 1 - (h + u - s) / n,
          y: 1 - (d + f - i) / r,
          width: u / n,
          height: f / r
        });
        break;
      case "270":
        o = (h, d, u, f) => ({
          x: 1 - (d + f - i) / r,
          y: (h - s) / n,
          width: f / r,
          height: u / n
        });
        break;
      default:
        o = (h, d, u, f) => ({
          x: (h - s) / n,
          y: (d - i) / r,
          width: u / n,
          height: f / r
        });
        break;
    }
    const l = [];
    for (let h = 0, d = t.rangeCount; h < d; h++) {
      const u = t.getRangeAt(h);
      if (!u.collapsed)
        for (const {
          x: f,
          y: p,
          width: g,
          height: v
        } of u.getClientRects())
          g === 0 || v === 0 || l.push(o(f, p, g, v));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: e,
    id: t
  }) {
    (a(this, Nr) || m(this, Nr, /* @__PURE__ */ new Map())).set(e, t);
  }
  removeChangedExistingAnnotation({
    annotationElementId: e
  }) {
    var t;
    (t = a(this, Nr)) == null || t.delete(e);
  }
  renderAnnotationElement(e) {
    var i;
    const t = (i = a(this, Nr)) == null ? void 0 : i.get(e.data.id);
    if (!t)
      return;
    const s = a(this, Xs).getRawValue(t);
    s && (a(this, zt) === Z.NONE && !s.hasBeenModified || s.renderAnnotationElement(e));
  }
};
kr = new WeakMap(), Pe = new WeakMap(), $t = new WeakMap(), Qt = new WeakMap(), Fr = new WeakMap(), Xs = new WeakMap(), Nr = new WeakMap(), Ve = new WeakMap(), Ri = new WeakMap(), mn = new WeakMap(), Br = new WeakMap(), vn = new WeakMap(), xs = new WeakMap(), ns = new WeakMap(), bn = new WeakMap(), go = new WeakMap(), mo = new WeakMap(), Hr = new WeakMap(), vo = new WeakMap(), Ts = new WeakMap(), Pi = new WeakMap(), $r = new WeakMap(), Ii = new WeakMap(), Cs = new WeakMap(), Mh = new WeakMap(), Mi = new WeakMap(), bo = new WeakMap(), _i = new WeakMap(), yn = new WeakMap(), yo = new WeakMap(), Ao = new WeakMap(), zt = new WeakMap(), ct = new WeakMap(), Ys = new WeakMap(), An = new WeakMap(), wo = new WeakMap(), So = new WeakMap(), Li = new WeakMap(), Rs = new WeakMap(), Ks = new WeakMap(), Eo = new WeakMap(), We = new WeakMap(), O = new WeakSet(), Wl = function({
  anchorNode: e
}) {
  return e.nodeType === Node.TEXT_NODE ? e.parentElement : e;
}, mc = function(e) {
  const {
    currentLayer: t
  } = this;
  if (t.hasTextLayer(e))
    return t;
  for (const s of a(this, Qt).values())
    if (s.hasTextLayer(e))
      return s;
  return null;
}, mu = function() {
  const e = document.getSelection();
  if (!e || e.isCollapsed)
    return;
  const s = y(this, O, Wl).call(this, e).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (a(this, Cs) || m(this, Cs, new Pp(this)), a(this, Cs).show(s, i, this.direction === "ltr"));
}, vu = function() {
  var n, r, o;
  const e = document.getSelection();
  if (!e || e.isCollapsed) {
    a(this, Ys) && ((n = a(this, Cs)) == null || n.hide(), m(this, Ys, null), y(this, O, fe).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: t
  } = e;
  if (t === a(this, Ys))
    return;
  const i = y(this, O, Wl).call(this, e).closest(".textLayer");
  if (!i) {
    a(this, Ys) && ((r = a(this, Cs)) == null || r.hide(), m(this, Ys, null), y(this, O, fe).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = a(this, Cs)) == null || o.hide(), m(this, Ys, t), y(this, O, fe).call(this, {
    hasSelectedText: !0
  }), !(a(this, zt) !== Z.HIGHLIGHT && a(this, zt) !== Z.NONE) && (a(this, zt) === Z.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), m(this, Ii, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = a(this, zt) === Z.HIGHLIGHT ? y(this, O, mc).call(this, i) : null;
    l == null || l.toggleDrawing();
    const h = new AbortController(), d = this.combinedSignal(h), u = (f) => {
      f.type === "pointerup" && f.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), f.type === "pointerup" && y(this, O, Xl).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: d
    }), window.addEventListener("blur", u, {
      signal: d
    });
  }
}, Xl = function(e = "") {
  a(this, zt) === Z.HIGHLIGHT ? this.highlightSelection(e) : a(this, go) && y(this, O, mu).call(this);
}, bu = function() {
  document.addEventListener("selectionchange", y(this, O, vu).bind(this), {
    signal: this._signal
  });
}, yu = function() {
  if (a(this, Pi))
    return;
  m(this, Pi, new AbortController());
  const e = this.combinedSignal(a(this, Pi));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: e
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: e
  });
}, Au = function() {
  var e;
  (e = a(this, Pi)) == null || e.abort(), m(this, Pi, null);
}, vc = function() {
  if (a(this, _i))
    return;
  m(this, _i, new AbortController());
  const e = this.combinedSignal(a(this, _i));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: e
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: e
  });
}, wu = function() {
  var e;
  (e = a(this, _i)) == null || e.abort(), m(this, _i, null);
}, bc = function() {
  if (a(this, Ri))
    return;
  m(this, Ri, new AbortController());
  const e = this.combinedSignal(a(this, Ri));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: e
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: e
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: e
  });
}, yc = function() {
  var e;
  (e = a(this, Ri)) == null || e.abort(), m(this, Ri, null);
}, Su = function() {
  const e = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: e
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: e
  });
}, fe = function(e) {
  Object.entries(e).some(([s, i]) => a(this, So)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(a(this, So), e)
  }), a(this, zt) === Z.HIGHLIGHT && e.hasSelectedEditor === !1 && y(this, O, Gs).call(this, [[it.HIGHLIGHT_FREE, !0]]));
}, Gs = function(e) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: e
  });
}, Eu = async function() {
  if (!a(this, Mi)) {
    m(this, Mi, !0);
    const e = [];
    for (const t of a(this, Qt).values())
      e.push(t.enable());
    await Promise.all(e);
    for (const t of a(this, $t).values())
      t.enable();
  }
}, xu = function() {
  if (this.unselectAll(), a(this, Mi)) {
    m(this, Mi, !1);
    for (const e of a(this, Qt).values())
      e.disable();
    for (const e of a(this, $t).values())
      e.disable();
  }
}, Ac = function(e) {
  const t = a(this, Qt).get(e.pageIndex);
  t ? t.addOrRebuild(e) : (this.addEditor(e), this.addToAnnotationStorage(e));
}, Tu = function() {
  let e = null;
  for (e of a(this, ct))
    ;
  return e;
}, Ga = function() {
  if (a(this, $t).size === 0)
    return !0;
  if (a(this, $t).size === 1)
    for (const e of a(this, $t).values())
      return e.isEmpty();
  return !1;
}, wc = function(e) {
  for (const t of a(this, ct))
    t.unselect();
  a(this, ct).clear();
  for (const t of e)
    t.isEmpty() || (a(this, ct).add(t), t.select());
  y(this, O, fe).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, G(Ir, "TRANSLATE_SMALL", 1), G(Ir, "TRANSLATE_BIG", 10);
let vr = Ir;
var Vt, Ps, rs, jr, Is, Ie, Ur, Ms, xe, Qs, wn, _s, Oi, gs, za, Yl;
const pe = class pe {
  constructor(e) {
    b(this, gs);
    b(this, Vt, null);
    b(this, Ps, !1);
    b(this, rs, null);
    b(this, jr, null);
    b(this, Is, null);
    b(this, Ie, null);
    b(this, Ur, !1);
    b(this, Ms, null);
    b(this, xe, null);
    b(this, Qs, null);
    b(this, wn, null);
    b(this, _s, !1);
    m(this, xe, e), m(this, _s, e._uiManager.useNewAltTextFlow), a(pe, Oi) || m(pe, Oi, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(e) {
    pe._l10n ?? (pe._l10n = e);
  }
  async render() {
    const e = m(this, rs, document.createElement("button"));
    e.className = "altText", e.tabIndex = "0";
    const t = m(this, jr, document.createElement("span"));
    e.append(t), a(this, _s) ? (e.classList.add("new"), e.setAttribute("data-l10n-id", a(pe, Oi).missing), t.setAttribute("data-l10n-id", a(pe, Oi)["missing-label"])) : (e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = a(this, xe)._uiManager._signal;
    e.addEventListener("contextmenu", ms, {
      signal: s
    }), e.addEventListener("pointerdown", (n) => n.stopPropagation(), {
      signal: s
    });
    const i = (n) => {
      n.preventDefault(), a(this, xe)._uiManager.editAltText(a(this, xe)), a(this, _s) && a(this, xe)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: a(this, gs, za)
        }
      });
    };
    return e.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), e.addEventListener("keydown", (n) => {
      n.target === e && n.key === "Enter" && (m(this, Ur, !0), i(n));
    }, {
      signal: s
    }), await y(this, gs, Yl).call(this), e;
  }
  finish() {
    a(this, rs) && (a(this, rs).focus({
      focusVisible: a(this, Ur)
    }), m(this, Ur, !1));
  }
  isEmpty() {
    return a(this, _s) ? a(this, Vt) === null : !a(this, Vt) && !a(this, Ps);
  }
  hasData() {
    return a(this, _s) ? a(this, Vt) !== null || !!a(this, Qs) : this.isEmpty();
  }
  get guessedText() {
    return a(this, Qs);
  }
  async setGuessedText(e) {
    a(this, Vt) === null && (m(this, Qs, e), m(this, wn, await pe._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: e
    })), y(this, gs, Yl).call(this));
  }
  toggleAltTextBadge(e = !1) {
    var t;
    if (!a(this, _s) || a(this, Vt)) {
      (t = a(this, Ms)) == null || t.remove(), m(this, Ms, null);
      return;
    }
    if (!a(this, Ms)) {
      const s = m(this, Ms, document.createElement("div"));
      s.className = "noAltTextBadge", a(this, xe).div.append(s);
    }
    a(this, Ms).classList.toggle("hidden", !e);
  }
  serialize(e) {
    let t = a(this, Vt);
    return !e && a(this, Qs) === t && (t = a(this, wn)), {
      altText: t,
      decorative: a(this, Ps),
      guessedText: a(this, Qs),
      textWithDisclaimer: a(this, wn)
    };
  }
  get data() {
    return {
      altText: a(this, Vt),
      decorative: a(this, Ps)
    };
  }
  set data({
    altText: e,
    decorative: t,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: n = !1
  }) {
    s && (m(this, Qs, s), m(this, wn, i)), !(a(this, Vt) === e && a(this, Ps) === t) && (n || (m(this, Vt, e), m(this, Ps, t)), y(this, gs, Yl).call(this));
  }
  toggle(e = !1) {
    a(this, rs) && (!e && a(this, Ie) && (clearTimeout(a(this, Ie)), m(this, Ie, null)), a(this, rs).disabled = !e);
  }
  shown() {
    a(this, xe)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: a(this, gs, za)
      }
    });
  }
  destroy() {
    var e, t;
    (e = a(this, rs)) == null || e.remove(), m(this, rs, null), m(this, jr, null), m(this, Is, null), (t = a(this, Ms)) == null || t.remove(), m(this, Ms, null);
  }
};
Vt = new WeakMap(), Ps = new WeakMap(), rs = new WeakMap(), jr = new WeakMap(), Is = new WeakMap(), Ie = new WeakMap(), Ur = new WeakMap(), Ms = new WeakMap(), xe = new WeakMap(), Qs = new WeakMap(), wn = new WeakMap(), _s = new WeakMap(), Oi = new WeakMap(), gs = new WeakSet(), za = function() {
  return a(this, Vt) && "added" || a(this, Vt) === null && this.guessedText && "review" || "missing";
}, Yl = async function() {
  var i, n, r;
  const e = a(this, rs);
  if (!e)
    return;
  if (a(this, _s)) {
    if (e.classList.toggle("done", !!a(this, Vt)), e.setAttribute("data-l10n-id", a(pe, Oi)[a(this, gs, za)]), (i = a(this, jr)) == null || i.setAttribute("data-l10n-id", a(pe, Oi)[`${a(this, gs, za)}-label`]), !a(this, Vt)) {
      (n = a(this, Is)) == null || n.remove();
      return;
    }
  } else {
    if (!a(this, Vt) && !a(this, Ps)) {
      e.classList.remove("done"), (r = a(this, Is)) == null || r.remove();
      return;
    }
    e.classList.add("done"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let t = a(this, Is);
  if (!t) {
    m(this, Is, t = document.createElement("span")), t.className = "tooltip", t.setAttribute("role", "tooltip"), t.id = `alt-text-tooltip-${a(this, xe).id}`;
    const o = 100, l = a(this, xe)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(a(this, Ie)), m(this, Ie, null);
    }, {
      once: !0
    }), e.addEventListener("mouseenter", () => {
      m(this, Ie, setTimeout(() => {
        m(this, Ie, null), a(this, Is).classList.add("show"), a(this, xe)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), e.addEventListener("mouseleave", () => {
      var h;
      a(this, Ie) && (clearTimeout(a(this, Ie)), m(this, Ie, null)), (h = a(this, Is)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  a(this, Ps) ? t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (t.removeAttribute("data-l10n-id"), t.textContent = a(this, Vt)), t.parentNode || e.append(t);
  const s = a(this, xe).getImageForAltText();
  s == null || s.setAttribute("aria-describedby", t.id);
}, b(pe, Oi, null), G(pe, "_l10n", null);
let Ah = pe;
var xo, Sn, To, Co, Ro, Po, Io, Gr, Js, En, Di, wi, Cu, Ru, Sc;
const Od = class Od {
  constructor({
    container: e,
    isPinchingDisabled: t = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: n = null,
    onPinchEnd: r = null,
    signal: o
  }) {
    b(this, wi);
    b(this, xo);
    b(this, Sn, !1);
    b(this, To, null);
    b(this, Co);
    b(this, Ro);
    b(this, Po);
    b(this, Io);
    b(this, Gr);
    b(this, Js, null);
    b(this, En);
    b(this, Di, null);
    m(this, xo, e), m(this, To, s), m(this, Co, t), m(this, Ro, i), m(this, Po, n), m(this, Io, r), m(this, En, new AbortController()), m(this, Gr, AbortSignal.any([o, a(this, En).signal])), e.addEventListener("touchstart", y(this, wi, Cu).bind(this), {
      passive: !1,
      signal: a(this, Gr)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return st(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
  }
  destroy() {
    var e;
    (e = a(this, En)) == null || e.abort(), m(this, En, null);
  }
};
xo = new WeakMap(), Sn = new WeakMap(), To = new WeakMap(), Co = new WeakMap(), Ro = new WeakMap(), Po = new WeakMap(), Io = new WeakMap(), Gr = new WeakMap(), Js = new WeakMap(), En = new WeakMap(), Di = new WeakMap(), wi = new WeakSet(), Cu = function(e) {
  var i, n, r;
  if ((i = a(this, Co)) != null && i.call(this) || e.touches.length < 2)
    return;
  if (!a(this, Di)) {
    m(this, Di, new AbortController());
    const o = AbortSignal.any([a(this, Gr), a(this, Di).signal]), l = a(this, xo), h = {
      signal: o,
      passive: !1
    };
    l.addEventListener("touchmove", y(this, wi, Ru).bind(this), h), l.addEventListener("touchend", y(this, wi, Sc).bind(this), h), l.addEventListener("touchcancel", y(this, wi, Sc).bind(this), h), (n = a(this, Ro)) == null || n.call(this);
  }
  if (Ue(e), e.touches.length !== 2 || (r = a(this, To)) != null && r.call(this)) {
    m(this, Js, null);
    return;
  }
  let [t, s] = e.touches;
  t.identifier > s.identifier && ([t, s] = [s, t]), m(this, Js, {
    touch0X: t.screenX,
    touch0Y: t.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, Ru = function(e) {
  var T;
  if (!a(this, Js) || e.touches.length !== 2)
    return;
  let [t, s] = e.touches;
  t.identifier > s.identifier && ([t, s] = [s, t]);
  const {
    screenX: i,
    screenY: n
  } = t, {
    screenX: r,
    screenY: o
  } = s, l = a(this, Js), {
    touch0X: h,
    touch0Y: d,
    touch1X: u,
    touch1Y: f
  } = l, p = u - h, g = f - d, v = r - i, w = o - n, A = Math.hypot(v, w) || 1, S = Math.hypot(p, g) || 1;
  if (!a(this, Sn) && Math.abs(S - A) <= Od.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = i, l.touch0Y = n, l.touch1X = r, l.touch1Y = o, e.preventDefault(), !a(this, Sn)) {
    m(this, Sn, !0);
    return;
  }
  const x = [(i + r) / 2, (n + o) / 2];
  (T = a(this, Po)) == null || T.call(this, x, S, A);
}, Sc = function(e) {
  var t;
  a(this, Di).abort(), m(this, Di, null), (t = a(this, Io)) == null || t.call(this), a(this, Js) && (e.preventDefault(), m(this, Js, null), m(this, Sn, !1));
};
let wh = Od;
var xn, as, wt, zr, ki, Mo, Tn, Jt, Cn, Zs, Fi, _o, Rn, Me, Lo, Pn, qs, Ls, Vr, Wr, Xe, In, Oo, _h, z, Ec, Do, xc, Kl, Pu, Iu, Tc, Ql, Cc, Mu, _u, Lu, Rc, Ou, Pc, Du, ku, Fu, Ic, Va;
const tt = class tt {
  constructor(e) {
    b(this, z);
    b(this, xn, null);
    b(this, as, null);
    b(this, wt, null);
    b(this, zr, !1);
    b(this, ki, null);
    b(this, Mo, "");
    b(this, Tn, !1);
    b(this, Jt, null);
    b(this, Cn, null);
    b(this, Zs, null);
    b(this, Fi, null);
    b(this, _o, "");
    b(this, Rn, !1);
    b(this, Me, null);
    b(this, Lo, !1);
    b(this, Pn, !1);
    b(this, qs, !1);
    b(this, Ls, null);
    b(this, Vr, 0);
    b(this, Wr, 0);
    b(this, Xe, null);
    b(this, In, null);
    G(this, "_editToolbar", null);
    G(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    G(this, "_initialData", null);
    G(this, "_isVisible", !0);
    G(this, "_uiManager", null);
    G(this, "_focusEventsAllowed", !0);
    b(this, Oo, !1);
    b(this, _h, tt._zIndex++);
    this.parent = e.parent, this.id = e.id, this.width = this.height = null, this.pageIndex = e.parent.pageIndex, this.name = e.name, this.div = null, this._uiManager = e.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = e.isCentered, this._structTreeParentId = null;
    const {
      rotation: t,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: n,
        pageY: r
      }
    } = this.parent.viewport;
    this.rotation = t, this.pageRotation = (360 + t - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [n, r];
    const [o, l] = this.parentDimensions;
    this.x = e.x / o, this.y = e.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const e = tt.prototype._resizeWithKeyboard, t = vr.TRANSLATE_SMALL, s = vr.TRANSLATE_BIG;
    return st(this, "_resizerKeyboardManager", new kl([[["ArrowLeft", "mac+ArrowLeft"], e, {
      args: [-t, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], e, {
      args: [t, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], e, {
      args: [0, -t]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], e, {
      args: [0, t]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], tt.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return st(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(e) {
    const t = new _p({
      id: e.parent.getNextId(),
      parent: e.parent,
      uiManager: e._uiManager
    });
    t.annotationElementId = e.annotationElementId, t.deleted = !0, t._uiManager.addToAnnotationStorage(t);
  }
  static initialize(e, t) {
    if (tt._l10n ?? (tt._l10n = e), tt._l10nResizer || (tt._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), tt._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    tt._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(e, t) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(e) {
    return !1;
  }
  static paste(e, t) {
    bt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return a(this, Oo);
  }
  set _isDraggable(e) {
    var t;
    m(this, Oo, e), (t = this.div) == null || t.classList.toggle("draggable", e);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [e, t] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * t / (e * 2), this.y += this.width * e / (t * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * t / (e * 2), this.y -= this.width * e / (t * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(e) {
    this._uiManager.addCommands(e);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = a(this, _h);
  }
  setParent(e) {
    e !== null ? (this.pageIndex = e.pageIndex, this.pageDimensions = e.pageDimensions) : y(this, z, Va).call(this), this.parent = e;
  }
  focusin(e) {
    this._focusEventsAllowed && (a(this, Rn) ? m(this, Rn, !1) : this.parent.setSelected(this));
  }
  focusout(e) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const t = e.relatedTarget;
    t != null && t.closest(`#${this.id}`) || (e.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(e, t, s, i) {
    const [n, r] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (e + s) / n, this.y = (t + i) / r, this.fixAndSetPosition();
  }
  translate(e, t) {
    y(this, z, Ec).call(this, this.parentDimensions, e, t);
  }
  translateInPage(e, t) {
    a(this, Me) || m(this, Me, [this.x, this.y, this.width, this.height]), y(this, z, Ec).call(this, this.pageDimensions, e, t), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(e, t) {
    a(this, Me) || m(this, Me, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, n]
    } = this;
    if (this.x += e / i, this.y += t / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: f
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, f) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: r,
      y: o
    } = this;
    const [l, h] = this.getBaseTranslation();
    r += l, o += h;
    const {
      style: d
    } = s;
    d.left = `${(100 * r).toFixed(2)}%`, d.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(r, o), s.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(e, t) {
  }
  _onTranslated(e, t) {
  }
  get _hasBeenMoved() {
    return !!a(this, Me) && (a(this, Me)[0] !== this.x || a(this, Me)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!a(this, Me) && (a(this, Me)[2] !== this.width || a(this, Me)[3] !== this.height);
  }
  getBaseTranslation() {
    const [e, t] = this.parentDimensions, {
      _borderLineWidth: s
    } = tt, i = s / e, n = s / t;
    switch (this.rotation) {
      case 90:
        return [-i, n];
      case 180:
        return [i, n];
      case 270:
        return [i, -n];
      default:
        return [-i, -n];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(e = this.rotation) {
    const {
      div: {
        style: t
      },
      pageDimensions: [s, i]
    } = this;
    let {
      x: n,
      y: r,
      width: o,
      height: l
    } = this;
    if (o *= s, l *= i, n *= s, r *= i, this._mustFixPosition)
      switch (e) {
        case 0:
          n = Math.max(0, Math.min(s - o, n)), r = Math.max(0, Math.min(i - l, r));
          break;
        case 90:
          n = Math.max(0, Math.min(s - l, n)), r = Math.min(i, Math.max(o, r));
          break;
        case 180:
          n = Math.min(s, Math.max(o, n)), r = Math.min(i, Math.max(l, r));
          break;
        case 270:
          n = Math.min(s, Math.max(l, n)), r = Math.max(0, Math.min(i - o, r));
          break;
      }
    this.x = n /= s, this.y = r /= i;
    const [h, d] = this.getBaseTranslation();
    n += h, r += d, t.left = `${(100 * n).toFixed(2)}%`, t.top = `${(100 * r).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(e, t) {
    var s;
    return y(s = tt, Do, xc).call(s, e, t, this.parentRotation);
  }
  pageTranslationToScreen(e, t) {
    var s;
    return y(s = tt, Do, xc).call(s, e, t, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: e,
      pageDimensions: [t, s]
    } = this;
    return [t * e, s * e];
  }
  setDims(e, t) {
    const [s, i] = this.parentDimensions, {
      style: n
    } = this.div;
    n.width = `${(100 * e / s).toFixed(2)}%`, a(this, Tn) || (n.height = `${(100 * t / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: e
    } = this.div, {
      height: t,
      width: s
    } = e, i = s.endsWith("%"), n = !a(this, Tn) && t.endsWith("%");
    if (i && n)
      return;
    const [r, o] = this.parentDimensions;
    i || (e.width = `${(100 * parseFloat(s) / r).toFixed(2)}%`), !a(this, Tn) && !n && (e.height = `${(100 * parseFloat(t) / o).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(e) {
    return Math.round(e * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var e;
    (e = a(this, wt)) == null || e.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || a(this, Pn) ? this._editToolbar : (this._editToolbar = new uc(this), this.div.append(this._editToolbar.render()), a(this, wt) && await this._editToolbar.addAltText(a(this, wt)), this._editToolbar);
  }
  removeEditToolbar() {
    var e;
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (e = a(this, wt)) == null || e.destroy());
  }
  addContainer(e) {
    var s;
    const t = (s = this._editToolbar) == null ? void 0 : s.div;
    t ? t.before(e) : this.div.append(e);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    a(this, wt) || (Ah.initialize(tt._l10n), m(this, wt, new Ah(this)), a(this, xn) && (a(this, wt).data = a(this, xn), m(this, xn, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var e;
    return (e = a(this, wt)) == null ? void 0 : e.data;
  }
  set altTextData(e) {
    a(this, wt) && (a(this, wt).data = e);
  }
  get guessedAltText() {
    var e;
    return (e = a(this, wt)) == null ? void 0 : e.guessedText;
  }
  async setGuessedAltText(e) {
    var t;
    await ((t = a(this, wt)) == null ? void 0 : t.setGuessedText(e));
  }
  serializeAltText(e) {
    var t;
    return (t = a(this, wt)) == null ? void 0 : t.serialize(e);
  }
  hasAltText() {
    return !!a(this, wt) && !a(this, wt).isEmpty();
  }
  hasAltTextData() {
    var e;
    return ((e = a(this, wt)) == null ? void 0 : e.hasData()) ?? !1;
  }
  render() {
    var n;
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = a(this, zr) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), y(this, z, Pc).call(this);
    const [e, t] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * t / e).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * e / t).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), yh(this, this.div, ["pointerdown"]), this.isResizable && this._uiManager._supportsPinchToZoom && (a(this, In) || m(this, In, new wh({
      container: this.div,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: y(this, z, Mu).bind(this),
      onPinching: y(this, z, _u).bind(this),
      onPinchEnd: y(this, z, Lu).bind(this),
      signal: this._uiManager._signal
    }))), (n = this._uiManager._editorUndoBar) == null || n.hide(), this.div;
  }
  pointerdown(e) {
    const {
      isMac: t
    } = be.platform;
    if (e.button !== 0 || e.ctrlKey && t) {
      e.preventDefault();
      return;
    }
    if (m(this, Rn, !0), this._isDraggable) {
      y(this, z, Ou).call(this, e);
      return;
    }
    y(this, z, Rc).call(this, e);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    a(this, Ls) && clearTimeout(a(this, Ls)), m(this, Ls, setTimeout(() => {
      var e;
      m(this, Ls, null), (e = this.parent) == null || e.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(e, t, s) {
    e.changeParent(this), this.x = t, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(e, t, s = this.rotation) {
    const i = this.parentScale, [n, r] = this.pageDimensions, [o, l] = this.pageTranslation, h = e / i, d = t / i, u = this.x * n, f = this.y * r, p = this.width * n, g = this.height * r;
    switch (s) {
      case 0:
        return [u + h + o, r - f - d - g + l, u + h + p + o, r - f - d + l];
      case 90:
        return [u + d + o, r - f + h + l, u + d + g + o, r - f + h + p + l];
      case 180:
        return [u - h - p + o, r - f + d + l, u - h + o, r - f + d + g + l];
      case 270:
        return [u - d - g + o, r - f - h - p + l, u - d + o, r - f - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(e, t) {
    const [s, i, n, r] = e, o = n - s, l = r - i;
    switch (this.rotation) {
      case 0:
        return [s, t - r, o, l];
      case 90:
        return [s, t - i, l, o];
      case 180:
        return [n, t - i, o, l];
      case 270:
        return [n, t - r, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded(e) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    m(this, Pn, !0);
  }
  disableEditMode() {
    m(this, Pn, !1);
  }
  isInEditMode() {
    return a(this, Pn);
  }
  shouldGetKeyboardEvents() {
    return a(this, qs);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: e,
      left: t,
      bottom: s,
      right: i
    } = this.getClientDimensions(), {
      innerHeight: n,
      innerWidth: r
    } = window;
    return t < r && i > 0 && e < n && s > 0;
  }
  rebuild() {
    y(this, z, Pc).call(this);
  }
  rotate(e) {
  }
  resize() {
  }
  serializeDeleted() {
    var e;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((e = this._initialData) == null ? void 0 : e.popupRef) || ""
    };
  }
  serialize(e = !1, t = null) {
    bt("An editor must be serializable");
  }
  static async deserialize(e, t, s) {
    const i = new this.prototype.constructor({
      parent: t,
      id: t.getNextId(),
      uiManager: s
    });
    i.rotation = e.rotation, m(i, xn, e.accessibilityData);
    const [n, r] = i.pageDimensions, [o, l, h, d] = i.getRectInCurrentCoords(e.rect, r);
    return i.x = o / n, i.y = l / r, i.width = h / n, i.height = d / r, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var e, t;
    if ((e = a(this, Fi)) == null || e.abort(), m(this, Fi, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), a(this, Ls) && (clearTimeout(a(this, Ls)), m(this, Ls, null)), y(this, z, Va).call(this), this.removeEditToolbar(), a(this, Xe)) {
      for (const s of a(this, Xe).values())
        clearTimeout(s);
      m(this, Xe, null);
    }
    this.parent = null, (t = a(this, In)) == null || t.destroy(), m(this, In, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (y(this, z, Pu).call(this), a(this, Jt).classList.remove("hidden"), yh(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(e) {
    if (!this.isResizable || e.target !== this.div || e.key !== "Enter")
      return;
    this._uiManager.setSelected(this), m(this, Zs, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const t = a(this, Jt).children;
    if (!a(this, as)) {
      m(this, as, Array.from(t));
      const r = y(this, z, Du).bind(this), o = y(this, z, ku).bind(this), l = this._uiManager._signal;
      for (const h of a(this, as)) {
        const d = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", r, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", y(this, z, Fu).bind(this, d), {
          signal: l
        }), h.setAttribute("data-l10n-id", tt._l10nResizer[d]);
      }
    }
    const s = a(this, as)[0];
    let i = 0;
    for (const r of t) {
      if (r === s)
        break;
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (a(this, as).length / 4);
    if (n !== i) {
      if (n < i)
        for (let o = 0; o < i - n; o++)
          a(this, Jt).append(a(this, Jt).firstChild);
      else if (n > i)
        for (let o = 0; o < n - i; o++)
          a(this, Jt).firstChild.before(a(this, Jt).lastChild);
      let r = 0;
      for (const o of t) {
        const h = a(this, as)[r++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", tt._l10nResizer[h]);
      }
    }
    y(this, z, Ic).call(this, 0), m(this, qs, !0), a(this, Jt).firstChild.focus({
      focusVisible: !0
    }), e.preventDefault(), e.stopImmediatePropagation();
  }
  _resizeWithKeyboard(e, t) {
    a(this, qs) && y(this, z, Cc).call(this, a(this, _o), {
      deltaX: e,
      deltaY: t,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    y(this, z, Va).call(this), this.div.focus();
  }
  select() {
    var e, t, s;
    if (this.makeResizable(), (e = this.div) == null || e.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, n;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((n = this._editToolbar) == null || n.show());
      });
      return;
    }
    (t = this._editToolbar) == null || t.show(), (s = a(this, wt)) == null || s.toggleAltTextBadge(!1);
  }
  unselect() {
    var e, t, s, i, n;
    (e = a(this, Jt)) == null || e.classList.add("hidden"), (t = this.div) == null || t.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (n = a(this, wt)) == null || n.toggleAltTextBadge(!0);
  }
  updateParams(e, t) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return a(this, Lo);
  }
  set isEditing(e) {
    m(this, Lo, e), this.parent && (e ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(e, t) {
    m(this, Tn, !0);
    const s = e / t, {
      style: i
    } = this.div;
    i.aspectRatio = s, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(e, t = !1) {
    if (t) {
      a(this, Xe) || m(this, Xe, /* @__PURE__ */ new Map());
      const {
        action: s
      } = e;
      let i = a(this, Xe).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(e), a(this, Xe).delete(s), a(this, Xe).size === 0 && m(this, Xe, null);
      }, tt._telemetryTimeout), a(this, Xe).set(s, i);
      return;
    }
    e.type || (e.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: e
      }
    });
  }
  show(e = this._isVisible) {
    this.div.classList.toggle("hidden", !e), this._isVisible = e;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), m(this, zr, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), m(this, zr, !0);
  }
  renderAnnotationElement(e) {
    let t = e.container.querySelector(".annotationContent");
    if (!t)
      t = document.createElement("div"), t.classList.add("annotationContent", this.editorType), e.container.prepend(t);
    else if (t.nodeName === "CANVAS") {
      const s = t;
      t = document.createElement("div"), t.classList.add("annotationContent", this.editorType), s.before(t);
    }
    return t;
  }
  resetAnnotationElement(e) {
    const {
      firstChild: t
    } = e.container;
    (t == null ? void 0 : t.nodeName) === "DIV" && t.classList.contains("annotationContent") && t.remove();
  }
};
xn = new WeakMap(), as = new WeakMap(), wt = new WeakMap(), zr = new WeakMap(), ki = new WeakMap(), Mo = new WeakMap(), Tn = new WeakMap(), Jt = new WeakMap(), Cn = new WeakMap(), Zs = new WeakMap(), Fi = new WeakMap(), _o = new WeakMap(), Rn = new WeakMap(), Me = new WeakMap(), Lo = new WeakMap(), Pn = new WeakMap(), qs = new WeakMap(), Ls = new WeakMap(), Vr = new WeakMap(), Wr = new WeakMap(), Xe = new WeakMap(), In = new WeakMap(), Oo = new WeakMap(), _h = new WeakMap(), z = new WeakSet(), Ec = function([e, t], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / e, this.y += i / t, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, Do = new WeakSet(), xc = function(e, t, s) {
  switch (s) {
    case 90:
      return [t, -e];
    case 180:
      return [-e, -t];
    case 270:
      return [-t, e];
    default:
      return [e, t];
  }
}, Kl = function(e) {
  switch (e) {
    case 90: {
      const [t, s] = this.pageDimensions;
      return [0, -t / s, s / t, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [t, s] = this.pageDimensions;
      return [0, t / s, -s / t, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Pu = function() {
  if (a(this, Jt))
    return;
  m(this, Jt, document.createElement("div")), a(this, Jt).classList.add("resizers");
  const e = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], t = this._uiManager._signal;
  for (const s of e) {
    const i = document.createElement("div");
    a(this, Jt).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", y(this, z, Iu).bind(this, s), {
      signal: t
    }), i.addEventListener("contextmenu", ms, {
      signal: t
    }), i.tabIndex = -1;
  }
  this.div.prepend(a(this, Jt));
}, Iu = function(e, t) {
  var d;
  t.preventDefault();
  const {
    isMac: s
  } = be.platform;
  if (t.button !== 0 || t.ctrlKey && s)
    return;
  (d = a(this, wt)) == null || d.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, m(this, Cn, [t.screenX, t.screenY]);
  const n = new AbortController(), r = this._uiManager.combinedSignal(n);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", y(this, z, Cc).bind(this, e), {
    passive: !0,
    capture: !0,
    signal: r
  }), window.addEventListener("touchmove", Ue, {
    passive: !1,
    signal: r
  }), window.addEventListener("contextmenu", ms, {
    signal: r
  }), m(this, Zs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(t.target).cursor;
  const h = () => {
    var u;
    n.abort(), this.parent.togglePointerEvents(!0), (u = a(this, wt)) == null || u.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, y(this, z, Ql).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: r
  }), window.addEventListener("blur", h, {
    signal: r
  });
}, Tc = function(e, t, s, i) {
  this.width = s, this.height = i, this.x = e, this.y = t;
  const [n, r] = this.parentDimensions;
  this.setDims(n * s, r * i), this.fixAndSetPosition(), this._onResized();
}, Ql = function() {
  if (!a(this, Zs))
    return;
  const {
    savedX: e,
    savedY: t,
    savedWidth: s,
    savedHeight: i
  } = a(this, Zs);
  m(this, Zs, null);
  const n = this.x, r = this.y, o = this.width, l = this.height;
  n === e && r === t && o === s && l === i || this.addCommands({
    cmd: y(this, z, Tc).bind(this, n, r, o, l),
    undo: y(this, z, Tc).bind(this, e, t, s, i),
    mustExec: !0
  });
}, Cc = function(e, t) {
  const [s, i] = this.parentDimensions, n = this.x, r = this.y, o = this.width, l = this.height, h = tt.MIN_SIZE / s, d = tt.MIN_SIZE / i, u = y(this, z, Kl).call(this, this.rotation), f = (_, k) => [u[0] * _ + u[2] * k, u[1] * _ + u[3] * k], p = y(this, z, Kl).call(this, 360 - this.rotation), g = (_, k) => [p[0] * _ + p[2] * k, p[1] * _ + p[3] * k];
  let v, w, A = !1, S = !1;
  switch (e) {
    case "topLeft":
      A = !0, v = (_, k) => [0, 0], w = (_, k) => [_, k];
      break;
    case "topMiddle":
      v = (_, k) => [_ / 2, 0], w = (_, k) => [_ / 2, k];
      break;
    case "topRight":
      A = !0, v = (_, k) => [_, 0], w = (_, k) => [0, k];
      break;
    case "middleRight":
      S = !0, v = (_, k) => [_, k / 2], w = (_, k) => [0, k / 2];
      break;
    case "bottomRight":
      A = !0, v = (_, k) => [_, k], w = (_, k) => [0, 0];
      break;
    case "bottomMiddle":
      v = (_, k) => [_ / 2, k], w = (_, k) => [_ / 2, 0];
      break;
    case "bottomLeft":
      A = !0, v = (_, k) => [0, k], w = (_, k) => [_, 0];
      break;
    case "middleLeft":
      S = !0, v = (_, k) => [0, k / 2], w = (_, k) => [_, k / 2];
      break;
  }
  const x = v(o, l), T = w(o, l);
  let E = f(...T);
  const C = tt._round(n + E[0]), R = tt._round(r + E[1]);
  let I = 1, P = 1, F, L;
  if (t.fromKeyboard)
    ({
      deltaX: F,
      deltaY: L
    } = t);
  else {
    const {
      screenX: _,
      screenY: k
    } = t, [nt, lt] = a(this, Cn);
    [F, L] = this.screenToPageTranslation(_ - nt, k - lt), a(this, Cn)[0] = _, a(this, Cn)[1] = k;
  }
  if ([F, L] = g(F / s, L / i), A) {
    const _ = Math.hypot(o, l);
    I = P = Math.max(Math.min(Math.hypot(T[0] - x[0] - F, T[1] - x[1] - L) / _, 1 / o, 1 / l), h / o, d / l);
  } else S ? I = Math.max(h, Math.min(1, Math.abs(T[0] - x[0] - F))) / o : P = Math.max(d, Math.min(1, Math.abs(T[1] - x[1] - L))) / l;
  const q = tt._round(o * I), Y = tt._round(l * P);
  E = f(...w(q, Y));
  const K = C - E[0], gt = R - E[1];
  a(this, Me) || m(this, Me, [this.x, this.y, this.width, this.height]), this.width = q, this.height = Y, this.x = K, this.y = gt, this.setDims(s * q, i * Y), this.fixAndSetPosition(), this._onResizing();
}, Mu = function() {
  var e;
  m(this, Zs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (e = a(this, wt)) == null || e.toggle(!1), this.parent.togglePointerEvents(!1);
}, _u = function(e, t, s) {
  let n = 0.7 * (s / t) + 1 - 0.7;
  if (n === 1)
    return;
  const r = y(this, z, Kl).call(this, this.rotation), o = (C, R) => [r[0] * C + r[2] * R, r[1] * C + r[3] * R], [l, h] = this.parentDimensions, d = this.x, u = this.y, f = this.width, p = this.height, g = tt.MIN_SIZE / l, v = tt.MIN_SIZE / h;
  n = Math.max(Math.min(n, 1 / f, 1 / p), g / f, v / p);
  const w = tt._round(f * n), A = tt._round(p * n);
  if (w === f && A === p)
    return;
  a(this, Me) || m(this, Me, [d, u, f, p]);
  const S = o(f / 2, p / 2), x = tt._round(d + S[0]), T = tt._round(u + S[1]), E = o(w / 2, A / 2);
  this.x = x - E[0], this.y = T - E[1], this.width = w, this.height = A, this.setDims(l * w, h * A), this.fixAndSetPosition(), this._onResizing();
}, Lu = function() {
  var e;
  (e = a(this, wt)) == null || e.toggle(!0), this.parent.togglePointerEvents(!0), y(this, z, Ql).call(this);
}, Rc = function(e) {
  const {
    isMac: t
  } = be.platform;
  e.ctrlKey && !t || e.shiftKey || e.metaKey && t ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Ou = function(e) {
  const {
    isSelected: t
  } = this;
  this._uiManager.setUpDragSession();
  let s = !1;
  const i = new AbortController(), n = this._uiManager.combinedSignal(i), r = {
    capture: !0,
    passive: !1,
    signal: n
  }, o = (h) => {
    i.abort(), m(this, ki, null), m(this, Rn, !1), this._uiManager.endDragSession() || y(this, z, Rc).call(this, h), s && this._onStopDragging();
  };
  t && (m(this, Vr, e.clientX), m(this, Wr, e.clientY), m(this, ki, e.pointerId), m(this, Mo, e.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: d,
      clientY: u,
      pointerId: f
    } = h;
    if (f !== a(this, ki)) {
      Ue(h);
      return;
    }
    const [p, g] = this.screenToPageTranslation(d - a(this, Vr), u - a(this, Wr));
    m(this, Vr, d), m(this, Wr, u), this._uiManager.dragSelectedEditors(p, g);
  }, r), window.addEventListener("touchmove", Ue, r), window.addEventListener("pointerdown", (h) => {
    h.pointerType === a(this, Mo) && (a(this, In) || h.isPrimary) && o(h), Ue(h);
  }, r));
  const l = (h) => {
    if (!a(this, ki) || a(this, ki) === h.pointerId) {
      o(h);
      return;
    }
    Ue(h);
  };
  window.addEventListener("pointerup", l, {
    signal: n
  }), window.addEventListener("blur", l, {
    signal: n
  });
}, Pc = function() {
  if (a(this, Fi) || !this.div)
    return;
  m(this, Fi, new AbortController());
  const e = this._uiManager.combinedSignal(a(this, Fi));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: e
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: e
  });
}, Du = function(e) {
  tt._resizerKeyboardManager.exec(this, e);
}, ku = function(e) {
  var t;
  a(this, qs) && ((t = e.relatedTarget) == null ? void 0 : t.parentNode) !== a(this, Jt) && y(this, z, Va).call(this);
}, Fu = function(e) {
  m(this, _o, a(this, qs) ? e : "");
}, Ic = function(e) {
  if (a(this, as))
    for (const t of a(this, as))
      t.tabIndex = e;
}, Va = function() {
  m(this, qs, !1), y(this, z, Ic).call(this, -1), y(this, z, Ql).call(this);
}, b(tt, Do), G(tt, "_l10n", null), G(tt, "_l10nResizer", null), G(tt, "_borderLineWidth", -1), G(tt, "_colorManager", new gc()), G(tt, "_zIndex", 1), G(tt, "_telemetryTimeout", 1e3);
let Rt = tt;
class _p extends Rt {
  constructor(e) {
    super(e), this.annotationElementId = e.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const Gd = 3285377520, ze = 4294901760, Ss = 65535;
class Nu {
  constructor(e) {
    this.h1 = e ? e & 4294967295 : Gd, this.h2 = e ? e & 4294967295 : Gd;
  }
  update(e) {
    let t, s;
    if (typeof e == "string") {
      t = new Uint8Array(e.length * 2), s = 0;
      for (let v = 0, w = e.length; v < w; v++) {
        const A = e.charCodeAt(v);
        A <= 255 ? t[s++] = A : (t[s++] = A >>> 8, t[s++] = A & 255);
      }
    } else if (ArrayBuffer.isView(e))
      t = e.slice(), s = t.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, n = s - i * 4, r = new Uint32Array(t.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, d = this.h2;
    const u = 3432918353, f = 461845907, p = u & Ss, g = f & Ss;
    for (let v = 0; v < i; v++)
      v & 1 ? (o = r[v], o = o * u & ze | o * p & Ss, o = o << 15 | o >>> 17, o = o * f & ze | o * g & Ss, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = r[v], l = l * u & ze | l * p & Ss, l = l << 15 | l >>> 17, l = l * f & ze | l * g & Ss, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, n) {
      case 3:
        o ^= t[i * 4 + 2] << 16;
      case 2:
        o ^= t[i * 4 + 1] << 8;
      case 1:
        o ^= t[i * 4], o = o * u & ze | o * p & Ss, o = o << 15 | o >>> 17, o = o * f & ze | o * g & Ss, i & 1 ? h ^= o : d ^= o;
    }
    this.h1 = h, this.h2 = d;
  }
  hexdigest() {
    let e = this.h1, t = this.h2;
    return e ^= t >>> 1, e = e * 3981806797 & ze | e * 36045 & Ss, t = t * 4283543511 & ze | ((t << 16 | e >>> 16) * 2950163797 & ze) >>> 16, e ^= t >>> 1, e = e * 444984403 & ze | e * 60499 & Ss, t = t * 3301882366 & ze | ((t << 16 | e >>> 16) * 3120437893 & ze) >>> 16, e ^= t >>> 1, (e >>> 0).toString(16).padStart(8, "0") + (t >>> 0).toString(16).padStart(8, "0");
  }
}
const Mc = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Mn, _n, Wt, Lh, Bu;
class Pd {
  constructor() {
    b(this, Lh);
    b(this, Mn, !1);
    b(this, _n, null);
    b(this, Wt, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(e, t) {
    const s = a(this, Wt).get(e);
    return s === void 0 ? t : Object.assign(t, s);
  }
  getRawValue(e) {
    return a(this, Wt).get(e);
  }
  remove(e) {
    if (a(this, Wt).delete(e), a(this, Wt).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const t of a(this, Wt).values())
        if (t instanceof Rt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(e, t) {
    const s = a(this, Wt).get(e);
    let i = !1;
    if (s !== void 0)
      for (const [n, r] of Object.entries(t))
        s[n] !== r && (i = !0, s[n] = r);
    else
      i = !0, a(this, Wt).set(e, t);
    i && y(this, Lh, Bu).call(this), t instanceof Rt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(t.constructor._type);
  }
  has(e) {
    return a(this, Wt).has(e);
  }
  getAll() {
    return a(this, Wt).size > 0 ? Sd(a(this, Wt)) : null;
  }
  setAll(e) {
    for (const [t, s] of Object.entries(e))
      this.setValue(t, s);
  }
  get size() {
    return a(this, Wt).size;
  }
  resetModified() {
    a(this, Mn) && (m(this, Mn, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Hu(this);
  }
  get serializable() {
    if (a(this, Wt).size === 0)
      return Mc;
    const e = /* @__PURE__ */ new Map(), t = new Nu(), s = [], i = /* @__PURE__ */ Object.create(null);
    let n = !1;
    for (const [r, o] of a(this, Wt)) {
      const l = o instanceof Rt ? o.serialize(!1, i) : o;
      l && (e.set(r, l), t.update(`${r}:${JSON.stringify(l)}`), n || (n = !!l.bitmap));
    }
    if (n)
      for (const r of e.values())
        r.bitmap && s.push(r.bitmap);
    return e.size > 0 ? {
      map: e,
      hash: t.hexdigest(),
      transfer: s
    } : Mc;
  }
  get editorStats() {
    let e = null;
    const t = /* @__PURE__ */ new Map();
    for (const s of a(this, Wt).values()) {
      if (!(s instanceof Rt))
        continue;
      const i = s.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: n
      } = i;
      t.has(n) || t.set(n, Object.getPrototypeOf(s).constructor), e || (e = /* @__PURE__ */ Object.create(null));
      const r = e[n] || (e[n] = /* @__PURE__ */ new Map());
      for (const [o, l] of Object.entries(i)) {
        if (o === "type")
          continue;
        let h = r.get(o);
        h || (h = /* @__PURE__ */ new Map(), r.set(o, h));
        const d = h.get(l) ?? 0;
        h.set(l, d + 1);
      }
    }
    for (const [s, i] of t)
      e[s] = i.computeTelemetryFinalData(e[s]);
    return e;
  }
  resetModifiedIds() {
    m(this, _n, null);
  }
  get modifiedIds() {
    if (a(this, _n))
      return a(this, _n);
    const e = [];
    for (const t of a(this, Wt).values())
      !(t instanceof Rt) || !t.annotationElementId || !t.serialize() || e.push(t.annotationElementId);
    return m(this, _n, {
      ids: new Set(e),
      hash: e.join(",")
    });
  }
}
Mn = new WeakMap(), _n = new WeakMap(), Wt = new WeakMap(), Lh = new WeakSet(), Bu = function() {
  a(this, Mn) || (m(this, Mn, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var ko;
class Hu extends Pd {
  constructor(t) {
    super();
    b(this, ko);
    const {
      map: s,
      hash: i,
      transfer: n
    } = t.serializable, r = structuredClone(s, n ? {
      transfer: n
    } : null);
    m(this, ko, {
      map: r,
      hash: i,
      transfer: n
    });
  }
  get print() {
    bt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return a(this, ko);
  }
  get modifiedIds() {
    return st(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
ko = new WeakMap();
var Xr;
class Lp {
  constructor({
    ownerDocument: e = globalThis.document,
    styleElement: t = null
  }) {
    b(this, Xr, /* @__PURE__ */ new Set());
    this._document = e, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(e) {
    this.nativeFontFaces.add(e), this._document.fonts.add(e);
  }
  removeNativeFontFace(e) {
    this.nativeFontFaces.delete(e), this._document.fonts.delete(e);
  }
  insertRule(e) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const t = this.styleElement.sheet;
    t.insertRule(e, t.cssRules.length);
  }
  clear() {
    for (const e of this.nativeFontFaces)
      this._document.fonts.delete(e);
    this.nativeFontFaces.clear(), a(this, Xr).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: e,
    _inspectFont: t
  }) {
    if (!(!e || a(this, Xr).has(e.loadedName))) {
      if (Ft(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: n
        } = e, r = new FontFace(s, i, n);
        this.addNativeFontFace(r);
        try {
          await r.load(), a(this, Xr).add(s), t == null || t(e);
        } catch {
          X(`Cannot load system font: ${e.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(r);
        }
        return;
      }
      bt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(e) {
    if (e.attached || e.missingFile && !e.systemFontInfo)
      return;
    if (e.attached = !0, e.systemFontInfo) {
      await this.loadSystemFont(e);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = e.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw X(`Failed to load font '${s.family}': '${i}'.`), e.disableFontFace = !0, i;
        }
      }
      return;
    }
    const t = e.createFontFaceRule();
    if (t) {
      if (this.insertRule(t), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(e, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var t;
    const e = !!((t = this._document) != null && t.fonts);
    return st(this, "isFontLoadingAPISupported", e);
  }
  get isSyncFontLoadingSupported() {
    let e = !1;
    return (ce || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (e = !0), st(this, "isSyncFontLoadingSupported", e);
  }
  _queueLoadingCallback(e) {
    function t() {
      for (Ft(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const n = s.shift();
        setTimeout(n.callback, 0);
      }
    }
    const {
      loadingRequests: s
    } = this, i = {
      done: !1,
      complete: t,
      callback: e
    };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const e = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return st(this, "_loadTestFont", e);
  }
  _prepareFontLoadEvent(e, t) {
    function s(T, E) {
      return T.charCodeAt(E) << 24 | T.charCodeAt(E + 1) << 16 | T.charCodeAt(E + 2) << 8 | T.charCodeAt(E + 3) & 255;
    }
    function i(T, E, C, R) {
      const I = T.substring(0, E), P = T.substring(E + C);
      return I + R + P;
    }
    let n, r;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function d(T, E) {
      if (++h > 30) {
        X("Load test font never loaded."), E();
        return;
      }
      if (l.font = "30px " + T, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        E();
        return;
      }
      setTimeout(d.bind(null, T, E));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let f = this._loadTestFont;
    f = i(f, 976, u.length, u);
    const g = 16, v = 1482184792;
    let w = s(f, g);
    for (n = 0, r = u.length - 3; n < r; n += 4)
      w = w - v + s(u, n) | 0;
    n < u.length && (w = w - v + s(u + "XXX", n) | 0), f = i(f, g, 4, vp(w));
    const A = `url(data:font/opentype;base64,${btoa(f)});`, S = `@font-face {font-family:"${u}";src:${A}}`;
    this.insertRule(S);
    const x = this._document.createElement("div");
    x.style.visibility = "hidden", x.style.width = x.style.height = "10px", x.style.position = "absolute", x.style.top = x.style.left = "0px";
    for (const T of [e.loadedName, u]) {
      const E = this._document.createElement("span");
      E.textContent = "Hi", E.style.fontFamily = T, x.append(E);
    }
    this._document.body.append(x), d(u, () => {
      x.remove(), t.complete();
    });
  }
}
Xr = new WeakMap();
class Op {
  constructor(e, {
    disableFontFace: t = !1,
    fontExtraProperties: s = !1,
    inspectFont: i = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const n in e)
      this[n] = e[n];
    this.disableFontFace = t === !0, this.fontExtraProperties = s === !0, this._inspectFont = i;
  }
  createNativeFontFace() {
    var t;
    if (!this.data || this.disableFontFace)
      return null;
    let e;
    if (!this.cssFontInfo)
      e = new FontFace(this.loadedName, this.data, {});
    else {
      const s = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), e = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    }
    return (t = this._inspectFont) == null || t.call(this, this), e;
  }
  createFontFaceRule() {
    var s;
    if (!this.data || this.disableFontFace)
      return null;
    const e = `url(data:${this.mimetype};base64,${Ep(this.data)});`;
    let t;
    if (!this.cssFontInfo)
      t = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
    else {
      let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), t = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${e}}`;
    }
    return (s = this._inspectFont) == null || s.call(this, this, e), t;
  }
  getPathGenerator(e, t) {
    if (this.compiledGlyphs[t] !== void 0)
      return this.compiledGlyphs[t];
    const s = this.loadedName + "_path_" + t;
    let i;
    try {
      i = e.get(s);
    } catch (r) {
      X(`getPathGenerator - ignoring character: "${r}".`);
    }
    const n = new Path2D(i || "");
    return this.fontExtraProperties || e.delete(s), this.compiledGlyphs[t] = n;
  }
}
const Bl = {
  DATA: 1,
  ERROR: 2
}, kt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function zd() {
}
function Se(c) {
  if (c instanceof sn || c instanceof hc || c instanceof ro || c instanceof $d || c instanceof bh || c instanceof sc)
    return c;
  switch (c instanceof Error || typeof c == "object" && c !== null || bt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), c.name) {
    case "AbortException":
      return new sn(c.message);
    case "InvalidPDFException":
      return new hc(c.message);
    case "MissingPDFException":
      return new ro(c.message);
    case "PasswordException":
      return new $d(c.message, c.code);
    case "UnexpectedResponseException":
      return new bh(c.message, c.status);
    case "UnknownErrorException":
      return new sc(c.message, c.details);
  }
  return new sc(c.message, c.toString());
}
var Yr, ts, $u, ju, Uu, Jl;
class Wa {
  constructor(e, t, s) {
    b(this, ts);
    b(this, Yr, new AbortController());
    this.sourceName = e, this.targetName = t, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", y(this, ts, $u).bind(this), {
      signal: a(this, Yr).signal
    });
  }
  on(e, t) {
    const s = this.actionHandler;
    if (s[e])
      throw new Error(`There is already an actionName called "${e}"`);
    s[e] = t;
  }
  send(e, t, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: e,
      data: t
    }, s);
  }
  sendWithPromise(e, t, s) {
    const i = this.callbackId++, n = Promise.withResolvers();
    this.callbackCapabilities[i] = n;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: e,
        callbackId: i,
        data: t
      }, s);
    } catch (r) {
      n.reject(r);
    }
    return n.promise;
  }
  sendWithStream(e, t, s, i) {
    const n = this.streamId++, r = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[n] = {
          controller: h,
          startCall: d,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: r,
          targetName: o,
          action: e,
          streamId: n,
          data: t,
          desiredSize: h.desiredSize
        }, i), d.promise;
      },
      pull: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[n].pullCall = d, l.postMessage({
          sourceName: r,
          targetName: o,
          stream: kt.PULL,
          streamId: n,
          desiredSize: h.desiredSize
        }), d.promise;
      },
      cancel: (h) => {
        Ft(h instanceof Error, "cancel must have a valid reason");
        const d = Promise.withResolvers();
        return this.streamControllers[n].cancelCall = d, this.streamControllers[n].isClosed = !0, l.postMessage({
          sourceName: r,
          targetName: o,
          stream: kt.CANCEL,
          streamId: n,
          reason: Se(h)
        }), d.promise;
      }
    }, s);
  }
  destroy() {
    var e;
    (e = a(this, Yr)) == null || e.abort(), m(this, Yr, null);
  }
}
Yr = new WeakMap(), ts = new WeakSet(), $u = function({
  data: e
}) {
  if (e.targetName !== this.sourceName)
    return;
  if (e.stream) {
    y(this, ts, Uu).call(this, e);
    return;
  }
  if (e.callback) {
    const s = e.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], e.callback === Bl.DATA)
      i.resolve(e.data);
    else if (e.callback === Bl.ERROR)
      i.reject(Se(e.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const t = this.actionHandler[e.action];
  if (!t)
    throw new Error(`Unknown action from worker: ${e.action}`);
  if (e.callbackId) {
    const s = this.sourceName, i = e.sourceName, n = this.comObj;
    Promise.try(t, e.data).then(function(r) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: Bl.DATA,
        callbackId: e.callbackId,
        data: r
      });
    }, function(r) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        callback: Bl.ERROR,
        callbackId: e.callbackId,
        reason: Se(r)
      });
    });
    return;
  }
  if (e.streamId) {
    y(this, ts, ju).call(this, e);
    return;
  }
  t(e.data);
}, ju = function(e) {
  const t = e.streamId, s = this.sourceName, i = e.sourceName, n = this.comObj, r = this, o = this.actionHandler[e.action], l = {
    enqueue(h, d = 1, u) {
      if (this.isCancelled)
        return;
      const f = this.desiredSize;
      this.desiredSize -= d, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
        sourceName: s,
        targetName: i,
        stream: kt.ENQUEUE,
        streamId: t,
        chunk: h
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: kt.CLOSE,
        streamId: t
      }), delete r.streamSinks[t]);
    },
    error(h) {
      Ft(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, n.postMessage({
        sourceName: s,
        targetName: i,
        stream: kt.ERROR,
        streamId: t,
        reason: Se(h)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: e.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[t] = l, Promise.try(o, e.data, l).then(function() {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: kt.START_COMPLETE,
      streamId: t,
      success: !0
    });
  }, function(h) {
    n.postMessage({
      sourceName: s,
      targetName: i,
      stream: kt.START_COMPLETE,
      streamId: t,
      reason: Se(h)
    });
  });
}, Uu = function(e) {
  const t = e.streamId, s = this.sourceName, i = e.sourceName, n = this.comObj, r = this.streamControllers[t], o = this.streamSinks[t];
  switch (e.stream) {
    case kt.START_COMPLETE:
      e.success ? r.startCall.resolve() : r.startCall.reject(Se(e.reason));
      break;
    case kt.PULL_COMPLETE:
      e.success ? r.pullCall.resolve() : r.pullCall.reject(Se(e.reason));
      break;
    case kt.PULL:
      if (!o) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.PULL_COMPLETE,
          streamId: t,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && e.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = e.desiredSize, Promise.try(o.onPull || zd).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.PULL_COMPLETE,
          streamId: t,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.PULL_COMPLETE,
          streamId: t,
          reason: Se(h)
        });
      });
      break;
    case kt.ENQUEUE:
      if (Ft(r, "enqueue should have stream controller"), r.isClosed)
        break;
      r.controller.enqueue(e.chunk);
      break;
    case kt.CLOSE:
      if (Ft(r, "close should have stream controller"), r.isClosed)
        break;
      r.isClosed = !0, r.controller.close(), y(this, ts, Jl).call(this, r, t);
      break;
    case kt.ERROR:
      Ft(r, "error should have stream controller"), r.controller.error(Se(e.reason)), y(this, ts, Jl).call(this, r, t);
      break;
    case kt.CANCEL_COMPLETE:
      e.success ? r.cancelCall.resolve() : r.cancelCall.reject(Se(e.reason)), y(this, ts, Jl).call(this, r, t);
      break;
    case kt.CANCEL:
      if (!o)
        break;
      const l = Se(e.reason);
      Promise.try(o.onCancel || zd, l).then(function() {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.CANCEL_COMPLETE,
          streamId: t,
          success: !0
        });
      }, function(h) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          stream: kt.CANCEL_COMPLETE,
          streamId: t,
          reason: Se(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[t];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Jl = async function(e, t) {
  var s, i, n;
  await Promise.allSettled([(s = e.startCall) == null ? void 0 : s.promise, (i = e.pullCall) == null ? void 0 : i.promise, (n = e.cancelCall) == null ? void 0 : n.promise]), delete this.streamControllers[t];
};
var Fo;
class Gu {
  constructor({
    enableHWA: e = !1
  }) {
    b(this, Fo, !1);
    m(this, Fo, e);
  }
  create(e, t) {
    if (e <= 0 || t <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(e, t);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !a(this, Fo)
      })
    };
  }
  reset(e, t, s) {
    if (!e.canvas)
      throw new Error("Canvas is not specified");
    if (t <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    e.canvas.width = t, e.canvas.height = s;
  }
  destroy(e) {
    if (!e.canvas)
      throw new Error("Canvas is not specified");
    e.canvas.width = 0, e.canvas.height = 0, e.canvas = null, e.context = null;
  }
  _createCanvas(e, t) {
    bt("Abstract method `_createCanvas` called.");
  }
}
Fo = new WeakMap();
class Dp extends Gu {
  constructor({
    ownerDocument: e = globalThis.document,
    enableHWA: t = !1
  }) {
    super({
      enableHWA: t
    }), this._document = e;
  }
  _createCanvas(e, t) {
    const s = this._document.createElement("canvas");
    return s.width = e, s.height = t, s;
  }
}
class zu {
  constructor({
    baseUrl: e = null,
    isCompressed: t = !0
  }) {
    this.baseUrl = e, this.isCompressed = t;
  }
  async fetch({
    name: e
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!e)
      throw new Error("CMap name must be specified.");
    const t = this.baseUrl + e + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(t).then((s) => ({
      cMapData: s,
      isCompressed: this.isCompressed
    })).catch((s) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${t}`);
    });
  }
  async _fetch(e) {
    bt("Abstract method `_fetch` called.");
  }
}
class Vu extends zu {
  async _fetch(e) {
    const t = await Kh(e, this.isCompressed ? "arraybuffer" : "text");
    return t instanceof ArrayBuffer ? new Uint8Array(t) : Yh(t);
  }
}
rt(4520);
class Wu {
  addFilter(e) {
    return "none";
  }
  addHCMFilter(e, t) {
    return "none";
  }
  addAlphaFilter(e) {
    return "none";
  }
  addLuminosityFilter(e) {
    return "none";
  }
  addHighlightHCMFilter(e, t, s, i, n) {
    return "none";
  }
  destroy(e = !1) {
  }
}
var Ln, Kr, ti, ei, ae, On, Dn, B, ie, Xa, Sr, Zl, Er, Xu, _c, xr, Ya, Ka, Lc, Qa;
class kp extends Wu {
  constructor({
    docId: t,
    ownerDocument: s = globalThis.document
  }) {
    super();
    b(this, B);
    b(this, Ln);
    b(this, Kr);
    b(this, ti);
    b(this, ei);
    b(this, ae);
    b(this, On);
    b(this, Dn, 0);
    m(this, ei, t), m(this, ae, s);
  }
  addFilter(t) {
    if (!t)
      return "none";
    let s = a(this, B, ie).get(t);
    if (s)
      return s;
    const [i, n, r] = y(this, B, Zl).call(this, t), o = t.length === 1 ? i : `${i}${n}${r}`;
    if (s = a(this, B, ie).get(o), s)
      return a(this, B, ie).set(t, s), s;
    const l = `g_${a(this, ei)}_transfer_map_${ue(this, Dn)._++}`, h = y(this, B, Er).call(this, l);
    a(this, B, ie).set(t, h), a(this, B, ie).set(o, h);
    const d = y(this, B, xr).call(this, l);
    return y(this, B, Ka).call(this, i, n, r, d), h;
  }
  addHCMFilter(t, s) {
    var g;
    const i = `${t}-${s}`, n = "base";
    let r = a(this, B, Xa).get(n);
    if ((r == null ? void 0 : r.key) === i || (r ? ((g = r.filter) == null || g.remove(), r.key = i, r.url = "none", r.filter = null) : (r = {
      key: i,
      url: "none",
      filter: null
    }, a(this, B, Xa).set(n, r)), !t || !s))
      return r.url;
    const o = y(this, B, Qa).call(this, t);
    t = U.makeHexColor(...o);
    const l = y(this, B, Qa).call(this, s);
    if (s = U.makeHexColor(...l), a(this, B, Sr).style.color = "", t === "#000000" && s === "#ffffff" || t === s)
      return r.url;
    const h = new Array(256);
    for (let v = 0; v <= 255; v++) {
      const w = v / 255;
      h[v] = w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    }
    const d = h.join(","), u = `g_${a(this, ei)}_hcm_filter`, f = r.filter = y(this, B, xr).call(this, u);
    y(this, B, Ka).call(this, d, d, d, f), y(this, B, _c).call(this, f);
    const p = (v, w) => {
      const A = o[v] / 255, S = l[v] / 255, x = new Array(w + 1);
      for (let T = 0; T <= w; T++)
        x[T] = A + T / w * (S - A);
      return x.join(",");
    };
    return y(this, B, Ka).call(this, p(0, 5), p(1, 5), p(2, 5), f), r.url = y(this, B, Er).call(this, u), r.url;
  }
  addAlphaFilter(t) {
    let s = a(this, B, ie).get(t);
    if (s)
      return s;
    const [i] = y(this, B, Zl).call(this, [t]), n = `alpha_${i}`;
    if (s = a(this, B, ie).get(n), s)
      return a(this, B, ie).set(t, s), s;
    const r = `g_${a(this, ei)}_alpha_map_${ue(this, Dn)._++}`, o = y(this, B, Er).call(this, r);
    a(this, B, ie).set(t, o), a(this, B, ie).set(n, o);
    const l = y(this, B, xr).call(this, r);
    return y(this, B, Lc).call(this, i, l), o;
  }
  addLuminosityFilter(t) {
    let s = a(this, B, ie).get(t || "luminosity");
    if (s)
      return s;
    let i, n;
    if (t ? ([i] = y(this, B, Zl).call(this, [t]), n = `luminosity_${i}`) : n = "luminosity", s = a(this, B, ie).get(n), s)
      return a(this, B, ie).set(t, s), s;
    const r = `g_${a(this, ei)}_luminosity_map_${ue(this, Dn)._++}`, o = y(this, B, Er).call(this, r);
    a(this, B, ie).set(t, o), a(this, B, ie).set(n, o);
    const l = y(this, B, xr).call(this, r);
    return y(this, B, Xu).call(this, l), t && y(this, B, Lc).call(this, i, l), o;
  }
  addHighlightHCMFilter(t, s, i, n, r) {
    var S;
    const o = `${s}-${i}-${n}-${r}`;
    let l = a(this, B, Xa).get(t);
    if ((l == null ? void 0 : l.key) === o || (l ? ((S = l.filter) == null || S.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, a(this, B, Xa).set(t, l)), !s || !i))
      return l.url;
    const [h, d] = [s, i].map(y(this, B, Qa).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), f = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), [p, g] = [n, r].map(y(this, B, Qa).bind(this));
    f < u && ([u, f, p, g] = [f, u, g, p]), a(this, B, Sr).style.color = "";
    const v = (x, T, E) => {
      const C = new Array(256), R = (f - u) / E, I = x / 255, P = (T - x) / (255 * E);
      let F = 0;
      for (let L = 0; L <= E; L++) {
        const q = Math.round(u + L * R), Y = I + L * P;
        for (let K = F; K <= q; K++)
          C[K] = Y;
        F = q + 1;
      }
      for (let L = F; L < 256; L++)
        C[L] = C[F - 1];
      return C.join(",");
    }, w = `g_${a(this, ei)}_hcm_${t}_filter`, A = l.filter = y(this, B, xr).call(this, w);
    return y(this, B, _c).call(this, A), y(this, B, Ka).call(this, v(p[0], g[0], 5), v(p[1], g[1], 5), v(p[2], g[2], 5), A), l.url = y(this, B, Er).call(this, w), l.url;
  }
  destroy(t = !1) {
    var s, i, n, r;
    t && ((s = a(this, On)) != null && s.size) || ((i = a(this, ti)) == null || i.parentNode.parentNode.remove(), m(this, ti, null), (n = a(this, Kr)) == null || n.clear(), m(this, Kr, null), (r = a(this, On)) == null || r.clear(), m(this, On, null), m(this, Dn, 0));
  }
}
Ln = new WeakMap(), Kr = new WeakMap(), ti = new WeakMap(), ei = new WeakMap(), ae = new WeakMap(), On = new WeakMap(), Dn = new WeakMap(), B = new WeakSet(), ie = function() {
  return a(this, Kr) || m(this, Kr, /* @__PURE__ */ new Map());
}, Xa = function() {
  return a(this, On) || m(this, On, /* @__PURE__ */ new Map());
}, Sr = function() {
  if (!a(this, ti)) {
    const t = a(this, ae).createElement("div"), {
      style: s
    } = t;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = a(this, ae).createElementNS(Us, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), m(this, ti, a(this, ae).createElementNS(Us, "defs")), t.append(i), i.append(a(this, ti)), a(this, ae).body.append(t);
  }
  return a(this, ti);
}, Zl = function(t) {
  if (t.length === 1) {
    const h = t[0], d = new Array(256);
    for (let f = 0; f < 256; f++)
      d[f] = h[f] / 255;
    const u = d.join(",");
    return [u, u, u];
  }
  const [s, i, n] = t, r = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    r[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = n[h] / 255;
  return [r.join(","), o.join(","), l.join(",")];
}, Er = function(t) {
  if (a(this, Ln) === void 0) {
    m(this, Ln, "");
    const s = a(this, ae).URL;
    s !== a(this, ae).baseURI && (Qh(s) ? X('#createUrl: ignore "data:"-URL for performance reasons.') : m(this, Ln, s.split("#", 1)[0]));
  }
  return `url(${a(this, Ln)}#${t})`;
}, Xu = function(t) {
  const s = a(this, ae).createElementNS(Us, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t.append(s);
}, _c = function(t) {
  const s = a(this, ae).createElementNS(Us, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t.append(s);
}, xr = function(t) {
  const s = a(this, ae).createElementNS(Us, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", t), a(this, B, Sr).append(s), s;
}, Ya = function(t, s, i) {
  const n = a(this, ae).createElementNS(Us, s);
  n.setAttribute("type", "discrete"), n.setAttribute("tableValues", i), t.append(n);
}, Ka = function(t, s, i, n) {
  const r = a(this, ae).createElementNS(Us, "feComponentTransfer");
  n.append(r), y(this, B, Ya).call(this, r, "feFuncR", t), y(this, B, Ya).call(this, r, "feFuncG", s), y(this, B, Ya).call(this, r, "feFuncB", i);
}, Lc = function(t, s) {
  const i = a(this, ae).createElementNS(Us, "feComponentTransfer");
  s.append(i), y(this, B, Ya).call(this, i, "feFuncA", t);
}, Qa = function(t) {
  return a(this, B, Sr).style.color = t, Rd(getComputedStyle(a(this, B, Sr)).getPropertyValue("color"));
};
class Yu {
  constructor({
    baseUrl: e = null
  }) {
    this.baseUrl = e;
  }
  async fetch({
    filename: e
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!e)
      throw new Error("Font filename must be specified.");
    const t = `${this.baseUrl}${e}`;
    return this._fetch(t).catch((s) => {
      throw new Error(`Unable to load font data at: ${t}`);
    });
  }
  async _fetch(e) {
    bt("Abstract method `_fetch` called.");
  }
}
class Ku extends Yu {
  async _fetch(e) {
    const t = await Kh(e, "arraybuffer");
    return new Uint8Array(t);
  }
}
if (ce) {
  let c;
  try {
    const e = process.getBuiltinModule("module").createRequire(import.meta.url);
    try {
      c = e("@napi-rs/canvas");
    } catch (t) {
      X(`Cannot load "@napi-rs/canvas" package: "${t}".`);
    }
  } catch (e) {
    X(`Cannot access the \`require\` function: "${e}".`);
  }
  globalThis.DOMMatrix || (c != null && c.DOMMatrix ? globalThis.DOMMatrix = c.DOMMatrix : X("Cannot polyfill `DOMMatrix`, rendering may be broken.")), globalThis.ImageData || (c != null && c.ImageData ? globalThis.ImageData = c.ImageData : X("Cannot polyfill `ImageData`, rendering may be broken.")), globalThis.Path2D || (c != null && c.Path2D ? globalThis.Path2D = c.Path2D : X("Cannot polyfill `Path2D`, rendering may be broken."));
}
async function Qu(c) {
  const t = await process.getBuiltinModule("fs").promises.readFile(c);
  return new Uint8Array(t);
}
class Fp extends Wu {
}
class Np extends Gu {
  _createCanvas(e, t) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(e, t);
  }
}
class Bp extends zu {
  async _fetch(e) {
    return Qu(e);
  }
}
class Hp extends Yu {
  async _fetch(e) {
    return Qu(e);
  }
}
const he = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Oc(c, e) {
  if (!e)
    return;
  const t = e[2] - e[0], s = e[3] - e[1], i = new Path2D();
  i.rect(e[0], e[1], t, s), c.clip(i);
}
class Id {
  getPattern() {
    bt("Abstract method `getPattern` called.");
  }
}
class $p extends Id {
  constructor(e) {
    super(), this._type = e[1], this._bbox = e[2], this._colorStops = e[3], this._p0 = e[4], this._p1 = e[5], this._r0 = e[6], this._r1 = e[7], this.matrix = null;
  }
  _createGradient(e) {
    let t;
    this._type === "axial" ? t = e.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (t = e.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops)
      t.addColorStop(s[0], s[1]);
    return t;
  }
  getPattern(e, t, s, i) {
    let n;
    if (i === he.STROKE || i === he.FILL) {
      const r = t.current.getClippedPathBoundingBox(i, Et(e)) || [0, 0, 0, 0], o = Math.ceil(r[2] - r[0]) || 1, l = Math.ceil(r[3] - r[1]) || 1, h = t.cachedCanvases.getCanvas("pattern", o, l), d = h.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-r[0], -r[1]), s = U.transform(s, [1, 0, 0, 1, r[0], r[1]]), d.transform(...t.baseTransform), this.matrix && d.transform(...this.matrix), Oc(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), n = e.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      n.setTransform(u);
    } else
      Oc(e, this._bbox), n = this._createGradient(e);
    return n;
  }
}
function rc(c, e, t, s, i, n, r, o) {
  const l = e.coords, h = e.colors, d = c.data, u = c.width * 4;
  let f;
  l[t + 1] > l[s + 1] && (f = t, t = s, s = f, f = n, n = r, r = f), l[s + 1] > l[i + 1] && (f = s, s = i, i = f, f = r, r = o, o = f), l[t + 1] > l[s + 1] && (f = t, t = s, s = f, f = n, n = r, r = f);
  const p = (l[t] + e.offsetX) * e.scaleX, g = (l[t + 1] + e.offsetY) * e.scaleY, v = (l[s] + e.offsetX) * e.scaleX, w = (l[s + 1] + e.offsetY) * e.scaleY, A = (l[i] + e.offsetX) * e.scaleX, S = (l[i + 1] + e.offsetY) * e.scaleY;
  if (g >= S)
    return;
  const x = h[n], T = h[n + 1], E = h[n + 2], C = h[r], R = h[r + 1], I = h[r + 2], P = h[o], F = h[o + 1], L = h[o + 2], q = Math.round(g), Y = Math.round(S);
  let K, gt, _, k, nt, lt, At, Pt;
  for (let ut = q; ut <= Y; ut++) {
    if (ut < w) {
      const M = ut < g ? 0 : (g - ut) / (g - w);
      K = p - (p - v) * M, gt = x - (x - C) * M, _ = T - (T - R) * M, k = E - (E - I) * M;
    } else {
      let M;
      ut > S ? M = 1 : w === S ? M = 0 : M = (w - ut) / (w - S), K = v - (v - A) * M, gt = C - (C - P) * M, _ = R - (R - F) * M, k = I - (I - L) * M;
    }
    let mt;
    ut < g ? mt = 0 : ut > S ? mt = 1 : mt = (g - ut) / (g - S), nt = p - (p - A) * mt, lt = x - (x - P) * mt, At = T - (T - F) * mt, Pt = E - (E - L) * mt;
    const bs = Math.round(Math.min(K, nt)), ys = Math.round(Math.max(K, nt));
    let N = u * ut + bs * 4;
    for (let M = bs; M <= ys; M++)
      mt = (K - M) / (K - nt), mt < 0 ? mt = 0 : mt > 1 && (mt = 1), d[N++] = gt - (gt - lt) * mt | 0, d[N++] = _ - (_ - At) * mt | 0, d[N++] = k - (k - Pt) * mt | 0, d[N++] = 255;
  }
}
function jp(c, e, t) {
  const s = e.coords, i = e.colors;
  let n, r;
  switch (e.type) {
    case "lattice":
      const o = e.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (n = 0; n < l; n++) {
        let d = n * o;
        for (let u = 0; u < h; u++, d++)
          rc(c, t, s[d], s[d + 1], s[d + o], i[d], i[d + 1], i[d + o]), rc(c, t, s[d + o + 1], s[d + 1], s[d + o], i[d + o + 1], i[d + 1], i[d + o]);
      }
      break;
    case "triangles":
      for (n = 0, r = s.length; n < r; n += 3)
        rc(c, t, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Up extends Id {
  constructor(e) {
    super(), this._coords = e[2], this._colors = e[3], this._figures = e[4], this._bounds = e[5], this._bbox = e[7], this._background = e[8], this.matrix = null;
  }
  _createMeshCanvas(e, t, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, d = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * e[0] * 1.1)), 3e3), f = Math.min(Math.ceil(Math.abs(d * e[1] * 1.1)), 3e3), p = h / u, g = d / f, v = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / p,
      scaleY: 1 / g
    }, w = u + 2 * 2, A = f + 2 * 2, S = s.getCanvas("mesh", w, A), x = S.context, T = x.createImageData(u, f);
    if (t) {
      const C = T.data;
      for (let R = 0, I = C.length; R < I; R += 4)
        C[R] = t[0], C[R + 1] = t[1], C[R + 2] = t[2], C[R + 3] = 255;
    }
    for (const C of this._figures)
      jp(T, C, v);
    return x.putImageData(T, 2, 2), {
      canvas: S.canvas,
      offsetX: o - 2 * p,
      offsetY: l - 2 * g,
      scaleX: p,
      scaleY: g
    };
  }
  getPattern(e, t, s, i) {
    Oc(e, this._bbox);
    let n;
    if (i === he.SHADING)
      n = U.singularValueDecompose2dScale(Et(e));
    else if (n = U.singularValueDecompose2dScale(t.baseTransform), this.matrix) {
      const o = U.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * o[0], n[1] * o[1]];
    }
    const r = this._createMeshCanvas(n, i === he.SHADING ? null : this._background, t.cachedCanvases);
    return i !== he.SHADING && (e.setTransform(...t.baseTransform), this.matrix && e.transform(...this.matrix)), e.translate(r.offsetX, r.offsetY), e.scale(r.scaleX, r.scaleY), e.createPattern(r.canvas, "no-repeat");
  }
}
class Gp extends Id {
  getPattern() {
    return "hotpink";
  }
}
function zp(c) {
  switch (c[0]) {
    case "RadialAxial":
      return new $p(c);
    case "Mesh":
      return new Up(c);
    case "Dummy":
      return new Gp();
  }
  throw new Error(`Unknown IR type: ${c[0]}`);
}
const Vd = {
  COLORED: 1,
  UNCOLORED: 2
}, Oh = class Oh {
  constructor(e, t, s, i, n) {
    this.operatorList = e[2], this.matrix = e[3], this.bbox = e[4], this.xstep = e[5], this.ystep = e[6], this.paintType = e[7], this.tilingType = e[8], this.color = t, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = n;
  }
  createPatternCanvas(e) {
    const {
      bbox: t,
      operatorList: s,
      paintType: i,
      tilingType: n,
      color: r,
      canvasGraphicsFactory: o
    } = this;
    let {
      xstep: l,
      ystep: h
    } = this;
    l = Math.abs(l), h = Math.abs(h), Xh("TilingType: " + n);
    const d = t[0], u = t[1], f = t[2], p = t[3], g = f - d, v = p - u, w = U.singularValueDecompose2dScale(this.matrix), A = U.singularValueDecompose2dScale(this.baseTransform), S = w[0] * A[0], x = w[1] * A[1];
    let T = g, E = v, C = !1, R = !1;
    const I = Math.ceil(l * S), P = Math.ceil(h * x), F = Math.ceil(g * S), L = Math.ceil(v * x);
    I >= F ? T = l : C = !0, P >= L ? E = h : R = !0;
    const q = this.getSizeAndScale(T, this.ctx.canvas.width, S), Y = this.getSizeAndScale(E, this.ctx.canvas.height, x), K = e.cachedCanvases.getCanvas("pattern", q.size, Y.size), gt = K.context, _ = o.createCanvasGraphics(gt);
    if (_.groupLevel = e.groupLevel, this.setFillAndStrokeStyleToContext(_, i, r), gt.translate(-q.scale * d, -Y.scale * u), _.transform(q.scale, 0, 0, Y.scale, 0, 0), gt.save(), this.clipBbox(_, d, u, f, p), _.baseTransform = Et(_.ctx), _.executeOperatorList(s), _.endDrawing(), gt.restore(), C || R) {
      const k = K.canvas;
      C && (T = l), R && (E = h);
      const nt = this.getSizeAndScale(T, this.ctx.canvas.width, S), lt = this.getSizeAndScale(E, this.ctx.canvas.height, x), At = nt.size, Pt = lt.size, ut = e.cachedCanvases.getCanvas("pattern-workaround", At, Pt), mt = ut.context, bs = C ? Math.floor(g / l) : 0, ys = R ? Math.floor(v / h) : 0;
      for (let N = 0; N <= bs; N++)
        for (let M = 0; M <= ys; M++)
          mt.drawImage(k, At * N, Pt * M, At, Pt, 0, 0, At, Pt);
      return {
        canvas: ut.canvas,
        scaleX: nt.scale,
        scaleY: lt.scale,
        offsetX: d,
        offsetY: u
      };
    }
    return {
      canvas: K.canvas,
      scaleX: q.scale,
      scaleY: Y.scale,
      offsetX: d,
      offsetY: u
    };
  }
  getSizeAndScale(e, t, s) {
    const i = Math.max(Oh.MAX_PATTERN_SIZE, t);
    let n = Math.ceil(e * s);
    return n >= i ? n = i : s = n / e, {
      scale: s,
      size: n
    };
  }
  clipBbox(e, t, s, i, n) {
    const r = i - t, o = n - s;
    e.ctx.rect(t, s, r, o), e.current.updateRectMinMax(Et(e.ctx), [t, s, i, n]), e.clip(), e.endPath();
  }
  setFillAndStrokeStyleToContext(e, t, s) {
    const i = e.ctx, n = e.current;
    switch (t) {
      case Vd.COLORED:
        const r = this.ctx;
        i.fillStyle = r.fillStyle, i.strokeStyle = r.strokeStyle, n.fillColor = r.fillStyle, n.strokeColor = r.strokeStyle;
        break;
      case Vd.UNCOLORED:
        const o = U.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, n.fillColor = o, n.strokeColor = o;
        break;
      default:
        throw new mp(`Unsupported paint type: ${t}`);
    }
  }
  getPattern(e, t, s, i) {
    let n = s;
    i !== he.SHADING && (n = U.transform(n, t.baseTransform), this.matrix && (n = U.transform(n, this.matrix)));
    const r = this.createPatternCanvas(t);
    let o = new DOMMatrix(n);
    o = o.translate(r.offsetX, r.offsetY), o = o.scale(1 / r.scaleX, 1 / r.scaleY);
    const l = e.createPattern(r.canvas, "repeat");
    return l.setTransform(o), l;
  }
};
G(Oh, "MAX_PATTERN_SIZE", 3e3);
let Dc = Oh;
function Vp({
  src: c,
  srcPos: e = 0,
  dest: t,
  width: s,
  height: i,
  nonBlackColor: n = 4294967295,
  inverseDecode: r = !1
}) {
  const o = be.isLittleEndian ? 4278190080 : 255, [l, h] = r ? [n, o] : [o, n], d = s >> 3, u = s & 7, f = c.length;
  t = new Uint32Array(t.buffer);
  let p = 0;
  for (let g = 0; g < i; g++) {
    for (const w = e + d; e < w; e++) {
      const A = e < f ? c[e] : 255;
      t[p++] = A & 128 ? h : l, t[p++] = A & 64 ? h : l, t[p++] = A & 32 ? h : l, t[p++] = A & 16 ? h : l, t[p++] = A & 8 ? h : l, t[p++] = A & 4 ? h : l, t[p++] = A & 2 ? h : l, t[p++] = A & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const v = e < f ? c[e++] : 255;
    for (let w = 0; w < u; w++)
      t[p++] = v & 1 << 7 - w ? h : l;
  }
  return {
    srcPos: e,
    destPos: p
  };
}
const Wd = 16, Xd = 100, Wp = 15, Yd = 10, Kd = 1e3, Re = 16;
function Xp(c, e) {
  if (c._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  c.__originalSave = c.save, c.__originalRestore = c.restore, c.__originalRotate = c.rotate, c.__originalScale = c.scale, c.__originalTranslate = c.translate, c.__originalTransform = c.transform, c.__originalSetTransform = c.setTransform, c.__originalResetTransform = c.resetTransform, c.__originalClip = c.clip, c.__originalMoveTo = c.moveTo, c.__originalLineTo = c.lineTo, c.__originalBezierCurveTo = c.bezierCurveTo, c.__originalRect = c.rect, c.__originalClosePath = c.closePath, c.__originalBeginPath = c.beginPath, c._removeMirroring = () => {
    c.save = c.__originalSave, c.restore = c.__originalRestore, c.rotate = c.__originalRotate, c.scale = c.__originalScale, c.translate = c.__originalTranslate, c.transform = c.__originalTransform, c.setTransform = c.__originalSetTransform, c.resetTransform = c.__originalResetTransform, c.clip = c.__originalClip, c.moveTo = c.__originalMoveTo, c.lineTo = c.__originalLineTo, c.bezierCurveTo = c.__originalBezierCurveTo, c.rect = c.__originalRect, c.closePath = c.__originalClosePath, c.beginPath = c.__originalBeginPath, delete c._removeMirroring;
  }, c.save = function() {
    e.save(), this.__originalSave();
  }, c.restore = function() {
    e.restore(), this.__originalRestore();
  }, c.translate = function(s, i) {
    e.translate(s, i), this.__originalTranslate(s, i);
  }, c.scale = function(s, i) {
    e.scale(s, i), this.__originalScale(s, i);
  }, c.transform = function(s, i, n, r, o, l) {
    e.transform(s, i, n, r, o, l), this.__originalTransform(s, i, n, r, o, l);
  }, c.setTransform = function(s, i, n, r, o, l) {
    e.setTransform(s, i, n, r, o, l), this.__originalSetTransform(s, i, n, r, o, l);
  }, c.resetTransform = function() {
    e.resetTransform(), this.__originalResetTransform();
  }, c.rotate = function(s) {
    e.rotate(s), this.__originalRotate(s);
  }, c.clip = function(s) {
    e.clip(s), this.__originalClip(s);
  }, c.moveTo = function(t, s) {
    e.moveTo(t, s), this.__originalMoveTo(t, s);
  }, c.lineTo = function(t, s) {
    e.lineTo(t, s), this.__originalLineTo(t, s);
  }, c.bezierCurveTo = function(t, s, i, n, r, o) {
    e.bezierCurveTo(t, s, i, n, r, o), this.__originalBezierCurveTo(t, s, i, n, r, o);
  }, c.rect = function(t, s, i, n) {
    e.rect(t, s, i, n), this.__originalRect(t, s, i, n);
  }, c.closePath = function() {
    e.closePath(), this.__originalClosePath();
  }, c.beginPath = function() {
    e.beginPath(), this.__originalBeginPath();
  };
}
class Yp {
  constructor(e) {
    this.canvasFactory = e, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(e, t, s) {
    let i;
    return this.cache[e] !== void 0 ? (i = this.cache[e], this.canvasFactory.reset(i, t, s)) : (i = this.canvasFactory.create(t, s), this.cache[e] = i), i;
  }
  delete(e) {
    delete this.cache[e];
  }
  clear() {
    for (const e in this.cache) {
      const t = this.cache[e];
      this.canvasFactory.destroy(t), delete this.cache[e];
    }
  }
}
function Hl(c, e, t, s, i, n, r, o, l, h) {
  const [d, u, f, p, g, v] = Et(c);
  if (u === 0 && f === 0) {
    const S = r * d + g, x = Math.round(S), T = o * p + v, E = Math.round(T), C = (r + l) * d + g, R = Math.abs(Math.round(C) - x) || 1, I = (o + h) * p + v, P = Math.abs(Math.round(I) - E) || 1;
    return c.setTransform(Math.sign(d), 0, 0, Math.sign(p), x, E), c.drawImage(e, t, s, i, n, 0, 0, R, P), c.setTransform(d, u, f, p, g, v), [R, P];
  }
  if (d === 0 && p === 0) {
    const S = o * f + g, x = Math.round(S), T = r * u + v, E = Math.round(T), C = (o + h) * f + g, R = Math.abs(Math.round(C) - x) || 1, I = (r + l) * u + v, P = Math.abs(Math.round(I) - E) || 1;
    return c.setTransform(0, Math.sign(u), Math.sign(f), 0, x, E), c.drawImage(e, t, s, i, n, 0, 0, P, R), c.setTransform(d, u, f, p, g, v), [P, R];
  }
  c.drawImage(e, t, s, i, n, r, o, l, h);
  const w = Math.hypot(d, u), A = Math.hypot(f, p);
  return [w * l, A * h];
}
function Kp(c) {
  const {
    width: e,
    height: t
  } = c;
  if (e > Kd || t > Kd)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), n = e + 1;
  let r = new Uint8Array(n * (t + 1)), o, l, h;
  const d = e + 7 & -8;
  let u = new Uint8Array(d * t), f = 0;
  for (const A of c.data) {
    let S = 128;
    for (; S > 0; )
      u[f++] = A & S ? 0 : 255, S >>= 1;
  }
  let p = 0;
  for (f = 0, u[f] !== 0 && (r[0] = 1, ++p), l = 1; l < e; l++)
    u[f] !== u[f + 1] && (r[l] = u[f] ? 2 : 1, ++p), f++;
  for (u[f] !== 0 && (r[l] = 2, ++p), o = 1; o < t; o++) {
    f = o * d, h = o * n, u[f - d] !== u[f] && (r[h] = u[f] ? 1 : 8, ++p);
    let A = (u[f] ? 4 : 0) + (u[f - d] ? 8 : 0);
    for (l = 1; l < e; l++)
      A = (A >> 2) + (u[f + 1] ? 4 : 0) + (u[f - d + 1] ? 8 : 0), i[A] && (r[h + l] = i[A], ++p), f++;
    if (u[f - d] !== u[f] && (r[h + l] = u[f] ? 2 : 4, ++p), p > s)
      return null;
  }
  for (f = d * (t - 1), h = o * n, u[f] !== 0 && (r[h] = 8, ++p), l = 1; l < e; l++)
    u[f] !== u[f + 1] && (r[h + l] = u[f] ? 4 : 8, ++p), f++;
  if (u[f] !== 0 && (r[h + l] = 4, ++p), p > s)
    return null;
  const g = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]), v = new Path2D();
  for (o = 0; p && o <= t; o++) {
    let A = o * n;
    const S = A + e;
    for (; A < S && !r[A]; )
      A++;
    if (A === S)
      continue;
    v.moveTo(A % n, o);
    const x = A;
    let T = r[A];
    do {
      const E = g[T];
      do
        A += E;
      while (!r[A]);
      const C = r[A];
      C !== 5 && C !== 10 ? (T = C, r[A] = 0) : (T = C & 51 * T >> 4, r[A] &= T >> 2 | T << 2), v.lineTo(A % n, A / n | 0), r[A] || --p;
    } while (x !== A);
    --o;
  }
  return u = null, r = null, function(A) {
    A.save(), A.scale(1 / e, -1 / t), A.translate(0, -t), A.fill(v), A.beginPath(), A.restore();
  };
}
class Qd {
  constructor(e, t) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = au, this.textMatrixScale = 1, this.fontMatrix = lc, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = se.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.patternStroke = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, e, t]);
  }
  clone() {
    const e = Object.create(this);
    return e.clipBox = this.clipBox.slice(), e;
  }
  setCurrentPoint(e, t) {
    this.x = e, this.y = t;
  }
  updatePathMinMax(e, t, s) {
    [t, s] = U.applyTransform([t, s], e), this.minX = Math.min(this.minX, t), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, t), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(e, t) {
    const s = U.applyTransform(t, e), i = U.applyTransform(t.slice(2), e), n = U.applyTransform([t[0], t[3]], e), r = U.applyTransform([t[2], t[1]], e);
    this.minX = Math.min(this.minX, s[0], i[0], n[0], r[0]), this.minY = Math.min(this.minY, s[1], i[1], n[1], r[1]), this.maxX = Math.max(this.maxX, s[0], i[0], n[0], r[0]), this.maxY = Math.max(this.maxY, s[1], i[1], n[1], r[1]);
  }
  updateScalingPathMinMax(e, t) {
    U.scaleMinMax(e, t), this.minX = Math.min(this.minX, t[0]), this.minY = Math.min(this.minY, t[1]), this.maxX = Math.max(this.maxX, t[2]), this.maxY = Math.max(this.maxY, t[3]);
  }
  updateCurvePathMinMax(e, t, s, i, n, r, o, l, h, d) {
    const u = U.bezierBoundingBox(t, s, i, n, r, o, l, h, d);
    d || this.updateRectMinMax(e, u);
  }
  getPathBoundingBox(e = he.FILL, t = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (e === he.STROKE) {
      t || bt("Stroke bounding box must include transform.");
      const i = U.singularValueDecompose2dScale(t), n = i[0] * this.lineWidth / 2, r = i[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= r, s[2] += n, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const e = U.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(e || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(e) {
    this.clipBox = e, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(e = he.FILL, t = null) {
    return U.intersect(this.clipBox, this.getPathBoundingBox(e, t));
  }
}
function Jd(c, e) {
  if (e instanceof ImageData) {
    c.putImageData(e, 0, 0);
    return;
  }
  const t = e.height, s = e.width, i = t % Re, n = (t - i) / Re, r = i === 0 ? n : n + 1, o = c.createImageData(s, Re);
  let l = 0, h;
  const d = e.data, u = o.data;
  let f, p, g, v;
  if (e.kind === Ul.GRAYSCALE_1BPP) {
    const w = d.byteLength, A = new Uint32Array(u.buffer, 0, u.byteLength >> 2), S = A.length, x = s + 7 >> 3, T = 4294967295, E = be.isLittleEndian ? 4278190080 : 255;
    for (f = 0; f < r; f++) {
      for (g = f < n ? Re : i, h = 0, p = 0; p < g; p++) {
        const C = w - l;
        let R = 0;
        const I = C > x ? s : C * 8 - 7, P = I & -8;
        let F = 0, L = 0;
        for (; R < P; R += 8)
          L = d[l++], A[h++] = L & 128 ? T : E, A[h++] = L & 64 ? T : E, A[h++] = L & 32 ? T : E, A[h++] = L & 16 ? T : E, A[h++] = L & 8 ? T : E, A[h++] = L & 4 ? T : E, A[h++] = L & 2 ? T : E, A[h++] = L & 1 ? T : E;
        for (; R < I; R++)
          F === 0 && (L = d[l++], F = 128), A[h++] = L & F ? T : E, F >>= 1;
      }
      for (; h < S; )
        A[h++] = 0;
      c.putImageData(o, 0, f * Re);
    }
  } else if (e.kind === Ul.RGBA_32BPP) {
    for (p = 0, v = s * Re * 4, f = 0; f < n; f++)
      u.set(d.subarray(l, l + v)), l += v, c.putImageData(o, 0, p), p += Re;
    f < r && (v = s * i * 4, u.set(d.subarray(l, l + v)), c.putImageData(o, 0, p));
  } else if (e.kind === Ul.RGB_24BPP)
    for (g = Re, v = s * g, f = 0; f < r; f++) {
      for (f >= n && (g = i, v = s * g), h = 0, p = v; p--; )
        u[h++] = d[l++], u[h++] = d[l++], u[h++] = d[l++], u[h++] = 255;
      c.putImageData(o, 0, f * Re);
    }
  else
    throw new Error(`bad image kind: ${e.kind}`);
}
function Zd(c, e) {
  if (e.bitmap) {
    c.drawImage(e.bitmap, 0, 0);
    return;
  }
  const t = e.height, s = e.width, i = t % Re, n = (t - i) / Re, r = i === 0 ? n : n + 1, o = c.createImageData(s, Re);
  let l = 0;
  const h = e.data, d = o.data;
  for (let u = 0; u < r; u++) {
    const f = u < n ? Re : i;
    ({
      srcPos: l
    } = Vp({
      src: h,
      srcPos: l,
      dest: d,
      width: s,
      height: f,
      nonBlackColor: 0
    })), c.putImageData(o, 0, u * Re);
  }
}
function Ha(c, e) {
  const t = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of t)
    c[s] !== void 0 && (e[s] = c[s]);
  c.setLineDash !== void 0 && (e.setLineDash(c.getLineDash()), e.lineDashOffset = c.lineDashOffset);
}
function $l(c) {
  if (c.strokeStyle = c.fillStyle = "#000000", c.fillRule = "nonzero", c.globalAlpha = 1, c.lineWidth = 1, c.lineCap = "butt", c.lineJoin = "miter", c.miterLimit = 10, c.globalCompositeOperation = "source-over", c.font = "10px sans-serif", c.setLineDash !== void 0 && (c.setLineDash([]), c.lineDashOffset = 0), !ce) {
    const {
      filter: e
    } = c;
    e !== "none" && e !== "" && (c.filter = "none");
  }
}
function qd(c, e) {
  if (e)
    return !0;
  const t = U.singularValueDecompose2dScale(c);
  t[0] = Math.fround(t[0]), t[1] = Math.fround(t[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * nn.PDF_TO_CSS_UNITS);
  return t[0] <= s && t[1] <= s;
}
const Qp = ["butt", "round", "square"], Jp = ["miter", "round", "bevel"], Zp = {}, tu = {};
var vs, kc, Fc, Nc;
const Dd = class Dd {
  constructor(e, t, s, i, n, {
    optionalContentConfig: r,
    markedContentStack: o = null
  }, l, h) {
    b(this, vs);
    this.ctx = e, this.current = new Qd(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = t, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = r, this.cachedCanvases = new Yp(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(e, t = null) {
    return typeof e == "string" ? e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e) : t;
  }
  beginDrawing({
    transform: e,
    viewport: t,
    transparency: s = !1,
    background: i = null
  }) {
    const n = this.ctx.canvas.width, r = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, n, r), this.ctx.fillStyle = o, s) {
      const l = this.cachedCanvases.getCanvas("transparent", n, r);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...Et(this.compositeCtx));
    }
    this.ctx.save(), $l(this.ctx), e && (this.ctx.transform(...e), this.outputScaleX = e[0], this.outputScaleY = e[0]), this.ctx.transform(...t.transform), this.viewportScale = t.scale, this.baseTransform = Et(this.ctx);
  }
  executeOperatorList(e, t, s, i) {
    const n = e.argsArray, r = e.fnArray;
    let o = t || 0;
    const l = n.length;
    if (l === o)
      return o;
    const h = l - o > Yd && typeof s == "function", d = h ? Date.now() + Wp : 0;
    let u = 0;
    const f = this.commonObjs, p = this.objs;
    let g;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (g = r[o], g !== ss.dependency)
        this[g].apply(this, n[o]);
      else
        for (const v of n[o]) {
          const w = v.startsWith("g_") ? f : p;
          if (!w.has(v))
            return w.get(v, s), o;
        }
      if (o++, o === l)
        return o;
      if (h && ++u > Yd) {
        if (Date.now() > d)
          return s(), o;
        u = 0;
      }
    }
  }
  endDrawing() {
    y(this, vs, kc).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const e of this._cachedBitmapsMap.values()) {
      for (const t of e.values())
        typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement && (t.width = t.height = 0);
      e.clear();
    }
    this._cachedBitmapsMap.clear(), y(this, vs, Fc).call(this);
  }
  _scaleImage(e, t) {
    const s = e.width ?? e.displayWidth, i = e.height ?? e.displayHeight;
    let n = Math.max(Math.hypot(t[0], t[1]), 1), r = Math.max(Math.hypot(t[2], t[3]), 1), o = s, l = i, h = "prescale1", d, u;
    for (; n > 2 && o > 1 || r > 2 && l > 1; ) {
      let f = o, p = l;
      n > 2 && o > 1 && (f = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), n /= o / f), r > 2 && l > 1 && (p = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, r /= l / p), d = this.cachedCanvases.getCanvas(h, f, p), u = d.context, u.clearRect(0, 0, f, p), u.drawImage(e, 0, 0, o, l, 0, 0, f, p), e = d.canvas, o = f, l = p, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: e,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(e) {
    const t = this.ctx, {
      width: s,
      height: i
    } = e, n = this.current.fillColor, r = this.current.patternFill, o = Et(t);
    let l, h, d, u;
    if ((e.bitmap || e.data) && e.count > 1) {
      const I = e.bitmap || e.data.buffer;
      h = JSON.stringify(r ? o : [o.slice(0, 4), n]), l = this._cachedBitmapsMap.get(I), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(I, l));
      const P = l.get(h);
      if (P && !r) {
        const F = Math.round(Math.min(o[0], o[2]) + o[4]), L = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: P,
          offsetX: F,
          offsetY: L
        };
      }
      d = P;
    }
    d || (u = this.cachedCanvases.getCanvas("maskCanvas", s, i), Zd(u.context, e));
    let f = U.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    f = U.transform(f, [1, 0, 0, 1, 0, -i]);
    const [p, g, v, w] = U.getAxialAlignedBoundingBox([0, 0, s, i], f), A = Math.round(v - p) || 1, S = Math.round(w - g) || 1, x = this.cachedCanvases.getCanvas("fillCanvas", A, S), T = x.context, E = p, C = g;
    T.translate(-E, -C), T.transform(...f), d || (d = this._scaleImage(u.canvas, ws(T)), d = d.img, l && r && l.set(h, d)), T.imageSmoothingEnabled = qd(Et(T), e.interpolate), Hl(T, d, 0, 0, d.width, d.height, 0, 0, s, i), T.globalCompositeOperation = "source-in";
    const R = U.transform(ws(T), [1, 0, 0, 1, -E, -C]);
    return T.fillStyle = r ? n.getPattern(t, this, R, he.FILL) : n, T.fillRect(0, 0, s, i), l && !r && (this.cachedCanvases.delete("fillCanvas"), l.set(h, x.canvas)), {
      canvas: x.canvas,
      offsetX: Math.round(E),
      offsetY: Math.round(C)
    };
  }
  setLineWidth(e) {
    e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(e) {
    this.ctx.lineCap = Qp[e];
  }
  setLineJoin(e) {
    this.ctx.lineJoin = Jp[e];
  }
  setMiterLimit(e) {
    this.ctx.miterLimit = e;
  }
  setDash(e, t) {
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(e), s.lineDashOffset = t);
  }
  setRenderingIntent(e) {
  }
  setFlatness(e) {
  }
  setGState(e) {
    for (const [t, s] of e)
      switch (t) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const e = this.inSMaskMode;
    this.current.activeSMask && !e ? this.beginSMaskMode() : !this.current.activeSMask && e && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const e = this.ctx.canvas.width, t = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, e, t);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const n = this.ctx;
    n.setTransform(...Et(this.suspendedCtx)), Ha(this.suspendedCtx, n), Xp(n, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Ha(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(e) {
    if (!this.current.activeSMask)
      return;
    e ? (e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.ceil(e[2]), e[3] = Math.ceil(e[3])) : e = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const t = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, t, this.ctx, e), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(e, t, s, i) {
    const n = i[0], r = i[1], o = i[2] - n, l = i[3] - r;
    o === 0 || l === 0 || (this.genericComposeSMask(t.context, s, o, l, t.subtype, t.backdrop, t.transferMap, n, r, t.offsetX, t.offsetY), e.save(), e.globalAlpha = 1, e.globalCompositeOperation = "source-over", e.setTransform(1, 0, 0, 1, 0, 0), e.drawImage(s.canvas, 0, 0), e.restore());
  }
  genericComposeSMask(e, t, s, i, n, r, o, l, h, d, u) {
    let f = e.canvas, p = l - d, g = h - u;
    if (r) {
      const w = U.makeHexColor(...r);
      if (p < 0 || g < 0 || p + s > f.width || g + i > f.height) {
        const A = this.cachedCanvases.getCanvas("maskExtension", s, i), S = A.context;
        S.drawImage(f, -p, -g), S.globalCompositeOperation = "destination-atop", S.fillStyle = w, S.fillRect(0, 0, s, i), S.globalCompositeOperation = "source-over", f = A.canvas, p = g = 0;
      } else {
        e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0);
        const A = new Path2D();
        A.rect(p, g, s, i), e.clip(A), e.globalCompositeOperation = "destination-atop", e.fillStyle = w, e.fillRect(p, g, s, i), e.restore();
      }
    }
    t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && o ? t.filter = this.filterFactory.addAlphaFilter(o) : n === "Luminosity" && (t.filter = this.filterFactory.addLuminosityFilter(o));
    const v = new Path2D();
    v.rect(l, h, s, i), t.clip(v), t.globalCompositeOperation = "destination-in", t.drawImage(f, p, g, s, i, l, h, s, i), t.restore();
  }
  save() {
    this.inSMaskMode ? (Ha(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Ha(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(e, t, s, i, n, r) {
    this.ctx.transform(e, t, s, i, n, r), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(e, t, s) {
    const i = this.ctx, n = this.current;
    let r = n.x, o = n.y, l, h;
    const d = Et(i), u = d[0] === 0 && d[3] === 0 || d[1] === 0 && d[2] === 0, f = u ? s.slice(0) : null;
    for (let p = 0, g = 0, v = e.length; p < v; p++)
      switch (e[p] | 0) {
        case ss.rectangle:
          r = t[g++], o = t[g++];
          const w = t[g++], A = t[g++], S = r + w, x = o + A;
          i.moveTo(r, o), w === 0 || A === 0 ? i.lineTo(S, x) : (i.lineTo(S, o), i.lineTo(S, x), i.lineTo(r, x)), u || n.updateRectMinMax(d, [r, o, S, x]), i.closePath();
          break;
        case ss.moveTo:
          r = t[g++], o = t[g++], i.moveTo(r, o), u || n.updatePathMinMax(d, r, o);
          break;
        case ss.lineTo:
          r = t[g++], o = t[g++], i.lineTo(r, o), u || n.updatePathMinMax(d, r, o);
          break;
        case ss.curveTo:
          l = r, h = o, r = t[g + 4], o = t[g + 5], i.bezierCurveTo(t[g], t[g + 1], t[g + 2], t[g + 3], r, o), n.updateCurvePathMinMax(d, l, h, t[g], t[g + 1], t[g + 2], t[g + 3], r, o, f), g += 6;
          break;
        case ss.curveTo2:
          l = r, h = o, i.bezierCurveTo(r, o, t[g], t[g + 1], t[g + 2], t[g + 3]), n.updateCurvePathMinMax(d, l, h, r, o, t[g], t[g + 1], t[g + 2], t[g + 3], f), r = t[g + 2], o = t[g + 3], g += 4;
          break;
        case ss.curveTo3:
          l = r, h = o, r = t[g + 2], o = t[g + 3], i.bezierCurveTo(t[g], t[g + 1], r, o, r, o), n.updateCurvePathMinMax(d, l, h, t[g], t[g + 1], r, o, r, o, f), g += 4;
          break;
        case ss.closePath:
          i.closePath();
          break;
      }
    u && n.updateScalingPathMinMax(d, f), n.setCurrentPoint(r, o);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(e = !0) {
    const t = this.ctx, s = this.current.strokeColor;
    t.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s != null && s.getPattern) ? (t.save(), t.strokeStyle = s.getPattern(t, this, ws(t), he.STROKE), this.rescaleAndStroke(!1), t.restore()) : this.rescaleAndStroke(!0)), e && this.consumePath(this.current.getClippedPathBoundingBox()), t.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(e = !0) {
    const t = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let n = !1;
    i && (t.save(), t.fillStyle = s.getPattern(t, this, ws(t), he.FILL), n = !0);
    const r = this.current.getClippedPathBoundingBox();
    this.contentVisible && r !== null && (this.pendingEOFill ? (t.fill("evenodd"), this.pendingEOFill = !1) : t.fill()), n && t.restore(), e && this.consumePath(r);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = Zp;
  }
  eoClip() {
    this.pendingClip = tu;
  }
  beginText() {
    this.current.textMatrix = au, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const e = this.pendingTextPaths, t = this.ctx;
    if (e === void 0) {
      t.beginPath();
      return;
    }
    const s = new Path2D(), i = t.getTransform().invertSelf();
    for (const {
      transform: n,
      x: r,
      y: o,
      fontSize: l,
      path: h
    } of e)
      s.addPath(h, new DOMMatrix(n).preMultiplySelf(i).translate(r, o).scale(l, -l));
    t.clip(s), t.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(e) {
    this.current.charSpacing = e;
  }
  setWordSpacing(e) {
    this.current.wordSpacing = e;
  }
  setHScale(e) {
    this.current.textHScale = e / 100;
  }
  setLeading(e) {
    this.current.leading = -e;
  }
  setFont(e, t) {
    var d;
    const s = this.commonObjs.get(e), i = this.current;
    if (!s)
      throw new Error(`Can't find font for ${e}`);
    if (i.fontMatrix = s.fontMatrix || lc, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && X("Invalid font matrix for font " + e), t < 0 ? (t = -t, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = t, s.isType3Font)
      return;
    const n = s.loadedName || "sans-serif", r = ((d = s.systemFontInfo) == null ? void 0 : d.css) || `"${n}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const l = s.italic ? "italic" : "normal";
    let h = t;
    t < Wd ? h = Wd : t > Xd && (h = Xd), this.current.fontSizeScale = t / h, this.ctx.font = `${l} ${o} ${h}px ${r}`;
  }
  setTextRenderingMode(e) {
    this.current.textRenderingMode = e;
  }
  setTextRise(e) {
    this.current.textRise = e;
  }
  moveText(e, t) {
    this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += t;
  }
  setLeadingMoveText(e, t) {
    this.setLeading(-t), this.moveText(e, t);
  }
  setTextMatrix(e, t, s, i, n, r) {
    this.current.textMatrix = [e, t, s, i, n, r], this.current.textMatrixScale = Math.hypot(e, t), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(e, t, s, i, n) {
    const r = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, d = o.fontSize / o.fontSizeScale, u = h & se.FILL_STROKE_MASK, f = !!(h & se.ADD_TO_PATH_FLAG), p = o.patternFill && !l.missingFile, g = o.patternStroke && !l.missingFile;
    let v;
    if ((l.disableFontFace || f || p || g) && (v = l.getPathGenerator(this.commonObjs, e)), l.disableFontFace || p || g) {
      if (r.save(), r.translate(t, s), r.scale(d, -d), u === se.FILL || u === se.FILL_STROKE)
        if (i) {
          const w = r.getTransform();
          r.setTransform(...i), r.fill(y(this, vs, Nc).call(this, v, w, i));
        } else
          r.fill(v);
      if (u === se.STROKE || u === se.FILL_STROKE)
        if (n) {
          const w = r.getTransform();
          r.setTransform(...n), r.stroke(y(this, vs, Nc).call(this, v, w, n));
        } else
          r.lineWidth /= d, r.stroke(v);
      r.restore();
    } else
      (u === se.FILL || u === se.FILL_STROKE) && r.fillText(e, t, s), (u === se.STROKE || u === se.FILL_STROKE) && r.strokeText(e, t, s);
    f && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Et(r),
      x: t,
      y: s,
      fontSize: d,
      path: v
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: e
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    e.scale(1.5, 1), e.fillText("I", 0, 10);
    const t = e.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < t.length; i += 4)
      if (t[i] > 0 && t[i] < 255) {
        s = !0;
        break;
      }
    return st(this, "isFontSubpixelAAEnabled", s);
  }
  showText(e) {
    const t = this.current, s = t.font;
    if (s.isType3Font)
      return this.showType3Text(e);
    const i = t.fontSize;
    if (i === 0)
      return;
    const n = this.ctx, r = t.fontSizeScale, o = t.charSpacing, l = t.wordSpacing, h = t.fontDirection, d = t.textHScale * h, u = e.length, f = s.vertical, p = f ? 1 : -1, g = s.defaultVMetrics, v = i * t.fontMatrix[0], w = t.textRenderingMode === se.FILL && !s.disableFontFace && !t.patternFill;
    n.save(), n.transform(...t.textMatrix), n.translate(t.x, t.y + t.textRise), h > 0 ? n.scale(d, -1) : n.scale(d, 1);
    let A, S;
    if (t.patternFill) {
      n.save();
      const R = t.fillColor.getPattern(n, this, ws(n), he.FILL);
      A = Et(n), n.restore(), n.fillStyle = R;
    }
    if (t.patternStroke) {
      n.save();
      const R = t.strokeColor.getPattern(n, this, ws(n), he.STROKE);
      S = Et(n), n.restore(), n.strokeStyle = R;
    }
    let x = t.lineWidth;
    const T = t.textMatrixScale;
    if (T === 0 || x === 0) {
      const R = t.textRenderingMode & se.FILL_STROKE_MASK;
      (R === se.STROKE || R === se.FILL_STROKE) && (x = this.getSinglePixelWidth());
    } else
      x /= T;
    if (r !== 1 && (n.scale(r, r), x /= r), n.lineWidth = x, s.isInvalidPDFjsFont) {
      const R = [];
      let I = 0;
      for (const P of e)
        R.push(P.unicode), I += P.width;
      n.fillText(R.join(""), 0, 0), t.x += I * v * d, n.restore(), this.compose();
      return;
    }
    let E = 0, C;
    for (C = 0; C < u; ++C) {
      const R = e[C];
      if (typeof R == "number") {
        E += p * R * i / 1e3;
        continue;
      }
      let I = !1;
      const P = (R.isSpace ? l : 0) + o, F = R.fontChar, L = R.accent;
      let q, Y, K = R.width;
      if (f) {
        const _ = R.vmetric || g, k = -(R.vmetric ? _[1] : K * 0.5) * v, nt = _[2] * v;
        K = _ ? -_[0] : K, q = k / r, Y = (E + nt) / r;
      } else
        q = E / r, Y = 0;
      if (s.remeasure && K > 0) {
        const _ = n.measureText(F).width * 1e3 / i * r;
        if (K < _ && this.isFontSubpixelAAEnabled) {
          const k = K / _;
          I = !0, n.save(), n.scale(k, 1), q /= k;
        } else K !== _ && (q += (K - _) / 2e3 * i / r);
      }
      if (this.contentVisible && (R.isInFont || s.missingFile)) {
        if (w && !L)
          n.fillText(F, q, Y);
        else if (this.paintChar(F, q, Y, A, S), L) {
          const _ = q + i * L.offset.x / r, k = Y - i * L.offset.y / r;
          this.paintChar(L.fontChar, _, k, A, S);
        }
      }
      const gt = f ? K * v - P * h : K * v + P * h;
      E += gt, I && n.restore();
    }
    f ? t.y -= E : t.x += E * d, n.restore(), this.compose();
  }
  showType3Text(e) {
    const t = this.ctx, s = this.current, i = s.font, n = s.fontSize, r = s.fontDirection, o = i.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, d = s.textHScale * r, u = s.fontMatrix || lc, f = e.length, p = s.textRenderingMode === se.INVISIBLE;
    let g, v, w, A;
    if (!(p || n === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, t.save(), t.transform(...s.textMatrix), t.translate(s.x, s.y), t.scale(d, r), g = 0; g < f; ++g) {
        if (v = e[g], typeof v == "number") {
          A = o * v * n / 1e3, this.ctx.translate(A, 0), s.x += A * d;
          continue;
        }
        const S = (v.isSpace ? h : 0) + l, x = i.charProcOperatorList[v.operatorListId];
        if (!x) {
          X(`Type3 character "${v.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = v, this.save(), t.scale(n, n), t.transform(...u), this.executeOperatorList(x), this.restore()), w = U.applyTransform([v.width, 0], u)[0] * n + S, t.translate(w, 0), s.x += w * d;
      }
      t.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(e, t) {
  }
  setCharWidthAndBounds(e, t, s, i, n, r) {
    this.ctx.rect(s, i, n - s, r - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(e) {
    let t;
    if (e[0] === "TilingPattern") {
      const s = e[1], i = this.baseTransform || Et(this.ctx), n = {
        createCanvasGraphics: (r) => new Dd(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      t = new Dc(e, s, this.ctx, n, i);
    } else
      t = this._getPattern(e[1], e[2]);
    return t;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments), this.current.patternStroke = !0;
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(e, t, s) {
    this.ctx.strokeStyle = this.current.strokeColor = U.makeHexColor(e, t, s), this.current.patternStroke = !1;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(e, t, s) {
    this.ctx.fillStyle = this.current.fillColor = U.makeHexColor(e, t, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(e, t = null) {
    let s;
    return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = zp(this.getObject(e)), this.cachedPatterns.set(e, s)), t && (s.matrix = t), s;
  }
  shadingFill(e) {
    if (!this.contentVisible)
      return;
    const t = this.ctx;
    this.save();
    const s = this._getPattern(e);
    t.fillStyle = s.getPattern(t, this, ws(t), he.SHADING);
    const i = ws(t);
    if (i) {
      const {
        width: n,
        height: r
      } = t.canvas, [o, l, h, d] = U.getAxialAlignedBoundingBox([0, 0, n, r], i);
      this.ctx.fillRect(o, l, h - o, d - l);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    bt("Should not call beginInlineImage");
  }
  beginImageData() {
    bt("Should not call beginImageData");
  }
  paintFormXObjectBegin(e, t) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), e && this.transform(...e), this.baseTransform = Et(this.ctx), t)) {
      const s = t[2] - t[0], i = t[3] - t[1];
      this.ctx.rect(t[0], t[1], s, i), this.current.updateRectMinMax(Et(this.ctx), t), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(e) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const t = this.ctx;
    e.isolated || Xh("TODO: Support non-isolated groups."), e.knockout && X("Knockout groups not supported.");
    const s = Et(t);
    if (e.matrix && t.transform(...e.matrix), !e.bbox)
      throw new Error("Bounding box is required.");
    let i = U.getAxialAlignedBoundingBox(e.bbox, Et(t));
    const n = [0, 0, t.canvas.width, t.canvas.height];
    i = U.intersect(i, n) || [0, 0, 0, 0];
    const r = Math.floor(i[0]), o = Math.floor(i[1]), l = Math.max(Math.ceil(i[2]) - r, 1), h = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let d = "groupAt" + this.groupLevel;
    e.smask && (d += "_smask_" + this.smaskCounter++ % 2);
    const u = this.cachedCanvases.getCanvas(d, l, h), f = u.context;
    f.translate(-r, -o), f.transform(...s), e.smask ? this.smaskStack.push({
      canvas: u.canvas,
      context: f,
      offsetX: r,
      offsetY: o,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null
    }) : (t.setTransform(1, 0, 0, 1, 0, 0), t.translate(r, o), t.save()), Ha(t, f), this.ctx = f, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(t), this.groupLevel++;
  }
  endGroup(e) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const t = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, e.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = Et(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const n = U.getAxialAlignedBoundingBox([0, 0, t.canvas.width, t.canvas.height], i);
      this.ctx.drawImage(t.canvas, 0, 0), this.ctx.restore(), this.compose(n);
    }
  }
  beginAnnotation(e, t, s, i, n) {
    if (y(this, vs, kc).call(this), $l(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), t) {
      const r = t[2] - t[0], o = t[3] - t[1];
      if (n && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= t[0], s[5] -= t[1], t = t.slice(), t[0] = t[1] = 0, t[2] = r, t[3] = o;
        const [l, h] = U.singularValueDecompose2dScale(Et(this.ctx)), {
          viewportScale: d
        } = this, u = Math.ceil(r * this.outputScaleX * d), f = Math.ceil(o * this.outputScaleY * d);
        this.annotationCanvas = this.canvasFactory.create(u, f);
        const {
          canvas: p,
          context: g
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = g, this.ctx.save(), this.ctx.setTransform(l, 0, 0, -h, 0, o * h), $l(this.ctx);
      } else
        $l(this.ctx), this.endPath(), this.ctx.rect(t[0], t[1], r, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new Qd(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), y(this, vs, Fc).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(e) {
    if (!this.contentVisible)
      return;
    const t = e.count;
    e = this.getObject(e.data, e), e.count = t;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = Kp(e)), i.compiled)) {
      i.compiled(s);
      return;
    }
    const n = this._createMaskCanvas(e), r = n.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(r, n.offsetX, n.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(e, t, s = 0, i = 0, n, r) {
    if (!this.contentVisible)
      return;
    e = this.getObject(e.data, e);
    const o = this.ctx;
    o.save();
    const l = Et(o);
    o.transform(t, s, i, n, 0, 0);
    const h = this._createMaskCanvas(e);
    o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
    for (let d = 0, u = r.length; d < u; d += 2) {
      const f = U.transform(l, [t, s, i, n, r[d], r[d + 1]]), [p, g] = U.applyTransform([0, 0], f);
      o.drawImage(h.canvas, p, g);
    }
    o.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(e) {
    if (!this.contentVisible)
      return;
    const t = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const n of e) {
      const {
        data: r,
        width: o,
        height: l,
        transform: h
      } = n, d = this.cachedCanvases.getCanvas("maskCanvas", o, l), u = d.context;
      u.save();
      const f = this.getObject(r, n);
      Zd(u, f), u.globalCompositeOperation = "source-in", u.fillStyle = i ? s.getPattern(u, this, ws(t), he.FILL) : s, u.fillRect(0, 0, o, l), u.restore(), t.save(), t.transform(...h), t.scale(1, -1), Hl(t, d.canvas, 0, 0, o, l, 0, -1, 1, 1), t.restore();
    }
    this.compose();
  }
  paintImageXObject(e) {
    if (!this.contentVisible)
      return;
    const t = this.getObject(e);
    if (!t) {
      X("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t);
  }
  paintImageXObjectRepeat(e, t, s, i) {
    if (!this.contentVisible)
      return;
    const n = this.getObject(e);
    if (!n) {
      X("Dependent image isn't ready yet");
      return;
    }
    const r = n.width, o = n.height, l = [];
    for (let h = 0, d = i.length; h < d; h += 2)
      l.push({
        transform: [t, 0, 0, s, i[h], i[h + 1]],
        x: 0,
        y: 0,
        w: r,
        h: o
      });
    this.paintInlineImageXObjectGroup(n, l);
  }
  applyTransferMapsToCanvas(e) {
    return this.current.transferMaps !== "none" && (e.filter = this.current.transferMaps, e.drawImage(e.canvas, 0, 0), e.filter = "none"), e.canvas;
  }
  applyTransferMapsToBitmap(e) {
    if (this.current.transferMaps === "none")
      return e.bitmap;
    const {
      bitmap: t,
      width: s,
      height: i
    } = e, n = this.cachedCanvases.getCanvas("inlineImage", s, i), r = n.context;
    return r.filter = this.current.transferMaps, r.drawImage(t, 0, 0), r.filter = "none", n.canvas;
  }
  paintInlineImageXObject(e) {
    if (!this.contentVisible)
      return;
    const t = e.width, s = e.height, i = this.ctx;
    if (this.save(), !ce) {
      const {
        filter: o
      } = i;
      o !== "none" && o !== "" && (i.filter = "none");
    }
    i.scale(1 / t, -1 / s);
    let n;
    if (e.bitmap)
      n = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data)
      n = e;
    else {
      const l = this.cachedCanvases.getCanvas("inlineImage", t, s).context;
      Jd(l, e), n = this.applyTransferMapsToCanvas(l);
    }
    const r = this._scaleImage(n, ws(i));
    i.imageSmoothingEnabled = qd(Et(i), e.interpolate), Hl(i, r.img, 0, 0, r.paintWidth, r.paintHeight, 0, -s, t, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(e, t) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let i;
    if (e.bitmap)
      i = e.bitmap;
    else {
      const n = e.width, r = e.height, l = this.cachedCanvases.getCanvas("inlineImage", n, r).context;
      Jd(l, e), i = this.applyTransferMapsToCanvas(l);
    }
    for (const n of t)
      s.save(), s.transform(...n.transform), s.scale(1, -1), Hl(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(e) {
  }
  markPointProps(e, t) {
  }
  beginMarkedContent(e) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(e, t) {
    e === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(t)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(e) {
    const t = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(e);
    const s = this.ctx;
    this.pendingClip && (t || (this.pendingClip === tu ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const e = Et(this.ctx);
      if (e[1] === 0 && e[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(e[0]), Math.abs(e[3]));
      else {
        const t = Math.abs(e[0] * e[3] - e[2] * e[1]), s = Math.hypot(e[0], e[2]), i = Math.hypot(e[1], e[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / t;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: e
      } = this.current, {
        a: t,
        b: s,
        c: i,
        d: n
      } = this.ctx.getTransform();
      let r, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(t), h = Math.abs(n);
        if (l === h)
          if (e === 0)
            r = o = 1 / l;
          else {
            const d = l * e;
            r = o = d < 1 ? 1 / d : 1;
          }
        else if (e === 0)
          r = 1 / l, o = 1 / h;
        else {
          const d = l * e, u = h * e;
          r = d < 1 ? 1 / d : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(t * n - s * i), h = Math.hypot(t, s), d = Math.hypot(i, n);
        if (e === 0)
          r = d / l, o = h / l;
        else {
          const u = e * l;
          r = d > u ? d / u : 1, o = h > u ? h / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = r, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(e) {
    const {
      ctx: t
    } = this, {
      lineWidth: s
    } = this.current, [i, n] = this.getScaleForStroking();
    if (t.lineWidth = s || 1, i === 1 && n === 1) {
      t.stroke();
      return;
    }
    const r = t.getLineDash();
    if (e && t.save(), t.scale(i, n), r.length > 0) {
      const o = Math.max(i, n);
      t.setLineDash(r.map((l) => l / o)), t.lineDashOffset /= o;
    }
    t.stroke(), e && t.restore();
  }
  isContentVisible() {
    for (let e = this.markedContentStack.length - 1; e >= 0; e--)
      if (!this.markedContentStack[e].visible)
        return !1;
    return !0;
  }
};
vs = new WeakSet(), kc = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Fc = function() {
  if (this.pageColors) {
    const e = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (e !== "none") {
      const t = this.ctx.filter;
      this.ctx.filter = e, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = t;
    }
  }
}, Nc = function(e, t, s) {
  const i = new Path2D();
  return i.addPath(e, new DOMMatrix(s).invertSelf().multiplySelf(t)), i;
};
let _r = Dd;
for (const c in ss)
  _r.prototype[c] !== void 0 && (_r.prototype[ss[c]] = _r.prototype[c]);
var No, Bo;
class bi {
  static get workerPort() {
    return a(this, No);
  }
  static set workerPort(e) {
    if (!(typeof Worker < "u" && e instanceof Worker) && e !== null)
      throw new Error("Invalid `workerPort` type.");
    m(this, No, e);
  }
  static get workerSrc() {
    return a(this, Bo);
  }
  static set workerSrc(e) {
    if (typeof e != "string")
      throw new Error("Invalid `workerSrc` type.");
    m(this, Bo, e);
  }
}
No = new WeakMap(), Bo = new WeakMap(), b(bi, No, null), b(bi, Bo, "");
var kn, Ho;
class qp {
  constructor({
    parsedData: e,
    rawData: t
  }) {
    b(this, kn);
    b(this, Ho);
    m(this, kn, e), m(this, Ho, t);
  }
  getRaw() {
    return a(this, Ho);
  }
  get(e) {
    return a(this, kn).get(e) ?? null;
  }
  getAll() {
    return Sd(a(this, kn));
  }
  has(e) {
    return a(this, kn).has(e);
  }
}
kn = new WeakMap(), Ho = new WeakMap();
const Tr = Symbol("INTERNAL");
var $o, jo, Uo, Qr;
class tg {
  constructor(e, {
    name: t,
    intent: s,
    usage: i,
    rbGroups: n
  }) {
    b(this, $o, !1);
    b(this, jo, !1);
    b(this, Uo, !1);
    b(this, Qr, !0);
    m(this, $o, !!(e & $e.DISPLAY)), m(this, jo, !!(e & $e.PRINT)), this.name = t, this.intent = s, this.usage = i, this.rbGroups = n;
  }
  get visible() {
    if (a(this, Uo))
      return a(this, Qr);
    if (!a(this, Qr))
      return !1;
    const {
      print: e,
      view: t
    } = this.usage;
    return a(this, $o) ? (t == null ? void 0 : t.viewState) !== "OFF" : a(this, jo) ? (e == null ? void 0 : e.printState) !== "OFF" : !0;
  }
  _setVisible(e, t, s = !1) {
    e !== Tr && bt("Internal method `_setVisible` called."), m(this, Uo, s), m(this, Qr, t);
  }
}
$o = new WeakMap(), jo = new WeakMap(), Uo = new WeakMap(), Qr = new WeakMap();
var Ni, dt, Jr, Zr, Go, Bc;
class eg {
  constructor(e, t = $e.DISPLAY) {
    b(this, Go);
    b(this, Ni, null);
    b(this, dt, /* @__PURE__ */ new Map());
    b(this, Jr, null);
    b(this, Zr, null);
    if (this.renderingIntent = t, this.name = null, this.creator = null, e !== null) {
      this.name = e.name, this.creator = e.creator, m(this, Zr, e.order);
      for (const s of e.groups)
        a(this, dt).set(s.id, new tg(t, s));
      if (e.baseState === "OFF")
        for (const s of a(this, dt).values())
          s._setVisible(Tr, !1);
      for (const s of e.on)
        a(this, dt).get(s)._setVisible(Tr, !0);
      for (const s of e.off)
        a(this, dt).get(s)._setVisible(Tr, !1);
      m(this, Jr, this.getHash());
    }
  }
  isVisible(e) {
    if (a(this, dt).size === 0)
      return !0;
    if (!e)
      return Xh("Optional content group not defined."), !0;
    if (e.type === "OCG")
      return a(this, dt).has(e.id) ? a(this, dt).get(e.id).visible : (X(`Optional content group not found: ${e.id}`), !0);
    if (e.type === "OCMD") {
      if (e.expression)
        return y(this, Go, Bc).call(this, e.expression);
      if (!e.policy || e.policy === "AnyOn") {
        for (const t of e.ids) {
          if (!a(this, dt).has(t))
            return X(`Optional content group not found: ${t}`), !0;
          if (a(this, dt).get(t).visible)
            return !0;
        }
        return !1;
      } else if (e.policy === "AllOn") {
        for (const t of e.ids) {
          if (!a(this, dt).has(t))
            return X(`Optional content group not found: ${t}`), !0;
          if (!a(this, dt).get(t).visible)
            return !1;
        }
        return !0;
      } else if (e.policy === "AnyOff") {
        for (const t of e.ids) {
          if (!a(this, dt).has(t))
            return X(`Optional content group not found: ${t}`), !0;
          if (!a(this, dt).get(t).visible)
            return !0;
        }
        return !1;
      } else if (e.policy === "AllOff") {
        for (const t of e.ids) {
          if (!a(this, dt).has(t))
            return X(`Optional content group not found: ${t}`), !0;
          if (a(this, dt).get(t).visible)
            return !1;
        }
        return !0;
      }
      return X(`Unknown optional content policy ${e.policy}.`), !0;
    }
    return X(`Unknown group type ${e.type}.`), !0;
  }
  setVisibility(e, t = !0, s = !0) {
    var n;
    const i = a(this, dt).get(e);
    if (!i) {
      X(`Optional content group not found: ${e}`);
      return;
    }
    if (s && t && i.rbGroups.length)
      for (const r of i.rbGroups)
        for (const o of r)
          o !== e && ((n = a(this, dt).get(o)) == null || n._setVisible(Tr, !1, !0));
    i._setVisible(Tr, !!t, !0), m(this, Ni, null);
  }
  setOCGState({
    state: e,
    preserveRB: t
  }) {
    let s;
    for (const i of e) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const n = a(this, dt).get(i);
      if (n)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, t);
            break;
          case "OFF":
            this.setVisibility(i, !1, t);
            break;
          case "Toggle":
            this.setVisibility(i, !n.visible, t);
            break;
        }
    }
    m(this, Ni, null);
  }
  get hasInitialVisibility() {
    return a(this, Jr) === null || this.getHash() === a(this, Jr);
  }
  getOrder() {
    return a(this, dt).size ? a(this, Zr) ? a(this, Zr).slice() : [...a(this, dt).keys()] : null;
  }
  getGroups() {
    return a(this, dt).size > 0 ? Sd(a(this, dt)) : null;
  }
  getGroup(e) {
    return a(this, dt).get(e) || null;
  }
  getHash() {
    if (a(this, Ni) !== null)
      return a(this, Ni);
    const e = new Nu();
    for (const [t, s] of a(this, dt))
      e.update(`${t}:${s.visible}`);
    return m(this, Ni, e.hexdigest());
  }
}
Ni = new WeakMap(), dt = new WeakMap(), Jr = new WeakMap(), Zr = new WeakMap(), Go = new WeakSet(), Bc = function(e) {
  const t = e.length;
  if (t < 2)
    return !0;
  const s = e[0];
  for (let i = 1; i < t; i++) {
    const n = e[i];
    let r;
    if (Array.isArray(n))
      r = y(this, Go, Bc).call(this, n);
    else if (a(this, dt).has(n))
      r = a(this, dt).get(n).visible;
    else
      return X(`Optional content group not found: ${n}`), !0;
    switch (s) {
      case "And":
        if (!r)
          return !1;
        break;
      case "Or":
        if (r)
          return !0;
        break;
      case "Not":
        return !r;
      default:
        return !0;
    }
  }
  return s === "And";
};
class sg {
  constructor(e, {
    disableRange: t = !1,
    disableStream: s = !1
  }) {
    Ft(e, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: n,
      progressiveDone: r,
      contentDispositionFilename: o
    } = e;
    if (this._queuedChunks = [], this._progressiveDone = r, this._contentDispositionFilename = o, (n == null ? void 0 : n.length) > 0) {
      const l = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = e, this._isStreamingSupported = !s, this._isRangeSupported = !t, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], e.addRangeListener((l, h) => {
      this._onReceiveData({
        begin: l,
        chunk: h
      });
    }), e.addProgressListener((l, h) => {
      this._onProgress({
        loaded: l,
        total: h
      });
    }), e.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l
      });
    }), e.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), e.transportReady();
  }
  _onReceiveData({
    begin: e,
    chunk: t
  }) {
    const s = t instanceof Uint8Array && t.byteLength === t.buffer.byteLength ? t.buffer : new Uint8Array(t).buffer;
    if (e === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(n) {
        return n._begin !== e ? !1 : (n._enqueue(s), !0);
      });
      Ft(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var e;
    return ((e = this._fullRequestReader) == null ? void 0 : e._loaded) ?? 0;
  }
  _onProgress(e) {
    var t, s, i, n;
    e.total === void 0 ? (s = (t = this._rangeReaders[0]) == null ? void 0 : t.onProgress) == null || s.call(t, {
      loaded: e.loaded
    }) : (n = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || n.call(i, {
      loaded: e.loaded,
      total: e.total
    });
  }
  _onProgressiveDone() {
    var e;
    (e = this._fullRequestReader) == null || e.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(e) {
    const t = this._rangeReaders.indexOf(e);
    t >= 0 && this._rangeReaders.splice(t, 1);
  }
  getFullReader() {
    Ft(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const e = this._queuedChunks;
    return this._queuedChunks = null, new ig(this, e, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(e, t) {
    if (t <= this._progressiveDataLength)
      return null;
    const s = new ng(this, e, t);
    return this._pdfDataRangeTransport.requestDataRange(e, t), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(e) {
    var t;
    (t = this._fullRequestReader) == null || t.cancel(e);
    for (const s of this._rangeReaders.slice(0))
      s.cancel(e);
    this._pdfDataRangeTransport.abort();
  }
}
class ig {
  constructor(e, t, s = !1, i = null) {
    this._stream = e, this._done = s || !1, this._filename = Td(i) ? i : null, this._queuedChunks = t || [], this._loaded = 0;
    for (const n of this._queuedChunks)
      this._loaded += n.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), e._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(e) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunks.push(e), this._loaded += e.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0;
    for (const t of this._requests)
      t.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class ng {
  constructor(e, t, s) {
    this._stream = e, this._begin = t, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(e) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = e;
      else {
        this._requests.shift().resolve({
          value: e,
          done: !1
        });
        for (const s of this._requests)
          s.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const t = this._queuedChunk;
      return this._queuedChunk = null, {
        value: t,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0;
    for (const t of this._requests)
      t.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function rg(c) {
  let e = !0, t = s("filename\\*", "i").exec(c);
  if (t) {
    t = t[1];
    let d = o(t);
    return d = unescape(d), d = l(d), d = h(d), n(d);
  }
  if (t = r(c), t) {
    const d = h(t);
    return n(d);
  }
  if (t = s("filename", "i").exec(c), t) {
    t = t[1];
    let d = o(t);
    return d = h(d), n(d);
  }
  function s(d, u) {
    return new RegExp("(?:^|;)\\s*" + d + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function i(d, u) {
    if (d) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const f = new TextDecoder(d, {
          fatal: !0
        }), p = Yh(u);
        u = f.decode(p), e = !1;
      } catch {
      }
    }
    return u;
  }
  function n(d) {
    return e && /[\x80-\xff]/.test(d) && (d = i("utf-8", d), e && (d = i("iso-8859-1", d))), d;
  }
  function r(d) {
    const u = [];
    let f;
    const p = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (f = p.exec(d)) !== null; ) {
      let [, v, w, A] = f;
      if (v = parseInt(v, 10), v in u) {
        if (v === 0)
          break;
        continue;
      }
      u[v] = [w, A];
    }
    const g = [];
    for (let v = 0; v < u.length && v in u; ++v) {
      let [w, A] = u[v];
      A = o(A), w && (A = unescape(A), v === 0 && (A = l(A))), g.push(A);
    }
    return g.join("");
  }
  function o(d) {
    if (d.startsWith('"')) {
      const u = d.slice(1).split('\\"');
      for (let f = 0; f < u.length; ++f) {
        const p = u[f].indexOf('"');
        p !== -1 && (u[f] = u[f].slice(0, p), u.length = f + 1), u[f] = u[f].replaceAll(/\\(.)/g, "$1");
      }
      d = u.join('"');
    }
    return d;
  }
  function l(d) {
    const u = d.indexOf("'");
    if (u === -1)
      return d;
    const f = d.slice(0, u), g = d.slice(u + 1).replace(/^[^']*'/, "");
    return i(f, g);
  }
  function h(d) {
    return !d.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, f, p, g) {
      if (p === "q" || p === "Q")
        return g = g.replaceAll("_", " "), g = g.replaceAll(/=([0-9a-fA-F]{2})/g, function(v, w) {
          return String.fromCharCode(parseInt(w, 16));
        }), i(f, g);
      try {
        g = atob(g);
      } catch {
      }
      return i(f, g);
    });
  }
  return "";
}
function Ju(c, e) {
  const t = new Headers();
  if (!c || !e || typeof e != "object")
    return t;
  for (const s in e) {
    const i = e[s];
    i !== void 0 && t.append(s, i);
  }
  return t;
}
function Jh(c) {
  try {
    return new URL(c).origin;
  } catch {
  }
  return null;
}
function Zu({
  responseHeaders: c,
  isHttp: e,
  rangeChunkSize: t,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, n = parseInt(c.get("Content-Length"), 10);
  return !Number.isInteger(n) || (i.suggestedLength = n, n <= 2 * t) || s || !e || c.get("Accept-Ranges") !== "bytes" || (c.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function qu(c) {
  const e = c.get("Content-Disposition");
  if (e) {
    let t = rg(e);
    if (t.includes("%"))
      try {
        t = decodeURIComponent(t);
      } catch {
      }
    if (Td(t))
      return t;
  }
  return null;
}
function Zh(c, e) {
  return c === 404 || c === 0 && e.startsWith("file:") ? new ro('Missing PDF "' + e + '".') : new bh(`Unexpected server response (${c}) while retrieving PDF "${e}".`, c);
}
function tf(c) {
  return c === 200 || c === 206;
}
function ef(c, e, t) {
  return {
    method: "GET",
    headers: c,
    signal: t.signal,
    mode: "cors",
    credentials: e ? "include" : "same-origin",
    redirect: "follow"
  };
}
function sf(c) {
  return c instanceof Uint8Array ? c.buffer : c instanceof ArrayBuffer ? c : (X(`getArrayBuffer - unexpected data format: ${c}`), new Uint8Array(c).buffer);
}
class eu {
  constructor(e) {
    G(this, "_responseOrigin", null);
    this.source = e, this.isHttp = /^https?:/i.test(e.url), this.headers = Ju(this.isHttp, e.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var e;
    return ((e = this._fullRequestReader) == null ? void 0 : e._loaded) ?? 0;
  }
  getFullReader() {
    return Ft(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new ag(this), this._fullRequestReader;
  }
  getRangeReader(e, t) {
    if (t <= this._progressiveDataLength)
      return null;
    const s = new og(this, e, t);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(e) {
    var t;
    (t = this._fullRequestReader) == null || t.cancel(e);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(e);
  }
}
class ag {
  constructor(e) {
    this._stream = e, this._reader = null, this._loaded = 0, this._filename = null;
    const t = e.source;
    this._withCredentials = t.withCredentials || !1, this._contentLength = t.length, this._headersCapability = Promise.withResolvers(), this._disableRange = t.disableRange || !1, this._rangeChunkSize = t.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !t.disableStream, this._isRangeSupported = !t.disableRange;
    const s = new Headers(e.headers), i = t.url;
    fetch(i, ef(s, this._withCredentials, this._abortController)).then((n) => {
      if (e._responseOrigin = Jh(n.url), !tf(n.status))
        throw Zh(n.status, i);
      this._reader = n.body.getReader(), this._headersCapability.resolve();
      const r = n.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = Zu({
        responseHeaders: r,
        isHttp: e.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = qu(r), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new sn("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._headersCapability.promise;
    const {
      value: e,
      done: t
    } = await this._reader.read();
    return t ? {
      value: e,
      done: t
    } : (this._loaded += e.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: sf(e),
      done: !1
    });
  }
  cancel(e) {
    var t;
    (t = this._reader) == null || t.cancel(e), this._abortController.abort();
  }
}
class og {
  constructor(e, t, s) {
    this._stream = e, this._reader = null, this._loaded = 0;
    const i = e.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const n = new Headers(e.headers);
    n.append("Range", `bytes=${t}-${s - 1}`);
    const r = i.url;
    fetch(r, ef(n, this._withCredentials, this._abortController)).then((o) => {
      const l = Jh(o.url);
      if (l !== e._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${e._responseOrigin}".`);
      if (!tf(o.status))
        throw Zh(o.status, r);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const {
      value: e,
      done: t
    } = await this._reader.read();
    return t ? {
      value: e,
      done: t
    } : (this._loaded += e.byteLength, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: sf(e),
      done: !1
    });
  }
  cancel(e) {
    var t;
    (t = this._reader) == null || t.cancel(e), this._abortController.abort();
  }
}
const ac = 200, oc = 206;
function lg(c) {
  const e = c.response;
  return typeof e != "string" ? e : Yh(e).buffer;
}
class hg {
  constructor({
    url: e,
    httpHeaders: t,
    withCredentials: s
  }) {
    G(this, "_responseOrigin", null);
    this.url = e, this.isHttp = /^https?:/i.test(e), this.headers = Ju(this.isHttp, t), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(e) {
    const t = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: t
    };
    t.open("GET", this.url), t.withCredentials = this.withCredentials;
    for (const [n, r] of this.headers)
      t.setRequestHeader(n, r);
    return this.isHttp && "begin" in e && "end" in e ? (t.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`), i.expectedStatus = oc) : i.expectedStatus = ac, t.responseType = "arraybuffer", Ft(e.onError, "Expected `onError` callback to be provided."), t.onerror = () => {
      e.onError(t.status);
    }, t.onreadystatechange = this.onStateChange.bind(this, s), t.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = e.onHeadersReceived, i.onDone = e.onDone, i.onError = e.onError, i.onProgress = e.onProgress, t.send(null), s;
  }
  onProgress(e, t) {
    var i;
    const s = this.pendingRequests[e];
    s && ((i = s.onProgress) == null || i.call(s, t));
  }
  onStateChange(e, t) {
    const s = this.pendingRequests[e];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(e in this.pendingRequests))
      return;
    if (delete this.pendingRequests[e], i.status === 0 && this.isHttp) {
      s.onError(i.status);
      return;
    }
    const n = i.status || ac;
    if (!(n === ac && s.expectedStatus === oc) && n !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = lg(i);
    if (n === oc) {
      const l = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? s.onDone({
        begin: parseInt(h[1], 10),
        chunk: o
      }) : (X('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else o ? s.onDone({
      begin: 0,
      chunk: o
    }) : s.onError(i.status);
  }
  getRequestXhr(e) {
    return this.pendingRequests[e].xhr;
  }
  isPendingRequest(e) {
    return e in this.pendingRequests;
  }
  abortRequest(e) {
    const t = this.pendingRequests[e].xhr;
    delete this.pendingRequests[e], t.abort();
  }
}
class cg {
  constructor(e) {
    this._source = e, this._manager = new hg(e), this._rangeChunkSize = e.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(e) {
    const t = this._rangeRequestReaders.indexOf(e);
    t >= 0 && this._rangeRequestReaders.splice(t, 1);
  }
  getFullReader() {
    return Ft(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new dg(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(e, t) {
    const s = new ug(this._manager, e, t);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(e) {
    var t;
    (t = this._fullRequestReader) == null || t.cancel(e);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(e);
  }
}
class dg {
  constructor(e, t) {
    this._manager = e, this._url = t.url, this._fullRequestId = e.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = t.disableRange || !1, this._contentLength = t.length, this._rangeChunkSize = t.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const e = this._fullRequestId, t = this._manager.getRequestXhr(e);
    this._manager._responseOrigin = Jh(t.responseURL);
    const s = t.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: n,
      suggestedLength: r
    } = Zu({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    n && (this._isRangeSupported = !0), this._contentLength = r || this._contentLength, this._filename = qu(i), this._isRangeSupported && this._manager.abortRequest(e), this._headersCapability.resolve();
  }
  _onDone(e) {
    if (e && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: e.chunk,
      done: !1
    }) : this._cachedChunks.push(e.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const t of this._requests)
        t.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(e) {
    this._storedError = Zh(e, this._url), this._headersCapability.reject(this._storedError);
    for (const t of this._requests)
      t.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(e) {
    var t;
    (t = this.onProgress) == null || t.call(this, {
      loaded: e.loaded,
      total: e.lengthComputable ? e.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0, this._headersCapability.reject(e);
    for (const t of this._requests)
      t.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class ug {
  constructor(e, t, s) {
    this._manager = e, this._url = e.url, this._requestId = e.request({
      begin: t,
      end: s,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var t;
    const e = Jh((t = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : t.responseURL);
    e !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${e}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    var e;
    (e = this.onClosed) == null || e.call(this, this);
  }
  _onDone(e) {
    const t = e.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunk = t, this._done = !0;
    for (const s of this._requests)
      s.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(e) {
    this._storedError ?? (this._storedError = Zh(e, this._url));
    for (const t of this._requests)
      t.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(e) {
    var t;
    this.isStreamingSupported || (t = this.onProgress) == null || t.call(this, {
      loaded: e.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const t = this._queuedChunk;
      return this._queuedChunk = null, {
        value: t,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0;
    for (const t of this._requests)
      t.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const fg = /^[a-z][a-z0-9\-+.]+:/i;
function pg(c) {
  if (fg.test(c))
    return new URL(c);
  const e = process.getBuiltinModule("url");
  return new URL(e.pathToFileURL(c));
}
class gg {
  constructor(e) {
    this.source = e, this.url = pg(e.url), Ft(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var e;
    return ((e = this._fullRequestReader) == null ? void 0 : e._loaded) ?? 0;
  }
  getFullReader() {
    return Ft(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new mg(this), this._fullRequestReader;
  }
  getRangeReader(e, t) {
    if (t <= this._progressiveDataLength)
      return null;
    const s = new vg(this, e, t);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(e) {
    var t;
    (t = this._fullRequestReader) == null || t.cancel(e);
    for (const s of this._rangeRequestReaders.slice(0))
      s.cancel(e);
  }
}
class mg {
  constructor(e) {
    this._url = e.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const t = e.source;
    this._contentLength = t.length, this._loaded = 0, this._filename = null, this._disableRange = t.disableRange || !1, this._rangeChunkSize = t.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !t.disableStream, this._isRangeSupported = !t.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new ro(`Missing PDF "${this._url}".`)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const e = this._readableStream.read();
    return e === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += e.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(e).buffer,
      done: !1
    });
  }
  cancel(e) {
    if (!this._readableStream) {
      this._error(e);
      return;
    }
    this._readableStream.destroy(e);
  }
  _error(e) {
    this._storedError = e, this._readCapability.resolve();
  }
  _setReadableStream(e) {
    this._readableStream = e, e.on("readable", () => {
      this._readCapability.resolve();
    }), e.on("end", () => {
      e.destroy(), this._done = !0, this._readCapability.resolve();
    }), e.on("error", (t) => {
      this._error(t);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new sn("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class vg {
  constructor(e, t, s) {
    this._url = e.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const i = e.source;
    this._isStreamingSupported = !i.disableStream;
    const n = process.getBuiltinModule("fs");
    this._setReadableStream(n.createReadStream(this._url, {
      start: t,
      end: s - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const e = this._readableStream.read();
    return e === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += e.length, (s = this.onProgress) == null || s.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(e).buffer,
      done: !1
    });
  }
  cancel(e) {
    if (!this._readableStream) {
      this._error(e);
      return;
    }
    this._readableStream.destroy(e);
  }
  _error(e) {
    this._storedError = e, this._readCapability.resolve();
  }
  _setReadableStream(e) {
    this._readableStream = e, e.on("readable", () => {
      this._readCapability.resolve();
    }), e.on("end", () => {
      e.destroy(), this._done = !0, this._readCapability.resolve();
    }), e.on("error", (t) => {
      this._error(t);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const bg = 1e5, we = 30, yg = 0.8;
var ru, Bi, Te, zo, Vo, Fn, si, Wo, Xo, Nn, qr, ta, Hi, ea, Yo, sa, Bn, Ko, Qo, Hn, $n, Jo, $i, ia, Si, nf, rf, Hc, Ge, ql, $c, af, of;
const Ht = class Ht {
  constructor({
    textContentSource: e,
    container: t,
    viewport: s
  }) {
    b(this, Si);
    b(this, Bi, Promise.withResolvers());
    b(this, Te, null);
    b(this, zo, !1);
    b(this, Vo, !!((ru = globalThis.FontInspector) != null && ru.enabled));
    b(this, Fn, null);
    b(this, si, null);
    b(this, Wo, 0);
    b(this, Xo, 0);
    b(this, Nn, null);
    b(this, qr, null);
    b(this, ta, 0);
    b(this, Hi, 0);
    b(this, ea, /* @__PURE__ */ Object.create(null));
    b(this, Yo, []);
    b(this, sa, null);
    b(this, Bn, []);
    b(this, Ko, /* @__PURE__ */ new WeakMap());
    b(this, Qo, null);
    var l;
    if (e instanceof ReadableStream)
      m(this, sa, e);
    else if (typeof e == "object")
      m(this, sa, new ReadableStream({
        start(h) {
          h.enqueue(e), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    m(this, Te, m(this, qr, t)), m(this, Hi, s.scale * (globalThis.devicePixelRatio || 1)), m(this, ta, s.rotation), m(this, si, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: n,
      pageX: r,
      pageY: o
    } = s.rawDims;
    m(this, Qo, [1, 0, 0, -1, -r, o + n]), m(this, Xo, i), m(this, Wo, n), y(l = Ht, Ge, af).call(l), mr(t, s), a(this, Bi).promise.finally(() => {
      a(Ht, ia).delete(this), m(this, si, null), m(this, ea, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: e,
      isFirefox: t
    } = be.platform;
    return st(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${e && t ? "Calibri, " : ""}sans-serif`], ["monospace", `${e && t ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const e = () => {
      a(this, Nn).read().then(({
        value: t,
        done: s
      }) => {
        if (s) {
          a(this, Bi).resolve();
          return;
        }
        a(this, Fn) ?? m(this, Fn, t.lang), Object.assign(a(this, ea), t.styles), y(this, Si, nf).call(this, t.items), e();
      }, a(this, Bi).reject);
    };
    return m(this, Nn, a(this, sa).getReader()), a(Ht, ia).add(this), e(), a(this, Bi).promise;
  }
  update({
    viewport: e,
    onBefore: t = null
  }) {
    var n;
    const s = e.scale * (globalThis.devicePixelRatio || 1), i = e.rotation;
    if (i !== a(this, ta) && (t == null || t(), m(this, ta, i), mr(a(this, qr), {
      rotation: i
    })), s !== a(this, Hi)) {
      t == null || t(), m(this, Hi, s);
      const r = {
        div: null,
        properties: null,
        ctx: y(n = Ht, Ge, ql).call(n, a(this, Fn))
      };
      for (const o of a(this, Bn))
        r.properties = a(this, Ko).get(o), r.div = o, y(this, Si, Hc).call(this, r);
    }
  }
  cancel() {
    var t;
    const e = new sn("TextLayer task cancelled.");
    (t = a(this, Nn)) == null || t.cancel(e).catch(() => {
    }), m(this, Nn, null), a(this, Bi).reject(e);
  }
  get textDivs() {
    return a(this, Bn);
  }
  get textContentItemsStr() {
    return a(this, Yo);
  }
  static cleanup() {
    if (!(a(this, ia).size > 0)) {
      a(this, Hn).clear();
      for (const {
        canvas: e
      } of a(this, $n).values())
        e.remove();
      a(this, $n).clear();
    }
  }
};
Bi = new WeakMap(), Te = new WeakMap(), zo = new WeakMap(), Vo = new WeakMap(), Fn = new WeakMap(), si = new WeakMap(), Wo = new WeakMap(), Xo = new WeakMap(), Nn = new WeakMap(), qr = new WeakMap(), ta = new WeakMap(), Hi = new WeakMap(), ea = new WeakMap(), Yo = new WeakMap(), sa = new WeakMap(), Bn = new WeakMap(), Ko = new WeakMap(), Qo = new WeakMap(), Hn = new WeakMap(), $n = new WeakMap(), Jo = new WeakMap(), $i = new WeakMap(), ia = new WeakMap(), Si = new WeakSet(), nf = function(e) {
  var i, n;
  if (a(this, zo))
    return;
  (n = a(this, si)).ctx ?? (n.ctx = y(i = Ht, Ge, ql).call(i, a(this, Fn)));
  const t = a(this, Bn), s = a(this, Yo);
  for (const r of e) {
    if (t.length > bg) {
      X("Ignoring additional textDivs for performance reasons."), m(this, zo, !0);
      return;
    }
    if (r.str === void 0) {
      if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
        const o = a(this, Te);
        m(this, Te, document.createElement("span")), a(this, Te).classList.add("markedContent"), r.id !== null && a(this, Te).setAttribute("id", `${r.id}`), o.append(a(this, Te));
      } else r.type === "endMarkedContent" && m(this, Te, a(this, Te).parentNode);
      continue;
    }
    s.push(r.str), y(this, Si, rf).call(this, r);
  }
}, rf = function(e) {
  var v;
  const t = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: e.str !== "",
    hasEOL: e.hasEOL,
    fontSize: 0
  };
  a(this, Bn).push(t);
  const i = U.transform(a(this, Qo), e.transform);
  let n = Math.atan2(i[1], i[0]);
  const r = a(this, ea)[e.fontName];
  r.vertical && (n += Math.PI / 2);
  let o = a(this, Vo) && r.fontSubstitution || r.fontFamily;
  o = Ht.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * y(v = Ht, Ge, of).call(v, o, a(this, Fn));
  let d, u;
  n === 0 ? (d = i[4], u = i[5] - h) : (d = i[4] + h * Math.sin(n), u = i[5] - h * Math.cos(n));
  const f = "calc(var(--scale-factor)*", p = t.style;
  a(this, Te) === a(this, qr) ? (p.left = `${(100 * d / a(this, Xo)).toFixed(2)}%`, p.top = `${(100 * u / a(this, Wo)).toFixed(2)}%`) : (p.left = `${f}${d.toFixed(2)}px)`, p.top = `${f}${u.toFixed(2)}px)`), p.fontSize = `${f}${(a(Ht, $i) * l).toFixed(2)}px)`, p.fontFamily = o, s.fontSize = l, t.setAttribute("role", "presentation"), t.textContent = e.str, t.dir = e.dir, a(this, Vo) && (t.dataset.fontName = r.fontSubstitutionLoadedName || e.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
  let g = !1;
  if (e.str.length > 1)
    g = !0;
  else if (e.str !== " " && e.transform[0] !== e.transform[3]) {
    const w = Math.abs(e.transform[0]), A = Math.abs(e.transform[3]);
    w !== A && Math.max(w, A) / Math.min(w, A) > 1.5 && (g = !0);
  }
  if (g && (s.canvasWidth = r.vertical ? e.height : e.width), a(this, Ko).set(t, s), a(this, si).div = t, a(this, si).properties = s, y(this, Si, Hc).call(this, a(this, si)), s.hasText && a(this, Te).append(t), s.hasEOL) {
    const w = document.createElement("br");
    w.setAttribute("role", "presentation"), a(this, Te).append(w);
  }
}, Hc = function(e) {
  var o;
  const {
    div: t,
    properties: s,
    ctx: i
  } = e, {
    style: n
  } = t;
  let r = "";
  if (a(Ht, $i) > 1 && (r = `scale(${1 / a(Ht, $i)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: l
    } = n, {
      canvasWidth: h,
      fontSize: d
    } = s;
    y(o = Ht, Ge, $c).call(o, i, d * a(this, Hi), l);
    const {
      width: u
    } = i.measureText(t.textContent);
    u > 0 && (r = `scaleX(${h * a(this, Hi) / u}) ${r}`);
  }
  s.angle !== 0 && (r = `rotate(${s.angle}deg) ${r}`), r.length > 0 && (n.transform = r);
}, Ge = new WeakSet(), ql = function(e = null) {
  let t = a(this, $n).get(e || (e = ""));
  if (!t) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = e, document.body.append(s), t = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), a(this, $n).set(e, t), a(this, Jo).set(t, {
      size: 0,
      family: ""
    });
  }
  return t;
}, $c = function(e, t, s) {
  const i = a(this, Jo).get(e);
  t === i.size && s === i.family || (e.font = `${t}px ${s}`, i.size = t, i.family = s);
}, af = function() {
  if (a(this, $i) !== null)
    return;
  const e = document.createElement("div");
  e.style.opacity = 0, e.style.lineHeight = 1, e.style.fontSize = "1px", e.style.position = "absolute", e.textContent = "X", document.body.append(e), m(this, $i, e.getBoundingClientRect().height), e.remove();
}, of = function(e, t) {
  const s = a(this, Hn).get(e);
  if (s)
    return s;
  const i = y(this, Ge, ql).call(this, t);
  i.canvas.width = i.canvas.height = we, y(this, Ge, $c).call(this, i, we, e);
  const n = i.measureText("");
  let r = n.fontBoundingBoxAscent, o = Math.abs(n.fontBoundingBoxDescent);
  if (r) {
    const d = r / (r + o);
    return a(this, Hn).set(e, d), i.canvas.width = i.canvas.height = 0, d;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, we, we), i.strokeText("g", 0, 0);
  let l = i.getImageData(0, 0, we, we).data;
  o = 0;
  for (let d = l.length - 1 - 3; d >= 0; d -= 4)
    if (l[d] > 0) {
      o = Math.ceil(d / 4 / we);
      break;
    }
  i.clearRect(0, 0, we, we), i.strokeText("A", 0, we), l = i.getImageData(0, 0, we, we).data, r = 0;
  for (let d = 0, u = l.length; d < u; d += 4)
    if (l[d] > 0) {
      r = we - Math.floor(d / 4 / we);
      break;
    }
  i.canvas.width = i.canvas.height = 0;
  const h = r ? r / (r + o) : yg;
  return a(this, Hn).set(e, h), h;
}, b(Ht, Ge), b(Ht, Hn, /* @__PURE__ */ new Map()), b(Ht, $n, /* @__PURE__ */ new Map()), b(Ht, Jo, /* @__PURE__ */ new WeakMap()), b(Ht, $i, null), b(Ht, ia, /* @__PURE__ */ new Set());
let ao = Ht;
class oo {
  static textContent(e) {
    const t = [], s = {
      items: t,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(n) {
      var l;
      if (!n)
        return;
      let r = null;
      const o = n.name;
      if (o === "#text")
        r = n.value;
      else if (oo.shouldBuildText(o))
        (l = n == null ? void 0 : n.attributes) != null && l.textContent ? r = n.attributes.textContent : n.value && (r = n.value);
      else return;
      if (r !== null && t.push({
        str: r
      }), !!n.children)
        for (const h of n.children)
          i(h);
    }
    return i(e), s;
  }
  static shouldBuildText(e) {
    return !(e === "textarea" || e === "input" || e === "option" || e === "select");
  }
}
const Ag = 65536, wg = 100, Sg = 5e3, Eg = ce ? Np : Dp, xg = ce ? Bp : Vu, Tg = ce ? Fp : kp, Cg = ce ? Hp : Ku;
function Rg(c = {}) {
  typeof c == "string" || c instanceof URL ? c = {
    url: c
  } : (c instanceof ArrayBuffer || ArrayBuffer.isView(c)) && (c = {
    data: c
  });
  const e = new jc(), {
    docId: t
  } = e, s = c.url ? Pg(c.url) : null, i = c.data ? Ig(c.data) : null, n = c.httpHeaders || null, r = c.withCredentials === !0, o = c.password ?? null, l = c.range instanceof lf ? c.range : null, h = Number.isInteger(c.rangeChunkSize) && c.rangeChunkSize > 0 ? c.rangeChunkSize : Ag;
  let d = c.worker instanceof Lr ? c.worker : null;
  const u = c.verbosity, f = typeof c.docBaseUrl == "string" && !Qh(c.docBaseUrl) ? c.docBaseUrl : null, p = typeof c.cMapUrl == "string" ? c.cMapUrl : null, g = c.cMapPacked !== !1, v = c.CMapReaderFactory || xg, w = typeof c.standardFontDataUrl == "string" ? c.standardFontDataUrl : null, A = c.StandardFontDataFactory || Cg, S = c.stopAtErrors !== !0, x = Number.isInteger(c.maxImageSize) && c.maxImageSize > -1 ? c.maxImageSize : -1, T = c.isEvalSupported !== !1, E = typeof c.isOffscreenCanvasSupported == "boolean" ? c.isOffscreenCanvasSupported : !ce, C = typeof c.isImageDecoderSupported == "boolean" ? c.isImageDecoderSupported : !ce && (be.platform.isFirefox || !globalThis.chrome), R = Number.isInteger(c.canvasMaxAreaInBytes) ? c.canvasMaxAreaInBytes : -1, I = typeof c.disableFontFace == "boolean" ? c.disableFontFace : ce, P = c.fontExtraProperties === !0, F = c.enableXfa === !0, L = c.ownerDocument || globalThis.document, q = c.disableRange === !0, Y = c.disableStream === !0, K = c.disableAutoFetch === !0, gt = c.pdfBug === !0, _ = c.CanvasFactory || Eg, k = c.FilterFactory || Tg, nt = c.enableHWA === !0, lt = l ? l.length : c.length ?? NaN, At = typeof c.useSystemFonts == "boolean" ? c.useSystemFonts : !ce && !I, Pt = typeof c.useWorkerFetch == "boolean" ? c.useWorkerFetch : v === Vu && A === Ku && p && w && Ua(p, document.baseURI) && Ua(w, document.baseURI), ut = null;
  up(u);
  const mt = {
    canvasFactory: new _({
      ownerDocument: L,
      enableHWA: nt
    }),
    filterFactory: new k({
      docId: t,
      ownerDocument: L
    }),
    cMapReaderFactory: Pt ? null : new v({
      baseUrl: p,
      isCompressed: g
    }),
    standardFontDataFactory: Pt ? null : new A({
      baseUrl: w
    })
  };
  if (!d) {
    const N = {
      verbosity: u,
      port: bi.workerPort
    };
    d = N.port ? Lr.fromPort(N) : new Lr(N), e._worker = d;
  }
  const bs = {
    docId: t,
    apiVersion: "4.10.38",
    data: i,
    password: o,
    disableAutoFetch: K,
    rangeChunkSize: h,
    length: lt,
    docBaseUrl: f,
    enableXfa: F,
    evaluatorOptions: {
      maxImageSize: x,
      disableFontFace: I,
      ignoreErrors: S,
      isEvalSupported: T,
      isOffscreenCanvasSupported: E,
      isImageDecoderSupported: C,
      canvasMaxAreaInBytes: R,
      fontExtraProperties: P,
      useSystemFonts: At,
      cMapUrl: Pt ? p : null,
      standardFontDataUrl: Pt ? w : null
    }
  }, ys = {
    disableFontFace: I,
    fontExtraProperties: P,
    ownerDocument: L,
    pdfBug: gt,
    styleElement: ut,
    loadingParams: {
      disableAutoFetch: K,
      enableXfa: F
    }
  };
  return d.promise.then(function() {
    if (e.destroyed)
      throw new Error("Loading aborted");
    if (d.destroyed)
      throw new Error("Worker was destroyed");
    const N = d.messageHandler.sendWithPromise("GetDocRequest", bs, i ? [i.buffer] : null);
    let M;
    if (l)
      M = new sg(l, {
        disableRange: q,
        disableStream: Y
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let D;
      if (ce)
        if (Ua(s)) {
          if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype))
            throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          D = eu;
        } else
          D = gg;
      else
        D = Ua(s) ? eu : cg;
      M = new D({
        url: s,
        length: lt,
        httpHeaders: n,
        withCredentials: r,
        rangeChunkSize: h,
        disableRange: q,
        disableStream: Y
      });
    }
    return N.then((D) => {
      if (e.destroyed)
        throw new Error("Loading aborted");
      if (d.destroyed)
        throw new Error("Worker was destroyed");
      const Q = new Wa(t, D, d.port), vt = new Og(Q, e, M, ys, mt);
      e._transport = vt, Q.send("Ready", null);
    });
  }).catch(e._capability.reject), e;
}
function Pg(c) {
  if (c instanceof URL)
    return c.href;
  try {
    return new URL(c, window.location).href;
  } catch {
    if (ce && typeof c == "string")
      return c;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Ig(c) {
  if (ce && typeof Buffer < "u" && c instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (c instanceof Uint8Array && c.byteLength === c.buffer.byteLength)
    return c;
  if (typeof c == "string")
    return Yh(c);
  if (c instanceof ArrayBuffer || ArrayBuffer.isView(c) || typeof c == "object" && !isNaN(c == null ? void 0 : c.length))
    return new Uint8Array(c);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function su(c) {
  return typeof c == "object" && Number.isInteger(c == null ? void 0 : c.num) && c.num >= 0 && Number.isInteger(c == null ? void 0 : c.gen) && c.gen >= 0;
}
var Dh;
const kh = class kh {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${ue(kh, Dh)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var e, t, s, i;
    this.destroyed = !0;
    try {
      (e = this._worker) != null && e.port && (this._worker._pendingDestroy = !0), await ((t = this._transport) == null ? void 0 : t.destroy());
    } catch (n) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, n;
    }
    this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
  }
};
Dh = new WeakMap(), b(kh, Dh, 0);
let jc = kh;
class lf {
  constructor(e, t, s = !1, i = null) {
    this.length = e, this.initialData = t, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(e) {
    this._rangeListeners.push(e);
  }
  addProgressListener(e) {
    this._progressListeners.push(e);
  }
  addProgressiveReadListener(e) {
    this._progressiveReadListeners.push(e);
  }
  addProgressiveDoneListener(e) {
    this._progressiveDoneListeners.push(e);
  }
  onDataRange(e, t) {
    for (const s of this._rangeListeners)
      s(e, t);
  }
  onDataProgress(e, t) {
    this._readyCapability.promise.then(() => {
      for (const s of this._progressListeners)
        s(e, t);
    });
  }
  onDataProgressiveRead(e) {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveReadListeners)
        t(e);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveDoneListeners)
        e();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(e, t) {
    bt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class Mg {
  constructor(e, t) {
    this._pdfInfo = e, this._transport = t;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return st(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(e) {
    return this._transport.getPage(e);
  }
  getPageIndex(e) {
    return this._transport.getPageIndex(e);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(e) {
    return this._transport.getDestination(e);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: e = "display"
  } = {}) {
    const {
      renderingIntent: t
    } = this._transport.getRenderingIntent(e);
    return this._transport.getOptionalContentConfig(t);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(e = !1) {
    return this._transport.startCleanup(e || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(e) {
    return this._transport.cachedPageNumber(e);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var ji, ii, Ze, Cr, th;
class _g {
  constructor(e, t, s, i = !1) {
    b(this, Ze);
    b(this, ji, null);
    b(this, ii, !1);
    this._pageIndex = e, this._pageInfo = t, this._transport = s, this._stats = i ? new Ud() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new hf(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: e,
    rotation: t = this.rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: n = !1
  } = {}) {
    return new Dl({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: e,
      rotation: t,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  getAnnotations({
    intent: e = "display"
  } = {}) {
    const {
      renderingIntent: t
    } = this._transport.getRenderingIntent(e);
    return this._transport.getAnnotations(this._pageIndex, t);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return st(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var e;
    return ((e = this._transport._htmlForXfa) == null ? void 0 : e.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: e,
    viewport: t,
    intent: s = "display",
    annotationMode: i = xi.ENABLE,
    transform: n = null,
    background: r = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: d = null,
    isEditing: u = !1
  }) {
    var T, E;
    (T = this._stats) == null || T.time("Overall");
    const f = this._transport.getRenderingIntent(s, i, d, u), {
      renderingIntent: p,
      cacheKey: g
    } = f;
    m(this, ii, !1), y(this, Ze, th).call(this), o || (o = this._transport.getOptionalContentConfig(p));
    let v = this._intentStates.get(g);
    v || (v = /* @__PURE__ */ Object.create(null), this._intentStates.set(g, v)), v.streamReaderCancelTimeout && (clearTimeout(v.streamReaderCancelTimeout), v.streamReaderCancelTimeout = null);
    const w = !!(p & $e.PRINT);
    v.displayReadyCapability || (v.displayReadyCapability = Promise.withResolvers(), v.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (E = this._stats) == null || E.time("Page Request"), this._pumpOperatorList(f));
    const A = (C) => {
      var R;
      v.renderTasks.delete(S), (this._maybeCleanupAfterRender || w) && m(this, ii, !0), y(this, Ze, Cr).call(this, !w), C ? (S.capability.reject(C), this._abortOperatorList({
        intentState: v,
        reason: C instanceof Error ? C : new Error(C)
      })) : S.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (R = globalThis.Stats) != null && R.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, S = new Gc({
      callback: A,
      params: {
        canvasContext: e,
        viewport: t,
        transform: n,
        background: r
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: l,
      operatorList: v.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !w,
      pdfBug: this._pdfBug,
      pageColors: h
    });
    (v.renderTasks || (v.renderTasks = /* @__PURE__ */ new Set())).add(S);
    const x = S.task;
    return Promise.all([v.displayReadyCapability.promise, o]).then(([C, R]) => {
      var I;
      if (this.destroyed) {
        A();
        return;
      }
      if ((I = this._stats) == null || I.time("Rendering"), !(R.renderingIntent & p))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      S.initializeGraphics({
        transparency: C,
        optionalContentConfig: R
      }), S.operatorListChanged();
    }).catch(A), x;
  }
  getOperatorList({
    intent: e = "display",
    annotationMode: t = xi.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var h;
    function n() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const r = this._transport.getRenderingIntent(e, t, s, i, !0);
    let o = this._intentStates.get(r.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(r.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = n, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(r)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: e = !1,
    disableNormalization: t = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: e === !0,
      disableNormalization: t === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(e = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((s) => oo.textContent(s));
    const t = this.streamTextContent(e);
    return new Promise(function(s, i) {
      function n() {
        r.read().then(function({
          value: l,
          done: h
        }) {
          if (h) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), n();
        }, i);
      }
      const r = t.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      n();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const e = [];
    for (const t of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: t,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !t.opListReadCapability)
        for (const s of t.renderTasks)
          e.push(s.completed), s.cancel();
    return this.objs.clear(), m(this, ii, !1), y(this, Ze, th).call(this), Promise.all(e);
  }
  cleanup(e = !1) {
    m(this, ii, !0);
    const t = y(this, Ze, Cr).call(this, !1);
    return e && t && this._stats && (this._stats = new Ud()), t;
  }
  _startRenderPage(e, t) {
    var i, n;
    const s = this._intentStates.get(t);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (n = s.displayReadyCapability) == null || n.resolve(e));
  }
  _renderPageChunk(e, t) {
    for (let s = 0, i = e.length; s < i; s++)
      t.operatorList.fnArray.push(e.fnArray[s]), t.operatorList.argsArray.push(e.argsArray[s]);
    t.operatorList.lastChunk = e.lastChunk, t.operatorList.separateAnnots = e.separateAnnots;
    for (const s of t.renderTasks)
      s.operatorListChanged();
    e.lastChunk && y(this, Ze, Cr).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: e,
    cacheKey: t,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: n,
      transfer: r
    } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: e,
      cacheKey: t,
      annotationStorage: n,
      modifiedIds: i
    }, r).getReader(), h = this._intentStates.get(t);
    h.streamReader = l;
    const d = () => {
      l.read().then(({
        value: u,
        done: f
      }) => {
        if (f) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), d());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const f of h.renderTasks)
              f.operatorListChanged();
            y(this, Ze, Cr).call(this, !0);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(u);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(u);
          else
            throw u;
        }
      });
    };
    d();
  }
  _abortOperatorList({
    intentState: e,
    reason: t,
    force: s = !1
  }) {
    if (e.streamReader) {
      if (e.streamReaderCancelTimeout && (clearTimeout(e.streamReaderCancelTimeout), e.streamReaderCancelTimeout = null), !s) {
        if (e.renderTasks.size > 0)
          return;
        if (t instanceof xd) {
          let i = wg;
          t.extraDelay > 0 && t.extraDelay < 1e3 && (i += t.extraDelay), e.streamReaderCancelTimeout = setTimeout(() => {
            e.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: e,
              reason: t,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (e.streamReader.cancel(new sn(t.message)).catch(() => {
      }), e.streamReader = null, !this._transport.destroyed) {
        for (const [i, n] of this._intentStates)
          if (n === e) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
ji = new WeakMap(), ii = new WeakMap(), Ze = new WeakSet(), Cr = function(e = !1) {
  if (y(this, Ze, th).call(this), !a(this, ii) || this.destroyed)
    return !1;
  if (e)
    return m(this, ji, setTimeout(() => {
      m(this, ji, null), y(this, Ze, Cr).call(this, !1);
    }, Sg)), !1;
  for (const {
    renderTasks: t,
    operatorList: s
  } of this._intentStates.values())
    if (t.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), m(this, ii, !1), !0;
}, th = function() {
  a(this, ji) && (clearTimeout(a(this, ji)), m(this, ji, null));
};
var ni, Fh;
class Lg {
  constructor() {
    b(this, ni, /* @__PURE__ */ new Map());
    b(this, Fh, Promise.resolve());
  }
  postMessage(e, t) {
    const s = {
      data: structuredClone(e, t ? {
        transfer: t
      } : null)
    };
    a(this, Fh).then(() => {
      for (const [i] of a(this, ni))
        i.call(this, s);
    });
  }
  addEventListener(e, t, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const {
        signal: n
      } = s;
      if (n.aborted) {
        X("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const r = () => this.removeEventListener(e, t);
      i = () => n.removeEventListener("abort", r), n.addEventListener("abort", r);
    }
    a(this, ni).set(t, i);
  }
  removeEventListener(e, t) {
    const s = a(this, ni).get(t);
    s == null || s(), a(this, ni).delete(t);
  }
  terminate() {
    for (const [, e] of a(this, ni))
      e == null || e();
    a(this, ni).clear();
  }
}
ni = new WeakMap(), Fh = new WeakMap();
var Nh, jn, Un, na, eh, ra, sh;
const St = class St {
  constructor({
    name: e = null,
    port: t = null,
    verbosity: s = fp()
  } = {}) {
    b(this, na);
    var i;
    if (this.name = e, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, t) {
      if ((i = a(St, Un)) != null && i.has(t))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (a(St, Un) || m(St, Un, /* @__PURE__ */ new WeakMap())).set(t, this), this._initializeFromPort(t);
      return;
    }
    this._initialize();
  }
  get promise() {
    return this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(e) {
    this._port = e, this._messageHandler = new Wa("main", "worker", e), this._messageHandler.on("ready", function() {
    }), y(this, na, eh).call(this);
  }
  _initialize() {
    if (a(St, jn) || a(St, ra, sh)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: e
    } = St;
    try {
      St._isSameOrigin(window.location.href, e) || (e = St._createCDNWrapper(new URL(e, window.location).href));
      const t = new Worker(e, {
        type: "module"
      }), s = new Wa("main", "worker", t), i = () => {
        n.abort(), s.destroy(), t.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, n = new AbortController();
      t.addEventListener("error", () => {
        this._webWorker || i();
      }, {
        signal: n.signal
      }), s.on("test", (o) => {
        if (n.abort(), this.destroyed || !o) {
          i();
          return;
        }
        this._messageHandler = s, this._port = t, this._webWorker = t, y(this, na, eh).call(this);
      }), s.on("ready", (o) => {
        if (n.abort(), this.destroyed) {
          i();
          return;
        }
        try {
          r();
        } catch {
          this._setupFakeWorker();
        }
      });
      const r = () => {
        const o = new Uint8Array();
        s.send("test", o, [o.buffer]);
      };
      r();
      return;
    } catch {
      Xh("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    a(St, jn) || (X("Setting up fake worker."), m(St, jn, !0)), St._setupFakeWorkerGlobal.then((e) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const t = new Lg();
      this._port = t;
      const s = `fake${ue(St, Nh)._++}`, i = new Wa(s + "_worker", s, t);
      e.setup(i, t), this._messageHandler = new Wa(s, s + "_worker", t), y(this, na, eh).call(this);
    }).catch((e) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${e.message}".`));
    });
  }
  destroy() {
    var e, t, s;
    this.destroyed = !0, (e = this._webWorker) == null || e.terminate(), this._webWorker = null, (t = a(St, Un)) == null || t.delete(this._port), this._port = null, (s = this._messageHandler) == null || s.destroy(), this._messageHandler = null;
  }
  static fromPort(e) {
    var s;
    if (!(e != null && e.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const t = (s = a(this, Un)) == null ? void 0 : s.get(e.port);
    if (t) {
      if (t._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return t;
    }
    return new St(e);
  }
  static get workerSrc() {
    if (bi.workerSrc)
      return bi.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return st(this, "_setupFakeWorkerGlobal", (async () => a(this, ra, sh) ? a(this, ra, sh) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Nh = new WeakMap(), jn = new WeakMap(), Un = new WeakMap(), na = new WeakSet(), eh = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, ra = new WeakSet(), sh = function() {
  var e;
  try {
    return ((e = globalThis.pdfjsWorker) == null ? void 0 : e.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, b(St, ra), b(St, Nh, 0), b(St, jn, !1), b(St, Un), ce && (m(St, jn, !0), bi.workerSrc || (bi.workerSrc = "./pdf.worker.mjs")), St._isSameOrigin = (e, t) => {
  let s;
  try {
    if (s = new URL(e), !s.origin || s.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(t, s);
  return s.origin === i.origin;
}, St._createCDNWrapper = (e) => {
  const t = `await import("${e}");`;
  return URL.createObjectURL(new Blob([t], {
    type: "text/javascript"
  }));
};
let Lr = St;
var ri, Os, aa, oa, ai, Gn, Ja;
class Og {
  constructor(e, t, s, i, n) {
    b(this, Gn);
    b(this, ri, /* @__PURE__ */ new Map());
    b(this, Os, /* @__PURE__ */ new Map());
    b(this, aa, /* @__PURE__ */ new Map());
    b(this, oa, /* @__PURE__ */ new Map());
    b(this, ai, null);
    this.messageHandler = e, this.loadingTask = t, this.commonObjs = new hf(), this.fontLoader = new Lp({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return st(this, "annotationStorage", new Pd());
  }
  getRenderingIntent(e, t = xi.ENABLE, s = null, i = !1, n = !1) {
    let r = $e.DISPLAY, o = Mc;
    switch (e) {
      case "any":
        r = $e.ANY;
        break;
      case "display":
        break;
      case "print":
        r = $e.PRINT;
        break;
      default:
        X(`getRenderingIntent - invalid intent: ${e}`);
    }
    const l = r & $e.PRINT && s instanceof Hu ? s : this.annotationStorage;
    switch (t) {
      case xi.DISABLE:
        r += $e.ANNOTATIONS_DISABLE;
        break;
      case xi.ENABLE:
        break;
      case xi.ENABLE_FORMS:
        r += $e.ANNOTATIONS_FORMS;
        break;
      case xi.ENABLE_STORAGE:
        r += $e.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        X(`getRenderingIntent - invalid annotationMode: ${t}`);
    }
    i && (r += $e.IS_EDITING), n && (r += $e.OPLIST);
    const {
      ids: h,
      hash: d
    } = l.modifiedIds, u = [r, o.hash, d];
    return {
      renderingIntent: r,
      cacheKey: u.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = a(this, ai)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const e = [];
    for (const i of a(this, Os).values())
      e.push(i._destroy());
    a(this, Os).clear(), a(this, aa).clear(), a(this, oa).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const t = this.messageHandler.sendWithPromise("Terminate", null);
    return e.push(t), Promise.all(e).then(() => {
      var i, n;
      this.commonObjs.clear(), this.fontLoader.clear(), a(this, ri).clear(), this.filterFactory.destroy(), ao.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new sn("Worker was terminated.")), (n = this.messageHandler) == null || n.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: e,
      loadingTask: t
    } = this;
    e.on("GetReader", (s, i) => {
      Ft(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
        this._lastProgress = {
          loaded: n.loaded,
          total: n.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: n,
          done: r
        }) {
          if (r) {
            i.close();
            return;
          }
          Ft(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [n]);
        }).catch((n) => {
          i.error(n);
        });
      }, i.onCancel = (n) => {
        this._fullReader.cancel(n), i.ready.catch((r) => {
          if (!this.destroyed)
            throw r;
        });
      };
    }), e.on("ReaderHeadersReady", async (s) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: r
      } = this._fullReader;
      return (!i || !n) && (this._lastProgress && ((o = t.onProgress) == null || o.call(t, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = t.onProgress) == null || h.call(t, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: r
      };
    }), e.on("GetRangeReader", (s, i) => {
      Ft(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const n = this._networkStream.getRangeReader(s.begin, s.end);
      if (!n) {
        i.close();
        return;
      }
      i.onPull = () => {
        n.read().then(function({
          value: r,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          Ft(r instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        n.cancel(r), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), e.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, t._capability.resolve(new Mg(s, this));
    }), e.on("DocException", (s) => {
      t._capability.reject(Se(s));
    }), e.on("PasswordRequest", (s) => {
      m(this, ai, Promise.withResolvers());
      try {
        if (!t.onPassword)
          throw Se(s);
        const i = (n) => {
          n instanceof Error ? a(this, ai).reject(n) : a(this, ai).resolve({
            password: n
          });
        };
        t.onPassword(i, s.code);
      } catch (i) {
        a(this, ai).reject(i);
      }
      return a(this, ai).promise;
    }), e.on("DataLoaded", (s) => {
      var i;
      (i = t.onProgress) == null || i.call(t, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), e.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      a(this, Os).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), e.on("commonobj", ([s, i, n]) => {
      var r;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: o,
            fontExtraProperties: l,
            pdfBug: h
          } = this._params;
          if ("error" in n) {
            const p = n.error;
            X(`Error during font loading: ${p}`), this.commonObjs.resolve(s, p);
            break;
          }
          const d = h && ((r = globalThis.FontInspector) != null && r.enabled) ? (p, g) => globalThis.FontInspector.fontAdded(p, g) : null, u = new Op(n, {
            disableFontFace: o,
            fontExtraProperties: l,
            inspectFont: d
          });
          this.fontLoader.bind(u).catch(() => e.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !l && u.data && (u.data = null), this.commonObjs.resolve(s, u);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: f
          } = n;
          Ft(f, "The imageRef must be defined.");
          for (const p of a(this, Os).values())
            for (const [, g] of p.objs)
              if ((g == null ? void 0 : g.ref) === f)
                return g.dataLen ? (this.commonObjs.resolve(s, structuredClone(g)), g.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, n);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), e.on("obj", ([s, i, n, r]) => {
      var l;
      if (this.destroyed)
        return;
      const o = a(this, Os).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = r == null ? void 0 : r.bitmap) == null || l.close();
          return;
        }
        switch (n) {
          case "Image":
            o.objs.resolve(s, r), (r == null ? void 0 : r.dataLen) > lp && (o._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            o.objs.resolve(s, r);
            break;
          default:
            throw new Error(`Got unknown object type ${n}`);
        }
      }
    }), e.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = t.onProgress) == null || i.call(t, {
        loaded: s.loaded,
        total: s.total
      });
    }), e.on("FetchBuiltInCMap", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.cMapReaderFactory)
        throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.cMapReaderFactory.fetch(s);
    }), e.on("FetchStandardFontData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.standardFontDataFactory)
        throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.standardFontDataFactory.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && X("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: e,
      transfer: t
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: e,
      filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null
    }, t).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(e) {
    if (!Number.isInteger(e) || e <= 0 || e > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const t = e - 1, s = a(this, aa).get(t);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: t
    }).then((n) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      n.refStr && a(this, oa).set(n.refStr, e);
      const r = new _g(t, n, this, this._params.pdfBug);
      return a(this, Os).set(t, r), r;
    });
    return a(this, aa).set(t, i), i;
  }
  getPageIndex(e) {
    return su(e) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: e.num,
      gen: e.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(e, t) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: e,
      intent: t
    });
  }
  getFieldObjects() {
    return y(this, Gn, Ja).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return y(this, Gn, Ja).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(e) {
    return typeof e != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: e
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return y(this, Gn, Ja).call(this, "GetDocJSActions");
  }
  getPageJSActions(e) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: e
    });
  }
  getStructTree(e) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: e
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(e) {
    return y(this, Gn, Ja).call(this, "GetOptionalContentConfig").then((t) => new eg(t, e));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const e = "GetMetadata", t = a(this, ri).get(e);
    if (t)
      return t;
    const s = this.messageHandler.sendWithPromise(e, null).then((i) => {
      var n, r;
      return {
        info: i[0],
        metadata: i[1] ? new qp(i[1]) : null,
        contentDispositionFilename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null,
        contentLength: ((r = this._fullReader) == null ? void 0 : r.contentLength) ?? null
      };
    });
    return a(this, ri).set(e, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(e = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const t of a(this, Os).values())
        if (!t.cleanup())
          throw new Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), e || this.fontLoader.clear(), a(this, ri).clear(), this.filterFactory.destroy(!0), ao.cleanup();
    }
  }
  cachedPageNumber(e) {
    if (!su(e))
      return null;
    const t = e.gen === 0 ? `${e.num}R` : `${e.num}R${e.gen}`;
    return a(this, oa).get(t) ?? null;
  }
}
ri = new WeakMap(), Os = new WeakMap(), aa = new WeakMap(), oa = new WeakMap(), ai = new WeakMap(), Gn = new WeakSet(), Ja = function(e, t = null) {
  const s = a(this, ri).get(e);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(e, t);
  return a(this, ri).set(e, i), i;
};
const $a = Symbol("INITIAL_DATA");
var _e, Zo, Uc;
class hf {
  constructor() {
    b(this, Zo);
    b(this, _e, /* @__PURE__ */ Object.create(null));
  }
  get(e, t = null) {
    if (t) {
      const i = y(this, Zo, Uc).call(this, e);
      return i.promise.then(() => t(i.data)), null;
    }
    const s = a(this, _e)[e];
    if (!s || s.data === $a)
      throw new Error(`Requesting object that isn't resolved yet ${e}.`);
    return s.data;
  }
  has(e) {
    const t = a(this, _e)[e];
    return !!t && t.data !== $a;
  }
  delete(e) {
    const t = a(this, _e)[e];
    return !t || t.data === $a ? !1 : (delete a(this, _e)[e], !0);
  }
  resolve(e, t = null) {
    const s = y(this, Zo, Uc).call(this, e);
    s.data = t, s.resolve();
  }
  clear() {
    var e;
    for (const t in a(this, _e)) {
      const {
        data: s
      } = a(this, _e)[t];
      (e = s == null ? void 0 : s.bitmap) == null || e.close();
    }
    m(this, _e, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const e in a(this, _e)) {
      const {
        data: t
      } = a(this, _e)[e];
      t !== $a && (yield [e, t]);
    }
  }
}
_e = new WeakMap(), Zo = new WeakSet(), Uc = function(e) {
  var t;
  return (t = a(this, _e))[e] || (t[e] = {
    ...Promise.withResolvers(),
    data: $a
  });
};
var Ui;
class Dg {
  constructor(e) {
    b(this, Ui, null);
    m(this, Ui, e), this.onContinue = null;
  }
  get promise() {
    return a(this, Ui).capability.promise;
  }
  cancel(e = 0) {
    a(this, Ui).cancel(null, e);
  }
  get separateAnnots() {
    const {
      separateAnnots: e
    } = a(this, Ui).operatorList;
    if (!e)
      return !1;
    const {
      annotationCanvasMap: t
    } = a(this, Ui);
    return e.form || e.canvas && (t == null ? void 0 : t.size) > 0;
  }
}
Ui = new WeakMap();
var Gi, zn;
const dn = class dn {
  constructor({
    callback: e,
    params: t,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: n,
    operatorList: r,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: d = !1,
    pdfBug: u = !1,
    pageColors: f = null
  }) {
    b(this, Gi, null);
    this.callback = e, this.params = t, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = r, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = f, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Dg(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = t.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: e = !1,
    optionalContentConfig: t
  }) {
    var o, l;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (a(dn, zn).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      a(dn, zn).add(this._canvas);
    }
    this._pdfBug && ((o = globalThis.StepperManager) != null && o.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: n,
      background: r
    } = this.params;
    this.gfx = new _r(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: t
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: n,
      viewport: i,
      transparency: e,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (l = this.graphicsReadyCallback) == null || l.call(this);
  }
  cancel(e = null, t = 0) {
    var s;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), a(this, Gi) && (window.cancelAnimationFrame(a(this, Gi)), m(this, Gi, null)), a(dn, zn).delete(this._canvas), this.callback(e || new xd(`Rendering cancelled, page ${this._pageIndex + 1}`, t));
  }
  operatorListChanged() {
    var e;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (e = this.stepper) == null || e.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? m(this, Gi, window.requestAnimationFrame(() => {
      m(this, Gi, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), a(dn, zn).delete(this._canvas), this.callback())));
  }
};
Gi = new WeakMap(), zn = new WeakMap(), b(dn, zn, /* @__PURE__ */ new WeakSet());
let Gc = dn;
const kg = "4.10.38", Fg = "f9bea397f";
rt(670);
function iu(c) {
  return Math.floor(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, "0");
}
function ja(c) {
  return Math.max(0, Math.min(255, 255 * c));
}
class nu {
  static CMYK_G([e, t, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * e + 0.59 * s + 0.11 * t + i)];
  }
  static G_CMYK([e]) {
    return ["CMYK", 0, 0, 0, 1 - e];
  }
  static G_RGB([e]) {
    return ["RGB", e, e, e];
  }
  static G_rgb([e]) {
    return e = ja(e), [e, e, e];
  }
  static G_HTML([e]) {
    const t = iu(e);
    return `#${t}${t}${t}`;
  }
  static RGB_G([e, t, s]) {
    return ["G", 0.3 * e + 0.59 * t + 0.11 * s];
  }
  static RGB_rgb(e) {
    return e.map(ja);
  }
  static RGB_HTML(e) {
    return `#${e.map(iu).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([e, t, s, i]) {
    return ["RGB", 1 - Math.min(1, e + i), 1 - Math.min(1, s + i), 1 - Math.min(1, t + i)];
  }
  static CMYK_rgb([e, t, s, i]) {
    return [ja(1 - Math.min(1, e + i)), ja(1 - Math.min(1, s + i)), ja(1 - Math.min(1, t + i))];
  }
  static CMYK_HTML(e) {
    const t = this.CMYK_RGB(e).slice(1);
    return this.RGB_HTML(t);
  }
  static RGB_CMYK([e, t, s]) {
    const i = 1 - e, n = 1 - t, r = 1 - s, o = Math.min(i, n, r);
    return ["CMYK", i, n, r, o];
  }
}
class Ng {
  create(e, t, s = !1) {
    if (e <= 0 || t <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${e}px`), i.setAttribute("height", `${t}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${e} ${t}`), i;
  }
  createElement(e) {
    if (typeof e != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(e);
  }
  _createSVG(e) {
    bt("Abstract method `_createSVG` called.");
  }
}
class Md extends Ng {
  _createSVG(e) {
    return document.createElementNS(Us, e);
  }
}
class cf {
  static setupStorage(e, t, s, i, n) {
    const r = i.getValue(t, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (r.value !== null && (e.textContent = r.value), n === "print")
          break;
        e.addEventListener("input", (o) => {
          i.setValue(t, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (r.value === s.attributes.xfaOn ? e.setAttribute("checked", !0) : r.value === s.attributes.xfaOff && e.removeAttribute("checked"), n === "print")
            break;
          e.addEventListener("change", (o) => {
            i.setValue(t, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (r.value !== null && e.setAttribute("value", r.value), n === "print")
            break;
          e.addEventListener("input", (o) => {
            i.setValue(t, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (r.value !== null) {
          e.setAttribute("value", r.value);
          for (const o of s.children)
            o.attributes.value === r.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        e.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          i.setValue(t, {
            value: h
          });
        });
        break;
    }
  }
  static setAttributes({
    html: e,
    element: t,
    storage: s = null,
    intent: i,
    linkService: n
  }) {
    const {
      attributes: r
    } = t, o = e instanceof HTMLAnchorElement;
    r.type === "radio" && (r.name = `${r.name}-${i}`);
    for (const [l, h] of Object.entries(r))
      if (h != null)
        switch (l) {
          case "class":
            h.length && e.setAttribute(l, h.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            e.setAttribute("data-element-id", h);
            break;
          case "style":
            Object.assign(e.style, h);
            break;
          case "textContent":
            e.textContent = h;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && e.setAttribute(l, h);
        }
    o && n.addLinkAttributes(e, r.href, r.newWindow), s && r.dataId && this.setupStorage(e, r.dataId, t, s);
  }
  static render(e) {
    var u, f;
    const t = e.annotationStorage, s = e.linkService, i = e.xfaHtml, n = e.intent || "display", r = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: r,
      element: i,
      intent: n,
      linkService: s
    });
    const o = n !== "richText", l = e.div;
    if (l.append(r), e.viewport) {
      const p = `matrix(${e.viewport.transform.join(",")})`;
      l.style.transform = p;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const p = document.createTextNode(i.value);
        r.append(p), o && oo.shouldBuildText(i.name) && h.push(p);
      }
      return {
        textDivs: h
      };
    }
    const d = [[i, -1, r]];
    for (; d.length > 0; ) {
      const [p, g, v] = d.at(-1);
      if (g + 1 === p.children.length) {
        d.pop();
        continue;
      }
      const w = p.children[++d.at(-1)[1]];
      if (w === null)
        continue;
      const {
        name: A
      } = w;
      if (A === "#text") {
        const x = document.createTextNode(w.value);
        h.push(x), v.append(x);
        continue;
      }
      const S = (u = w == null ? void 0 : w.attributes) != null && u.xmlns ? document.createElementNS(w.attributes.xmlns, A) : document.createElement(A);
      if (v.append(S), w.attributes && this.setAttributes({
        html: S,
        element: w,
        storage: t,
        intent: n,
        linkService: s
      }), ((f = w.children) == null ? void 0 : f.length) > 0)
        d.push([w, -1, S]);
      else if (w.value) {
        const x = document.createTextNode(w.value);
        o && oo.shouldBuildText(A) && h.push(x), S.append(x);
      }
    }
    for (const p of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      p.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(e) {
    const t = `matrix(${e.viewport.transform.join(",")})`;
    e.div.style.transform = t, e.div.hidden = !1;
  }
}
const Fl = 1e3, Bg = 9, br = /* @__PURE__ */ new WeakSet();
function en(c) {
  return {
    width: c[2] - c[0],
    height: c[3] - c[1]
  };
}
class Hg {
  static create(e) {
    switch (e.data.annotationType) {
      case Bt.LINK:
        return new df(e);
      case Bt.TEXT:
        return new $g(e);
      case Bt.WIDGET:
        switch (e.data.fieldType) {
          case "Tx":
            return new jg(e);
          case "Btn":
            return e.data.radioButton ? new pf(e) : e.data.checkBox ? new Gg(e) : new zg(e);
          case "Ch":
            return new Vg(e);
          case "Sig":
            return new Ug(e);
        }
        return new Ar(e);
      case Bt.POPUP:
        return new Vc(e);
      case Bt.FREETEXT:
        return new yf(e);
      case Bt.LINE:
        return new Xg(e);
      case Bt.SQUARE:
        return new Yg(e);
      case Bt.CIRCLE:
        return new Kg(e);
      case Bt.POLYLINE:
        return new Af(e);
      case Bt.CARET:
        return new Jg(e);
      case Bt.INK:
        return new _d(e);
      case Bt.POLYGON:
        return new Qg(e);
      case Bt.HIGHLIGHT:
        return new wf(e);
      case Bt.UNDERLINE:
        return new Zg(e);
      case Bt.SQUIGGLY:
        return new qg(e);
      case Bt.STRIKEOUT:
        return new tm(e);
      case Bt.STAMP:
        return new Sf(e);
      case Bt.FILEATTACHMENT:
        return new em(e);
      default:
        return new Dt(e);
    }
  }
}
var Vn, la, ha, qo, zc;
const kd = class kd {
  constructor(e, {
    isRenderable: t = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    b(this, qo);
    b(this, Vn, null);
    b(this, la, !1);
    b(this, ha, null);
    this.isRenderable = t, this.data = e.data, this.layer = e.layer, this.linkService = e.linkService, this.downloadManager = e.downloadManager, this.imageResourcesPath = e.imageResourcesPath, this.renderForms = e.renderForms, this.svgFactory = e.svgFactory, this.annotationStorage = e.annotationStorage, this.enableScripting = e.enableScripting, this.hasJSActions = e.hasJSActions, this._fieldObjects = e.fieldObjects, this.parent = e.parent, t && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: e,
    contentsObj: t,
    richText: s
  }) {
    return !!(e != null && e.str || t != null && t.str || s != null && s.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return kd._hasPopupData(this.data);
  }
  updateEdited(e) {
    var s;
    if (!this.container)
      return;
    a(this, Vn) || m(this, Vn, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: t
    } = e;
    t && y(this, qo, zc).call(this, t), (s = a(this, ha)) == null || s.popup.updateEdited(e);
  }
  resetEdited() {
    var e;
    a(this, Vn) && (y(this, qo, zc).call(this, a(this, Vn).rect), (e = a(this, ha)) == null || e.popup.resetEdited(), m(this, Vn, null));
  }
  _createContainer(e) {
    const {
      data: t,
      parent: {
        page: s,
        viewport: i
      }
    } = this, n = document.createElement("section");
    n.setAttribute("data-annotation-id", t.id), this instanceof Ar || (n.tabIndex = Fl);
    const {
      style: r
    } = n;
    if (r.zIndex = this.parent.zIndex++, t.alternativeText && (n.title = t.alternativeText), t.noRotate && n.classList.add("norotate"), !t.rect || this instanceof Vc) {
      const {
        rotation: v
      } = t;
      return !t.hasOwnCanvas && v !== 0 && this.setRotation(v, n), n;
    }
    const {
      width: o,
      height: l
    } = en(t.rect);
    if (!e && t.borderStyle.width > 0) {
      r.borderWidth = `${t.borderStyle.width}px`;
      const v = t.borderStyle.horizontalCornerRadius, w = t.borderStyle.verticalCornerRadius;
      if (v > 0 || w > 0) {
        const S = `calc(${v}px * var(--scale-factor)) / calc(${w}px * var(--scale-factor))`;
        r.borderRadius = S;
      } else if (this instanceof pf) {
        const S = `calc(${o}px * var(--scale-factor)) / calc(${l}px * var(--scale-factor))`;
        r.borderRadius = S;
      }
      switch (t.borderStyle.style) {
        case Ba.SOLID:
          r.borderStyle = "solid";
          break;
        case Ba.DASHED:
          r.borderStyle = "dashed";
          break;
        case Ba.BEVELED:
          X("Unimplemented border style: beveled");
          break;
        case Ba.INSET:
          X("Unimplemented border style: inset");
          break;
        case Ba.UNDERLINE:
          r.borderBottomStyle = "solid";
          break;
      }
      const A = t.borderColor || null;
      A ? (m(this, la, !0), r.borderColor = U.makeHexColor(A[0] | 0, A[1] | 0, A[2] | 0)) : r.borderWidth = 0;
    }
    const h = U.normalizeRect([t.rect[0], s.view[3] - t.rect[1] + s.view[1], t.rect[2], s.view[3] - t.rect[3] + s.view[1]]), {
      pageWidth: d,
      pageHeight: u,
      pageX: f,
      pageY: p
    } = i.rawDims;
    r.left = `${100 * (h[0] - f) / d}%`, r.top = `${100 * (h[1] - p) / u}%`;
    const {
      rotation: g
    } = t;
    return t.hasOwnCanvas || g === 0 ? (r.width = `${100 * o / d}%`, r.height = `${100 * l / u}%`) : this.setRotation(g, n), n;
  }
  setRotation(e, t = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: n,
      height: r
    } = en(this.data.rect);
    let o, l;
    e % 180 === 0 ? (o = 100 * n / s, l = 100 * r / i) : (o = 100 * r / s, l = 100 * n / i), t.style.width = `${o}%`, t.style.height = `${l}%`, t.setAttribute("data-main-rotation", (360 - e) % 360);
  }
  get _commonActions() {
    const e = (t, s, i) => {
      const n = i.detail[t], r = n[0], o = n.slice(1);
      i.target.style[s] = nu[`${r}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: nu[`${r}_rgb`](o)
      });
    };
    return st(this, "_commonActions", {
      display: (t) => {
        const {
          display: s
        } = t.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      },
      print: (t) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !t.detail.print
        });
      },
      hidden: (t) => {
        const {
          hidden: s
        } = t.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (t) => {
        setTimeout(() => t.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (t) => {
        t.target.title = t.detail.userName;
      },
      readonly: (t) => {
        t.target.disabled = t.detail.readonly;
      },
      required: (t) => {
        this._setRequired(t.target, t.detail.required);
      },
      bgColor: (t) => {
        e("bgColor", "backgroundColor", t);
      },
      fillColor: (t) => {
        e("fillColor", "backgroundColor", t);
      },
      fgColor: (t) => {
        e("fgColor", "color", t);
      },
      textColor: (t) => {
        e("textColor", "color", t);
      },
      borderColor: (t) => {
        e("borderColor", "borderColor", t);
      },
      strokeColor: (t) => {
        e("strokeColor", "borderColor", t);
      },
      rotation: (t) => {
        const s = t.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(e, t) {
    const s = this._commonActions;
    for (const i of Object.keys(t.detail)) {
      const n = e[i] || s[i];
      n == null || n(t);
    }
  }
  _setDefaultPropertiesFromJS(e) {
    if (!this.enableScripting)
      return;
    const t = this.annotationStorage.getRawValue(this.data.id);
    if (!t)
      return;
    const s = this._commonActions;
    for (const [i, n] of Object.entries(t)) {
      const r = s[i];
      if (r) {
        const o = {
          detail: {
            [i]: n
          },
          target: e
        };
        r(o), delete t[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: e
    } = this.data;
    if (!e)
      return;
    const [t, s, i, n] = this.data.rect.map((v) => Math.fround(v));
    if (e.length === 8) {
      const [v, w, A, S] = e.subarray(2, 6);
      if (i === v && n === w && t === A && s === S)
        return;
    }
    const {
      style: r
    } = this.container;
    let o;
    if (a(this, la)) {
      const {
        borderColor: v,
        borderWidth: w
      } = r;
      r.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${v}" stroke-width="${w}">`], this.container.classList.add("hasBorder");
    }
    const l = i - t, h = n - s, {
      svgFactory: d
    } = this, u = d.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0);
    const f = d.createElement("defs");
    u.append(f);
    const p = d.createElement("clipPath"), g = `clippath_${this.data.id}`;
    p.setAttribute("id", g), p.setAttribute("clipPathUnits", "objectBoundingBox"), f.append(p);
    for (let v = 2, w = e.length; v < w; v += 8) {
      const A = e[v], S = e[v + 1], x = e[v + 2], T = e[v + 3], E = d.createElement("rect"), C = (x - t) / l, R = (n - S) / h, I = (A - x) / l, P = (S - T) / h;
      E.setAttribute("x", C), E.setAttribute("y", R), E.setAttribute("width", I), E.setAttribute("height", P), p.append(E), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${C}" y="${R}" width="${I}" height="${P}"/>`);
    }
    a(this, la) && (o.push("</g></svg>')"), r.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${g})`;
  }
  _createPopup() {
    const {
      data: e
    } = this, t = m(this, ha, new Vc({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: e.modificationDate,
        contentsObj: e.contentsObj,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(t.render());
  }
  render() {
    bt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(e, t = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[e];
      if (i)
        for (const {
          page: n,
          id: r,
          exportValues: o
        } of i) {
          if (n === -1 || r === t)
            continue;
          const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${r}"]`);
          if (h && !br.has(h)) {
            X(`_getElementsByName - element not allowed: ${r}`);
            continue;
          }
          s.push({
            id: r,
            exportValue: l,
            domElement: h
          });
        }
      return s;
    }
    for (const i of document.getElementsByName(e)) {
      const {
        exportValue: n
      } = i, r = i.getAttribute("data-element-id");
      r !== t && br.has(i) && s.push({
        id: r,
        exportValue: n,
        domElement: i
      });
    }
    return s;
  }
  show() {
    var e;
    this.container && (this.container.hidden = !1), (e = this.popup) == null || e.maybeShow();
  }
  hide() {
    var e;
    this.container && (this.container.hidden = !0), (e = this.popup) == null || e.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const e = this.getElementsToTriggerPopup();
    if (Array.isArray(e))
      for (const t of e)
        t.classList.add("highlightArea");
    else
      e.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: e,
      data: {
        id: t
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
        source: this,
        mode: e,
        editId: t
      });
    });
  }
};
Vn = new WeakMap(), la = new WeakMap(), ha = new WeakMap(), qo = new WeakSet(), zc = function(e) {
  const {
    container: {
      style: t
    },
    data: {
      rect: s,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: n,
          pageHeight: r,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...e);
  const {
    width: h,
    height: d
  } = en(e);
  t.left = `${100 * (e[0] - o) / n}%`, t.top = `${100 * (r - e[3] + l) / r}%`, i === 0 ? (t.width = `${100 * h / n}%`, t.height = `${100 * d / r}%`) : this.setRotation(i);
};
let Dt = kd;
var je, on, uf, ff;
class df extends Dt {
  constructor(t, s = null) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    b(this, je);
    this.isTooltipOnly = t.data.isTooltipOnly;
  }
  render() {
    const {
      data: t,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", t.id);
    let n = !1;
    return t.url ? (s.addLinkAttributes(i, t.url, t.newWindow), n = !0) : t.action ? (this._bindNamedAction(i, t.action), n = !0) : t.attachment ? (y(this, je, uf).call(this, i, t.attachment, t.attachmentDest), n = !0) : t.setOCGState ? (y(this, je, ff).call(this, i, t.setOCGState), n = !0) : t.dest ? (this._bindLink(i, t.dest), n = !0) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, t), n = !0), t.resetForm ? (this._bindResetFormAction(i, t.resetForm), n = !0) : this.isTooltipOnly && !n && (this._bindLink(i, ""), n = !0)), this.container.classList.add("linkAnnotation"), n && this.container.append(i), this.container;
  }
  _bindLink(t, s) {
    t.href = this.linkService.getDestinationHash(s), t.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && y(this, je, on).call(this);
  }
  _bindNamedAction(t, s) {
    t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(s), !1), y(this, je, on).call(this);
  }
  _bindJSAction(t, s) {
    t.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const n of Object.keys(s.actions)) {
      const r = i.get(n);
      r && (t[r] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: s.id,
            name: n
          }
        }), !1;
      });
    }
    t.onclick || (t.onclick = () => !1), y(this, je, on).call(this);
  }
  _bindResetFormAction(t, s) {
    const i = t.onclick;
    if (i || (t.href = this.linkService.getAnchorUrl("")), y(this, je, on).call(this), !this._fieldObjects) {
      X('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (t.onclick = () => !1);
      return;
    }
    t.onclick = () => {
      var u;
      i == null || i();
      const {
        fields: n,
        refs: r,
        include: o
      } = s, l = [];
      if (n.length !== 0 || r.length !== 0) {
        const f = new Set(r);
        for (const p of n) {
          const g = this._fieldObjects[p] || [];
          for (const {
            id: v
          } of g)
            f.add(v);
        }
        for (const p of Object.values(this._fieldObjects))
          for (const g of p)
            f.has(g.id) === o && l.push(g);
      } else
        for (const f of Object.values(this._fieldObjects))
          l.push(...f);
      const h = this.annotationStorage, d = [];
      for (const f of l) {
        const {
          id: p
        } = f;
        switch (d.push(p), f.type) {
          case "text": {
            const v = f.defaultValue || "";
            h.setValue(p, {
              value: v
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const v = f.defaultValue === f.exportValues;
            h.setValue(p, {
              value: v
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const v = f.defaultValue || "";
            h.setValue(p, {
              value: v
            });
            break;
          }
          default:
            continue;
        }
        const g = document.querySelector(`[data-element-id="${p}"]`);
        if (g) {
          if (!br.has(g)) {
            X(`_bindResetFormAction - element not allowed: ${p}`);
            continue;
          }
        } else continue;
        g.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: d,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
je = new WeakSet(), on = function() {
  this.container.setAttribute("data-internal-link", "");
}, uf = function(t, s, i = null) {
  t.href = this.linkService.getAnchorUrl(""), s.description && (t.title = s.description), t.onclick = () => {
    var n;
    return (n = this.downloadManager) == null || n.openOrDownloadData(s.content, s.filename, i), !1;
  }, y(this, je, on).call(this);
}, ff = function(t, s) {
  t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(s), !1), y(this, je, on).call(this);
};
class $g extends Dt {
  constructor(e) {
    super(e, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const e = document.createElement("img");
    return e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", e.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), e.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(e), this.container;
  }
}
class Ar extends Dt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(e) {
    var t;
    this.data.hasOwnCanvas && (((t = e.previousSibling) == null ? void 0 : t.nodeName) === "CANVAS" && (e.previousSibling.hidden = !0), e.hidden = !1);
  }
  _getKeyModifier(e) {
    return be.platform.isMac ? e.metaKey : e.ctrlKey;
  }
  _setEventListener(e, t, s, i, n) {
    s.includes("mouse") ? e.addEventListener(s, (r) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(r),
          shift: r.shiftKey,
          modifier: this._getKeyModifier(r)
        }
      });
    }) : e.addEventListener(s, (r) => {
      var o;
      if (s === "blur") {
        if (!t.focused || !r.relatedTarget)
          return;
        t.focused = !1;
      } else if (s === "focus") {
        if (t.focused)
          return;
        t.focused = !0;
      }
      n && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: n(r)
        }
      }));
    });
  }
  _setEventListeners(e, t, s, i) {
    var n, r, o;
    for (const [l, h] of s)
      (h === "Action" || (n = this.data.actions) != null && n[h]) && ((h === "Focus" || h === "Blur") && (t || (t = {
        focused: !1
      })), this._setEventListener(e, t, l, h, i), h === "Focus" && !((r = this.data.actions) != null && r.Blur) ? this._setEventListener(e, t, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(e, t, "focus", "Focus", null));
  }
  _setBackgroundColor(e) {
    const t = this.data.backgroundColor || null;
    e.style.backgroundColor = t === null ? "transparent" : U.makeHexColor(t[0], t[1], t[2]);
  }
  _setTextStyle(e) {
    const t = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Bg, n = e.style;
    let r;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), d = Math.round(h / (ec * i)) || 1, u = h / d;
      r = Math.min(i, l(u / ec));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      r = Math.min(i, l(h / ec));
    }
    n.fontSize = `calc(${r}px * var(--scale-factor))`, n.color = U.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = t[this.data.textAlignment]);
  }
  _setRequired(e, t) {
    t ? e.setAttribute("required", !0) : e.removeAttribute("required"), e.setAttribute("aria-required", t);
  }
}
class jg extends Ar {
  constructor(e) {
    const t = e.renderForms || e.data.hasOwnCanvas || !e.data.hasAppearance && !!e.data.fieldValue;
    super(e, {
      isRenderable: t
    });
  }
  setPropertyOnSiblings(e, t, s, i) {
    const n = this.annotationStorage;
    for (const r of this._getElementsByName(e.name, e.id))
      r.domElement && (r.domElement[t] = s), n.setValue(r.id, {
        [i]: s
      });
  }
  render() {
    var i, n;
    const e = this.annotationStorage, t = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const r = e.getValue(t, {
        value: this.data.fieldValue
      });
      let o = r.value || "";
      const l = e.getValue(t, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = r.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const d = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), br.add(s), s.setAttribute("data-element-id", t), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Fl, this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (f) => {
        e.setValue(t, {
          value: f.target.value
        }), this.setPropertyOnSiblings(s, "value", f.target.value, "value"), d.formattedValue = null;
      }), s.addEventListener("resetform", (f) => {
        const p = this.data.defaultFieldValue ?? "";
        s.value = d.userValue = p, d.formattedValue = null;
      });
      let u = (f) => {
        const {
          formattedValue: p
        } = d;
        p != null && (f.target.value = p), f.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (p) => {
          var v;
          if (d.focused)
            return;
          const {
            target: g
          } = p;
          d.userValue && (g.value = d.userValue), d.lastCommittedValue = g.value, d.commitKey = 1, (v = this.data.actions) != null && v.Focus || (d.focused = !0);
        }), s.addEventListener("updatefromsandbox", (p) => {
          this.showElementAndHideCanvas(p.target);
          const g = {
            value(v) {
              d.userValue = v.detail.value ?? "", e.setValue(t, {
                value: d.userValue.toString()
              }), v.target.value = d.userValue;
            },
            formattedValue(v) {
              const {
                formattedValue: w
              } = v.detail;
              d.formattedValue = w, w != null && v.target !== document.activeElement && (v.target.value = w), e.setValue(t, {
                formattedValue: w
              });
            },
            selRange(v) {
              v.target.setSelectionRange(...v.detail.selRange);
            },
            charLimit: (v) => {
              var x;
              const {
                charLimit: w
              } = v.detail, {
                target: A
              } = v;
              if (w === 0) {
                A.removeAttribute("maxLength");
                return;
              }
              A.setAttribute("maxLength", w);
              let S = d.userValue;
              !S || S.length <= w || (S = S.slice(0, w), A.value = d.userValue = S, e.setValue(t, {
                value: S
              }), (x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: t,
                  name: "Keystroke",
                  value: S,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: A.selectionStart,
                  selEnd: A.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(g, p);
        }), s.addEventListener("keydown", (p) => {
          var w;
          d.commitKey = 1;
          let g = -1;
          if (p.key === "Escape" ? g = 0 : p.key === "Enter" && !this.data.multiLine ? g = 2 : p.key === "Tab" && (d.commitKey = 3), g === -1)
            return;
          const {
            value: v
          } = p.target;
          d.lastCommittedValue !== v && (d.lastCommittedValue = v, d.userValue = v, (w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: t,
              name: "Keystroke",
              value: v,
              willCommit: !0,
              commitKey: g,
              selStart: p.target.selectionStart,
              selEnd: p.target.selectionEnd
            }
          }));
        });
        const f = u;
        u = null, s.addEventListener("blur", (p) => {
          var v, w;
          if (!d.focused || !p.relatedTarget)
            return;
          (v = this.data.actions) != null && v.Blur || (d.focused = !1);
          const {
            value: g
          } = p.target;
          d.userValue = g, d.lastCommittedValue !== g && ((w = this.linkService.eventBus) == null || w.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: t,
              name: "Keystroke",
              value: g,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: p.target.selectionStart,
              selEnd: p.target.selectionEnd
            }
          })), f(p);
        }), (n = this.data.actions) != null && n.Keystroke && s.addEventListener("beforeinput", (p) => {
          var E;
          d.lastCommittedValue = null;
          const {
            data: g,
            target: v
          } = p, {
            value: w,
            selectionStart: A,
            selectionEnd: S
          } = v;
          let x = A, T = S;
          switch (p.inputType) {
            case "deleteWordBackward": {
              const C = w.substring(0, A).match(/\w*[^\w]*$/);
              C && (x -= C[0].length);
              break;
            }
            case "deleteWordForward": {
              const C = w.substring(A).match(/^[^\w]*\w*/);
              C && (T += C[0].length);
              break;
            }
            case "deleteContentBackward":
              A === S && (x -= 1);
              break;
            case "deleteContentForward":
              A === S && (T += 1);
              break;
          }
          p.preventDefault(), (E = this.linkService.eventBus) == null || E.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: t,
              name: "Keystroke",
              value: w,
              change: g || "",
              willCommit: !1,
              selStart: x,
              selEnd: T
            }
          });
        }), this._setEventListeners(s, d, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (p) => p.target.value);
      }
      if (u && s.addEventListener("blur", u), this.data.comb) {
        const p = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${p}px * var(--scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class Ug extends Ar {
  constructor(e) {
    super(e, {
      isRenderable: !!e.data.hasOwnCanvas
    });
  }
}
class Gg extends Ar {
  constructor(e) {
    super(e, {
      isRenderable: e.renderForms
    });
  }
  render() {
    const e = this.annotationStorage, t = this.data, s = t.id;
    let i = e.getValue(s, {
      value: t.exportValue === t.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", e.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const n = document.createElement("input");
    return br.add(n), n.setAttribute("data-element-id", s), n.disabled = t.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = t.fieldName, i && n.setAttribute("checked", !0), n.setAttribute("exportValue", t.exportValue), n.tabIndex = Fl, n.addEventListener("change", (r) => {
      const {
        name: o,
        checked: l
      } = r.target;
      for (const h of this._getElementsByName(o, s)) {
        const d = l && h.exportValue === t.exportValue;
        h.domElement && (h.domElement.checked = d), e.setValue(h.id, {
          value: d
        });
      }
      e.setValue(s, {
        value: l
      });
    }), n.addEventListener("resetform", (r) => {
      const o = t.defaultFieldValue || "Off";
      r.target.checked = o === t.exportValue;
    }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (r) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", e.setValue(s, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, r);
    }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (r) => r.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class pf extends Ar {
  constructor(e) {
    super(e, {
      isRenderable: e.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const e = this.annotationStorage, t = this.data, s = t.id;
    let i = e.getValue(s, {
      value: t.fieldValue === t.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== t.buttonValue, e.setValue(s, {
      value: i
    })), i)
      for (const r of this._getElementsByName(t.fieldName, s))
        e.setValue(r.id, {
          value: !1
        });
    const n = document.createElement("input");
    if (br.add(n), n.setAttribute("data-element-id", s), n.disabled = t.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = t.fieldName, i && n.setAttribute("checked", !0), n.tabIndex = Fl, n.addEventListener("change", (r) => {
      const {
        name: o,
        checked: l
      } = r.target;
      for (const h of this._getElementsByName(o, s))
        e.setValue(h.id, {
          value: !1
        });
      e.setValue(s, {
        value: l
      });
    }), n.addEventListener("resetform", (r) => {
      const o = t.defaultFieldValue;
      r.target.checked = o != null && o === t.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const r = t.buttonValue;
      n.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const d = r === h.detail.value;
            for (const u of this._getElementsByName(h.target.name)) {
              const f = d && u.id === s;
              u.domElement && (u.domElement.checked = f), e.setValue(u.id, {
                value: f
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class zg extends df {
  constructor(e) {
    super(e, {
      ignoreBorder: e.data.hasAppearance
    });
  }
  render() {
    const e = super.render();
    e.classList.add("buttonWidgetAnnotation", "pushButton");
    const t = e.lastChild;
    return this.enableScripting && this.hasJSActions && t && (this._setDefaultPropertiesFromJS(t), t.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), e;
  }
}
class Vg extends Ar {
  constructor(e) {
    super(e, {
      isRenderable: e.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const e = this.annotationStorage, t = this.data.id, s = e.getValue(t, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    br.add(i), i.setAttribute("data-element-id", t), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Fl;
    let n = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (d) => {
      const u = this.data.defaultFieldValue;
      for (const f of i.options)
        f.selected = f.value === u;
    });
    for (const d of this.data.options) {
      const u = document.createElement("option");
      u.textContent = d.displayValue, u.value = d.exportValue, s.value.includes(d.exportValue) && (u.setAttribute("selected", !0), n = !1), i.append(u);
    }
    let r = null;
    if (n) {
      const d = document.createElement("option");
      d.value = " ", d.setAttribute("hidden", !0), d.setAttribute("selected", !0), i.prepend(d), r = () => {
        d.remove(), i.removeEventListener("input", r), r = null;
      }, i.addEventListener("input", r);
    }
    const o = (d) => {
      const u = d ? "value" : "textContent", {
        options: f,
        multiple: p
      } = i;
      return p ? Array.prototype.filter.call(f, (g) => g.selected).map((g) => g[u]) : f.selectedIndex === -1 ? null : f[f.selectedIndex][u];
    };
    let l = o(!1);
    const h = (d) => {
      const u = d.target.options;
      return Array.prototype.map.call(u, (f) => ({
        displayValue: f.textContent,
        exportValue: f.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (d) => {
      const u = {
        value(f) {
          r == null || r();
          const p = f.detail.value, g = new Set(Array.isArray(p) ? p : [p]);
          for (const v of i.options)
            v.selected = g.has(v.value);
          e.setValue(t, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(f) {
          i.multiple = !0;
        },
        remove(f) {
          const p = i.options, g = f.detail.remove;
          p[g].selected = !1, i.remove(g), p.length > 0 && Array.prototype.findIndex.call(p, (w) => w.selected) === -1 && (p[0].selected = !0), e.setValue(t, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        clear(f) {
          for (; i.length !== 0; )
            i.remove(0);
          e.setValue(t, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(f) {
          const {
            index: p,
            displayValue: g,
            exportValue: v
          } = f.detail.insert, w = i.children[p], A = document.createElement("option");
          A.textContent = g, A.value = v, w ? w.before(A) : i.append(A), e.setValue(t, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        items(f) {
          const {
            items: p
          } = f.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const g of p) {
            const {
              displayValue: v,
              exportValue: w
            } = g, A = document.createElement("option");
            A.textContent = v, A.value = w, i.append(A);
          }
          i.options.length > 0 && (i.options[0].selected = !0), e.setValue(t, {
            value: o(!0),
            items: h(f)
          }), l = o(!1);
        },
        indices(f) {
          const p = new Set(f.detail.indices);
          for (const g of f.target.options)
            g.selected = p.has(g.index);
          e.setValue(t, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(f) {
          f.target.disabled = !f.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, d);
    }), i.addEventListener("input", (d) => {
      var p;
      const u = o(!0), f = o(!1);
      e.setValue(t, {
        value: u
      }), d.preventDefault(), (p = this.linkService.eventBus) == null || p.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: t,
          name: "Keystroke",
          value: l,
          change: f,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (d) => d.target.value)) : i.addEventListener("input", function(d) {
      e.setValue(t, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class Vc extends Dt {
  constructor(e) {
    const {
      data: t,
      elements: s
    } = e;
    super(e, {
      isRenderable: Dt._hasPopupData(t)
    }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const e = this.popup = new Wg({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), t = [];
    for (const s of this.elements)
      s.popup = e, s.container.ariaHasPopup = "dialog", t.push(s.data.id), s.addHighlightArea();
    return this.container.setAttribute("aria-controls", t.map((s) => `${Ed}${s}`).join(",")), this.container;
  }
}
var ca, Bh, Hh, da, Wn, _t, oi, ua, tl, el, fa, li, os, hi, sl, ci, il, Xn, Yn, pt, ih, Wc, gf, mf, vf, bf, nh, rh, Xc;
class Wg {
  constructor({
    container: e,
    color: t,
    elements: s,
    titleObj: i,
    modificationDate: n,
    contentsObj: r,
    richText: o,
    parent: l,
    rect: h,
    parentRect: d,
    open: u
  }) {
    b(this, pt);
    b(this, ca, y(this, pt, vf).bind(this));
    b(this, Bh, y(this, pt, Xc).bind(this));
    b(this, Hh, y(this, pt, rh).bind(this));
    b(this, da, y(this, pt, nh).bind(this));
    b(this, Wn, null);
    b(this, _t, null);
    b(this, oi, null);
    b(this, ua, null);
    b(this, tl, null);
    b(this, el, null);
    b(this, fa, null);
    b(this, li, !1);
    b(this, os, null);
    b(this, hi, null);
    b(this, sl, null);
    b(this, ci, null);
    b(this, il, null);
    b(this, Xn, null);
    b(this, Yn, !1);
    var f;
    m(this, _t, e), m(this, il, i), m(this, oi, r), m(this, ci, o), m(this, el, l), m(this, Wn, t), m(this, sl, h), m(this, fa, d), m(this, tl, s), m(this, ua, Cd.toDateObject(n)), this.trigger = s.flatMap((p) => p.getElementsToTriggerPopup());
    for (const p of this.trigger)
      p.addEventListener("click", a(this, da)), p.addEventListener("mouseenter", a(this, Hh)), p.addEventListener("mouseleave", a(this, Bh)), p.classList.add("popupTriggerArea");
    for (const p of s)
      (f = p.container) == null || f.addEventListener("keydown", a(this, ca));
    a(this, _t).hidden = !0, u && y(this, pt, nh).call(this);
  }
  render() {
    if (a(this, os))
      return;
    const e = m(this, os, document.createElement("div"));
    if (e.className = "popup", a(this, Wn)) {
      const n = e.style.outlineColor = U.makeHexColor(...a(this, Wn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? e.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : e.style.backgroundColor = U.makeHexColor(...a(this, Wn).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const t = document.createElement("span");
    t.className = "header";
    const s = document.createElement("h1");
    if (t.append(s), {
      dir: s.dir,
      str: s.textContent
    } = a(this, il), e.append(t), a(this, ua)) {
      const n = document.createElement("span");
      n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: a(this, ua).valueOf()
      })), t.append(n);
    }
    const i = a(this, pt, ih);
    if (i)
      cf.render({
        xfaHtml: i,
        intent: "richText",
        div: e
      }), e.lastChild.classList.add("richText", "popupContent");
    else {
      const n = this._formatContents(a(this, oi));
      e.append(n);
    }
    a(this, _t).append(e);
  }
  _formatContents({
    str: e,
    dir: t
  }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = t;
    const i = e.split(/(?:\r\n?|\n)/);
    for (let n = 0, r = i.length; n < r; ++n) {
      const o = i[n];
      s.append(document.createTextNode(o)), n < r - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({
    rect: e,
    popupContent: t
  }) {
    var s;
    a(this, Xn) || m(this, Xn, {
      contentsObj: a(this, oi),
      richText: a(this, ci)
    }), e && m(this, hi, null), t && (m(this, ci, y(this, pt, mf).call(this, t)), m(this, oi, null)), (s = a(this, os)) == null || s.remove(), m(this, os, null);
  }
  resetEdited() {
    var e;
    a(this, Xn) && ({
      contentsObj: ue(this, oi)._,
      richText: ue(this, ci)._
    } = a(this, Xn), m(this, Xn, null), (e = a(this, os)) == null || e.remove(), m(this, os, null), m(this, hi, null));
  }
  forceHide() {
    m(this, Yn, this.isVisible), a(this, Yn) && (a(this, _t).hidden = !0);
  }
  maybeShow() {
    a(this, Yn) && (a(this, os) || y(this, pt, rh).call(this), m(this, Yn, !1), a(this, _t).hidden = !1);
  }
  get isVisible() {
    return a(this, _t).hidden === !1;
  }
}
ca = new WeakMap(), Bh = new WeakMap(), Hh = new WeakMap(), da = new WeakMap(), Wn = new WeakMap(), _t = new WeakMap(), oi = new WeakMap(), ua = new WeakMap(), tl = new WeakMap(), el = new WeakMap(), fa = new WeakMap(), li = new WeakMap(), os = new WeakMap(), hi = new WeakMap(), sl = new WeakMap(), ci = new WeakMap(), il = new WeakMap(), Xn = new WeakMap(), Yn = new WeakMap(), pt = new WeakSet(), ih = function() {
  const e = a(this, ci), t = a(this, oi);
  return e != null && e.str && (!(t != null && t.str) || t.str === e.str) && a(this, ci).html || null;
}, Wc = function() {
  var e, t, s;
  return ((s = (t = (e = a(this, pt, ih)) == null ? void 0 : e.attributes) == null ? void 0 : t.style) == null ? void 0 : s.fontSize) || 0;
}, gf = function() {
  var e, t, s;
  return ((s = (t = (e = a(this, pt, ih)) == null ? void 0 : e.attributes) == null ? void 0 : t.style) == null ? void 0 : s.color) || null;
}, mf = function(e) {
  const t = [], s = {
    str: e,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: t
      }]
    }
  }, i = {
    style: {
      color: a(this, pt, gf),
      fontSize: a(this, pt, Wc) ? `calc(${a(this, pt, Wc)}px * var(--scale-factor))` : ""
    }
  };
  for (const n of e.split(`
`))
    t.push({
      name: "span",
      value: n,
      attributes: i
    });
  return s;
}, vf = function(e) {
  e.altKey || e.shiftKey || e.ctrlKey || e.metaKey || (e.key === "Enter" || e.key === "Escape" && a(this, li)) && y(this, pt, nh).call(this);
}, bf = function() {
  if (a(this, hi) !== null)
    return;
  const {
    page: {
      view: e
    },
    viewport: {
      rawDims: {
        pageWidth: t,
        pageHeight: s,
        pageX: i,
        pageY: n
      }
    }
  } = a(this, el);
  let r = !!a(this, fa), o = r ? a(this, fa) : a(this, sl);
  for (const g of a(this, tl))
    if (!o || U.intersect(g.data.rect, o) !== null) {
      o = g.data.rect, r = !0;
      break;
    }
  const l = U.normalizeRect([o[0], e[3] - o[1] + e[1], o[2], e[3] - o[3] + e[1]]), d = r ? o[2] - o[0] + 5 : 0, u = l[0] + d, f = l[1];
  m(this, hi, [100 * (u - i) / t, 100 * (f - n) / s]);
  const {
    style: p
  } = a(this, _t);
  p.left = `${a(this, hi)[0]}%`, p.top = `${a(this, hi)[1]}%`;
}, nh = function() {
  m(this, li, !a(this, li)), a(this, li) ? (y(this, pt, rh).call(this), a(this, _t).addEventListener("click", a(this, da)), a(this, _t).addEventListener("keydown", a(this, ca))) : (y(this, pt, Xc).call(this), a(this, _t).removeEventListener("click", a(this, da)), a(this, _t).removeEventListener("keydown", a(this, ca)));
}, rh = function() {
  a(this, os) || this.render(), this.isVisible ? a(this, li) && a(this, _t).classList.add("focused") : (y(this, pt, bf).call(this), a(this, _t).hidden = !1, a(this, _t).style.zIndex = parseInt(a(this, _t).style.zIndex) + 1e3);
}, Xc = function() {
  a(this, _t).classList.remove("focused"), !(a(this, li) || !this.isVisible) && (a(this, _t).hidden = !0, a(this, _t).style.zIndex = parseInt(a(this, _t).style.zIndex) - 1e3);
};
class yf extends Dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = e.data.textContent, this.textPosition = e.data.textPosition, this.annotationEditorType = Z.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const e = document.createElement("div");
      e.classList.add("annotationTextContent"), e.setAttribute("role", "comment");
      for (const t of this.textContent) {
        const s = document.createElement("span");
        s.textContent = t, e.append(s);
      }
      this.container.append(e);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var nl;
class Xg extends Dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, nl, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const t = this.data, {
      width: s,
      height: i
    } = en(t.rect), n = this.svgFactory.create(s, i, !0), r = m(this, nl, this.svgFactory.createElement("svg:line"));
    return r.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), r.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), r.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), r.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), r.setAttribute("stroke-width", t.borderStyle.width || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), n.append(r), this.container.append(n), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, nl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
nl = new WeakMap();
var rl;
class Yg extends Dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, rl, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const t = this.data, {
      width: s,
      height: i
    } = en(t.rect), n = this.svgFactory.create(s, i, !0), r = t.borderStyle.width, o = m(this, rl, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", r / 2), o.setAttribute("y", r / 2), o.setAttribute("width", s - r), o.setAttribute("height", i - r), o.setAttribute("stroke-width", r || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, rl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
rl = new WeakMap();
var al;
class Kg extends Dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, al, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const t = this.data, {
      width: s,
      height: i
    } = en(t.rect), n = this.svgFactory.create(s, i, !0), r = t.borderStyle.width, o = m(this, al, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - r / 2), o.setAttribute("ry", i / 2 - r / 2), o.setAttribute("stroke-width", r || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), n.append(o), this.container.append(n), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, al);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
al = new WeakMap();
var ol;
class Af extends Dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, ol, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: t,
        vertices: s,
        borderStyle: i,
        popupRef: n
      }
    } = this;
    if (!s)
      return this.container;
    const {
      width: r,
      height: o
    } = en(t), l = this.svgFactory.create(r, o, !0);
    let h = [];
    for (let u = 0, f = s.length; u < f; u += 2) {
      const p = s[u] - t[0], g = t[3] - s[u + 1];
      h.push(`${p},${g}`);
    }
    h = h.join(" ");
    const d = m(this, ol, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute("points", h), d.setAttribute("stroke-width", i.width || 1), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), l.append(d), this.container.append(l), !n && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return a(this, ol);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ol = new WeakMap();
class Qg extends Af {
  constructor(e) {
    super(e), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Jg extends Dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var ll, Kn, hl, Yc;
class _d extends Dt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, hl);
    b(this, ll, null);
    b(this, Kn, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? Z.HIGHLIGHT : Z.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: t,
        rotation: s,
        inkLists: i,
        borderStyle: n,
        popupRef: r
      }
    } = this, {
      transform: o,
      width: l,
      height: h
    } = y(this, hl, Yc).call(this, s, t), d = this.svgFactory.create(l, h, !0), u = m(this, ll, this.svgFactory.createElement("svg:g"));
    d.append(u), u.setAttribute("stroke-width", n.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let f = 0, p = i.length; f < p; f++) {
      const g = this.svgFactory.createElement(this.svgElementName);
      a(this, Kn).push(g), g.setAttribute("points", i[f].join(",")), u.append(g);
    }
    return !r && this.hasPopupData && this._createPopup(), this.container.append(d), this._editOnDoubleClick(), this.container;
  }
  updateEdited(t) {
    super.updateEdited(t);
    const {
      thickness: s,
      points: i,
      rect: n
    } = t, r = a(this, ll);
    if (s >= 0 && r.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = a(this, Kn).length; o < l; o++)
        a(this, Kn)[o].setAttribute("points", i[o].join(","));
    if (n) {
      const {
        transform: o,
        width: l,
        height: h
      } = y(this, hl, Yc).call(this, this.data.rotation, n);
      r.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), r.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return a(this, Kn);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ll = new WeakMap(), Kn = new WeakMap(), hl = new WeakSet(), Yc = function(t, s) {
  switch (t) {
    case 90:
      return {
        transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    default:
      return {
        transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
  }
};
class wf extends Dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = Z.HIGHLIGHT;
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
  }
}
class Zg extends Dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class qg extends Dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class tm extends Dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class Sf extends Dt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = Z.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var cl, dl, Kc;
class em extends Dt {
  constructor(t) {
    var i;
    super(t, {
      isRenderable: !0
    });
    b(this, dl);
    b(this, cl, null);
    const {
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: t,
      data: s
    } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", y(this, dl, Kc).bind(this)), m(this, cl, i);
    const {
      isMac: n
    } = be.platform;
    return t.addEventListener("keydown", (r) => {
      r.key === "Enter" && (n ? r.metaKey : r.ctrlKey) && y(this, dl, Kc).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), t.append(i), t;
  }
  getElementsToTriggerPopup() {
    return a(this, cl);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
cl = new WeakMap(), dl = new WeakSet(), Kc = function() {
  var t;
  (t = this.downloadManager) == null || t.openOrDownloadData(this.content, this.filename);
};
var ul, Qn, Jn, fl, yr, Ef, Qc;
class sm {
  constructor({
    div: e,
    accessibilityManager: t,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: n,
    viewport: r,
    structTreeLayer: o
  }) {
    b(this, yr);
    b(this, ul, null);
    b(this, Qn, null);
    b(this, Jn, /* @__PURE__ */ new Map());
    b(this, fl, null);
    this.div = e, m(this, ul, t), m(this, Qn, s), m(this, fl, o || null), this.page = n, this.viewport = r, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return a(this, Jn).size > 0;
  }
  async render(e) {
    var r;
    const {
      annotations: t
    } = e, s = this.div;
    mr(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), n = {
      data: null,
      layer: s,
      linkService: e.linkService,
      downloadManager: e.downloadManager,
      imageResourcesPath: e.imageResourcesPath || "",
      renderForms: e.renderForms !== !1,
      svgFactory: new Md(),
      annotationStorage: e.annotationStorage || new Pd(),
      enableScripting: e.enableScripting === !0,
      hasJSActions: e.hasJSActions,
      fieldObjects: e.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of t) {
      if (o.noHTML)
        continue;
      const l = o.annotationType === Bt.POPUP;
      if (l) {
        const u = i.get(o.id);
        if (!u)
          continue;
        n.elements = u;
      } else {
        const {
          width: u,
          height: f
        } = en(o.rect);
        if (u <= 0 || f <= 0)
          continue;
      }
      n.data = o;
      const h = Hg.create(n);
      if (!h.isRenderable)
        continue;
      if (!l && o.popupRef) {
        const u = i.get(o.popupRef);
        u ? u.push(h) : i.set(o.popupRef, [h]);
      }
      const d = h.render();
      o.hidden && (d.style.visibility = "hidden"), await y(this, yr, Ef).call(this, d, o.id), h._isEditable && (a(this, Jn).set(h.data.id, h), (r = this._annotationEditorUIManager) == null || r.renderAnnotationElement(h));
    }
    y(this, yr, Qc).call(this);
  }
  update({
    viewport: e
  }) {
    const t = this.div;
    this.viewport = e, mr(t, {
      rotation: e.rotation
    }), y(this, yr, Qc).call(this), t.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(a(this, Jn).values());
  }
  getEditableAnnotation(e) {
    return a(this, Jn).get(e);
  }
}
ul = new WeakMap(), Qn = new WeakMap(), Jn = new WeakMap(), fl = new WeakMap(), yr = new WeakSet(), Ef = async function(e, t) {
  var r, o;
  const s = e.firstChild || e, i = s.id = `${Ed}${t}`, n = await ((r = a(this, fl)) == null ? void 0 : r.getAriaAttributes(i));
  if (n)
    for (const [l, h] of n)
      s.setAttribute(l, h);
  this.div.append(e), (o = a(this, ul)) == null || o.moveElementInDOM(this.div, e, s, !1);
}, Qc = function() {
  if (!a(this, Qn))
    return;
  const e = this.div;
  for (const [t, s] of a(this, Qn)) {
    const i = e.querySelector(`[data-annotation-id="${t}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: n
    } = i;
    n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
  }
  a(this, Qn).clear();
};
const jl = /\r\n?|\n/g;
var ls, Le, pl, Zn, Oe, Nt, xf, Tf, Cf, ah, Ai, oh, lh, Rf, Zc, Pf;
const yt = class yt extends Rt {
  constructor(t) {
    super({
      ...t,
      name: "freeTextEditor"
    });
    b(this, Nt);
    b(this, ls);
    b(this, Le, "");
    b(this, pl, `${this.id}-editor`);
    b(this, Zn, null);
    b(this, Oe);
    m(this, ls, t.color || yt._defaultColor || Rt._defaultLineColor), m(this, Oe, t.fontSize || yt._defaultFontSize);
  }
  static get _keyboardManager() {
    const t = yt.prototype, s = (r) => r.isEmpty(), i = vr.TRANSLATE_SMALL, n = vr.TRANSLATE_BIG;
    return st(this, "_keyboardManager", new kl([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t._translateEmpty, {
      args: [-n, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], t._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t._translateEmpty, {
      args: [n, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], t._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t._translateEmpty, {
      args: [0, -n],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], t._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t._translateEmpty, {
      args: [0, n],
      checker: s
    }]]));
  }
  static initialize(t, s) {
    Rt.initialize(t, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(t, s) {
    switch (t) {
      case it.FREETEXT_SIZE:
        yt._defaultFontSize = s;
        break;
      case it.FREETEXT_COLOR:
        yt._defaultColor = s;
        break;
    }
  }
  updateParams(t, s) {
    switch (t) {
      case it.FREETEXT_SIZE:
        y(this, Nt, xf).call(this, s);
        break;
      case it.FREETEXT_COLOR:
        y(this, Nt, Tf).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[it.FREETEXT_SIZE, yt._defaultFontSize], [it.FREETEXT_COLOR, yt._defaultColor || Rt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[it.FREETEXT_SIZE, a(this, Oe)], [it.FREETEXT_COLOR, a(this, ls)]];
  }
  _translateEmpty(t, s) {
    this._uiManager.translateSelectedEditors(t, s, !0);
  }
  getInitialTranslation() {
    const t = this.parentScale;
    return [-yt._internalPadding * t, -(yt._internalPadding + a(this, Oe)) * t];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(Z.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), m(this, Zn, new AbortController());
    const t = this._uiManager.combinedSignal(a(this, Zn));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: t
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: t
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: t
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: t
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: t
    });
  }
  disableEditMode() {
    var t;
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", a(this, pl)), this._isDraggable = !0, (t = a(this, Zn)) == null || t.abort(), m(this, Zn, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(t) {
    this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(t) {
    var s;
    this.width || (this.enableEditMode(), t && this.editorDiv.focus(), (s = this._initialOptions) != null && s.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const t = a(this, Le), s = m(this, Le, y(this, Nt, Cf).call(this).trimEnd());
    if (t === s)
      return;
    const i = (n) => {
      if (m(this, Le, n), !n) {
        this.remove();
        return;
      }
      y(this, Nt, lh).call(this), this._uiManager.rebuild(this), y(this, Nt, ah).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(t);
      },
      mustExec: !1
    }), y(this, Nt, ah).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(t) {
    this.enterInEditMode();
  }
  keydown(t) {
    t.target === this.div && t.key === "Enter" && (this.enterInEditMode(), t.preventDefault());
  }
  editorDivKeydown(t) {
    yt._keyboardManager.exec(this, t);
  }
  editorDivFocus(t) {
    this.isEditing = !0;
  }
  editorDivBlur(t) {
    this.isEditing = !1;
  }
  editorDivInput(t) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let t, s;
    this.width && (t = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", a(this, pl)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${a(this, Oe)}px * var(--scale-factor))`, i.color = a(this, ls), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), yh(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [n, r] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [d, u] = this.pageDimensions, [f, p] = this.pageTranslation;
        let g, v;
        switch (this.rotation) {
          case 0:
            g = t + (o[0] - f) / d, v = s + this.height - (o[1] - p) / u;
            break;
          case 90:
            g = t + (o[0] - f) / d, v = s - (o[1] - p) / u, [l, h] = [h, -l];
            break;
          case 180:
            g = t - this.width + (o[0] - f) / d, v = s - (o[1] - p) / u, [l, h] = [-l, -h];
            break;
          case 270:
            g = t + (o[0] - f - this.height * u) / d, v = s + (o[1] - p - this.width * d) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(g * n, v * r, l, h);
      } else
        this.setAt(t * n, s * r, this.width * n, this.height * r);
      y(this, Nt, lh).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(t) {
    var g, v, w;
    const s = t.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    t.preventDefault();
    const n = y(g = yt, Ai, Zc).call(g, s.getData("text") || "").replaceAll(jl, `
`);
    if (!n)
      return;
    const r = window.getSelection();
    if (!r.rangeCount)
      return;
    this.editorDiv.normalize(), r.deleteFromDocument();
    const o = r.getRangeAt(0);
    if (!n.includes(`
`)) {
      o.insertNode(document.createTextNode(n)), this.editorDiv.normalize(), r.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, d = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const A = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(jl, "")), A !== this.editorDiv) {
        let S = d;
        for (const x of this.editorDiv.childNodes) {
          if (x === A) {
            S = u;
            continue;
          }
          S.push(y(v = yt, Ai, oh).call(v, x));
        }
      }
      d.push(l.nodeValue.slice(0, h).replaceAll(jl, ""));
    } else if (l === this.editorDiv) {
      let A = d, S = 0;
      for (const x of this.editorDiv.childNodes)
        S++ === h && (A = u), A.push(y(w = yt, Ai, oh).call(w, x));
    }
    m(this, Le, `${d.join(`
`)}${n}${u.join(`
`)}`), y(this, Nt, lh).call(this);
    const f = new Range();
    let p = d.reduce((A, S) => A + S.length, 0);
    for (const {
      firstChild: A
    } of this.editorDiv.childNodes)
      if (A.nodeType === Node.TEXT_NODE) {
        const S = A.nodeValue.length;
        if (p <= S) {
          f.setStart(A, p), f.setEnd(A, p);
          break;
        }
        p -= S;
      }
    r.removeAllRanges(), r.addRange(f);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(t, s, i) {
    var o;
    let n = null;
    if (t instanceof yf) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: d,
          rotation: u,
          id: f,
          popupRef: p
        },
        textContent: g,
        textPosition: v,
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = t;
      if (!g || g.length === 0)
        return null;
      n = t = {
        annotationType: Z.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: g.join(`
`),
        position: v,
        pageIndex: w - 1,
        rect: d.slice(0),
        rotation: u,
        id: f,
        deleted: !1,
        popupRef: p
      };
    }
    const r = await super.deserialize(t, s, i);
    return m(r, Oe, t.fontSize), m(r, ls, U.makeHexColor(...t.color)), m(r, Le, y(o = yt, Ai, Zc).call(o, t.value)), r.annotationElementId = t.id || null, r._initialData = n, r;
  }
  serialize(t = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = yt._internalPadding * this.parentScale, i = this.getRect(s, s), n = Rt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : a(this, ls)), r = {
      annotationType: Z.FREETEXT,
      color: n,
      fontSize: a(this, Oe),
      value: y(this, Nt, Rf).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return t ? r : this.annotationElementId && !y(this, Nt, Pf).call(this, r) ? null : (r.id = this.annotationElementId, r);
  }
  renderAnnotationElement(t) {
    const s = super.renderAnnotationElement(t);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${a(this, Oe)}px * var(--scale-factor))`, i.color = a(this, ls), s.replaceChildren();
    for (const r of a(this, Le).split(`
`)) {
      const o = document.createElement("div");
      o.append(r ? document.createTextNode(r) : document.createElement("br")), s.append(o);
    }
    const n = yt._internalPadding * this.parentScale;
    return t.updateEdited({
      rect: this.getRect(n, n),
      popupContent: a(this, Le)
    }), s;
  }
  resetAnnotationElement(t) {
    super.resetAnnotationElement(t), t.resetEdited();
  }
};
ls = new WeakMap(), Le = new WeakMap(), pl = new WeakMap(), Zn = new WeakMap(), Oe = new WeakMap(), Nt = new WeakSet(), xf = function(t) {
  const s = (n) => {
    this.editorDiv.style.fontSize = `calc(${n}px * var(--scale-factor))`, this.translate(0, -(n - a(this, Oe)) * this.parentScale), m(this, Oe, n), y(this, Nt, ah).call(this);
  }, i = a(this, Oe);
  this.addCommands({
    cmd: s.bind(this, t),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Tf = function(t) {
  const s = (n) => {
    m(this, ls, this.editorDiv.style.color = n);
  }, i = a(this, ls);
  this.addCommands({
    cmd: s.bind(this, t),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Cf = function() {
  var i;
  const t = [];
  this.editorDiv.normalize();
  let s = null;
  for (const n of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && n.nodeName === "BR" || (t.push(y(i = yt, Ai, oh).call(i, n)), s = n);
  return t.join(`
`);
}, ah = function() {
  const [t, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: n,
      div: r
    } = this, o = r.style.display, l = r.classList.contains("hidden");
    r.classList.remove("hidden"), r.style.display = "hidden", n.div.append(this.div), i = r.getBoundingClientRect(), r.remove(), r.style.display = o, r.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / t, this.height = i.height / s) : (this.width = i.height / t, this.height = i.width / s), this.fixAndSetPosition();
}, Ai = new WeakSet(), oh = function(t) {
  return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(jl, "");
}, lh = function() {
  if (this.editorDiv.replaceChildren(), !!a(this, Le))
    for (const t of a(this, Le).split(`
`)) {
      const s = document.createElement("div");
      s.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(s);
    }
}, Rf = function() {
  return a(this, Le).replaceAll(" ", " ");
}, Zc = function(t) {
  return t.replaceAll(" ", " ");
}, Pf = function(t) {
  const {
    value: s,
    fontSize: i,
    color: n,
    pageIndex: r
  } = this._initialData;
  return this._hasBeenMoved || t.value !== s || t.fontSize !== i || t.color.some((o, l) => o !== n[l]) || t.pageIndex !== r;
}, b(yt, Ai), G(yt, "_freeTextDefaultContent", ""), G(yt, "_internalPadding", 0), G(yt, "_defaultColor", null), G(yt, "_defaultFontSize", 10), G(yt, "_type", "freetext"), G(yt, "_editorType", Z.FREETEXT);
let Jc = yt;
class H {
  toSVGPath() {
    bt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    bt("Abstract getter `box` must be implemented.");
  }
  serialize(e, t) {
    bt("Abstract method `serialize` must be implemented.");
  }
  static _rescale(e, t, s, i, n, r) {
    r || (r = new Float32Array(e.length));
    for (let o = 0, l = e.length; o < l; o += 2)
      r[o] = t + e[o] * i, r[o + 1] = s + e[o + 1] * n;
    return r;
  }
  static _rescaleAndSwap(e, t, s, i, n, r) {
    r || (r = new Float32Array(e.length));
    for (let o = 0, l = e.length; o < l; o += 2)
      r[o] = t + e[o + 1] * i, r[o + 1] = s + e[o] * n;
    return r;
  }
  static _translate(e, t, s, i) {
    i || (i = new Float32Array(e.length));
    for (let n = 0, r = e.length; n < r; n += 2)
      i[n] = t + e[n], i[n + 1] = s + e[n + 1];
    return i;
  }
  static svgRound(e) {
    return Math.round(e * 1e4);
  }
  static _normalizePoint(e, t, s, i, n) {
    switch (n) {
      case 90:
        return [1 - t / s, e / i];
      case 180:
        return [1 - e / s, 1 - t / i];
      case 270:
        return [t / s, 1 - e / i];
      default:
        return [e / s, t / i];
    }
  }
  static _normalizePagePoint(e, t, s) {
    switch (s) {
      case 90:
        return [1 - t, e];
      case 180:
        return [1 - e, 1 - t];
      case 270:
        return [t, 1 - e];
      default:
        return [e, t];
    }
  }
  static createBezierPoints(e, t, s, i, n, r) {
    return [(e + 5 * s) / 6, (t + 5 * i) / 6, (5 * s + n) / 6, (5 * i + r) / 6, (s + n) / 2, (i + r) / 2];
  }
}
G(H, "PRECISION", 1e-4);
var De, hs, pa, ga, Ds, et, qn, tr, gl, ml, ma, va, zi, vl, $h, jh, Ut, Za, If, Mf, _f, Lf, Of, Df;
const Ws = class Ws {
  constructor({
    x: e,
    y: t
  }, s, i, n, r, o = 0) {
    b(this, Ut);
    b(this, De);
    b(this, hs, []);
    b(this, pa);
    b(this, ga);
    b(this, Ds, []);
    b(this, et, new Float32Array(18));
    b(this, qn);
    b(this, tr);
    b(this, gl);
    b(this, ml);
    b(this, ma);
    b(this, va);
    b(this, zi, []);
    m(this, De, s), m(this, va, n * i), m(this, ga, r), a(this, et).set([NaN, NaN, NaN, NaN, e, t], 6), m(this, pa, o), m(this, ml, a(Ws, vl) * i), m(this, gl, a(Ws, jh) * i), m(this, ma, i), a(this, zi).push(e, t);
  }
  isEmpty() {
    return isNaN(a(this, et)[8]);
  }
  add({
    x: e,
    y: t
  }) {
    var P;
    m(this, qn, e), m(this, tr, t);
    const [s, i, n, r] = a(this, De);
    let [o, l, h, d] = a(this, et).subarray(8, 12);
    const u = e - h, f = t - d, p = Math.hypot(u, f);
    if (p < a(this, gl))
      return !1;
    const g = p - a(this, ml), v = g / p, w = v * u, A = v * f;
    let S = o, x = l;
    o = h, l = d, h += w, d += A, (P = a(this, zi)) == null || P.push(e, t);
    const T = -A / g, E = w / g, C = T * a(this, va), R = E * a(this, va);
    return a(this, et).set(a(this, et).subarray(2, 8), 0), a(this, et).set([h + C, d + R], 4), a(this, et).set(a(this, et).subarray(14, 18), 12), a(this, et).set([h - C, d - R], 16), isNaN(a(this, et)[6]) ? (a(this, Ds).length === 0 && (a(this, et).set([o + C, l + R], 2), a(this, Ds).push(NaN, NaN, NaN, NaN, (o + C - s) / n, (l + R - i) / r), a(this, et).set([o - C, l - R], 14), a(this, hs).push(NaN, NaN, NaN, NaN, (o - C - s) / n, (l - R - i) / r)), a(this, et).set([S, x, o, l, h, d], 6), !this.isEmpty()) : (a(this, et).set([S, x, o, l, h, d], 6), Math.abs(Math.atan2(x - l, S - o) - Math.atan2(A, w)) < Math.PI / 2 ? ([o, l, h, d] = a(this, et).subarray(2, 6), a(this, Ds).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / n, ((l + d) / 2 - i) / r), [o, l, S, x] = a(this, et).subarray(14, 18), a(this, hs).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / n, ((x + l) / 2 - i) / r), !0) : ([S, x, o, l, h, d] = a(this, et).subarray(0, 6), a(this, Ds).push(((S + 5 * o) / 6 - s) / n, ((x + 5 * l) / 6 - i) / r, ((5 * o + h) / 6 - s) / n, ((5 * l + d) / 6 - i) / r, ((o + h) / 2 - s) / n, ((l + d) / 2 - i) / r), [h, d, o, l, S, x] = a(this, et).subarray(12, 18), a(this, hs).push(((S + 5 * o) / 6 - s) / n, ((x + 5 * l) / 6 - i) / r, ((5 * o + h) / 6 - s) / n, ((5 * l + d) / 6 - i) / r, ((o + h) / 2 - s) / n, ((l + d) / 2 - i) / r), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const e = a(this, Ds), t = a(this, hs);
    if (isNaN(a(this, et)[6]) && !this.isEmpty())
      return y(this, Ut, If).call(this);
    const s = [];
    s.push(`M${e[4]} ${e[5]}`);
    for (let i = 6; i < e.length; i += 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    y(this, Ut, _f).call(this, s);
    for (let i = t.length - 6; i >= 6; i -= 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    return y(this, Ut, Mf).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(e, t, s, i, n, r) {
    return new kf(e, t, s, i, n, r);
  }
  getOutlines() {
    var u;
    const e = a(this, Ds), t = a(this, hs), s = a(this, et), [i, n, r, o] = a(this, De), l = new Float32Array((((u = a(this, zi)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let f = 0, p = l.length - 2; f < p; f += 2)
      l[f] = (a(this, zi)[f] - i) / r, l[f + 1] = (a(this, zi)[f + 1] - n) / o;
    if (l[l.length - 2] = (a(this, qn) - i) / r, l[l.length - 1] = (a(this, tr) - n) / o, isNaN(s[6]) && !this.isEmpty())
      return y(this, Ut, Lf).call(this, l);
    const h = new Float32Array(a(this, Ds).length + 24 + a(this, hs).length);
    let d = e.length;
    for (let f = 0; f < d; f += 2) {
      if (isNaN(e[f])) {
        h[f] = h[f + 1] = NaN;
        continue;
      }
      h[f] = e[f], h[f + 1] = e[f + 1];
    }
    d = y(this, Ut, Df).call(this, h, d);
    for (let f = t.length - 6; f >= 6; f -= 6)
      for (let p = 0; p < 6; p += 2) {
        if (isNaN(t[f + p])) {
          h[d] = h[d + 1] = NaN, d += 2;
          continue;
        }
        h[d] = t[f + p], h[d + 1] = t[f + p + 1], d += 2;
      }
    return y(this, Ut, Of).call(this, h, d), this.newFreeDrawOutline(h, l, a(this, De), a(this, ma), a(this, pa), a(this, ga));
  }
};
De = new WeakMap(), hs = new WeakMap(), pa = new WeakMap(), ga = new WeakMap(), Ds = new WeakMap(), et = new WeakMap(), qn = new WeakMap(), tr = new WeakMap(), gl = new WeakMap(), ml = new WeakMap(), ma = new WeakMap(), va = new WeakMap(), zi = new WeakMap(), vl = new WeakMap(), $h = new WeakMap(), jh = new WeakMap(), Ut = new WeakSet(), Za = function() {
  const e = a(this, et).subarray(4, 6), t = a(this, et).subarray(16, 18), [s, i, n, r] = a(this, De);
  return [(a(this, qn) + (e[0] - t[0]) / 2 - s) / n, (a(this, tr) + (e[1] - t[1]) / 2 - i) / r, (a(this, qn) + (t[0] - e[0]) / 2 - s) / n, (a(this, tr) + (t[1] - e[1]) / 2 - i) / r];
}, If = function() {
  const [e, t, s, i] = a(this, De), [n, r, o, l] = y(this, Ut, Za).call(this);
  return `M${(a(this, et)[2] - e) / s} ${(a(this, et)[3] - t) / i} L${(a(this, et)[4] - e) / s} ${(a(this, et)[5] - t) / i} L${n} ${r} L${o} ${l} L${(a(this, et)[16] - e) / s} ${(a(this, et)[17] - t) / i} L${(a(this, et)[14] - e) / s} ${(a(this, et)[15] - t) / i} Z`;
}, Mf = function(e) {
  const t = a(this, hs);
  e.push(`L${t[4]} ${t[5]} Z`);
}, _f = function(e) {
  const [t, s, i, n] = a(this, De), r = a(this, et).subarray(4, 6), o = a(this, et).subarray(16, 18), [l, h, d, u] = y(this, Ut, Za).call(this);
  e.push(`L${(r[0] - t) / i} ${(r[1] - s) / n} L${l} ${h} L${d} ${u} L${(o[0] - t) / i} ${(o[1] - s) / n}`);
}, Lf = function(e) {
  const t = a(this, et), [s, i, n, r] = a(this, De), [o, l, h, d] = y(this, Ut, Za).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (t[2] - s) / n, (t[3] - i) / r, NaN, NaN, NaN, NaN, (t[4] - s) / n, (t[5] - i) / r, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, (t[16] - s) / n, (t[17] - i) / r, NaN, NaN, NaN, NaN, (t[14] - s) / n, (t[15] - i) / r], 0), this.newFreeDrawOutline(u, e, a(this, De), a(this, ma), a(this, pa), a(this, ga));
}, Of = function(e, t) {
  const s = a(this, hs);
  return e.set([NaN, NaN, NaN, NaN, s[4], s[5]], t), t += 6;
}, Df = function(e, t) {
  const s = a(this, et).subarray(4, 6), i = a(this, et).subarray(16, 18), [n, r, o, l] = a(this, De), [h, d, u, f] = y(this, Ut, Za).call(this);
  return e.set([NaN, NaN, NaN, NaN, (s[0] - n) / o, (s[1] - r) / l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, u, f, NaN, NaN, NaN, NaN, (i[0] - n) / o, (i[1] - r) / l], t), t += 24;
}, b(Ws, vl, 8), b(Ws, $h, 2), b(Ws, jh, a(Ws, vl) + a(Ws, $h));
let Sh = Ws;
var ba, er, di, bl, ke, yl, Ot, Uh, Ff;
class kf extends H {
  constructor(t, s, i, n, r, o) {
    super();
    b(this, Uh);
    b(this, ba);
    b(this, er, new Float32Array(4));
    b(this, di);
    b(this, bl);
    b(this, ke);
    b(this, yl);
    b(this, Ot);
    m(this, Ot, t), m(this, ke, s), m(this, ba, i), m(this, yl, n), m(this, di, r), m(this, bl, o), this.lastPoint = [NaN, NaN], y(this, Uh, Ff).call(this, o);
    const [l, h, d, u] = a(this, er);
    for (let f = 0, p = t.length; f < p; f += 2)
      t[f] = (t[f] - l) / d, t[f + 1] = (t[f + 1] - h) / u;
    for (let f = 0, p = s.length; f < p; f += 2)
      s[f] = (s[f] - l) / d, s[f + 1] = (s[f + 1] - h) / u;
  }
  toSVGPath() {
    const t = [`M${a(this, Ot)[4]} ${a(this, Ot)[5]}`];
    for (let s = 6, i = a(this, Ot).length; s < i; s += 6) {
      if (isNaN(a(this, Ot)[s])) {
        t.push(`L${a(this, Ot)[s + 4]} ${a(this, Ot)[s + 5]}`);
        continue;
      }
      t.push(`C${a(this, Ot)[s]} ${a(this, Ot)[s + 1]} ${a(this, Ot)[s + 2]} ${a(this, Ot)[s + 3]} ${a(this, Ot)[s + 4]} ${a(this, Ot)[s + 5]}`);
    }
    return t.push("Z"), t.join(" ");
  }
  serialize([t, s, i, n], r) {
    const o = i - t, l = n - s;
    let h, d;
    switch (r) {
      case 0:
        h = H._rescale(a(this, Ot), t, n, o, -l), d = H._rescale(a(this, ke), t, n, o, -l);
        break;
      case 90:
        h = H._rescaleAndSwap(a(this, Ot), t, s, o, l), d = H._rescaleAndSwap(a(this, ke), t, s, o, l);
        break;
      case 180:
        h = H._rescale(a(this, Ot), i, s, -o, l), d = H._rescale(a(this, ke), i, s, -o, l);
        break;
      case 270:
        h = H._rescaleAndSwap(a(this, Ot), i, n, -o, -l), d = H._rescaleAndSwap(a(this, ke), i, n, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(d)]
    };
  }
  get box() {
    return a(this, er);
  }
  newOutliner(t, s, i, n, r, o = 0) {
    return new Sh(t, s, i, n, r, o);
  }
  getNewOutline(t, s) {
    const [i, n, r, o] = a(this, er), [l, h, d, u] = a(this, ba), f = r * d, p = o * u, g = i * d + l, v = n * u + h, w = this.newOutliner({
      x: a(this, ke)[0] * f + g,
      y: a(this, ke)[1] * p + v
    }, a(this, ba), a(this, yl), t, a(this, bl), s ?? a(this, di));
    for (let A = 2; A < a(this, ke).length; A += 2)
      w.add({
        x: a(this, ke)[A] * f + g,
        y: a(this, ke)[A + 1] * p + v
      });
    return w.getOutlines();
  }
}
ba = new WeakMap(), er = new WeakMap(), di = new WeakMap(), bl = new WeakMap(), ke = new WeakMap(), yl = new WeakMap(), Ot = new WeakMap(), Uh = new WeakSet(), Ff = function(t) {
  const s = a(this, Ot);
  let i = s[4], n = s[5], r = i, o = n, l = i, h = n, d = i, u = n;
  const f = t ? Math.max : Math.min;
  for (let g = 6, v = s.length; g < v; g += 6) {
    if (isNaN(s[g]))
      r = Math.min(r, s[g + 4]), o = Math.min(o, s[g + 5]), l = Math.max(l, s[g + 4]), h = Math.max(h, s[g + 5]), u < s[g + 5] ? (d = s[g + 4], u = s[g + 5]) : u === s[g + 5] && (d = f(d, s[g + 4]));
    else {
      const w = U.bezierBoundingBox(i, n, ...s.slice(g, g + 6));
      r = Math.min(r, w[0]), o = Math.min(o, w[1]), l = Math.max(l, w[2]), h = Math.max(h, w[3]), u < w[3] ? (d = w[2], u = w[3]) : u === w[3] && (d = f(d, w[2]));
    }
    i = s[g + 4], n = s[g + 5];
  }
  const p = a(this, er);
  p[0] = r - a(this, di), p[1] = o - a(this, di), p[2] = l - r + 2 * a(this, di), p[3] = h - o + 2 * a(this, di), this.lastPoint = [d, u];
};
var Al, wl, Vi, cs, Ae, Nf, hh, Bf, Hf, td;
class qc {
  constructor(e, t = 0, s = 0, i = !0) {
    b(this, Ae);
    b(this, Al);
    b(this, wl);
    b(this, Vi, []);
    b(this, cs, []);
    let n = 1 / 0, r = -1 / 0, o = 1 / 0, l = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: w,
      y: A,
      width: S,
      height: x
    } of e) {
      const T = Math.floor((w - t) / h) * h, E = Math.ceil((w + S + t) / h) * h, C = Math.floor((A - t) / h) * h, R = Math.ceil((A + x + t) / h) * h, I = [T, C, R, !0], P = [E, C, R, !1];
      a(this, Vi).push(I, P), n = Math.min(n, T), r = Math.max(r, E), o = Math.min(o, C), l = Math.max(l, R);
    }
    const d = r - n + 2 * s, u = l - o + 2 * s, f = n - s, p = o - s, g = a(this, Vi).at(i ? -1 : -2), v = [g[0], g[2]];
    for (const w of a(this, Vi)) {
      const [A, S, x] = w;
      w[0] = (A - f) / d, w[1] = (S - p) / u, w[2] = (x - p) / u;
    }
    m(this, Al, new Float32Array([f, p, d, u])), m(this, wl, v);
  }
  getOutlines() {
    a(this, Vi).sort((t, s) => t[0] - s[0] || t[1] - s[1] || t[2] - s[2]);
    const e = [];
    for (const t of a(this, Vi))
      t[3] ? (e.push(...y(this, Ae, td).call(this, t)), y(this, Ae, Bf).call(this, t)) : (y(this, Ae, Hf).call(this, t), e.push(...y(this, Ae, td).call(this, t)));
    return y(this, Ae, Nf).call(this, e);
  }
}
Al = new WeakMap(), wl = new WeakMap(), Vi = new WeakMap(), cs = new WeakMap(), Ae = new WeakSet(), Nf = function(e) {
  const t = [], s = /* @__PURE__ */ new Set();
  for (const r of e) {
    const [o, l, h] = r;
    t.push([o, l, r], [o, h, r]);
  }
  t.sort((r, o) => r[1] - o[1] || r[0] - o[0]);
  for (let r = 0, o = t.length; r < o; r += 2) {
    const l = t[r][2], h = t[r + 1][2];
    l.push(h), h.push(l), s.add(l), s.add(h);
  }
  const i = [];
  let n;
  for (; s.size > 0; ) {
    const r = s.values().next().value;
    let [o, l, h, d, u] = r;
    s.delete(r);
    let f = o, p = l;
    for (n = [o, h], i.push(n); ; ) {
      let g;
      if (s.has(d))
        g = d;
      else if (s.has(u))
        g = u;
      else
        break;
      s.delete(g), [o, l, h, d, u] = g, f !== o && (n.push(f, p, o, p === l ? l : h), f = o), p = p === l ? h : l;
    }
    n.push(f, p);
  }
  return new im(i, a(this, Al), a(this, wl));
}, hh = function(e) {
  const t = a(this, cs);
  let s = 0, i = t.length - 1;
  for (; s <= i; ) {
    const n = s + i >> 1, r = t[n][0];
    if (r === e)
      return n;
    r < e ? s = n + 1 : i = n - 1;
  }
  return i + 1;
}, Bf = function([, e, t]) {
  const s = y(this, Ae, hh).call(this, e);
  a(this, cs).splice(s, 0, [e, t]);
}, Hf = function([, e, t]) {
  const s = y(this, Ae, hh).call(this, e);
  for (let i = s; i < a(this, cs).length; i++) {
    const [n, r] = a(this, cs)[i];
    if (n !== e)
      break;
    if (n === e && r === t) {
      a(this, cs).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [n, r] = a(this, cs)[i];
    if (n !== e)
      break;
    if (n === e && r === t) {
      a(this, cs).splice(i, 1);
      return;
    }
  }
}, td = function(e) {
  const [t, s, i] = e, n = [[t, s, i]], r = y(this, Ae, hh).call(this, i);
  for (let o = 0; o < r; o++) {
    const [l, h] = a(this, cs)[o];
    for (let d = 0, u = n.length; d < u; d++) {
      const [, f, p] = n[d];
      if (!(h <= f || p <= l)) {
        if (f >= l) {
          if (p > h)
            n[d][1] = h;
          else {
            if (u === 1)
              return [];
            n.splice(d, 1), d--, u--;
          }
          continue;
        }
        n[d][2] = l, p > h && n.push([t, h, p]);
      }
    }
  }
  return n;
};
var Sl, ya;
class im extends H {
  constructor(t, s, i) {
    super();
    b(this, Sl);
    b(this, ya);
    m(this, ya, t), m(this, Sl, s), this.lastPoint = i;
  }
  toSVGPath() {
    const t = [];
    for (const s of a(this, ya)) {
      let [i, n] = s;
      t.push(`M${i} ${n}`);
      for (let r = 2; r < s.length; r += 2) {
        const o = s[r], l = s[r + 1];
        o === i ? (t.push(`V${l}`), n = l) : l === n && (t.push(`H${o}`), i = o);
      }
      t.push("Z");
    }
    return t.join(" ");
  }
  serialize([t, s, i, n], r) {
    const o = [], l = i - t, h = n - s;
    for (const d of a(this, ya)) {
      const u = new Array(d.length);
      for (let f = 0; f < d.length; f += 2)
        u[f] = t + d[f] * l, u[f + 1] = n - d[f + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return a(this, Sl);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
Sl = new WeakMap(), ya = new WeakMap();
class ed extends Sh {
  newFreeDrawOutline(e, t, s, i, n, r) {
    return new nm(e, t, s, i, n, r);
  }
}
class nm extends kf {
  newOutliner(e, t, s, i, n, r = 0) {
    return new ed(e, t, s, i, n, r);
  }
}
var ds, sr, Aa, jt, El, wa, xl, Tl, Wi, us, Sa, Cl, ft, sd, id, nd, ln, $f, Ei;
const Ee = class Ee {
  constructor({
    editor: e = null,
    uiManager: t = null
  }) {
    b(this, ft);
    b(this, ds, null);
    b(this, sr, null);
    b(this, Aa);
    b(this, jt, null);
    b(this, El, !1);
    b(this, wa, !1);
    b(this, xl, null);
    b(this, Tl);
    b(this, Wi, null);
    b(this, us, null);
    b(this, Sa);
    var s;
    e ? (m(this, wa, !1), m(this, Sa, it.HIGHLIGHT_COLOR), m(this, xl, e)) : (m(this, wa, !0), m(this, Sa, it.HIGHLIGHT_DEFAULT_COLOR)), m(this, us, (e == null ? void 0 : e._uiManager) || t), m(this, Tl, a(this, us)._eventBus), m(this, Aa, (e == null ? void 0 : e.color) || ((s = a(this, us)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), a(Ee, Cl) || m(Ee, Cl, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return st(this, "_keyboardManager", new kl([[["Escape", "mac+Escape"], Ee.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], Ee.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], Ee.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], Ee.prototype._moveToPrevious], [["Home", "mac+Home"], Ee.prototype._moveToBeginning], [["End", "mac+End"], Ee.prototype._moveToEnd]]));
  }
  renderButton() {
    const e = m(this, ds, document.createElement("button"));
    e.className = "colorPicker", e.tabIndex = "0", e.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), e.setAttribute("aria-haspopup", !0);
    const t = a(this, us)._signal;
    e.addEventListener("click", y(this, ft, ln).bind(this), {
      signal: t
    }), e.addEventListener("keydown", y(this, ft, nd).bind(this), {
      signal: t
    });
    const s = m(this, sr, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = a(this, Aa), e.append(s), e;
  }
  renderMainDropdown() {
    const e = m(this, jt, y(this, ft, sd).call(this));
    return e.setAttribute("aria-orientation", "horizontal"), e.setAttribute("aria-labelledby", "highlightColorPickerLabel"), e;
  }
  _colorSelectFromKeyboard(e) {
    if (e.target === a(this, ds)) {
      y(this, ft, ln).call(this, e);
      return;
    }
    const t = e.target.getAttribute("data-color");
    t && y(this, ft, id).call(this, t, e);
  }
  _moveToNext(e) {
    var t, s;
    if (!a(this, ft, Ei)) {
      y(this, ft, ln).call(this, e);
      return;
    }
    if (e.target === a(this, ds)) {
      (t = a(this, jt).firstChild) == null || t.focus();
      return;
    }
    (s = e.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(e) {
    var t, s;
    if (e.target === ((t = a(this, jt)) == null ? void 0 : t.firstChild) || e.target === a(this, ds)) {
      a(this, ft, Ei) && this._hideDropdownFromKeyboard();
      return;
    }
    a(this, ft, Ei) || y(this, ft, ln).call(this, e), (s = e.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(e) {
    var t;
    if (!a(this, ft, Ei)) {
      y(this, ft, ln).call(this, e);
      return;
    }
    (t = a(this, jt).firstChild) == null || t.focus();
  }
  _moveToEnd(e) {
    var t;
    if (!a(this, ft, Ei)) {
      y(this, ft, ln).call(this, e);
      return;
    }
    (t = a(this, jt).lastChild) == null || t.focus();
  }
  hideDropdown() {
    var e, t;
    (e = a(this, jt)) == null || e.classList.add("hidden"), (t = a(this, Wi)) == null || t.abort(), m(this, Wi, null);
  }
  _hideDropdownFromKeyboard() {
    var e;
    if (!a(this, wa)) {
      if (!a(this, ft, Ei)) {
        (e = a(this, xl)) == null || e.unselect();
        return;
      }
      this.hideDropdown(), a(this, ds).focus({
        preventScroll: !0,
        focusVisible: a(this, El)
      });
    }
  }
  updateColor(e) {
    if (a(this, sr) && (a(this, sr).style.backgroundColor = e), !a(this, jt))
      return;
    const t = a(this, us).highlightColors.values();
    for (const s of a(this, jt).children)
      s.setAttribute("aria-selected", t.next().value === e);
  }
  destroy() {
    var e, t;
    (e = a(this, ds)) == null || e.remove(), m(this, ds, null), m(this, sr, null), (t = a(this, jt)) == null || t.remove(), m(this, jt, null);
  }
};
ds = new WeakMap(), sr = new WeakMap(), Aa = new WeakMap(), jt = new WeakMap(), El = new WeakMap(), wa = new WeakMap(), xl = new WeakMap(), Tl = new WeakMap(), Wi = new WeakMap(), us = new WeakMap(), Sa = new WeakMap(), Cl = new WeakMap(), ft = new WeakSet(), sd = function() {
  const e = document.createElement("div"), t = a(this, us)._signal;
  e.addEventListener("contextmenu", ms, {
    signal: t
  }), e.className = "dropdown", e.role = "listbox", e.setAttribute("aria-multiselectable", !1), e.setAttribute("aria-orientation", "vertical"), e.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of a(this, us).highlightColors) {
    const n = document.createElement("button");
    n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", a(Ee, Cl)[s]);
    const r = document.createElement("span");
    n.append(r), r.className = "swatch", r.style.backgroundColor = i, n.setAttribute("aria-selected", i === a(this, Aa)), n.addEventListener("click", y(this, ft, id).bind(this, i), {
      signal: t
    }), e.append(n);
  }
  return e.addEventListener("keydown", y(this, ft, nd).bind(this), {
    signal: t
  }), e;
}, id = function(e, t) {
  t.stopPropagation(), a(this, Tl).dispatch("switchannotationeditorparams", {
    source: this,
    type: a(this, Sa),
    value: e
  });
}, nd = function(e) {
  Ee._keyboardManager.exec(this, e);
}, ln = function(e) {
  if (a(this, ft, Ei)) {
    this.hideDropdown();
    return;
  }
  if (m(this, El, e.detail === 0), a(this, Wi) || (m(this, Wi, new AbortController()), window.addEventListener("pointerdown", y(this, ft, $f).bind(this), {
    signal: a(this, us).combinedSignal(a(this, Wi))
  })), a(this, jt)) {
    a(this, jt).classList.remove("hidden");
    return;
  }
  const t = m(this, jt, y(this, ft, sd).call(this));
  a(this, ds).append(t);
}, $f = function(e) {
  var t;
  (t = a(this, jt)) != null && t.contains(e.target) || this.hideDropdown();
}, Ei = function() {
  return a(this, jt) && !a(this, jt).classList.contains("hidden");
}, b(Ee, Cl, null);
let Eh = Ee;
var Ea, Rl, ui, ir, xa, Ce, Pl, Il, nr, Ye, Fe, Zt, Ta, fi, oe, Ca, Ke, Ml, J, rd, ch, jf, Uf, Gf, ad, hn, qe, Rr, zf, dh, qa, Vf, Wf, Xf, Yf, Kf;
const ht = class ht extends Rt {
  constructor(t) {
    super({
      ...t,
      name: "highlightEditor"
    });
    b(this, J);
    b(this, Ea, null);
    b(this, Rl, 0);
    b(this, ui);
    b(this, ir, null);
    b(this, xa, null);
    b(this, Ce, null);
    b(this, Pl, null);
    b(this, Il, 0);
    b(this, nr, null);
    b(this, Ye, null);
    b(this, Fe, null);
    b(this, Zt, !1);
    b(this, Ta, null);
    b(this, fi);
    b(this, oe, null);
    b(this, Ca, "");
    b(this, Ke);
    b(this, Ml, "");
    this.color = t.color || ht._defaultColor, m(this, Ke, t.thickness || ht._defaultThickness), m(this, fi, t.opacity || ht._defaultOpacity), m(this, ui, t.boxes || null), m(this, Ml, t.methodOfCreation || ""), m(this, Ca, t.text || ""), this._isDraggable = !1, t.highlightId > -1 ? (m(this, Zt, !0), y(this, J, ch).call(this, t), y(this, J, hn).call(this)) : a(this, ui) && (m(this, Ea, t.anchorNode), m(this, Rl, t.anchorOffset), m(this, Pl, t.focusNode), m(this, Il, t.focusOffset), y(this, J, rd).call(this), y(this, J, hn).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const t = ht.prototype;
    return st(this, "_keyboardManager", new kl([[["ArrowLeft", "mac+ArrowLeft"], t._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], t._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], t._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], t._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: a(this, Zt) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: a(this, Ke),
      methodOfCreation: a(this, Ml)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(t) {
    return {
      numberOfColors: t.get("color").size
    };
  }
  static initialize(t, s) {
    var i;
    Rt.initialize(t, s), ht._defaultColor || (ht._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(t, s) {
    switch (t) {
      case it.HIGHLIGHT_DEFAULT_COLOR:
        ht._defaultColor = s;
        break;
      case it.HIGHLIGHT_THICKNESS:
        ht._defaultThickness = s;
        break;
    }
  }
  translateInPage(t, s) {
  }
  get toolbarPosition() {
    return a(this, Ta);
  }
  updateParams(t, s) {
    switch (t) {
      case it.HIGHLIGHT_COLOR:
        y(this, J, jf).call(this, s);
        break;
      case it.HIGHLIGHT_THICKNESS:
        y(this, J, Uf).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[it.HIGHLIGHT_DEFAULT_COLOR, ht._defaultColor], [it.HIGHLIGHT_THICKNESS, ht._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, this.color || ht._defaultColor], [it.HIGHLIGHT_THICKNESS, a(this, Ke) || ht._defaultThickness], [it.HIGHLIGHT_FREE, a(this, Zt)]];
  }
  async addEditToolbar() {
    const t = await super.addEditToolbar();
    return t ? (this._uiManager.highlightColors && (m(this, xa, new Eh({
      editor: this
    })), t.addColorPicker(a(this, xa))), t) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(y(this, J, qa).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(t, s) {
    return super.getRect(t, s, y(this, J, qa).call(this));
  }
  onceAdded(t) {
    this.annotationElementId || this.parent.addUndoableEditor(this), t && this.div.focus();
  }
  remove() {
    y(this, J, ad).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (y(this, J, hn).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(t) {
    var i;
    let s = !1;
    this.parent && !t ? y(this, J, ad).call(this) : t && (y(this, J, hn).call(this, t), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(t), this.show(this._isVisible), s && this.select();
  }
  rotate(t) {
    var n, r, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    a(this, Zt) ? (t = (t - this.rotation + 360) % 360, i = y(n = ht, qe, Rr).call(n, a(this, Ye).box, t)) : i = y(r = ht, qe, Rr).call(r, [this.x, this.y, this.width, this.height], t), s.updateProperties(a(this, Fe), {
      bbox: i,
      root: {
        "data-main-rotation": t
      }
    }), s.updateProperties(a(this, oe), {
      bbox: y(o = ht, qe, Rr).call(o, a(this, Ce).box, t),
      root: {
        "data-main-rotation": t
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const t = super.render();
    a(this, Ca) && (t.setAttribute("aria-label", a(this, Ca)), t.setAttribute("role", "mark")), a(this, Zt) ? t.classList.add("free") : this.div.addEventListener("keydown", y(this, J, zf).bind(this), {
      signal: this._uiManager._signal
    });
    const s = m(this, nr, document.createElement("div"));
    t.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = a(this, ir);
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), yh(this, a(this, nr), ["pointerover", "pointerleave"]), this.enableEditing(), t;
  }
  pointerover() {
    var t;
    this.isSelected || (t = this.parent) == null || t.drawLayer.updateProperties(a(this, oe), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var t;
    this.isSelected || (t = this.parent) == null || t.drawLayer.updateProperties(a(this, oe), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(t) {
    switch (this.parent.unselect(this), t) {
      case 0:
      case 2:
        y(this, J, dh).call(this, !0);
        break;
      case 1:
      case 3:
        y(this, J, dh).call(this, !1);
        break;
    }
  }
  select() {
    var t;
    super.select(), a(this, oe) && ((t = this.parent) == null || t.drawLayer.updateProperties(a(this, oe), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var t;
    super.unselect(), a(this, oe) && ((t = this.parent) == null || t.drawLayer.updateProperties(a(this, oe), {
      rootClass: {
        selected: !1
      }
    }), a(this, Zt) || y(this, J, dh).call(this, !1));
  }
  get _mustFixPosition() {
    return !a(this, Zt);
  }
  show(t = this._isVisible) {
    super.show(t), this.parent && (this.parent.drawLayer.updateProperties(a(this, Fe), {
      rootClass: {
        hidden: !t
      }
    }), this.parent.drawLayer.updateProperties(a(this, oe), {
      rootClass: {
        hidden: !t
      }
    }));
  }
  static startHighlighting(t, s, {
    target: i,
    x: n,
    y: r
  }) {
    const {
      x: o,
      y: l,
      width: h,
      height: d
    } = i.getBoundingClientRect(), u = new AbortController(), f = t.combinedSignal(u), p = (g) => {
      u.abort(), y(this, qe, Yf).call(this, t, g);
    };
    window.addEventListener("blur", p, {
      signal: f
    }), window.addEventListener("pointerup", p, {
      signal: f
    }), window.addEventListener("pointerdown", Ue, {
      capture: !0,
      passive: !1,
      signal: f
    }), window.addEventListener("contextmenu", ms, {
      signal: f
    }), i.addEventListener("pointermove", y(this, qe, Xf).bind(this, t), {
      signal: f
    }), this._freeHighlight = new ed({
      x: n,
      y: r
    }, [o, l, h, d], t.scale, this._defaultThickness / 2, s, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = t.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, !0, !0);
  }
  static async deserialize(t, s, i) {
    var v, w, A, S;
    let n = null;
    if (t instanceof wf) {
      const {
        data: {
          quadPoints: x,
          rect: T,
          rotation: E,
          id: C,
          color: R,
          opacity: I,
          popupRef: P
        },
        parent: {
          page: {
            pageNumber: F
          }
        }
      } = t;
      n = t = {
        annotationType: Z.HIGHLIGHT,
        color: Array.from(R),
        opacity: I,
        quadPoints: x,
        boxes: null,
        pageIndex: F - 1,
        rect: T.slice(0),
        rotation: E,
        id: C,
        deleted: !1,
        popupRef: P
      };
    } else if (t instanceof _d) {
      const {
        data: {
          inkLists: x,
          rect: T,
          rotation: E,
          id: C,
          color: R,
          borderStyle: {
            rawWidth: I
          },
          popupRef: P
        },
        parent: {
          page: {
            pageNumber: F
          }
        }
      } = t;
      n = t = {
        annotationType: Z.HIGHLIGHT,
        color: Array.from(R),
        thickness: I,
        inkLists: x,
        boxes: null,
        pageIndex: F - 1,
        rect: T.slice(0),
        rotation: E,
        id: C,
        deleted: !1,
        popupRef: P
      };
    }
    const {
      color: r,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = t, d = await super.deserialize(t, s, i);
    d.color = U.makeHexColor(...r), m(d, fi, h || 1), l && m(d, Ke, t.thickness), d.annotationElementId = t.id || null, d._initialData = n;
    const [u, f] = d.pageDimensions, [p, g] = d.pageTranslation;
    if (o) {
      const x = m(d, ui, []);
      for (let T = 0; T < o.length; T += 8)
        x.push({
          x: (o[T] - p) / u,
          y: 1 - (o[T + 1] - g) / f,
          width: (o[T + 2] - o[T]) / u,
          height: (o[T + 1] - o[T + 5]) / f
        });
      y(v = d, J, rd).call(v), y(w = d, J, hn).call(w), d.rotate(d.rotation);
    } else if (l) {
      m(d, Zt, !0);
      const x = l[0], T = {
        x: x[0] - p,
        y: f - (x[1] - g)
      }, E = new ed(T, [0, 0, u, f], 1, a(d, Ke) / 2, !0, 1e-3);
      for (let I = 0, P = x.length; I < P; I += 2)
        T.x = x[I] - p, T.y = f - (x[I + 1] - g), E.add(T);
      const {
        id: C,
        clipPathId: R
      } = s.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: d.color,
          "fill-opacity": d._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: E.toSVGPath()
        }
      }, !0, !0);
      y(A = d, J, ch).call(A, {
        highlightOutlines: E.getOutlines(),
        highlightId: C,
        clipPathId: R
      }), y(S = d, J, hn).call(S);
    }
    return d;
  }
  serialize(t = !1) {
    if (this.isEmpty() || t)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = Rt._colorManager.convert(this.color), n = {
      annotationType: Z.HIGHLIGHT,
      color: i,
      opacity: a(this, fi),
      thickness: a(this, Ke),
      quadPoints: y(this, J, Vf).call(this),
      outlines: y(this, J, Wf).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: y(this, J, qa).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !y(this, J, Kf).call(this, n) ? null : (n.id = this.annotationElementId, n);
  }
  renderAnnotationElement(t) {
    return t.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Ea = new WeakMap(), Rl = new WeakMap(), ui = new WeakMap(), ir = new WeakMap(), xa = new WeakMap(), Ce = new WeakMap(), Pl = new WeakMap(), Il = new WeakMap(), nr = new WeakMap(), Ye = new WeakMap(), Fe = new WeakMap(), Zt = new WeakMap(), Ta = new WeakMap(), fi = new WeakMap(), oe = new WeakMap(), Ca = new WeakMap(), Ke = new WeakMap(), Ml = new WeakMap(), J = new WeakSet(), rd = function() {
  const t = new qc(a(this, ui), 1e-3);
  m(this, Ye, t.getOutlines()), [this.x, this.y, this.width, this.height] = a(this, Ye).box;
  const s = new qc(a(this, ui), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  m(this, Ce, s.getOutlines());
  const {
    lastPoint: i
  } = a(this, Ce);
  m(this, Ta, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, ch = function({
  highlightOutlines: t,
  highlightId: s,
  clipPathId: i
}) {
  var u, f;
  if (m(this, Ye, t), m(this, Ce, t.getNewOutline(a(this, Ke) / 2 + 1.5, 25e-4)), s >= 0)
    m(this, Fe, s), m(this, ir, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: t.box,
      path: {
        d: t.toSVGPath()
      }
    }), m(this, oe, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: a(this, Ce).box,
      path: {
        d: a(this, Ce).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const p = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(a(this, Fe), {
      bbox: y(u = ht, qe, Rr).call(u, a(this, Ye).box, (p - this.rotation + 360) % 360),
      path: {
        d: t.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(a(this, oe), {
      bbox: y(f = ht, qe, Rr).call(f, a(this, Ce).box, p),
      path: {
        d: a(this, Ce).toSVGPath()
      }
    });
  }
  const [r, o, l, h] = t.box;
  switch (this.rotation) {
    case 0:
      this.x = r, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [p, g] = this.parentDimensions;
      this.x = o, this.y = 1 - r, this.width = l * g / p, this.height = h * p / g;
      break;
    }
    case 180:
      this.x = 1 - r, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [p, g] = this.parentDimensions;
      this.x = 1 - o, this.y = r, this.width = l * g / p, this.height = h * p / g;
      break;
    }
  }
  const {
    lastPoint: d
  } = a(this, Ce);
  m(this, Ta, [(d[0] - r) / l, (d[1] - o) / h]);
}, jf = function(t) {
  const s = (r, o) => {
    var l, h;
    this.color = r, m(this, fi, o), (l = this.parent) == null || l.drawLayer.updateProperties(a(this, Fe), {
      root: {
        fill: r,
        "fill-opacity": o
      }
    }), (h = a(this, xa)) == null || h.updateColor(r);
  }, i = this.color, n = a(this, fi);
  this.addCommands({
    cmd: s.bind(this, t, ht._defaultOpacity),
    undo: s.bind(this, i, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(t)
  }, !0);
}, Uf = function(t) {
  const s = a(this, Ke), i = (n) => {
    m(this, Ke, n), y(this, J, Gf).call(this, n);
  };
  this.addCommands({
    cmd: i.bind(this, t),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: t
  }, !0);
}, Gf = function(t) {
  if (!a(this, Zt))
    return;
  y(this, J, ch).call(this, {
    highlightOutlines: a(this, Ye).getNewOutline(t / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, ad = function() {
  a(this, Fe) === null || !this.parent || (this.parent.drawLayer.remove(a(this, Fe)), m(this, Fe, null), this.parent.drawLayer.remove(a(this, oe)), m(this, oe, null));
}, hn = function(t = this.parent) {
  a(this, Fe) === null && ({
    id: ue(this, Fe)._,
    clipPathId: ue(this, ir)._
  } = t.drawLayer.draw({
    bbox: a(this, Ye).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": a(this, fi)
    },
    rootClass: {
      highlight: !0,
      free: a(this, Zt)
    },
    path: {
      d: a(this, Ye).toSVGPath()
    }
  }, !1, !0), m(this, oe, t.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: a(this, Zt)
    },
    bbox: a(this, Ce).box,
    path: {
      d: a(this, Ce).toSVGPath()
    }
  }, a(this, Zt))), a(this, nr) && (a(this, nr).style.clipPath = a(this, ir)));
}, qe = new WeakSet(), Rr = function([t, s, i, n], r) {
  switch (r) {
    case 90:
      return [1 - s - n, t, n, i];
    case 180:
      return [1 - t - i, 1 - s - n, i, n];
    case 270:
      return [s, 1 - t - i, n, i];
  }
  return [t, s, i, n];
}, zf = function(t) {
  ht._keyboardManager.exec(this, t);
}, dh = function(t) {
  if (!a(this, Ea))
    return;
  const s = window.getSelection();
  t ? s.setPosition(a(this, Ea), a(this, Rl)) : s.setPosition(a(this, Pl), a(this, Il));
}, qa = function() {
  return a(this, Zt) ? this.rotation : 0;
}, Vf = function() {
  if (a(this, Zt))
    return null;
  const [t, s] = this.pageDimensions, [i, n] = this.pageTranslation, r = a(this, ui), o = new Float32Array(r.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: d,
    width: u,
    height: f
  } of r) {
    const p = h * t + i, g = (1 - d) * s + n;
    o[l] = o[l + 4] = p, o[l + 1] = o[l + 3] = g, o[l + 2] = o[l + 6] = p + u * t, o[l + 5] = o[l + 7] = g - f * s, l += 8;
  }
  return o;
}, Wf = function(t) {
  return a(this, Ye).serialize(t, y(this, J, qa).call(this));
}, Xf = function(t, s) {
  this._freeHighlight.add(s) && t.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, Yf = function(t, s) {
  this._freeHighlight.isEmpty() ? t.drawLayer.remove(this._freeHighlightId) : t.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Kf = function(t) {
  const {
    color: s
  } = this._initialData;
  return t.color.some((i, n) => i !== s[n]);
}, b(ht, qe), G(ht, "_defaultColor", null), G(ht, "_defaultOpacity", 1), G(ht, "_defaultThickness", 12), G(ht, "_type", "highlight"), G(ht, "_editorType", Z.HIGHLIGHT), G(ht, "_freeHighlightId", -1), G(ht, "_freeHighlight", null), G(ht, "_freeHighlightClipId", "");
let xh = ht;
var rr;
class rm {
  constructor() {
    b(this, rr, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(e, t) {
    this[e] = t, this.updateSVGProperty(e, t);
  }
  updateProperties(e) {
    if (e)
      for (const [t, s] of Object.entries(e))
        this.updateProperty(t, s);
  }
  updateSVGProperty(e, t) {
    a(this, rr)[e] = t;
  }
  toSVGProperties() {
    const e = a(this, rr);
    return m(this, rr, /* @__PURE__ */ Object.create(null)), {
      root: e
    };
  }
  reset() {
    m(this, rr, /* @__PURE__ */ Object.create(null));
  }
  updateAll(e = this) {
    this.updateProperties(e);
  }
  clone() {
    bt("Not implemented");
  }
}
rr = new WeakMap();
var Ne, Ra, Xt, ar, or, Xi, Yi, Ki, lr, at, ld, hd, cd, to, Qf, uh, eo, Pr;
const $ = class $ extends Rt {
  constructor(t) {
    super(t);
    b(this, at);
    b(this, Ne, null);
    b(this, Ra);
    G(this, "_drawId", null);
    m(this, Ra, t.mustBeCommitted || !1), t.drawOutlines && (y(this, at, ld).call(this, t), y(this, at, to).call(this));
  }
  static _mergeSVGProperties(t, s) {
    const i = new Set(Object.keys(t));
    for (const [n, r] of Object.entries(s))
      i.has(n) ? Object.assign(t[n], r) : t[n] = r;
    return t;
  }
  static getDefaultDrawingOptions(t) {
    bt("Not implemented");
  }
  static get typesMap() {
    bt("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(t, s) {
    const i = this.typesMap.get(t);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (a($, Xt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(t, s) {
    const i = this.constructor.typesMap.get(t);
    i && this._updateProperty(t, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const t = [], s = this._defaultDrawingOptions;
    for (const [i, n] of this.typesMap)
      t.push([i, s[n]]);
    return t;
  }
  get propertiesToUpdate() {
    const t = [], {
      _drawingOptions: s
    } = this;
    for (const [i, n] of this.constructor.typesMap)
      t.push([i, s[n]]);
    return t;
  }
  _updateProperty(t, s, i) {
    const n = this._drawingOptions, r = n[s], o = (l) => {
      var d;
      n.updateProperty(s, l);
      const h = a(this, Ne).updateProperty(s, l);
      h && y(this, at, eo).call(this, h), (d = this.parent) == null || d.drawLayer.updateProperties(this._drawId, n.toSVGProperties());
    };
    this.addCommands({
      cmd: o.bind(this, i),
      undo: o.bind(this, r),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: t,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    var t;
    (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, $._mergeSVGProperties(a(this, Ne).getPathResizingSVGProperties(y(this, at, uh).call(this)), {
      bbox: y(this, at, Pr).call(this)
    }));
  }
  _onResized() {
    var t;
    (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, $._mergeSVGProperties(a(this, Ne).getPathResizedSVGProperties(y(this, at, uh).call(this)), {
      bbox: y(this, at, Pr).call(this)
    }));
  }
  _onTranslating(t, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: y(this, at, Pr).call(this, t, s)
    });
  }
  _onTranslated() {
    var t;
    (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, $._mergeSVGProperties(a(this, Ne).getPathTranslatedSVGProperties(y(this, at, uh).call(this), this.parentDimensions), {
      bbox: y(this, at, Pr).call(this)
    }));
  }
  _onStartDragging() {
    var t;
    (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    var t;
    (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(t) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, a(this, Ra) && (m(this, Ra, !1), this.commit(), this.parent.setSelected(this), t && this.isOnScreen && this.div.focus());
  }
  remove() {
    y(this, at, cd).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (y(this, at, to).call(this), y(this, at, eo).call(this, a(this, Ne).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(t) {
    var i;
    let s = !1;
    this.parent && !t ? (this._uiManager.removeShouldRescale(this), y(this, at, cd).call(this)) : t && (this._uiManager.addShouldRescale(this), y(this, at, to).call(this, t), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(t), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, $._mergeSVGProperties({
      bbox: y(this, at, Pr).call(this)
    }, a(this, Ne).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && y(this, at, eo).call(this, a(this, Ne).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    const t = super.render();
    t.classList.add("draw");
    const s = document.createElement("div");
    t.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal";
    const [i, n] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * n), this._uiManager.addShouldRescale(this), this.disableEditing(), t;
  }
  static createDrawerInstance(t, s, i, n, r) {
    bt("Not implemented");
  }
  static startDrawing(t, s, i, n) {
    var w;
    const {
      target: r,
      offsetX: o,
      offsetY: l,
      pointerId: h,
      pointerType: d
    } = n;
    if (a($, Yi) && a($, Yi) !== d)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = t, {
      width: f,
      height: p
    } = r.getBoundingClientRect(), g = m($, ar, new AbortController()), v = t.combinedSignal(g);
    if (a($, Xi) || m($, Xi, h), a($, Yi) ?? m($, Yi, d), window.addEventListener("pointerup", (A) => {
      var S;
      a($, Xi) === A.pointerId ? this._endDraw(A) : (S = a($, Ki)) == null || S.delete(A.pointerId);
    }, {
      signal: v
    }), window.addEventListener("pointercancel", (A) => {
      var S;
      a($, Xi) === A.pointerId ? this._currentParent.endDrawingSession() : (S = a($, Ki)) == null || S.delete(A.pointerId);
    }, {
      signal: v
    }), window.addEventListener("pointerdown", (A) => {
      a($, Yi) === A.pointerType && ((a($, Ki) || m($, Ki, /* @__PURE__ */ new Set())).add(A.pointerId), a($, Xt).isCancellable() && (a($, Xt).removeLastElement(), a($, Xt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: v
    }), window.addEventListener("contextmenu", ms, {
      signal: v
    }), r.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: v
    }), r.addEventListener("touchmove", (A) => {
      A.timeStamp === a($, lr) && Ue(A);
    }, {
      signal: v
    }), t.toggleDrawing(), (w = s._editorUndoBar) == null || w.hide(), a($, Xt)) {
      t.drawLayer.updateProperties(this._currentDrawId, a($, Xt).startNew(o, l, f, p, u));
      return;
    }
    s.updateUIForDefaultProperties(this), m($, Xt, this.createDrawerInstance(o, l, f, p, u)), m($, or, this.getDefaultDrawingOptions()), this._currentParent = t, {
      id: this._currentDrawId
    } = t.drawLayer.draw(this._mergeSVGProperties(a($, or).toSVGProperties(), a($, Xt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(t) {
    var r;
    if (m($, lr, -1), !a($, Xt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: n
    } = t;
    if (a($, Xi) === n) {
      if (((r = a($, Ki)) == null ? void 0 : r.size) >= 1) {
        this._endDraw(t);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, a($, Xt).add(s, i)), m($, lr, t.timeStamp), Ue(t);
    }
  }
  static _cleanup(t) {
    t && (this._currentDrawId = -1, this._currentParent = null, m($, Xt, null), m($, or, null), m($, Yi, null), m($, lr, NaN)), a($, ar) && (a($, ar).abort(), m($, ar, null), m($, Xi, NaN), m($, Ki, null));
  }
  static _endDraw(t) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), t && s.drawLayer.updateProperties(this._currentDrawId, a($, Xt).end(t.offsetX, t.offsetY)), this.supportMultipleDrawings) {
        const i = a($, Xt), n = this._currentDrawId, r = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(n, i.setLastElement(r));
          },
          undo: () => {
            s.drawLayer.updateProperties(n, i.removeLastElement());
          },
          mustExec: !1,
          type: it.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(t) {
    const s = this._currentParent;
    if (!s)
      return null;
    if (s.toggleDrawing(!0), s.cleanUndoStack(it.DRAW_STEP), !a($, Xt).isEmpty()) {
      const {
        pageDimensions: [i, n],
        scale: r
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: a($, Xt).getOutlines(i * r, n * r, r, this._INNER_MARGIN),
        drawingOptions: a($, or),
        mustBeCommitted: !t
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(t) {
  }
  static deserializeDraw(t, s, i, n, r, o) {
    bt("Not implemented");
  }
  static async deserialize(t, s, i) {
    var u, f;
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: r,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, n, r, this._INNER_MARGIN, t), d = await super.deserialize(t, s, i);
    return d.createDrawingOptions(t), y(u = d, at, ld).call(u, {
      drawOutlines: h
    }), y(f = d, at, to).call(f), d.onScaleChanging(), d.rotate(), d;
  }
  serializeDraw(t) {
    const [s, i] = this.pageTranslation, [n, r] = this.pageDimensions;
    return a(this, Ne).serialize([s, i, n, r], t);
  }
  renderAnnotationElement(t) {
    return t.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Ne = new WeakMap(), Ra = new WeakMap(), Xt = new WeakMap(), ar = new WeakMap(), or = new WeakMap(), Xi = new WeakMap(), Yi = new WeakMap(), Ki = new WeakMap(), lr = new WeakMap(), at = new WeakSet(), ld = function({
  drawOutlines: t,
  drawId: s,
  drawingOptions: i
}) {
  m(this, Ne, t), this._drawingOptions || (this._drawingOptions = i), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, t.defaultProperties)) : this._drawId = y(this, at, hd).call(this, t, this.parent), y(this, at, eo).call(this, t.box);
}, hd = function(t, s) {
  const {
    id: i
  } = s.drawLayer.draw($._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties), !1, !1);
  return i;
}, cd = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, to = function(t = this.parent) {
  if (!(this._drawId !== null && this.parent === t)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, t.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = y(this, at, hd).call(this, a(this, Ne), t);
  }
}, Qf = function([t, s, i, n]) {
  const {
    parentDimensions: [r, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [s, 1 - t, i * (o / r), n * (r / o)];
    case 180:
      return [1 - t, 1 - s, i, n];
    case 270:
      return [1 - s, t, i * (o / r), n * (r / o)];
    default:
      return [t, s, i, n];
  }
}, uh = function() {
  const {
    x: t,
    y: s,
    width: i,
    height: n,
    parentDimensions: [r, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - s, t, i * (r / o), n * (o / r)];
    case 180:
      return [1 - t, 1 - s, i, n];
    case 270:
      return [s, 1 - t, i * (r / o), n * (o / r)];
    default:
      return [t, s, i, n];
  }
}, eo = function(t) {
  if ([this.x, this.y, this.width, this.height] = y(this, at, Qf).call(this, t), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, Pr = function() {
  const {
    x: t,
    y: s,
    width: i,
    height: n,
    rotation: r,
    parentRotation: o,
    parentDimensions: [l, h]
  } = this;
  switch ((r * 4 + o) / 90) {
    case 1:
      return [1 - s - n, t, n, i];
    case 2:
      return [1 - t - i, 1 - s - n, i, n];
    case 3:
      return [s, 1 - t - i, n, i];
    case 4:
      return [t, s - i * (l / h), n * (h / l), i * (l / h)];
    case 5:
      return [1 - s, t, i * (l / h), n * (h / l)];
    case 6:
      return [1 - t - n * (h / l), 1 - s, n * (h / l), i * (l / h)];
    case 7:
      return [s - i * (l / h), 1 - t - n * (h / l), i * (l / h), n * (h / l)];
    case 8:
      return [t - i, s - n, i, n];
    case 9:
      return [1 - s, t - i, n, i];
    case 10:
      return [1 - t, 1 - s, i, n];
    case 11:
      return [s - n, 1 - t, n, i];
    case 12:
      return [t - n * (h / l), s, n * (h / l), i * (l / h)];
    case 13:
      return [1 - s - i * (l / h), t - n * (h / l), i * (l / h), n * (h / l)];
    case 14:
      return [1 - t, 1 - s - i * (l / h), n * (h / l), i * (l / h)];
    case 15:
      return [s, 1 - t, i * (l / h), n * (h / l)];
    default:
      return [t, s, i, n];
  }
}, G($, "_currentDrawId", -1), G($, "_currentParent", null), b($, Xt, null), b($, ar, null), b($, or, null), b($, Xi, NaN), b($, Yi, null), b($, Ki, null), b($, lr, NaN), G($, "_INNER_MARGIN", 3);
let od = $;
var ks, Yt, Kt, hr, Pa, ge, qt, Qe, cr, dr, ur, Ia, fh;
class am {
  constructor(e, t, s, i, n, r) {
    b(this, Ia);
    b(this, ks, new Float64Array(6));
    b(this, Yt);
    b(this, Kt);
    b(this, hr);
    b(this, Pa);
    b(this, ge);
    b(this, qt, "");
    b(this, Qe, 0);
    b(this, cr, new Th());
    b(this, dr);
    b(this, ur);
    m(this, dr, s), m(this, ur, i), m(this, hr, n), m(this, Pa, r), [e, t] = y(this, Ia, fh).call(this, e, t);
    const o = m(this, Yt, [NaN, NaN, NaN, NaN, e, t]);
    m(this, ge, [e, t]), m(this, Kt, [{
      line: o,
      points: a(this, ge)
    }]), a(this, ks).set(o, 0);
  }
  updateProperty(e, t) {
    e === "stroke-width" && m(this, Pa, t);
  }
  isEmpty() {
    return !a(this, Kt) || a(this, Kt).length === 0;
  }
  isCancellable() {
    return a(this, ge).length <= 10;
  }
  add(e, t) {
    [e, t] = y(this, Ia, fh).call(this, e, t);
    const [s, i, n, r] = a(this, ks).subarray(2, 6), o = e - n, l = t - r;
    return Math.hypot(a(this, dr) * o, a(this, ur) * l) <= 2 ? null : (a(this, ge).push(e, t), isNaN(s) ? (a(this, ks).set([n, r, e, t], 2), a(this, Yt).push(NaN, NaN, NaN, NaN, e, t), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(a(this, ks)[0]) && a(this, Yt).splice(6, 6), a(this, ks).set([s, i, n, r, e, t], 0), a(this, Yt).push(...H.createBezierPoints(s, i, n, r, e, t)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(e, t) {
    const s = this.add(e, t);
    return s || (a(this, ge).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(e, t, s, i, n) {
    m(this, dr, s), m(this, ur, i), m(this, hr, n), [e, t] = y(this, Ia, fh).call(this, e, t);
    const r = m(this, Yt, [NaN, NaN, NaN, NaN, e, t]);
    m(this, ge, [e, t]);
    const o = a(this, Kt).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), a(this, Kt).push({
      line: r,
      points: a(this, ge)
    }), a(this, ks).set(r, 0), m(this, Qe, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return a(this, Kt).at(-1);
  }
  setLastElement(e) {
    return a(this, Kt) ? (a(this, Kt).push(e), m(this, Yt, e.line), m(this, ge, e.points), m(this, Qe, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : a(this, cr).setLastElement(e);
  }
  removeLastElement() {
    if (!a(this, Kt))
      return a(this, cr).removeLastElement();
    a(this, Kt).pop(), m(this, qt, "");
    for (let e = 0, t = a(this, Kt).length; e < t; e++) {
      const {
        line: s,
        points: i
      } = a(this, Kt)[e];
      m(this, Yt, s), m(this, ge, i), m(this, Qe, 0), this.toSVGPath();
    }
    return {
      path: {
        d: a(this, qt)
      }
    };
  }
  toSVGPath() {
    const e = H.svgRound(a(this, Yt)[4]), t = H.svgRound(a(this, Yt)[5]);
    if (a(this, ge).length === 2)
      return m(this, qt, `${a(this, qt)} M ${e} ${t} Z`), a(this, qt);
    if (a(this, ge).length <= 6) {
      const i = a(this, qt).lastIndexOf("M");
      m(this, qt, `${a(this, qt).slice(0, i)} M ${e} ${t}`), m(this, Qe, 6);
    }
    if (a(this, ge).length === 4) {
      const i = H.svgRound(a(this, Yt)[10]), n = H.svgRound(a(this, Yt)[11]);
      return m(this, qt, `${a(this, qt)} L ${i} ${n}`), m(this, Qe, 12), a(this, qt);
    }
    const s = [];
    a(this, Qe) === 0 && (s.push(`M ${e} ${t}`), m(this, Qe, 6));
    for (let i = a(this, Qe), n = a(this, Yt).length; i < n; i += 6) {
      const [r, o, l, h, d, u] = a(this, Yt).slice(i, i + 6).map(H.svgRound);
      s.push(`C${r} ${o} ${l} ${h} ${d} ${u}`);
    }
    return m(this, qt, a(this, qt) + s.join(" ")), m(this, Qe, a(this, Yt).length), a(this, qt);
  }
  getOutlines(e, t, s, i) {
    const n = a(this, Kt).at(-1);
    return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), a(this, cr).build(a(this, Kt), e, t, s, a(this, hr), a(this, Pa), i), m(this, ks, null), m(this, Yt, null), m(this, Kt, null), m(this, qt, null), a(this, cr);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
ks = new WeakMap(), Yt = new WeakMap(), Kt = new WeakMap(), hr = new WeakMap(), Pa = new WeakMap(), ge = new WeakMap(), qt = new WeakMap(), Qe = new WeakMap(), cr = new WeakMap(), dr = new WeakMap(), ur = new WeakMap(), Ia = new WeakSet(), fh = function(e, t) {
  return H._normalizePoint(e, t, a(this, dr), a(this, ur), a(this, hr));
};
var me, _l, Ll, Be, Fs, Ns, Ma, _a, La, ee, zs, Jf, Zf, qf;
const Fd = class Fd extends H {
  constructor() {
    super(...arguments);
    b(this, ee);
    b(this, me);
    b(this, _l, 0);
    b(this, Ll);
    b(this, Be);
    b(this, Fs);
    b(this, Ns);
    b(this, Ma);
    b(this, _a);
    b(this, La);
  }
  build(t, s, i, n, r, o, l) {
    m(this, Fs, s), m(this, Ns, i), m(this, Ma, n), m(this, _a, r), m(this, La, o), m(this, Ll, l ?? 0), m(this, Be, t), y(this, ee, Zf).call(this);
  }
  setLastElement(t) {
    return a(this, Be).push(t), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return a(this, Be).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const t = [];
    for (const {
      line: s
    } of a(this, Be)) {
      if (t.push(`M${H.svgRound(s[4])} ${H.svgRound(s[5])}`), s.length === 6) {
        t.push("Z");
        continue;
      }
      if (s.length === 12) {
        t.push(`L${H.svgRound(s[10])} ${H.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, n = s.length; i < n; i += 6) {
        const [r, o, l, h, d, u] = s.subarray(i, i + 6).map(H.svgRound);
        t.push(`C${r} ${o} ${l} ${h} ${d} ${u}`);
      }
    }
    return t.join("");
  }
  serialize([t, s, i, n], r) {
    const o = [], l = [], [h, d, u, f] = y(this, ee, Jf).call(this);
    let p, g, v, w, A, S, x, T, E;
    switch (a(this, _a)) {
      case 0:
        E = H._rescale, p = t, g = s + n, v = i, w = -n, A = t + h * i, S = s + (1 - d - f) * n, x = t + (h + u) * i, T = s + (1 - d) * n;
        break;
      case 90:
        E = H._rescaleAndSwap, p = t, g = s, v = i, w = n, A = t + d * i, S = s + h * n, x = t + (d + f) * i, T = s + (h + u) * n;
        break;
      case 180:
        E = H._rescale, p = t + i, g = s, v = -i, w = n, A = t + (1 - h - u) * i, S = s + d * n, x = t + (1 - h) * i, T = s + (d + f) * n;
        break;
      case 270:
        E = H._rescaleAndSwap, p = t + i, g = s + n, v = -i, w = -n, A = t + (1 - d - f) * i, S = s + (1 - h - u) * n, x = t + (1 - d) * i, T = s + (1 - h) * n;
        break;
    }
    for (const {
      line: C,
      points: R
    } of a(this, Be))
      o.push(E(C, p, g, v, w, r ? new Array(C.length) : null)), l.push(E(R, p, g, v, w, r ? new Array(R.length) : null));
    return {
      lines: o,
      points: l,
      rect: [A, S, x, T]
    };
  }
  static deserialize(t, s, i, n, r, {
    paths: {
      lines: o,
      points: l
    },
    rotation: h,
    thickness: d
  }) {
    const u = [];
    let f, p, g, v, w;
    switch (h) {
      case 0:
        w = H._rescale, f = -t / i, p = s / n + 1, g = 1 / i, v = -1 / n;
        break;
      case 90:
        w = H._rescaleAndSwap, f = -s / n, p = -t / i, g = 1 / n, v = 1 / i;
        break;
      case 180:
        w = H._rescale, f = t / i + 1, p = -s / n, g = -1 / i, v = 1 / n;
        break;
      case 270:
        w = H._rescaleAndSwap, f = s / n + 1, p = t / i + 1, g = -1 / n, v = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const S of l) {
        const x = S.length;
        if (x === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1]]));
          continue;
        }
        if (x === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1], NaN, NaN, NaN, NaN, S[2], S[3]]));
          continue;
        }
        const T = new Float32Array(3 * (x - 2));
        o.push(T);
        let [E, C, R, I] = S.subarray(0, 4);
        T.set([NaN, NaN, NaN, NaN, E, C], 0);
        for (let P = 4; P < x; P += 2) {
          const F = S[P], L = S[P + 1];
          T.set(H.createBezierPoints(E, C, R, I, F, L), (P - 2) * 3), [E, C, R, I] = [R, I, F, L];
        }
      }
    }
    for (let S = 0, x = o.length; S < x; S++)
      u.push({
        line: w(o[S].map((T) => T ?? NaN), f, p, g, v),
        points: w(l[S].map((T) => T ?? NaN), f, p, g, v)
      });
    const A = new Fd();
    return A.build(u, i, n, 1, h, d, r), A;
  }
  get box() {
    return a(this, me);
  }
  updateProperty(t, s) {
    return t === "stroke-width" ? y(this, ee, qf).call(this, s) : null;
  }
  updateParentDimensions([t, s], i) {
    const [n, r] = y(this, ee, zs).call(this);
    m(this, Fs, t), m(this, Ns, s), m(this, Ma, i);
    const [o, l] = y(this, ee, zs).call(this), h = o - n, d = l - r, u = a(this, me);
    return u[0] -= h, u[1] -= d, u[2] += 2 * h, u[3] += 2 * d, u;
  }
  updateRotation(t) {
    return m(this, _l, t), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return a(this, me).map(H.svgRound).join(" ");
  }
  get defaultProperties() {
    const [t, s] = a(this, me);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${H.svgRound(t)} ${H.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , t, s] = a(this, me);
    let i = 0, n = 0, r = 0, o = 0, l = 0, h = 0;
    switch (a(this, _l)) {
      case 90:
        n = s / t, r = -t / s, l = t;
        break;
      case 180:
        i = -1, o = -1, l = t, h = s;
        break;
      case 270:
        n = -s / t, r = t / s, h = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${n} ${r} ${o} ${H.svgRound(l)} ${H.svgRound(h)})`;
  }
  getPathResizingSVGProperties([t, s, i, n]) {
    const [r, o] = y(this, ee, zs).call(this), [l, h, d, u] = a(this, me);
    if (Math.abs(d - r) <= H.PRECISION || Math.abs(u - o) <= H.PRECISION) {
      const w = t + i / 2 - (l + d / 2), A = s + n / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${H.svgRound(t)} ${H.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${w} ${A})`
        }
      };
    }
    const f = (i - 2 * r) / (d - 2 * r), p = (n - 2 * o) / (u - 2 * o), g = d / i, v = u / n;
    return {
      path: {
        "transform-origin": `${H.svgRound(l)} ${H.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${g} ${v}) translate(${H.svgRound(r)} ${H.svgRound(o)}) scale(${f} ${p}) translate(${H.svgRound(-r)} ${H.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([t, s, i, n]) {
    const [r, o] = y(this, ee, zs).call(this), l = a(this, me), [h, d, u, f] = l;
    if (l[0] = t, l[1] = s, l[2] = i, l[3] = n, Math.abs(u - r) <= H.PRECISION || Math.abs(f - o) <= H.PRECISION) {
      const A = t + i / 2 - (h + u / 2), S = s + n / 2 - (d + f / 2);
      for (const {
        line: x,
        points: T
      } of a(this, Be))
        H._translate(x, A, S, x), H._translate(T, A, S, T);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${H.svgRound(t)} ${H.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const p = (i - 2 * r) / (u - 2 * r), g = (n - 2 * o) / (f - 2 * o), v = -p * (h + r) + t + r, w = -g * (d + o) + s + o;
    if (p !== 1 || g !== 1 || v !== 0 || w !== 0)
      for (const {
        line: A,
        points: S
      } of a(this, Be))
        H._rescale(A, v, w, p, g, A), H._rescale(S, v, w, p, g, S);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${H.svgRound(t)} ${H.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([t, s], i) {
    const [n, r] = i, o = a(this, me), l = t - o[0], h = s - o[1];
    if (a(this, Fs) === n && a(this, Ns) === r)
      for (const {
        line: d,
        points: u
      } of a(this, Be))
        H._translate(d, l, h, d), H._translate(u, l, h, u);
    else {
      const d = a(this, Fs) / n, u = a(this, Ns) / r;
      m(this, Fs, n), m(this, Ns, r);
      for (const {
        line: f,
        points: p
      } of a(this, Be))
        H._rescale(f, l, h, d, u, f), H._rescale(p, l, h, d, u, p);
      o[2] *= d, o[3] *= u;
    }
    return o[0] = t, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${H.svgRound(t)} ${H.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const t = a(this, me);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${H.svgRound(t[0])} ${H.svgRound(t[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: t
    };
  }
};
me = new WeakMap(), _l = new WeakMap(), Ll = new WeakMap(), Be = new WeakMap(), Fs = new WeakMap(), Ns = new WeakMap(), Ma = new WeakMap(), _a = new WeakMap(), La = new WeakMap(), ee = new WeakSet(), zs = function(t = a(this, La)) {
  const s = a(this, Ll) + t / 2 * a(this, Ma);
  return a(this, _a) % 180 === 0 ? [s / a(this, Fs), s / a(this, Ns)] : [s / a(this, Ns), s / a(this, Fs)];
}, Jf = function() {
  const [t, s, i, n] = a(this, me), [r, o] = y(this, ee, zs).call(this, 0);
  return [t + r, s + o, i - 2 * r, n - 2 * o];
}, Zf = function() {
  const t = m(this, me, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: n
  } of a(this, Be)) {
    if (n.length <= 12) {
      for (let l = 4, h = n.length; l < h; l += 6) {
        const [d, u] = n.subarray(l, l + 2);
        t[0] = Math.min(t[0], d), t[1] = Math.min(t[1], u), t[2] = Math.max(t[2], d), t[3] = Math.max(t[3], u);
      }
      continue;
    }
    let r = n[4], o = n[5];
    for (let l = 6, h = n.length; l < h; l += 6) {
      const [d, u, f, p, g, v] = n.subarray(l, l + 6);
      U.bezierBoundingBox(r, o, d, u, f, p, g, v, t), r = g, o = v;
    }
  }
  const [s, i] = y(this, ee, zs).call(this);
  t[0] = Math.min(1, Math.max(0, t[0] - s)), t[1] = Math.min(1, Math.max(0, t[1] - i)), t[2] = Math.min(1, Math.max(0, t[2] + s)), t[3] = Math.min(1, Math.max(0, t[3] + i)), t[2] -= t[0], t[3] -= t[1];
}, qf = function(t) {
  const [s, i] = y(this, ee, zs).call(this);
  m(this, La, t);
  const [n, r] = y(this, ee, zs).call(this), [o, l] = [n - s, r - i], h = a(this, me);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
let Th = Fd;
var Oa;
const Nd = class Nd extends rm {
  constructor(t) {
    super();
    b(this, Oa);
    m(this, Oa, t), super.updateProperties({
      fill: "none",
      stroke: Rt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, s) {
    t === "stroke-width" && (s ?? (s = this["stroke-width"]), s *= a(this, Oa).realScale), super.updateSVGProperty(t, s);
  }
  clone() {
    const t = new Nd(a(this, Oa));
    return t.updateAll(this), t;
  }
};
Oa = new WeakMap();
let dd = Nd;
var Gh, tp;
const Mr = class Mr extends od {
  constructor(t) {
    super({
      ...t,
      name: "inkEditor"
    });
    b(this, Gh);
    this._willKeepAspectRatio = !0;
  }
  static initialize(t, s) {
    Rt.initialize(t, s), this._defaultDrawingOptions = new dd(s.viewParameters);
  }
  static getDefaultDrawingOptions(t) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(t), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return st(this, "typesMap", /* @__PURE__ */ new Map([[it.INK_THICKNESS, "stroke-width"], [it.INK_COLOR, "stroke"], [it.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(t, s, i, n, r) {
    return new am(t, s, i, n, r, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(t, s, i, n, r, o) {
    return Th.deserialize(t, s, i, n, r, o);
  }
  static async deserialize(t, s, i) {
    let n = null;
    if (t instanceof _d) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: d,
          color: u,
          opacity: f,
          borderStyle: {
            rawWidth: p
          },
          popupRef: g
        },
        parent: {
          page: {
            pageNumber: v
          }
        }
      } = t;
      n = t = {
        annotationType: Z.INK,
        color: Array.from(u),
        thickness: p,
        opacity: f,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: v - 1,
        rect: l.slice(0),
        rotation: h,
        id: d,
        deleted: !1,
        popupRef: g
      };
    }
    const r = await super.deserialize(t, s, i);
    return r.annotationElementId = t.id || null, r._initialData = n, r;
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: t,
      _drawingOptions: s,
      parent: i
    } = this;
    s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(t, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const t = this._currentParent;
    t && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), t.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: t,
    thickness: s,
    opacity: i
  }) {
    this._drawingOptions = Mr.getDefaultDrawingOptions({
      stroke: U.makeHexColor(...t),
      "stroke-width": s,
      "stroke-opacity": i
    });
  }
  serialize(t = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: s,
      points: i,
      rect: n
    } = this.serializeDraw(t), {
      _drawingOptions: {
        stroke: r,
        "stroke-opacity": o,
        "stroke-width": l
      }
    } = this, h = {
      annotationType: Z.INK,
      color: Rt._colorManager.convert(r),
      opacity: o,
      thickness: l,
      paths: {
        lines: s,
        points: i
      },
      pageIndex: this.pageIndex,
      rect: n,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return t ? h : this.annotationElementId && !y(this, Gh, tp).call(this, h) ? null : (h.id = this.annotationElementId, h);
  }
  renderAnnotationElement(t) {
    const {
      points: s,
      rect: i
    } = this.serializeDraw(!1);
    return t.updateEdited({
      rect: i,
      thickness: this._drawingOptions["stroke-width"],
      points: s
    }), null;
  }
};
Gh = new WeakSet(), tp = function(t) {
  const {
    color: s,
    thickness: i,
    opacity: n,
    pageIndex: r
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || t.color.some((o, l) => o !== s[l]) || t.thickness !== i || t.opacity !== n || t.pageIndex !== r;
}, G(Mr, "_type", "ink"), G(Mr, "_editorType", Z.INK), G(Mr, "_defaultDrawingOptions", null);
let ud = Mr;
var Ct, te, Qi, pi, Ji, Da, Bs, Hs, He, ka, ot, so, io, ph, pd, gh, gd, mh, ep;
const no = class no extends Rt {
  constructor(t) {
    super({
      ...t,
      name: "stampEditor"
    });
    b(this, ot);
    b(this, Ct, null);
    b(this, te, null);
    b(this, Qi, null);
    b(this, pi, null);
    b(this, Ji, null);
    b(this, Da, "");
    b(this, Bs, null);
    b(this, Hs, null);
    b(this, He, !1);
    b(this, ka, !1);
    m(this, pi, t.bitmapUrl), m(this, Ji, t.bitmapFile);
  }
  static initialize(t, s) {
    Rt.initialize(t, s);
  }
  static get supportedTypes() {
    return st(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`));
  }
  static get supportedTypesStr() {
    return st(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(t) {
    return this.supportedTypes.includes(t);
  }
  static paste(t, s) {
    s.pasteEditor(Z.STAMP, {
      bitmapFile: t.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var t;
    return {
      type: "stamp",
      hasAltText: !!((t = this.altTextData) != null && t.altText)
    };
  }
  static computeTelemetryFinalData(t) {
    const s = t.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(t = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: n,
      width: r,
      height: o
    } = t || this.copyCanvas(null, null, !0).imageData, l = await i.guess({
      name: "altText",
      request: {
        data: n,
        width: r,
        height: o,
        channels: n.length / (r * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1
    }), h;
  }
  remove() {
    var t;
    a(this, te) && (m(this, Ct, null), this._uiManager.imageManager.deleteId(a(this, te)), (t = a(this, Bs)) == null || t.remove(), m(this, Bs, null), a(this, Hs) && (clearTimeout(a(this, Hs)), m(this, Hs, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      a(this, te) && y(this, ot, ph).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (a(this, te) && a(this, Bs) === null && y(this, ot, ph).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(t) {
    this._isDraggable = !0, t && this.div.focus();
  }
  isEmpty() {
    return !(a(this, Qi) || a(this, Ct) || a(this, pi) || a(this, Ji) || a(this, te));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let t, s;
    if (this.width && (t = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), a(this, Ct) ? y(this, ot, pd).call(this) : y(this, ot, ph).call(this), this.width && !this.annotationElementId) {
      const [i, n] = this.parentDimensions;
      this.setAt(t * i, s * n, this.width * i, this.height * n);
    }
    return this._uiManager.addShouldRescale(this), this.div;
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    a(this, Hs) !== null && clearTimeout(a(this, Hs)), m(this, Hs, setTimeout(() => {
      m(this, Hs, null), y(this, ot, gd).call(this);
    }, 200));
  }
  copyCanvas(t, s, i = !1) {
    var p;
    t || (t = 224);
    const {
      width: n,
      height: r
    } = a(this, Ct), o = new dc();
    let l = a(this, Ct), h = n, d = r, u = null;
    if (s) {
      if (n > s || r > s) {
        const I = Math.min(s / n, s / r);
        h = Math.floor(n * I), d = Math.floor(r * I);
      }
      u = document.createElement("canvas");
      const g = u.width = Math.ceil(h * o.sx), v = u.height = Math.ceil(d * o.sy);
      a(this, He) || (l = y(this, ot, gh).call(this, g, v));
      const w = u.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let A = "white", S = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? S = "black" : (p = window.matchMedia) != null && p.call(window, "(prefers-color-scheme: dark)").matches && (A = "#8f8f9d", S = "#42414d");
      const x = 15, T = x * o.sx, E = x * o.sy, C = new OffscreenCanvas(T * 2, E * 2), R = C.getContext("2d");
      R.fillStyle = A, R.fillRect(0, 0, T * 2, E * 2), R.fillStyle = S, R.fillRect(0, 0, T, E), R.fillRect(T, E, T, E), w.fillStyle = w.createPattern(C, "repeat"), w.fillRect(0, 0, g, v), w.drawImage(l, 0, 0, l.width, l.height, 0, 0, g, v);
    }
    let f = null;
    if (i) {
      let g, v;
      if (o.symmetric && l.width < t && l.height < t)
        g = l.width, v = l.height;
      else if (l = a(this, Ct), n > t || r > t) {
        const S = Math.min(t / n, t / r);
        g = Math.floor(n * S), v = Math.floor(r * S), a(this, He) || (l = y(this, ot, gh).call(this, g, v));
      }
      const A = new OffscreenCanvas(g, v).getContext("2d", {
        willReadFrequently: !0
      });
      A.drawImage(l, 0, 0, l.width, l.height, 0, 0, g, v), f = {
        width: g,
        height: v,
        data: A.getImageData(0, 0, g, v).data
      };
    }
    return {
      canvas: u,
      width: h,
      height: d,
      imageData: f
    };
  }
  getImageForAltText() {
    return a(this, Bs);
  }
  static async deserialize(t, s, i) {
    var v;
    let n = null;
    if (t instanceof Sf) {
      const {
        data: {
          rect: w,
          rotation: A,
          id: S,
          structParent: x,
          popupRef: T
        },
        container: E,
        parent: {
          page: {
            pageNumber: C
          }
        }
      } = t, R = E.querySelector("canvas"), I = i.imageManager.getFromCanvas(E.id, R);
      R.remove();
      const P = ((v = await s._structTree.getAriaAttributes(`${Ed}${S}`)) == null ? void 0 : v.get("aria-label")) || "";
      n = t = {
        annotationType: Z.STAMP,
        bitmapId: I.id,
        bitmap: I.bitmap,
        pageIndex: C - 1,
        rect: w.slice(0),
        rotation: A,
        id: S,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: P
        },
        isSvg: !1,
        structParent: x,
        popupRef: T
      };
    }
    const r = await super.deserialize(t, s, i), {
      rect: o,
      bitmap: l,
      bitmapUrl: h,
      bitmapId: d,
      isSvg: u,
      accessibilityData: f
    } = t;
    d && i.imageManager.isValidId(d) ? (m(r, te, d), l && m(r, Ct, l)) : m(r, pi, h), m(r, He, u);
    const [p, g] = r.pageDimensions;
    return r.width = (o[2] - o[0]) / p, r.height = (o[3] - o[1]) / g, r.annotationElementId = t.id || null, f && (r.altTextData = f), r._initialData = n, m(r, ka, !!n), r;
  }
  serialize(t = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: Z.STAMP,
      bitmapId: a(this, te),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: a(this, He),
      structTreeParentId: this._structTreeParentId
    };
    if (t)
      return i.bitmapUrl = y(this, ot, mh).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: n,
      altText: r
    } = this.serializeAltText(!1);
    if (!n && r && (i.accessibilityData = {
      type: "Figure",
      alt: r
    }), this.annotationElementId) {
      const l = y(this, ot, ep).call(this, i);
      if (l.isSame)
        return null;
      l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = a(this, He) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(a(this, te)))
      s.stamps.set(a(this, te), {
        area: o,
        serialized: i
      }), i.bitmap = y(this, ot, mh).call(this, !1);
    else if (a(this, He)) {
      const l = s.stamps.get(a(this, te));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = y(this, ot, mh).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(t) {
    return t.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
Ct = new WeakMap(), te = new WeakMap(), Qi = new WeakMap(), pi = new WeakMap(), Ji = new WeakMap(), Da = new WeakMap(), Bs = new WeakMap(), Hs = new WeakMap(), He = new WeakMap(), ka = new WeakMap(), ot = new WeakSet(), so = function(t, s = !1) {
  if (!t) {
    this.remove();
    return;
  }
  m(this, Ct, t.bitmap), s || (m(this, te, t.id), m(this, He, t.isSvg)), t.file && m(this, Da, t.file.name), y(this, ot, pd).call(this);
}, io = function() {
  if (m(this, Qi, null), this._uiManager.enableWaiting(!1), !!a(this, Bs)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && a(this, Ct)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && a(this, Ct)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, ph = function() {
  if (a(this, te)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(a(this, te)).then((i) => y(this, ot, so).call(this, i, !0)).finally(() => y(this, ot, io).call(this));
    return;
  }
  if (a(this, pi)) {
    const i = a(this, pi);
    m(this, pi, null), this._uiManager.enableWaiting(!0), m(this, Qi, this._uiManager.imageManager.getFromUrl(i).then((n) => y(this, ot, so).call(this, n)).finally(() => y(this, ot, io).call(this)));
    return;
  }
  if (a(this, Ji)) {
    const i = a(this, Ji);
    m(this, Ji, null), this._uiManager.enableWaiting(!0), m(this, Qi, this._uiManager.imageManager.getFromFile(i).then((n) => y(this, ot, so).call(this, n)).finally(() => y(this, ot, io).call(this)));
    return;
  }
  const t = document.createElement("input");
  t.type = "file", t.accept = no.supportedTypesStr;
  const s = this._uiManager._signal;
  m(this, Qi, new Promise((i) => {
    t.addEventListener("change", async () => {
      if (!t.files || t.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const n = await this._uiManager.imageManager.getFromFile(t.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), y(this, ot, so).call(this, n);
      }
      i();
    }, {
      signal: s
    }), t.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => y(this, ot, io).call(this))), t.click();
}, pd = function() {
  var u;
  const {
    div: t
  } = this;
  let {
    width: s,
    height: i
  } = a(this, Ct);
  const [n, r] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * n, i = this.height * r;
  else if (s > o * n || i > o * r) {
    const f = Math.min(o * n / s, o * r / i);
    s *= f, i *= f;
  }
  const [l, h] = this.parentDimensions;
  this.setDims(s * l / n, i * h / r), this._uiManager.enableWaiting(!1);
  const d = m(this, Bs, document.createElement("canvas"));
  d.setAttribute("role", "img"), this.addContainer(d), this.width = s / n, this.height = i / r, (u = this._initialOptions) != null && u.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (t.hidden = !1), y(this, ot, gd).call(this), a(this, ka) || (this.parent.addUndoableEditor(this), m(this, ka, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), a(this, Da) && d.setAttribute("aria-label", a(this, Da));
}, gh = function(t, s) {
  const {
    width: i,
    height: n
  } = a(this, Ct);
  let r = i, o = n, l = a(this, Ct);
  for (; r > 2 * t || o > 2 * s; ) {
    const h = r, d = o;
    r > 2 * t && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(r, o);
    u.getContext("2d").drawImage(l, 0, 0, h, d, 0, 0, r, o), l = u.transferToImageBitmap();
  }
  return l;
}, gd = function() {
  const [t, s] = this.parentDimensions, {
    width: i,
    height: n
  } = this, r = new dc(), o = Math.ceil(i * t * r.sx), l = Math.ceil(n * s * r.sy), h = a(this, Bs);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const d = a(this, He) ? a(this, Ct) : y(this, ot, gh).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, o, l);
}, mh = function(t) {
  if (t) {
    if (a(this, He)) {
      const n = this._uiManager.imageManager.getSvgUrl(a(this, te));
      if (n)
        return n;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = a(this, Ct), s.getContext("2d").drawImage(a(this, Ct), 0, 0), s.toDataURL();
  }
  if (a(this, He)) {
    const [s, i] = this.pageDimensions, n = Math.round(this.width * s * nn.PDF_TO_CSS_UNITS), r = Math.round(this.height * i * nn.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(n, r);
    return o.getContext("2d").drawImage(a(this, Ct), 0, 0, a(this, Ct).width, a(this, Ct).height, 0, 0, n, r), o.transferToImageBitmap();
  }
  return structuredClone(a(this, Ct));
}, ep = function(t) {
  var o;
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, n = t.pageIndex === s, r = (((o = t.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return {
    isSame: !this._hasBeenMoved && !this._hasBeenResized && n && r,
    isSameAltText: r
  };
}, G(no, "_type", "stamp"), G(no, "_editorType", Z.STAMP);
let fd = no;
var fr, Fa, $s, Zi, gi, Je, qi, Na, pr, fs, mi, le, vi, j, tn, xt, sp, Es, vd, bd, vh;
const es = class es {
  constructor({
    uiManager: e,
    pageIndex: t,
    div: s,
    structTreeLayer: i,
    accessibilityManager: n,
    annotationLayer: r,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: d
  }) {
    b(this, xt);
    b(this, fr);
    b(this, Fa, !1);
    b(this, $s, null);
    b(this, Zi, null);
    b(this, gi, null);
    b(this, Je, /* @__PURE__ */ new Map());
    b(this, qi, !1);
    b(this, Na, !1);
    b(this, pr, !1);
    b(this, fs, null);
    b(this, mi, null);
    b(this, le, null);
    b(this, vi, null);
    b(this, j);
    const u = [...a(es, tn).values()];
    if (!es._initialized) {
      es._initialized = !0;
      for (const f of u)
        f.initialize(d, e);
    }
    e.registerEditorTypes(u), m(this, j, e), this.pageIndex = t, this.div = s, m(this, fr, n), m(this, $s, r), this.viewport = h, m(this, le, l), this.drawLayer = o, this._structTree = i, a(this, j).addLayer(this);
  }
  get isEmpty() {
    return a(this, Je).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && a(this, j).getMode() === Z.NONE;
  }
  updateToolbar(e) {
    a(this, j).updateToolbar(e);
  }
  updateMode(e = a(this, j).getMode()) {
    switch (y(this, xt, vh).call(this), e) {
      case Z.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case Z.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case Z.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: t
    } = this.div;
    for (const s of a(es, tn).values())
      t.toggle(`${s._type}Editing`, e === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(e) {
    var t;
    return e === ((t = a(this, le)) == null ? void 0 : t.div);
  }
  setEditingState(e) {
    a(this, j).setEditingState(e);
  }
  addCommands(e) {
    a(this, j).addCommands(e);
  }
  cleanUndoStack(e) {
    a(this, j).cleanUndoStack(e);
  }
  toggleDrawing(e = !1) {
    this.div.classList.toggle("drawing", !e);
  }
  togglePointerEvents(e = !1) {
    this.div.classList.toggle("disabled", !e);
  }
  toggleAnnotationLayerPointerEvents(e = !1) {
    var t;
    (t = a(this, $s)) == null || t.div.classList.toggle("disabled", !e);
  }
  async enable() {
    m(this, pr, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const e = /* @__PURE__ */ new Set();
    for (const s of a(this, Je).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (a(this, j).removeChangedExistingAnnotation(s), e.add(s.annotationElementId));
    if (!a(this, $s)) {
      m(this, pr, !1);
      return;
    }
    const t = a(this, $s).getEditableAnnotations();
    for (const s of t) {
      if (s.hide(), a(this, j).isDeletedAnnotationElement(s.data.id) || e.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
    m(this, pr, !1);
  }
  disable() {
    var i;
    m(this, Na, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
    for (const n of a(this, Je).values())
      if (n.disableEditing(), !!n.annotationElementId) {
        if (n.serialize() !== null) {
          e.set(n.annotationElementId, n);
          continue;
        } else
          t.set(n.annotationElementId, n);
        (i = this.getEditableAnnotation(n.annotationElementId)) == null || i.show(), n.remove();
      }
    if (a(this, $s)) {
      const n = a(this, $s).getEditableAnnotations();
      for (const r of n) {
        const {
          id: o
        } = r.data;
        if (a(this, j).isDeletedAnnotationElement(o))
          continue;
        let l = t.get(o);
        if (l) {
          l.resetAnnotationElement(r), l.show(!1), r.show();
          continue;
        }
        l = e.get(o), l && (a(this, j).addChangedExistingAnnotation(l), l.renderAnnotationElement(r) && l.show(!1)), r.show();
      }
    }
    y(this, xt, vh).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of a(es, tn).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), m(this, Na, !1);
  }
  getEditableAnnotation(e) {
    var t;
    return ((t = a(this, $s)) == null ? void 0 : t.getEditableAnnotation(e)) || null;
  }
  setActiveEditor(e) {
    a(this, j).getActive() !== e && a(this, j).setActiveEditor(e);
  }
  enableTextSelection() {
    var e;
    if (this.div.tabIndex = -1, (e = a(this, le)) != null && e.div && !a(this, vi)) {
      m(this, vi, new AbortController());
      const t = a(this, j).combinedSignal(a(this, vi));
      a(this, le).div.addEventListener("pointerdown", y(this, xt, sp).bind(this), {
        signal: t
      }), a(this, le).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var e;
    this.div.tabIndex = 0, (e = a(this, le)) != null && e.div && a(this, vi) && (a(this, vi).abort(), m(this, vi, null), a(this, le).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (a(this, Zi))
      return;
    m(this, Zi, new AbortController());
    const e = a(this, j).combinedSignal(a(this, Zi));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: e
    });
    const t = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", t, {
      signal: e
    }), this.div.addEventListener("pointercancel", t, {
      signal: e
    });
  }
  disableClick() {
    var e;
    (e = a(this, Zi)) == null || e.abort(), m(this, Zi, null);
  }
  attach(e) {
    a(this, Je).set(e.id, e);
    const {
      annotationElementId: t
    } = e;
    t && a(this, j).isDeletedAnnotationElement(t) && a(this, j).removeDeletedAnnotationElement(e);
  }
  detach(e) {
    var t;
    a(this, Je).delete(e.id), (t = a(this, fr)) == null || t.removePointerInTextLayer(e.contentDiv), !a(this, Na) && e.annotationElementId && a(this, j).addDeletedAnnotationElement(e);
  }
  remove(e) {
    this.detach(e), a(this, j).removeEditor(e), e.div.remove(), e.isAttachedToDOM = !1;
  }
  changeParent(e) {
    var t;
    e.parent !== this && (e.parent && e.annotationElementId && (a(this, j).addDeletedAnnotationElement(e.annotationElementId), Rt.deleteAnnotationElement(e), e.annotationElementId = null), this.attach(e), (t = e.parent) == null || t.detach(e), e.setParent(this), e.div && e.isAttachedToDOM && (e.div.remove(), this.div.append(e.div)));
  }
  add(e) {
    if (!(e.parent === this && e.isAttachedToDOM)) {
      if (this.changeParent(e), a(this, j).addEditor(e), this.attach(e), !e.isAttachedToDOM) {
        const t = e.render();
        this.div.append(t), e.isAttachedToDOM = !0;
      }
      e.fixAndSetPosition(), e.onceAdded(!a(this, pr)), a(this, j).addToAnnotationStorage(e), e._reportTelemetry(e.telemetryInitialData);
    }
  }
  moveEditorInDOM(e) {
    var s;
    if (!e.isAttachedToDOM)
      return;
    const {
      activeElement: t
    } = document;
    e.div.contains(t) && !a(this, gi) && (e._focusEventsAllowed = !1, m(this, gi, setTimeout(() => {
      m(this, gi, null), e.div.contains(document.activeElement) ? e._focusEventsAllowed = !0 : (e.div.addEventListener("focusin", () => {
        e._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: a(this, j)._signal
      }), t.focus());
    }, 0))), e._structTreeParentId = (s = a(this, fr)) == null ? void 0 : s.moveElementInDOM(this.div, e.div, e.contentDiv, !0);
  }
  addOrRebuild(e) {
    e.needsToBeRebuilt() ? (e.parent || (e.parent = this), e.rebuild(), e.show()) : this.add(e);
  }
  addUndoableEditor(e) {
    const t = () => e._uiManager.rebuild(e), s = () => {
      e.remove();
    };
    this.addCommands({
      cmd: t,
      undo: s,
      mustExec: !1
    });
  }
  getNextId() {
    return a(this, j).getId();
  }
  combinedSignal(e) {
    return a(this, j).combinedSignal(e);
  }
  canCreateNewEmptyEditor() {
    var e;
    return (e = a(this, xt, Es)) == null ? void 0 : e.canCreateNewEmptyEditor();
  }
  pasteEditor(e, t) {
    a(this, j).updateToolbar(e), a(this, j).updateMode(e);
    const {
      offsetX: s,
      offsetY: i
    } = y(this, xt, bd).call(this), n = this.getNextId(), r = y(this, xt, vd).call(this, {
      parent: this,
      id: n,
      x: s,
      y: i,
      uiManager: a(this, j),
      isCentered: !0,
      ...t
    });
    r && this.add(r);
  }
  async deserialize(e) {
    var t;
    return await ((t = a(es, tn).get(e.annotationType ?? e.annotationEditorType)) == null ? void 0 : t.deserialize(e, this, a(this, j))) || null;
  }
  createAndAddNewEditor(e, t, s = {}) {
    const i = this.getNextId(), n = y(this, xt, vd).call(this, {
      parent: this,
      id: i,
      x: e.offsetX,
      y: e.offsetY,
      uiManager: a(this, j),
      isCentered: t,
      ...s
    });
    return n && this.add(n), n;
  }
  addNewEditor() {
    this.createAndAddNewEditor(y(this, xt, bd).call(this), !0);
  }
  setSelected(e) {
    a(this, j).setSelected(e);
  }
  toggleSelected(e) {
    a(this, j).toggleSelected(e);
  }
  unselect(e) {
    a(this, j).unselect(e);
  }
  pointerup(e) {
    var s;
    const {
      isMac: t
    } = be.platform;
    if (!(e.button !== 0 || e.ctrlKey && t) && e.target === this.div && a(this, qi) && (m(this, qi, !1), !((s = a(this, xt, Es)) != null && s.isDrawer && a(this, xt, Es).supportMultipleDrawings))) {
      if (!a(this, Fa)) {
        m(this, Fa, !0);
        return;
      }
      if (a(this, j).getMode() === Z.STAMP) {
        a(this, j).unselectAll();
        return;
      }
      this.createAndAddNewEditor(e, !1);
    }
  }
  pointerdown(e) {
    var i;
    if (a(this, j).getMode() === Z.HIGHLIGHT && this.enableTextSelection(), a(this, qi)) {
      m(this, qi, !1);
      return;
    }
    const {
      isMac: t
    } = be.platform;
    if (e.button !== 0 || e.ctrlKey && t || e.target !== this.div)
      return;
    if (m(this, qi, !0), (i = a(this, xt, Es)) != null && i.isDrawer) {
      this.startDrawingSession(e);
      return;
    }
    const s = a(this, j).getActive();
    m(this, Fa, !s || s.isEmpty());
  }
  startDrawingSession(e) {
    if (this.div.focus(), a(this, fs)) {
      a(this, xt, Es).startDrawing(this, a(this, j), !1, e);
      return;
    }
    a(this, j).setCurrentDrawingSession(this), m(this, fs, new AbortController());
    const t = a(this, j).combinedSignal(a(this, fs));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (m(this, mi, null), this.commitOrRemove());
    }, {
      signal: t
    }), a(this, xt, Es).startDrawing(this, a(this, j), !1, e);
  }
  pause(e) {
    if (e) {
      const {
        activeElement: t
      } = document;
      this.div.contains(t) && m(this, mi, t);
      return;
    }
    a(this, mi) && setTimeout(() => {
      var t;
      (t = a(this, mi)) == null || t.focus(), m(this, mi, null);
    }, 0);
  }
  endDrawingSession(e = !1) {
    return a(this, fs) ? (a(this, j).setCurrentDrawingSession(null), a(this, fs).abort(), m(this, fs, null), m(this, mi, null), a(this, xt, Es).endDrawing(e)) : null;
  }
  findNewParent(e, t, s) {
    const i = a(this, j).findParent(t, s);
    return i === null || i === this ? !1 : (i.changeParent(e), !0);
  }
  commitOrRemove() {
    return a(this, fs) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    a(this, fs) && a(this, xt, Es).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var e, t;
    this.commitOrRemove(), ((e = a(this, j).getActive()) == null ? void 0 : e.parent) === this && (a(this, j).commitOrRemove(), a(this, j).setActiveEditor(null)), a(this, gi) && (clearTimeout(a(this, gi)), m(this, gi, null));
    for (const s of a(this, Je).values())
      (t = a(this, fr)) == null || t.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, a(this, Je).clear(), a(this, j).removeLayer(this);
  }
  render({
    viewport: e
  }) {
    this.viewport = e, mr(this.div, e);
    for (const t of a(this, j).getEditors(this.pageIndex))
      this.add(t), t.rebuild();
    this.updateMode();
  }
  update({
    viewport: e
  }) {
    a(this, j).commitOrRemove(), y(this, xt, vh).call(this);
    const t = this.viewport.rotation, s = e.rotation;
    if (this.viewport = e, mr(this.div, {
      rotation: s
    }), t !== s)
      for (const i of a(this, Je).values())
        i.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: e,
      pageHeight: t
    } = this.viewport.rawDims;
    return [e, t];
  }
  get scale() {
    return a(this, j).viewParameters.realScale;
  }
};
fr = new WeakMap(), Fa = new WeakMap(), $s = new WeakMap(), Zi = new WeakMap(), gi = new WeakMap(), Je = new WeakMap(), qi = new WeakMap(), Na = new WeakMap(), pr = new WeakMap(), fs = new WeakMap(), mi = new WeakMap(), le = new WeakMap(), vi = new WeakMap(), j = new WeakMap(), tn = new WeakMap(), xt = new WeakSet(), sp = function(e) {
  a(this, j).unselectAll();
  const {
    target: t
  } = e;
  if (t === a(this, le).div || (t.getAttribute("role") === "img" || t.classList.contains("endOfContent")) && a(this, le).div.contains(t)) {
    const {
      isMac: s
    } = be.platform;
    if (e.button !== 0 || e.ctrlKey && s)
      return;
    a(this, j).showAllEditors("highlight", !0, !0), a(this, le).div.classList.add("free"), this.toggleDrawing(), xh.startHighlighting(this, a(this, j).direction === "ltr", {
      target: a(this, le).div,
      x: e.x,
      y: e.y
    }), a(this, le).div.addEventListener("pointerup", () => {
      a(this, le).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: a(this, j)._signal
    }), e.preventDefault();
  }
}, Es = function() {
  return a(es, tn).get(a(this, j).getMode());
}, vd = function(e) {
  const t = a(this, xt, Es);
  return t ? new t.prototype.constructor(e) : null;
}, bd = function() {
  const {
    x: e,
    y: t,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), n = Math.max(0, e), r = Math.max(0, t), o = Math.min(window.innerWidth, e + s), l = Math.min(window.innerHeight, t + i), h = (n + o) / 2 - e, d = (r + l) / 2 - t, [u, f] = this.viewport.rotation % 180 === 0 ? [h, d] : [d, h];
  return {
    offsetX: u,
    offsetY: f
  };
}, vh = function() {
  for (const e of a(this, Je).values())
    e.isEmpty() && e.remove();
}, G(es, "_initialized", !1), b(es, tn, new Map([Jc, ud, fd, xh].map((e) => [e._editorType, e])));
let md = es;
var ps, Ol, ve, gr, zh, ip, js, Ad, np, wd;
const ne = class ne {
  constructor({
    pageIndex: e
  }) {
    b(this, js);
    b(this, ps, null);
    b(this, Ol, 0);
    b(this, ve, /* @__PURE__ */ new Map());
    b(this, gr, /* @__PURE__ */ new Map());
    this.pageIndex = e;
  }
  setParent(e) {
    if (!a(this, ps)) {
      m(this, ps, e);
      return;
    }
    if (a(this, ps) !== e) {
      if (a(this, ve).size > 0)
        for (const t of a(this, ve).values())
          t.remove(), e.append(t);
      m(this, ps, e);
    }
  }
  static get _svgFactory() {
    return st(this, "_svgFactory", new Md());
  }
  draw(e, t = !1, s = !1) {
    const i = ue(this, Ol)._++, n = y(this, js, Ad).call(this), r = ne._svgFactory.createElement("defs");
    n.append(r);
    const o = ne._svgFactory.createElement("path");
    r.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), t && a(this, gr).set(i, o);
    const h = s ? y(this, js, np).call(this, r, l) : null, d = ne._svgFactory.createElement("use");
    return n.append(d), d.setAttribute("href", `#${l}`), this.updateProperties(n, e), a(this, ve).set(i, n), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(e, t) {
    const s = ue(this, Ol)._++, i = y(this, js, Ad).call(this), n = ne._svgFactory.createElement("defs");
    i.append(n);
    const r = ne._svgFactory.createElement("path");
    n.append(r);
    const o = `path_p${this.pageIndex}_${s}`;
    r.setAttribute("id", o), r.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (t) {
      const u = ne._svgFactory.createElement("mask");
      n.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const f = ne._svgFactory.createElement("rect");
      u.append(f), f.setAttribute("width", "1"), f.setAttribute("height", "1"), f.setAttribute("fill", "white");
      const p = ne._svgFactory.createElement("use");
      u.append(p), p.setAttribute("href", `#${o}`), p.setAttribute("stroke", "none"), p.setAttribute("fill", "black"), p.setAttribute("fill-rule", "nonzero"), p.classList.add("mask");
    }
    const h = ne._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const d = h.cloneNode();
    return i.append(d), h.classList.add("mainOutline"), d.classList.add("secondaryOutline"), this.updateProperties(i, e), a(this, ve).set(s, i), s;
  }
  finalizeDraw(e, t) {
    a(this, gr).delete(e), this.updateProperties(e, t);
  }
  updateProperties(e, t) {
    var l;
    if (!t)
      return;
    const {
      root: s,
      bbox: i,
      rootClass: n,
      path: r
    } = t, o = typeof e == "number" ? a(this, ve).get(e) : e;
    if (o) {
      if (s && y(this, js, wd).call(this, o, s), i && y(l = ne, zh, ip).call(l, o, i), n) {
        const {
          classList: h
        } = o;
        for (const [d, u] of Object.entries(n))
          h.toggle(d, u);
      }
      if (r) {
        const d = o.firstChild.firstChild;
        y(this, js, wd).call(this, d, r);
      }
    }
  }
  updateParent(e, t) {
    if (t === this)
      return;
    const s = a(this, ve).get(e);
    s && (a(t, ps).append(s), a(this, ve).delete(e), a(t, ve).set(e, s));
  }
  remove(e) {
    a(this, gr).delete(e), a(this, ps) !== null && (a(this, ve).get(e).remove(), a(this, ve).delete(e));
  }
  destroy() {
    m(this, ps, null);
    for (const e of a(this, ve).values())
      e.remove();
    a(this, ve).clear(), a(this, gr).clear();
  }
};
ps = new WeakMap(), Ol = new WeakMap(), ve = new WeakMap(), gr = new WeakMap(), zh = new WeakSet(), ip = function(e, [t, s, i, n]) {
  const {
    style: r
  } = e;
  r.top = `${100 * s}%`, r.left = `${100 * t}%`, r.width = `${100 * i}%`, r.height = `${100 * n}%`;
}, js = new WeakSet(), Ad = function() {
  const e = ne._svgFactory.create(1, 1, !0);
  return a(this, ps).append(e), e.setAttribute("aria-hidden", !0), e;
}, np = function(e, t) {
  const s = ne._svgFactory.createElement("clipPath");
  e.append(s);
  const i = `clip_${t}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const n = ne._svgFactory.createElement("use");
  return s.append(n), n.setAttribute("href", `#${t}`), n.classList.add("clip"), i;
}, wd = function(e, t) {
  for (const [s, i] of Object.entries(t))
    i === null ? e.removeAttribute(s) : e.setAttribute(s, i);
}, b(ne, zh);
let yd = ne;
globalThis.pdfjsTestingUtils = {
  HighlightOutliner: qc
};
var om = W.AbortException, lm = W.AnnotationEditorLayer, hm = W.AnnotationEditorParamsType, cm = W.AnnotationEditorType, dm = W.AnnotationEditorUIManager, um = W.AnnotationLayer, fm = W.AnnotationMode, pm = W.ColorPicker, gm = W.DOMSVGFactory, mm = W.DrawLayer, vm = W.FeatureTest, bm = W.GlobalWorkerOptions, ym = W.ImageKind, Am = W.InvalidPDFException, wm = W.MissingPDFException, Sm = W.OPS, Em = W.OutputScale, xm = W.PDFDataRangeTransport, Tm = W.PDFDateString, Cm = W.PDFWorker, Rm = W.PasswordResponses, Pm = W.PermissionFlag, Im = W.PixelsPerInch, Mm = W.RenderingCancelledException, _m = W.TextLayer, Lm = W.TouchManager, Om = W.UnexpectedResponseException, Dm = W.Util, km = W.VerbosityLevel, Fm = W.XfaLayer, Nm = W.build, Bm = W.createValidAbsoluteUrl, Hm = W.fetchData, $m = W.getDocument, jm = W.getFilenameFromUrl, Um = W.getPdfFilenameFromUrl, Gm = W.getXfaPageViewport, zm = W.isDataScheme, Vm = W.isPdfFile, Wm = W.noContextMenu, Xm = W.normalizeUnicode, Ym = W.setLayerDimensions, Km = W.shadow, Qm = W.stopEvent, Jm = W.version;
const Zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: om,
  AnnotationEditorLayer: lm,
  AnnotationEditorParamsType: hm,
  AnnotationEditorType: cm,
  AnnotationEditorUIManager: dm,
  AnnotationLayer: um,
  AnnotationMode: fm,
  ColorPicker: pm,
  DOMSVGFactory: gm,
  DrawLayer: mm,
  FeatureTest: vm,
  GlobalWorkerOptions: bm,
  ImageKind: ym,
  InvalidPDFException: Am,
  MissingPDFException: wm,
  OPS: Sm,
  OutputScale: Em,
  PDFDataRangeTransport: xm,
  PDFDateString: Tm,
  PDFWorker: Cm,
  PasswordResponses: Rm,
  PermissionFlag: Pm,
  PixelsPerInch: Im,
  RenderingCancelledException: Mm,
  TextLayer: _m,
  TouchManager: Lm,
  UnexpectedResponseException: Om,
  Util: Dm,
  VerbosityLevel: km,
  XfaLayer: Fm,
  build: Nm,
  createValidAbsoluteUrl: Bm,
  fetchData: Hm,
  getDocument: $m,
  getFilenameFromUrl: jm,
  getPdfFilenameFromUrl: Um,
  getXfaPageViewport: Gm,
  isDataScheme: zm,
  isPdfFile: Vm,
  noContextMenu: Wm,
  normalizeUnicode: Xm,
  setLayerDimensions: Ym,
  shadow: Km,
  stopEvent: Qm,
  version: Jm
}, Symbol.toStringTag, { value: "Module" }));
globalThis.pdfjs = Zm;
