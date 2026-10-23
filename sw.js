const CACHE='english-daily-v1.6-20261023';
const SHELL=['/','/index.html','/icon.svg','/manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('english-daily-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==self.location.origin)return;
 if(q.mode==='navigate'){e.respondWith(fetch(q).then(r=>{if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put('/index.html',cp));}return r;}).catch(()=>caches.match('/index.html')));return;}
 e.respondWith(caches.match(q).then(c=>c||fetch(q)));});