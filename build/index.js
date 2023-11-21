var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VC7GP5AZ.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white text-center", children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4", children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "bg-white text-black p-6 rounded-lg mb-6", children: [
      /* @__PURE__ */ jsxDEV3("h2", { className: "text-2xl font-bold mb-4", children: "Congratulations to whitefire for mastering the Remix setup!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 19,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3("ul", { className: "list-disc list-inside text-lg mb-4", children: [
        /* @__PURE__ */ jsxDEV3("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV3(
          "a",
          {
            target: "_blank",
            href: "https://remix.run/tutorials/blog",
            rel: "noreferrer",
            className: "text-blue-500 hover:text-blue-700",
            children: "15m Quickstart Blog Tutorial"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 24,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV3(
          "a",
          {
            target: "_blank",
            href: "https://remix.run/tutorials/jokes",
            rel: "noreferrer",
            className: "text-blue-500 hover:text-blue-700",
            children: "Deep Dive Jokes App Tutorial"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 34,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { className: "mb-2", children: /* @__PURE__ */ jsxDEV3(
          "a",
          {
            target: "_blank",
            href: "https://remix.run/docs",
            rel: "noreferrer",
            className: "text-blue-500 hover:text-blue-700",
            children: "Remix Docs"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 44,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 22,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "bg-white text-black p-6 rounded-lg mb-6", children: [
      /* @__PURE__ */ jsxDEV3("p", { className: "text-2xl text-black mb-4", children: "Embracing the Coding Odyssey: A Week of Triumphs and Transformations! \u{1F680}\u{1F4BB}" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 56,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "mb-4", children: /* @__PURE__ */ jsxDEV3(
        "img",
        {
          src: "https://previews.dropbox.com/p/thumb/ACG_4pPZNjE4qN0lpix1QV08KX8FyUodOoPDv1N3o_40bPc4_LMDP3MiK9Vkfl9C7oeF3qxs_QzTYL6-QnWAxyf8UkRHn9Q26hPkThdeUUcebJ0lpeBUQEcq4h84jTeVeoV9LNHPGVbBm2YQTupyyoSVFfD3xnf3giXtTJTuM3J5fpx0l9x0xZ8vd4Dayc42HC_RcbmqsvLucRagOm27NlEurErEO_R3MxhyQFYko7Oq0-GaNJsusEuCfXfJHW-1SEEFULTK4SUkavl5MluhXZgP-rNyCi3lo5fpKyg_yQkhYytt6u0V1U3v54HiOawlXkuaBYdREMy6QRJG9pUVDxnO/p.jpeg",
          alt: "Jumping Avatar",
          className: "w-20 h-20 rounded-full mx-auto mb-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 60,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 55,
      columnNumber: 3
    }, this),
    [
      {
        text: "\u{1F680} Excitement fills my heart as I embark on this web development journey, mastering Remix and delving into the intricacies of Next.js. Each line of code feels like a brushstroke, painting the canvas of my ambitions with vibrant colors of creativity and innovation.",
        image: "https://img.freepik.com/free-photo/view-3d-woman_23-2150709978.jpg"
      },
      {
        text: "\u{1F31F} The satisfaction of overcoming challenges fuels my passion for web development. Remix has become my trusted companion, and I'm thrilled to witness my projects evolve. As I navigate through its tutorials and documentation, I'm reminded that every hurdle is a stepping stone to greater heights.",
        image: "https://img.freepik.com/premium-photo/sun-sunglasses-smiling-generative-ai_384720-4590.jpg"
      },
      {
        text: "\u{1F6A8} Stepping into the world of React with Remix, I've found a powerful tool to sculpt my vision. The flexibility of components empowers me to reshape my extensive interior decor website effortlessly. With React, the possibilities are endless, and I'm eager to breathe life into my digital creations.",
        image: "https://img.freepik.com/free-photo/close-up-burnt-paper_23-2150158726.jpg"
      },
      {
        text: "\u{1F308} This week has been a whirlwind of learning and growth. The decision to adopt React for my projects, including a Weather App, was a game-changer. React's modular approach allows me to harmonize my code and enhance user experiences across various sections of my website.",
        image: "https://img.freepik.com/premium-photo/3d-pixar-character-potraits-ball-fire_825402-4708.jpg"
      },
      {
        text: "\u{1F310} Reflecting on the challenges faced, I find solace in the community that surrounds web development. As I share my struggles and triumphs, I hope to inspire others navigating similar paths. Here's to conquering the complexities, embracing the journey, and reaching new horizons together! \u{1F680}\u{1F4BB}",
        image: "https://img.freepik.com/premium-photo/fiery-image-professional-basketball-player-jumping-with-ball-creative-collage-sports-flyer-basketball-concept-sport-game-healthy-lifestyle-copy-space-3d-illustration-3d-render_99433-6795.jpg"
      }
    ].map((item, index) => /* @__PURE__ */ jsxDEV3("div", { className: "bg-white text-black p-6 rounded-lg mb-6", children: [
      /* @__PURE__ */ jsxDEV3("p", { className: "text-lg mb-4", children: item.text }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "img",
        {
          src: item.image,
          alt: `Avatar ${index + 1}`,
          className: "w-20 h-20 object-cover rounded-full mx-auto mb-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 5
        },
        this
      )
    ] }, index, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 90,
      columnNumber: 3
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 1
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7UCNMVA6.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GGQAYAUU.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-W5YQCU4L.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PWX4MLZX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QUOBFT5K.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "84872173", hmr: { runtime: "/build/_shared/chunk-W5YQCU4L.js", timestamp: 1700372895409 }, url: "/build/manifest-84872173.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
