const C='uvw-cache-v2';
const CORE=['./','./index.html','./index-CEQx9RBw.js?v=20261124c','./index-B8hlaaB3.css?v=20261124c','./couple.jpg','./invite-poster.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).catch(()=>{}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||r.headers.has('range')||u.origin!==location.origin||/\.(mp3|mp4)$/.test(u.pathname))return;e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));}return res;}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))));});
