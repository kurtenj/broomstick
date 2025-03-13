import{d as g,o as T,g as m,s as y,a as E,b as x,c as A,T as S,u as h,e as U}from"./firebase-vendor-DhlEE7UM.js";import{d as w}from"./firebase-cMG96b0X.js";const v=async o=>{console.log("Creating new sweep with title:",o);try{console.log("Creating document reference in Firestore...");const e=g(A(w,"sweeps"));console.log("Document reference created:",e.id);const t=new Date,r=new Date(t);r.setDate(r.getDate()+3);const s={createdAt:t,expiresAt:r,todos:[],...o&&{title:o}};return console.log("Preparing sweep data:",s),console.log("Setting document in Firestore..."),await y(e,{...s,createdAt:E(),expiresAt:S.fromDate(r)}),console.log("Document successfully written to Firestore"),e.id}catch(e){throw console.error("Error creating sweep:",e),e}},C=(o,e)=>{const t=g(w,"sweeps",o);return T(t,r=>{if(!r.exists()){e(null);return}const s=r.data();e({id:r.id,createdAt:s.createdAt.toDate(),expiresAt:s.expiresAt.toDate(),title:s.title,todos:s.todos||[]})})},R=async(o,e=1200,t=.8)=>new Promise((r,s)=>{const n=new Image;n.onload=()=>{const a=document.createElement("canvas");let c=n.width,l=n.height;if(c>e){const d=e/c;c=e,l=l*d}a.width=c,a.height=l;const p=a.getContext("2d");if(!p){s(new Error("Could not get canvas context"));return}p.drawImage(n,0,0,c,l),a.toBlob(d=>{d?r(d):s(new Error("Failed to convert canvas to blob"))},"image/jpeg",t)},n.onerror=()=>{s(new Error("Failed to load image"))},n.src=URL.createObjectURL(o)}),L=async(o,e,t)=>{console.log("Adding todo item to sweep:",o),console.log("Text:",e),console.log("Screenshot file provided:",!!t),t&&console.log("Screenshot details:",{name:t.name,type:t.type,size:`${(t.size/1024).toFixed(2)} KB`});const r=g(w,"sweeps",o);console.log("Getting sweep document...");const s=await m(r);if(!s.exists())throw console.error("Sweep not found:",o),new Error("Sweep not found");console.log("Sweep found");let n;if(t)try{console.log("Processing screenshot...");const i=t.size/1024/1024;console.log("Original file size:",`${i.toFixed(2)} MB`);let f=t;if(i>1){console.log("Optimizing image..."),f=await R(t);const D=f.size/1024/1024;console.log("Optimized file size:",`${D.toFixed(2)} MB`)}n=await new Promise((D,z)=>{const u=new FileReader;u.readAsDataURL(f),u.onload=()=>D(u.result),u.onerror=F=>z(F)}),console.log("Using base64 data URL for screenshot")}catch(i){throw console.error("Error processing screenshot:",i),i instanceof Error&&console.error("Error message:",i.message),new Error(`Failed to process screenshot: ${i instanceof Error?i.message:"Unknown error"}`)}const a=crypto.randomUUID(),c=new Date,l={id:a,text:e,completed:!1,createdAt:c,...n&&{screenshotUrl:n}};console.log("Created new todo item with ID:",a),console.log("Screenshot URL included:",!!n);const d=[...s.data().todos||[],{...l,createdAt:S.fromDate(c)}];return console.log("Updating sweep with new todos array..."),await h(r,{todos:d}),console.log("Sweep updated successfully"),a},P=async(o,e,t)=>{const r=g(w,"sweeps",o),s=await m(r);if(!s.exists())throw new Error("Sweep not found");const a=s.data().todos||[],c=a.findIndex(l=>l.id===e);if(c===-1)throw new Error("Todo item not found");if(t.screenshotFile){const l=t.screenshotFile;let p;if(l.size>1024*1024){console.log(`Optimizing large image (${l.size} bytes) for todo ${e}`);const d=await R(l),i=new FileReader;p=await new Promise(f=>{i.onloadend=()=>f(i.result),i.readAsDataURL(d)}),console.log(`Stored optimized screenshot as base64 (${p.length} chars)`)}else{const d=new FileReader;p=await new Promise(i=>{d.onloadend=()=>i(d.result),d.readAsDataURL(l)}),console.log(`Stored screenshot as base64 (${p.length} chars)`)}t.screenshotUrl=p,delete t.screenshotFile}a[c]={...a[c],...t},await h(r,{todos:a})},_=async(o,e)=>{console.log(`Deleting todo item ${e} from sweep ${o}`);const t=g(w,"sweeps",o),r=await m(t);if(!r.exists())throw new Error("Sweep not found");const n=r.data().todos||[],a=n.findIndex(c=>c.id===e);if(a===-1)throw new Error("Todo item not found");n.splice(a,1),await h(t,{todos:n}),console.log(`Todo item ${e} deleted successfully`)},B=async o=>{const e=g(w,"sweeps",o),t=await m(e);if(!t.exists())throw new Error("Sweep not found");const s=t.data().expiresAt.toDate(),n=new Date(s);n.setDate(n.getDate()+3),await h(e,{expiresAt:S.fromDate(n)})},O=async()=>{try{console.log("Checking Firestore setup...");const o=g(w,"_test_connection_","test");await m(o),console.log("Firestore connection successful");try{const e=g(w,"_test_connection_","write_test");await y(e,{timestamp:E(),test:"This is a test document to verify write permissions"}),console.log("Firestore write successful"),await x(e),console.log("Test document cleaned up")}catch(e){console.error("Firestore write failed:",e),e instanceof Error&&(console.error("Write error message:",e.message),"code"in e&&console.error("Write error code:",e.code)),console.warn("Read access works but write access failed. Check your security rules.")}return!0}catch(o){return console.error("Firestore connection failed:",o),o instanceof Error&&(console.error("Error details:",o.message),"code"in o&&console.error("Error code:",o.code)),!1}},k=async()=>{console.log("Fetching all sweeps...");try{const o=A(w,"sweeps"),e=await U(o);console.log(`Found ${e.size} sweeps`);const t=[];return e.forEach(r=>{const s=r.data();t.push({id:r.id,createdAt:s.createdAt.toDate(),expiresAt:s.expiresAt.toDate(),title:s.title||"Untitled Sweep",todos:s.todos||[]})}),t.sort((r,s)=>s.createdAt.getTime()-r.createdAt.getTime()),t}catch(o){throw console.error("Error fetching sweeps:",o),o}},M=async o=>{console.log("Deleting sweep:",o);try{const e=g(w,"sweeps",o);await x(e),console.log("Sweep deleted successfully")}catch(e){throw console.error("Error deleting sweep:",e),e}};export{v as a,L as b,O as c,_ as d,B as e,M as f,k as g,C as s,P as u};
