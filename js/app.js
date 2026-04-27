 /*═══════════════════════════════════════════════════════
  ██╗   ██╗██╗██████╗ ███████╗ ██████╗
  ██║   ██║██║██╔══██╗██╔════╝██╔═══██╗
  ██║   ██║██║██║  ██║█████╗  ██║   ██║
  ╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║   ██║
   ╚████╔╝ ██║██████╔╝███████╗╚██████╔╝
    ╚═══╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝
  CONFIG — EDIT VIDEOS BELOW
═══════════════════════════════════════════════════════*/

      /* ─────────────────────────────────────────────────────
   YOUTUBE VIDEO CONFIG
   thumb : path or URL to your own thumbnail image
           e.g. "images/no-signal-thumb.jpg"
           or a full URL "https://yoursite.com/thumb.jpg"
   vid   : YouTube video ID (the part after watch?v=)
           e.g. for https://youtube.com/watch?v=ABC123xyz
           set vid: "ABC123xyz"
   featured: true = large hero video (only one)
───────────────────────────────────────────────────── */
      const VIDEOS = [
        {
          featured: true,
          title: "No Signal — Official Video",
          meta: "1.4M views · MMXXVI",
          thumb: "", // ← PASTE YOUR THUMBNAIL IMAGE PATH HERE
          vid: "dQw4w9WgXcQ", // ← PASTE YOUTUBE VIDEO ID HERE
        },
        {
          title: "Jozi After Dark",
          meta: "820K views · MMXXVI",
          thumb: "", // ← PASTE YOUR THUMBNAIL IMAGE PATH HERE
          vid: "dQw4w9WgXcQ", // ← PASTE YOUTUBE VIDEO ID HERE
        },
        {
          title: "Motion (Live Session)",
          meta: "560K views · MMXXV",
          thumb: "", // ← PASTE YOUR THUMBNAIL IMAGE PATH HERE
          vid: "dQw4w9WgXcQ", // ← PASTE YOUTUBE VIDEO ID HERE
        },
        {
          title: "Concrete (Director's Cut)",
          meta: "340K views · MMXXIV",
          thumb: "", // ← PASTE YOUR THUMBNAIL IMAGE PATH HERE
          vid: "dQw4w9WgXcQ", // ← PASTE YOUTUBE VIDEO ID HERE
        },
      ];

      /* ─── BUILD YOUTUBE PANEL ────────────────────────── */
      (function buildYT() {
        const panel = document.getElementById("ytPanel");
        const featured = VIDEOS.find((v) => v.featured);
        const cards = VIDEOS.filter((v) => !v.featured);

        // Featured
        if (featured) {
          const fw = document.createElement("div");
          fw.className = "yt-feat-wrap";
          fw.dataset.vid = featured.vid;
          fw.innerHTML = `
      <div class="yt-feat-thumb" id="ytFeatThumb">
        <div class="yt-thumb-fallback"></div>
        ${featured.thumb ? `<img class="yt-thumb-img" src="${featured.thumb}" alt="${featured.title}" onerror="this.style.display='none'"/>` : ""}
        <div class="yt-feat-overlay"><div class="yt-play-big"></div></div>
        <div class="yt-feat-bottom">
          <div class="yt-feat-lbl">Featured Visual</div>
          <div class="yt-feat-title">${featured.title}</div>
          <div class="yt-feat-stats">${featured.meta}</div>
        </div>
      </div>`;
          fw.querySelector(".yt-feat-thumb").addEventListener("click", () =>
            injectVideo(fw, featured.vid, true),
          );
          panel.appendChild(fw);
        }

        // Cards
        const grid = document.createElement("div");
        grid.className = "yt-grid";
        cards.forEach((v) => {
          const card = document.createElement("div");
          card.className = "yt-card";
          card.dataset.vid = v.vid;
          card.innerHTML = `
      <div class="yt-card-thumb">
        <div class="yt-card-fallback"></div>
        ${v.thumb ? `<img class="yt-card-img" src="${v.thumb}" alt="${v.title}" onerror="this.style.display='none'"/>` : ""}
        <div class="yt-card-play"><div class="yt-play-sm"></div></div>
      </div>
      <div class="yt-card-title">${v.title}</div>
      <div class="yt-card-meta">${v.meta}</div>`;
          card.querySelector(".yt-card-thumb").addEventListener("click", () => {
            if (card.querySelector(".yt-card-embed")) return;
            const wrap = document.createElement("div");
            wrap.className = "yt-card-embed";
            const ifr = document.createElement("iframe");
            ifr.src = `https://www.youtube-nocookie.com/embed/${v.vid}?autoplay=1&rel=0&modestbranding=1`;
            ifr.allow =
              "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture";
            ifr.allowFullscreen = true;
            wrap.appendChild(ifr);
            card.querySelector(".yt-card-thumb").appendChild(wrap);
          });
          grid.appendChild(card);
        });
        panel.appendChild(grid);
      })();

      function injectVideo(container, vid, isFeature) {
        if (container.querySelector("iframe")) return;
        const wrap = document.createElement("div");
        wrap.className = "yt-embed";
        const ifr = document.createElement("iframe");
        ifr.src = `https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1`;
        ifr.allow =
          "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture";
        ifr.allowFullscreen = true;
        wrap.appendChild(ifr);
        const closeBtn = document.createElement("div");
        closeBtn.className = "yt-close";
        closeBtn.textContent = "✕";
        closeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          wrap.remove();
        });
        wrap.appendChild(closeBtn);
        container.style.position = "relative";
        container.appendChild(wrap);
      }

      /* ─── LOADER ─────────────────────────────────────── */
      const loader = document.getElementById("loader");
      const lfBar = document.getElementById("lf");
      let prog = 0;
      const ldInt = setInterval(() => {
        prog += Math.random() * 20;
        if (prog >= 100) {
          prog = 100;
          clearInterval(ldInt);
          setTimeout(() => loader.classList.add("gone"), 280);
        }
        lfBar.style.width = prog + "%";
      }, 75);

      /* ─── GRAIN ──────────────────────────────────────── */
      (function () {
        const c = document.createElement("canvas");
        c.width = c.height = 256;
        const ctx = c.getContext("2d");
        const img = ctx.createImageData(256, 256);
        for (let i = 0; i < img.data.length; i += 4) {
          const v = (Math.random() * 255) | 0;
          img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
          img.data[i + 3] = (Math.random() * 36) | 0;
        }
        ctx.putImageData(img, 0, 0);
        document.getElementById("grain").style.backgroundImage =
          `url(${c.toDataURL()})`;
      })();

      /* ─── CURSOR ──────────────────────────────────────── */
      const cd = document.getElementById("cd"),
        cr = document.getElementById("cr");
      let mx = -100,
        my = -100,
        rx = -100,
        ry = -100,
        lastX = 0,
        lastY = 0,
        lastT = 0;
      document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        cd.style.left = mx + "px";
        cd.style.top = my + "px";
        const now = Date.now(),
          spd = Math.hypot(mx - lastX, my - lastY);
        if (spd > 20 && now - lastT > 28) {
          const cnt = Math.min(4, (spd / 12) | 0);
          for (let i = 0; i < cnt; i++) {
            const s = document.createElement("div");
            s.className = "spray";
            const sz = Math.random() * 4 + 2;
            s.style.cssText = `left:${mx + (Math.random() - 0.5) * 22}px;top:${my + (Math.random() - 0.5) * 22}px;width:${sz}px;height:${sz}px;background:${Math.random() > 0.5 ? "#C8000A" : "rgba(232,228,220,.35)"};`;
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 650);
          }
          lastT = now;
        }
        lastX = mx;
        lastY = my;
      });
      (function loop() {
        rx += (mx - rx) * 0.1;
        ry += (my - ry) * 0.1;
        cr.style.left = rx + "px";
        cr.style.top = ry + "px";
        requestAnimationFrame(loop);
      })();
      document
        .querySelectorAll(
          "a,button,.art-item,.id-tag,.v-tab,.yt-card,.yt-feat-wrap,.csf,.sf,.pull-quote",
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", () => {
            cd.style.transform = "translate(-50%,-50%) scale(2.2)";
            cr.style.opacity = ".2";
          });
          el.addEventListener("mouseleave", () => {
            cd.style.transform = "translate(-50%,-50%) scale(1)";
            cr.style.opacity = ".55";
          });
        });

      /* ─── THREE.JS HERO ──────────────────────────────── */
      const hCanvas = document.getElementById("hc");
      const renderer = new THREE.WebGLRenderer({
        canvas: hCanvas,
        alpha: true,
        antialias: false,
      });
      renderer.setSize(innerWidth, innerHeight);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.setClearColor(0, 0);
      const scene = new THREE.Scene(),
        cam = new THREE.PerspectiveCamera(
          65,
          innerWidth / innerHeight,
          0.1,
          1000,
        );
      cam.position.z = 60;
      const NE = 100,
        eGeo = new THREE.BufferGeometry(),
        eP = new Float32Array(NE * 3),
        eV = new Float32Array(NE * 3);
      for (let i = 0; i < NE; i++) {
        eP[i * 3] = (Math.random() - 0.5) * 120;
        eP[i * 3 + 1] = (Math.random() - 0.5) * 80 - 20;
        eP[i * 3 + 2] = (Math.random() - 0.5) * 30;
        eV[i * 3] = (Math.random() - 0.5) * 0.04;
        eV[i * 3 + 1] = Math.random() * 0.09 + 0.025;
        eV[i * 3 + 2] = 0;
      }
      eGeo.setAttribute("position", new THREE.BufferAttribute(eP, 3));
      const eMat = new THREE.PointsMaterial({
        color: 0xc8000a,
        size: 0.65,
        transparent: true,
        opacity: 0.55,
        sizeAttenuation: true,
        depthWrite: false,
      });
      const embers = new THREE.Points(eGeo, eMat);
      scene.add(embers);
      const NA = 360,
        aGeo = new THREE.BufferGeometry(),
        aP = new Float32Array(NA * 3),
        aV = new Float32Array(NA * 3);
      for (let i = 0; i < NA; i++) {
        aP[i * 3] = (Math.random() - 0.5) * 160;
        aP[i * 3 + 1] = (Math.random() - 0.5) * 100;
        aP[i * 3 + 2] = (Math.random() - 0.5) * 40;
        aV[i * 3] = (Math.random() - 0.5) * 0.022;
        aV[i * 3 + 1] = Math.random() * 0.04 + 0.005;
        aV[i * 3 + 2] = 0;
      }
      aGeo.setAttribute("position", new THREE.BufferAttribute(aP, 3));
      const ash = new THREE.Points(
        aGeo,
        new THREE.PointsMaterial({
          color: 0x888888,
          size: 0.35,
          transparent: true,
          opacity: 0.16,
          sizeAttenuation: true,
          depthWrite: false,
        }),
      );
      scene.add(ash);
      let tCX = 0,
        tCY = 0,
        cX = 0,
        cY = 0;
      document.addEventListener("mousemove", (e) => {
        tCX = (e.clientX / innerWidth - 0.5) * 6;
        tCY = -(e.clientY / innerHeight - 0.5) * 4;
      });
      let heroVis = true;
      new IntersectionObserver(
        (e) => {
          heroVis = e[0].isIntersecting;
        },
        { threshold: 0 },
      ).observe(document.getElementById("hero"));
      (function animHero() {
        requestAnimationFrame(animHero);
        if (!heroVis) return;
        cX += (tCX - cX) * 0.04;
        cY += (tCY - cY) * 0.04;
        cam.position.x = cX;
        cam.position.y = cY;
        cam.lookAt(0, 0, 0);
        for (let i = 0; i < NE; i++) {
          eP[i * 3] += eV[i * 3];
          eP[i * 3 + 1] += eV[i * 3 + 1];
          if (eP[i * 3 + 1] > 56) {
            eP[i * 3] = (Math.random() - 0.5) * 120;
            eP[i * 3 + 1] = -52;
          }
          if (Math.abs(eP[i * 3]) > 66) eV[i * 3] *= -1;
        }
        eGeo.attributes.position.needsUpdate = true;
        for (let i = 0; i < NA; i++) {
          aP[i * 3] += aV[i * 3];
          aP[i * 3 + 1] += aV[i * 3 + 1];
          if (aP[i * 3 + 1] > 62) {
            aP[i * 3] = (Math.random() - 0.5) * 160;
            aP[i * 3 + 1] = -58;
          }
        }
        aGeo.attributes.position.needsUpdate = true;
        embers.rotation.y += 0.00022;
        ash.rotation.y -= 0.00009;
        renderer.render(scene, cam);
      })();
      window.addEventListener("resize", () => {
        cam.aspect = innerWidth / innerHeight;
        cam.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
      });

      /* ─── SCROLL HANDLER ─────────────────────────────── */
      const btt = document.getElementById("btt");
      function onScroll() {
        const sy = window.scrollY;
        // Back to top
        btt.classList.toggle("show", sy > 400);
        // Nav
        document.getElementById("nav").classList.toggle("scrolled", sy > 60);
        // Parallax words
        pwords.forEach((el) => {
          const sect = el.closest("section");
          if (!sect) return;
          const rect = sect.getBoundingClientRect();
          const spd = parseFloat(el.dataset.speed);
          el.style.transform = `translateY(${(innerHeight - rect.top) * spd}px)`;
        });
        // Vinyl depth parallax
        document.querySelectorAll(".vw").forEach((v, i) => {
          const dir = i % 2 === 0 ? 1 : -1;
          v.style.transform = `translateY(${sy * (0.022 + i * 0.007) * dir}px)`;
        });
      }
      const pwords = document.querySelectorAll(".pword[data-speed]");
      window.addEventListener("scroll", onScroll, { passive: true });

      /* ─── REVEAL ─────────────────────────────────────── */
      const revObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("vis");
              revObs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
      );
      document.querySelectorAll(".reveal").forEach((el) => revObs.observe(el));

      // Stagger lines
      const lineObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.querySelectorAll(".stag-inner").forEach((el, i) => {
                el.style.animationDelay = i * 0.13 + "s";
                el.classList.add("in");
              });
              lineObs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.3 },
      );
      document
        .querySelectorAll(".id-stmt")
        .forEach((el) => lineObs.observe(el));

      /* ─── HERO META CYCLE ────────────────────────────── */
      const metaSpans = document.querySelectorAll(".hero-meta span");
      let mi = 0;
      setInterval(() => {
        metaSpans.forEach((s) => s.classList.remove("on"));
        mi = (mi + 1) % metaSpans.length;
        metaSpans[mi].classList.add("on");
      }, 2200);

      /* ─── VAULT TABS ─────────────────────────────────── */
      document.querySelectorAll(".v-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
          document
            .querySelectorAll(".v-tab")
            .forEach((t) => t.classList.remove("on"));
          document
            .querySelectorAll(".v-panel")
            .forEach((p) => p.classList.remove("on"));
          tab.classList.add("on");
          document
            .querySelector(`.v-panel[data-tab="${tab.dataset.tab}"]`)
            .classList.add("on");
          if (tab.dataset.tab === "photos") buildFilmStrip();
        });
      });

      /* ─── FILM STRIP ─────────────────────────────────── */
      const filmGrads = [
        "linear-gradient(160deg,#0a0a0a 30%,#1a1a1a)",
        "radial-gradient(ellipse 60% 80% at 40% 30%,#333,#090909)",
        "linear-gradient(90deg,#050505,#222 50%,#0c0c0c)",
        "radial-gradient(ellipse at 70% 20%,#3a3a3a,#101010 60%,#060606)",
        "linear-gradient(210deg,#1c1c1c,#070707)",
        "radial-gradient(circle at 30% 60%,#2a2a2a,#060606 70%)",
        "repeating-linear-gradient(0deg,#0a0a0a 0px,#0a0a0a 6px,#181818 6px,#181818 7px)",
        "linear-gradient(135deg,#111,#2e2e2e 50%,#111)",
        "radial-gradient(ellipse 100% 40% at 50% 80%,#222,#060606)",
        "linear-gradient(45deg,#080808,#1f1f1f)",
      ];
      let filmBuilt = false;
      function buildFilmStrip() {
        if (filmBuilt) return;
        filmBuilt = true;
        const outer = document.getElementById("filmOuter"),
          COUNT = 10;
        function mkRail() {
          const r = document.createElement("div");
          r.className = "sprocket-rail";
          for (let i = 0; i < COUNT + 3; i++) {
            const h = document.createElement("div");
            h.className = "sp-hole";
            r.appendChild(h);
          }
          return r;
        }
        const row = document.createElement("div");
        row.className = "strip-row";
        for (let i = 0; i < COUNT; i++) {
          const f = document.createElement("div");
          f.className = "sf";
          const art = document.createElement("div");
          art.className = "sf-art";
          art.style.background = filmGrads[i % filmGrads.length];
          const num = document.createElement("span");
          num.className = "sf-num";
          num.textContent = String(i + 1).padStart(2, "0") + "A";
          f.appendChild(art);
          f.appendChild(num);
          f.addEventListener("click", () => openLightbox(i));
          row.appendChild(f);
        }
        outer.appendChild(mkRail());
        outer.appendChild(row);
        outer.appendChild(mkRail());
        // Drag scroll
        let isDown = false,
          startX = 0,
          sl = 0;
        const wrap = document.getElementById("filmScrollWrap");
        wrap.addEventListener("mousedown", (e) => {
          isDown = true;
          startX = e.pageX - wrap.offsetLeft;
          sl = wrap.scrollLeft;
        });
        wrap.addEventListener("mouseleave", () => (isDown = false));
        wrap.addEventListener("mouseup", () => (isDown = false));
        wrap.addEventListener("mousemove", (e) => {
          if (!isDown) return;
          e.preventDefault();
          wrap.scrollLeft = sl - (e.pageX - wrap.offsetLeft - startX);
        });
        // Touch scroll
        let tx = 0;
        wrap.addEventListener(
          "touchstart",
          (e) => {
            tx = e.touches[0].clientX;
            sl = wrap.scrollLeft;
          },
          { passive: true },
        );
        wrap.addEventListener(
          "touchmove",
          (e) => {
            wrap.scrollLeft = sl - (e.touches[0].clientX - tx);
          },
          { passive: true },
        );
      }

      /* ─── CONTACT SHEET ─────────────────────────────── */
      const csArts = [
        "linear-gradient(160deg,#0a0a0a 30%,#1a1a1a)",
        "radial-gradient(ellipse 60% 80% at 40% 30%,#333,#090909)",
        "linear-gradient(90deg,#050505,#222 50%,#0c0c0c)",
        "radial-gradient(ellipse at 70% 20%,#3a3a3a,#101010 60%,#060606)",
        "linear-gradient(210deg,#1c1c1c,#070707)",
        "radial-gradient(circle at 30% 60%,#2a2a2a,#060606 70%)",
        "repeating-linear-gradient(0deg,#0a0a0a 0px,#0a0a0a 6px,#181818 6px,#181818 7px)",
        "linear-gradient(135deg,#111,#2e2e2e 50%,#111)",
        "radial-gradient(ellipse 100% 40% at 50% 80%,#222,#060606)",
        "linear-gradient(45deg,#080808,#1f1f1f)",
        "repeating-linear-gradient(90deg,#0d0d0d 0px,#0d0d0d 18px,#181818 18px,#181818 19px)",
        "radial-gradient(circle at 50% 50%,#272727,#0a0a0a)",
      ];
      const csGrid = document.getElementById("csGrid");
      for (let i = 0; i < 12; i++) {
        const f = document.createElement("div");
        f.className = "csf";
        const art = document.createElement("div");
        art.className = "csf-art";
        art.style.background = csArts[i];
        if ([2, 6, 10].includes(i)) {
          const ov = document.createElement("div");
          ov.style.cssText =
            "position:absolute;inset:0;background:rgba(200,0,10,.055)";
          art.appendChild(ov);
        }
        const num = document.createElement("span");
        num.className = "csf-num";
        num.textContent = String(i + 1).padStart(2, "0");
        f.appendChild(art);
        f.appendChild(num);
        f.addEventListener("click", () => openLightbox(i));
        csGrid.appendChild(f);
      }

      /* ─── LIGHTBOX ────────────────────────────────────── */
      const lb = document.getElementById("lightbox"),
        lbArt = document.getElementById("lb-art"),
        lbNum = document.getElementById("lb-num");
      let lbIdx = 0;
      function openLightbox(idx) {
        lbIdx = idx;
        lbArt.style.background = csArts[idx % csArts.length];
        lbNum.textContent =
          String(idx + 1).padStart(2, "0") + " / " + csArts.length;
        lb.classList.add("open");
      }
      document
        .getElementById("lb-close")
        .addEventListener("click", () => lb.classList.remove("open"));
      document
        .getElementById("lb-prev")
        .addEventListener("click", () =>
          openLightbox((lbIdx - 1 + csArts.length) % csArts.length),
        );
      document
        .getElementById("lb-next")
        .addEventListener("click", () =>
          openLightbox((lbIdx + 1) % csArts.length),
        );
      lb.addEventListener("click", (e) => {
        if (e.target === lb) lb.classList.remove("open");
      });
      document.addEventListener("keydown", (e) => {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") lb.classList.remove("open");
        if (e.key === "ArrowLeft")
          openLightbox((lbIdx - 1 + csArts.length) % csArts.length);
        if (e.key === "ArrowRight") openLightbox((lbIdx + 1) % csArts.length);
      });

      /* ─── WAVEFORM ────────────────────────────────────── */
      const wv = document.getElementById("waveform");
      [
        8, 14, 6, 18, 10, 20, 7, 16, 12, 18, 9, 22, 15, 6, 19, 11, 17, 8, 20,
        13, 6, 18, 10, 16, 14, 8, 20, 12, 7, 18, 15, 6,
      ].forEach((h, i) => {
        const b = document.createElement("div");
        b.className = "wb";
        b.style.cssText = `--h:${h}px;animation-delay:${i * 0.07}s`;
        wv.appendChild(b);
      });

      /* ─── MOBILE NAV ─────────────────────────────────── */
      const burger = document.getElementById("burger"),
        navLinks = document.getElementById("navLinks");
      let navOpen = false;

      function openNav() {
        navOpen = true;
        navLinks.style.cssText =
          "display:flex;flex-direction:column;position:fixed;top:0;left:0;right:0;background:rgba(7,7,7,.97);padding:80px 24px 40px;gap:24px;z-index:999;border-bottom:1px solid rgba(200,0,10,.15)";
        const spans = burger.querySelectorAll("span");
        spans[0].style.cssText =
          "transform:rotate(45deg) translate(4px,4px);background:#C8000A";
        spans[1].style.cssText = "opacity:0";
        spans[2].style.cssText =
          "transform:rotate(-45deg) translate(4px,-4px);background:#C8000A";
      }

      function closeNav() {
        navOpen = false;
        navLinks.style.cssText = "";
        burger.querySelectorAll("span").forEach((s) => {
          s.style.cssText = "";
        });
      }

      burger.addEventListener("click", (e) => {
        e.stopPropagation();
        navOpen ? closeNav() : openNav();
      });

      // Tap away to close
      document.addEventListener("click", (e) => {
        if (navOpen && !navLinks.contains(e.target) && e.target !== burger) {
          closeNav();
        }
      });
      document.addEventListener(
        "touchstart",
        (e) => {
          if (
            navOpen &&
            !navLinks.contains(e.target) &&
            !burger.contains(e.target)
          ) {
            closeNav();
          }
        },
        { passive: true },
      );

      navLinks
        .querySelectorAll("a")
        .forEach((a) => a.addEventListener("click", closeNav));
    