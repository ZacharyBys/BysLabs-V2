"use strict";var precacheConfig=[["/index.html","61b577e76e319680195061cf0ff89de8"],["/static/css/main.fe906824.css","aca41bd80938ad6b7ed040427335f779"],["/static/js/main.3a138baf.js","3cf44da13965a016c560715535741fbe"],["/static/media/Concordia.c8f71b3c.png","c8f71b3ce5d696ee9b17ff9c7da8e0ad"],["/static/media/Coveo.9aca1914.png","9aca19143d600b8f09125a58ac2c5740"],["/static/media/Eidos-Montreal.87aa5706.png","87aa57061658640fb09c29d93b549f0e"],["/static/media/HackConcordia.7bb80b82.png","7bb80b8277d3eda5a3d53bc02d664f50"],["/static/media/Linkedin-icon.3441ccd5.png","3441ccd503c7bd70e2de2952d1526534"],["/static/media/adidas_moments_logo.6f50dcc0.png","6f50dcc00dbd6647b7213fcb802ea307"],["/static/media/caption_this.1fbf151c.png","1fbf151cbb2b94b3385ea8ca5421c3c9"],["/static/media/conuhacks_logo.05b7e9d4.svg","05b7e9d4fa7fef4bdab7b8faab956641"],["/static/media/github-logo.ad56201f.svg","ad56201f10de249e73d3b450589aac8d"],["/static/media/hackny.d0df1f38.png","d0df1f387654960088db0f486dccc90f"],["/static/media/instagram-logo.3cd12da2.png","3cd12da27b6bf9cce59b491982a2877f"],["/static/media/refugee_logo.d2e932fd.png","d2e932fd8782c41af0cb85d3762ab726"],["/static/media/robohacks.3c079131.png","3c079131a8832c242e39f242f6688cda"],["/static/media/wryss.d0fc9e55.jpg","d0fc9e55df638e9824e4abc43ef58c80"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});