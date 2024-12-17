"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5001], {
        36525: (t, e, r) => {
            r.d(e, {
                $Bq: () => iJ,
                $hI: () => ti,
                ADD: () => Y,
                ALl: () => iy,
                AYU: () => nf,
                Alu: () => ng,
                AwN: () => i_,
                BdH: () => T,
                C5G: () => iC,
                CTo: () => ns,
                EHS: () => im,
                EN$: () => iA,
                EWt: () => il,
                F$L: () => iI,
                FR8: () => nw,
                FiO: () => nd,
                GuA: () => i4,
                HNf: () => nn,
                Hbs: () => nN,
                Hjj: () => i9,
                IjX: () => r4,
                K3g: () => G,
                Lln: () => P,
                Lp_: () => ip,
                M8n: () => ny,
                OP1: () => i7,
                PUk: () => K,
                Pa8: () => ic,
                QJh: () => iG,
                Qhg: () => nr,
                TRk: () => tt,
                TZl: () => ig,
                TeY: () => nv,
                Tw2: () => iE,
                U0i: () => ik,
                V7m: () => iO,
                V9G: () => nm,
                VBM: () => iu,
                Van: () => i6,
                WWN: () => is,
                Wx8: () => Q,
                X3c: () => nb,
                XqR: () => nS,
                Xw0: () => X,
                YcA: () => iS,
                Zz7: () => S,
                _Yb: () => E,
                _dF: () => Z,
                aF0: () => nt,
                aa1: () => iU,
                b07: () => ne,
                bEt: () => ia,
                c82: () => W,
                e8_: () => ir,
                esh: () => nc,
                gOF: () => V,
                gZm: () => tn,
                h0Y: () => H,
                hEn: () => $,
                hVC: () => ii,
                hwK: () => r9,
                iV1: () => nA,
                iui: () => iB,
                jTh: () => tr,
                jUZ: () => z,
                kob: () => i3,
                kuU: () => np,
                lFF: () => q,
                lVv: () => U,
                mr0: () => nu,
                n3s: () => te,
                n6V: () => iP,
                nWe: () => i2,
                nyL: () => nR,
                oKp: () => nM,
                ojD: () => L,
                ovp: () => ib,
                ps1: () => iR,
                q_h: () => r5,
                sc7: () => nB,
                sc_: () => io,
                tLy: () => nx,
                tk0: () => nh,
                two: () => iv,
                uym: () => n_,
                w47: () => F,
                w8K: () => to,
                wYp: () => iQ,
                wa2: () => iM,
                x0t: () => ix,
                xkc: () => r8,
                z2N: () => nE
            });
            var i, n, o, f, s, u = r(48468),
                h = r(88900),
                a = r(38196),
                l = r(42063),
                c = r(86663),
                d = r(51612),
                p = r(16804),
                m = r(37052),
                g = r(50204),
                v = r(774),
                b = r(53155),
                A = r(86729),
                y = r(37802),
                w = r(43228),
                x = r(77836),
                M = r(48287).Buffer;

            function E(t) {
                let [e, r] = t.split(":");
                return {
                    namespace: e,
                    reference: r
                }
            }

            function S(t, e = []) {
                let r = [];
                return Object.keys(t).forEach(i => {
                    if (e.length && !e.includes(i)) return;
                    let n = t[i];
                    r.push(...n.accounts)
                }), r
            }

            function I(t, e) {
                return t.includes(":") ? [t] : e.chains || []
            }
            var N = Object.defineProperty,
                B = Object.getOwnPropertySymbols,
                C = Object.prototype.hasOwnProperty,
                _ = Object.prototype.propertyIsEnumerable,
                O = (t, e, r) => e in t ? N(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                R = (t, e) => {
                    for (var r in e || (e = {})) C.call(e, r) && O(t, r, e[r]);
                    if (B)
                        for (var r of B(e)) _.call(e, r) && O(t, r, e[r]);
                    return t
                };
            let k = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function P() {
                return "u" > typeof x && "u" > typeof x.versions && "u" > typeof x.versions.node
            }

            function U() {
                return !(0, a.getDocument)() && !!(0, a.getNavigator)() && "ReactNative" === navigator.product
            }

            function T() {
                return !P() && !!(0, a.getNavigator)() && !!(0, a.getDocument)()
            }

            function D() {
                return U() ? k.reactNative : P() ? k.node : T() ? k.browser : k.unknown
            }

            function F() {
                var t;
                try {
                    return U() && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Application) ? null == (t = r.g.Application) ? void 0 : t.applicationId : void 0
                } catch {
                    return
                }
            }

            function q() {
                return (0, l.g)() || {
                    name: "",
                    description: "",
                    url: "",
                    icons: [""]
                }
            }

            function L(t, e, i) {
                let n = function() {
                        if (D() === k.reactNative && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Platform)) {
                            let {
                                OS: t,
                                Version: e
                            } = r.g.Platform;
                            return [t, e].join("-")
                        }
                        let t = (0, u.o0)();
                        if (null === t) return "unknown";
                        let e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
                        return "browser" === t.type ? [e, t.name, t.version].join("-") : [e, t.version].join("-")
                    }(),
                    o = function() {
                        var t;
                        let e = D();
                        return e === k.browser ? [e, (null == (t = (0, a.getLocation)()) ? void 0 : t.host) || "unknown"].join(":") : e
                    }();
                return [
                    [t, e].join("-"), ["js", i].join("-"), n, o
                ].join("/")
            }

            function z({
                protocol: t,
                version: e,
                relayUrl: r,
                sdkVersion: i,
                auth: n,
                projectId: o,
                useOnCloseEvent: f,
                bundleId: s
            }) {
                var u, h;
                let a;
                let l = r.split("?"),
                    d = L(t, e, i),
                    p = (u = l[1] || "", h = {
                        auth: n,
                        ua: d,
                        projectId: o,
                        useOnCloseEvent: f || void 0,
                        origin: s || void 0
                    }, a = R(R({}, a = c.parse(u)), h), u = c.stringify(a));
                return l[0] + "?" + p
            }

            function j(t, e) {
                return t.filter(t => e.includes(t)).length === t.length
            }

            function H(t) {
                return Object.fromEntries(t.entries())
            }

            function K(t) {
                return new Map(Object.entries(t))
            }

            function Q(t = h.FIVE_MINUTES, e) {
                let r, i, n;
                let o = (0, h.toMiliseconds)(t || h.FIVE_MINUTES);
                return {
                    resolve: t => {
                        n && r && (clearTimeout(n), r(t))
                    },
                    reject: t => {
                        n && i && (clearTimeout(n), i(t))
                    },
                    done: () => new Promise((t, f) => {
                        n = setTimeout(() => {
                            f(Error(e))
                        }, o), r = t, i = f
                    })
                }
            }

            function G(t, e, r) {
                return new Promise(async (i, n) => {
                    let o = setTimeout(() => n(Error(r)), e);
                    try {
                        let e = await t;
                        i(e)
                    } catch (t) {
                        n(t)
                    }
                    clearTimeout(o)
                })
            }

            function J(t, e) {
                if ("string" == typeof e && e.startsWith(`${t}:`)) return e;
                if ("topic" === t.toLowerCase()) {
                    if ("string" != typeof e) throw Error('Value must be "string" for expirer target type: topic');
                    return `topic:${e}`
                }
                if ("id" === t.toLowerCase()) {
                    if ("number" != typeof e) throw Error('Value must be "number" for expirer target type: id');
                    return `id:${e}`
                }
                throw Error(`Unknown expirer target type: ${t}`)
            }

            function Y(t) {
                return J("topic", t)
            }

            function V(t) {
                return J("id", t)
            }

            function W(t) {
                let [e, r] = t.split(":"), i = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === e && "string" == typeof r) i.topic = r;
                else if ("id" === e && Number.isInteger(Number(r))) i.id = Number(r);
                else throw Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
                return i
            }

            function X(t, e) {
                return (0, h.fromMiliseconds)((e || Date.now()) + (0, h.toMiliseconds)(t))
            }

            function Z(t) {
                return Date.now() >= (0, h.toMiliseconds)(t)
            }

            function $(t, e) {
                return `${t}${e?`:${e}`:""}`
            }

            function tt(t = [], e = []) {
                return [...new Set([...t, ...e])]
            }
            async function te({
                id: t,
                topic: e,
                wcDeepLink: i
            }) {
                var n;
                try {
                    if (!i) return;
                    let o = "string" == typeof i ? JSON.parse(i) : i,
                        f = o ? .href;
                    if ("string" != typeof f) return;
                    let s = function(t, e, r) {
                            let i = `requestId=${e}&sessionTopic=${r}`;
                            t.endsWith("/") && (t = t.slice(0, -1));
                            let n = `${t}`;
                            if (t.startsWith("https://t.me")) {
                                let e = t.includes("?") ? "&startapp=" : "?startapp=";
                                n = `${n}${e}${function(t,e=!1){let r=M.from(t).toString("base64");return e?r.replace(/[=]/g,""):r}(i,!0)}`
                            } else n = `${n}/wc?${i}`;
                            return n
                        }(f, t, e),
                        u = D();
                    if (u === k.browser) {
                        if (!(null != (n = (0, a.getDocument)()) && n.hasFocus())) {
                            console.warn("Document does not have focus, skipping deeplink.");
                            return
                        }
                        s.startsWith("https://") || s.startsWith("http://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "u" > typeof window && (window.TelegramWebviewProxy || window.Telegram || window.TelegramWebviewProxyProto) ? "_blank" : "_self", "noreferrer noopener")
                    } else u === k.reactNative && "u" > typeof(null == r.g ? void 0 : r.g.Linking) && await r.g.Linking.openURL(s)
                } catch (t) {
                    console.error(t)
                }
            }
            async function tr(t, e) {
                let r = "";
                try {
                    if (T() && (r = localStorage.getItem(e))) return r;
                    r = await t.getItem(e)
                } catch (t) {
                    console.error(t)
                }
                return r
            }

            function ti(t, e) {
                if (!t.includes(e)) return null;
                let r = t.split(/([&,?,=])/),
                    i = r.indexOf(e);
                return r[i + 2]
            }

            function tn() {
                return "u" > typeof crypto && null != crypto && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, t => {
                    let e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                })
            }

            function to() {
                return "u" > typeof x && "true" === x.env.IS_VITEST
            }

            function tf(t) {
                return M.from(t, "base64").toString("utf-8")
            }
            var ts = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                tu = {
                    exports: {}
                };
            ! function(t) {
                ! function() {
                    var e = "input is invalid type",
                        r = "object" == typeof window,
                        i = r ? window : {};
                    i.JS_SHA3_NO_WINDOW && (r = !1);
                    var n = !r && "object" == typeof self;
                    !i.JS_SHA3_NO_NODE_JS && "object" == typeof x && x.versions && x.versions.node ? i = ts : n && (i = self);
                    var o = !i.JS_SHA3_NO_COMMON_JS && t.exports,
                        f = !i.JS_SHA3_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
                        s = "0123456789abcdef".split(""),
                        u = [4, 1024, 262144, 0x4000000],
                        h = [0, 8, 16, 24],
                        a = [1, 0, 32898, 0, 32906, 0x80000000, 0x80008000, 0x80000000, 32907, 0, 0x80000001, 0, 0x80008081, 0x80000000, 32777, 0x80000000, 138, 0, 136, 0, 0x80008009, 0, 0x8000000a, 0, 0x8000808b, 0, 139, 0x80000000, 32905, 0x80000000, 32771, 0x80000000, 32770, 0x80000000, 128, 0x80000000, 32778, 0, 0x8000000a, 0x80000000, 0x80008081, 0x80000000, 32896, 0x80000000, 0x80000001, 0, 0x80008008, 0x80000000],
                        l = [224, 256, 384, 512],
                        c = [128, 256],
                        d = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                        p = {
                            128: 168,
                            256: 136
                        };
                    (i.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }), f && (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                        return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                    });
                    for (var m = function(t, e, r) {
                            return function(i) {
                                return new O(t, e, t).update(i)[r]()
                            }
                        }, g = function(t, e, r) {
                            return function(i, n) {
                                return new O(t, e, n).update(i)[r]()
                            }
                        }, v = function(t, e, r) {
                            return function(e, i, n, o) {
                                return M["cshake" + t].update(e, i, n, o)[r]()
                            }
                        }, b = function(t, e, r) {
                            return function(e, i, n, o) {
                                return M["kmac" + t].update(e, i, n, o)[r]()
                            }
                        }, A = function(t, e, r, i) {
                            for (var n = 0; n < d.length; ++n) {
                                var o = d[n];
                                t[o] = e(r, i, o)
                            }
                            return t
                        }, y = function(t, e) {
                            var r = m(t, e, "hex");
                            return r.create = function() {
                                return new O(t, e, t)
                            }, r.update = function(t) {
                                return r.create().update(t)
                            }, A(r, m, t, e)
                        }, w = [{
                            name: "keccak",
                            padding: [1, 256, 65536, 0x1000000],
                            bits: l,
                            createMethod: y
                        }, {
                            name: "sha3",
                            padding: [6, 1536, 393216, 0x6000000],
                            bits: l,
                            createMethod: y
                        }, {
                            name: "shake",
                            padding: [31, 7936, 2031616, 0x1f000000],
                            bits: c,
                            createMethod: function(t, e) {
                                var r = g(t, e, "hex");
                                return r.create = function(r) {
                                    return new O(t, e, r)
                                }, r.update = function(t, e) {
                                    return r.create(e).update(t)
                                }, A(r, g, t, e)
                            }
                        }, {
                            name: "cshake",
                            padding: u,
                            bits: c,
                            createMethod: function(t, e) {
                                var r = p[t],
                                    i = v(t, e, "hex");
                                return i.create = function(i, n, o) {
                                    return n || o ? new O(t, e, i).bytepad([n, o], r) : M["shake" + t].create(i)
                                }, i.update = function(t, e, r, n) {
                                    return i.create(e, r, n).update(t)
                                }, A(i, v, t, e)
                            }
                        }, {
                            name: "kmac",
                            padding: u,
                            bits: c,
                            createMethod: function(t, e) {
                                var r = p[t],
                                    i = b(t, e, "hex");
                                return i.create = function(i, n, o) {
                                    return new R(t, e, n).bytepad(["KMAC", o], r).bytepad([i], r)
                                }, i.update = function(t, e, r, n) {
                                    return i.create(t, r, n).update(e)
                                }, A(i, b, t, e)
                            }
                        }], M = {}, E = [], S = 0; S < w.length; ++S)
                        for (var I = w[S], N = I.bits, B = 0; B < N.length; ++B) {
                            var C = I.name + "_" + N[B];
                            if (E.push(C), M[C] = I.createMethod(N[B], I.padding), "sha3" !== I.name) {
                                var _ = I.name + N[B];
                                E.push(_), M[_] = M[C]
                            }
                        }

                    function O(t, e, r) {
                        this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                        for (var i = 0; i < 50; ++i) this.s[i] = 0
                    }

                    function R(t, e, r) {
                        O.call(this, t, e, r)
                    }
                    O.prototype.update = function(t) {
                        if (this.finalized) throw Error("finalize already called");
                        var r, i = typeof t;
                        if ("string" !== i) {
                            if ("object" === i) {
                                if (null === t) throw Error(e);
                                if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                else if (!Array.isArray(t) && (!f || !ArrayBuffer.isView(t))) throw Error(e)
                            } else throw Error(e);
                            r = !0
                        }
                        for (var n, o, s = this.blocks, u = this.byteCount, a = t.length, l = this.blockCount, c = 0, d = this.s; c < a;) {
                            if (this.reset)
                                for (this.reset = !1, s[0] = this.block, n = 1; n < l + 1; ++n) s[n] = 0;
                            if (r)
                                for (n = this.start; c < a && n < u; ++c) s[n >> 2] |= t[c] << h[3 & n++];
                            else
                                for (n = this.start; c < a && n < u; ++c)(o = t.charCodeAt(c)) < 128 ? s[n >> 2] |= o << h[3 & n++] : (o < 2048 ? s[n >> 2] |= (192 | o >> 6) << h[3 & n++] : (o < 55296 || o >= 57344 ? s[n >> 2] |= (224 | o >> 12) << h[3 & n++] : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++c)), s[n >> 2] |= (240 | o >> 18) << h[3 & n++], s[n >> 2] |= (128 | o >> 12 & 63) << h[3 & n++]), s[n >> 2] |= (128 | o >> 6 & 63) << h[3 & n++]), s[n >> 2] |= (128 | 63 & o) << h[3 & n++]);
                            if (this.lastByteIndex = n, n >= u) {
                                for (this.start = n - u, this.block = s[l], n = 0; n < l; ++n) d[n] ^= s[n];
                                k(d), this.reset = !0
                            } else this.start = n
                        }
                        return this
                    }, O.prototype.encode = function(t, e) {
                        var r = 255 & t,
                            i = 1,
                            n = [r];
                        for (t >>= 8, r = 255 & t; r > 0;) n.unshift(r), t >>= 8, r = 255 & t, ++i;
                        return e ? n.push(i) : n.unshift(i), this.update(n), n.length
                    }, O.prototype.encodeString = function(t) {
                        var r, i = typeof t;
                        if ("string" !== i) {
                            if ("object" === i) {
                                if (null === t) throw Error(e);
                                if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                else if (!Array.isArray(t) && (!f || !ArrayBuffer.isView(t))) throw Error(e)
                            } else throw Error(e);
                            r = !0
                        }
                        var n = 0,
                            o = t.length;
                        if (r) n = o;
                        else
                            for (var s = 0; s < t.length; ++s) {
                                var u = t.charCodeAt(s);
                                u < 128 ? n += 1 : u < 2048 ? n += 2 : u < 55296 || u >= 57344 ? n += 3 : (u = 65536 + ((1023 & u) << 10 | 1023 & t.charCodeAt(++s)), n += 4)
                            }
                        return n += this.encode(8 * n), this.update(t), n
                    }, O.prototype.bytepad = function(t, e) {
                        for (var r = this.encode(e), i = 0; i < t.length; ++i) r += this.encodeString(t[i]);
                        var n = e - r % e,
                            o = [];
                        return o.length = n, this.update(o), this
                    }, O.prototype.finalize = function() {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var t = this.blocks,
                                e = this.lastByteIndex,
                                r = this.blockCount,
                                i = this.s;
                            if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                                for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                            for (t[r - 1] |= 0x80000000, e = 0; e < r; ++e) i[e] ^= t[e];
                            k(i)
                        }
                    }, O.prototype.toString = O.prototype.hex = function() {
                        this.finalize();
                        for (var t, e = this.blockCount, r = this.s, i = this.outputBlocks, n = this.extraBytes, o = 0, f = 0, u = ""; f < i;) {
                            for (o = 0; o < e && f < i; ++o, ++f) u += s[(t = r[o]) >> 4 & 15] + s[15 & t] + s[t >> 12 & 15] + s[t >> 8 & 15] + s[t >> 20 & 15] + s[t >> 16 & 15] + s[t >> 28 & 15] + s[t >> 24 & 15];
                            f % e == 0 && (k(r), o = 0)
                        }
                        return n && (u += s[(t = r[o]) >> 4 & 15] + s[15 & t], n > 1 && (u += s[t >> 12 & 15] + s[t >> 8 & 15]), n > 2 && (u += s[t >> 20 & 15] + s[t >> 16 & 15])), u
                    }, O.prototype.arrayBuffer = function() {
                        this.finalize();
                        var t, e = this.blockCount,
                            r = this.s,
                            i = this.outputBlocks,
                            n = this.extraBytes,
                            o = 0,
                            f = 0,
                            s = this.outputBits >> 3;
                        t = new ArrayBuffer(n ? i + 1 << 2 : s);
                        for (var u = new Uint32Array(t); f < i;) {
                            for (o = 0; o < e && f < i; ++o, ++f) u[f] = r[o];
                            f % e == 0 && k(r)
                        }
                        return n && (u[o] = r[o], t = t.slice(0, s)), t
                    }, O.prototype.buffer = O.prototype.arrayBuffer, O.prototype.digest = O.prototype.array = function() {
                        this.finalize();
                        for (var t, e, r = this.blockCount, i = this.s, n = this.outputBlocks, o = this.extraBytes, f = 0, s = 0, u = []; s < n;) {
                            for (f = 0; f < r && s < n; ++f, ++s) t = s << 2, e = i[f], u[t] = 255 & e, u[t + 1] = e >> 8 & 255, u[t + 2] = e >> 16 & 255, u[t + 3] = e >> 24 & 255;
                            s % r == 0 && k(i)
                        }
                        return o && (t = s << 2, e = i[f], u[t] = 255 & e, o > 1 && (u[t + 1] = e >> 8 & 255), o > 2 && (u[t + 2] = e >> 16 & 255)), u
                    }, R.prototype = new O, R.prototype.finalize = function() {
                        return this.encode(this.outputBits, !0), O.prototype.finalize.call(this)
                    };
                    var k = function(t) {
                        var e, r, i, n, o, f, s, u, h, l, c, d, p, m, g, v, b, A, y, w, x, M, E, S, I, N, B, C, _, O, R, k, P, U, T, D, F, q, L, z, j, H, K, Q, G, J, Y, V, W, X, Z, $, tt, te, tr, ti, tn, to, tf, ts, tu, th, ta;
                        for (i = 0; i < 48; i += 2) n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], f = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], h = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], e = d ^ (f << 1 | s >>> 31), r = p ^ (s << 1 | f >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = n ^ (u << 1 | h >>> 31), r = o ^ (h << 1 | u >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = f ^ (l << 1 | c >>> 31), r = s ^ (c << 1 | l >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = u ^ (d << 1 | p >>> 31), r = h ^ (p << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = l ^ (n << 1 | o >>> 31), r = c ^ (o << 1 | n >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, m = t[0], g = t[1], J = t[11] << 4 | t[10] >>> 28, Y = t[10] << 4 | t[11] >>> 28, C = t[20] << 3 | t[21] >>> 29, _ = t[21] << 3 | t[20] >>> 29, ts = t[31] << 9 | t[30] >>> 23, tu = t[30] << 9 | t[31] >>> 23, H = t[40] << 18 | t[41] >>> 14, K = t[41] << 18 | t[40] >>> 14, U = t[2] << 1 | t[3] >>> 31, T = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, b = t[12] << 12 | t[13] >>> 20, V = t[22] << 10 | t[23] >>> 22, W = t[23] << 10 | t[22] >>> 22, O = t[33] << 13 | t[32] >>> 19, R = t[32] << 13 | t[33] >>> 19, th = t[42] << 2 | t[43] >>> 30, ta = t[43] << 2 | t[42] >>> 30, te = t[5] << 30 | t[4] >>> 2, tr = t[4] << 30 | t[5] >>> 2, D = t[14] << 6 | t[15] >>> 26, F = t[15] << 6 | t[14] >>> 26, A = t[25] << 11 | t[24] >>> 21, y = t[24] << 11 | t[25] >>> 21, X = t[34] << 15 | t[35] >>> 17, Z = t[35] << 15 | t[34] >>> 17, k = t[45] << 29 | t[44] >>> 3, P = t[44] << 29 | t[45] >>> 3, S = t[6] << 28 | t[7] >>> 4, I = t[7] << 28 | t[6] >>> 4, ti = t[17] << 23 | t[16] >>> 9, tn = t[16] << 23 | t[17] >>> 9, q = t[26] << 25 | t[27] >>> 7, L = t[27] << 25 | t[26] >>> 7, w = t[36] << 21 | t[37] >>> 11, x = t[37] << 21 | t[36] >>> 11, $ = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, Q = t[8] << 27 | t[9] >>> 5, G = t[9] << 27 | t[8] >>> 5, N = t[18] << 20 | t[19] >>> 12, B = t[19] << 20 | t[18] >>> 12, to = t[29] << 7 | t[28] >>> 25, tf = t[28] << 7 | t[29] >>> 25, z = t[38] << 8 | t[39] >>> 24, j = t[39] << 8 | t[38] >>> 24, M = t[48] << 14 | t[49] >>> 18, E = t[49] << 14 | t[48] >>> 18, t[0] = m ^ ~v & A, t[1] = g ^ ~b & y, t[10] = S ^ ~N & C, t[11] = I ^ ~B & _, t[20] = U ^ ~D & q, t[21] = T ^ ~F & L, t[30] = Q ^ ~J & V, t[31] = G ^ ~Y & W, t[40] = te ^ ~ti & to, t[41] = tr ^ ~tn & tf, t[2] = v ^ ~A & w, t[3] = b ^ ~y & x, t[12] = N ^ ~C & O, t[13] = B ^ ~_ & R, t[22] = D ^ ~q & z, t[23] = F ^ ~L & j, t[32] = J ^ ~V & X, t[33] = Y ^ ~W & Z, t[42] = ti ^ ~to & ts, t[43] = tn ^ ~tf & tu, t[4] = A ^ ~w & M, t[5] = y ^ ~x & E, t[14] = C ^ ~O & k, t[15] = _ ^ ~R & P, t[24] = q ^ ~z & H, t[25] = L ^ ~j & K, t[34] = V ^ ~X & $, t[35] = W ^ ~Z & tt, t[44] = to ^ ~ts & th, t[45] = tf ^ ~tu & ta, t[6] = w ^ ~M & m, t[7] = x ^ ~E & g, t[16] = O ^ ~k & S, t[17] = R ^ ~P & I, t[26] = z ^ ~H & U, t[27] = j ^ ~K & T, t[36] = X ^ ~$ & Q, t[37] = Z ^ ~tt & G, t[46] = ts ^ ~th & te, t[47] = tu ^ ~ta & tr, t[8] = M ^ ~m & v, t[9] = E ^ ~g & b, t[18] = k ^ ~S & N, t[19] = P ^ ~I & B, t[28] = H ^ ~U & D, t[29] = K ^ ~T & F, t[38] = $ ^ ~Q & J, t[39] = tt ^ ~G & Y, t[48] = th ^ ~te & ti, t[49] = ta ^ ~tr & tn, t[0] ^= a[i], t[1] ^= a[i + 1]
                    };
                    if (o) t.exports = M;
                    else
                        for (S = 0; S < E.length; ++S) i[E[S]] = M[E[S]]
                }()
            }(tu);
            var th = tu.exports;
            let ta = !1,
                tl = !1,
                tc = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                },
                td = tc.default,
                tp = null,
                tm = function() {
                    try {
                        let t = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
                                try {
                                    if ("test" !== "test".normalize(e)) throw Error("bad normalize")
                                } catch {
                                    t.push(e)
                                }
                            }), t.length) throw Error("missing " + t.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
                    } catch (t) {
                        return t.message
                    }
                    return null
                }();
            ! function(t) {
                t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
            }(i || (i = {})),
            function(t) {
                t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED"
            }(n || (n = {}));
            let tg = "0123456789abcdef";
            class tv {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, e) {
                    let r = t.toLowerCase();
                    null == tc[r] && this.throwArgumentError("invalid log level name", "logLevel", t), td > tc[r] || console.log.apply(console, e)
                }
                debug(...t) {
                    this._log(tv.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(tv.levels.INFO, t)
                }
                warn(...t) {
                    this._log(tv.levels.WARNING, t)
                }
                makeError(t, e, r) {
                    if (tl) return this.makeError("censored error", e, {});
                    e || (e = tv.errors.UNKNOWN_ERROR), r || (r = {});
                    let i = [];
                    Object.keys(r).forEach(t => {
                        let e = r[t];
                        try {
                            if (e instanceof Uint8Array) {
                                let r = "";
                                for (let t = 0; t < e.length; t++) r += tg[e[t] >> 4], r += tg[15 & e[t]];
                                i.push(t + "=Uint8Array(0x" + r + ")")
                            } else i.push(t + "=" + JSON.stringify(e))
                        } catch {
                            i.push(t + "=" + JSON.stringify(r[t].toString()))
                        }
                    }), i.push(`code=${e}`), i.push(`version=${this.version}`);
                    let o = t,
                        f = "";
                    switch (e) {
                        case n.NUMERIC_FAULT:
                            {
                                f = "NUMERIC_FAULT";
                                let e = t;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        f += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        f += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        f += "-unbound-result"
                                }
                                break
                            }
                        case n.CALL_EXCEPTION:
                        case n.INSUFFICIENT_FUNDS:
                        case n.MISSING_NEW:
                        case n.NONCE_EXPIRED:
                        case n.REPLACEMENT_UNDERPRICED:
                        case n.TRANSACTION_REPLACED:
                        case n.UNPREDICTABLE_GAS_LIMIT:
                            f = e
                    }
                    f && (t += " [ See: https://links.ethers.org/v5-errors-" + f + " ]"), i.length && (t += " (" + i.join(", ") + ")");
                    let s = Error(t);
                    return s.reason = o, s.code = e, Object.keys(r).forEach(function(t) {
                        s[t] = r[t]
                    }), s
                }
                throwError(t, e, r) {
                    throw this.makeError(t, e, r)
                }
                throwArgumentError(t, e, r) {
                    return this.throwError(t, tv.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: r
                    })
                }
                assert(t, e, r, i) {
                    t || this.throwError(e, r, i)
                }
                assertArgument(t, e, r, i) {
                    t || this.throwArgumentError(e, r, i)
                }
                checkNormalize(t) {
                    tm && this.throwError("platform missing String.prototype.normalize", tv.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: tm
                    })
                }
                checkSafeUint53(t, e) {
                    "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 0x1fffffffffffff) && this.throwError(e, tv.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(e, tv.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, e, r) {
                    r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, tv.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    }), t > e && this.throwError("too many arguments" + r, tv.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    })
                }
                checkNew(t, e) {
                    (t === Object || null == t) && this.throwError("missing new", tv.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(t, e) {
                    t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", tv.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : (t === Object || null == t) && this.throwError("missing new", tv.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return tp || (tp = new tv("logger/5.7.0")), tp
                }
                static setCensorship(t, e) {
                    if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", tv.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), ta) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", tv.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    tl = !!t, ta = !!e
                }
                static setLogLevel(t) {
                    let e = tc[t.toLowerCase()];
                    if (null == e) {
                        tv.globalLogger().warn("invalid log level - " + t);
                        return
                    }
                    td = e
                }
                static from(t) {
                    return new tv(t)
                }
            }
            tv.errors = n, tv.levels = i;
            let tb = new tv("bytes/5.7.0");

            function tA(t) {
                return !!t.toHexString
            }

            function ty(t) {
                return t.slice || (t.slice = function() {
                    let e = Array.prototype.slice.call(arguments);
                    return ty(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }

            function tw(t) {
                return "number" == typeof t && t == t && t % 1 == 0
            }

            function tx(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" == typeof t || !tw(t.length) || t.length < 0) return !1;
                for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    if (!tw(r) || r < 0 || r >= 256) return !1
                }
                return !0
            }

            function tM(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    tb.checkSafeUint53(t, "invalid arrayify value");
                    let e = [];
                    for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === e.length && e.push(0), ty(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), tA(t) && (t = t.toHexString()), tE(t)) {
                    let r = t.substring(2);
                    r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : tb.throwArgumentError("hex data is odd-length", "value", t));
                    let i = [];
                    for (let t = 0; t < r.length; t += 2) i.push(parseInt(r.substring(t, t + 2), 16));
                    return ty(new Uint8Array(i))
                }
                return tx(t) ? ty(new Uint8Array(t)) : tb.throwArgumentError("invalid arrayify value", "value", t)
            }

            function tE(t, e) {
                return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e)
            }
            let tS = "0123456789abcdef";

            function tI(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    tb.checkSafeUint53(t, "invalid hexlify value");
                    let e = "";
                    for (; t;) e = tS[15 & t] + e, t = Math.floor(t / 16);
                    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
                }
                if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), tA(t)) return t.toHexString();
                if (tE(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : tb.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (tx(t)) {
                    let e = "0x";
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        e += tS[(240 & i) >> 4] + tS[15 & i]
                    }
                    return e
                }
                return tb.throwArgumentError("invalid hexlify value", "value", t)
            }

            function tN(t, e, r) {
                return "string" != typeof t ? t = tI(t) : (!tE(t) || t.length % 2) && tb.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
            }

            function tB(t, e) {
                for ("string" != typeof t ? t = tI(t) : tE(t) || tb.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && tb.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
                return t
            }

            function tC(t) {
                let e = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (tE(t) && !(t.length % 2) || tx(t)) {
                    let r = tM(t);
                    64 === r.length ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = tI(r.slice(0, 32)), e.s = tI(r.slice(32, 64))) : 65 === r.length ? (e.r = tI(r.slice(0, 32)), e.s = tI(r.slice(32, 64)), e.v = r[64]) : tb.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : tb.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = tI(r.slice(32, 64))
                } else {
                    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
                        let r = function(t, e) {
                            (t = tM(t)).length > e && tb.throwArgumentError("value out of range", "value", arguments[0]);
                            let r = new Uint8Array(e);
                            return r.set(t, e - t.length), ty(r)
                        }(tM(e._vs), 32);
                        e._vs = tI(r);
                        let i = r[0] >= 128 ? 1 : 0;
                        null == e.recoveryParam ? e.recoveryParam = i : e.recoveryParam !== i && tb.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
                        let n = tI(r);
                        null == e.s ? e.s = n : e.s !== n && tb.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == e.recoveryParam) null == e.v ? tb.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                    else if (null == e.v) e.v = 27 + e.recoveryParam;
                    else {
                        let r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                        e.recoveryParam !== r && tb.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != e.r && tE(e.r) ? e.r = tB(e.r, 32) : tb.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && tE(e.s) ? e.s = tB(e.s, 32) : tb.throwArgumentError("signature missing or invalid s", "signature", t);
                    let r = tM(e.s);
                    r[0] >= 128 && tb.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
                    let i = tI(r);
                    e._vs && (tE(e._vs) || tb.throwArgumentError("signature invalid _vs", "signature", t), e._vs = tB(e._vs, 32)), null == e._vs ? e._vs = i : e._vs !== i && tb.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
            }

            function t_(t) {
                return "0x" + th.keccak_256(tM(t))
            }
            var tO = {
                    exports: {}
                },
                tR = function(t) {
                    var e = t.default;
                    if ("function" == typeof e) {
                        var r = function() {
                            return e.apply(this, arguments)
                        };
                        r.prototype = e.prototype
                    } else r = {};
                    return Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), Object.keys(t).forEach(function(e) {
                        var i = Object.getOwnPropertyDescriptor(t, e);
                        Object.defineProperty(r, e, i.get ? i : {
                            enumerable: !0,
                            get: function() {
                                return t[e]
                            }
                        })
                    }), r
                }(Object.freeze({
                    __proto__: null,
                    default: {}
                }));
            ! function(t, e) {
                function r(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function n(t, e, r) {
                    if (n.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                "object" == typeof t ? t.exports = n : e.BN = n, n.BN = n, n.wordSize = 26;
                try {
                    a = "u" > typeof window && "u" > typeof window.Buffer ? window.Buffer : tR.Buffer
                } catch {}

                function o(t, e) {
                    var i = t.charCodeAt(e);
                    return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void r(!1, "Invalid character in " + t)
                }

                function f(t, e, r) {
                    var i = o(t, r);
                    return r - 1 >= e && (i |= o(t, r - 1) << 4), i
                }

                function s(t, e, i, n) {
                    for (var o = 0, f = 0, s = Math.min(t.length, i), u = e; u < s; u++) {
                        var h = t.charCodeAt(u) - 48;
                        o *= n, f = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h, r(h >= 0 && f < n, "Invalid character"), o += f
                    }
                    return o
                }

                function u(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (n.isBN = function(t) {
                        return t instanceof n || null !== t && "object" == typeof t && t.constructor.wordSize === n.wordSize && Array.isArray(t.words)
                    }, n.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, n.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, n.prototype._init = function(t, e, i) {
                        if ("number" == typeof t) return this._initNumber(t, e, i);
                        if ("object" == typeof t) return this._initArray(t, e, i);
                        "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, i) : (this._parseBase(t, e, n), "le" === i && this._initArray(this.toArray(), e, i)))
                    }, n.prototype._initNumber = function(t, e, i) {
                        t < 0 && (this.negative = 1, t = -t), t < 0x4000000 ? (this.words = [0x3ffffff & t], this.length = 1) : t < 0x10000000000000 ? (this.words = [0x3ffffff & t, t / 0x4000000 & 0x3ffffff], this.length = 2) : (r(t < 0x20000000000000), this.words = [0x3ffffff & t, t / 0x4000000 & 0x3ffffff, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i)
                    }, n.prototype._initArray = function(t, e, i) {
                        if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var o, f, s = 0;
                        if ("be" === i)
                            for (n = t.length - 1, o = 0; n >= 0; n -= 3) f = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= f << s & 0x3ffffff, this.words[o + 1] = f >>> 26 - s & 0x3ffffff, (s += 24) >= 26 && (s -= 26, o++);
                        else if ("le" === i)
                            for (n = 0, o = 0; n < t.length; n += 3) f = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= f << s & 0x3ffffff, this.words[o + 1] = f >>> 26 - s & 0x3ffffff, (s += 24) >= 26 && (s -= 26, o++);
                        return this._strip()
                    }, n.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var n, o = 0,
                            s = 0;
                        if ("be" === r)
                            for (i = t.length - 1; i >= e; i -= 2) n = f(t, e, i) << o, this.words[s] |= 0x3ffffff & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        else
                            for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = f(t, e, i) << o, this.words[s] |= 0x3ffffff & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        this._strip()
                    }, n.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var i = 0, n = 1; n <= 0x3ffffff; n *= e) i++;
                        i--, n = n / e | 0;
                        for (var o = t.length - r, f = o % i, u = Math.min(o, o - f) + r, h = 0, a = r; a < u; a += i) h = s(t, a, a + i, e), this.imuln(n), this.words[0] + h < 0x4000000 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== f) {
                            var l = 1;
                            for (h = s(t, a, t.length, e), a = 0; a < f; a++) l *= e;
                            this.imuln(l), this.words[0] + h < 0x4000000 ? this.words[0] += h : this._iaddn(h)
                        }
                        this._strip()
                    }, n.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, n.prototype._move = function(t) {
                        u(t, this)
                    }, n.prototype.clone = function() {
                        var t = new n(null);
                        return this.copy(t), t
                    }, n.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, n.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, n.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "u" > typeof Symbol && "function" == typeof Symbol.for) try {
                    n.prototype[Symbol.for("nodejs.util.inspect.custom")] = h
                } catch {
                    n.prototype.inspect = h
                } else n.prototype.inspect = h;

                function h() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var a, l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    d = [0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400, 0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000, 0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40, 0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f, 0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400];

                function p(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var i = t.length + e.length | 0;
                    r.length = i, i = i - 1 | 0;
                    var n = 0 | t.words[0],
                        o = 0 | e.words[0],
                        f = n * o,
                        s = 0x3ffffff & f,
                        u = f / 0x4000000 | 0;
                    r.words[0] = s;
                    for (var h = 1; h < i; h++) {
                        for (var a = u >>> 26, l = 0x3ffffff & u, c = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                            var p = h - d | 0;
                            a += (f = (n = 0 | t.words[p]) * (o = 0 | e.words[d]) + l) / 0x4000000 | 0, l = 0x3ffffff & f
                        }
                        r.words[h] = 0 | l, u = 0 | a
                    }
                    return 0 !== u ? r.words[h] = 0 | u : r.length--, r._strip()
                }
                n.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        i = "";
                        for (var i, n = 0, o = 0, f = 0; f < this.length; f++) {
                            var s = this.words[f],
                                u = ((s << n | o) & 0xffffff).toString(16);
                            o = s >>> 24 - n & 0xffffff, (n += 2) >= 26 && (n -= 26, f--), i = 0 !== o || f !== this.length - 1 ? l[6 - u.length] + u + i : u + i
                        }
                        for (0 !== o && (i = o.toString(16) + i); i.length % e != 0;) i = "0" + i;
                        return 0 !== this.negative && (i = "-" + i), i
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var h = c[t],
                            a = d[t];
                        i = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var m = p.modrn(a).toString(t);
                            i = (p = p.idivn(a)).isZero() ? m + i : l[h - m.length] + m + i
                        }
                        for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;
                        return 0 !== this.negative && (i = "-" + i), i
                    }
                    r(!1, "Base should be between 2 and 36")
                }, n.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 0x4000000 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 0x10000000000000 + 0x4000000 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, n.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, a && (n.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(a, t, e)
                }), n.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, n.prototype.toArrayLike = function(t, e, i) {
                    this._strip();
                    var n = this.byteLength(),
                        o = i || Math.max(1, n);
                    r(n <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                    var f = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](f, n), f
                }, n.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var f = this.words[n] << o | i;
                        t[r++] = 255 & f, r < t.length && (t[r++] = f >> 8 & 255), r < t.length && (t[r++] = f >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = f >> 24 & 255), i = 0, o = 0) : (i = f >>> 24, o += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = i; r < t.length;) t[r++] = 0
                }, n.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var f = this.words[n] << o | i;
                        t[r--] = 255 & f, r >= 0 && (t[r--] = f >> 8 & 255), r >= 0 && (t[r--] = f >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = f >> 24 & 255), i = 0, o = 0) : (i = f >>> 24, o += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = i; r >= 0;) t[r--] = 0
                }, Math.clz32 ? n.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : n.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, n.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return 8191 & e || (r += 13, e >>>= 13), 127 & e || (r += 7, e >>>= 7), 15 & e || (r += 4, e >>>= 4), 3 & e || (r += 2, e >>>= 2), 1 & e || r++, r
                }, n.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                }, n.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, n.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, n.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, n.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, n.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, n.prototype.neg = function() {
                    return this.clone().ineg()
                }, n.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, n.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, n.prototype.ior = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuor(t)
                }, n.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, n.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, n.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, n.prototype.iand = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuand(t)
                }, n.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, n.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, n.prototype.iuxor = function(t) {
                    var e, r;
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                        for (; i < e.length; i++) this.words[i] = e.words[i];
                    return this.length = e.length, this._strip()
                }, n.prototype.ixor = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuxor(t)
                }, n.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, n.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, n.prototype.inotn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        i = t % 26;
                    this._expand(e), i > 0 && e--;
                    for (var n = 0; n < e; n++) this.words[n] = 0x3ffffff & ~this.words[n];
                    return i > 0 && (this.words[n] = ~this.words[n] & 0x3ffffff >> 26 - i), this._strip()
                }, n.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, n.prototype.setn = function(t, e) {
                    r("number" == typeof t && t >= 0);
                    var i = t / 26 | 0,
                        n = t % 26;
                    return this._expand(i + 1), e ? this.words[i] = this.words[i] | 1 << n : this.words[i] = this.words[i] & ~(1 << n), this._strip()
                }, n.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                    for (var e, r, i, n = 0, o = 0; o < i.length; o++) e = (0 | r.words[o]) + (0 | i.words[o]) + n, this.words[o] = 0x3ffffff & e, n = e >>> 26;
                    for (; 0 !== n && o < r.length; o++) e = (0 | r.words[o]) + n, this.words[o] = 0x3ffffff & e, n = e >>> 26;
                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, n.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, n.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, r, i = this.iadd(t);
                        return t.negative = 1, i._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var n = this.cmp(t);
                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    n > 0 ? (e = this, r = t) : (e = t, r = this);
                    for (var o = 0, f = 0; f < r.length; f++) o = (i = (0 | e.words[f]) - (0 | r.words[f]) + o) >> 26, this.words[f] = 0x3ffffff & i;
                    for (; 0 !== o && f < e.length; f++) o = (i = (0 | e.words[f]) + o) >> 26, this.words[f] = 0x3ffffff & i;
                    if (0 === o && f < e.length && e !== this)
                        for (; f < e.length; f++) this.words[f] = e.words[f];
                    return this.length = Math.max(this.length, f), e !== this && (this.negative = 1), this._strip()
                }, n.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var m = function(t, e, r) {
                    var i, n, o, f = t.words,
                        s = e.words,
                        u = r.words,
                        h = 0,
                        a = 0 | f[0],
                        l = 8191 & a,
                        c = a >>> 13,
                        d = 0 | f[1],
                        p = 8191 & d,
                        m = d >>> 13,
                        g = 0 | f[2],
                        v = 8191 & g,
                        b = g >>> 13,
                        A = 0 | f[3],
                        y = 8191 & A,
                        w = A >>> 13,
                        x = 0 | f[4],
                        M = 8191 & x,
                        E = x >>> 13,
                        S = 0 | f[5],
                        I = 8191 & S,
                        N = S >>> 13,
                        B = 0 | f[6],
                        C = 8191 & B,
                        _ = B >>> 13,
                        O = 0 | f[7],
                        R = 8191 & O,
                        k = O >>> 13,
                        P = 0 | f[8],
                        U = 8191 & P,
                        T = P >>> 13,
                        D = 0 | f[9],
                        F = 8191 & D,
                        q = D >>> 13,
                        L = 0 | s[0],
                        z = 8191 & L,
                        j = L >>> 13,
                        H = 0 | s[1],
                        K = 8191 & H,
                        Q = H >>> 13,
                        G = 0 | s[2],
                        J = 8191 & G,
                        Y = G >>> 13,
                        V = 0 | s[3],
                        W = 8191 & V,
                        X = V >>> 13,
                        Z = 0 | s[4],
                        $ = 8191 & Z,
                        tt = Z >>> 13,
                        te = 0 | s[5],
                        tr = 8191 & te,
                        ti = te >>> 13,
                        tn = 0 | s[6],
                        to = 8191 & tn,
                        tf = tn >>> 13,
                        ts = 0 | s[7],
                        tu = 8191 & ts,
                        th = ts >>> 13,
                        ta = 0 | s[8],
                        tl = 8191 & ta,
                        tc = ta >>> 13,
                        td = 0 | s[9],
                        tp = 8191 & td,
                        tm = td >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19, i = Math.imul(l, z), n = (n = Math.imul(l, j)) + Math.imul(c, z) | 0, o = Math.imul(c, j);
                    var tg = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tg >>> 26) | 0, tg &= 0x3ffffff, i = Math.imul(p, z), n = (n = Math.imul(p, j)) + Math.imul(m, z) | 0, o = Math.imul(m, j), i = i + Math.imul(l, K) | 0, n = (n = n + Math.imul(l, Q) | 0) + Math.imul(c, K) | 0, o = o + Math.imul(c, Q) | 0;
                    var tv = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tv >>> 26) | 0, tv &= 0x3ffffff, i = Math.imul(v, z), n = (n = Math.imul(v, j)) + Math.imul(b, z) | 0, o = Math.imul(b, j), i = i + Math.imul(p, K) | 0, n = (n = n + Math.imul(p, Q) | 0) + Math.imul(m, K) | 0, o = o + Math.imul(m, Q) | 0, i = i + Math.imul(l, J) | 0, n = (n = n + Math.imul(l, Y) | 0) + Math.imul(c, J) | 0, o = o + Math.imul(c, Y) | 0;
                    var tb = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tb >>> 26) | 0, tb &= 0x3ffffff, i = Math.imul(y, z), n = (n = Math.imul(y, j)) + Math.imul(w, z) | 0, o = Math.imul(w, j), i = i + Math.imul(v, K) | 0, n = (n = n + Math.imul(v, Q) | 0) + Math.imul(b, K) | 0, o = o + Math.imul(b, Q) | 0, i = i + Math.imul(p, J) | 0, n = (n = n + Math.imul(p, Y) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, Y) | 0, i = i + Math.imul(l, W) | 0, n = (n = n + Math.imul(l, X) | 0) + Math.imul(c, W) | 0, o = o + Math.imul(c, X) | 0;
                    var tA = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tA >>> 26) | 0, tA &= 0x3ffffff, i = Math.imul(M, z), n = (n = Math.imul(M, j)) + Math.imul(E, z) | 0, o = Math.imul(E, j), i = i + Math.imul(y, K) | 0, n = (n = n + Math.imul(y, Q) | 0) + Math.imul(w, K) | 0, o = o + Math.imul(w, Q) | 0, i = i + Math.imul(v, J) | 0, n = (n = n + Math.imul(v, Y) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, Y) | 0, i = i + Math.imul(p, W) | 0, n = (n = n + Math.imul(p, X) | 0) + Math.imul(m, W) | 0, o = o + Math.imul(m, X) | 0, i = i + Math.imul(l, $) | 0, n = (n = n + Math.imul(l, tt) | 0) + Math.imul(c, $) | 0, o = o + Math.imul(c, tt) | 0;
                    var ty = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (ty >>> 26) | 0, ty &= 0x3ffffff, i = Math.imul(I, z), n = (n = Math.imul(I, j)) + Math.imul(N, z) | 0, o = Math.imul(N, j), i = i + Math.imul(M, K) | 0, n = (n = n + Math.imul(M, Q) | 0) + Math.imul(E, K) | 0, o = o + Math.imul(E, Q) | 0, i = i + Math.imul(y, J) | 0, n = (n = n + Math.imul(y, Y) | 0) + Math.imul(w, J) | 0, o = o + Math.imul(w, Y) | 0, i = i + Math.imul(v, W) | 0, n = (n = n + Math.imul(v, X) | 0) + Math.imul(b, W) | 0, o = o + Math.imul(b, X) | 0, i = i + Math.imul(p, $) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, tt) | 0, i = i + Math.imul(l, tr) | 0, n = (n = n + Math.imul(l, ti) | 0) + Math.imul(c, tr) | 0, o = o + Math.imul(c, ti) | 0;
                    var tw = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tw >>> 26) | 0, tw &= 0x3ffffff, i = Math.imul(C, z), n = (n = Math.imul(C, j)) + Math.imul(_, z) | 0, o = Math.imul(_, j), i = i + Math.imul(I, K) | 0, n = (n = n + Math.imul(I, Q) | 0) + Math.imul(N, K) | 0, o = o + Math.imul(N, Q) | 0, i = i + Math.imul(M, J) | 0, n = (n = n + Math.imul(M, Y) | 0) + Math.imul(E, J) | 0, o = o + Math.imul(E, Y) | 0, i = i + Math.imul(y, W) | 0, n = (n = n + Math.imul(y, X) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, X) | 0, i = i + Math.imul(v, $) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(b, $) | 0, o = o + Math.imul(b, tt) | 0, i = i + Math.imul(p, tr) | 0, n = (n = n + Math.imul(p, ti) | 0) + Math.imul(m, tr) | 0, o = o + Math.imul(m, ti) | 0, i = i + Math.imul(l, to) | 0, n = (n = n + Math.imul(l, tf) | 0) + Math.imul(c, to) | 0, o = o + Math.imul(c, tf) | 0;
                    var tx = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tx >>> 26) | 0, tx &= 0x3ffffff, i = Math.imul(R, z), n = (n = Math.imul(R, j)) + Math.imul(k, z) | 0, o = Math.imul(k, j), i = i + Math.imul(C, K) | 0, n = (n = n + Math.imul(C, Q) | 0) + Math.imul(_, K) | 0, o = o + Math.imul(_, Q) | 0, i = i + Math.imul(I, J) | 0, n = (n = n + Math.imul(I, Y) | 0) + Math.imul(N, J) | 0, o = o + Math.imul(N, Y) | 0, i = i + Math.imul(M, W) | 0, n = (n = n + Math.imul(M, X) | 0) + Math.imul(E, W) | 0, o = o + Math.imul(E, X) | 0, i = i + Math.imul(y, $) | 0, n = (n = n + Math.imul(y, tt) | 0) + Math.imul(w, $) | 0, o = o + Math.imul(w, tt) | 0, i = i + Math.imul(v, tr) | 0, n = (n = n + Math.imul(v, ti) | 0) + Math.imul(b, tr) | 0, o = o + Math.imul(b, ti) | 0, i = i + Math.imul(p, to) | 0, n = (n = n + Math.imul(p, tf) | 0) + Math.imul(m, to) | 0, o = o + Math.imul(m, tf) | 0, i = i + Math.imul(l, tu) | 0, n = (n = n + Math.imul(l, th) | 0) + Math.imul(c, tu) | 0, o = o + Math.imul(c, th) | 0;
                    var tM = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tM >>> 26) | 0, tM &= 0x3ffffff, i = Math.imul(U, z), n = (n = Math.imul(U, j)) + Math.imul(T, z) | 0, o = Math.imul(T, j), i = i + Math.imul(R, K) | 0, n = (n = n + Math.imul(R, Q) | 0) + Math.imul(k, K) | 0, o = o + Math.imul(k, Q) | 0, i = i + Math.imul(C, J) | 0, n = (n = n + Math.imul(C, Y) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, Y) | 0, i = i + Math.imul(I, W) | 0, n = (n = n + Math.imul(I, X) | 0) + Math.imul(N, W) | 0, o = o + Math.imul(N, X) | 0, i = i + Math.imul(M, $) | 0, n = (n = n + Math.imul(M, tt) | 0) + Math.imul(E, $) | 0, o = o + Math.imul(E, tt) | 0, i = i + Math.imul(y, tr) | 0, n = (n = n + Math.imul(y, ti) | 0) + Math.imul(w, tr) | 0, o = o + Math.imul(w, ti) | 0, i = i + Math.imul(v, to) | 0, n = (n = n + Math.imul(v, tf) | 0) + Math.imul(b, to) | 0, o = o + Math.imul(b, tf) | 0, i = i + Math.imul(p, tu) | 0, n = (n = n + Math.imul(p, th) | 0) + Math.imul(m, tu) | 0, o = o + Math.imul(m, th) | 0, i = i + Math.imul(l, tl) | 0, n = (n = n + Math.imul(l, tc) | 0) + Math.imul(c, tl) | 0, o = o + Math.imul(c, tc) | 0;
                    var tE = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tE >>> 26) | 0, tE &= 0x3ffffff, i = Math.imul(F, z), n = (n = Math.imul(F, j)) + Math.imul(q, z) | 0, o = Math.imul(q, j), i = i + Math.imul(U, K) | 0, n = (n = n + Math.imul(U, Q) | 0) + Math.imul(T, K) | 0, o = o + Math.imul(T, Q) | 0, i = i + Math.imul(R, J) | 0, n = (n = n + Math.imul(R, Y) | 0) + Math.imul(k, J) | 0, o = o + Math.imul(k, Y) | 0, i = i + Math.imul(C, W) | 0, n = (n = n + Math.imul(C, X) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, X) | 0, i = i + Math.imul(I, $) | 0, n = (n = n + Math.imul(I, tt) | 0) + Math.imul(N, $) | 0, o = o + Math.imul(N, tt) | 0, i = i + Math.imul(M, tr) | 0, n = (n = n + Math.imul(M, ti) | 0) + Math.imul(E, tr) | 0, o = o + Math.imul(E, ti) | 0, i = i + Math.imul(y, to) | 0, n = (n = n + Math.imul(y, tf) | 0) + Math.imul(w, to) | 0, o = o + Math.imul(w, tf) | 0, i = i + Math.imul(v, tu) | 0, n = (n = n + Math.imul(v, th) | 0) + Math.imul(b, tu) | 0, o = o + Math.imul(b, th) | 0, i = i + Math.imul(p, tl) | 0, n = (n = n + Math.imul(p, tc) | 0) + Math.imul(m, tl) | 0, o = o + Math.imul(m, tc) | 0, i = i + Math.imul(l, tp) | 0, n = (n = n + Math.imul(l, tm) | 0) + Math.imul(c, tp) | 0, o = o + Math.imul(c, tm) | 0;
                    var tS = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tS >>> 26) | 0, tS &= 0x3ffffff, i = Math.imul(F, K), n = (n = Math.imul(F, Q)) + Math.imul(q, K) | 0, o = Math.imul(q, Q), i = i + Math.imul(U, J) | 0, n = (n = n + Math.imul(U, Y) | 0) + Math.imul(T, J) | 0, o = o + Math.imul(T, Y) | 0, i = i + Math.imul(R, W) | 0, n = (n = n + Math.imul(R, X) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, X) | 0, i = i + Math.imul(C, $) | 0, n = (n = n + Math.imul(C, tt) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, tt) | 0, i = i + Math.imul(I, tr) | 0, n = (n = n + Math.imul(I, ti) | 0) + Math.imul(N, tr) | 0, o = o + Math.imul(N, ti) | 0, i = i + Math.imul(M, to) | 0, n = (n = n + Math.imul(M, tf) | 0) + Math.imul(E, to) | 0, o = o + Math.imul(E, tf) | 0, i = i + Math.imul(y, tu) | 0, n = (n = n + Math.imul(y, th) | 0) + Math.imul(w, tu) | 0, o = o + Math.imul(w, th) | 0, i = i + Math.imul(v, tl) | 0, n = (n = n + Math.imul(v, tc) | 0) + Math.imul(b, tl) | 0, o = o + Math.imul(b, tc) | 0, i = i + Math.imul(p, tp) | 0, n = (n = n + Math.imul(p, tm) | 0) + Math.imul(m, tp) | 0, o = o + Math.imul(m, tm) | 0;
                    var tI = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tI >>> 26) | 0, tI &= 0x3ffffff, i = Math.imul(F, J), n = (n = Math.imul(F, Y)) + Math.imul(q, J) | 0, o = Math.imul(q, Y), i = i + Math.imul(U, W) | 0, n = (n = n + Math.imul(U, X) | 0) + Math.imul(T, W) | 0, o = o + Math.imul(T, X) | 0, i = i + Math.imul(R, $) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, tt) | 0, i = i + Math.imul(C, tr) | 0, n = (n = n + Math.imul(C, ti) | 0) + Math.imul(_, tr) | 0, o = o + Math.imul(_, ti) | 0, i = i + Math.imul(I, to) | 0, n = (n = n + Math.imul(I, tf) | 0) + Math.imul(N, to) | 0, o = o + Math.imul(N, tf) | 0, i = i + Math.imul(M, tu) | 0, n = (n = n + Math.imul(M, th) | 0) + Math.imul(E, tu) | 0, o = o + Math.imul(E, th) | 0, i = i + Math.imul(y, tl) | 0, n = (n = n + Math.imul(y, tc) | 0) + Math.imul(w, tl) | 0, o = o + Math.imul(w, tc) | 0, i = i + Math.imul(v, tp) | 0, n = (n = n + Math.imul(v, tm) | 0) + Math.imul(b, tp) | 0, o = o + Math.imul(b, tm) | 0;
                    var tN = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tN >>> 26) | 0, tN &= 0x3ffffff, i = Math.imul(F, W), n = (n = Math.imul(F, X)) + Math.imul(q, W) | 0, o = Math.imul(q, X), i = i + Math.imul(U, $) | 0, n = (n = n + Math.imul(U, tt) | 0) + Math.imul(T, $) | 0, o = o + Math.imul(T, tt) | 0, i = i + Math.imul(R, tr) | 0, n = (n = n + Math.imul(R, ti) | 0) + Math.imul(k, tr) | 0, o = o + Math.imul(k, ti) | 0, i = i + Math.imul(C, to) | 0, n = (n = n + Math.imul(C, tf) | 0) + Math.imul(_, to) | 0, o = o + Math.imul(_, tf) | 0, i = i + Math.imul(I, tu) | 0, n = (n = n + Math.imul(I, th) | 0) + Math.imul(N, tu) | 0, o = o + Math.imul(N, th) | 0, i = i + Math.imul(M, tl) | 0, n = (n = n + Math.imul(M, tc) | 0) + Math.imul(E, tl) | 0, o = o + Math.imul(E, tc) | 0, i = i + Math.imul(y, tp) | 0, n = (n = n + Math.imul(y, tm) | 0) + Math.imul(w, tp) | 0, o = o + Math.imul(w, tm) | 0;
                    var tB = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tB >>> 26) | 0, tB &= 0x3ffffff, i = Math.imul(F, $), n = (n = Math.imul(F, tt)) + Math.imul(q, $) | 0, o = Math.imul(q, tt), i = i + Math.imul(U, tr) | 0, n = (n = n + Math.imul(U, ti) | 0) + Math.imul(T, tr) | 0, o = o + Math.imul(T, ti) | 0, i = i + Math.imul(R, to) | 0, n = (n = n + Math.imul(R, tf) | 0) + Math.imul(k, to) | 0, o = o + Math.imul(k, tf) | 0, i = i + Math.imul(C, tu) | 0, n = (n = n + Math.imul(C, th) | 0) + Math.imul(_, tu) | 0, o = o + Math.imul(_, th) | 0, i = i + Math.imul(I, tl) | 0, n = (n = n + Math.imul(I, tc) | 0) + Math.imul(N, tl) | 0, o = o + Math.imul(N, tc) | 0, i = i + Math.imul(M, tp) | 0, n = (n = n + Math.imul(M, tm) | 0) + Math.imul(E, tp) | 0, o = o + Math.imul(E, tm) | 0;
                    var tC = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tC >>> 26) | 0, tC &= 0x3ffffff, i = Math.imul(F, tr), n = (n = Math.imul(F, ti)) + Math.imul(q, tr) | 0, o = Math.imul(q, ti), i = i + Math.imul(U, to) | 0, n = (n = n + Math.imul(U, tf) | 0) + Math.imul(T, to) | 0, o = o + Math.imul(T, tf) | 0, i = i + Math.imul(R, tu) | 0, n = (n = n + Math.imul(R, th) | 0) + Math.imul(k, tu) | 0, o = o + Math.imul(k, th) | 0, i = i + Math.imul(C, tl) | 0, n = (n = n + Math.imul(C, tc) | 0) + Math.imul(_, tl) | 0, o = o + Math.imul(_, tc) | 0, i = i + Math.imul(I, tp) | 0, n = (n = n + Math.imul(I, tm) | 0) + Math.imul(N, tp) | 0, o = o + Math.imul(N, tm) | 0;
                    var t_ = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 0x3ffffff, i = Math.imul(F, to), n = (n = Math.imul(F, tf)) + Math.imul(q, to) | 0, o = Math.imul(q, tf), i = i + Math.imul(U, tu) | 0, n = (n = n + Math.imul(U, th) | 0) + Math.imul(T, tu) | 0, o = o + Math.imul(T, th) | 0, i = i + Math.imul(R, tl) | 0, n = (n = n + Math.imul(R, tc) | 0) + Math.imul(k, tl) | 0, o = o + Math.imul(k, tc) | 0, i = i + Math.imul(C, tp) | 0, n = (n = n + Math.imul(C, tm) | 0) + Math.imul(_, tp) | 0, o = o + Math.imul(_, tm) | 0;
                    var tO = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tO >>> 26) | 0, tO &= 0x3ffffff, i = Math.imul(F, tu), n = (n = Math.imul(F, th)) + Math.imul(q, tu) | 0, o = Math.imul(q, th), i = i + Math.imul(U, tl) | 0, n = (n = n + Math.imul(U, tc) | 0) + Math.imul(T, tl) | 0, o = o + Math.imul(T, tc) | 0, i = i + Math.imul(R, tp) | 0, n = (n = n + Math.imul(R, tm) | 0) + Math.imul(k, tp) | 0, o = o + Math.imul(k, tm) | 0;
                    var tR = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tR >>> 26) | 0, tR &= 0x3ffffff, i = Math.imul(F, tl), n = (n = Math.imul(F, tc)) + Math.imul(q, tl) | 0, o = Math.imul(q, tc), i = i + Math.imul(U, tp) | 0, n = (n = n + Math.imul(U, tm) | 0) + Math.imul(T, tp) | 0, o = o + Math.imul(T, tm) | 0;
                    var tk = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = (o + (n >>> 13) | 0) + (tk >>> 26) | 0, tk &= 0x3ffffff, i = Math.imul(F, tp), n = (n = Math.imul(F, tm)) + Math.imul(q, tp) | 0, o = Math.imul(q, tm);
                    var tP = (h + i | 0) + ((8191 & n) << 13) | 0;
                    return h = (o + (n >>> 13) | 0) + (tP >>> 26) | 0, tP &= 0x3ffffff, u[0] = tg, u[1] = tv, u[2] = tb, u[3] = tA, u[4] = ty, u[5] = tw, u[6] = tx, u[7] = tM, u[8] = tE, u[9] = tS, u[10] = tI, u[11] = tN, u[12] = tB, u[13] = tC, u[14] = t_, u[15] = tO, u[16] = tR, u[17] = tk, u[18] = tP, 0 !== h && (u[19] = h, r.length++), r
                };

                function g(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                        var f = n;
                        n = 0;
                        for (var s = 0x3ffffff & i, u = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
                            var a = o - h,
                                l = (0 | t.words[a]) * (0 | e.words[h]),
                                c = 0x3ffffff & l;
                            f = f + (l / 0x4000000 | 0) | 0, s = 0x3ffffff & (c = c + s | 0), n += (f = f + (c >>> 26) | 0) >>> 26, f &= 0x3ffffff
                        }
                        r.words[o] = s, i = f, f = n
                    }
                    return 0 !== i ? r.words[o] = i : r.length--, r._strip()
                }
                Math.imul || (m = p), n.prototype.mulTo = function(t, e) {
                    var r, i = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? m(this, t, e) : i < 63 ? p(this, t, e) : g(this, t, e)
                }, n.prototype.mul = function(t) {
                    var e = new n(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, n.prototype.mulf = function(t) {
                    var e = new n(null);
                    return e.words = Array(this.length + t.length), g(this, t, e)
                }, n.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, n.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), r("number" == typeof t), r(t < 0x4000000);
                    for (var i = 0, n = 0; n < this.length; n++) {
                        var o = (0 | this.words[n]) * t,
                            f = (0x3ffffff & o) + (0x3ffffff & i);
                        i >>= 26, i += (o / 0x4000000 | 0) + (f >>> 26), this.words[n] = 0x3ffffff & f
                    }
                    return 0 !== i && (this.words[n] = i, this.length++), e ? this.ineg() : this
                }, n.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, n.prototype.sqr = function() {
                    return this.mul(this)
                }, n.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, n.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var i = r / 26 | 0,
                                n = r % 26;
                            e[r] = t.words[i] >>> n & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new n(1);
                    for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                    if (++i < e.length)
                        for (var o = r.sqr(); i < e.length; i++, o = o.sqr()) 0 !== e[i] && (r = r.mul(o));
                    return r
                }, n.prototype.iushln = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e, i = t % 26,
                        n = (t - i) / 26,
                        o = 0x3ffffff >>> 26 - i << 26 - i;
                    if (0 !== i) {
                        var f = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & o,
                                u = (0 | this.words[e]) - s << i;
                            this.words[e] = u | f, f = s >>> 26 - i
                        }
                        f && (this.words[e] = f, this.length++)
                    }
                    if (0 !== n) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                        for (e = 0; e < n; e++) this.words[e] = 0;
                        this.length += n
                    }
                    return this._strip()
                }, n.prototype.ishln = function(t) {
                    return r(0 === this.negative), this.iushln(t)
                }, n.prototype.iushrn = function(t, e, i) {
                    r("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                    var n, o = t % 26,
                        f = Math.min((t - o) / 26, this.length),
                        s = 0x3ffffff ^ 0x3ffffff >>> o << o;
                    if (n -= f, n = Math.max(0, n), i) {
                        for (var u = 0; u < f; u++) i.words[u] = this.words[u];
                        i.length = f
                    }
                    if (0 !== f) {
                        if (this.length > f)
                            for (this.length -= f, u = 0; u < this.length; u++) this.words[u] = this.words[u + f];
                        else this.words[0] = 0, this.length = 1
                    }
                    var h = 0;
                    for (u = this.length - 1; u >= 0 && (0 !== h || u >= n); u--) {
                        var a = 0 | this.words[u];
                        this.words[u] = h << 26 - o | a >>> o, h = a & s
                    }
                    return i && 0 !== h && (i.words[i.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, n.prototype.ishrn = function(t, e, i) {
                    return r(0 === this.negative), this.iushrn(t, e, i)
                }, n.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, n.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, n.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, n.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, n.prototype.testn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        i = (t - e) / 26;
                    return !(this.length <= i) && !!(this.words[i] & 1 << e)
                }, n.prototype.imaskn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        i = (t - e) / 26;
                    return (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) ? this : (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e && (this.words[this.length - 1] &= 0x3ffffff ^ 0x3ffffff >>> e << e), this._strip())
                }, n.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, n.prototype.iaddn = function(t) {
                    return r("number" == typeof t), r(t < 0x4000000), t < 0 ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                }, n.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 0x4000000; e++) this.words[e] -= 0x4000000, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, n.prototype.isubn = function(t) {
                    if (r("number" == typeof t), r(t < 0x4000000), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 0x4000000, this.words[e + 1] -= 1;
                    return this._strip()
                }, n.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, n.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, n.prototype.iabs = function() {
                    return this.negative = 0, this
                }, n.prototype.abs = function() {
                    return this.clone().iabs()
                }, n.prototype._ishlnsubmul = function(t, e, i) {
                    var n, o = t.length + i;
                    this._expand(o);
                    var f, s = 0;
                    for (n = 0; n < t.length; n++) {
                        f = (0 | this.words[n + i]) + s;
                        var u = (0 | t.words[n]) * e;
                        f -= 0x3ffffff & u, s = (f >> 26) - (u / 0x4000000 | 0), this.words[n + i] = 0x3ffffff & f
                    }
                    for (; n < this.length - i; n++) s = (f = (0 | this.words[n + i]) + s) >> 26, this.words[n + i] = 0x3ffffff & f;
                    if (0 === s) return this._strip();
                    for (r(-1 === s), s = 0, n = 0; n < this.length; n++) s = (f = -(0 | this.words[n]) + s) >> 26, this.words[n] = 0x3ffffff & f;
                    return this.negative = 1, this._strip()
                }, n.prototype._wordDiv = function(t, e) {
                    var r = this.length - t.length,
                        i = this.clone(),
                        o = t,
                        f = 0 | o.words[o.length - 1];
                    0 != (r = 26 - this._countBits(f)) && (o = o.ushln(r), i.iushln(r), f = 0 | o.words[o.length - 1]);
                    var s, u = i.length - o.length;
                    if ("mod" !== e) {
                        (s = new n(null)).length = u + 1, s.words = Array(s.length);
                        for (var h = 0; h < s.length; h++) s.words[h] = 0
                    }
                    var a = i.clone()._ishlnsubmul(o, 1, u);
                    0 === a.negative && (i = a, s && (s.words[u] = 1));
                    for (var l = u - 1; l >= 0; l--) {
                        var c = (0 | i.words[o.length + l]) * 0x4000000 + (0 | i.words[o.length + l - 1]);
                        for (c = Math.min(c / f | 0, 0x3ffffff), i._ishlnsubmul(o, c, l); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(o, 1, l), i.isZero() || (i.negative ^= 1);
                        s && (s.words[l] = c)
                    }
                    return s && s._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                        div: s || null,
                        mod: i
                    }
                }, n.prototype.divmod = function(t, e, i) {
                    var o, f, s;
                    return (r(!t.isZero()), this.isZero()) ? {
                        div: new n(0),
                        mod: new n(0)
                    } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (o = s.div.neg()), "div" !== e && (f = s.mod.neg(), i && 0 !== f.negative && f.iadd(t)), {
                        div: o,
                        mod: f
                    }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (o = s.div.neg()), {
                        div: o,
                        mod: s.mod
                    }) : this.negative & t.negative ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (f = s.mod.neg(), i && 0 !== f.negative && f.isub(t)), {
                        div: s.div,
                        mod: f
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new n(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new n(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new n(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e)
                }, n.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, n.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, n.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, n.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        i = t.ushrn(1),
                        n = t.andln(1),
                        o = r.cmp(i);
                    return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, n.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), r(t <= 0x3ffffff);
                    for (var i = 0x4000000 % t, n = 0, o = this.length - 1; o >= 0; o--) n = (i * n + (0 | this.words[o])) % t;
                    return e ? -n : n
                }, n.prototype.modn = function(t) {
                    return this.modrn(t)
                }, n.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), r(t <= 0x3ffffff);
                    for (var i = 0, n = this.length - 1; n >= 0; n--) {
                        var o = (0 | this.words[n]) + 0x4000000 * i;
                        this.words[n] = o / t | 0, i = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, n.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, n.prototype.egcd = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e = this,
                        i = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var o = new n(1), f = new n(0), s = new n(0), u = new n(1), h = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++h;
                    for (var a = i.clone(), l = e.clone(); !e.isZero();) {
                        for (var c = 0, d = 1; !(e.words[0] & d) && c < 26; ++c, d <<= 1);
                        if (c > 0)
                            for (e.iushrn(c); c-- > 0;)(o.isOdd() || f.isOdd()) && (o.iadd(a), f.isub(l)), o.iushrn(1), f.iushrn(1);
                        for (var p = 0, m = 1; !(i.words[0] & m) && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (i.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(a), u.isub(l)), s.iushrn(1), u.iushrn(1);
                        e.cmp(i) >= 0 ? (e.isub(i), o.isub(s), f.isub(u)) : (i.isub(e), s.isub(o), u.isub(f))
                    }
                    return {
                        a: s,
                        b: u,
                        gcd: i.iushln(h)
                    }
                }, n.prototype._invmp = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e, i = this,
                        o = t.clone();
                    i = 0 !== i.negative ? i.umod(t) : i.clone();
                    for (var f = new n(1), s = new n(0), u = o.clone(); i.cmpn(1) > 0 && o.cmpn(1) > 0;) {
                        for (var h = 0, a = 1; !(i.words[0] & a) && h < 26; ++h, a <<= 1);
                        if (h > 0)
                            for (i.iushrn(h); h-- > 0;) f.isOdd() && f.iadd(u), f.iushrn(1);
                        for (var l = 0, c = 1; !(o.words[0] & c) && l < 26; ++l, c <<= 1);
                        if (l > 0)
                            for (o.iushrn(l); l-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        i.cmp(o) >= 0 ? (i.isub(o), f.isub(s)) : (o.isub(i), s.isub(f))
                    }
                    return 0 > (e = 0 === i.cmpn(1) ? f : s).cmpn(0) && e.iadd(t), e
                }, n.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var n = e.cmp(r);
                        if (n < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === n || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(i)
                }, n.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, n.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, n.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, n.prototype.andln = function(t) {
                    return this.words[0] & t
                }, n.prototype.bincn = function(t) {
                    r("number" == typeof t);
                    var e = t % 26,
                        i = (t - e) / 26,
                        n = 1 << e;
                    if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
                    for (var o = n, f = i; 0 !== o && f < this.length; f++) {
                        var s = 0 | this.words[f];
                        s += o, o = s >>> 26, s &= 0x3ffffff, this.words[f] = s
                    }
                    return 0 !== o && (this.words[f] = o, this.length++), this
                }, n.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, n.prototype.cmpn = function(t) {
                    var e, i = t < 0;
                    if (0 !== this.negative && !i) return -1;
                    if (0 === this.negative && i) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        i && (t = -t), r(t <= 0x3ffffff, "Number is too big");
                        var n = 0 | this.words[0];
                        e = n === t ? 0 : n < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, n.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, n.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = 0 | this.words[r],
                            n = 0 | t.words[r];
                        if (i !== n) {
                            i < n ? e = -1 : i > n && (e = 1);
                            break
                        }
                    }
                    return e
                }, n.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, n.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, n.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, n.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, n.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, n.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, n.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, n.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, n.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, n.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, n.red = function(t) {
                    return new M(t)
                }, n.prototype.toRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, n.prototype.fromRed = function() {
                    return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, n.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, n.prototype.forceRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, n.prototype.redAdd = function(t) {
                    return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, n.prototype.redIAdd = function(t) {
                    return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, n.prototype.redSub = function(t) {
                    return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, n.prototype.redISub = function(t) {
                    return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, n.prototype.redShl = function(t) {
                    return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, n.prototype.redMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, n.prototype.redIMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, n.prototype.redSqr = function() {
                    return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, n.prototype.redISqr = function() {
                    return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, n.prototype.redSqrt = function() {
                    return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, n.prototype.redInvm = function() {
                    return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, n.prototype.redNeg = function() {
                    return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, n.prototype.redPow = function(t) {
                    return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var v = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function b(t, e) {
                    this.name = t, this.p = new n(e, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function A() {
                    b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function y() {
                    b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function w() {
                    b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function x() {
                    b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function M(t) {
                    if ("string" == typeof t) {
                        var e = n._prime(t);
                        this.m = e.p, this.prime = e
                    } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function E(t) {
                    M.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                b.prototype._tmp = function() {
                    var t = new n(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, b.prototype.ireduce = function(t) {
                    var e, r = t;
                    do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var i = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, b.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, b.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(A, b), A.prototype.split = function(t, e) {
                    for (var r = Math.min(t.length, 9), i = 0; i < r; i++) e.words[i] = t.words[i];
                    if (e.length = r, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var n = t.words[9];
                    for (e.words[e.length++] = 4194303 & n, i = 10; i < t.length; i++) {
                        var o = 0 | t.words[i];
                        t.words[i - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                    }
                    n >>>= 22, t.words[i - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, A.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = 0 | t.words[r];
                        e += 977 * i, t.words[r] = 0x3ffffff & e, e = 64 * i + (e / 0x4000000 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(y, b), i(w, b), i(x, b), x.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = (0 | t.words[r]) * 19 + e,
                            n = 0x3ffffff & i;
                        i >>>= 26, t.words[r] = n, e = i
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, n._prime = function(t) {
                    var e;
                    if (v[t]) return v[t];
                    if ("k256" === t) e = new A;
                    else if ("p224" === t) e = new y;
                    else if ("p192" === t) e = new w;
                    else if ("p25519" === t) e = new x;
                    else throw Error("Unknown prime " + t);
                    return v[t] = e, e
                }, M.prototype._verify1 = function(t) {
                    r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                }, M.prototype._verify2 = function(t, e) {
                    r((t.negative | e.negative) == 0, "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                }, M.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)), t)
                }, M.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, M.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, M.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, M.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, M.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, M.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, M.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, M.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, M.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, M.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, M.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (r(e % 2 == 1), 3 === e) {
                        var i = this.m.add(new n(1)).iushrn(2);
                        return this.pow(t, i)
                    }
                    for (var o = this.m.subn(1), f = 0; !o.isZero() && 0 === o.andln(1);) f++, o.iushrn(1);
                    r(!o.isZero());
                    var s = new n(1).toRed(this),
                        u = s.redNeg(),
                        h = this.m.subn(1).iushrn(1),
                        a = this.m.bitLength();
                    for (a = new n(2 * a * a).toRed(this); 0 !== this.pow(a, h).cmp(u);) a.redIAdd(u);
                    for (var l = this.pow(a, o), c = this.pow(t, o.addn(1).iushrn(1)), d = this.pow(t, o), p = f; 0 !== d.cmp(s);) {
                        for (var m = d, g = 0; 0 !== m.cmp(s); g++) m = m.redSqr();
                        r(g < p);
                        var v = this.pow(l, new n(1).iushln(p - g - 1));
                        c = c.redMul(v), l = v.redSqr(), d = d.redMul(l), p = g
                    }
                    return c
                }, M.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, M.prototype.pow = function(t, e) {
                    if (e.isZero()) return new n(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    r[0] = new n(1).toRed(this), r[1] = t;
                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
                    var o = r[0],
                        f = 0,
                        s = 0,
                        u = e.bitLength() % 26;
                    for (0 === u && (u = 26), i = e.length - 1; i >= 0; i--) {
                        for (var h = e.words[i], a = u - 1; a >= 0; a--) {
                            var l = h >> a & 1;
                            if (o !== r[0] && (o = this.sqr(o)), 0 === l && 0 === f) {
                                s = 0;
                                continue
                            }
                            f <<= 1, f |= l, 4 != ++s && (0 !== i || 0 !== a) || (o = this.mul(o, r[f]), s = 0, f = 0)
                        }
                        u = 26
                    }
                    return o
                }, M.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, M.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, n.mont = function(t) {
                    return new E(t)
                }, i(E, M), E.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, E.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, E.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        o = n;
                    return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : 0 > n.cmpn(0) && (o = n.iadd(this.m)), o._forceRed(this)
                }, E.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new n(0)._forceRed(this);
                    var r = t.mul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        o = r.isub(i).iushrn(this.shift),
                        f = o;
                    return o.cmp(this.m) >= 0 ? f = o.isub(this.m) : 0 > o.cmpn(0) && (f = o.iadd(this.m)), f._forceRed(this)
                }, E.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(tO, ts);
            var tk = tO.exports;
            let tP = "bignumber/5.7.0";
            var tU = tk.BN;
            let tT = new tv(tP),
                tD = {},
                tF = !1;
            class tq {
                constructor(t, e) {
                    t !== tD && tT.throwError("cannot call constructor directly; use BigNumber.from", tv.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return tz(tj(this).fromTwos(t))
                }
                toTwos(t) {
                    return tz(tj(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? tq.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return tz(tj(this).add(tj(t)))
                }
                sub(t) {
                    return tz(tj(this).sub(tj(t)))
                }
                div(t) {
                    return tq.from(t).isZero() && tH("division-by-zero", "div"), tz(tj(this).div(tj(t)))
                }
                mul(t) {
                    return tz(tj(this).mul(tj(t)))
                }
                mod(t) {
                    let e = tj(t);
                    return e.isNeg() && tH("division-by-zero", "mod"), tz(tj(this).umod(e))
                }
                pow(t) {
                    let e = tj(t);
                    return e.isNeg() && tH("negative-power", "pow"), tz(tj(this).pow(e))
                }
                and(t) {
                    let e = tj(t);
                    return (this.isNegative() || e.isNeg()) && tH("unbound-bitwise-result", "and"), tz(tj(this).and(e))
                }
                or(t) {
                    let e = tj(t);
                    return (this.isNegative() || e.isNeg()) && tH("unbound-bitwise-result", "or"), tz(tj(this).or(e))
                }
                xor(t) {
                    let e = tj(t);
                    return (this.isNegative() || e.isNeg()) && tH("unbound-bitwise-result", "xor"), tz(tj(this).xor(e))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && tH("negative-width", "mask"), tz(tj(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && tH("negative-width", "shl"), tz(tj(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && tH("negative-width", "shr"), tz(tj(this).shrn(t))
                }
                eq(t) {
                    return tj(this).eq(tj(t))
                }
                lt(t) {
                    return tj(this).lt(tj(t))
                }
                lte(t) {
                    return tj(this).lte(tj(t))
                }
                gt(t) {
                    return tj(this).gt(tj(t))
                }
                gte(t) {
                    return tj(this).gte(tj(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return tj(this).isZero()
                }
                toNumber() {
                    try {
                        return tj(this).toNumber()
                    } catch {
                        tH("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch {}
                    return tT.throwError("this platform does not support BigInt", tv.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? tF || (tF = !0, tT.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? tT.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", tv.errors.UNEXPECTED_ARGUMENT, {}) : tT.throwError("BigNumber.toString does not accept parameters", tv.errors.UNEXPECTED_ARGUMENT, {})), tj(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof tq) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new tq(tD, tL(t)) : t.match(/^-?[0-9]+$/) ? new tq(tD, tL(new tU(t))) : tT.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && tH("underflow", "BigNumber.from", t), (t >= 0x1fffffffffffff || t <= -0x1fffffffffffff) && tH("overflow", "BigNumber.from", t), tq.from(String(t));
                    if ("bigint" == typeof t) return tq.from(t.toString());
                    if (tx(t)) return tq.from(tI(t));
                    if (t) {
                        if (t.toHexString) {
                            let e = t.toHexString();
                            if ("string" == typeof e) return tq.from(e)
                        } else {
                            let e = t._hex;
                            if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (tE(e) || "-" === e[0] && tE(e.substring(1)))) return tq.from(e)
                        }
                    }
                    return tT.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !!(t && t._isBigNumber)
                }
            }

            function tL(t) {
                if ("string" != typeof t) return tL(t.toString(16));
                if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && tT.throwArgumentError("invalid hex", "value", t), "0x00" === (t = tL(t)) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function tz(t) {
                return tq.from(tL(t))
            }

            function tj(t) {
                let e = tq.from(t).toHexString();
                return "-" === e[0] ? new tU("-" + e.substring(3), 16) : new tU(e.substring(2), 16)
            }

            function tH(t, e, r) {
                let i = {
                    fault: t,
                    operation: e
                };
                return null != r && (i.value = r), tT.throwError(t, tv.errors.NUMERIC_FAULT, i)
            }
            let tK = new tv(tP),
                tQ = {},
                tG = tq.from(0),
                tJ = tq.from(-1);

            function tY(t, e, r, i) {
                let n = {
                    fault: e,
                    operation: r
                };
                return void 0 !== i && (n.value = i), tK.throwError(t, tv.errors.NUMERIC_FAULT, n)
            }
            let tV = "0";
            for (; tV.length < 256;) tV += tV;

            function tW(t) {
                if ("number" != typeof t) try {
                    t = tq.from(t).toNumber()
                } catch {}
                return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + tV.substring(0, t) : tK.throwArgumentError("invalid decimal size", "decimals", t)
            }

            function tX(t, e) {
                null == e && (e = 0);
                let r = tW(e),
                    i = (t = tq.from(t)).lt(tG);
                i && (t = t.mul(tJ));
                let n = t.mod(r).toString();
                for (; n.length < r.length - 1;) n = "0" + n;
                n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
                let o = t.div(r).toString();
                return t = 1 === r.length ? o : o + "." + n, i && (t = "-" + t), t
            }

            function tZ(t, e) {
                null == e && (e = 0);
                let r = tW(e);
                "string" == typeof t && t.match(/^-?[0-9.]+$/) || tK.throwArgumentError("invalid decimal value", "value", t);
                let i = "-" === t.substring(0, 1);
                i && (t = t.substring(1)), "." === t && tK.throwArgumentError("missing value", "value", t);
                let n = t.split(".");
                n.length > 2 && tK.throwArgumentError("too many decimal points", "value", t);
                let o = n[0],
                    f = n[1];
                for (o || (o = "0"), f || (f = "0");
                    "0" === f[f.length - 1];) f = f.substring(0, f.length - 1);
                for (f.length > r.length - 1 && tY("fractional component exceeds decimals", "underflow", "parseFixed"), "" === f && (f = "0"); f.length < r.length - 1;) f += "0";
                let s = tq.from(o),
                    u = tq.from(f),
                    h = s.mul(r).add(u);
                return i && (h = h.mul(tJ)), h
            }
            class t$ {
                constructor(t, e, r, i) {
                    t !== tQ && tK.throwError("cannot use FixedFormat constructor; use FixedFormat.from", tv.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.signed = e, this.width = r, this.decimals = i, this.name = (e ? "" : "u") + "fixed" + String(r) + "x" + String(i), this._multiplier = tW(i), Object.freeze(this)
                }
                static from(t) {
                    if (t instanceof t$) return t;
                    "number" == typeof t && (t = `fixed128x${t}`);
                    let e = !0,
                        r = 128,
                        i = 18;
                    if ("string" == typeof t) {
                        if ("fixed" !== t) {
                            if ("ufixed" === t) e = !1;
                            else {
                                let n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                                n || tK.throwArgumentError("invalid fixed format", "format", t), e = "u" !== n[1], r = parseInt(n[2]), i = parseInt(n[3])
                            }
                        }
                    } else if (t) {
                        let n = (e, r, i) => null == t[e] ? i : (typeof t[e] !== r && tK.throwArgumentError("invalid fixed format (" + e + " not " + r + ")", "format." + e, t[e]), t[e]);
                        e = n("signed", "boolean", e), r = n("width", "number", r), i = n("decimals", "number", i)
                    }
                    return r % 8 && tK.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), i > 80 && tK.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", i), new t$(tQ, e, r, i)
                }
            }
            class t0 {
                constructor(t, e, r, i) {
                    t !== tQ && tK.throwError("cannot use FixedNumber constructor; use FixedNumber.from", tv.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.format = i, this._hex = e, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
                }
                _checkFormat(t) {
                    this.format.name !== t.format.name && tK.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
                }
                addUnsafe(t) {
                    this._checkFormat(t);
                    let e = tZ(this._value, this.format.decimals),
                        r = tZ(t._value, t.format.decimals);
                    return t0.fromValue(e.add(r), this.format.decimals, this.format)
                }
                subUnsafe(t) {
                    this._checkFormat(t);
                    let e = tZ(this._value, this.format.decimals),
                        r = tZ(t._value, t.format.decimals);
                    return t0.fromValue(e.sub(r), this.format.decimals, this.format)
                }
                mulUnsafe(t) {
                    this._checkFormat(t);
                    let e = tZ(this._value, this.format.decimals),
                        r = tZ(t._value, t.format.decimals);
                    return t0.fromValue(e.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
                }
                divUnsafe(t) {
                    this._checkFormat(t);
                    let e = tZ(this._value, this.format.decimals),
                        r = tZ(t._value, t.format.decimals);
                    return t0.fromValue(e.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
                }
                floor() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = t0.from(t[0], this.format),
                        r = !t[1].match(/^(0*)$/);
                    return this.isNegative() && r && (e = e.subUnsafe(t1.toFormat(e.format))), e
                }
                ceiling() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = t0.from(t[0], this.format),
                        r = !t[1].match(/^(0*)$/);
                    return !this.isNegative() && r && (e = e.addUnsafe(t1.toFormat(e.format))), e
                }
                round(t) {
                    null == t && (t = 0);
                    let e = this.toString().split(".");
                    if (1 === e.length && e.push("0"), (t < 0 || t > 80 || t % 1) && tK.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
                    let r = t0.from("1" + tV.substring(0, t), this.format),
                        i = t2.toFormat(this.format);
                    return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)
                }
                isZero() {
                    return "0.0" === this._value || "0" === this._value
                }
                isNegative() {
                    return "-" === this._value[0]
                }
                toString() {
                    return this._value
                }
                toHexString(t) {
                    return null == t ? this._hex : (t % 8 && tK.throwArgumentError("invalid byte width", "width", t), tB(tq.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString(), t / 8))
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString())
                }
                toFormat(t) {
                    return t0.fromString(this._value, t)
                }
                static fromValue(t, e, r) {
                    var i;
                    return null != r || null == e || null != (i = e) && (tq.isBigNumber(i) || "number" == typeof i && i % 1 == 0 || "string" == typeof i && i.match(/^-?[0-9]+$/) || tE(i) || "bigint" == typeof i || tx(i)) || (r = e, e = null), null == e && (e = 0), null == r && (r = "fixed"), t0.fromString(tX(t, e), t$.from(r))
                }
                static fromString(t, e) {
                    null == e && (e = "fixed");
                    let r = t$.from(e),
                        i = tZ(t, r.decimals);
                    !r.signed && i.lt(tG) && tY("unsigned value cannot be negative", "overflow", "value", t);
                    let n = null;
                    return new t0(tQ, r.signed ? i.toTwos(r.width).toHexString() : tB(i.toHexString(), r.width / 8), tX(i, r.decimals), r)
                }
                static fromBytes(t, e) {
                    null == e && (e = "fixed");
                    let r = t$.from(e);
                    if (tM(t).length > r.width / 8) throw Error("overflow");
                    let i = tq.from(t);
                    return r.signed && (i = i.fromTwos(r.width)), new t0(tQ, i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(), tX(i, r.decimals), r)
                }
                static from(t, e) {
                    if ("string" == typeof t) return t0.fromString(t, e);
                    if (tx(t)) return t0.fromBytes(t, e);
                    try {
                        return t0.fromValue(t, 0, e)
                    } catch (t) {
                        if (t.code !== tv.errors.INVALID_ARGUMENT) throw t
                    }
                    return tK.throwArgumentError("invalid FixedNumber value", "value", t)
                }
                static isFixedNumber(t) {
                    return !!(t && t._isFixedNumber)
                }
            }
            let t1 = t0.from(1),
                t2 = t0.from("0.5"),
                t3 = new tv("strings/5.7.0");

            function t6(t, e, r, i, n) {
                if (t === f.BAD_PREFIX || t === f.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let i = e + 1; i < r.length && r[i] >> 6 == 2; i++) t++;
                    return t
                }
                return t === f.OVERRUN ? r.length - e - 1 : 0
            }

            function t8(t, e = o.current) {
                e != o.current && (t3.checkNormalize(), t = t.normalize(e));
                let r = [];
                for (let e = 0; e < t.length; e++) {
                    let i = t.charCodeAt(e);
                    if (i < 128) r.push(i);
                    else if (i < 2048) r.push(i >> 6 | 192), r.push(63 & i | 128);
                    else if ((64512 & i) == 55296) {
                        e++;
                        let n = t.charCodeAt(e);
                        if (e >= t.length || (64512 & n) != 56320) throw Error("invalid utf-8 string");
                        let o = 65536 + ((1023 & i) << 10) + (1023 & n);
                        r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                    } else r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(63 & i | 128)
                }
                return tM(r)
            }

            function t5(t, e) {
                e || (e = function(t) {
                    return [parseInt(t, 16)]
                });
                let r = 0,
                    i = {};
                return t.split(",").forEach(t => {
                    let n = t.split(":");
                    i[r += parseInt(n[0], 16)] = e(n[1])
                }), i
            }

            function t4(t) {
                let e = 0;
                return t.split(",").map(t => {
                    let r = t.split("-");
                    return 1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1"), {
                        l: e + parseInt(r[0], 16),
                        h: e = parseInt(r[1], 16)
                    }
                })
            }! function(t) {
                t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD"
            }(o || (o = {})),
            function(t) {
                t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation"
            }(f || (f = {})), Object.freeze({
                error: function(t, e, r, i, n) {
                    return t3.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
                },
                ignore: t6,
                replace: function(t, e, r, i, n) {
                    return t === f.OVERLONG ? (i.push(n), 0) : (i.push(65533), t6(t, e, r))
                }
            }), t4("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(t => parseInt(t, 16)), t5("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), t5("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), t5("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", function(t) {
                if (t.length % 4 != 0) throw Error("bad data");
                let e = [];
                for (let r = 0; r < t.length; r += 4) e.push(parseInt(t.substring(r, r + 4), 16));
                return e
            }), t4("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
            let t9 = "hash/5.7.0";

            function t7(t, e) {
                null == e && (e = 1);
                let r = [],
                    i = r.forEach,
                    n = function(t, e) {
                        i.call(t, function(t) {
                            e > 0 && Array.isArray(t) ? n(t, e - 1) : r.push(t)
                        })
                    };
                return n(t, e), r
            }

            function et(t, e) {
                let r = Array(t);
                for (let i = 0, n = -1; i < t; i++) r[i] = n += 1 + e();
                return r
            }

            function ee(t, e) {
                let r = et(t(), t),
                    i = t(),
                    n = et(i, t),
                    o = function(t, e) {
                        let r = Array(t);
                        for (let i = 0; i < t; i++) r[i] = 1 + e();
                        return r
                    }(i, t);
                for (let t = 0; t < i; t++)
                    for (let e = 0; e < o[t]; e++) r.push(n[t] + e);
                return e ? r.map(t => e[t]) : r
            }

            function er(t, e, r) {
                let i = Array(t).fill(void 0).map(() => []);
                for (let n = 0; n < e; n++)(function(t, e) {
                    let r = Array(t);
                    for (let n = 0, o = 0; n < t; n++) {
                        var i;
                        r[n] = o += 1 & (i = e()) ? ~i >> 1 : i >> 1
                    }
                    return r
                })(t, r).forEach((t, e) => i[e].push(t));
                return i
            }
            let ei = function() {
                var t;
                let e;
                return t = function(t) {
                    let e = 0;

                    function r() {
                        return t[e++] << 8 | t[e++]
                    }
                    let i = r(),
                        n = 1,
                        o = [0, 1];
                    for (let t = 1; t < i; t++) o.push(n += r());
                    let f = r(),
                        s = e;
                    e += f;
                    let u = 0,
                        h = 0;

                    function a() {
                        return 0 == u && (h = h << 8 | t[e++], u = 8), h >> --u & 1
                    }
                    let l = 0;
                    for (let t = 0; t < 31; t++) l = l << 1 | a();
                    let c = [],
                        d = 0,
                        p = 0x80000000;
                    for (;;) {
                        let t = Math.floor(((l - d + 1) * n - 1) / p),
                            e = 0,
                            r = i;
                        for (; r - e > 1;) {
                            let i = e + r >>> 1;
                            t < o[i] ? r = i : e = i
                        }
                        if (0 == e) break;
                        c.push(e);
                        let f = d + Math.floor(p * o[e] / n),
                            s = d + Math.floor(p * o[e + 1] / n) - 1;
                        for (; !((f ^ s) & 0x40000000);) l = l << 1 & 0x7fffffff | a(), f = f << 1 & 0x7fffffff, s = s << 1 & 0x7fffffff | 1;
                        for (; f & ~s & 0x20000000;) l = 0x40000000 & l | l << 1 & 0x3fffffff | a(), f = f << 1 ^ 0x40000000, s = (0x40000000 ^ s) << 1 | 0x40000000 | 1;
                        d = f, p = 1 + s - f
                    }
                    let m = i - 4;
                    return c.map(e => {
                        switch (e - m) {
                            case 3:
                                return m + 65792 + (t[s++] << 16 | t[s++] << 8 | t[s++]);
                            case 2:
                                return m + 256 + (t[s++] << 8 | t[s++]);
                            case 1:
                                return m + t[s++];
                            default:
                                return e - 1
                        }
                    })
                }(function(t) {
                    t = atob(t);
                    let e = [];
                    for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
                    return tM(e)
                }("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")), e = 0, () => t[e++]
            }();
            ee(ei), ee(ei),
                function(t) {
                    let e = [];
                    for (;;) {
                        let r = t();
                        if (0 == r) break;
                        e.push(function(t, e) {
                            let r = 1 + e(),
                                i = e(),
                                n = function(t) {
                                    let e = [];
                                    for (;;) {
                                        let r = t();
                                        if (0 == r) break;
                                        e.push(r)
                                    }
                                    return e
                                }(e);
                            return t7(er(n.length, 1 + t, e).map((t, e) => {
                                let o = t[0],
                                    f = t.slice(1);
                                return Array(n[e]).fill(void 0).map((t, e) => {
                                    let n = e * i;
                                    return [o + e * r, f.map(t => t + n)]
                                })
                            }))
                        }(r, t))
                    }
                    for (;;) {
                        let r = t() - 1;
                        if (r < 0) break;
                        e.push(er(1 + t(), 1 + r, t).map(t => [t[0], t.slice(1)]))
                    }(function(t) {
                        let e = {};
                        for (let r = 0; r < t.length; r++) {
                            let i = t[r];
                            e[i[0]] = i[1]
                        }
                    })(t7(e))
                }(ei),
                function(t) {
                    let e = ee(t).sort((t, e) => t - e);
                    (function r() {
                        let i = [];
                        for (;;) {
                            let n = ee(t, e);
                            if (0 == n.length) break;
                            i.push({
                                set: new Set(n),
                                node: r()
                            })
                        }
                        i.sort((t, e) => e.set.size - t.set.size);
                        let n = t();
                        return {
                            branches: i,
                            valid: n % 3,
                            fe0f: !!(1 & (n = n / 3 | 0)),
                            save: 1 == (n >>= 1),
                            check: 2 == n
                        }
                    })()
                }(ei), new tv(t9), new Uint8Array(32).fill(0);
            let en = `Ethereum Signed Message:
`;

            function eo(t) {
                return "string" == typeof t && (t = t8(t)), t_(function(t) {
                    let e = t.map(t => tM(t)),
                        r = new Uint8Array(e.reduce((t, e) => t + e.length, 0));
                    return e.reduce((t, e) => (r.set(e, t), t + e.length), 0), ty(r)
                }([t8(en), t8(String(t.length)), t]))
            }
            new tv("rlp/5.7.0");
            let ef = new tv("address/5.7.0");

            function es(t) {
                tE(t, 20) || ef.throwArgumentError("invalid address", "address", t);
                let e = (t = t.toLowerCase()).substring(2).split(""),
                    r = new Uint8Array(40);
                for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
                let i = tM(t_(r));
                for (let t = 0; t < 40; t += 2) i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()), (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
                return "0x" + e.join("")
            }
            let eu = {};
            for (let t = 0; t < 10; t++) eu[String(t)] = String(t);
            for (let t = 0; t < 26; t++) eu[String.fromCharCode(65 + t)] = String(10 + t);
            let eh = Math.floor(Math.log10 ? Math.log10(0x1fffffffffffff) : Math.log(0x1fffffffffffff) / Math.LN10);

            function ea(t, e, r) {
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }
            new tv("properties/5.7.0"), new tv(t9), new Uint8Array(32).fill(0), tq.from(-1);
            let el = tq.from(0),
                ec = tq.from(1);
            tq.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), tB(ec.toHexString(), 32), tB(el.toHexString(), 32);
            var ed = {},
                ep = {};

            function em(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            em.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            };
            var eg = {
                exports: {}
            };
            "function" == typeof Object.create ? eg.exports = function(t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : eg.exports = function(t, e) {
                if (e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }
            };
            var ev = eg.exports;

            function eb(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 0xff0000 | (255 & t) << 24) >>> 0
            }

            function eA(t) {
                return 1 === t.length ? "0" + t : t
            }

            function ey(t) {
                return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
            }
            ep.inherits = ev, ep.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" == typeof t) {
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                    } else
                        for (var i = 0, n = 0; n < t.length; n++) {
                            var o, f, s = t.charCodeAt(n);
                            s < 128 ? r[i++] = s : (s < 2048 ? r[i++] = s >> 6 | 192 : ((o = t, f = n, (64512 & o.charCodeAt(f)) != 55296 || f < 0 || f + 1 >= o.length || (64512 & o.charCodeAt(f + 1)) != 56320) ? r[i++] = s >> 12 | 224 : (s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n)), r[i++] = s >> 18 | 240, r[i++] = s >> 12 & 63 | 128), r[i++] = s >> 6 & 63 | 128), r[i++] = 63 & s | 128)
                        }
                } else
                    for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
                return r
            }, ep.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += eA(t[r].toString(16));
                return e
            }, ep.htonl = eb, ep.toHex32 = function(t, e) {
                for (var r = "", i = 0; i < t.length; i++) {
                    var n = t[i];
                    "little" === e && (n = eb(n)), r += ey(n.toString(16))
                }
                return r
            }, ep.zero2 = eA, ep.zero8 = ey, ep.join32 = function(t, e, r, i) {
                var n, o = r - e;
                em(o % 4 == 0);
                for (var f = Array(o / 4), s = 0, u = e; s < f.length; s++, u += 4) n = "big" === i ? t[u] << 24 | t[u + 1] << 16 | t[u + 2] << 8 | t[u + 3] : t[u + 3] << 24 | t[u + 2] << 16 | t[u + 1] << 8 | t[u], f[s] = n >>> 0;
                return f
            }, ep.split32 = function(t, e) {
                for (var r = Array(4 * t.length), i = 0, n = 0; i < t.length; i++, n += 4) {
                    var o = t[i];
                    "big" === e ? (r[n] = o >>> 24, r[n + 1] = o >>> 16 & 255, r[n + 2] = o >>> 8 & 255, r[n + 3] = 255 & o) : (r[n + 3] = o >>> 24, r[n + 2] = o >>> 16 & 255, r[n + 1] = o >>> 8 & 255, r[n] = 255 & o)
                }
                return r
            }, ep.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            }, ep.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            }, ep.sum32 = function(t, e) {
                return t + e >>> 0
            }, ep.sum32_3 = function(t, e, r) {
                return t + e + r >>> 0
            }, ep.sum32_4 = function(t, e, r, i) {
                return t + e + r + i >>> 0
            }, ep.sum32_5 = function(t, e, r, i, n) {
                return t + e + r + i + n >>> 0
            }, ep.sum64 = function(t, e, r, i) {
                var n = t[e],
                    o = i + t[e + 1] >>> 0;
                t[e] = (o < i ? 1 : 0) + r + n >>> 0, t[e + 1] = o
            }, ep.sum64_hi = function(t, e, r, i) {
                return (e + i >>> 0 < e ? 1 : 0) + t + r >>> 0
            }, ep.sum64_lo = function(t, e, r, i) {
                return e + i >>> 0
            }, ep.sum64_4_hi = function(t, e, r, i, n, o, f, s) {
                var u, h = e;
                return t + r + n + f + (0 + ((h = h + i >>> 0) < e ? 1 : 0) + ((h = h + o >>> 0) < o ? 1 : 0) + ((h = h + s >>> 0) < s ? 1 : 0)) >>> 0
            }, ep.sum64_4_lo = function(t, e, r, i, n, o, f, s) {
                return e + i + o + s >>> 0
            }, ep.sum64_5_hi = function(t, e, r, i, n, o, f, s, u, h) {
                var a, l = e;
                return t + r + n + f + u + (0 + ((l = l + i >>> 0) < e ? 1 : 0) + ((l = l + o >>> 0) < o ? 1 : 0) + ((l = l + s >>> 0) < s ? 1 : 0) + ((l = l + h >>> 0) < h ? 1 : 0)) >>> 0
            }, ep.sum64_5_lo = function(t, e, r, i, n, o, f, s, u, h) {
                return e + i + o + s + h >>> 0
            }, ep.rotr64_hi = function(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, ep.rotr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, ep.shr64_hi = function(t, e, r) {
                return t >>> r
            }, ep.shr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            };
            var ew = {};

            function ex() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            ew.BlockHash = ex, ex.prototype.update = function(t, e) {
                if (t = ep.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = ep.join32(t, 0, t.length - r, this.endian);
                    for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
                }
                return this
            }, ex.prototype.digest = function(t) {
                return this.update(this._pad()), em(null === this.pending), this._digest(t)
            }, ex.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - (t + this.padLength) % e,
                    i = Array(r + this.padLength);
                i[0] = 128;
                for (var n = 1; n < r; n++) i[n] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) i[n++] = 0;
                    i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = t >>> 24 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 8 & 255, i[n++] = 255 & t
                } else
                    for (i[n++] = 255 & t, i[n++] = t >>> 8 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, o = 8; o < this.padLength; o++) i[n++] = 0;
                return i
            };
            var eM = {},
                eE = {},
                eS = ep.rotr32;

            function eI(t, e, r) {
                return t & e ^ t & r ^ e & r
            }
            eE.ft_1 = function(t, e, r, i) {
                return 0 === t ? e & r ^ ~e & i : 1 === t || 3 === t ? e ^ r ^ i : 2 === t ? eI(e, r, i) : void 0
            }, eE.ch32 = function(t, e, r) {
                return t & e ^ ~t & r
            }, eE.maj32 = eI, eE.p32 = function(t, e, r) {
                return t ^ e ^ r
            }, eE.s0_256 = function(t) {
                return eS(t, 2) ^ eS(t, 13) ^ eS(t, 22)
            }, eE.s1_256 = function(t) {
                return eS(t, 6) ^ eS(t, 11) ^ eS(t, 25)
            }, eE.g0_256 = function(t) {
                return eS(t, 7) ^ eS(t, 18) ^ t >>> 3
            }, eE.g1_256 = function(t) {
                return eS(t, 17) ^ eS(t, 19) ^ t >>> 10
            };
            var eN = ep.rotl32,
                eB = ep.sum32,
                eC = ep.sum32_5,
                e_ = eE.ft_1,
                eO = ew.BlockHash,
                eR = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

            function ek() {
                if (!(this instanceof ek)) return new ek;
                eO.call(this), this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], this.W = Array(80)
            }
            ep.inherits(ek, eO), ek.blockSize = 512, ek.outSize = 160, ek.hmacStrength = 80, ek.padLength = 64, ek.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = eN(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                var n = this.h[0],
                    o = this.h[1],
                    f = this.h[2],
                    s = this.h[3],
                    u = this.h[4];
                for (i = 0; i < r.length; i++) {
                    var h = ~~(i / 20),
                        a = eC(eN(n, 5), e_(h, o, f, s), u, r[i], eR[h]);
                    u = s, s = f, f = eN(o, 30), o = n, n = a
                }
                this.h[0] = eB(this.h[0], n), this.h[1] = eB(this.h[1], o), this.h[2] = eB(this.h[2], f), this.h[3] = eB(this.h[3], s), this.h[4] = eB(this.h[4], u)
            }, ek.prototype._digest = function(t) {
                return "hex" === t ? ep.toHex32(this.h, "big") : ep.split32(this.h, "big")
            };
            var eP = ep.sum32,
                eU = ep.sum32_4,
                eT = ep.sum32_5,
                eD = eE.ch32,
                eF = eE.maj32,
                eq = eE.s0_256,
                eL = eE.s1_256,
                ez = eE.g0_256,
                ej = eE.g1_256,
                eH = ew.BlockHash,
                eK = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

            function eQ() {
                if (!(this instanceof eQ)) return new eQ;
                eH.call(this), this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19], this.k = eK, this.W = Array(64)
            }

            function eG() {
                if (!(this instanceof eG)) return new eG;
                eQ.call(this), this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]
            }
            ep.inherits(eQ, eH), eQ.blockSize = 512, eQ.outSize = 256, eQ.hmacStrength = 192, eQ.padLength = 64, eQ.prototype._update = function(t, e) {
                for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
                for (; i < r.length; i++) r[i] = eU(ej(r[i - 2]), r[i - 7], ez(r[i - 15]), r[i - 16]);
                var n = this.h[0],
                    o = this.h[1],
                    f = this.h[2],
                    s = this.h[3],
                    u = this.h[4],
                    h = this.h[5],
                    a = this.h[6],
                    l = this.h[7];
                for (em(this.k.length === r.length), i = 0; i < r.length; i++) {
                    var c = eT(l, eL(u), eD(u, h, a), this.k[i], r[i]),
                        d = eP(eq(n), eF(n, o, f));
                    l = a, a = h, h = u, u = eP(s, c), s = f, f = o, o = n, n = eP(c, d)
                }
                this.h[0] = eP(this.h[0], n), this.h[1] = eP(this.h[1], o), this.h[2] = eP(this.h[2], f), this.h[3] = eP(this.h[3], s), this.h[4] = eP(this.h[4], u), this.h[5] = eP(this.h[5], h), this.h[6] = eP(this.h[6], a), this.h[7] = eP(this.h[7], l)
            }, eQ.prototype._digest = function(t) {
                return "hex" === t ? ep.toHex32(this.h, "big") : ep.split32(this.h, "big")
            }, ep.inherits(eG, eQ), eG.blockSize = 512, eG.outSize = 224, eG.hmacStrength = 192, eG.padLength = 64, eG.prototype._digest = function(t) {
                return "hex" === t ? ep.toHex32(this.h.slice(0, 7), "big") : ep.split32(this.h.slice(0, 7), "big")
            };
            var eJ = ep.rotr64_hi,
                eY = ep.rotr64_lo,
                eV = ep.shr64_hi,
                eW = ep.shr64_lo,
                eX = ep.sum64,
                eZ = ep.sum64_hi,
                e$ = ep.sum64_lo,
                e0 = ep.sum64_4_hi,
                e1 = ep.sum64_4_lo,
                e2 = ep.sum64_5_hi,
                e3 = ep.sum64_5_lo,
                e6 = ew.BlockHash,
                e8 = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

            function e5() {
                if (!(this instanceof e5)) return new e5;
                e6.call(this), this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179], this.k = e8, this.W = Array(160)
            }

            function e4() {
                if (!(this instanceof e4)) return new e4;
                e5.call(this), this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4]
            }
            ep.inherits(e5, e6), e5.blockSize = 1024, e5.outSize = 512, e5.hmacStrength = 192, e5.padLength = 128, e5.prototype._prepareBlock = function(t, e) {
                for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
                for (; i < r.length; i += 2) {
                    var n = function(t, e) {
                            var r = eJ(t, e, 19) ^ eJ(e, t, 29) ^ eV(t, e, 6);
                            return r < 0 && (r += 0x100000000), r
                        }(r[i - 4], r[i - 3]),
                        o = function(t, e) {
                            var r = eY(t, e, 19) ^ eY(e, t, 29) ^ eW(t, e, 6);
                            return r < 0 && (r += 0x100000000), r
                        }(r[i - 4], r[i - 3]),
                        f = r[i - 14],
                        s = r[i - 13],
                        u = function(t, e) {
                            var r = eJ(t, e, 1) ^ eJ(t, e, 8) ^ eV(t, e, 7);
                            return r < 0 && (r += 0x100000000), r
                        }(r[i - 30], r[i - 29]),
                        h = function(t, e) {
                            var r = eY(t, e, 1) ^ eY(t, e, 8) ^ eW(t, e, 7);
                            return r < 0 && (r += 0x100000000), r
                        }(r[i - 30], r[i - 29]),
                        a = r[i - 32],
                        l = r[i - 31];
                    r[i] = e0(n, o, f, s, u, h, a, l), r[i + 1] = e1(n, o, f, s, u, h, a, l)
                }
            }, e5.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var r = this.W,
                    i = this.h[0],
                    n = this.h[1],
                    o = this.h[2],
                    f = this.h[3],
                    s = this.h[4],
                    u = this.h[5],
                    h = this.h[6],
                    a = this.h[7],
                    l = this.h[8],
                    c = this.h[9],
                    d = this.h[10],
                    p = this.h[11],
                    m = this.h[12],
                    g = this.h[13],
                    v = this.h[14],
                    b = this.h[15];
                em(this.k.length === r.length);
                for (var A = 0; A < r.length; A += 2) {
                    var y = v,
                        w = b,
                        x = function(t, e) {
                            var r = eJ(t, e, 14) ^ eJ(t, e, 18) ^ eJ(e, t, 9);
                            return r < 0 && (r += 0x100000000), r
                        }(l, c),
                        M = function(t, e) {
                            var r = eY(t, e, 14) ^ eY(t, e, 18) ^ eY(e, t, 9);
                            return r < 0 && (r += 0x100000000), r
                        }(l, c),
                        E = function(t, e, r, i, n) {
                            var o = t & r ^ ~t & n;
                            return o < 0 && (o += 0x100000000), o
                        }(l, 0, d, 0, m),
                        S = function(t, e, r, i, n, o) {
                            var f = e & i ^ ~e & o;
                            return f < 0 && (f += 0x100000000), f
                        }(0, c, 0, p, 0, g),
                        I = this.k[A],
                        N = this.k[A + 1],
                        B = r[A],
                        C = r[A + 1],
                        _ = e2(y, w, x, M, E, S, I, N, B, C),
                        O = e3(y, w, x, M, E, S, I, N, B, C);
                    y = function(t, e) {
                        var r = eJ(t, e, 28) ^ eJ(e, t, 2) ^ eJ(e, t, 7);
                        return r < 0 && (r += 0x100000000), r
                    }(i, n);
                    var R = eZ(y, w = function(t, e) {
                            var r = eY(t, e, 28) ^ eY(e, t, 2) ^ eY(e, t, 7);
                            return r < 0 && (r += 0x100000000), r
                        }(i, n), x = function(t, e, r, i, n) {
                            var o = t & r ^ t & n ^ r & n;
                            return o < 0 && (o += 0x100000000), o
                        }(i, 0, o, 0, s), M = function(t, e, r, i, n, o) {
                            var f = e & i ^ e & o ^ i & o;
                            return f < 0 && (f += 0x100000000), f
                        }(0, n, 0, f, 0, u)),
                        k = e$(y, w, x, M);
                    v = m, b = g, m = d, g = p, d = l, p = c, l = eZ(h, a, _, O), c = e$(a, a, _, O), h = s, a = u, s = o, u = f, o = i, f = n, i = eZ(_, O, R, k), n = e$(_, O, R, k)
                }
                eX(this.h, 0, i, n), eX(this.h, 2, o, f), eX(this.h, 4, s, u), eX(this.h, 6, h, a), eX(this.h, 8, l, c), eX(this.h, 10, d, p), eX(this.h, 12, m, g), eX(this.h, 14, v, b)
            }, e5.prototype._digest = function(t) {
                return "hex" === t ? ep.toHex32(this.h, "big") : ep.split32(this.h, "big")
            }, ep.inherits(e4, e5), e4.blockSize = 1024, e4.outSize = 384, e4.hmacStrength = 192, e4.padLength = 128, e4.prototype._digest = function(t) {
                return "hex" === t ? ep.toHex32(this.h.slice(0, 12), "big") : ep.split32(this.h.slice(0, 12), "big")
            }, eM.sha1 = ek, eM.sha224 = eG, eM.sha256 = eQ, eM.sha384 = e4, eM.sha512 = e5;
            var e9 = {},
                e7 = ep.rotl32,
                rt = ep.sum32,
                re = ep.sum32_3,
                rr = ep.sum32_4,
                ri = ew.BlockHash;

            function rn() {
                if (!(this instanceof rn)) return new rn;
                ri.call(this), this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], this.endian = "little"
            }

            function ro(t, e, r, i) {
                return t <= 15 ? e ^ r ^ i : t <= 31 ? e & r | ~e & i : t <= 47 ? (e | ~r) ^ i : t <= 63 ? e & i | r & ~i : e ^ (r | ~i)
            }
            ep.inherits(rn, ri), e9.ripemd160 = rn, rn.blockSize = 512, rn.outSize = 160, rn.hmacStrength = 192, rn.padLength = 64, rn.prototype._update = function(t, e) {
                for (var r = this.h[0], i = this.h[1], n = this.h[2], o = this.h[3], f = this.h[4], s = r, u = i, h = n, a = o, l = f, c = 0; c < 80; c++) {
                    var d, p, m = rt(e7(rr(r, ro(c, i, n, o), t[rf[c] + e], (d = c) <= 15 ? 0 : d <= 31 ? 0x5a827999 : d <= 47 ? 0x6ed9eba1 : d <= 63 ? 0x8f1bbcdc : 0xa953fd4e), ru[c]), f);
                    r = f, f = o, o = e7(n, 10), n = i, i = m, m = rt(e7(rr(s, ro(79 - c, u, h, a), t[rs[c] + e], (p = c) <= 15 ? 0x50a28be6 : p <= 31 ? 0x5c4dd124 : p <= 47 ? 0x6d703ef3 : p <= 63 ? 0x7a6d76e9 : 0), rh[c]), l), s = l, l = a, a = e7(h, 10), h = u, u = m
                }
                m = re(this.h[1], n, a), this.h[1] = re(this.h[2], o, l), this.h[2] = re(this.h[3], f, s), this.h[3] = re(this.h[4], r, u), this.h[4] = re(this.h[0], i, h), this.h[0] = m
            }, rn.prototype._digest = function(t) {
                return "hex" === t ? ep.toHex32(this.h, "little") : ep.split32(this.h, "little")
            };
            var rf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                rs = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                ru = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                rh = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

            function ra(t, e, r) {
                if (!(this instanceof ra)) return new ra(t, e, r);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(ep.toArray(e, r))
            }

            function rl(t, e, r) {
                return t(r = {
                    path: e,
                    exports: {},
                    require: function(t, e) {
                        return function() {
                            throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(t, e ? ? r.path)
                    }
                }, r.exports), r.exports
            }
            ra.prototype._init = function(t) {
                    t.length > this.blockSize && (t = new this.Hash().update(t).digest()), em(t.length <= this.blockSize);
                    for (var e = t.length; e < this.blockSize; e++) t.push(0);
                    for (e = 0; e < t.length; e++) t[e] ^= 54;
                    for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106;
                    this.outer = new this.Hash().update(t)
                }, ra.prototype.update = function(t, e) {
                    return this.inner.update(t, e), this
                }, ra.prototype.digest = function(t) {
                    return this.outer.update(this.inner.digest()), this.outer.digest(t)
                },
                function(t) {
                    t.utils = ep, t.common = ew, t.sha = eM, t.ripemd = e9, t.hmac = ra, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160
                }(ed);
            var rc = rd;

            function rd(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            rd.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            };
            var rp = rl(function(t, e) {
                    function r(t) {
                        return 1 === t.length ? "0" + t : t
                    }

                    function i(t) {
                        for (var e = "", i = 0; i < t.length; i++) e += r(t[i].toString(16));
                        return e
                    }
                    e.toArray = function(t, e) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var r = [];
                        if ("string" != typeof t) {
                            for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                            return r
                        }
                        if ("hex" === e) {
                            (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
                            for (var i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                        } else
                            for (var i = 0; i < t.length; i++) {
                                var n = t.charCodeAt(i),
                                    o = n >> 8,
                                    f = 255 & n;
                                o ? r.push(o, f) : r.push(f)
                            }
                        return r
                    }, e.zero2 = r, e.toHex = i, e.encode = function(t, e) {
                        return "hex" === e ? i(t) : t
                    }
                }),
                rm = rl(function(t, e) {
                    e.assert = rc, e.toArray = rp.toArray, e.zero2 = rp.zero2, e.toHex = rp.toHex, e.encode = rp.encode, e.getNAF = function(t, e, r) {
                        var i = Array(Math.max(t.bitLength(), r) + 1);
                        i.fill(0);
                        for (var n = 1 << e + 1, o = t.clone(), f = 0; f < i.length; f++) {
                            var s, u = o.andln(n - 1);
                            o.isOdd() ? (s = u > (n >> 1) - 1 ? (n >> 1) - u : u, o.isubn(s)) : s = 0, i[f] = s, o.iushrn(1)
                        }
                        return i
                    }, e.getJSF = function(t, e) {
                        var r = [
                            [],
                            []
                        ];
                        t = t.clone(), e = e.clone();
                        for (var i, n = 0, o = 0; t.cmpn(-n) > 0 || e.cmpn(-o) > 0;) {
                            var f, s, u = t.andln(3) + n & 3,
                                h = e.andln(3) + o & 3;
                            3 === u && (u = -1), 3 === h && (h = -1), f = 1 & u ? (3 == (i = t.andln(7) + n & 7) || 5 === i) && 2 === h ? -u : u : 0, r[0].push(f), s = 1 & h ? (3 == (i = e.andln(7) + o & 7) || 5 === i) && 2 === u ? -h : h : 0, r[1].push(s), 2 * n === f + 1 && (n = 1 - n), 2 * o === s + 1 && (o = 1 - o), t.iushrn(1), e.iushrn(1)
                        }
                        return r
                    }, e.cachedProperty = function(t, e, r) {
                        var i = "_" + e;
                        t.prototype[e] = function() {
                            return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
                        }
                    }, e.parseBytes = function(t) {
                        return "string" == typeof t ? e.toArray(t, "hex") : t
                    }, e.intFromLE = function(t) {
                        return new tk(t, "hex", "le")
                    }
                }),
                rg = rm.getNAF,
                rv = rm.getJSF,
                rb = rm.assert;

            function rA(t, e) {
                this.type = t, this.p = new tk(e.p, 16), this.red = e.prime ? tk.red(e.prime) : tk.mont(this.p), this.zero = new tk(0).toRed(this.red), this.one = new tk(1).toRed(this.red), this.two = new tk(2).toRed(this.red), this.n = e.n && new tk(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function ry(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            rA.prototype.point = function() {
                throw Error("Not implemented")
            }, rA.prototype.validate = function() {
                throw Error("Not implemented")
            }, rA.prototype._fixedNafMul = function(t, e) {
                rb(t.precomputed);
                var r = t._getDoubles(),
                    i = rg(e, 1, this._bitLength),
                    n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                n /= 3;
                var o, f, s = [];
                for (o = 0; o < i.length; o += r.step) {
                    f = 0;
                    for (var u = o + r.step - 1; u >= o; u--) f = (f << 1) + i[u];
                    s.push(f)
                }
                for (var h = this.jpoint(null, null, null), a = this.jpoint(null, null, null), l = n; l > 0; l--) {
                    for (o = 0; o < s.length; o++)(f = s[o]) === l ? a = a.mixedAdd(r.points[o]) : f === -l && (a = a.mixedAdd(r.points[o].neg()));
                    h = h.add(a)
                }
                return h.toP()
            }, rA.prototype._wnafMul = function(t, e) {
                var r = 4,
                    i = t._getNAFPoints(r);
                r = i.wnd;
                for (var n = i.points, o = rg(e, r, this._bitLength), f = this.jpoint(null, null, null), s = o.length - 1; s >= 0; s--) {
                    for (var u = 0; s >= 0 && 0 === o[s]; s--) u++;
                    if (s >= 0 && u++, f = f.dblp(u), s < 0) break;
                    var h = o[s];
                    rb(0 !== h), f = "affine" === t.type ? h > 0 ? f.mixedAdd(n[h - 1 >> 1]) : f.mixedAdd(n[-h - 1 >> 1].neg()) : h > 0 ? f.add(n[h - 1 >> 1]) : f.add(n[-h - 1 >> 1].neg())
                }
                return "affine" === t.type ? f.toP() : f
            }, rA.prototype._wnafMulAdd = function(t, e, r, i, n) {
                var o, f, s, u = this._wnafT1,
                    h = this._wnafT2,
                    a = this._wnafT3,
                    l = 0;
                for (o = 0; o < i; o++) {
                    var c = (s = e[o])._getNAFPoints(t);
                    u[o] = c.wnd, h[o] = c.points
                }
                for (o = i - 1; o >= 1; o -= 2) {
                    var d = o - 1,
                        p = o;
                    if (1 !== u[d] || 1 !== u[p]) {
                        a[d] = rg(r[d], u[d], this._bitLength), a[p] = rg(r[p], u[p], this._bitLength), l = Math.max(a[d].length, l), l = Math.max(a[p].length, l);
                        continue
                    }
                    var m = [e[d], null, null, e[p]];
                    0 === e[d].y.cmp(e[p].y) ? (m[1] = e[d].add(e[p]), m[2] = e[d].toJ().mixedAdd(e[p].neg())) : 0 === e[d].y.cmp(e[p].y.redNeg()) ? (m[1] = e[d].toJ().mixedAdd(e[p]), m[2] = e[d].add(e[p].neg())) : (m[1] = e[d].toJ().mixedAdd(e[p]), m[2] = e[d].toJ().mixedAdd(e[p].neg()));
                    var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        v = rv(r[d], r[p]);
                    for (l = Math.max(v[0].length, l), a[d] = Array(l), a[p] = Array(l), f = 0; f < l; f++) {
                        var b = 0 | v[0][f],
                            A = 0 | v[1][f];
                        a[d][f] = g[(b + 1) * 3 + (A + 1)], a[p][f] = 0, h[d] = m
                    }
                }
                var y = this.jpoint(null, null, null),
                    w = this._wnafT4;
                for (o = l; o >= 0; o--) {
                    for (var x = 0; o >= 0;) {
                        var M = !0;
                        for (f = 0; f < i; f++) w[f] = 0 | a[f][o], 0 !== w[f] && (M = !1);
                        if (!M) break;
                        x++, o--
                    }
                    if (o >= 0 && x++, y = y.dblp(x), o < 0) break;
                    for (f = 0; f < i; f++) {
                        var E = w[f];
                        0 !== E && (E > 0 ? s = h[f][E - 1 >> 1] : E < 0 && (s = h[f][-E - 1 >> 1].neg()), y = "affine" === s.type ? y.mixedAdd(s) : y.add(s))
                    }
                }
                for (o = 0; o < i; o++) h[o] = null;
                return n ? y : y.toP()
            }, rA.BasePoint = ry, ry.prototype.eq = function() {
                throw Error("Not implemented")
            }, ry.prototype.validate = function() {
                return this.curve.validate(this)
            }, rA.prototype.decodePoint = function(t, e) {
                t = rm.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? rb(t[t.length - 1] % 2 == 0) : 7 === t[0] && rb(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw Error("Unknown point format")
            }, ry.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, ry.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, ry.prototype.encode = function(t, e) {
                return rm.encode(this._encode(e), t)
            }, ry.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, ry.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, ry.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], i = this, n = 0; n < e; n += t) {
                    for (var o = 0; o < t; o++) i = i.dbl();
                    r.push(i)
                }
                return {
                    step: t,
                    points: r
                }
            }, ry.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) e[n] = e[n - 1].add(i);
                return {
                    wnd: t,
                    points: e
                }
            }, ry.prototype._getBeta = function() {
                return null
            }, ry.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            };
            var rw = rl(function(t) {
                    "function" == typeof Object.create ? t.exports = function(t, e) {
                        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : t.exports = function(t, e) {
                        if (e) {
                            t.super_ = e;
                            var r = function() {};
                            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                        }
                    }
                }),
                rx = rm.assert;

            function rM(t) {
                rA.call(this, "short", t), this.a = new tk(t.a, 16).toRed(this.red), this.b = new tk(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
            }

            function rE(t, e, r, i) {
                rA.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new tk(e, 16), this.y = new tk(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function rS(t, e, r, i) {
                rA.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new tk(0)) : (this.x = new tk(e, 16), this.y = new tk(r, 16), this.z = new tk(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            rw(rM, rA), rM.prototype._getEndomorphism = function(t) {
                if (!(!this.zeroA || !this.g || !this.n || 1 !== this.p.modn(3))) {
                    if (t.beta) e = new tk(t.beta, 16).toRed(this.red);
                    else {
                        var e, r, i, n = this._getEndoRoots(this.p);
                        e = (e = 0 > n[0].cmp(n[1]) ? n[0] : n[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new tk(t.lambda, 16);
                    else {
                        var o = this._getEndoRoots(this.n);
                        0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], rx(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return i = t.basis ? t.basis.map(function(t) {
                        return {
                            a: new tk(t.a, 16),
                            b: new tk(t.b, 16)
                        }
                    }) : this._getEndoBasis(r), {
                        beta: e,
                        lambda: r,
                        basis: i
                    }
                }
            }, rM.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : tk.mont(t),
                    r = new tk(2).toRed(e).redInvm(),
                    i = r.redNeg(),
                    n = new tk(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()]
            }, rM.prototype._getEndoBasis = function(t) {
                for (var e, r, i, n, o, f, s, u, h, a = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = t, c = this.n.clone(), d = new tk(1), p = new tk(0), m = new tk(0), g = new tk(1), v = 0; 0 !== l.cmpn(0);) {
                    var b = c.div(l);
                    u = c.sub(b.mul(l)), h = m.sub(b.mul(d));
                    var A = g.sub(b.mul(p));
                    if (!i && 0 > u.cmp(a)) e = s.neg(), r = d, i = u.neg(), n = h;
                    else if (i && 2 == ++v) break;
                    s = u, c = l, l = u, m = d, d = h, g = p, p = A
                }
                o = u.neg(), f = h;
                var y = i.sqr().add(n.sqr());
                return o.sqr().add(f.sqr()).cmp(y) >= 0 && (o = e, f = r), i.negative && (i = i.neg(), n = n.neg()), o.negative && (o = o.neg(), f = f.neg()), [{
                    a: i,
                    b: n
                }, {
                    a: o,
                    b: f
                }]
            }, rM.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    r = e[0],
                    i = e[1],
                    n = i.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n),
                    f = n.mul(r.a),
                    s = o.mul(i.a),
                    u = n.mul(r.b),
                    h = o.mul(i.b);
                return {
                    k1: t.sub(f).sub(s),
                    k2: u.add(h).neg()
                }
            }, rM.prototype.pointFromX = function(t, e) {
                (t = new tk(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    i = r.redSqrt();
                if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
                var n = i.fromRed().isOdd();
                return (e && !n || !e && n) && (i = i.redNeg()), this.point(t, i)
            }, rM.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    r = t.y,
                    i = this.a.redMul(e),
                    n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
                return 0 === r.redSqr().redISub(n).cmpn(0)
            }, rM.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var i = this._endoWnafT1, n = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var f = this._endoSplit(e[o]),
                        s = t[o],
                        u = s._getBeta();
                    f.k1.negative && (f.k1.ineg(), s = s.neg(!0)), f.k2.negative && (f.k2.ineg(), u = u.neg(!0)), i[2 * o] = s, i[2 * o + 1] = u, n[2 * o] = f.k1, n[2 * o + 1] = f.k2
                }
                for (var h = this._wnafMulAdd(1, i, n, 2 * o, r), a = 0; a < 2 * o; a++) i[a] = null, n[a] = null;
                return h
            }, rw(rE, rA.BasePoint), rM.prototype.point = function(t, e, r) {
                return new rE(this, t, e, r)
            }, rM.prototype.pointFromJSON = function(t, e) {
                return rE.fromJSON(this, t, e)
            }, rE.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve,
                            i = function(t) {
                                return r.point(t.x.redMul(r.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(i)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(i)
                            }
                        }
                    }
                    return e
                }
            }, rE.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, rE.fromJSON = function(t, e, r) {
                "string" == typeof e && (e = JSON.parse(e));
                var i = t.point(e[0], e[1], r);
                if (!e[2]) return i;

                function n(e) {
                    return t.point(e[0], e[1], r)
                }
                var o = e[2];
                return i.precomputed = {
                    beta: null,
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: [i].concat(o.doubles.points.map(n))
                    },
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: [i].concat(o.naf.points.map(n))
                    }
                }, i
            }, rE.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, rE.prototype.isInfinity = function() {
                return this.inf
            }, rE.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x),
                    i = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, i)
            }, rE.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    r = this.x.redSqr(),
                    i = t.redInvm(),
                    n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
                    o = n.redSqr().redISub(this.x.redAdd(this.x)),
                    f = n.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, f)
            }, rE.prototype.getX = function() {
                return this.x.fromRed()
            }, rE.prototype.getY = function() {
                return this.y.fromRed()
            }, rE.prototype.mul = function(t) {
                return t = new tk(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, rE.prototype.mulAdd = function(t, e, r) {
                var i = [this, e],
                    n = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
            }, rE.prototype.jmulAdd = function(t, e, r) {
                var i = [this, e],
                    n = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
            }, rE.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, rE.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed,
                        i = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(i)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(i)
                        }
                    }
                }
                return e
            }, rE.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, rw(rS, rA.BasePoint), rM.prototype.jpoint = function(t, e, r) {
                return new rS(this, t, e, r)
            }, rS.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    i = this.y.redMul(e).redMul(t);
                return this.curve.point(r, i)
            }, rS.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, rS.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    i = this.x.redMul(e),
                    n = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)),
                    f = t.y.redMul(r.redMul(this.z)),
                    s = i.redSub(n),
                    u = o.redSub(f);
                if (0 === s.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var h = s.redSqr(),
                    a = h.redMul(s),
                    l = i.redMul(h),
                    c = u.redSqr().redIAdd(a).redISub(l).redISub(l),
                    d = u.redMul(l.redISub(c)).redISub(o.redMul(a)),
                    p = this.z.redMul(t.z).redMul(s);
                return this.curve.jpoint(c, d, p)
            }, rS.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    r = this.x,
                    i = t.x.redMul(e),
                    n = this.y,
                    o = t.y.redMul(e).redMul(this.z),
                    f = r.redSub(i),
                    s = n.redSub(o);
                if (0 === f.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = f.redSqr(),
                    h = u.redMul(f),
                    a = r.redMul(u),
                    l = s.redSqr().redIAdd(h).redISub(a).redISub(a),
                    c = s.redMul(a.redISub(l)).redISub(n.redMul(h)),
                    d = this.z.redMul(f);
                return this.curve.jpoint(l, c, d)
            }, rS.prototype.dblp = function(t) {
                if (0 === t || this.isInfinity()) return this;
                if (!t) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var e, r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var i = this.curve.a,
                    n = this.curve.tinv,
                    o = this.x,
                    f = this.y,
                    s = this.z,
                    u = s.redSqr().redSqr(),
                    h = f.redAdd(f);
                for (e = 0; e < t; e++) {
                    var a = o.redSqr(),
                        l = h.redSqr(),
                        c = l.redSqr(),
                        d = a.redAdd(a).redIAdd(a).redIAdd(i.redMul(u)),
                        p = o.redMul(l),
                        m = d.redSqr().redISub(p.redAdd(p)),
                        g = p.redISub(m),
                        v = d.redMul(g);
                    v = v.redIAdd(v).redISub(c);
                    var b = h.redMul(s);
                    e + 1 < t && (u = u.redMul(c)), o = m, s = b, h = v
                }
                return this.curve.jpoint(o, h.redMul(n), s)
            }, rS.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, rS.prototype._zeroDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        f = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    f = f.redIAdd(f);
                    var s = i.redAdd(i).redIAdd(i),
                        u = s.redSqr().redISub(f).redISub(f),
                        h = o.redIAdd(o);
                    h = (h = h.redIAdd(h)).redIAdd(h), t = u, e = s.redMul(f.redISub(u)).redISub(h), r = this.y.redAdd(this.y)
                } else {
                    var a = this.x.redSqr(),
                        l = this.y.redSqr(),
                        c = l.redSqr(),
                        d = this.x.redAdd(l).redSqr().redISub(a).redISub(c);
                    d = d.redIAdd(d);
                    var p = a.redAdd(a).redIAdd(a),
                        m = p.redSqr(),
                        g = c.redIAdd(c);
                    g = (g = g.redIAdd(g)).redIAdd(g), t = m.redISub(d).redISub(d), e = p.redMul(d.redISub(t)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, rS.prototype._threeDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var i = this.x.redSqr(),
                        n = this.y.redSqr(),
                        o = n.redSqr(),
                        f = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
                    f = f.redIAdd(f);
                    var s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                        u = s.redSqr().redISub(f).redISub(f);
                    t = u;
                    var h = o.redIAdd(o);
                    h = (h = h.redIAdd(h)).redIAdd(h), e = s.redMul(f.redISub(u)).redISub(h), r = this.y.redAdd(this.y)
                } else {
                    var a = this.z.redSqr(),
                        l = this.y.redSqr(),
                        c = this.x.redMul(l),
                        d = this.x.redSub(a).redMul(this.x.redAdd(a));
                    d = d.redAdd(d).redIAdd(d);
                    var p = c.redIAdd(c),
                        m = (p = p.redIAdd(p)).redAdd(p);
                    t = d.redSqr().redISub(m), r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(a);
                    var g = l.redSqr();
                    g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), e = d.redMul(p.redISub(t)).redISub(g)
                }
                return this.curve.jpoint(t, e, r)
            }, rS.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    i = this.z,
                    n = i.redSqr().redSqr(),
                    o = e.redSqr(),
                    f = r.redSqr(),
                    s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
                    u = e.redAdd(e),
                    h = (u = u.redIAdd(u)).redMul(f),
                    a = s.redSqr().redISub(h.redAdd(h)),
                    l = h.redISub(a),
                    c = f.redSqr();
                c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                var d = s.redMul(l).redISub(c),
                    p = r.redAdd(r).redMul(i);
                return this.curve.jpoint(a, d, p)
            }, rS.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    i = e.redSqr(),
                    n = t.redAdd(t).redIAdd(t),
                    o = n.redSqr(),
                    f = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
                    s = (f = (f = (f = f.redIAdd(f)).redAdd(f).redIAdd(f)).redISub(o)).redSqr(),
                    u = i.redIAdd(i);
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var h = n.redIAdd(f).redSqr().redISub(o).redISub(s).redISub(u),
                    a = e.redMul(h);
                a = (a = a.redIAdd(a)).redIAdd(a);
                var l = this.x.redMul(s).redISub(a);
                l = (l = l.redIAdd(l)).redIAdd(l);
                var c = this.y.redMul(h.redMul(u.redISub(h)).redISub(f.redMul(s)));
                c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                var d = this.z.redAdd(f).redSqr().redISub(r).redISub(s);
                return this.curve.jpoint(l, c, d)
            }, rS.prototype.mul = function(t, e) {
                return t = new tk(t, e), this.curve._wnafMul(this, t)
            }, rS.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var i = e.redMul(this.z),
                    n = r.redMul(t.z);
                return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0)
            }, rS.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var i = t.clone(), n = this.curve.redN.redMul(e);;) {
                    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
                }
            }, rS.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, rS.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var rI = rl(function(t, e) {
                    e.base = rA, e.short = rM, e.mont = null, e.edwards = null
                }),
                rN = rl(function(t, e) {
                    var r, i = rm.assert;

                    function n(t) {
                        "short" === t.type ? this.curve = new rI.short(t) : "edwards" === t.type ? this.curve = new rI.edwards(t) : this.curve = new rI.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function o(t, r) {
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var i = new n(r);
                                return Object.defineProperty(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: i
                                }), i
                            }
                        })
                    }
                    e.PresetCurve = n, o("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: ed.sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), o("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: ed.sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), o("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: ed.sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), o("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: ed.sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), o("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: ed.sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), o("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: ed.sha256,
                        gRed: !1,
                        g: ["9"]
                    }), o("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: ed.sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        r = null.crash()
                    } catch {
                        r = void 0
                    }
                    o("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: ed.sha256,
                        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                        basis: [{
                            a: "3086d221a7d46bcde86c90e49284eb15",
                            b: "-e4437ed6010e88286f547fa90abfe4c3"
                        }, {
                            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                            b: "3086d221a7d46bcde86c90e49284eb15"
                        }],
                        gRed: !1,
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                    })
                });

            function rB(t) {
                if (!(this instanceof rB)) return new rB(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = rp.toArray(t.entropy, t.entropyEnc || "hex"),
                    r = rp.toArray(t.nonce, t.nonceEnc || "hex"),
                    i = rp.toArray(t.pers, t.persEnc || "hex");
                rc(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, i)
            }
            rB.prototype._init = function(t, e, r) {
                var i = t.concat(e).concat(r);
                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
                this._update(i), this._reseed = 1, this.reseedInterval = 0x1000000000000
            }, rB.prototype._hmac = function() {
                return new ed.hmac(this.hash, this.K)
            }, rB.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, rB.prototype.reseed = function(t, e, r, i) {
                "string" != typeof e && (i = r, r = e, e = null), t = rp.toArray(t, e), r = rp.toArray(r, i), rc(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, rB.prototype.generate = function(t, e, r, i) {
                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                "string" != typeof e && (i = r, r = e, e = null), r && (r = rp.toArray(r, i || "hex"), this._update(r));
                for (var n = []; n.length < t;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
                var o = n.slice(0, t);
                return this._update(r), this._reseed++, rp.encode(o, e)
            };
            var rC = rm.assert;

            function r_(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            r_.fromPublic = function(t, e, r) {
                return e instanceof r_ ? e : new r_(t, {
                    pub: e,
                    pubEnc: r
                })
            }, r_.fromPrivate = function(t, e, r) {
                return e instanceof r_ ? e : new r_(t, {
                    priv: e,
                    privEnc: r
                })
            }, r_.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, r_.prototype.getPublic = function(t, e) {
                return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
            }, r_.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, r_.prototype._importPrivate = function(t, e) {
                this.priv = new tk(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, r_.prototype._importPublic = function(t, e) {
                if (t.x || t.y) {
                    "mont" === this.ec.curve.type ? rC(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && rC(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(t, e)
            }, r_.prototype.derive = function(t) {
                return t.validate() || rC(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, r_.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, r_.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, r_.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var rO = rm.assert;

            function rR(t, e) {
                if (t instanceof rR) return t;
                this._importDER(t, e) || (rO(t.r && t.s, "Signature without r or s"), this.r = new tk(t.r, 16), this.s = new tk(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function rk() {
                this.place = 0
            }

            function rP(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var i = 15 & r;
                if (0 === i || i > 4) return !1;
                for (var n = 0, o = 0, f = e.place; o < i; o++, f++) n <<= 8, n |= t[f], n >>>= 0;
                return !(n <= 127) && (e.place = f, n)
            }

            function rU(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function rT(t, e) {
                if (e < 128) {
                    t.push(e);
                    return
                }
                var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                t.push(e)
            }
            rR.prototype._importDER = function(t, e) {
                t = rm.toArray(t, e);
                var r = new rk;
                if (48 !== t[r.place++]) return !1;
                var i = rP(t, r);
                if (!1 === i || i + r.place !== t.length || 2 !== t[r.place++]) return !1;
                var n = rP(t, r);
                if (!1 === n) return !1;
                var o = t.slice(r.place, n + r.place);
                if (r.place += n, 2 !== t[r.place++]) return !1;
                var f = rP(t, r);
                if (!1 === f || t.length !== f + r.place) return !1;
                var s = t.slice(r.place, f + r.place);
                if (0 === o[0]) {
                    if (!(128 & o[1])) return !1;
                    o = o.slice(1)
                }
                if (0 === s[0]) {
                    if (!(128 & s[1])) return !1;
                    s = s.slice(1)
                }
                return this.r = new tk(o), this.s = new tk(s), this.recoveryParam = null, !0
            }, rR.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = rU(e), r = rU(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var i = [2];
                rT(i, e.length), (i = i.concat(e)).push(2), rT(i, r.length);
                var n = i.concat(r),
                    o = [48];
                return rT(o, n.length), o = o.concat(n), rm.encode(o, t)
            };
            var rD = function() {
                    throw Error("unsupported")
                },
                rF = rm.assert;

            function rq(t) {
                if (!(this instanceof rq)) return new rq(t);
                "string" == typeof t && (rF(Object.prototype.hasOwnProperty.call(rN, t), "Unknown curve " + t), t = rN[t]), t instanceof rN.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            rq.prototype.keyPair = function(t) {
                return new r_(this, t)
            }, rq.prototype.keyFromPrivate = function(t, e) {
                return r_.fromPrivate(this, t, e)
            }, rq.prototype.keyFromPublic = function(t, e) {
                return r_.fromPublic(this, t, e)
            }, rq.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new rB({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || rD(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), i = this.n.sub(new tk(2));;) {
                    var n = new tk(e.generate(r));
                    if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
                }
            }, rq.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }, rq.prototype.sign = function(t, e, r, i) {
                "object" == typeof r && (i = r, r = null), i || (i = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new tk(t, 16));
                for (var n = this.n.byteLength(), o = e.getPrivate().toArray("be", n), f = t.toArray("be", n), s = new rB({
                        hash: this.hash,
                        entropy: o,
                        nonce: f,
                        pers: i.pers,
                        persEnc: i.persEnc || "utf8"
                    }), u = this.n.sub(new tk(1)), h = 0;; h++) {
                    var a = i.k ? i.k(h) : new tk(s.generate(this.n.byteLength()));
                    if (!(0 >= (a = this._truncateToN(a, !0)).cmpn(1) || a.cmp(u) >= 0)) {
                        var l = this.g.mul(a);
                        if (!l.isInfinity()) {
                            var c = l.getX(),
                                d = c.umod(this.n);
                            if (0 !== d.cmpn(0)) {
                                var p = a.invm(this.n).mul(d.mul(e.getPrivate()).iadd(t));
                                if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                                    var m = (l.getY().isOdd() ? 1 : 0) | (0 !== c.cmp(d) ? 2 : 0);
                                    return i.canonical && p.cmp(this.nh) > 0 && (p = this.n.sub(p), m ^= 1), new rR({
                                        r: d,
                                        s: p,
                                        recoveryParam: m
                                    })
                                }
                            }
                        }
                    }
                }
            }, rq.prototype.verify = function(t, e, r, i) {
                t = this._truncateToN(new tk(t, 16)), r = this.keyFromPublic(r, i);
                var n = (e = new rR(e, "hex")).r,
                    o = e.s;
                if (0 > n.cmpn(1) || n.cmp(this.n) >= 0 || 0 > o.cmpn(1) || o.cmp(this.n) >= 0) return !1;
                var f, s = o.invm(this.n),
                    u = s.mul(t).umod(this.n),
                    h = s.mul(n).umod(this.n);
                return this.curve._maxwellTrick ? !(f = this.g.jmulAdd(u, r.getPublic(), h)).isInfinity() && f.eqXToP(n) : !(f = this.g.mulAdd(u, r.getPublic(), h)).isInfinity() && 0 === f.getX().umod(this.n).cmp(n)
            }, rq.prototype.recoverPubKey = function(t, e, r, i) {
                rF((3 & r) === r, "The recovery param is more than two bits"), e = new rR(e, i);
                var n = this.n,
                    o = new tk(t),
                    f = e.r,
                    s = e.s,
                    u = 1 & r,
                    h = r >> 1;
                if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h) throw Error("Unable to find sencond key candinate");
                f = h ? this.curve.pointFromX(f.add(this.curve.n), u) : this.curve.pointFromX(f, u);
                var a = e.r.invm(n),
                    l = n.sub(o).mul(a).umod(n),
                    c = s.mul(a).umod(n);
                return this.g.mulAdd(l, f, c)
            }, rq.prototype.getKeyRecoveryParam = function(t, e, r, i) {
                if (null !== (e = new rR(e, i)).recoveryParam) return e.recoveryParam;
                for (var n, o = 0; o < 4; o++) {
                    try {
                        n = this.recoverPubKey(t, e, o)
                    } catch {
                        continue
                    }
                    if (n.eq(r)) return o
                }
                throw Error("Unable to find valid recovery factor")
            };
            var rL = rl(function(t, e) {
                e.version = "6.5.4", e.utils = rm, e.rand = function() {
                    throw Error("unsupported")
                }, e.curve = rI, e.curves = rN, e.ec = rq, e.eddsa = null
            }).ec;
            let rz = new tv("signing-key/5.7.0"),
                rj = null;

            function rH() {
                return rj || (rj = new rL("secp256k1")), rj
            }
            class rK {
                constructor(t) {
                    ea(this, "curve", "secp256k1"), ea(this, "privateKey", tI(t)), 32 !== function(t) {
                        if ("string" != typeof t) t = tI(t);
                        else if (!tE(t) || t.length % 2) return null;
                        return (t.length - 2) / 2
                    }(this.privateKey) && rz.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    let e = rH().keyFromPrivate(tM(this.privateKey));
                    ea(this, "publicKey", "0x" + e.getPublic(!1, "hex")), ea(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), ea(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    let e = rH().keyFromPublic(tM(this.publicKey)),
                        r = rH().keyFromPublic(tM(t));
                    return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    let e = rH().keyFromPrivate(tM(this.privateKey)),
                        r = tM(t);
                    32 !== r.length && rz.throwArgumentError("bad digest length", "digest", t);
                    let i = e.sign(r, {
                        canonical: !0
                    });
                    return tC({
                        recoveryParam: i.recoveryParam,
                        r: tB("0x" + i.r.toString(16), 32),
                        s: tB("0x" + i.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    let e = rH().keyFromPrivate(tM(this.privateKey)),
                        r = rH().keyFromPublic(tM(rQ(t)));
                    return tB("0x" + e.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !!(t && t._isSigningKey)
                }
            }

            function rQ(t, e) {
                let r = tM(t);
                if (32 === r.length) {
                    let t = new rK(r);
                    return e ? "0x" + rH().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === r.length ? e ? tI(r) : "0x" + rH().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + rH().keyFromPublic(r).getPublic(!0, "hex") : tI(r) : rz.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
            async function rG(t, e, r, i, n, o) {
                switch (r.t) {
                    case "eip191":
                        var f;
                        return f = r.s, (function(t) {
                            let e = null;
                            if ("string" != typeof t && ef.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = es(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && ef.throwArgumentError("bad address checksum", "address", t);
                            else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                                for (t.substring(2, 4) !== function(t) {
                                        let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => eu[t]).join("");
                                        for (; e.length >= eh;) {
                                            let t = e.substring(0, eh);
                                            e = parseInt(t, 10) % 97 + e.substring(t.length)
                                        }
                                        let r = String(98 - parseInt(e, 10) % 97);
                                        for (; r.length < 2;) r = "0" + r;
                                        return r
                                    }(t) && ef.throwArgumentError("bad icap checksum", "address", t), e = new tU(t.substring(4), 36).toString(16); e.length < 40;) e = "0" + e;
                                e = es("0x" + e)
                            } else ef.throwArgumentError("invalid address", "address", t);
                            return e
                        })(tN(t_(tN(rQ(function(t, e) {
                            let r = tC(e),
                                i = {
                                    r: tM(r.r),
                                    s: tM(r.s)
                                };
                            return "0x" + rH().recoverPubKey(tM(t), i, r.recoveryParam).encode("hex", !1)
                        }(tM(eo(e)), f)), 1)), 12)).toLowerCase() === t.toLowerCase();
                    case "eip1271":
                        return await rJ(t, e, r.s, i, n, o);
                    default:
                        throw Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)
                }
            }
            async function rJ(t, e, r, i, n, o) {
                try {
                    let f = "0x1626ba7e",
                        s = r.substring(2),
                        u = eo(e).substring(2),
                        h = f + u + "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" + s,
                        a = await fetch(`${o||"https://rpc.walletconnect.org/v1"}/?chainId=${i}&projectId=${n}`, {
                            method: "POST",
                            body: JSON.stringify({
                                id: Date.now() + Math.floor(1e3 * Math.random()),
                                jsonrpc: "2.0",
                                method: "eth_call",
                                params: [{
                                    to: t,
                                    data: h
                                }, "latest"]
                            })
                        }),
                        {
                            result: l
                        } = await a.json();
                    return !!l && l.slice(0, f.length).toLowerCase() === f.toLowerCase()
                } catch (t) {
                    return console.error("isValidEip1271Signature: ", t), !1
                }
            }
            new tv("transactions/5.7.0"),
                function(t) {
                    t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559"
                }(s || (s = {}));
            var rY = Object.defineProperty,
                rV = Object.defineProperties,
                rW = Object.getOwnPropertyDescriptors,
                rX = Object.getOwnPropertySymbols,
                rZ = Object.prototype.hasOwnProperty,
                r$ = Object.prototype.propertyIsEnumerable,
                r0 = (t, e, r) => e in t ? rY(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                r1 = (t, e) => {
                    for (var r in e || (e = {})) rZ.call(e, r) && r0(t, r, e[r]);
                    if (rX)
                        for (var r of rX(e)) r$.call(e, r) && r0(t, r, e[r]);
                    return t
                },
                r2 = (t, e) => rV(t, rW(e));
            let r3 = t => t ? .split(":"),
                r6 = t => {
                    let e = t && r3(t);
                    if (e) return t.includes("did:pkh:") ? e[3] : e[1]
                },
                r8 = t => {
                    let e = t && r3(t);
                    if (e) return e[2] + ":" + e[3]
                },
                r5 = t => {
                    let e = t && r3(t);
                    if (e) return e.pop()
                };
            async function r4(t) {
                let {
                    cacao: e,
                    projectId: r
                } = t, {
                    s: i,
                    p: n
                } = e, o = r9(n, n.iss), f = r5(n.iss);
                return await rG(f, o, i, r6(n.iss), r)
            }
            let r9 = (t, e) => {
                let r = `${t.domain} wants you to sign in with your Ethereum account:`,
                    i = r5(e);
                if (!t.aud && !t.uri) throw Error("Either `aud` or `uri` is required to construct the message");
                let n = t.statement || void 0,
                    o = `URI: ${t.aud||t.uri}`,
                    f = `Version: ${t.version}`,
                    s = `Chain ID: ${r6(e)}`,
                    u = `Nonce: ${t.nonce}`,
                    h = `Issued At: ${t.iat}`,
                    a = t.exp ? `Expiration Time: ${t.exp}` : void 0,
                    l = t.nbf ? `Not Before: ${t.nbf}` : void 0,
                    c = t.requestId ? `Request ID: ${t.requestId}` : void 0,
                    d = t.resources ? `Resources:${t.resources.map(t=>`
- ${t}`).join("")}` : void 0,
                    p = iu(t.resources);
                return p && (n = function(t = "", e) {
                    r7(e);
                    let r = "I further authorize the stated URI to perform the following actions on my behalf: ";
                    if (t.includes(r)) return t;
                    let i = [],
                        n = 0;
                    Object.keys(e.att).forEach(t => {
                        let r = Object.keys(e.att[t]).map(t => ({
                            ability: t.split("/")[0],
                            action: t.split("/")[1]
                        }));
                        r.sort((t, e) => t.action.localeCompare(e.action));
                        let o = {};
                        r.forEach(t => {
                            o[t.ability] || (o[t.ability] = []), o[t.ability].push(t.action)
                        });
                        let f = Object.keys(o).map(e => (n++, `(${n}) '${e}': '${o[e].join("', '")}' for '${t}'.`));
                        i.push(f.join(", ").replace(".,", "."))
                    });
                    let o = i.join(" "),
                        f = `${r}${o}`;
                    return `${t?t+" ":""}${f}`
                }(n, ie(p))), [r, i, "", n, "", o, f, s, u, h, a, l, c, d].filter(t => null != t).join(`
`)
            };

            function r7(t) {
                if (!t) throw Error("No recap provided, value is undefined");
                if (!t.att) throw Error("No `att` property found");
                let e = Object.keys(t.att);
                if (!(null != e && e.length)) throw Error("No resources found in `att` property");
                e.forEach(e => {
                    let r = t.att[e];
                    if (Array.isArray(r) || "object" != typeof r) throw Error(`Resource must be an object: ${e}`);
                    if (!Object.keys(r).length) throw Error(`Resource object is empty: ${e}`);
                    Object.keys(r).forEach(t => {
                        let e = r[t];
                        if (!Array.isArray(e)) throw Error(`Ability limits ${t} must be an array of objects, found: ${e}`);
                        if (!e.length) throw Error(`Value of ${t} is empty array, must be an array with objects`);
                        e.forEach(e => {
                            if ("object" != typeof e) throw Error(`Ability limits (${t}) must be an array of objects, found: ${e}`)
                        })
                    })
                })
            }

            function it(t) {
                return r7(t), `urn:recap:${M.from(JSON.stringify(t)).toString("base64").replace(/=/g,"")}`
            }

            function ie(t) {
                var e;
                let r = (e = t.replace("urn:recap:", ""), JSON.parse(M.from(e, "base64").toString("utf-8")));
                return r7(r), r
            }

            function ir(t, e, r) {
                return it(function(t, e, r, i = {}) {
                    return r ? .sort((t, e) => t.localeCompare(e)), {
                        att: {
                            [t]: function(t, e, r = {}) {
                                return Object.assign({}, ...(e = e ? .sort((t, e) => t.localeCompare(e))).map(e => ({
                                    [`${t}/${e}`]: [r]
                                })))
                            }(e, r, i)
                        }
                    }
                }(t, e, r))
            }

            function ii(t, e) {
                return it(function(t, e) {
                    r7(t), r7(e);
                    let r = Object.keys(t.att).concat(Object.keys(e.att)).sort((t, e) => t.localeCompare(e)),
                        i = {
                            att: {}
                        };
                    return r.forEach(r => {
                        var n, o;
                        Object.keys((null == (n = t.att) ? void 0 : n[r]) || {}).concat(Object.keys((null == (o = e.att) ? void 0 : o[r]) || {})).sort((t, e) => t.localeCompare(e)).forEach(n => {
                            var o, f;
                            i.att[r] = r2(r1({}, i.att[r]), {
                                [n]: (null == (o = t.att[r]) ? void 0 : o[n]) || (null == (f = e.att[r]) ? void 0 : f[n])
                            })
                        })
                    }), i
                }(ie(t), ie(e)))
            }

            function io(t) {
                var e;
                let r = ie(t);
                r7(r);
                let i = null == (e = r.att) ? void 0 : e.eip155;
                return i ? Object.keys(i).map(t => t.split("/")[1]) : []
            }

            function is(t) {
                let e = ie(t);
                r7(e);
                let r = [];
                return Object.values(e.att).forEach(t => {
                    Object.values(t).forEach(t => {
                        var e;
                        null != (e = t ? .[0]) && e.chains && r.push(t[0].chains)
                    })
                }), [...new Set(r.flat())]
            }

            function iu(t) {
                if (!t) return;
                let e = t ? .[t.length - 1];
                return e && e.includes("urn:recap:") ? e : void 0
            }
            let ih = "base10",
                ia = "base16",
                il = "base64pad",
                ic = "base64url",
                id = "utf8",
                ip = 1,
                im = 2;

            function ig() {
                let t = v.TZ();
                return {
                    privateKey: (0, b.dI)(t.secretKey, ia),
                    publicKey: (0, b.dI)(t.publicKey, ia)
                }
            }

            function iv() {
                let t = (0, m.randomBytes)(32);
                return (0, b.dI)(t, ia)
            }

            function ib(t, e) {
                let r = v.Tc((0, b.sH)(t, ia), (0, b.sH)(e, ia), !0),
                    i = new p.i(g.aD, r).expand(32);
                return (0, b.dI)(i, ia)
            }

            function iA(t) {
                let e = (0, g.tW)((0, b.sH)(t, ia));
                return (0, b.dI)(e, ia)
            }

            function iy(t) {
                let e = (0, g.tW)((0, b.sH)(t, id));
                return (0, b.dI)(e, ia)
            }

            function iw(t) {
                return (0, b.sH)(`${t}`, ih)
            }

            function ix(t) {
                return Number((0, b.dI)(t, ih))
            }

            function iM(t) {
                let e = iw("u" > typeof t.type ? t.type : 0);
                if (ix(e) === ip && typeof t.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                let r = "u" > typeof t.senderPublicKey ? (0, b.sH)(t.senderPublicKey, ia) : void 0,
                    i = "u" > typeof t.iv ? (0, b.sH)(t.iv, ia) : (0, m.randomBytes)(12);
                return iN({
                    type: e,
                    sealed: new d.g6((0, b.sH)(t.symKey, ia)).seal(i, (0, b.sH)(t.message, id)),
                    iv: i,
                    senderPublicKey: r,
                    encoding: t.encoding
                })
            }

            function iE(t, e) {
                let r = iw(im),
                    i = (0, m.randomBytes)(12);
                return iN({
                    type: r,
                    sealed: (0, b.sH)(t, id),
                    iv: i,
                    encoding: e
                })
            }

            function iS(t) {
                let e = new d.g6((0, b.sH)(t.symKey, ia)),
                    {
                        sealed: r,
                        iv: i
                    } = iB({
                        encoded: t.encoded,
                        encoding: t ? .encoding
                    }),
                    n = e.open(i, r);
                if (null === n) throw Error("Failed to decrypt");
                return (0, b.dI)(n, id)
            }

            function iI(t, e) {
                let {
                    sealed: r
                } = iB({
                    encoded: t,
                    encoding: e
                });
                return (0, b.dI)(r, id)
            }

            function iN(t) {
                let {
                    encoding: e = il
                } = t;
                if (ix(t.type) === im) return (0, b.dI)((0, b.xW)([t.type, t.sealed]), e);
                if (ix(t.type) === ip) {
                    if (typeof t.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                    return (0, b.dI)((0, b.xW)([t.type, t.senderPublicKey, t.iv, t.sealed]), e)
                }
                return (0, b.dI)((0, b.xW)([t.type, t.iv, t.sealed]), e)
            }

            function iB(t) {
                let {
                    encoded: e,
                    encoding: r = il
                } = t, i = (0, b.sH)(e, r), n = i.slice(0, 1);
                if (ix(n) === ip) {
                    let t = i.slice(1, 33),
                        e = i.slice(33, 45);
                    return {
                        type: n,
                        sealed: i.slice(45),
                        iv: e,
                        senderPublicKey: t
                    }
                }
                if (ix(n) === im) return {
                    type: n,
                    sealed: i.slice(1),
                    iv: (0, m.randomBytes)(12)
                };
                let o = i.slice(1, 13);
                return {
                    type: n,
                    sealed: i.slice(13),
                    iv: o
                }
            }

            function iC(t, e) {
                let r = iB({
                    encoded: t,
                    encoding: e ? .encoding
                });
                return i_({
                    type: ix(r.type),
                    senderPublicKey: "u" > typeof r.senderPublicKey ? (0, b.dI)(r.senderPublicKey, ia) : void 0,
                    receiverPublicKey: e ? .receiverPublicKey
                })
            }

            function i_(t) {
                let e = t ? .type || 0;
                if (e === ip) {
                    if (typeof t ? .senderPublicKey > "u") throw Error("missing sender public key");
                    if (typeof t ? .receiverPublicKey > "u") throw Error("missing receiver public key")
                }
                return {
                    type: e,
                    senderPublicKey: t ? .senderPublicKey,
                    receiverPublicKey: t ? .receiverPublicKey
                }
            }

            function iO(t) {
                return t.type === ip && "string" == typeof t.senderPublicKey && "string" == typeof t.receiverPublicKey
            }

            function iR(t) {
                return t.type === im
            }

            function ik(t, e) {
                let [r, i, n] = t.split("."), o = M.from(function(t) {
                    let e = t.replace(/-/g, "+").replace(/_/g, "/"),
                        r = e.length % 4;
                    return r > 0 && (e += "=".repeat(4 - r)), e
                }(n), "base64");
                if (64 !== o.length) throw Error("Invalid signature length");
                let f = o.slice(0, 32).toString("hex"),
                    s = o.slice(32, 64).toString("hex"),
                    u = `${r}.${i}`,
                    h = new g.aD().update(M.from(u)).digest(),
                    a = new A.ec("p256").keyFromPublic({
                        x: M.from(e.x, "base64").toString("hex"),
                        y: M.from(e.y, "base64").toString("hex")
                    }, "hex"),
                    l = M.from(h).toString("hex");
                if (!a.verify(l, {
                        r: f,
                        s: s
                    })) throw Error("Invalid signature");
                return (0, y.decodeJWT)(t).payload
            }

            function iP(t) {
                return t ? .relay || {
                    protocol: "irn"
                }
            }

            function iU(t) {
                let e = w.CG[t];
                if (typeof e > "u") throw Error(`Relay Protocol not supported: ${t}`);
                return e
            }
            var iT = Object.defineProperty,
                iD = Object.defineProperties,
                iF = Object.getOwnPropertyDescriptors,
                iq = Object.getOwnPropertySymbols,
                iL = Object.prototype.hasOwnProperty,
                iz = Object.prototype.propertyIsEnumerable,
                ij = (t, e, r) => e in t ? iT(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                iH = (t, e) => {
                    for (var r in e || (e = {})) iL.call(e, r) && ij(t, r, e[r]);
                    if (iq)
                        for (var r of iq(e)) iz.call(e, r) && ij(t, r, e[r]);
                    return t
                },
                iK = (t, e) => iD(t, iF(e));

            function iQ(t) {
                var e;
                if (!t.includes("wc:")) {
                    let e = tf(t);
                    null != e && e.includes("wc:") && (t = e)
                }
                let r = (t = (t = t.includes("wc://") ? t.replace("wc://", "") : t).includes("wc:") ? t.replace("wc:", "") : t).indexOf(":"),
                    i = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                    n = t.substring(0, r),
                    o = t.substring(r + 1, i).split("@"),
                    f = "u" > typeof i ? t.substring(i) : "",
                    s = c.parse(f),
                    u = "string" == typeof s.methods ? s.methods.split(",") : void 0;
                return {
                    protocol: n,
                    topic: (e = o[0]).startsWith("//") ? e.substring(2) : e,
                    version: parseInt(o[1], 10),
                    symKey: s.symKey,
                    relay: function(t, e = "-") {
                        let r = {},
                            i = "relay" + e;
                        return Object.keys(t).forEach(e => {
                            if (e.startsWith(i)) {
                                let n = e.replace(i, ""),
                                    o = t[e];
                                r[n] = o
                            }
                        }), r
                    }(s),
                    methods: u,
                    expiryTimestamp: s.expiryTimestamp ? parseInt(s.expiryTimestamp, 10) : void 0
                }
            }

            function iG(t) {
                return `${t.protocol}:${t.topic}@${t.version}?` + c.stringify(iH(iK(iH({
                    symKey: t.symKey
                }, function(t, e = "-") {
                    let r = {};
                    return Object.keys(t).forEach(i => {
                        t[i] && (r["relay" + e + i] = t[i])
                    }), r
                }(t.relay)), {
                    expiryTimestamp: t.expiryTimestamp
                }), t.methods ? {
                    methods: t.methods.join(",")
                } : {}))
            }

            function iJ(t, e, r) {
                return `${t}?wc_ev=${r}&topic=${e}`
            }
            var iY = Object.defineProperty,
                iV = Object.defineProperties,
                iW = Object.getOwnPropertyDescriptors,
                iX = Object.getOwnPropertySymbols,
                iZ = Object.prototype.hasOwnProperty,
                i$ = Object.prototype.propertyIsEnumerable,
                i0 = (t, e, r) => e in t ? iY(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r;

            function i1(t) {
                let e = [];
                return t.forEach(t => {
                    let [r, i] = t.split(":");
                    e.push(`${r}:${i}`)
                }), e
            }

            function i2(t) {
                return t.includes(":")
            }

            function i3(t) {
                return i2(t) ? t.split(":")[0] : t
            }

            function i6(t, e) {
                let r = function(t) {
                    let e = {};
                    return t ? .forEach(t => {
                        let [r, i] = t.split(":");
                        e[r] || (e[r] = {
                            accounts: [],
                            chains: [],
                            events: []
                        }), e[r].accounts.push(t), e[r].chains.push(`${r}:${i}`)
                    }), e
                }(e = e.map(t => t.replace("did:pkh:", "")));
                for (let [e, i] of Object.entries(r)) i.methods ? i.methods = tt(i.methods, t) : i.methods = t, i.events = ["chainChanged", "accountsChanged"];
                return r
            }
            let i8 = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                i5 = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function i4(t, e) {
                let {
                    message: r,
                    code: i
                } = i5[t];
                return {
                    message: e ? `${r} ${e}` : r,
                    code: i
                }
            }

            function i9(t, e) {
                let {
                    message: r,
                    code: i
                } = i8[t];
                return {
                    message: e ? `${r} ${e}` : r,
                    code: i
                }
            }

            function i7(t, e) {
                return !!Array.isArray(t) && (!("u" > typeof e) || !t.length || t.every(e))
            }

            function nt(t) {
                return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
            }

            function ne(t) {
                return typeof t > "u"
            }

            function nr(t, e) {
                return !!(e && ne(t)) || "string" == typeof t && !!t.trim().length
            }

            function ni(t, e) {
                return !!(e && ne(t)) || "number" == typeof t && !isNaN(t)
            }

            function nn(t, e) {
                let {
                    requiredNamespaces: r
                } = e, i = Object.keys(t.namespaces), n = Object.keys(r), o = !0;
                return !!j(n, i) && (i.forEach(e => {
                    let {
                        accounts: i,
                        methods: n,
                        events: f
                    } = t.namespaces[e], s = i1(i), u = r[e];
                    j(I(e, u), s) && j(u.methods, n) && j(u.events, f) || (o = !1)
                }), o)
            }

            function no(t) {
                return !!(nr(t, !1) && t.includes(":")) && 2 === t.split(":").length
            }

            function nf(t) {
                function e(t) {
                    try {
                        return "u" > typeof new URL(t)
                    } catch {
                        return !1
                    }
                }
                try {
                    if (nr(t, !1)) {
                        if (e(t)) return !0;
                        let r = tf(t);
                        return e(r)
                    }
                } catch {}
                return !1
            }

            function ns(t) {
                var e;
                return null == (e = t ? .proposer) ? void 0 : e.publicKey
            }

            function nu(t) {
                return t ? .topic
            }

            function nh(t, e) {
                let r = null;
                return nr(t ? .publicKey, !1) || (r = i4("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r
            }

            function na(t) {
                let e = !0;
                return i7(t) ? t.length && (e = t.every(t => nr(t, !1))) : e = !1, e
            }

            function nl(t, e) {
                let r = null;
                return Object.values(t).forEach(t => {
                    var i;
                    let n;
                    if (r) return;
                    let o = (i = `${e}, namespace`, n = null, na(t ? .methods) ? na(t ? .events) || (n = i9("UNSUPPORTED_EVENTS", `${i}, events should be an array of strings or empty array for no events`)) : n = i9("UNSUPPORTED_METHODS", `${i}, methods should be an array of strings or empty array for no methods`), n);
                    o && (r = o)
                }), r
            }

            function nc(t, e, r) {
                let i = null;
                if (t && nt(t)) {
                    let n;
                    let o = nl(t, e);
                    o && (i = o);
                    let f = (n = null, Object.entries(t).forEach(([t, i]) => {
                        var o, f;
                        let s;
                        if (n) return;
                        let u = (o = I(t, i), f = `${e} ${r}`, s = null, i7(o) && o.length ? o.forEach(t => {
                            s || no(t) || (s = i9("UNSUPPORTED_CHAINS", `${f}, chain ${t} should be a string and conform to "namespace:chainId" format`))
                        }) : no(t) || (s = i9("UNSUPPORTED_CHAINS", `${f}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s);
                        u && (n = u)
                    }), n);
                    f && (i = f)
                } else i = i4("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
                return i
            }

            function nd(t, e) {
                let r = null;
                if (t && nt(t)) {
                    let i;
                    let n = nl(t, e);
                    n && (r = n);
                    let o = (i = null, Object.values(t).forEach(t => {
                        var r, n;
                        let o;
                        if (i) return;
                        let f = (r = t ? .accounts, n = `${e} namespace`, o = null, i7(r) ? r.forEach(t => {
                            o || function(t) {
                                if (nr(t, !1) && t.includes(":")) {
                                    let e = t.split(":");
                                    if (3 === e.length) {
                                        let t = e[0] + ":" + e[1];
                                        return !!e[2] && no(t)
                                    }
                                }
                                return !1
                            }(t) || (o = i9("UNSUPPORTED_ACCOUNTS", `${n}, account ${t} should be a string and conform to "namespace:chainId:address" format`))
                        }) : o = i9("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), o);
                        f && (i = f)
                    }), i);
                    o && (r = o)
                } else r = i4("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
                return r
            }

            function np(t) {
                return nr(t.protocol, !0)
            }

            function nm(t, e) {
                let r = !1;
                return e && !t ? r = !0 : t && i7(t) && t.length && t.forEach(t => {
                    r = np(t)
                }), r
            }

            function ng(t) {
                return "number" == typeof t
            }

            function nv(t) {
                return "u" > typeof t
            }

            function nb(t) {
                return !(!t || "object" != typeof t || !t.code || !ni(t.code, !1) || !t.message || !nr(t.message, !1))
            }

            function nA(t) {
                return !(ne(t) || !nr(t.method, !1))
            }

            function ny(t) {
                return !(ne(t) || ne(t.result) && ne(t.error) || !ni(t.id, !1) || !nr(t.jsonrpc, !1))
            }

            function nw(t) {
                return !(ne(t) || !nr(t.name, !1))
            }

            function nx(t, e) {
                return !(!no(e) || !(function(t) {
                    let e = [];
                    return Object.values(t).forEach(t => {
                        e.push(...i1(t.accounts))
                    }), e
                })(t).includes(e))
            }

            function nM(t, e, r) {
                return !!nr(r, !1) && (function(t, e) {
                    let r = [];
                    return Object.values(t).forEach(t => {
                        i1(t.accounts).includes(e) && r.push(...t.methods)
                    }), r
                })(t, e).includes(r)
            }

            function nE(t, e, r) {
                return !!nr(r, !1) && (function(t, e) {
                    let r = [];
                    return Object.values(t).forEach(t => {
                        i1(t.accounts).includes(e) && r.push(...t.events)
                    }), r
                })(t, e).includes(r)
            }

            function nS(t, e, r) {
                let i = null,
                    n = function(t) {
                        let e = {};
                        return Object.keys(t).forEach(r => {
                            var i;
                            r.includes(":") ? e[r] = t[r] : null == (i = t[r].chains) || i.forEach(i => {
                                e[i] = {
                                    methods: t[r].methods,
                                    events: t[r].events
                                }
                            })
                        }), e
                    }(t),
                    o = function(t) {
                        let e = {};
                        return Object.keys(t).forEach(r => {
                            if (r.includes(":")) e[r] = t[r];
                            else {
                                let i = i1(t[r].accounts);
                                i ? .forEach(i => {
                                    e[i] = {
                                        accounts: t[r].accounts.filter(t => t.includes(`${i}:`)),
                                        methods: t[r].methods,
                                        events: t[r].events
                                    }
                                })
                            }
                        }), e
                    }(e),
                    f = Object.keys(n),
                    s = Object.keys(o),
                    u = nI(Object.keys(t)),
                    h = nI(Object.keys(e)),
                    a = u.filter(t => !h.includes(t));
                return a.length && (i = i4("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${a.toString()}
      Received: ${Object.keys(e).toString()}`)), j(f, s) || (i = i4("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${s.toString()}`)), Object.keys(e).forEach(t => {
                    if (!t.includes(":") || i) return;
                    let n = i1(e[t].accounts);
                    n.includes(t) || (i = i4("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${t}
        Required: ${t}
        Approved: ${n.toString()}`))
                }), f.forEach(t => {
                    i || (j(n[t].methods, o[t].methods) ? j(n[t].events, o[t].events) || (i = i4("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${t}`)) : i = i4("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${t}`))
                }), i
            }

            function nI(t) {
                return [...new Set(t.map(t => t.includes(":") ? t.split(":")[0] : t))]
            }

            function nN(t, e) {
                return ni(t, !1) && t <= e.max && t >= e.min
            }

            function nB() {
                let t = D();
                return new Promise(e => {
                    switch (t) {
                        case k.browser:
                            e(T() && navigator ? .onLine);
                            break;
                        case k.reactNative:
                            e(nC());
                            break;
                        case k.node:
                        default:
                            e(!0)
                    }
                })
            }
            async function nC() {
                if (U() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
                    let t = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
                    return t ? .isConnected
                }
                return !0
            }

            function n_(t) {
                switch (D()) {
                    case k.browser:
                        !U() && T() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
                        break;
                    case k.reactNative:
                        U() && "u" > typeof r.g && null != r.g && r.g.NetInfo && r.g ? .NetInfo.addEventListener(e => t(e ? .isConnected));
                    case k.node:
                }
            }
            let nO = {};
            class nR {
                static get(t) {
                    return nO[t]
                }
                static set(t, e) {
                    nO[t] = e
                }
                static delete(t) {
                    delete nO[t]
                }
            }
        }
    }
]);