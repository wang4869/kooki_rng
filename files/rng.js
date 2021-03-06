var Uo,To;

function convertCanvasToImage(o) { var t = new Image; return t.src = o.toDataURL("image/png"), t }

function DISTANCE(o, t) { var n = Math.sqrt(Math.pow(t.x - o.x, 2) + Math.pow(t.y - o.y, 2)); return n }

function ANGLE(o, t) { var n = t.x - o.x,
        i = t.y - o.y,
        e = Math.acos(i / Math.sqrt(n * n + i * i)); return n >= 0 && i >= 0 ? e = 2 * Math.PI - e : n >= 0 && i <= 0 && (e = 2 * Math.PI - e), e }

function cloneObj(o) { var t, n = o.constructor === Array ? [] : {}; if ("object" == typeof o) { if (window.JSON) t = JSON.stringify(o), n = JSON.parse(t);
        else
            for (var i in o) n[i] = "object" == typeof o[i] ? cloneObj(o[i]) : o[i]; return n } }

function getBeveling(o, t) { return Math.sqrt(Math.pow(o, 2) + Math.pow(t, 2)) }

function drawDashLine(o, t, n, i, e, a) { a = void 0 === a ? 5 : a; for (var l = getBeveling(i - t, e - n), h = Math.floor(l / a), p = 0; p < h; p++) o[p % 2 == 0 ? "moveTo" : "lineTo"](t + (i - t) / h * p, n + (e - n) / h * p) }! function() {
    ! function(o) {
        function t() {
            M = window.innerHeight, S = window.innerWidth, o(".sleeping_content,.sleeping_wrap").width(750).height(M), X.width = S, X.height = 750, E = new R, X.interactive = !0, X.on("touchend", function() { for (var o = 0; o < E.children.length; o++) { var t = E.children[o]; if (new TWEEN.Tween(t.scale).to({ x: 1, y: 1 }, 100).start(), 0 == t.sex || 1 == t.sex)
                        for (var n = 0; n < t.children.length; n++) { var i = t.children[n];
                            i.children[0] && "bone1" == i.children[0].name ? i.children[0].children[1].dragging = !1 : n == t.children.length - 1 ? i.children[1].dragging = !1 : i.dragging = !1 } else
                            for (var n = 0; n < t.children.length; n++) t.children[0].dragging = !1, t.children[1].children[1].dragging = !1 } }), whiteBg = new L, whiteBg.beginFill(16777215), whiteBg.drawRect(0, 0, 750, 750), whiteBg.endFill(), J = new R; var t = new A(j.resources[T + "images/bg1.png"].texture);
            J.index = 0, J.addChild(t), J.interactive = !0, J.buttonMode = !0, J.on("tap", function() { if (0 != E.children.length)
                    for (var o = 0; o < E.children.length; o++) { var t = E.children[o];
                        t.chosen = !1, t.outline.visible = !1, O.addChild(t), E.removeChild(t), e(-1) } }), F = new R; var n = new L;
            U ? (n.beginFill(16777215), n.drawRect(0, 0, 0, 0), n.endFill(), F.position.set(0, 750), o(".saved_guide").height(0), o(".a_saved_guide").css({ bottom: "0" }), o(".guide_bg").css({ top: "0" }), o(".guide img").css({ top: "0" })) : (n.beginFill(16777215), n.drawRect(0, 0, 0, 0), n.endFill(), F.position.set(0, 750)); var i = PIXI.Sprite.fromImage([W[parseInt(Math.random() * W.length)]]);
            i.position.set(0, 0);
            var l = new A(j.resources[T + "bottom_logo3.png"].texture),
                h = H[parseInt(Math.random() * H.length)],
                p = new q(h, { fontSize: "0px", fill: "#000000" });
            p.position.set(0, 0), l.position.set(0, 0), F.visible = !1, F.addChild(n), D = new R, G = new R, O = new R; var s = new L;
            s.beginFill(10053375), s.drawRect(0, 0, 750, 750), s.endFill(), G.mask = s, G.addChild(s, whiteBg, J, O, E), D.addChild(G, F), X.addChild(D), N.render(X), d() }

        function n(o) { var t = new R;
            B.push(t), t.chosen = !0, t.interactive = !0, t.buttonMode = !0, t.on("touchstart", function(o) { if (new TWEEN.Tween(this.scale).to({ x: 1.015, y: 1.015 }, 100).start(), !this.chosen) { if (this.chosen = !0, this.outline.visible = !0, 0 == E.children.length);
                    else { var n = E.children[0];
                        n.chosen = !1, n.outline.visible = !1, O.addChild(n), E.removeChildren() }
                    B.remove(this), B.push(this), e(this.sex, t), E.addChild(this), O.removeChild(this) } }).on("touchend", function() { new TWEEN.Tween(this.scale).to({ x: 1, y: 1 }, 100).start() }); var n;
            0 == o ? n = z[0] : 1 == o && (n = Z[0]), t.data = JSON.parse(JSON.stringify(n)); var a = 50 * Math.random() - 50,
                l = 50 * Math.random() - 50; return t.globalPosition = { x: t.data.globalPosition.x + a, y: t.data.globalPosition.y + l }, t.sex = o, t.facingTo = 0, t.faceIndex = 0, t.hairIndex = 0, t.clothIndex = 0, 0 == o ? (_(t, { face: uo[t.facingTo][t.faceIndex], hair: Po[t.facingTo][t.hairIndex] }), g(t, vo[0][0]), setTimeout(function() { m(t) }, 100)) : 1 == o && (_(t, { face: Co[t.facingTo][t.faceIndex], hair: Io[t.facingTo][t.hairIndex] }), g(t, ko[0][0]), setTimeout(function() { m(t) }, 100)), i(o, t), t }

        function i(t, n) { 0 == t ? (o(".man_cloth").show(), o(".woman_cloth").hide(), o(".man_facingTo").show(), o(".woman_facingTo").hide(), o(".man_hair").show(), o(".woman_hair").hide(), o(".man_face").show(), o(".man_cloth li").removeClass("active"), o(".man_cloth li").eq(n.clothIndex).addClass("active"), o(".man_facingTo li").removeClass("active"), o(".man_facingTo li").eq(n.facingTo).addClass("active"), o(".man_face li").removeClass("active"), o(".man_face li").eq(n.faceIndex).addClass("active"), o(".man_hair li").removeClass("active"), o(".man_hair li").eq(n.hairIndex).addClass("active"), l(n), n.currentSelectIndex = 1) : 1 == t && (o(".man_cloth").hide(), o(".woman_cloth").show(), o(".man_facingTo").hide(), o(".woman_facingTo").show(), o(".man_hair").hide(), o(".woman_hair").show(), o(".man_face").show(), o(".woman_cloth li").removeClass("active"), o(".woman_cloth li").eq(n.clothIndex).addClass("active"), o(".woman_facingTo li").removeClass("active"), o(".woman_facingTo li").eq(n.facingTo).addClass("active"), o(".man_face li").removeClass("active"), o(".man_face li").eq(n.faceIndex).addClass("active"), o(".woman_hair li").removeClass("active"), o(".woman_hair li").eq(n.hairIndex).addClass("active"), l(n), n.currentSelectIndex = 1) }

        function e(t, n) { 0 == t ? (o(".man_cloth").show(), o(".woman_cloth").hide(), o(".man_facingTo").show(), o(".woman_facingTo").hide(), o(".man_face").show(), o(".man_hair").show(), o(".woman_hair").hide(), o(".man_cloth li").removeClass("active"), o(".man_cloth li").eq(n.clothIndex).addClass("active"), o(".man_facingTo li").removeClass("active"), o(".man_facingTo li").eq(n.facingTo).addClass("active"), o(".man_face li").removeClass("active"), o(".man_face li").eq(n.faceIndex).addClass("active"), o(".man_hair li").removeClass("active"), o(".man_hair li").eq(n.hairIndex).addClass("active"), l(n), o(".selected").removeClass("selected"), o(".select_item").hide(), o(".select_item").eq(n.currentSelectIndex).show(), o(".scroll_bar ul li").eq(n.currentSelectIndex).addClass("selected")) : 1 == t ? (o(".man_cloth").hide(), o(".woman_cloth").show(), o(".man_facingTo").hide(), o(".woman_facingTo").show(), o(".man_hair").hide(), o(".woman_hair").show(), o(".man_face").show(), o(".woman_cloth li").removeClass("active"), o(".woman_cloth li").eq(n.clothIndex).addClass("active"), o(".woman_facingTo li").removeClass("active"), o(".woman_facingTo li").eq(n.facingTo).addClass("active"), o(".man_face li").removeClass("active"), o(".man_face li").eq(n.faceIndex).addClass("active"), o(".woman_hair li").removeClass("active"), o(".woman_hair li").eq(n.hairIndex).addClass("active"), l(n), o(".selected").removeClass("selected"), o(".select_item").hide(), o(".select_item").eq(n.currentSelectIndex).show(), o(".scroll_bar ul li").eq(n.currentSelectIndex).addClass("selected")) : t == -1 || t == -100 && (o(".man_cloth").hide(), o(".woman_cloth").hide(), o(".man_facingTo").hide(), o(".woman_facingTo").hide(), o(".man_hair").hide(), o(".woman_hair").hide(), o(".man_face").hide(), o(".select_guide").show()) }

        function a(o, t) { o.facingTo != t && (o.facingTo = t, 0 == o.sex ? (o.removeChildren(), o.data = JSON.parse(JSON.stringify(z[t])), _(o, { face: uo[t][o.faceIndex], hair: Po[t][o.hairIndex] }), g(o, vo[t][o.clothIndex]), setTimeout(function() { m(o) }, 100)) : 1 == o.sex && (o.removeChildren(), o.data = JSON.parse(JSON.stringify(Z[t])), _(o, { face: Co[t][o.faceIndex], hair: Io[t][o.hairIndex] }), g(o, ko[t][o.clothIndex]), setTimeout(function() { m(o) }, 100))) }

        function l(t) { t && (t.clothIndex && t.clothIndex > 2 ? o(".cloth").animate({ scrollLeft: 130 * (t.clothIndex - 2) + "px" }, 300) : o(".cloth").animate({ scrollLeft: "0px" }, 300), t.facingTo && t.facingTo > 2 ? o(".facingTo").animate({ scrollLeft: 130 * (t.facingTo - 2) + "px" }, 300) : o(".facingTo").animate({ scrollLeft: "0px" }, 300), t.faceIndex && t.faceIndex > 2 ? o(".face").animate({ scrollLeft: 130 * (t.faceIndex - 2) + "px" }, 300) : o(".face").animate({ scrollLeft: "0px" }, 300), t.hairIndex && t.hairIndex > 2 ? o(".hair").animate({ scrollLeft: 130 * (t.hairIndex - 2) + "px" }, 300) : o(".hair").animate({ scrollLeft: "0px" }, 300)) }

        function h(o, t) { if (o.face && o.faceIndex != t) { if (o.faceIndex = t, 0 == o.sex) { o.head.removeChildAt(1); var n = PIXI.Sprite.fromImage(uo[o.facingTo][t].url);
                    n.position.set(uo[o.facingTo][t].position.x, uo[o.facingTo][t].position.y), o.head.addChildAt(n, 1), o.face = n } if (1 == o.sex) { o.head.removeChildAt(1); var n = PIXI.Sprite.fromImage(Co[o.facingTo][t].url);
                    n.position.set(Co[o.facingTo][t].position.x, Co[o.facingTo][t].position.y), o.head.addChildAt(n, 1), o.face = n } } }

        function p(o, t) { if (o.hairIndex != t) { o.hairIndex = t; var n = o.hair.visible; if (0 == o.sex) { o.head.removeChildAt(o.head.children.length - 1); var i = PIXI.Sprite.fromImage(Po[o.facingTo][t].url);
                    i.position.set(Po[o.facingTo][t].position.x, Po[o.facingTo][t].position.y), o.head.addChild(i), o.hair = i } if (1 == o.sex) { o.head.removeChildAt(o.head.children.length - 1); var i = PIXI.Sprite.fromImage(Io[o.facingTo][t].url);
                    i.position.set(Io[o.facingTo][t].position.x, Io[o.facingTo][t].position.y), o.head.addChild(i), o.hair = i }
                o.hair.visible = n } }

        function s(o) { if (J.index != o) { J.removeChildren(), J.index = o; var t = PIXI.Sprite.fromImage([Uo[o]]);
                J.addChild(t) } }

        function r(o) { if (e(-1), 1 == E.children.length) { var t = E.children[0];
                t.chosen = !1, t.outline.visible = !1, O.addChild(t), E.removeChildren() } var n = new R;
            n.chosen = !0, n.interactive = !0, n.buttonMode = !0, n.on("touchstart", function(o) { if (new TWEEN.Tween(this.scale).to({ x: 1.015, y: 1.015 }, 100).start(), !this.chosen) { if (this.chosen = !0, this.outline.visible = !0, 0 == E.children.length);
                    else { var t = E.children[0];
                        t.chosen = !1, t.outline.visible = !1, O.addChild(t), E.removeChildren() }
                    e(-1), E.addChild(this), O.removeChild(this) } }), n.data = {}; var i = 50 * Math.random() - 50,
                a = 50 * Math.random() - 50;
            n.globalPosition = { x: 200 + i, y: 500 + a }, n.position.set(n.globalPosition.x, n.globalPosition.y); var l = PIXI.Sprite.fromImage(To[o - 1]);
            l.interactive = !0, l.buttonMode = !0; var h = new R;
            n.addChild(l, h), n.outline = h, l.texture.baseTexture.hasLoaded ? b(n) : l.texture.baseTexture.on("loaded", function() { b(n) }), E.addChild(n) }

        function g(o, t) { var n = o.body,
                i = PIXI.Sprite.fromImage(t.clothUrl); if (i.position.set(t.clothPosition.x, t.clothPosition.y), t.hatUrl) { o.hair.visible = !1; var e = PIXI.Sprite.fromImage(t.hatUrl);
                e.position.set(t.hatPosition.x, t.hatPosition.y), o.head.addChildAt(e, 2) } for (var a = (o.boneData, 0); a < 4; a++) { var l = o.boneData[a]; if (t.part[a][0]) { var h = PIXI.Sprite.fromImage(t.part[a][0]);
                    h.interactive = !0, h.buttonMode = !0, h.on("touchstart", function(o) { y.call(this.parent.children[1], o) }).on("touchmove", function(o) { x.call(this.parent.children[1], o) }), h.position.set(t.bones[a].bone1.position.x, t.bones[a].bone1.position.y), h.name = "addEdCloth", l.children[0].addChild(h) } if (t.part[a][1]) { var p = PIXI.Sprite.fromImage(t.part[a][1]);
                    p.position.set(t.bones[a].bone2.position.x, t.bones[a].bone2.position.y), p.name = "addEdCloth", l.children[0].children[1].addChild(p) } }
            n.addChildAt(i, 1) }

        function c(o) { if (!(o.body.children.length < 2)) { o.hair.visible = !0, 4 == o.head.children.length ? o.head.removeChildAt(2) : 3 == o.facingTo && 3 == o.head.children.length && o.head.removeChildAt(2); var t = o.body;
                t.removeChildAt(t.children.length - 1); for (var n = 0; n < 4; n++) { var i = o.boneData[n]; 
if(i.children.length>0){
    "addEdCloth" == i.children[0].children[i.children[0].children.length - 1].name && i.children[0].removeChildAt(i.children[0].children.length - 1), "addEdCloth" == i.children[0].children[1].children[i.children[0].children[1].children.length - 1].name && i.children[0].children[1].removeChildAt(i.children[0].children[1].children.length - 1)
}
} } }

        function _(o, t) { var n = o.data.bones,
                i = o.data.bones,
                e = o.facingTo,
                a = new R,
                l = PIXI.Sprite.fromImage(o.data.bodyUrl);
            l.position.set(o.data.bodyImgPosition.x, o.data.bodyImgPosition.y); var h = new R;
            h.position.set(o.data.bodyPosition.x + o.data.headPosition.x, o.data.bodyPosition.y + o.data.headPosition.y); var p = PIXI.Sprite.fromImage(o.data.headUrl); if (h.addChild(p), t.face) { var s = PIXI.Sprite.fromImage(t.face.url);
                s.position.set(t.face.position.x, t.face.position.y), h.addChild(s), o.face = s } else o.face = null; var r = PIXI.Sprite.fromImage(t.hair.url);
            o.hair = r, r.position.set(t.hair.position.x, t.hair.position.y), h.addChild(r), a.interactive = !0, a.buttonMode = !0, a.on("touchstart", function(o) { this.dragging = !0, this.startPosition = { x: o.data.global.x, y: o.data.global.y } }).on("touchmove", function(o) { this.dragging && (this.newPosition = { x: o.data.global.x, y: o.data.global.y }, this.parent.position.set(this.newPosition.x - this.startPosition.x + this.parent.globalPosition.x + this.parent.pivot._x, this.newPosition.y - this.startPosition.y + this.parent.globalPosition.y + this.parent.pivot._y)) }).on("touchend", function() { this.dragging = !1, this.parent.globalPosition.x = this.parent.position.x - this.parent.pivot._x, this.parent.globalPosition.y = this.parent.position.y - this.parent.pivot._y }), h.interactive = !0, h.buttonMode = !0, h.on("touchstart", function(o) { this.dragging = !0, this.startPosition = { x: o.data.global.x, y: o.data.global.y } }).on("touchmove", function(o) { this.dragging && (this.newPosition = { x: o.data.global.x, y: o.data.global.y }, this.parent.position.set(this.newPosition.x - this.startPosition.x + this.parent.globalPosition.x + this.parent.pivot._x, this.newPosition.y - this.startPosition.y + this.parent.globalPosition.y + this.parent.pivot._y)) }).on("touchend", function() { this.dragging = !1, this.parent.globalPosition.x = this.parent.position.x - this.parent.pivot._x, this.parent.globalPosition.y = this.parent.position.y - this.parent.pivot._y }), a.position.set(o.data.bodyPosition.x, o.data.bodyPosition.y), a.addChild(l), o.head = h, o.body = a; var g = new R;
            g.name = "hand"; var c = new R;
            c.name = "hand"; var _ = new R;
            _.name = "leg"; var m = new R;
            m.name = "leg"; var b = new R,
                d = (new R, [g, c, _, m]);
            o.boneData = d; for (var f = 0; f < i.length; f++) { var w = d[f],
                    v = i[f],
                    u = v.bone1,
                    P = v.bone2;
                w.position.set(u.position.x + u.pivot.x, u.position.y + u.pivot.y), w.pivot.set(u.pivot.x, u.pivot.y), n[f].boneRotate && (w.rotation = n[f].boneRotate); var k = new R;
                k.name = "bone1", k.position.set(u.pivot.x, u.pivot.y), k.pivot.set(u.pivot.x, u.pivot.y), k.rotation = n[f].bone1.rotation; var C = PIXI.Sprite.fromImage(o.data.part[f][0]);
                k.addChild(C), C.interactive = !0, C.buttonMode = !0, C.on("touchstart", function(o) { y.call(this.parent.children[1], o) }).on("touchmove", function(o) { x.call(this.parent.children[1], o) }); var I = new L;
                I.beginFill(65535), I.drawCircle(0, 0, 2), I.endFill(), I.position.set(u.position.x + u.pivot.x, u.position.y + u.pivot.y); var U = new L;
                U.beginFill(65535), U.drawCircle(0, 0, 2), U.endFill(), U.position.set(P.position.x + P.pivot.x, P.position.y + P.pivot.y), I.visible = !1, U.visible = !1, b.addChild(I); var T = new R;
                T.name = "bone2"; var S = PIXI.Sprite.fromImage(o.data.part[f][1]),
                    M = new L;
                M.position.set(v.end.position.x, v.end.position.y), T.addChild(S, M), T.data = n[f].bone2, T.rotation = n[f].bone2.rotation, T.startRotation = 0, T.pivot.set(P.pivot.x, P.pivot.y), T.position.set(P.position.x + P.pivot.x, P.position.y + P.pivot.y), T.interactive = !0, T.buttonMode = !0, T.on("touchstart", y).on("touchmove", x), k.addChild(T), w.addChild(k, U) }
            0 == e ? o.addChild(_, m, a, g, c, b, h) : 3 == e ? o.addChild(_, m, g, c, a, b, h) : 2 == e ? o.addChild(g, _, m, a, c, b, h) : 1 == e && o.addChild(c, _, m, a, g, b, h); var j = new R;
            o.outline = j, o.addChild(j), 1 == o.facingTo ? (o.pivot.set(0, o.height / 2), o.position.set(o.globalPosition.x + o.width / 2, o.globalPosition.y + o.height / 2), 0 == o.sex ? o.globalPosition.x += 150 : 1 == o.sex && (o.globalPosition.x += 130), o.outline.position.set(-o.width / 2, 0)) : (0 == o.pivot._x && (0 == o.sex ? o.globalPosition.x -= 150 : 1 == o.sex && (o.globalPosition.x -= 130)), o.pivot.set(o.width / 2, o.height / 2), o.position.set(o.globalPosition.x + o.width / 2, o.globalPosition.y + o.height / 2)) }

        function y(o) { this.dragging = !0, this.data.rotation = this.parent.parent.rotation; var t = o.data.global;
            this.startPosition = { x: t.x, y: t.y }; var n = ANGLE({ x: this.parent.parent.getGlobalPosition().x, y: this.parent.parent.getGlobalPosition().y }, t);
            this.startRotation = n, this.dragSrartPosition = { x: this.children[1].getGlobalPosition().x, y: this.children[1].getGlobalPosition().y }, this.a = DISTANCE(this.dragSrartPosition, this.getGlobalPosition()), this.b = DISTANCE(this.getGlobalPosition(), this.parent.getGlobalPosition()) }

        function x(o) { if (this.dragging) { var t = o.data.global,
                    n = ANGLE({ x: this.parent.parent.getGlobalPosition().x, y: this.parent.parent.getGlobalPosition().y }, t),
                    i = !0;
                i = this.startRotation <= Math.PI ? n - this.startRotation < Math.PI && n - this.startRotation > 0 : !(n - this.startRotation < 0 && n - this.startRotation > -Math.PI), this.parent.parent.rotation = n - this.startRotation + this.data.rotation; var e = t.y - this.startPosition.y + this.dragSrartPosition.y - this.parent.getGlobalPosition().y,
                    a = t.x - this.startPosition.x + this.dragSrartPosition.x - this.parent.getGlobalPosition().x,
                    l = Math.sqrt(e * e + a * a),
                    h = this.a,
                    p = this.b,
                    s = 0,
                    r = 0;
                l >= h + p ? (s = 0, r = 0) : (s = Math.acos((p * p + l * l - h * h) / (2 * p * l)), r = Math.acos((h * h + l * l - p * p) / (2 * h * l))), isNaN(s) || isNaN(r) || (0 == this.parent.parent.parent.facingTo || 3 == this.parent.parent.parent.facingTo || "hand" == this.parent.parent.name ? i ? (this.parent.rotation = -s, this.rotation = s + r) : (this.parent.rotation = s, this.rotation = -s - r) : 1 == this.parent.parent.parent.facingTo ? (this.parent.rotation = s, this.rotation = -s - r) : (this.parent.rotation = -s, this.rotation = s + r)) } }

        function m(o) { o.outline.removeChildren(); var t = new L;
            t.lineStyle(1, 16777215, 1); var n = o.width,
                i = o.height;
            3 != o.facingTo && 6 == o.faceIndex && (i -= 130), t.moveTo(0, 0), drawDashLine(t, 0, 0, n, 0), drawDashLine(t, n, 0, n, i), drawDashLine(t, n, i, 0, i), drawDashLine(t, 0, i, 0, 0), o.outline.addChild(t); var a = new A(j.resources[T + "rotate.png"].texture);
            a.position.set(-43, -38), a.interactive = !0, a.buttonMode = !0, a.on("touchstart", function(o) { this.dragging = !0; var t = o.data.global;
                this.parent.parent.data.rotation = this.parent.parent.rotation; var n = ANGLE({ x: this.parent.parent.position.x, y: this.parent.parent.position.y }, t);
                this.startRotation = n }).on("touchmove", function(o) { if (this.dragging) { var t = o.data.global,
                        n = ANGLE({ x: this.parent.parent.position.x, y: this.parent.parent.position.y }, t);
                    this.parent.parent.rotation = n - this.startRotation + this.parent.parent.data.rotation } }).on("touchend", function() { this.dragging = !1 }); var l = new A(j.resources[T + "close.png"].texture);
            l.position.set(n, -38), l.interactive = !0, l.buttonMode = !0, l.on("tap", function() { B.remove(this.parent.parent), this.parent.parent.parent.removeChild(this.parent.parent), B.length > 0 ? e(B[B.length - 1].sex, B[B.length - 1]) : e(-100) }), o.outline.addChild(a, l) }

        function b(o) { o.outline.removeChildren(); var t = new L;
            t.lineStyle(1, 16777215, 1); var n = o.width,
                i = o.height;
            o.pivot.set(n / 2, i / 2), o.position.set(o.globalPosition.x + n / 2, o.globalPosition.y + i / 2); var a = 20;
            t.moveTo(-a, -a), drawDashLine(t, -a, -a, n + a, -a), drawDashLine(t, n + a, -a, n + a, i + a), drawDashLine(t, n + a, i + a, -a, i + a), drawDashLine(t, -a, i + a, -a, -a), o.children[0].on("touchstart", function(o) { this.dragging = !0, this.startPosition = { x: o.data.global.x, y: o.data.global.y } }).on("touchmove", function(o) { this.dragging && (this.newPosition = { x: o.data.global.x, y: o.data.global.y }, this.parent.position.set(this.newPosition.x - this.startPosition.x + this.parent.globalPosition.x + this.parent.pivot._x, this.newPosition.y - this.startPosition.y + this.parent.globalPosition.y + this.parent.pivot._y)) }).on("touchend", function() { this.dragging = !1, this.parent.globalPosition.x = this.parent.position.x - this.parent.pivot._x, this.parent.globalPosition.y = this.parent.position.y - this.parent.pivot._y }), o.outline.addChild(t); var l = new A(j.resources[T + "rotate.png"].texture);
            l.position.set(-a - 43, -a - 38), l.interactive = !0, l.buttonMode = !0, l.on("touchstart", function(o) { this.dragging = !0; var t = o.data.global;
                this.parent.parent.data.rotation = this.parent.parent.rotation; var n = ANGLE({ x: this.parent.parent.position.x, y: this.parent.parent.position.y }, t);
                this.startRotation = n }).on("touchmove", function(o) { if (this.dragging) { var t = o.data.global,
                        n = ANGLE({ x: this.parent.parent.position.x, y: this.parent.parent.position.y }, t);
                    this.parent.parent.rotation = n - this.startRotation + this.parent.parent.data.rotation } }).on("touchend", function() { this.dragging = !1 }); var h = new A(j.resources[T + "close.png"].texture);
            h.position.set(n + a, -a - 38), h.interactive = !0, h.buttonMode = !0, h.on("tap", function() { this.parent.parent.parent.removeChild(this.parent.parent), e(-1) }), o.outline.addChild(l, h) }

        function d() { TWEEN.update(),requestAnimationFrame(d), N.render(X) }

        function f(o) { var t = o.index();
//            t > 2 ? o.parent().parent().animate({ scrollLeft: 130 * (t - 2) + "px" }, 300) : o.parent().parent().animate({ scrollLeft: "0px" }, 300) 
                      }

        function w(o) { if (o != E.children[0]) { if (0 == E.children.length);
                else { var t = E.children[0];
                    t.chosen = !1, t.outline.visible = !1, O.addChild(t), E.removeChildren() }
                e(o.sex, o), E.addChild(o), O.removeChild(o), o.chosen = !0, o.outline.visible = !0 } }
        var v = window.navigator.userAgent.toLowerCase(),
            u = navigator.userAgent,
            P = /iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(v) && !/pc=1/.test(location.search),
            k = "micromessenger" == v.match(/MicroMessenger/i),
            C = "newsapp" == v.match(/newsapp/i),
            I = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
            U = (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), /iphone/gi.test(navigator.userAgent) && 812 == screen.height && 375 == screen.width),
            T = "files/images/";
        if (!P) {
//            var S = 640,
//                M = window.innerHeight; return o(".sleeping_wrap").height(M), o(".sleeping_wrap").html(""), void o(".sleeping_wrap").css({ "background-color": "#eee", "background-image": "url(http://cms-bucket.nosdn.127.net/992d6c36366b44828dc4c09e8e956c0920180411222928.jpeg)", "background-repeat": "no-repeat", "background-position": "center 100px" }) 
        }
        k /*|| h5Share.init({ title: "360\xb0\u82b1\u5f0f\u7761\u89c9\uff01\u5feb\u6765\u6446\u4e00\u4e2a\u8ff7\u4e4b\u7761\u59ff", desc: "\u5728\u8fd9\u91cc\uff0c\u7761\u89c9\u771f\u7684\u80fd\u4e3a\u6240\u6b32\u4e3a\uff01", url: window.location.href, img: "http://cms-bucket.nosdn.127.net/8ee981250f6e4c44aa1781a6d887b7d020180410145438.jpeg" })*/, o(".first_page,.guide").bind("touchmove", function(o) { o.preventDefault() });
        var M = window.innerHeight,
            S = 750,
            R = PIXI.Container,
            j = (PIXI.autoDetectRenderer, PIXI.loader),
            q = (PIXI.loader.resources, PIXI.utils.TextureCache, PIXI.Texture, PIXI.Text),
            A = (new PIXI.ticker.Ticker, PIXI.Sprite),
            L = (PIXI.Rectangle, PIXI.Graphics),
            X = new R;
        X.width = S, X.height = S;
        var N = new PIXI.CanvasRenderer(S, S, { backgroundColor: 16777215 });
        o("#content").append(N.view), j.add(T + "rotate.png").add(T + "close.png").add(T + "images/bg1.png").add(T + "erweima_bg.jpg").add(T + "bottom_logo3.png").add(T + "man/body.png").load(t);
        for (var E, O, D, G, F, J, B = [], W = [T + "erweima00.jpg", T + "erweima01.jpg", T + "erweima02.jpg", T + "erweima03.jpg", T + "erweima04.jpg", T + "erweima05.jpg", T + "erweima06.jpg", T + "erweima07.jpg", T + "erweima08.jpg", T + "erweima09.jpg", T + "erweima10.jpg", T + "erweima11.jpg", T + "erweima12.jpg", T + "erweima13.jpg", T + "erweima14.jpg", T + "erweima15.jpg", T + "erweima16.jpg", T + "erweima17.jpg", T + "erweima18.jpg", T + "erweima19.jpg", T + "erweima20.jpg"], H = ["\u522b\u8ddf\u6211\u8c08\u7761\u89c9\u8fd9\u4ef6\u4e8b\uff0c\u6212\u4e86", "\u7761\u7720\u662f\u4e00\u79cd\u827a\u672f", "\u4e00\u89c9\u6cbb\u767e\u75c5\uff0c\u4e00\u89c9\u5e73\u5929\u4e0b", "\u65e0\u8bba\u7761\u5728\u54ea\u91cc\uff0c\u6211\u90fd\u7761\u5728\u7f8e\u68a6\u91cc", "\u79cb\u4e4f\u51ac\u7720\u590f\u6253\u76f9\uff0c\u7761\u4e0d\u9192\u7684\u6625\u56db\u6708", "\u6211\u7761\u89c9\u662f\u4e3a\u4e86\u505a\u68a6", "\u60f3\u5bf9\u4f60\u8bf4\u53e5\u665a\u5b89\uff0c\u4f60\u542c\u5230\u4e86\u5417\uff1f", "\u522b\u7761\u592a\u665a\uff0c\u68a6\u4f1a\u5f88\u77ed", "\u518d\u89c1\u5427\uff0c\u4eca\u5929\u7684\u6211\uff0c\u660e\u5929\u89c1", "\u5403\u9971\u4e86\u6491\u7740\u7761\u89c9", "\u6211\u81ea\u6a2a\u5200\u5411\u5929\u7b11\uff0c\u7b11\u5b8c\u6211\u5c31\u53bb\u7761\u89c9", "\u6211\u7231\u7761\u89c9\uff0c\u76ae\u80a4\u597d\u597d", "\u68a6\u91cc\u7684\u6211\u5728\u7761\u89c9\uff0c\u7761\u89c9\u7684\u6211\u5728\u505a\u68a6", "\u5403\u996d\u4e0d\u77e5\u9965\u9971\uff0c\u7761\u89c9\u4e0d\u77e5\u98a0\u5012", "\u7528\u6709\u9650\u7684\u65f6\u95f4\uff0c\u7761\u65e0\u9650\u7684\u89c9", "\u7ed9\u6211\u4e00\u5f20\u5e8a\uff0c\u6211\u7761\u5230\u4e16\u754c\u706d\u4ea1", "\u9ed1\u773c\u5708\u9000\u6563\uff01", "\u7d2f\u5230\u65ad\u7535\u7684\u6211\uff0c\u8bf7\u5feb\u70b9\u5165\u7761\u7ed9\u81ea\u5df1\u5145\u7535", "\u60a8\u597d\uff0c\u60a8\u62e8\u53eb\u7684\u7528\u6237\u5df2\u7ecf\u5165\u7720", "\u7761\u89c9\uff0c\u5c31\u662f\u6682\u65f6\u653e\u4e0b\u4e00\u5207\uff0c\u8ba9\u81ea\u5df1\u5f52\u96f6", "\u53ea\u60f3\u4e00\u89c9\u7761\u5230\u81ea\u7136\u9192\u8fc7\u6765", "\u60f3\u5728\u68a6\u91cc\uff0c\u8ddf\u8001\u677f\u51b3\u4e00\u6b7b\u6218\uff08\u5f53\u7136\u662f\u6211\u8d62\uff09", "\u624b\u673a\u4f60\u653e\u8fc7\u6211\u5427\uff0c\u8fd9\u6b21\u6211\u771f\u7684\u8981\u7761\u89c9\u4e86\uff01", "\u4e00\u89c9\u7761\u9192\uff0c\u6211\u671f\u5f85\u7684\u4e8b\u60c5\u90fd\u5982\u6211\u613f", "\u70b9\u540d\u67e5\u5c97\u6253\u5361\uff0c\u662f\u963b\u788d\u4eba\u7c7b\u7761\u7720\u8fdb\u6b65\u7684\u7eca\u811a\u77f3", "\u65e9\u7761\u65e9\u8d77\uff1f\u4e0d\u5b58\u5728\u7684\uff01", "\u7ba1\u7ba1\u624b\u673a\uff0c\u6551\u6551\u7761\u7720\uff01", "\u5435\u5230\u6211\u7761\u89c9\u7684\u4eba\uff0c\u8bf7\u5feb\u70b9\u8d54\u94b1\uff01", "\u4ee5\u540e\u8981\u65e9\u7761\u65e9\u8d77\uff08\u5f00\u73a9\u7b11\u7684\uff09", "\u5404\u4f4d\u665a\u5b89\uff08\u65e9\u7761\u7684\u4eba\u9664\u5916\uff09", "\u65e9\u7761\u65e9\u8d77\uff0c\u65b9\u80fd\u517b\u751f\uff08\u4e0d\u5b58\u5728\u7684\uff09", "\u624b\u673a\u5bf9\u71ac\u591c\u6709\u4e0d\u53ef\u63a8\u5378\u7684\u8d23\u4efb", "\u8eab\u4f53\u544a\u8bc9\u4f60\u4f60\u56f0\u4e86\uff0c\u5927\u8111\u5374\u8bf4\u518d\u575a\u63015\u5206\u949f", "\u59ff\u52bf\u4e0d\u5bf9\uff0c\u8d77\u6765\u91cd\u7761", "\u4e00\u5b57\u6392\u6210\u6392\uff0c\u7761\u89c9\u5927\u8fc7\u5929", "\u4eba\u751f\u5982\u68a6\uff0c\u6211\u603b\u5931\u7720", "\u7761\u4e0d\u7740\u73a9\u624b\u673a\uff0c\u73a9\u624b\u673a\u7761\u4e0d\u7740", "\u65e9\u70b9\u7761\uff0c\u71ac\u591c\u73a9\u624b\u673a\u5bf9\u624b\u673a\u4e0d\u597d", "\u597d\u70e6\uff0c\u840c\u7684\u7761\u4e0d\u7740", "\u5df4\u5566\u5566\u80fd\u91cf\u2014\u547c\u5566\u5566\u2014\u7761\uff01"], 
             z = [{ bodyUrl: T + "man/body.png", bodyPosition: { x: 0, y: 0 }, bodyImgPosition: { x: 0, y: 68 }, headUrl: T + "man/head.png", headPosition: { x: -50, y: -20 }, facingTo: 0, part: [], globalPosition: { x: 420, y: 250 }, bones: [] }, { bodyUrl: T + "man_left/body.png", bodyPosition: { x: 0, y: 3 }, bodyImgPosition: { x: 0, y: 70 }, headUrl: T + "man_left/head.png", headPosition: { x: 55, y: 0 }, facingTo: 1, part: [
                    [T + "man_left/left_arm.png", T + "man_left/left_hand.png"],
                    [T + "man_left/right_arm.png", T + "man_left/right_hand.png"],
                    [T + "man_left/left_leg.png", T + "man_left/left_foot.png"],
                    [T + "man_left/right_leg.png", T + "man_left/right_foot.png"]
                ], globalPosition: { x: 250, y: 302 }, bones: [{ boneRotate: 1, bone1: { position: { x: -13, y: 100 }, pivot: { x: 104, y: 17 }, rotation: -.5 }, bone2: { position: { x: -108, y: 28 }, pivot: { x: 124, y: 21 }, rotation: 1 }, end: { position: { x: 17, y: 51 } } }, { boneRotate: .5, bone1: { position: { x: -4, y: 100 }, pivot: { x: 95, y: 16 }, rotation: -.6 }, bone2: { position: { x: -91, y: 43 }, pivot: { x: 110, y: 20 }, rotation: 1.2 }, end: { position: { x: 19, y: 73 } } }, { boneRotate: -5.8, bone1: { position: { x: -38, y: 226 }, pivot: { x: 66, y: 29 }, rotation: .7 }, bone2: { position: { x: -49, y: 102 }, pivot: { x: 71, y: 26 }, rotation: -1.4 }, end: { position: { x: 23, y: 119 } } }, { boneRotate: 0, bone1: { position: { x: -3, y: 233 }, pivot: { x: 62, y: 25 }, rotation: .7 }, bone2: { position: { x: -38, y: 104 }, pivot: { x: 62, y: 25 }, rotation: -1.4 }, end: { position: { x: 23, y: 126 } } }] }, { bodyUrl: T + "man_right/body.png", bodyPosition: { x: 0, y: 3 }, bodyImgPosition: { x: 0, y: 70 }, headUrl: T + "man_right/head.png", headPosition: { x: 7, y: 0 }, facingTo: 2, part: [
                    [T + "man_right/left_arm.png", T + "man_right/left_hand.png"],
                    [T + "man_right/right_arm.png", T + "man_right/right_hand.png"],
                    [T + "man_right/left_leg.png", T + "man_right/left_foot.png"],
                    [T + "man_right/right_leg.png", T + "man_right/right_foot.png"]
                ], globalPosition: { x: 250, y: 302 }, bones: [{ boneRotate: -1, bone1: { position: { x: 37, y: 100 }, pivot: { x: 20, y: 20 }, rotation: .5 }, bone2: { position: { x: 67, y: 40 }, pivot: { x: 20, y: 20 }, rotation: -1 }, end: { position: { x: 118, y: 73 } } }, { boneRotate: -.2, bone1: { position: { x: 37, y: 100 }, pivot: { x: 17, y: 17 }, rotation: .6 }, bone2: { position: { x: 77, y: 28 }, pivot: { x: 17, y: 19 }, rotation: -1.2 }, end: { position: { x: 126, y: 51 } } }, { boneRotate: -5.8, bone1: { position: { x: 53, y: 233 }, pivot: { x: 30, y: 25 }, rotation: -.7 }, bone2: { position: { x: 43, y: 104 }, pivot: { x: 25, y: 25 }, rotation: 1.4 }, end: { position: { x: 54, y: 126 } } }, { boneRotate: -0, bone1: { position: { x: 81, y: 226 }, pivot: { x: 31, y: 29 }, rotation: -.7 }, bone2: { position: { x: 52, y: 102 }, pivot: { x: 22, y: 26 }, rotation: 1.4 }, end: { position: { x: 71, y: 119 } } }] }, { bodyUrl: T + "man_back/body.png", bodyPosition: { x: 159, y: 8 }, bodyImgPosition: { x: 0, y: 66 }, headUrl: T + "man_back/head.png", headPosition: { x: 25, y: 0 }, facingTo: 3, part: [
                    [T + "man_back/left_arm.png", T + "man_back/left_hand.png"],
                    [T + "man_back/right_arm.png", T + "man_back/right_hand.png"],
                    [T + "man_back/left_leg.png", T + "man_back/left_foot.png"],
                    [T + "man_back/right_leg.png", T + "man_back/right_foot.png"]
                ], globalPosition: { x: 158, y: 202 }, bones: [{ bone1: { position: { x: 76, y: 102 }, pivot: { x: 92, y: 16 }, rotation: 0 }, bone2: { position: { x: -76, y: 30 }, pivot: { x: 98, y: 21 }, rotation: 0 }, end: { position: { x: 19, y: 80 } } }, { bone1: { position: { x: 255, y: 102 }, pivot: { x: 16, y: 16 }, rotation: 0 }, bone2: { position: { x: 69, y: 28 }, pivot: { x: 17, y: 21 }, rotation: 0 }, end: { position: { x: 96, y: 80 } } }, { bone1: { position: { x: 158, y: 267 }, pivot: { x: 28.5, y: 26 }, rotation: 0 }, bone2: { position: { x: 5, y: 117 }, pivot: { x: 23, y: 18 }, rotation: 0 }, end: { position: { x: 22, y: 123 } } }, { bone1: { position: { x: 218, y: 267 }, pivot: { x: 28.5, y: 26 }, rotation: 0 }, bone2: { position: { x: 5, y: 117 }, pivot: { x: 23, y: 18 }, rotation: 0 }, end: { position: { x: 22, y: 123 } } }] }], Q = [
            { clothUrl: T + "man/cloth.png", clothPosition: { x: 50, y: 195 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { clothUrl: T + "man/cloth0/body.png", clothPosition: { x: 65, y: 195 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { clothUrl: T + "man/cloth1/body.png", clothPosition: { x: 45, y: 150 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { clothUrl: T + "man/cloth2/body.png", clothPosition: { x: -30, y: 150 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, 
                { clothUrl: T + "man/cloth3/body.png", clothPosition: { x: -75, y: 30 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, 
                { clothUrl: T + "man/cloth4/body.png", clothPosition: { x: -75, y: 30 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, 
                { clothUrl: T + "man/cloth5/body.png", clothPosition: { x: -20, y: 160 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, 
                { clothUrl: T + "man/cloth6/body.png", clothPosition: { x: 50, y: 160 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, 
                { clothUrl: T + "man/cloth7/body.png", clothPosition: { x: -40, y: 90 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, 
                { clothUrl: T + "man/cloth8/body.png", clothPosition: { x: -95, y: 90 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, 
                { clothUrl: T + "man/cloth9/body.png", clothPosition: { x: -55, y: 90 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, 
                { clothUrl: T + "man/cloth10/body.png", clothPosition: { x: -90, y: 90 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
                 
                { clothUrl: T + "man/cloth11/body1.png", clothPosition: { x: -40, y: 95 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
                { clothUrl: T + "man/cloth11/body2.png", clothPosition: { x: -25, y: 95 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
                 
                { clothUrl: T + "man/cloth12/body.png", clothPosition: { x: -30, y: 160 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
                 
                { clothUrl: T + "man/cloth13/body.png", clothPosition: { x: -30, y: 160 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
                 
                { clothUrl: T + "man/cloth14/body.png", clothPosition: { x: -25, y: 180 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
                 
                { clothUrl: T + "man/cloth15/body.png", clothPosition: { x: 25, y: 180 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
                 
                { clothUrl: T + "man/cloth16/body.png", clothPosition: { x: -50, y: 130 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
                 
                { clothUrl: T + "man/cloth17/body.png", clothPosition: { x: -80, y: 130 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth18/body.png", clothPosition: { x: -50, y: 185 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth19/body.png", clothPosition: { x: 20, y: 185 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth20/body.png", clothPosition: { x: -60, y: 130 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth21/body.png", clothPosition: { x: -80, y: 130 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth22/body.png", clothPosition: { x: 10, y: 130 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth23/body.png", clothPosition: { x: 20, y: 140 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth24/body.png", clothPosition: { x: -10, y: 130 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth25/body.png", clothPosition: { x: -80, y: 30 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth26/body.png", clothPosition: { x: 10, y: 30 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth27/body.png", clothPosition: { x: -40, y: -30 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth28/body.png", clothPosition: { x: -10, y: -30 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth29/body.png", clothPosition: { x: -50, y: 105 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth30/body.png", clothPosition: { x: -20, y: 105 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth31/body.png", clothPosition: { x: -20, y: 140 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
            
            { clothUrl: T + "man/cloth32/body.png", clothPosition: { x: -65, y: 150 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] },
                ], 
             K = [{ clothUrl: T + "man_back/cloth.png", clothPosition: { x: 6, y: 85 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { hatUrl: T + "man_back/cloth1/hat.png", hatPosition: { x: -25, y: -24 }, clothUrl: T + "man_back/cloth1/body.png", clothPosition: { x: -10, y: 82 }, part: [
                    [T + "man_back/cloth1/left_arm.png", T + "man_back/cloth1/left_hand.png"],
                    [T + "man_back/cloth1/right_arm.png", T + "man_back/cloth1/right_hand.png"],
                    [T + "man_back/cloth1/left_leg.png", T + "man_back/cloth1/left_foot.png"],
                    [T + "man_back/cloth1/right_leg.png", T + "man_back/cloth1/right_foot.png"]
                ], bones: [{ bone1: { position: { x: 0, y: -1 } }, bone2: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -2, y: 0 } } }, { bone1: { position: { x: -3, y: -18 } }, bone2: { position: { x: -2, y: -14 } } }, { bone1: { position: { x: -5, y: -3 } }, bone2: { position: { x: -3, y: -17 } } }] }, { clothUrl: T + "man_back/cloth2/body.png", clothPosition: { x: -1, y: 83 }, part: [
                    [T + "man_back/cloth2/left_arm.png", T + "man_back/cloth2/left_hand.png"],
                    [T + "man_back/cloth2/right_arm.png", T + "man_back/cloth2/right_hand.png"],
                    [T + "man_back/cloth2/left_leg.png", T + "man_back/cloth2/left_foot.png"],
                    [T + "man_back/cloth2/right_leg.png", T + "man_back/cloth2/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 22, y: -11 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -12, y: -6 } } }, { bone1: { position: { x: -1, y: -3 } }, bone2: { position: { x: -2, y: -9 } } }, { bone1: { position: { x: -1, y: -2 } }, bone2: { position: { x: -2, y: -9 } } }] }, { clothUrl: T + "man_back/cloth3/body.png", clothPosition: { x: -1, y: 85 }, part: [
                    [0, 0],
                    [0, 0],
                    [T + "man_back/cloth3/left_leg.png", 0],
                    [T + "man_back/cloth3/right_leg.png", 0]
                ], bones: [0, 0, { bone1: { position: { x: -2, y: -3 } } }, { bone1: { position: { x: -2, y: -3 } } }] }, { clothUrl: T + "man_back/cloth4/body.png", clothPosition: { x: -7, y: 86 }, part: [
                    [T + "man_back/cloth4/left_arm.png", 0],
                    [T + "man_back/cloth4/right_arm.png", 0],
                    [T + "man_back/cloth4/left_leg.png", 0],
                    [T + "man_back/cloth4/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 31, y: -2 } } }, { bone1: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -6, y: -4 } } }, { bone1: { position: { x: -3, y: -4 } } }] }, { clothUrl: T + "man_back/cloth5/body.png", clothPosition: { x: -3, y: 84 }, part: [
                    [T + "man_back/cloth5/left_arm.png", T + "man_back/cloth5/left_hand.png"],
                    [T + "man_back/cloth5/right_arm.png", T + "man_back/cloth5/right_hand.png"],
                    [T + "man_back/cloth5/left_leg.png", T + "man_back/cloth5/left_foot.png"],
                    [T + "man_back/cloth5/right_leg.png", T + "man_back/cloth5/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: 29, y: -3 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: -4, y: -19 } } }, { bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: -7, y: -19 } } }] }, { clothUrl: T + "man_back/cloth6/body.png", clothPosition: { x: -5, y: 86 }, part: [
                    [T + "man_back/cloth6/left_arm.png", 0],
                    [T + "man_back/cloth6/right_arm.png", 0],
                    [T + "man_back/cloth6/left_leg.png", 0],
                    [T + "man_back/cloth6/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 24, y: -2 } } }, { bone1: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -2, y: -1 } } }] }, { clothUrl: T + "man_back/cloth7/body.png", clothPosition: { x: -3, y: 86 }, part: [
                    [T + "man_back/cloth7/left_arm.png", T + "man_back/cloth7/left_hand.png"],
                    [T + "man_back/cloth7/right_arm.png", T + "man_back/cloth7/right_hand.png"],
                    [T + "man_back/cloth7/left_leg.png", T + "man_back/cloth7/left_foot.png"],
                    [T + "man_back/cloth7/right_leg.png", T + "man_back/cloth7/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -1, y: -1 } }, bone2: { position: { x: 27, y: -3 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -1, y: -1 } }, bone2: { position: { x: -1, y: -3 } } }, { bone1: { position: { x: -1, y: -1 } }, bone2: { position: { x: -2, y: 0 } } }] }, { clothUrl: T + "man_back/cloth8/body.png", clothPosition: { x: -9, y: 84 }, part: [
                    [T + "man_back/cloth8/left_arm.png", 0],
                    [T + "man_back/cloth8/right_arm.png", 0],
                    [T + "man_back/cloth8/left_leg.png", 0],
                    [T + "man_back/cloth8/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 33, y: -1 } } }, { bone1: { position: { x: -3, y: -1 } } }, { bone1: { position: { x: -9, y: -21 } } }, { bone1: { position: { x: -8, y: -20 } } }] }, { clothUrl: T + "man_back/cloth9/body.png", clothPosition: { x: -9, y: 84 }, part: [
                    [T + "man_back/cloth9/left_arm.png", T + "man_back/cloth9/left_hand.png"],
                    [T + "man_back/cloth9/right_arm.png", T + "man_back/cloth9/right_hand.png"],
                    [T + "man_back/cloth9/left_leg.png", T + "man_back/cloth9/left_foot.png"],
                    [T + "man_back/cloth9/right_leg.png", T + "man_back/cloth9/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 16, y: -3 } } }, { bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -4, y: -3 } }, bone2: { position: { x: -3, y: -3 } } }, { bone1: { position: { x: -4, y: -2 } }, bone2: { position: { x: -3, y: -3 } } }] }], V = [{ clothUrl: T + "man_right/cloth.png", clothPosition: { x: 0, y: 91 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { hatUrl: T + "man_right/cloth1/hat.png", hatPosition: { x: -26, y: -33 }, clothUrl: T + "man_right/cloth1/body.png", clothPosition: { x: 0, y: 84 }, part: [
                    [T + "man_right/cloth1/left_arm.png", T + "man_right/cloth1/left_hand.png"],
                    [T + "man_right/cloth1/right_arm.png", T + "man_right/cloth1/right_hand.png"],
                    [T + "man_right/cloth1/left_leg.png", T + "man_right/cloth1/left_foot.png"],
                    [T + "man_right/cloth1/right_leg.png", T + "man_right/cloth1/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -1, y: -1 } }, bone2: { position: { x: -1, y: -5 } } }, { bone1: { position: { x: -3, y: 9 } }, bone2: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -2, y: -2 } } }] }, { clothUrl: T + "man_right/cloth2/body.png", clothPosition: { x: -5, y: 86 }, part: [
                    [T + "man_right/cloth2/left_arm.png", T + "man_right/cloth2/left_hand.png"],
                    [T + "man_right/cloth2/right_arm.png", T + "man_right/cloth2/right_hand.png"],
                    [T + "man_right/cloth2/left_leg.png", T + "man_right/cloth2/left_foot.png"],
                    [T + "man_right/cloth2/right_leg.png", T + "man_right/cloth2/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -1, y: -3 } }, bone2: { position: { x: -1, y: -3 } } }, { bone1: { position: { x: -5, y: -3 } }, bone2: { position: { x: -2, y: -5 } } }, { bone1: { position: { x: -3, y: 6 } }, bone2: { position: { x: -4, y: -5 } } }, { bone1: { position: { x: -4, y: -8 } }, bone2: { position: { x: -3, y: -3 } } }] }, { clothUrl: T + "man_right/cloth3/body.png", clothPosition: { x: -24, y: 91 }, part: [
                    [0, 0],
                    [0, 0],
                    [T + "man_right/cloth3/left_leg.png", 0],
                    [T + "man_right/cloth3/right_leg.png", 0]
                ], bones: [0, 0, { bone1: { position: { x: 0, y: 4 } } }, { bone1: { position: { x: -3, y: -6 } } }] }, { clothUrl: T + "man_right/cloth4/body.png", clothPosition: { x: -2, y: 88 }, part: [
                    [T + "man_right/cloth4/left_arm.png", 0],
                    [T + "man_right/cloth4/right_arm.png", 0],
                    [T + "man_right/cloth4/left_leg.png", 0],
                    [T + "man_right/cloth4/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -6, y: -3 } } }, { bone1: { position: { x: -3, y: -3 } } }, { bone1: { position: { x: 0, y: -2 } } }, { bone1: { position: { x: -2, y: -6 } } }] }, { clothUrl: T + "man_right/cloth5/body.png", clothPosition: { x: -3, y: 86 }, part: [
                    [T + "man_right/cloth5/left_arm.png", T + "man_right/cloth5/left_hand.png"],
                    [T + "man_right/cloth5/right_arm.png", T + "man_right/cloth5/right_hand.png"],
                    [T + "man_right/cloth5/left_leg.png", T + "man_right/cloth5/left_foot.png"],
                    [T + "man_right/cloth5/right_leg.png", T + "man_right/cloth5/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: -5, y: -2 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: -4, y: -6 } } }, { bone1: { position: { x: -3, y: 5 } }, bone2: { position: { x: -5, y: -1 } } }, { bone1: { position: { x: -2, y: -5 } }, bone2: { position: { x: -4, y: -1 } } }] }, { clothUrl: T + "man_right/cloth6/body.png", clothPosition: { x: -3, y: 86 }, part: [
                    [T + "man_right/cloth6/left_arm.png", 0],
                    [T + "man_right/cloth6/right_arm.png", 0],
                    [T + "man_right/cloth6/left_leg.png", 0],
                    [T + "man_right/cloth6/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -4, y: -4 } } }, { bone1: { position: { x: -4, y: -3 } } }, { bone1: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -1, y: -4 } } }] }, { clothUrl: T + "man_right/cloth7/body.png", clothPosition: { x: -5, y: 89 }, part: [
                    [T + "man_right/cloth7/left_arm.png", T + "man_right/cloth7/left_hand.png"],
                    [T + "man_right/cloth7/right_arm.png", T + "man_right/cloth7/right_hand.png"],
                    [T + "man_right/cloth7/left_leg.png", T + "man_right/cloth7/left_foot.png"],
                    [T + "man_right/cloth7/right_leg.png", T + "man_right/cloth7/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -5, y: -6 } }, bone2: { position: { x: -5, y: -2 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: -3, y: -4 } } }, { bone1: { position: { x: 0, y: 5 } }, bone2: { position: { x: -4, y: -1 } } }, { bone1: { position: { x: -2, y: -5 } }, bone2: { position: { x: -2, y: -1 } } }] }, { clothUrl: T + "man_right/cloth8/body.png", clothPosition: { x: -5, y: 89 }, part: [
                    [T + "man_right/cloth8/left_arm.png", 0],
                    [T + "man_right/cloth8/right_arm.png", 0],
                    [T + "man_right/cloth8/left_leg.png", 0],
                    [T + "man_right/cloth8/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -7, y: -5 } } }, { bone1: { position: { x: -8, y: -5 } } }, { bone1: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -2, y: -5 } } }] }, { clothUrl: T + "man_right/cloth9/body.png", clothPosition: { x: -4, y: 89 }, part: [
                    [T + "man_right/cloth9/left_arm.png", T + "man_right/cloth9/left_hand.png"],
                    [T + "man_right/cloth9/right_arm.png", T + "man_right/cloth9/right_hand.png"],
                    [T + "man_right/cloth9/left_leg.png", T + "man_right/cloth9/left_foot.png"],
                    [T + "man_right/cloth9/right_leg.png", T + "man_right/cloth9/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -5, y: -3 } }, bone2: { position: { x: -5, y: -4 } } }, { bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: -4, y: -6 } } }, { bone1: { position: { x: -2, y: -5 } }, bone2: { position: { x: 0, y: -2 } } }, { bone1: { position: { x: -2, y: -5 } }, bone2: { position: { x: -3, y: -3 } } }] }], Y = [{ clothUrl: T + "man_left/cloth.png", clothPosition: { x: 21, y: 91 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { hatUrl: T + "man_left/cloth1/hat.png", hatPosition: { x: -5, y: -33 }, clothUrl: T + "man_left/cloth1/body.png", clothPosition: { x: -4, y: 84 }, part: [
                    [T + "man_left/cloth1/left_arm.png", T + "man_left/cloth1/left_hand.png"],
                    [T + "man_left/cloth1/right_arm.png", T + "man_left/cloth1/right_hand.png"],
                    [T + "man_left/cloth1/left_leg.png", T + "man_left/cloth1/left_foot.png"],
                    [T + "man_left/cloth1/right_leg.png", T + "man_left/cloth1/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -6, y: -3 } } }, { bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: -7, y: -1 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -6, y: 9 } }, bone2: { position: { x: -6, y: -1 } } }] }, { clothUrl: T + "man_left/cloth2/body.png", clothPosition: { x: -2, y: 86 }, part: [
                    [T + "man_left/cloth2/left_arm.png", T + "man_left/cloth2/left_hand.png"],
                    [T + "man_left/cloth2/right_arm.png", T + "man_left/cloth2/right_hand.png"],
                    [T + "man_left/cloth2/left_leg.png", T + "man_left/cloth2/left_foot.png"],
                    [T + "man_left/cloth2/right_leg.png", T + "man_left/cloth2/right_foot.png"]
                ], bones: [{ bone1: { position: { x: 0, y: -3 } }, bone2: { position: { x: 33, y: -5 } } }, { bone1: { position: { x: -4, y: -3 } }, bone2: { position: { x: 20, y: -3 } } }, { bone1: { position: { x: 0, y: -8 } }, bone2: { position: { x: 18, y: -3 } } }, { bone1: { position: { x: -5, y: 6 } }, bone2: { position: { x: 12, y: -5 } } }] }, { clothUrl: T + "man_left/cloth3/body.png", clothPosition: { x: -6, y: 91 }, part: [
                    [0, 0],
                    [0, 0],
                    [T + "man_left/cloth3/left_leg.png", 0],
                    [T + "man_left/cloth3/right_leg.png", 0]
                ], bones: [0, 0, { bone1: { position: { x: 16, y: 4 } } }, { bone1: { position: { x: 13, y: -6 } } }] }, { clothUrl: T + "man_left/cloth4/body.png", clothPosition: { x: -3, y: 88 }, part: [
                    [T + "man_left/cloth4/left_arm.png", 0],
                    [T + "man_left/cloth4/right_arm.png", 0],
                    [T + "man_left/cloth4/left_leg.png", 0],
                    [T + "man_left/cloth4/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 40, y: -3 } } }, { bone1: { position: { x: 32, y: -3 } } }, { bone1: { position: { x: 16, y: -6 } } }, { bone1: { position: { x: 9, y: -2 } } }] }, { clothUrl: T + "man_left/cloth5/body.png", clothPosition: { x: -3, y: 86 }, part: [
                    [T + "man_left/cloth5/left_arm.png", T + "man_left/cloth5/left_hand.png"],
                    [T + "man_left/cloth5/right_arm.png", T + "man_left/cloth5/right_hand.png"],
                    [T + "man_left/cloth5/left_leg.png", T + "man_left/cloth5/left_foot.png"],
                    [T + "man_left/cloth5/right_leg.png", T + "man_left/cloth5/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -1, y: -3 } }, bone2: { position: { x: 33, y: -6 } } }, { bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: 20, y: -2 } } }, { bone1: { position: { x: 0, y: -5 } }, bone2: { position: { x: 23, y: -1 } } }, { bone1: { position: { x: -4, y: 5 } }, bone2: { position: { x: 12, y: -1 } } }] }, { clothUrl: T + "man_left/cloth6/body.png", clothPosition: { x: -2, y: 86 }, part: [
                    [T + "man_left/cloth6/left_arm.png", 0],
                    [T + "man_left/cloth6/right_arm.png", 0],
                    [T + "man_left/cloth6/left_leg.png", 0],
                    [T + "man_left/cloth6/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 41, y: -3 } } }, { bone1: { position: { x: 32, y: -4 } } }, { bone1: { position: { x: 16, y: -4 } } }, { bone1: { position: { x: 8, y: -1 } } }] }, { clothUrl: T + "man_left/cloth7/body.png", clothPosition: { x: -2, y: 89 }, part: [
                    [T + "man_left/cloth7/left_arm.png", T + "man_left/cloth7/left_hand.png"],
                    [T + "man_left/cloth7/right_arm.png", T + "man_left/cloth7/right_hand.png"],
                    [T + "man_left/cloth7/left_leg.png", T + "man_left/cloth7/left_foot.png"],
                    [T + "man_left/cloth7/right_leg.png", T + "man_left/cloth7/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -1, y: -3 } }, bone2: { position: { x: 34, y: -4 } } }, { bone1: { position: { x: -2, y: -6 } }, bone2: { position: { x: 23, y: -2 } } }, { bone1: { position: { x: -1, y: -5 } }, bone2: { position: { x: 21, y: -1 } } }, { bone1: { position: { x: -3, y: 5 } }, bone2: { position: { x: 15, y: -1 } } }] }, { clothUrl: T + "man_left/cloth8/body.png", clothPosition: { x: -2, y: 89 }, part: [
                    [T + "man_left/cloth8/left_arm.png", 0],
                    [T + "man_left/cloth8/right_arm.png", 0],
                    [T + "man_left/cloth8/left_leg.png", 0],
                    [T + "man_left/cloth8/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 41, y: -5 } } }, { bone1: { position: { x: 32, y: -5 } } }, { bone1: { position: { x: 7, y: -5 } } }, { bone1: { position: { x: 3, y: -1 } } }] }, { clothUrl: T + "man_left/cloth9/body.png", clothPosition: { x: -3, y: 89 }, part: [
                    [T + "man_left/cloth9/left_arm.png", T + "man_left/cloth9/left_hand.png"],
                    [T + "man_left/cloth9/right_arm.png", T + "man_left/cloth9/right_hand.png"],
                    [T + "man_left/cloth9/left_leg.png", T + "man_left/cloth9/left_foot.png"],
                    [T + "man_left/cloth9/right_leg.png", T + "man_left/cloth9/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: 34, y: -6 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 24, y: -4 } } }, { bone1: { position: { x: -1, y: -5 } }, bone2: { position: { x: 31, y: -3 } } }, { bone1: { position: { x: -4, y: -5 } }, bone2: { position: { x: 22, y: -2 } } }] }], Z = [{ bodyUrl: T + "woman/body.png", bodyPosition: { x: 142, y: 8 }, bodyImgPosition: { x: 0, y: 73 }, headUrl: T + "woman/head.png", headPosition: { x: 21, y: 0 }, facingTo: 0, part: [
                    [T + "woman/left_arm.png", T + "woman/left_hand.png"],
                    [T + "woman/right_arm.png", T + "woman/right_hand.png"],
                    [T + "woman/left_leg.png", T + "woman/left_foot.png"],
                    [T + "woman/right_leg.png", T + "woman/right_foot.png"]
                ], globalPosition: { x: 420, y: 250 }, bones: [{ bone1: { position: { x: 71, y: 105 }, pivot: { x: 90, y: 15 }, rotation: 0 }, bone2: { position: { x: -71, y: 29 }, pivot: { x: 90, y: 18 }, rotation: 0 }, end: { position: { x: 15, y: 80 } } }, { bone1: { position: { x: 228, y: 105 }, pivot: { x: 13, y: 15 }, rotation: 0 }, bone2: { position: { x: 65, y: 29 }, pivot: { x: 16, y: 18 }, rotation: 0 }, end: { position: { x: 93, y: 80 } } }, { bone1: { position: { x: 142, y: 240 }, pivot: { x: 29, y: 24 }, rotation: 0 }, bone2: { position: { x: -13, y: 110 }, pivot: { x: 43, y: 15 }, rotation: 0 }, end: { position: { x: 41, y: 112 } } }, { bone1: { position: { x: 192, y: 240 }, pivot: { x: 22, y: 24 }, rotation: 0 }, bone2: { position: { x: -12, y: 110 }, pivot: { x: 43, y: 15 }, rotation: 0 }, end: { position: { x: 41, y: 112 } } }] }, { bodyUrl: T + "woman_left/body.png", bodyPosition: { x: 0, y: 8 }, bodyImgPosition: { x: 0, y: 73 }, headUrl: T + "woman_left/head.png", headPosition: { x: 60, y: 0 }, facingTo: 3, part: [
                    [T + "woman_left/left_arm.png", T + "woman_left/left_hand.png"],
                    [T + "woman_left/right_arm.png", T + "woman_left/right_hand.png"],
                    [T + "woman_left/left_leg.png", T + "woman_left/left_foot.png"],
                    [T + "woman_left/right_leg.png", T + "woman_left/right_foot.png"]
                ], globalPosition: { x: 250, y: 302 }, bones: [{ boneRotate: .5, bone1: { position: { x: -9, y: 102 }, pivot: { x: 97, y: 16 }, rotation: -.5 }, bone2: { position: { x: -89, y: 15 }, pivot: { x: 109, y: 20 }, rotation: 1 }, end: { position: { x: 16, y: 39 } } }, { boneRotate: 0, bone1: { position: { x: -3, y: 102 }, pivot: { x: 90, y: 16 }, rotation: -.3 }, bone2: { position: { x: -90, y: 29 }, pivot: { x: 109, y: 18 }, rotation: .6 }, end: { position: { x: 15, y: 50 } } }, { boneRotate: -5.8, bone1: { position: { x: -27, y: 213 }, pivot: { x: 64, y: 23 }, rotation: .7 }, bone2: { position: { x: -57, y: 102 }, pivot: { x: 81, y: 21 }, rotation: -1.4 }, end: { position: { x: 43, y: 110 } } }, { boneRotate: 0, bone1: { position: { x: 8, y: 213 }, pivot: { x: 47, y: 23 }, rotation: .7 }, bone2: { position: { x: -20, y: 109 }, pivot: { x: 42, y: 18 }, rotation: -1.4 }, end: { position: { x: 19, y: 110 } } }] }, { bodyUrl: T + "woman_right/body.png", bodyPosition: { x: 0, y: 8 }, bodyImgPosition: { x: 0, y: 73 }, headUrl: T + "woman_right/head.png", headPosition: { x: -16, y: 0 }, facingTo: 2, part: [
                    [T + "woman_right/left_arm.png", T + "woman_right/left_hand.png"],
                    [T + "woman_right/right_arm.png", T + "woman_right/right_hand.png"],
                    [T + "woman_right/left_leg.png", T + "woman_right/left_foot.png"],
                    [T + "woman_right/right_leg.png", T + "woman_right/right_foot.png"]
                ], globalPosition: { x: 250, y: 302 }, bones: [{ boneRotate: -1, bone1: { position: { x: 28, y: 102 }, pivot: { x: 16, y: 16 }, rotation: .5 }, bone2: { position: { x: 68, y: 29 }, pivot: { x: 18, y: 20 }, rotation: -1 }, end: { position: { x: 110, y: 50 } } }, { boneRotate: -.2, bone1: { position: { x: 28, y: 102 }, pivot: { x: 16, y: 16 }, rotation: .6 }, bone2: { position: { x: 70, y: 15 }, pivot: { x: 17, y: 19 }, rotation: -1.2 }, end: { position: { x: 120, y: 39 } } }, { boneRotate: -5.8, bone1: { position: { x: 55, y: 213 }, pivot: { x: 25, y: 23 }, rotation: -.7 }, bone2: { position: { x: 27, y: 109 }, pivot: { x: 21, y: 18 }, rotation: 1.4 }, end: { position: { x: 46, y: 110 } } }, { boneRotate: -0, bone1: { position: { x: 75, y: 213 }, pivot: { x: 25, y: 23 }, rotation: -.7 }, bone2: { position: { x: 42, y: 102 }, pivot: { x: 21, y: 21 }, rotation: 1.4 }, end: { position: { x: 59, y: 110 } } }] }, { bodyUrl: T + "woman/body.png", bodyPosition: { x: 142, y: 8 }, bodyImgPosition: { x: 0, y: 73 }, headUrl: T + "woman/head.png", headPosition: { x: 19, y: 2 }, facingTo: 1, part: [
                    [T + "woman/left_arm.png", T + "woman/left_hand.png"],
                    [T + "woman/right_arm.png", T + "woman/right_hand.png"],
                    [T + "woman/left_leg.png", T + "woman/left_foot.png"],
                    [T + "woman/right_leg.png", T + "woman/right_foot.png"]
                ], globalPosition: { x: 158, y: 202 }, bones: [{ bone1: { position: { x: 71, y: 105 }, pivot: { x: 90, y: 15 }, rotation: 0 }, bone2: { position: { x: -71, y: 29 }, pivot: { x: 90, y: 18 }, rotation: 0 }, end: { position: { x: 15, y: 80 } } }, { bone1: { position: { x: 228, y: 105 }, pivot: { x: 13, y: 15 }, rotation: 0 }, bone2: { position: { x: 65, y: 29 }, pivot: { x: 16, y: 18 }, rotation: 0 }, end: { position: { x: 93, y: 80 } } }, { bone1: { position: { x: 142, y: 240 }, pivot: { x: 29, y: 24 }, rotation: 0 }, bone2: { position: { x: -13, y: 110 }, pivot: { x: 43, y: 15 }, rotation: 0 }, end: { position: { x: 41, y: 112 } } }, { bone1: { position: { x: 192, y: 240 }, pivot: { x: 22, y: 24 }, rotation: 0 }, bone2: { position: { x: -12, y: 110 }, pivot: { x: 43, y: 15 }, rotation: 0 }, end: { position: { x: 41, y: 112 } } }] }], $ = [{ clothUrl: T + "woman/cloth.png", clothPosition: { x: 11, y: 92 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { hatUrl: T + "woman/cloth1/hat.png", hatPosition: { x: -20, y: -21 }, clothUrl: T + "woman/cloth1/body.png", clothPosition: { x: -10, y: 88 }, part: [
                    [T + "woman/cloth1/left_arm.png", T + "woman/cloth1/left_hand.png"],
                    [T + "woman/cloth1/right_arm.png", T + "woman/cloth1/right_hand.png"],
                    [T + "woman/cloth1/left_leg.png", T + "woman/cloth1/left_foot.png"],
                    [T + "woman/cloth1/right_leg.png", T + "woman/cloth1/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: -4, y: -2 } } }, { bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -3, y: -25 } }, bone2: { position: { x: 16, y: -22 } } }, { bone1: { position: { x: -2, y: -25 } }, bone2: { position: { x: 16, y: -22 } } }] }, { clothUrl: T + "woman/cloth2/body.png", clothPosition: { x: -7, y: 90 }, part: [
                    [T + "woman/cloth2/left_arm.png", T + "woman/cloth2/left_hand.png"],
                    [T + "woman/cloth2/right_arm.png", T + "woman/cloth2/right_hand.png"],
                    [T + "woman/cloth2/left_leg.png", T + "woman/cloth2/left_foot.png"],
                    [T + "woman/cloth2/right_leg.png", T + "woman/cloth2/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: 32, y: -3 } } }, { bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: -17, y: -3 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 18, y: -3 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 18, y: -3 } } }] }, { clothUrl: T + "woman/cloth3/body.png", clothPosition: { x: -2, y: 92 }, part: [
                    [0, 0],
                    [0, 0],
                    [T + "woman/cloth3/left_leg.png", 0],
                    [T + "woman/cloth3/right_leg.png", 0]
                ], bones: [0, 0, { bone1: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -2, y: -3 } } }] }, { hatUrl: T + "woman/cloth4/hat.png", hatPosition: { x: -20, y: -24 }, clothUrl: T + "woman/cloth4/body.png", clothPosition: { x: -14, y: 93 }, part: [
                    [T + "woman/cloth4/left_arm.png", T + "woman/cloth4/left_hand.png"],
                    [T + "woman/cloth4/right_arm.png", T + "woman/cloth4/right_hand.png"],
                    [T + "woman/cloth4/left_leg.png", T + "woman/cloth4/left_foot.png"],
                    [T + "woman/cloth4/right_leg.png", T + "woman/cloth4/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -6, y: -2 } }, bone2: { position: { x: 14, y: -3 } } }, { bone1: { position: { x: -5, y: -1 } }, bone2: { position: { x: -12, y: -2 } } }, { bone1: { position: { x: -3, y: -1 } }, bone2: { position: { x: 19, y: -2 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 19, y: -2 } } }] }, { clothUrl: T + "woman/cloth5/body.png", clothPosition: { x: -20, y: 90 }, part: [
                    [T + "woman/cloth5/left_arm.png", T + "woman/cloth5/left_hand.png"],
                    [T + "woman/cloth5/right_arm.png", T + "woman/cloth5/right_hand.png"],
                    [T + "woman/cloth5/left_leg.png", 0],
                    [T + "woman/cloth5/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 22, y: -2 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } } }] }, { clothUrl: T + "woman/cloth6/body.png", clothPosition: { x: -4, y: 91 }, part: [
                    [T + "woman/cloth6/left_arm.png", 0],
                    [T + "woman/cloth6/right_arm.png", 0],
                    [T + "woman/cloth6/left_leg.png", 0],
                    [T + "woman/cloth6/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 19, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -2, y: -3 } } }, { bone1: { position: { x: -2, y: -3 } } }] }, { clothUrl: T + "woman/cloth7/body.png", clothPosition: { x: -8, y: 91 }, part: [
                    [T + "woman/cloth7/left_arm.png", T + "woman/cloth7/left_hand.png"],
                    [T + "woman/cloth7/right_arm.png", T + "woman/cloth7/right_hand.png"],
                    [T + "woman/cloth7/left_leg.png", T + "woman/cloth7/left_foot.png"],
                    [T + "woman/cloth7/right_leg.png", T + "woman/cloth7/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: 19, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: -1, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: 19, y: -2 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 18, y: -2 } } }] }, { clothUrl: T + "woman/cloth8/body.png", clothPosition: { x: -5, y: 87 }, part: [
                    [T + "woman/cloth8/left_arm.png", T + "woman/cloth8/left_hand.png"],
                    [T + "woman/cloth8/right_arm.png", T + "woman/cloth8/right_hand.png"],
                    [T + "woman/cloth8/left_leg.png", 0],
                    [T + "woman/cloth8/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -1, y: -6 } }, bone2: { position: { x: 30, y: -3 } } }, { bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: -2, y: -3 } } }, { bone1: { position: { x: -16, y: -1 } } }, { bone1: { position: { x: 0, y: -1 } } }] }, { clothUrl: T + "woman/cloth9/body.png", clothPosition: { x: -3, y: 91 }, part: [
                    [T + "woman/cloth9/left_arm.png", T + "woman/cloth9/left_hand.png"],
                    [T + "woman/cloth9/right_arm.png", T + "woman/cloth9/right_hand.png"],
                    [T + "woman/cloth9/left_leg.png", T + "woman/cloth9/left_foot.png"],
                    [T + "woman/cloth9/right_leg.png", T + "woman/cloth9/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: 40, y: -3 } } }, { bone1: { position: { x: -4, y: -2 } }, bone2: { position: { x: -3, y: -3 } } }, { bone1: { position: { x: -3, y: -4 } }, bone2: { position: { x: 16, y: -4 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 15, y: -4 } } }] }], oo = [{ clothUrl: T + "woman_back/cloth.png", clothPosition: { x: 11, y: 92 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { hatUrl: T + "woman_back/cloth1/hat.png", hatPosition: { x: -20, y: -10 }, clothUrl: T + "woman_back/cloth1/body.png", clothPosition: { x: -10, y: 58 }, part: [
                    [T + "woman_back/cloth1/left_arm.png", T + "woman_back/cloth1/left_hand.png"],
                    [T + "woman_back/cloth1/right_arm.png", T + "woman_back/cloth1/right_hand.png"],
                    [T + "woman_back/cloth1/left_leg.png", T + "woman_back/cloth1/left_foot.png"],
                    [T + "woman_back/cloth1/right_leg.png", T + "woman_back/cloth1/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: -4, y: -2 } } }, { bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -3, y: -25 } }, bone2: { position: { x: 16, y: -22 } } }, { bone1: { position: { x: -2, y: -25 } }, bone2: { position: { x: 16, y: -22 } } }] }, { clothUrl: T + "woman_back/cloth2/body.png", clothPosition: { x: -7, y: 92 }, part: [
                    [T + "woman_back/cloth2/left_arm.png", T + "woman_back/cloth2/left_hand.png"],
                    [T + "woman_back/cloth2/right_arm.png", T + "woman_back/cloth2/right_hand.png"],
                    [T + "woman_back/cloth2/left_leg.png", T + "woman_back/cloth2/left_foot.png"],
                    [T + "woman_back/cloth2/right_leg.png", T + "woman_back/cloth2/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: 32, y: -3 } } }, { bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: -17, y: -3 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 18, y: -3 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 18, y: -3 } } }] }, { clothUrl: T + "woman_back/cloth3/body.png", clothPosition: { x: -2, y: 92 }, part: [
                    [0, 0],
                    [0, 0],
                    [T + "woman_back/cloth3/left_leg.png", 0],
                    [T + "woman_back/cloth3/right_leg.png", 0]
                ], bones: [0, 0, { bone1: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -2, y: -3 } } }] }, { hatUrl: T + "woman_back/cloth4/hat.png", hatPosition: { x: -20, y: -24 }, clothUrl: T + "woman_back/cloth4/body.png", clothPosition: { x: -14, y: 94 }, part: [
                    [T + "woman_back/cloth4/left_arm.png", T + "woman_back/cloth4/left_hand.png"],
                    [T + "woman_back/cloth4/right_arm.png", T + "woman_back/cloth4/right_hand.png"],
                    [T + "woman_back/cloth4/left_leg.png", T + "woman_back/cloth4/left_foot.png"],
                    [T + "woman_back/cloth4/right_leg.png", T + "woman_back/cloth4/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -6, y: -2 } }, bone2: { position: { x: 14, y: -3 } } }, { bone1: { position: { x: -5, y: -1 } }, bone2: { position: { x: -12, y: -2 } } }, { bone1: { position: { x: -3, y: -1 } }, bone2: { position: { x: 19, y: -2 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 19, y: -2 } } }] }, { clothUrl: T + "woman_back/cloth5/body.png", clothPosition: { x: -20, y: 90 }, part: [
                    [T + "woman_back/cloth5/left_arm.png", T + "woman_back/cloth5/left_hand.png"],
                    [T + "woman_back/cloth5/right_arm.png", T + "woman_back/cloth5/right_hand.png"],
                    [T + "woman_back/cloth5/left_leg.png", 0],
                    [T + "woman_back/cloth5/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 22, y: -2 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } } }] }, { clothUrl: T + "woman_back/cloth6/body.png", clothPosition: { x: -4, y: 92 }, part: [
                    [T + "woman_back/cloth6/left_arm.png", 0],
                    [T + "woman_back/cloth6/right_arm.png", 0],
                    [T + "woman_back/cloth6/left_leg.png", 0],
                    [T + "woman_back/cloth6/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 19, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -2, y: -3 } } }, { bone1: { position: { x: -2, y: -3 } } }] }, { clothUrl: T + "woman_back/cloth7/body.png", clothPosition: { x: -8, y: 92 }, part: [
                    [T + "woman_back/cloth7/left_arm.png", T + "woman_back/cloth7/left_hand.png"],
                    [T + "woman_back/cloth7/right_arm.png", T + "woman_back/cloth7/right_hand.png"],
                    [T + "woman_back/cloth7/left_leg.png", T + "woman_back/cloth7/left_foot.png"],
                    [T + "woman_back/cloth7/right_leg.png", T + "woman_back/cloth7/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: 19, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: -1, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: 19, y: -2 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 18, y: -2 } } }] }, { clothUrl: T + "woman_back/cloth8/body.png", clothPosition: { x: -5, y: 89 }, part: [
                    [T + "woman_back/cloth8/left_arm.png", T + "woman_back/cloth8/left_hand.png"],
                    [T + "woman_back/cloth8/right_arm.png", T + "woman_back/cloth8/right_hand.png"],
                    [T + "woman_back/cloth8/left_leg.png", 0],
                    [T + "woman_back/cloth8/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -1, y: -6 } }, bone2: { position: { x: 30, y: -3 } } }, { bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: -2, y: -3 } } }, { bone1: { position: { x: -16, y: -1 } } }, { bone1: { position: { x: 0, y: -1 } } }] }, { clothUrl: T + "woman_back/cloth9/body.png", clothPosition: { x: -1, y: 93 }, part: [
                    [T + "woman_back/cloth9/left_arm.png", T + "woman_back/cloth9/left_hand.png"],
                    [T + "woman_back/cloth9/right_arm.png", T + "woman_back/cloth9/right_hand.png"],
                    [T + "woman_back/cloth9/left_leg.png", T + "woman_back/cloth9/left_foot.png"],
                    [T + "woman_back/cloth9/right_leg.png", T + "woman_back/cloth9/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: 40, y: -3 } } }, { bone1: { position: { x: -4, y: -2 } }, bone2: { position: { x: -3, y: -3 } } }, { bone1: { position: { x: -3, y: -4 } }, bone2: { position: { x: 16, y: -4 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: 15, y: -4 } } }] }], to = [{ clothUrl: T + "woman_right/cloth.png", clothPosition: { x: 0, y: 90 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { hatUrl: T + "woman_right/cloth1/hat.png", hatPosition: { x: -13, y: -15 }, clothUrl: T + "woman_right/cloth1/body.png", clothPosition: { x: 6, y: 89 }, part: [
                    [T + "woman_right/cloth1/left_arm.png", T + "woman_right/cloth1/left_hand.png"],
                    [T + "woman_right/cloth1/right_arm.png", T + "woman_right/cloth1/right_hand.png"],
                    [T + "woman_right/cloth1/left_leg.png", T + "woman_right/cloth1/left_foot.png"],
                    [T + "woman_right/cloth1/right_leg.png", T + "woman_right/cloth1/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -4 } }, bone2: { position: { x: -4, y: -4 } } }, { bone1: { position: { x: -4, y: -4 } }, bone2: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -2, y: -1 } }, bone2: { position: { x: -3, y: -3 } } }, { bone1: { position: { x: -3, y: -0 } }, bone2: { position: { x: -3, y: -4 } } }] }, { clothUrl: T + "woman_right/cloth2/body.png", clothPosition: { x: 9, y: 87 }, part: [
                    [T + "woman_right/cloth2/left_arm.png", T + "woman_right/cloth2/left_hand.png"],
                    [T + "woman_right/cloth2/right_arm.png", T + "woman_right/cloth2/right_hand.png"],
                    [T + "woman_right/cloth2/left_leg.png", T + "woman_right/cloth2/left_foot.png"],
                    [T + "woman_right/cloth2/right_leg.png", T + "woman_right/cloth2/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -5 } }, bone2: { position: { x: -3, y: -4 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: -4, y: -4 } } }, { bone1: { position: { x: -1, y: -2 } }, bone2: { position: { x: -3, y: -4 } } }] }, { clothUrl: T + "woman_right/cloth3/body.png", clothPosition: { x: -4, y: 94 }, part: [
                    [0, 0],
                    [0, 0],
                    [T + "woman_right/cloth3/left_leg.png", 0],
                    [T + "woman_right/cloth3/right_leg.png", 0]
                ], bones: [0, 0, { bone1: { position: { x: -3, y: 7 } } }, { bone1: { position: { x: -3, y: 1 } } }] }, { hatUrl: T + "woman_right/cloth4/hat.png", hatPosition: { x: -10, y: -16 }, clothUrl: T + "woman_right/cloth4/body.png", clothPosition: { x: 8, y: 91 }, part: [
                    [T + "woman_right/cloth4/left_arm.png", T + "woman_right/cloth4/left_hand.png"],
                    [T + "woman_right/cloth4/right_arm.png", T + "woman_right/cloth4/right_hand.png"],
                    [T + "woman_right/cloth4/left_leg.png", T + "woman_right/cloth4/left_foot.png"],
                    [T + "woman_right/cloth4/right_leg.png", T + "woman_right/cloth4/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -3, y: -4 } }, bone2: { position: { x: -3, y: -2 } } }, { bone1: { position: { x: -3, y: 0 } }, bone2: { position: { x: -3, y: -4 } } }, { bone1: { position: { x: -3, y: 0 } }, bone2: { position: { x: -3, y: -11 } } }] }, { clothUrl: T + "woman_right/cloth5/body.png", clothPosition: { x: 0, y: 84 }, part: [
                    [T + "woman_right/cloth5/left_arm.png", T + "woman_right/cloth5/left_hand.png"],
                    [T + "woman_right/cloth5/right_arm.png", T + "woman_right/cloth5/right_hand.png"],
                    [T + "woman_right/cloth5/left_leg.png", 0],
                    [T + "woman_right/cloth5/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: -2, y: -4 } } }, { bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: -2, y: -1 } } }, { bone1: { position: { x: -2, y: 2 } } }, { bone1: { position: { x: -2, y: 5 } } }] }, { clothUrl: T + "woman_right/cloth6/body.png", clothPosition: { x: 9, y: 89 }, part: [
                    [T + "woman_right/cloth6/left_arm.png", 0],
                    [T + "woman_right/cloth6/right_arm.png", 0],
                    [T + "woman_right/cloth6/left_leg.png", 0],
                    [T + "woman_right/cloth6/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -1, y: -2 } } }, { bone1: { position: { x: -1, y: -4 } } }, { bone1: { position: { x: -4, y: 0 } } }, { bone1: { position: { x: -3, y: 3 } } }] }, {
                clothUrl: T + "woman_right/cloth7/body.png",
                clothPosition: { x: 9, y: 89 },
                part: [
                    [T + "woman_right/cloth7/left_arm.png", T + "woman_right/cloth7/left_hand.png"],
                    [T + "woman_right/cloth7/right_arm.png", T + "woman_right/cloth7/right_hand.png"],
                    [T + "woman_right/cloth7/left_leg.png", T + "woman_right/cloth7/left_foot.png"],
                    [T + "woman_right/cloth7/right_leg.png", T + "woman_right/cloth7/right_foot.png"]
                ],
                bones: [{ bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: -3, y: -3 } } }, { bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: -4, y: -4 } } }, { bone1: { position: { x: -5, y: 2 } }, bone2: { position: { x: -3, y: -3 } } }, { bone1: { position: { x: 0, y: 2 } }, bone2: { position: { x: -3, y: -3 } } }]
            }, { clothUrl: T + "woman_right/cloth8/body.png", clothPosition: { x: 8, y: 89 }, part: [
                    [T + "woman_right/cloth8/left_arm.png", T + "woman_right/cloth8/left_hand.png"],
                    [T + "woman_right/cloth8/right_arm.png", T + "woman_right/cloth8/right_hand.png"],
                    [T + "woman_right/cloth8/left_leg.png", 0],
                    [T + "woman_right/cloth8/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -2, y: -3 } }, bone2: { position: { x: -2, y: -2 } } }, { bone1: { position: { x: -2, y: -4 } }, bone2: { position: { x: -2, y: 0 } } }, { bone1: { position: { x: -4, y: 9 } } }, { bone1: { position: { x: -2, y: 8 } } }] }, { clothUrl: T + "woman_right/cloth9/body.png", clothPosition: { x: 8, y: 93 }, part: [
                    [T + "woman_right/cloth9/left_arm.png", T + "woman_right/cloth9/left_hand.png"],
                    [T + "woman_right/cloth9/right_arm.png", T + "woman_right/cloth9/right_hand.png"],
                    [T + "woman_right/cloth9/left_leg.png", T + "woman_right/cloth9/left_foot.png"],
                    [T + "woman_right/cloth9/right_leg.png", T + "woman_right/cloth9/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -8 } }, bone2: { position: { x: -1, y: -3 } } }, { bone1: { position: { x: -8, y: -5 } }, bone2: { position: { x: -7, y: -4 } } }, { bone1: { position: { x: -3, y: 0 } }, bone2: { position: { x: -3, y: -3 } } }, { bone1: { position: { x: -3, y: 2 } }, bone2: { position: { x: -4, y: -5 } } }] }], no = [{ clothUrl: T + "woman_left/cloth.png", clothPosition: { x: 28, y: 90 }, part: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                ] }, { hatUrl: T + "woman_left/cloth1/hat.png", hatPosition: { x: -8, y: -15 }, clothUrl: T + "woman_left/cloth1/body.png", clothPosition: { x: -5, y: 89 }, part: [
                    [T + "woman_left/cloth1/left_arm.png", T + "woman_left/cloth1/left_hand.png"],
                    [T + "woman_left/cloth1/right_arm.png", T + "woman_left/cloth1/right_hand.png"],
                    [T + "woman_left/cloth1/left_leg.png", T + "woman_left/cloth1/left_foot.png"],
                    [T + "woman_left/cloth1/right_leg.png", T + "woman_left/cloth1/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -2, y: -4 } }, bone2: { position: { x: -17, y: -2 } } }, { bone1: { position: { x: -5, y: -4 } }, bone2: { position: { x: -14, y: -4 } } }, { bone1: { position: { x: -3, y: -0 } }, bone2: { position: { x: 18, y: -4 } } }, { bone1: { position: { x: -3, y: -1 } }, bone2: { position: { x: -6, y: -3 } } }] }, { clothUrl: T + "woman_left/cloth2/body.png", clothPosition: { x: -12, y: 87 }, part: [
                    [T + "woman_left/cloth2/left_arm.png", T + "woman_left/cloth2/left_hand.png"],
                    [T + "woman_left/cloth2/right_arm.png", T + "woman_left/cloth2/right_hand.png"],
                    [T + "woman_left/cloth2/left_leg.png", T + "woman_left/cloth2/left_foot.png"],
                    [T + "woman_left/cloth2/right_leg.png", T + "woman_left/cloth2/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 37, y: -2 } } }, { bone1: { position: { x: -5, y: -5 } }, bone2: { position: { x: 30, y: -4 } } }, { bone1: { position: { x: -3, y: -2 } }, bone2: { position: { x: 37, y: -4 } } }, { bone1: { position: { x: -2, y: -2 } }, bone2: { position: { x: 7, y: -4 } } }] }, { clothUrl: T + "woman_left/cloth3/body.png", clothPosition: { x: -4, y: 94 }, part: [
                    [0, 0],
                    [0, 0],
                    [T + "woman_left/cloth3/left_leg.png", 0],
                    [T + "woman_left/cloth3/right_leg.png", 0]
                ], bones: [0, 0, { bone1: { position: { x: 10, y: 1 } } }, { bone1: { position: { x: -1, y: 7 } } }] }, { hatUrl: T + "woman_left/cloth4/hat.png", hatPosition: { x: -9, y: -16 }, clothUrl: T + "woman_left/cloth4/body.png", clothPosition: { x: -5, y: 91 }, part: [
                    [T + "woman_left/cloth4/left_arm.png", T + "woman_left/cloth4/left_hand.png"],
                    [T + "woman_left/cloth4/right_arm.png", T + "woman_left/cloth4/right_hand.png"],
                    [T + "woman_left/cloth4/left_leg.png", T + "woman_left/cloth4/left_foot.png"],
                    [T + "woman_left/cloth4/right_leg.png", T + "woman_left/cloth4/right_foot.png"]
                ], bones: [{ bone1: { position: { x: 4, y: -4 } }, bone2: { position: { x: 15, y: -2 } } }, { bone1: { position: { x: -6, y: -3 } }, bone2: { position: { x: 26, y: -1 } } }, { bone1: { position: { x: -3, y: 0 } }, bone2: { position: { x: 40, y: -11 } } }, { bone1: { position: { x: -2, y: 0 } }, bone2: { position: { x: 11, y: -4 } } }] }, { clothUrl: T + "woman_left/cloth5/body.png", clothPosition: { x: -4, y: 84 }, part: [
                    [T + "woman_left/cloth5/left_arm.png", T + "woman_left/cloth5/left_hand.png"],
                    [T + "woman_left/cloth5/right_arm.png", T + "woman_left/cloth5/right_hand.png"],
                    [T + "woman_left/cloth5/left_leg.png", 0],
                    [T + "woman_left/cloth5/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 38, y: -1 } } }, { bone1: { position: { x: -4, y: -3 } }, bone2: { position: { x: 31, y: -4 } } }, { bone1: { position: { x: 8, y: 5 } } }, { bone1: { position: { x: 2, y: 2 } } }] }, { clothUrl: T + "woman_left/cloth6/body.png", clothPosition: { x: -3, y: 89 }, part: [
                    [T + "woman_left/cloth6/left_arm.png", 0],
                    [T + "woman_left/cloth6/right_arm.png", 0],
                    [T + "woman_left/cloth6/left_leg.png", 0],
                    [T + "woman_left/cloth6/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: 38, y: -4 } } }, { bone1: { position: { x: 31, y: -2 } } }, { bone1: { position: { x: -1, y: 3 } } }, { bone1: { position: { x: -1, y: 0 } } }] }, { clothUrl: T + "woman_left/cloth7/body.png", clothPosition: { x: -4, y: 89 }, part: [
                    [T + "woman_left/cloth7/left_arm.png", T + "woman_left/cloth7/left_hand.png"],
                    [T + "woman_left/cloth7/right_arm.png", T + "woman_left/cloth7/right_hand.png"],
                    [T + "woman_left/cloth7/left_leg.png", T + "woman_left/cloth7/left_foot.png"],
                    [T + "woman_left/cloth7/right_leg.png", T + "woman_left/cloth7/right_foot.png"]
                ], bones: [{ bone1: { position: { x: -3, y: -3 } }, bone2: { position: { x: 32, y: -4 } } }, { bone1: { position: { x: -5, y: -3 } }, bone2: { position: { x: 24, y: -3 } } }, { bone1: { position: { x: -3, y: 2 } }, bone2: { position: { x: 36, y: -3 } } }, { bone1: { position: { x: -3, y: 2 } }, bone2: { position: { x: 6, y: -3 } } }] }, { clothUrl: T + "woman_left/cloth8/body.png", clothPosition: { x: -4, y: 89 }, part: [
                    [T + "woman_left/cloth8/left_arm.png", T + "woman_left/cloth8/left_hand.png"],
                    [T + "woman_left/cloth8/right_arm.png", T + "woman_left/cloth8/right_hand.png"],
                    [T + "woman_left/cloth8/left_leg.png", 0],
                    [T + "woman_left/cloth8/right_leg.png", 0]
                ], bones: [{ bone1: { position: { x: -4, y: -4 } }, bone2: { position: { x: 38, y: 0 } } }, { bone1: { position: { x: -5, y: -3 } }, bone2: { position: { x: 28, y: -2 } } }, { bone1: { position: { x: 1, y: 8 } } }, { bone1: { position: { x: -7, y: 9 } } }] }, { clothUrl: T + "woman_left/cloth9/body.png", clothPosition: { x: -3, y: 93 }, part: [
                    [T + "woman_left/cloth9/left_arm.png", T + "woman_left/cloth9/left_hand.png"],
                    [T + "woman_left/cloth9/right_arm.png", T + "woman_left/cloth9/right_hand.png"],
                    [T + "woman_left/cloth9/left_leg.png", T + "woman_left/cloth9/left_foot.png"],
                    [T + "woman_left/cloth9/right_leg.png", T + "woman_left/cloth9/right_foot.png"]
                ], bones: [{ bone1: { position: { x: 3, y: -5 } }, bone2: { position: { x: 44, y: -4 } } }, { bone1: { position: { x: -7, y: -8 } }, bone2: { position: { x: 35, y: -3 } } }, { bone1: { position: { x: -3, y: 2 } }, bone2: { position: { x: 41, y: -5 } } }, { bone1: { position: { x: -2, y: 0 } }, bone2: { position: { x: 9, y: -3 } } }] }], io = [{ position: { x: 14, y: 35 } }, { position: { x: 11, y: 35 } }, { position: { x: 10, y: 35 } }, { position: { x: 1, y: 34 } }, { position: { x: 11, y: 36 } }, { position: { x: 5, y: 27 } }, { position: { x: -74, y: -141 } }], eo = 0; eo < 7; eo++) io[eo].url = T + "man/face" + (eo + 1) + ".png";
        for (var ao = [{ position: { x: 10, y: 0 } },{ position: { x: 20, y: 0 } },{ position: { x: 10, y: 0 } },{ position: { x: 15, y: 0 } },{ position: { x: 20, y: 0 } },{ position: { x: 15, y: 0 } },{ position: { x: 20, y: 0 } },{ position: { x: 25, y: 0 } },{ position: { x: 20, y: 0 } },{ position: { x: 25, y: -5 } },{ position: { x: 5, y: -5 } },{ position: { x: 15, y: -5 } },{ position: { x: 10, y: -5 } },{ position: { x: 15, y: -5 } },{ position: { x: 10, y: 0 } },{ position: { x: 10, y: 0 } },{ position: { x: 20, y: 0 } },{ position: { x: 15, y: 0 } },{ position: { x: 5, y: -5 } },{ position: { x: 10, y: 0 } },{ position: { x: 15, y: 5 } },{ position: { x: 20, y: 0 } },{ position: { x: 5, y: 0 } },{ position: { x: 10, y: 0 } },{ position: { x: 15, y: 0 } },{ position: { x: 10, y: 0 } },{ position: { x: 10, y: 0 } },{ position: { x: 25, y: 0 } },{ position: { x: 20, y: -5 } },{ position: { x: 20, y: 0 } },{ position: { x: 20, y: 0 } },{ position: { x: 15, y: 0 } },{ position: { x: 20, y: 0 } },{ position: { x: 15, y: 0 } },{ position: { x: 10, y: 0 } }], eo = 0; eo < 35; eo++) ao[eo].url = T + "man/hair/" + (eo + 1) + ".png";
        for (var lo = [], ho = [{ position: { x: 2, y: -8 } }, { position: { x: -2, y: -16 } }, { position: { x: 0, y: -16 } }, { position: { x: -3, y: -29 } }, { position: { x: 2, y: -20 } }, { position: { x: -4, y: -17 } }, { position: { x: -1, y: -13 } }, { position: { x: -1, y: -14 } }, { position: { x: -1, y: -11 } }, { position: { x: 2, y: -11 } }, { position: { x: -2, y: -16 } }, { position: { x: -2, y: -22 } }, { position: { x: -12, y: -18 } }, { position: { x: -4, y: -17 } }], eo = 0; eo < 14; eo++) ho[eo].url = T + "man_back/hair" + (eo + 1) + ".png", lo.push(!1);
        for (var po = [{ position: { x: 38, y: 41 } }, { position: { x: 37, y: 34 } }, { position: { x: 32, y: 41 } }, { position: { x: 32, y: 42 } }, { position: { x: 37, y: 42 } }, { position: { x: 10, y: 25 } }, { position: { x: -59, y: -149 } }], eo = 0; eo < 7; eo++) po[eo].url = T + "man_right/face" + (eo + 1) + ".png";
        for (var so = [{ position: { x: -1, y: -3 } }, { position: { x: -14, y: -13 } }, { position: { x: -10, y: -11 } }, { position: { x: -13, y: -21 } }, { position: { x: -7, y: -17 } }, { position: { x: -13, y: -13 } }, { position: { x: -9, y: -8 } }, { position: { x: -8, y: -11 } }, { position: { x: -12, y: -13 } }, { position: { x: -13, y: -12 } }, { position: { x: -8, y: -7 } }, { position: { x: -13, y: -9 } }, { position: { x: -18, y: -14 } }, { position: { x: -16, y: -15 } }], eo = 0; eo < 14; eo++) so[eo].url = T + "man_right/hair" + (eo + 1) + ".png";
        for (var ro = [{ position: { x: 12, y: 41 } }, { position: { x: -25, y: 34 } }, { position: { x: 11, y: 41 } }, { position: { x: -15, y: 42 } }, { position: { x: 6, y: 42 } }, { position: { x: 5, y: 25 } }, { position: { x: -93, y: -149 } }], eo = 0; eo < 7; eo++) ro[eo].url = T + "man_left/face" + (eo + 1) + ".png";
        for (var go = [{ position: { x: 10, y: -3 } }, { position: { x: 8, y: -13 } }, { position: { x: 4, y: -11 } }, { position: { x: 8, y: -21 } }, { position: { x: 10, y: -17 } }, { position: { x: 3, y: -13 } }, { position: { x: 8, y: -8 } }, { position: { x: 4, y: -11 } }, { position: { x: 1, y: -13 } }, { position: { x: 14, y: -12 } }, { position: { x: 0, y: -7 } }, { position: { x: 7, y: -9 } }, { position: { x: 3, y: -14 } }, { position: { x: 1, y: -15 } }], eo = 0; eo < 14; eo++) go[eo].url = T + "man_left/hair" + (eo + 1) + ".png";
        for (var co = [{ position: { x: 13, y: 36 } }, { position: { x: 14, y: 36 } }, { position: { x: 13, y: 36 } }, { position: { x: 4, y: 36 } }, { position: { x: 13, y: 36 } }, { position: { x: 8, y: 28 } }, { position: { x: -70, y: -141 } }], eo = 0; eo < 7; eo++) co[eo].url = T + "man/face" + (eo + 1) + ".png";
        for (var _o = [{ position: { x: -12, y: -8 } }, { position: { x: -10, y: -14 } }, { position: { x: -9, y: -9 } }, { position: { x: -16, y: -7 } }, { position: { x: -2, y: -5 } }, { position: { x: -4, y: -10 } }, { position: { x: 0, y: -16 } }, { position: { x: -3, y: -7 } }, { position: { x: -5, y: -6 } }, { position: { x: -11, y: -18 } }, { position: { x: -12, y: -14 } }, { position: { x: -12, y: -11 } }, { position: { x: 3, y: -27 } }, { position: { x: -5.5, y: -7 } }], eo = 0; eo < 14; eo++) _o[eo].url = T + "woman/hair" + (eo + 1) + ".png";
        for (var yo = [], xo = [{ position: { x: -10, y: -8 } }, { position: { x: -5, y: -15 } }, { position: { x: -11, y: -5 } }, { position: { x: -14, y: -3 } }, { position: { x: -1, y: -2 } }, { position: { x: -5, y: -8 } }, { position: { x: -20, y: -17 } }, { position: { x: -8, y: -5 } }, { position: { x: -7, y: -7 } }, { position: { x: -17, y: -15 } }, { position: { x: -14, y: -12 } }, { position: { x: -8, y: -9 } }, { position: { x: 4, y: -27 } }, { position: { x: -4, y: -8 } }], eo = 0; eo < 14; eo++) xo[eo].url = T + "woman_back/hair" + (eo + 1) + ".png", yo.push(!1);
        for (var mo = [{ position: { x: 48, y: 38 } }, { position: { x: 44, y: 29 } }, { position: { x: 43, y: 39 } }, { position: { x: 41, y: 35 } }, { position: { x: 45, y: 39 } }, { position: { x: 27, y: 26 } }, { position: { x: -46, y: -150 } }], eo = 0; eo < 7; eo++) mo[eo].url = T + "woman_right/face" + (eo + 1) + ".png";
        for (var bo = [{ position: { x: -8, y: -8 } }, { position: { x: -14, y: -5 } }, { position: { x: -15, y: -8 } }, { position: { x: -16, y: -12 } }, { position: { x: -13, y: -8 } }, { position: { x: -12, y: -11 } }, { position: { x: -10, y: -8 } }, { position: { x: -6, y: -2 } }, { position: { x: -12, y: -7 } }, { position: { x: -16, y: -9 } }, { position: { x: -16, y: -9 } }, { position: { x: -20, y: -10 } }, { position: { x: -7, y: -22 } }, { position: { x: -18, y: -7 } }], eo = 0; eo < 14; eo++) bo[eo].url = T + "woman_right/hair" + (eo + 1) + ".png";
        for (var fo = [{ position: { x: 5, y: 41 } }, { position: { x: -31, y: 29 } }, { position: { x: 3, y: 39 } }, { position: { x: -24, y: 39 } }, { position: { x: -4, y: 39 } }, { position: { x: -2, y: 27 } }, { position: { x: -100, y: -150 } }], eo = 0; eo < 7; eo++) fo[eo].url = T + "woman_left/face" + (eo + 1) + ".png";
        for (var wo = [{ position: { x: 3, y: -8 } }, { position: { x: -15, y: -15 } }, { position: { x: -15, y: -8 } }, { position: { x: 3, y: -12 } }, { position: { x: 3, y: -8 } }, { position: { x: 9, y: -11 } }, { position: { x: -29, y: -8 } }, { position: { x: -14, y: -2 } }, { position: { x: 10, y: -7 } }, { position: { x: -3, y: -9 } }, { position: { x: -16, y: -9 } }, { position: { x: -11, y: -9 } }, { position: { x: 2, y: -22 } }, { position: { x: -18, y: -7 } }], eo = 0; eo < 14; eo++) wo[eo].url = T + "woman_left/hair" + (eo + 1) + ".png";
        var vo = [Q, Y, V, K],
            uo = [io, ro, po, lo],
            Po = [ao, go, so, ho],
            ko = [$, no, to, oo],
            Co = [co, fo, mo, yo],
            Io = [_o, wo, bo, xo];
        i(-1);
        Uo = [T + "images/bg1.png", T + "images/bg2.png", T + "images/bg3.png", T + "images/bg4.png", T + "images/bg5.png", T + "images/bg6.png", T + "images/bg7.png", T + "images/bg8.png", T + "images/bg9.png"],
            To = ['',T + "tool/1.png",T + "tool/2.png",T + "tool/3.png",T + "tool/4.png",T + "tool/5.png",T + "tool/6.png",T + "tool/7.png",T + "tool/8.png",T + "tool/9.png",T + "tool/10.png",T + "tool/11.png",T + "tool/12.png",T + "tool/13.png",T + "tool/14.png",T + "tool/15.png",T + "tool/16.png",T + "tool/17.png",T + "tool/18.png",T + "tool/19.png",T + "tool/20.png",T + "tool/21.png",T + "tool/22.png",T + "tool/23.png",T + "tool/24.png",T + "tool/25.png",T + "tool/26.png",T + "tool/27.png",T + "tool/28.png"],
            So = 0;
        o(".scroll_bar ul li").bind("click", function() { 
//            if (!o(this).hasClass("selected")) { o(".select_main").hasClass("close") && o(".select_main").removeClass("close"), o(".selected").removeClass("selected"), o(this).addClass("selected"); var t = o(this).index();
//                So = t; var n = B[B.length - 1];
//                n && (t > 0 && t < 5 && (n.currentSelectIndex = t), l(n)), o(".select_item").hide(), o(".select_item").eq(t).show(), o(".black_icon").css({ left: 250 * t }), t > 3 ? o(".scroll_bar").animate({ scrollLeft: "54px" }, 300) : o(".scroll_bar").animate({ scrollLeft: "0px" }, 300) } 
        }), o(".arrow_bg").bind("click", function() { o(".select_main").hasClass("close") ? (o(".select_main").removeClass("close"), o(".black_icon").show()) : (o(".select_main").addClass("close"), o(".black_icon").hide()) }), o(".select_people li").bind("click", function() { var t = o(this).index(); if (o(".select_guide").hide(), o(".save").hide(), o(".select_people li").removeClass("active"), o(this).addClass("active"), 0 == E.children.length) { var i = n(t);
                E.addChild(i) } else if (1 == E.children.length) { var e = E.children[0];
                O.addChild(e), e.chosen = !1, e.outline.visible = !1, E.removeChildren(); var i = n(t);
                E.addChild(i) }
            setTimeout(function() { o(".select_people li").eq(t).removeClass("active") }, 300) }), o(".man_facingTo li").bind("click", function() { var t = B[B.length - 1];
            w(t); var n = o(this).index();
            o(".man_facingTo li").removeClass("active"), o(this).addClass("active"), a(t, n) }), o(".woman_facingTo li").bind("click", function() { var t = B[B.length - 1];
            w(t); var n = o(this).index();
            o(".woman_facingTo li").removeClass("active"), o(this).addClass("active"), a(t, n) }), o(".man_cloth li").bind("click", function() { var t = B[B.length - 1];
            w(t); var n = o(this).index();
            t.clothIndex = n, o(".man_cloth li").removeClass("active"), o(this).addClass("active"), c(t), g(t, vo[t.facingTo][n]), f(o(this)) }), o(".woman_cloth li").bind("click", function() { var t = B[B.length - 1];
            w(t); var n = o(this).index();
            t.clothIndex = n, o(".woman_cloth li").removeClass("active"), o(this).addClass("active"), c(t), g(t, ko[t.facingTo][n]), f(o(this)) }), o(".man_face li").bind("click", function() { var t = B[B.length - 1];
            w(t); var n = o(this).index();
            o(".man_face li").removeClass("active"), o(this).addClass("active"), h(t, n), f(o(this)) }), 
            
            o(".man_hair li").bind("click", function() {var t = B[B.length - 1];
            w(t); var n = o(this).index();
            o(".man_hair li").removeClass("active"), o(this).addClass("active"), p(t, n), f(o(this)) }), 
            
            o(".woman_hair li").bind("click", function() { var t = B[B.length - 1];
            w(t); var n = o(this).index();
                                                          
            o(".woman_hair li").removeClass("active"), o(this).addClass("active"), p(t, n), f(o(this)) }), 
            
            o(".room li").bind("click", function() {o(".save").show(); var i = o(this).index();
            o(".room li").removeClass("active"), o(this).addClass("active"),t(),s(i)}), 
            
            
            o(".others li").bind("click", function() { o(".save").show(); var t = o(this).index();
            o(".others li").removeClass("active"), o(this).addClass("active"), r(t + 1), setTimeout(function() { o(".others li").eq(t).removeClass("active") }, 300), f(o(this)) }), o(".start").bind("click", function() { o(".first_page").fadeOut(300), o(".sleeping_content").show() }), o(".guide").bind("click", function() { o(".guide").fadeOut(300) }), U && o(".select").addClass("iphoneX"), o(".man_cloth,.woman_cloth").width(4600),
            o(".saveHidden").bind("click", function() { 
                if (o(".select").hide(), 
//                    new TWEEN.Tween(G.scale).to({ x: .933, y: .933 }, 200).onUpdate(function() { G.position.set((1 - this.x) / .067 * 25, (1 - this.x) / .067 * 25) }).start(), 
                    0 != E.children.length)
                for (var t = 0; t < E.children.length; t++) { var n = E.children[t];
                    n.chosen = !1, n.outline.visible = !1, O.addChild(n), E.removeChild(n), e(-1) }
            
            F.visible = !0, setTimeout(function() { setTimeout(function() { var t = convertCanvasToImage(o("canvas")[0]);
                                                                           comiAttr.push(t);
                                                                           o('.room li').eq(firstRoom).click();
//                    o(".result_img").append(t), o(".result_img").show(), o(".saved_img").append(t), o(".saved_img").show(), setTimeout(function() { I && C ? o(".a_saved_guide").fadeIn(300) : o(".saved_guide").fadeIn(300), setTimeout(function() { I && C ? o(".a_saved_guide").fadeOut(300) : o(".saved_guide").fadeOut(300) }, 3e3) }, 500) 
                                                                          }, 30) }, 200) })
    }(jQuery)
}(), Array.prototype.indexOf = function(o) { for (var t = 0; t < this.length; t++)
        if (this[t] == o) return t;
    return -1 }, Array.prototype.remove = function(o) { var t = this.indexOf(o);
    t > -1 && this.splice(t, 1) };


//function start2(){
//    if($('.slo').hasClass('slo2')){
//        var pn=$.trim($('.pn input').val());
//        var pa=$.trim($('.pa input').val());
//        if(pn==''){
//            alert('请输入作品名称');
//            return false;
//        }
//        else if(pa==''){
//            alert('请输入作者');
//            return false;
//        }else{
//            $('.first_page').fadeOut(500,function(){
//                $('.roomSel').fadeIn(500);
//            })
//            $('.pnTitle').text(pn);
//            $('.sdTitle').text(pn);
//            $('.sdName').text('作者:'+pa);
//        }
//    }else{
//     $('.slo').addClass('slo2');
//    setTimeout(function(){
//        $('.proInfo').fadeIn(500);
//    },500);
//    }
//}

function controlBgm(c) {
    if(c=='off'){
        $('.bgmControl').removeClass('bgmControlOn');
        document.getElementById('bgm').pause();
        document.cookie = "bgmState=off;path=/";
    }else if(c=='on'){
             $('.bgmControl').addClass('bgmControlOn');
            document.getElementById('bgm').play();
        document.cookie = "bgmState=on;path=/";
             }
    else if ($('.bgmControl').hasClass('bgmControlOn')) {
            $('.bgmControl').removeClass('bgmControlOn');
            document.getElementById('bgm').pause();
        document.cookie = "bgmState=off;path=/";
        }
        else{
            $('.bgmControl').addClass('bgmControlOn');
            document.getElementById('bgm').play();
            document.cookie = "bgmState=on;path=/";
        }
    }