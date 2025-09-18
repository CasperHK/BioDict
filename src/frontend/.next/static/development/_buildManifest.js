self.__BUILD_MANIFEST = {
  "/": [
    "./static/chunks/pages/index.js"
  ],
  "/_error": [
    "./static/chunks/pages/_error.js"
  ],
  "/organism/[id]": [
    "./static/chunks/pages/organism/[id].js"
  ],
  "/organisms": [
    "./static/chunks/pages/organisms.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/collections/[collection_name]",
    "/organism/[id]",
    "/organisms"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()