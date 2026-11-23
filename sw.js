const C='uvw-v20261124b';
const CORE=['./','./index.html','./index-CEQx9RBw.js?v=20261124b','./index-B8hlaaB3.css?v=20261124b','./couple.jpg','./invite-poster.jpg','./card-1.jpg','./card-2.jpg','./card-3.jpg','./card-4.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||r.headers.has('range')||new URL(r.url).origin!==location.origin||/\.(mp3|mp4)$/.test(new URL(r.url).pathname))return;e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));}return res;}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))));});
