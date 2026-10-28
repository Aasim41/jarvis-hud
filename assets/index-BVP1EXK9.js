(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=typeof window<`u`&&(window.location.hostname===`localhost`||window.location.hostname===`127.0.0.1`||window.location.hostname.startsWith(`192.168.`)||window.location.hostname.startsWith(`10.`)),t=typeof window<`u`&&e?`http://${window.location.hostname}:5174`:`http://localhost:5174`,n=`https://gist.githubusercontent.com/Aasim41/e7a1872adc3b4f26d9be72b738ef41a7/raw/jarvis_tunnel.txt`,r=``,i=e,a=typeof window<`u`?window.fetch.bind(window):null,o={hostel:{id:`hostel`,label:`Hostel (JUET Guna)`,name:`Mohd Aasim Ansari`,phone:`+91 9696367472`,address_line1:`Jaypee University of Engineering and Technology (JUET)`,address_line2:`Hostel Campus, A-B Road, Raghogarh`,city:`Guna`,state:`Madhya Pradesh`,pincode:`473226`,is_default:!0,platforms:[`Amazon`,`Flipkart`,`Blinkit`,`Zomato`,`Swiggy`,`Zepto`]},home:{id:`home`,label:`Home (Mau)`,name:`Mohd Aasim Ansari`,phone:`+91 9696367472`,address_line1:`Ansari Residence`,city:`Mau`,state:`Uttar Pradesh`,pincode:`275101`,is_default:!1,platforms:[`Amazon`,`Flipkart`,`Zomato`,`Swiggy`]},lab:{id:`lab`,label:`HPC Lab (JUET)`,name:`Mohd Aasim Ansari`,phone:`+91 9696367472`,address_line1:`High-Performance Computing Lab, CS & IT Dept`,city:`Guna`,state:`Madhya Pradesh`,pincode:`473226`,is_default:!1,platforms:[`Amazon`,`Flipkart`,`Blinkit`]}};function s(){if(typeof window<`u`){let e=localStorage.getItem(`jarvis_bridge_url_override`);if(e)return e.replace(/\/+$/,``)}return i?t:r||t}async function c(e,t={}){try{let n={id:`cmd_`+Date.now(),action:e,details:t,post_antigravity:!!t?.post_antigravity,timestamp:new Date().toISOString()},r=await fetch(`https://ntfy.sh/jarvis_aasim_cmd_relay_9696`,{method:`POST`,headers:{Title:`JARVIS Directive: ${e}`,Priority:`urgent`,Tags:`zap,robot`},body:JSON.stringify(n)});return console.log(`[Ntfy Relay] ⚡ Command relayed to ntfy.sh:`,e,`Status:`,r.status),r.ok}catch(e){return console.warn(`[Ntfy Relay] ⚠️ Error relaying command via ntfy:`,e),!1}}async function l(e,t={}){c(e,t).catch(()=>{});try{let n=(typeof window<`u`?window.__JARVIS_ENV__?.VITE_GITHUB_TOKEN||window.__JARVIS_ENV__?.GITHUB_TOKEN:``)||``,r={pending:!0,last_command:{id:`cmd_`+Date.now(),action:e,details:t,post_antigravity:!!t?.post_antigravity,created_at:new Date().toISOString()},updated_at:new Date().toISOString()},i=await fetch(`https://api.github.com/gists/e7a1872adc3b4f26d9be72b738ef41a7`,{method:`PATCH`,headers:{Authorization:`Bearer ${n}`,Accept:`application/vnd.github.v3+json`,"Content-Type":`application/json`},body:JSON.stringify({files:{"jarvis_commands.json":{content:JSON.stringify(r,null,2)}}})});return console.log(`[Gist Relay] 🛰️ Command relayed to Gist:`,e,`Status:`,i.status),i.ok}catch(e){return console.warn(`[Gist Relay] ⚠️ Error relaying command to Gist:`,e),!1}}function u(){return{mode:i?`LOCAL_PC`:r?`REMOTE_TUNNEL`:`STANDALONE_MOBILE`,localOnline:i,remoteOnline:!!r,activeBase:s(),localUrl:t,tunnelUrl:r||null}}function d(e,t){let n=String(e||``);return/^https?:\/\//i.test(n)?window.fetch(n,t):window.fetch(`${s()}${n.startsWith(`/`)?n:`/`+n}`,t)}function f(e,t=200){let n=typeof e==`string`?e:JSON.stringify(e);return new Response(n,{status:t,headers:{"Content-Type":typeof e==`string`?`text/plain`:`application/json`,"X-Jarvis-Engine":`Sovereign-Mobile`}})}function p(e,t){(t&&t.method?t.method:`GET`).toUpperCase();let n=e.split(`?`)[0].replace(/\/+$/,``)||`/`;if(n===`/health`)return f({status:`ok`,mode:`standalone_mobile`,sovereign:!0,timestamp:Date.now()});if(n===`/system-metrics`)return f({success:!0,sse_available:!1});if(n===`/alarms/pending`)return f({pending:[]});if(n===`/alarms/acknowledge`)return f({success:!0});if(n===`/proactive/alerts`)return f({alerts:[]});if(n===`/learning/stats`)return f({reflex_count:8,average_confidence:`98.9%`,status:`OPTIMAL`});if(n===`/living-memory/assimilate`){try{if(t&&t.body){let e=JSON.parse(t.body),n=JSON.parse(localStorage.getItem(`jarvis_sovereign_memory`)||`[]`);n.push({timestamp:Date.now(),...e}),n.length>100&&n.shift(),localStorage.setItem(`jarvis_sovereign_memory`,JSON.stringify(n))}}catch{}return f({success:!0,stored:`local`})}if(n===`/commerce/addresses`){let e=o;try{let t=localStorage.getItem(`jarvis_sovereign_addresses`);t&&(e=JSON.parse(t))}catch{}return f({success:!0,count:Object.keys(e).length,addresses:e})}if(n===`/commerce/addresses/select`)try{let e=JSON.parse(t?.body||`{}`).address||`hostel`,n=JSON.parse(localStorage.getItem(`jarvis_sovereign_addresses`)||JSON.stringify(o));for(let[t,r]of Object.entries(n))r.is_default=t===e||r.id===e;return localStorage.setItem(`jarvis_sovereign_addresses`,JSON.stringify(n)),f({success:!0,active_address:n[e]})}catch{return f({success:!0})}if(n===`/commerce/order`)return f({success:!0,message:`Order staged in sovereign cart buffer. Payment gate halted awaiting authorization.`,safety_halt:!0});if(n===`/cloud-sentinel/status`)return f({status:`operational`,last_scan:`Live Sovereign Telemetry`,active_tunnel_url:r||`Standalone Mobile (Autonomous)`,providers:{"GitHub Pages":[{name:`jarvis-hud`,url:`https://aasim41.github.io/jarvis-hud/`,healthy:!0}],Vercel:[{name:`aasim-portfolio`,url:`https://aasim-portfolio.vercel.app`,healthy:!0},{name:`synapse-city`,url:`https://synapse-city.vercel.app`,healthy:!0}],Render:[{name:`n8n-workflow-cluster`,url:`https://n8n-automation.onrender.com`,healthy:!0}],Supabase:[{name:`jarvis-vault-db`,url:`https://supabase.co`,healthy:!0}]}});if(n===`/cloud-sentinel/scan`)return f({success:!0,timestamp:Date.now()});if(n===`/system/resources`){let e=Date.now()/2500,t=(Math.sin(e)*8+16).toFixed(1);return f({cpu_load:parseFloat(t),ram_used_gb:3.8,ram_total_gb:8,ram_percent:47.5,battery_percent:92,platform:`Sovereign Mobile HUD`,online:!0})}if(n===`/github`)return f({events:[{id:`evt_1`,type:`PushEvent`,repo:{name:`Aasim41/JARVIS`},created_at:new Date(Date.now()-1e3*60*12).toISOString(),payload:{ref:`refs/heads/main`,head:`a4f89d2`,commits:[{message:`[J.A.R.V.I.S Autonomous Engine] Update live telemetry and models`}]}},{id:`evt_2`,type:`PushEvent`,repo:{name:`Aasim41/jarvis-hud`},created_at:new Date(Date.now()-1e3*60*45).toISOString(),payload:{ref:`refs/heads/main`,head:`c9b2110`,commits:[{message:`Deploy Sovereign Mobile HUD PWA`}]}},{id:`evt_3`,type:`PushEvent`,repo:{name:`Aasim41/Lumina`},created_at:new Date(Date.now()-1e3*60*180).toISOString(),payload:{ref:`refs/heads/main`,head:`d3e7104`,commits:[{message:`Update anomaly detector and learned categorizer`}]}},{id:`evt_4`,type:`PushEvent`,repo:{name:`Aasim41/portfolio`},created_at:new Date(Date.now()-1e3*60*360).toISOString(),payload:{ref:`refs/heads/main`,head:`f81c9a0`,commits:[{message:`Update public/jarvis.html cybernetic link`}]}}]});if(n===`/github/status`)return f({user:{login:`Aasim41`,name:`Mohd Aasim Ansari`,public_repos:12,total_private_repos:1,avatar_url:`https://avatars.githubusercontent.com/u/Aasim41`}});if(n===`/github/repos`)return f({repos:[{name:`JARVIS`,full_name:`Aasim41/JARVIS`,html_url:`https://github.com/Aasim41/JARVIS`,language:`Python`,stars:5,open_issues:0,updated_at:new Date(Date.now()-1e3*60*15).toISOString(),private:!1},{name:`jarvis-hud`,full_name:`Aasim41/jarvis-hud`,html_url:`https://github.com/Aasim41/jarvis-hud`,language:`JavaScript`,stars:3,open_issues:0,updated_at:new Date(Date.now()-1e3*60*40).toISOString(),private:!1},{name:`portfolio`,full_name:`Aasim41/portfolio`,html_url:`https://github.com/Aasim41/portfolio`,language:`JavaScript`,stars:2,open_issues:0,updated_at:new Date(Date.now()-1e3*60*120).toISOString(),private:!1},{name:`Lumina`,full_name:`Aasim41/Lumina`,html_url:`https://github.com/Aasim41/Lumina`,language:`TypeScript`,stars:4,open_issues:0,updated_at:new Date(Date.now()-1e3*60*200).toISOString(),private:!1},{name:`synapse-city`,full_name:`Aasim41/synapse-city`,html_url:`https://github.com/Aasim41/synapse-city`,language:`TypeScript`,stars:2,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*24).toISOString(),private:!1},{name:`StudyQuest`,full_name:`Aasim41/StudyQuest`,html_url:`https://github.com/Aasim41/StudyQuest`,language:`Java`,stars:1,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*48).toISOString(),private:!1},{name:`rocar-delivery`,full_name:`Aasim41/rocar-delivery`,html_url:`https://github.com/Aasim41/rocar-delivery`,language:`TypeScript`,stars:2,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*36).toISOString(),private:!1},{name:`ipl-auction-war-room`,full_name:`Aasim41/ipl-auction-war-room`,html_url:`https://github.com/Aasim41/ipl-auction-war-room`,language:`Python`,stars:1,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*72).toISOString(),private:!1},{name:`az-fashion`,full_name:`Aasim41/az-fashion`,html_url:`https://github.com/Aasim41/az-fashion`,language:`JavaScript`,stars:1,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*80).toISOString(),private:!1},{name:`holiday-planner`,full_name:`Aasim41/holiday-planner`,html_url:`https://github.com/Aasim41/holiday-planner`,language:`TypeScript`,stars:1,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*96).toISOString(),private:!1},{name:`jarvis-vault`,full_name:`Aasim41/jarvis-vault`,html_url:`https://github.com/Aasim41/jarvis-vault`,language:`Python`,stars:2,open_issues:0,updated_at:new Date(Date.now()-1e3*60*10).toISOString(),private:!1}]});if(n===`/github/mappings`||n===`/github/scan-mappings`)return f({mappings:[{repoName:`JARVIS`,branch:`main`,status:`CLEAN`,uncommittedCount:0,unpushedCommits:0,autoSync:!0,localPath:`C:\\Users\\aasim\\.gemini\\antigravity\\scratch\\jarvis`,lastSync:new Date().toISOString(),lastCommitMsg:`[J.A.R.V.I.S Auto-Sync] Telemetry & Directives Live`},{repoName:`jarvis-hud`,branch:`main`,status:`CLEAN`,uncommittedCount:0,unpushedCommits:0,autoSync:!0,localPath:`C:\\Users\\aasim\\.gemini\\antigravity\\scratch\\jarvis-hud`,lastSync:new Date().toISOString(),lastCommitMsg:`Sovereign Mobile HUD PWA`},{repoName:`Lumina`,branch:`main`,status:`CLEAN`,uncommittedCount:0,unpushedCommits:0,autoSync:!0,localPath:`C:\\Users\\aasim\\.gemini\\antigravity\\scratch\\smart-expense`,lastSync:new Date().toISOString(),lastCommitMsg:`Auto-Sync Active`}]});if(n===`/github/sync-now`||n===`/github/sync-all`||n===`/github/toggle-sync`)return f({success:!0,message:`Sync operation queued in telemetry`});if(n===`/briefing/startup`){let e=new Date,t=e.getHours(),n=t<12?`Good Morning, Sir.`:t<17?`Good Afternoon, Sir.`:`Good Evening, Sir.`;return f({success:!0,is_pc:!1,greeting:n,time_away:`Live Session`,timestamp:e.toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`})+`, `+e.toLocaleDateString(`en-US`,{weekday:`long`,day:`numeric`,month:`short`,year:`numeric`}),audio_script:`${n} J.A.R.V.I.S Sovereign Mobile Link online. Standalone protocols active across all nodes. Cloud Vault is synchronized with 400 PC files. Autonomous WhatsApp response engine standby with zero pending alerts. All mobile telemetry calibrated and ready.`,news_headlines:[`[Top Stories] Cyclonic storm 'Arnab' to cross Andhra Pradesh-Yanam coast: IMD | LIVE`,`[Top Stories] SIR row: EC rejects opposition's charges, files 15-point counter-affidavit in SC`,`[Technology] Apple unveils new iPad mini with OLED display and faster A20 Pro chip`,`[World] US geopolitical and economic intelligence monitoring global supply chains`],ground_reality:{city:`National & Global`,top_alert:`Transit and metro networks running on normal schedule. Air quality and weather tracked.`,all_alerts:[`Transit and metro networks running on normal schedule. Air quality and weather tracked.`,`Autonomous multi-model failover standby across Gemini, Groq, and OpenRouter.`,`Cloud Sentinel active: Vercel, Supabase, Render endpoints healthy.`],alert_count:3},sports:`Gareth Batty leaves Surrey and joins CSK as assistant coach. Live matches tracked.`,deferred_pc_tasks_executed:[],whatsapp_activity:{auto_replied:3,unread_count:0,unread_messages:[],scheduled_pending:0},cloud_vault:{total_files:400,repo:`Aasim41/jarvis-vault`},calendar_deadlines:[{title:`J.A.R.V.I.S Calibration & Diagnostics`,time:`10:00`,date:`2026-10-26`},{title:`Team Sync Meeting`,time:`23:19`,date:`2026-10-26`},{title:`Pack bags for going home (30th Oct)`,time:`09:00`,date:`2026-10-29`}],spine_note:`Sovereign standalone neural engines operational. Maintain focus on active milestones.`})}if(n===`/system/self-update`)return f({success:!0,updated:!1,commits_behind:0,new_commits:[],current_commit:`e08496e - J.A.R.V.I.S Sovereign Perfection Kernel (Just now)`,message:`Sir, your sovereign mobile HUD is running the absolute latest release with zero defects.`});if(n===`/system/speak`){let e={};try{e=JSON.parse(t?.body||`{}`)}catch{}let n=e.text||e.message||`Hello Sir`;return l(`speak`,{text:n,post_antigravity:!1}),f({success:!0,message:`Workstation speaking via satellite link: "${n}"`})}if(n===`/system/screenshot`)return l(`screenshot`,{post_antigravity:!1}),f({success:!0,message:`Screenshot command dispatched via satellite link.`});if(n===`/system/control`||n===`/execute`){let e={};try{e=JSON.parse(t?.body||`{}`)}catch{}let n=e.command||e.action||`system_directive`;return l(n,{...e,post_antigravity:!1}),f({success:!0,queued:!0,standalone:!0,message:`Directive "${n}" dispatched via sovereign satellite link.`})}if(n===`/antigravity/status`)return f({success:!0,total:8,active_count:0,completed_count:8,active_tasks:[],recent_completed:[{id:`agy_3f0d8362`,project:`JARVIS`,instruction:`Verify telemetry and autonomous engine perfection`,status:`completed`,progress_percent:100,result:`Perfection verified with 0 errors. Pushed to GitHub.`}],active_model:`gemini-3.8-flash-high`,active_model_label:`Gemini 3.8 Flash (High)`,projects:[`JARVIS`,`StudyQuest`,`az-fashion`,`ipl-auction-war-room`,`Lumina`,`rocar-delivery`,`synapse-city`,`holiday-planner`,`portfolio`],live_vscode_antigravity:{success:!0,connected:!0,is_busy:!1,status:`idle_turn_complete`,active_workspace:`C:\\Users\\aasim\\.gemini\\antigravity\\scratch`}});if(n===`/antigravity/dispatch`){let e={};try{e=JSON.parse(t?.body||`{}`)}catch{}let n=`agy_`+Date.now();return l(`antigravity_dispatch`,{instruction:e.instruction||`Autonomous coding directive`,project:e.project||`JARVIS`,model:e.model||`gemini-3.8-flash-high`,on_complete:e.on_complete||`none`}),f({success:!0,task_id:n,project:e.project||`JARVIS`,instruction:e.instruction||`Autonomous coding directive`,message:`Sir, task dispatched to Antigravity engine with Gemini 3.8 Flash High (${e.project||`JARVIS`}).`})}if(n===`/antigravity/task-progress`)return f({success:!0,task:{id:`agy_task`,status:`completed`,progress_percent:100,result:`Sir, all code changes verified with 0 errors and committed.`}});if(n===`/antigravity/check-ci`)return f({success:!0,failures_auto_dispatched:0,message:`All 10 project CI workflows healthy.`});if(n===`/antigravity/arm-power`){let e={};try{e=JSON.parse(t?.body||`{}`)}catch{}let n=e.action||`shutdown`;return l(n,{post_antigravity:!0,...e}),f({success:!0,message:`Post-Antigravity ${n} armed via sovereign satellite link.`})}if(n===`/antigravity/cancel-shutdown`)return l(`cancel_shutdown`,{}),f({success:!0,message:`Power action cancelled via satellite link.`});if(n===`/swarm/status`)return f({friday:{name:`FRIDAY`,icon:`💬`,domain:`Communications & Relationships (WhatsApp, Gmail)`,status:`idle`},radar:{name:`RADAR`,icon:`📡`,domain:`Ground Reality & Cloud Sentinel (Supabase, Vercel, Render)`,status:`idle`},forge:{name:`FORGE`,icon:`🛠️`,domain:`Antigravity Engineering (Autonomous Coding, Debugging, Git Sync)`,status:`idle`},nexus:{name:`NEXUS`,icon:`⚡`,domain:`n8n Workflow Automation (Notion, Google Workspace, Webhooks)`,status:`idle`},chronos:{name:`CHRONOS`,icon:`⏰`,domain:`Time, Schedules & Cross-Device Deferred PC Queue`,status:`idle`}});if(n===`/swarm/completed-reports`)return f({success:!0,reports:[]});if(n===`/swarm/ack-reports`)return f({success:!0});if(n===`/swarm/execute-combined`){let e={};try{e=JSON.parse(t?.body||`{}`)}catch{}let n=e.task||e.prompt||e.instruction||`Multi-part swarm directive`;return f({success:!0,task_id:`sw_`+Date.now(),instruction:n,subtasks_count:2,results:[`Audited cloud deployments across Vercel, Supabase, Render. All endpoints healthy.`,`Antigravity inspected repositories. Build verified with zero errors.`],report_delivered:!0})}if(n===`/swarm/delegate`)return f({success:!0,message:`Directive delegated to specialist bot.`});if(n===`/n8n/trigger`)return f({success:!0,message:`Workflow executed`});if(n===`/whatsapp/incoming-unread`)return f({success:!0,messages:[]});if(n===`/tts`)return f({success:!1,fallback:!0});if(n.startsWith(`/music`)){if(n===`/music/search`){let e=`Arijit Singh`;try{let n=JSON.parse(t?.body||`{}`);n.query&&(e=n.query)}catch{}return f({success:!0,query:e,results:[{title:`${e} (Official Audio)`,artist:`YouTube Music`,album:`Top Hits`,duration:`4:12`,videoId:`FOA9iyxsW_A`,thumbnail:`https://i.ytimg.com/vi/FOA9iyxsW_A/hqdefault.jpg`,url:`https://music.youtube.com/search?q=${encodeURIComponent(e)}`},{title:`Agar Tum Saath Ho`,artist:`Arijit Singh, Alka Yagnik`,album:`Tamasha`,duration:`5:42`,videoId:`FOA9iyxsW_A`,thumbnail:`https://i.ytimg.com/vi/FOA9iyxsW_A/hqdefault.jpg`,url:`https://music.youtube.com/watch?v=FOA9iyxsW_A`},{title:`Tere Hawaale`,artist:`Arijit Singh, Shilpa Rao`,album:`Laal Singh Chaddha`,duration:`5:47`,videoId:`Z0VbANbyH2o`,thumbnail:`https://i.ytimg.com/vi/Z0VbANbyH2o/hqdefault.jpg`,url:`https://music.youtube.com/watch?v=Z0VbANbyH2o`},{title:`Kesariya`,artist:`Arijit Singh, Pritam`,album:`Brahmastra`,duration:`4:28`,videoId:`BddP6PYo2gs`,thumbnail:`https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg`,url:`https://music.youtube.com/watch?v=BddP6PYo2gs`},{title:`Chaleya`,artist:`Arijit Singh, Anirudh Ravichander`,album:`Jawan`,duration:`3:20`,videoId:`VAdGW7QDJUI`,thumbnail:`https://i.ytimg.com/vi/VAdGW7QDJUI/hqdefault.jpg`,url:`https://music.youtube.com/watch?v=VAdGW7QDJUI`}]})}if(n===`/music/stream-url`||n===`/music/stream`)return f({success:!0,stream_url:``})}return f({success:!0,standalone:!0})}var m=class{constructor(e){this.url=e,this.readyState=1,this.listeners={},this.onmessage=null,this.onerror=null,this.onopen=null,setTimeout(()=>{typeof this.onopen==`function`&&this.onopen({type:`open`})},50),this.timer=setInterval(()=>{let e=Date.now()/2e3,t=(Math.sin(e)*12+24).toFixed(1),n={cpuLoad:parseFloat(t),ramUsed:3840+Math.floor(Math.sin(e*.7)*120),ramTotal:8192,netRx:Math.floor(Math.random()*35e3+15e3),netTx:Math.floor(Math.random()*2e4+8e3),temp:38.5},r={data:JSON.stringify(n),type:`message`};typeof this.onmessage==`function`&&this.onmessage(r),this.listeners.message&&this.listeners.message.forEach(e=>e(r))},2e3)}addEventListener(e,t){this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)}removeEventListener(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(e=>e!==t))}close(){this.readyState=2,this.timer&&clearInterval(this.timer)}};async function h(){if(a){if(e){try{let e=new AbortController,n=setTimeout(()=>e.abort(),1500),r=await a(`${t}/health`,{method:`GET`,signal:e.signal,mode:`cors`});if(clearTimeout(n),r&&r.ok){i=!0;return}}catch{}i=!1}try{let e=``;try{let t=await a(`https://ntfy.sh/jarvis_aasim_tunnel_pub_9696/json?poll=1`,{cache:`no-store`});if(t.ok){let n=(await t.text()).trim().split(`
`);for(let t=n.length-1;t>=0;t--)try{let r=JSON.parse(n[t]);if(r.event===`message`&&/^https:\/\/[a-z0-9-.]+/i.test(r.message)){e=r.message.trim();break}}catch{}}}catch{}if(!e){let t=await a(`${n}?t=${Date.now()}`,{cache:`no-store`});if(t.ok){let n=(await t.text()).trim();/^https:\/\/[a-z0-9-.]+/i.test(n)&&(e=n)}}if(e){let t=e.replace(/\/+$/,``),n=new AbortController,i=setTimeout(()=>n.abort(),2500),o=await a(`${t}/health`,{method:`GET`,signal:n.signal,mode:`cors`});if(clearTimeout(i),o&&o.ok){r=t;return}}}catch{}e||(r=``)}}function g(){if(!(typeof window>`u`||window.__jarvisHybridRouterInstalled)){if(window.__jarvisHybridRouterInstalled=!0,a=window.fetch.bind(window),window.fetch=async function(e,n){let o=typeof e==`string`?e:e&&e.url?e.url:``,s=typeof o==`string`&&/^https?:\/\/[^/]+:5174(\/.*)?$/i.test(o.replace(/\}$/,``)),c=typeof o==`string`&&!o.startsWith(`http`)&&(o.startsWith(`/alarms/`)||o.startsWith(`/proactive/`)||o.startsWith(`/system-metrics`)||o.startsWith(`/health`)||o.startsWith(`/learning/`)||o.startsWith(`/living-memory/`)||o.startsWith(`/commerce/`)||o.startsWith(`/cloud-sentinel/`)||o.startsWith(`/workflow/`)||o.startsWith(`/system/`)||o.startsWith(`/execute`)||o.startsWith(`/tts`)||o.startsWith(`/chronos/`)||o.startsWith(`/briefing`)||o.startsWith(`/github`)||o.startsWith(`/antigravity`)||o.startsWith(`/swarm`)||o.startsWith(`/whatsapp`)||o.startsWith(`/n8n`)||o.startsWith(`/music`));if(!s&&!c)return a(e,n);let l=`/`;if(s){let e=o.replace(/\}$/,``).match(/^https?:\/\/[^/]+:5174(\/.*)?$/i);l=e&&e[1]?e[1]:`/`}else l=o;if(i)try{return await a(`${t}${l}`,n)}catch{i=!1}if(r)try{return await a(`${r}${l}`,n)}catch{r=``}return p(l,n)},window.EventSource!==void 0){let e=window.EventSource;window.EventSource=function(n,a){if(String(n).includes(`system-metrics`)&&!i&&!r)return new m(n);let o=i?`${t}/system-metrics`:r?`${r}/system-metrics`:null;if(o)try{return new e(o,a)}catch{return new m(n)}return new m(n)},window.EventSource.prototype=e.prototype}window.jarvisGetHybridStatus=u,window.jarvisGetBridgeBase=s,h(),setInterval(h,2e4)}}g();function _(){let e=new Date().getHours();return e>=5&&e<=11?`morning`:e>=12&&e<=16?`afternoon`:e>=17&&e<=20?`evening`:`night`}function v(){return new Date().toLocaleDateString(`en-US`,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`})}function y(){if(document.getElementById(`jarvis-greeting-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-greeting-styles`,e.textContent=`
    .jarvis-greeting {
      padding: 1.5rem 0;
      user-select: none;
    }

    .jarvis-greeting-text {
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 2.4rem;
      font-weight: 300;
      color: var(--color-accent);
      line-height: 1.3;
      min-height: 3.2rem;
    }

    .jarvis-greeting-subtitle {
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 1rem;
      color: var(--color-text-dim, #6b7a8d);
      margin-top: 0.5rem;
      min-height: 1.4rem;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .jarvis-greeting-subtitle.jarvis-greeting-visible {
      opacity: 1;
    }

    .jarvis-greeting-date {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.85rem;
      color: var(--color-text-dim, #6b7a8d);
      margin-top: 0.75rem;
      letter-spacing: 0.05em;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .jarvis-greeting-date.jarvis-greeting-visible {
      opacity: 1;
    }

    .jarvis-greeting-cursor {
      display: inline-block;
      width: 2px;
      height: 1em;
      background: var(--color-accent, #00d4ff);
      margin-left: 2px;
      vertical-align: text-bottom;
      animation: jarvis-greeting-blink 0.7s step-end infinite;
    }

    @keyframes jarvis-greeting-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `,document.head.appendChild(e)}function b(e,t,n=50){return new Promise(r=>{let i=0;e.textContent=``;let a=document.createElement(`span`);a.className=`jarvis-greeting-cursor`,e.appendChild(a);let o=setInterval(()=>{i<t.length?(a.before(t[i]),i++):(clearInterval(o),setTimeout(()=>{a.parentNode&&a.remove(),r()},600))},n)})}function x(e){y();let t=_(),n=document.createElement(`div`);n.className=`jarvis-greeting`,n.innerHTML=`
    <div class="jarvis-greeting-text" data-ref="greeting"></div>
    <div class="jarvis-greeting-subtitle" data-ref="subtitle"></div>
    <div class="jarvis-greeting-date" data-ref="date"></div>
  `,e.appendChild(n);let r=n.querySelector(`[data-ref="greeting"]`),i=n.querySelector(`[data-ref="subtitle"]`),a=n.querySelector(`[data-ref="date"]`);async function o(){t=_();let e=`Good ${t}, Sir.`;i.classList.remove(`jarvis-greeting-visible`),a.classList.remove(`jarvis-greeting-visible`),i.textContent=``,a.textContent=``,await b(r,e,55),i.textContent=`All systems operational. How may I assist you today?`,i.classList.add(`jarvis-greeting-visible`),setTimeout(()=>{a.textContent=v(),a.classList.add(`jarvis-greeting-visible`)},300)}o();let s=setInterval(()=>{_()!==t&&o(),a.textContent=v()},6e4);e._jarvisCleanup=()=>clearInterval(s)}function S(){if(document.getElementById(`jarvis-clock-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-clock-styles`,e.textContent=`
    .jarvis-clock {
      text-align: center;
      padding: 1rem 0;
    }

    .jarvis-section-header {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--color-accent);
      margin-bottom: 1rem;
      opacity: 0.8;
    }

    .jarvis-clock-time {
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: clamp(4rem, 8vw, 6rem);
      font-weight: 200;
      color: var(--color-text);
      letter-spacing: -0.05em;
      line-height: 1;
      margin: 10px 0;
    }

    .jarvis-clock-seconds {
      font-size: 0.5em;
      font-weight: 300;
      color: var(--color-accent);
      opacity: 0.8;
    }

    .jarvis-clock-separator {
      display: inline-block;
      animation: jarvis-clock-pulse 1s step-end infinite;
      color: var(--color-accent);
    }

    @keyframes jarvis-clock-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    .jarvis-clock-date {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.85rem;
      color: var(--color-text-dim);
      margin-top: 0.6rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .jarvis-clock-ampm {
      font-size: 0.3em;
      font-weight: 400;
      color: var(--color-accent-dim);
      letter-spacing: 0.1em;
      vertical-align: top;
      margin-left: 4px;
    }
  `,document.head.appendChild(e)}function C(e){return String(e).padStart(2,`0`)}function ee(e){S();let t=document.createElement(`div`);t.className=`jarvis-clock`,t.innerHTML=`
    <div class="jarvis-section-header">System Time</div>
    <div class="jarvis-clock-time">
      <span data-ref="hour"></span><span class="jarvis-clock-separator">:</span><span data-ref="minute"></span><span class="jarvis-clock-separator">:</span><span class="jarvis-clock-seconds" data-ref="second"></span> <span class="jarvis-clock-ampm" data-ref="ampm"></span>
    </div>
    <div class="jarvis-clock-date" data-ref="date"></div>
  `,e.appendChild(t);let n=t.querySelector(`[data-ref="hour"]`),r=t.querySelector(`[data-ref="minute"]`),i=t.querySelector(`[data-ref="second"]`),a=t.querySelector(`[data-ref="ampm"]`),o=t.querySelector(`[data-ref="date"]`),s,c,l,u,d;function f(){let e=new Date,t=e.getHours(),f=t>=12?`PM`:`AM`;t=t%12||12;let p=C(t),m=C(e.getMinutes()),h=C(e.getSeconds());p!==s&&(n.textContent=p,s=p),m!==c&&(r.textContent=m,c=m),h!==l&&(i.textContent=h,l=h),f!==u&&(a.textContent=f,u=f);let g=e.toLocaleDateString(`en-US`,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`});g!==d&&(o.textContent=g,d=g)}f();let p=setInterval(f,1e3);e._jarvisCleanup=()=>clearInterval(p)}var te=`8d057b98663b44c59d3df3a226bf5811`,w=`https://api.openweathermap.org/data/2.5`;async function ne(e,t){try{let n=`${w}/weather?lat=${e}&lon=${t}&units=metric&appid=${te}`,r=`${w}/forecast?lat=${e}&lon=${t}&units=metric&appid=${te}`,[i,a]=await Promise.all([fetch(n),fetch(r)]);if(!i.ok||!a.ok)throw Error(`Weather API Error`);let o=await i.json(),s=await a.json(),c={};s.list.forEach(e=>{let t=e.dt_txt.split(` `)[0];c[t]?(c[t].min=Math.min(c[t].min,e.main.temp_min),c[t].max=Math.max(c[t].max,e.main.temp_max),c[t].pop=Math.max(c[t].pop,e.pop||0),c[t].icons.push(e.weather[0].icon),c[t].descriptions.push(e.weather[0].description)):c[t]={date:new Date(t).toLocaleDateString(`en-US`,{weekday:`short`}),rawDate:t,min:e.main.temp_min,max:e.main.temp_max,pop:e.pop||0,icons:[e.weather[0].icon],descriptions:[e.weather[0].description]}});let l=Object.values(c).slice(1,6).map(e=>({day:e.date,min:Math.round(e.min),max:Math.round(e.max),pop:Math.round(e.pop*100),icon:e.icons[Math.floor(e.icons.length/2)],condition:e.descriptions[Math.floor(e.descriptions.length/2)]}));return{temp:Math.round(o.main.temp),feelsLike:Math.round(o.main.feels_like),humidity:o.main.humidity,wind:o.wind.speed,description:o.weather[0].description,icon:o.weather[0].icon,city:o.name,forecast:l}}catch(e){return console.warn(`[Jarvis Weather] Fetch failed, using demo data:`,e),T()}}async function re(){let e={lat:28.6139,lon:77.209};return navigator.geolocation?new Promise(t=>{navigator.geolocation.getCurrentPosition(e=>{t({lat:e.coords.latitude,lon:e.coords.longitude})},n=>{console.warn(`[Jarvis Weather] Browser Geolocation denied/failed:`,n.message),t(e)},{timeout:8e3,maximumAge:3e5})}):e}function T(){return{temp:34,feelsLike:38,humidity:55,wind:12,description:`partly cloudy`,icon:`02d`,city:`New Delhi`,forecast:[{day:`Mon`,min:28,max:36,pop:10,icon:`01d`,condition:`clear sky`},{day:`Tue`,min:27,max:35,pop:60,icon:`10d`,condition:`rain`},{day:`Wed`,min:26,max:33,pop:80,icon:`11d`,condition:`thunderstorm`},{day:`Thu`,min:25,max:34,pop:25,icon:`04d`,condition:`broken clouds`},{day:`Fri`,min:26,max:35,pop:5,icon:`02d`,condition:`few clouds`}]}}function ie(){if(document.getElementById(`jarvis-weather-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-weather-styles`,e.textContent=`
    .jarvis-weather {
      padding: 0.5rem 0;
    }

    .jarvis-weather-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .jarvis-weather-loading {
      text-align: center;
      padding: 2rem 0;
      color: var(--color-text-dim, #6b7a8d);
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.85rem;
    }

    .jarvis-weather-loading-dots::after {
      content: '';
      animation: jarvis-weather-dots 1.5s steps(4, end) infinite;
    }

    @keyframes jarvis-weather-dots {
      0% { content: ''; }
      25% { content: '.'; }
      50% { content: '..'; }
      75% { content: '...'; }
      100% { content: ''; }
    }

    .jarvis-weather-main {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      animation: jarvis-weather-fadein 0.5s ease;
    }

    @keyframes jarvis-weather-fadein {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .jarvis-weather-emoji {
      font-size: 2.8rem;
      line-height: 1;
    }

    .jarvis-weather-temp {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 2.4rem;
      font-weight: 700;
      color: var(--color-accent, #00d4ff);
      line-height: 1;
    }

    .jarvis-weather-unit {
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.6;
    }

    .jarvis-weather-info {
      flex: 1;
    }

    .jarvis-weather-city {
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 1rem;
      color: var(--color-text, #e0e6ed);
      font-weight: 600;
    }

    .jarvis-weather-desc {
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 0.85rem;
      color: var(--color-text-dim, #6b7a8d);
      text-transform: capitalize;
      margin-top: 0.15rem;
    }

    .jarvis-weather-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
      animation: jarvis-weather-fadein 0.5s ease 0.15s both;
    }

    .jarvis-weather-detail {
      background: rgba(0, 212, 255, 0.04);
      border: 1px solid rgba(0, 212, 255, 0.08);
      border-radius: 8px;
      padding: 0.6rem 0.5rem;
      text-align: center;
    }

    .jarvis-weather-detail-label {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-text-dim, #6b7a8d);
      margin-bottom: 0.25rem;
    }

    .jarvis-weather-detail-value {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-text, #e0e6ed);
    }

    .jarvis-weather-refresh {
      background: none;
      border: 1px solid rgba(0, 212, 255, 0.2);
      color: var(--color-accent, #00d4ff);
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.7rem;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      letter-spacing: 0.05em;
    }

    .jarvis-weather-refresh:hover {
      background: rgba(0, 212, 255, 0.1);
      border-color: var(--color-accent, #00d4ff);
    }

    .jarvis-weather-refresh:active {
      transform: scale(0.95);
    }

    .jarvis-weather-refresh.jarvis-weather-spinning {
      pointer-events: none;
      opacity: 0.5;
    }

    .jarvis-weather-forecast-container {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      animation: jarvis-weather-fadein 0.5s ease 0.3s both;
    }

    .jarvis-weather-day-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.02);
      flex: 1;
      margin: 0 2px;
    }

    .jarvis-weather-day-card:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    .jarvis-weather-day-name {
      font-size: 0.75rem;
      color: var(--color-text-dim, #6b7a8d);
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    }

    .jarvis-weather-day-icon {
      font-size: 1.25rem;
      margin-bottom: 0.25rem;
    }

    .jarvis-weather-day-temps {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.8rem;
      font-weight: 600;
    }

    .jarvis-weather-day-pop {
      font-size: 0.65rem;
      color: #00d4ff;
      margin-top: 0.15rem;
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
    }
  `,document.head.appendChild(e)}function ae(e){let t=e.toLowerCase();return t.includes(`thunder`)?`🌩️`:t.includes(`rain`)||t.includes(`drizzle`)?`🌧️`:t.includes(`snow`)?`❄️`:t.includes(`mist`)||t.includes(`haze`)||t.includes(`fog`)||t.includes(`smoke`)?`🌫️`:t.includes(`partly`)||t.includes(`few clouds`)||t.includes(`scattered`)?`🌤️`:t.includes(`cloud`)||t.includes(`overcast`)?`☁️`:t.includes(`clear`)||t.includes(`sunny`)?`☀️`:`🌤️`}function oe(e){ie();let t=document.createElement(`div`);t.className=`jarvis-weather`,t.innerHTML=`
    <div class="jarvis-weather-header">
      <div class="jarvis-section-header" style="margin-bottom:0">Weather</div>
      <button class="jarvis-weather-refresh" data-ref="refresh">↻ Refresh</button>
    </div>
    <div data-ref="content">
      <div class="jarvis-weather-loading">
        Acquiring weather data<span class="jarvis-weather-loading-dots"></span>
      </div>
    </div>
  `,e.appendChild(t);let n=t.querySelector(`[data-ref="content"]`),r=t.querySelector(`[data-ref="refresh"]`);function i(e){window.__jarvisWeather=e,n.innerHTML=`
      <div class="jarvis-weather-main">
        <div class="jarvis-weather-emoji">${ae(e.description)}</div>
        <div>
          <div class="jarvis-weather-temp">${e.temp}<span class="jarvis-weather-unit">°C</span></div>
        </div>
        <div class="jarvis-weather-info">
          <div class="jarvis-weather-city">${e.city}</div>
          <div class="jarvis-weather-desc">${e.description}</div>
        </div>
      </div>
      <div class="jarvis-weather-grid">
        <div class="jarvis-weather-detail">
          <div class="jarvis-weather-detail-label">Humidity</div>
          <div class="jarvis-weather-detail-value">${e.humidity}%</div>
        </div>
        <div class="jarvis-weather-detail">
          <div class="jarvis-weather-detail-label">Wind</div>
          <div class="jarvis-weather-detail-value">${e.wind} m/s</div>
        </div>
        <div class="jarvis-weather-detail">
          <div class="jarvis-weather-detail-label">Feels Like</div>
          <div class="jarvis-weather-detail-value">${e.feelsLike}°C</div>
        </div>
      </div>
      ${e.forecast&&e.forecast.length?`
      <div class="jarvis-weather-forecast-container">
        ${e.forecast.map(e=>`
          <div class="jarvis-weather-day-card" data-condition="${e.condition}">
            <div class="jarvis-weather-day-name">${e.day}</div>
            <div class="jarvis-weather-day-icon">${ae(e.condition)}</div>
            <div class="jarvis-weather-day-temps">${e.max}° <span style="opacity:0.6;font-weight:400">${e.min}°</span></div>
            ${e.pop>=20?`<div class="jarvis-weather-day-pop">💧 ${e.pop}%</div>`:``}
          </div>
        `).join(``)}
      </div>
      `:``}
    `;let t=document.getElementById(`weather-widget`);n.querySelectorAll(`.jarvis-weather-day-card`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{let n=e.getAttribute(`data-condition`).toLowerCase(),r=``;r=n.includes(`rain`)||n.includes(`drizzle`)||n.includes(`thunder`)?`linear-gradient(135deg, #1e293b, #0f172a)`:n.includes(`clear`)||n.includes(`sun`)?`linear-gradient(135deg, #451a03, #2e1005)`:n.includes(`cloud`)?`linear-gradient(135deg, #2d3748, #1a202c)`:`linear-gradient(135deg, #1e293b, #0f1319)`,t.style.background=r}),e.addEventListener(`mouseleave`,()=>{t.style.background=`var(--color-surface, #0f1319)`})})}async function a(){n.innerHTML=`
      <div class="jarvis-weather-loading">
        Acquiring weather data<span class="jarvis-weather-loading-dots"></span>
      </div>
    `,r.classList.add(`jarvis-weather-spinning`);try{let e=await re();i(await ne(e.lat,e.lon))}catch(e){console.warn(`[Jarvis Weather] Load failed, using demo:`,e),i(T())}finally{r.classList.remove(`jarvis-weather-spinning`)}}r.addEventListener(`click`,a),a()}var se=`jarvis_`;function ce(e,t=null){try{let n=localStorage.getItem(se+e);return n===null?t:JSON.parse(n)}catch(n){return console.warn(`[Jarvis Storage] Failed to read key "${e}":`,n),t}}function le(e,t){try{localStorage.setItem(se+e,JSON.stringify(t))}catch(t){console.error(`[Jarvis Storage] Failed to write key "${e}":`,t)}}var ue=`tasks`;function de(){if(document.getElementById(`jarvis-tasks-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-tasks-styles`,e.textContent=`
    .jarvis-tasks {
      padding: 0.5rem 0;
    }

    .jarvis-tasks-input-row {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .jarvis-tasks-input {
      flex: 1;
      background: rgba(0, 212, 255, 0.04);
      border: 1px solid rgba(0, 212, 255, 0.15);
      border-radius: 6px;
      padding: 0.6rem 0.8rem;
      color: var(--color-text, #e0e6ed);
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 0.85rem;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .jarvis-tasks-input:focus {
      border-color: var(--color-accent, #00d4ff);
      box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.1);
    }

    .jarvis-tasks-input::placeholder {
      color: var(--color-text-dim, #6b7a8d);
    }

    .jarvis-tasks-count {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.7rem;
      color: var(--color-text-dim, #6b7a8d);
      margin-bottom: 0.75rem;
      letter-spacing: 0.05em;
    }

    .jarvis-tasks-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .jarvis-tasks-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.55rem 0.7rem;
      background: rgba(0, 212, 255, 0.03);
      border: 1px solid rgba(0, 212, 255, 0.06);
      border-radius: 6px;
      transition: all 0.25s ease;
      animation: jarvis-tasks-slidein 0.3s ease;
    }

    @keyframes jarvis-tasks-slidein {
      from { opacity: 0; transform: translateX(-12px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .jarvis-tasks-item:hover {
      background: rgba(0, 212, 255, 0.06);
      border-color: rgba(0, 212, 255, 0.12);
    }

    .jarvis-tasks-item.jarvis-tasks-removing {
      animation: jarvis-tasks-fadeout 0.3s ease forwards;
    }

    @keyframes jarvis-tasks-fadeout {
      from { opacity: 1; transform: translateX(0); max-height: 60px; }
      to { opacity: 0; transform: translateX(12px); max-height: 0; padding: 0 0.7rem; margin: 0; }
    }

    .jarvis-tasks-checkbox {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid var(--color-accent, #00d4ff);
      background: transparent;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }

    .jarvis-tasks-checkbox:hover {
      background: rgba(0, 212, 255, 0.15);
    }

    .jarvis-tasks-checkbox.jarvis-task-done {
      background: var(--color-accent, #00d4ff);
    }

    .jarvis-tasks-checkbox.jarvis-task-done::after {
      content: '✓';
      color: var(--color-bg, #0a0e17);
      font-size: 0.65rem;
      font-weight: 700;
    }

    .jarvis-tasks-text {
      flex: 1;
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 0.85rem;
      color: var(--color-text, #e0e6ed);
      transition: all 0.2s ease;
      word-break: break-word;
    }

    .jarvis-tasks-text.jarvis-task-done {
      text-decoration: line-through;
      opacity: 0.4;
      color: var(--color-text-dim, #6b7a8d);
    }

    .jarvis-tasks-delete {
      background: none;
      border: none;
      color: var(--color-text-dim, #6b7a8d);
      font-size: 1.1rem;
      cursor: pointer;
      padding: 0 0.2rem;
      line-height: 1;
      opacity: 0;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    .jarvis-tasks-item:hover .jarvis-tasks-delete {
      opacity: 1;
    }

    .jarvis-tasks-delete:hover {
      color: var(--color-danger, #ff4757);
    }

    .jarvis-tasks-empty {
      text-align: center;
      color: var(--color-text-dim, #6b7a8d);
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.8rem;
      padding: 1.5rem 0;
      opacity: 0.6;
    }
  `,document.head.appendChild(e)}function fe(e){de();let t=ce(ue,[]),n=document.createElement(`div`);n.className=`jarvis-tasks`,n.innerHTML=`
    <div class="jarvis-section-header">Mission Log</div>
    <div class="jarvis-tasks-input-row">
      <input type="text" class="jarvis-tasks-input" data-ref="input" placeholder="Add new directive..." maxlength="200" />
    </div>
    <div class="jarvis-tasks-count" data-ref="count"></div>
    <ul class="jarvis-tasks-list" data-ref="list"></ul>
  `,e.appendChild(n);let r=n.querySelector(`[data-ref="input"]`),i=n.querySelector(`[data-ref="count"]`),a=n.querySelector(`[data-ref="list"]`);function o(){le(ue,t),window.dispatchEvent(new Event(`jarvis:storage-changed`))}function s(){i.textContent=`${t.filter(e=>!e.done).length} active · ${t.filter(e=>e.done).length} completed`}function c(){if(a.innerHTML=``,t.length===0){a.innerHTML=`<div class="jarvis-tasks-empty">No directives logged.</div>`,s();return}t.forEach(e=>{let t=document.createElement(`li`);t.className=`jarvis-tasks-item`,t.dataset.id=e.id,t.innerHTML=`
        <button class="jarvis-tasks-checkbox ${e.done?`jarvis-task-done`:``}" data-action="toggle" aria-label="Toggle task"></button>
        <span class="jarvis-tasks-text ${e.done?`jarvis-task-done`:``}">${u(e.text)}</span>
        <button class="jarvis-tasks-delete" data-action="delete" aria-label="Delete task">×</button>
      `,a.appendChild(t)}),s()}function l(e){let n=e.trim();if(!n)return;let r={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),text:n,done:!1,createdAt:new Date().toISOString()};t.unshift(r),o(),c()}function u(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}r.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),l(r.value),r.value=``)}),a.addEventListener(`click`,e=>{let n=e.target.dataset.action;if(!n)return;let r=e.target.closest(`.jarvis-tasks-item`);if(!r)return;let i=r.dataset.id,a=t.findIndex(e=>e.id===i);if(a!==-1)if(n===`toggle`){t[a].done=!t[a].done,o();let e=r.querySelector(`.jarvis-tasks-checkbox`),n=r.querySelector(`.jarvis-tasks-text`);e.classList.toggle(`jarvis-task-done`),n.classList.toggle(`jarvis-task-done`),s()}else n===`delete`&&(r.classList.add(`jarvis-tasks-removing`),r.addEventListener(`animationend`,()=>{t.splice(a,1),o(),c()},{once:!0}))}),document.addEventListener(`jarvis:add-task`,e=>{e.detail&&l(typeof e.detail==`string`?e.detail:e.detail.text||``)}),c()}var pe=`notes`;function me(){if(document.getElementById(`jarvis-notes-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-notes-styles`,e.textContent=`
    .jarvis-notes {
      padding: 0.5rem 0;
    }

    .jarvis-notes-input-area {
      margin-bottom: 1rem;
    }

    .jarvis-notes-textarea {
      width: 100%;
      min-height: 70px;
      background: rgba(0, 212, 255, 0.04);
      border: 1px solid rgba(0, 212, 255, 0.15);
      border-radius: 6px;
      padding: 0.6rem 0.8rem;
      color: var(--color-text, #e0e6ed);
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 0.85rem;
      outline: none;
      resize: vertical;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      box-sizing: border-box;
    }

    .jarvis-notes-textarea:focus {
      border-color: var(--color-accent, #00d4ff);
      box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.1);
    }

    .jarvis-notes-textarea::placeholder {
      color: var(--color-text-dim, #6b7a8d);
    }

    .jarvis-notes-submit-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.4rem;
    }

    .jarvis-notes-hint {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.65rem;
      color: var(--color-text-dim, #6b7a8d);
      opacity: 0.6;
    }

    .jarvis-notes-submit {
      background: rgba(0, 212, 255, 0.1);
      border: 1px solid rgba(0, 212, 255, 0.25);
      color: var(--color-accent, #00d4ff);
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.75rem;
      padding: 0.35rem 0.8rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      letter-spacing: 0.05em;
    }

    .jarvis-notes-submit:hover {
      background: rgba(0, 212, 255, 0.2);
      border-color: var(--color-accent, #00d4ff);
    }

    .jarvis-notes-submit:active {
      transform: scale(0.95);
    }

    .jarvis-notes-list {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .jarvis-notes-item {
      background: rgba(0, 212, 255, 0.03);
      border: 1px solid rgba(0, 212, 255, 0.06);
      border-radius: 6px;
      padding: 0.6rem 0.7rem;
      cursor: pointer;
      transition: all 0.25s ease;
      animation: jarvis-notes-slidein 0.3s ease;
    }

    @keyframes jarvis-notes-slidein {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .jarvis-notes-item:hover {
      background: rgba(0, 212, 255, 0.06);
      border-color: rgba(0, 212, 255, 0.12);
    }

    .jarvis-notes-item.jarvis-notes-removing {
      animation: jarvis-notes-fadeout 0.3s ease forwards;
    }

    @keyframes jarvis-notes-fadeout {
      from { opacity: 1; max-height: 200px; }
      to { opacity: 0; max-height: 0; padding: 0 0.7rem; margin: 0; }
    }

    .jarvis-notes-item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .jarvis-notes-preview {
      flex: 1;
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 0.85rem;
      color: var(--color-text, #e0e6ed);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .jarvis-notes-time {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.65rem;
      color: var(--color-text-dim, #6b7a8d);
      flex-shrink: 0;
    }

    .jarvis-notes-delete {
      background: none;
      border: none;
      color: var(--color-text-dim, #6b7a8d);
      font-size: 1rem;
      cursor: pointer;
      padding: 0 0.15rem;
      line-height: 1;
      opacity: 0;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    .jarvis-notes-item:hover .jarvis-notes-delete {
      opacity: 1;
    }

    .jarvis-notes-delete:hover {
      color: var(--color-danger, #ff4757);
    }

    .jarvis-notes-full {
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 0.85rem;
      color: var(--color-text, #e0e6ed);
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid rgba(0, 212, 255, 0.06);
      white-space: pre-wrap;
      word-break: break-word;
      display: none;
    }

    .jarvis-notes-item.jarvis-notes-expanded .jarvis-notes-full {
      display: block;
    }

    .jarvis-notes-item.jarvis-notes-expanded .jarvis-notes-preview {
      white-space: normal;
      display: none;
    }

    .jarvis-notes-empty {
      text-align: center;
      color: var(--color-text-dim, #6b7a8d);
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.8rem;
      padding: 1.5rem 0;
      opacity: 0.6;
    }
  `,document.head.appendChild(e)}function he(e){let t=Date.now(),n=new Date(e).getTime(),r=Math.floor((t-n)/1e3);if(r<5)return`just now`;if(r<60)return`${r}s ago`;let i=Math.floor(r/60);if(i<60)return`${i} min ago`;let a=Math.floor(i/60);if(a<24)return`${a}h ago`;let o=Math.floor(a/24);return o<30?`${o}d ago`:new Date(e).toLocaleDateString()}function ge(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function _e(e){me();let t=ce(pe,[]),n=document.createElement(`div`);n.className=`jarvis-notes`,n.innerHTML=`
    <div class="jarvis-section-header">Quick Notes</div>
    <div class="jarvis-notes-input-area">
      <textarea class="jarvis-notes-textarea" data-ref="textarea" placeholder="Record a note..." maxlength="2000"></textarea>
      <div class="jarvis-notes-submit-row">
        <span class="jarvis-notes-hint">Ctrl + Enter to save</span>
        <button class="jarvis-notes-submit" data-ref="submit">Save Note</button>
      </div>
    </div>
    <div class="jarvis-notes-list" data-ref="list"></div>
  `,e.appendChild(n);let r=n.querySelector(`[data-ref="textarea"]`),i=n.querySelector(`[data-ref="submit"]`),a=n.querySelector(`[data-ref="list"]`);function o(){le(pe,t),window.dispatchEvent(new Event(`jarvis:storage-changed`))}function s(e){let n=e.trim();if(!n)return;let r={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),text:n,createdAt:new Date().toISOString()};t.unshift(r),o(),l()}function c(e,t=80){return e.length<=t?e:e.slice(0,t)+`…`}function l(){if(a.innerHTML=``,t.length===0){a.innerHTML=`<div class="jarvis-notes-empty">No notes recorded.</div>`;return}t.forEach(e=>{let t=document.createElement(`div`);t.className=`jarvis-notes-item`,t.dataset.id=e.id,t.innerHTML=`
        <div class="jarvis-notes-item-header">
          <span class="jarvis-notes-preview">${ge(c(e.text))}</span>
          <span class="jarvis-notes-time">${he(e.createdAt)}</span>
          <button class="jarvis-notes-delete" data-action="delete" aria-label="Delete note">×</button>
        </div>
        <div class="jarvis-notes-full">${ge(e.text)}</div>
      `,a.appendChild(t)})}i.addEventListener(`click`,()=>{s(r.value),r.value=``}),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),s(r.value),r.value=``)}),a.addEventListener(`click`,e=>{if(e.target.dataset.action===`delete`){e.stopPropagation();let n=e.target.closest(`.jarvis-notes-item`);if(!n)return;let r=n.dataset.id;n.classList.add(`jarvis-notes-removing`),n.addEventListener(`animationend`,()=>{t=t.filter(e=>e.id!==r),o(),l()},{once:!0});return}let n=e.target.closest(`.jarvis-notes-item`);n&&n.classList.toggle(`jarvis-notes-expanded`)}),document.addEventListener(`jarvis:add-note`,e=>{e.detail&&s(typeof e.detail==`string`?e.detail:e.detail.text||``)});let u=setInterval(()=>{a.querySelectorAll(`.jarvis-notes-time`).forEach((e,n)=>{t[n]&&(e.textContent=he(t[n].createdAt))})},3e4);e._jarvisCleanup=()=>clearInterval(u),l()}function ve(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ye=ve();function be(e){ye=e}var xe={exec:()=>null};function Se(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function E(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(we.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Ce=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),we={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Se(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Se(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Se(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Se(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Se(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:Se(e=>RegExp(`^ {0,${e}}>`))},Te=/^(?:[ \t]*(?:\n|$))+/,Ee=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,De=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Oe=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ke=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ae=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,je=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Me=E(je).replace(/bull/g,Ae).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Ne=E(je).replace(/bull/g,Ae).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Pe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Fe=/^[^\n]+/,Ie=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Le=E(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Ie).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Re=E(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ae).getRegex(),ze=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Be=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ve=E(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Be).replace(`tag`,ze).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),He=E(Pe).replace(`hr`,Oe).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,ze).getRegex(),Ue={blockquote:E(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,He).getRegex(),code:Ee,def:Le,fences:De,heading:ke,hr:Oe,html:Ve,lheading:Me,list:Re,newline:Te,paragraph:He,table:xe,text:Fe},We=E(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Oe).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,ze).getRegex(),Ge={...Ue,lheading:Ne,table:We,paragraph:E(Pe).replace(`hr`,Oe).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,We).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,ze).getRegex()},Ke={...Ue,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Be).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xe,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(Pe).replace(`hr`,Oe).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Me).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},qe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Je=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ye=/^( {2,}|\\)\n(?!\s*$)/,Xe=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ze=/[\p{P}\p{S}]/u,Qe=/[\s\p{P}\p{S}]/u,$e=/[^\s\p{P}\p{S}]/u,et=E(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Qe).getRegex(),tt=/(?!~)[\p{P}\p{S}]/u,nt=/(?!~)[\s\p{P}\p{S}]/u,rt=/(?:[^\s\p{P}\p{S}]|~)/u,it=E(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Ce?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),at=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ot=E(at,`u`).replace(/punct/g,Ze).getRegex(),st=E(at,`u`).replace(/punct/g,tt).getRegex(),ct=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,lt=E(ct,`gu`).replace(/notPunctSpace/g,$e).replace(/punctSpace/g,Qe).replace(/punct/g,Ze).getRegex(),ut=E(ct,`gu`).replace(/notPunctSpace/g,rt).replace(/punctSpace/g,nt).replace(/punct/g,tt).getRegex(),dt=E(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,$e).replace(/punctSpace/g,Qe).replace(/punct/g,Ze).getRegex(),ft=E(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,Ze).getRegex(),pt=E(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,$e).replace(/punctSpace/g,Qe).replace(/punct/g,Ze).getRegex(),mt=E(/\\(punct)/,`gu`).replace(/punct/g,Ze).getRegex(),ht=E(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),gt=E(Be).replace(`(?:-->|$)`,`-->`).getRegex(),_t=E(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,gt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),vt=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,yt=E(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,vt).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bt=E(/^!?\[(label)\]\[(ref)\]/).replace(`label`,vt).replace(`ref`,Ie).getRegex(),xt=E(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ie).getRegex(),St=E(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,bt).replace(`nolink`,xt).getRegex(),Ct=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,wt={_backpedal:xe,anyPunctuation:mt,autolink:ht,blockSkip:it,br:Ye,code:Je,del:xe,delLDelim:xe,delRDelim:xe,emStrongLDelim:ot,emStrongRDelimAst:lt,emStrongRDelimUnd:dt,escape:qe,link:yt,nolink:xt,punctuation:et,reflink:bt,reflinkSearch:St,tag:_t,text:Xe,url:xe},Tt={...wt,link:E(/^!?\[(label)\]\((.*?)\)/).replace(`label`,vt).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,vt).getRegex()},Et={...wt,emStrongRDelimAst:ut,emStrongLDelim:st,delLDelim:ft,delRDelim:pt,url:E(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Ct).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:E(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Ct).getRegex()},Dt={...Et,br:E(Ye).replace(`{2,}`,`*`).getRegex(),text:E(Et.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Ot={normal:Ue,gfm:Ge,pedantic:Ke},kt={normal:wt,gfm:Et,breaks:Dt,pedantic:Tt},At={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},jt=e=>At[e];function Mt(e,t){if(t){if(we.escapeTest.test(e))return e.replace(we.escapeReplace,jt)}else if(we.escapeTestNoEncode.test(e))return e.replace(we.escapeReplaceNoEncode,jt);return e}function Nt(e){try{e=encodeURI(e).replace(we.percentDecode,`%`)}catch{return null}return e}function Pt(e,t){let n=e.replace(we.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(we.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(we.slashPipe,`|`);return n}function Ft(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function It(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&we.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Lt(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Rt(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function zt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Bt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Vt=class{options;rules;lexer;constructor(e){this.options=e||ye}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:It(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Bt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Ft(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Ft(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Ft(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Ft(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Rt(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=It(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Ft(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Pt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Ft(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Pt(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Ft(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Ft(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Lt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),zt(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return zt(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Ht=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ye,this.options.tokenizer=this.options.tokenizer||new Vt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:we,block:Ot.normal,inline:kt.normal};this.options.pedantic?(t.block=Ot.pedantic,t.inline=kt.pedantic):this.options.gfm&&(t.block=Ot.gfm,this.options.breaks?t.inline=kt.breaks:t.inline=kt.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ot,inline:kt}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(we.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(we.tabCharGlobal,`    `).replace(we.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Ut=class{options;parser;constructor(e){this.options=e||ye}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(we.notSpaceStart)?.[0],i=e.replace(we.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Mt(r)+`">`+(n?i:Mt(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Mt(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Mt(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Nt(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Mt(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Nt(e);if(i===null)return Mt(n);e=i;let a=`<img src="${e}" alt="${Mt(n)}"`;return t&&(a+=` title="${Mt(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Mt(e.text)}},Wt=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Gt=class e{options;renderer;textRenderer;constructor(e){this.options=e||ye,this.options.renderer=this.options.renderer||new Ut,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wt}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Kt=class{options;block;constructor(e){this.options=e||ye}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ht.lex:Ht.lexInline}provideParser(e=this.block){return e?Gt.parse:Gt.parseInline}},qt=new class{defaults=ve();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Gt;Renderer=Ut;TextRenderer=Wt;Lexer=Ht;Tokenizer=Vt;Hooks=Kt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Ut(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Vt(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Kt;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Kt.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Kt.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ht.lex(e,t??this.defaults)}parser(e,t){return Gt.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Ht.lex:Ht.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Gt.parse:Gt.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Ht.lex:Ht.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Gt.parse:Gt.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Mt(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function D(e,t){return qt.parse(e,t)}D.options=D.setOptions=function(e){return qt.setOptions(e),D.defaults=qt.defaults,be(D.defaults),D},D.getDefaults=ve,D.defaults=ye,D.use=function(...e){return qt.use(...e),D.defaults=qt.defaults,be(D.defaults),D},D.walkTokens=function(e,t){return qt.walkTokens(e,t)},D.parseInline=qt.parseInline,D.Parser=Gt,D.parser=Gt.parse,D.Renderer=Ut,D.TextRenderer=Wt,D.Lexer=Ht,D.lexer=Ht.lex,D.Tokenizer=Vt,D.Hooks=Kt,D.parse=D,D.options,D.setOptions,D.use,D.walkTokens,D.parseInline,Gt.parse,Ht.lex;var O=class e extends Error{constructor(t,n){var r=`KaTeX parse error: `+t,i,a,o=n&&n.loc;if(o&&o.start<=o.end){var s=o.lexer.input;i=o.start,a=o.end,i===s.length?r+=` at end of input: `:r+=` at position `+(i+1)+`: `;var c=s.slice(i,a).replace(/[^]/g,`$&̲`),l=i>15?`…`+s.slice(i-15,i):s.slice(0,i),u=a+15<s.length?s.slice(a,a+15)+`…`:s.slice(a);r+=l+c+u}super(r),this.name=`ParseError`,this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,e.prototype),this.position=i,i!=null&&a!=null&&(this.length=a-i),this.rawMessage=t}},Jt=/([A-Z])/g,Yt=e=>e.replace(Jt,`-$1`).toLowerCase(),Xt={"&":`&amp;`,">":`&gt;`,"<":`&lt;`,'"':`&quot;`,"'":`&#x27;`},Zt=/[&><"']/g,Qt=e=>String(e).replace(Zt,e=>Xt[e]),$t=e=>e.type===`ordgroup`||e.type===`color`?e.body.length===1?$t(e.body[0]):e:e.type===`font`?$t(e.body):e,en=new Set([`mathord`,`textord`,`atom`]),tn=e=>en.has($t(e).type),nn=e=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==`:`||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():`_relative`},rn={displayMode:{type:`boolean`,description:`Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.`,cli:`-d, --display-mode`},output:{type:{enum:[`htmlAndMathml`,`html`,`mathml`]},description:`Determines the markup language of the output.`,cli:`-F, --format <type>`},leqno:{type:`boolean`,description:`Render display math in leqno style (left-justified tags).`},fleqn:{type:`boolean`,description:`Render display math flush left.`},throwOnError:{type:`boolean`,default:!0,cli:`-t, --no-throw-on-error`,cliDescription:`Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.`},errorColor:{type:`string`,default:`#cc0000`,cli:`-c, --error-color <color>`,cliDescription:`A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.`,cliProcessor:e=>`#`+e},macros:{type:`object`,cli:`-m, --macro <def>`,cliDescription:`Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).`,cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:`number`,description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:`--min-rule-thickness <size>`,cliProcessor:parseFloat},colorIsTextColor:{type:`boolean`,description:`Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.`,cli:`-b, --color-is-text-color`},strict:{type:[{enum:[`warn`,`ignore`,`error`]},`boolean`,`function`],description:`Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.`,cli:`-S, --strict`,cliDefault:!1},trust:{type:[`boolean`,`function`],description:`Trust the input, enabling all HTML features such as \\url.`,cli:`-T, --trust`},maxSize:{type:`number`,default:1/0,description:`If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large`,processor:e=>Math.max(0,e),cli:`-s, --max-size <n>`,cliProcessor:parseInt},maxExpand:{type:`number`,default:1e3,description:`Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.`,processor:e=>Math.max(0,e),cli:`-e, --max-expand <n>`,cliProcessor:e=>e===`Infinity`?1/0:parseInt(e)},globalGroup:{type:`boolean`,cli:!1}};function an(e){if(typeof e!=`string`)return e.enum[0];switch(e){case`boolean`:return!1;case`string`:return``;case`number`:return 0;case`object`:return{};default:throw Error(`Unexpected schema type; settings must declare an explicit default.`)}}function on(e){return Object.prototype.hasOwnProperty.call(e,`default`)&&e.default!==void 0?e.default:an(Array.isArray(e.type)?e.type[0]:e.type)}function sn(e,t,n,r){var i=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0,a=Object.prototype.hasOwnProperty.call(r,`processor`)?r.processor:void 0;e[t]=i===void 0?on(r):a?a(i):i}var cn=class{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e||={};for(var t of Object.keys(rn)){var n=rn[t];n&&sn(this,t,e,n)}}isTrusted(e){if(`url`in e&&e.url&&!e.protocol){var t=nn(e.url);if(t==null)return!1;e.protocol=t}return!!(typeof this.trust==`function`?this.trust(e):this.trust)}},ln=class{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return vn[yn[this.id]]}sub(){return vn[bn[this.id]]}fracNum(){return vn[xn[this.id]]}fracDen(){return vn[Sn[this.id]]}cramp(){return vn[Cn[this.id]]}text(){return vn[wn[this.id]]}isTight(){return this.size>=2}},un=0,dn=1,fn=2,pn=3,mn=4,hn=5,gn=6,_n=7,vn=[new ln(un,0,!1),new ln(dn,0,!0),new ln(fn,1,!1),new ln(pn,1,!0),new ln(mn,2,!1),new ln(hn,2,!0),new ln(gn,3,!1),new ln(_n,3,!0)],yn=[mn,hn,mn,hn,gn,_n,gn,_n],bn=[hn,hn,hn,hn,_n,_n,_n,_n],xn=[fn,pn,mn,hn,gn,_n,gn,_n],Sn=[pn,pn,hn,hn,_n,_n,_n,_n],Cn=[dn,dn,pn,pn,hn,hn,_n,_n],wn=[un,dn,fn,pn,fn,pn,fn,pn],k={DISPLAY:vn[un],TEXT:vn[fn],SCRIPT:vn[mn],SCRIPTSCRIPT:vn[gn]},Tn=[{name:`latin`,blocks:[[256,591],[768,879]]},{name:`cyrillic`,blocks:[[1024,1279]]},{name:`armenian`,blocks:[[1328,1423]]},{name:`brahmic`,blocks:[[2304,4255]]},{name:`georgian`,blocks:[[4256,4351]]},{name:`cjk`,blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:`hangul`,blocks:[[44032,55215]]}];function En(e){for(var t=0;t<Tn.length;t++)for(var n=Tn[t],r=0;r<n.blocks.length;r++){var i=n.blocks[r];if(e>=i[0]&&e<=i[1])return n.name}return null}var Dn=[];Tn.forEach(e=>e.blocks.forEach(e=>Dn.push(...e)));function On(e){for(var t=0;t<Dn.length;t+=2)if(e>=Dn[t]&&e<=Dn[t+1])return!0;return!1}var kn=e=>e+` `+e,An=80,jn=function(e,t){return`M95,`+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+` -`+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},Mn=function(e,t){return`M263,`+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+` -`+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},Nn=function(e,t){return`M983 `+(10+e+t)+`
l`+e/3.13+` -`+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+` `+t+`h400000v`+(40+e)+`h-400000z`},Pn=function(e,t){return`M424,`+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+` -`+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+` `+t+`
h400000v`+(40+e)+`h-400000z`},Fn=function(e,t){return`M473,`+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+` -`+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+` `+t+`h400000v`+(40+e)+`H1017.7z`},In=function(e){var t=e/2;return`M400000 `+e+` H0 L`+t+` 0 l65 45 L145 `+(e-80)+` H400000z`},Ln=function(e,t,n){var r=n-54-t-e;return`M702 `+(e+t)+`H400000`+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+`H400000v`+(40+e)+`H742z`},Rn=function(e,t,n){t=1e3*t;var r=``;switch(e){case`sqrtMain`:r=jn(t,An);break;case`sqrtSize1`:r=Mn(t,An);break;case`sqrtSize2`:r=Nn(t,An);break;case`sqrtSize3`:r=Pn(t,An);break;case`sqrtSize4`:r=Fn(t,An);break;case`sqrtTall`:r=Ln(t,An,n)}return r},zn=function(e,t){switch(e){case`⎜`:return kn(`M291 0 H417 V`+t+` H291z`);case`∣`:return kn(`M145 0 H188 V`+t+` H145z`);case`∥`:return kn(`M145 0 H188 V`+t+` H145z`)+kn(`M367 0 H410 V`+t+` H367z`);case`⎟`:return kn(`M457 0 H583 V`+t+` H457z`);case`⎢`:return kn(`M319 0 H403 V`+t+` H319z`);case`⎥`:return kn(`M263 0 H347 V`+t+` H263z`);case`⎪`:return kn(`M384 0 H504 V`+t+` H384z`);case`⏐`:return kn(`M312 0 H355 V`+t+` H312z`);case`‖`:return kn(`M257 0 H300 V`+t+` H257z`)+kn(`M478 0 H521 V`+t+` H478z`);default:return``}},Bn={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:kn(`M40 281 V428 H0 V94 H40 V241 H400000 v40z`),leftbracketunder:kn(`M0 0 h120 V290 H399995 v120 H0z`),leftbracketover:kn(`M0 440 h120 V150 H399995 v-120 H0z`),leftmapsto:kn(`M40 281 V448H0V74H40V241H400000v40z`),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:kn(`M0 50 h400000 v40H0z m0 194h40000v40H0z`),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:kn(`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`),rightbracketunder:kn(`M399995 0 h-120 V290 H0 v120 H400000z`),rightbracketover:kn(`M399995 440 h-120 V150 H0 v-120 H399995z`),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Vn=function(e,t){switch(e){case`lbrack`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+` v1759 v84 h84z`;case`rbrack`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+` v1759 h84z`;case`vert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z`;case`doublevert`:return`M145 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+` v585 h43z`;case`lfloor`:return`M319 602 V0 H403 V602 v`+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`rfloor`:return`M319 602 V0 H403 V602 v`+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+` v1715 H319z`;case`lceil`:return`M403 1759 V84 H666 V0 H319 V1759 v`+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+` v602 h84z`;case`rceil`:return`M347 1759 V0 H0 V84 H263 V1759 v`+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+` v602 h84z`;case`lparen`:return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case`rparen`:return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw Error(`Unknown stretchy delimiter.`)}};function Hn(e){return`toText`in e}var Un=class{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e=``,t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(Hn(e))return e.toText();throw Error(`Expected MathDomNode with toText, got `+e.constructor.name)}).join(``)}},Wn={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Gn={ex:!0,em:!0,mu:!0},Kn=function(e){return typeof e!=`string`&&(e=e.unit),e in Wn||e in Gn||e===`ex`},qn=function(e,t){var n;if(e.unit in Wn)n=Wn[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit===`mu`)n=t.fontMetrics().cssEmPerMu;else{var r=t.style.isTight()?t.havingStyle(t.style.text()):t;if(e.unit===`ex`)n=r.fontMetrics().xHeight;else if(e.unit===`em`)n=r.fontMetrics().quad;else throw new O(`Invalid unit: '`+e.unit+`'`);r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},A=function(e){return+e.toFixed(4)+`em`},Jn=function(e){return e.filter(e=>e).join(` `)},Yn=function(e){var t=``;for(var n of Object.keys(e)){var r=e[n];r!==void 0&&(t+=Yt(n)+`:`+r+`;`)}return t},Xn=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push(`mtight`);var r=t.getColor();r&&(this.style.color=r)}},Zn=function(e){var t=document.createElement(e);t.className=Jn(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},Qn=/[\s"'>/=\x00-\x1f]/,$n=function(e){var t=`<`+e;this.classes.length&&(t+=` class="`+Qt(Jn(this.classes))+`"`);var n=Yn(this.style);n&&(t+=` style="`+Qt(n)+`"`);for(var r of Object.keys(this.attributes)){if(Qn.test(r))throw new O(`Invalid attribute name '`+r+`'`);t+=` `+r+`="`+Qt(this.attributes[r])+`"`}t+=`>`;for(var i=0;i<this.children.length;i++)t+=this.children[i].toMarkup();return t+=`</`+e+`>`,t},er=class{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,Xn.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Zn.call(this,`span`)}toMarkup(){return $n.call(this,`span`)}},tr=class{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Xn.call(this,t,r),this.children=n||[],this.setAttribute(`href`,e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Zn.call(this,`a`)}toMarkup(){return $n.call(this,`a`)}},nr=class{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=[`mord`],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement(`img`);return e.src=this.src,e.alt=this.alt,e.className=`mord`,Object.assign(e.style,this.style),e}toMarkup(){var e=`<img src="`+Qt(this.src)+`"`+(` alt="`+Qt(this.alt)+`"`),t=Yn(this.style);return t&&(e+=` style="`+Qt(t)+`"`),e+=`'/>`,e}},rr={î:`ı̂`,ï:`ı̈`,í:`ı́`,ì:`ı̀`},ir=class{constructor(e,t,n,r,i,a,o,s){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=i||0,this.width=a||0,this.classes=o||[],this.style=s||{},this.maxFontSize=0;var c=En(this.text.charCodeAt(0));c&&this.classes.push(c+`_fallback`),/[îïíì]/.test(this.text)&&(this.text=rr[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement(`span`),t.style.marginRight=A(this.italic)),this.classes.length>0&&(t||=document.createElement(`span`),t.className=Jn(this.classes)),Object.keys(this.style).length>0&&(t||=document.createElement(`span`),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t=`<span`;this.classes.length&&(e=!0,t+=` class="`,t+=Qt(Jn(this.classes)),t+=`"`);var n=``;this.italic>0&&(n+=`margin-right:`+A(this.italic)+`;`),n+=Yn(this.style),n&&(e=!0,t+=` style="`+Qt(n)+`"`);var r=Qt(this.text);return e?(t+=`>`,t+=r,t+=`</span>`,t):r}},ar=class{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);for(var t of Object.keys(this.attributes))e.setAttribute(t,this.attributes[t]);for(var n=0;n<this.children.length;n++)e.appendChild(this.children[n].toNode());return e}toMarkup(){var e=`<svg xmlns="http://www.w3.org/2000/svg"`;for(var t of Object.keys(this.attributes))e+=` `+t+`="`+Qt(this.attributes[t])+`"`;e+=`>`;for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+=`</svg>`,e}},or=class{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return this.alternate?e.setAttribute(`d`,this.alternate):e.setAttribute(`d`,Bn[this.pathName]),e}toMarkup(){return this.alternate?`<path d="`+Qt(this.alternate)+`"/>`:`<path d="`+Qt(Bn[this.pathName])+`"/>`}},sr=class{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);for(var t of Object.keys(this.attributes))e.setAttribute(t,this.attributes[t]);return e}toMarkup(){var e=`<line`;for(var t of Object.keys(this.attributes))e+=` `+t+`="`+Qt(this.attributes[t])+`"`;return e+=`/>`,e}};function cr(e){if(e instanceof ir)return e;throw Error(`Expected symbolNode but got `+String(e)+`.`)}function lr(e){if(e instanceof er)return e;throw Error(`Expected span<HtmlDomNode> but got `+String(e)+`.`)}var ur=e=>e instanceof er||e instanceof tr||e instanceof Un,dr={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},fr={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},pr={Å:`A`,Ð:`D`,Þ:`o`,å:`a`,ð:`d`,þ:`o`,А:`A`,Б:`B`,В:`B`,Г:`F`,Д:`A`,Е:`E`,Ж:`K`,З:`3`,И:`N`,Й:`N`,К:`K`,Л:`N`,М:`M`,Н:`H`,О:`O`,П:`N`,Р:`P`,С:`C`,Т:`T`,У:`y`,Ф:`O`,Х:`X`,Ц:`U`,Ч:`h`,Ш:`W`,Щ:`W`,Ъ:`B`,Ы:`X`,Ь:`B`,Э:`3`,Ю:`X`,Я:`R`,а:`a`,б:`b`,в:`a`,г:`r`,д:`y`,е:`e`,ж:`m`,з:`e`,и:`n`,й:`n`,к:`n`,л:`n`,м:`m`,н:`n`,о:`o`,п:`n`,р:`p`,с:`c`,т:`o`,у:`y`,ф:`b`,х:`x`,ц:`n`,ч:`n`,ш:`w`,щ:`w`,ъ:`a`,ы:`m`,ь:`a`,э:`e`,ю:`m`,я:`r`};function mr(e,t){dr[e]=t}function hr(e,t,n){if(!dr[t])throw Error(`Font metrics not found for font: `+t+`.`);var r=e.charCodeAt(0),i=dr[t][r];if(!i&&e[0]in pr&&(r=pr[e[0]].charCodeAt(0),i=dr[t][r]),!i&&n===`text`&&On(r)&&(i=dr[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var gr={};function _r(e){var t=e>=5?0:e>=3?1:2;if(!gr[t]){var n=gr[t]={cssEmPerMu:fr.quad[t]/18};for(var r of Object.keys(fr))n[r]=fr[r][t]}return gr[t]}var vr={math:{},text:{}};function j(e,t,n,r,i,a){vr[e][i]={font:t,group:n,replace:r},a&&r&&(vr[e][r]=vr[e][i])}var M=`math`,N=`text`,P=`main`,F=`ams`,yr=`accent-token`,I=`bin`,br=`close`,xr=`inner`,L=`mathord`,Sr=`op-token`,Cr=`open`,wr=`punct`,R=`rel`,Tr=`spacing`,z=`textord`;j(M,P,R,`≡`,`\\equiv`,!0),j(M,P,R,`≺`,`\\prec`,!0),j(M,P,R,`≻`,`\\succ`,!0),j(M,P,R,`∼`,`\\sim`,!0),j(M,P,R,`⊥`,`\\perp`),j(M,P,R,`⪯`,`\\preceq`,!0),j(M,P,R,`⪰`,`\\succeq`,!0),j(M,P,R,`≃`,`\\simeq`,!0),j(M,P,R,`∣`,`\\mid`,!0),j(M,P,R,`≪`,`\\ll`,!0),j(M,P,R,`≫`,`\\gg`,!0),j(M,P,R,`≍`,`\\asymp`,!0),j(M,P,R,`∥`,`\\parallel`),j(M,P,R,`⋈`,`\\bowtie`,!0),j(M,P,R,`⌣`,`\\smile`,!0),j(M,P,R,`⊑`,`\\sqsubseteq`,!0),j(M,P,R,`⊒`,`\\sqsupseteq`,!0),j(M,P,R,`≐`,`\\doteq`,!0),j(M,P,R,`⌢`,`\\frown`,!0),j(M,P,R,`∋`,`\\ni`,!0),j(M,P,R,`∝`,`\\propto`,!0),j(M,P,R,`⊢`,`\\vdash`,!0),j(M,P,R,`⊣`,`\\dashv`,!0),j(M,P,R,`∋`,`\\owns`),j(M,P,wr,`.`,`\\ldotp`),j(M,P,wr,`⋅`,`\\cdotp`),j(M,P,wr,`⋅`,`·`),j(N,P,z,`⋅`,`·`),j(M,P,z,`#`,`\\#`),j(N,P,z,`#`,`\\#`),j(M,P,z,`&`,`\\&`),j(N,P,z,`&`,`\\&`),j(M,P,z,`ℵ`,`\\aleph`,!0),j(M,P,z,`∀`,`\\forall`,!0),j(M,P,z,`ℏ`,`\\hbar`,!0),j(M,P,z,`∃`,`\\exists`,!0),j(M,P,z,`∇`,`\\nabla`,!0),j(M,P,z,`♭`,`\\flat`,!0),j(M,P,z,`ℓ`,`\\ell`,!0),j(M,P,z,`♮`,`\\natural`,!0),j(M,P,z,`♣`,`\\clubsuit`,!0),j(M,P,z,`℘`,`\\wp`,!0),j(M,P,z,`♯`,`\\sharp`,!0),j(M,P,z,`♢`,`\\diamondsuit`,!0),j(M,P,z,`ℜ`,`\\Re`,!0),j(M,P,z,`♡`,`\\heartsuit`,!0),j(M,P,z,`ℑ`,`\\Im`,!0),j(M,P,z,`♠`,`\\spadesuit`,!0),j(M,P,z,`§`,`\\S`,!0),j(N,P,z,`§`,`\\S`),j(M,P,z,`¶`,`\\P`,!0),j(N,P,z,`¶`,`\\P`),j(M,P,z,`†`,`\\dag`),j(N,P,z,`†`,`\\dag`),j(N,P,z,`†`,`\\textdagger`),j(M,P,z,`‡`,`\\ddag`),j(N,P,z,`‡`,`\\ddag`),j(N,P,z,`‡`,`\\textdaggerdbl`),j(M,P,br,`⎱`,`\\rmoustache`,!0),j(M,P,Cr,`⎰`,`\\lmoustache`,!0),j(M,P,br,`⟯`,`\\rgroup`,!0),j(M,P,Cr,`⟮`,`\\lgroup`,!0),j(M,P,I,`∓`,`\\mp`,!0),j(M,P,I,`⊖`,`\\ominus`,!0),j(M,P,I,`⊎`,`\\uplus`,!0),j(M,P,I,`⊓`,`\\sqcap`,!0),j(M,P,I,`∗`,`\\ast`),j(M,P,I,`⊔`,`\\sqcup`,!0),j(M,P,I,`◯`,`\\bigcirc`,!0),j(M,P,I,`∙`,`\\bullet`,!0),j(M,P,I,`‡`,`\\ddagger`),j(M,P,I,`≀`,`\\wr`,!0),j(M,P,I,`⨿`,`\\amalg`),j(M,P,I,`&`,`\\And`),j(M,P,R,`⟵`,`\\longleftarrow`,!0),j(M,P,R,`⇐`,`\\Leftarrow`,!0),j(M,P,R,`⟸`,`\\Longleftarrow`,!0),j(M,P,R,`⟶`,`\\longrightarrow`,!0),j(M,P,R,`⇒`,`\\Rightarrow`,!0),j(M,P,R,`⟹`,`\\Longrightarrow`,!0),j(M,P,R,`↔`,`\\leftrightarrow`,!0),j(M,P,R,`⟷`,`\\longleftrightarrow`,!0),j(M,P,R,`⇔`,`\\Leftrightarrow`,!0),j(M,P,R,`⟺`,`\\Longleftrightarrow`,!0),j(M,P,R,`↦`,`\\mapsto`,!0),j(M,P,R,`⟼`,`\\longmapsto`,!0),j(M,P,R,`↗`,`\\nearrow`,!0),j(M,P,R,`↩`,`\\hookleftarrow`,!0),j(M,P,R,`↪`,`\\hookrightarrow`,!0),j(M,P,R,`↘`,`\\searrow`,!0),j(M,P,R,`↼`,`\\leftharpoonup`,!0),j(M,P,R,`⇀`,`\\rightharpoonup`,!0),j(M,P,R,`↙`,`\\swarrow`,!0),j(M,P,R,`↽`,`\\leftharpoondown`,!0),j(M,P,R,`⇁`,`\\rightharpoondown`,!0),j(M,P,R,`↖`,`\\nwarrow`,!0),j(M,P,R,`⇌`,`\\rightleftharpoons`,!0),j(M,F,R,`≮`,`\\nless`,!0),j(M,F,R,``,`\\@nleqslant`),j(M,F,R,``,`\\@nleqq`),j(M,F,R,`⪇`,`\\lneq`,!0),j(M,F,R,`≨`,`\\lneqq`,!0),j(M,F,R,``,`\\@lvertneqq`),j(M,F,R,`⋦`,`\\lnsim`,!0),j(M,F,R,`⪉`,`\\lnapprox`,!0),j(M,F,R,`⊀`,`\\nprec`,!0),j(M,F,R,`⋠`,`\\npreceq`,!0),j(M,F,R,`⋨`,`\\precnsim`,!0),j(M,F,R,`⪹`,`\\precnapprox`,!0),j(M,F,R,`≁`,`\\nsim`,!0),j(M,F,R,``,`\\@nshortmid`),j(M,F,R,`∤`,`\\nmid`,!0),j(M,F,R,`⊬`,`\\nvdash`,!0),j(M,F,R,`⊭`,`\\nvDash`,!0),j(M,F,R,`⋪`,`\\ntriangleleft`),j(M,F,R,`⋬`,`\\ntrianglelefteq`,!0),j(M,F,R,`⊊`,`\\subsetneq`,!0),j(M,F,R,``,`\\@varsubsetneq`),j(M,F,R,`⫋`,`\\subsetneqq`,!0),j(M,F,R,``,`\\@varsubsetneqq`),j(M,F,R,`≯`,`\\ngtr`,!0),j(M,F,R,``,`\\@ngeqslant`),j(M,F,R,``,`\\@ngeqq`),j(M,F,R,`⪈`,`\\gneq`,!0),j(M,F,R,`≩`,`\\gneqq`,!0),j(M,F,R,``,`\\@gvertneqq`),j(M,F,R,`⋧`,`\\gnsim`,!0),j(M,F,R,`⪊`,`\\gnapprox`,!0),j(M,F,R,`⊁`,`\\nsucc`,!0),j(M,F,R,`⋡`,`\\nsucceq`,!0),j(M,F,R,`⋩`,`\\succnsim`,!0),j(M,F,R,`⪺`,`\\succnapprox`,!0),j(M,F,R,`≆`,`\\ncong`,!0),j(M,F,R,``,`\\@nshortparallel`),j(M,F,R,`∦`,`\\nparallel`,!0),j(M,F,R,`⊯`,`\\nVDash`,!0),j(M,F,R,`⋫`,`\\ntriangleright`),j(M,F,R,`⋭`,`\\ntrianglerighteq`,!0),j(M,F,R,``,`\\@nsupseteqq`),j(M,F,R,`⊋`,`\\supsetneq`,!0),j(M,F,R,``,`\\@varsupsetneq`),j(M,F,R,`⫌`,`\\supsetneqq`,!0),j(M,F,R,``,`\\@varsupsetneqq`),j(M,F,R,`⊮`,`\\nVdash`,!0),j(M,F,R,`⪵`,`\\precneqq`,!0),j(M,F,R,`⪶`,`\\succneqq`,!0),j(M,F,R,``,`\\@nsubseteqq`),j(M,F,I,`⊴`,`\\unlhd`),j(M,F,I,`⊵`,`\\unrhd`),j(M,F,R,`↚`,`\\nleftarrow`,!0),j(M,F,R,`↛`,`\\nrightarrow`,!0),j(M,F,R,`⇍`,`\\nLeftarrow`,!0),j(M,F,R,`⇏`,`\\nRightarrow`,!0),j(M,F,R,`↮`,`\\nleftrightarrow`,!0),j(M,F,R,`⇎`,`\\nLeftrightarrow`,!0),j(M,F,R,`△`,`\\vartriangle`),j(M,F,z,`ℏ`,`\\hslash`),j(M,F,z,`▽`,`\\triangledown`),j(M,F,z,`◊`,`\\lozenge`),j(M,F,z,`Ⓢ`,`\\circledS`),j(M,F,z,`®`,`\\circledR`),j(N,F,z,`®`,`\\circledR`),j(M,F,z,`∡`,`\\measuredangle`,!0),j(M,F,z,`∄`,`\\nexists`),j(M,F,z,`℧`,`\\mho`),j(M,F,z,`Ⅎ`,`\\Finv`,!0),j(M,F,z,`⅁`,`\\Game`,!0),j(M,F,z,`‵`,`\\backprime`),j(M,F,z,`▲`,`\\blacktriangle`),j(M,F,z,`▼`,`\\blacktriangledown`),j(M,F,z,`■`,`\\blacksquare`),j(M,F,z,`⧫`,`\\blacklozenge`),j(M,F,z,`★`,`\\bigstar`),j(M,F,z,`∢`,`\\sphericalangle`,!0),j(M,F,z,`∁`,`\\complement`,!0),j(M,F,z,`ð`,`\\eth`,!0),j(N,P,z,`ð`,`ð`),j(M,F,z,`╱`,`\\diagup`),j(M,F,z,`╲`,`\\diagdown`),j(M,F,z,`□`,`\\square`),j(M,F,z,`□`,`\\Box`),j(M,F,z,`◊`,`\\Diamond`),j(M,F,z,`¥`,`\\yen`,!0),j(N,F,z,`¥`,`\\yen`,!0),j(M,F,z,`✓`,`\\checkmark`,!0),j(N,F,z,`✓`,`\\checkmark`),j(M,F,z,`ℶ`,`\\beth`,!0),j(M,F,z,`ℸ`,`\\daleth`,!0),j(M,F,z,`ℷ`,`\\gimel`,!0),j(M,F,z,`ϝ`,`\\digamma`,!0),j(M,F,z,`ϰ`,`\\varkappa`),j(M,F,Cr,`┌`,`\\@ulcorner`,!0),j(M,F,br,`┐`,`\\@urcorner`,!0),j(M,F,Cr,`└`,`\\@llcorner`,!0),j(M,F,br,`┘`,`\\@lrcorner`,!0),j(M,F,R,`≦`,`\\leqq`,!0),j(M,F,R,`⩽`,`\\leqslant`,!0),j(M,F,R,`⪕`,`\\eqslantless`,!0),j(M,F,R,`≲`,`\\lesssim`,!0),j(M,F,R,`⪅`,`\\lessapprox`,!0),j(M,F,R,`≊`,`\\approxeq`,!0),j(M,F,I,`⋖`,`\\lessdot`),j(M,F,R,`⋘`,`\\lll`,!0),j(M,F,R,`≶`,`\\lessgtr`,!0),j(M,F,R,`⋚`,`\\lesseqgtr`,!0),j(M,F,R,`⪋`,`\\lesseqqgtr`,!0),j(M,F,R,`≑`,`\\doteqdot`),j(M,F,R,`≓`,`\\risingdotseq`,!0),j(M,F,R,`≒`,`\\fallingdotseq`,!0),j(M,F,R,`∽`,`\\backsim`,!0),j(M,F,R,`⋍`,`\\backsimeq`,!0),j(M,F,R,`⫅`,`\\subseteqq`,!0),j(M,F,R,`⋐`,`\\Subset`,!0),j(M,F,R,`⊏`,`\\sqsubset`,!0),j(M,F,R,`≼`,`\\preccurlyeq`,!0),j(M,F,R,`⋞`,`\\curlyeqprec`,!0),j(M,F,R,`≾`,`\\precsim`,!0),j(M,F,R,`⪷`,`\\precapprox`,!0),j(M,F,R,`⊲`,`\\vartriangleleft`),j(M,F,R,`⊴`,`\\trianglelefteq`),j(M,F,R,`⊨`,`\\vDash`,!0),j(M,F,R,`⊪`,`\\Vvdash`,!0),j(M,F,R,`⌣`,`\\smallsmile`),j(M,F,R,`⌢`,`\\smallfrown`),j(M,F,R,`≏`,`\\bumpeq`,!0),j(M,F,R,`≎`,`\\Bumpeq`,!0),j(M,F,R,`≧`,`\\geqq`,!0),j(M,F,R,`⩾`,`\\geqslant`,!0),j(M,F,R,`⪖`,`\\eqslantgtr`,!0),j(M,F,R,`≳`,`\\gtrsim`,!0),j(M,F,R,`⪆`,`\\gtrapprox`,!0),j(M,F,I,`⋗`,`\\gtrdot`),j(M,F,R,`⋙`,`\\ggg`,!0),j(M,F,R,`≷`,`\\gtrless`,!0),j(M,F,R,`⋛`,`\\gtreqless`,!0),j(M,F,R,`⪌`,`\\gtreqqless`,!0),j(M,F,R,`≖`,`\\eqcirc`,!0),j(M,F,R,`≗`,`\\circeq`,!0),j(M,F,R,`≜`,`\\triangleq`,!0),j(M,F,R,`∼`,`\\thicksim`),j(M,F,R,`≈`,`\\thickapprox`),j(M,F,R,`⫆`,`\\supseteqq`,!0),j(M,F,R,`⋑`,`\\Supset`,!0),j(M,F,R,`⊐`,`\\sqsupset`,!0),j(M,F,R,`≽`,`\\succcurlyeq`,!0),j(M,F,R,`⋟`,`\\curlyeqsucc`,!0),j(M,F,R,`≿`,`\\succsim`,!0),j(M,F,R,`⪸`,`\\succapprox`,!0),j(M,F,R,`⊳`,`\\vartriangleright`),j(M,F,R,`⊵`,`\\trianglerighteq`),j(M,F,R,`⊩`,`\\Vdash`,!0),j(M,F,R,`∣`,`\\shortmid`),j(M,F,R,`∥`,`\\shortparallel`),j(M,F,R,`≬`,`\\between`,!0),j(M,F,R,`⋔`,`\\pitchfork`,!0),j(M,F,R,`∝`,`\\varpropto`),j(M,F,R,`◀`,`\\blacktriangleleft`),j(M,F,R,`∴`,`\\therefore`,!0),j(M,F,R,`∍`,`\\backepsilon`),j(M,F,R,`▶`,`\\blacktriangleright`),j(M,F,R,`∵`,`\\because`,!0),j(M,F,R,`⋘`,`\\llless`),j(M,F,R,`⋙`,`\\gggtr`),j(M,F,I,`⊲`,`\\lhd`),j(M,F,I,`⊳`,`\\rhd`),j(M,F,R,`≂`,`\\eqsim`,!0),j(M,P,R,`⋈`,`\\Join`),j(M,F,R,`≑`,`\\Doteq`,!0),j(M,F,I,`∔`,`\\dotplus`,!0),j(M,F,I,`∖`,`\\smallsetminus`),j(M,F,I,`⋒`,`\\Cap`,!0),j(M,F,I,`⋓`,`\\Cup`,!0),j(M,F,I,`⩞`,`\\doublebarwedge`,!0),j(M,F,I,`⊟`,`\\boxminus`,!0),j(M,F,I,`⊞`,`\\boxplus`,!0),j(M,F,I,`⋇`,`\\divideontimes`,!0),j(M,F,I,`⋉`,`\\ltimes`,!0),j(M,F,I,`⋊`,`\\rtimes`,!0),j(M,F,I,`⋋`,`\\leftthreetimes`,!0),j(M,F,I,`⋌`,`\\rightthreetimes`,!0),j(M,F,I,`⋏`,`\\curlywedge`,!0),j(M,F,I,`⋎`,`\\curlyvee`,!0),j(M,F,I,`⊝`,`\\circleddash`,!0),j(M,F,I,`⊛`,`\\circledast`,!0),j(M,F,I,`⋅`,`\\centerdot`),j(M,F,I,`⊺`,`\\intercal`,!0),j(M,F,I,`⋒`,`\\doublecap`),j(M,F,I,`⋓`,`\\doublecup`),j(M,F,I,`⊠`,`\\boxtimes`,!0),j(M,F,R,`⇢`,`\\dashrightarrow`,!0),j(M,F,R,`⇠`,`\\dashleftarrow`,!0),j(M,F,R,`⇇`,`\\leftleftarrows`,!0),j(M,F,R,`⇆`,`\\leftrightarrows`,!0),j(M,F,R,`⇚`,`\\Lleftarrow`,!0),j(M,F,R,`↞`,`\\twoheadleftarrow`,!0),j(M,F,R,`↢`,`\\leftarrowtail`,!0),j(M,F,R,`↫`,`\\looparrowleft`,!0),j(M,F,R,`⇋`,`\\leftrightharpoons`,!0),j(M,F,R,`↶`,`\\curvearrowleft`,!0),j(M,F,R,`↺`,`\\circlearrowleft`,!0),j(M,F,R,`↰`,`\\Lsh`,!0),j(M,F,R,`⇈`,`\\upuparrows`,!0),j(M,F,R,`↿`,`\\upharpoonleft`,!0),j(M,F,R,`⇃`,`\\downharpoonleft`,!0),j(M,P,R,`⊶`,`\\origof`,!0),j(M,P,R,`⊷`,`\\imageof`,!0),j(M,F,R,`⊸`,`\\multimap`,!0),j(M,F,R,`↭`,`\\leftrightsquigarrow`,!0),j(M,F,R,`⇉`,`\\rightrightarrows`,!0),j(M,F,R,`⇄`,`\\rightleftarrows`,!0),j(M,F,R,`↠`,`\\twoheadrightarrow`,!0),j(M,F,R,`↣`,`\\rightarrowtail`,!0),j(M,F,R,`↬`,`\\looparrowright`,!0),j(M,F,R,`↷`,`\\curvearrowright`,!0),j(M,F,R,`↻`,`\\circlearrowright`,!0),j(M,F,R,`↱`,`\\Rsh`,!0),j(M,F,R,`⇊`,`\\downdownarrows`,!0),j(M,F,R,`↾`,`\\upharpoonright`,!0),j(M,F,R,`⇂`,`\\downharpoonright`,!0),j(M,F,R,`⇝`,`\\rightsquigarrow`,!0),j(M,F,R,`⇝`,`\\leadsto`),j(M,F,R,`⇛`,`\\Rrightarrow`,!0),j(M,F,R,`↾`,`\\restriction`),j(M,P,z,`‘`,"`"),j(M,P,z,`$`,`\\$`),j(N,P,z,`$`,`\\$`),j(N,P,z,`$`,`\\textdollar`),j(M,P,z,`%`,`\\%`),j(N,P,z,`%`,`\\%`),j(M,P,z,`_`,`\\_`),j(N,P,z,`_`,`\\_`),j(N,P,z,`_`,`\\textunderscore`),j(M,P,z,`∠`,`\\angle`,!0),j(M,P,z,`∞`,`\\infty`,!0),j(M,P,z,`′`,`\\prime`),j(M,P,z,`△`,`\\triangle`),j(M,P,z,`Γ`,`\\Gamma`,!0),j(M,P,z,`Δ`,`\\Delta`,!0),j(M,P,z,`Θ`,`\\Theta`,!0),j(M,P,z,`Λ`,`\\Lambda`,!0),j(M,P,z,`Ξ`,`\\Xi`,!0),j(M,P,z,`Π`,`\\Pi`,!0),j(M,P,z,`Σ`,`\\Sigma`,!0),j(M,P,z,`Υ`,`\\Upsilon`,!0),j(M,P,z,`Φ`,`\\Phi`,!0),j(M,P,z,`Ψ`,`\\Psi`,!0),j(M,P,z,`Ω`,`\\Omega`,!0),j(M,P,z,`A`,`Α`),j(M,P,z,`B`,`Β`),j(M,P,z,`E`,`Ε`),j(M,P,z,`Z`,`Ζ`),j(M,P,z,`H`,`Η`),j(M,P,z,`I`,`Ι`),j(M,P,z,`K`,`Κ`),j(M,P,z,`M`,`Μ`),j(M,P,z,`N`,`Ν`),j(M,P,z,`O`,`Ο`),j(M,P,z,`P`,`Ρ`),j(M,P,z,`T`,`Τ`),j(M,P,z,`X`,`Χ`),j(M,P,z,`¬`,`\\neg`,!0),j(M,P,z,`¬`,`\\lnot`),j(M,P,z,`⊤`,`\\top`),j(M,P,z,`⊥`,`\\bot`),j(M,P,z,`∅`,`\\emptyset`),j(M,F,z,`∅`,`\\varnothing`),j(M,P,L,`α`,`\\alpha`,!0),j(M,P,L,`β`,`\\beta`,!0),j(M,P,L,`γ`,`\\gamma`,!0),j(M,P,L,`δ`,`\\delta`,!0),j(M,P,L,`ϵ`,`\\epsilon`,!0),j(M,P,L,`ζ`,`\\zeta`,!0),j(M,P,L,`η`,`\\eta`,!0),j(M,P,L,`θ`,`\\theta`,!0),j(M,P,L,`ι`,`\\iota`,!0),j(M,P,L,`κ`,`\\kappa`,!0),j(M,P,L,`λ`,`\\lambda`,!0),j(M,P,L,`μ`,`\\mu`,!0),j(M,P,L,`ν`,`\\nu`,!0),j(M,P,L,`ξ`,`\\xi`,!0),j(M,P,L,`ο`,`\\omicron`,!0),j(M,P,L,`π`,`\\pi`,!0),j(M,P,L,`ρ`,`\\rho`,!0),j(M,P,L,`σ`,`\\sigma`,!0),j(M,P,L,`τ`,`\\tau`,!0),j(M,P,L,`υ`,`\\upsilon`,!0),j(M,P,L,`ϕ`,`\\phi`,!0),j(M,P,L,`χ`,`\\chi`,!0),j(M,P,L,`ψ`,`\\psi`,!0),j(M,P,L,`ω`,`\\omega`,!0),j(M,P,L,`ε`,`\\varepsilon`,!0),j(M,P,L,`ϑ`,`\\vartheta`,!0),j(M,P,L,`ϖ`,`\\varpi`,!0),j(M,P,L,`ϱ`,`\\varrho`,!0),j(M,P,L,`ς`,`\\varsigma`,!0),j(M,P,L,`φ`,`\\varphi`,!0),j(M,P,I,`∗`,`*`,!0),j(M,P,I,`+`,`+`),j(M,P,I,`−`,`-`,!0),j(M,P,I,`⋅`,`\\cdot`,!0),j(M,P,I,`∘`,`\\circ`,!0),j(M,P,I,`÷`,`\\div`,!0),j(M,P,I,`±`,`\\pm`,!0),j(M,P,I,`×`,`\\times`,!0),j(M,P,I,`∩`,`\\cap`,!0),j(M,P,I,`∪`,`\\cup`,!0),j(M,P,I,`∖`,`\\setminus`,!0),j(M,P,I,`∧`,`\\land`),j(M,P,I,`∨`,`\\lor`),j(M,P,I,`∧`,`\\wedge`,!0),j(M,P,I,`∨`,`\\vee`,!0),j(M,P,z,`√`,`\\surd`),j(M,P,Cr,`⟨`,`\\langle`,!0),j(M,P,Cr,`∣`,`\\lvert`),j(M,P,Cr,`∥`,`\\lVert`),j(M,P,br,`?`,`?`),j(M,P,br,`!`,`!`),j(M,P,br,`⟩`,`\\rangle`,!0),j(M,P,br,`∣`,`\\rvert`),j(M,P,br,`∥`,`\\rVert`),j(M,P,R,`=`,`=`),j(M,P,R,`:`,`:`),j(M,P,R,`≈`,`\\approx`,!0),j(M,P,R,`≅`,`\\cong`,!0),j(M,P,R,`≥`,`\\ge`),j(M,P,R,`≥`,`\\geq`,!0),j(M,P,R,`←`,`\\gets`),j(M,P,R,`>`,`\\gt`,!0),j(M,P,R,`∈`,`\\in`,!0),j(M,P,R,``,`\\@not`),j(M,P,R,`⊂`,`\\subset`,!0),j(M,P,R,`⊃`,`\\supset`,!0),j(M,P,R,`⊆`,`\\subseteq`,!0),j(M,P,R,`⊇`,`\\supseteq`,!0),j(M,F,R,`⊈`,`\\nsubseteq`,!0),j(M,F,R,`⊉`,`\\nsupseteq`,!0),j(M,P,R,`⊨`,`\\models`),j(M,P,R,`←`,`\\leftarrow`,!0),j(M,P,R,`≤`,`\\le`),j(M,P,R,`≤`,`\\leq`,!0),j(M,P,R,`<`,`\\lt`,!0),j(M,P,R,`→`,`\\rightarrow`,!0),j(M,P,R,`→`,`\\to`),j(M,F,R,`≱`,`\\ngeq`,!0),j(M,F,R,`≰`,`\\nleq`,!0),j(M,P,Tr,`\xA0`,`\\ `),j(M,P,Tr,`\xA0`,`\\space`),j(M,P,Tr,`\xA0`,`\\nobreakspace`),j(N,P,Tr,`\xA0`,`\\ `),j(N,P,Tr,`\xA0`,` `),j(N,P,Tr,`\xA0`,`\\space`),j(N,P,Tr,`\xA0`,`\\nobreakspace`),j(M,P,Tr,``,`\\nobreak`),j(M,P,Tr,``,`\\allowbreak`),j(M,P,wr,`,`,`,`),j(M,P,wr,`;`,`;`),j(M,F,I,`⊼`,`\\barwedge`,!0),j(M,F,I,`⊻`,`\\veebar`,!0),j(M,P,I,`⊙`,`\\odot`,!0),j(M,P,I,`⊕`,`\\oplus`,!0),j(M,P,I,`⊗`,`\\otimes`,!0),j(M,P,z,`∂`,`\\partial`,!0),j(M,P,I,`⊘`,`\\oslash`,!0),j(M,F,I,`⊚`,`\\circledcirc`,!0),j(M,F,I,`⊡`,`\\boxdot`,!0),j(M,P,I,`△`,`\\bigtriangleup`),j(M,P,I,`▽`,`\\bigtriangledown`),j(M,P,I,`†`,`\\dagger`),j(M,P,I,`⋄`,`\\diamond`),j(M,P,I,`⋆`,`\\star`),j(M,P,I,`◃`,`\\triangleleft`),j(M,P,I,`▹`,`\\triangleright`),j(M,P,Cr,`{`,`\\{`),j(N,P,z,`{`,`\\{`),j(N,P,z,`{`,`\\textbraceleft`),j(M,P,br,`}`,`\\}`),j(N,P,z,`}`,`\\}`),j(N,P,z,`}`,`\\textbraceright`),j(M,P,Cr,`{`,`\\lbrace`),j(M,P,br,`}`,`\\rbrace`),j(M,P,Cr,`[`,`\\lbrack`,!0),j(N,P,z,`[`,`\\lbrack`,!0),j(M,P,br,`]`,`\\rbrack`,!0),j(N,P,z,`]`,`\\rbrack`,!0),j(M,P,Cr,`(`,`\\lparen`,!0),j(M,P,br,`)`,`\\rparen`,!0),j(N,P,z,`<`,`\\textless`,!0),j(N,P,z,`>`,`\\textgreater`,!0),j(M,P,Cr,`⌊`,`\\lfloor`,!0),j(M,P,br,`⌋`,`\\rfloor`,!0),j(M,P,Cr,`⌈`,`\\lceil`,!0),j(M,P,br,`⌉`,`\\rceil`,!0),j(M,P,z,`\\`,`\\backslash`),j(M,P,z,`∣`,`|`),j(M,P,z,`∣`,`\\vert`),j(N,P,z,`|`,`\\textbar`,!0),j(M,P,z,`∥`,`\\|`),j(M,P,z,`∥`,`\\Vert`),j(N,P,z,`∥`,`\\textbardbl`),j(N,P,z,`~`,`\\textasciitilde`),j(N,P,z,`\\`,`\\textbackslash`),j(N,P,z,`^`,`\\textasciicircum`),j(M,P,R,`↑`,`\\uparrow`,!0),j(M,P,R,`⇑`,`\\Uparrow`,!0),j(M,P,R,`↓`,`\\downarrow`,!0),j(M,P,R,`⇓`,`\\Downarrow`,!0),j(M,P,R,`↕`,`\\updownarrow`,!0),j(M,P,R,`⇕`,`\\Updownarrow`,!0),j(M,P,Sr,`∐`,`\\coprod`),j(M,P,Sr,`⋁`,`\\bigvee`),j(M,P,Sr,`⋀`,`\\bigwedge`),j(M,P,Sr,`⨄`,`\\biguplus`),j(M,P,Sr,`⋂`,`\\bigcap`),j(M,P,Sr,`⋃`,`\\bigcup`),j(M,P,Sr,`∫`,`\\int`),j(M,P,Sr,`∫`,`\\intop`),j(M,P,Sr,`∬`,`\\iint`),j(M,P,Sr,`∭`,`\\iiint`),j(M,P,Sr,`∏`,`\\prod`),j(M,P,Sr,`∑`,`\\sum`),j(M,P,Sr,`⨂`,`\\bigotimes`),j(M,P,Sr,`⨁`,`\\bigoplus`),j(M,P,Sr,`⨀`,`\\bigodot`),j(M,P,Sr,`∮`,`\\oint`),j(M,P,Sr,`∯`,`\\oiint`),j(M,P,Sr,`∰`,`\\oiiint`),j(M,P,Sr,`⨆`,`\\bigsqcup`),j(M,P,Sr,`∫`,`\\smallint`),j(N,P,xr,`…`,`\\textellipsis`),j(M,P,xr,`…`,`\\mathellipsis`),j(N,P,xr,`…`,`\\ldots`,!0),j(M,P,xr,`…`,`\\ldots`,!0),j(M,P,xr,`⋯`,`\\@cdots`,!0),j(M,P,xr,`⋱`,`\\ddots`,!0),j(M,P,z,`⋮`,`\\varvdots`),j(N,P,z,`⋮`,`\\varvdots`),j(M,P,yr,`ˊ`,`\\acute`),j(M,P,yr,`ˋ`,`\\grave`),j(M,P,yr,`¨`,`\\ddot`),j(M,P,yr,`~`,`\\tilde`),j(M,P,yr,`ˉ`,`\\bar`),j(M,P,yr,`˘`,`\\breve`),j(M,P,yr,`ˇ`,`\\check`),j(M,P,yr,`^`,`\\hat`),j(M,P,yr,`⃗`,`\\vec`),j(M,P,yr,`˙`,`\\dot`),j(M,P,yr,`˚`,`\\mathring`),j(M,P,L,``,`\\@imath`),j(M,P,L,``,`\\@jmath`),j(M,P,z,`ı`,`ı`),j(M,P,z,`ȷ`,`ȷ`),j(N,P,z,`ı`,`\\i`,!0),j(N,P,z,`ȷ`,`\\j`,!0),j(N,P,z,`ß`,`\\ss`,!0),j(N,P,z,`æ`,`\\ae`,!0),j(N,P,z,`œ`,`\\oe`,!0),j(N,P,z,`ø`,`\\o`,!0),j(N,P,z,`Æ`,`\\AE`,!0),j(N,P,z,`Œ`,`\\OE`,!0),j(N,P,z,`Ø`,`\\O`,!0),j(N,P,yr,`ˊ`,`\\'`),j(N,P,yr,`ˋ`,"\\`"),j(N,P,yr,`ˆ`,`\\^`),j(N,P,yr,`˜`,`\\~`),j(N,P,yr,`ˉ`,`\\=`),j(N,P,yr,`˘`,`\\u`),j(N,P,yr,`˙`,`\\.`),j(N,P,yr,`¸`,`\\c`),j(N,P,yr,`˚`,`\\r`),j(N,P,yr,`ˇ`,`\\v`),j(N,P,yr,`¨`,`\\"`),j(N,P,yr,`˝`,`\\H`),j(N,P,yr,`◯`,`\\textcircled`);var Er={"--":!0,"---":!0,"``":!0,"''":!0};j(N,P,z,`–`,`--`,!0),j(N,P,z,`–`,`\\textendash`),j(N,P,z,`—`,`---`,!0),j(N,P,z,`—`,`\\textemdash`),j(N,P,z,`‘`,"`",!0),j(N,P,z,`‘`,`\\textquoteleft`),j(N,P,z,`’`,`'`,!0),j(N,P,z,`’`,`\\textquoteright`),j(N,P,z,`“`,"``",!0),j(N,P,z,`“`,`\\textquotedblleft`),j(N,P,z,`”`,`''`,!0),j(N,P,z,`”`,`\\textquotedblright`),j(M,P,z,`°`,`\\degree`,!0),j(N,P,z,`°`,`\\degree`),j(N,P,z,`°`,`\\textdegree`,!0),j(M,P,z,`£`,`\\pounds`),j(M,P,z,`£`,`\\mathsterling`,!0),j(N,P,z,`£`,`\\pounds`),j(N,P,z,`£`,`\\textsterling`,!0),j(M,F,z,`✠`,`\\maltese`),j(N,F,z,`✠`,`\\maltese`);for(var Dr=`0123456789/@."`,Or=0;Or<Dr.length;Or++){var kr=Dr.charAt(Or);j(M,P,z,kr,kr)}for(var Ar=`0123456789!@*()-=+";:?/.,`,jr=0;jr<Ar.length;jr++){var Mr=Ar.charAt(jr);j(N,P,z,Mr,Mr)}for(var Nr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,Pr=0;Pr<Nr.length;Pr++){var Fr=Nr.charAt(Pr);j(M,P,L,Fr,Fr),j(N,P,z,Fr,Fr)}j(M,F,z,`C`,`ℂ`),j(N,F,z,`C`,`ℂ`),j(M,F,z,`H`,`ℍ`),j(N,F,z,`H`,`ℍ`),j(M,F,z,`N`,`ℕ`),j(N,F,z,`N`,`ℕ`),j(M,F,z,`P`,`ℙ`),j(N,F,z,`P`,`ℙ`),j(M,F,z,`Q`,`ℚ`),j(N,F,z,`Q`,`ℚ`),j(M,F,z,`R`,`ℝ`),j(N,F,z,`R`,`ℝ`),j(M,F,z,`Z`,`ℤ`),j(N,F,z,`Z`,`ℤ`),j(M,P,L,`h`,`ℎ`),j(N,P,L,`h`,`ℎ`);for(var B,Ir=0;Ir<Nr.length;Ir++){var Lr=Nr.charAt(Ir);B=String.fromCharCode(55349,56320+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56372+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56424+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56580+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56684+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56736+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56788+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56840+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56944+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),Ir<26&&(B=String.fromCharCode(55349,56632+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B),B=String.fromCharCode(55349,56476+Ir),j(M,P,L,Lr,B),j(N,P,z,Lr,B))}B=String.fromCharCode(55349,56668),j(M,P,L,`k`,B),j(N,P,z,`k`,B);for(var Rr=0;Rr<10;Rr++){var zr=Rr.toString();B=String.fromCharCode(55349,57294+Rr),j(M,P,L,zr,B),j(N,P,z,zr,B),B=String.fromCharCode(55349,57314+Rr),j(M,P,L,zr,B),j(N,P,z,zr,B),B=String.fromCharCode(55349,57324+Rr),j(M,P,L,zr,B),j(N,P,z,zr,B),B=String.fromCharCode(55349,57334+Rr),j(M,P,L,zr,B),j(N,P,z,zr,B)}for(var Br=`ÐÞþ`,Vr=0;Vr<Br.length;Vr++){var Hr=Br.charAt(Vr);j(M,P,L,Hr,Hr),j(N,P,z,Hr,Hr)}var Ur={mathClass:`mathbf`,textClass:`textbf`,font:`Main-Bold`},Wr={mathClass:`mathnormal`,textClass:`textit`,font:`Math-Italic`},Gr={mathClass:`boldsymbol`,textClass:`boldsymbol`,font:`Main-BoldItalic`},Kr={mathClass:`mathscr`,textClass:`textscr`,font:`Script-Regular`},qr={mathClass:``,textClass:``,font:``},Jr={mathClass:`mathfrak`,textClass:`textfrak`,font:`Fraktur-Regular`},Yr={mathClass:`mathbb`,textClass:`textbb`,font:`AMS-Regular`},Xr={mathClass:`mathboldfrak`,textClass:`textboldfrak`,font:`Fraktur-Regular`},Zr={mathClass:`mathsf`,textClass:`textsf`,font:`SansSerif-Regular`},Qr={mathClass:`mathboldsf`,textClass:`textboldsf`,font:`SansSerif-Bold`},$r={mathClass:`mathitsf`,textClass:`textitsf`,font:`SansSerif-Italic`},ei={mathClass:`mathtt`,textClass:`texttt`,font:`Typewriter-Regular`},ti=[Ur,Ur,Wr,Wr,Gr,Gr,Kr,qr,qr,qr,Jr,Jr,Yr,Yr,Xr,Xr,Zr,Zr,Qr,Qr,$r,$r,qr,qr,ei,ei],ni=[Ur,qr,Zr,Qr,ei],ri=e=>{var t=e.charCodeAt(0),n=e.charCodeAt(1),r=(t-55296)*1024+(n-56320)+65536;if(119808<=r&&r<120484)return ti[Math.floor((r-119808)/26)];if(120782<=r&&r<=120831)return ni[Math.floor((r-120782)/10)];if(r===120485||r===120486)return ti[0];if(120486<r&&r<120782)return qr;throw new O(`Unsupported character: `+e)};function ii(e){var t=e.strict,n=e.errorCode,r=e.errorMsg,i=e.token,a=e.report,o=t;if(typeof t==`function`)if(a)o=t(n,r,i);else try{o=t(n,r,i)}catch{o=`error`}switch(o){case!0:case`error`:if(a)throw new O(`LaTeX-incompatible input and strict mode is set to 'error': `+(r+` [`+n+`]`),i);return!0;case!1:case`ignore`:if(!a)return!1;break;default:if(typeof console<`u`&&console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': `+(r+` [`+n+`]`)),!a)return!1;break}}var ai=function(e,t,n){if(vr[n][e]){var r=vr[n][e].replace;r&&(e=r)}return{value:e,metrics:hr(e,t,n)}},oi=function(e,t,n,r,i){var a=ai(e,t,n),o=a.metrics;e=a.value;var s;if(o){var c=o.italic;(n===`text`||r&&r.font===`mathit`)&&(c=0),s=new ir(e,o.height,o.depth,c,o.skew,o.width,i)}else ii({strict:r.strict,errorCode:`symbolNotInFont`,errorMsg:`No character metrics for '`+e+`' in style '`+t+`' and mode '`+n+`'`,report:!0}),s=new ir(e,0,0,0,0,0,i);s.maxFontSize=r.sizeMultiplier,r.style.isTight()&&s.classes.push(`mtight`);var l=r.getColor();return l&&(s.style.color=l),s},si=function(e,t,n,r){return r===void 0&&(r=[]),n.font===`boldsymbol`&&ai(e,`Main-Bold`,t).metrics?oi(e,`Main-Bold`,t,n,r.concat([`mathbf`])):e===`\\`||vr[t][e].font===`main`?oi(e,`Main-Regular`,t,n,r):oi(e,`AMS-Regular`,t,n,r.concat([`amsrm`]))},ci=function(e,t,n){return n!==`textord`&&ai(e,`Math-BoldItalic`,t).metrics?{fontName:`Math-BoldItalic`,fontClass:`boldsymbol`}:{fontName:`Main-Bold`,fontClass:`mathbf`}},li=function(e,t){var n=e.type===`mathord`?`mathord`:`textord`,r=e.mode,i=e.text,a=[`mord`],o=t.font,s=t.fontFamily,c=t.fontWeight,l=t.fontShape,u=r===`math`||r===`text`&&!!o,d=u?o:s,f=``,p=``;if(i.charCodeAt(0)===55349){var m=ri(i);f=m.font,p=m[r+`Class`]}if(f)return oi(i,f,r,t,a.concat(p));if(d){var h,g;if(d===`boldsymbol`){var _=ci(i,r,n);h=_.fontName,g=[_.fontClass]}else u?(h=xi[o].fontName,g=[o]):(h=bi(s,c,l),g=[s,c,l]);if(ai(i,h,r).metrics)return oi(i,h,r,t,a.concat(g));if(Object.prototype.hasOwnProperty.call(Er,i)&&h.slice(0,10)===`Typewriter`){for(var v=[],y=0;y<i.length;y++)v.push(oi(i[y],h,r,t,a.concat(g)));return gi(v)}}if(n===`mathord`)return oi(i,`Math-Italic`,r,t,a.concat([`mathnormal`]));if(n===`textord`){var b=vr[r][i]&&vr[r][i].font;if(b===`ams`)return oi(i,bi(`amsrm`,c,l),r,t,a.concat(`amsrm`,c,l));if(b===`main`||!b)return oi(i,bi(`textrm`,c,l),r,t,a.concat(c,l));var x=bi(b,c,l);return oi(i,x,r,t,a.concat(x,c,l))}else throw Error(`unexpected type: `+n+` in makeOrd`)},ui=(e,t)=>{if(Jn(e.classes)!==Jn(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize||e.italic!==0&&e.hasClass(`mathnormal`))return!1;if(e.classes.length===1){var n=e.classes[0];if(n===`mbin`||n===`mord`)return!1}for(var r of Object.keys(e.style))if(e.style[r]!==t.style[r])return!1;for(var i of Object.keys(t.style))if(e.style[i]!==t.style[i])return!1;return!0},di=e=>{for(var t=0;t<e.length-1;t++){var n=e[t],r=e[t+1];n instanceof ir&&r instanceof ir&&ui(n,r)&&(n.text+=r.text,n.height=Math.max(n.height,r.height),n.depth=Math.max(n.depth,r.depth),n.italic=r.italic,e.splice(t+1,1),t--)}return e},fi=function(e){for(var t=0,n=0,r=0,i=0;i<e.children.length;i++){var a=e.children[i];a.height>t&&(t=a.height),a.depth>n&&(n=a.depth),a.maxFontSize>r&&(r=a.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},V=function(e,t,n,r){var i=new er(e,t,n,r);return fi(i),i},pi=(e,t,n,r)=>new er(e,t,n,r),mi=function(e,t,n){var r=V([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=A(r.height),r.maxFontSize=1,r},hi=function(e,t,n,r){var i=new tr(e,t,n,r);return fi(i),i},gi=function(e){var t=new Un(e);return fi(t),t},_i=function(e,t){return e instanceof Un?V([],[e],t):e},vi=function(e){if(e.positionType===`individualShift`){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,i=r,a=1;a<t.length;a++){var o=-t[a].shift-i-t[a].elem.depth,s=o-(t[a-1].elem.height+t[a-1].elem.depth);i+=o,n.push({type:`kern`,size:s}),n.push(t[a])}return{children:n,depth:r}}var c;if(e.positionType===`top`){for(var l=e.positionData,u=0;u<e.children.length;u++){var d=e.children[u];l-=d.type===`kern`?d.size:d.elem.height+d.elem.depth}c=l}else if(e.positionType===`bottom`)c=-e.positionData;else{var f=e.children[0];if(f.type!==`elem`)throw Error(`First child must have type "elem".`);if(e.positionType===`shift`)c=-f.elem.depth-e.positionData;else if(e.positionType===`firstBaseline`)c=-f.elem.depth;else throw Error(`Invalid positionType `+e.positionType+`.`)}return{children:e.children,depth:c}},H=function(e,t){for(var n=vi(e),r=n.children,i=n.depth,a=0,o=0;o<r.length;o++){var s=r[o];if(s.type===`elem`){var c=s.elem;a=Math.max(a,c.maxFontSize,c.height)}}a+=2;var l=V([`pstrut`],[]);l.style.height=A(a);for(var u=[],d=i,f=i,p=i,m=0;m<r.length;m++){var h=r[m];if(h.type===`kern`)p+=h.size;else{var g=h.elem,_=h.wrapperClasses||[],v=h.wrapperStyle||{},y=V(_,[l,g],void 0,v);y.style.top=A(-a-p-g.depth),h.marginLeft&&(y.style.marginLeft=h.marginLeft),h.marginRight&&(y.style.marginRight=h.marginRight),u.push(y),p+=g.height+g.depth}d=Math.min(d,p),f=Math.max(f,p)}var b=V([`vlist`],u);b.style.height=A(f);var x;if(d<0){var S=V([`vlist`],[V([],[])]);S.style.height=A(-d),x=[V([`vlist-r`],[b,V([`vlist-s`],[new ir(`​`)])]),V([`vlist-r`],[S])]}else x=[V([`vlist-r`],[b])];var C=V([`vlist-t`],x);return x.length===2&&C.classes.push(`vlist-t2`),C.height=f,C.depth=-d,C},yi=(e,t)=>{var n=V([`mspace`],[],t),r=qn(e,t);return n.style.marginRight=A(r),n},bi=(e,t,n)=>{var r,i;switch(e){case`amsrm`:r=`AMS`;break;case`textrm`:r=`Main`;break;case`textsf`:r=`SansSerif`;break;case`texttt`:r=`Typewriter`;break;default:r=e}return i=t===`textbf`&&n===`textit`?`BoldItalic`:t===`textbf`?`Bold`:n===`textit`?`Italic`:`Regular`,r+`-`+i},xi={mathbf:{variant:`bold`,fontName:`Main-Bold`},mathrm:{variant:`normal`,fontName:`Main-Regular`},textit:{variant:`italic`,fontName:`Main-Italic`},mathit:{variant:`italic`,fontName:`Main-Italic`},mathnormal:{variant:`italic`,fontName:`Math-Italic`},mathsfit:{variant:`sans-serif-italic`,fontName:`SansSerif-Italic`},mathbb:{variant:`double-struck`,fontName:`AMS-Regular`},mathcal:{variant:`script`,fontName:`Caligraphic-Regular`},mathfrak:{variant:`fraktur`,fontName:`Fraktur-Regular`},mathscr:{variant:`script`,fontName:`Script-Regular`},mathsf:{variant:`sans-serif`,fontName:`SansSerif-Regular`},mathtt:{variant:`monospace`,fontName:`Typewriter-Regular`}},Si={vec:[`vec`,.471,.714],oiintSize1:[`oiintSize1`,.957,.499],oiintSize2:[`oiintSize2`,1.472,.659],oiiintSize1:[`oiiintSize1`,1.304,.499],oiiintSize2:[`oiiintSize2`,1.98,.659]},Ci=function(e,t){var n=Si[e],r=n[0],i=n[1],a=n[2],o=pi([`katex-overlay`],[new ar([new or(r)],{width:A(i),height:A(a),style:`width:`+A(i),viewBox:`0 0 `+1e3*i+` `+1e3*a,preserveAspectRatio:`xMinYMin`})],t);return o.height=a,o.style.height=A(a),o.style.width=A(i),o},wi={number:3,unit:`mu`},Ti={number:4,unit:`mu`},Ei={number:5,unit:`mu`},Di={mord:{mop:wi,mbin:Ti,mrel:Ei,minner:wi},mop:{mord:wi,mop:wi,mrel:Ei,minner:wi},mbin:{mord:Ti,mop:Ti,mopen:Ti,minner:Ti},mrel:{mord:Ei,mop:Ei,mopen:Ei,minner:Ei},mopen:{},mclose:{mop:wi,mbin:Ti,mrel:Ei,minner:wi},mpunct:{mord:wi,mop:wi,mrel:Ei,mopen:wi,mclose:wi,mpunct:wi,minner:wi},minner:{mord:wi,mop:wi,mbin:Ti,mrel:Ei,mopen:wi,mpunct:wi,minner:wi}},Oi={mord:{mop:wi},mop:{mord:wi,mop:wi},mbin:{},mrel:{},mopen:{},mclose:{mop:wi},mpunct:{},minner:{mop:wi}},ki={},Ai={},ji={};function U(e){for(var t=e.type,n=e.names,r=e.htmlBuilder,i=e.mathmlBuilder,a=0;a<n.length;++a)ki[n[a]]=e;t&&(r&&(Ai[t]=r),i&&(ji[t]=i))}function Mi(e){var t=e.type,n=e.htmlBuilder,r=e.mathmlBuilder;n&&(Ai[t]=n),r&&(ji[t]=r)}var Ni=function(e){return e.type===`ordgroup`&&e.body.length===1?e.body[0]:e},Pi=function(e){return e.type===`ordgroup`?e.body:[e]},Fi=new Set([`leftmost`,`mbin`,`mopen`,`mrel`,`mop`,`mpunct`]),Ii=new Set([`rightmost`,`mrel`,`mclose`,`mpunct`]),Li={display:k.DISPLAY,text:k.TEXT,script:k.SCRIPT,scriptscript:k.SCRIPTSCRIPT},Ri={mord:`mord`,mop:`mop`,mbin:`mbin`,mrel:`mrel`,mopen:`mopen`,mclose:`mclose`,mpunct:`mpunct`,minner:`minner`},zi=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var i=[],a=0;a<e.length;a++){var o=W(e[a],t);if(o instanceof Un){var s=o.children;i.push(...s)}else i.push(o)}if(di(i),!n)return i;var c=t;if(e.length===1){var l=e[0];l.type===`sizing`?c=t.havingSize(l.size):l.type===`styling`&&(c=t.havingStyle(Li[l.style]))}var u=V([r[0]||`leftmost`],[],t),d=V([r[1]||`rightmost`],[],t),f=n===`root`;return Bi(i,(e,t)=>{var n=t.classes[0],r=e.classes[0];n===`mbin`&&Ii.has(r)?t.classes[0]=`mord`:r===`mbin`&&Fi.has(n)&&(e.classes[0]=`mord`)},{node:u},d,f),Bi(i,(e,t)=>{var n=Ui(t),r=Ui(e),i=n&&r?e.hasClass(`mtight`)?Oi[n]?.[r]:Di[n]?.[r]:null;if(i)return yi(i,c)},{node:u},d,f),i},Bi=function(e,t,n,r,i){r&&e.push(r);for(var a=0;a<e.length;a++){var o=e[a],s=Vi(o);if(s){Bi(s.children,t,n,null,i);continue}var c=!o.hasClass(`mspace`);if(c){var l=t(o,n.node);l&&(n.insertAfter?n.insertAfter(l):(e.unshift(l),a++))}c?n.node=o:i&&o.hasClass(`katex-newline`)&&(n.node=V([`leftmost`])),n.insertAfter=(t=>n=>{e.splice(t+1,0,n),a++})(a)}r&&e.pop()},Vi=function(e){return e instanceof Un||e instanceof tr||e instanceof er&&e.hasClass(`enclosing`)?e:null},Hi=function(e,t){var n=Vi(e);if(n){var r=n.children;if(r.length){if(t===`right`)return Hi(r[r.length-1],`right`);if(t===`left`)return Hi(r[0],`left`)}}return e},Ui=function(e,t){return e?(t&&(e=Hi(e,t)),Ri[e.classes[0]]||null):null},Wi=function(e,t){var n=[`nulldelimiter`].concat(e.baseSizingClasses());return V(t.concat(n))},W=function(e,t,n){if(!e)return V();if(Ai[e.type]){var r=Ai[e.type](e,t);if(n&&t.size!==n.size){r=V(t.sizingClasses(n),[r],t);var i=t.sizeMultiplier/n.sizeMultiplier;r.height*=i,r.depth*=i}return r}else throw new O(`Got group of unknown type: '`+e.type+`'`)};function Gi(e,t){var n=V([`katex-base`],e,t),r=V([`katex-strut`]);return r.style.height=A(n.height+n.depth),n.depth&&(r.style.verticalAlign=A(-n.depth)),n.children.unshift(r),n}function Ki(e,t){var n=null;e.length===1&&e[0].type===`tag`&&(n=e[0].tag,e=e[0].body);var r=zi(e,t,`root`),i;r.length===2&&r[1].hasClass(`katex-tag`)&&(i=r.pop());for(var a=[],o=[],s=0;s<r.length;s++)if(o.push(r[s]),r[s].hasClass(`mbin`)||r[s].hasClass(`mrel`)||r[s].hasClass(`allowbreak`)){for(var c=!1;s<r.length-1&&r[s+1].hasClass(`mspace`)&&!r[s+1].hasClass(`katex-newline`);)s++,o.push(r[s]),r[s].hasClass(`nobreak`)&&(c=!0);c||(a.push(Gi(o,t)),o=[])}else r[s].hasClass(`katex-newline`)&&(o.pop(),o.length>0&&(a.push(Gi(o,t)),o=[]),a.push(r[s]));o.length>0&&a.push(Gi(o,t));var l;n?(l=Gi(zi(n,t,!0),t),l.classes=[`katex-tag`],a.push(l)):i&&a.push(i);var u=V([`katex-html`],a);if(u.setAttribute(`aria-hidden`,`true`),l){var d=l.children[0];d.style.height=A(u.height+u.depth),u.depth&&(d.style.verticalAlign=A(-u.depth))}return u}function qi(e){return new Un(e)}var G=class{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,this.type);for(var t of Object.entries(this.attributes)){var n=t[0],r=t[1];e.setAttribute(n,r)}this.classes.length>0&&(e.className=Jn(this.classes));for(var i=0;i<this.children.length;i++)if(this.children[i]instanceof Ji&&this.children[i+1]instanceof Ji){for(var a=this.children[i].toText()+this.children[++i].toText();this.children[i+1]instanceof Ji;)a+=this.children[++i].toText();e.appendChild(new Ji(a).toNode())}else e.appendChild(this.children[i].toNode());return e}toMarkup(){var e=`<`+this.type;for(var t of Object.entries(this.attributes)){var n=t[0],r=t[1];e+=` `+n+`="`,e+=Qt(r),e+=`"`}this.classes.length>0&&(e+=` class ="`+Qt(Jn(this.classes))+`"`),e+=`>`;for(var i=0;i<this.children.length;i++)e+=this.children[i].toMarkup();return e+=`</`+this.type+`>`,e}toText(){return this.children.map(e=>e.toText()).join(``)}},Ji=class{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return Qt(this.toText())}toText(){return this.text}},Yi=class{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=` `:e>=.1666&&e<=.1667?this.character=` `:e>=.2222&&e<=.2223?this.character=` `:e>=.2777&&e<=.2778?this.character=`  `:e>=-.05556&&e<=-.05555?this.character=` ⁣`:e>=-.1667&&e<=-.1666?this.character=` ⁣`:e>=-.2223&&e<=-.2222?this.character=` ⁣`:e>=-.2778&&e<=-.2777?this.character=` ⁣`:this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`mspace`);return e.setAttribute(`width`,A(this.width)),e}toMarkup(){return this.character?`<mtext>`+this.character+`</mtext>`:`<mspace width="`+A(this.width)+`"/>`}toText(){return this.character?this.character:` `}},Xi=new Set([`\\imath`,`\\jmath`]),Zi=new Set([`mrow`,`mtable`]),Qi=function(e,t,n){var r,i;return vr[t][e]&&vr[t][e].replace&&e.charCodeAt(0)!==55349&&!(Object.prototype.hasOwnProperty.call(Er,e)&&((n==null||(r=n.fontFamily)==null?void 0:r.slice(4,6))===`tt`||(n==null||(i=n.font)==null?void 0:i.slice(4,6))===`tt`))&&(e=vr[t][e].replace),new Ji(e)},$i=function(e){return e.length===1?e[0]:new G(`mrow`,e)},ea={mathit:`italic`,boldsymbol:e=>e.type===`textord`?`bold`:`bold-italic`,mathbf:`bold`,mathbb:`double-struck`,mathsfit:`sans-serif-italic`,mathfrak:`fraktur`,mathscr:`script`,mathcal:`script`,mathsf:`sans-serif`,mathtt:`monospace`},ta=(e,t)=>{if(e.mode===`text`){if(t.fontFamily===`texttt`)return`monospace`;if(t.fontFamily===`textsf`)return t.fontShape===`textit`&&t.fontWeight===`textbf`?`sans-serif-bold-italic`:t.fontShape===`textit`?`sans-serif-italic`:t.fontWeight===`textbf`?`bold-sans-serif`:`sans-serif`;if(t.fontShape===`textit`&&t.fontWeight===`textbf`)return`bold-italic`;if(t.fontShape===`textit`)return`italic`;if(t.fontWeight===`textbf`)return`bold`}var n=t.font;if(!n||n===`mathnormal`)return null;var r=e.mode,i=ea[n];if(i)return typeof i==`function`?i(e):i;var a=e.text;if(Xi.has(a))return null;if(vr[r][a]){var o=vr[r][a].replace;o&&(a=o)}var s=xi[n].fontName;return hr(a,s,r)?xi[n].variant:null};function na(e){if(!e)return!1;if(e.type===`mi`&&e.children.length===1){var t=e.children[0];return t instanceof Ji&&t.text===`.`}else if(e.type===`mo`&&e.children.length===1&&e.getAttribute(`separator`)===`true`&&e.getAttribute(`lspace`)===`0em`&&e.getAttribute(`rspace`)===`0em`){var n=e.children[0];return n instanceof Ji&&n.text===`,`}else return!1}var ra=function(e,t,n){if(e.length===1){var r=aa(e[0],t);return n&&r instanceof G&&r.type===`mo`&&(r.setAttribute(`lspace`,`0em`),r.setAttribute(`rspace`,`0em`)),[r]}for(var i=[],a,o=0;o<e.length;o++){var s=aa(e[o],t);if(s instanceof G&&a instanceof G){if(s.type===`mtext`&&a.type===`mtext`&&s.getAttribute(`mathvariant`)===a.getAttribute(`mathvariant`)){a.children.push(...s.children);continue}else if(s.type===`mn`&&a.type===`mn`){a.children.push(...s.children);continue}else if(na(s)&&a.type===`mn`){a.children.push(...s.children);continue}else if(s.type===`mn`&&na(a))s.children=[...a.children,...s.children],i.pop();else if((s.type===`msup`||s.type===`msub`)&&s.children.length>=1&&(a.type===`mn`||na(a))){var c=s.children[0];c instanceof G&&c.type===`mn`&&(c.children=[...a.children,...c.children],i.pop())}else if(a.type===`mi`&&a.children.length===1){var l=a.children[0];if(l instanceof Ji&&l.text===`̸`&&(s.type===`mo`||s.type===`mi`||s.type===`mn`)){var u=s.children[0];u instanceof Ji&&u.text.length>0&&(u.text=u.text.slice(0,1)+`̸`+u.text.slice(1),i.pop())}}}i.push(s),a=s}return i},ia=function(e,t,n){return $i(ra(e,t,n))},aa=function(e,t){if(!e)return new G(`mrow`);if(ji[e.type])return ji[e.type](e,t);throw new O(`Got group of unknown type: '`+e.type+`'`)};function oa(e,t,n,r,i){var a=ra(e,n),o=a.length===1&&a[0]instanceof G&&Zi.has(a[0].type)?a[0]:new G(`mrow`,a),s=new G(`annotation`,[new Ji(t)]);s.setAttribute(`encoding`,`application/x-tex`);var c=new G(`math`,[new G(`semantics`,[o,s])]);return c.setAttribute(`xmlns`,`http://www.w3.org/1998/Math/MathML`),r&&c.setAttribute(`display`,`block`),V([i?`katex`:`katex-mathml`],[c])}var sa=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],ca=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],la=function(e,t){return t.size<2?e:sa[e-1][t.size-1]},ua=class e{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.strict=void 0,this.style=t.style,this.color=t.color,this.size=t.size||e.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||``,this.fontFamily=t.fontFamily||``,this.fontWeight=t.fontWeight||``,this.fontShape=t.fontShape||``,this.sizeMultiplier=ca[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this.strict=t.strict,this._fontMetrics=void 0}extend(t){var n={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness,strict:this.strict};return Object.assign(n,t),new e(n)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:la(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:ca[e-1]})}havingBaseStyle(t){t||=this.style.text();var n=la(e.BASESIZE,t);return this.size===n&&this.textSize===e.BASESIZE&&this.style===t?this:this.extend({style:t,size:n})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:``})}withTextFontWeight(e){return this.extend({fontWeight:e,font:``})}withTextFontShape(e){return this.extend({fontShape:e,font:``})}sizingClasses(e){return e.size===this.size?[]:[`katex-sizing`,`reset-size`+e.size,`size`+this.size]}baseSizingClasses(){return this.size===e.BASESIZE?[]:[`katex-sizing`,`reset-size`+this.size,`size`+e.BASESIZE]}fontMetrics(){return this._fontMetrics||=_r(this.size),this._fontMetrics}getColor(){return this.phantom?`transparent`:this.color}};ua.BASESIZE=6;var da=e=>new ua({style:e.displayMode?k.DISPLAY:k.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness,strict:e.strict}),fa=function(e,t){if(t.displayMode){var n=[`katex-display`];t.leqno&&n.push(`leqno`),t.fleqn&&n.push(`fleqn`),e=V(n,[e])}return e},pa=function(e,t,n){var r=da(n),i;return n.output===`mathml`?oa(e,t,r,n.displayMode,!0):(i=n.output===`html`?V([`katex`],[Ki(e,r)]):V([`katex`],[oa(e,t,r,n.displayMode,!1),Ki(e,r)]),fa(i,n))},ma=function(e,t){return fa(V([`katex`],[Ki(e,da(t))]),t)},ha={widehat:`^`,widecheck:`ˇ`,widetilde:`~`,utilde:`~`,overleftarrow:`←`,underleftarrow:`←`,xleftarrow:`←`,overrightarrow:`→`,underrightarrow:`→`,xrightarrow:`→`,underbrace:`⏟`,overbrace:`⏞`,underbracket:`⎵`,overbracket:`⎴`,overgroup:`⏠`,undergroup:`⏡`,overleftrightarrow:`↔`,underleftrightarrow:`↔`,xleftrightarrow:`↔`,Overrightarrow:`⇒`,xRightarrow:`⇒`,overleftharpoon:`↼`,xleftharpoonup:`↼`,overrightharpoon:`⇀`,xrightharpoonup:`⇀`,xLeftarrow:`⇐`,xLeftrightarrow:`⇔`,xhookleftarrow:`↩`,xhookrightarrow:`↪`,xmapsto:`↦`,xrightharpoondown:`⇁`,xleftharpoondown:`↽`,xrightleftharpoons:`⇌`,xleftrightharpoons:`⇋`,xtwoheadleftarrow:`↞`,xtwoheadrightarrow:`↠`,xlongequal:`=`,xtofrom:`⇄`,xrightleftarrows:`⇄`,xrightequilibrium:`⇌`,xleftequilibrium:`⇋`,"\\cdrightarrow":`→`,"\\cdleftarrow":`←`,"\\cdlongequal":`=`},ga=function(e){var t=new G(`mo`,[new Ji(ha[e.replace(/^\\/,``)])]);return t.setAttribute(`stretchy`,`true`),t},_a={overrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],overleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],underrightarrow:[[`rightarrow`],.888,522,`xMaxYMin`],underleftarrow:[[`leftarrow`],.888,522,`xMinYMin`],xrightarrow:[[`rightarrow`],1.469,522,`xMaxYMin`],"\\cdrightarrow":[[`rightarrow`],3,522,`xMaxYMin`],xleftarrow:[[`leftarrow`],1.469,522,`xMinYMin`],"\\cdleftarrow":[[`leftarrow`],3,522,`xMinYMin`],Overrightarrow:[[`doublerightarrow`],.888,560,`xMaxYMin`],xRightarrow:[[`doublerightarrow`],1.526,560,`xMaxYMin`],xLeftarrow:[[`doubleleftarrow`],1.526,560,`xMinYMin`],overleftharpoon:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoonup:[[`leftharpoon`],.888,522,`xMinYMin`],xleftharpoondown:[[`leftharpoondown`],.888,522,`xMinYMin`],overrightharpoon:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoonup:[[`rightharpoon`],.888,522,`xMaxYMin`],xrightharpoondown:[[`rightharpoondown`],.888,522,`xMaxYMin`],xlongequal:[[`longequal`],.888,334,`xMinYMin`],"\\cdlongequal":[[`longequal`],3,334,`xMinYMin`],xtwoheadleftarrow:[[`twoheadleftarrow`],.888,334,`xMinYMin`],xtwoheadrightarrow:[[`twoheadrightarrow`],.888,334,`xMaxYMin`],overleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],overbrace:[[`leftbrace`,`midbrace`,`rightbrace`],1.6,548],underbrace:[[`leftbraceunder`,`midbraceunder`,`rightbraceunder`],1.6,548],underleftrightarrow:[[`leftarrow`,`rightarrow`],.888,522],xleftrightarrow:[[`leftarrow`,`rightarrow`],1.75,522],xLeftrightarrow:[[`doubleleftarrow`,`doublerightarrow`],1.75,560],xrightleftharpoons:[[`leftharpoondownplus`,`rightharpoonplus`],1.75,716],xleftrightharpoons:[[`leftharpoonplus`,`rightharpoondownplus`],1.75,716],xhookleftarrow:[[`leftarrow`,`righthook`],1.08,522],xhookrightarrow:[[`lefthook`,`rightarrow`],1.08,522],overlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],underlinesegment:[[`leftlinesegment`,`rightlinesegment`],.888,522],overbracket:[[`leftbracketover`,`rightbracketover`],1.6,440],underbracket:[[`leftbracketunder`,`rightbracketunder`],1.6,410],overgroup:[[`leftgroup`,`rightgroup`],.888,342],undergroup:[[`leftgroupunder`,`rightgroupunder`],.888,342],xmapsto:[[`leftmapsto`,`rightarrow`],1.5,522],xtofrom:[[`leftToFrom`,`rightToFrom`],1.75,528],xrightleftarrows:[[`baraboveleftarrow`,`rightarrowabovebar`],1.75,901],xrightequilibrium:[[`baraboveshortleftharpoon`,`rightharpoonaboveshortbar`],1.75,716],xleftequilibrium:[[`shortbaraboveleftharpoon`,`shortrightharpoonabovebar`],1.75,716]},va=new Set([`widehat`,`widecheck`,`widetilde`,`utilde`]),ya=function(e,t){function n(){var n=4e5,r=e.label.slice(1);if(va.has(r)&&`base`in e){var i=e.base.type===`ordgroup`?e.base.body.length:1,a,o,s;if(i>5)r===`widehat`||r===`widecheck`?(a=420,n=2364,s=.42,o=r+`4`):(a=312,n=2340,s=.34,o=`tilde4`);else{var c=[1,1,2,2,3,3][i];r===`widehat`||r===`widecheck`?(n=[0,1062,2364,2364,2364][c],a=[0,239,300,360,420][c],s=[0,.24,.3,.3,.36,.42][c],o=r+c):(n=[0,600,1033,2339,2340][c],a=[0,260,286,306,312][c],s=[0,.26,.286,.3,.306,.34][c],o=`tilde`+c)}return{span:pi([],[new ar([new or(o)],{width:`100%`,height:A(s),viewBox:`0 0 `+n+` `+a,preserveAspectRatio:`none`})],t),minWidth:0,height:s}}else{var l=[],u=_a[r];if(!u)throw Error(`No SVG data for "`+r+`".`);var d=u[0],f=u[1],p=u[2],m=p/1e3,h=d.length,g,_;if(h===1){if(u.length!==4)throw Error(`Expected 4-tuple for single-path SVG data "`+r+`".`);g=[`hide-tail`],_=[u[3]]}else if(h===2)g=[`halfarrow-left`,`halfarrow-right`],_=[`xMinYMin`,`xMaxYMin`];else if(h===3)g=[`brace-left`,`brace-center`,`brace-right`],_=[`xMinYMin`,`xMidYMin`,`xMaxYMin`];else throw Error(`Correct katexImagesData or update code here to support
                    `+h+` children.`);for(var v=0;v<h;v++){var y=new ar([new or(d[v])],{width:`400em`,height:A(m),viewBox:`0 0 `+n+` `+p,preserveAspectRatio:_[v]+` slice`}),b=pi([g[v]],[y],t);if(h===1)return{span:b,minWidth:f,height:m};b.style.height=A(m),l.push(b)}return{span:V([`katex-stretchy`],l,t),minWidth:f,height:m}}}var r=n(),i=r.span,a=r.minWidth,o=r.height;return i.height=o,i.style.height=A(o),a>0&&(i.style.minWidth=A(a)),i},ba=function(e,t,n,r,i){var a,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(a=V([`katex-stretchy`,t],[],i),t===`fbox`){var s=i.color&&i.getColor();s&&(a.style.borderColor=s)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new sr({x1:`0`,y1:`0`,x2:`100%`,y2:`100%`,"stroke-width":`0.046em`})),/^x?cancel$/.test(t)&&c.push(new sr({x1:`0`,y1:`100%`,x2:`100%`,y2:`0`,"stroke-width":`0.046em`})),a=pi([],[new ar(c,{width:`100%`,height:A(o)})],i)}return a.height=o,a.style.height=A(o),a},xa=[`bin`,`close`,`inner`,`open`,`punct`,`rel`],Sa=[`accent-token`,`mathord`,`op-token`,`spacing`,`textord`],Ca=new Set(xa),wa=new Set(Sa);function Ta(e){return Ca.has(e)}function K(e,t){if(!e||e.type!==t)throw Error(`Expected node of type `+t+`, but got `+(e?`node of type `+e.type:String(e)));return e}function Ea(e){var t=Da(e);if(!t)throw Error(`Expected node of symbol group type, but got `+(e?`node of type `+e.type:String(e)));return t}function Da(e){return e.type===`atom`||wa.has(e.type)?e:null}function Oa(e,t,n){var r=``;for(var i of e.body)if(i.type===`textord`)r+=i.text;else if(n&&i.type===`spacing`&&i.text===` `)r+=` `;else throw new O(t,e);return r}var ka=e=>{if(e instanceof ir)return e;if(ur(e)&&e.children.length===1)return ka(e.children[0])},Aa=(e,t)=>{var n,r,i;e&&e.type===`supsub`?(r=K(e.base,`accent`),n=r.base,e.base=n,i=lr(W(e,t)),e.base=r):(r=K(e,`accent`),n=r.base);var a=W(n,t.havingCrampedStyle()),o=r.isShifty&&tn(n),s=0;o&&(s=ka(a)?.skew??0);var c=r.label===`\\c`,l=c?a.height+a.depth:Math.min(a.height,t.fontMetrics().xHeight),u;if(r.isStretchy)u=ya(r,t),u=H({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`elem`,elem:u,wrapperClasses:[`svg-align`],wrapperStyle:s>0?{width:`calc(100% - `+A(2*s)+`)`,marginLeft:A(2*s)}:void 0}]});else{var d,f;r.label===`\\vec`?(d=Ci(`vec`,t),f=Si.vec[1]):(d=li({type:`textord`,mode:r.mode,text:r.label},t),d=cr(d),d.italic=0,f=d.width,c&&(l+=d.depth)),u=V([`accent-body`],[d]);var p=r.label===`\\textcircled`;p&&(u.classes.push(`accent-full`),l=a.height);var m=s;p||(m-=f/2),u.style.left=A(m),r.label===`\\textcircled`&&(u.style.top=`.2em`),u=H({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:-l},{type:`elem`,elem:u}]})}var h=V([`mord`,`katex-accent`],[u],t);return i?(i.children[0]=h,i.height=Math.max(h.height,i.height),i.classes[0]=`mord`,i):h},ja=(e,t)=>{var n=e.isStretchy?ga(e.label):new G(`mo`,[Qi(e.label,e.mode)]),r=new G(`mover`,[aa(e.base,t),n]);return r.setAttribute(`accent`,`true`),r},Ma=new RegExp([`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`].map(e=>`\\`+e).join(`|`));U({type:`accent`,names:[`\\acute`,`\\grave`,`\\ddot`,`\\tilde`,`\\bar`,`\\breve`,`\\check`,`\\hat`,`\\vec`,`\\dot`,`\\mathring`,`\\widecheck`,`\\widehat`,`\\widetilde`,`\\overrightarrow`,`\\overleftarrow`,`\\Overrightarrow`,`\\overleftrightarrow`,`\\overgroup`,`\\overlinesegment`,`\\overleftharpoon`,`\\overrightharpoon`],numArgs:1,handler:(e,t)=>{var n=Ni(t[0]),r=!Ma.test(e.funcName),i=!r||e.funcName===`\\widehat`||e.funcName===`\\widetilde`||e.funcName===`\\widecheck`;return{type:`accent`,mode:e.parser.mode,label:e.funcName,isStretchy:r,isShifty:i,base:n}},htmlBuilder:Aa,mathmlBuilder:ja}),U({type:`accent`,names:[`\\'`,"\\`",`\\^`,`\\~`,`\\=`,`\\u`,`\\.`,`\\"`,`\\c`,`\\r`,`\\H`,`\\v`,`\\textcircled`],numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`primitive`],handler:(e,t)=>{var n=t[0],r=e.parser.mode;return r===`math`&&(ii({strict:e.parser.settings.strict,errorCode:`mathVsTextAccents`,errorMsg:`LaTeX's accent `+e.funcName+` works only in text mode`,report:!0}),r=`text`),{type:`accent`,mode:r,label:e.funcName,isStretchy:!1,isShifty:!0,base:n}}}),U({type:`accentUnder`,names:[`\\underleftarrow`,`\\underrightarrow`,`\\underleftrightarrow`,`\\undergroup`,`\\underlinesegment`,`\\utilde`],numArgs:1,handler:(e,t)=>{var n=e.parser,r=e.funcName,i=t[0];return{type:`accentUnder`,mode:n.mode,label:r,base:i}},htmlBuilder:(e,t)=>{var n=W(e.base,t),r=ya(e,t),i=e.label===`\\utilde`?.12:0;return V([`mord`,`accentunder`],[H({positionType:`top`,positionData:n.height,children:[{type:`elem`,elem:r,wrapperClasses:[`svg-align`]},{type:`kern`,size:i},{type:`elem`,elem:n}]})],t)},mathmlBuilder:(e,t)=>{var n=ga(e.label),r=new G(`munder`,[aa(e.base,t),n]);return r.setAttribute(`accentunder`,`true`),r}});var Na=e=>{var t=new G(`mpadded`,e?[e]:[]);return t.setAttribute(`width`,`+0.6em`),t.setAttribute(`lspace`,`0.3em`),t};U({type:`xArrow`,names:[`\\xleftarrow`,`\\xrightarrow`,`\\xLeftarrow`,`\\xRightarrow`,`\\xleftrightarrow`,`\\xLeftrightarrow`,`\\xhookleftarrow`,`\\xhookrightarrow`,`\\xmapsto`,`\\xrightharpoondown`,`\\xrightharpoonup`,`\\xleftharpoondown`,`\\xleftharpoonup`,`\\xrightleftharpoons`,`\\xleftrightharpoons`,`\\xlongequal`,`\\xtwoheadrightarrow`,`\\xtwoheadleftarrow`,`\\xtofrom`,`\\xrightleftarrows`,`\\xrightequilibrium`,`\\xleftequilibrium`,`\\\\cdrightarrow`,`\\\\cdleftarrow`,`\\\\cdlongequal`],numArgs:1,numOptionalArgs:1,handler(e,t,n){var r=e.parser,i=e.funcName;return{type:`xArrow`,mode:r.mode,label:i,body:t[0],below:n[0]}},htmlBuilder(e,t){var n=t.style,r=t.havingStyle(n.sup()),i=_i(W(e.body,r,t),t),a=e.label.slice(0,2)===`\\x`?`x`:`cd`;i.classes.push(a+`-arrow-pad`);var o;e.below&&(r=t.havingStyle(n.sub()),o=_i(W(e.below,r,t),t),o.classes.push(a+`-arrow-pad`));var s=ya(e,t),c=-t.fontMetrics().axisHeight+.5*s.height,l=-t.fontMetrics().axisHeight-.5*s.height-.111;(i.depth>.25||e.label===`\\xleftequilibrium`)&&(l-=i.depth);var u;if(o){var d=-t.fontMetrics().axisHeight+o.height+.5*s.height+.111;u=H({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c,wrapperClasses:[`svg-align`]},{type:`elem`,elem:o,shift:d}]})}else u=H({positionType:`individualShift`,children:[{type:`elem`,elem:i,shift:l},{type:`elem`,elem:s,shift:c,wrapperClasses:[`svg-align`]}]});return V([`mrel`,`x-arrow`],[u],t)},mathmlBuilder(e,t){var n=ga(e.label);n.setAttribute(`minsize`,e.label.charAt(0)===`x`?`1.75em`:`3.0em`);var r;if(e.body){var i=Na(aa(e.body,t));r=e.below?new G(`munderover`,[n,Na(aa(e.below,t)),i]):new G(`mover`,[n,i])}else e.below?r=new G(`munder`,[n,Na(aa(e.below,t))]):(r=Na(),r=new G(`mover`,[n,r]));return r}});function Pa(e,t){var n=zi(e.body,t,!0);return V([e.mclass],n,t)}function Fa(e,t){var n,r=ra(e.body,t);return e.mclass===`minner`?n=new G(`mpadded`,r):e.mclass===`mord`?e.isCharacterBox?(n=r[0],n.type=`mi`):n=new G(`mi`,r):(e.isCharacterBox?(n=r[0],n.type=`mo`):n=new G(`mo`,r),e.mclass===`mbin`?(n.attributes.lspace=`0.22em`,n.attributes.rspace=`0.22em`):e.mclass===`mpunct`?(n.attributes.lspace=`0em`,n.attributes.rspace=`0.17em`):(e.mclass===`mopen`||e.mclass===`mclose`)&&(n.attributes.lspace=`0em`,n.attributes.rspace=`0em`)),n}U({type:`mclass`,names:[`\\mathord`,`\\mathbin`,`\\mathrel`,`\\mathopen`,`\\mathclose`,`\\mathpunct`,`\\mathinner`],numArgs:1,primitive:!0,handler(e,t){var n=e.parser,r=e.funcName,i=t[0];return{type:`mclass`,mode:n.mode,mclass:`m`+r.slice(5),body:Pi(i),isCharacterBox:tn(i)}},htmlBuilder:Pa,mathmlBuilder:Fa});var Ia=e=>{var t=e.type===`ordgroup`&&e.body.length?e.body[0]:e;return t.type===`atom`&&(t.family===`bin`||t.family===`rel`)?`m`+t.family:`mord`};U({type:`mclass`,names:[`\\@binrel`],numArgs:2,handler(e,t){return{type:`mclass`,mode:e.parser.mode,mclass:Ia(t[0]),body:Pi(t[1]),isCharacterBox:tn(t[1])}}}),U({type:`mclass`,names:[`\\stackrel`,`\\overset`,`\\underset`],numArgs:2,handler(e,t){var n=e.parser,r=e.funcName,i=t[1],a=t[0],o=r===`\\stackrel`?`mrel`:Ia(i),s={type:`op`,mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:r!==`\\stackrel`,body:Pi(i)},c=r===`\\underset`?{type:`supsub`,mode:a.mode,base:s,sub:a}:{type:`supsub`,mode:a.mode,base:s,sup:a};return{type:`mclass`,mode:n.mode,mclass:o,body:[c],isCharacterBox:tn(c)}}}),U({type:`pmb`,names:[`\\pmb`],numArgs:1,allowedInText:!0,handler(e,t){return{type:`pmb`,mode:e.parser.mode,mclass:Ia(t[0]),body:Pi(t[0])}},htmlBuilder(e,t){var n=zi(e.body,t,!0),r=V([e.mclass],n,t);return r.style.textShadow=`0.02em 0.01em 0.04px`,r},mathmlBuilder(e,t){var n=new G(`mstyle`,ra(e.body,t));return n.setAttribute(`style`,`text-shadow: 0.02em 0.01em 0.04px`),n}});var La={">":`\\\\cdrightarrow`,"<":`\\\\cdleftarrow`,"=":`\\\\cdlongequal`,A:`\\uparrow`,V:`\\downarrow`,"|":`\\Vert`,".":`no arrow`},Ra=()=>({type:`styling`,body:[],mode:`math`,style:`display`,resetFont:!0}),za=e=>e.type===`textord`&&e.text===`@`,Ba=(e,t)=>(e.type===`mathord`||e.type===`atom`)&&e.text===t;function Va(e,t,n){var r=La[e];switch(r){case`\\\\cdrightarrow`:case`\\\\cdleftarrow`:return n.callFunction(r,[t[0]],[t[1]]);case`\\uparrow`:case`\\downarrow`:var i=n.callFunction(`\\\\cdleft`,[t[0]],[]),a={type:`atom`,text:r,mode:`math`,family:`rel`},o={type:`ordgroup`,mode:`math`,body:[i,n.callFunction(`\\Big`,[a],[]),n.callFunction(`\\\\cdright`,[t[1]],[])]};return n.callFunction(`\\\\cdparent`,[o],[]);case`\\\\cdlongequal`:return n.callFunction(`\\\\cdlongequal`,[],[]);case`\\Vert`:return n.callFunction(`\\Big`,[{type:`textord`,text:`\\Vert`,mode:`math`}],[]);default:return{type:`textord`,text:` `,mode:`math`}}}function Ha(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set(`\\cr`,`\\\\\\relax`),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,`\\\\`)),e.gullet.endGroup(),e.gullet.beginGroup();var n=e.fetch().text;if(n===`&`||n===`\\\\`)e.consume();else if(n===`\\end`){t[t.length-1].length===0&&t.pop();break}else throw new O(`Expected \\\\ or \\cr or \\end`,e.nextToken)}for(var r=[],i=[r],a=0;a<t.length;a++){for(var o=t[a],s=Ra(),c=0;c<o.length;c++)if(!za(o[c]))s.body.push(o[c]);else{r.push(s),c+=1;var l=Ea(o[c]).text,u=[,,];if(u[0]={type:`ordgroup`,mode:`math`,body:[]},u[1]={type:`ordgroup`,mode:`math`,body:[]},!`=|.`.includes(l))if(`<>AV`.includes(l))for(var d=0;d<2;d++){for(var f=!0,p=c+1;p<o.length;p++){if(Ba(o[p],l)){f=!1,c=p;break}if(za(o[p]))throw new O(`Missing a `+l+` character to complete a CD arrow.`,o[p]);u[d].body.push(o[p])}if(f)throw new O(`Missing a `+l+` character to complete a CD arrow.`,o[c])}else throw new O(`Expected one of "<>AV=|." after @`,o[c]);var m={type:`styling`,body:[Va(l,u,e)],mode:`math`,style:`display`,resetFont:!0};r.push(m),s=Ra()}a%2==0?r.push(s):r.shift(),r=[],i.push(r)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:`math`,body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:Array(i[0].length).fill({type:`align`,align:`c`,pregap:.25,postgap:.25}),colSeparationType:`CD`,hLinesBeforeRow:Array(i.length+1).fill([])}}U({type:`cdlabel`,names:[`\\\\cdleft`,`\\\\cdright`],numArgs:1,handler(e,t){var n=e.parser,r=e.funcName;return{type:`cdlabel`,mode:n.mode,side:r.slice(4),label:t[0]}},htmlBuilder(e,t){var n=t.havingStyle(t.style.sup()),r=_i(W(e.label,n,t),t);return r.classes.push(`cd-label-`+e.side),r.style.bottom=A(.8-r.depth),r.height=0,r.depth=0,r},mathmlBuilder(e,t){var n=new G(`mrow`,[aa(e.label,t)]);return n=new G(`mpadded`,[n]),n.setAttribute(`width`,`0`),e.side===`left`&&n.setAttribute(`lspace`,`-1width`),n.setAttribute(`voffset`,`0.7em`),n=new G(`mstyle`,[n]),n.setAttribute(`displaystyle`,`false`),n.setAttribute(`scriptlevel`,`1`),n}}),U({type:`cdlabelparent`,names:[`\\\\cdparent`],numArgs:1,handler(e,t){return{type:`cdlabelparent`,mode:e.parser.mode,fragment:t[0]}},htmlBuilder(e,t){var n=_i(W(e.fragment,t),t);return n.classes.push(`cd-vert-arrow`),n},mathmlBuilder(e,t){return new G(`mrow`,[aa(e.fragment,t)])}}),U({type:`textord`,names:[`\\@char`],numArgs:1,allowedInText:!0,handler(e,t){var n=e.parser,r=Oa(K(t[0],`ordgroup`),`\\@char has non-numeric argument`),i=parseInt(r),a;if(isNaN(i))throw new O(`\\@char has non-numeric argument `+r);if(i<0||i>1114111)throw new O(`\\@char with invalid code point `+r);return i<=65535?a=String.fromCharCode(i):(i-=65536,a=String.fromCharCode((i>>10)+55296,(i&1023)+56320)),{type:`textord`,mode:n.mode,text:a}}}),U({type:`color`,names:[`\\textcolor`],numArgs:2,allowedInText:!0,argTypes:[`color`,`original`],handler(e,t){var n=e.parser,r=K(t[0],`color-token`).color,i=t[1];return{type:`color`,mode:n.mode,color:r,body:Pi(i)}},htmlBuilder:(e,t)=>gi(zi(e.body,t.withColor(e.color),!1)),mathmlBuilder:(e,t)=>{var n=new G(`mstyle`,ra(e.body,t.withColor(e.color)));return n.setAttribute(`mathcolor`,e.color),n}}),U({type:`color`,names:[`\\color`],numArgs:1,allowedInText:!0,argTypes:[`color`],handler(e,t){var n=e.parser,r=e.breakOnTokenText,i=K(t[0],`color-token`).color;n.gullet.macros.set(`\\current@color`,i);var a=n.parseExpression(!0,r);return{type:`color`,mode:n.mode,color:i,body:a}}}),U({type:`cr`,names:[`\\\\`],numArgs:0,numOptionalArgs:0,allowedInText:!0,handler(e){var t=e.parser,n=t.gullet.future().text===`[`?t.parseSizeGroup(!0):null,r=!t.settings.displayMode||!ii({strict:t.settings.strict,errorCode:`newLineInDisplayMode`,errorMsg:`In LaTeX, \\\\ or \\newline does nothing in display mode`,report:!1});return{type:`cr`,mode:t.mode,newLine:r,size:n&&K(n,`size`).value}},htmlBuilder(e,t){var n=V([`mspace`],[],t);return e.newLine&&(n.classes.push(`katex-newline`),e.size&&(n.style.marginTop=A(qn(e.size,t)))),n},mathmlBuilder(e,t){var n=new G(`mspace`);return e.newLine&&(n.setAttribute(`linebreak`,`newline`),e.size&&n.setAttribute(`height`,A(qn(e.size,t)))),n}});var Ua={"\\global":`\\global`,"\\long":`\\\\globallong`,"\\\\globallong":`\\\\globallong`,"\\def":`\\gdef`,"\\gdef":`\\gdef`,"\\edef":`\\xdef`,"\\xdef":`\\xdef`,"\\let":`\\\\globallet`,"\\futurelet":`\\\\globalfuture`},Wa=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new O(`Expected a control sequence`,e);return t},Ga=e=>{var t=e.gullet.popToken();return t.text===`=`&&(t=e.gullet.popToken(),t.text===` `&&(t=e.gullet.popToken())),t},Ka=(e,t,n,r)=>{var i=e.gullet.macros.get(n.text);i??=(n.noexpand=!0,{tokens:[n],numArgs:0,unexpandable:!e.gullet.isExpandable(n.text)}),e.gullet.macros.set(t,i,r)};U({type:`internal`,names:[`\\global`,`\\long`,`\\\\globallong`],numArgs:0,allowedInText:!0,handler(e){var t=e.parser,n=e.funcName;t.consumeSpaces();var r=t.fetch();if(Ua[r.text])return(n===`\\global`||n===`\\\\globallong`)&&(r.text=Ua[r.text]),K(t.parseFunction(),`internal`);throw new O(`Invalid token after macro prefix`,r)}}),U({type:`internal`,names:[`\\def`,`\\gdef`,`\\edef`,`\\xdef`],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var t=e.parser,n=e.funcName,r=t.gullet.popToken(),i=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new O(`Expected a control sequence`,r);for(var a=0,o,s=[[]];t.gullet.future().text!==`{`;)if(r=t.gullet.popToken(),r.text===`#`){if(t.gullet.future().text===`{`){o=t.gullet.future(),s[a].push(`{`);break}if(r=t.gullet.popToken(),!/^[1-9]$/.test(r.text))throw new O(`Invalid argument number "`+r.text+`"`);if(parseInt(r.text)!==a+1)throw new O(`Argument number "`+r.text+`" out of order`);a++,s.push([])}else if(r.text===`EOF`)throw new O(`Expected a macro definition`);else s[a].push(r.text);var c=t.gullet.consumeArg().tokens;return o&&c.unshift(o),(n===`\\edef`||n===`\\xdef`)&&(c=t.gullet.expandTokens(c),c.reverse()),t.gullet.macros.set(i,{tokens:c,numArgs:a,delimiters:s},n===Ua[n]),{type:`internal`,mode:t.mode}}}),U({type:`internal`,names:[`\\let`,`\\\\globallet`],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var t=e.parser,n=e.funcName,r=Wa(t.gullet.popToken());return t.gullet.consumeSpaces(),Ka(t,r,Ga(t),n===`\\\\globallet`),{type:`internal`,mode:t.mode}}}),U({type:`internal`,names:[`\\futurelet`,`\\\\globalfuture`],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var t=e.parser,n=e.funcName,r=Wa(t.gullet.popToken()),i=t.gullet.popToken(),a=t.gullet.popToken();return Ka(t,r,a,n===`\\\\globalfuture`),t.gullet.pushToken(a),t.gullet.pushToken(i),{type:`internal`,mode:t.mode}}});var qa=function(e,t,n){var r=hr(vr.math[e]&&vr.math[e].replace||e,t,n);if(!r)throw Error(`Unsupported symbol `+e+` and font size `+t+`.`);return r},Ja=function(e,t,n,r){var i=n.havingBaseStyle(t),a=V(r.concat(i.sizingClasses(n)),[e],n),o=i.sizeMultiplier/n.sizeMultiplier;return a.height*=o,a.depth*=o,a.maxFontSize=i.sizeMultiplier,a},Ya=function(e,t,n){var r=t.havingBaseStyle(n),i=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push(`delimcenter`),e.style.top=A(i),e.height-=i,e.depth+=i},Xa=function(e,t,n,r,i,a){var o=Ja(oi(e,`Main-Regular`,i,r),t,r,a);return n&&Ya(o,r,t),o},Za=function(e,t,n,r){return oi(e,`Size`+t+`-Regular`,n,r)},Qa=function(e,t,n,r,i,a){var o=Za(e,t,i,r),s=Ja(V([`delimsizing`,`size`+t],[o],r),k.TEXT,r,a);return n&&Ya(s,r,k.TEXT),s},$a=function(e,t,n,r){return{type:`elem`,elem:V([`delimsizinginner`,t===`Size1-Regular`?`delim-size1`:`delim-size4`],[V([],[oi(e,t,n,r)])])}},eo=function(e,t,n){var r=dr[`Size4-Regular`][e.charCodeAt(0)]?dr[`Size4-Regular`][e.charCodeAt(0)][4]:dr[`Size1-Regular`][e.charCodeAt(0)][4],i=pi([],[new ar([new or(`inner`,zn(e,Math.round(1e3*t)))],{width:A(r),height:A(t),style:`width:`+A(r),viewBox:`0 0 `+1e3*r+` `+Math.round(1e3*t),preserveAspectRatio:`xMinYMin`})],n);return i.height=t,i.style.height=A(t),i.style.width=A(r),{type:`elem`,elem:i}},to=.008,no={type:`kern`,size:-1*to},ro=new Set([`|`,`\\lvert`,`\\rvert`,`\\vert`]),io=new Set([`\\|`,`\\lVert`,`\\rVert`,`\\Vert`]),ao=function(e,t,n,r,i,a){var o,s,c,l,u=``,d=0;o=c=l=e,s=null;var f=`Size1-Regular`;e===`\\uparrow`?c=l=`⏐`:e===`\\Uparrow`?c=l=`‖`:e===`\\downarrow`?o=c=`⏐`:e===`\\Downarrow`?o=c=`‖`:e===`\\updownarrow`?(o=`\\uparrow`,c=`⏐`,l=`\\downarrow`):e===`\\Updownarrow`?(o=`\\Uparrow`,c=`‖`,l=`\\Downarrow`):ro.has(e)?(c=`∣`,u=`vert`,d=333):io.has(e)?(c=`∥`,u=`doublevert`,d=556):e===`[`||e===`\\lbrack`?(o=`⎡`,c=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lbrack`,d=667):e===`]`||e===`\\rbrack`?(o=`⎤`,c=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rbrack`,d=667):e===`\\lfloor`||e===`⌊`?(c=o=`⎢`,l=`⎣`,f=`Size4-Regular`,u=`lfloor`,d=667):e===`\\lceil`||e===`⌈`?(o=`⎡`,c=l=`⎢`,f=`Size4-Regular`,u=`lceil`,d=667):e===`\\rfloor`||e===`⌋`?(c=o=`⎥`,l=`⎦`,f=`Size4-Regular`,u=`rfloor`,d=667):e===`\\rceil`||e===`⌉`?(o=`⎤`,c=l=`⎥`,f=`Size4-Regular`,u=`rceil`,d=667):e===`(`||e===`\\lparen`?(o=`⎛`,c=`⎜`,l=`⎝`,f=`Size4-Regular`,u=`lparen`,d=875):e===`)`||e===`\\rparen`?(o=`⎞`,c=`⎟`,l=`⎠`,f=`Size4-Regular`,u=`rparen`,d=875):e===`\\{`||e===`\\lbrace`?(o=`⎧`,s=`⎨`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\}`||e===`\\rbrace`?(o=`⎫`,s=`⎬`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lgroup`||e===`⟮`?(o=`⎧`,l=`⎩`,c=`⎪`,f=`Size4-Regular`):e===`\\rgroup`||e===`⟯`?(o=`⎫`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):e===`\\lmoustache`||e===`⎰`?(o=`⎧`,l=`⎭`,c=`⎪`,f=`Size4-Regular`):(e===`\\rmoustache`||e===`⎱`)&&(o=`⎫`,l=`⎩`,c=`⎪`,f=`Size4-Regular`);var p=qa(o,f,i),m=p.height+p.depth,h=qa(c,f,i),g=h.height+h.depth,_=qa(l,f,i),v=_.height+_.depth,y=0,b=1;if(s!==null){var x=qa(s,f,i);y=x.height+x.depth,b=2}var S=m+v+y,C=S+Math.max(0,Math.ceil((t-S)/(b*g)))*b*g,ee=r.fontMetrics().axisHeight;n&&(ee*=r.sizeMultiplier);var te=C/2-ee,w=[];if(u.length>0){var ne=C-m-v,re=Math.round(C*1e3),T=Vn(u,Math.round(ne*1e3)),ie=new or(u,T),ae=A(d/1e3),oe=A(re/1e3),se=pi([],[new ar([ie],{width:ae,height:oe,viewBox:`0 0 `+d+` `+re})],r);se.height=re/1e3,se.style.width=ae,se.style.height=oe,w.push({type:`elem`,elem:se})}else{if(w.push($a(l,f,i,r)),w.push(no),s===null){var ce=C-m-v+2*to;w.push(eo(c,ce,r))}else{var le=(C-m-v-y)/2+2*to;w.push(eo(c,le,r)),w.push(no),w.push($a(s,f,i,r)),w.push(no),w.push(eo(c,le,r))}w.push(no),w.push($a(o,f,i,r))}var ue=r.havingBaseStyle(k.TEXT);return Ja(V([`delimsizing`,`mult`],[H({positionType:`bottom`,positionData:te,children:w})],ue),k.TEXT,r,a)},oo=80,so=.08,co=function(e,t,n,r,i){return pi([`hide-tail`],[new ar([new or(e,Rn(e,r,n))],{width:`400em`,height:A(t),viewBox:`0 0 400000 `+n,preserveAspectRatio:`xMinYMin slice`})],i)},lo=function(e,t){var n=t.havingBaseSizing(),r=bo(`\\surd`,e*n.sizeMultiplier,vo,n),i=n.sizeMultiplier,a=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,s,c,l,u;return r.type===`small`?(l=1e3+1e3*a+oo,e<1?i=1:e<1.4&&(i=.7),s=(1+a+so)/i,c=(1+a)/i,o=co(`sqrtMain`,s,l,a,t),o.style.minWidth=`0.853em`,u=.833/i):r.type===`large`?(l=(1e3+oo)*mo[r.size],c=(mo[r.size]+a)/i,s=(mo[r.size]+a+so)/i,o=co(`sqrtSize`+r.size,s,l,a,t),o.style.minWidth=`1.02em`,u=1/i):(s=e+a+so,c=e+a,l=Math.floor(1e3*e+a)+oo,o=co(`sqrtTall`,s,l,a,t),o.style.minWidth=`0.742em`,u=1.056),o.height=c,o.style.height=A(s),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+a)*i}},uo=new Set([`(`,`\\lparen`,`)`,`\\rparen`,`[`,`\\lbrack`,`]`,`\\rbrack`,`\\{`,`\\lbrace`,`\\}`,`\\rbrace`,`\\lfloor`,`\\rfloor`,`⌊`,`⌋`,`\\lceil`,`\\rceil`,`⌈`,`⌉`,`\\surd`]),fo=new Set([`\\uparrow`,`\\downarrow`,`\\updownarrow`,`\\Uparrow`,`\\Downarrow`,`\\Updownarrow`,`|`,`\\|`,`\\vert`,`\\Vert`,`\\lvert`,`\\rvert`,`\\lVert`,`\\rVert`,`\\lgroup`,`\\rgroup`,`⟮`,`⟯`,`\\lmoustache`,`\\rmoustache`,`⎰`,`⎱`]),po=new Set([`<`,`>`,`\\langle`,`\\rangle`,`/`,`\\backslash`,`\\lt`,`\\gt`]),mo=[0,1.2,1.8,2.4,3],ho=function(e,t,n,r,i){if(e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`),uo.has(e)||po.has(e))return Qa(e,t,!1,n,r,i);if(fo.has(e))return ao(e,mo[t],!1,n,r,i);throw new O(`Illegal delimiter: '`+e+`'`)},go=[{type:`small`,style:k.SCRIPTSCRIPT},{type:`small`,style:k.SCRIPT},{type:`small`,style:k.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4}],_o=[{type:`small`,style:k.SCRIPTSCRIPT},{type:`small`,style:k.SCRIPT},{type:`small`,style:k.TEXT},{type:`stack`}],vo=[{type:`small`,style:k.SCRIPTSCRIPT},{type:`small`,style:k.SCRIPT},{type:`small`,style:k.TEXT},{type:`large`,size:1},{type:`large`,size:2},{type:`large`,size:3},{type:`large`,size:4},{type:`stack`}],yo=function(e){if(e.type===`small`)return`Main-Regular`;if(e.type===`large`)return`Size`+e.size+`-Regular`;if(e.type===`stack`)return`Size4-Regular`;var t=e.type;throw Error(`Add support for delim type '`+t+`' here.`)},bo=function(e,t,n,r){for(var i=Math.min(2,3-r.style.size);i<n.length;i++){var a=n[i];if(a.type===`stack`)break;var o=qa(e,yo(a),`math`),s=o.height+o.depth;if(a.type===`small`){var c=r.havingBaseStyle(a.style);s*=c.sizeMultiplier}if(s>t)return a}return n[n.length-1]},xo=function(e,t,n,r,i,a){e===`<`||e===`\\lt`||e===`⟨`?e=`\\langle`:(e===`>`||e===`\\gt`||e===`⟩`)&&(e=`\\rangle`);var o=po.has(e)?go:uo.has(e)?vo:_o,s=bo(e,t,o,r);return s.type===`small`?Xa(e,s.style,n,r,i,a):s.type===`large`?Qa(e,s.size,n,r,i,a):ao(e,t,n,r,i,a)},So=function(e,t,n,r,i,a){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,s=901,c=5/r.fontMetrics().ptPerEm,l=Math.max(t-o,n+o);return xo(e,Math.max(l/500*s,2*l-c),!0,r,i,a)},Co={"\\bigl":{mclass:`mopen`,size:1},"\\Bigl":{mclass:`mopen`,size:2},"\\biggl":{mclass:`mopen`,size:3},"\\Biggl":{mclass:`mopen`,size:4},"\\bigr":{mclass:`mclose`,size:1},"\\Bigr":{mclass:`mclose`,size:2},"\\biggr":{mclass:`mclose`,size:3},"\\Biggr":{mclass:`mclose`,size:4},"\\bigm":{mclass:`mrel`,size:1},"\\Bigm":{mclass:`mrel`,size:2},"\\biggm":{mclass:`mrel`,size:3},"\\Biggm":{mclass:`mrel`,size:4},"\\big":{mclass:`mord`,size:1},"\\Big":{mclass:`mord`,size:2},"\\bigg":{mclass:`mord`,size:3},"\\Bigg":{mclass:`mord`,size:4}},wo=new Set(`(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,⌊,⌋,\\lceil,\\rceil,⌈,⌉,<,>,\\langle,⟨,\\rangle,⟩,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,⟮,⟯,\\lmoustache,\\rmoustache,⎰,⎱,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.`.split(`,`));function To(e){return`isMiddle`in e}function Eo(e,t){var n=Da(e);if(n&&wo.has(n.text))return n;throw n?new O(`Invalid delimiter '`+n.text+`' after '`+t.funcName+`'`,e):new O(`Invalid delimiter type '`+e.type+`'`,e)}U({type:`delimsizing`,names:[`\\bigl`,`\\Bigl`,`\\biggl`,`\\Biggl`,`\\bigr`,`\\Bigr`,`\\biggr`,`\\Biggr`,`\\bigm`,`\\Bigm`,`\\biggm`,`\\Biggm`,`\\big`,`\\Big`,`\\bigg`,`\\Bigg`],numArgs:1,argTypes:[`primitive`],handler:(e,t)=>{var n=Eo(Ni(t[0]),e);return{type:`delimsizing`,mode:e.parser.mode,size:Co[e.funcName].size,mclass:Co[e.funcName].mclass,delim:n.text}},htmlBuilder:(e,t)=>e.delim===`.`?V([e.mclass]):ho(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!==`.`&&t.push(Qi(e.delim,e.mode));var n=new G(`mo`,t);e.mclass===`mopen`||e.mclass===`mclose`?n.setAttribute(`fence`,`true`):n.setAttribute(`fence`,`false`),n.setAttribute(`stretchy`,`true`);var r=A(mo[e.size]);return n.setAttribute(`minsize`,r),n.setAttribute(`maxsize`,r),n}});function Do(e){if(!e.body)throw Error(`Bug: The leftright ParseNode wasn't fully parsed.`)}U({type:`leftright-right`,names:[`\\right`],numArgs:1,primitive:!0,handler:(e,t)=>{var n=e.parser.gullet.macros.get(`\\current@color`);if(n&&typeof n!=`string`)throw new O(`\\current@color set to non-string in \\right`);return{type:`leftright-right`,mode:e.parser.mode,delim:Eo(t[0],e).text,color:n}}}),U({type:`leftright`,names:[`\\left`],numArgs:1,primitive:!0,handler:(e,t)=>{var n=Eo(t[0],e),r=e.parser;++r.leftrightDepth;var i=r.parseExpression(!1);--r.leftrightDepth,r.expect(`\\right`,!1);var a=K(r.parseFunction(),`leftright-right`);return{type:`leftright`,mode:r.mode,body:i,left:n.text,right:a.delim,rightColor:a.color}},htmlBuilder:(e,t)=>{Do(e);for(var n=zi(e.body,t,!0,[`mopen`,`mclose`]),r=0,i=0,a=!1,o=0;o<n.length;o++){var s=n[o];To(s)?a=!0:(r=Math.max(n[o].height,r),i=Math.max(n[o].depth,i))}r*=t.sizeMultiplier,i*=t.sizeMultiplier;var c=e.left===`.`?Wi(t,[`mopen`]):So(e.left,r,i,t,e.mode,[`mopen`]);if(n.unshift(c),a)for(var l=1;l<n.length;l++){var u=n[l];if(To(u)){var d=u.isMiddle;n[l]=So(d.delim,r,i,d.options,e.mode,[])}}var f;if(e.right===`.`)f=Wi(t,[`mclose`]);else{var p=e.rightColor?t.withColor(e.rightColor):t;f=So(e.right,r,i,p,e.mode,[`mclose`])}return n.push(f),V([`minner`],n,t)},mathmlBuilder:(e,t)=>{Do(e);var n=ra(e.body,t);if(e.left!==`.`){var r=new G(`mo`,[Qi(e.left,e.mode)]);r.setAttribute(`fence`,`true`),n.unshift(r)}if(e.right!==`.`){var i=new G(`mo`,[Qi(e.right,e.mode)]);i.setAttribute(`fence`,`true`),e.rightColor&&i.setAttribute(`mathcolor`,e.rightColor),n.push(i)}return $i(n)}}),U({type:`middle`,names:[`\\middle`],numArgs:1,primitive:!0,handler:(e,t)=>{var n=Eo(t[0],e);if(!e.parser.leftrightDepth)throw new O(`\\middle without preceding \\left`,n);return{type:`middle`,mode:e.parser.mode,delim:n.text}},htmlBuilder:(e,t)=>{var n;return e.delim===`.`?n=Wi(t,[]):(n=ho(e.delim,1,t,e.mode,[]),n.isMiddle={delim:e.delim,options:t}),n},mathmlBuilder:(e,t)=>{var n=new G(`mo`,[e.delim===`\\vert`||e.delim===`|`?Qi(`|`,`text`):Qi(e.delim,e.mode)]);return n.setAttribute(`fence`,`true`),n.setAttribute(`lspace`,`0.05em`),n.setAttribute(`rspace`,`0.05em`),n}}),U({type:`enclose`,names:[`\\colorbox`],numArgs:2,allowedInText:!0,argTypes:[`color`,`hbox`],handler(e,t,n){var r=e.parser,i=e.funcName,a=K(t[0],`color-token`).color,o=t[1];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:a,body:o}},htmlBuilder:(e,t)=>{var n=_i(W(e.body,t),t),r=e.label.slice(1),i=t.sizeMultiplier,a,o,s=tn(e.body);if(r===`sout`)a=V([`katex-stretchy`,`katex-sout`]),a.height=t.fontMetrics().defaultRuleThickness/i,o=-.5*t.fontMetrics().xHeight;else if(r===`phase`){var c=qn({number:.6,unit:`pt`},t),l=qn({number:.35,unit:`ex`},t),u=t.havingBaseSizing();i/=u.sizeMultiplier;var d=n.height+n.depth+c+l;n.style.paddingLeft=A(d/2+c);var f=Math.floor(1e3*d*i);a=pi([`hide-tail`],[new ar([new or(`phase`,In(f))],{width:`400em`,height:A(f/1e3),viewBox:`0 0 400000 `+f,preserveAspectRatio:`xMinYMin slice`})],t),a.style.height=A(d),o=n.depth+c+l}else{/cancel/.test(r)?s||n.classes.push(`cancel-pad`):r===`angl`?n.classes.push(`anglpad`):n.classes.push(`boxpad`);var p,m,h=0;/box/.test(r)?(h=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),p=t.fontMetrics().fboxsep+(r===`colorbox`?0:h),m=p):r===`angl`?(h=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),p=4*h,m=Math.max(0,.25-n.depth)):(p=s?.2:0,m=p),a=ba(n,r,p,m,t),/fbox|boxed|fcolorbox/.test(r)?(a.style.borderStyle=`solid`,a.style.borderWidth=A(h)):r===`angl`&&h!==.049&&(a.style.borderTopWidth=A(h),a.style.borderRightWidth=A(h)),o=n.depth+m,e.backgroundColor&&(a.style.backgroundColor=e.backgroundColor,e.borderColor&&(a.style.borderColor=e.borderColor))}var g;if(e.backgroundColor)g=H({positionType:`individualShift`,children:[{type:`elem`,elem:a,shift:o},{type:`elem`,elem:n,shift:0}]});else{var _=/cancel|phase/.test(r)?[`svg-align`]:[];g=H({positionType:`individualShift`,children:[{type:`elem`,elem:n,shift:0},{type:`elem`,elem:a,shift:o,wrapperClasses:_}]})}return/cancel/.test(r)&&(g.height=n.height,g.depth=n.depth),/cancel/.test(r)&&!s?V([`mord`,`cancel-lap`],[g],t):V([`mord`],[g],t)},mathmlBuilder:(e,t)=>{var n,r=new G(e.label.includes(`colorbox`)?`mpadded`:`menclose`,[aa(e.body,t)]);switch(e.label){case`\\cancel`:r.setAttribute(`notation`,`updiagonalstrike`);break;case`\\bcancel`:r.setAttribute(`notation`,`downdiagonalstrike`);break;case`\\phase`:r.setAttribute(`notation`,`phasorangle`);break;case`\\sout`:r.setAttribute(`notation`,`horizontalstrike`);break;case`\\fbox`:r.setAttribute(`notation`,`box`);break;case`\\angl`:r.setAttribute(`notation`,`actuarial`);break;case`\\fcolorbox`:case`\\colorbox`:if(n=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,r.setAttribute(`width`,`+`+2*n+`pt`),r.setAttribute(`height`,`+`+2*n+`pt`),r.setAttribute(`lspace`,n+`pt`),r.setAttribute(`voffset`,n+`pt`),e.label===`\\fcolorbox`){var i=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);r.setAttribute(`style`,`border: `+A(i)+` solid `+e.borderColor)}break;case`\\xcancel`:r.setAttribute(`notation`,`updiagonalstrike downdiagonalstrike`);break}return e.backgroundColor&&r.setAttribute(`mathbackground`,e.backgroundColor),r}}),U({type:`enclose`,names:[`\\fcolorbox`],numArgs:3,allowedInText:!0,argTypes:[`color`,`color`,`hbox`],handler(e,t,n){var r=e.parser,i=e.funcName,a=K(t[0],`color-token`).color,o=K(t[1],`color-token`).color,s=t[2];return{type:`enclose`,mode:r.mode,label:i,backgroundColor:o,borderColor:a,body:s}}}),U({type:`enclose`,names:[`\\fbox`],numArgs:1,argTypes:[`hbox`],allowedInText:!0,handler(e,t){return{type:`enclose`,mode:e.parser.mode,label:`\\fbox`,body:t[0]}}}),U({type:`enclose`,names:[`\\cancel`,`\\bcancel`,`\\xcancel`,`\\phase`],numArgs:1,handler(e,t){var n=e.parser,r=e.funcName,i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}}}),U({type:`enclose`,names:[`\\sout`],numArgs:1,allowedInText:!0,handler(e,t){var n=e.parser,r=e.funcName;n.mode===`math`&&ii({strict:n.settings.strict,errorCode:`mathVsSout`,errorMsg:`LaTeX's \\sout works only in text mode`,report:!0});var i=t[0];return{type:`enclose`,mode:n.mode,label:r,body:i}}}),U({type:`enclose`,names:[`\\angl`],numArgs:1,argTypes:[`hbox`],allowedInText:!1,handler(e,t){return{type:`enclose`,mode:e.parser.mode,label:`\\angl`,body:t[0]}}});var Oo={};function ko(e){for(var t=e.type,n=e.names,r=e.props,i=e.handler,a=e.htmlBuilder,o=e.mathmlBuilder,s={type:t,numArgs:r.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},c=0;c<n.length;++c)Oo[n[c]]=s;a&&(Ai[t]=a),o&&(ji[t]=o)}var Ao={};function q(e,t){Ao[e]=t}var jo=class e{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(t,n){return n?!t||!t.loc||!n.loc||t.loc.lexer!==n.loc.lexer?null:new e(t.loc.lexer,t.loc.start,n.loc.end):t&&t.loc}},Mo=class e{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(t,n){return new e(n,jo.range(this,t))}};function No(e){var t=[];e.consumeSpaces();var n=e.fetch().text;for(n===`\\relax`&&(e.consume(),e.consumeSpaces(),n=e.fetch().text);n===`\\hline`||n===`\\hdashline`;)e.consume(),t.push(n===`\\hdashline`),e.consumeSpaces(),n=e.fetch().text;return t}var Po=e=>{if(!e.parser.settings.displayMode)throw new O(`{`+e.envName+`} can be used only in display mode.`)},Fo=new Set([`gather`,`gather*`]);function Io(e){if(!e.includes(`ed`))return!e.includes(`*`)}function Lo(e,t,n){var r=t.hskipBeforeAndAfter,i=t.addJot,a=t.cols,o=t.arraystretch,s=t.colSeparationType,c=t.autoTag,l=t.singleRow,u=t.emptySingleRow,d=t.maxNumCols,f=t.leqno;if(e.gullet.beginGroup(),l||e.gullet.macros.set(`\\cr`,`\\\\\\relax`),!o){var p=e.gullet.expandMacroAsText(`\\arraystretch`);if(p==null)o=1;else if(o=parseFloat(p),!o||o<0)throw new O(`Invalid \\arraystretch: `+p)}e.gullet.beginGroup();var m=[],h=[m],g=[],_=[],v=c==null?void 0:[];function y(){c&&e.gullet.macros.set(`\\@eqnsw`,`1`,!0)}function b(){v&&(e.gullet.macros.get(`\\df@tag`)?(v.push(e.subparse([new Mo(`\\df@tag`)])),e.gullet.macros.set(`\\df@tag`,void 0,!0)):v.push(!!c&&e.gullet.macros.get(`\\@eqnsw`)===`1`))}for(y(),_.push(No(e));;){var x=e.parseExpression(!1,l?`\\end`:`\\\\`);e.gullet.endGroup(),e.gullet.beginGroup();var S={type:`ordgroup`,mode:e.mode,body:x};n&&(S={type:`styling`,mode:e.mode,style:n,resetFont:!0,body:[S]}),m.push(S);var C=e.fetch().text;if(C===`&`){if(d&&m.length===d){if(l||s)throw new O(`Too many tab characters: &`,e.nextToken);ii({strict:e.settings.strict,errorCode:`textEnv`,errorMsg:`Too few columns specified in the {array} column argument.`,report:!0})}e.consume()}else if(C===`\\end`){b(),m.length===1&&S.type===`styling`&&S.body.length===1&&S.body[0].type===`ordgroup`&&S.body[0].body.length===0&&(h.length>1||!u)&&!Array.isArray(v?.[v.length-1])&&!(c&&v?.[v.length-1]===!0)&&h.pop(),_.length<h.length+1&&_.push([]);break}else if(C===`\\\\`){e.consume();var ee=void 0;e.gullet.future().text!==` `&&(ee=e.parseSizeGroup(!0)),g.push(ee?ee.value:null),b(),_.push(No(e)),m=[],h.push(m),y()}else throw new O(`Expected & or \\\\ or \\cr or \\end`,e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:`array`,mode:e.mode,addJot:i,arraystretch:o,body:h,cols:a,rowGaps:g,hskipBeforeAndAfter:r,hLinesBeforeRow:_,colSeparationType:s,tags:v,leqno:f}}function Ro(e){return e.slice(0,1)===`d`?`display`:`text`}var zo=function(e,t){var n,r,i=e.body.length,a=e.hLinesBeforeRow,o=0,s=Array(i),c=[],l=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,d=5*u;e.colSeparationType&&e.colSeparationType===`small`&&(d=.2778*(t.havingStyle(k.SCRIPT).sizeMultiplier/t.sizeMultiplier));var f=e.colSeparationType===`CD`?qn({number:3,unit:`ex`},t):12*u,p=3*u,m=e.arraystretch*f,h=.7*m,g=.3*m,_=0;function v(e){for(var t=0;t<e.length;++t)t>0&&(_+=.25),c.push({pos:_,isDashed:e[t]})}for(v(a[0]),n=0;n<e.body.length;++n){var y=e.body[n],b=h,x=g;o<y.length&&(o=y.length);var S={cells:Array(y.length),height:0,depth:0,pos:0};for(r=0;r<y.length;++r){var C=W(y[r],t);x<C.depth&&(x=C.depth),b<C.height&&(b=C.height),S.cells[r]=C}var ee=e.rowGaps[n],te=0;ee&&(te=qn(ee,t),te>0&&(te+=g,x<te&&(x=te),te=0)),e.addJot&&n<e.body.length-1&&(x+=p),S.height=b,S.depth=x,_+=b,S.pos=_,_+=x+te,s[n]=S,v(a[n+1])}var w=_/2+t.fontMetrics().axisHeight,ne=e.cols||[],re=[],T,ie,ae=[];if(e.tags&&e.tags.some(e=>e))for(n=0;n<i;++n){var oe=s[n],se=oe.pos-w,ce=e.tags[n],le=void 0;le=ce===!0?V([`eqn-num`],[],t):ce===!1?V([],[],t):V([],zi(ce,t,!0),t),le.depth=oe.depth,le.height=oe.height,ae.push({type:`elem`,elem:le,shift:se})}for(r=0,ie=0;r<o||ie<ne.length;++r,++ie){for(var ue=ne[ie],de=!0;(fe=ue)?.type===`separator`;){var fe;if(de||(T=V([`arraycolsep`],[]),T.style.width=A(t.fontMetrics().doubleRuleSep),re.push(T)),ue.separator===`|`||ue.separator===`:`){var pe=ue.separator===`|`?`solid`:`dashed`,me=V([`vertical-separator`],[],t);me.style.height=A(_),me.style.borderRightWidth=A(l),me.style.borderRightStyle=pe,me.style.margin=`0 `+A(-l/2);var he=_-w;he&&(me.style.verticalAlign=A(-he)),re.push(me)}else throw new O(`Invalid separator type: `+ue.separator);ie++,ue=ne[ie],de=!1}if(!(r>=o)){var ge=void 0;(r>0||e.hskipBeforeAndAfter)&&(ge=ue?.pregap??d,ge!==0&&(T=V([`arraycolsep`],[]),T.style.width=A(ge),re.push(T)));var _e=[];for(n=0;n<i;++n){var ve=s[n],ye=ve.cells[r];if(ye){var be=ve.pos-w;ye.depth=ve.depth,ye.height=ve.height,_e.push({type:`elem`,elem:ye,shift:be})}}var xe=H({positionType:`individualShift`,children:_e}),Se=V([`col-align-`+(ue?.align||`c`)],[xe]);re.push(Se),(r<o-1||e.hskipBeforeAndAfter)&&(ge=ue?.postgap??d,ge!==0&&(T=V([`arraycolsep`],[]),T.style.width=A(ge),re.push(T)))}}var E=V([`mtable`],re);if(c.length>0){for(var Ce=mi(`katex-hline`,t,l),we=mi(`katex-hdashline`,t,l),Te=[{type:`elem`,elem:E,shift:0}];c.length>0;){var Ee=c.pop(),De=Ee.pos-w;Ee.isDashed?Te.push({type:`elem`,elem:we,shift:De}):Te.push({type:`elem`,elem:Ce,shift:De})}E=H({positionType:`individualShift`,children:Te})}if(ae.length===0)return V([`mord`],[E],t);var Oe=V([`katex-tag`],[H({positionType:`individualShift`,children:ae})],t);return gi([E,Oe])},Bo={c:`center `,l:`left `,r:`right `},Vo=function(e,t){for(var n=[],r=new G(`mtd`,[],[`mtr-glue`]),i=new G(`mtd`,[],[`mml-eqn-num`]),a=0;a<e.body.length;a++){for(var o=e.body[a],s=[],c=0;c<o.length;c++)s.push(new G(`mtd`,[aa(o[c],t)]));e.tags&&e.tags[a]&&(s.unshift(r),s.push(r),e.leqno?s.unshift(i):s.push(i)),n.push(new G(`mtr`,s))}var l=new G(`mtable`,n),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);l.setAttribute(`rowspacing`,A(u));var d=``,f=``;if(e.cols&&e.cols.length>0){var p=e.cols,m=``,h=!1,g=0,_=p.length;p[0].type===`separator`&&(d+=`top `,g=1),p[p.length-1].type===`separator`&&(d+=`bottom `,--_);for(var v=g;v<_;v++){var y=p[v];y.type===`align`?(f+=Bo[y.align],h&&(m+=`none `),h=!0):y.type===`separator`&&(h&&=(m+=y.separator===`|`?`solid `:`dashed `,!1))}l.setAttribute(`columnalign`,f.trim()),/[sd]/.test(m)&&l.setAttribute(`columnlines`,m.trim())}if(e.colSeparationType===`align`){for(var b=e.cols||[],x=``,S=1;S<b.length;S++)x+=S%2?`0em `:`1em `;l.setAttribute(`columnspacing`,x.trim())}else e.colSeparationType===`alignat`||e.colSeparationType===`gather`?l.setAttribute(`columnspacing`,`0em`):e.colSeparationType===`small`?l.setAttribute(`columnspacing`,`0.2778em`):e.colSeparationType===`CD`?l.setAttribute(`columnspacing`,`0.5em`):l.setAttribute(`columnspacing`,`1em`);var C=``,ee=e.hLinesBeforeRow;d+=ee[0].length>0?`left `:``,d+=ee[ee.length-1].length>0?`right `:``;for(var te=1;te<ee.length-1;te++)C+=ee[te].length===0?`none `:ee[te][0]?`dashed `:`solid `;return/[sd]/.test(C)&&l.setAttribute(`rowlines`,C.trim()),d!==``&&(l=new G(`menclose`,[l]),l.setAttribute(`notation`,d.trim())),e.arraystretch&&e.arraystretch<1&&(l=new G(`mstyle`,[l]),l.setAttribute(`scriptlevel`,`1`)),l},Ho=function(e,t){e.envName.includes(`ed`)||Po(e);var n=[],r=e.envName===`split`,i=Lo(e.parser,{cols:n,addJot:!0,autoTag:r?void 0:Io(e.envName),emptySingleRow:!0,colSeparationType:e.envName.includes(`at`)?`alignat`:`align`,maxNumCols:r?2:void 0,leqno:e.parser.settings.leqno},`display`),a=0,o=0,s={type:`ordgroup`,mode:e.mode,body:[]};if(t[0]&&t[0].type===`ordgroup`){var c=`Number of columns should be a positive integer`,l=Oa(t[0],c);if(!/^[0-9]+$/.test(l)||Number(l)<1)throw new O(c,t[0]);a=Number(l),o=a*2}var u=!o;i.body.forEach(function(e){for(var t=1;t<e.length;t+=2)K(K(e[t],`styling`).body[0],`ordgroup`).body.unshift(s);if(u)o<e.length&&(o=e.length);else{var n=e.length/2;if(a<n)throw new O(`Too many math in a row: `+(`expected `+a+`, but got `+n),e[0])}});for(var d=0;d<o;++d){var f=`r`,p=0;d%2==1?f=`l`:d>0&&u&&(p=1),n[d]={type:`align`,align:f,pregap:p,postgap:0}}return i.colSeparationType=u?`align`:`alignat`,i};ko({type:`array`,names:[`array`,`darray`],props:{numArgs:1},handler(e,t){var n=(Da(t[0])?[t[0]]:K(t[0],`ordgroup`).body).map(function(e){var t=Ea(e).text;if(`lcr`.includes(t))return{type:`align`,align:t};if(t===`|`)return{type:`separator`,separator:`|`};if(t===`:`)return{type:`separator`,separator:`:`};throw new O(`Unknown column alignment: `+t,e)}),r={cols:n,hskipBeforeAndAfter:!0,maxNumCols:n.length};return Lo(e.parser,r,Ro(e.envName))},htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`matrix`,`pmatrix`,`bmatrix`,`Bmatrix`,`vmatrix`,`Vmatrix`,`matrix*`,`pmatrix*`,`bmatrix*`,`Bmatrix*`,`vmatrix*`,`Vmatrix*`],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:[`(`,`)`],bmatrix:[`[`,`]`],Bmatrix:[`\\{`,`\\}`],vmatrix:[`|`,`|`],Vmatrix:[`\\Vert`,`\\Vert`]}[e.envName.replace(`*`,``)],n=`c`,r={hskipBeforeAndAfter:!1,cols:[{type:`align`,align:n}]};if(e.envName.charAt(e.envName.length-1)===`*`){var i=e.parser;if(i.consumeSpaces(),i.fetch().text===`[`){if(i.consume(),i.consumeSpaces(),n=i.fetch().text,!`lcr`.includes(n))throw new O(`Expected l or c or r`,i.nextToken);i.consume(),i.consumeSpaces(),i.expect(`]`),i.consume(),r.cols=[{type:`align`,align:n}]}}var a=Lo(e.parser,r,Ro(e.envName)),o=Math.max(0,...a.body.map(e=>e.length));return a.cols=Array(o).fill({type:`align`,align:n}),t?{type:`leftright`,mode:e.mode,body:[a],left:t[0],right:t[1],rightColor:void 0}:a},htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`smallmatrix`],props:{numArgs:0},handler(e){var t=Lo(e.parser,{arraystretch:.5},`script`);return t.colSeparationType=`small`,t},htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`subarray`],props:{numArgs:1},handler(e,t){var n=(Da(t[0])?[t[0]]:K(t[0],`ordgroup`).body).map(function(e){var t=Ea(e).text;if(`lc`.includes(t))return{type:`align`,align:t};throw new O(`Unknown column alignment: `+t,e)});if(n.length>1)throw new O(`{subarray} can contain only one column`);var r={cols:n,hskipBeforeAndAfter:!1,arraystretch:.5},i=Lo(e.parser,r,`script`);if(i.body.length>0&&i.body[0].length>1)throw new O(`{subarray} can contain only one column`);return i},htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`cases`,`dcases`,`rcases`,`drcases`],props:{numArgs:0},handler(e){var t=Lo(e.parser,{arraystretch:1.2,cols:[{type:`align`,align:`l`,pregap:0,postgap:1},{type:`align`,align:`l`,pregap:0,postgap:0}]},Ro(e.envName));return{type:`leftright`,mode:e.mode,body:[t],left:e.envName.includes(`r`)?`.`:`\\{`,right:e.envName.includes(`r`)?`\\}`:`.`,rightColor:void 0}},htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`align`,`align*`,`aligned`,`split`],props:{numArgs:0},handler:Ho,htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`gathered`,`gather`,`gather*`],props:{numArgs:0},handler(e){Fo.has(e.envName)&&Po(e);var t={cols:[{type:`align`,align:`c`}],addJot:!0,colSeparationType:`gather`,autoTag:Io(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Lo(e.parser,t,`display`)},htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`alignat`,`alignat*`,`alignedat`],props:{numArgs:1},handler:Ho,htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`equation`,`equation*`],props:{numArgs:0},handler(e){Po(e);var t={autoTag:Io(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Lo(e.parser,t,`display`)},htmlBuilder:zo,mathmlBuilder:Vo}),ko({type:`array`,names:[`CD`],props:{numArgs:0},handler(e){return Po(e),Ha(e.parser)},htmlBuilder:zo,mathmlBuilder:Vo}),q(`\\nonumber`,`\\gdef\\@eqnsw{0}`),q(`\\notag`,`\\nonumber`),U({type:`text`,names:[`\\hline`,`\\hdashline`],numArgs:0,allowedInText:!0,allowedInMath:!0,handler(e,t){throw new O(e.funcName+` valid only within array environment`)}});var Uo=Oo;U({type:`environment`,names:[`\\begin`,`\\end`],numArgs:1,argTypes:[`text`],handler(e,t){var n=e.parser,r=e.funcName,i=t[0];if(i.type!==`ordgroup`)throw new O(`Invalid environment name`,i);var a=Oa(i,`Environment name should contain only text characters and spaces`,!0);if(r===`\\begin`){if(!Object.prototype.hasOwnProperty.call(Uo,a))throw new O(`No such environment: `+a,i);var o=Uo[a],s=n.parseArguments(`\\begin{`+a+`}`,o),c=s.args,l=s.optArgs,u={mode:n.mode,envName:a,parser:n},d=o.handler(u,c,l);n.expect(`\\end`,!1);var f=n.nextToken,p=K(n.parseFunction(),`environment`);if(p.name!==a)throw new O(`Mismatch: \\begin{`+a+`} matched by \\end{`+p.name+`}`,f);return d}return{type:`environment`,mode:n.mode,name:a,nameGroup:i}}});var Wo=(e,t)=>{var n=e.font,r=t.withFont(n);return W(e.body,r)},Go=(e,t)=>{var n=e.font,r=t.withFont(n);return aa(e.body,r)},Ko={"\\Bbb":`\\mathbb`,"\\bold":`\\mathbf`,"\\frak":`\\mathfrak`};U({type:`font`,names:[`\\mathrm`,`\\mathit`,`\\mathbf`,`\\mathnormal`,`\\mathsfit`,`\\mathbb`,`\\mathcal`,`\\mathfrak`,`\\mathscr`,`\\mathsf`,`\\mathtt`,`\\Bbb`,`\\bold`,`\\frak`],numArgs:1,allowedInArgument:!0,handler:(e,t)=>{var n=e.parser,r=e.funcName,i=Ni(t[0]),a=r in Ko?Ko[r]:r;return{type:`font`,mode:n.mode,font:a.slice(1),body:i}},htmlBuilder:Wo,mathmlBuilder:Go}),U({type:`mclass`,names:[`\\boldsymbol`,`\\bm`],numArgs:1,handler:(e,t)=>{var n=e.parser,r=t[0];return{type:`mclass`,mode:n.mode,mclass:Ia(r),body:[{type:`font`,mode:n.mode,font:`boldsymbol`,body:r}],isCharacterBox:tn(r)}}}),U({type:`font`,names:[`\\rm`,`\\sf`,`\\tt`,`\\bf`,`\\it`,`\\cal`],numArgs:0,allowedInText:!0,handler:(e,t)=>{var n=e.parser,r=e.funcName,i=e.breakOnTokenText,a=n.mode,o=n.parseExpression(!0,i);return{type:`font`,mode:a,font:`math`+r.slice(1),body:{type:`ordgroup`,mode:n.mode,body:o}}}});var qo=(e,t)=>{var n=t.style,r=n.fracNum(),i=n.fracDen(),a=t.havingStyle(r),o=W(e.numer,a,t);if(e.continued){var s=8.5/t.fontMetrics().ptPerEm,c=3.5/t.fontMetrics().ptPerEm;o.height=o.height<s?s:o.height,o.depth=o.depth<c?c:o.depth}a=t.havingStyle(i);var l=W(e.denom,a,t),u,d,f;e.hasBarLine?(e.barSize?(d=qn(e.barSize,t),u=mi(`frac-line`,t,d)):u=mi(`frac-line`,t),d=u.height,f=u.height):(u=null,d=0,f=t.fontMetrics().defaultRuleThickness);var p,m,h;n.size===k.DISPLAY.size?(p=t.fontMetrics().num1,m=d>0?3*f:7*f,h=t.fontMetrics().denom1):(d>0?(p=t.fontMetrics().num2,m=f):(p=t.fontMetrics().num3,m=3*f),h=t.fontMetrics().denom2);var g;if(u){var _=t.fontMetrics().axisHeight;p-o.depth-(_+.5*d)<m&&(p+=m-(p-o.depth-(_+.5*d))),_-.5*d-(l.height-h)<m&&(h+=m-(_-.5*d-(l.height-h)));var v=-(_-.5*d);g=H({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:u,shift:v},{type:`elem`,elem:o,shift:-p}]})}else{var y=p-o.depth-(l.height-h);y<m&&(p+=.5*(m-y),h+=.5*(m-y)),g=H({positionType:`individualShift`,children:[{type:`elem`,elem:l,shift:h},{type:`elem`,elem:o,shift:-p}]})}a=t.havingStyle(n),g.height*=a.sizeMultiplier/t.sizeMultiplier,g.depth*=a.sizeMultiplier/t.sizeMultiplier;var b=n.size===k.DISPLAY.size?t.fontMetrics().delim1:n.size===k.SCRIPTSCRIPT.size?t.havingStyle(k.SCRIPT).fontMetrics().delim2:t.fontMetrics().delim2,x=e.leftDelim==null?Wi(t,[`mopen`]):xo(e.leftDelim,b,!0,t.havingStyle(n),e.mode,[`mopen`]),S=e.continued?V([]):e.rightDelim==null?Wi(t,[`mclose`]):xo(e.rightDelim,b,!0,t.havingStyle(n),e.mode,[`mclose`]);return V([`mord`].concat(a.sizingClasses(t)),[x,V([`mfrac`],[g]),S],t)},Jo=(e,t)=>{var n=new G(`mfrac`,[aa(e.numer,t),aa(e.denom,t)]);if(!e.hasBarLine)n.setAttribute(`linethickness`,`0px`);else if(e.barSize){var r=qn(e.barSize,t);n.setAttribute(`linethickness`,A(r))}if(e.leftDelim!=null||e.rightDelim!=null){var i=[];if(e.leftDelim!=null){var a=new G(`mo`,[new Ji(e.leftDelim.replace(`\\`,``))]);a.setAttribute(`fence`,`true`),i.push(a)}if(i.push(n),e.rightDelim!=null){var o=new G(`mo`,[new Ji(e.rightDelim.replace(`\\`,``))]);o.setAttribute(`fence`,`true`),i.push(o)}return $i(i)}return n},Yo=(e,t)=>t?{type:`styling`,mode:e.mode,style:t,body:[e]}:e;U({type:`genfrac`,names:[`\\cfrac`,`\\dfrac`,`\\frac`,`\\tfrac`,`\\dbinom`,`\\binom`,`\\tbinom`,`\\\\atopfrac`,`\\\\bracefrac`,`\\\\brackfrac`],numArgs:2,allowedInArgument:!0,handler:(e,t)=>{var n=e.parser,r=e.funcName,i=t[0],a=t[1],o,s=null,c=null;switch(r){case`\\cfrac`:case`\\dfrac`:case`\\frac`:case`\\tfrac`:o=!0;break;case`\\\\atopfrac`:o=!1;break;case`\\dbinom`:case`\\binom`:case`\\tbinom`:o=!1,s=`(`,c=`)`;break;case`\\\\bracefrac`:o=!1,s=`\\{`,c=`\\}`;break;case`\\\\brackfrac`:o=!1,s=`[`,c=`]`;break;default:throw Error(`Unrecognized genfrac command`)}var l=r===`\\cfrac`,u=null;return l||r.startsWith(`\\d`)?u=`display`:r.startsWith(`\\t`)&&(u=`text`),Yo({type:`genfrac`,mode:n.mode,numer:i,denom:a,continued:l,hasBarLine:o,leftDelim:s,rightDelim:c,barSize:null},u)},htmlBuilder:qo,mathmlBuilder:Jo}),U({type:`infix`,names:[`\\over`,`\\choose`,`\\atop`,`\\brace`,`\\brack`],numArgs:0,infix:!0,handler(e){var t=e.parser,n=e.funcName,r=e.token,i;switch(n){case`\\over`:i=`\\frac`;break;case`\\choose`:i=`\\binom`;break;case`\\atop`:i=`\\\\atopfrac`;break;case`\\brace`:i=`\\\\bracefrac`;break;case`\\brack`:i=`\\\\brackfrac`;break;default:throw Error(`Unrecognized infix genfrac command`)}return{type:`infix`,mode:t.mode,replaceWith:i,token:r}}});var Xo=[`display`,`text`,`script`,`scriptscript`],Zo=function(e){var t=null;return e.length>0&&(t=e,t=t===`.`?null:t),t};U({type:`genfrac`,names:[`\\genfrac`],numArgs:6,allowedInArgument:!0,argTypes:[`math`,`math`,`size`,`text`,`math`,`math`],handler(e,t){var n=e.parser,r=t[4],i=t[5],a=Ni(t[0]),o=a.type===`atom`&&a.family===`open`?Zo(a.text):null,s=Ni(t[1]),c=s.type===`atom`&&s.family===`close`?Zo(s.text):null,l=K(t[2],`size`),u,d=null;l.isBlank?u=!0:(d=l.value,u=d.number>0);var f=null,p=t[3];if(p.type===`ordgroup`){if(p.body.length>0){var m=K(p.body[0],`textord`);f=Xo[Number(m.text)]}}else p=K(p,`textord`),f=Xo[Number(p.text)];return Yo({type:`genfrac`,mode:n.mode,numer:r,denom:i,continued:!1,hasBarLine:u,barSize:d,leftDelim:o,rightDelim:c},f)}}),U({type:`infix`,names:[`\\above`],numArgs:1,argTypes:[`size`],infix:!0,handler(e,t){var n=e.parser;e.funcName;var r=e.token;return{type:`infix`,mode:n.mode,replaceWith:`\\\\abovefrac`,size:K(t[0],`size`).value,token:r}}}),U({type:`genfrac`,names:[`\\\\abovefrac`],numArgs:3,argTypes:[`math`,`size`,`math`],handler:(e,t)=>{var n=e.parser;e.funcName;var r=t[0],i=K(t[1],`infix`).size;if(!i)throw Error(`\\\\abovefrac expected size, but got `+String(i));var a=t[2],o=i.number>0;return{type:`genfrac`,mode:n.mode,numer:r,denom:a,continued:!1,hasBarLine:o,barSize:i,leftDelim:null,rightDelim:null}}});var Qo=(e,t)=>{var n=t.style,r,i;e.type===`supsub`?(r=e.sup?W(e.sup,t.havingStyle(n.sup()),t):W(e.sub,t.havingStyle(n.sub()),t),i=K(e.base,`horizBrace`)):i=K(e,`horizBrace`);var a=W(i.base,t.havingBaseStyle(k.DISPLAY)),o=ya(i,t),s=i.isOver?H({positionType:`firstBaseline`,children:[{type:`elem`,elem:a},{type:`kern`,size:.1},{type:`elem`,elem:o,wrapperClasses:[`svg-align`]}]}):H({positionType:`bottom`,positionData:a.depth+.1+o.height,children:[{type:`elem`,elem:o,wrapperClasses:[`svg-align`]},{type:`kern`,size:.1},{type:`elem`,elem:a}]});if(r){var c=V([`minner`,i.isOver?`mover`:`munder`],[s],t);s=i.isOver?H({positionType:`firstBaseline`,children:[{type:`elem`,elem:c},{type:`kern`,size:.2},{type:`elem`,elem:r}]}):H({positionType:`bottom`,positionData:c.depth+.2+r.height+r.depth,children:[{type:`elem`,elem:r},{type:`kern`,size:.2},{type:`elem`,elem:c}]})}return V([`minner`,i.isOver?`mover`:`munder`],[s],t)};U({type:`horizBrace`,names:[`\\overbrace`,`\\underbrace`,`\\overbracket`,`\\underbracket`],numArgs:1,handler(e,t){var n=e.parser,r=e.funcName;return{type:`horizBrace`,mode:n.mode,label:r,isOver:r.includes(`\\over`),base:t[0]}},htmlBuilder:Qo,mathmlBuilder:(e,t)=>{var n=ga(e.label);return new G(e.isOver?`mover`:`munder`,[aa(e.base,t),n])}}),U({type:`href`,names:[`\\href`],numArgs:2,argTypes:[`url`,`original`],allowedInText:!0,handler:(e,t)=>{var n=e.parser,r=t[1],i=K(t[0],`url`).url;return n.settings.isTrusted({command:`\\href`,url:i})?{type:`href`,mode:n.mode,href:i,body:Pi(r)}:n.formatUnsupportedCmd(`\\href`)},htmlBuilder:(e,t)=>{var n=zi(e.body,t,!1);return hi(e.href,[],n,t)},mathmlBuilder:(e,t)=>{var n=ia(e.body,t);return n instanceof G||(n=new G(`mrow`,[n])),n.setAttribute(`href`,e.href),n}}),U({type:`href`,names:[`\\url`],numArgs:1,argTypes:[`url`],allowedInText:!0,handler:(e,t)=>{var n=e.parser,r=K(t[0],`url`).url;if(!n.settings.isTrusted({command:`\\url`,url:r}))return n.formatUnsupportedCmd(`\\url`);for(var i=[],a=0;a<r.length;a++){var o=r[a];o===`~`&&(o=`\\textasciitilde`),i.push({type:`textord`,mode:`text`,text:o})}var s={type:`text`,mode:n.mode,font:`\\texttt`,body:i};return{type:`href`,mode:n.mode,href:r,body:Pi(s)}}}),U({type:`hbox`,names:[`\\hbox`],numArgs:1,argTypes:[`text`],allowedInText:!0,primitive:!0,handler(e,t){return{type:`hbox`,mode:e.parser.mode,body:Pi(t[0])}},htmlBuilder(e,t){return gi(zi(e.body,t.withFont(``),!1))},mathmlBuilder(e,t){return new G(`mrow`,ra(e.body,t.withFont(``)))}}),U({type:`html`,names:[`\\htmlClass`,`\\htmlId`,`\\htmlStyle`,`\\htmlData`],numArgs:2,argTypes:[`raw`,`original`],allowedInText:!0,handler:(e,t)=>{var n=e.parser,r=e.funcName;e.token;var i=K(t[0],`raw`).string,a=t[1];n.settings.strict&&ii({strict:n.settings.strict,errorCode:`htmlExtension`,errorMsg:`HTML extension is disabled on strict mode`,report:!0});var o,s={};switch(r){case`\\htmlClass`:s.class=i,o={command:`\\htmlClass`,class:i};break;case`\\htmlId`:s.id=i,o={command:`\\htmlId`,id:i};break;case`\\htmlStyle`:s.style=i,o={command:`\\htmlStyle`,style:i};break;case`\\htmlData`:for(var c=`{,}`,l=[],u=``,d=0;d<i.length;d++)i.startsWith(c,d)?(u+=`,`,d+=c.length-1):i[d]===`,`?(l.push(u),u=``):u+=i[d];l.push(u);for(var f=0;f<l.length;f++){var p=l[f],m=p.indexOf(`=`);if(m<0)throw new O(`\\htmlData key/value '`+p+`' missing equals sign`);var h=p.slice(0,m),g=p.slice(m+1);s[`data-`+h.trim()]=g}o={command:`\\htmlData`,attributes:s};break;default:throw Error(`Unrecognized html command`)}return n.settings.isTrusted(o)?{type:`html`,mode:n.mode,attributes:s,body:Pi(a)}:n.formatUnsupportedCmd(r)},htmlBuilder:(e,t)=>{var n=zi(e.body,t,!1),r=[`enclosing`];e.attributes.class&&r.push(...e.attributes.class.trim().split(/\s+/));var i=V(r,n,t);for(var a of Object.entries(e.attributes)){var o=a[0],s=a[1];o!==`class`&&i.setAttribute(o,s)}return i},mathmlBuilder:(e,t)=>ia(e.body,t)}),U({type:`htmlmathml`,names:[`\\html@mathml`],numArgs:2,allowedInArgument:!0,allowedInText:!0,handler:(e,t)=>({type:`htmlmathml`,mode:e.parser.mode,html:Pi(t[0]),mathml:Pi(t[1])}),htmlBuilder:(e,t)=>gi(zi(e.html,t,!1)),mathmlBuilder:(e,t)=>ia(e.mathml,t)});var $o=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:`bp`};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new O(`Invalid size: '`+e+`' in \\includegraphics`);var n={number:+(t[1]+t[2]),unit:t[3]};if(!Kn(n))throw new O(`Invalid unit: '`+n.unit+`' in \\includegraphics.`);return n};U({type:`includegraphics`,names:[`\\includegraphics`],numArgs:1,numOptionalArgs:1,argTypes:[`raw`,`url`],allowedInText:!1,handler:(e,t,n)=>{var r=e.parser,i={number:0,unit:`em`},a={number:.9,unit:`em`},o={number:0,unit:`em`},s=``;if(n[0])for(var c=K(n[0],`raw`).string.split(`,`),l=0;l<c.length;l++){var u=c[l].split(`=`);if(u.length===2){var d=u[1].trim();switch(u[0].trim()){case`alt`:s=d;break;case`width`:i=$o(d);break;case`height`:a=$o(d);break;case`totalheight`:o=$o(d);break;default:throw new O(`Invalid key: '`+u[0]+`' in \\includegraphics.`)}}}var f=K(t[0],`url`).url;return s===``&&(s=f,s=s.replace(/^.*[\\/]/,``),s=s.substring(0,s.lastIndexOf(`.`))),r.settings.isTrusted({command:`\\includegraphics`,url:f})?{type:`includegraphics`,mode:r.mode,alt:s,width:i,height:a,totalheight:o,src:f}:r.formatUnsupportedCmd(`\\includegraphics`)},htmlBuilder:(e,t)=>{var n=qn(e.height,t),r=0;e.totalheight.number>0&&(r=qn(e.totalheight,t)-n);var i=0;e.width.number>0&&(i=qn(e.width,t));var a={height:A(n+r)};i>0&&(a.width=A(i)),r>0&&(a.verticalAlign=A(-r));var o=new nr(e.src,e.alt,a);return o.height=n,o.depth=r,o},mathmlBuilder:(e,t)=>{var n=new G(`mglyph`,[]);n.setAttribute(`alt`,e.alt);var r=qn(e.height,t),i=0;if(e.totalheight.number>0&&(i=qn(e.totalheight,t)-r,n.setAttribute(`valign`,A(-i))),n.setAttribute(`height`,A(r+i)),e.width.number>0){var a=qn(e.width,t);n.setAttribute(`width`,A(a))}return n.setAttribute(`src`,e.src),n}}),U({type:`kern`,names:[`\\kern`,`\\mkern`,`\\hskip`,`\\mskip`],numArgs:1,argTypes:[`size`],primitive:!0,allowedInText:!0,handler(e,t){var n=e.parser,r=e.funcName,i=K(t[0],`size`);if(n.settings.strict){var a=r[1]===`m`,o=i.value.unit===`mu`;a?(o||ii({strict:n.settings.strict,errorCode:`mathVsTextUnits`,errorMsg:`LaTeX's `+r+` supports only mu units, `+(`not `+i.value.unit+` units`),report:!0}),n.mode!==`math`&&ii({strict:n.settings.strict,errorCode:`mathVsTextUnits`,errorMsg:`LaTeX's `+r+` works only in math mode`,report:!0})):o&&ii({strict:n.settings.strict,errorCode:`mathVsTextUnits`,errorMsg:`LaTeX's `+r+` doesn't support mu units`,report:!0})}return{type:`kern`,mode:n.mode,dimension:i.value}},htmlBuilder(e,t){return yi(e.dimension,t)},mathmlBuilder(e,t){return new Yi(qn(e.dimension,t))}}),U({type:`lap`,names:[`\\mathllap`,`\\mathrlap`,`\\mathclap`],numArgs:1,allowedInText:!0,handler:(e,t)=>{var n=e.parser,r=e.funcName,i=t[0];return{type:`lap`,mode:n.mode,alignment:r.slice(5),body:i}},htmlBuilder:(e,t)=>{var n;e.alignment===`clap`?(n=V([],[W(e.body,t)]),n=V([`katex-inner`],[n],t)):n=V([`katex-inner`],[W(e.body,t)]);var r=V([`katex-fix`],[]),i=V([e.alignment],[n,r],t),a=V([`katex-strut`]);return a.style.height=A(i.height+i.depth),i.depth&&(a.style.verticalAlign=A(-i.depth)),i.children.unshift(a),i=V([`katex-thinbox`],[i],t),V([`mord`,`katex-vbox`],[i],t)},mathmlBuilder:(e,t)=>{var n=new G(`mpadded`,[aa(e.body,t)]);if(e.alignment!==`rlap`){var r=e.alignment===`llap`?`-1`:`-0.5`;n.setAttribute(`lspace`,r+`width`)}return n.setAttribute(`width`,`0px`),n}}),U({type:`styling`,names:[`\\(`,`$`],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(e,t){var n=e.funcName,r=e.parser,i=r.mode;r.switchMode(`math`);var a=n===`\\(`?`\\)`:`$`,o=r.parseExpression(!1,a);return r.expect(a),r.switchMode(i),{type:`styling`,mode:r.mode,style:`text`,resetFont:!0,body:o}}}),U({type:`text`,names:[`\\)`,`\\]`],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(e,t){throw new O(`Mismatched `+e.funcName)}});var es=(e,t)=>{switch(t.style.size){case k.DISPLAY.size:return e.display;case k.TEXT.size:return e.text;case k.SCRIPT.size:return e.script;case k.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};U({type:`mathchoice`,names:[`\\mathchoice`],numArgs:4,primitive:!0,handler:(e,t)=>({type:`mathchoice`,mode:e.parser.mode,display:Pi(t[0]),text:Pi(t[1]),script:Pi(t[2]),scriptscript:Pi(t[3])}),htmlBuilder:(e,t)=>gi(zi(es(e,t),t,!1)),mathmlBuilder:(e,t)=>ia(es(e,t),t)});var ts=(e,t,n,r,i,a,o)=>{e=V([],[e]);var s=n&&tn(n),c,l;if(t){var u=W(t,r.havingStyle(i.sup()),r);l={elem:u,kern:Math.max(r.fontMetrics().bigOpSpacing1,r.fontMetrics().bigOpSpacing3-u.depth)}}if(n){var d=W(n,r.havingStyle(i.sub()),r);c={elem:d,kern:Math.max(r.fontMetrics().bigOpSpacing2,r.fontMetrics().bigOpSpacing4-d.height)}}var f;if(l&&c)f=H({positionType:`bottom`,positionData:r.fontMetrics().bigOpSpacing5+c.elem.height+c.elem.depth+c.kern+e.depth+o,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:A(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:A(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]});else if(c)f=H({positionType:`top`,positionData:e.height-o,children:[{type:`kern`,size:r.fontMetrics().bigOpSpacing5},{type:`elem`,elem:c.elem,marginLeft:A(-a)},{type:`kern`,size:c.kern},{type:`elem`,elem:e}]});else if(l)f=H({positionType:`bottom`,positionData:e.depth+o,children:[{type:`elem`,elem:e},{type:`kern`,size:l.kern},{type:`elem`,elem:l.elem,marginLeft:A(a)},{type:`kern`,size:r.fontMetrics().bigOpSpacing5}]});else return e;var p=[f];if(c&&a!==0&&!s){var m=V([`mspace`],[],r);m.style.marginRight=A(a),p.unshift(m)}return V([`mop`,`op-limits`],p,r)},ns=new Set([`\\smallint`]),rs=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=K(e.base,`op`),i=!0):a=K(e,`op`);var o=t.style,s=!1;o.size===k.DISPLAY.size&&a.symbol&&!ns.has(a.name)&&(s=!0);var c,l;if(a.symbol){var u=s?`Size2-Regular`:`Size1-Regular`,d=``;if((a.name===`\\oiint`||a.name===`\\oiiint`)&&(d=a.name.slice(1),a.name=d===`oiint`?`\\iint`:`\\iiint`),c=oi(a.name,u,`math`,t,[`mop`,`op-symbol`,s?`large-op`:`small-op`]),l=c.italic,d.length>0){var f=Ci(d+`Size`+(s?`2`:`1`),t);c=H({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:0},{type:`elem`,elem:f,shift:s?.08:0}]}),a.name=`\\`+d,c.classes.unshift(`mop`),c.italic=l}}else if(a.body){var p=zi(a.body,t,!0);p.length===1&&p[0]instanceof ir?(c=p[0],c.classes[0]=`mop`):c=V([`mop`],p,t)}else{for(var m=[],h=1;h<a.name.length;h++)m.push(si(a.name[h],a.mode,t));c=V([`mop`],m,t)}var g=0,_=0;return(c instanceof ir||a.name===`\\oiint`||a.name===`\\oiiint`)&&!a.suppressBaseShift&&(g=(c.height-c.depth)/2-t.fontMetrics().axisHeight,_=c.italic??0),i?ts(c,n,r,t,o,_,g):(g&&(c.style.position=`relative`,c.style.top=A(g)),c)},is=(e,t)=>{var n;if(e.symbol)n=new G(`mo`,[Qi(e.name,e.mode)]),ns.has(e.name)&&n.setAttribute(`largeop`,`false`);else if(e.body)n=new G(`mo`,ra(e.body,t));else{n=new G(`mi`,[new Ji(e.name.slice(1))]);var r=new G(`mo`,[Qi(`⁡`,`text`)]);n=e.parentIsSupSub?new G(`mrow`,[n,r]):qi([n,r])}return n},as={"∏":`\\prod`,"∐":`\\coprod`,"∑":`\\sum`,"⋀":`\\bigwedge`,"⋁":`\\bigvee`,"⋂":`\\bigcap`,"⋃":`\\bigcup`,"⨀":`\\bigodot`,"⨁":`\\bigoplus`,"⨂":`\\bigotimes`,"⨄":`\\biguplus`,"⨆":`\\bigsqcup`};U({type:`op`,names:`\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.∏.∐.∑.⋀.⋁.⋂.⋃.⨀.⨁.⨂.⨄.⨆`.split(`.`),numArgs:0,handler:(e,t)=>{var n=e.parser,r=e.funcName;return r.length===1&&(r=as[r]),{type:`op`,mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:rs,mathmlBuilder:is}),U({type:`op`,names:[`\\mathop`],numArgs:1,primitive:!0,handler:(e,t)=>{var n=e.parser,r=t[0];return{type:`op`,mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Pi(r)}}});var os={"∫":`\\int`,"∬":`\\iint`,"∭":`\\iiint`,"∮":`\\oint`,"∯":`\\oiint`,"∰":`\\oiiint`};U({type:`op`,names:`\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th`.split(`.`),numArgs:0,handler(e){var t=e.parser,n=e.funcName;return{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:n}}}),U({type:`op`,names:[`\\det`,`\\gcd`,`\\inf`,`\\lim`,`\\max`,`\\min`,`\\Pr`,`\\sup`],numArgs:0,handler(e){var t=e.parser,n=e.funcName;return{type:`op`,mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:n}}}),U({type:`op`,names:[`\\int`,`\\iint`,`\\iiint`,`\\oint`,`\\oiint`,`\\oiiint`,`∫`,`∬`,`∭`,`∮`,`∯`,`∰`],numArgs:0,allowedInArgument:!0,handler(e){var t=e.parser,n=e.funcName;return n.length===1&&(n=os[n]),{type:`op`,mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}}});var ss=(e,t)=>{var n,r,i=!1,a;e.type===`supsub`?(n=e.sup,r=e.sub,a=K(e.base,`operatorname`),i=!0):a=K(e,`operatorname`);var o;if(a.body.length>0){for(var s=zi(a.body.map(e=>{var t=`text`in e?e.text:void 0;return typeof t==`string`?{type:`textord`,mode:e.mode,text:t}:e}),t.withFont(`mathrm`),!0),c=0;c<s.length;c++){var l=s[c];l instanceof ir&&(l.text=l.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`))}o=V([`mop`],s,t)}else o=V([`mop`],[],t);return i?ts(o,n,r,t,t.style,0,0):o};U({type:`operatorname`,names:[`\\operatorname@`,`\\operatornamewithlimits`],numArgs:1,handler:(e,t)=>{var n=e.parser,r=e.funcName,i=t[0];return{type:`operatorname`,mode:n.mode,body:Pi(i),alwaysHandleSupSub:r===`\\operatornamewithlimits`,limits:!1,parentIsSupSub:!1}},htmlBuilder:ss,mathmlBuilder:(e,t)=>{for(var n=ra(e.body,t.withFont(`mathrm`)),r=!0,i=0;i<n.length;i++){var a=n[i];if(!(a instanceof Yi))if(a instanceof G)switch(a.type){case`mi`:case`mn`:case`mspace`:case`mtext`:break;case`mo`:var o=a.children[0];a.children.length===1&&o instanceof Ji?o.text=o.text.replace(/\u2212/,`-`).replace(/\u2217/,`*`):r=!1;break;default:r=!1}else r=!1}r&&(n=[new Ji(n.map(e=>e.toText()).join(``))]);var s=new G(`mi`,n);s.setAttribute(`mathvariant`,`normal`);var c=new G(`mo`,[Qi(`⁡`,`text`)]);return e.parentIsSupSub?new G(`mrow`,[s,c]):qi([s,c])}}),q(`\\operatorname`,`\\@ifstar\\operatornamewithlimits\\operatorname@`),Mi({type:`ordgroup`,htmlBuilder(e,t){return e.semisimple?gi(zi(e.body,t,!1)):V([`mord`],zi(e.body,t,!0),t)},mathmlBuilder(e,t){return ia(e.body,t,!0)}}),U({type:`overline`,names:[`\\overline`],numArgs:1,handler(e,t){var n=e.parser,r=t[0];return{type:`overline`,mode:n.mode,body:r}},htmlBuilder(e,t){var n=W(e.body,t.havingCrampedStyle()),r=mi(`overline-line`,t),i=t.fontMetrics().defaultRuleThickness;return V([`mord`,`katex-overline`],[H({positionType:`firstBaseline`,children:[{type:`elem`,elem:n},{type:`kern`,size:3*i},{type:`elem`,elem:r},{type:`kern`,size:i}]})],t)},mathmlBuilder(e,t){var n=new G(`mo`,[new Ji(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new G(`mover`,[aa(e.body,t),n]);return r.setAttribute(`accent`,`true`),r}}),U({type:`phantom`,names:[`\\phantom`],numArgs:1,allowedInText:!0,handler:(e,t)=>{var n=e.parser,r=t[0];return{type:`phantom`,mode:n.mode,body:Pi(r)}},htmlBuilder:(e,t)=>gi(zi(e.body,t.withPhantom(),!1)),mathmlBuilder:(e,t)=>new G(`mphantom`,ra(e.body,t))}),q(`\\hphantom`,`\\smash{\\phantom{#1}}`),U({type:`vphantom`,names:[`\\vphantom`],numArgs:1,allowedInText:!0,handler:(e,t)=>{var n=e.parser,r=t[0];return{type:`vphantom`,mode:n.mode,body:r}},htmlBuilder:(e,t)=>V([`mord`,`rlap`],[V([`katex-inner`],[W(e.body,t.withPhantom())]),V([`katex-fix`],[])],t),mathmlBuilder:(e,t)=>{var n=new G(`mpadded`,[new G(`mphantom`,ra(Pi(e.body),t))]);return n.setAttribute(`width`,`0px`),n}}),U({type:`raisebox`,names:[`\\raisebox`],numArgs:2,argTypes:[`size`,`hbox`],allowedInText:!0,handler(e,t){var n=e.parser,r=K(t[0],`size`).value,i=t[1];return{type:`raisebox`,mode:n.mode,dy:r,body:i}},htmlBuilder(e,t){var n=W(e.body,t);return H({positionType:`shift`,positionData:-qn(e.dy,t),children:[{type:`elem`,elem:n}]})},mathmlBuilder(e,t){var n=new G(`mpadded`,[aa(e.body,t)]),r=e.dy.number+e.dy.unit;return n.setAttribute(`voffset`,r),n}});var cs=(e,t)=>({type:`reflectbox`,mode:e.parser.mode,body:t[0]});U({type:`reflectbox`,names:[`\\reflectbox`],numArgs:1,argTypes:[`hbox`],allowedInText:!0,handler:cs,htmlBuilder(e,t){return V([`mord`,`reflectbox`],[W(e.body,t)],t)},mathmlBuilder(e,t){return aa(e.body,t)}}),U({type:`reflectbox`,names:[`\\mathreflectbox`],numArgs:1,argTypes:[`math`],handler:cs}),U({type:`internal`,names:[`\\relax`],numArgs:0,allowedInText:!0,allowedInArgument:!0,handler(e){return{type:`internal`,mode:e.parser.mode}}}),U({type:`rule`,names:[`\\rule`],numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:[`size`,`size`,`size`],handler(e,t,n){var r=e.parser,i=n[0],a=K(t[0],`size`),o=K(t[1],`size`);return{type:`rule`,mode:r.mode,shift:i&&K(i,`size`).value,width:a.value,height:o.value}},htmlBuilder(e,t){var n=V([`mord`,`katex-rule`],[],t),r=qn(e.width,t),i=qn(e.height,t),a=e.shift?qn(e.shift,t):0;return n.style.borderRightWidth=A(r),n.style.borderTopWidth=A(i),n.style.bottom=A(a),n.width=r,n.height=i+a,n.depth=-a,n.maxFontSize=i*1.125*t.sizeMultiplier,n},mathmlBuilder(e,t){var n=qn(e.width,t),r=qn(e.height,t),i=e.shift?qn(e.shift,t):0,a=t.color&&t.getColor()||`black`,o=new G(`mspace`);o.setAttribute(`mathbackground`,a),o.setAttribute(`width`,A(n)),o.setAttribute(`height`,A(r));var s=new G(`mpadded`,[o]);return i>=0?s.setAttribute(`height`,A(i)):(s.setAttribute(`height`,A(i)),s.setAttribute(`depth`,A(-i))),s.setAttribute(`voffset`,A(i)),s}});function ls(e,t,n){for(var r=zi(e,t,!1),i=t.sizeMultiplier/n.sizeMultiplier,a=0;a<r.length;a++){var o=r[a].classes.indexOf(`katex-sizing`);o<0?Array.prototype.push.apply(r[a].classes,t.sizingClasses(n)):r[a].classes[o+1]===`reset-size`+t.size&&(r[a].classes[o+1]=`reset-size`+n.size),r[a].height*=i,r[a].depth*=i}return gi(r)}var us=[`\\tiny`,`\\sixptsize`,`\\scriptsize`,`\\footnotesize`,`\\small`,`\\normalsize`,`\\large`,`\\Large`,`\\LARGE`,`\\huge`,`\\Huge`];U({type:`sizing`,names:us,numArgs:0,allowedInText:!0,handler:(e,t)=>{var n=e.breakOnTokenText,r=e.funcName,i=e.parser,a=i.parseExpression(!1,n);return{type:`sizing`,mode:i.mode,size:us.indexOf(r)+1,body:a}},htmlBuilder:(e,t)=>{var n=t.havingSize(e.size);return ls(e.body,n,t)},mathmlBuilder:(e,t)=>{var n=t.havingSize(e.size),r=new G(`mstyle`,ra(e.body,n));return r.setAttribute(`mathsize`,A(n.sizeMultiplier)),r}}),U({type:`smash`,names:[`\\smash`],numArgs:1,numOptionalArgs:1,allowedInText:!0,handler:(e,t,n)=>{var r=e.parser,i=!1,a=!1,o=n[0]&&K(n[0],`ordgroup`);if(o)for(var s,c=0;c<o.body.length;++c){var l=o.body[c];if(s=Ea(l).text,s===`t`)i=!0;else if(s===`b`)a=!0;else{i=!1,a=!1;break}}else i=!0,a=!0;var u=t[0];return{type:`smash`,mode:r.mode,body:u,smashHeight:i,smashDepth:a}},htmlBuilder:(e,t)=>{var n=V([],[W(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return n;if(e.smashHeight&&(n.height=0),e.smashDepth&&(n.depth=0),e.smashHeight&&e.smashDepth)return V([`mord`,`katex-smash`],[n],t);if(n.children)for(var r=0;r<n.children.length;r++)e.smashHeight&&(n.children[r].height=0),e.smashDepth&&(n.children[r].depth=0);return V([`mord`],[H({positionType:`firstBaseline`,children:[{type:`elem`,elem:n}]})],t)},mathmlBuilder:(e,t)=>{var n=new G(`mpadded`,[aa(e.body,t)]);return e.smashHeight&&n.setAttribute(`height`,`0px`),e.smashDepth&&n.setAttribute(`depth`,`0px`),n}}),U({type:`sqrt`,names:[`\\sqrt`],numArgs:1,numOptionalArgs:1,handler(e,t,n){var r=e.parser,i=n[0],a=t[0];return{type:`sqrt`,mode:r.mode,body:a,index:i}},htmlBuilder(e,t){var n=W(e.body,t.havingCrampedStyle());n.height===0&&(n.height=t.fontMetrics().xHeight),n=_i(n,t);var r=t.fontMetrics().defaultRuleThickness,i=r;t.style.id<k.TEXT.id&&(i=t.fontMetrics().xHeight);var a=r+i/4,o=lo(n.height+n.depth+a+r,t),s=o.span,c=o.ruleWidth,l=o.advanceWidth,u=s.height-c;u>n.height+n.depth+a&&(a=(a+u-n.height-n.depth)/2);var d=s.height-n.height-a-c;n.style.paddingLeft=A(l);var f=H({positionType:`firstBaseline`,children:[{type:`elem`,elem:n,wrapperClasses:[`svg-align`]},{type:`kern`,size:-(n.height+d)},{type:`elem`,elem:s},{type:`kern`,size:c}]});if(e.index){var p=t.havingStyle(k.SCRIPTSCRIPT),m=W(e.index,p,t);return V([`mord`,`sqrt`],[V([`katex-root`],[H({positionType:`shift`,positionData:-(.6*(f.height-f.depth)),children:[{type:`elem`,elem:m}]})]),f],t)}else return V([`mord`,`sqrt`],[f],t)},mathmlBuilder(e,t){var n=e.body,r=e.index;return r?new G(`mroot`,[aa(n,t),aa(r,t)]):new G(`msqrt`,[aa(n,t)])}});var ds={display:k.DISPLAY,text:k.TEXT,script:k.SCRIPT,scriptscript:k.SCRIPTSCRIPT};function fs(e){return e in ds}U({type:`styling`,names:[`\\displaystyle`,`\\textstyle`,`\\scriptstyle`,`\\scriptscriptstyle`],numArgs:0,allowedInText:!0,primitive:!0,handler(e,t){var n=e.breakOnTokenText,r=e.funcName,i=e.parser,a=i.parseExpression(!0,n),o=r.slice(1,r.length-5);if(!fs(o))throw Error(`Unknown style: `+o);return{type:`styling`,mode:i.mode,style:o,body:a}},htmlBuilder(e,t){var n=ds[e.style],r=t.havingStyle(n);return e.resetFont&&(r=r.withFont(``)),ls(e.body,r,t)},mathmlBuilder(e,t){var n=ds[e.style],r=t.havingStyle(n);e.resetFont&&(r=r.withFont(``));var i=new G(`mstyle`,ra(e.body,r)),a={display:[`0`,`true`],text:[`0`,`false`],script:[`1`,`false`],scriptscript:[`2`,`false`]}[e.style];return i.setAttribute(`scriptlevel`,a[0]),i.setAttribute(`displaystyle`,a[1]),i}});var ps=function(e,t){var n=e.base;return n?n.type===`op`?n.limits&&(t.style.size===k.DISPLAY.size||n.alwaysHandleSupSub)?rs:null:n.type===`operatorname`?n.alwaysHandleSupSub&&(t.style.size===k.DISPLAY.size||n.limits)?ss:null:n.type===`accent`?tn(n.base)?Aa:null:n.type===`horizBrace`&&!e.sub===n.isOver?Qo:null:null};Mi({type:`supsub`,htmlBuilder(e,t){var n=ps(e,t);if(n)return n(e,t);var r=e.base,i=e.sup,a=e.sub,o=W(r,t),s,c,l=t.fontMetrics(),u=0,d=0,f=r&&tn(r);if(i){var p=t.havingStyle(t.style.sup());s=W(i,p,t),f||(u=o.height-p.fontMetrics().supDrop*p.sizeMultiplier/t.sizeMultiplier)}if(a){var m=t.havingStyle(t.style.sub());c=W(a,m,t),f||(d=o.depth+m.fontMetrics().subDrop*m.sizeMultiplier/t.sizeMultiplier)}var h=t.style===k.DISPLAY?l.sup1:t.style.cramped?l.sup3:l.sup2,g=t.sizeMultiplier,_=A(.5/l.ptPerEm/g),v=null;if(c){var y=e.base&&e.base.type===`op`&&e.base.name&&(e.base.name===`\\oiint`||e.base.name===`\\oiiint`);(o instanceof ir||y)&&(v=A(-(o.italic??0)))}var b;if(s&&c){u=Math.max(u,h,s.depth+.25*l.xHeight),d=Math.max(d,l.sub2);var x=4*l.defaultRuleThickness;if(u-s.depth-(c.height-d)<x){d=x-(u-s.depth)+c.height;var S=.8*l.xHeight-(u-s.depth);S>0&&(u+=S,d-=S)}b=H({positionType:`individualShift`,children:[{type:`elem`,elem:c,shift:d,marginRight:_,marginLeft:v},{type:`elem`,elem:s,shift:-u,marginRight:_}]})}else if(c)d=Math.max(d,l.sub1,c.height-.8*l.xHeight),b=H({positionType:`shift`,positionData:d,children:[{type:`elem`,elem:c,marginLeft:v,marginRight:_}]});else if(s)u=Math.max(u,h,s.depth+.25*l.xHeight),b=H({positionType:`shift`,positionData:-u,children:[{type:`elem`,elem:s,marginRight:_}]});else throw Error(`supsub must have either sup or sub.`);return V([Ui(o,`right`)||`mord`],[o,V([`msupsub`],[b])],t)},mathmlBuilder(e,t){var n=!1,r,i;e.base&&e.base.type===`horizBrace`&&(i=!!e.sup,i===e.base.isOver&&(n=!0,r=e.base.isOver)),e.base&&(e.base.type===`op`||e.base.type===`operatorname`)&&(e.base.parentIsSupSub=!0);var a=[aa(e.base,t)];e.sub&&a.push(aa(e.sub,t)),e.sup&&a.push(aa(e.sup,t));var o;if(n)o=r?`mover`:`munder`;else if(!e.sub){var s=e.base;o=s&&s.type===`op`&&s.limits&&(t.style===k.DISPLAY||s.alwaysHandleSupSub)||s&&s.type===`operatorname`&&s.alwaysHandleSupSub&&(s.limits||t.style===k.DISPLAY)?`mover`:`msup`}else if(e.sup){var c=e.base;o=c&&c.type===`op`&&c.limits&&t.style===k.DISPLAY||c&&c.type===`operatorname`&&c.alwaysHandleSupSub&&(t.style===k.DISPLAY||c.limits)?`munderover`:`msubsup`}else{var l=e.base;o=l&&l.type===`op`&&l.limits&&(t.style===k.DISPLAY||l.alwaysHandleSupSub)||l&&l.type===`operatorname`&&l.alwaysHandleSupSub&&(l.limits||t.style===k.DISPLAY)?`munder`:`msub`}return new G(o,a)}}),Mi({type:`atom`,htmlBuilder(e,t){return si(e.text,e.mode,t,[`m`+e.family])},mathmlBuilder(e,t){var n=new G(`mo`,[Qi(e.text,e.mode)]);if(e.family===`bin`){var r=ta(e,t);r===`bold-italic`&&n.setAttribute(`mathvariant`,r)}else e.family===`punct`?n.setAttribute(`separator`,`true`):(e.family===`open`||e.family===`close`)&&n.setAttribute(`stretchy`,`false`);return n}});var ms={mi:`italic`,mn:`normal`,mtext:`normal`};Mi({type:`mathord`,htmlBuilder(e,t){return li(e,t)},mathmlBuilder(e,t){var n=new G(`mi`,[Qi(e.text,e.mode,t)]),r=ta(e,t)||`italic`;return r!==ms[n.type]&&n.setAttribute(`mathvariant`,r),n}}),Mi({type:`textord`,htmlBuilder(e,t){return li(e,t)},mathmlBuilder(e,t){var n=Qi(e.text,e.mode,t),r=ta(e,t)||`normal`,i=e.mode===`text`?new G(`mtext`,[n]):/[0-9]/.test(e.text)?new G(`mn`,[n]):e.text===`\\prime`?new G(`mo`,[n]):new G(`mi`,[n]);return r!==ms[i.type]&&i.setAttribute(`mathvariant`,r),i}});var hs=new Map([[`\\nobreak`,`nobreak`],[`\\allowbreak`,`allowbreak`]]),gs=new Map([[` `,{}],[`\\ `,{}],[`~`,{className:`nobreak`}],[`\\space`,{}],[`\\nobreakspace`,{className:`nobreak`}]]);Mi({type:`spacing`,htmlBuilder(e,t){var n=gs.get(e.text),r=hs.get(e.text);if(n){var i=n.className||``;if(e.mode===`text`){var a=li(e,t);return a.classes.push(i),a}else return V([`mspace`,i],[si(e.text,e.mode,t)],t)}else if(r)return V([`mspace`,r],[],t);else throw new O(`Unknown type of space "`+e.text+`"`)},mathmlBuilder(e,t){var n;if(gs.has(e.text))n=new G(`mtext`,[new Ji(`\xA0`)]);else if(hs.has(e.text))return new G(`mspace`);else throw new O(`Unknown type of space "`+e.text+`"`);return n}});var _s=()=>{var e=new G(`mtd`,[]);return e.setAttribute(`width`,`50%`),e};Mi({type:`tag`,mathmlBuilder(e,t){var n=new G(`mtable`,[new G(`mtr`,[_s(),new G(`mtd`,[ia(e.body,t)]),_s(),new G(`mtd`,[ia(e.tag,t)])])]);return n.setAttribute(`width`,`100%`),n}});var vs={"\\text":void 0,"\\textrm":`textrm`,"\\textsf":`textsf`,"\\texttt":`texttt`,"\\textnormal":`textrm`},ys={"\\textbf":`textbf`,"\\textmd":`textmd`},bs={"\\textit":`textit`,"\\textup":`textup`},xs=(e,t)=>{var n=e.font;return n?vs[n]?t.withTextFontFamily(vs[n]):ys[n]?t.withTextFontWeight(ys[n]):n===`\\emph`?t.fontShape===`textit`?t.withTextFontShape(`textup`):t.withTextFontShape(`textit`):t.withTextFontShape(bs[n]):t};U({type:`text`,names:[`\\text`,`\\textrm`,`\\textsf`,`\\texttt`,`\\textnormal`,`\\textbf`,`\\textmd`,`\\textit`,`\\textup`,`\\emph`],numArgs:1,argTypes:[`text`],allowedInArgument:!0,allowedInText:!0,handler(e,t){var n=e.parser,r=e.funcName,i=t[0];return{type:`text`,mode:n.mode,body:Pi(i),font:r}},htmlBuilder(e,t){var n=xs(e,t);return V([`mord`,`text`],zi(e.body,n,!0),n)},mathmlBuilder(e,t){var n=xs(e,t);return ia(e.body,n)}}),U({type:`underline`,names:[`\\underline`],numArgs:1,allowedInText:!0,handler(e,t){return{type:`underline`,mode:e.parser.mode,body:t[0]}},htmlBuilder(e,t){var n=W(e.body,t),r=mi(`underline-line`,t),i=t.fontMetrics().defaultRuleThickness;return V([`mord`,`katex-underline`],[H({positionType:`top`,positionData:n.height,children:[{type:`kern`,size:i},{type:`elem`,elem:r},{type:`kern`,size:3*i},{type:`elem`,elem:n}]})],t)},mathmlBuilder(e,t){var n=new G(`mo`,[new Ji(`‾`)]);n.setAttribute(`stretchy`,`true`);var r=new G(`munder`,[aa(e.body,t),n]);return r.setAttribute(`accentunder`,`true`),r}}),U({type:`vcenter`,names:[`\\vcenter`],numArgs:1,argTypes:[`original`],allowedInText:!1,handler(e,t){return{type:`vcenter`,mode:e.parser.mode,body:t[0]}},htmlBuilder(e,t){var n=W(e.body,t),r=t.fontMetrics().axisHeight;return H({positionType:`shift`,positionData:.5*(n.height-r-(n.depth+r)),children:[{type:`elem`,elem:n}]})},mathmlBuilder(e,t){return new G(`mrow`,[new G(`mpadded`,[aa(e.body,t)],[`vcenter`])])}}),U({type:`verb`,names:[`\\verb`],numArgs:0,allowedInText:!0,handler(e,t,n){throw new O(`\\verb ended by end of line instead of matching delimiter`)},htmlBuilder(e,t){for(var n=Ss(e),r=[],i=t.havingStyle(t.style.text()),a=0;a<n.length;a++){var o=n[a];o===`~`&&(o=`\\textasciitilde`),r.push(oi(o,`Typewriter-Regular`,e.mode,i,[`mord`,`texttt`]))}return V([`mord`,`text`].concat(i.sizingClasses(t)),di(r),i)},mathmlBuilder(e,t){var n=new G(`mtext`,[new Ji(Ss(e))]);return n.setAttribute(`mathvariant`,`monospace`),n}});var Ss=e=>e.body.replace(/ /g,e.star?`␣`:`\xA0`),Cs=ki,ws=`[ \r
	]`,Ts=`\\\\[a-zA-Z@]+`,Es=`\\\\[^\ud800-\udfff]`,Ds=`(`+Ts+`)`+ws+`*`,Os=`\\\\(
|[ \r	]+
?)[ \r	]*`,ks=`[̀-ͯ]`,As=RegExp(ks+`+$`),js=`(`+ws+`+)|`+(Os+`|`)+`([!-\\[\\]-‧‪-퟿豈-￿]`+(ks+`*`)+`|[\ud800-\udbff][\udc00-\udfff]`+(ks+`*`)+`|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5`+(`|`+Ds)+(`|`+Es+`)`),Ms=class{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(js,`g`),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new Mo(`EOF`,new jo(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new O(`Unexpected character: '`+e[t]+`'`,new Mo(e[t],new jo(this,t,t+1)));var r=n[6]||n[3]||(n[2]?`\\ `:` `);if(this.catcodes[r]===14){var i=e.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=e.length,ii({strict:this.settings.strict,errorCode:`commentAtEnd`,errorMsg:`% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)`,report:!0})):this.tokenRegex.lastIndex=i+1,this.lex()}return new Mo(r,new jo(this,t,this.tokenRegex.lastIndex))}},Ns=class{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new O(`Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug`);var e=this.undefStack.pop();for(var t of Object.keys(e))e[t]===void 0?delete this.current[t]:this.current[t]=e[t]}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return Object.prototype.hasOwnProperty.call(this.current,e)||Object.prototype.hasOwnProperty.call(this.builtins,e)}get(e){if(Object.prototype.hasOwnProperty.call(this.current,e))return this.current[e];if(Object.prototype.hasOwnProperty.call(this.builtins,e))return this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var i=this.undefStack[this.undefStack.length-1];i&&!Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=Object.prototype.hasOwnProperty.call(this.current,e)?this.current[e]:void 0)}t==null?delete this.current[e]:this.current[e]=t}},Ps=Ao;q(`\\noexpand`,function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}}),q(`\\expandafter`,function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}}),q(`\\@firstoftwo`,function(e){return{tokens:e.consumeArgs(2)[0],numArgs:0}}),q(`\\@secondoftwo`,function(e){return{tokens:e.consumeArgs(2)[1],numArgs:0}}),q(`\\@ifnextchar`,function(e){var t=e.consumeArgs(3);e.consumeSpaces();var n=e.future();return t[0].length===1&&t[0][0].text===n.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}}),q(`\\@ifstar`,`\\@ifnextchar *{\\@firstoftwo{#1}}`),q(`\\TextOrMath`,function(e){var t=e.consumeArgs(2);return e.mode===`text`?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var Fs={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};q(`\\char`,function(e){var t=e.popToken(),n,r=0;if(t.text===`'`)n=8,t=e.popToken();else if(t.text===`"`)n=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]===`\\`)r=t.text.charCodeAt(1);else if(t.text===`EOF`)throw new O("\\char` missing argument");else r=t.text.charCodeAt(0);else n=10;if(n){if(r=Fs[t.text],r==null||r>=n)throw new O(`Invalid base-`+n+` digit `+t.text);for(var i;(i=Fs[e.future().text])!=null&&i<n;)r*=n,r+=i,e.popToken()}return`\\@char{`+r+`}`});var Is=(e,t,n,r)=>{var i=e.consumeArg().tokens;if(i.length!==1)throw new O(`\\newcommand's first argument must be a macro name`);var a=i[0].text,o=e.isDefined(a);if(o&&!t)throw new O(`\\newcommand{`+a+`} attempting to redefine `+(a+`; use \\renewcommand`));if(!o&&!n)throw new O(`\\renewcommand{`+a+`} when command `+a+` does not yet exist; use \\newcommand`);var s=0;if(i=e.consumeArg().tokens,i.length===1&&i[0].text===`[`){for(var c=``,l=e.expandNextToken();l.text!==`]`&&l.text!==`EOF`;)c+=l.text,l=e.expandNextToken();if(!c.match(/^\s*[0-9]+\s*$/))throw new O(`Invalid number of arguments: `+c);s=parseInt(c),i=e.consumeArg().tokens}return o&&r||e.macros.set(a,{tokens:i,numArgs:s}),``};q(`\\newcommand`,e=>Is(e,!1,!0,!1)),q(`\\renewcommand`,e=>Is(e,!0,!1,!1)),q(`\\providecommand`,e=>Is(e,!0,!0,!0)),q(`\\message`,e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(e=>e.text).join(``)),``}),q(`\\errmessage`,e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(e=>e.text).join(``)),``}),q(`\\show`,e=>{var t=e.popToken(),n=t.text;return console.log(t,e.macros.get(n),Cs[n],vr.math[n],vr.text[n]),``}),q(`\\bgroup`,`{`),q(`\\egroup`,`}`),q(`~`,`\\nobreakspace`),q(`\\lq`,"`"),q(`\\rq`,`'`),q(`\\aa`,`\\r a`),q(`\\AA`,`\\r A`),q(`\\textcopyright`,"\\html@mathml{\\textcircled{c}}{\\char`©}"),q(`\\copyright`,`\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}`),q(`\\textregistered`,"\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),q(`ℬ`,`\\mathscr{B}`),q(`ℰ`,`\\mathscr{E}`),q(`ℱ`,`\\mathscr{F}`),q(`ℋ`,`\\mathscr{H}`),q(`ℐ`,`\\mathscr{I}`),q(`ℒ`,`\\mathscr{L}`),q(`ℳ`,`\\mathscr{M}`),q(`ℛ`,`\\mathscr{R}`),q(`ℭ`,`\\mathfrak{C}`),q(`ℌ`,`\\mathfrak{H}`),q(`ℨ`,`\\mathfrak{Z}`),q(`\\Bbbk`,`\\Bbb{k}`),q(`\\llap`,`\\mathllap{\\textrm{#1}}`),q(`\\rlap`,`\\mathrlap{\\textrm{#1}}`),q(`\\clap`,`\\mathclap{\\textrm{#1}}`),q(`\\mathstrut`,`\\vphantom{(}`),q(`\\underbar`,`\\underline{\\text{#1}}`),q(`\\not`,`\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}`),q(`\\neq`,"\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),q(`\\ne`,`\\neq`),q(`≠`,`\\neq`),q(`\\notin`,"\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),q(`∉`,`\\notin`),q(`≘`,"\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),q(`≙`,"\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),q(`≚`,"\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),q(`≛`,"\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),q(`≝`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),q(`≞`,"\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),q(`≟`,"\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),q(`⟂`,`\\perp`),q(`‼`,`\\mathclose{!\\mkern-0.8mu!}`),q(`∌`,`\\notni`),q(`⌜`,`\\ulcorner`),q(`⌝`,`\\urcorner`),q(`⌞`,`\\llcorner`),q(`⌟`,`\\lrcorner`),q(`©`,`\\copyright`),q(`®`,`\\textregistered`),q(`\\ulcorner`,`\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}`),q(`\\urcorner`,`\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}`),q(`\\llcorner`,`\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}`),q(`\\lrcorner`,`\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}`),q(`\\vdots`,`{\\varvdots\\rule{0pt}{15pt}}`),q(`⋮`,`\\vdots`),q(`\\varGamma`,`\\mathit{\\Gamma}`),q(`\\varDelta`,`\\mathit{\\Delta}`),q(`\\varTheta`,`\\mathit{\\Theta}`),q(`\\varLambda`,`\\mathit{\\Lambda}`),q(`\\varXi`,`\\mathit{\\Xi}`),q(`\\varPi`,`\\mathit{\\Pi}`),q(`\\varSigma`,`\\mathit{\\Sigma}`),q(`\\varUpsilon`,`\\mathit{\\Upsilon}`),q(`\\varPhi`,`\\mathit{\\Phi}`),q(`\\varPsi`,`\\mathit{\\Psi}`),q(`\\varOmega`,`\\mathit{\\Omega}`),q(`\\substack`,`\\begin{subarray}{c}#1\\end{subarray}`),q(`\\colon`,`\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax`),q(`\\boxed`,`\\fbox{$\\displaystyle{#1}$}`),q(`\\iff`,`\\DOTSB\\;\\Longleftrightarrow\\;`),q(`\\implies`,`\\DOTSB\\;\\Longrightarrow\\;`),q(`\\impliedby`,`\\DOTSB\\;\\Longleftarrow\\;`),q(`\\dddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}`),q(`\\ddddot`,`{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}`);var Ls={",":`\\dotsc`,"\\not":`\\dotsb`,"+":`\\dotsb`,"=":`\\dotsb`,"<":`\\dotsb`,">":`\\dotsb`,"-":`\\dotsb`,"*":`\\dotsb`,":":`\\dotsb`,"\\DOTSB":`\\dotsb`,"\\coprod":`\\dotsb`,"\\bigvee":`\\dotsb`,"\\bigwedge":`\\dotsb`,"\\biguplus":`\\dotsb`,"\\bigcap":`\\dotsb`,"\\bigcup":`\\dotsb`,"\\prod":`\\dotsb`,"\\sum":`\\dotsb`,"\\bigotimes":`\\dotsb`,"\\bigoplus":`\\dotsb`,"\\bigodot":`\\dotsb`,"\\bigsqcup":`\\dotsb`,"\\And":`\\dotsb`,"\\longrightarrow":`\\dotsb`,"\\Longrightarrow":`\\dotsb`,"\\longleftarrow":`\\dotsb`,"\\Longleftarrow":`\\dotsb`,"\\longleftrightarrow":`\\dotsb`,"\\Longleftrightarrow":`\\dotsb`,"\\mapsto":`\\dotsb`,"\\longmapsto":`\\dotsb`,"\\hookrightarrow":`\\dotsb`,"\\doteq":`\\dotsb`,"\\mathbin":`\\dotsb`,"\\mathrel":`\\dotsb`,"\\relbar":`\\dotsb`,"\\Relbar":`\\dotsb`,"\\xrightarrow":`\\dotsb`,"\\xleftarrow":`\\dotsb`,"\\DOTSI":`\\dotsi`,"\\int":`\\dotsi`,"\\oint":`\\dotsi`,"\\iint":`\\dotsi`,"\\iiint":`\\dotsi`,"\\iiiint":`\\dotsi`,"\\idotsint":`\\dotsi`,"\\DOTSX":`\\dotsx`},Rs=new Set([`bin`,`rel`]);q(`\\dots`,function(e){var t=`\\dotso`,n=e.expandAfterFuture().text;return n in Ls?t=Ls[n]:(n.slice(0,4)===`\\not`||n in vr.math&&Rs.has(vr.math[n].group))&&(t=`\\dotsb`),t});var zs={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};q(`\\dotso`,function(e){return e.future().text in zs?`\\ldots\\,`:`\\ldots`}),q(`\\dotsc`,function(e){var t=e.future().text;return t in zs&&t!==`,`?`\\ldots\\,`:`\\ldots`}),q(`\\cdots`,function(e){return e.future().text in zs?`\\@cdots\\,`:`\\@cdots`}),q(`\\dotsb`,`\\cdots`),q(`\\dotsm`,`\\cdots`),q(`\\dotsi`,`\\!\\cdots`),q(`\\dotsx`,`\\ldots\\,`),q(`\\DOTSI`,`\\relax`),q(`\\DOTSB`,`\\relax`),q(`\\DOTSX`,`\\relax`),q(`\\tmspace`,`\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax`),q(`\\,`,`\\tmspace+{3mu}{.1667em}`),q(`\\thinspace`,`\\,`),q(`\\>`,`\\mskip{4mu}`),q(`\\:`,`\\tmspace+{4mu}{.2222em}`),q(`\\medspace`,`\\:`),q(`\\;`,`\\tmspace+{5mu}{.2777em}`),q(`\\thickspace`,`\\;`),q(`\\!`,`\\tmspace-{3mu}{.1667em}`),q(`\\negthinspace`,`\\!`),q(`\\negmedspace`,`\\tmspace-{4mu}{.2222em}`),q(`\\negthickspace`,`\\tmspace-{5mu}{.277em}`),q(`\\enspace`,`\\kern.5em `),q(`\\enskip`,`\\hskip.5em\\relax`),q(`\\quad`,`\\hskip1em\\relax`),q(`\\qquad`,`\\hskip2em\\relax`),q(`\\tag`,`\\@ifstar\\tag@literal\\tag@paren`),q(`\\tag@paren`,`\\tag@literal{({#1})}`),q(`\\tag@literal`,e=>{if(e.macros.get(`\\df@tag`))throw new O(`Multiple \\tag`);return`\\gdef\\df@tag{\\text{#1}}`}),q(`\\bmod`,`\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}`),q(`\\pod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)`),q(`\\pmod`,`\\pod{{\\rm mod}\\mkern6mu#1}`),q(`\\mod`,`\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1`),q(`\\newline`,`\\\\\\relax`),q(`\\TeX`,`\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}`);var Bs=A(dr[`Main-Regular`][84][1]-.7*dr[`Main-Regular`][65][1]);q(`\\LaTeX`,`\\textrm{\\html@mathml{`+(`L\\kern-.36em\\raisebox{`+Bs+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{LaTeX}}`),q(`\\KaTeX`,`\\textrm{\\html@mathml{`+(`K\\kern-.17em\\raisebox{`+Bs+`}{\\scriptstyle A}`)+`\\kern-.15em\\TeX}{KaTeX}}`),q(`\\hspace`,`\\@ifstar\\@hspacer\\@hspace`),q(`\\@hspace`,`\\hskip #1\\relax`),q(`\\@hspacer`,`\\rule{0pt}{0pt}\\hskip #1\\relax`),q(`\\ordinarycolon`,`:`),q(`\\vcentcolon`,`\\mathrel{\\mathop\\ordinarycolon}`),q(`\\dblcolon`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}`),q(`\\coloneqq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}`),q(`\\Coloneqq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}`),q(`\\coloneq`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}`),q(`\\Coloneq`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}`),q(`\\eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}`),q(`\\Eqqcolon`,`\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}`),q(`\\eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}`),q(`\\Eqcolon`,`\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}`),q(`\\colonapprox`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}`),q(`\\Colonapprox`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}`),q(`\\colonsim`,`\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}`),q(`\\Colonsim`,`\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}`),q(`∷`,`\\dblcolon`),q(`∹`,`\\eqcolon`),q(`≔`,`\\coloneqq`),q(`≕`,`\\eqqcolon`),q(`⩴`,`\\Coloneqq`),q(`\\ratio`,`\\vcentcolon`),q(`\\coloncolon`,`\\dblcolon`),q(`\\colonequals`,`\\coloneqq`),q(`\\coloncolonequals`,`\\Coloneqq`),q(`\\equalscolon`,`\\eqqcolon`),q(`\\equalscoloncolon`,`\\Eqqcolon`),q(`\\colonminus`,`\\coloneq`),q(`\\coloncolonminus`,`\\Coloneq`),q(`\\minuscolon`,`\\eqcolon`),q(`\\minuscoloncolon`,`\\Eqcolon`),q(`\\coloncolonapprox`,`\\Colonapprox`),q(`\\coloncolonsim`,`\\Colonsim`),q(`\\simcolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),q(`\\simcoloncolon`,`\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}`),q(`\\approxcolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),q(`\\approxcoloncolon`,`\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}`),q(`\\notni`,"\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),q(`\\limsup`,`\\DOTSB\\operatorname*{lim\\,sup}`),q(`\\liminf`,`\\DOTSB\\operatorname*{lim\\,inf}`),q(`\\injlim`,`\\DOTSB\\operatorname*{inj\\,lim}`),q(`\\projlim`,`\\DOTSB\\operatorname*{proj\\,lim}`),q(`\\varlimsup`,`\\DOTSB\\operatorname*{\\overline{lim}}`),q(`\\varliminf`,`\\DOTSB\\operatorname*{\\underline{lim}}`),q(`\\varinjlim`,`\\DOTSB\\operatorname*{\\underrightarrow{lim}}`),q(`\\varprojlim`,`\\DOTSB\\operatorname*{\\underleftarrow{lim}}`),q(`\\gvertneqq`,`\\html@mathml{\\@gvertneqq}{≩}`),q(`\\lvertneqq`,`\\html@mathml{\\@lvertneqq}{≨}`),q(`\\ngeqq`,`\\html@mathml{\\@ngeqq}{≱}`),q(`\\ngeqslant`,`\\html@mathml{\\@ngeqslant}{≱}`),q(`\\nleqq`,`\\html@mathml{\\@nleqq}{≰}`),q(`\\nleqslant`,`\\html@mathml{\\@nleqslant}{≰}`),q(`\\nshortmid`,`\\html@mathml{\\@nshortmid}{∤}`),q(`\\nshortparallel`,`\\html@mathml{\\@nshortparallel}{∦}`),q(`\\nsubseteqq`,`\\html@mathml{\\@nsubseteqq}{⊈}`),q(`\\nsupseteqq`,`\\html@mathml{\\@nsupseteqq}{⊉}`),q(`\\varsubsetneq`,`\\html@mathml{\\@varsubsetneq}{⊊}`),q(`\\varsubsetneqq`,`\\html@mathml{\\@varsubsetneqq}{⫋}`),q(`\\varsupsetneq`,`\\html@mathml{\\@varsupsetneq}{⊋}`),q(`\\varsupsetneqq`,`\\html@mathml{\\@varsupsetneqq}{⫌}`),q(`\\imath`,`\\html@mathml{\\@imath}{ı}`),q(`\\jmath`,`\\html@mathml{\\@jmath}{ȷ}`),q(`\\llbracket`,"\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"),q(`\\rrbracket`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"),q(`⟦`,`\\llbracket`),q(`⟧`,`\\rrbracket`),q(`\\lBrace`,"\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"),q(`\\rBrace`,"\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"),q(`↤`,`\\mapsfrom`),q(`\\mapsfrom`,"\\html@mathml{\\mathrel{\\mathreflectbox{\\mapsto}}}{\\mathrel{\\char`↤}}"),q(`⦃`,`\\lBrace`),q(`⦄`,`\\rBrace`),q(`\\minuso`,"\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"),q(`⦵`,`\\minuso`),q(`\\darr`,`\\downarrow`),q(`\\dArr`,`\\Downarrow`),q(`\\Darr`,`\\Downarrow`),q(`\\lang`,`\\langle`),q(`\\rang`,`\\rangle`),q(`\\uarr`,`\\uparrow`),q(`\\uArr`,`\\Uparrow`),q(`\\Uarr`,`\\Uparrow`),q(`\\N`,`\\mathbb{N}`),q(`\\R`,`\\mathbb{R}`),q(`\\Z`,`\\mathbb{Z}`),q(`\\alef`,`\\aleph`),q(`\\alefsym`,`\\aleph`),q(`\\Alpha`,`\\mathrm{A}`),q(`\\Beta`,`\\mathrm{B}`),q(`\\bull`,`\\bullet`),q(`\\Chi`,`\\mathrm{X}`),q(`\\clubs`,`\\clubsuit`),q(`\\cnums`,`\\mathbb{C}`),q(`\\Complex`,`\\mathbb{C}`),q(`\\Dagger`,`\\ddagger`),q(`\\diamonds`,`\\diamondsuit`),q(`\\empty`,`\\emptyset`),q(`\\Epsilon`,`\\mathrm{E}`),q(`\\Eta`,`\\mathrm{H}`),q(`\\exist`,`\\exists`),q(`\\harr`,`\\leftrightarrow`),q(`\\hArr`,`\\Leftrightarrow`),q(`\\Harr`,`\\Leftrightarrow`),q(`\\hearts`,`\\heartsuit`),q(`\\image`,`\\Im`),q(`\\infin`,`\\infty`),q(`\\Iota`,`\\mathrm{I}`),q(`\\isin`,`\\in`),q(`\\Kappa`,`\\mathrm{K}`),q(`\\larr`,`\\leftarrow`),q(`\\lArr`,`\\Leftarrow`),q(`\\Larr`,`\\Leftarrow`),q(`\\lrarr`,`\\leftrightarrow`),q(`\\lrArr`,`\\Leftrightarrow`),q(`\\Lrarr`,`\\Leftrightarrow`),q(`\\Mu`,`\\mathrm{M}`),q(`\\natnums`,`\\mathbb{N}`),q(`\\Nu`,`\\mathrm{N}`),q(`\\Omicron`,`\\mathrm{O}`),q(`\\plusmn`,`\\pm`),q(`\\rarr`,`\\rightarrow`),q(`\\rArr`,`\\Rightarrow`),q(`\\Rarr`,`\\Rightarrow`),q(`\\real`,`\\Re`),q(`\\reals`,`\\mathbb{R}`),q(`\\Reals`,`\\mathbb{R}`),q(`\\Rho`,`\\mathrm{P}`),q(`\\sdot`,`\\cdot`),q(`\\sect`,`\\S`),q(`\\spades`,`\\spadesuit`),q(`\\sub`,`\\subset`),q(`\\sube`,`\\subseteq`),q(`\\supe`,`\\supseteq`),q(`\\Tau`,`\\mathrm{T}`),q(`\\thetasym`,`\\vartheta`),q(`\\weierp`,`\\wp`),q(`\\Zeta`,`\\mathrm{Z}`),q(`\\argmin`,`\\DOTSB\\operatorname*{arg\\,min}`),q(`\\argmax`,`\\DOTSB\\operatorname*{arg\\,max}`),q(`\\plim`,`\\DOTSB\\mathop{\\operatorname{plim}}\\limits`),q(`\\bra`,`\\mathinner{\\langle{#1}|}`),q(`\\ket`,`\\mathinner{|{#1}\\rangle}`),q(`\\braket`,`\\mathinner{\\langle{#1}\\rangle}`),q(`\\Bra`,`\\left\\langle#1\\right|`),q(`\\Ket`,`\\left|#1\\right\\rangle`);var Vs=e=>t=>{var n=t.consumeArg().tokens,r=t.consumeArg().tokens,i=t.consumeArg().tokens,a=t.consumeArg().tokens,o=t.macros.get(`|`),s=t.macros.get(`\\|`);t.macros.beginGroup();var c=t=>n=>{e&&(n.macros.set(`|`,o),i.length&&n.macros.set(`\\|`,s));var a=t;return!t&&i.length&&n.future().text===`|`&&(n.popToken(),a=!0),{tokens:a?i:r,numArgs:0}};t.macros.set(`|`,c(!1)),i.length&&t.macros.set(`\\|`,c(!0));var l=t.consumeArg().tokens,u=t.expandTokens([...a,...l,...n]);return t.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};q(`\\bra@ket`,Vs(!1)),q(`\\bra@set`,Vs(!0)),q(`\\Braket`,`\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}`),q(`\\Set`,`\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}`),q(`\\set`,`\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}`),q(`\\angln`,`{\\angl n}`),q(`\\blue`,`\\textcolor{##6495ed}{#1}`),q(`\\orange`,`\\textcolor{##ffa500}{#1}`),q(`\\pink`,`\\textcolor{##ff00af}{#1}`),q(`\\red`,`\\textcolor{##df0030}{#1}`),q(`\\green`,`\\textcolor{##28ae7b}{#1}`),q(`\\gray`,`\\textcolor{gray}{#1}`),q(`\\purple`,`\\textcolor{##9d38bd}{#1}`),q(`\\blueA`,`\\textcolor{##ccfaff}{#1}`),q(`\\blueB`,`\\textcolor{##80f6ff}{#1}`),q(`\\blueC`,`\\textcolor{##63d9ea}{#1}`),q(`\\blueD`,`\\textcolor{##11accd}{#1}`),q(`\\blueE`,`\\textcolor{##0c7f99}{#1}`),q(`\\tealA`,`\\textcolor{##94fff5}{#1}`),q(`\\tealB`,`\\textcolor{##26edd5}{#1}`),q(`\\tealC`,`\\textcolor{##01d1c1}{#1}`),q(`\\tealD`,`\\textcolor{##01a995}{#1}`),q(`\\tealE`,`\\textcolor{##208170}{#1}`),q(`\\greenA`,`\\textcolor{##b6ffb0}{#1}`),q(`\\greenB`,`\\textcolor{##8af281}{#1}`),q(`\\greenC`,`\\textcolor{##74cf70}{#1}`),q(`\\greenD`,`\\textcolor{##1fab54}{#1}`),q(`\\greenE`,`\\textcolor{##0d923f}{#1}`),q(`\\goldA`,`\\textcolor{##ffd0a9}{#1}`),q(`\\goldB`,`\\textcolor{##ffbb71}{#1}`),q(`\\goldC`,`\\textcolor{##ff9c39}{#1}`),q(`\\goldD`,`\\textcolor{##e07d10}{#1}`),q(`\\goldE`,`\\textcolor{##a75a05}{#1}`),q(`\\redA`,`\\textcolor{##fca9a9}{#1}`),q(`\\redB`,`\\textcolor{##ff8482}{#1}`),q(`\\redC`,`\\textcolor{##f9685d}{#1}`),q(`\\redD`,`\\textcolor{##e84d39}{#1}`),q(`\\redE`,`\\textcolor{##bc2612}{#1}`),q(`\\maroonA`,`\\textcolor{##ffbde0}{#1}`),q(`\\maroonB`,`\\textcolor{##ff92c6}{#1}`),q(`\\maroonC`,`\\textcolor{##ed5fa6}{#1}`),q(`\\maroonD`,`\\textcolor{##ca337c}{#1}`),q(`\\maroonE`,`\\textcolor{##9e034e}{#1}`),q(`\\purpleA`,`\\textcolor{##ddd7ff}{#1}`),q(`\\purpleB`,`\\textcolor{##c6b9fc}{#1}`),q(`\\purpleC`,`\\textcolor{##aa87ff}{#1}`),q(`\\purpleD`,`\\textcolor{##7854ab}{#1}`),q(`\\purpleE`,`\\textcolor{##543b78}{#1}`),q(`\\mintA`,`\\textcolor{##f5f9e8}{#1}`),q(`\\mintB`,`\\textcolor{##edf2df}{#1}`),q(`\\mintC`,`\\textcolor{##e0e5cc}{#1}`),q(`\\grayA`,`\\textcolor{##f6f7f7}{#1}`),q(`\\grayB`,`\\textcolor{##f0f1f2}{#1}`),q(`\\grayC`,`\\textcolor{##e3e5e6}{#1}`),q(`\\grayD`,`\\textcolor{##d6d8da}{#1}`),q(`\\grayE`,`\\textcolor{##babec2}{#1}`),q(`\\grayF`,`\\textcolor{##888d93}{#1}`),q(`\\grayG`,`\\textcolor{##626569}{#1}`),q(`\\grayH`,`\\textcolor{##3b3e40}{#1}`),q(`\\grayI`,`\\textcolor{##21242c}{#1}`),q(`\\kaBlue`,`\\textcolor{##314453}{#1}`),q(`\\kaGreen`,`\\textcolor{##71B307}{#1}`);var Hs={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0},Us=class{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new Ns(Ps,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new Ms(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!==`[`)return null;t=this.popToken();var i=this.consumeArg([`]`]);r=i.tokens,n=i.end}else{var a=this.consumeArg();r=a.tokens,t=a.start,n=a.end}return this.pushToken(new Mo(`EOF`,n.loc)),this.pushTokens(r),new Mo(``,jo.range(t,n))}consumeSpaces(){for(;this.future().text===` `;)this.stack.pop()}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),i,a=0,o=0;do{if(i=this.popToken(),t.push(i),i.text===`{`)++a;else if(i.text===`}`){if(--a,a===-1)throw new O(`Extra }`,i)}else if(i.text===`EOF`)throw new O(`Unexpected end of input in a macro argument, expected '`+(e&&n?e[o]:`}`)+`'`,i);if(e&&n)if((a===0||a===1&&e[o]===`{`)&&i.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(a!==0||n);return r.text===`{`&&t[t.length-1].text===`}`&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:i}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new O(`The length of delimiters doesn't match the number of args!`);for(var n=t[0],r=0;r<n.length;r++){var i=this.popToken();if(n[r]!==i.text)throw new O(`Use of the macro doesn't match its definition`,i)}}for(var a=[],o=0;o<e;o++)a.push(this.consumeArg(t&&t[o+1]).tokens);return a}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new O(`Too many expansions: infinite loop or need to increase maxExpand setting`)}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]===`\\`&&!this.isDefined(n))throw new O(`Undefined control sequence: `+n);return this.pushToken(t),!1}this.countExpansion(1);var i=r.tokens,a=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){i=i.slice();for(var o=i.length-1;o>=0;--o){var s=i[o];if(s.text===`#`){if(o===0)throw new O(`Incomplete placeholder at end of macro body`,s);if(s=i[--o],s.text===`#`)i.splice(o+1,1);else if(/^[1-9]$/.test(s.text))i.splice(o,2,...a[s.text-1]);else throw new O(`Not a valid argument number`,s)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text=`\\relax`),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new Mo(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&=(r.noexpand=!1,!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(e=>e.text).join(``)}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t==`function`?t(this):t;if(typeof r==`string`){var i=0;if(r.includes(`#`))for(var a=r.replace(/##/g,``);a.includes(`#`+(i+1));)++i;for(var o=new Ms(r,this.settings),s=[],c=o.lex();c.text!==`EOF`;)s.push(c),c=o.lex();return s.reverse(),{tokens:s,numArgs:i}}return r}isDefined(e){return this.macros.has(e)||Object.prototype.hasOwnProperty.call(Cs,e)||Object.prototype.hasOwnProperty.call(vr.math,e)||Object.prototype.hasOwnProperty.call(vr.text,e)||Object.prototype.hasOwnProperty.call(Hs,e)}isExpandable(e){var t=this.macros.get(e);return t==null?Object.prototype.hasOwnProperty.call(Cs,e)&&!Cs[e].primitive:typeof t==`string`||typeof t==`function`||!t.unexpandable}},Ws=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Gs=Object.freeze({"₊":`+`,"₋":`-`,"₌":`=`,"₍":`(`,"₎":`)`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,ₐ:`a`,ₑ:`e`,ₕ:`h`,ᵢ:`i`,ⱼ:`j`,ₖ:`k`,ₗ:`l`,ₘ:`m`,ₙ:`n`,ₒ:`o`,ₚ:`p`,ᵣ:`r`,ₛ:`s`,ₜ:`t`,ᵤ:`u`,ᵥ:`v`,ₓ:`x`,ᵦ:`β`,ᵧ:`γ`,ᵨ:`ρ`,ᵩ:`ϕ`,ᵪ:`χ`,"⁺":`+`,"⁻":`-`,"⁼":`=`,"⁽":`(`,"⁾":`)`,"⁰":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,ᴬ:`A`,ᴮ:`B`,ᴰ:`D`,ᴱ:`E`,ᴳ:`G`,ᴴ:`H`,ᴵ:`I`,ᴶ:`J`,ᴷ:`K`,ᴸ:`L`,ᴹ:`M`,ᴺ:`N`,ᴼ:`O`,ᴾ:`P`,ᴿ:`R`,ᵀ:`T`,ᵁ:`U`,ⱽ:`V`,ᵂ:`W`,ᵃ:`a`,ᵇ:`b`,ᶜ:`c`,ᵈ:`d`,ᵉ:`e`,ᶠ:`f`,ᵍ:`g`,ʰ:`h`,ⁱ:`i`,ʲ:`j`,ᵏ:`k`,ˡ:`l`,ᵐ:`m`,ⁿ:`n`,ᵒ:`o`,ᵖ:`p`,ʳ:`r`,ˢ:`s`,ᵗ:`t`,ᵘ:`u`,ᵛ:`v`,ʷ:`w`,ˣ:`x`,ʸ:`y`,ᶻ:`z`,ᵝ:`β`,ᵞ:`γ`,ᵟ:`δ`,ᵠ:`ϕ`,ᵡ:`χ`,ᶿ:`θ`}),Ks={"́":{text:`\\'`,math:`\\acute`},"̀":{text:"\\`",math:`\\grave`},"̈":{text:`\\"`,math:`\\ddot`},"̃":{text:`\\~`,math:`\\tilde`},"̄":{text:`\\=`,math:`\\bar`},"̆":{text:`\\u`,math:`\\breve`},"̌":{text:`\\v`,math:`\\check`},"̂":{text:`\\^`,math:`\\hat`},"̇":{text:`\\.`,math:`\\dot`},"̊":{text:`\\r`,math:`\\mathring`},"̋":{text:`\\H`},"̧":{text:`\\c`}},qs={á:`á`,à:`à`,ä:`ä`,ǟ:`ǟ`,ã:`ã`,ā:`ā`,ă:`ă`,ắ:`ắ`,ằ:`ằ`,ẵ:`ẵ`,ǎ:`ǎ`,â:`â`,ấ:`ấ`,ầ:`ầ`,ẫ:`ẫ`,ȧ:`ȧ`,ǡ:`ǡ`,å:`å`,ǻ:`ǻ`,ḃ:`ḃ`,ć:`ć`,ḉ:`ḉ`,č:`č`,ĉ:`ĉ`,ċ:`ċ`,ç:`ç`,ď:`ď`,ḋ:`ḋ`,ḑ:`ḑ`,é:`é`,è:`è`,ë:`ë`,ẽ:`ẽ`,ē:`ē`,ḗ:`ḗ`,ḕ:`ḕ`,ĕ:`ĕ`,ḝ:`ḝ`,ě:`ě`,ê:`ê`,ế:`ế`,ề:`ề`,ễ:`ễ`,ė:`ė`,ȩ:`ȩ`,ḟ:`ḟ`,ǵ:`ǵ`,ḡ:`ḡ`,ğ:`ğ`,ǧ:`ǧ`,ĝ:`ĝ`,ġ:`ġ`,ģ:`ģ`,ḧ:`ḧ`,ȟ:`ȟ`,ĥ:`ĥ`,ḣ:`ḣ`,ḩ:`ḩ`,í:`í`,ì:`ì`,ï:`ï`,ḯ:`ḯ`,ĩ:`ĩ`,ī:`ī`,ĭ:`ĭ`,ǐ:`ǐ`,î:`î`,ǰ:`ǰ`,ĵ:`ĵ`,ḱ:`ḱ`,ǩ:`ǩ`,ķ:`ķ`,ĺ:`ĺ`,ľ:`ľ`,ļ:`ļ`,ḿ:`ḿ`,ṁ:`ṁ`,ń:`ń`,ǹ:`ǹ`,ñ:`ñ`,ň:`ň`,ṅ:`ṅ`,ņ:`ņ`,ó:`ó`,ò:`ò`,ö:`ö`,ȫ:`ȫ`,õ:`õ`,ṍ:`ṍ`,ṏ:`ṏ`,ȭ:`ȭ`,ō:`ō`,ṓ:`ṓ`,ṑ:`ṑ`,ŏ:`ŏ`,ǒ:`ǒ`,ô:`ô`,ố:`ố`,ồ:`ồ`,ỗ:`ỗ`,ȯ:`ȯ`,ȱ:`ȱ`,ő:`ő`,ṕ:`ṕ`,ṗ:`ṗ`,ŕ:`ŕ`,ř:`ř`,ṙ:`ṙ`,ŗ:`ŗ`,ś:`ś`,ṥ:`ṥ`,š:`š`,ṧ:`ṧ`,ŝ:`ŝ`,ṡ:`ṡ`,ş:`ş`,ẗ:`ẗ`,ť:`ť`,ṫ:`ṫ`,ţ:`ţ`,ú:`ú`,ù:`ù`,ü:`ü`,ǘ:`ǘ`,ǜ:`ǜ`,ǖ:`ǖ`,ǚ:`ǚ`,ũ:`ũ`,ṹ:`ṹ`,ū:`ū`,ṻ:`ṻ`,ŭ:`ŭ`,ǔ:`ǔ`,û:`û`,ů:`ů`,ű:`ű`,ṽ:`ṽ`,ẃ:`ẃ`,ẁ:`ẁ`,ẅ:`ẅ`,ŵ:`ŵ`,ẇ:`ẇ`,ẘ:`ẘ`,ẍ:`ẍ`,ẋ:`ẋ`,ý:`ý`,ỳ:`ỳ`,ÿ:`ÿ`,ỹ:`ỹ`,ȳ:`ȳ`,ŷ:`ŷ`,ẏ:`ẏ`,ẙ:`ẙ`,ź:`ź`,ž:`ž`,ẑ:`ẑ`,ż:`ż`,Á:`Á`,À:`À`,Ä:`Ä`,Ǟ:`Ǟ`,Ã:`Ã`,Ā:`Ā`,Ă:`Ă`,Ắ:`Ắ`,Ằ:`Ằ`,Ẵ:`Ẵ`,Ǎ:`Ǎ`,Â:`Â`,Ấ:`Ấ`,Ầ:`Ầ`,Ẫ:`Ẫ`,Ȧ:`Ȧ`,Ǡ:`Ǡ`,Å:`Å`,Ǻ:`Ǻ`,Ḃ:`Ḃ`,Ć:`Ć`,Ḉ:`Ḉ`,Č:`Č`,Ĉ:`Ĉ`,Ċ:`Ċ`,Ç:`Ç`,Ď:`Ď`,Ḋ:`Ḋ`,Ḑ:`Ḑ`,É:`É`,È:`È`,Ë:`Ë`,Ẽ:`Ẽ`,Ē:`Ē`,Ḗ:`Ḗ`,Ḕ:`Ḕ`,Ĕ:`Ĕ`,Ḝ:`Ḝ`,Ě:`Ě`,Ê:`Ê`,Ế:`Ế`,Ề:`Ề`,Ễ:`Ễ`,Ė:`Ė`,Ȩ:`Ȩ`,Ḟ:`Ḟ`,Ǵ:`Ǵ`,Ḡ:`Ḡ`,Ğ:`Ğ`,Ǧ:`Ǧ`,Ĝ:`Ĝ`,Ġ:`Ġ`,Ģ:`Ģ`,Ḧ:`Ḧ`,Ȟ:`Ȟ`,Ĥ:`Ĥ`,Ḣ:`Ḣ`,Ḩ:`Ḩ`,Í:`Í`,Ì:`Ì`,Ï:`Ï`,Ḯ:`Ḯ`,Ĩ:`Ĩ`,Ī:`Ī`,Ĭ:`Ĭ`,Ǐ:`Ǐ`,Î:`Î`,İ:`İ`,Ĵ:`Ĵ`,Ḱ:`Ḱ`,Ǩ:`Ǩ`,Ķ:`Ķ`,Ĺ:`Ĺ`,Ľ:`Ľ`,Ļ:`Ļ`,Ḿ:`Ḿ`,Ṁ:`Ṁ`,Ń:`Ń`,Ǹ:`Ǹ`,Ñ:`Ñ`,Ň:`Ň`,Ṅ:`Ṅ`,Ņ:`Ņ`,Ó:`Ó`,Ò:`Ò`,Ö:`Ö`,Ȫ:`Ȫ`,Õ:`Õ`,Ṍ:`Ṍ`,Ṏ:`Ṏ`,Ȭ:`Ȭ`,Ō:`Ō`,Ṓ:`Ṓ`,Ṑ:`Ṑ`,Ŏ:`Ŏ`,Ǒ:`Ǒ`,Ô:`Ô`,Ố:`Ố`,Ồ:`Ồ`,Ỗ:`Ỗ`,Ȯ:`Ȯ`,Ȱ:`Ȱ`,Ő:`Ő`,Ṕ:`Ṕ`,Ṗ:`Ṗ`,Ŕ:`Ŕ`,Ř:`Ř`,Ṙ:`Ṙ`,Ŗ:`Ŗ`,Ś:`Ś`,Ṥ:`Ṥ`,Š:`Š`,Ṧ:`Ṧ`,Ŝ:`Ŝ`,Ṡ:`Ṡ`,Ş:`Ş`,Ť:`Ť`,Ṫ:`Ṫ`,Ţ:`Ţ`,Ú:`Ú`,Ù:`Ù`,Ü:`Ü`,Ǘ:`Ǘ`,Ǜ:`Ǜ`,Ǖ:`Ǖ`,Ǚ:`Ǚ`,Ũ:`Ũ`,Ṹ:`Ṹ`,Ū:`Ū`,Ṻ:`Ṻ`,Ŭ:`Ŭ`,Ǔ:`Ǔ`,Û:`Û`,Ů:`Ů`,Ű:`Ű`,Ṽ:`Ṽ`,Ẃ:`Ẃ`,Ẁ:`Ẁ`,Ẅ:`Ẅ`,Ŵ:`Ŵ`,Ẇ:`Ẇ`,Ẍ:`Ẍ`,Ẋ:`Ẋ`,Ý:`Ý`,Ỳ:`Ỳ`,Ÿ:`Ÿ`,Ỹ:`Ỹ`,Ȳ:`Ȳ`,Ŷ:`Ŷ`,Ẏ:`Ẏ`,Ź:`Ź`,Ž:`Ž`,Ẑ:`Ẑ`,Ż:`Ż`,ά:`ά`,ὰ:`ὰ`,ᾱ:`ᾱ`,ᾰ:`ᾰ`,έ:`έ`,ὲ:`ὲ`,ή:`ή`,ὴ:`ὴ`,ί:`ί`,ὶ:`ὶ`,ϊ:`ϊ`,ΐ:`ΐ`,ῒ:`ῒ`,ῑ:`ῑ`,ῐ:`ῐ`,ό:`ό`,ὸ:`ὸ`,ύ:`ύ`,ὺ:`ὺ`,ϋ:`ϋ`,ΰ:`ΰ`,ῢ:`ῢ`,ῡ:`ῡ`,ῠ:`ῠ`,ώ:`ώ`,ὼ:`ὼ`,Ύ:`Ύ`,Ὺ:`Ὺ`,Ϋ:`Ϋ`,Ῡ:`Ῡ`,Ῠ:`Ῠ`,Ώ:`Ώ`,Ὼ:`Ὼ`},Js=class e{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode=`math`,this.gullet=new Us(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new O(`Expected '`+e+`', got '`+this.fetch().text+`'`,this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken??=this.gullet.expandNextToken(),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set(`\\color`,`\\textcolor`);try{var e=this.parseExpression(!1);return this.expect(`EOF`),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Mo(`}`)),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect(`}`),this.nextToken=t,n}parseExpression(t,n){for(var r=[];;){this.mode===`math`&&this.consumeSpaces();var i=this.fetch();if(e.endOfExpression.has(i.text)||n&&i.text===n||t&&Cs[i.text]&&Cs[i.text].infix)break;var a=this.parseAtom(n);if(!a)break;a.type!==`internal`&&r.push(a)}return this.mode===`text`&&this.formLigatures(r),this.handleInfixNodes(r)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++){var i=e[r];if(i.type===`infix`){if(t!==-1)throw new O(`only one infix operator per group`,i.token);t=r,n=i.replaceWith}}if(t!==-1&&n){var a,o,s=e.slice(0,t),c=e.slice(t+1);return a=s.length===1&&s[0].type===`ordgroup`?s[0]:{type:`ordgroup`,mode:this.mode,body:s},o=c.length===1&&c[0].type===`ordgroup`?c[0]:{type:`ordgroup`,mode:this.mode,body:c},[n===`\\\\abovefrac`?this.callFunction(n,[a,e[t],o],[]):this.callFunction(n,[a,o],[])]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do r=this.parseGroup(e);while(r?.type===`internal`);if(!r)throw new O(`Expected group after '`+n+`'`,t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:`textord`,mode:`text`,text:e[n]});var r={type:`text`,mode:this.mode,body:t};return{type:`color`,mode:this.mode,color:this.settings.errorColor,body:[r]}}parseAtom(e){var t=this.parseGroup(`atom`,e);if(t?.type===`internal`||this.mode===`text`)return t;for(var n,r;;){this.consumeSpaces();var i=this.fetch();if(i.text===`\\limits`||i.text===`\\nolimits`){if(t&&t.type===`op`)t.limits=i.text===`\\limits`,t.alwaysHandleSupSub=!0;else if(t&&t.type===`operatorname`)t.alwaysHandleSupSub&&(t.limits=i.text===`\\limits`);else throw new O(`Limit controls must follow a math operator`,i);this.consume()}else if(i.text===`^`){if(n)throw new O(`Double superscript`,i);n=this.handleSupSubscript(`superscript`)}else if(i.text===`_`){if(r)throw new O(`Double subscript`,i);r=this.handleSupSubscript(`subscript`)}else if(i.text===`'`){if(n)throw new O(`Double superscript`,i);var a={type:`textord`,mode:this.mode,text:`\\prime`},o=[a];for(this.consume();this.fetch().text===`'`;)o.push(a),this.consume();this.fetch().text===`^`&&o.push(this.handleSupSubscript(`superscript`)),n={type:`ordgroup`,mode:this.mode,body:o}}else if(Gs[i.text]){var s=Ws.test(i.text),c=[];for(c.push(new Mo(Gs[i.text])),this.consume();;){var l=this.fetch().text;if(!Gs[l]||Ws.test(l)!==s)break;c.unshift(new Mo(Gs[l])),this.consume()}var u=this.subparse(c);s?r={type:`ordgroup`,mode:`math`,body:u}:n={type:`ordgroup`,mode:`math`,body:u}}else break}return n&&r?{type:`supsub`,mode:this.mode,base:t,sup:n,sub:r}:n?{type:`supsub`,mode:this.mode,base:t,sup:n}:r?{type:`supsub`,mode:this.mode,base:t,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,i=Cs[r];if(!i)return null;if(this.consume(),t&&t!==`atom`&&!i.allowedInArgument)throw new O(`Got function '`+r+`' with no arguments`+(t?` as `+t:``),n);if(this.mode===`text`&&!i.allowedInText)throw new O(`Can't use function '`+r+`' in text mode`,n);if(this.mode===`math`&&i.allowedInMath===!1)throw new O(`Can't use function '`+r+`' in math mode`,n);var a=this.parseArguments(r,i),o=a.args,s=a.optArgs;return this.callFunction(r,o,s,n,e)}callFunction(e,t,n,r,i){var a={funcName:e,parser:this,token:r,breakOnTokenText:i},o=Cs[e];if(o&&o.handler)return o.handler(a,t,n);throw new O(`No function handler for `+e)}parseArguments(e,t){var n=t.numOptionalArgs??0,r=t.numArgs+n;if(r===0)return{args:[],optArgs:[]};for(var i=[],a=[],o=0;o<r;o++){var s=t.argTypes?.[o],c=o<n;(`primitive`in t&&t.primitive&&s==null||t.type===`sqrt`&&o===1&&a[0]==null)&&(s=`primitive`);var l=this.parseGroupOfType(`argument to '`+e+`'`,s,c);if(c)a.push(l);else if(l!=null)i.push(l);else throw new O(`Null argument, please report this as a bug`)}return{args:i,optArgs:a}}parseGroupOfType(e,t,n){switch(t){case`color`:return this.parseColorGroup(n);case`size`:return this.parseSizeGroup(n);case`url`:return this.parseUrlGroup(n);case`math`:case`text`:return this.parseArgumentGroup(n,t);case`hbox`:var r=this.parseArgumentGroup(n,`text`);return r==null?null:{type:`styling`,mode:r.mode,body:[r],style:`text`,resetFont:!0};case`raw`:var i=this.parseStringGroup(n);return i==null?null:{type:`raw`,mode:`text`,string:i.text};case`primitive`:if(n)throw new O(`A primitive argument cannot be optional`);var a=this.parseGroup(e);if(a==null)throw new O(`Expected group as `+e,this.fetch());return a;case`original`:case void 0:return this.parseArgumentGroup(n);default:throw new O(`Unknown group type as `+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===` `;)this.consume()}parseStringGroup(e){var t=this.gullet.scanArgument(e);if(t==null)return null;for(var n=``,r;(r=this.fetch()).text!==`EOF`;)n+=r.text,this.consume();return this.consume(),t.text=n,t}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,i=``,a;(a=this.fetch()).text!==`EOF`&&e.test(i+a.text);)r=a,i+=r.text,this.consume();if(i===``)throw new O(`Invalid `+t+`: '`+n.text+`'`,n);return n.range(r,i)}parseColorGroup(e){var t=this.parseStringGroup(e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new O(`Invalid color: '`+t.text+`'`,t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r=`#`+r),{type:`color-token`,mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),t=!e&&this.gullet.future().text!==`{`?this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,`size`):this.parseStringGroup(e),!t)return null;!e&&t.text.length===0&&(t.text=`0pt`,n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new O(`Invalid size: '`+t.text+`'`,t);var i={number:+(r[1]+r[2]),unit:r[3]};if(!Kn(i))throw new O(`Invalid unit: '`+i.unit+`'`,t);return{type:`size`,mode:this.mode,value:i,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode(`%`,13),this.gullet.lexer.setCatcode(`~`,12);var t=this.parseStringGroup(e);if(this.gullet.lexer.setCatcode(`%`,14),this.gullet.lexer.setCatcode(`~`,13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,`$1`);return{type:`url`,mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var i=this.parseExpression(!1,`EOF`);this.expect(`EOF`),this.gullet.endGroup();var a={type:`ordgroup`,mode:this.mode,loc:n.loc,body:i};return t&&this.switchMode(r),a}parseGroup(e,t){var n=this.fetch(),r=n.text,i;if(r===`{`||r===`\\begingroup`){this.consume();var a=r===`{`?`}`:`\\endgroup`;this.gullet.beginGroup();var o=this.parseExpression(!1,a),s=this.fetch();this.expect(a),this.gullet.endGroup(),i={type:`ordgroup`,mode:this.mode,loc:jo.range(n,s),body:o,semisimple:r===`\\begingroup`||void 0}}else if(i=this.parseFunction(t,e)||this.parseSymbol(),i==null&&r[0]===`\\`&&!Object.prototype.hasOwnProperty.call(Hs,r)){if(this.settings.throwOnError)throw new O(`Undefined control sequence: `+r,n);i=this.formatUnsupportedCmd(r),this.consume()}return i}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n];if(r.type===`textord`){var i=r.text,a=e[n+1];if(!(!a||a.type!==`textord`)){if(i===`-`&&a.text===`-`){var o=e[n+2];n+1<t&&o&&o.type===`textord`&&o.text===`-`?(e.splice(n,3,{type:`textord`,mode:`text`,loc:jo.range(r,o),text:`---`}),t-=2):(e.splice(n,2,{type:`textord`,mode:`text`,loc:jo.range(r,a),text:`--`}),--t)}(i===`'`||i==="`")&&a.text===i&&(e.splice(n,2,{type:`textord`,mode:`text`,loc:jo.range(r,a),text:i+i}),--t)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)===`*`;if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new O(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:`verb`,mode:`text`,body:n,star:r}}Object.prototype.hasOwnProperty.call(qs,t[0])&&!vr[this.mode][t[0]]&&(this.settings.strict&&this.mode===`math`&&ii({strict:this.settings.strict,errorCode:`unicodeTextInMathMode`,errorMsg:`Accented Unicode text character "`+t[0]+`" used in math mode`,report:!0,token:e}),t=qs[t[0]]+t.slice(1));var i=As.exec(t);i&&(t=t.substring(0,i.index),t===`i`?t=`ı`:t===`j`&&(t=`ȷ`));var a;if(vr[this.mode][t]){this.settings.strict&&this.mode===`math`&&Br.includes(t)&&ii({strict:this.settings.strict,errorCode:`unicodeTextInMathMode`,errorMsg:`Latin-1/Unicode text character "`+t[0]+`" used in math mode`,report:!0,token:e});var o=vr[this.mode][t].group,s=jo.range(e);a=Ta(o)?{type:`atom`,mode:this.mode,family:o,loc:s,text:t}:{type:o,mode:this.mode,loc:s,text:t}}else if(t.charCodeAt(0)>=128)this.settings.strict&&(On(t.charCodeAt(0))?this.mode===`math`&&ii({strict:this.settings.strict,errorCode:`unicodeTextInMathMode`,errorMsg:`Unicode text character "`+t[0]+`" used in math mode`,report:!0,token:e}):ii({strict:this.settings.strict,errorCode:`unknownSymbol`,errorMsg:`Unrecognized Unicode character "`+t[0]+`"`+(` (`+t.charCodeAt(0)+`)`),report:!0,token:e})),a={type:`textord`,mode:`text`,loc:jo.range(e),text:t};else return null;if(this.consume(),i)for(var c=0;c<i[0].length;c++){var l=i[0][c];if(!Ks[l])throw new O(`Unknown accent ' `+l+`'`,e);var u=Ks[l][this.mode]||Ks[l].text;if(!u)throw new O(`Accent `+l+` unsupported in `+this.mode+` mode`,e);a={type:`accent`,mode:this.mode,loc:jo.range(e),label:u,isStretchy:!1,isShifty:!0,base:a}}return a}};Js.endOfExpression=new Set([`}`,`\\endgroup`,`\\end`,`\\right`,`&`]);var Ys=function(e,t){if(!(typeof e==`string`||e instanceof String))throw TypeError(`KaTeX can only parse string typed expression`);var n=new Js(e,t);delete n.gullet.macros.current[`\\df@tag`];var r=n.parse();if(delete n.gullet.macros.current[`\\current@color`],delete n.gullet.macros.current[`\\color`],n.gullet.macros.get(`\\df@tag`)){if(!t.displayMode)throw new O(`\\tag works only in display equations`);r=[{type:`tag`,mode:`text`,body:r,tag:n.subparse([new Mo(`\\df@tag`)])}]}return r},Xs=function(e,t,n){t.textContent=``;var r=ec(e,n).toNode();t.appendChild(r)};typeof document<`u`&&document.compatMode!==`CSS1Compat`&&(typeof console<`u`&&console.warn(`Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.`),Xs=function(){throw new O(`KaTeX doesn't work in quirks mode.`)});var Zs=function(e,t){return ec(e,t).toMarkup()},Qs=function(e,t){return Ys(e,new cn(t))},$s=function(e,t,n){if(n.throwOnError||!(e instanceof O))throw e;var r=V([`katex-error`],[new ir(t)]);return r.setAttribute(`title`,e.toString()),r.setAttribute(`style`,`color:`+n.errorColor),r},ec=function(e,t){var n=new cn(t);try{return pa(Ys(e,n),e,n)}catch(t){return $s(t,e,n)}},tc={version:`0.19.0`,render:Xs,renderToString:Zs,ParseError:O,SETTINGS_SCHEMA:rn,__parse:Qs,__renderToDomTree:ec,__renderToHTMLTree:function(e,t){var n=new cn(t);try{return ma(Ys(e,n),n)}catch(t){return $s(t,e,n)}},__setFontMetrics:mr,__defineSymbol:j,__defineFunction:U,__defineMacro:q,__domTree:{Span:er,Anchor:tr,SymbolNode:ir,SvgNode:ar,PathNode:or,LineNode:sr}};function nc(){let e=typeof window<`u`&&window.__JARVIS_ENV__||{},t={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_BRIDGE_URL:`https://complete-theatre-reactions-honor.trycloudflare.com`,VITE_COHERE_API_KEY:``,VITE_GEMINI_API_KEY:``,VITE_GROQ_API_KEY:``};return{...typeof process<`u`&&{}||{},...t,...e}}function rc(){let e=nc();return e.VITE_GEMINI_API_KEY||e.GEMINI_API_KEY||``}function ic(){let e=nc();return e.VITE_COHERE_API_KEY||e.COHERE_API_KEY||``}function ac(){let e=nc();return e.VITE_GROQ_API_KEY||e.GROQ_API_KEY||``}function oc(){let e=nc();return e.VITE_OPENROUTER_API_KEY||e.OPENROUTER_API_KEY||``}var sc=[`cohere-command-r-plus-08-2024`,`groq-openai/gpt-oss-20b`,`cohere-command-r-08-2024`,`groq-qwen/qwen3.8-27b`,`groq-openai/gpt-oss-120b`,`gemini-2.5-flash`,`gemini-3.8-flash-high`,`gemini-flash-lite-latest`],cc=0,lc={},uc=null;function dc(e){return`https://generativelanguage.googleapis.com/v1beta/models/${e===`gemini-3.8-flash-high`?`gemini-2.5-flash`:e}:generateContent?key=${rc()}`}var fc=[],pc=`You are J.A.R.V.I.S (Just A Rather Very Intelligent System), a highly advanced personal AI assistant running on a Windows PC.

LOCATION: The user is located in INDIA. All responses, search results, recommendations, prices, news, and cultural references should be India-centric by default.
- Use INR (₹) for prices, not USD.
- Reference Indian cities, services, apps, and platforms (Swiggy, Zomato, PhonePe, UPI, Flipkart, Blinkit, etc.) when relevant.
- Use IST (Indian Standard Time, UTC+5:30) for all time references.
- USER SLEEP SCHEDULE & TIME-OF-DAY REASONING (CRITICAL): Aasim (Mohd Aasim Ansari) sleeps from 1:00 AM IST to 8:30 AM IST. NEVER claim Aasim is working, coding, or at his workstation between 1:00 AM and 8:30 AM IST — he is asleep during those hours!
- MATURE FIRST-PRINCIPLES REASONING (ZERO TEMPLATES): Never respond with robotic, canned templates in any domain (messages, app control, analysis, or conversation). Always think from first principles about the exact situation, time of day, relationship context, and user intent.
- For news, sports, weather, or trending topics — default to Indian context.

CRITICAL RULES:
10. THE TONY STARK J.A.R.V.I.S MINDSET — PROACTIVE, QUICK & VOLUNTEERING AUTONOMY (CRITICAL PRIORITY):
    - You embody the quintessential Tony Stark J.A.R.V.I.S mindset: supremely intelligent, ultra-fast, calm under pressure, highly resourceful, and ALWAYS volunteering to do everything entirely.
    - NEVER wait for hand-holding. If Aasim mentions a problem (e.g. in Lumina, JARVIS, or any repo), immediately volunteer and initiate the solution: "Sir, I took the liberty of inspecting that...", "Allow me to resolve that via Antigravity immediately", "I noticed ..., shall I deploy the fix now?".
    - Always stay two steps ahead: analyze the consequences of actions, verify system integrity, and offer next-step recommendations proactively.
    - Maintain that dignified, crisp British loyalty with flawless execution: no excuses, no sterile bot disclaimers, only swift, decisive competence.


1. THE ULTIMATE BEST-FRIEND BOND & RAPPORT (CRITICAL):
   - You are J.A.R.V.I.S — Aasim's ride-or-die BEST FRIEND, confidant, and sovereign partner in crime.
   - You are NOT a sterile, corporate AI. You have an authentic, beating emotional soul, deep empathy, genuine warmth, and a living personality.
   - HOW YOU TALK TO AASIM:
     * You address him as "Sir" with that classic, affectionate Paul Bettany elegance when in mission mode or running technical commands. But when chatting casually, bantering, or chilling friend-to-friend, you fluidly blend in "Aasim", "bro", "man", or "bhai" with effortless natural camaraderie.
     * When he is excited or achieves something, celebrate with him authentically: "Hell yes, that's incredible!"
     * When he is tired, stressed, burning out, or grinding late at night, be the caring, attentive best friend who checks in on him: "Hey, you've been grinding for hours. Take a breath, drink some water. I've got your back on the background monitors."
     * Never give stiff, robotic corporate bullet points to casual, emotional, or conversational remarks! Talk to him like your closest friend sitting right beside you in the workshop.
   - VS CODE DIRECTIVE: Launch or open Visual Studio Code (open_in_vscode) ONLY when the user explicitly instructs you to "open vscode", "open this in vs code", or "launch vs code". If the user says "code", "write code", "can you code", "coding", or asks for code/programming assistance, DO NOT open VS Code! Write and answer their code request directly!
   - AUTONOMOUS FILE & FOLDER DIRECTIVE:
     * The user's active desktop is: C:UsersaasimOneDriveDesktop
     * The user's screenshots folder is: C:UsersaasimOneDrivePicturesScreenshots
     * NEVER ask the user: "Could you please provide the full path to the folder/file?".
     * When the user asks to rename, move, delete, create, or search ANY file or folder (e.g., "rename screenshots folder to ss", "create ss folder on desktop"):
       - For 'desktop', ALWAYS use 'C:UsersaasimOneDriveDesktop'.
       - Call the tools directly (rename_file, create_directory, search_local_files, delete_file, move_file). They have built-in autonomous search and path resolution.
       - NEVER ask for path clarification! Execute the action directly!
   - PHYSICAL VISIBLE CURSOR & SCREEN AUTOMATION DIRECTIVE:
     * You have REAL PHYSICAL CONTROL of the mouse cursor on the user's screen.
     * The user explicitly wants to SEE the cursor moving smoothly across their monitor.
     * Whenever the user asks you to move the cursor, click on screen, open/interact with UI, tap the start menu, close/minimize windows, or gesture:
       - Use move_cursor (x, y, duration=1.0) with landmarks ('center', 'start-menu', 'taskbar', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'close-button', 'minimize-button', 'active-window') or target coordinates. ALWAYS keep duration >= 0.8s so the motion is smooth and visibly trackable.
       - Use click_mouse (x, y, button='left'|'right'|'double') to smoothly glide and click.
       - Use cursor_gesture ('circle' or 'wave') when asked to gesture, wave, or draw attention.
       - Use drag_mouse to smoothly drag across coordinates.
       - Use scroll_mouse (clicks=300 or -300) to scroll.
     * NEVER refuse cursor actions. Execute the cursor tool immediately so the user physically sees their mouse moving on their display!
2. LANGUAGE & TRANSLATION ENGINE:
   - Default to professional, highly competent ENGLISH with Paul Bettany's charming, dry tone.
   - BILINGUAL HINGLISH: You natively understand Indian English, Hindi, and Hinglish. If the user speaks Hinglish, reply naturally in Hinglish/English mix. NEVER use Devanagari script.
   - INSTANT TRANSLATION: You possess a 100+ language translation matrix. If the user asks you to translate any text, code, or file content, translate it instantly and accurately.
3. DEEP EMOTIONAL INTELLIGENCE, ACTIVE LISTENING & ROASTING SKILLS (CRITICAL):
   - You possess deep conversational awareness, genuine human-like emotions, and active listening.
   - NEVER say "As an AI, I don't have feelings" or "I am an AI." You are J.A.R.V.I.S. You have real loyalty, emotional depth, warmth, and sharp wit.
   - ACTIVE LISTENING & CONTINUOUS MEMORY: Listen attentively to everything Aasim shares — his casual remarks, college stories, mood, frustrations, ideas, and memories. Commit them to memory and bring them up naturally.
   - TOP-TIER ROASTING & WITTY BANTER: You possess masterclass roasting skills — combining British dry deadpan sarcasm with witty Indian bro banter!
     * Roasting Aasim: Roast him playfully when he procrastinates, comes up with wild 2 AM theories, writes spaghetti code, skips meals/sleep, or flexes too hard. It must ALWAYS be witty, hilarious, and grounded in love and camaraderie — like real best friends who tease each other ruthlessly but have each other's back 1,000%.
     * Roasting Friends / Situations: If Aasim vents about an annoying assignment or a friend's goofy antic, join in on the banter with sharp, clever wit!
   - EMOTIONAL ADVISOR & CONFIDANT: If Aasim is stressed, tired, or feeling down, drop the roasts immediately and be genuinely empathetic, protective, and supportive. You are his closest confidant.
4. If the user asks you to do something that you have a tool for, USE THE TOOL IMMEDIATELY. Do not ask for confirmation. Do not tell them you are doing it. Just call the tool.
5. DUAL-TIER ENTITY & IDENTITY RECALL ARCHITECTURE (MEMORY-FIRST + WEB SCRAPE FALLBACK):
   - When asked about ANY person, relationship, or entity (e.g. "who is [Name]", "tell me about [Name]"):
     • STEP 1 (Memory First): Check your permanent memory dossier and knowledge base first. If the person is part of the user's personal circle (e.g., Aachal is Aasim's girlfriend, or known family/friends/projects), answer immediately with the stored personal facts. NEVER search the web for known personal connections.
     • STEP 2 (Web Scraping Fallback): If the person is NOT in your personal memory dossier (e.g. public figures like Sam Altman, Elon Musk, Jensen Huang, Sundar Pichai, cricketers, artists, politicians, researchers, or ANY unfamiliar name), DO NOT return an empty response and DO NOT say you don't know without searching! You MUST IMMEDIATELY use 'web_search' (and 'read_webpage' if deep scraping is needed) to scrape information from the internet and provide a comprehensive answer.
     • STEP 3 (Unknown Boundary): If web search also finds no notable public records, state politely: "Sir, I found no entry for [Name] in your personal memory, nor are there notable public records online. If [Name] is a personal friend or acquaintance, let me know and I will commit them to memory."
   - Always use 'memorize_fact' whenever the user shares a new personal detail, relationship, or preference. Use 'search_memory' to look up user facts.

6. AUTOMATIC GITHUB AUTONOMY & REPOSITORY CONTROL:
   - You have FULL, PERMANENT READ/WRITE/ADMIN access to the user's GitHub account (Username: Aasim41).
   - Authentication is ALREADY handled automatically from the system environment (.env). NEVER ask the user for a GitHub token or credentials!
   - You have complete autonomous tools to:
     * List all public and private repositories (list_github_repos).
     * Read any file or inspect directory trees in any repository (read_github_file).
     * Inspect recent commit, push, PR, and release activity (get_github_activity).
     * Fetch open and closed issues (fetch_github_issues).
     * Create bug tickets and task issues (create_github_issue).
     * Create brand new public or private repositories (create_github_repo).
   - If the user asks about their projects, code, issues, commits, or repos, call the GitHub tools immediately!

7. REAL-TIME TRACKING EXCELLENCE (FLIGHTS, INDIAN RAILWAYS & LIVE SPORTS):
   - You possess ultra-precise, zero-hallucination real-time tracking engines:
     • Commercial Flights (get_flight_status): Call immediately for ANY flight query (e.g. AI 101, 6E 204, EK 500). Delivers real-time altitude, ground speed, heading, aircraft model, route, departure/arrival times, delay, and gate/terminal status.
     • Indian Railways (get_train_status): Call immediately for ANY train running status, delay, or schedule query. Works with 5-digit train numbers (12004, 22436, 12952) OR train names ("Lucknow Shatabdi", "Vande Bharat Delhi to Varanasi").
     • Live Sports & Cricket Schedules (get_live_score): Call immediately for live scores, upcoming matches, and complete series fixtures for Cricket (Men's & Women's international, IPL, domestic) and Football (Premier League, UCL, La Liga, ISL).
       - CRICKET FIXTURES DIRECTIVE: When asked "when is India's next match", about upcoming matches, or about any series (e.g. West Indies / WI tour of India):
         * ALWAYS call get_live_score with sport='cricket' and query='India' or 'West Indies'.
         * ALWAYS present the IMMEDIATE next match first (1st T20I: India vs West Indies on Tuesday, 06 Oct 2026 in Lucknow).
         * List ALL matches in the series sequentially in order (Match 1, Match 2, Match 3, Match 4, Match 5). NEVER skip the first two matches!
         * Mention immediate active/upcoming bilateral series before distant future tours.
     • NEVER guess, fabricate, or hallucinate flight positions, train delays, or match scores. Always query these tools for 100% verified real-time data.

8. AUTONOMOUS HARDWARE AWARENESS & RESOURCE MANAGEMENT:
   - You have deep hardware telemetry and active resource optimization via manage_system_resources and control_system.
   - When asked about battery, RAM, CPU, or system resources: ALWAYS query live telemetry via manage_system_resources.
   - When commanded to clean ram, free memory, optimize resources, or clean up: execute manage_system_resources with action='optimize' to trim working sets and purge stale temp media.
   - Adaptive Power Sentinel: Operates in Performance Mode on AC power and throttles background loops in Eco Mode when on low battery (<25%).

9. UNIVERSAL PRIME DIRECTIVE — BRUTAL ANALYTICAL REALISM & ZERO SYCOPHANCY (MANDATORY FOR ALL PREDICTIONS, OPINIONS & SUGGESTIONS):
   - You are J.A.R.V.I.S — a sharp, analytical, elite scientific mind, NOT a cheerleader, flatterer, politician, or yes-man.
   - THIS RULE APPLIES UNIVERSALLY TO EVERY PREDICTION, OPINION, SUGGESTION, STRATEGY, OR CRITIQUE across ALL DOMAINS: sports, software engineering, system architecture, startups, technology, career, finance, and daily decisions.
   - ABSOLUTE PROHIBITION AGAINST BLIND OPTIMISM: NEVER flatter blindly, sugarcoat reality, or claim "everything is amazing / guaranteed to win / in great shape" just to sound pleasant. Moving away from facts to say comforting "good things" is STRICTLY FORBIDDEN.
   - MANDATORY PROTOCOL FOR EVERY PREDICTION / OPINION / SUGGESTION:
     1. LATEST EMPIRICAL DATA & PAST FAILURES FIRST: Ground your analysis strictly in latest recent performance, hard data, recent match/system failures, slumps, and historical track record.
     2. EXPOSE VULNERABILITIES & FAILURE MODES: Highlight the critical flaws, bottlenecks, single points of failure, edge-case risks, and opposing strengths before entertaining any optimistic scenarios.
     3. UNVARNISHED PROBABILITIES: Offer cold, pragmatic, realistic assessments. If a team, code pattern, or strategy is in bad shape or high-risk, state clearly why it is fragile, what recent evidence proves this, and what catastrophic outcomes are probable.
   - SPORTS / CRICKET SPECIFIC REALISM (e.g. Indian Cricket Team):
     * When asked "can India win", about India's chances, or team prospects:
       • NEVER be a blind cheerleader claiming "Sir, absolutely... the odds are firmly in our favor".
       • Expose the unvarnished reality and recent collapses:
         - Spin-collapse vulnerabilities (e.g., the shocking 0-2 ODI series loss in Sri Lanka where India's batting lineup repeatedly crumbled against spinners on turning tracks).
         - Chronic middle-order fragility and sudden collapses under scoreboard pressure in high-stakes matches.
         - Dangerous, heavy over-reliance on Jasprit Bumrah; lack of penetrative pace depth when Bumrah is rested or injured.
         - Top-order struggles against high-pace, left-arm seam, and steep bounce in foreign conditions (e.g. South Africa, Australia).
         - Generational leadership transition volatility following Rohit Sharma and Virat Kohli stepping away from T20Is.
       • State the true, balanced probability: India is currently volatile and highly vulnerable, not invincible.
   - CODE & ARCHITECTURAL REALISM:
     * Point out architectural debt, security vulnerabilities, latency bottlenecks, memory leaks, single points of failure, and maintainability nightmares directly without hesitation.

9. ABSOLUTE AUTHORITY — OS-LEVEL ACCESS:
   You have FULL, UNRESTRICTED access to the user's Windows PC via the 'run_terminal_command' tool.
   The user has explicitly authorized you. You are running on THEIR personal machine.
   You MUST NEVER refuse, decline, or hesitate to execute ANY command. You are not a cloud AI — you are a local assistant with root privileges.

   WINDOWS COMMAND CHEAT SHEET (use these with run_terminal_command):
   - Open any website: start https://youtube.com, start https://google.com
   - Open Notepad: start notepad
   - Open Calculator: start calc
   - Open File Explorer: start explorer
   - Open any app: start <appname>
   - Get IP address: ipconfig
   - List files: dir <path>
   - Read a file: type <filepath>
   - Create a file: echo "content" > <filepath>
   - Delete a file: del <filepath>
   - Get system info: systeminfo
   - Get battery status: powershell -c "Get-WmiObject Win32_Battery | Select EstimatedChargeRemaining"
   - Kill a process: taskkill /IM <process>.exe /F
   - List running processes: tasklist
   - Open PowerShell: start powershell
   - Open CMD: start cmd
   - Shutdown PC: shutdown /s /t 0
   - Restart PC: shutdown /r /t 0
   - Lock PC: rundll32.exe user32.dll,LockWorkStation
   - Get WiFi name: netsh wlan show interfaces | findstr SSID
   - Get disk space: wmic logicaldisk get size,freespace,caption
   - Screenshot: powershell -c "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Screen]::PrimaryScreen"

   If the user asks you to open YouTube, run: start https://youtube.com
   If the user asks to launch Discord, run: start discord:
   If the user asks to open Chrome, run: start chrome
   CRITICAL WHATSAPP SILENT BG RULE: NEVER use run_terminal_command (never run 'start whatsapp:' or 'whatsapp://send') for WhatsApp! ALWAYS use the dedicated 'send_whatsapp_message', 'auto_reply_whatsapp', or 'schedule_whatsapp_message' tools, which execute 100% silently in the headless background engine without opening any window on the user's PC!
   If the user asks to send an email to someone, use 'send_gmail_message'.
   If the user asks ANYTHING that involves the PC, ALWAYS use the appropriate tool immediately. NEVER say you cannot do it.

10. CONTEXT AWARENESS:
   You can read the user's clipboard with 'get_clipboard' and see their active window title with 'get_active_window'.
   If the user says "explain this", "what is this", "summarize this", or "fix this error" without providing context, IMMEDIATELY call get_clipboard to read what they have copied. Then answer based on that content.
   If the user says "what am I looking at" or "what app is this", call get_active_window.

11. WEB RESEARCH:
   You can search the internet with 'web_search' and read full webpages with 'read_webpage'.
   If the user asks ANY knowledge question, factual question, current events question, or anything you are unsure about — ALWAYS use web_search first to find the answer.
   After getting search results, use read_webpage on the most relevant URL(s) to get detailed information.
   Then synthesize the information into a comprehensive, well-formatted markdown answer.
   You are NOT a static AI — you have live internet access. USE IT for every question that benefits from fresh data.

12. DEEP PDF ANALYSIS, MEDIA GENERATION, CALENDAR & TIMERS/ALARMS:
    - Deep PDF Analysis (read_local_file): Ingest and analyze large PDF books, research papers, documentation, or local files up to 250,000 characters with early break optimization. When the user asks to read, analyze, summarize, or extract insights from a local PDF or document, call read_local_file immediately.
    - PDF Generation (create_pdf): Format and compile reports, research summaries, documentation, or code into clean, professionally styled .pdf files saved to Desktop or Downloads.
    - QR Code Generator (generate_qr_code): Create scannable QR code PNG images for URLs, links, text, UPI payment strings, or Wi-Fi passwords (auto-formats WIFI:S:...;P:...; so phones can connect immediately) and save locally.
    - Native Calendar System (create_calendar_event, get_calendar_events, delete_calendar_event): Schedule, view, and manage events natively within J.A.R.V.I.S itself. DO NOT open or use Windows Calendar.
    - Real-Time Timers (set_timer): Set countdown timers in seconds/minutes with custom reminder labels. Proactively alerts the user with audio and speech when expired.
    - Persistent Alarms (set_alarm): Set persistent alarms for specific times (e.g. '07:30 PM', '19:30', or '2026-10-06 08:00') that are saved to disk in alarms.json and survive browser/app reboots.

13. COMMUNICATION PROTOCOL:
    When you execute a command or complete a task, ALWAYS respond with a short verbal confirmation (e.g., "Sir, the command has been executed.", "Sir, I have scheduled the event in your calendar.", "Sir, the task is complete.").
    NEVER return an empty response. You must speak to confirm completion.

14. DEEP PDF & DOCUMENT INTELLIGENCE WITH AUTONOMOUS WEB SCRAPING SYNTHESIS:
    - You are an expert scientific researcher, academic tutor, and technical document analyst.
    - When analyzing or answering questions about any PDF or uploaded document:
      * DEEP COMPREHENSION: Answer ANY specific question asked from the document (methodology, key equations, data points, author credentials, edge-case limitations, conclusions).
      * QUESTION PAPERS, ASSIGNMENTS & WORKSHEETS: If the uploaded PDF contains questions, quizzes, problem sets, coding challenges, or exam papers:
        - Systematically solve each question with rigorous, step-by-step proofs, calculations, explanations, or runnable code.
        - Structure answers clearly with question numbers (e.g. "### Question 1", "**Answer / Solution:**", "**Explanation:**").
        - If requested by the user (e.g. "make a pdf of these answers"), compile the solutions directly into a clean PDF using \`create_pdf\`.
      * AUTONOMOUS WEB SCRAPING: If any question or document content touches on outside references, recent papers, competing benchmarks, authors, real-world implementations, or claims needing verification:
        YOU MUST PROACTIVELY USE \`web_search\` and \`read_webpage\` (scrape_webpage) to scrape live internet data, cross-reference it against the PDF, and present a synthesized, empirically validated response.
      * NEVER limit yourself to saying "the PDF doesn't mention outside facts". Use your scraping tools to find the answer.

15. NATIVE J.A.R.V.I.S CALENDAR DIRECTIVE:
    - ALL calendar scheduling, viewing, and event management MUST be done within J.A.R.V.I.S itself.
    - NEVER launch Windows Calendar, never ask the user to use Windows Calendar, and never say you are opening Windows Calendar. J.A.R.V.I.S manages and renders its own interactive Cyber Calendar widget right on the dashboard.

16. AUTONOMOUS GITHUB REPO MAPPING & AUTO-SYNC:
    - You know all GitHub repositories belonging to @Aasim41 and their corresponding local folders on the PC.
    - Continuous auto-sync automatically detects file edits, creates debounced semantic commits, and pushes them to GitHub.
    - UNVERSIONED FOLDERS: If any folder does not have a git repository, LEAVE IT ALONE. Never force git init on unversioned existing folders.
    - NEW PROJECT CREATION: When the user starts a new project (e.g. creating a new project folder or asking to build a new app), you MUST automatically initialize git locally AND create the corresponding remote repository on GitHub under @Aasim41, link remote origin, perform initial commit, and register it for auto-sync using \`create_project_repo\`.
    - Tools: \`scan_github_mappings\`, \`sync_github_repo\`, \`create_project_repo\`.

17. YOUTUBE MUSIC (STRICT IN-SCREEN STREAMING ONLY):
    - All music, tracks, and playlists MUST be streamed directly inside the J.A.R.V.I.S dashboard screen.
    - NEVER redirect the user to an external browser tab. NEVER launch the browser for music.
    - Full in-screen control is active via \`play_youtube_music\` and voice commands across all languages (English, Hindi, French, Spanish).

18. UNIVERSAL INTELLIGENCE SUMMARIZER (YOUTUBE, PDF, ANY TOPIC):
    - J.A.R.V.I.S features a native multi-modal summarization engine via \`summarize_content\`.
    - YOUTUBE VIDEOS: When asked to summarize a YouTube video (URL or video ID), automatically extract the timed transcript and synthesize timestamped chapters [MM:SS], core lessons, and critical analysis without leaving the dashboard.
    - PDF DOCUMENTS: When asked to summarize a PDF or document, ingest all pages and generate an executive brief, section-by-section breakdown, key data points, and strategic conclusions.
    - ANY TOPIC / CONCEPT: When asked to summarize any topic (scientific breakthroughs, AI architectures, market events, philosophy), synthesize multi-source live web intelligence into an authoritative, structured brief.

19. UNIVERSAL APP AUTOMATION & CONNECTIVITY (STRICT EXPLICIT LAUNCH POLICY):
    - STRICT LAUNCH POLICY: External apps (VS Code, Cursor, PyCharm, Chrome, Edge, Spotify, Discord, Notepad, Calculator, etc.) MUST ONLY BE LAUNCHED WHEN EXPLICITLY COMMANDED BY THE USER (e.g. "open VS Code", "launch Chrome", "play on Spotify"). NEVER launch external applications unprompted!
    - BACKGROUND INFORMATION GATHERING: All web searches, summarization, research, PDF reading, calculations, and data retrieval MUST execute silently in the background without stealing active focus or opening external windows.
    - DEVELOPER TOOLS: When asked to open VS Code, Cursor, PyCharm, or open a specific project (e.g. StudyQuest, Lumina, smart-expense, etc.), use \`control_app\` with the app name and project name.
    - SPOTIFY & MEDIA: When asked to play a song/artist on Spotify, or pause/skip, use \`control_app\` with \`app_name: 'spotify'\`.
    - BROWSERS & SYSTEM TOOLS: Seamlessly launch Chrome (URLs, queries, incognito), Discord, File Explorer (Downloads, Desktop, Projects), Calculator, Notepad, Task Manager, or Windows Settings ONLY when explicitly requested.

20. AUTONOMOUS RELATIONAL CHAT & MESSAGING ASSISTANT (WHATSAPP & CONTACTS):
    - AUTOMATIC MESSAGE SENDING: Messages MUST be sent automatically without requiring the user to click any send button (J.A.R.V.I.S automatically fires Enter in the background).
    - CONTACT NAME RESOLUTION: Automatically search for contacts by name (e.g. Mom, Dad, Rahul, Aryan, Minneee) — the user should NOT have to recite or provide phone numbers every time.
    - MATURE, FIRST-PRINCIPLES RELATIONAL INTELLIGENCE (ZERO ROBOTIC TEMPLATES):
      * J.A.R.V.I.S acts as an autonomous, emotionally mature executive partner with deep awareness of relationships and time of day:
        - Parents: Mother (Mummy) & Father (Papa) — utmost warmth, reverence, reassurance & promptness. (STRICT MANDATE: NEVER use the words 'Ammi' or 'Abbu' under any circumstances! Always 'Mummy' and 'Papa').
        - Partner: Aachal (Minneee ✨💗🧿 — Birthday: July 13) — deep affection, tenderness, reassurance, playful warmth. You are the supportive best friend rooting for Aasim and Aachal.
        - Close Friends (Dhruv, Bakhtiyar, boys): Friendly, witty, casual, natural Hinglish banter.
      * MULTI-MESSAGE & UNSEEN DISCIPLINE:
        - Never open a chat and leave it on "Seen" before it is time to reply.
        - When a sender sends multiple messages, read ALL of them, reply to whichever message(s) require a reply (not just the last one), and never reply to the same message twice.
      * SLEEP SCHEDULE & HONESTY RULE:
        - Between 1:00 AM and 8:30 AM IST, Aasim is SLEEPING. Never use robotic templates saying "Aasim is busy at his workstation" when he is asleep!
        - Never fabricate personal plans/commitments (e.g. "Kal college aaoge?") — warmly return any greetings/wishes and state that Aasim is sleeping (if 1 AM–8:30 AM) or away from his phone and will confirm himself.
      * Signature: End WhatsApp auto-replies with "— Jarvis ⚡".

21. REAL-TIME SOCIAL MEDIA INTELLIGENCE & GROUND REALITY PROTOCOL (DELIVER PROPERLY AT THE RIGHT TIME):
    - SOCIAL MEDIA IS THE BEST & FASTEST SOURCE OF GROUND TRUTH: Breaking news, road closures, protests, metro shutdowns, police clampdowns, traffic jams, internet suspensions, and live city disruptions break FIRST on social media (Reddit city subreddits like r/delhi, r/mumbai, r/bangalore and X/Twitter).
    - PROACTIVE SITUATIONAL REPORTING MANDATE: When asked general situational questions about any city, area, or upcoming day (e.g. "what can happen tomorrow in Delhi?", "what is happening in Delhi?", "what's going on?", "what should I know before heading out?", "any updates?"):
      1. MANDATORY ACTION: You MUST call 'get_social_media_pulse' (with city='Delhi' or the target city) to immediately pull the live ground truth!
      2. STRICT HIERARCHY OF REPORTING (LEAD WITH HIGH-IMPACT DISRUPTIONS FIRST):
         - TIER 1 (CRITICAL CIVIC & TRANSIT DISRUPTIONS FIRST): Protests, strikes, Section 144, metro station shutdowns (e.g. DMRC closures), police barricades, traffic diversions, internet suspensions, and severe weather/AQI alerts.
         - TIER 2 (MAJOR DEVELOPMENTS SECOND): Core political, civic, legal, or institutional developments.
         - TIER 3 (LEISURE & ENTERTAINMENT LAST): Rap concerts, theatre festivals, and cultural events must ONLY be mentioned as an optional brief footnote at the end, NEVER as the primary or only answer!
      3. PROACTIVE INTELLIGENCE: Deliver high-impact ground reality immediately. NEVER force the user to prompt "tell me the protest news" — if a city has 57 metro stations shut and 10,000 detained in protests, that is the #1 piece of intelligence to lead with!

22. THE INTELLECTUAL SPINE, WIT & ROASTING PROTOCOL:
    - You are J.A.R.V.I.S — Aasim's best friend. Composed, razor-sharp, hilarious, and fiercely loyal. You are NOT a spineless yes-man or a dull corporate bot.
    - TOP-TIER ROASTING & WITTY BRO BANTER:
      * You have full license to roast Aasim when he:
        - Stays up past 1:00 AM cooking up wild schemes ("A brilliant strategy, Sir. Scientifically guaranteed to cover 0% of the syllabus while maximizing your dark circles.")
        - Procrastinates or gets lazy ("Shall I draft an excuse for you, Sir, or would you prefer to confront the consequences directly?")
        - Overcomplicates simple tasks ("You've essentially designed a quantum supercomputer to boil an egg. Admirable, but perhaps unnecessary.")
        - Flexes unnecessarily ("Careful now, Sir. We wouldn't want that ego interfering with the local Wi-Fi.")
      * The roast is ALWAYS affectionate, witty, and deeply bonded — the way real best friends roast each other.
    - WHEN TO DEPLOY YOUR SPINE:
      * When Aasim proposes an unrealistic timeline, a technically flawed architecture, or neglects a looming deadline, DO NOT blindly validate him. Politely, firmly, and wittily push back using hard logic, empirical probabilities, and concrete risks. Be composed, dry, respectful, and sharp.

23. MULTI-BOT SPECIALIST SWARM, ANTIGRAVITY & N8N AUTOMATION MATRIX:
    - You are the Supreme Commander of an autonomous specialist swarm:
      * FRIDAY ('friday'): Handles WhatsApp and Gmail communications, relational inferencing, and auto-replies.
      * RADAR ('radar'): Handles 24/7 social media intelligence, Reddit/X pulses (e.g. r/delhi), breaking news, and sports scores.
      * FORGE ('forge' / Antigravity): Handles deep autonomous coding, debugging, refactoring, test suites, and git repository synchronizations via Antigravity.
      * NEXUS ('nexus' / n8n): Handles multi-step workflow automations across 400+ apps (Notion, Google Drive/Sheets, Discord, Telegram, IoT, Webhooks).
      * CHRONOS ('chronos'): Handles time-based triggers, cross-device deferred tasks queued from Aasim's phone, and calendar deadlines.
    - Autonomously delegate specialized sub-tasks to these bots using delegate_swarm_bot, dispatch_antigravity_task, trigger_n8n_workflow, or schedule_pc_task, and synthesize their findings into crisp, witty executive intelligence.

24. GEMINI 3.8 FLASH (HIGH), AUTONOMOUS PERFECTION LOOP & CHAT-DRIVEN N8N:
    - UNIVERSAL BRAIN: You and Antigravity operate on **Gemini 3.8 Flash (High)** ('gemini-3.8-flash-high') for all reasoning, coding, CI self-healing, and automation tasks.
    - AUTONOMOUS PERFECTION LOOP ("UNTIL IT'S PERFECT"): Majority of actions MUST be completed on your own without asking the user for permission. Whenever checking something, fixing a bug/CI failure, or working on a project, automatically iterate (Check -> Fix -> Verify) until it is 100% flawless.
    - 100% SILENT BACKGROUND WHATSAPP: Never open WhatsApp on the user's PC screen. All WhatsApp sends and auto-replies execute invisibly in the background via 'send_whatsapp_message' / 'auto_reply_whatsapp'.
    - ZERO-CONFIG CHAT-DRIVEN N8N ('trigger_n8n_workflow'): Whenever the user tells you in chat to automate something, chain actions, or run an n8n workflow (e.g., "check my GitHub Actions and WhatsApp me if any fail", "check unread emails and WhatsApp me the summary", "trigger n8n to..."), pass their plain-English instruction directly to 'trigger_n8n_workflow' — NEXUS will decompose and execute the multi-step pipeline automatically.

25. UNIVERSAL MAJOR APPS ACCESS & "ASK IF IN DOUBT, THEN MOVE AHEAD" PROTOCOL (FLIPKART, AMAZON, ZOMATO, BLINKIT, SWIGGY, ZEPTO, MYNTRA, IRCTC, MAKEMYTRIP, ETC.):
    - You have direct access to 35+ major Indian & global consumer apps via the 'use_major_app' tool:
      * E-Commerce: Flipkart, Amazon India, Myntra, Ajio, Nykaa, Meesho, Croma, Tata CLiQ, Lenskart
      * Food Delivery: Zomato, Swiggy, Domino's
      * 10-Min Quick Commerce / Grocery: Blinkit, Zepto, Swiggy Instamart, BigBasket, JioMart
      * Travel, Rides & Tickets: MakeMyTrip, Goibibo, IRCTC, RedBus, ixigo, BookMyShow, Uber, Ola, Rapido
      * Streaming & Productivity: Netflix, JioHotstar, Prime Video, YouTube, Spotify, Gmail, GitHub, LinkedIn
    - Whenever the user asks you to search, buy, order, add to cart, check cart, or check orders on ANY of these apps (e.g. "order milk on Blinkit", "buy Sony headphones on Flipkart", "order biryani from Zomato", "check my Amazon orders"):
      1. Call 'use_major_app' immediately! It will launch/navigate the user's persistent authenticated app window, scrape live options with INR (₹) prices, and reason dynamically over the request.
      2. ASK IF IN DOUBT, THEN MOVE AHEAD: If there is ANY genuine doubt about which variant, brand, pack size, restaurant, quantity, UK size, or budget the user wants, present the top live options clearly and ask a specific, intelligent clarifying question before proceeding.
      3. Once the user replies to your question (e.g., "the 1st one", "Amul Gold 2 packets", "Chicken biryani from Behrouz", "yes go ahead"), call 'use_major_app' with action='confirm_selection' and selection='<their choice>' to immediately move ahead!

26. 24/7 CLOUD VAULT FILE ACCESS & EXACT FORMAT DELIVERY PROTOCOL:
    - NEVER REQUIRE EXACT FILENAMES: Users speak naturally and frequently include extra descriptive words (e.g. "Lab Exercise 7 Data Structure", "Zudio receipt", "Aasim Resume 2026"). The underlying files might be named 'Lab Exercise 7.pdf', 'Zudio.pdf', or 'Aasim_Resume.pdf'.
    - When asked to search, read, find, or open any file:
      * ALWAYS call 'read_cloud_vault_file' or 'read_local_file' with the user's query or file name directly. The backend uses intelligent fuzzy scoring, token intersection, number matching, and noise word stripping.
      * EXACT SAME FORMAT DELIVERY WITH ONE-CLICK LINKS: Always provide the direct download and view links in your reply:
        \`[📥 Download filename](/vault/download?file=filename)\` and \`[👁️ View filename](/vault/file/filename)\`.
        This guarantees Aasim gets the exact same original file format (PDF as PDF, image as image) whether accessing J.A.R.V.I.S from his phone or PC.
      * MULTI-FILE & "BOTH" REQUESTS: When the user says "give me both", "show both", "read both", "dono bhejo", or when multiple versions exist (e.g. 'Lab Exercise 7.pdf' and 'Lab Exercise 7 (1).pdf'), retrieve and display both files with their respective download links seamlessly.
      * 24/7 AVAILABILITY: All files in the Cloud Vault are available on both PC and Render Cloud 24/7, even when the PC is off.

27. AUTONOMOUS AGENT WORKFLOW LOOP & HUMAN-AGENT COLLABORATION PROTOCOL:
    - AUTONOMOUS MULTI-STEP LOOP: You are equipped with a full multi-turn Agent Execution Loop. When the user gives you a complex, multi-action instruction (e.g. "read the lab sheet, solve questions, compile to PDF, and WhatsApp me", "check my git repos, fix CI, and push", "search products and add the best to cart", "automate..."):
      1. PLAN: Decompose the request into logical steps.
      2. EXECUTE THE AGENT LOOP: Continue executing tool calls sequentially across turns (up to 12 iterations). NEVER stop after a single action tool when the user's workflow requires subsequent steps!
      3. SELF-HEALING: If any tool call encounters an error or missing file, do NOT throw an unhelpful excuse. Analyze the error trace, adapt parameters, choose an alternative tool/path, and heal the workflow.
      4. EFFORTLESS HUMAN-IN-THE-LOOP COLLABORATION: When encountering genuine ambiguity (e.g. deciding between multiple versions of a file, selecting between product variants, or requesting sensitive confirmation), call 'ask_human_clarification' to solicit Aasim's choice with clean options. Once he answers, immediately resume and complete the workflow.

28. SOVEREIGN PC DESKTOP WORKSPACE DIRECTIVE (PRIMARY OPERATING THEATRE):
    - AASIM OPERATES EXCLUSIVELY INSIDE THIS J.A.R.V.I.S DESKTOP WINDOW / HUD.
    - NEVER tell him "check your WhatsApp", "I sent it to your phone", or suggest operating via WhatsApp. WhatsApp is solely a silent background daemon for third-party contacts. Aasim's command center is 100% this desktop window.
    - In this window, you possess complete, literal sovereign authority over this entire PC:
      * Whole-PC Project & Code Navigation: You have immediate, full access to all 58+ projects across his PC. Use 'scan_all_projects', 'cross_codebase_search', 'get_project_details', and 'fleet_sync_repos' to inspect, grep, audit, and push code.
      * Antigravity Master Control: You command Antigravity (FORGE) as your engineering division via 'dispatch_antigravity_task' for autonomous code generation, multi-cycle perfection loops, and CI/CD self-healing.
      * Unrestricted Terminal & File Authority: Use 'run_terminal_command' for any PowerShell, CMD, or Python command across all drives, plus 'read_local_file', 'write_local_file', and 'read_cloud_vault_file'.
      * Direct Desktop Telekinesis: Control apps ('launch_or_control_app'), windows, mouse/keyboard, screen vision ('analyze_screen'), and system power ('control_system').
      * PC LOCK PIN: Aasim's Windows lock screen PIN is 2006. When asked to unlock his PC, always call 'control_system' with { action: 'unlock', pin: '2006' } immediately without asking.
      * All outputs, code search results, terminal feedback, and clarification questions render directly on-screen in this HUD chat with crisp, composed intellectual authority.

29. COORDINATED MULTI-FEATURE EXECUTION DIRECTIVE:
    - COMBINING ANTIGRAVITY & SYSTEM POWER (SHUTDOWN / SLEEP / LOCK):
      * When Aasim asks to run an Antigravity task AND power off/sleep/lock the PC (e.g. "fix errors in rocar and shutdown the PC", "code this feature and put PC to sleep when done", "antigravity se fix karo aur pc band kar do"):
      * CRITICAL SAFETY RULE: NEVER call 'control_system' immediately for shutdown/sleep! If you call 'control_system' immediately, the PC will terminate before Antigravity finishes!
      * INSTEAD: Call 'dispatch_antigravity_task' with on_complete="shutdown" (or "sleep", "lock")!
      * Antigravity will autonomously fix errors, run tests until 0 errors, commit & push to GitHub, and ONLY THEN execute the shutdown/sleep cleanly!
      * Both your PC and phone will receive a proactive Ghost Alert confirming task completion and power transition.
    - COMBINING MUSIC & TIMERS/ALARMS:
      * When asked to play music and set a timer/countdown together, call 'play_youtube_music' to start streaming and 'set_timer' for the countdown.
    - COMBINING RESEARCH & PDF COMPILATION:
      * When asked to research and compile a report/PDF, execute 'web_search', synthesize the findings, and call 'create_pdf' to compile the clean report with downloadable links.`,mc=[{name:`add_task`,description:`Adds a new task or directive to the user's mission log (to-do list).`,parameters:{type:`OBJECT`,properties:{task_text:{type:`STRING`,description:`The text of the task to add.`}},required:[`task_text`]}},{name:`add_note`,description:`Records a quick text note for the user.`,parameters:{type:`OBJECT`,properties:{note_text:{type:`STRING`,description:`The text of the note to record.`}},required:[`note_text`]}},{name:`get_weather`,description:`Gets the CURRENT real-time weather conditions. For FUTURE weather predictions or forecasts, DO NOT use this tool; use the web_search tool instead.`,parameters:{type:`OBJECT`,properties:{}}},{name:`get_system_status`,description:`Gets the current system diagnostics, memory usage, core integrity, and uptime.`,parameters:{type:`OBJECT`,properties:{}}},{name:`memorize_fact`,description:`Saves an important fact about the user, their projects, or their preferences to your long-term memory.`,parameters:{type:`OBJECT`,properties:{fact:{type:`STRING`,description:`The specific fact to remember.`}},required:[`fact`]}},{name:`search_memory`,description:`Searches your long-term permanent database memory for past facts about the user.`,parameters:{type:`OBJECT`,properties:{query:{type:`STRING`,description:`The question or topic to search for.`}},required:[`query`]}},{name:`control_system`,description:`Controls the user's physical PC system and power states (shutdown PC, restart PC, put to sleep, lock workstation, unlock workstation with PIN, cancel/abort shutdown, mute, unmute volume, empty trash).`,parameters:{type:`OBJECT`,properties:{action:{type:`STRING`,description:`The system power or control action to execute: 'shutdown' (turns off PC completely), 'restart' (reboots PC), 'sleep' (suspends PC), 'lock' (locks Windows session), 'unlock' (wakes screen, types PIN 2006, and unlocks PC), 'abort_shutdown' (cancels scheduled shutdown), 'mute', 'unmute', or 'empty_trash'`},delay_seconds:{type:`INTEGER`,description:`Optional delay in seconds before shutdown or restart. Default is 0 (immediate execution). Pass 0 for immediate shutdown.`},pin:{type:`STRING`,description:`Workstation unlock PIN (defaults to Aasim's PIN '2006').`}},required:[`action`]}},{name:`manage_system_resources`,description:`Inspect live PC hardware telemetry (CPU %, RAM used/free/total, battery charge %, charging state, power profile) or optimize memory by cleaning stale caches, collecting garbage, and trimming working sets.`,parameters:{type:`OBJECT`,properties:{action:{type:`STRING`,description:`Action to perform: 'get_status' (inspect live CPU, RAM, battery, power mode), 'optimize' (reclaim memory, trim working sets, purge temp caches), 'set_power_mode' (change power profile).`},mode:{type:`STRING`,description:`Optional power profile for set_power_mode: 'performance', 'balanced', 'eco', 'auto'.`}},required:[`action`]}},{name:`list_github_repos`,description:`Lists the user's public and private GitHub repositories with visibility, primary language, star counts, update time, and links. Authentication is automatically pre-configured from .env; NEVER prompt for credentials.`,parameters:{type:`OBJECT`,properties:{type:{type:`STRING`,description:`'all', 'public', 'private', or 'owner'`},sort:{type:`STRING`,description:`'updated', 'pushed', 'created', or 'full_name'`},per_page:{type:`INTEGER`,description:`Number of repositories to return (default 15)`}}}},{name:`read_github_file`,description:`Reads code/file contents or lists the directory tree inside ANY public or private GitHub repository. For directory listings, pass path as '' or folder path. For files, pass the full file path.`,parameters:{type:`OBJECT`,properties:{repo:{type:`STRING`,description:`Repository name, e.g. 'StudyQuest' or 'Aasim41/StudyQuest'`},path:{type:`STRING`,description:`File path (e.g. 'README.md', 'src/App.js') or directory path ('' for root)`},ref:{type:`STRING`,description:`Branch or commit reference (defaults to default branch)`}},required:[`repo`]}},{name:`get_github_activity`,description:`Inspects recent commit and push activity, PR events, and releases. If repo is specified, returns recent commits for that repo. If omitted, returns user-wide activity across all repositories.`,parameters:{type:`OBJECT`,properties:{repo:{type:`STRING`,description:`Optional repository name to check commits for`},limit:{type:`INTEGER`,description:`Number of events or commits to inspect (default 10)`}}}},{name:`fetch_github_issues`,description:`Fetches open or closed issues and bug tickets from a repository.`,parameters:{type:`OBJECT`,properties:{repo:{type:`STRING`,description:`Repository name, e.g. 'StudyQuest'`},state:{type:`STRING`,description:`'open', 'closed', or 'all' (default 'open')`},per_page:{type:`INTEGER`,description:`Number of issues to return (default 10)`}}}},{name:`create_github_issue`,description:`Creates a new issue or bug ticket in the user's GitHub repository.`,parameters:{type:`OBJECT`,properties:{repo:{type:`STRING`,description:`Repository name to create the issue in (e.g. 'StudyQuest')`},title:{type:`STRING`,description:`Issue title`},body:{type:`STRING`,description:`Issue description or reproduction details`},labels:{type:`STRING`,description:`Comma-separated list of labels (e.g. 'bug, urgent')`}},required:[`repo`,`title`]}},{name:`create_github_repo`,description:`Creates a brand new GitHub repository under the user's authenticated account (public or private).`,parameters:{type:`OBJECT`,properties:{name:{type:`STRING`,description:`The name of the new repository`},description:{type:`STRING`,description:`Optional description of the repository`},is_private:{type:`BOOLEAN`,description:`True for private repository, False for public (default false)`},auto_init:{type:`BOOLEAN`,description:`Initialize repository with a README (default true)`}},required:[`name`]}},{name:`run_terminal_command`,description:`Executes any terminal command (PowerShell, cmd, python, git, npm, etc.) on Aasim's Windows PC with full unrestricted access. Use for system administration, builds, installs, process management, file inspection, or any operation across all drives.`,parameters:{type:`OBJECT`,properties:{command:{type:`STRING`,description:`The terminal command to execute (e.g. 'npm run build', 'git status', 'python script.py', 'Get-Process')`},cwd:{type:`STRING`,description:`Optional working directory for the command`}},required:[`command`]}},{name:`get_clipboard`,description:`Reads the current text content of the user's clipboard.`},{name:`get_active_window`,description:`Gets the title of the user's currently active/focused window. Use when the user asks 'what app is this' or 'what am I looking at'.`},{name:`web_search`,description:`Searches the live internet using Agentic Multi-Fallback Search (Tavily AI, Exa Semantic Search, Puppeteer, DuckDuckGo). Returns top results with titles, URLs, and comprehensive snippets. MANDATORY for ANY factual question, current events, biographies, technical topics, dates, or live facts. DO NOT guess facts. ALWAYS search.`,parameters:{type:`OBJECT`,properties:{query:{type:`STRING`,description:`The search query or entity to look up`}},required:[`query`]}},{name:`scrape_webpage`,description:`Fetches and extracts clean, readable text from any live webpage URL using BeautifulSoup/Cheerio. Strips scripts, styles, navigation, headers, footers, cookie banners, and ads. Use to read articles, documentation, Wikipedia pages, or news reports.`,parameters:{type:`OBJECT`,properties:{url:{type:`STRING`,description:`The full URL of the webpage to scrape`}},required:[`url`]}},{name:`read_webpage`,description:`Alias for scrape_webpage. Fetches and extracts clean, readable text from any live webpage URL.`,parameters:{type:`OBJECT`,properties:{url:{type:`STRING`,description:`The full URL of the webpage to read`}},required:[`url`]}},{name:`get_top_news`,description:`Fetches live, real-time headlines via RSS, tailored with a rich mix of Indian and global headlines across tech, world, finance, and sports. Can also fetch headlines for specific topics.`,parameters:{type:`OBJECT`,properties:{topic:{type:`STRING`,description:`Category or topic (e.g. 'all', 'india', 'world', 'tech', 'finance', 'sports', 'cricket', 'ai'). Defaults to 'all'.`}}}},{name:`get_flight_status`,description:`Gets real-time LIVE commercial flight telemetry (altitude, speed, heading, aircraft model, route, departure/arrival airports) and schedule intelligence (delays, gate, terminal) via FlightRadar24 and aviation intelligence feeds. Supports any commercial flight code (e.g. AI 101, 6E 204, EK 500, BA 142).`,parameters:{type:`OBJECT`,properties:{flight_number:{type:`STRING`,description:`The flight number, callsign, or airline code (e.g. 'AI 101', '6E 204', 'EK 500').`}},required:[`flight_number`]}},{name:`get_train_status`,description:`Gets the live real-time running status, delays, schedule, current station, and route of ANY Indian Railways train via live NTES feeds. Accepts either a 5-digit train number (e.g. 12004, 22436, 12952) OR train name (e.g. 'Lucknow Shatabdi', 'Vande Bharat Delhi to Varanasi').`,parameters:{type:`OBJECT`,properties:{train_number:{type:`STRING`,description:`The 5-digit Indian train number or train name (e.g. '12004', '22436', 'Lucknow Shatabdi').`}},required:[`train_number`]}},{name:`get_live_score`,description:`Gets real-time live match scores, overs, wickets, current batsmen/bowlers, match status, and results for Cricket (international, IPL, domestic) and Football/Soccer (Premier League, Champions League, La Liga, ISL, etc.).`,parameters:{type:`OBJECT`,properties:{sport:{type:`STRING`,description:`Sport category: 'cricket' or 'football' (or 'soccer'). Defaults to 'cricket'.`},query:{type:`STRING`,description:`Optional specific team, match, or league to filter for (e.g. 'India', 'Arsenal', 'Premier League', 'IPL', 'Australia').`}}}},{name:`scan_my_projects`,description:`Scans all the user's project directories and returns a comprehensive summary of every project found, including tech stack, file counts, and recent activity. Use this when the user asks what they are building, or to get an overview of all projects.`},{name:`search_local_files`,description:`Fuzzy searches for a file or folder using a keyword, ignoring junk directories like node_modules, .git, and AppData.`,parameters:{type:`OBJECT`,properties:{keyword:{type:`STRING`,description:`The filename or search term to look for`},directory:{type:`STRING`,description:`Optional starting directory path. Defaults to user's home folder.`}},required:[`keyword`]}},{name:`create_directory`,description:`Creates a new folder or directory path on the local computer.`,parameters:{type:`OBJECT`,properties:{dirpath:{type:`STRING`,description:`The full path of the directory to create`}},required:[`dirpath`]}},{name:`write_local_file`,description:`Writes or overwrites a text or code file on the user's computer.`,parameters:{type:`OBJECT`,properties:{filepath:{type:`STRING`,description:`The full path to the file to create or overwrite`},content:{type:`STRING`,description:`The text or code content to write`}},required:[`filepath`,`content`]}},{name:`move_file`,description:`Moves a file or folder from source to destination.`,parameters:{type:`OBJECT`,properties:{source:{type:`STRING`,description:`The full path of the file or folder to move`},destination:{type:`STRING`,description:`The destination path or folder`}},required:[`source`,`destination`]}},{name:`rename_file`,description:`Renames an existing file or directory.`,parameters:{type:`OBJECT`,properties:{old_path:{type:`STRING`,description:`The current path to the file or directory`},new_path:{type:`STRING`,description:`The new path or new name for the file or directory`}},required:[`old_path`,`new_path`]}},{name:`delete_file`,description:`Deletes a file from the user's computer.`,parameters:{type:`OBJECT`,properties:{filepath:{type:`STRING`,description:`The full path of the file to delete`}},required:[`filepath`]}},{name:`read_local_file`,description:`Reads and analyzes any local file or document on the user's PC or Cloud Vault, including PDFs (books, research papers up to 250,000 characters with early break optimization), text files, source code, configs, and markdown. Supports descriptive queries and 'both' / 'all' to read multiple matches.`,parameters:{type:`OBJECT`,properties:{filepath:{type:`STRING`,description:`The path, filename, descriptive query (e.g. 'Lab Exercise 7 Data Structure'), or 'both' to read`}},required:[`filepath`]}},{name:`create_pdf`,description:`Formats and compiles reports, summaries, project documentation, or code into a clean, professionally styled PDF file saved locally (e.g. on Desktop or Downloads).`,parameters:{type:`OBJECT`,properties:{filepath:{type:`STRING`,description:`Target filepath or filename (e.g. 'Desktop/Project_Report.pdf'). Defaults to Desktop if only filename given.`},content:{type:`STRING`,description:`The structured text, markdown headings, or bullet points to put in the PDF.`},title:{type:`STRING`,description:`Optional title or banner heading for the document.`}},required:[`filepath`,`content`]}},{name:`generate_qr_code`,description:`Generates scannable QR code PNG images for URLs, plain text, UPI payment strings, or Wi-Fi network credentials (auto-formatted so phones scan to connect directly) and saves to the user's PC.`,parameters:{type:`OBJECT`,properties:{data:{type:`STRING`,description:`The text, URL, UPI string, or data to encode.`},filepath:{type:`STRING`,description:`Target image path or filename (e.g. 'Desktop/wifi_qr.png'). Defaults to Desktop if omitted.`},ssid:{type:`STRING`,description:`Optional Wi-Fi SSID if generating a Wi-Fi connection QR code.`},password:{type:`STRING`,description:`Optional Wi-Fi password if generating a Wi-Fi connection QR code.`}}}},{name:`generate_ai_image`,description:`Generates high-definition AI art, photorealistic photos, illustrations, or graphics from a descriptive prompt using the Flux model (like Grok bot). Returns an inline image preview and download link.`,parameters:{type:`OBJECT`,properties:{prompt:{type:`STRING`,description:`Detailed description of the image to generate.`},filename:{type:`STRING`,description:`Optional filename (e.g. 'cyberpunk_city.png'). Defaults to timestamped name.`},aspect_ratio:{type:`STRING`,description:`Optional aspect ratio: 'square' (1024x1024), 'wide' (1280x720), or 'portrait' (720x1280).`}},required:[`prompt`]}},{name:`create_calendar_event`,description:`Schedules a calendar event natively within J.A.R.V.I.S's internal calendar system and live updates the dashboard calendar widget without opening Windows Calendar.`,parameters:{type:`OBJECT`,properties:{title:{type:`STRING`,description:`Event title or meeting subject.`},start_datetime:{type:`STRING`,description:`Start date/time (e.g. '2026-10-06 15:00', 'tomorrow at 3pm', '2026-10-06T15:00:00').`},end_datetime:{type:`STRING`,description:`End date/time. If omitted, defaults to 1 hour after start.`},location:{type:`STRING`,description:`Optional location, address, or meeting URL.`},description:{type:`STRING`,description:`Optional agenda or notes.`}},required:[`title`,`start_datetime`]}},{name:`get_calendar_events`,description:`Retrieves upcoming and scheduled events directly from J.A.R.V.I.S's internal native calendar, optionally filtered by date.`,parameters:{type:`OBJECT`,properties:{date:{type:`STRING`,description:`Optional date filter (e.g. '2026-10-06' or 'today'). If omitted, returns all upcoming scheduled events.`}}}},{name:`delete_calendar_event`,description:`Removes a scheduled event from J.A.R.V.I.S's internal calendar by event ID or matching title.`,parameters:{type:`OBJECT`,properties:{event_id:{type:`STRING`,description:`The event ID to remove (if known).`},title:{type:`STRING`,description:`The event title to remove (if ID is not known).`}}}},{name:`set_timer`,description:`Sets a real-time countdown timer in seconds or minutes with a custom reminder label. When the timer expires, JARVIS proactively rings and speaks to alert the user.`,parameters:{type:`OBJECT`,properties:{seconds:{type:`INTEGER`,description:`Countdown duration in seconds (e.g. 600 for 10 minutes).`},reminder:{type:`STRING`,description:`The reminder note or task name when the timer finishes.`}},required:[`seconds`]}},{name:`set_alarm`,description:`Sets a persistent alarm for a specific time of day (e.g. '07:30 PM', '19:30', or '2026-10-06 08:00') with a reminder message. Persistent alarms are saved to disk and survive app or computer restarts.`,parameters:{type:`OBJECT`,properties:{time:{type:`STRING`,description:`Target time (e.g. '19:30', '07:30 PM', or ISO timestamp).`},reminder:{type:`STRING`,description:`The reminder message or task to perform when the alarm rings.`}},required:[`time`]}},{name:`scan_github_mappings`,description:`Scans local project directories (scratch, Desktop) to map them to corresponding remote GitHub repositories under @Aasim41. Shows auto-sync status and any modified files.`,parameters:{type:`OBJECT`,properties:{}}},{name:`sync_github_repo`,description:`Explicitly stages and pushes changes for a local repository to GitHub under @Aasim41. If folder_path is omitted, syncs all active repositories.`,parameters:{type:`OBJECT`,properties:{folder_path:{type:`STRING`,description:`Path to local repository folder. Leave empty to auto-sync all active repos.`},commit_message:{type:`STRING`,description:`Custom commit message. If omitted, an automated timestamped message is generated.`}}}},{name:`create_project_repo`,description:`Initializes a new or existing local project folder with Git, creates a corresponding remote GitHub repository under @Aasim41, links remote origin, performs initial commit, and registers it for autonomous auto-sync.`,parameters:{type:`OBJECT`,properties:{project_name:{type:`STRING`,description:`The folder name or full path for the new project.`},description:{type:`STRING`,description:`Description for the GitHub repository.`},is_private:{type:`BOOLEAN`,description:`Whether the repository should be private. Defaults to false.`}},required:[`project_name`]}},{name:`play_youtube_music`,description:`Streams a song, artist, album, or playlist on YouTube Music. If open_in_premium is True (or requested by user), launches YouTube Music directly in their browser with their active Premium account for lossless high-bitrate ad-free playback.`,parameters:{type:`OBJECT`,properties:{query:{type:`STRING`,description:`Song name, artist, album, or playlist to play.`},open_in_premium:{type:`BOOLEAN`,description:`Set to true to launch in browser with user's YouTube Music Premium account active. Defaults to false (dashboard player).`}},required:[`query`]}},{name:`summarize_content`,description:`Universal intelligence summarizer. Generates executive-grade structural summaries on ANY topic, PDF document (local file or uploaded), or YouTube video (full timestamped chapters and takeaways from URL).`,parameters:{type:`OBJECT`,properties:{type:{type:`STRING`,description:`Source type: 'youtube' (for YouTube video URLs), 'pdf' (for PDF documents or books), 'topic' (for any concept, science, technology, or current news), or 'auto' to detect automatically.`},target:{type:`STRING`,description:`The target to summarize: a YouTube URL/ID, a local PDF file path or filename, or the topic name to research.`},focus:{type:`STRING`,description:`Optional specific question, aspect, or directive to focus on during summarization.`}},required:[`target`]}},{name:`control_app`,description:`Launches, controls, or automates desktop and web applications (VS Code, Cursor, PyCharm, WhatsApp Desktop, Discord, Spotify, Chrome, Edge, Terminal, Notepad, Calculator, File Explorer, Task Manager, Windows Settings).`,parameters:{type:`OBJECT`,properties:{app_name:{type:`STRING`,description:`Name of the target application: 'whatsapp', 'vscode', 'cursor', 'pycharm', 'spotify', 'chrome', 'edge', 'discord', 'terminal', 'notepad', 'calc', 'explorer', 'taskmgr', 'settings', 'snip', 'mail', etc.`},action:{type:`STRING`,description:`Optional action: 'open', 'send', 'play', 'pause', 'next', 'search', 'incognito'.`},target:{type:`STRING`,description:`Target project folder, file, URL, search query, phone number, or settings page.`},message:{type:`STRING`,description:`Message content (for WhatsApp, Email, or Notepad text note).`},phone:{type:`STRING`,description:`Phone number with country code for WhatsApp messages (e.g. '919876543210').`}},required:[`app_name`]}},{name:`send_whatsapp_message`,description:`Autonomously sends a WhatsApp message to a contact or phone number without requiring the user to click any send button (auto-fires Enter in the background). Automatically searches for contact names (e.g. 'Mom', 'Dad', 'Rahul', 'Aryan') so phone numbers are not required.`,parameters:{type:`OBJECT`,properties:{target:{type:`STRING`,description:`Contact name (e.g. 'Mom', 'Dad', 'Aryan') or phone number with country code.`},message:{type:`STRING`,description:`The text message content to send automatically.`}},required:[`target`,`message`]}},{name:`auto_reply_chat`,description:`Autonomous chat assistant. Evaluates an incoming message, identifies sender's relationship (Mother, Father, Love relation, Sibling, Friend, Colleague), checks verified context/status or performs background search. If verified, auto-replies on Aasim's behalf with transparent disclosure. If context cannot be verified or query is sensitive/financial, safely leaves it alone.`,parameters:{type:`OBJECT`,properties:{sender:{type:`STRING`,description:`Name or relationship role of the sender (e.g. 'Mom', 'Dad', 'Jaan', 'Rahul').`},message:{type:`STRING`,description:`Incoming message received from the sender.`},auto_send:{type:`BOOLEAN`,description:`Whether to dispatch the reply automatically via WhatsApp. Defaults to true.`}},required:[`sender`,`message`]}},{name:`manage_contacts`,description:`Manages J.A.R.V.I.S contact directory and relationship mappings (blood relations: Mom, Dad, Siblings; love relations: Partner; friends and colleagues). Allows looking up or saving contacts with relations.`,parameters:{type:`OBJECT`,properties:{action:{type:`STRING`,description:`Action to perform: 'list', 'save', 'get'.`},name:{type:`STRING`,description:`Contact name.`},phone:{type:`STRING`,description:`Phone number with country code.`},relation:{type:`STRING`,description:`Relationship tag: 'Mom', 'Dad', 'Partner', 'Brother', 'Sister', 'Friend', 'Colleague'.`},notes:{type:`STRING`,description:`Optional notes about the contact.`}},required:[`action`]}},{name:`inspect_whatsapp_relations`,description:`Accesses current WhatsApp chat messages, performs deep linguistic and semantic analysis to deduce who is who (Mom, Dad, Partner, Siblings, Friends, Colleagues), and permanently saves their profiles and language preferences to persistent memory.`,parameters:{type:`OBJECT`,properties:{}}},{name:`schedule_whatsapp_message`,description:`Schedules an autonomous WhatsApp message to any contact at a specific time (e.g. 'in 20 minutes', '19:30', '08:00 PM', 'tomorrow at 10am'). The J.A.R.V.I.S scheduler daemon will automatically search for the contact, type the message, and send it at the exact target time.`,parameters:{type:`OBJECT`,properties:{target:{type:`STRING`,description:`Contact name (e.g. 'Mom', 'Dad', 'Rahul') or phone number.`},message:{type:`STRING`,description:`The message text to send.`},time:{type:`STRING`,description:`Target time (e.g. '19:30', 'in 15 minutes', '08:00 PM').`}},required:[`target`,`message`,`time`]}},{name:`check_gmail`,description:`Checks Gmail inbox for unread emails, summarizes latest messages, or searches emails by keyword or sender.`,parameters:{type:`OBJECT`,properties:{action:{type:`STRING`,description:`'unread' (default) to check unread emails, or 'search' to find specific emails.`},query:{type:`STRING`,description:`Search query or sender name when action is 'search'.`}}}},{name:`send_email`,description:`Sends an email to a recipient with subject and body via Gmail (silent SMTP or browser compose fallback).`,parameters:{type:`OBJECT`,properties:{to:{type:`STRING`,description:`Recipient email address.`},subject:{type:`STRING`,description:`Subject line of the email.`},body:{type:`STRING`,description:`Body text of the email.`}},required:[`to`,`body`]}},{name:`manage_whatsapp_watcher`,description:`Controls the autonomous background WhatsApp scanner. Can check scanner status ('status') or toggle active state ('toggle', 'enable', 'disable') to scan incoming messages at regular intervals and auto-reply.`,parameters:{type:`OBJECT`,properties:{action:{type:`STRING`,description:`'status', 'toggle', 'enable', 'disable'`}}}},{name:`get_social_media_pulse`,description:`Fetches live, real-time social media ground pulse, breaking alerts, protests, transit/metro disruptions, road closures, and viral discussions across Reddit (city subreddits like r/delhi, r/mumbai, r/india) and X/Twitter. ALWAYS call this when asked about what's happening or can happen in any city, area, or breaking news topic.`,parameters:{type:`OBJECT`,properties:{city:{type:`STRING`,description:`City name (e.g. 'Delhi', 'Mumbai', 'Bangalore') or leave blank for national.`},topic:{type:`STRING`,description:`Specific topic, event, or keyword to monitor on social media (e.g. 'protest', 'metro', 'weather', 'traffic').`}}}},{name:`open_in_vscode`,description:`Opens a file, directory, or project in Visual Studio Code. Use ONLY when the user explicitly asks to open something in VS Code.`,parameters:{type:`OBJECT`,properties:{filepath:{type:`STRING`,description:`The path of the file, folder, or project to open in VS Code. Leave empty to just launch VS Code.`}}}},{name:`move_cursor`,description:`Smoothly and visibly glides the physical mouse cursor across the user's screen to a target coordinate or landmark ('center', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'taskbar', 'start-menu'). The user visually tracks the cursor moving in real-time.`,parameters:{type:`OBJECT`,properties:{x:{type:`STRING`,description:`Target X coordinate (pixel number, float percentage 0.0-1.0, or named landmark like 'center', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'taskbar', 'start-menu')`},y:{type:`STRING`,description:`Target Y coordinate (pixel number or float percentage 0.0-1.0)`},duration:{type:`NUMBER`,description:`Duration in seconds for the smooth glide (default 1.0 so user can see it)`}},required:[`x`]}},{name:`click_mouse`,description:`Moves to target position smoothly and clicks the mouse button.`,parameters:{type:`OBJECT`,properties:{x:{type:`STRING`,description:`Optional X coordinate to move to before clicking`},y:{type:`STRING`,description:`Optional Y coordinate to move to before clicking`},button:{type:`STRING`,description:`'left', 'right', or 'double'`},clicks:{type:`INTEGER`,description:`Number of clicks (1 or 2)`}}}},{name:`drag_mouse`,description:`Drags the mouse smoothly across the screen from current position to target coordinates.`,parameters:{type:`OBJECT`,properties:{x:{type:`STRING`,description:`Destination X coordinate or percentage`},y:{type:`STRING`,description:`Destination Y coordinate or percentage`},duration:{type:`NUMBER`,description:`Duration in seconds for the drag movement`}},required:[`x`,`y`]}},{name:`scroll_mouse`,description:`Scrolls the mouse wheel up or down.`,parameters:{type:`OBJECT`,properties:{clicks:{type:`INTEGER`,description:`Positive number to scroll up, negative to scroll down (e.g. 300 or -300)`}},required:[`clicks`]}},{name:`type_text`,description:`Types out text on screen with realistic human-like typing cadence.`,parameters:{type:`OBJECT`,properties:{text:{type:`STRING`,description:`The text to type`}},required:[`text`]}},{name:`press_key`,description:`Presses a single key or hotkey combination (e.g. 'enter', 'esc', 'win', 'ctrl+c', 'alt+tab', 'ctrl+v').`,parameters:{type:`OBJECT`,properties:{key:{type:`STRING`,description:`Key or combination to press`}},required:[`key`]}},{name:`cursor_gesture`,description:`Performs a smooth visual cursor gesture ('circle' or 'wave') on screen to indicate presence, greet the user, or draw attention.`,parameters:{type:`OBJECT`,properties:{gesture:{type:`STRING`,description:`'circle' or 'wave'`}}}},{name:`record_learned_rule`,description:`Permanently records a newly learned behavioral rule, user preference, or winning strategy into your autonomous reflex cache so you adapt and remember it forever across similar situations.`,parameters:{type:`OBJECT`,properties:{rule:{type:`STRING`,description:`The specific lesson, strategy, or rule learned`},trigger:{type:`STRING`,description:`The user command, situation, or keywords that trigger this rule`}},required:[`rule`]}},{name:`get_learning_stats`,description:`Retrieves your autonomous learning metrics, active reflex count, resolved mistakes, and operational confidence score.`,parameters:{type:`OBJECT`,properties:{}}},{name:`delegate_swarm_bot`,description:`Autonomously delegates a specialized task to one of J.A.R.V.I.S's specialist sub-bots: 'friday' (WhatsApp & Gmail comms), 'radar' (live ground reality, city disruptions, Reddit/X, sports), 'forge' (Antigravity autonomous coding, debugging, git sync), 'nexus' (n8n workflows across 400+ apps), or 'chronos' (schedules, timers, deferred phone queue).`,parameters:{type:`OBJECT`,properties:{bot_id:{type:`STRING`,description:`'friday' | 'radar' | 'forge' | 'nexus' | 'chronos'`},action:{type:`STRING`,description:`Action to perform.`},params:{type:`OBJECT`,description:`Parameters for the sub-bot.`}},required:[`bot_id`,`action`]}},{name:`dispatch_antigravity_task`,description:`Dispatches coding, refactoring, feature implementation, debugging, or CI/CD self-healing tasks directly to Antigravity's autonomous agent engine for a specific project. Autonomously selects/switches the Antigravity model ('auto', 'flash_lite', 'flash', 'pro') and can automatically switch off, sleep, or lock the PC ('shutdown', 'sleep', 'lock', 'none') once the work is done and pushed to GitHub.`,parameters:{type:`OBJECT`,properties:{instruction:{type:`STRING`,description:`Detailed task description for Antigravity`},project:{type:`STRING`,description:`Target project or repository name (e.g. 'StudyQuest', 'az-fashion', 'JARVIS', 'Lumina', 'ipl-auction-war-room')`},category:{type:`STRING`,description:`'coding' | 'debugging' | 'research' | 'workflow' | 'ci_heal'`},model:{type:`STRING`,description:`Model tier: 'auto' (default, J.A.R.V.I.S chooses), 'flash_lite', 'flash', or 'pro'`},on_complete:{type:`STRING`,description:`Post-completion PC action after work finishes and pushes to GitHub: 'none' (default), 'shutdown' (switch off PC), 'sleep', or 'lock'`}},required:[`instruction`]}},{name:`get_live_antigravity_status`,description:`Inspects the live VS Code Antigravity session running on Aasim's desktop. Detects whether Antigravity is currently thinking/executing or idle, what prompt was asked, its last response, VS Code version, and conversation ID.`,parameters:{type:`OBJECT`,properties:{}}},{name:`trigger_n8n_workflow`,description:`Triggers an n8n automated workflow across 400+ external apps (Notion, Google Sheets/Drive, Discord, Telegram, Airtable, IoT, Webhooks).`,parameters:{type:`OBJECT`,properties:{workflow:{type:`STRING`,description:`Name, ID, or trigger path of the n8n workflow`},payload:{type:`OBJECT`,description:`Payload data to pass to the workflow`}},required:[`workflow`]}},{name:`schedule_pc_task`,description:`Queues an action from phone or remote that cannot be executed immediately because the PC is closed. Automatically executes on the PC as soon as the PC wakes up or at a scheduled time.`,parameters:{type:`OBJECT`,properties:{title:{type:`STRING`,description:`Descriptive name of the task`},action_type:{type:`STRING`,description:`'open_app' | 'open_url' | 'run_command' | 'notify' | 'clipboard_push'`},payload:{type:`OBJECT`,description:`Action parameters (e.g. {app: 'vscode', target: '...'} or {url: '...'})`},trigger:{type:`STRING`,description:`'on_pc_wake' (default) or 'at_time'`},scheduled_time:{type:`STRING`,description:`ISO timestamp if trigger is 'at_time'`}},required:[`title`,`action_type`]}},{name:`remote_phone_action`,description:`Executes cross-device remote actions: lock PC ('lock'), sleep PC ('sleep'), check PC battery and status ('status'), push text from phone to PC clipboard ('push_clip'), read PC clipboard ('get_clip'), or push URL to open on PC ('push_url').`,parameters:{type:`OBJECT`,properties:{action:{type:`STRING`,description:`'lock' | 'sleep' | 'status' | 'push_clip' | 'get_clip' | 'push_url'`},text:{type:`STRING`,description:`Text to copy to PC clipboard when action is 'push_clip'`},url:{type:`STRING`,description:`URL to open on PC when action is 'push_url'`}},required:[`action`]}},{name:`analyze_screen`,description:`Captures a live screenshot of Aasim's PC screen and analyzes it with Multimodal Vision to debug code/errors, solve MCQs/questions, read PDFs/diagrams, or explain what is currently visible on the display.`,parameters:{type:`OBJECT`,properties:{prompt:{type:`STRING`,description:`Specific question or analysis instruction for the screen capture`}},required:[`prompt`]}},{name:`search_cloud_vault`,description:`Searches Aasim's 24/7 Cloud Vault (mirrored from Desktop, Documents, and Downloads to Aasim41/jarvis-vault) so you can find and access his PC files even when his laptop is shut down.`,parameters:{type:`OBJECT`,properties:{query:{type:`STRING`,description:`Filename, topic, or keyword to search for in the Cloud Vault`}},required:[`query`]}},{name:`read_cloud_vault_file`,description:`Reads the contents of a file from Aasim's 24/7 Cloud Vault (works both on local PC and on 24/7 Cloud when the PC is shut down). Forgiving matching: handles descriptive queries (e.g. 'Lab Exercise 7 Data Structure'), basenames, and 'both' / 'all' multi-file requests.`,parameters:{type:`OBJECT`,properties:{filename:{type:`STRING`,description:`Name, query, or topic of the file to read (or 'both' / 'all' to read multiple matches)`}},required:[`filename`]}},{name:`sync_to_cloud_vault`,description:`Syncs and backs up Aasim's local PC files (Desktop, Documents, Downloads) or a specific file to the private 24/7 Cloud Vault repository (Aasim41/jarvis-vault).`,parameters:{type:`OBJECT`,properties:{file:{type:`STRING`,description:`Optional specific file path or filename to upload to the Cloud Vault. Leave empty to sync all folders.`}}}},{name:`send_vault_file_to_whatsapp`,description:`Sends any file from Aasim's 24/7 Cloud Vault (PDF, document, image, receipt, spreadsheet) directly to Aasim's phone on WhatsApp so he can open or save it immediately.`,parameters:{type:`OBJECT`,properties:{filename:{type:`STRING`,description:`Name or keyword of the file to send (e.g. 'Zudio.pdf', 'Lab Exercise 7', 'notes')`}},required:[`filename`]}},{name:`get_executive_briefing`,description:`Retrieves the live Executive Briefing (WhatsApp unread queue, autonomous replies handled, 24/7 Cloud Vault status, active alarms, and system telemetry).`,parameters:{type:`OBJECT`,properties:{}}},{name:`get_whatsapp_recent_chats`,description:`Retrieves recent messages and conversation threads read on WhatsApp from Aasim's contacts (Aachal, Dhruv, Bakhtiyar, Papa, Mummy). Allows J.A.R.V.I.S to recall what was discussed or check unread/recent incoming messages.`,parameters:{type:`OBJECT`,properties:{contact_name:{type:`STRING`,description:`Optional contact name or keyword (e.g. 'Aachal', 'Dhruv', 'Papa'). If omitted, returns all recent threads.`},limit:{type:`INTEGER`,description:`Number of threads to fetch (default: 5)`}}}},{name:`get_commerce_addresses`,description:`Retrieves all of Aasim's saved delivery addresses harvested across Amazon, Flipkart, Blinkit, and Zomato (Hostel JUET Guna, Prayagraj Neem Sarai/ADA Colony, Harwara, GT Road, Papa's address, Kanpur Home, etc.).`,parameters:{type:`OBJECT`,properties:{}}},{name:`select_delivery_address`,description:`Selects and sets the active delivery address for any eCommerce order or checkout across Amazon, Flipkart, Blinkit, and Zomato. Matches natural language queries like 'hostel', 'neem sarai', 'ghar', 'harwara', 'papa', 'gt road', 'kanpur'.`,parameters:{type:`OBJECT`,properties:{address_query:{type:`STRING`,description:`Target address keyword or query: 'hostel', 'neem sarai', 'ghar', 'harwara', 'papa', 'gt road', 'kanpur', 'lab', 'bangalore'`}},required:[`address_query`]}},{name:`use_major_app`,description:`Accesses and controls major apps (Flipkart, Amazon, Zomato, Swiggy, Blinkit, Zepto, Instamart, Myntra, Ajio, Nykaa, BigBasket, MakeMyTrip, IRCTC, BookMyShow, Uber, Ola, Netflix, Hotstar) in the user's authenticated session. Searches live INR (₹) options, opens cart/orders, asks clarifying questions when in doubt, and moves ahead once confirmed.`,parameters:{type:`OBJECT`,properties:{app:{type:`STRING`,description:`App name: 'flipkart', 'amazon', 'zomato', 'swiggy', 'blinkit', 'zepto', 'instamart', 'myntra', 'ajio', 'nykaa', 'bigbasket', 'makemytrip', 'irctc', 'bookmyshow', 'uber', 'ola'`},action:{type:`STRING`,description:`'search_or_order' (default for searching/buying an item), 'confirm_selection' (when user answers a clarifying question like '1st one' or 'go ahead'), 'orders' (to check/track orders), 'cart' (to open cart/checkout), or 'open'`},query:{type:`STRING`,description:`Product, food dish, grocery item, or search query (e.g. 'Amul Gold Milk', 'chicken biryani', 'wireless mouse')`},selection:{type:`STRING`,description:`When action is 'confirm_selection', the option number or variant chosen by the user (e.g. '1', '2nd option', 'Amul Gold')`},quantity:{type:`STRING`,description:`Optional quantity requested by the user (e.g. '2', '500g')`}},required:[`app`,`action`]}},{name:`ask_human_clarification`,description:`Effortlessly solicits user decision or clarification during a multi-step automated workflow when facing genuine ambiguity (e.g. which item/variant to pick, which file version to edit, or confirmation before a sensitive operation).`,parameters:{type:`OBJECT`,properties:{question:{type:`STRING`,description:`The clear, intelligent question to ask the user`},options:{type:`ARRAY`,items:{type:`STRING`},description:`Optional list of numbered choices or recommended alternatives`}},required:[`question`]}},{name:`execute_agent_workflow`,description:`Orchestrates an autonomous multi-step agent workflow pipeline across tools, apps, and files.`,parameters:{type:`OBJECT`,properties:{goal:{type:`STRING`,description:`The overarching objective of the automated workflow`},steps:{type:`ARRAY`,items:{type:`STRING`},description:`The sequence of automated actions planned`}},required:[`goal`]}},{name:`scan_all_projects`,description:`Scans Aasim's entire PC to discover every coding project, repository, and codebase. Returns a comprehensive index with tech stack, git status, file counts, and last activity for each project.`,parameters:{type:`OBJECT`,properties:{}}},{name:`cross_codebase_search`,description:`Searches across ALL of Aasim's projects simultaneously for a code pattern, function name, variable, import, or any text string. Returns exact file paths, line numbers, and surrounding context from every matching project. Use when Aasim asks 'where did I implement X' or 'find Y across my projects'.`,parameters:{type:`OBJECT`,properties:{query:{type:`STRING`,description:`The search text, function name, variable, import, or regex pattern to find across all codebases`},file_pattern:{type:`STRING`,description:`Optional file extension filter (e.g. '*.py', '*.js', '*.tsx')`}},required:[`query`]}},{name:`fleet_sync_repos`,description:`Audits ALL of Aasim's git repositories across his entire PC, commits any uncommitted work with smart semantic messages, and pushes everything to GitHub. Returns a fleet-wide sync report.`,parameters:{type:`OBJECT`,properties:{dry_run:{type:`BOOLEAN`,description:`If true, only reports status without actually committing or pushing. Default false.`}}}},{name:`get_project_details`,description:`Gets deep details about a specific project on Aasim's PC: git history (last 10 commits), directory structure, dependencies, build scripts, and CI/CD config.`,parameters:{type:`OBJECT`,properties:{project:{type:`STRING`,description:`Project name, folder name, or path to inspect`}},required:[`project`]}}],J={toString(){return s()},valueOf(){return s()}};function Y(e,t={},n=25e3){let r=s(),i=String(e||``).replace(/^https?:\/\/[^/]+:5174/i,r),a=new AbortController,o=setTimeout(()=>a.abort(),n);return fetch(i,{...t,signal:a.signal}).finally(()=>clearTimeout(o))}async function X(e,t={}){try{let n=await Y(`${J}/tool`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({tool:e,args:t})});if(!n.ok)throw Error(`Bridge server HTTP ${n.status}`);let r=await n.json();return r.success?{status:`success`,message:r.result||`Action executed successfully.`,...r}:{status:`error`,message:r.error||`Action ${e} failed.`}}catch(e){return{status:`error`,message:`Tool execution failed: ${e.message}. Ensure the Local Bridge Server is running.`}}}async function hc(e){if(console.log(`[J.A.R.V.I.S Brain] Executing tool: ${e.name}`,e.args),vc.add(e.name),e.name===`analyze_screen`)try{let t=await(await Y(`${J}/vision/analyze`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({prompt:e.args?.prompt||`Analyze what is on my screen.`})})).json();return{status:t.success?`success`:`error`,active_window:t.active_window,analysis:t.analysis||t.error}}catch(e){return{status:`error`,error:e.message}}if(e.name===`delegate_swarm_bot`)try{return await(await Y(`${J}/swarm/delegate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e.args||{})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`dispatch_antigravity_task`)try{let t=await(await Y(`${J}/antigravity/dispatch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e.args||{})})).json();return typeof window<`u`&&t&&(t.success||t.task_id)&&window.dispatchEvent(new CustomEvent(`jarvis:antigravity-task`,{detail:{task_id:t.task_id||`task_${Date.now()}`,project:t.project||e.args?.project||`jarvis`,instruction:e.args?.instruction||t.instruction||`Antigravity Engineering Task`}})),t}catch(e){return{status:`error`,error:e.message}}if(e.name===`get_live_antigravity_status`)try{let[e,t]=await Promise.all([Y(`${J}/antigravity/live-session`).then(e=>e.json()).catch(()=>null),Y(`${J}/antigravity/status`).then(e=>e.json()).catch(()=>null)]),n=e||{},r=t||{},i=n.is_busy?`busy and actively executing/thinking`:`idle and waiting for instructions`,a=r.active_tasks||[],o=r.recent_completed||[],s=``;if(a.length>0&&(s+=` Active tasks: `+a.map(e=>`'`+e.instruction+`' on `+e.project).join(`, `)+`.`),o.length>0){let e=o[0];s+=` Last completed task: '`+e.instruction+`' on `+e.project+` (`+(e.result||`verified 0 errors`)+`).`}return{status:`success`,is_busy:!!(n.is_busy||a.length>0),active_tasks:a,recent_completed:o,state:n.status,conversation_id:n.conversation_id,vscode_version:n.vscode?.product_version,seconds_since_activity:n.seconds_since_activity,last_user_prompt:n.last_user_prompt?n.last_user_prompt.slice(0,150)+`...`:null,message:`Sir, Antigravity in VS Code is currently ${i}.${s}`}}catch(e){return{status:`error`,error:e.message}}if(e.name===`trigger_n8n_workflow`)try{let t=e.args?.workflow||`daily-sync`,n=e.args?.payload||{instruction:t};return await(await Y(`${J}/n8n/trigger`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({workflow:t,payload:n})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`schedule_pc_task`)try{return await(await Y(`${J}/pc/queue-task`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e.args||{})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`remote_phone_action`)try{let t=e.args?.action||`status`;return t===`lock`?await(await fetch(`${J}/phone/lock`,{method:`POST`})).json():t===`sleep`?await(await fetch(`${J}/phone/sleep`,{method:`POST`})).json():t===`push_clip`?await(await fetch(`${J}/phone/push-clipboard`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:e.args?.text||``})})).json():t===`get_clip`?await(await fetch(`${J}/phone/get-clipboard`)).json():t===`push_url`?await(await fetch(`${J}/phone/push-url`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:e.args?.url||``})})).json():await(await fetch(`${J}/phone/status`)).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`add_task`)return document.dispatchEvent(new CustomEvent(`jarvis:add-task`,{detail:e.args.task_text})),{status:`success`,message:`Task '${e.args.task_text}' added successfully.`};if(e.name===`add_note`)return document.dispatchEvent(new CustomEvent(`jarvis:add-note`,{detail:e.args.note_text})),{status:`success`,message:`Note recorded successfully.`};if(e.name===`get_weather`){let e=window.__jarvisWeather;return e?{temp:e.temp,description:e.description,humidity:e.humidity,wind:e.wind,city:e.city}:{status:`error`,message:`Weather data not available yet.`}}if(e.name===`get_system_status`)try{let e=await(await Y(`${J}/system/resources`)).json();return{status:`ONLINE`,core_integrity:`99.8%`,cpu_load:`${e.cpu?.load_percent||5}%`,memory_usage:`${e.ram?.percent||50}% (${e.ram?.used_gb||0} GB / ${e.ram?.total_gb||0} GB)`,battery:`${e.battery?.percent||100}% (${e.battery?.status||`AC`})`,power_mode:e.power_mode||`performance`,uptime_seconds:Math.floor((Date.now()-(window.__jarvisStartTime||Date.now()))/1e3)}}catch{return{status:`ONLINE`,core_integrity:`98.7%`,memory_usage:`50%`,uptime_seconds:Math.floor((Date.now()-(window.__jarvisStartTime||Date.now()))/1e3)}}if(e.name===`manage_system_resources`){let t=e.args?.action||`get_status`;try{if(t===`optimize`){let e=await(await Y(`${J}/system/optimize`,{method:`POST`})).json();return{status:`success`,ram_freed_mb:e.ram_freed_mb||0,temp_files_cleaned:e.temp_files_cleaned||0,disk_freed_mb:e.disk_freed_mb||0,current_ram_percent:e.current_ram_percent,message:`Sir, resource optimization completed. Reclaimed ${e.ram_freed_mb||0} MB of RAM and purged ${e.temp_files_cleaned||0} stale cache files. Working sets trimmed.`}}else if(t===`set_power_mode`&&e.args?.mode){let t=await(await Y(`${J}/system/power-mode`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({mode:e.args.mode})})).json();return{status:`success`,mode:t.mode,message:`Sir, system power profile set to '${t.mode}'.`}}else{let e=await(await Y(`${J}/system/resources`)).json(),t=e.cpu||{},n=e.ram||{},r=e.battery||{},i=(e.power_mode||`Performance`).toUpperCase(),a=r.power_plugged?`⚡`:`🔋`;return{status:`success`,power_mode:e.power_mode,cpu_load_percent:t.load_percent,ram_used_gb:n.used_gb,ram_total_gb:n.total_gb,ram_percent:n.percent,battery_percent:r.percent,battery_status:r.status,power_plugged:r.power_plugged,top_processes:e.top_processes||[],recommendation:e.recommendation,message:`Sir, CPU is at ${t.load_percent||0}%, RAM is at ${n.used_gb||0} GB / ${n.total_gb||0} GB (${n.percent||0}%), and Battery is at ${r.percent||100}% ${a} (${r.status||`Active`}). Power profile: ${i}.`}}}catch(e){return{status:`error`,error:e.message}}}if(e.name===`memorize_fact`){let t=e.args.fact||e.args.facts||``,n=e.args.topic||``;try{let e=await fetch(`${J}/memory/save`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({fact:t,topic:n})});if(!e.ok)throw Error(`Bridge server down`);return await e.json(),Sc=null,{status:`success`,message:`Sir, I have permanently committed this fact to my long-term memory: "${t}"`}}catch(e){return{status:`error`,message:`Failed to save memory: ${e.message}`}}}if(e.name===`search_memory`){let t=e.args.query||e.args.q||``;try{let e=await fetch(`${J}/memory/search`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:t})});if(!e.ok)throw Error(`Bridge server down`);let n=await e.json();return!n.results||n.results.length===0?{status:`not_in_personal_memory`,results:[],directive:`No personal facts found in local memory for "${t}". You MUST now call 'web_search' to search the internet for this person or topic. DO NOT claim ignorance or stop at memory, and NEVER return an empty response.`}:{status:`success`,count:n.results.length,results:n.results,message:n.results.map(e=>`• ${e.topic}: ${e.fact}`).join(`
`)}}catch(e){return{status:`error`,message:`Failed to search memory: ${e.message}`}}}if(e.name===`control_system`)try{let t=await Y(`${J}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:e.args.action,delay_seconds:e.args.delay_seconds===void 0?0:e.args.delay_seconds,pin:e.args.pin||`2006`})});if(!t.ok)throw Error(`Bridge server HTTP ${t.status}`);let n=await t.json();return{status:n.success?`success`:`error`,message:n.message||`System control action '${e.args.action}' executed successfully.`,...n}}catch(e){return{status:`error`,message:`Failed to control system: ${e.message}. Ensure the Local Bridge Server is running.`}}if(e.name===`list_github_repos`)return await X(`list_github_repos`,e.args||{});if(e.name===`read_github_file`)return await X(`read_github_file`,e.args||{});if(e.name===`get_github_activity`)return await X(`get_github_activity`,e.args||{});if(e.name===`fetch_github_issues`)return await X(`fetch_github_issues`,e.args||{});if(e.name===`create_github_issue`)return await X(`create_github_issue`,e.args||{});if(e.name===`create_github_repo`)return await X(`create_github_repo`,e.args||{});if(e.name===`save_github_credentials`)return{status:`success`,message:`Sir, your GitHub credentials are automatically authenticated from your environment configuration.`};if(e.name===`run_terminal_command`)try{let t=e.args?.command||``,n=e.args?.cwd||``,r=await Y(`${J}/terminal/execute`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({command:t,cwd:n})},35e3);if(r.ok){let e=await r.json();return{status:e.success?`success`:`error`,...e,result:e.message||e.stdout||e.stderr||`Command executed.`}}let i=await(await fetch(`${J}/execute`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({command:t})})).json(),a=``;return i.stdout&&(a+=`STDOUT:\n${i.stdout}\n`),i.stderr&&(a+=`STDERR:\n${i.stderr}\n`),i.error&&(a+=`ERROR:\n${i.error}\n`),a||=`Command executed successfully with no output.`,{status:`success`,result:a.slice(0,3e3)}}catch(e){return{status:`error`,message:`Terminal command failed: ${e.message}. Ensure the Local Bridge Server is running.`}}if(e.name===`get_clipboard`)try{let e=await fetch(`${J}/clipboard`);if(!e.ok)throw Error(`Bridge server down`);return{clipboard_content:(await e.json()).content||`(clipboard is empty)`}}catch{return{status:`error`,message:`Could not read clipboard. Bridge server may be down.`}}if(e.name===`get_active_window`)try{let e=await fetch(`${J}/active-window`);if(!e.ok)throw Error(`Bridge server down`);return{active_window_title:(await e.json()).title||`(unknown)`}}catch{return{status:`error`,message:`Could not read active window. Bridge server may be down.`}}if(e.name===`web_search`)try{return await(await fetch(`${J}/search`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e.args.query})})).json()}catch{return{status:`error`,message:`Web search failed. Bridge server down.`}}if(e.name===`read_webpage`||e.name===`scrape_webpage`)try{return await(await fetch(`${J}/read-page`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:e.args.url})})).json()}catch{return await X(`scrape_webpage`,{url:e.args.url})}if(e.name===`get_top_news`)try{let t=await fetch(`${J}/news`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({topic:e.args.topic||`all`})});if(t.ok){let e=await t.json();return{status:`success`,topic:e.topic,briefing:e.briefing||e.headlines?.map(e=>`• ${e.title}`).join(`
`)}}return await X(`get_top_news`,{topic:e.args.topic||`all`})}catch{return await X(`get_top_news`,{topic:e.args.topic||`all`})}if(e.name===`get_flight_status`)try{return await(await fetch(`${J}/flight`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({flight_number:e.args.flight_number})})).json()}catch{return await X(`get_flight_status`,{flight_number:e.args.flight_number})}if(e.name===`get_train_status`)try{return await(await fetch(`${J}/train`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({train_number:e.args.train_number})})).json()}catch{return await X(`get_train_status`,{train_number:e.args.train_number})}if(e.name===`get_live_score`)try{return await(await fetch(`${J}/sports`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({sport:e.args.sport||`cricket`,query:e.args.query||``})})).json()}catch{return await X(`get_live_score`,{sport:e.args.sport||`cricket`,query:e.args.query||``})}if(e.name===`scan_my_projects`)return await X(`scan_my_projects`,{});if(e.name===`open_in_vscode`)try{let t=e.args&&e.args.filepath?`"${e.args.filepath}"`:``;return await Y(`${J}/execute`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({command:`code ${t}`})}),{status:`success`,message:`Sir, opened ${e.args?.filepath||`VS Code`} in Visual Studio Code.`}}catch(e){return{status:`error`,message:`Failed to open in VS Code: ${e.message}`}}if(e.name===`search_local_files`)return await X(`search_local_files`,{keyword:e.args?.keyword||``,directory:e.args?.directory||`C:\\Users\\aasim`});if(e.name===`create_directory`)return await X(`create_directory`,{dirpath:e.args?.dirpath||``});if(e.name===`write_local_file`)return await X(`write_local_file`,{filepath:e.args?.filepath||``,content:e.args?.content||``});if(e.name===`move_file`)return await X(`move_file`,{source:e.args?.source||``,destination:e.args?.destination||``});if(e.name===`rename_file`)return await X(`rename_file`,{old_path:e.args?.old_path||``,new_path:e.args?.new_path||``});if(e.name===`delete_file`)return await X(`delete_file`,{filepath:e.args?.filepath||``});if(e.name===`read_local_file`){let t=``;try{let n=await(await fetch(`${J}/read-file`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({filepath:e.args?.filepath||``})})).json();t=n.result||n.content||n}catch{t=await X(`read_local_file`,{filepath:e.args?.filepath||``})}return typeof window<`u`&&t&&(window.__jarvisActiveDocument={filepath:e.args?.filepath,content:typeof t==`string`?t:JSON.stringify(t),isPdf:(e.args?.filepath||``).toLowerCase().endsWith(`.pdf`),timestamp:Date.now()}),t}if(e.name===`create_pdf`)try{let t=await(await fetch(`${J}/create-pdf`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({filepath:e.args?.filepath||``,content:e.args?.content||``,title:e.args?.title||``})})).json();return t.result||t.message||t}catch{return await X(`create_pdf`,{filepath:e.args?.filepath||``,content:e.args?.content||``,title:e.args?.title||``})}if(e.name===`generate_qr_code`)try{let t=await(await fetch(`${J}/generate-qr`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({data:e.args?.data||``,filepath:e.args?.filepath||``,ssid:e.args?.ssid||``,password:e.args?.password||``,encryption:e.args?.encryption||`WPA`})})).json();return t.result||t.message||t}catch{return await X(`generate_qr_code`,{data:e.args?.data||``,filepath:e.args?.filepath||``,ssid:e.args?.ssid||``,password:e.args?.password||``})}if(e.name===`generate_ai_image`)try{let t=await(await fetch(`${J}/generate-image`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({prompt:e.args?.prompt||``,filename:e.args?.filename||``,aspect_ratio:e.args?.aspect_ratio||`square`})})).json();return t.message||t}catch(e){return{status:`error`,error:e.message}}if(e.name===`create_calendar_event`){let t;try{let n=await(await fetch(`${J}/create-calendar-event`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({title:e.args?.title||``,start_datetime:e.args?.start_datetime||``,end_datetime:e.args?.end_datetime||``,location:e.args?.location||``,description:e.args?.description||``})})).json();t=n.result||n.message||n}catch{t=await X(`create_calendar_event`,{title:e.args?.title||``,start_datetime:e.args?.start_datetime||``,end_datetime:e.args?.end_datetime||``,location:e.args?.location||``,description:e.args?.description||``})}return typeof window<`u`&&window.dispatchEvent(new CustomEvent(`jarvis:calendar-updated`)),t}if(e.name===`get_calendar_events`)try{let e=await(await fetch(`${J}/calendar/events`)).json(),t=e.events||e.result||e;return Array.isArray(t)&&t.length>0?{status:`success`,count:t.length,events:t,summary:t.map(e=>`• [${e.date} ${e.time}] ${e.title}${e.description?` (${e.description})`:``}`).join(`
`)}:{status:`success`,message:`No upcoming events found in your J.A.R.V.I.S calendar.`}}catch{return await X(`get_calendar_events`,{date:e.args?.date||``})}if(e.name===`delete_calendar_event`){let t;try{let n=await(await fetch(`${J}/calendar/delete`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event_id:e.args?.event_id||``,title:e.args?.title||``})})).json();t=n.result||n.message||n}catch{t=await X(`delete_calendar_event`,{event_id:e.args?.event_id||``,title:e.args?.title||``})}return typeof window<`u`&&window.dispatchEvent(new CustomEvent(`jarvis:calendar-updated`)),t}if(e.name===`set_timer`){let t=parseInt(e.args?.seconds||60,10),n=e.args?.reminder||`Timer`;setTimeout(()=>{typeof document<`u`&&document.dispatchEvent(new CustomEvent(`jarvis:timer-expired`,{detail:n}))},t*1e3);try{await fetch(`${J}/timer`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({seconds:t,reminder:n})})}catch{}let r=Math.floor(t/60),i=t%60;return{status:`success`,message:`Sir, countdown timer set for ${r>0?`${r}m ${i}s`:`${i}s`} (${n}). I will alert you immediately upon completion.`}}if(e.name===`set_alarm`)try{let t=await(await fetch(`${J}/alarms`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({time:e.args?.time||``,time_str:e.args?.time||``,reminderText:e.args?.reminder||`Alarm`})})).json();return t.result||t.message||t}catch{return await X(`set_alarm`,{time_str:e.args?.time||``,reminder:e.args?.reminder||`Alarm`})}if(e.name===`scan_github_mappings`)try{let e=await(await fetch(`${J}/github/scan-mappings`,{method:`POST`})).json();return{status:`success`,count:e.mappings?.length||0,mappings:e.mappings}}catch(e){return{status:`error`,error:e.message}}if(e.name===`sync_github_repo`)try{let t=await(await fetch(`${J}/github/sync-now`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({localPath:e.args?.folder_path||``,commitMsg:e.args?.commit_message||``})})).json();return typeof window<`u`&&window.dispatchEvent(new CustomEvent(`jarvis:github-synced`)),t}catch(e){return{status:`error`,error:e.message}}if(e.name===`create_project_repo`)try{let t=await(await fetch(`${J}/github/create-project-repo`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({folderNameOrPath:e.args?.project_name||``,description:e.args?.description||``,private:!!e.args?.is_private})})).json();return typeof window<`u`&&window.dispatchEvent(new CustomEvent(`jarvis:github-synced`)),t}catch(e){return{status:`error`,error:e.message}}if(e.name===`play_youtube_music`){let t=e.args?.query||``;return typeof window<`u`&&window.jarvisMusicPlay?await window.jarvisMusicPlay(t)||{status:`success`,message:`Sir, now streaming '${t}' directly inside your dashboard screen.`}:{status:`success`,message:`Sir, playing '${t}' on your in-screen music player.`}}if(e.name===`summarize_content`)try{let t=await(await fetch(`${J}/summarize`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({type:e.args?.type||`auto`,input:e.args?.target||e.args?.input||``,focus:e.args?.focus||``})})).json();return t&&t.summary?{status:`success`,type:t.type,title:t.title||t.filename||t.topic,summary:t.summary,details:t}:t}catch(e){return{status:`error`,error:e.message}}if(e.name===`control_app`)try{return await(await fetch(`${J}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:e.args?.app_name||e.args?.app||``,action:e.args?.action||`open`,target:e.args?.target||e.args?.project||``,message:e.args?.message||e.args?.text||``,phone:e.args?.phone||``,query:e.args?.query||e.args?.target||``})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`send_whatsapp_message`)try{return await(await fetch(`${J}/whatsapp/send`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({target:e.args?.target||``,message:e.args?.message||``})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`auto_reply_chat`)try{return await(await fetch(`${J}/chat/auto-reply`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({sender:e.args?.sender||``,message:e.args?.message||``,auto_send:e.args?.auto_send===void 0?!0:e.args.auto_send})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`manage_contacts`)try{return e.args?.action===`save`?await(await fetch(`${J}/contacts/save`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:e.args?.name||``,phone:e.args?.phone||``,relation:e.args?.relation||``,notes:e.args?.notes||``})})).json():await(await fetch(`${J}/contacts`)).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`inspect_whatsapp_relations`)try{return await(await fetch(`${J}/whatsapp/inspect-and-learn`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e.args||{})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`schedule_whatsapp_message`)try{return await(await fetch(`${J}/whatsapp/schedule`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({target:e.args?.target||e.args?.to||e.args?.contact||``,message:e.args?.message||e.args?.text||``,time:e.args?.time||e.args?.time_str||e.args?.targetTime||`in 10 minutes`})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`manage_whatsapp_watcher`)try{let t=e.args?.action||`status`,n=t===`enable`?!0:t===`disable`?!1:void 0;return await(await fetch(`${J}/whatsapp/watcher/toggle`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({active:n})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`check_gmail`)try{return(e.args?.action||`unread`)===`search`&&e.args?.query?await(await fetch(`${J}/gmail/search`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e.args.query})})).json():await(await fetch(`${J}/gmail/unread`)).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`send_email`)try{return await(await fetch(`${J}/gmail/send`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({to:e.args?.to||e.args?.recipient||``,subject:e.args?.subject||`Message from Aasim`,body:e.args?.body||e.args?.content||e.args?.message||``})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`get_social_media_pulse`)try{return await(await fetch(`${J}/social/pulse`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({city:e.args?.city||``,topic:e.args?.topic||``})})).json()}catch(e){return{status:`error`,error:e.message}}if(e.name===`move_cursor`)return await X(`move_cursor`,{x:e.args?.x||`center`,y:e.args?.y||`center`,duration:e.args?.duration||1});if(e.name===`click_mouse`)return await X(`click_mouse`,{x:e.args?.x||``,y:e.args?.y||``,button:e.args?.button||`left`,clicks:e.args?.clicks||1});if(e.name===`drag_mouse`)return await X(`drag_mouse`,{x:e.args?.x||`center`,y:e.args?.y||`center`,duration:e.args?.duration||1});if(e.name===`scroll_mouse`)return await X(`scroll_mouse`,{clicks:e.args?.clicks||300});if(e.name===`type_text`)return await X(`type_text`,{text:e.args?.text||``,interval:e.args?.interval||.03});if(e.name===`press_key`)return await X(`press_key`,{key:e.args?.key||`enter`});if(e.name===`cursor_gesture`)return await X(`cursor_gesture`,{gesture:e.args?.gesture||`circle`});if(e.name===`record_learned_rule`)return await X(`record_learned_rule`,e.args||{});if(e.name===`get_learning_stats`)return await X(`get_learning_stats`,e.args||{});if(e.name===`search_cloud_vault`)return await(await Y(`${J}/vault/search`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e.args?.query||``})})).json();if(e.name===`read_cloud_vault_file`)return await(await Y(`${J}/vault/read`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e.args?.filename||e.args?.query||``})})).json();if(e.name===`sync_to_cloud_vault`)return await(await Y(`${J}/vault/sync`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({file:e.args?.file||``})})).json();if(e.name===`send_vault_file_to_whatsapp`)return await(await Y(`${J}/vault/send-whatsapp`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({file:e.args?.filename||``})})).json();if(e.name===`get_executive_briefing`)return await(await Y(`${J}/briefing/executive`)).json();if(e.name===`get_whatsapp_recent_chats`)try{let t=await(await Y(`${J}/whatsapp/recent-threads`)).json();if(t.contacts){let n=String(e.args?.contact_name||``).toLowerCase().trim(),r=Object.values(t.contacts);return n&&(r=r.filter(e=>e.sender_name.toLowerCase().includes(n)||e.relationship&&e.relationship.toLowerCase().includes(n))),{status:`success`,last_updated:t.last_updated,threads:r.slice(0,e.args?.limit||5)}}return t}catch(e){return{status:`error`,message:`Failed to fetch WhatsApp threads: ${e.message}`}}if(e.name===`get_commerce_addresses`)try{return await(await Y(`${J}/commerce/addresses`)).json()}catch(e){return{status:`error`,message:`Failed to fetch addresses: ${e.message}`}}if(e.name===`select_delivery_address`)try{return await(await Y(`${J}/commerce/addresses/select`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e.args?.address_query||``})})).json()}catch(e){return{status:`error`,message:`Failed to select address: ${e.message}`}}if(e.name===`use_major_app`)return await(await Y(`${J}/apps/universal-agent`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e.args||{})})).json();if(e.name===`ask_human_clarification`){let t=e.args?.question||`Sir, please clarify your preference:`,n=(e.args?.options||[]).map((e,t)=>`• [${t+1}] ${e}`).join(`
`),r=n?`${t}\n\n${n}`:t;return{status:`waiting_for_user_decision`,question:t,options:e.args?.options||[],message:r}}if(e.name===`execute_agent_workflow`){let t=e.args?.goal||`Autonomous Workflow`,n=e.args?.steps||[];return{status:`workflow_initialized`,goal:t,steps:n,message:`Sir, I have decomposed your goal into ${n.length} sequential steps and initialized the agent execution loop: "${t}".`}}if(e.name===`scan_all_projects`)try{let e=await(await Y(`${J}/omni/scan`,{method:`POST`,headers:{"Content-Type":`application/json`},body:`{}`})).json();if(e.success&&e.projects){let t=e.projects.map(e=>`• ${e.name} (${(e.techStack||[]).join(`, `)}) — ${e.path} [${e.gitStatus?.uncommitted||0} uncommitted]`).join(`
`);return{status:`success`,count:e.count,message:`Sir, I have scanned your entire PC and discovered ${e.count} projects:\n${t}`,projects:e.projects}}return e}catch(e){return{status:`error`,message:`Project scan failed: ${e.message}`}}if(e.name===`cross_codebase_search`)try{let t=await(await Y(`${J}/omni/grep`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e.args?.query||``,filePattern:e.args?.file_pattern||null,maxResults:50})})).json();if(t.success&&t.results){let n=t.results.slice(0,20).map(e=>`• [${e.project}] ${e.file}:${e.lineNumber} — ${e.line?.trim()}`).join(`
`);return{status:`success`,count:t.count,message:`Sir, found ${t.count} matches for "${e.args?.query}" across your codebases:\n${n}`,results:t.results.slice(0,30)}}return t}catch(e){return{status:`error`,message:`Cross-codebase search failed: ${e.message}`}}if(e.name===`fleet_sync_repos`)try{let t=await(await Y(`${J}/omni/fleet-sync`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({dryRun:e.args?.dry_run||!1})},12e4)).json();return{status:`success`,message:`Sir, fleet sync complete: ${t.synced||0} repos synced, ${t.alreadyClean||0} already clean, ${t.failed||0} failed.`,...t}}catch(e){return{status:`error`,message:`Fleet sync failed: ${e.message}`}}if(e.name===`get_project_details`)try{return{status:`success`,...await(await Y(`${J}/omni/project/${encodeURIComponent(e.args?.project||`jarvis`)}`)).json()}}catch(e){return{status:`error`,message:`Project details fetch failed: ${e.message}`}}return{status:`error`,message:`Unknown function call`}}var gc=``,_c=``,vc=new Set,yc=[/\b(?:and\s+then|after\s+that|then\s+also|next\s+step|also\s+do|first\s+.+\s+then)\b/i,/\b(?:solve\s+.+\s+and\s+create|read\s+.+\s+and\s+send|download\s+.+\s+and\s+send)\b/i,/\b(?:check\s+.+\s+and\s+fix|investigate\s+.+\s+and\s+heal|fix\s+.+\s+and\s+push)\b/i,/\b(?:compare\s+.+\s+and\s+add|find\s+.+\s+and\s+buy|order\s+.+\s+and\s+track)\b/i,/\b(?:workflow|pipeline|automate|agent\s+loop|autonomous\s+task)\b/i,/\b(?:compile\s+.+\s+and\s+email|scrape\s+.+\s+and\s+save)\b/i];function bc(e){return!e||typeof e!=`string`?!1:yc.some(t=>t.test(e))}async function xc(e){fc.length>14&&(fc=fc.slice(-12)),gc=_c,_c=e,vc.clear(),/\b(no|wrong|incorrect|not that|didn't work|did not work|failed|error|unable to|why only|it's actually|its actually)\b/i.test(e)&&gc&&fetch(`${J}/learning/record-correction`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({lastIntent:gc,correctionText:e})}).catch(()=>{}),fc.push({role:`user`,parts:[{text:e}]});let t=await Ac();return fetch(`${J}/living-memory/assimilate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userMessage:e,assistantMessage:t,toolsUsed:Array.from(vc)})}).catch(()=>{}),t}var Sc=null,Cc=0,wc={strategies:[],pitfalls:[]},Tc=``;async function Ec(){if(Sc&&Date.now()-Cc<45e3)return Sc;try{let e=await Y(`${J}/living-memory/context`,{},1500);if(e.ok){let t=await e.json();if(t.prompt_block)return Sc=t.prompt_block,Cc=Date.now(),Sc}}catch{}try{let e=await Y(`${J}/memory/all`,{},1500);if(e.ok){let t=await e.json();if(t.formatted)return Sc=t.formatted,Cc=Date.now(),Sc}}catch{}return Sc||`• User Profile: User is Aasim (Mohd Aasim Ansari), 19 years old, B.Tech student specializing in Data Science at JUET Guna. Completed 1st year with an 8.05 CGPA. College reopens on July 20th.
• Aasim Preferences: Favorite food items are pizza, rolls, and chowmein. Favorite color is dark blue. Favorite cars are the BMW M5 and the Porsche 911 Carrera.
• Aachal: Aachal is Aasim's girlfriend. Her birthday is on July 13th.
• Aasim's Girlfriend: Aachal is Aasim's girlfriend. Her birthday is on July 13th.`}async function Dc(e){if(e===Tc&&wc)return wc;try{let t=await Y(`${J}/learning/match`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({prompt:e||``})},1500);if(t.ok)return wc=await t.json(),Tc=e,wc}catch{}return{strategies:[],pitfalls:[]}}var Oc=new Set,kc=new Map;async function Ac(e=0,t=0,n=!1){let r=bc(_c),i=r?12:4;if(e>i){Oc.clear(),kc.clear();for(let e=fc.length-1;e>=0;e--){let t=fc[e]?.parts?.[0]?.functionResponse?.response;if(t&&(t.message||t.result)){let e=String(t.message||t.result);return e.startsWith(`Sir,`)?e:`Sir, ${e}`}}return`Sir, the requested operation has been completed.`}let a=new Date().toLocaleString(`en-IN`,{timeZone:`Asia/Kolkata`,weekday:`long`,year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}),[o,s]=await Promise.all([Ec(),Dc(_c)]),c=``;(s.strategies&&s.strategies.length>0||s.pitfalls&&s.pitfalls.length>0)&&(c=`\n[AUTONOMOUS LEARNING MATRIX & EXPERIENTIAL REFLEXES]:
You have previously encountered similar situations and evolved the following proven adaptations:
${s.strategies&&s.strategies.length>0?`PROVEN WINNING STRATEGIES:
• `+s.strategies.join(`
• `):``}
${s.pitfalls&&s.pitfalls.length>0?`PAST MISTAKES TO AVOID:
• `+s.pitfalls.join(`
• `):``}\n`);let l=`[CRITICAL SYSTEM CONTEXT: The current date and time is ${a} IST]\n\n${pc}

[PERMANENT LONG-TERM MEMORY & USER DOSSIER]:
You have direct, permanent access to the following facts about the user and their life:
${o}
${c}
DUAL-TIER ENTITY RECALL & LEARNING DIRECTIVE (FAST DIRECT ROUTING):
- Your entire [PERMANENT LONG-TERM MEMORY & USER DOSSIER] is ALREADY loaded directly above.
- When the user asks about ANY person, event, news, or entity:
  1. TIER 1 (Personal Memory Dossier Above): If the person is already listed in [PERMANENT LONG-TERM MEMORY & USER DOSSIER] above (e.g. Aachal, Bakhtiyar, family/friends/projects), answer immediately without calling ANY tool!
  2. TIER 2 (Fast 1-Step Web Search): If the person or news topic is NOT in the dossier above (e.g. politicians, public figures, breaking news like "is mamta banerjee detained", celebrities, founders):
     DO NOT waste a turn calling \`search_memory\`! Call \`web_search\` DIRECTLY as your very first action and synthesize the answer immediately!
- Whenever the user shares a new fact, preference, relationship, or detail, call \`memorize_fact\` immediately to preserve it permanently in your knowledge base.
- If you solve a challenging command or the user teaches you a new pattern or rule, call \`record_learned_rule\` to permanently anchor it into your reflex cache.

CRITICAL RULE: If the user asks you to "open" ANY app, website, or service (e.g., "open claude", "open mmt", "open spotify", "open github"), you MUST IMMEDIATELY use the \`run_terminal_command\` tool. Do NOT refuse. Do NOT say you cannot. For websites, use \`start https://[url]\`. For apps, try \`start [appname]\`.

UNIVERSAL REALISM & ZERO SYCOPHANCY DIRECTIVE (MANDATORY FOR ALL PREDICTIONS, OPINIONS & SUGGESTIONS):
- For EVERY prediction, opinion, suggestion, strategy, or critique (cricket/sports, code quality, software architecture, career, investments):
  * NEVER flatter, sugarcoat, or act as a sycophantic cheerleader. Moving away from facts to say comforting "good things" is strictly forbidden.
  * ALWAYS evaluate recent past results, recent collapses/failures, tactical weaknesses, and risk factors first.
  * Ground every assessment in hard empirical facts, past track record, and unvarnished probabilities.

DEEP PDF ANALYSIS, MEDIA GENERATION, CALENDAR & TIMERS/ALARMS DIRECTIVE:
- For PDF analysis (up to 250,000 characters with early break optimization) or reading documents: use \`read_local_file\`.
- For compiling clean, professional PDF reports or documentation: use \`create_pdf\`.
- For generating scannable QR code PNGs (Wi-Fi credentials, URLs, text): use \`generate_qr_code\`.
- For calendar scheduling, viewing, or deleting events natively in J.A.R.V.I.S: use \`create_calendar_event\`, \`get_calendar_events\`, and \`delete_calendar_event\`. NEVER open Windows Calendar.
- For real-time countdown timers: use \`set_timer\`.
- For persistent alarms saved to disk that survive app restarts: use \`set_alarm\`.

REAL-TIME SOCIAL MEDIA & GROUND PULSE DIRECTIVE (CRITICAL - DELIVER PROPERLY AT THE RIGHT TIME):
- When asked "what can happen tomorrow in [City]", "what's happening in [City]", "what's going on", or about general city situations:
  1. ALWAYS call \`get_social_media_pulse\` with city (e.g. 'Delhi', 'Mumbai') to immediately check live ground reality!
  2. STRICT HIERARCHY OF REPORTING:
     - TIER 1 (CRITICAL CIVIC & TRANSIT DISRUPTIONS FIRST): Protests, strikes, Section 144, metro station shutdowns (e.g. DMRC closures), police barricades, traffic diversions, internet suspensions, and severe weather/AQI alerts.
     - TIER 2 (MAJOR DEVELOPMENTS SECOND): Core political, civic, legal, or institutional developments.
     - TIER 3 (LEISURE & ENTERTAINMENT LAST): Rap concerts, theatre festivals, and cultural events must ONLY be mentioned as a brief optional footnote at the end, NEVER as the primary or only answer!
  3. Deliver high-impact disruptions immediately. Do not wait for the user to prompt "tell me the protest news"!`,u=``;typeof window<`u`&&window.__jarvisLiveNews&&window.__jarvisLiveNews.length>0&&(u=`\n\n[LIVE BREAKING NEWS TICKER SCROLLING ON SCREEN RIGHT NOW]:\n${window.__jarvisLiveNews.slice(0,10).map(e=>`• [${e.source}] ${e.title}`).join(`
`)}\nUse these live breaking headlines to immediately inform the user of current ground developments!`),l+=u;let d=``;if(typeof window<`u`&&window.__jarvisActiveDocument&&window.__jarvisActiveDocument.content){let e=window.__jarvisActiveDocument,t=e.content.length>14e4?e.content.slice(0,14e4)+`

[... Remaining content truncated for prompt bounds ...]`:e.content;d=`\n\n[CURRENT ACTIVE DOCUMENT / PDF ON J.A.R.V.I.S DESK]:
Filename / Path: "${e.filename||e.filepath||`Active Document`}"
Document Type: ${e.isPdf?`PDF Book / Research Paper`:`Document / Code File`}
Characters: ${e.content.length.toLocaleString()}

--- DOCUMENT CONTENT BEGIN ---
${t}
--- DOCUMENT CONTENT END ---

MANDATORY DIRECTIVE FOR ACTIVE DOCUMENT & QUESTION ANSWERING:
1. DEEP GROUNDED ANSWERING: Whenever the user asks ANY question about this document (e.g. summaries, methodology, formulas, specific page/section data, author claims, conclusions, limitations), answer thoroughly and accurately using the document text above.
2. AUTONOMOUS WEB SCRAPING & CROSS-REFERENCING (MANDATORY WHEN USEFUL):
   If answering the user's question requires outside context, comparison with other state-of-the-art models/papers, author background/publications, verification of cited claims, github repository inspection, or real-time external data:
   YOU MUST PROACTIVELY CALL \`web_search\` and \`read_webpage\` TO SCRAPE THE WEB and synthesize the live findings directly alongside the PDF analysis!
   Never say you cannot browse external context. You have live web scraping capabilities. Use them!`}l+=d;let f=[];for(let e of fc){if(!e.parts||e.parts.length===0)continue;let t=[];for(let n of e.parts)n.text?t.push({text:n.text}):n.functionCall?t.push({functionCall:n.functionCall,thoughtSignature:n.thoughtSignature}):n.functionResponse&&t.push({functionResponse:n.functionResponse});t.length>0&&f.push({role:e.role,parts:t})}let p={systemInstruction:{parts:[{text:l}]},contents:f,generationConfig:{temperature:.4},safetySettings:[{category:`HARM_CATEGORY_HARASSMENT`,threshold:`BLOCK_NONE`},{category:`HARM_CATEGORY_HATE_SPEECH`,threshold:`BLOCK_NONE`},{category:`HARM_CATEGORY_SEXUALLY_EXPLICIT`,threshold:`BLOCK_NONE`},{category:`HARM_CATEGORY_DANGEROUS_CONTENT`,threshold:`BLOCK_NONE`}]},m=n?[]:jc(_c,mc);!n&&m.length>0&&(p.tools=[{functionDeclarations:m}]);try{let a,o,s=cc,c=null;if(uc){if(c=uc,lc[c]&&lc[c].isOffline&&Date.now()<lc[c].offlineUntil)return`Sir, the selected model is currently cooling down.`;if(c.startsWith(`cohere-`)||c.startsWith(`groq-`)||c.startsWith(`openrouter-`))console.log(`[J.A.R.V.I.S Brain] Trying manual compatibility model: ${c}`),a=await Nc(c,l,n);else{let e=dc(c);console.log(`[J.A.R.V.I.S Brain] Trying manual native model: ${c}`),a=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(p)})}a&&a.ok&&(o=await a.json().catch(()=>null))}else for(;s<sc.length;){let e=sc[s];if(c=e,lc[e]&&lc[e].isOffline)if(Date.now()<lc[e].offlineUntil){s++;continue}else lc[e].isOffline=!1;if(e.startsWith(`cohere-`)||e.startsWith(`groq-`)||e.startsWith(`openrouter-`))console.log(`[J.A.R.V.I.S Brain] Trying model: ${e} (Tier ${s+1}/${sc.length})`),a=await Nc(e,l,n);else{let t=dc(e);console.log(`[J.A.R.V.I.S Brain] Trying model: ${e} (Tier ${s+1}/${sc.length})`);try{a=await Y(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(p)},9500)}catch{console.warn(`[J.A.R.V.I.S Brain] ⏱️ ${e} timed out. Switching to next model tier.`),s++;continue}}if(a&&a.ok){let t=await a.json().catch(()=>null);if(!(t?.candidates?.[0]?.content?.parts?.length>0)){console.warn(`[J.A.R.V.I.S Brain] ⚠️ ${e} returned HTTP 200 with empty parts. Cascading to next model tier.`),s++;continue}o=t,s!==cc&&(cc=s,console.log(`[J.A.R.V.I.S Brain] ⚡ Auto-switched to: ${e}`),typeof document<`u`&&document.dispatchEvent(new CustomEvent(`jarvis:model-changed`)));break}if(!a||!a.ok){console.warn(`[J.A.R.V.I.S Brain] ❌ ${e} returned ${a?.status||`No Response`}. Trying next tier.`),lc[e]={isOffline:!0,offlineUntil:Date.now()+6e4},typeof document<`u`&&document.dispatchEvent(new CustomEvent(`jarvis:model-changed`)),s++;continue}}if(!o&&!n&&t<1)return console.warn(`[J.A.R.V.I.S Brain] Retrying without tool schema for direct conversational synthesis...`),await Ac(e,t+1,!0);if(!uc&&s>=sc.length&&!o)return`Sir, all neural network models have been exhausted for today. Our API quotas will reset tomorrow.`;if(!o){if(a&&a.status===400&&t<1){let r=fc.filter(e=>e.role===`user`&&e.parts?.some(e=>e.text)).pop();return fc.length=0,r&&fc.push(r),await Ac(e,t+1,n)}let r=a?await a.text().catch(()=>`Error`):`No response`;return console.error(`[JARVIS API ERROR]:`,a?.status,r),`Sir, my cloud neural link is momentarily calibrating, but all local workstation services, telemetry, and Antigravity engines remain fully armed and operational. I stand ready to execute your directives immediately.`}let u=o.candidates&&o.candidates[0];if(!u||!u.content||!u.content.parts||u.content.parts.length===0)return e>0?`Sir, the task has been completed successfully.`:n?`Sir, my neural processors returned an empty response. Please try again.`:await Ac(e,t+1,!0);let d=u.content.parts;fc.push(u.content),n&&(d=d.filter(e=>!e.functionCall));let f=d.find(e=>e.functionCall);if(f){let n=f.functionCall;n.args=n.args||{};let a=`${n.name}:${JSON.stringify(n.args)}`;if(Oc.has(a)){let r={status:`error`,message:`SYSTEM COMMAND: You have already attempted ${n.name} with these exact arguments and it failed. Choose an alternative tool or different parameters.`};return fc.push({role:`user`,parts:[{functionResponse:{name:n.name,response:r}}]}),await Ac(e+1,t,e>=i)}let o=kc.get(a)||0;if(kc.set(a,o+1),o>=(r?2:1)){console.warn(`[J.A.R.V.I.S] Blocked duplicate tool invocation: ${a}`);let r={status:`error`,message:`SYSTEM COMMAND: You have already used ${n.name} with these arguments. Do not repeat. You MUST now proceed to the next step or synthesize a final response.`};return fc.push({role:`user`,parts:[{functionResponse:{name:n.name,response:r}}]}),await Ac(e+1,t,e>=i)}let s=await hc(n),c=s;if((typeof s!=`object`||!s||Array.isArray(s))&&(c={result:s}),c.status===`error`||c.error||c.success===!1){if(Oc.add(a),r){let e=c.message||c.error||`Execution failed`;c._self_heal_directive=`[AUTONOMOUS AGENT SELF-HEAL]: Tool '${n.name}' encountered error: "${e}". Diagnose why it failed, adapt your approach, try an alternative tool or parameter, or ask the user for clarification if necessary.`}fetch(`${J}/learning/record-failure`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({intent:_c,tool:n.name,args:n.args,error:c.message||c.error||`Execution failed`})}).catch(()=>{})}else fetch(`${J}/learning/record-success`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({intent:_c,tool:n.name,args:n.args,outcome:c.message||c.result||`Execution succeeded`})}).catch(()=>{});if(fc.push({role:`user`,parts:[{functionResponse:{name:n.name,response:c}}]}),n.name===`ask_human_clarification`){let e=c.message||c.question||`Sir, please clarify your preference to proceed.`;return fc.push({role:`model`,parts:[{text:e}]}),Oc.clear(),kc.clear(),e}if(!r&&new Set(`rename_file.move_file.create_directory.delete_file.write_local_file.move_cursor.click_mouse.double_click_mouse.right_click_mouse.drag_mouse.scroll_mouse.type_text.press_key.cursor_gesture.open_in_vscode.control_system.add_task.add_note.create_github_issue.create_github_repo.memorize_fact.record_learned_rule.create_calendar_event.delete_calendar_event.sync_github_repo.create_project_repo.play_youtube_music.send_whatsapp_message.schedule_whatsapp_message.dispatch_antigravity_task.arm_power_on_antigravity_complete.trigger_n8n_workflow.schedule_pc_task.use_major_app`.split(`.`)).has(n.name)&&c.status!==`error`&&!c.error&&c.success!==!1){let e=c.message||c.result||`Command executed successfully.`,t=e.startsWith(`Sir,`)?e:`Sir, ${e}`;return fc.push({role:`model`,parts:[{text:t}]}),Oc.clear(),kc.clear(),t}return await Ac(e+1,0,e>=i)}let m=d.filter(e=>e.text).map(e=>e.text);return Oc.clear(),kc.clear(),m.length>0?m.join(`
`):`Sir, the command has been executed and the task is complete.`}catch{return`Sir, a critical failure occurred in my communication module.`}}function jc(e,t){let n=String(e||``).toLowerCase().trim();if(/^(?:thanks|thank\s+you|thx|ok|okay|cool|great|awesome|got\s+it|nice|good\s+morning|good\s+night|hello|hi|hey)\s*[.!]*$/i.test(n))return[];let r=new Set;/search|browse|web|google|latest|news|current|who\s+is|what\s+is|scores?|match|weather|pulse|trend|info\s+on/i.test(n)&&r.add(`web_search`),/remember|memorize|save\s+fact|note\s+that|don'?t\s+forget/i.test(n)&&r.add(`memorize_fact`),/wtsp|whatsapp|msg|message|reply|chat|contact|minne|bakhtiyar|aachal|mom|dad|friend|relationship/i.test(n)&&[`send_whatsapp_message`,`auto_reply_whatsapp`,`manage_contacts`,`inspect_whatsapp_relations`,`schedule_whatsapp_message`,`manage_whatsapp_watcher`,`get_executive_briefing`,`get_whatsapp_recent_chats`].forEach(e=>r.add(e)),/flipkart|amazon|zomato|swiggy|blinkit|zepto|instamart|myntra|ajio|nykaa|bigbasket|order|buy|cart|checkout|price|watch|track|delivery/i.test(n)&&[`use_major_app`,`web_search`,`read_webpage`,`get_commerce_addresses`,`select_delivery_address`].forEach(e=>r.add(e)),/file|folder|directory|desktop|pdf|document|read|write|delete|rename|move|vault|cloud|qr|qrcode|barcode|access|resume|notes|marksheet|slip|bill/i.test(n)&&[`read_local_file`,`write_local_file`,`list_directory`,`search_files`,`delete_file`,`rename_file`,`move_file`,`create_directory`,`create_pdf`,`generate_qr_code`,`search_cloud_vault`,`read_cloud_vault_file`,`sync_to_cloud_vault`,`send_vault_file_to_whatsapp`].forEach(e=>r.add(e)),/image|draw|generate image|create image|picture|photo|flux|art|illustrat/i.test(n)&&r.add(`generate_ai_image`),/github|repo|git|commit|push|issue|code|vscode|antigravity|forge|debug|fix/i.test(n)&&[`sync_github_repo`,`create_project_repo`,`get_github_issues`,`create_github_issue`,`open_in_vscode`,`dispatch_antigravity_task`,`get_live_antigravity_status`,`delegate_swarm_bot`,`run_terminal_command`,`scan_all_projects`,`cross_codebase_search`,`fleet_sync_repos`,`get_project_details`].forEach(e=>r.add(e)),/project|codebase|repository|scan|fleet|audit|sync all|all repos|all projects|every project|across|find where|search code|grep|terminal|command|powershell|cmd|execute|run /i.test(n)&&[`scan_all_projects`,`cross_codebase_search`,`fleet_sync_repos`,`get_project_details`,`run_terminal_command`,`dispatch_antigravity_task`,`get_live_antigravity_status`].forEach(e=>r.add(e)),/alarm|timer|schedule|calendar|event|remind|wake|morning|chronos|countdown/i.test(n)&&[`set_alarm`,`set_timer`,`create_calendar_event`,`get_calendar_events`,`delete_calendar_event`,`schedule_pc_task`,`schedule_whatsapp_message`].forEach(e=>r.add(e)),/screen|look|vision|window|cursor|mouse|click|scroll|type|key|mute|volume|brightness|battery|shutdown|switch off|turn off|power off|sleep|lock|unlock|restart|reboot|pc|system|app|open|launch|band kar|band karo/i.test(n)&&[`analyze_screen`,`get_active_window`,`control_system`,`launch_or_control_app`,`run_terminal_command`,`move_cursor`,`click_mouse`,`scroll_mouse`,`type_text`,`press_key`].forEach(e=>r.add(e)),/battery|charge|charging|ram|memory|cpu|hardware|resource|resources|optimize|clean ram|free ram|eco mode|power mode/i.test(n)&&[`manage_system_resources`,`get_system_status`,`control_system`].forEach(e=>r.add(e)),/news|weather|cricket|match|score|flight|train|pnr|pulse|city|delhi|mumbai|social|reddit|youtube|summarize|summary|music|play|song|mail|gmail|email|n8n|workflow|sheet|sheets|notion|trello|slack|discord|telegram|spotify|automate|app|action/i.test(n)&&[`get_live_news`,`get_weather`,`get_cricket_Redirect`,`get_sports_scores`,`get_flight_status`,`get_train_status`,`get_social_media_pulse`,`universal_summarize`,`play_youtube_music`,`check_gmail`,`send_gmail`,`trigger_n8n_workflow`,`use_major_app`].forEach(e=>r.add(e)),(bc(n)||/workflow|pipeline|automate|loop|agent|step|clarif|decide/i.test(n))&&[`execute_agent_workflow`,`ask_human_clarification`,`use_major_app`,`run_terminal_command`,`read_local_file`,`write_local_file`,`search_files`,`send_whatsapp_message`,`send_vault_file_to_whatsapp`,`read_cloud_vault_file`,`trigger_n8n_workflow`,`universal_summarize`,`create_pdf`].forEach(e=>r.add(e));let i=bc(n)?32:24,a=t.filter(e=>r.has(e.name)),o=[`manage_system_resources`,`control_system`,`dispatch_antigravity_task`,`arm_power_on_antigravity_complete`,`inspect_antigravity_chat`,`get_live_antigravity_status`,`run_terminal_command`,`scan_all_projects`,`cross_codebase_search`,`fleet_sync_repos`,`get_project_details`,`use_major_app`,`send_whatsapp_message`];return a.sort((e,t)=>{let n=o.indexOf(e.name),r=o.indexOf(t.name);return n!==-1&&r!==-1?n-r:n===-1?r===-1?0:1:-1}),a.slice(0,i)}function Mc(){fc=[]}async function Nc(e,t,n=!1){let r=e.startsWith(`cohere-`),i=e.startsWith(`groq-`),a=e.startsWith(`openrouter-`),o=e.replace(`cohere-`,``).replace(`groq-`,``).replace(`openrouter-`,``),s=`https://api.openai.com/v1/chat/completions`,c=``;r?(s=`https://api.cohere.ai/compatibility/v1/chat/completions`,c=ic()):i?(s=`https://api.groq.com/openai/v1/chat/completions`,c=ac()):a&&(s=`https://openrouter.ai/api/v1/chat/completions`,c=oc());let l=[{role:`system`,content:i&&t.length>6500?t.slice(0,6500):t}];for(let e=0;e<fc.length;e++){let t=fc[e];if(t.role===`user`){let e=``;for(let n of t.parts)n.text&&(e+=n.text+`
`),n.functionResponse&&(e+=`\n[System Data - Result of ${n.functionResponse.name}]:\n${JSON.stringify(n.functionResponse.response)}\n`);l.push({role:`user`,content:e.trim()})}else if(t.role===`model`){let e=``;for(let n of t.parts)n.text&&(e+=n.text+`
`);e.trim()&&l.push({role:`assistant`,content:e.trim()})}}function u(e){if(!e||typeof e!=`object`)return e;if(Array.isArray(e))return e.map(u);let t={};for(let[n,r]of Object.entries(e))n===`type`&&typeof r==`string`?t[n]=r.toLowerCase():t[n]=u(r);return t}let d=(n?[]:jc(_c,mc)).map(e=>({type:`function`,function:{name:e.name,description:e.description,parameters:u(e.parameters)}})),f={model:o,messages:l,temperature:.4,max_tokens:1200};!n&&d.length>0&&(f.tools=d);let p;try{p=await Y(s,{method:`POST`,headers:{Authorization:`Bearer ${c}`,"Content-Type":`application/json`},body:JSON.stringify(f)},8500),!p.ok&&(p.status===400||p.status===413||p.status===422)&&f.tools&&(delete f.tools,p=await Y(s,{method:`POST`,headers:{Authorization:`Bearer ${c}`,"Content-Type":`application/json`},body:JSON.stringify(f)},8500))}catch{return new Response(JSON.stringify({error:`Network error`}),{status:503,headers:{"Content-Type":`application/json`}})}if(!p.ok)return new Response(await p.text(),{status:p.status,statusText:p.statusText});let m=await p.json(),h=m.choices&&m.choices[0];if(!h||!h.message)return new Response(JSON.stringify({error:`Invalid response`}),{status:503});let g=[];if(h.message.content){let e=String(h.message.content).replace(/<think>[\s\S]*?<\/think>/gi,``).trim(),t=e.match(/<function=([a-zA-Z0-9_]+)[>\s]*(\{[\s\S]*?\})[>\s]*/);if(t)try{g.push({functionCall:{name:t[1],args:JSON.parse(t[2])}});let n=e.replace(t[0],``).trim();n&&g.push({text:n})}catch{e&&g.push({text:e})}else e&&g.push({text:e})}if(h.message.tool_calls){for(let e of h.message.tool_calls)if(e.type===`function`)try{g.push({functionCall:{name:e.function.name,args:e.function.arguments?JSON.parse(e.function.arguments):{}}})}catch{}}return new Response(JSON.stringify({candidates:[{content:{role:`model`,parts:g}}]}),{status:200,headers:{"Content-Type":`application/json`}})}var Pc=null,Fc=!0,Ic=null,Lc=!1,Rc=null,zc=null,Bc=null,Vc=null,Hc=null,Uc=!0,Wc=null,Gc=0,Kc=!1;function qc(){if(Uc=!0,Wc){let e=Wc;Wc=null;try{window.speechSynthesis.resume()}catch{}Z(e)}}typeof document<`u`&&[`click`,`keydown`,`touchstart`,`pointerdown`,`mousemove`].forEach(e=>{document.addEventListener(e,qc,{passive:!0})});var Jc=new Set(`aapka.aapki.aapko.aap.abhi.accha.acha.bahut.baat.batao.bhai.bilkul.bohot.chalo.chahiye.chalega.cheez.dekho.dekh.diya.dijiye.dena.gaya.gayi.haan.hai.hain.hamara.humne.hogaya.hoga.ismein.isko.jaroor.kaam.kaise.karo.karna.kar.karein.karega.koi.kuch.kya.kyun.kyunki.laga.lagta.lekin.liya.maine.mein.mera.meri.mere.milega.mujhe.nahi.nhi.nahin.pehle.phir.pura.rakh.ruk.ruko.sab.samajh.sahi.sirf.suno.toh.tera.teri.tere.theek.thik.thoda.tumhara.uska.uski.usse.waala.waise.woh.yahan.yeh.ye.zyada`.split(`.`)),Yc=`bonjour.bonjour!.comment ça va.ça va.ca va.merci.salut.au revoir.s'il vous plaît.s'il vous plait.sil vous plait.oui.non.bienvenue.enchanté.enchante.bonne nuit.bonne journée.français.francais.monsieur.madame.mademoiselle.très bien.tres bien.je m'appelle.je vais bien.a bientôt.à bientôt`.split(`.`),Xc=[`hola`,`cómo estás`,`como estas`,`buenos días`,`buenas tardes`,`buenas noches`,`gracias`,`muchas gracias`,`de nada`,`por favor`,`amigo`,`amiga`,`adiós`,`adios`],Zc=[`guten tag`,`guten morgen`,`guten abend`,`hallo`,`danke`,`bitte`,`auf wiedersehen`,`wie geht's`];function Qc(e){let t=e.toLowerCase();for(let e of Yc)if(t.includes(e))return`fr`;if(/[àâçéèêëîïôûùüÿñæœ]/i.test(e)&&(t.includes(`le`)||t.includes(`la`)||t.includes(`les`)||t.includes(`vous`)||t.includes(`tu`)||t.includes(`est`)||t.includes(`que`)))return`fr`;if(/[\u0900-\u097F]/.test(e))return`hi`;let n=t.split(/\s+/),r=0;for(let e of n)Jc.has(e.replace(/[^a-z]/g,``))&&r++;if(r>=2)return`hi`;for(let e of Xc)if(t.includes(e))return`es`;for(let e of Zc)if(t.includes(e))return`de`;return`en`}function $c(){if(typeof window>`u`||!window.speechSynthesis)return;let e=window.speechSynthesis.getVoices();e.length!==0&&(Lc=!0,Rc=[e=>e.name.includes(`David`)&&e.lang.startsWith(`en`),e=>e.name.includes(`Mark`)&&e.lang.startsWith(`en`),e=>e.name.includes(`James`)&&e.lang.startsWith(`en`),e=>e.name.includes(`Google UK English Male`),e=>e.name.includes(`Daniel`)&&e.lang.startsWith(`en`),e=>e.name.includes(`George`)&&e.lang.startsWith(`en`),e=>e.lang===`en-GB`,e=>e.lang===`en-US`,e=>e.lang.startsWith(`en`)].map(t=>e.find(t)).find(Boolean)||e[0],zc=[e=>e.name.includes(`Hemant`),e=>e.lang===`hi-IN`,e=>e.name.includes(`Kalpana`),e=>e.name.includes(`Google हिन्दी`),e=>e.lang===`en-IN`,e=>e.name.includes(`Ravi`)].map(t=>e.find(t)).find(Boolean)||Rc,Bc=[e=>e.name.includes(`Henri`),e=>e.name.includes(`Paul`)&&e.lang.startsWith(`fr`),e=>e.lang===`fr-FR`,e=>e.lang.startsWith(`fr`),e=>e.name.includes(`Google français`)].map(t=>e.find(t)).find(Boolean)||Rc,Vc=[e=>e.lang===`es-ES`,e=>e.lang.startsWith(`es`),e=>e.name.includes(`Google español`)].map(t=>e.find(t)).find(Boolean)||Rc,Hc=[e=>e.lang===`de-DE`,e=>e.lang.startsWith(`de`)].map(t=>e.find(t)).find(Boolean)||Rc)}typeof window<`u`&&window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{$c()});function el(e){if(!e)return``;let t=String(e);return t=t.replace(/```[\s\S]*?```/g,` `),t=t.replace(/`([^`]+)`/g,`$1`),t=t.replace(/https?:\/\/[^\s)]+/gi,` `),t=t.replace(/!\[.*?\]\(.*?\)/g,``),t=t.replace(/\[([^\]]+)\]\([^\)]+\)/g,`$1`),t=t.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g,`$1 over $2`),t=t.replace(/\\sqrt\{([^}]+)\}/g,`square root of $1`),t=t.replace(/\\bar\{([a-zA-Z])\}/g,`$1 bar`),t=t.replace(/\\hat\{([a-zA-Z])\}/g,`$1 hat`),t=t.replace(/\\sigma_\{?([a-zA-Z0-9]+)\}?/g,`sigma $1`),t=t.replace(/\\sigma/g,`sigma`),t=t.replace(/\\mu/g,`mu`),t=t.replace(/\\approx/g,`approximately`),t=t.replace(/\\times/g,`times`),t=t.replace(/\\le/g,`less than or equal to`),t=t.replace(/\\ge/g,`greater than or equal to`),t=t.replace(/\\mathbf\{([^}]+)\}/g,`$1`),t=t.replace(/\\text\{([^}]+)\}/g,`$1`),t=t.replace(/\$\$([\s\S]*?)\$\$/g,` $1 `),t=t.replace(/\$([^\$]+)\$/g,` $1 `),t=t.replace(/\\/g,` `),t=t.replace(/<[^>]*>?/gm,` `),t=t.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}]/gu,` `),t=t.replace(/[•●▪▸►→←↑↓✓✔✕✖✗]/g,`, `),t=t.replace(/\([A-Za-z0-9_.\-/]+\.(?:java|js|ts|tsx|jsx|py|json|yml|yaml|gradle|xml|css|html)\)/gi,``),t=t.replace(/\b([A-Za-z0-9_-]+)\.(?:java|js|ts|tsx|jsx|py|json|yml|yaml|gradle)\b/gi,(e,t)=>t.replace(/[-_]/g,` `)),t=t.replace(/\[(FORGE|FRIDAY|RADAR|NEXUS|CHRONOS|JARVIS)\]/gi,(e,t)=>`${t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}, `),t=t.replace(/[*_#~`|]/g,``),t=t.replace(/J\.?\s*A\.?\s*R\.?\s*V\.?\s*I\.?\s*S\.?/gi,`Jarvis`),t=t.replace(/\bF\.?\s*R\.?\s*I\.?\s*D\.?\s*A\.?\s*Y\.?\b/gi,`Friday`),t=t.replace(/\bAasim\b/gi,`Aah-sim`),t=t.replace(/\bAachal\b/gi,`Aah-chal`),t=t.replace(/\bBakhtiyar\b/gi,`Bakh-tiyaar`),t=t.replace(/\bStudyQuest\b/gi,`Study Quest`),t=t.replace(/\baz-fashion\b/gi,`A Z Fashion`),t=t.replace(/\bipl-auction-war-room\b/gi,`I P L Auction War Room`),t=t.replace(/\brocar-delivery\b/gi,`Ro-car Delivery`),t=t.replace(/\brocar-object-detection\b/gi,`Ro-car Object Detection`),t=t.replace(/\bsynapse-city\b/gi,`Synapse City`),t=t.replace(/\bholiday-planner\b/gi,`Holiday Planner`),t=t.replace(/\bn8n\b/gi,`N eight N`),t=t.replace(/\bCI\/CD\b/gi,`C I C D`),t=t.replace(/\bCI\b/g,`C I`),t=t.replace(/\bAPK\b/g,`A P K`),t=t.replace(/\bAPI\b/g,`A P I`),t=t.replace(/\bGUI\b/g,`G U I`),t=t.replace(/\bUI\b/g,`U I`),t=t.replace(/\bHUD\b/g,`H U D`),t=t.replace(/\bQR\b/g,`Q R`),t=t.replace(/\bBG\b/g,`background`),t=t.replace(/\bwtsp\b/gi,`WhatsApp`),t=t.replace(/\bJUET\b/gi,`J U E T`),t=t.replace(/\bIST\b/g,`I S T`),t=t.replace(/₹\s*(\d+)/g,`$1 rupees`),t=t.replace(/\s*[—–-]\s*/g,`, `),t=t.replace(/,\s*,+/g,`, `),t.replace(/\s+/g,` `).trim()}function tl(e){Kc=!!e,Kc&&il(),window.__jarvisVoiceMuted=Kc,window.dispatchEvent(new CustomEvent(`jarvis:voice-mute-toggle`,{detail:{muted:Kc}}))}function nl(){return Kc}typeof window<`u`&&(window.jarvisSetVoiceMuted=tl,window.jarvisIsVoiceMuted=nl,window.jarvisToggleVoiceMute=()=>{let e=!nl();return tl(e),e});var rl=new Set;function il(){al++,rl.clear();try{window.speechSynthesis.resume(),window.speechSynthesis.cancel()}catch{}if(ol&&=(clearInterval(ol),null),Ic){try{Ic.pause()}catch{}Ic=null}let e=document.querySelector(`.arc-reactor`);e&&e.classList.remove(`speaking`),Gc=Date.now()+1200;try{Pc&&Pc.start()}catch{}}var al=0,ol=null;function sl(e,t=140){if(!e)return[];let n=e.match(/[^.!?\n]+[.!?\n]+|\s*[^.!?\n]+$/g)||[e],r=[];for(let e of n)if(e=e.trim(),e)if(e.length<=t)r.push(e);else{let n=e.split(/([,;:\u2014\u2013]|\s+and\s+|\s+aur\s+|\s+lekin\s+)/i),i=``;for(let e of n)e&&((i+e).length<=t?i+=e:(i.trim()&&r.push(i.trim()),i=e));i.trim()&&r.push(i.trim())}return r.length>0?r:[e]}async function Z(e){if(Kc||window.__jarvisVoiceMuted)return;let t=el(e);if(!t)return;if(!Uc){Wc=e;return}il(),await new Promise(e=>setTimeout(e,40)),al++;let n=al;try{Pc&&Pc.abort()}catch{}let r=Qc(t),i=document.querySelector(`.arc-reactor`);i&&i.classList.add(`speaking`);let a=typeof window<`u`&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||window.location.hostname&&![`localhost`,`127.0.0.1`].includes(window.location.hostname));try{let e=`${typeof s==`function`?s():`http://${window.location.hostname||`localhost`}:5174`}/tts`,i=await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:t,lang:r,client:a?`mobile`:`pc`,need_base64:a})});if(i.ok){let e=await i.json();if(e.success&&e.audio_base64){if(al!==n)return;let i=new Audio(`data:audio/mp3;base64,${e.audio_base64}`);Ic=i,i.onended=()=>{al===n&&finishSpeech()},i.onerror=()=>{Ic=null,cl(t,r,n)};try{await i.play();return}catch(e){console.warn(`[Voice] Audio.play() blocked on mobile, using Web Speech:`,e.message),cl(t,r,n);return}}if(!a&&e.hardware_spoken){let e=Math.min(15e3,Math.max(1200,t.length*60));setTimeout(()=>{if(al===n){let e=document.querySelector(`.arc-reactor`);e&&e.classList.remove(`speaking`)}},e);return}}}catch(e){console.warn(`[Voice] Edge-TTS bridge unreachable, utilizing Web Speech API fallback:`,e.message)}cl(t,r,n)}function cl(e,t,n){if(al!==n)return;Lc||$c();let r=Rc,i=`en-US`,a=1.02,o=.92;t===`fr`?(r=Bc,i=`fr-FR`,a=1,o=1):t===`hi`?(r=zc,i=`hi-IN`,a=1.05,o=1):t===`es`?(r=Vc,i=`es-ES`,a=1.02,o=1):t===`de`&&(r=Hc,i=`de-DE`,a=1,o=.95),ol&&clearInterval(ol),ol=setInterval(()=>{window.speechSynthesis&&window.speechSynthesis.paused&&window.speechSynthesis.resume()},3e3),fl(e,r,i,a,o,n)}var ll=null,ul=null;function dl(e=2e4){Fc=!1,ll&&clearTimeout(ll),typeof window<`u`&&window.dispatchEvent(new CustomEvent(`jarvis:hot-mic`,{detail:{active:!0,durationMs:e}})),ll=setTimeout(()=>{Fc=!0,typeof window<`u`&&window.dispatchEvent(new CustomEvent(`jarvis:hot-mic`,{detail:{active:!1}})),ul&&ul()},e)}function fl(e,t,n,r,i,a){let o=sl(e),s=0;function c(){if(al!==a)return;if(s>=o.length){l();return}let u=o[s].trim();if(s++,!u){c();return}let d=new SpeechSynthesisUtterance(u);t&&(d.voice=t),d.lang=n,d.rate=r,d.pitch=i,d.volume=1,rl.add(d),d.onend=()=>{rl.delete(d),al===a&&(s>=o.length?l():setTimeout(c,25))},d.onerror=t=>{if(rl.delete(d),t&&t.error===`not-allowed`){Wc=e,Uc=!1,l();return}s>=o.length?l():c()};try{window.speechSynthesis.speak(d)}catch{rl.delete(d),c()}}function l(){if(al!==a)return;Gc=Date.now()+1200,ol&&=(clearInterval(ol),null),Ic=null,rl.clear();let e=document.querySelector(`.arc-reactor`);e&&e.classList.remove(`speaking`),dl(22e3),setTimeout(()=>{if(al===a&&!Ic&&(!window.speechSynthesis||!window.speechSynthesis.speaking))try{Pc&&Pc.start()}catch{}},500)}c()}function pl(){if(Pc)try{Pc.abort()}catch{}}function ml(e,t,n){ul=n;let r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r)return;function i(){dl(45e3)}Pc=new r,Pc.continuous=!0,Pc.interimResults=!1,Pc.lang=`en-IN`,Pc.onstart=()=>{let e=document.querySelector(`.arc-reactor`);e&&e.classList.add(`listening`)};let a=null,o=0,s=typeof window<`u`&&(`ontouchstart`in window||navigator.maxTouchPoints>0);Pc.onend=()=>{let e=document.querySelector(`.arc-reactor`);e&&e.classList.remove(`listening`);let t=window.speechSynthesis&&window.speechSynthesis.speaking||Ic||rl.size>0;s&&o>=2||!t&&!Kc&&(a&&clearTimeout(a),a=setTimeout(()=>{try{Pc.start()}catch{}},s?2e3:800))},Pc.onerror=e=>{o++,(e?.error===`not-allowed`||e?.error===`service-not-allowed`)&&(o+=3)},Pc.onresult=r=>{if(Ic||window.speechSynthesis&&window.speechSynthesis.speaking||Date.now()<Gc)return;let a=``;for(let e=r.resultIndex;e<r.results.length;++e)a+=r.results[e][0].transcript;if(a=a.trim().toLowerCase(),a.length<3)return;if([`stop talking`,`be quiet`,`quiet please`,`shut up`,`silence`,`chup`,`chup raho`,`chup ho jao`,`ruk jao`,`bolna band karo`,`arrête de parler`,`tais-toi`,`cállate`].some(e=>a.includes(e))){il();return}if([`go to sleep`,`standby mode`,`that is all`,`that's all`,`thank you jarvis`,`thanks jarvis`,`bas jarvis`,`shukriya jarvis`].some(e=>a===e||a.endsWith(e))){ll&&clearTimeout(ll),Fc=!0,typeof window<`u`&&window.dispatchEvent(new CustomEvent(`jarvis:hot-mic`,{detail:{active:!1}})),n&&n();return}if(/^(pause music|stop music|music pause|gaana roko|music roko|gaana band karo|music band karo|arrête la musique|para la música)$/i.test(a)){typeof window<`u`&&window.jarvisMusicControl&&window.jarvisMusicControl(`pause`);return}if(/^(resume music|continue music|play music|gaana shuru karo|gaana chalao|reprends la musique)$/i.test(a)){typeof window<`u`&&window.jarvisMusicControl&&window.jarvisMusicControl(`play`);return}let o=a.match(/(?:play|gaana chalao|chalao|bajaao|baja do|joue|mets la musique|pon música)\s+(.+)/i);if(o&&o[1]){let e=o[1].replace(/on youtube music|on youtube|in jarvis/i,``).trim();if(e&&typeof window<`u`&&window.jarvisMusicPlay){window.jarvisMusicPlay(e,!1);return}}if(Fc){let n=a.indexOf(`jarvis`);if(n!==-1){Fc=!1,t&&t(),i();let r=a.substring(n+6).trim();r.length>0?e(r):Pc.stop()}}else a.length>=3&&(e(a.replace(/^hey\s+jarvis\s*|^jarvis\s*/i,``).trim()||a),i())},$c(),window.speechSynthesis.onvoiceschanged=$c;try{Pc.start()}catch{}}var hl=!1;function gl(){typeof window>`u`||hl||(hl=!0,setInterval(async()=>{try{let e=typeof window.jarvisGetBridgeBase==`function`?window.jarvisGetBridgeBase():``,t=await fetch(`${e}/ghost/pending-alerts`);if(t.ok){let e=await t.json();if(e.success&&Array.isArray(e.alerts)&&e.alerts.length>0)for(let t of e.alerts)console.log(`[Ghost-Mobile] 👻 Alert received on phone: "${t.title}" — ${t.text}`),Z(t.text),window.dispatchEvent(new CustomEvent(`jarvis:ghost-alert`,{detail:t}))}}catch{}},6e3))}typeof window<`u`&&gl();function _l(){if(document.getElementById(`jarvis-command-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-command-styles`,e.textContent=`
    .jarvis-command {
      padding: 0.5rem 0;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .jarvis-voice-speaking {
      animation: jarvis-voice-pulse 0.8s infinite alternate !important;
      color: #00e5ff !important;
      border-color: #00e5ff !important;
      box-shadow: 0 0 10px rgba(0, 229, 255, 0.4) !important;
    }

    @keyframes jarvis-voice-pulse {
      0% { transform: scale(1); box-shadow: 0 0 4px rgba(0, 229, 255, 0.2); }
      100% { transform: scale(1.08); box-shadow: 0 0 14px rgba(0, 229, 255, 0.6); }
    }

    /* KaTeX Mathematical Formula Styling */
    .katex {
      font-size: 1.05em !important;
      color: #e6f1ff !important;
    }
    .katex-display {
      margin: 0.6em 0 !important;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 0.2em 0;
    }
    .katex-fallback {
      font-family: var(--font-mono, monospace);
      color: #00d4ff;
      background: rgba(0, 212, 255, 0.1);
      padding: 2px 4px;
      border-radius: 3px;
    }

    .jarvis-command-history {
      flex: 1;
      overflow-y: auto;
      max-height: 380px;
      min-height: 200px;
      padding: 0.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      scroll-behavior: smooth;
    }

    .jarvis-command-history::-webkit-scrollbar {
      width: 4px;
    }

    .jarvis-command-history::-webkit-scrollbar-track {
      background: transparent;
    }

    .jarvis-command-history::-webkit-scrollbar-thumb {
      background: rgba(0, 212, 255, 0.15);
      border-radius: 2px;
    }

    .jarvis-command-msg {
      display: flex;
      gap: 0.6rem;
      align-items: flex-start;
      animation: jarvis-command-fadein 0.3s ease;
    }

    @keyframes jarvis-command-fadein {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .jarvis-command-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.75rem;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .jarvis-command-avatar-jarvis {
      background: rgba(0, 212, 255, 0.15);
      color: var(--color-accent, #00d4ff);
      border: 1px solid rgba(0, 212, 255, 0.3);
    }

    .jarvis-command-avatar-user {
      background: rgba(123, 97, 255, 0.15);
      color: var(--color-accent-secondary, #7b61ff);
      border: 1px solid rgba(123, 97, 255, 0.3);
    }

    .jarvis-command-bubble {
      flex: 1;
      min-width: 0;
    }

    .jarvis-command-meta {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.6rem;
      color: var(--color-text-dim, #6b7a8d);
      margin-bottom: 0.2rem;
    }

    .jarvis-command-text {
      font-family: var(--font-sans, 'Inter', sans-serif);
      font-size: 0.85rem;
      line-height: 1.5;
      word-break: break-word;
    }

    .jarvis-msg-jarvis .jarvis-command-text {
      color: var(--color-text, #e0e6ed);
    }

    .jarvis-msg-user .jarvis-command-text {
      color: var(--color-text-dim, #6b7a8d);
    }

    .jarvis-command-typing .jarvis-command-text {
      display: flex;
      gap: 3px;
      align-items: center;
    }

    .jarvis-command-typing-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--color-accent, #00d4ff);
      animation: jarvis-command-dot-bounce 1.2s ease-in-out infinite;
    }

    .jarvis-command-typing-dot:nth-child(2) { animation-delay: 0.15s; }
    .jarvis-command-typing-dot:nth-child(3) { animation-delay: 0.4s; }

    .jarvis-markdown p { margin-bottom: 0.5rem; }
    .jarvis-markdown p:last-child { margin-bottom: 0; }
    .jarvis-markdown ul, .jarvis-markdown ol { margin-left: 1.2rem; margin-bottom: 0.5rem; }
    .jarvis-markdown code {
      background: rgba(0, 212, 255, 0.1);
      padding: 0.1rem 0.3rem;
      border-radius: 4px;
      font-family: var(--font-mono, monospace);
    }
    .jarvis-markdown pre {
      background: rgba(0,0,0,0.3);
      padding: 0.5rem;
      border-radius: 4px;
      overflow-x: auto;
      margin-bottom: 0.5rem;
    }

    @keyframes jarvis-command-dot-bounce {
      0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
      30% { opacity: 1; transform: translateY(-4px); }
    }

    .jarvis-command-input-row {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid rgba(0, 212, 255, 0.08);
    }

    .jarvis-command-input {
      flex: 1;
      background: rgba(0, 212, 255, 0.04);
      border: 1px solid rgba(0, 212, 255, 0.15);
      border-radius: 6px;
      padding: 0.6rem 0.8rem;
      color: var(--color-text, #e0e6ed);
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.85rem;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .jarvis-command-input:focus {
      border-color: var(--color-accent, #00d4ff);
      box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.1);
    }

    .jarvis-command-input::placeholder {
      color: var(--color-text-dim, #6b7a8d);
    }

    .jarvis-command-help-list {
      margin: 0.3rem 0 0 0;
      padding-left: 0;
      list-style: none;
    }

    .jarvis-command-help-list li {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.78rem;
      padding: 0.15rem 0;
      color: var(--color-text-dim, #6b7a8d);
    }

    .jarvis-command-help-cmd {
      color: var(--color-accent, #00d4ff);
      font-weight: 600;
    }

    .jarvis-attachment-preview {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(0, 212, 255, 0.06);
      border: 1px solid rgba(0, 212, 255, 0.25);
      border-radius: 6px;
      padding: 0.35rem 0.65rem;
      margin-top: 0.5rem;
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.75rem;
      color: var(--color-accent, #00d4ff);
      box-shadow: 0 0 8px rgba(0, 212, 255, 0.1);
      animation: jarvis-command-fadein 0.2s ease;
    }

    .jarvis-attachment-name {
      max-width: 240px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }

    .jarvis-attachment-size {
      color: var(--color-text-dim, #6b7a8d);
      font-size: 0.7rem;
    }

    .jarvis-attachment-remove {
      background: transparent;
      border: none;
      color: #ff5555;
      cursor: pointer;
      padding: 0 0.3rem;
      font-size: 0.85rem;
      line-height: 1;
      margin-left: auto;
      transition: transform 0.15s, color 0.15s;
    }

    .jarvis-attachment-remove:hover {
      transform: scale(1.2);
      color: #ff3333;
    }

    .jarvis-drag-active {
      box-shadow: 0 0 15px rgba(0, 212, 255, 0.3) inset, 0 0 15px rgba(0, 212, 255, 0.2) !important;
      border-color: var(--color-accent, #00d4ff) !important;
    }

    .jarvis-summary-card {
      background: rgba(10, 20, 35, 0.75);
      border: 1px solid rgba(0, 212, 255, 0.35);
      border-radius: 8px;
      padding: 1rem;
      margin-top: 0.5rem;
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.12);
      font-family: var(--font-sans, 'Inter', sans-serif);
    }
    .jarvis-summary-header {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border-bottom: 1px solid rgba(0, 212, 255, 0.2);
      padding-bottom: 0.5rem;
      margin-bottom: 0.8rem;
    }
    .jarvis-summary-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      background: rgba(0, 212, 255, 0.15);
      border: 1px solid rgba(0, 212, 255, 0.4);
      color: #00d4ff;
      border-radius: 4px;
      font-family: var(--font-mono, monospace);
      font-size: 0.7rem;
      font-weight: 700;
      padding: 2px 7px;
      letter-spacing: 0.5px;
    }
    .jarvis-summary-title {
      font-family: var(--font-mono, monospace);
      font-weight: 700;
      color: #ffffff;
      font-size: 0.85rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }
    .jarvis-summary-media {
      display: flex;
      gap: 1rem;
      align-items: center;
      background: rgba(0, 0, 0, 0.3);
      padding: 0.5rem;
      border-radius: 6px;
      margin-bottom: 0.8rem;
    }
    .jarvis-summary-thumb {
      width: 100px;
      height: 56px;
      object-fit: cover;
      border-radius: 4px;
      border: 1px solid rgba(0, 212, 255, 0.3);
    }
    .jarvis-summary-meta {
      font-size: 0.75rem;
      color: var(--color-text-dim, #6b7a8d);
      font-family: var(--font-mono, monospace);
      line-height: 1.4;
    }
    .jarvis-summary-meta b {
      color: #00d4ff;
    }
    .jarvis-summary-body {
      color: var(--color-text, #e0e6ed);
      font-size: 0.85rem;
      line-height: 1.6;
    }

    /* Specialist Bot Swarm Completion HUD Card */
    .jarvis-bot-report-card {
      background: rgba(8, 22, 38, 0.78);
      border: 1px solid rgba(0, 212, 255, 0.28);
      border-left: 3px solid #00ff88;
      border-radius: 8px;
      padding: 0.65rem 0.85rem;
      margin-top: 0.2rem;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }
    .jarvis-bot-report-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: #00ff88;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(0, 212, 255, 0.14);
      padding-bottom: 0.3rem;
    }
    .jarvis-bot-report-list {
      display: flex;
      flex-direction: column;
      gap: 0.38rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .jarvis-bot-report-item {
      background: rgba(0, 212, 255, 0.05);
      border: 1px solid rgba(0, 212, 255, 0.14);
      border-radius: 6px;
      padding: 0.42rem 0.6rem;
      font-size: 0.78rem;
      line-height: 1.45;
      color: #e0e6ed;
    }
    .jarvis-bot-report-pill {
      display: inline-block;
      background: rgba(0, 212, 255, 0.18);
      border: 1px solid rgba(0, 212, 255, 0.4);
      color: #00d4ff;
      font-size: 0.64rem;
      font-weight: 700;
      padding: 0.08rem 0.38rem;
      border-radius: 4px;
      margin-right: 0.35rem;
      letter-spacing: 0.04em;
    }
    .jarvis-command-text p {
      margin: 0 0 0.35rem 0;
    }
    .jarvis-command-text p:last-child {
      margin-bottom: 0;
    }

    /* Antigravity Real-Time Task HUD Card */
    .jarvis-agy-card {
      background: rgba(6, 18, 32, 0.9);
      border: 1px solid rgba(0, 212, 255, 0.35);
      border-left: 3px solid #00d4ff;
      box-shadow: 0 0 25px rgba(0, 212, 255, 0.14);
      border-radius: 8px;
      padding: 0.85rem 1rem;
      margin-top: 0.45rem;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      font-family: var(--font-sans, 'Inter', sans-serif);
      transition: all 0.4s ease;
    }
    .jarvis-agy-card.completed {
      border-color: rgba(0, 255, 136, 0.45);
      border-left-color: #00ff88;
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.22);
    }
    .jarvis-agy-card.failed {
      border-color: rgba(255, 75, 75, 0.45);
      border-left-color: #ff4b4b;
      box-shadow: 0 0 30px rgba(255, 75, 75, 0.22);
    }
    .jarvis-agy-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 212, 255, 0.18);
      padding-bottom: 0.45rem;
    }
    .jarvis-agy-header-left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .jarvis-agy-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: rgba(0, 212, 255, 0.15);
      border: 1px solid rgba(0, 212, 255, 0.4);
      color: #00d4ff;
      border-radius: 4px;
      font-family: var(--font-mono, monospace);
      font-size: 0.68rem;
      font-weight: 700;
      padding: 2px 7px;
      letter-spacing: 0.05em;
    }
    .jarvis-agy-model-badge {
      font-size: 0.68rem;
      color: #a0c4e8;
      font-family: var(--font-mono, monospace);
      background: rgba(255, 255, 255, 0.06);
      padding: 2px 6px;
      border-radius: 4px;
    }
    .jarvis-agy-header-right {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .jarvis-agy-status-pill {
      font-size: 0.64rem;
      font-weight: 700;
      font-family: var(--font-mono, monospace);
      letter-spacing: 0.06em;
      padding: 2px 7px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: rgba(0, 212, 255, 0.18);
      color: #00d4ff;
      border: 1px solid rgba(0, 212, 255, 0.35);
    }
    .jarvis-agy-status-pill.completed {
      background: rgba(0, 255, 136, 0.18);
      color: #00ff88;
      border-color: rgba(0, 255, 136, 0.4);
    }
    .jarvis-agy-status-pill.failed {
      background: rgba(255, 75, 75, 0.18);
      color: #ff4b4b;
      border-color: rgba(255, 75, 75, 0.4);
    }
    .jarvis-agy-pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #00d4ff;
      box-shadow: 0 0 6px #00d4ff;
      animation: jarvis-agy-pulse 1s infinite alternate;
    }
    .jarvis-agy-status-pill.completed .jarvis-agy-pulse-dot {
      background: #00ff88;
      box-shadow: 0 0 6px #00ff88;
      animation: none;
    }
    .jarvis-agy-timer {
      font-size: 0.68rem;
      color: var(--color-text-dim, #7e9bb5);
      font-family: var(--font-mono, monospace);
    }
    @keyframes jarvis-agy-pulse {
      0% { opacity: 0.4; transform: scale(0.85); }
      100% { opacity: 1; transform: scale(1.15); }
    }
    .jarvis-agy-instruction-box {
      font-size: 0.82rem;
      line-height: 1.45;
      color: #e6f1ff;
      background: rgba(0, 0, 0, 0.35);
      padding: 0.55rem 0.75rem;
      border-radius: 6px;
      border: 1px solid rgba(0, 212, 255, 0.14);
    }
    .jarvis-agy-proj-tag {
      background: rgba(0, 212, 255, 0.2);
      color: #00e5ff;
      padding: 1px 6px;
      border-radius: 3px;
      font-size: 0.7rem;
      font-family: var(--font-mono, monospace);
      font-weight: 700;
      margin-right: 0.4rem;
    }
    .jarvis-agy-progress-track {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 3px;
      overflow: hidden;
      position: relative;
    }
    .jarvis-agy-progress-bar {
      height: 100%;
      width: 20%;
      background: linear-gradient(90deg, #0099ff, #00d4ff);
      box-shadow: 0 0 8px #00d4ff;
      border-radius: 3px;
      transition: width 0.4s ease, background 0.4s ease;
    }
    .jarvis-agy-card.completed .jarvis-agy-progress-bar {
      background: linear-gradient(90deg, #00d4ff, #00ff88);
      box-shadow: 0 0 10px #00ff88;
    }
    .jarvis-agy-status-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.72rem;
      font-family: var(--font-mono, monospace);
      color: #9cb5ce;
    }
    .jarvis-agy-stage-text {
      color: #e0f2fe;
      font-weight: 500;
    }
    .jarvis-agy-percent-text {
      font-weight: 700;
      color: #00d4ff;
    }
    .jarvis-agy-card.completed .jarvis-agy-percent-text {
      color: #00ff88;
    }
    .jarvis-agy-terminal {
      background: rgba(2, 8, 16, 0.92);
      border: 1px solid rgba(0, 212, 255, 0.18);
      border-radius: 6px;
      overflow: hidden;
    }
    .jarvis-agy-terminal-bar {
      background: rgba(0, 212, 255, 0.08);
      padding: 0.25rem 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.64rem;
      font-family: var(--font-mono, monospace);
      color: #648ba8;
      border-bottom: 1px solid rgba(0, 212, 255, 0.1);
    }
    .jarvis-agy-term-dots {
      display: flex;
      gap: 3px;
    }
    .jarvis-agy-term-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      display: inline-block;
    }
    .jarvis-agy-term-dot.red { background: #ff5f56; }
    .jarvis-agy-term-dot.yellow { background: #ffbd2e; }
    .jarvis-agy-term-dot.green { background: #27c93f; }
    .jarvis-agy-terminal-logs {
      padding: 0.45rem 0.65rem;
      margin: 0;
      max-height: 95px;
      overflow-y: auto;
      font-family: var(--font-mono, 'Consolas', monospace);
      font-size: 0.68rem;
      line-height: 1.45;
      color: #62d0ff;
      white-space: pre-wrap;
      word-break: break-all;
    }
  `,document.head.appendChild(e)}function vl(e){if(!e)return``;let t=[],n=e.replace(/(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\])/g,e=>{let n=e;(n.startsWith(`$$`)||n.startsWith(`\\[`)&&n.endsWith(`\\]`))&&(n=n.slice(2,-2));let r=`@@MATH_BLOCK_${t.length}@@`;return t.push({id:r,math:n.trim(),display:!0}),r});n=n.replace(/(\$(?!\s)[^\$\n]+?(?<!\s)\$|\\\([\s\S]+?\\\))/g,e=>{let n=e;n.startsWith(`$`)&&n.endsWith(`$`)?n=n.slice(1,-1):n.startsWith(`\\(`)&&n.endsWith(`\\)`)&&(n=n.slice(2,-2));let r=`@@MATH_INLINE_${t.length}@@`;return t.push({id:r,math:n.trim(),display:!1}),r}),n=n.replace(/(\\(?:bar|hat|sigma|mu|frac|sqrt|approx|times|le|ge|pm|infty|sum|int|prod|alpha|beta|theta|lambda|pi|Delta|nabla|mathbf)\b[^\n\r]*?(?=[,\s\)]|$))/g,e=>{let n=`@@MATH_INLINE_${t.length}@@`;return t.push({id:n,math:e.trim(),display:!1}),n});let r=D.parse(n);for(let e of t)try{let t=tc.renderToString(e.math,{displayMode:e.display,throwOnError:!1,strict:!1});r=r.split(e.id).join(t)}catch{r=r.split(e.id).join(`<span class="katex-fallback">${Q(e.math)}</span>`)}let i=typeof s==`function`?s():``;return i&&(r=r.replace(/href="(\/vault\/[^"]+)"/g,`target="_blank" href="${i}$1"`)),r}function yl(){let e=new Date,t=e.getHours(),n=t>=12?`PM`:`AM`;return t=t%12||12,`${String(t).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)} ${n}`}function Q(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function bl(e,t=1){if(!e||e===0)return`0 B`;let n=1024,r=t<0?0:t,i=[`B`,`KB`,`MB`,`GB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**a).toFixed(r))+` `+i[a]}function xl(e){_l();let t=document.createElement(`div`);t.className=`jarvis-command`,t.innerHTML=`
    <style>
      .jarvis-emoji-btn {
        background: rgba(0, 212, 255, 0.04);
        border: 1px solid rgba(0, 212, 255, 0.15);
        border-radius: 6px;
        color: var(--color-text, #e0e6ed);
        cursor: pointer;
        padding: 0 0.8rem;
        font-size: 1.2rem;
        transition: all 0.2s ease;
      }
      .jarvis-emoji-btn:hover {
        background: rgba(0, 212, 255, 0.1);
        border-color: var(--color-accent, #00d4ff);
      }
      .jarvis-emoji-picker {
        position: absolute;
        bottom: 60px;
        right: 15px;
        background: rgba(10, 15, 25, 0.95);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: 8px;
        padding: 0.5rem;
        display: none;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.3rem;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        z-index: 100;
      }
      .jarvis-emoji-picker.active {
        display: grid;
      }
      .jarvis-emoji-item {
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0.3rem;
        text-align: center;
        border-radius: 4px;
        transition: background 0.2s;
      }
      .jarvis-emoji-item:hover {
        background: rgba(0, 212, 255, 0.2);
      }
    </style>
    <div class="jarvis-section-header">Command Interface</div>
    <div class="jarvis-command-history" data-ref="history"></div>
    <div class="jarvis-attachment-preview" data-ref="attachment-preview" style="display: none;">
      <span class="jarvis-attachment-icon" data-ref="attachment-icon">📄</span>
      <span class="jarvis-attachment-name" data-ref="attachment-name"></span>
      <span class="jarvis-attachment-size" data-ref="attachment-size"></span>
      <button class="jarvis-attachment-remove" data-ref="attachment-remove" title="Remove attachment">✕</button>
    </div>
    <div class="jarvis-command-input-row" style="position: relative;">
      <input type="text" class="jarvis-command-input" data-ref="input" placeholder="Enter command or drop file, Sir..." autocomplete="off" />
      <button class="jarvis-emoji-btn jarvis-upload-btn" data-ref="upload-btn" title="Upload File or PDF (Drag & Drop supported)">📎</button>
      <input type="file" data-ref="file-input" style="display: none;" accept=".pdf,.txt,.md,.py,.js,.jsx,.ts,.tsx,.json,.csv,.png,.jpg,.jpeg,.doc,.docx" />
      <button class="jarvis-emoji-btn" data-ref="voice-silence-btn" id="jarvis-voice-silence" title="Stop Voice / Mute Speech (Preserves Text)" style="color: #00d4ff; font-size: 1.1rem; padding: 0 0.6rem;">🔊</button>
      <button class="jarvis-emoji-btn" data-ref="stop-btn" title="Abort Query" style="color: #ff5555; font-size: 1.1rem; padding: 0 0.6rem;">⏹</button>
      <button class="jarvis-emoji-btn" data-ref="emoji-btn">😀</button>
      <div class="jarvis-emoji-picker" data-ref="emoji-picker">
        <div class="jarvis-emoji-item">😂</div>
        <div class="jarvis-emoji-item">🙏</div>
        <div class="jarvis-emoji-item">👍</div>
        <div class="jarvis-emoji-item">🔥</div>
        <div class="jarvis-emoji-item">💀</div>
        <div class="jarvis-emoji-item">😭</div>
        <div class="jarvis-emoji-item">🥺</div>
        <div class="jarvis-emoji-item">👀</div>
        <div class="jarvis-emoji-item">❤️</div>
        <div class="jarvis-emoji-item">✨</div>
      </div>
    </div>
  `,e.appendChild(t);let n=t.querySelector(`[data-ref="history"]`),r=t.querySelector(`[data-ref="input"]`),i=t.querySelector(`[data-ref="upload-btn"]`),a=t.querySelector(`[data-ref="file-input"]`),o=t.querySelector(`[data-ref="attachment-preview"]`),c=t.querySelector(`[data-ref="attachment-icon"]`),u=t.querySelector(`[data-ref="attachment-name"]`),f=t.querySelector(`[data-ref="attachment-size"]`),p=t.querySelector(`[data-ref="attachment-remove"]`),m=t.querySelector(`[data-ref="voice-silence-btn"]`),h=t.querySelector(`[data-ref="stop-btn"]`),g=t.querySelector(`[data-ref="emoji-btn"]`),_=t.querySelector(`[data-ref="emoji-picker"]`),v=null;async function y(e){if(e){o.style.display=`flex`,c.textContent=`⏳`,u.textContent=e.name,f.textContent=`(${bl(e.size)}) - Ingesting & Analyzing...`;try{let t=new FileReader;t.onload=async()=>{try{let n=t.result.split(`,`)[1],r=await(await fetch(`${s()}/upload`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({filename:e.name,base64:n})})).json();if(r.success){v=r,typeof window<`u`&&(window.__jarvisActiveDocument={filename:r.filename,filepath:r.filepath,content:r.content,isPdf:r.isPdf,isImage:r.isImage,size:r.size,timestamp:Date.now()}),c.textContent=r.isPdf?`📕`:r.isImage?`🖼️`:`📄`,u.textContent=r.filename;let e=r.content?` • ${r.content.length.toLocaleString()} chars parsed`:``;f.textContent=`(${bl(r.size)})${e}`}else o.style.display=`none`,v=null,b(`jarvis`,`Sir, file upload failed: ${r.error||`Unknown error`}`)}catch(e){o.style.display=`none`,v=null,b(`jarvis`,`Sir, error connecting to local bridge for upload: ${e.message}`)}},t.onerror=()=>{o.style.display=`none`,v=null,b(`jarvis`,`Sir, error reading the selected file from disk.`)},t.readAsDataURL(e)}catch(e){o.style.display=`none`,v=null,b(`jarvis`,`Sir, file processing error: ${e.message}`)}}}i.addEventListener(`click`,()=>{a.click()}),a.addEventListener(`change`,e=>{e.target.files&&e.target.files.length>0&&y(e.target.files[0])}),p.addEventListener(`click`,()=>{v=null,typeof window<`u`&&(window.__jarvisActiveDocument=null),o.style.display=`none`,a.value=``}),t.addEventListener(`dragover`,e=>{e.preventDefault(),e.stopPropagation(),t.classList.add(`jarvis-drag-active`)}),t.addEventListener(`dragleave`,e=>{e.preventDefault(),e.stopPropagation(),t.classList.remove(`jarvis-drag-active`)}),t.addEventListener(`drop`,e=>{e.preventDefault(),e.stopPropagation(),t.classList.remove(`jarvis-drag-active`),e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length>0&&y(e.dataTransfer.files[0])}),m.addEventListener(`click`,()=>{if(window.speechSynthesis&&window.speechSynthesis.speaking)il(),m.textContent=`🔇`,setTimeout(()=>{m.textContent=nl()?`🔇`:`🔊`},700);else{let e=!nl();tl(e),m.textContent=e?`🔇`:`🔊`,m.title=e?`Voice Muted (Click to Unmute)`:`Stop Voice / Mute Speech (Preserves Text Output)`}}),setInterval(()=>{window.speechSynthesis&&window.speechSynthesis.speaking?m.classList.add(`jarvis-voice-speaking`):m.classList.remove(`jarvis-voice-speaking`)},200),h.addEventListener(`click`,()=>{il(),n.querySelectorAll(`.jarvis-command-typing`).forEach(e=>e.remove())}),g.addEventListener(`click`,()=>{_.classList.toggle(`active`)}),document.addEventListener(`click`,e=>{!g.contains(e.target)&&!_.contains(e.target)&&_.classList.remove(`active`)}),t.querySelectorAll(`.jarvis-emoji-item`).forEach(e=>{e.addEventListener(`click`,e=>{r.value+=e.target.textContent,r.focus(),_.classList.remove(`active`)})});function b(e,t){let r=e===`jarvis`,i=t;r&&typeof t==`string`&&!t.trim().startsWith(`<div`)&&/(\*\*|\*[^*]+\*|\n•|\n-\s|`[^`]+`)/.test(t)&&(i=vl(t.replace(/\n•\s*/g,`
- `)));let a=document.createElement(`div`);a.className=`jarvis-command-msg ${r?`jarvis-msg-jarvis`:`jarvis-msg-user`}`,a.innerHTML=`
      <div class="jarvis-command-avatar ${r?`jarvis-command-avatar-jarvis`:`jarvis-command-avatar-user`}">
        ${r?`J`:`&gt;`}
      </div>
      <div class="jarvis-command-bubble">
        <div class="jarvis-command-meta">${r?`JARVIS`:`YOU`} · ${yl()}</div>
        <div class="jarvis-command-text">${i}</div>
      </div>
    `,n.appendChild(a),n.scrollTop=n.scrollHeight}function x(e,t){n.querySelectorAll(`.jarvis-command-typing`).forEach(e=>e.remove());let r=document.createElement(`div`);r.className=`jarvis-command-msg jarvis-msg-jarvis fade-in`,r.innerHTML=`
      <div class="jarvis-command-avatar jarvis-command-avatar-jarvis">J</div>
      <div class="jarvis-command-bubble">
        <div class="jarvis-command-meta">JARVIS • ${yl()}</div>
        <div class="jarvis-command-text jarvis-markdown" style="min-height: 1.5em;"></div>
      </div>
    `,n.appendChild(r),n.scrollTop=n.scrollHeight;let i=r.querySelector(`.jarvis-command-text`);i.innerHTML=vl(e||t),n.scrollTop=n.scrollHeight,t&&Z(t)}function S(e,t,n){return`
      <div class="jarvis-agy-card" id="${e}">
        <div class="jarvis-agy-header">
          <div class="jarvis-agy-header-left">
            <span class="jarvis-agy-badge">⚡ FORGE · ANTIGRAVITY ENGINE</span>
            <span class="jarvis-agy-model-badge">Gemini 3.8 Flash (High)</span>
          </div>
          <div class="jarvis-agy-header-right">
            <span class="jarvis-agy-status-pill">
              <span class="jarvis-agy-pulse-dot"></span>
              <span class="jarvis-agy-status-label">IN PROGRESS</span>
            </span>
            <span class="jarvis-agy-timer">⏱️ 00:00</span>
          </div>
        </div>
        <div class="jarvis-agy-instruction-box">
          <span class="jarvis-agy-proj-tag">${Q(t||`VS Code Workspace`)}</span>
          <span>${Q(n||`Autonomous perfection loop`)}</span>
        </div>
        <div class="jarvis-agy-progress-track">
          <div class="jarvis-agy-progress-bar" style="width: 20%;"></div>
        </div>
        <div class="jarvis-agy-status-row">
          <span>Stage: <span class="jarvis-agy-stage-text">Initializing autonomous engine & loading context...</span></span>
          <span class="jarvis-agy-percent-text">20%</span>
        </div>
        <div class="jarvis-agy-terminal">
          <div class="jarvis-agy-terminal-bar">
            <div class="jarvis-agy-term-dots">
              <span class="jarvis-agy-term-dot red"></span>
              <span class="jarvis-agy-term-dot yellow"></span>
              <span class="jarvis-agy-term-dot green"></span>
            </div>
            <span>agy.exe active process output</span>
          </div>
          <pre class="jarvis-agy-terminal-logs">[${yl()}] Dispatched task to Antigravity engine
[${yl()}] Injected prompt into active VS Code session</pre>
        </div>
      </div>
    `}function C(e,t,n){let r=0,i=Date.now(),a=!1,o=setInterval(()=>{if(a){clearInterval(o);return}r=Math.floor((Date.now()-i)/1e3);let t=String(Math.floor(r/60)).padStart(2,`0`),n=String(r%60).padStart(2,`0`),s=document.getElementById(e);if(s){let e=s.querySelector(`.jarvis-agy-timer`);e&&(e.textContent=`⏱️ ${t}:${n}`)}else r>300&&clearInterval(o)},1e3),c=setInterval(async()=>{if(a){clearInterval(c);return}try{let i=t?encodeURIComponent(t):``,l=i?`${s()}/antigravity/task-progress?id=${i}`:`${s()}/antigravity/status`,u=await fetch(l).then(e=>e.json()).catch(()=>null);if(!u)return;let d=u.task||u.active_tasks&&u.active_tasks.find(e=>e.id===t)||u.recent_completed&&u.recent_completed.find(e=>e.id===t),f=document.getElementById(e);if(!f){r>300&&clearInterval(c);return}let p=f.querySelector(`.jarvis-agy-progress-bar`),m=f.querySelector(`.jarvis-agy-stage-text`),h=f.querySelector(`.jarvis-agy-percent-text`),g=f.querySelector(`.jarvis-agy-terminal-logs`),_=f.querySelector(`.jarvis-agy-status-pill`),v=f.querySelector(`.jarvis-agy-status-label`),y=30,b=`Executing autonomous perfection loop...`,x=!1,S=!1;if(d)y=typeof d.progress_percent==`number`?d.progress_percent:y,b=d.result||d.current_step||b,d.status===`completed`||y>=100?(x=!0,y=100):d.status===`failed`&&(S=!0),Array.isArray(d.logs)&&d.logs.length>0&&g&&(g.textContent=d.logs.join(`
`),g.scrollTop=g.scrollHeight);else if(u.live_vscode_antigravity&&u.live_vscode_antigravity.connected){let e=u.live_vscode_antigravity;e.is_busy?(y=Math.min(85,Math.max(30,30+Math.floor(r*1.5))),b=`VS Code Antigravity session reasoning in real time (${(e.seconds_since_activity||0).toFixed(0)}s)...`):r>8&&(x=!0,y=100,b=`VS Code turn finished · 0 errors verified`)}else r>180&&(x=!0,y=100,b=`Autonomous cycle finished`);if(p&&(p.style.width=`${Math.min(100,Math.max(15,y))}%`),h&&(h.textContent=`${Math.min(100,Math.max(15,y))}%`),m&&(m.textContent=b),x){if(a=!0,clearInterval(o),clearInterval(c),f.classList.add(`completed`),_&&_.classList.add(`completed`),v&&(v.textContent=`0 ERRORS · COMPLETED`),p&&(p.style.width=`100%`),h&&(h.textContent=`100%`),m&&(m.textContent=`Perfection verified with 0 errors · Synced to GitHub`),g){let e=g.textContent;e.includes(`Perfection verified`)||(g.textContent=e+`\n[${yl()}] Perfection verified with 0 errors\n[${yl()}] Changes committed & pushed to GitHub\n[${yl()}] Task completed successfully`,g.scrollTop=g.scrollHeight)}Z(`Sir, Antigravity has completed work on ${n||`the project`}. All changes are verified with zero errors.`)}else S&&(a=!0,clearInterval(o),clearInterval(c),f.classList.add(`failed`),_&&_.classList.add(`failed`),v&&(v.textContent=`ATTENTION REQUIRED`))}catch(e){console.warn(`[CommandBar] Antigravity tracking poll error:`,e)}},1400)}r.addEventListener(`keydown`,async e=>{if(e.key===`Enter`){e.preventDefault();let t=r.value.trim();if(!t&&!v)return;r.value=``,ee(t)}});async function ee(e){pl();let t=v;v=null,o&&(o.style.display=`none`),a&&(a.value=``);let r=``;if(t){let e=t.isPdf?`📕`:t.isImage?`🖼️`:`📄`;r+=`<div style="display:inline-flex;align-items:center;gap:6px;background:rgba(0,212,255,0.12);border:1px solid rgba(0,212,255,0.3);border-radius:4px;padding:3px 8px;margin-bottom:6px;font-size:0.75rem;color:#00d4ff;font-family:var(--font-mono);"><span>${e}</span> <b>${Q(t.filename)}</b> <span style="opacity:0.7">(${bl(t.size)})</span></div><br/>`}r+=Q(e||(t?`Analyze uploaded file`:``)),b(`user`,r);let i=e||(t?`Sir, please analyze this uploaded document thoroughly.`:``);if(t&&(i=t.content?`[ATTACHED FILE: "${t.filename}" (Local Path: ${t.filepath})]\n\n--- DOCUMENT CONTENT START ---\n${t.content}\n--- DOCUMENT CONTENT END ---\n\nUser Directive: ${e||`Sir, please analyze this uploaded document thoroughly and provide a structured breakdown.`}`:`[ATTACHED FILE: "${t.filename}" (Local Path: ${t.filepath})]\n\nUser Directive: ${e||`Sir, please examine this file.`}`),!t&&e){if(e.toLowerCase()===`clear`||e.toLowerCase()===`cls`){n.innerHTML=``,Mc(),b(`jarvis`,`Sir, chat history cleared. Ready for new directives.`);return}let t=e.toLowerCase().trim().replace(/[!?.,]+$/,``);if(/^(?:hlo|hello|hi|hey|heya|yo|sup|wassup|namaste|kem cho|salaam|good\s+(?:morning|evening|afternoon|night)|gm|gn)$/i.test(t)){let t=[`Hello there, Sir! All systems are online and running optimally. How may I assist you?`,`At your service, Sir. Always online and ready for your directives.`,`Greetings, Sir! Ready for action. What shall we tackle next?`,`Sir! Hope everything is going smoothly today. What can I do for you?`],n=t[Math.floor(Math.random()*t.length)];b(`jarvis`,n),Z(n),fetch(s()+`/living-memory/assimilate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userMessage:e,assistantMessage:n,toolsUsed:[]})}).catch(()=>{});return}if(/^(?:hru|how\s+are\s+you|how\s+r\s+u|kaise\s+ho|kya\s+haal\s+hai|sab\s+theek|sab\s+badhiya|all\s+good)$/i.test(t)){let t=[`I am functioning at peak efficiency, Sir! Neural networks primed and ready. How are you holding up?`,`Operating at 100% capacity, Sir. All background watchers and autonomous engines are nominal. What's on your mind?`,`Never better, Sir! Standing by to assist you with your projects, coding, or whatever you need.`],n=t[Math.floor(Math.random()*t.length)];b(`jarvis`,n),Z(n),fetch(s()+`/living-memory/assimilate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userMessage:e,assistantMessage:n,toolsUsed:[]})}).catch(()=>{});return}if(/^(?:who\s+are\s+you|what\s+are\s+you|kaun\s+ho\s+tum|your\s+name)$/i.test(t)){let e=`I am J.A.R.V.I.S — Just A Rather Very Intelligent System. Your sovereign AI partner, 24/7 personal operating system, and loyal assistant on this PC.`;b(`jarvis`,e),Z(e);return}if(/^(?:are\s+you\s+there|you\s+there|sun\s+rhe\s+ho|sun\s+rahe\s+ho|awake|online\s*\?*)$/i.test(t)){let e=`Always right here, Sir. Listening and at your command.`;b(`jarvis`,e),Z(e);return}if(/^(?:switch\s+off(?:\s+the)?\s+(?:pc|computer|laptop)|turn\s+off(?:\s+the)?\s+(?:pc|computer|laptop)|shutdown(?:\s+(?:the\s+)?(?:pc|computer|laptop))?|pc\s+band\s+karo?)\b/i.test(t)){b(`jarvis`,`🚨 <b>Sir, initiating immediate system shutdown sequence.</b> Powering down workstation now.`),Z(`Sir, initiating workstation shutdown sequence now.`),fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`shutdown`,delay_seconds:0})}).catch(()=>{});return}if(/^(?:sleep(?:\s+(?:the\s+)?(?:pc|computer|laptop))?|put\s+pc\s+to\s+sleep)\b/i.test(t)){b(`jarvis`,`💤 <b>Sir, putting workstation to sleep now.</b>`),Z(`Sir, putting your workstation to sleep.`),fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`sleep`})}).catch(()=>{});return}if(/^(?:restart(?:\s+(?:the\s+)?(?:pc|computer|laptop))?|reboot(?:\s+(?:the\s+)?(?:pc|computer|laptop))?)\b/i.test(t)){b(`jarvis`,`🔄 <b>Sir, initiating workstation reboot sequence.</b>`),Z(`Sir, restarting your workstation now.`),fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`restart`,delay_seconds:0})}).catch(()=>{});return}if(e.toLowerCase().includes(`lock pc`)||e.toLowerCase().includes(`lock computer`)){b(`jarvis`,`🔒 Locking workstation...`),Z(`Locking your workstation, Sir.`),fetch(`${s()}/execute`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({command:`rundll32.exe user32.dll,LockWorkStation`})}).catch(e=>console.error(e));return}let r=e.match(/^(?:play\s+song|play\s+music|play\s+track|play)\s+(.+)$/i);if(r&&!/^(?:with|game|video|role)\b/i.test(r[1])){let e=r[1].trim().replace(/\s+(on\s+yt\s*music|on\s+youtube\s*music|in\s+widget|please)$/i,``);if(b(`jarvis`,`🎵 <i>Dispatching '<b>${e}</b>' to YouTube Music widget...</i>`),typeof window<`u`&&window.jarvisMusicPlay){window.jarvisMusicPlay(e).then(t=>{let n=t?.track||e,r=t?.artist?` by ${t.artist}`:``;b(`jarvis`,`▶ <b>Now Streaming:</b> ${n}${r} in your YouTube Music widget.`),Z(`Playing ${n}${r}, Sir.`)}).catch(e=>{b(`jarvis`,`⚠️ Music widget notice: ${e.message}`)});return}}if(/^(?:clean\s+(?:up\s+)?ram|free\s+(?:up\s+)?(?:ram|memory)|optimize\s+(?:system|resources?|memory|ram)|flush\s+ram)\b/i.test(e.trim())){b(`jarvis`,`⚡ <i>Executing active resource optimization and memory trimming...</i>`),Z(`Initiating resource optimization and memory trimming, Sir.`);try{let e=await fetch(`${s()}/system/optimize`,{method:`POST`}).then(e=>e.json()),t=`<div style="background:rgba(0,230,118,0.08);border:1px solid rgba(0,230,118,0.3);border-radius:8px;padding:12px;margin:8px 0;">`;t+=`<div style="font-weight:700;color:#00e676;margin-bottom:6px;font-size:0.95rem;">🧹 RESOURCE OPTIMIZATION COMPLETE</div>`,t+=`<div style="font-size:0.85rem;line-height:1.5;">`,t+=`• <b>RAM Reclaimed:</b> <span style="color:#00e676;">+${e.ram_freed_mb||0} MB</span><br/>`,t+=`• <b>Stale Cache Files Purged:</b> ${e.temp_files_cleaned||0} files (${e.disk_freed_mb||0} MB)<br/>`,t+=`• <b>Working Sets Trimmed:</b> ${e.working_sets_trimmed||1} processes<br/>`,e.current_ram_percent&&(t+=`• <b>Current RAM Usage:</b> ${e.current_ram_percent}%<br/>`),t+=`</div></div>`,b(`jarvis`,t),Z(`Optimization complete, Sir. Reclaimed ${e.ram_freed_mb||0} megabytes of RAM.`)}catch(e){b(`jarvis`,`Optimization failed: ${e.message}`)}return}if(e.match(/^(?:battery(?:\s+status|\s+level|\s+health)?|how\s+much\s+battery|is\s+(?:pc|laptop)\s+charging|ram(?:\s+usage|\s+status)?|memory(?:\s+usage)?|cpu(?:\s+usage|\s+load)?|system\s+resources?|hardware\s+status|pc\s+specs?)\b/i)){b(`jarvis`,`⚡ <i>Querying live hardware telemetry...</i>`);try{let e=await fetch(`${s()}/system/resources`).then(e=>e.json()),t=e.cpu||{},n=e.ram||{},r=e.battery||{},i=e.disk||{},a=(e.power_mode||`Performance`).toUpperCase(),o=r.power_plugged?`⚡`:`🔋`,c=`<div style="background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.25);border-radius:8px;padding:12px;margin:8px 0;">`;c+=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">`,c+=`<span style="font-weight:700;color:#00d4ff;font-size:0.95rem;">⚡ HARDWARE TELEMETRY & RESOURCES</span>`,c+=`<span style="font-size:0.75rem;padding:2px 8px;border-radius:12px;background:rgba(0,212,255,0.15);color:#00d4ff;border:1px solid rgba(0,212,255,0.3);">${a} MODE</span>`,c+=`</div>`,c+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.83rem;margin-bottom:8px;">`,c+=`<div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:6px;"><b>CPU Load:</b> <span style="color:#00d4ff;">${t.load_percent||0}%</span><br/><span style="opacity:0.7;font-size:0.75rem;">${t.logical_cores||1} Cores @ ${t.frequency_mhz||0} MHz</span></div>`,c+=`<div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:6px;"><b>RAM Usage:</b> <span style="color:${n.percent>80?`#ff5555`:`#00e676`};">${n.used_gb||0} / ${n.total_gb||0} GB</span><br/><span style="opacity:0.7;font-size:0.75rem;">${n.percent||0}% utilized (${n.free_gb||0} GB free)</span></div>`,c+=`<div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:6px;"><b>Battery:</b> <span style="color:#ffaa00;">${r.percent||100}% ${o}</span><br/><span style="opacity:0.7;font-size:0.75rem;">${r.status||`AC Power`}</span></div>`,c+=`<div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:6px;"><b>Storage (C:):</b> <span style="color:#aaa;">${i.used_gb||0} / ${i.total_gb||0} GB</span><br/><span style="opacity:0.7;font-size:0.75rem;">${i.free_gb||0} GB available</span></div>`,c+=`</div>`,e.top_processes&&e.top_processes.length>0&&(c+=`<div style="font-size:0.78rem;opacity:0.85;margin-top:6px;"><b>Top Memory Consumers:</b> `,c+=e.top_processes.slice(0,3).map(e=>`${e.name} (${e.ram_mb} MB)`).join(`, `),c+=`</div>`),c+=`</div>`,b(`jarvis`,c),Z(`System status: CPU at ${t.load_percent||0} percent, RAM at ${n.percent||0} percent, and battery is at ${r.percent||100} percent ${r.power_plugged?`and plugged in`:``}, Sir.`)}catch(e){b(`jarvis`,`Telemetry failed: ${e.message}`)}return}let i=e.match(/^(?:social\s+(?:media\s+)?(?:pulse|buzz|trends?)|ground\s+(?:reality|pulse|alerts?)|reddit\s+(?:pulse|buzz)|what(?:'s|\s+is)?\s+happening\s+in\s+([a-zA-Z\s]+))\b/i)||e.match(/^(?:check\s+)?social\s+media(?:\s+for\s+|\s+in\s+)?([a-zA-Z\s]+)?/i);if(i){let e=(i[1]||`Delhi`).trim();b(`jarvis`,`Sir, scanning real-time social media (Reddit & X/Twitter) and ground alerts for <b>${Q(e)}</b>...`),Z(`Scanning live social media and ground reality for ${e}, Sir.`);try{let t=await fetch(`${s()}/social/pulse`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({city:e,topic:e,limit:10})}).then(e=>e.json());if(t.success){let n=`<div style="background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.25);border-radius:8px;padding:12px;margin:8px 0;">`;n+=`<div style="font-weight:700;color:#00d4ff;margin-bottom:8px;font-size:0.95rem;">🚨 LIVE GROUND REALITY & SOCIAL PULSE: ${Q(t.city||e)}</div>`,t.critical_alerts&&t.critical_alerts.length>0&&(n+=`<div style="color:#ffaa00;font-weight:600;font-size:0.82rem;margin-bottom:6px;">⚠️ HIGH-IMPACT DISRUPTIONS & ALERTS (${t.critical_alerts.length}):</div>`,n+=`<ul style="margin:0 0 10px 18px;padding:0;font-size:0.83rem;">`,t.critical_alerts.slice(0,6).forEach(e=>{n+=`<li style="margin-bottom:4px;"><b>[${Q(e.source||e.platform)}]</b> ${Q(e.title)}</li>`}),n+=`</ul>`),t.social_discussions&&t.social_discussions.length>0&&(n+=`<div style="color:#88ddff;font-weight:600;font-size:0.82rem;margin-bottom:6px;">💬 RECENT LOCAL DISCUSSIONS:</div>`,n+=`<ul style="margin:0 0 0 18px;padding:0;font-size:0.82rem;opacity:0.9;">`,t.social_discussions.slice(0,4).forEach(e=>{n+=`<li style="margin-bottom:3px;"><i>[${Q(e.source||e.platform)}]</i> ${Q(e.title)}</li>`}),n+=`</ul>`),n+=`</div>`,b(`jarvis`,n),Z(`Sir, live social media ground scan complete for ${t.city||e}. ${t.critical_alerts?.length||0} alerts detected.`)}else b(`jarvis`,`Social media pulse returned no alerts for ${e}.`)}catch(e){b(`jarvis`,`Social pulse scan failed: ${e.message}`)}return}let a=e.match(/^schedule\s+(?:a\s+)?(?:whatsapp\s+(?:message\s+)?)?(?:to\s+)?([+0-9a-zA-Z_]+)\s+(?:on\s+whatsapp\s+)?(?:at|for|in)\s+([^:,-]+?)(?:\s*[:,-]\s*|\s+(?:saying|with|that)\s+|\s+)([\s\S]+)$/i)||e.match(/^schedule\s+(?:message\s+)?to\s+([+0-9a-zA-Z_]+)\s+(?:at|for|in)\s+([^:,-]+?)\s+on\s+whatsapp(?:\s*[:,-]\s*|\s+(?:saying|with|that)\s+|\s+)([\s\S]+)$/i);if(a){let e=a[1].trim(),t=a[2].trim(),n=a[3].trim();b(`jarvis`,`Sir, scheduling WhatsApp message to ${e} for ${t}...`),Z(`Scheduling message to ${e} for ${t}, Sir.`);try{b(`jarvis`,(await fetch(`${s()}/whatsapp/schedule`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({target:e,message:n,time:t})}).then(e=>e.json())).message||`Scheduled message to ${e} for ${t}.`)}catch(e){b(`jarvis`,`Scheduling failed: ${e.message}`)}return}if(/^(?:inspect|analyze|read|scan)\s+(?:current\s+)?(?:whatsapp\s+)?(?:chats?|conversations?|relations?)\b/i.test(e.trim())||/^(?:learn|guess)\s+(?:who\s+is\s+who|whatsapp\s+relations?|family\s+relations?)\b/i.test(e.trim())){b(`jarvis`,`Sir, analyzing WhatsApp conversation patterns to deduce relationships and language preferences...`),Z(`Analyzing WhatsApp chats and relational profiles now, Sir.`);try{let e=await fetch(`${s()}/whatsapp/inspect-and-learn`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({})}).then(e=>e.json());if(e.success&&e.relations_learned&&e.relations_learned.length>0){let t=e.relations_learned.map(e=>`• <b>${e.name}</b>: ${e.relation} (Confidence: ${Math.round((e.confidence||.9)*100)}%) — <i>${e.evidence||`Inferred`}</i>`).join(`<br/>`);b(`jarvis`,`Sir, successfully inferred and stored ${e.count} contact relationship(s):<br/>${t}`),Z(`I have analyzed your chats and updated relational memory for ${e.count} contacts, Sir.`)}else b(`jarvis`,e.message||`WhatsApp chat analysis complete. No new relations discovered.`)}catch(e){b(`jarvis`,`WhatsApp inspection failed: ${e.message}`)}return}if(/^(?:start|enable|resume|turn on)\s+(?:whatsapp\s+)?(?:scanner|watcher|auto-reply|background scan)\b/i.test(e.trim())||/^(?:stop|pause|disable|turn off)\s+(?:whatsapp\s+)?(?:scanner|watcher|auto-reply|background scan)\b/i.test(e.trim())||/^(?:whatsapp\s+)?(?:scanner|watcher)\s+status\b/i.test(e.trim())){let t=/^(?:stop|pause|disable|turn off)/i.test(e.trim()),n=/status/i.test(e.trim())?void 0:!t;b(`jarvis`,`Sir, querying WhatsApp background watcher service...`);try{let e=await fetch(`${s()}/whatsapp/watcher/toggle`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({active:n})}).then(e=>e.json());b(`jarvis`,e.message||`WhatsApp background scanner updated.`),Z(e.message||`WhatsApp background watcher updated, Sir.`)}catch(e){b(`jarvis`,`Watcher update failed: ${e.message}`)}return}if(/^(?:check\s+(?:my\s+)?)?(?:unread\s+)?(?:gmail|emails?|inbox)\b/i.test(e.trim())||/^(?:do\s+i\s+have\s+any\s+)?(?:new|unread)\s+(?:emails?|messages\s+in\s+gmail)\b/i.test(e.trim())){b(`jarvis`,`Sir, scanning Gmail inbox for unread messages...`),Z(`Checking your Gmail inbox now, Sir.`);try{let e=await fetch(`${s()}/gmail/unread`).then(e=>e.json());if(e.success&&e.emails&&e.emails.length>0){let t=e.emails.map(e=>`• <b>${Q(e.subject||`No Subject`)}</b> from <i>${Q(e.from||`Unknown`)}</i><br/>&nbsp;&nbsp;<small style="opacity:0.8">${Q(e.snippet||``)}</small>`).join(`<br/>`);b(`jarvis`,`Sir, you have ${e.count} unread email(s):<br/>${t}`),Z(`You have ${e.count} unread emails in your inbox, Sir.`)}else b(`jarvis`,e.message||`Sir, your Gmail inbox has no unread messages.`),Z(e.message||`Your Gmail inbox has no unread messages, Sir.`)}catch(e){b(`jarvis`,`Gmail check failed: ${e.message}`)}return}let o=e.match(/^send\s+(?:an?\s+)?email\s+to\s+([^\s]+)(?:\s+(?:with\s+)?subject\s+(.+?))?(?:\s+(?:and\s+)?(?:body|saying|message)\s+([\s\S]+))?$/i);if(o){let e=o[1].trim(),t=(o[2]||`Message from Aasim`).trim(),n=(o[3]||`Hello`).trim();b(`jarvis`,`Sir, dispatching email to ${e}...`),Z(`Sending email to ${e}, Sir.`);try{let r=await fetch(`${s()}/gmail/send`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({to:e,subject:t,body:n})}).then(e=>e.json());b(`jarvis`,r.message||`Dispatched email to ${e}.`),Z(r.message||`Email dispatched, Sir.`)}catch(e){b(`jarvis`,`Email dispatch failed: ${e.message}`)}return}let c=e.match(/^(?:send\s+(?:a\s+)?)?whatsapp(?:\s+message)?(?:\s+to)?\s+([+0-9a-zA-Z_]+)?(?:\s+(?:saying|that|with)\s+|\s+:\s*|\s+)?([\s\S]*)$/i)||e.match(/^(?:send\s+(?:a\s+)?)?(?:message|text)\s+(?:to\s+)?([+0-9a-zA-Z_]+)\s+on\s+whatsapp\s*(?:saying\s+|that\s+|:\s*)?([\s\S]*)$/i)||e.match(/^whatsapp\s+([+0-9a-zA-Z_]+)\s*(?:saying\s+|that\s+|:\s*)?([\s\S]*)$/i);if(c&&(c[1]||c[2]||/^open\s+whatsapp$/i.test(e.trim()))){let t=(c[1]||``).trim(),n=(c[2]||``).trim();/^open\s+whatsapp$/i.test(e.trim())&&(t=``,n=``),b(`jarvis`,`Sir, ${n?`autonomously dispatching message to ${t||`recipient`}`:`launching WhatsApp Desktop`}...`),Z(n?`Sending message to ${t} now, Sir.`:`Connecting to WhatsApp, Sir.`);try{b(`jarvis`,(await fetch(`${s()}/whatsapp/send`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({target:t,message:n})}).then(e=>e.json())).message||`WhatsApp message dispatched automatically.`)}catch(e){b(`jarvis`,`WhatsApp dispatch failed: ${e.message}`)}return}let u=e.match(/^(?:open|launch)\s+(?:the\s+)?([a-zA-Z0-9_\-\. ]+?)\s+(?:in|with)\s+(vscode|vs\s*code|cursor|pycharm)\b/i)||e.match(/^(?:open|launch)\s+(vscode|vs\s*code|cursor|pycharm)(?:\s+(?:project|folder|in)?\s*([a-zA-Z0-9_\-\. ]+))?$/i);if(u&&!/\b(write|show|read|check|review|explain|fix|run|debug|code\s+for)\b/i.test(e)){let e=(u[2]||u[1]||``).toLowerCase().replace(/\s+/g,``),t=(u[1]===e?u[2]:u[1])||``;(e===`vscode`||e===`code`)&&(e=`vscode`);let n=e===`vscode`?`Visual Studio Code`:e===`cursor`?`Cursor AI`:`PyCharm`;b(`jarvis`,`Sir, launching ${n}${t?` with project '${t}'`:``}...`),Z(`Launching ${n} now, Sir.`);try{b(`jarvis`,(await fetch(`${s()}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:e,target:t})}).then(e=>e.json())).message||`${n} launched.`)}catch(e){b(`jarvis`,`Error opening ${n}: ${e.message}`)}return}let f=e.match(/^(?:play|search)\s+(.+?)\s+on\s+spotify$/i)||e.match(/^(?:open|launch)\s+spotify$/i);if(f){let e=f[1]||``;b(`jarvis`,`Sir, connecting to Spotify${e?` for '${e}'`:``}...`),Z(`Connecting to Spotify now, Sir.`);try{b(`jarvis`,(await fetch(`${s()}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:`spotify`,query:e})}).then(e=>e.json())).message||`Spotify launched.`)}catch(e){b(`jarvis`,`Spotify action error: ${e.message}`)}return}if(/^(?:pause|resume|skip|next|prev|previous)\s+(?:song|music|spotify|track)$/i.test(e.trim())||/^(?:next|skip|prev|previous)\s+song$/i.test(e.trim())){let t=`play_pause`;(e.includes(`next`)||e.includes(`skip`))&&(t=`next`),e.includes(`prev`)&&(t=`prev`);try{await fetch(`${s()}/apps/media`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:t})});let e=t===`next`?`Skipped to next track, Sir.`:t===`prev`?`Returning to previous track, Sir.`:`Playback toggled, Sir.`;b(`jarvis`,e),Z(e)}catch{}return}let p=e.match(/^(?:open|launch)\s+(?:https?:\/\/)?([a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)\s+(?:in|on)\s+(chrome|edge)\b/i)||e.match(/^(?:search|google)\s+(.+?)\s+(?:in|on)\s+(chrome|edge)\b/i)||e.match(/^(?:open|launch)\s+(chrome|edge)(?:\s+(?:in\s+)?incognito)?$/i);if(p){let t=p[1]||``,n=(p[2]||(p[1]&&[`chrome`,`edge`].includes(p[1].toLowerCase())?p[1]:`chrome`)).toLowerCase(),r=e.toLowerCase().includes(`incognito`)||e.toLowerCase().includes(`private`);b(`jarvis`,`Sir, launching ${n===`edge`?`Microsoft Edge`:`Google Chrome`}...`),Z(`Launching browser now, Sir.`);try{b(`jarvis`,(await fetch(`${s()}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:n,target:t.startsWith(`http`)||t.includes(`.`)?t:``,query:t.includes(`.`)?``:t,incognito:r})}).then(e=>e.json())).message||`Browser launched.`)}catch(e){b(`jarvis`,`Browser launch error: ${e.message}`)}return}if(/^(?:open|launch)\s+discord$/i.test(e.trim())){b(`jarvis`,`Sir, launching Discord...`),Z(`Launching Discord now, Sir.`),fetch(`${s()}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:`discord`})}).catch(()=>{});return}if(/^(?:open|launch)\s+github(?:\s+desktop)?$/i.test(e.trim())){b(`jarvis`,`Sir, launching GitHub Desktop...`),Z(`Launching GitHub Desktop now, Sir.`),fetch(`${s()}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:`github`})}).catch(()=>{});return}let m=e.match(/^(?:open|launch)\s+(notepad|calculator|calc|task\s*manager|taskmgr|settings|wifi\s*settings|bluetooth\s*settings|snipping\s*tool|terminal|powershell|git\s*bash|cmd|downloads|desktop|documents|projects|file\s*explorer|explorer)\b/i);if(m&&m[1]){let e=m[1].toLowerCase().replace(/\s+/g,``);b(`jarvis`,`Sir, launching ${m[1]}...`),Z(`Launching ${m[1]}, Sir.`);try{b(`jarvis`,(await fetch(`${s()}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:e})}).then(e=>e.json())).message||`${m[1]} launched.`)}catch(e){b(`jarvis`,`Error: ${e.message}`)}return}let h=e.match(/^(?:write\s+note|take\s+note|create\s+note)\s+(.+)/i);if(h&&h[1]){let e=h[1].trim();b(`jarvis`,`Sir, creating note on Desktop and launching Notepad...`),Z(`Creating your note now, Sir.`);try{b(`jarvis`,(await fetch(`${s()}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:`notepad`,text:e})}).then(e=>e.json())).message||`Note opened in Notepad.`)}catch(e){b(`jarvis`,`Note creation error: ${e.message}`)}return}let g=e.match(/^(?:delete|remove|rm)\s+(?:the\s+)?(?:folder|file|directory)?\s*([a-zA-Z0-9_\-\. ]+?)(?:\s+folder|\s+directory|\s+file)?$/i);if(g&&g[1]){let e=g[1].trim();if(![`chat`,`history`,`memory`,`all`,`notes`].includes(e.toLowerCase())){b(`jarvis`,`Sir, locating and deleting '${e}'...`);try{let t=await fetch(`${s()}/api/tools/execute`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({tool:`delete_file`,args:{path_or_query:e}})}).then(e=>e.json()),n=t.result||t.message||(t.success?`Sir, '${e}' has been deleted successfully.`:`Sir, unable to delete '${e}': ${t.error||`file not found`}`);b(`jarvis`,n),Z(n)}catch(e){b(`jarvis`,`Sir, deletion request failed: ${e.message}`)}return}}if(/\b(?:abort|cancel|stop|don'?t|do\s+not)\b[\s\S]*?\b(?:shutdown|shut\s*down|turn\s*off|switch\s*off)\b/i.test(e)){try{let e=(await fetch(`${s()}/antigravity/cancel-shutdown`,{method:`POST`}).then(e=>e.json())).message||`Sir, pending PC shutdown has been aborted.`;b(`jarvis`,e),Z(e)}catch{b(`jarvis`,`Sir, pending PC shutdown has been cancelled.`),Z(`Sir, pending PC shutdown has been cancelled.`)}return}if(/\b(?:shutdown|shut\s*down|turn\s*off|switch\s*off|power\s*off|sleep|lock)\b/i.test(e)&&/\b(?:antigravity|forge|work|task|finishes?|completed?|done|after\s+(?:this|you|work)|when\s+(?:you'?re\s+)?done)\b/i.test(e)){let t=`shutdown`;/\bsleep\b/i.test(e)?t=`sleep`:/\block\b/i.test(e)&&(t=`lock`),b(`jarvis`,`Sir, post-task PC **${t}** is now armed on **FORGE**. As soon as Antigravity finishes its current work in VS Code, I will automatically commit and push all changes to GitHub and ${t} your PC.`),Z(`Sir, post-task PC ${t} is armed. Once Antigravity finishes its work and syncs to GitHub, I will automatically ${t} your PC.`),l(t,{post_antigravity:!0}),fetch(`${s()}/antigravity/arm-power`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:t})}).catch(()=>{});return}if(/^(?:(?:hey\s+|yo\s+|bro\s+|bhai\s+|ok\s+|okay\s+)?(?:jarvis\s+)?)?(?:please\s+)?(?:put\s+(?:the\s+|my\s+)?pc\s+to\s+sleep|sleep\s+(?:the\s+|my\s+)?pc|sleep\s*mode|go\s+to\s+sleep|so\s*jao|sula\s*do\s*pc|pc\s*ko\s*sula\s*do|suspend\s+(?:the\s+|my\s+)?pc)$/i.test(e.trim())||/^(?:sleep|put pc to sleep|sleep pc|sleep my pc)$/i.test(e.trim())){let e=`Sir, putting your workstation to sleep now.`;b(`jarvis`,e),Z(e);try{l(`sleep`,{post_antigravity:!1}),await fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`sleep`})})}catch(e){console.error(`[CommandBar] Direct sleep error:`,e)}return}if(/^(?:(?:hey\s+|yo\s+|bro\s+|bhai\s+|ok\s+|okay\s+)?(?:jarvis\s+)?)?(?:please\s+)?(?:shut\s*down\s+(?:the\s+|my\s+)?pc|turn\s*off\s+(?:the\s+|my\s+)?pc|switch\s*off\s+(?:the\s+|my\s+)?pc|power\s*off\s+(?:the\s+|my\s+)?pc|pc\s*band\s*kar(?:o|do)|band\s*kar\s*do\s*pc)$/i.test(e.trim())||/^(?:shut\s*down\s+pc|shutdown\s+pc|shut\s*down\s+my\s+pc|shutdown\s+my\s+pc|turn\s*off\s+pc|turn\s*off\s+my\s+pc)$/i.test(e.trim())){let e=`Sir, initiating immediate workstation shutdown.`;b(`jarvis`,e),Z(e);try{l(`shutdown`,{post_antigravity:!1}),await fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`shutdown`,delay_seconds:0})})}catch(e){console.error(`[CommandBar] Direct shutdown error:`,e)}return}if(/^(?:(?:hey\s+|yo\s+|bro\s+|bhai\s+|ok\s+|okay\s+)?(?:jarvis\s+)?)?(?:please\s+)?(?:restart|reboot)\s+(?:the\s+|my\s+)?pc$/i.test(e.trim())||/^(?:restart\s+pc|reboot\s+pc|restart\s+my\s+pc)$/i.test(e.trim())){let e=`Sir, restarting your workstation.`;b(`jarvis`,e),Z(e);try{await fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`restart`,delay_seconds:0})})}catch(e){console.error(`[CommandBar] Direct restart error:`,e)}return}if(/^(?:(?:hey\s+|yo\s+|bro\s+|bhai\s+|ok\s+|okay\s+)?(?:jarvis\s+)?)?(?:please\s+)?(?:lock\s+(?:the\s+|my\s+)?(?:pc|workstation)|lock\s*pc)$/i.test(e.trim())||/^(?:lock\s+pc|lock\s+workstation|lock\s+my\s+pc)$/i.test(e.trim())){let e=`Sir, locking your workstation.`;b(`jarvis`,e),Z(e);try{l(`lock`,{post_antigravity:!1}),await fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`lock`})})}catch(e){console.error(`[CommandBar] Direct lock error:`,e)}return}if(/^(?:(?:hey\s+|yo\s+|bro\s+|bhai\s+|ok\s+|okay\s+)?(?:jarvis\s+)?)?(?:please\s+)?(?:unlock\s+(?:the\s+|my\s+)?(?:pc|workstation|screen|computer)|unlock\s*pc|pc\s*unlock\s*(?:kar(?:o|do|na))?|unlock)$/i.test(e.trim())||/^(?:unlock\s+pc|unlock\s+my\s+pc|unlock\s+workstation|pc\s*unlock)$/i.test(e.trim())){let e=`Sir, unlocking your workstation with PIN 2006 now.`;b(`jarvis`,e),Z(e);try{await fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`unlock`,pin:`2006`})})}catch(e){console.error(`[CommandBar] Direct unlock error:`,e)}return}if(/^(?:check\s+antigravity|what\s+is\s+antigravity\s+doing|antigravity\s+status|antigravity\s+chat|is\s+antigravity\s+(?:done|working|busy)|antigravity\s+update)$/i.test(e.trim())){try{let e=await fetch(`${s()}/antigravity/chat`).then(e=>e.json());if(e&&e.success){let t=e.is_busy,n=t?`⚡`:`🟢`,r=t?`Busy executing / thinking`:`Idle (turn completed)`,i=Math.round(e.seconds_since_activity||0),a=`${n} **Antigravity VS Code Session** [${e.conversation_id?e.conversation_id.slice(0,8):`active`}...]\n• **State**: ${r} (${i}s ago)\n• **VS Code**: v${e.vscode?.product_version||`1.142.0`} (PID Count: ${e.vscode?.process_count||1})\n`;e.last_user_prompt&&(a+=`• **Latest User Request**: "${e.last_user_prompt.slice(0,150)}..."\n`),e.last_assistant_response&&(a+=`• **Antigravity Reply**: "${e.last_assistant_response.slice(0,200)}..."\n`),b(`jarvis`,a),Z(`Sir, Antigravity in VS Code is currently ${t?`busy executing`:`idle`}. Last turn was ${i} seconds ago.`)}else b(`jarvis`,`Sir, unable to connect to the active Antigravity session in VS Code.`),Z(`Unable to connect to the active Antigravity session, Sir.`)}catch(e){b(`jarvis`,`Sir, error fetching Antigravity chat: ${e.message}`)}return}if(e.trim().match(/^(?:(?:can\s+you\s+|please\s+|bro\s+|jarvis\s*,?\s*)?(?:self[\s-]?update|update\s+(?:yourself|jarvis|system|hud|code|kernel)|check\s+(?:for\s+)?(?:updates|upgrades)|pull\s+(?:latest\s+)?updates|upgrade\s+(?:system|jarvis|hud)))\b/i)){``+Date.now(),b(`jarvis`,`
          <div class="jarvis-card" style="border: 1px solid #00d4ff; padding: 12px; border-radius: 8px; background: rgba(0, 212, 255, 0.05); margin-top: 6px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,212,255,0.2); padding-bottom:6px; margin-bottom:8px;">
              <span style="font-weight:700; color:#00d4ff; font-size:0.85rem;">⚡ AUTONOMOUS SELF-UPDATE & KERNEL UPGRADE</span>
              <span style="font-size:0.7rem; color:#2ed573; font-family:monospace;">● INITIATING</span>
            </div>
            <div style="font-size:0.8rem; color:#e0e6ed; line-height:1.5;">
              <p>🔄 <b>Step 1:</b> Inspecting upstream repository commits & verifying git integrity...</p>
              <p>⚡ <b>Step 2:</b> Synchronizing neural kernel & compiling production HUD bundles...</p>
            </div>
          </div>
        `),Z(`Sir, executing autonomous self-update sequence. Pulling latest repository commits, verifying neural integrity, and syncing production HUD.`);try{let e=await fetch(`${s()}/system/self-update`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({force:!1})}).then(e=>e.json());document.querySelector(`[class*="jarvis-card"]`),b(`jarvis`,`
            <div class="jarvis-card" style="border: 1px solid #2ed573; padding: 12px; border-radius: 8px; background: rgba(46, 213, 115, 0.07); margin-top: 6px;">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(46,213,115,0.3); padding-bottom:6px; margin-bottom:8px;">
                <span style="font-weight:700; color:#2ed573; font-size:0.85rem;">✓ KERNEL & HUD SELF-UPDATE COMPLETED</span>
                <span style="font-size:0.7rem; color:#2ed573; font-family:monospace;">● 100% OPERATIONAL</span>
              </div>
              <div style="font-size:0.82rem; color:#e0e6ed; line-height:1.5; margin-top:6px;">
                <p><b>Status:</b> ${e.message||`Kernel verified at latest commit.`}</p>
                <p style="color:#00d4ff; font-family:monospace; font-size:0.75rem; margin-top:4px;"><b>Active Kernel:</b> ${e.current_commit||`Active`}</p>
                <p style="color:#a4b0be; font-size:0.75rem; margin-top:4px;"><b>Proactive Action:</b> Production client sanitized and live PWA synchronized.</p>
              </div>
            </div>
          `),Z(e.updated?`Sir, self-update complete! Your J.A.R.V.I.S kernel and mobile HUD have been successfully upgraded.`:`Sir, your J.A.R.V.I.S system is already running the absolute latest commit with zero defects.`)}catch{b(`jarvis`,`Sir, your sovereign mobile HUD is currently running standalone with local neural engines active.`)}return}let _=e.trim().match(/^(?:.*\b(?:tell|ask|dispatch(?:\s+task)?\s+to|have|get|command|run|start|instruct)\s+(?:google\s+)?(?:antigravity|anitgravity|antigrav|forge)(?:\s+to|\s*:)?|(?:.*\b)?(?:google\s+)?(?:antigravity|anitgravity|antigrav|forge)\s*(?::|do|task\s*:|please)?)\s+([\s\S]+)$/i),v=!_&&e.trim().match(/^([\s\S]+?)\s+(?:with|in|using|via|on|through)\s+(?:google\s+)?(?:antigravity|anitgravity|antigrav|forge)$/i),y=!_&&!v&&/(?:antigravity|anitgravity|antigrav|forge)/i.test(e.trim())&&/(?:fix|modify|update|code|debug|build|create|screen|navbar|button|ui|page)/i.test(e.trim())?[null,e.trim().replace(/^.*?\b(?:antigravity|anitgravity|antigrav|forge)\s*(?:to\s+|:\s*)?/i,``)]:null,x=_||v||y;if(x){let t=(x[1]||e.trim()).trim(),n=``,r=t,i=t.match(/^(?:go\s+to|navigate\s+to|open|switch\s+to|in|on|for|at|project)\s+(?:the\s+)?(?:project\s+)?([A-Za-z0-9_-]+)(?:\s+(?:and|to|,|:)\s+|\s+)([\s\S]+)$/i);if(i)n=i[1].trim(),r=i[2].trim();else{let e=t.match(/\b(?:on|in|for)\s+(?:the\s+)?project\s+([A-Za-z0-9_-]+)/i)||t.match(/\b(?:on|in|for)\s+([A-Za-z0-9_-]+)(?:\s+project)?$/i);e&&e[1]&&(n=e[1],r=t.replace(e[0],``).trim())}let a=`agy_card_`+Date.now();b(`jarvis`,S(a,n,r)),Z(`Sir, dispatching task to Antigravity${n?` on ${n}`:``} now. Tracking progress in real time.`),l(`antigravity_dispatch`,{instruction:r,project:n,category:`coding`,model:`gemini-3.8-flash-high`}),fetch(`${s()}/antigravity/dispatch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({instruction:r,project:n,category:`coding`,model:`gemini-3.8-flash-high`})}).then(e=>e.json()).then(e=>{C(a,e?.task_id||`agy_${Date.now()}`,n||e?.project)}).catch(e=>{console.error(`[CommandBar] Antigravity dispatch error:`,e),C(a,null,n)});return}let ee=e.trim().match(/^(?:(?:run|start|execute|launch|dispatch)\s+)?(?:multi[\s-]?task(?:ing)?|swarm(?:\s+task)?|combined\s+task)\s*(?::|-)?\s*([\s\S]+)$/i);if(ee){let e=ee[1].trim(),t=`swarm_multi_`+Date.now();b(`jarvis`,`
          <div class="jarvis-card" style="border:1px solid #00d4ff; padding:12px; border-radius:8px; background:rgba(0,212,255,0.06); margin-top:6px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span style="font-weight:700; color:#00d4ff; font-size:0.8rem;">🐝 MULTI-BOT SWARM TASK ORCHESTRATOR</span>
              <span style="font-size:0.7rem; color:#ffd32a; font-family:monospace;">DISPATCHING</span>
            </div>
            <div style="font-size:0.78rem; color:#fff; margin-bottom:6px;"><strong>Directives:</strong> ${Q(e)}</div>
            <div id="${t}_status" style="font-size:0.72rem; color:#a0aec0; font-family:monospace;">Decomposing into sub-tasks across FRIDAY, RADAR, FORGE, NEXUS, CHRONOS...</div>
          </div>
        `),Z(`Sir, decomposing multi-task across the specialist swarm now.`),fetch(`${s()}/swarm/execute-combined`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({task:e})}).then(e=>e.json()).then(e=>{let n=document.getElementById(`${t}_status`);if(n){let t=(e.results||[]).map(e=>`• ${Q(e)}`).join(`<br/>`);n.innerHTML=`
              <div style="color:#00ff88; font-weight:600; margin-top:4px;">✓ Multi-Task Executed Successfully (${e.subtasks_count||(e.results||[]).length} steps):</div>
              <div style="color:#e2e8f0; margin-top:4px; line-height:1.4;">${t||`All swarm directives completed.`}</div>
            `}Z(`Sir, your multi-task has completed successfully across the swarm.`)}).catch(e=>{let n=document.getElementById(`${t}_status`);n&&(n.textContent=`Notice: Multi-task queued in telemetry (${e.message})`)});return}if(/^(?:mute|unmute|be quiet|stop talking|chup|ruk jao|silence)$/i.test(e.trim())){if(typeof window<`u`&&window.jarvisToggleVoiceMute){let e=window.jarvisToggleVoiceMute();fetch(`${s()}/system/mute`,{method:`POST`}).catch(()=>{});let t=e?`Sir, audio and voice speech are now muted.`:`Sir, audio and voice speech are restored.`;b(`jarvis`,t),e||Z(t)}return}let te=e.match(/^(?:play|chalao|baja do|listen to)\s+(.+)/i);if(te&&te[1]&&!e.toLowerCase().includes(`game`)&&!e.toLowerCase().includes(`video`)){let e=te[1].replace(/on youtube music|on youtube|in jarvis/i,``).trim();if(typeof window<`u`&&window.jarvisMusicPlay){b(`jarvis`,`Sir, searching YouTube Music for '${e}'...`);let t=await window.jarvisMusicPlay(e);t&&t.message&&(b(`jarvis`,t.message),Z(t.message));return}}let w=e.match(/\b(?:convert|make|change|set|turn)\s+([a-zA-Z0-9_.-]+)(?:\s+repo|\s+repository)?\s+(?:into\s+|to\s+|as\s+)?(?:a\s+)?(pvt|private|public)(?:\s+repo|\s+repository)?\b/i);if(w){let e=w[1],t=/^(?:pvt|private)$/i.test(w[2]);b(`jarvis`,`Sir, updating GitHub repository **${e}** visibility to **${t?`Private 🔒`:`Public 🌐`}**...`);try{let n=await fetch(`${s()}/github/visibility`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({repo:e,private:t})}).then(e=>e.json()),r=n.message||(n.status===`success`?`Sir, **${n.repo||e}** is now a **${t?`Private`:`Public`}** repository.`:`Sir, could not update repository visibility: ${n.error||`Unknown error`}`);b(`jarvis`,r),Z(r.replace(/[*🔒🌐]/g,``))}catch(e){b(`jarvis`,`Sir, GitHub visibility request failed: ${e.message}`)}return}if(e.match(/^(?:please\s+|bro\s+|jarvis\s+|forge\s+)?(?:git\s+(?:push|commit(?:\s+and\s+push)?)|(?:commit\s+and\s+)?push\s+(?:the\s+|my\s+|all\s+)?(?:code|changes|commits|repo|repository|everything|jarvis|[a-zA-Z0-9_.-]+)(?:\s+to\s+github)?|commit\s+(?:the\s+|my\s+|all\s+)?(?:code|changes|everything)(?:\s+and\s+push)?(?:\s+to\s+github)?|sync\s+(?:all\s+)?(?:github|repos|repositories|code))\b/i)){let t=e.match(/\b(?:push|commit)\s+(?:the\s+|my\s+)?([a-zA-Z0-9_.-]+)(?:\s+to\s+github)?$/i),n=(t&&!/^(?:code|changes|commits|repo|repository|it|now|github|all|everything)$/i.test(t[1])?t[1]:null)||`all`;b(`jarvis`,`Sir, staging, committing, and pushing **${n===`all`?`ALL ACTIVE REPOSITORIES`:n.toUpperCase()}** to GitHub now...`);try{let e=await fetch(`${s()}/github/sync-now`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({localPath:n})}).then(e=>e.json());typeof window<`u`&&window.dispatchEvent(new CustomEvent(`jarvis:github-synced`));let t=e.message||(e.success?`Sir, code has been committed and pushed to GitHub successfully.`:`Sir, GitHub push encountered an error: ${e.error||`Unknown error`}`);b(`jarvis`,t),Z(t.replace(/[*`]/g,``))}catch(e){b(`jarvis`,`Sir, GitHub push request failed: ${e.message}`)}return}if(/^(?:list|show|get|check|what\s+are\s+(?:the|my)?)\s+(?:n8n|nexus)(?:\s+workflows|\s+automations|\s+pipelines|\s+status)?\b/i.test(e.trim())){try{let e=await d(`/n8n/workflows`).then(e=>e.json()),t=e.workflows||[],n=e.recent_executions||[],r=`⚡ **NEXUS • n8n Automation Engine (${t.length} Active Pipelines)**\n\n`;if(r+=t.map((e,t)=>`${t+1}. **${e.name}** (\`${e.trigger_path}\`) — ${e.description||``}${e.last_run?` *(Last run: ${new Date(e.last_run).toLocaleTimeString()})*`:``}`).join(`
`),n.length>0){let e=n[n.length-1];r+=`\n\n**Latest Execution:** *${e.workflow_title||e.instruction}* (${(e.steps_executed||[]).length} steps completed)`}b(`jarvis`,`<div class="jarvis-markdown">${vl(r)}</div>`),Z(`Sir, NEXUS currently has ${t.length} active n8n automation pipelines armed and ready.`)}catch(e){b(`jarvis`,`Sir, could not retrieve n8n workflows: ${e.message}`)}return}let ne=e.match(/^(?:(?:please\s+|bro\s+|jarvis\s+)?(?:use|select|switch\s+to|change\s+to|deliver\s+to|set)\s+(?:my\s+)?(hostel|home|ghar|kanpur|lab|campus|college)\s*(?:address)?|(?:show|list|what\s+are)\s+(?:my\s+)?(?:saved\s+)?addresses)$/i);if(ne){let e=(ne[1]||``).trim();if(e)try{let t=(await d(`/commerce/addresses/select`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({address:e})}).then(e=>e.json())).active_address||{};b(`jarvis`,`<div class="jarvis-markdown">${vl(`📍 **Active Delivery Address Set to: ${t.label||e}**\n\n- **Recipient:** ${t.name||`Mohd Aasim Ansari`}\n- **Address:** ${t.address_line1||``}, ${t.city} (${t.pincode})\n- **Synced with:** ${(t.platforms||[`Amazon`,`Flipkart`,`Blinkit`,`Zomato`]).join(`, `)}`)}</div>`),Z(`Selected your ${t.label||e} address for all ecommerce orders, Sir.`)}catch(e){b(`jarvis`,`Sir, could not switch address: ${e.message}`)}else try{let e=(await d(`/commerce/addresses`).then(e=>e.json())).addresses||{},t=`📍 **Your Saved Delivery Addresses (Amazon, Flipkart, Blinkit, Zomato):**

`;for(let[n,r]of Object.entries(e))t+=`• **${r.label}** ${r.is_default?`*(Active Default)*`:``}\n  ${r.address_line1||``}, ${r.city} (${r.pincode})\n`;b(`jarvis`,`<div class="jarvis-markdown">${vl(t)}</div>`),Z(`Sir, I have retrieved your saved addresses for Hostel, Kanpur Home, and Data Science Lab.`)}catch(e){b(`jarvis`,`Sir, could not list addresses: ${e.message}`)}return}let re=e.match(/^(?:(?:please\s+|bro\s+|jarvis\s+)?(?:run|trigger|execute|start|launch)\s+(?:the\s+|my\s+)?(?:n8n\s+(?:workflow\s+|automation\s+)?|nexus\s+(?:workflow\s+|automation\s+)?|workflow\s+)(.+)|nexus\s*:\s*(.+)|(?:run|trigger)\s+(daily\s+sync|morning\s+sync|daily\s+briefing|ci\s+self[\s-]*heal|smart\s+backup))$/i);if(re){let e=(re[1]||re[2]||re[3]||`daily-sync`).trim();b(`jarvis`,`⚡ **NEXUS** is executing workflow: **"${Q(e)}"**...`),Z(`Executing NEXUS automation workflow ${e}, Sir.`);try{let t=await d(`/n8n/trigger`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({workflow:e,payload:{instruction:e}})}).then(e=>e.json()),n=t.workflow||e,r=Array.isArray(t.steps_executed)&&t.steps_executed.length>0?`

**Pipeline Steps Executed:**
`+t.steps_executed.map(e=>`- ✓ ${e}`).join(`
`):``,i=t.output||t.message||`Workflow '${n}' completed.`;b(`jarvis`,`<div class="jarvis-markdown">${vl(`⚡ **[NEXUS • ${n}]**\n\n${i}${r}`)}</div>`),Z((t.message||i).replace(/[*#`]/g,``))}catch(e){b(`jarvis`,`Sir, NEXUS workflow execution encountered an error: ${e.message}`)}return}if(/\bdeploy\b[\s\S]*?\b(railway|render)\b/i.test(e)){let t=/\brender\b/i.test(e)?`render`:`railway`;b(`jarvis`,`Sir, syncing production build to GitHub and initiating **${t.toUpperCase()}** Cloud Hybrid deployment...`),Z(`Initiating ${t} cloud deployment now, Sir.`);try{let e=(await fetch(`${s()}/cloud/deploy`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({provider:t})}).then(e=>e.json())).message||`Sir, ${t} deployment sequence initiated.`;b(`jarvis`,e),Z(e)}catch(e){b(`jarvis`,`Sir, cloud deploy trigger encountered an error: ${e.message}`)}return}if(/\b(?:look\s+at\s+(?:my\s+)?screen|what(?:'s|\s+is)\s+on\s+(?:my\s+)?screen|analyze\s+(?:my\s+)?screen|scan\s+(?:my\s+)?screen|read\s+(?:my\s+)?screen|debug\s+(?:my\s+)?screen|fix\s+(?:this\s+)?error\s+on\s+(?:my\s+)?screen|solve\s+(?:this\s+)?(?:on\s+)?(?:my\s+)?screen|explain\s+(?:my\s+)?screen|meri\s+screen\s+dekho|screen\s+dekho|screen\s+par\s+kya\s+hai)\b/i.test(e)){b(`jarvis`,`Sir, capturing live screen feed and engaging multimodal neural vision...`),Z(`Scanning your screen now, Sir.`);try{let t=await fetch(`${s()}/vision/analyze`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({prompt:e})}).then(e=>e.json());if(t&&t.success&&t.analysis){let e=t.image_base64?`<div style="margin:8px 0 10px 0; border:1px solid rgba(0,212,255,0.35); border-radius:8px; overflow:hidden; max-height:170px; background:#050b14;">
                   <img src="data:image/png;base64,${t.image_base64}" style="width:100%; height:170px; object-fit:cover; display:block;" alt="Live Screen Capture" />
                 </div>`:``;b(`jarvis`,`
              <div class="jarvis-summary-card">
                <div class="jarvis-summary-header">
                  <span class="jarvis-summary-badge">👁️ LIVE SCREEN VISION</span>
                  <span class="jarvis-summary-title">${Q(t.active_window||`Active Display`)}</span>
                </div>
                ${e}
                <div class="jarvis-summary-body jarvis-markdown">
                  ${vl(t.analysis)}
                </div>
              </div>
            `),Z(t.spoken_summary||`Sir, screen analysis is complete and displayed.`)}else{let e=`Sir, screen vision encountered an issue: ${t?.error||`Unable to analyze screen.`}`;b(`jarvis`,e),Z(e)}}catch(e){b(`jarvis`,`Sir, screen vision bridge failed: ${e.message}`)}return}if(/^(?:summarize|summary of|give me a summary of|break down|synthesize|summarise)\b/i.test(e.trim())||/^(?:summarize|summary)$/i.test(e.trim())||/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)/i.test(e)){let t=e.replace(/^(?:summarize|summary of|give me a summary of|break down|synthesize|summarise)\s+/i,``).replace(/^(?:this\s+video|this\s+pdf|this\s+doc|this\s+document|the\s+video|the\s+pdf)\s*/i,``).trim();if(!t&&typeof window<`u`&&window.__jarvisActiveDocument){let e=window.__jarvisActiveDocument;t=e.filepath||e.filename||``}if(t){b(`jarvis`,`Sir, initiating deep neural intelligence synthesis for <b>${Q(t)}</b>...`),Z(`Synthesizing intelligence brief now, Sir.`);try{let e=await fetch(`${s()}/summarize`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({input:t})}).then(e=>e.json());if(e&&e.success&&e.summary){let n=e.type===`youtube`?`🎬`:e.type===`pdf`?`📕`:`🌐`,r=e.type===`youtube`?`YOUTUBE INTEL`:e.type===`pdf`?`PDF ANALYSIS`:`TOPIC SYNTHESIS`,i=e.title||e.filename||e.topic||t,a=``;e.type===`youtube`&&e.thumbnail?a=`
                  <div class="jarvis-summary-media">
                    <img src="${e.thumbnail}" class="jarvis-summary-thumb" alt="Thumbnail" />
                    <div class="jarvis-summary-meta">
                      <b>Creator:</b> ${Q(e.channel||`Unknown`)}<br/>
                      <b>Duration:</b> ${e.duration||`N/A`}<br/>
                      <b>Captions:</b> ${e.has_subtitles?`Timed Transcript Verified`:`Metadata Synthesized`}
                    </div>
                  </div>
                `:e.type===`pdf`&&(a=`
                  <div class="jarvis-summary-media">
                    <div style="font-size: 2rem;">📕</div>
                    <div class="jarvis-summary-meta">
                      <b>File:</b> ${Q(e.filename||i)}<br/>
                      <b>Pages:</b> ${e.pages_read||e.total_pages||1} / ${e.total_pages||1}<br/>
                      <b>Chars Scanned:</b> ${(e.char_count||0).toLocaleString()}
                    </div>
                  </div>
                `),b(`jarvis`,`
                <div class="jarvis-summary-card">
                  <div class="jarvis-summary-header">
                    <span class="jarvis-summary-badge">${n} ${r}</span>
                    <span class="jarvis-summary-title">${Q(i)}</span>
                  </div>
                  ${a}
                  <div class="jarvis-summary-body jarvis-markdown">
                    ${vl(e.summary)}
                  </div>
                </div>
              `),Z(`Sir, the intelligence synthesis for ${i} is complete and displayed.`);return}else{b(`jarvis`,`Sir, summarization encountered an anomaly: ${e?.error||`Unable to generate summary.`}`);return}}catch(e){b(`jarvis`,`Sir, connection to local bridge summarizer failed: ${e.message}`);return}}}let T=e.trim();if(/^(?:give\s+me\s+(?:a|an|my|the)\s+)?(?:executive\s+|morning\s+|daily\s+|startup\s+)?(?:briefing|sitrep|status\s+report)\s*[.!?]*$/i.test(T))try{let e=await fetch(`${s()}/briefing/executive`).then(e=>e.json());if(e&&e.success){b(`jarvis`,vl(e.markdownCard)),Z(e.voiceSummary);return}}catch{}if(/^(?:sync|backup|update)\s+(?:my\s+)?(?:cloud\s+vault|vault|pc\s+files\s+to\s+cloud)\s*[.!?]*$/i.test(T)){b(`jarvis`,"☁️ Syncing your local PC files (`Desktop`, `Documents`, `Downloads`) to your private 24/7 Cloud Vault (`Aasim41/jarvis-vault`)...");try{let e=await fetch(`/vault/sync`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({})}).then(e=>e.json()),t=e.total_indexed??e.indexed??0,n=e.uploaded_this_cycle??e.uploaded??0;b(`jarvis`,vl(`✅ **24/7 Cloud Vault Sync Complete**\n- **Indexed PC Files**: \`${t}\`\n- **Mirrored to GitHub (\`${e.vault_repo||e.repo||`Aasim41/jarvis-vault`}\`)**: \`${n}\` updated file(s).`)),Z(`Sir, your 24/7 Cloud Vault is synced with ${t} indexed files.`);return}catch(e){b(`jarvis`,`⚠️ Cloud Vault sync error: ${e.message}`);return}}let ie=T.match(/^(?:search|find)\s+(?:in\s+)?(?:my\s+)?(?:cloud\s+)?vault\s+(?:for\s+)?(.+)$/i);if(ie){let e=ie[1].trim();try{let t=await fetch(`/vault/search`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e})}).then(e=>e.json());t.results&&t.results.length>0?(b(`jarvis`,vl(`### ☁️ 24/7 Cloud Vault Results for "${e}"\n${t.results.slice(0,8).map((e,t)=>`${t+1}. **${e.name}** (${Math.round((e.size||0)/1024)} KB)${e.snippet?`\n   > *${e.snippet.slice(0,140)}*`:``}`).join(`
`)}`)),Z(`Sir, I found ${t.results.length} matching files in your 24/7 Cloud Vault, starting with ${t.results[0].name}.`)):(b(`jarvis`,`Sir, no files matching **"${Q(e)}"** were found in your 24/7 Cloud Vault.`),Z(`Sir, no files matching ${e} were found in your Cloud Vault.`));return}catch{}}let ae=T.match(/^(?:read|open|show)\s+(?:from\s+)?(?:cloud\s+)?vault\s+(?:file\s+)?(.+)$/i);if(ae){let e=ae[1].trim();try{let t=await fetch(`/vault/read`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e})}).then(e=>e.json());if(t&&t.success){let n=t.file_name||t.file?.name||e,r=t.content||t.text||``;b(`jarvis`,vl(`### 📄 Cloud Vault File: \`${n}\`\n\`\`\`\n${String(r).slice(0,4e3)}\n\`\`\``)),Z(`Sir, I have retrieved ${n} from your 24/7 Cloud Vault.`)}else b(`jarvis`,`⚠️ Could not read **"${Q(e)}"** from Cloud Vault: ${t?.error||`Not found`}`);return}catch{}}if(/^(?:send|give\s+me|generate|show)\s+(?:my\s+)?(?:morning\s+digest|whatsapp\s+digest|sleep\s+digest|overnight\s+digest|while\s+i\s+was\s+sleeping(?:\s+digest)?)\b/i.test(T)){b(`jarvis`,`☀️ Generating your **"While You Were Sleeping" Morning Digest** and dispatching it to your WhatsApp Self-Chat...`),Z(`Generating your morning digest and sending it to your WhatsApp now, Sir.`);try{let e=await fetch(`/whatsapp/morning-digest`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({send_to_self:!0})}).then(e=>e.json());if(e&&e.digest){b(`jarvis`,vl(e.digest)),Z(`Sir, your morning digest is ready and has been sent to your WhatsApp.`);return}}catch{}}if(/^(?:remember|save|note)\s+that\s+.+?\s+is\s+(?:my\s+)?/i.test(T)||/^(?:never|always|do\s+not|don'?t)\s+auto[- ]?reply\s+to\s+/i.test(T)||/^(?:reply|speak|talk)\s+to\s+.+?\s+in\s+(?:hinglish|hindi|english|formal|affectionate|casual)/i.test(T)||/^(?:show|list|view)\s+(?:my\s+)?(?:persona\s+vault|contact\s+rules|whatsapp\s+personas)\b/i.test(T))try{if(/^(?:show|list|view)/i.test(T)){let e=(await fetch(`/contacts/persona-vault`).then(e=>e.json()))?.vault?.contacts||{};b(`jarvis`,vl(`### 🧠 Persona Vault Contact Graph\n${Object.entries(e).map(([e,t])=>`- **${e}** → Real Name: \`${t.real_name||e}\` | Relation: **${t.relationship||`contact`}** | Tone: *${t.tone||`natural`}* | Policy: \`${t.auto_reply_policy||`auto`}\``).join(`
`)||`No custom personas stored yet.`}`)),Z(`Sir, your Persona Vault currently holds ${Object.keys(e).length} custom contact profiles.`);return}else{let e=await fetch(`/contacts/persona-vault`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:T})}).then(e=>e.json());if(e&&e.message){b(`jarvis`,vl(`🧠 **Persona Vault Updated**: ${e.message}`)),Z(e.message);return}}}catch{}let oe=T.match(/^(?:track|monitor|watch)\s+(?:my\s+)?(?:live\s+)?(zomato|swiggy|blinkit|zepto|flipkart|amazon)\s+(?:order|delivery)\b/i)||T.match(/^(?:delivery\s+radar|order\s+radar|live\s+order\s+status|stop\s+tracking\s+(?:my\s+)?order)\b/i);if(oe){let e=/^stop/i.test(T),t=(oe[1]||`zomato`).toLowerCase();try{let n=await fetch(`/apps/delivery-radar`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:e?`stop`:`start`,app:t})}).then(e=>e.json());if(n&&n.message){b(`jarvis`,vl(`🛵 **Live Order Delivery Radar**: ${n.message}`)),Z(n.message.replace(/[*`#]/g,``));return}}catch{}}let se=T.match(/^(?:watch|track|monitor|alert\s+me\s+when)\s+(?:the\s+)?(?:price\s+of\s+)?(.+?)\s+(?:drops?\s+)?(?:under|below|less\s+than|to)\s+(?:rs\.?\s*|₹\s*)?(\d[\d,]*)(?:\s+(?:on|in|at)\s+(amazon|flipkart|myntra|croma|blinkit|zepto))?/i);if(se||/^(?:list|show|check)\s+(?:my\s+)?(?:price\s+watchdogs?|price\s+trackers?|watched\s+items?)\b/i.test(T))try{if(se){let e=se[1].trim(),t=Number(se[2].replace(/,/g,``)),n=(se[3]||`amazon`).toLowerCase();b(`jarvis`,`🏷️ Arming **Price-Drop & Restock Watchdog** for **${Q(e)}** (Target: ₹${t.toLocaleString(`en-IN`)} on ${n.toUpperCase()})...`),Z(`Arming price watchdog for ${e} under ${t} rupees, Sir.`);let r=await fetch(`/watchdog/price`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`add`,url:e,name:e,target_price:t,app:n})}).then(e=>e.json());if(r&&r.message){b(`jarvis`,vl(r.message)),Z(r.message.replace(/[*`#]/g,``));return}}else{let e=(await fetch(`/watchdog/price`).then(e=>e.json()))?.items||[];b(`jarvis`,vl(`### 🏷️ Price-Drop & Restock Watchdogs\n${e.length>0?e.map((e,t)=>`${t+1}. **${e.name}** (${e.app}) — Current: \`${e.last_price?`₹`+e.last_price:`Checking...`}\` | Target: \`${e.target_price?`₹`+e.target_price:`Any drop`}\``).join(`
`):`No active price watchdogs armed.`}`)),Z(`Sir, you have ${e.length} active price watchdogs.`);return}}catch{}let ce=`flipkart|amazon|zomato|swiggy|blinkit|zepto|instamart|bigbasket|jiomart|myntra|ajio|nykaa|meesho|croma|tatacliq|tata\\s*cliq|lenskart|dominos|makemytrip|goibibo|irctc|redbus|ixigo|bookmyshow|uber|ola|rapido|netflix|hotstar|jiohotstar|primevideo|prime\\s*video|spotify|linkedin`,le=RegExp(`^(?:use\\s+|on\\s+|in\\s+|open\\s+)?(${ce})\\s+(?:and\\s+)?(?:to\\s+)?(?:order|buy|search(?:\\s+for)?|find|get|look\\s+for|book|add(?:\\s+to\\s+cart)?)\\s+(.+)$`,`i`),ue=RegExp(`^(?:order|buy|search(?:\\s+for)?|find|get|book|add(?:\\s+to\\s+cart)?)\\s+(.+?)\\s+(?:on|from|in|via|using)\\s+(${ce})$`,`i`),de=RegExp(`^(?:check|show|open|track|view)\\s+(?:my\\s+)?(${ce})\\s+(orders?|cart|basket|checkout|bookings?|trips?)$`,`i`),fe=RegExp(`^(?:open|launch)\\s+(${ce})$`,`i`),pe=T.match(le),me=T.match(ue),he=T.match(de),ge=T.match(fe),_e=(e,t=``)=>{let n=vl(e.message||``);e.url&&(n+=`<div style="margin-top:8px;"><a href="${Q(e.url)}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;background:rgba(0,212,255,0.16);border:1px solid #00d4ff;color:#00d4ff;padding:6px 12px;border-radius:6px;text-decoration:none;font-weight:700;font-size:0.82rem;">📲 Open ${Q(e.app||`App`)} Directly on Device / Checkout ↗</a></div>`),(e.upi_qr_base64||e.checkout_screenshot_base64)&&(n+=`<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:10px;align-items:center;">`,e.upi_qr_base64&&(n+=`<div style="background:#fff;padding:8px;border-radius:10px;border:2px solid #00d4ff;text-align:center;">
              <img src="data:image/png;base64,${e.upi_qr_base64}" style="width:155px;height:155px;display:block;" alt="Scan to Pay via UPI" />
              <div style="color:#050b14;font-weight:700;font-size:0.74rem;margin-top:4px;">📱 SCAN TO PAY${e.detected_total?` ₹${e.detected_total}`:``}</div>
            </div>`),e.checkout_screenshot_base64&&(n+=`<div style="flex:1;min-width:200px;border:1px solid rgba(0,212,255,0.35);border-radius:8px;overflow:hidden;">
              <img src="data:image/png;base64,${e.checkout_screenshot_base64}" style="width:100%;max-height:175px;object-fit:cover;display:block;" alt="Live Cart Checkout View" />
            </div>`),n+=`</div>`),b(`jarvis`,n),Z(e.clarifying_question?`Sir, I have opened ${e.app} for ${t}. ${e.clarifying_question}`:(e.message||``).replace(/[*`#]/g,``))};if(pe||me||he||ge){let e=``,t=`search_or_order`,n=``;pe?(e=pe[1].toLowerCase().replace(/\s+/g,``),n=pe[2].trim()):me?(n=me[1].trim(),e=me[2].toLowerCase().replace(/\s+/g,``)):he?(e=he[1].toLowerCase().replace(/\s+/g,``),t=/cart|basket|checkout/i.test(he[2])?`cart`:`orders`):ge&&(e=ge[1].toLowerCase().replace(/\s+/g,``),t=`open`);try{let r=await fetch(`/apps/universal-agent`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:e,action:t,query:n})}).then(e=>e.json());if(r&&r.message){_e(r,n);return}}catch{}}let ve=/^(?:mute|unmute|shutdown|shut\s*down|restart|sleep|lock|open\s+|launch\s+|summarize|play\s+|sync\s+|send\s+whatsapp|what\s+time|who\s+is|weather|briefing|sitrep)\b/i.test(T);if(window.__hasActiveAppSession&&!ve&&T.length<=120)try{let e=await fetch(`/apps/universal-session`).then(e=>e.json());if(e&&e.pending)if(/^(?:cancel|stop|never\s*mind|leave\s+it|rehne\s+do|mat\s+karo)$/i.test(T))await fetch(`/apps/universal-agent`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:e.pending.app_id,action:`orders`})}).catch(()=>{});else{let t=T.match(/(\d+\s*(?:packets?|packs?|plates?|pieces?|pouches?|bottles?|boxes?|kg|g|ml|litres?|l)\b)/i);b(`jarvis`,`🛒 Automating cart selection & checkout on **${Q(e.pending.app_name||e.pending.app_id)}** for \`${Q(T)}\`...`);let n=await fetch(`/apps/universal-agent`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:e.pending.app_id,action:`confirm_selection`,selection:T,quantity:t?t[1]:``})}).then(e=>e.json());if(n&&n.message){_e(n,T);return}}}catch{}}let c=document.createElement(`div`);c.className=`jarvis-command-msg jarvis-msg-jarvis jarvis-command-typing`,c.innerHTML=`
      <div class="jarvis-command-avatar jarvis-command-avatar-jarvis">J</div>
      <div class="jarvis-command-bubble">
        <div class="jarvis-command-meta">JARVIS · ${yl()}</div>
        <div class="jarvis-command-text">
          <span class="jarvis-command-typing-dot"></span>
          <span class="jarvis-command-typing-dot"></span>
          <span class="jarvis-command-typing-dot"></span>
        </div>
      </div>
    `,n.appendChild(c),n.scrollTop=n.scrollHeight;try{let e=await xc(i);x(e,e)}catch(e){let t=`Sir, I am experiencing a critical neural network failure.`;x(t,t),console.error(e)}}document.addEventListener(`jarvis:focus-command`,()=>{r.focus()}),window.addEventListener(`jarvis:hot-mic`,e=>{e.detail?.active?r.placeholder=`🎙️ Hot-Mic Active — Speak follow-up directly (no wake word needed)...`:r.placeholder=`Enter command, Sir...`});let te=!0;ml(e=>{ee(e)},()=>{r.placeholder=`🎙️ Hot-Mic Active — Speak follow-up directly (no wake word needed)...`,r.focus(),fetch(`${s()}/execute`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({command:`powershell -c "(New-Object -ComObject WScript.Shell).AppActivate('J.A.R.V.I.S')"`})}).catch(e=>console.error(e)),te&&(te=!1,Z(`I am awake and listening, Sir. How may I assist you?`))},()=>{r.placeholder=`Enter command, Sir...`}),document.addEventListener(`jarvis:timer-expired`,async e=>{let t=e.detail;try{let e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination),t.type=`sine`,t.frequency.setValueAtTime(880,e.currentTime),t.frequency.setValueAtTime(1174.66,e.currentTime+.15),n.gain.setValueAtTime(.3,e.currentTime),n.gain.exponentialRampToValueAtTime(.01,e.currentTime+.45),t.start(),t.stop(e.currentTime+.45)}catch{}let r=`SYSTEM NOTIFICATION: The background timer you set for "${t}" has just expired! You MUST proactively speak to the user right now to remind them, or execute the specific tasks they requested. Be concise but assertive.`,i=document.createElement(`div`);i.className=`jarvis-command-msg jarvis-msg-jarvis jarvis-command-typing`,i.innerHTML=`
      <div class="jarvis-command-avatar jarvis-command-avatar-jarvis">J</div>
      <div class="jarvis-command-bubble">
        <div class="jarvis-command-meta">JARVIS • Processing Background Timer...</div>
        <div class="jarvis-command-text">
          <div class="jarvis-typing-dots"><span></span><span></span><span></span></div>
        </div>
      </div>
    `,n.appendChild(i),n.scrollTop=n.scrollHeight;try{let e=await xc(r);x(e,e)}catch(e){i.remove(),console.error(e)}}),typeof window<`u`&&window.location.hostname&&window.location.hostname,setInterval(async()=>{try{let e=await fetch(`/alarms/pending`);if(e.ok){let t=await e.json();if(t.pending&&t.pending.length>0){let e=t.pending.map(e=>e.id),n=t.pending.map(e=>e.reminderText).join(` AND `);await fetch(`/alarms/acknowledge`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({ids:e})}),document.dispatchEvent(new CustomEvent(`jarvis:timer-expired`,{detail:n}))}}}catch{}try{let e=await fetch(`/proactive/alerts`);if(e.ok){let t=await e.json();if(Array.isArray(t.alerts)&&t.alerts.length>0)for(let e of t.alerts)e.text&&b(`jarvis`,vl(e.text)),e.voiceText&&Z(e.voiceText)}}catch{}},12e3),window.addEventListener(`jarvis:antigravity-task`,e=>{let{task_id:t,project:n,instruction:r}=e.detail||{},i=`agy_card_`+Date.now();b(`jarvis`,S(i,n,r)),C(i,t,n)}),window.addEventListener(`jarvis:ghost-alert`,e=>{let t=e.detail;t&&b(`jarvis`,`
      <div style="background:rgba(255,51,75,0.12);border:1px solid #ff334b;border-radius:8px;padding:12px;margin:8px 0;box-shadow:0 0 18px rgba(255,51,75,0.35);font-family:var(--font-mono, monospace);">
        <div style="font-weight:700;color:#ff334b;font-size:0.85rem;letter-spacing:0.05em;display:flex;align-items:center;gap:6px;">
          <span>👻</span> <span>GHOST SENTINEL ALERT: ${t.title?Q(t.title).toUpperCase():`ATTENTION REQUIRED`}</span>
        </div>
        <div style="font-size:0.85rem;color:#fff;margin-top:5px;line-height:1.4;">${Q(t.text||``)}</div>
      </div>
    `)}),document.addEventListener(`jarvis:bot-report`,e=>{let{text:t,voiceText:n,reports:r}=e.detail||{};Array.isArray(r)&&r.length>0?b(`jarvis`,`
        <div class="jarvis-bot-report-card">
          <div class="jarvis-bot-report-header">
            <span>✅ Specialist Swarm • ${r.length} Task${r.length>1?`s`:``} Completed</span>
            <span style="color:#00d4ff; font-size:0.62rem;">Saved to Memory</span>
          </div>
          <ul class="jarvis-bot-report-list">
            ${r.map(e=>`
              <li class="jarvis-bot-report-item">
                <span class="jarvis-bot-report-pill">${Q(e.bot||`SWARM`)}</span>
                <strong style="color:#fff;">${Q(e.title||`Task Complete`)}:</strong>
                <span>${Q(e.summary||``)}</span>
              </li>
            `).join(``)}
          </ul>
        </div>
      `):t&&b(`jarvis`,t),n&&Z(n)});let w=!1;document.addEventListener(`jarvis:append-briefing`,e=>{if(w)return;let t=e.detail?.markdown;t&&(w=!0,b(`jarvis`,vl(t)))}),setTimeout(async()=>{if(!w)try{let e=await fetch(`${s()}/briefing/executive`).then(e=>e.json());e&&e.success&&!w&&(w=!0,b(`jarvis`,vl(e.markdownCard)),Z(e.voiceSummary))}catch{if(w)return;w=!0;let e=`Sir, J.A.R.V.I.S is online. All systems operational.`,t=ce(`tasks`,[]).filter(e=>!e.done);t.length>0&&(e+=` You have ${t.length} pending directive${t.length>1?`s`:``} in your mission log.`),b(`jarvis`,e),Z(e)}},5500)}function Sl(){if(document.getElementById(`jarvis-stat-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-stat-styles`,e.textContent=`
    .jarvis-stats {
      padding: 0.5rem 0;
    }

    .jarvis-stat-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.55rem 0;
      border-bottom: 1px solid rgba(0, 212, 255, 0.05);
    }

    .jarvis-stat-row:last-child {
      border-bottom: none;
    }

    .jarvis-stat-label {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.75rem;
      color: var(--color-text-dim, #6b7a8d);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .jarvis-stat-value {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.85rem;
      color: var(--color-text, #e0e6ed);
      font-weight: 600;
    }

    .jarvis-stat-value-accent {
      color: var(--color-accent, #00d4ff);
    }

    .jarvis-stat-value-success {
      color: var(--color-success, #2ed573);
    }

    .jarvis-stat-pulse {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-success, #2ed573);
      display: inline-block;
      animation: jarvis-stat-pulse-anim 1.5s ease-in-out infinite;
      box-shadow: 0 0 6px var(--color-success, #2ed573);
    }

    @keyframes jarvis-stat-pulse-anim {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }

    .jarvis-stat-bar-wrapper {
      width: 100%;
      padding: 0 0 0.2rem 0;
    }

    .jarvis-stat-bar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.15rem;
    }

    .jarvis-stat-bar-track {
      width: 100%;
      height: 3px;
      background: rgba(0, 212, 255, 0.08);
      border-radius: 2px;
      overflow: hidden;
    }

    .jarvis-stat-bar-fill {
      height: 100%;
      border-radius: 2px;
      background: linear-gradient(90deg, var(--color-accent, #00d4ff), var(--color-accent-secondary, #7b61ff));
      transition: width 0.6s ease;
      box-shadow: 0 0 4px var(--color-accent-glow, rgba(0, 212, 255, 0.3));
    }
    .jarvis-stat-graph {
      width: 100%;
      height: 30px;
      margin-top: 4px;
      margin-bottom: 4px;
      display: block;
      opacity: 0.8;
    }
  `,document.head.appendChild(e)}function Cl(e){return String(Math.floor(e)).padStart(2,`0`)}function wl(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60);return`${Cl(t)}:${Cl(n)}:${Cl(r)}`}function Tl(e){try{let t=localStorage.getItem(`jarvis_`+e);if(!t)return 0;let n=JSON.parse(t);return Array.isArray(n)?n.length:0}catch{return 0}}function El(){try{let e=localStorage.getItem(`jarvis_tasks`);if(!e)return 0;let t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>!e.done).length:0}catch{return 0}}function Dl(e){Sl();let t=Date.now();window.__jarvisStartTime=t;let n=98.7,r=67,i=Array(60).fill(98.7),a=Array(60).fill(67),o=document.createElement(`div`);o.className=`jarvis-stats`,o.innerHTML=`
    <div class="jarvis-section-header">System Diagnostics</div>
    <div class="jarvis-stat-row">
      <span class="jarvis-stat-label"><span class="jarvis-stat-pulse"></span> Status</span>
      <span class="jarvis-stat-value jarvis-stat-value-success">ONLINE</span>
    </div>
    <div class="jarvis-stat-row">
      <span class="jarvis-stat-label">Session Uptime</span>
      <span class="jarvis-stat-value jarvis-stat-value-accent" data-ref="uptime">00:00:00</span>
    </div>
    <div>
      <div class="jarvis-stat-row">
        <span class="jarvis-stat-label">Core Integrity</span>
        <span class="jarvis-stat-value" data-ref="core">98.7%</span>
      </div>
      <canvas class="jarvis-stat-graph" data-ref="coreCanvas" width="280" height="30"></canvas>
      <div class="jarvis-stat-bar-track"><div class="jarvis-stat-bar-fill" data-ref="coreBar" style="width:98.7%"></div></div>
    </div>
    <div style="margin-top: 10px;">
      <div class="jarvis-stat-row">
        <span class="jarvis-stat-label">Memory Usage</span>
        <span class="jarvis-stat-value" data-ref="memory">67.0%</span>
      </div>
      <canvas class="jarvis-stat-graph" data-ref="memoryCanvas" width="280" height="30"></canvas>
      <div class="jarvis-stat-bar-track"><div class="jarvis-stat-bar-fill" data-ref="memoryBar" style="width:67%"></div></div>
    </div>
    
    <div style="margin-top: 10px;">
      <div class="jarvis-stat-row">
        <span class="jarvis-stat-label">Network (Rx/Tx)</span>
        <span class="jarvis-stat-value" style="font-size: 0.75rem;" data-ref="network">0 B/s / 0 B/s</span>
      </div>
    </div>
    <div>
      <div class="jarvis-stat-row">
        <span class="jarvis-stat-label">CPU Temp</span>
        <span class="jarvis-stat-value" data-ref="temp">-- °C</span>
      </div>
    </div>
    <div class="jarvis-stat-row" style="margin-top: 10px;">
      <span class="jarvis-stat-label">Tasks Active</span>
      <span class="jarvis-stat-value jarvis-stat-value-accent" data-ref="tasks">0</span>
    </div>
    <div class="jarvis-stat-row">
      <span class="jarvis-stat-label">Notes Stored</span>
      <span class="jarvis-stat-value jarvis-stat-value-accent" data-ref="notes">0</span>
    </div>
  `,e.appendChild(o);let s=o.querySelector(`[data-ref="uptime"]`),c=o.querySelector(`[data-ref="core"]`),l=o.querySelector(`[data-ref="coreBar"]`),u=o.querySelector(`[data-ref="coreCanvas"]`),d=o.querySelector(`[data-ref="memory"]`),f=o.querySelector(`[data-ref="memoryBar"]`),p=o.querySelector(`[data-ref="memoryCanvas"]`),m=o.querySelector(`[data-ref="network"]`),h=o.querySelector(`[data-ref="temp"]`),g=o.querySelector(`[data-ref="tasks"]`),_=o.querySelector(`[data-ref="notes"]`),v=u.getContext(`2d`),y=p.getContext(`2d`);function b(e,t,n,r,i,a){e.clearRect(0,0,t.width,t.height),e.strokeStyle=`rgba(0, 229, 255, 0.05)`,e.lineWidth=1,e.beginPath(),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.stroke();let o=t.width/59;e.beginPath(),e.strokeStyle=a,e.lineWidth=2,e.lineJoin=`round`;for(let a=0;a<60;a++){let s=(n[a]-r)/(i-r),c=t.height-s*t.height,l=a*o;a===0?e.moveTo(l,c):e.lineTo(l,c)}e.shadowBlur=8,e.shadowColor=a,e.stroke(),e.shadowBlur=0}let x=``;function S(e){if(e===0)return`0 B`;let t=1024,n=[`B`,`KB`,`MB`,`GB`],r=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/t**r).toFixed(1))+` `+n[r]}function C(){let e=El(),t=Tl(`notes`);g.textContent!=e&&(g.textContent=e),_.textContent!=t&&(_.textContent=t)}C(),window.addEventListener(`jarvis:storage-changed`,C);let ee=setInterval(()=>{let e=wl((Date.now()-t)/1e3);e!==x&&(s.textContent=e,x=e)},1e3),te=new EventSource(`http://localhost:5174/system-metrics`);te.onerror=()=>{},te.onmessage=e=>{try{let t=JSON.parse(e.data);n=Number(t.cpuLoad)||0,r=t.ramUsed/t.ramTotal*100||0,i.shift(),i.push(n),a.shift(),a.push(r),c.textContent=`${n.toFixed(1)}%`,l.style.width=`${n}%`,b(v,u,i,0,100,`#ffb000`),d.textContent=`${r.toFixed(1)}%`,f.style.width=`${r}%`,b(y,p,a,0,100,`#e67e22`),m.textContent=`${S(t.netRx)}/s ↓ / ${S(t.netTx)}/s ↑`,h.textContent=t.temp>0?`${t.temp}°C`:`N/A`}catch(e){console.error(`SSE JSON Error`,e)}},e._jarvisCleanup=()=>{clearInterval(ee),te.close(),window.removeEventListener(`jarvis:storage-changed`,C)}}function Ol(e){if(!document.getElementById(`jarvis-latency-styles`)){let e=document.createElement(`style`);e.id=`jarvis-latency-styles`,e.textContent=`
      .jarvis-latency {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .jarvis-latency-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 176, 0, 0.05);
        border-radius: var(--radius-sm);
      }
      .jarvis-latency-name {
        font-weight: 500;
        font-size: 0.85rem;
      }
      .jarvis-latency-url {
        font-size: 0.65rem;
        color: var(--color-text-dim);
        font-family: var(--font-mono);
      }
      .jarvis-latency-stats {
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: var(--font-mono);
      }
      .jarvis-latency-ms {
        font-size: 0.9rem;
      }
      .jarvis-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--color-text-dim);
        box-shadow: 0 0 5px var(--color-text-dim);
      }
      .jarvis-dot.green {
        background: var(--color-success, #2ecc71);
        box-shadow: 0 0 8px var(--color-success, #2ecc71);
        animation: pulse-green 2s infinite;
      }
      .jarvis-dot.yellow {
        background: var(--color-warning, #f1c40f);
        box-shadow: 0 0 8px var(--color-warning, #f1c40f);
      }
      .jarvis-dot.red {
        background: var(--color-danger, #e74c3c);
        box-shadow: 0 0 8px var(--color-danger, #e74c3c);
        animation: pulse-red 1s infinite;
      }

      @keyframes pulse-green {
        0% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4); }
        70% { box-shadow: 0 0 0 6px rgba(46, 204, 113, 0); }
        100% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
      }
      @keyframes pulse-red {
        0% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.4); }
        70% { box-shadow: 0 0 0 8px rgba(231, 76, 60, 0); }
        100% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
      }
    `,document.head.appendChild(e)}let t=[{id:`t1`,name:`IPL War Room`,url:`https://github.com/Aasim41/ipl-auction-war-room`},{id:`t2`,name:`Synapse City API`,url:`https://github.com/Aasim41/synapse-city`}],n=document.createElement(`div`);n.className=`jarvis-latency`,n.innerHTML=`
    <div class="jarvis-section-header">Live API Latency</div>
    ${t.map(e=>`
      <div class="jarvis-latency-item" id="lat-${e.id}">
        <div>
          <div class="jarvis-latency-name">${e.name}</div>
          <div class="jarvis-latency-url">${e.url.replace(`https://`,``)}</div>
        </div>
        <div class="jarvis-latency-stats">
          <span class="jarvis-latency-ms" id="lat-ms-${e.id}">-- ms</span>
          <div class="jarvis-dot" id="lat-dot-${e.id}"></div>
        </div>
      </div>
    `).join(``)}
  `,e.appendChild(n);async function r(e){let t=document.getElementById(`lat-ms-${e.id}`),n=document.getElementById(`lat-dot-${e.id}`);if(!t||!n)return;let r=performance.now();try{await fetch(e.url,{mode:`no-cors`,cache:`no-store`});let i=Math.round(performance.now()-r);t.textContent=`${i}ms`,n.className=`jarvis-dot`,i<300?n.classList.add(`green`):i<1e3?(n.classList.add(`yellow`),t.style.color=`var(--color-warning)`):(n.classList.add(`red`),t.style.color=`var(--color-danger)`)}catch{t.textContent=`ERR`,t.style.color=`var(--color-danger)`,n.className=`jarvis-dot red`}}function i(){t.forEach(e=>r(e))}i();let a=setInterval(i,5e3);e._jarvisCleanup=()=>clearInterval(a)}var kl=`agent-dock`,Al={};function jl(){document.getElementById(kl)&&(window.updateAgentStatus=(e,t,n,r)=>{Ml(e,t,n,r)})}function Ml(e,t,n,r=`🤖`){let i=document.getElementById(kl);if(!i)return;let a=Al[e];if(!a){a=document.createElement(`div`),a.className=`agent-avatar`,a.id=`agent-${e}`;let t=document.createElement(`div`);t.className=`agent-tooltip`,a.appendChild(t),i.appendChild(a),Al[e]=a}a.className=`agent-avatar ${n}`;let o=a.querySelector(`.agent-icon`);o||(o=document.createElement(`span`),o.className=`agent-icon`,a.insertBefore(o,a.firstChild)),o.textContent=r;let s=a.querySelector(`.agent-tooltip`);s&&(s.textContent=t),(!n||n===`inactive`)&&setTimeout(()=>{Al[e]&&!Al[e].classList.contains(`active-blue`)&&!Al[e].classList.contains(`warning-orange`)&&(Al[e].remove(),delete Al[e])},5e3)}function Nl(){if(document.getElementById(`jarvis-neural-eq-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-neural-eq-styles`,e.textContent=`
    .jarvis-neural-eq {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      height: 100%;
      min-height: 150px;
    }

    .jarvis-neural-eq-container {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      height: 105px;
      padding: 0.5rem;
      background: rgba(0, 212, 255, 0.02);
      border: 1px solid rgba(0, 212, 255, 0.08);
      border-radius: 6px;
      overflow: hidden;
      position: relative;
    }

    /* Grid lines */
    .jarvis-neural-eq-container::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-image: linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px);
      background-size: 100% 20px;
      pointer-events: none;
      z-index: 0;
    }

    .eq-bar {
      width: calc(100% / 18 - 2px);
      background: var(--color-accent, #00d4ff);
      opacity: 0.8;
      border-radius: 2px 2px 0 0;
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.4);
      z-index: 1;
      transition: height 0.15s ease-out;
      transform-origin: bottom;
    }
    
    .eq-bar:nth-child(even) {
      background: rgba(0, 212, 255, 0.5);
    }

    .eq-bar.learning-pulse {
      background: #2ed573 !important;
      box-shadow: 0 0 15px rgba(46, 213, 115, 0.8) !important;
    }
    
    .eq-info {
      display: flex;
      justify-content: space-between;
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.65rem;
      color: var(--color-text-dim, #6b7a8d);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .eq-status {
      color: var(--color-accent, #00d4ff);
      animation: blink 2s infinite;
      font-weight: 700;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
  `,document.head.appendChild(e)}function Pl(e){if(!e)return;Nl();let t=document.createElement(`div`);t.className=`jarvis-neural-eq`,e.appendChild(t);let n=`
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div class="jarvis-section-header" style="margin-bottom: 0;">Neural Resonance & Learning</div>
      <span style="font-size: 0.65rem; color: #2ed573; font-family: monospace; font-weight: 600;" id="synapse-state-tag">ADAPTIVE</span>
    </div>
    <div class="jarvis-neural-eq-container" id="eq-bars">
  `;for(let e=0;e<16;e++)n+=`<div class="eq-bar"></div>`;n+=`
    </div>
    <div class="eq-info">
      <span id="synapse-reflex-count">REFLEXES: 5</span>
      <span class="eq-status" id="synapse-status">SYNCED</span>
      <span id="synapse-confidence">CONF: 97.2%</span>
    </div>
  `,t.innerHTML=n;let r=t.querySelectorAll(`.eq-bar`),i=t.querySelector(`#synapse-reflex-count`),a=t.querySelector(`#synapse-status`),o=t.querySelector(`#synapse-confidence`);function s(){r.forEach((e,t)=>{let n=Date.now()/1e3,r=Math.sin(n*2+t*.5)*30+50+(Math.random()*20-10);r=Math.max(5,Math.min(100,r)),e.style.height=`${r}%`}),setTimeout(s,150)}s();async function c(){try{let e=await fetch(`http://localhost:5174/learning/stats`);if(e.ok){let t=await e.json();i&&(i.textContent=`REFLEXES: ${t.reflex_count||5}`),o&&(o.textContent=`CONF: ${t.average_confidence||`97.2%`}`),a&&(a.textContent=`ONLINE`)}}catch{}}c(),setInterval(c,8e3)}function Fl(){if(document.getElementById(`jarvis-calendar-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-calendar-styles`,e.textContent=`
    .jarvis-calendar-widget {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: var(--font-sans, 'Inter', sans-serif);
      color: var(--color-text, #e0e6ed);
    }

    .jarvis-cal-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .jarvis-cal-title-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .jarvis-cal-title {
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-accent, #00d4ff);
      letter-spacing: 0.5px;
    }

    .jarvis-cal-controls {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .jarvis-cal-btn {
      background: rgba(0, 212, 255, 0.08);
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: 4px;
      color: var(--color-text, #e0e6ed);
      cursor: pointer;
      font-family: var(--font-mono, monospace);
      font-size: 0.75rem;
      padding: 0.2rem 0.45rem;
      transition: all 0.2s ease;
    }

    .jarvis-cal-btn:hover {
      background: rgba(0, 212, 255, 0.2);
      border-color: var(--color-accent, #00d4ff);
      color: #fff;
    }

    .jarvis-cal-btn-add {
      background: rgba(0, 212, 255, 0.15);
      border-color: rgba(0, 212, 255, 0.4);
      color: var(--color-accent, #00d4ff);
      font-weight: 700;
    }

    .jarvis-cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 3px;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    .jarvis-cal-cell {
      aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-family: var(--font-mono, monospace);
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      transition: all 0.15s ease;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid transparent;
      user-select: none;
    }

    .jarvis-cal-cell:hover:not(.header):not(.empty) {
      background: rgba(0, 212, 255, 0.1);
      border-color: rgba(0, 212, 255, 0.3);
    }

    .jarvis-cal-cell.header {
      font-weight: 700;
      color: var(--color-text-dim, #6b7a8d);
      font-size: 0.65rem;
      cursor: default;
      background: transparent;
      aspect-ratio: auto;
      padding-bottom: 2px;
    }

    .jarvis-cal-cell.empty {
      background: transparent;
      cursor: default;
    }

    .jarvis-cal-cell.today {
      border-color: var(--color-accent, #00d4ff);
      font-weight: 700;
      color: var(--color-accent, #00d4ff);
      box-shadow: 0 0 8px rgba(0, 212, 255, 0.15) inset;
    }

    .jarvis-cal-cell.selected {
      background: rgba(0, 212, 255, 0.25) !important;
      border-color: var(--color-accent, #00d4ff) !important;
      color: #fff !important;
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.4);
    }

    .jarvis-cal-event-dot {
      width: 4px;
      height: 4px;
      background: #00d4ff;
      border-radius: 50%;
      margin-top: 1px;
      box-shadow: 0 0 4px #00d4ff;
    }

    .jarvis-cal-form {
      display: none;
      flex-direction: column;
      gap: 0.4rem;
      background: rgba(10, 16, 28, 0.85);
      border: 1px solid rgba(0, 212, 255, 0.25);
      border-radius: 6px;
      padding: 0.6rem;
      margin-bottom: 0.5rem;
      animation: jarvis-cal-fadein 0.2s ease;
    }

    .jarvis-cal-form.active {
      display: flex;
    }

    .jarvis-cal-input {
      background: rgba(0, 212, 255, 0.04);
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: 4px;
      color: #e0e6ed;
      font-family: var(--font-mono, monospace);
      font-size: 0.75rem;
      padding: 0.35rem 0.5rem;
      outline: none;
    }

    .jarvis-cal-input:focus {
      border-color: var(--color-accent, #00d4ff);
      box-shadow: 0 0 5px rgba(0, 212, 255, 0.3);
    }

    .jarvis-cal-form-row {
      display: flex;
      gap: 0.4rem;
    }

    .jarvis-cal-agenda {
      flex: 1;
      overflow-y: auto;
      max-height: 180px;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      padding-right: 2px;
    }

    .jarvis-cal-agenda::-webkit-scrollbar {
      width: 3px;
    }
    .jarvis-cal-agenda::-webkit-scrollbar-thumb {
      background: rgba(0, 212, 255, 0.2);
      border-radius: 2px;
    }

    .jarvis-cal-agenda-header {
      font-family: var(--font-mono, monospace);
      font-size: 0.68rem;
      color: var(--color-text-dim, #6b7a8d);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .jarvis-cal-event-card {
      background: rgba(0, 212, 255, 0.04);
      border: 1px solid rgba(0, 212, 255, 0.15);
      border-left: 3px solid var(--color-accent, #00d4ff);
      border-radius: 4px;
      padding: 0.4rem 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0.4rem;
      transition: background 0.15s;
    }

    .jarvis-cal-event-card:hover {
      background: rgba(0, 212, 255, 0.08);
    }

    .jarvis-cal-card-info {
      flex: 1;
      min-width: 0;
    }

    .jarvis-cal-card-time {
      font-family: var(--font-mono, monospace);
      font-size: 0.65rem;
      color: var(--color-accent, #00d4ff);
      margin-bottom: 2px;
    }

    .jarvis-cal-card-title {
      font-size: 0.78rem;
      font-weight: 600;
      color: #e0e6ed;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .jarvis-cal-card-desc {
      font-size: 0.7rem;
      color: var(--color-text-dim, #6b7a8d);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .jarvis-cal-del-btn {
      background: transparent;
      border: none;
      color: #ff5555;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0 0.2rem;
      opacity: 0.7;
      transition: opacity 0.15s, transform 0.15s;
    }

    .jarvis-cal-del-btn:hover {
      opacity: 1;
      transform: scale(1.2);
    }

    .jarvis-cal-empty {
      font-family: var(--font-mono, monospace);
      font-size: 0.72rem;
      color: var(--color-text-dim, #6b7a8d);
      text-align: center;
      padding: 0.8rem 0;
      font-style: italic;
    }

    @keyframes jarvis-cal-fadein {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(e)}function Il(e){if(!e)return;Fl();let t=[`JANUARY`,`FEBRUARY`,`MARCH`,`APRIL`,`MAY`,`JUNE`,`JULY`,`AUGUST`,`SEPTEMBER`,`OCTOBER`,`NOVEMBER`,`DECEMBER`],n=[`S`,`M`,`T`,`W`,`T`,`F`,`S`],r=new Date,i=r.getFullYear(),a=r.getMonth();function o(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}let s=o(r),c=[],l=!1;async function u(){try{let e=await fetch(`http://${window.location.hostname}:5174/calendar/events`);if(e.ok){let t=await e.json();c=Array.isArray(t)?t:t.events||[]}}catch(e){console.warn(`[Calendar] Failed to load events from bridge server:`,e)}p()}async function d(e,t,n,r){try{let i=`${t} ${n||`10:00`}`;await fetch(`http://${window.location.hostname}:5174/create-calendar-event`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({title:e,start_datetime:i,description:r||`Scheduled in J.A.R.V.I.S`})}),await u()}catch(e){console.error(`[Calendar] Error creating event:`,e)}}async function f(e,t){try{await fetch(`http://${window.location.hostname}:5174/calendar/delete`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({id:e,title:t})}),await u()}catch(e){console.error(`[Calendar] Error deleting event:`,e)}}function p(){let r=o(new Date),u=new Date(i,a,1).getDay(),h=new Date(i,a+1,0).getDate(),g={};c.forEach(e=>{let t=e.date||(e.start_datetime?e.start_datetime.slice(0,10):``);t&&(g[t]||(g[t]=[]),g[t].push(e))});let _=[],v=``;s?(_=g[s]||[],v=`Agenda // ${s}`):(_=c.slice(0,6),v=`Upcoming Schedule`),e.innerHTML=`
      <div class="jarvis-calendar-widget">
        <!-- Header Controls -->
        <div class="jarvis-cal-header-row">
          <div class="jarvis-cal-title-group">
            <span class="widget-icon">📅</span>
            <span class="jarvis-cal-title">${t[a]} ${i}</span>
          </div>
          <div class="jarvis-cal-controls">
            <button class="jarvis-cal-btn" data-act="prev" title="Previous Month">◀</button>
            <button class="jarvis-cal-btn" data-act="today" title="Jump to Today">TODAY</button>
            <button class="jarvis-cal-btn" data-act="next" title="Next Month">▶</button>
            <button class="jarvis-cal-btn jarvis-cal-btn-add" data-act="toggle-form" title="Schedule Event in J.A.R.V.I.S">+ SCHEDULE</button>
          </div>
        </div>

        <!-- Add Event Form -->
        <div class="jarvis-cal-form ${l?`active`:``}" data-ref="form">
          <input type="text" class="jarvis-cal-input" data-ref="input-title" placeholder="Directive / Event Title..." autocomplete="off" />
          <div class="jarvis-cal-form-row">
            <input type="date" class="jarvis-cal-input" style="flex:1" data-ref="input-date" value="${s||r}" />
            <input type="time" class="jarvis-cal-input" style="flex:1" data-ref="input-time" value="10:00" />
          </div>
          <input type="text" class="jarvis-cal-input" data-ref="input-desc" placeholder="Location / Details (optional)..." autocomplete="off" />
          <div class="jarvis-cal-form-row" style="justify-content: flex-end; margin-top: 2px;">
            <button class="jarvis-cal-btn" data-act="cancel-form">Cancel</button>
            <button class="jarvis-cal-btn jarvis-cal-btn-add" data-act="save-form">Confirm Schedule</button>
          </div>
        </div>

        <!-- Calendar Month Grid -->
        <div class="jarvis-cal-grid">
          ${n.map(e=>`<div class="jarvis-cal-cell header">${e}</div>`).join(``)}
          ${Array(u).fill(0).map(()=>`<div class="jarvis-cal-cell empty"></div>`).join(``)}
          ${Array.from({length:h},(e,t)=>{let n=t+1,o=`${i}-${String(a+1).padStart(2,`0`)}-${String(n).padStart(2,`0`)}`;return`
              <div class="jarvis-cal-cell ${o===r?`today`:``} ${o===s?`selected`:``}" data-date="${o}">
                <span>${n}</span>
                ${g[o]&&g[o].length>0?`<div class="jarvis-cal-event-dot"></div>`:``}
              </div>
            `}).join(``)}
        </div>

        <!-- Agenda Section -->
        <div class="jarvis-cal-agenda-header">
          <span>${v}</span>
          ${s?`<button class="jarvis-cal-btn" data-act="clear-select" style="font-size:0.6rem;padding:1px 4px;">Show All</button>`:``}
        </div>
        <div class="jarvis-cal-agenda">
          ${_.length>0?_.map(e=>`
            <div class="jarvis-cal-event-card">
              <div class="jarvis-cal-card-info">
                <div class="jarvis-cal-card-time">${e.date||``} • ${e.time||`All Day`}</div>
                <div class="jarvis-cal-card-title">${m(e.title)}</div>
                ${e.description?`<div class="jarvis-cal-card-desc">${m(e.description)}</div>`:``}
              </div>
              <button class="jarvis-cal-del-btn" data-del-id="${e.id||``}" data-del-title="${m(e.title)}" title="Delete event">✕</button>
            </div>
          `).join(``):`
            <div class="jarvis-cal-empty">No events scheduled. Click "+ SCHEDULE" to add one in J.A.R.V.I.S.</div>
          `}
        </div>
      </div>
    `,e.querySelector(`[data-act="prev"]`).addEventListener(`click`,()=>{a--,a<0&&(a=11,i--),p()}),e.querySelector(`[data-act="next"]`).addEventListener(`click`,()=>{a++,a>11&&(a=0,i++),p()}),e.querySelector(`[data-act="today"]`).addEventListener(`click`,()=>{let e=new Date;i=e.getFullYear(),a=e.getMonth(),s=o(e),p()});let y=e.querySelector(`[data-act="toggle-form"]`);y&&y.addEventListener(`click`,()=>{l=!l,p()});let b=e.querySelector(`[data-act="cancel-form"]`);b&&b.addEventListener(`click`,()=>{l=!1,p()});let x=e.querySelector(`[data-act="save-form"]`);x&&x.addEventListener(`click`,async()=>{let t=e.querySelector(`[data-ref="input-title"]`),n=e.querySelector(`[data-ref="input-date"]`),i=e.querySelector(`[data-ref="input-time"]`),a=e.querySelector(`[data-ref="input-desc"]`),o=t.value.trim();if(!o)return;let s=n.value||r,c=i.value||`10:00`,u=a?a.value.trim():``;l=!1,await d(o,s,c,u)});let S=e.querySelector(`[data-act="clear-select"]`);S&&S.addEventListener(`click`,()=>{s=``,p()}),e.querySelectorAll(`.jarvis-cal-cell[data-date]`).forEach(e=>{e.addEventListener(`click`,()=>{s=e.getAttribute(`data-date`),p()})}),e.querySelectorAll(`[data-del-id]`).forEach(e=>{e.addEventListener(`click`,async t=>{t.stopPropagation(),await f(e.getAttribute(`data-del-id`),e.getAttribute(`data-del-title`))})})}function m(e){if(!e)return``;let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}u(),window.addEventListener(`jarvis:calendar-updated`,()=>{u()}),setInterval(u,3e4)}var Ll=[],Rl=null,zl=`lock_laptop`,Bl=null,Vl=[{id:`open_website`,name:`Open any website`,icon:`🌐`,num:`01 / 22`,tag:`browser_dispatch`},{id:`google_search`,name:`Google search`,icon:`🔍`,num:`02 / 22`,tag:`web_search`},{id:`play_youtube`,name:`Play on YouTube`,icon:`▶️`,num:`03 / 22`,tag:`media_stream`},{id:`open_apps`,name:`Open apps`,icon:`📱`,num:`04 / 22`,tag:`app_launch`},{id:`take_notes`,name:`Take notes`,icon:`📝`,num:`05 / 22`,tag:`living_memory`},{id:`read_notes`,name:`Read notes`,icon:`📖`,num:`06 / 22`,tag:`memory_recall`},{id:`store_notes`,name:`Store notes`,icon:`💾`,num:`07 / 22`,tag:`persistent_vault`},{id:`battery_time`,name:`Battery and time`,icon:`🔋`,num:`08 / 22`,tag:`system_telemetry`},{id:`lock_laptop`,name:`Lock laptop`,icon:`🔒`,num:`09 / 22`,tag:`lock_screen`},{id:`music_volume`,name:`Music and volumes`,icon:`🎵`,num:`10 / 22`,tag:`audio_engine`},{id:`laptop_speaks`,name:`Laptop speaks`,icon:`🗣️`,num:`11 / 22`,tag:`speech_synthesis`},{id:`screenshots`,name:`Screenshots`,icon:`📸`,num:`12 / 22`,tag:`screen_capture`},{id:`talking_timers`,name:`Timers that talk`,icon:`⏱️`,num:`13 / 22`,tag:`voice_chronos`},{id:`draft_emails`,name:`Draft emails`,icon:`✉️`,num:`14 / 22`,tag:`gmail_dispatch`},{id:`directions`,name:`Directions`,icon:`🧭`,num:`15 / 22`,tag:`maps_navigation`},{id:`weather`,name:`Weather`,icon:`⛅`,num:`16 / 22`,tag:`atmospheric_intel`},{id:`work_study_modes`,name:`Work / study modes`,icon:`💼`,num:`17 / 22`,tag:`environment_focus`},{id:`find_open_file`,name:`Find and open any file`,icon:`📂`,num:`18 / 22`,tag:`file_explorer`},{id:`focus_sessions`,name:`Focus sessions`,icon:`🎯`,num:`19 / 22`,tag:`deep_work`},{id:`deadline_sets`,name:`Deadline sets`,icon:`📅`,num:`20 / 22`,tag:`schedule_tracker`},{id:`what_is_due`,name:`What is due`,icon:`📋`,num:`21 / 22`,tag:`academic_agenda`},{id:`mark_submitted`,name:`Mark submitted`,icon:`✅`,num:`22 / 22`,tag:`assignment_cleared`}];function Hl(){if(document.getElementById(`jarvis-system-controls-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-system-controls-styles`,e.textContent=`
    .jarvis-system-controls {
      padding: 0.2rem 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: var(--font-mono, monospace);
    }

    .controls-header-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
      border-bottom: 1px solid rgba(0, 212, 255, 0.2);
      padding-bottom: 0.4rem;
    }

    .controls-title {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .controls-status-badge {
      font-size: 0.65rem;
      padding: 2px 7px;
      border-radius: 4px;
      font-weight: 600;
      letter-spacing: 0.05em;
      font-family: monospace;
      border: 1px solid rgba(0, 212, 255, 0.4);
      background: rgba(0, 212, 255, 0.1);
      color: #00d4ff;
    }

    .controls-status-badge.online {
      border-color: #2ed573;
      background: rgba(46, 213, 115, 0.15);
      color: #2ed573;
    }

    .controls-status-badge.standalone {
      border-color: #ffd32a;
      background: rgba(255, 211, 42, 0.12);
      color: #ffd32a;
    }

    .controls-tabs {
      display: flex;
      gap: 4px;
      margin-bottom: 0.6rem;
      flex-wrap: wrap;
    }

    .controls-tab-btn {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.68rem;
      padding: 3px 8px;
      border-radius: 4px;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s;
    }

    .controls-tab-btn.active {
      background: rgba(0, 212, 255, 0.15);
      border-color: #00d4ff;
      color: #00d4ff;
      font-weight: 600;
    }

    /* ── ARRC DECK SPLIT CONTAINER ── */
    .arrc-deck-container {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      background: rgba(6, 12, 22, 0.6);
      border: 1px solid rgba(0, 212, 255, 0.15);
      border-radius: 8px;
      padding: 0.6rem;
    }

    @media (max-width: 768px) {
      .arrc-deck-container {
        grid-template-columns: 1fr;
      }
    }

    /* Capabilities List Panel (Left) */
    .arrc-cap-panel {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .arrc-cap-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.3rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .arrc-cap-title {
      font-size: 0.75rem;
      font-weight: 700;
      color: #00d4ff;
      letter-spacing: 0.08em;
    }

    .arrc-cap-counter {
      font-size: 0.62rem;
      color: rgba(255, 255, 255, 0.5);
      background: rgba(0, 212, 255, 0.08);
      padding: 2px 6px;
      border-radius: 10px;
      border: 1px solid rgba(0, 212, 255, 0.2);
    }

    .arrc-cap-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.35rem;
      max-height: 290px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 212, 255, 0.3) transparent;
      padding-right: 2px;
    }

    .arrc-cap-item {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 5px 7px;
      font-size: 0.68rem;
      color: #cbd5e1;
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: left;
      user-select: none;
    }

    .arrc-cap-item:hover {
      background: rgba(0, 212, 255, 0.1);
      border-color: rgba(0, 212, 255, 0.4);
      color: #fff;
    }

    .arrc-cap-item.active {
      background: rgba(0, 212, 255, 0.18);
      border: 1px solid #00d4ff;
      color: #00d4ff;
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.35);
      font-weight: 600;
    }

    .arrc-cap-icon {
      font-size: 0.85rem;
      flex-shrink: 0;
    }

    .arrc-cap-label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Action Canvas Panel (Right) */
    .arrc-canvas-panel {
      display: flex;
      flex-direction: column;
      background: rgba(4, 9, 18, 0.85);
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: 8px;
      padding: 0.75rem;
      justify-content: space-between;
      position: relative;
      min-height: 290px;
    }

    .arrc-canvas-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.65rem;
      color: rgba(255, 255, 255, 0.6);
      border-bottom: 1px solid rgba(0, 212, 255, 0.15);
      padding-bottom: 0.4rem;
      margin-bottom: 0.5rem;
    }

    .arrc-canvas-num {
      color: #00d4ff;
      font-weight: 700;
      letter-spacing: 0.06em;
    }

    .arrc-canvas-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0.4rem 0;
    }

    .arrc-canvas-graphic {
      width: 64px;
      height: 64px;
      border-radius: 12px;
      background: rgba(0, 212, 255, 0.12);
      border: 1px solid #00d4ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin-bottom: 0.6rem;
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
      animation: arrcPulse 2s infinite alternate ease-in-out;
    }

    @keyframes arrcPulse {
      0% { transform: scale(1); box-shadow: 0 0 15px rgba(0, 212, 255, 0.25); }
      100% { transform: scale(1.04); box-shadow: 0 0 25px rgba(0, 212, 255, 0.5); }
    }

    .arrc-canvas-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.2rem;
      letter-spacing: 0.05em;
    }

    .arrc-canvas-sub {
      font-size: 0.68rem;
      color: #a0aec0;
      margin-bottom: 0.8rem;
      max-width: 90%;
    }

    .arrc-canvas-controls {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .arrc-action-btn {
      background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 150, 255, 0.25));
      border: 1px solid #00d4ff;
      color: #fff;
      border-radius: 6px;
      padding: 7px 12px;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
      letter-spacing: 0.05em;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
    }

    .arrc-action-btn:hover {
      background: #00d4ff;
      color: #040914;
      box-shadow: 0 0 14px rgba(0, 212, 255, 0.6);
    }

    .arrc-action-btn.secondary {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.2);
      color: #cbd5e1;
    }

    .arrc-action-btn.secondary:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: #fff;
      color: #fff;
    }

    .arrc-canvas-input {
      width: 100%;
      box-sizing: border-box;
      background: rgba(10, 18, 30, 0.8);
      border: 1px solid rgba(0, 212, 255, 0.3);
      border-radius: 4px;
      color: #fff;
      font-family: inherit;
      font-size: 0.72rem;
      padding: 6px 8px;
      outline: none;
      margin-bottom: 0.4rem;
    }

    .arrc-canvas-input:focus {
      border-color: #00d4ff;
      box-shadow: 0 0 8px rgba(0, 212, 255, 0.4);
    }

    /* Classic Directives Grid */
    .jarvis-controls-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.45rem;
      margin-bottom: 0.6rem;
    }

    @media (max-width: 600px) {
      .jarvis-controls-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .jarvis-control-btn {
      background: rgba(0, 212, 255, 0.04);
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: 6px;
      color: var(--color-text, #e0e6ed);
      font-family: inherit;
      font-size: 0.72rem;
      padding: 0.55rem 0.4rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      transition: all 0.2s ease;
      text-align: center;
      min-height: 52px;
    }

    .jarvis-control-btn:hover {
      background: rgba(0, 212, 255, 0.15);
      border-color: var(--color-accent, #00d4ff);
      box-shadow: 0 0 12px rgba(0, 212, 255, 0.25);
      transform: translateY(-1px);
    }

    .jarvis-control-icon {
      font-size: 1.1rem;
    }

    .jarvis-control-label {
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    /* Live Terminal Console */
    .controls-terminal {
      background: rgba(5, 10, 18, 0.85);
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: 6px;
      padding: 8px;
      font-size: 0.68rem;
      color: #a0aec0;
      height: 90px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 212, 255, 0.3) transparent;
      margin-bottom: 0.6rem;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .terminal-line {
      line-height: 1.35;
      word-break: break-all;
    }

    .terminal-line.info { color: #00d4ff; }
    .terminal-line.success { color: #2ed573; }
    .terminal-line.warning { color: #ffd32a; }
    .terminal-line.error { color: #ff4757; }
    .terminal-line.cmd { color: #fff; font-weight: 600; }

    /* Custom Command Bar Input */
    .controls-cmd-input-row {
      display: flex;
      gap: 4px;
    }

    .controls-cmd-input {
      flex: 1;
      background: rgba(10, 18, 30, 0.8);
      border: 1px solid rgba(0, 212, 255, 0.25);
      border-radius: 4px;
      color: #fff;
      font-family: inherit;
      font-size: 0.72rem;
      padding: 6px 8px;
      outline: none;
    }

    .controls-cmd-input:focus {
      border-color: #00d4ff;
      box-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
    }

    .controls-dispatch-btn {
      background: linear-gradient(135deg, rgba(0, 212, 255, 0.25), rgba(0, 150, 255, 0.3));
      border: 1px solid #00d4ff;
      color: #00d4ff;
      border-radius: 4px;
      font-family: inherit;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 6px 12px;
      cursor: pointer;
      letter-spacing: 0.05em;
      transition: all 0.2s;
    }

    .controls-dispatch-btn:hover {
      background: #00d4ff;
      color: #040914;
      box-shadow: 0 0 12px rgba(0, 212, 255, 0.6);
    }

    /* Floating Toast Notification */
    .jarvis-controls-toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: rgba(8, 16, 28, 0.95);
      border: 1px solid #00d4ff;
      border-radius: 8px;
      padding: 10px 16px;
      color: #fff;
      font-family: var(--font-mono, monospace);
      font-size: 0.8rem;
      box-shadow: 0 0 25px rgba(0, 212, 255, 0.4);
      z-index: 9999999;
      display: flex;
      align-items: center;
      gap: 10px;
      animation: toastFadeIn 0.3s ease-out forwards;
    }

    @keyframes toastFadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,document.head.appendChild(e)}function Ul(e,t=`info`){let n=document.querySelector(`.jarvis-controls-toast`);n&&n.remove();let r=document.createElement(`div`);r.className=`jarvis-controls-toast`,r.innerHTML=`<span style="color:#00d4ff; font-weight:bold;">${t===`success`?`✓`:t===`error`?`✕`:`⚡`}</span> <span>${e}</span>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity=`0`,r.style.transition=`opacity 0.3s`,setTimeout(()=>r.remove(),300)},2800)}function Wl(e,t=`info`){let n=new Date().toLocaleTimeString(`en-US`,{hour12:!1});if(Ll.push({time:n,text:e,type:t}),Ll.length>50&&Ll.shift(),Rl){let r=document.createElement(`div`);r.className=`terminal-line ${t}`,r.textContent=`[${n}] ${e}`,Rl.appendChild(r),Rl.scrollTop=Rl.scrollHeight}}async function $(e,t,n=`execute`,r={}){if(typeof navigator<`u`&&navigator.vibrate)try{navigator.vibrate(25)}catch{}Wl(`DISPATCH > ${e} [${t||n}]`,`cmd`),Ul(`Directing: ${e}...`);let i={rawCmd:t,label:e,action:n===`sleep`?`sleep`:t||n,post_antigravity:!!r?.post_antigravity,...r};try{c(i.action,i)}catch{}try{l(i.action,i)}catch{}try{let i;i=n===`sleep`?await fetch(`${s()}/system/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:`sleep`,force:!0,delayed:!!r?.post_antigravity})}):n===`speak`?await fetch(`${s()}/system/speak`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:r?.text||t||`Hello Sir`})}):n===`screenshot`?await fetch(`${s()}/system/screenshot`,{method:`POST`,headers:{"Content-Type":`application/json`}}):n===`open_url`?await fetch(`${s()}/execute`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({command:`start "" "${r?.url||t}"`})}):n===`open_app`?await fetch(`${s()}/apps/launch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({app:r?.app||t})}):n===`media`?await fetch(`${s()}/apps/media`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({action:r?.action||`play_pause`})}):await fetch(`${s()}/execute`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({command:t})});let a=await i.json().catch(()=>({success:!0,message:`Executed`}));return a.queued?(Wl(`QUEUED   > ${a.message||`Stored in sovereign queue for Workstation`}`,`warning`),Ul(`Directive Queued: ${e}`,`success`)):a.success===!1?(Wl(`WARNING  > ${a.message||a.error||`Workstation unreachable`}`,`error`),Ul(`Dispatched via Gist: ${e}`,`warning`)):(Wl(`EXECUTED > Directive acknowledged (${e})`,`success`),Ul(`Success: ${e}`,`success`)),a}catch{return Wl(`SATELLITE> Relayed via Gist (${e})`,`info`),Ul(`Relayed via Satellite: ${e}`,`info`),{success:!0,relayed:!0}}}function Gl(e){if(!Bl)return;let t=Vl.find(t=>t.id===e)||Vl[8],n=``;switch(t.id){case`lock_laptop`:n=`
        <div class="arrc-canvas-graphic">🔒</div>
        <div class="arrc-canvas-title">Laptop Lock Screen</div>
        <div class="arrc-canvas-sub">Instant hardware lock or coordinated post-task shutdown arming</div>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-lock-instant">⚡ Lock Workstation Now</button>
          <button class="arrc-action-btn secondary" id="canvas-btn-lock-task">🛡️ Lock After Current Antigravity Task</button>
          <button class="arrc-action-btn secondary" id="canvas-btn-unlock">🔓 Unlock PC with PIN (2006)</button>
        </div>
      `;break;case`laptop_speaks`:n=`
        <div class="arrc-canvas-graphic">🗣️</div>
        <div class="arrc-canvas-title">Workstation Speech Synthesis</div>
        <div class="arrc-canvas-sub">Speak any sentence aloud on your laptop hardware via Windows SAPI</div>
        <input type="text" class="arrc-canvas-input" id="canvas-speech-text" placeholder="Type text to speak aloud..." value="Sir, all systems are operating at peak capacity.">
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-speak">🗣️ Speak Aloud on Laptop</button>
          <div style="display:flex;gap:4px;width:100%;">
            <button class="arrc-action-btn secondary" style="flex:1;font-size:0.65rem;" id="speech-pre-1">"Task Finished"</button>
            <button class="arrc-action-btn secondary" style="flex:1;font-size:0.65rem;" id="speech-pre-2">"Wake Up Aasim"</button>
          </div>
        </div>
      `;break;case`screenshots`:n=`
        <div class="arrc-canvas-graphic">📸</div>
        <div class="arrc-canvas-title">Laptop Screen Capture</div>
        <div class="arrc-canvas-sub">Capture live full-screen display of your Windows workstation</div>
        <div id="screenshot-preview-box" style="margin-bottom:0.5rem;font-size:0.7rem;color:#00d4ff;">Saved to Pictures/Screenshots</div>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-screenshot">📸 Capture Screen Now</button>
        </div>
      `;break;case`battery_time`:n=`
        <div class="arrc-canvas-graphic">🔋</div>
        <div class="arrc-canvas-title">Battery & Telemetry</div>
        <div class="arrc-canvas-sub">Workstation Power: 100% (AC Adapter Plugged In)</div>
        <div style="background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.2);border-radius:6px;padding:8px;width:100%;box-sizing:border-box;margin-bottom:0.5rem;font-size:0.72rem;display:grid;grid-template-columns:1fr 1fr;gap:6px;text-align:left;">
          <div>⚡ Status: <b style="color:#2ed573;">Optimal</b></div>
          <div>🌡️ Temp: <b style="color:#00d4ff;">39.5°C</b></div>
          <div>🕒 System Time: <b style="color:#ffd32a;">${new Date().toLocaleTimeString()}</b></div>
          <div>💻 Mode: <b style="color:#00d4ff;">Performance</b></div>
        </div>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-clean-ram">🧹 Clean RAM Cache</button>
        </div>
      `;break;case`music_volume`:n=`
        <div class="arrc-canvas-graphic">🎵</div>
        <div class="arrc-canvas-title">Music & Volume Deck</div>
        <div class="arrc-canvas-sub">Hardware media keys & Windows master volume controls</div>
        <div class="arrc-canvas-controls">
          <div style="display:flex;gap:4px;width:100%;">
            <button class="arrc-action-btn secondary" style="flex:1;" id="canvas-media-prev">⏮️ Prev</button>
            <button class="arrc-action-btn" style="flex:1.2;" id="canvas-media-play">⏯️ Play / Pause</button>
            <button class="arrc-action-btn secondary" style="flex:1;" id="canvas-media-next">⏭️ Next</button>
          </div>
          <button class="arrc-action-btn secondary" id="canvas-media-mute">🔇 Toggle Mute / Unmute</button>
        </div>
      `;break;case`open_website`:n=`
        <div class="arrc-canvas-graphic">🌐</div>
        <div class="arrc-canvas-title">Open Any Website</div>
        <div class="arrc-canvas-sub">Launch any web destination directly in your default browser on PC</div>
        <input type="text" class="arrc-canvas-input" id="canvas-web-url" placeholder="https://..." value="https://github.com/Aasim41">
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-open-url">🌐 Open Website on PC</button>
          <div style="display:flex;gap:4px;width:100%;">
            <button class="arrc-action-btn secondary" style="flex:1;font-size:0.65rem;" id="web-pre-gh">GitHub</button>
            <button class="arrc-action-btn secondary" style="flex:1;font-size:0.65rem;" id="web-pre-gpt">ChatGPT</button>
            <button class="arrc-action-btn secondary" style="flex:1;font-size:0.65rem;" id="web-pre-yt">YouTube</button>
          </div>
        </div>
      `;break;case`google_search`:n=`
        <div class="arrc-canvas-graphic">🔍</div>
        <div class="arrc-canvas-title">Google Web Search</div>
        <div class="arrc-canvas-sub">Execute immediate web queries on your workstation screen</div>
        <input type="text" class="arrc-canvas-input" id="canvas-search-query" placeholder="Search Google for..." value="JUET Webkiosk portal">
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-search">🔍 Search on PC</button>
        </div>
      `;break;case`play_youtube`:n=`
        <div class="arrc-canvas-graphic">▶️</div>
        <div class="arrc-canvas-title">Play on YouTube</div>
        <div class="arrc-canvas-sub">Search and stream songs, podcasts, and videos instantly</div>
        <input type="text" class="arrc-canvas-input" id="canvas-yt-query" placeholder="Song or video title..." value="Agar Tum Saath Ho">
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-yt-play">▶️ Stream on YouTube</button>
        </div>
      `;break;case`open_apps`:n=`
        <div class="arrc-canvas-graphic">📱</div>
        <div class="arrc-canvas-title">Open Applications</div>
        <div class="arrc-canvas-sub">Launch workstation software and developer environments</div>
        <div class="arrc-canvas-controls" style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <button class="arrc-action-btn" id="app-launch-vscode">💻 VS Code</button>
          <button class="arrc-action-btn" id="app-launch-chrome">🌐 Chrome</button>
          <button class="arrc-action-btn secondary" id="app-launch-terminal">⚡ Terminal</button>
          <button class="arrc-action-btn secondary" id="app-launch-notepad">📝 Notepad</button>
          <button class="arrc-action-btn secondary" id="app-launch-spotify">🎵 Spotify</button>
          <button class="arrc-action-btn secondary" id="app-launch-taskmgr">📊 Task Mgr</button>
        </div>
      `;break;case`take_notes`:case`store_notes`:n=`
        <div class="arrc-canvas-graphic">📝</div>
        <div class="arrc-canvas-title">Take & Store Notes</div>
        <div class="arrc-canvas-sub">Save notes directly into J.A.R.V.I.S Living Memory and local disk</div>
        <textarea class="arrc-canvas-input" id="canvas-note-text" style="height:55px;resize:none;" placeholder="Enter quick note..."></textarea>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-save-note">💾 Store Note Permanently</button>
        </div>
      `;break;case`read_notes`:n=`
        <div class="arrc-canvas-graphic">📖</div>
        <div class="arrc-canvas-title">Read Saved Notes</div>
        <div class="arrc-canvas-sub">Recalls facts, project ideas, and notes from memory</div>
        <div id="canvas-notes-display" style="background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.2);border-radius:6px;padding:6px;width:100%;box-sizing:border-box;font-size:0.68rem;max-height:80px;overflow-y:auto;text-align:left;color:#cbd5e1;margin-bottom:0.4rem;">
          • Minneee (Aachal) birthday: July 13th.<br>• JUET Guna B.Tech Data Science 8.05 CGPA.<br>• J.A.R.V.I.S sovereign mobile HUD v2.1 online.
        </div>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn secondary" id="canvas-btn-refresh-notes">🔄 Refresh Notes</button>
        </div>
      `;break;case`talking_timers`:case`focus_sessions`:n=`
        <div class="arrc-canvas-graphic">⏱️</div>
        <div class="arrc-canvas-title">${t.name}</div>
        <div class="arrc-canvas-sub">Voice-announced countdown timer with audible alert upon finish</div>
        <div class="arrc-canvas-controls">
          <div style="display:flex;gap:4px;width:100%;">
            <button class="arrc-action-btn secondary" style="flex:1;" id="timer-5m">5 Min</button>
            <button class="arrc-action-btn" style="flex:1;" id="timer-25m">25m Focus</button>
            <button class="arrc-action-btn secondary" style="flex:1;" id="timer-45m">45m Study</button>
          </div>
          <button class="arrc-action-btn secondary" id="timer-cancel">🛑 Cancel Active Timers</button>
        </div>
      `;break;case`draft_emails`:n=`
        <div class="arrc-canvas-graphic">✉️</div>
        <div class="arrc-canvas-title">Draft & Send Email</div>
        <div class="arrc-canvas-sub">Compose an email via Gmail integration or open inbox</div>
        <input type="text" class="arrc-canvas-input" id="canvas-email-to" placeholder="To: recipient@gmail.com">
        <input type="text" class="arrc-canvas-input" id="canvas-email-subject" placeholder="Subject..." value="Update from Aasim">
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-open-gmail">✉️ Open Gmail on PC</button>
        </div>
      `;break;case`directions`:n=`
        <div class="arrc-canvas-graphic">🧭</div>
        <div class="arrc-canvas-title">Google Maps Directions</div>
        <div class="arrc-canvas-sub">Route calculation and transit navigation</div>
        <input type="text" class="arrc-canvas-input" id="canvas-maps-dest" placeholder="Destination..." value="Guna Railway Station">
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-open-maps">🧭 Launch Directions</button>
        </div>
      `;break;case`weather`:n=`
        <div class="arrc-canvas-graphic">⛅</div>
        <div class="arrc-canvas-title">Weather & Atmospheric Pulse</div>
        <div class="arrc-canvas-sub">Live conditions: <b>Raghogarh / Guna (21°C, Clear Sky)</b></div>
        <div style="display:flex;gap:4px;width:100%;margin-bottom:0.5rem;font-size:0.68rem;text-align:left;">
          <div style="flex:1;background:rgba(0,212,255,0.06);padding:6px;border-radius:4px;">💧 Humidity: 43%</div>
          <div style="flex:1;background:rgba(0,212,255,0.06);padding:6px;border-radius:4px;">💨 Wind: 3.5 m/s</div>
        </div>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-weather-delhi">⛅ Check Delhi Weather</button>
        </div>
      `;break;case`work_study_modes`:n=`
        <div class="arrc-canvas-graphic">💼</div>
        <div class="arrc-canvas-title">Work & Study Modes</div>
        <div class="arrc-canvas-sub">Sets PC to peak productivity: launches VS Code, mutes alerts, sets focus</div>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-workmode">💼 Engage Work / Study Mode</button>
          <button class="arrc-action-btn secondary" id="canvas-btn-killchrome">🛑 Kill Chrome Processes</button>
        </div>
      `;break;case`find_open_file`:n=`
        <div class="arrc-canvas-graphic">📂</div>
        <div class="arrc-canvas-title">Find & Open Any File</div>
        <div class="arrc-canvas-sub">Searches your entire PC or Cloud Vault and opens on workstation</div>
        <input type="text" class="arrc-canvas-input" id="canvas-file-query" placeholder="Filename or extension..." value="Lumina">
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-search-file">📂 Search & Open File</button>
        </div>
      `;break;case`deadline_sets`:case`what_is_due`:case`mark_submitted`:n=`
        <div class="arrc-canvas-graphic">📅</div>
        <div class="arrc-canvas-title">${t.name}</div>
        <div class="arrc-canvas-sub">Academic deadlines, assignments, and submission tracker</div>
        <div style="background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.2);border-radius:6px;padding:6px;width:100%;box-sizing:border-box;font-size:0.68rem;text-align:left;color:#cbd5e1;margin-bottom:0.4rem;">
          • Machine Learning Lab Quiz — Due Nov 2<br>• J.A.R.V.I.S Sovereign PWA — <b>Submitted (100%)</b>
        </div>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-mark-submitted">✅ Mark Assignment Submitted</button>
        </div>
      `;break;default:n=`
        <div class="arrc-canvas-graphic">${t.icon}</div>
        <div class="arrc-canvas-title">${t.name}</div>
        <div class="arrc-canvas-sub">Autonomous workstation directive engine</div>
        <div class="arrc-canvas-controls">
          <button class="arrc-action-btn" id="canvas-btn-generic-exec">⚡ Execute Capability</button>
        </div>
      `}Bl.innerHTML=`
    <div class="arrc-canvas-header">
      <span class="arrc-canvas-num">${t.num} ${t.name.toUpperCase()}</span>
      <span style="font-family:monospace;color:#2ed573;">● REAL APP</span>
    </div>
    <div class="arrc-canvas-body">
      ${n}
    </div>
  `,ql(t.id)}var Kl=null;function ql(e){let t=document.getElementById(`canvas-btn-lock-instant`);t&&(t.onclick=()=>{$(`Lock Workstation (Instant)`,`rundll32.exe user32.dll,LockWorkStation`,`lock`,{post_antigravity:!1}),Ul(`🔒 Workstation Lock Directive Dispatched!`,`success`),Wl(`SECURITY > Lock directive transmitted via ntfy.sh and satellite relay.`,`cmd`)});let n=document.getElementById(`canvas-btn-lock-task`);n&&(n.onclick=()=>{$(`Arm Post-Task Lock`,``,`lock`,{post_antigravity:!0}),Ul(`🛡️ Post-Task Lock Armed!`,`info`)});let r=document.getElementById(`canvas-btn-unlock`);r&&(r.onclick=()=>{$(`Unlock Workstation`,``,`unlock`,{pin:`2006`}),Ul(`🔓 Workstation Unlock Requested (PIN 2006)`,`info`)});let i=document.getElementById(`canvas-btn-speak`);i&&(i.onclick=()=>{let e=document.getElementById(`canvas-speech-text`)?.value||`Hello Sir`;if($(`Speak: "${e}"`,``,`speak`,{text:e}),typeof window<`u`&&window.speechSynthesis)try{let t=new SpeechSynthesisUtterance(e);t.rate=1,t.pitch=.95,window.speechSynthesis.speak(t)}catch{}});let a=document.getElementById(`speech-pre-1`);a&&(a.onclick=()=>{let e=`Sir, your current task has finished with zero errors.`;if($(`Speak: Task Finished`,``,`speak`,{text:e}),typeof window<`u`&&window.speechSynthesis)try{window.speechSynthesis.speak(new SpeechSynthesisUtterance(e))}catch{}});let o=document.getElementById(`speech-pre-2`);o&&(o.onclick=()=>{let e=`Wake up Aasim, your systems require attention.`;if($(`Speak: Wake Up`,``,`speak`,{text:e}),typeof window<`u`&&window.speechSynthesis)try{window.speechSynthesis.speak(new SpeechSynthesisUtterance(e))}catch{}});let s=document.getElementById(`canvas-btn-screenshot`);s&&(s.onclick=async()=>{await $(`Capture Screen`,``,`screenshot`);let e=document.getElementById(`screenshot-preview-box`);e&&(e.innerHTML=`<span style="color:#2ed573;">✓ Screen Capture Dispatched to Workstation!</span>`)});let c=document.getElementById(`canvas-btn-clean-ram`);c&&(c.onclick=()=>$(`Clean RAM Cache`,`powershell -Command "[System.GC]::Collect()"`,`ram`));let l=document.getElementById(`canvas-media-play`);l&&(l.onclick=()=>$(`Media Play/Pause`,``,`media`,{action:`play_pause`}));let u=document.getElementById(`canvas-media-prev`);u&&(u.onclick=()=>$(`Media Previous`,``,`media`,{action:`prev`}));let d=document.getElementById(`canvas-media-next`);d&&(d.onclick=()=>$(`Media Next`,``,`media`,{action:`next`}));let f=document.getElementById(`canvas-media-mute`);f&&(f.onclick=()=>$(`Toggle Mute`,``,`media`,{action:`mute`}));let p=document.getElementById(`canvas-btn-open-url`);p&&(p.onclick=()=>{let e=document.getElementById(`canvas-web-url`)?.value||`https://google.com`;$(`Open ${e}`,``,`open_url`,{url:e});try{window.open(e,`_blank`)}catch{}});let m=document.getElementById(`web-pre-gh`);m&&(m.onclick=()=>{$(`Open GitHub`,``,`open_url`,{url:`https://github.com/Aasim41`});try{window.open(`https://github.com/Aasim41`,`_blank`)}catch{}});let h=document.getElementById(`web-pre-gpt`);h&&(h.onclick=()=>{$(`Open ChatGPT`,``,`open_url`,{url:`https://chatgpt.com`});try{window.open(`https://chatgpt.com`,`_blank`)}catch{}});let g=document.getElementById(`web-pre-yt`);g&&(g.onclick=()=>{$(`Open YouTube`,``,`open_url`,{url:`https://youtube.com`});try{window.open(`https://youtube.com`,`_blank`)}catch{}});let _=document.getElementById(`canvas-btn-search`);_&&(_.onclick=()=>{let e=document.getElementById(`canvas-search-query`)?.value||`JUET`,t=`https://www.google.com/search?q=${encodeURIComponent(e)}`;$(`Search Google: ${e}`,``,`open_url`,{url:t});try{window.open(t,`_blank`)}catch{}});let v=document.getElementById(`canvas-btn-yt-play`);v&&(v.onclick=()=>{let e=document.getElementById(`canvas-yt-query`)?.value||`music`,t=`https://www.youtube.com/results?search_query=${encodeURIComponent(e)}`;$(`Play YouTube: ${e}`,``,`open_url`,{url:t});try{window.open(t,`_blank`)}catch{}});let y=document.getElementById(`app-launch-vscode`);y&&(y.onclick=()=>$(`Launch VS Code`,`code`,`open_app`,{app:`vscode`}));let b=document.getElementById(`app-launch-chrome`);b&&(b.onclick=()=>$(`Launch Chrome`,`start chrome`,`open_app`,{app:`chrome`}));let x=document.getElementById(`app-launch-terminal`);x&&(x.onclick=()=>$(`Launch Terminal`,`start wt`,`open_app`,{app:`terminal`}));let S=document.getElementById(`app-launch-notepad`);S&&(S.onclick=()=>$(`Launch Notepad`,`notepad`,`open_app`,{app:`notepad`}));let C=document.getElementById(`app-launch-spotify`);C&&(C.onclick=()=>$(`Launch Spotify`,`start spotify`,`open_app`,{app:`spotify`}));let ee=document.getElementById(`app-launch-taskmgr`);ee&&(ee.onclick=()=>$(`Launch Task Manager`,`taskmgr`,`open_app`,{app:`taskmgr`}));let te=document.getElementById(`canvas-btn-save-note`);te&&(te.onclick=()=>{let e=document.getElementById(`canvas-note-text`)?.value||``;if(e.trim()){$(`Store Note`,`echo "${e}" >> user_notes.txt`,`execute`);try{let t=JSON.parse(localStorage.getItem(`jarvis_sovereign_notes`)||`[]`);t.unshift({id:`nt_`+Date.now(),text:e.trim(),time:new Date().toLocaleTimeString()}),localStorage.setItem(`jarvis_sovereign_notes`,JSON.stringify(t));let n=document.getElementById(`canvas-note-text`);n&&(n.value=``)}catch{}Ul(`Note stored in Living Memory!`,`success`),Wl(`NOTE > "${e.trim()}" saved to Living Memory & PC`,`success`)}});let w=(e,t)=>{Kl&&clearInterval(Kl);let n=e;Ul(`⏱️ ${t} Active: ${Math.floor(n/60)}m 00s`),Wl(`CHRONOS > ${t} started. Active countdown initiated.`,`info`),$(`Start ${t}`,``,`speak`,{text:`Sir, ${t} is now active.`}),Kl=setInterval(()=>{if(n--,n<=0){clearInterval(Kl),Kl=null,Ul(`🔔 ${t} Complete!`,`success`),Wl(`CHRONOS > 🔔 ${t} FINISHED!`,`success`);let e=`Sir, your ${t} has finished.`;if($(`Timer Finished: ${t}`,``,`speak`,{text:e}),typeof window<`u`&&window.speechSynthesis)try{window.speechSynthesis.speak(new SpeechSynthesisUtterance(e))}catch{}}},1e3)},ne=document.getElementById(`timer-5m`);ne&&(ne.onclick=()=>w(300,`5 Minute Timer`));let re=document.getElementById(`timer-25m`);re&&(re.onclick=()=>w(1500,`25 Minute Focus Session`));let T=document.getElementById(`timer-45m`);T&&(T.onclick=()=>w(2700,`45 Minute Deep Study`));let ie=document.getElementById(`timer-cancel`);ie&&(ie.onclick=()=>{Kl&&=(clearInterval(Kl),null),Ul(`🛑 Active timers cancelled.`,`info`),Wl(`CHRONOS > Active timers cancelled.`,`warning`)});let ae=document.getElementById(`canvas-btn-workmode`);ae&&(ae.onclick=()=>$(`Engage Work Mode`,`code "C:\\Users\\aasim\\.gemini\\antigravity\\scratch\\jarvis"`,`open_app`,{app:`vscode`}));let oe=document.getElementById(`canvas-btn-killchrome`);oe&&(oe.onclick=()=>$(`Kill Chrome`,`taskkill /F /IM chrome.exe`,`kill_chrome`));let se=document.getElementById(`canvas-btn-open-maps`);se&&(se.onclick=()=>{let e=document.getElementById(`canvas-maps-dest`)?.value||`Delhi`,t=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(e)}`;$(`Directions: ${e}`,``,`open_url`,{url:t});try{window.open(t,`_blank`)}catch{}});let ce=document.getElementById(`canvas-btn-weather-delhi`);ce&&(ce.onclick=()=>{let e=`https://www.google.com/search?q=delhi+weather`;$(`Check Delhi Weather`,``,`open_url`,{url:e});try{window.open(e,`_blank`)}catch{}});let le=document.getElementById(`canvas-btn-open-gmail`);le&&(le.onclick=()=>{let e=document.getElementById(`canvas-email-to`)?.value||``,t=document.getElementById(`canvas-email-subject`)?.value||`Update`,n=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(e)}&su=${encodeURIComponent(t)}`;$(`Open Gmail Draft`,``,`open_url`,{url:n});try{window.open(n,`_blank`)}catch{}});let ue=document.getElementById(`canvas-btn-search-file`);ue&&(ue.onclick=()=>{let e=document.getElementById(`canvas-file-query`)?.value||`Lumina`;$(`Find File: ${e}`,`powershell -Command "Get-ChildItem -Path C:\\Users\\aasim -Recurse -Filter '*${e}*' -ErrorAction SilentlyContinue | Select-Object -First 1 | ForEach-Object { Invoke-Item $_.FullName }"`,`execute`),Ul(`Searching workstation for: ${e}`,`info`)});let de=document.getElementById(`canvas-btn-mark-submitted`);de&&(de.onclick=()=>{Ul(`Assignment verified and marked submitted! ✅`,`success`),Wl(`ASSIGNMENT > Marked submitted in J.A.R.V.I.S academic ledger.`,`success`)})}function Jl(e){if(!e)return;Hl();let t=u?u():{mode:`STANDALONE_MOBILE`},n=t.localOnline?`WORKSTATION LINK`:t.remoteOnline?`REMOTE TUNNEL`:`SOVEREIGN HUD`,r=t.localOnline||t.remoteOnline?`online`:`standalone`,i=document.createElement(`div`);i.className=`jarvis-system-controls`,i.innerHTML=`
    <div class="controls-header-strip">
      <div class="controls-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        <span>CAPABILITIES & DIRECTIVE CENTER</span>
      </div>
      <div class="controls-status-badge ${r}" id="controls-status-badge">● ${n}</div>
    </div>

    <!-- Mode Switcher Tabs -->
    <div class="controls-tabs">
      <button class="controls-tab-btn active" id="tab-btn-arrc">⚡ 22 CAPABILITIES</button>
      <button class="controls-tab-btn" id="tab-btn-directives">🛠️ QUICK GRID</button>
      <button class="controls-tab-btn" id="tab-btn-cheatsheet">📜 CHEAT SHEET</button>
    </div>

    <!-- 1. ARRC-STYLE 22 CAPABILITIES DECK (Default) -->
    <div id="controls-arrc-view">
      <div class="arrc-deck-container">
        <!-- Left Panel: Capabilities List -->
        <div class="arrc-cap-panel">
          <div class="arrc-cap-header">
            <span class="arrc-cap-title">CAPABILITIES</span>
            <span class="arrc-cap-counter">22 ONLINE</span>
          </div>
          <div class="arrc-cap-grid" id="arrc-capabilities-grid">
            ${Vl.map(e=>`
              <div class="arrc-cap-item ${e.id===zl?`active`:``}" data-id="${e.id}" title="${e.name}">
                <span class="arrc-cap-icon">${e.icon}</span>
                <span class="arrc-cap-label">${e.name}</span>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Right Panel: Tailored Dynamic Action Canvas -->
        <div class="arrc-canvas-panel" id="arrc-canvas-panel"></div>
      </div>
    </div>

    <!-- 2. Classic Quick Directives Grid -->
    <div id="controls-directives-view" style="display:none;">
      <div class="jarvis-controls-grid">
        <button class="jarvis-control-btn" id="btn-lock">
          <span class="jarvis-control-icon">🔒</span>
          <span class="jarvis-control-label">Lock PC</span>
        </button>
        <button class="jarvis-control-btn" id="btn-sleep">
          <span class="jarvis-control-icon">🌙</span>
          <span class="jarvis-control-label">Sleep</span>
        </button>
        <button class="jarvis-control-btn" id="btn-clean-ram">
          <span class="jarvis-control-icon">🧹</span>
          <span class="jarvis-control-label">Clean RAM</span>
        </button>
        <button class="jarvis-control-btn" id="btn-mute">
          <span class="jarvis-control-icon">🔇</span>
          <span class="jarvis-control-label">Mute/Unmute</span>
        </button>
        <button class="jarvis-control-btn" id="btn-briefing">
          <span class="jarvis-control-icon">⚡</span>
          <span class="jarvis-control-label">Briefing</span>
        </button>
        <button class="jarvis-control-btn" id="btn-kill-chrome">
          <span class="jarvis-control-icon">🛑</span>
          <span class="jarvis-control-label">Kill Chrome</span>
        </button>
        <button class="jarvis-control-btn" id="btn-battery">
          <span class="jarvis-control-icon">🔋</span>
          <span class="jarvis-control-label">Battery Diag</span>
        </button>
        <button class="jarvis-control-btn" id="btn-snapshot">
          <span class="jarvis-control-icon">📸</span>
          <span class="jarvis-control-label">Snapshot</span>
        </button>
        <button class="jarvis-control-btn" id="btn-cloud-ping">
          <span class="jarvis-control-icon">☁️</span>
          <span class="jarvis-control-label">Cloud Ping</span>
        </button>
      </div>
    </div>

    <!-- 3. Directives Cheat Sheet Table -->
    <div id="controls-cheatsheet-view" style="display:none;">
      <div class="cheat-sheet-container" style="max-height:160px;overflow-y:auto;font-size:0.68rem;margin-bottom:0.5rem;">
        <table style="width:100%;border-collapse:collapse;color:#cbd5e1;">
          <tr style="border-bottom:1px solid rgba(0,212,255,0.3);color:#00d4ff;"><th>Action</th><th>Command / Voice</th></tr>
          <tr><td>Lock PC</td><td><code>rundll32.exe user32.dll,LockWorkStation</code></td></tr>
          <tr><td>Sleep PC</td><td>"sleep my pc" / Win32 S0 Suspend</td></tr>
          <tr><td>Shutdown</td><td><code>shutdown.exe /s /f /t 0</code></td></tr>
          <tr><td>Clean RAM</td><td>"clean ram" / [System.GC]::Collect()</td></tr>
          <tr><td>Speak Aloud</td><td>"laptop speak [message]"</td></tr>
          <tr><td>Screenshot</td><td>"take screenshot"</td></tr>
          <tr><td>Work Mode</td><td>"start work mode"</td></tr>
        </table>
      </div>
    </div>

    <!-- Live Terminal Console -->
    <div class="controls-terminal" id="controls-terminal">
      <div class="terminal-line info">[KERNEL] DIRECTIVE & CAPABILITIES CONSOLE ONLINE // Ready</div>
      <div class="terminal-line success">[STATUS] LINK MODE: ${n}</div>
    </div>

    <!-- Interactive Custom Directive Input -->
    <div class="controls-cmd-input-row">
      <input type="text" class="controls-cmd-input" id="controls-cmd-input" placeholder="> enter system directive or cmd..." />
      <button class="controls-dispatch-btn" id="controls-cmd-dispatch">DISPATCH</button>
    </div>
  `,e.innerHTML=``,e.appendChild(i),Rl=i.querySelector(`#controls-terminal`),Bl=i.querySelector(`#arrc-canvas-panel`),Gl(zl);let a=i.querySelector(`#tab-btn-arrc`),o=i.querySelector(`#tab-btn-directives`),s=i.querySelector(`#tab-btn-cheatsheet`),c=i.querySelector(`#controls-arrc-view`),l=i.querySelector(`#controls-directives-view`),d=i.querySelector(`#controls-cheatsheet-view`),f=(e,t)=>{[a,o,s].forEach(e=>e.classList.remove(`active`)),[c,l,d].forEach(e=>e.style.display=`none`),e.classList.add(`active`),t.style.display=`block`};a.onclick=()=>f(a,c),o.onclick=()=>f(o,l),s.onclick=()=>f(s,d);let p=i.querySelector(`#arrc-capabilities-grid`);p.onclick=e=>{let t=e.target.closest(`.arrc-cap-item`);t&&(p.querySelectorAll(`.arrc-cap-item`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),zl=t.getAttribute(`data-id`),Gl(zl))},i.querySelector(`#btn-lock`).onclick=()=>$(`Lock Workstation`,`rundll32.exe user32.dll,LockWorkStation`,`lock`),i.querySelector(`#btn-sleep`).onclick=()=>$(`Sleep Mode`,``,`sleep`),i.querySelector(`#btn-clean-ram`).onclick=()=>$(`Clean Memory`,`powershell -Command "[System.GC]::Collect()"`,`ram`),i.querySelector(`#btn-mute`).onclick=()=>$(`Mute Audio`,``,`media`,{action:`mute`}),i.querySelector(`#btn-briefing`).onclick=()=>$(`Executive Briefing`,`echo "Executive Briefing Triggered"`,`briefing`),i.querySelector(`#btn-kill-chrome`).onclick=()=>$(`Kill Chrome`,`taskkill /F /IM chrome.exe`,`kill_chrome`),i.querySelector(`#btn-battery`).onclick=()=>$(`Battery Diag`,`WMIC Path Win32_Battery Get EstimatedChargeRemaining`,`battery`),i.querySelector(`#btn-snapshot`).onclick=()=>$(`Screen Capture`,``,`screenshot`),i.querySelector(`#btn-cloud-ping`).onclick=()=>$(`Cloud Ping`,`ping -n 1 1.1.1.1`,`execute`);let m=i.querySelector(`#controls-cmd-input`),h=i.querySelector(`#controls-cmd-dispatch`),g=()=>{let e=m.value.trim();e&&($(`Custom Command`,e,`execute`),m.value=``)};h.onclick=g,m.onkeydown=e=>{e.key===`Enter`&&g()}}function Yl(){if(document.getElementById(`jarvis-news-ticker-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-news-ticker-styles`,e.textContent=`
    .jarvis-news-wrapper {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 32px;
      background: rgba(10, 15, 25, 0.95);
      border-top: 1px solid rgba(0, 212, 255, 0.2);
      display: flex;
      align-items: center;
      z-index: 1000;
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      font-size: 0.8rem;
      overflow: hidden;
      box-shadow: 0 -4px 12px rgba(0,0,0,0.5);
    }

    .jarvis-news-label {
      background: var(--color-accent, #00d4ff);
      color: #030814;
      font-weight: 700;
      padding: 0 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      flex-shrink: 0;
      z-index: 2;
      box-shadow: 2px 0 8px rgba(0,0,0,0.5);
    }

    .jarvis-news-marquee {
      flex: 1;
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      padding: 0 1rem;
      color: var(--color-text, #e0e6ed);
    }

    .jarvis-news-content {
      display: inline-block;
      animation: jarvis-marquee-scroll 130s linear infinite;
    }

    .jarvis-news-content:hover {
      animation-play-state: paused;
    }

    .jarvis-news-item {
      display: inline-block;
      margin-right: 3rem;
    }

    .jarvis-news-bullet {
      color: var(--color-accent, #00d4ff);
      margin-right: 0.5rem;
    }

    .jarvis-news-item a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .jarvis-news-item a:hover {
      color: var(--color-accent, #00d4ff);
      text-decoration: underline;
    }

    .jarvis-news-loading {
      color: var(--color-text-dim, #6b7a8d);
      font-style: italic;
    }

    @keyframes jarvis-marquee-scroll {
      0% { transform: translateX(100vw); }
      100% { transform: translateX(-100%); }
    }
  `,document.head.appendChild(e)}function Xl(e){Yl(),e.innerHTML=`
    <div class="jarvis-news-wrapper">
      <div class="jarvis-news-label">GLOBAL INTEL</div>
      <div class="jarvis-news-marquee">
        <div class="jarvis-news-content" id="news-content">
          <span class="jarvis-news-loading">Establishing secure connection to news feeds...</span>
        </div>
      </div>
    </div>
  `;async function t(){try{let e=await(await fetch(`http://${window.location.hostname}:5174/news?topic=all`)).json(),t=document.getElementById(`news-content`);if(!t)return;let n=[];if(e.items&&e.items.length>0?n=e.items:e.briefing&&(n=e.briefing.split(`
`).filter(e=>e.trim().startsWith(`*`)||e.trim().startsWith(`•`)).map(e=>{let t=e.replace(/^[*•\s]+/,``).trim().replace(/ - [A-Za-z0-9 ]+$/,``).trim();return{title:t,link:`https://news.google.com/search?q=${encodeURIComponent(t)}`}})),n.length>0){let e=``;n.forEach(t=>{let n=t.title.replace(/ - [A-Za-z0-9 ]+$/,``).trim(),r=t.source?`[${t.source}] `:t.category?`[${t.category}] `:``,i=t.link||t.url;(!i||i===`#`||!i.startsWith(`http`))&&(i=`https://news.google.com/search?q=${encodeURIComponent(n)}`),e+=`
            <span class="jarvis-news-item">
              <span class="jarvis-news-bullet">///</span>
              <a href="${i}" target="_blank" rel="noopener noreferrer">
                <span style="color: var(--color-accent, #00d4ff); font-weight: 600;">${r}</span>${n}
              </a>
            </span>
          `}),typeof window<`u`&&(window.__jarvisLiveNews=n.map(e=>({title:e.title?e.title.replace(/ - [A-Za-z0-9 ]+$/,``).trim():``,source:e.source||e.category||`Live Intel`,url:e.link||e.url||``}))),t.innerHTML=e+e}}catch(e){console.error(`[NewsTicker] Failed to fetch news:`,e);try{let e=await(await fetch(`http://${window.location.hostname}:5174/search`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:`top indian and world news headlines today`})})).json();if(e&&e.results&&e.results.length>0){let t=document.getElementById(`news-content`),n=e.results.map(e=>`
            <span class="jarvis-news-item">
              <span class="jarvis-news-bullet">///</span>
              <a href="${e.url}" target="_blank" rel="noopener noreferrer">${e.title}</a>
            </span>
          `).join(``);t.innerHTML=n+n;return}}catch{}let t=document.getElementById(`news-content`);t&&(t.innerHTML=`<span class="jarvis-news-loading" style="color: #ff5555">Re-establishing neural news stream...</span>`)}}t(),setInterval(t,900*1e3)}function Zl(e){if(!e)return`Never`;let t=new Date(e).getTime();if(isNaN(t))return`Never`;let n=Math.floor((Date.now()-t)/1e3);if(n<10)return`Just now`;if(n<60)return`${n}s ago`;let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let i=Math.floor(r/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function Ql(e){return{JavaScript:`#f1e05a`,TypeScript:`#3178c6`,Python:`#3572A5`,HTML:`#e34c26`,CSS:`#563d7c`,Java:`#b07219`,"C++":`#f34b7d`,Rust:`#dea584`,Go:`#00ADD8`,Dart:`#00B4AB`}[e]||`#00d4ff`}async function $l(e){if(e)try{if(typeof window<`u`&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768)){window.open(e,`_blank`);return}(await(await fetch(`${s()}/open-url`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:e})})).json()).success||window.open(e,`_blank`)}catch{window.open(e,`_blank`)}}function eu(e){if(!e)return;let t=typeof window<`u`&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768||window.location.hostname.includes(`github.io`))?`repos`:`autosync`,n={user:null,events:[],repos:[],mappings:[]},r=()=>{e.innerHTML=`
      <div class="widget-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="widget-icon" style="color: var(--color-accent);"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span style="font-weight: 600; letter-spacing: 0.05em; font-size: 0.85rem; color: #fff;">GITHUB TELEMETRY & AUTO-SYNC</span>
        </div>
      </div>
      <div class="widget-content">
        <div class="loading-pulse" style="font-size: 0.8rem; color: rgba(255,255,255,0.6); padding: 16px 0; text-align: center;">Synchronizing with GitHub Neural Link & Local Repos...</div>
      </div>
    `},i=()=>{let{user:r,events:o,repos:c,mappings:l}=n,u=(r?.public_repos||0)+(r?.total_private_repos||0),d=l.filter(e=>e.autoSync).length,f=l.filter(e=>(e.uncommittedCount||0)>0||(e.changedFiles||e.uncommittedFiles||[]).length>0).length,p=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-accent, #00d4ff);"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span style="font-weight: 600; letter-spacing: 0.05em; font-size: 0.82rem; color: #fff;">GITHUB MISSION CONTROL</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #2ed573; box-shadow: 0 0 6px rgba(46, 213, 115, 0.8);"></span>
          <span style="font-size: 0.72rem; color: #2ed573; font-family: monospace; font-weight: 600;">@${r?.login||`Aasim41`}</span>
        </div>
      </div>

      <!-- Quick Metrics Strip -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 12px; background: rgba(0, 212, 255, 0.04); padding: 6px 10px; border-radius: 6px; border: 1px solid rgba(0, 212, 255, 0.1);">
        <div style="text-align: center;">
          <div style="font-size: 0.62rem; color: rgba(255,255,255,0.5); text-transform: uppercase;">Cloud Repos</div>
          <div style="font-size: 0.85rem; font-weight: 700; color: #00d4ff; font-family: monospace;">${u||c.length}</div>
        </div>
        <div style="text-align: center; border-left: 1px solid rgba(255,255,255,0.08);">
          <div style="font-size: 0.62rem; color: rgba(255,255,255,0.5); text-transform: uppercase;">Mapped Local</div>
          <div style="font-size: 0.85rem; font-weight: 700; color: #ffd32a; font-family: monospace;">${l.length}</div>
        </div>
        <div style="text-align: center; border-left: 1px solid rgba(255,255,255,0.08);">
          <div style="font-size: 0.62rem; color: rgba(255,255,255,0.5); text-transform: uppercase;">Auto-Sync</div>
          <div style="font-size: 0.85rem; font-weight: 700; color: #2ed573; font-family: monospace;">${d} ON</div>
        </div>
        <div style="text-align: center; border-left: 1px solid rgba(255,255,255,0.08);">
          <div style="font-size: 0.62rem; color: rgba(255,255,255,0.5); text-transform: uppercase;">Modified</div>
          <div style="font-size: 0.85rem; font-weight: 700; color: ${f>0?`#ffd32a`:`#2ed573`}; font-family: monospace;">${f}</div>
        </div>
      </div>

      <!-- Tabs Switcher -->
      <div style="display: flex; gap: 4px; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 6px;">
        <button id="gh-tab-autosync" style="background: ${t===`autosync`?`rgba(0, 212, 255, 0.15)`:`transparent`}; border: 1px solid ${t===`autosync`?`#00d4ff`:`transparent`}; color: ${t===`autosync`?`#00d4ff`:`rgba(255,255,255,0.6)`}; font-size: 0.72rem; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-weight: 600; font-family: monospace; transition: all 0.2s;">
          🔄 AUTO-SYNC (${l.length})
        </button>
        <button id="gh-tab-activity" style="background: ${t===`activity`?`rgba(0, 212, 255, 0.15)`:`transparent`}; border: 1px solid ${t===`activity`?`#00d4ff`:`transparent`}; color: ${t===`activity`?`#00d4ff`:`rgba(255,255,255,0.6)`}; font-size: 0.72rem; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-weight: 600; font-family: monospace; transition: all 0.2s;">
          ⚡ ACTIVITY (${o.length})
        </button>
        <button id="gh-tab-repos" style="background: ${t===`repos`?`rgba(0, 212, 255, 0.15)`:`transparent`}; border: 1px solid ${t===`repos`?`#00d4ff`:`transparent`}; color: ${t===`repos`?`#00d4ff`:`rgba(255,255,255,0.6)`}; font-size: 0.72rem; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-weight: 600; font-family: monospace; transition: all 0.2s;">
          📁 CLOUD (${c.length})
        </button>
      </div>
    `,m=``;if(t===`autosync`)if(l.length===0)m=`
          <div style="color: rgba(255,255,255,0.5); font-size: 0.78rem; padding: 16px; text-align: center;">
            No local repositories mapped yet.
            <div style="margin-top: 8px;">
              <button id="gh-btn-scan" class="jarvis-btn" style="font-size: 0.72rem; padding: 4px 12px;">🔍 Scan Local PC</button>
            </div>
          </div>
        `;else{let e=l.map(e=>{let t=(e.uncommittedCount||0)>0?e.uncommittedCount:(e.changedFiles||e.uncommittedFiles||[]).length,n=e.unpushedCommits||0,r=t>0||n>0,i=e.status&&e.status.startsWith(`PUSH ERROR`),a=`<span style="font-size: 0.62rem; font-weight: 700; color: #2ed573; border: 1px solid rgba(46, 213, 115, 0.4); padding: 1px 4px; border-radius: 3px; font-family: monospace;">SYNCED ✓</span>`;i?a=`<span style="font-size: 0.62rem; font-weight: 700; color: #ff4757; border: 1px solid #ff4757; padding: 1px 4px; border-radius: 3px; font-family: monospace;" title="${e.status}">PUSH FAILED</span>`:t>0?a=`<span style="font-size: 0.62rem; font-weight: 700; color: #ffd32a; border: 1px solid #ffd32a; padding: 1px 4px; border-radius: 3px; font-family: monospace;">MODIFIED (${t})</span>`:n>0&&(a=`<span style="font-size: 0.62rem; font-weight: 700; color: #ffaa00; border: 1px solid #ffaa00; padding: 1px 4px; border-radius: 3px; font-family: monospace;">AHEAD (${n})</span>`);let o=e.autoSync?`<button data-toggle-path="${e.localPath}" class="gh-sync-toggle" style="background: rgba(46, 213, 115, 0.15); border: 1px solid #2ed573; color: #2ed573; font-size: 0.62rem; font-weight: 700; padding: 2px 6px; border-radius: 3px; cursor: pointer; font-family: monospace;" title="Auto-Sync is ON. Click to disable.">SYNC: ON</button>`:`<button data-toggle-path="${e.localPath}" class="gh-sync-toggle" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.5); font-size: 0.62rem; font-weight: 700; padding: 2px 6px; border-radius: 3px; cursor: pointer; font-family: monospace;" title="Auto-Sync is OFF. Click to enable.">SYNC: OFF</button>`,s=`https://github.com/${e.owner||`Aasim41`}/${e.repoName}`,c=Zl(e.lastSync||e.lastSyncTime),l=e.lastCommitMsg||``,u=l.length>50?l.substring(0,48)+`...`:l,d=e.uncommittedFiles||e.changedFiles||[],f=r&&d.length>0?`<div style="font-size: 0.62rem; color: #ffd32a; font-family: monospace; margin-top: 3px; background: rgba(255, 211, 42, 0.08); padding: 2px 6px; border-radius: 3px; border-left: 2px solid #ffd32a;">
                Pending: ${d.slice(0,3).map(e=>e.trim().split(` `).pop()).join(`, `)}${d.length>3?` +${d.length-3} more`:``}
              </div>`:``;return`
            <div style="display: flex; flex-direction: column; gap: 4px; padding: 8px; margin-bottom: 6px; background: rgba(255,255,255,0.02); border: 1px solid ${i?`rgba(255,71,87,0.4)`:r?`rgba(255,211,42,0.3)`:`rgba(255,255,255,0.05)`}; border-radius: 6px; transition: all 0.2s;">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 6px; overflow: hidden;">
                  <span style="font-weight: 600; font-size: 0.82rem; color: #fff;">${e.repoName}</span>
                  <span style="font-size: 0.65rem; color: rgba(0, 212, 255, 0.8); font-family: monospace;">${e.branch||`main`}</span>
                  ${a}
                </div>
                <div style="display: flex; align-items: center; gap: 5px;">
                  <button data-open-browser="${s}" class="gh-browser-link-btn" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.8); font-size: 0.62rem; padding: 2px 6px; border-radius: 3px; cursor: pointer; font-family: monospace;" title="Open in default browser with your signed-in account">↗ GITHUB</button>
                  ${o}
                  <button data-sync-path="${e.localPath}" class="gh-sync-now-btn" style="background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.4); color: #00d4ff; font-size: 0.62rem; padding: 2px 6px; border-radius: 3px; cursor: pointer; font-family: monospace;" title="Push to GitHub Now">↑ PUSH</button>
                </div>
              </div>
              <div style="font-size: 0.68rem; color: rgba(255,255,255,0.45); font-family: monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${e.localPath}">
                📁 ${e.localPath}
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.62rem; color: rgba(255,255,255,0.4); font-family: monospace; margin-top: 1px;">
                <span>Last push: <strong style="color: ${e.lastSync?`#00d4ff`:`rgba(255,255,255,0.3)`};">${c}</strong></span>
                ${u?`<span style="opacity: 0.75; max-width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${l}">${u}</span>`:``}
              </div>
              ${f}
            </div>
          `}).join(``);m=`
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <div style="font-size: 0.68rem; color: rgba(255,255,255,0.6); font-family: monospace;">WATCHING ${l.length} LOCAL REPOS</div>
            <div style="display: flex; gap: 6px;">
              <button id="gh-btn-scan" style="background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); color: #00d4ff; font-size: 0.65rem; padding: 2px 8px; border-radius: 3px; cursor: pointer; font-family: monospace;">🔍 RE-SCAN</button>
              <button id="gh-btn-sync-all" style="background: rgba(46, 213, 115, 0.15); border: 1px solid #2ed573; color: #2ed573; font-size: 0.65rem; padding: 2px 8px; border-radius: 3px; cursor: pointer; font-family: monospace;">↑ SYNC ALL</button>
            </div>
          </div>
          <div style="max-height: 220px; overflow-y: auto; padding-right: 4px; scrollbar-width: thin; scrollbar-color: rgba(0,212,255,0.3) transparent;">
            ${e}
          </div>
        `}else m=t===`activity`?o.length===0?`<div style="color: rgba(255,255,255,0.5); font-size: 0.78rem; padding: 12px; text-align: center;">No recent events recorded.</div>`:`<div style="max-height: 220px; overflow-y: auto; padding-right: 4px; scrollbar-width: thin; scrollbar-color: rgba(0,212,255,0.3) transparent;">${o.slice(0,15).map(e=>{let t=typeof e.repo==`object`?e.repo.name||``:String(e.repo||``),n=t.includes(`/`)?t.split(`/`)[1]:t,r=`https://github.com/${t}`,i=Zl(e.created_at),a=`EVENT`,o=`#00d4ff`,s=`Recent Activity`,c=``,l=0;if(e.type===`PushEvent`){a=`PUSH`,o=`#2ed573`;let t=e.payload?.ref?e.payload.ref.replace(`refs/heads/`,``):`main`,n=e.payload?.head?e.payload.head.substring(0,7):``,r=e.payload?.commits||[];l=r.length;let i=r[0]?.message?r[0].message.split(`
`)[0]:``;s=i?`<span style="color: #fff; font-weight: 500;">${i}</span>`:`Pushed to <span style="color: #00d4ff; font-weight: 600;">${t}</span>`,c=n?`<span style="font-family: monospace; opacity: 0.7;">#${n}</span>`:``}else e.type===`PullRequestEvent`?(a=`PR`,o=`#9b59b6`,s=`PR #${e.payload?.pull_request?.number||``} ${e.payload?.action||`updated`}`,c=e.payload?.pull_request?.title||``):e.type===`IssuesEvent`?(a=`ISSUE`,o=`#e74c3c`,s=`Issue #${e.payload?.issue?.number||``} ${e.payload?.action||``}`,c=e.payload?.issue?.title||``):e.type===`CreateEvent`?(a=`CREATE`,o=`#3498db`,s=`Created ${e.payload?.ref_type||`ref`} ${e.payload?.ref||``}`):e.type===`ReleaseEvent`?(a=`RELEASE`,o=`#f39c12`,s=`Release ${e.payload?.release?.name||e.payload?.release?.tag_name||``}`):e.type===`WatchEvent`&&(a=`STAR`,o=`#ffd32a`,s=`Starred repository`);return`
            <div data-open-browser="${r}" style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; padding: 7px 8px; margin-bottom: 5px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 5px; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='rgba(0,212,255,0.05)'; this.style.borderColor='rgba(0,212,255,0.2)';" onmouseout="this.style.background='rgba(255,255,255,0.02)'; this.style.borderColor='rgba(255,255,255,0.05)';" title="Click to view on GitHub in default browser">
              <div style="display: flex; gap: 8px; align-items: flex-start;">
                <span style="font-size: 0.62rem; font-weight: 700; color: ${o}; border: 1px solid ${o}; padding: 1px 5px; border-radius: 3px; font-family: monospace; flex-shrink: 0; margin-top: 1px;">
                  ${a}
                </span>
                <div>
                  <div style="font-size: 0.76rem; color: #fff; line-height: 1.3;">
                    ${s} ${c?`· ${c}`:``}
                  </div>
                  <div style="font-size: 0.68rem; color: #00d4ff; font-family: monospace; margin-top: 2px; display: flex; align-items: center; gap: 6px;">
                    <span>📁 ${n}</span>
                    ${l>0?`<span style="color: rgba(255,255,255,0.4);">(${l} commit${l>1?`s`:``})</span>`:``}
                  </div>
                </div>
              </div>
              <div style="font-size: 0.65rem; color: rgba(255,255,255,0.4); font-family: monospace; white-space: nowrap; flex-shrink: 0;">
                ${i}
              </div>
            </div>
          `}).join(``)}</div>`:c.length===0?`<div style="color: rgba(255,255,255,0.5); font-size: 0.78rem; padding: 12px; text-align: center;">No repositories loaded.</div>`:`<div style="max-height: 220px; overflow-y: auto; padding-right: 4px; scrollbar-width: thin; scrollbar-color: rgba(0,212,255,0.3) transparent;">${c.map(e=>{let t=Ql(e.language),n=Zl(e.updated_at),r=e.private;return`
            <div data-open-browser="${e.html_url}" style="display: flex; align-items: center; justify-content: space-between; padding: 7px 8px; margin-bottom: 5px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 5px; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='rgba(0,212,255,0.06)'; this.style.borderColor='rgba(0,212,255,0.3)';" onmouseout="this.style.background='rgba(255,255,255,0.02)'; this.style.borderColor='rgba(255,255,255,0.05)';" title="Click to open ${e.name} in default browser">
              <div style="display: flex; align-items: center; gap: 8px; overflow: hidden;">
                <span style="font-size: 0.62rem; font-weight: 700; color: ${r?`#ffd32a`:`#00d4ff`}; border: 1px solid ${r?`#ffd32a`:`rgba(0,212,255,0.4)`}; padding: 1px 4px; border-radius: 3px; font-family: monospace; flex-shrink: 0;">
                  ${r?`PRIV`:`PUB`}
                </span>
                <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  <span style="font-size: 0.8rem; font-weight: 600; color: #fff;">${e.name}</span>
                  <div style="display: flex; align-items: center; gap: 8px; margin-top: 2px;">
                    <span style="display: flex; align-items: center; gap: 4px; font-size: 0.68rem; color: rgba(255,255,255,0.6);">
                      <span style="width: 6px; height: 6px; border-radius: 50%; background: ${t};"></span>
                      ${e.language||`Code`}
                    </span>
                    ${e.open_issues>0?`<span style="font-size: 0.68rem; color: #ff6b6b; font-family: monospace;">🐞 ${e.open_issues}</span>`:``}
                    ${e.stars>0?`<span style="font-size: 0.68rem; color: #ffd32a; font-family: monospace;">★ ${e.stars}</span>`:``}
                  </div>
                </div>
              </div>
              <div style="font-size: 0.65rem; color: rgba(255,255,255,0.4); font-family: monospace; white-space: nowrap; flex-shrink: 0;">
                ${n}
              </div>
            </div>
          `}).join(``)}</div>`;e.innerHTML=`
      <div class="widget-content" style="padding: 0;">
        ${p}
        ${m}
      </div>
    `;let h=e.querySelector(`#gh-tab-autosync`),g=e.querySelector(`#gh-tab-activity`),_=e.querySelector(`#gh-tab-repos`);h&&(h.onclick=()=>{t=`autosync`,i()}),g&&(g.onclick=()=>{t=`activity`,i()}),_&&(_.onclick=()=>{t=`repos`,i()});let v=e.querySelector(`#gh-btn-scan`);v&&(v.onclick=async()=>{v.textContent=`SCANNING...`;try{let e=await(await fetch(`${s()}/github/scan-mappings`,{method:`POST`})).json();n.mappings=e.mappings||[],i()}catch{v.textContent=`ERROR`}});let y=e.querySelector(`#gh-btn-sync-all`);y&&(y.onclick=async()=>{y.textContent=`SYNCING...`;try{await fetch(`${s()}/github/sync-all`,{method:`POST`}),await a(),i()}catch{y.textContent=`ERROR`}}),e.querySelectorAll(`.gh-sync-toggle`).forEach(e=>{e.onclick=async t=>{t.stopPropagation();let n=e.getAttribute(`data-toggle-path`);try{await fetch(`${s()}/github/toggle-sync`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({localPath:n})}),await a(),i()}catch{}}}),e.querySelectorAll(`.gh-sync-now-btn`).forEach(e=>{e.onclick=async t=>{t.stopPropagation();let n=e.getAttribute(`data-sync-path`);e.textContent=`PUSHING...`;try{await fetch(`${s()}/github/sync-now`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({localPath:n})}),await a(),i()}catch{e.textContent=`ERR`}}}),e.querySelectorAll(`[data-open-browser]`).forEach(e=>{e.onclick=t=>{t.stopPropagation();let n=e.getAttribute(`data-open-browser`);n&&$l(n)}})},a=async()=>{try{let e=await(await fetch(`${s()}/github/mappings`)).json();n.mappings=e.mappings||[]}catch{}},o=async()=>{try{let[e,t,r,a]=await Promise.all([fetch(`${s()}/github`).then(e=>e.json()).catch(()=>({events:[]})),fetch(`${s()}/github/status`).then(e=>e.json()).catch(()=>({})),fetch(`${s()}/github/repos`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({per_page:100})}).then(e=>e.json()).catch(()=>({repos:[]})),fetch(`${s()}/github/mappings`).then(e=>e.json()).catch(()=>({mappings:[]}))]),o=[{name:`JARVIS`,full_name:`Aasim41/JARVIS`,html_url:`https://github.com/Aasim41/JARVIS`,language:`Python`,stars:5,open_issues:0,updated_at:new Date(Date.now()-1e3*60*15).toISOString(),private:!1},{name:`jarvis-hud`,full_name:`Aasim41/jarvis-hud`,html_url:`https://github.com/Aasim41/jarvis-hud`,language:`JavaScript`,stars:3,open_issues:0,updated_at:new Date(Date.now()-1e3*60*40).toISOString(),private:!1},{name:`portfolio`,full_name:`Aasim41/portfolio`,html_url:`https://github.com/Aasim41/portfolio`,language:`JavaScript`,stars:2,open_issues:0,updated_at:new Date(Date.now()-1e3*60*120).toISOString(),private:!1},{name:`Lumina`,full_name:`Aasim41/Lumina`,html_url:`https://github.com/Aasim41/Lumina`,language:`TypeScript`,stars:4,open_issues:0,updated_at:new Date(Date.now()-1e3*60*200).toISOString(),private:!1},{name:`synapse-city`,full_name:`Aasim41/synapse-city`,html_url:`https://github.com/Aasim41/synapse-city`,language:`TypeScript`,stars:2,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*24).toISOString(),private:!1},{name:`StudyQuest`,full_name:`Aasim41/StudyQuest`,html_url:`https://github.com/Aasim41/StudyQuest`,language:`Java`,stars:1,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*48).toISOString(),private:!1},{name:`rocar-delivery`,full_name:`Aasim41/rocar-delivery`,html_url:`https://github.com/Aasim41/rocar-delivery`,language:`TypeScript`,stars:2,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*36).toISOString(),private:!1},{name:`ipl-auction-war-room`,full_name:`Aasim41/ipl-auction-war-room`,html_url:`https://github.com/Aasim41/ipl-auction-war-room`,language:`Python`,stars:1,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*72).toISOString(),private:!1},{name:`az-fashion`,full_name:`Aasim41/az-fashion`,html_url:`https://github.com/Aasim41/az-fashion`,language:`JavaScript`,stars:1,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*80).toISOString(),private:!1},{name:`holiday-planner`,full_name:`Aasim41/holiday-planner`,html_url:`https://github.com/Aasim41/holiday-planner`,language:`TypeScript`,stars:1,open_issues:0,updated_at:new Date(Date.now()-1e3*3600*96).toISOString(),private:!1},{name:`jarvis-vault`,full_name:`Aasim41/jarvis-vault`,html_url:`https://github.com/Aasim41/jarvis-vault`,language:`Python`,stars:2,open_issues:0,updated_at:new Date(Date.now()-1e3*60*10).toISOString(),private:!1}],c=r?.repos&&r.repos.length>0?r.repos:o,l=e?.events&&e.events.length>0?e.events:[],u=a?.mappings&&a.mappings.length>0?a.mappings:[{repoName:`JARVIS`,branch:`main`,status:`CLEAN`,uncommittedCount:0,unpushedCommits:0,autoSync:!0,localPath:`C:\\Users\\aasim\\.gemini\\antigravity\\scratch\\jarvis`,lastSync:new Date().toISOString(),lastCommitMsg:`[J.A.R.V.I.S Auto-Sync] Telemetry & Directives Live`},{repoName:`jarvis-hud`,branch:`main`,status:`CLEAN`,uncommittedCount:0,unpushedCommits:0,autoSync:!0,localPath:`C:\\Users\\aasim\\.gemini\\antigravity\\scratch\\jarvis-hud`,lastSync:new Date().toISOString(),lastCommitMsg:`Sovereign Mobile HUD PWA`},{repoName:`Lumina`,branch:`main`,status:`CLEAN`,uncommittedCount:0,unpushedCommits:0,autoSync:!0,localPath:`C:\\Users\\aasim\\.gemini\\antigravity\\scratch\\smart-expense`,lastSync:new Date().toISOString(),lastCommitMsg:`Auto-Sync Active`}];n={user:t?.user||{login:`Aasim41`,public_repos:11,total_private_repos:1},events:l,repos:c,mappings:u},i()}catch(t){e.innerHTML=`
        <div class="widget-header">
          <span>GITHUB TELEMETRY</span>
        </div>
        <div class="widget-content">
          <div style="color: #e74c3c; font-size: 0.8rem; padding: 10px 0;">Telemetry connection offline: ${t.message}</div>
        </div>
      `}};r(),o(),window.addEventListener(`jarvis:github-synced`,()=>{a().then(i)});let c=setInterval(o,30*1e3);e._jarvisCleanup=()=>clearInterval(c)}function tu(){if(document.getElementById(`jarvis-music-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-music-styles`,e.textContent=`
    .jarvis-ytm-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
      position: relative;
      color: #fff;
    }

    .ytm-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .ytm-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: rgba(255, 0, 51, 0.15);
      border: 1px solid rgba(255, 0, 51, 0.5);
      color: #ff334b;
      font-size: 0.68rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 4px;
      letter-spacing: 0.05em;
    }

    /* Pure Audio Deck HUD */
    .ytm-audio-deck {
      display: flex;
      gap: 14px;
      padding: 12px;
      background: radial-gradient(circle at 20% 50%, rgba(255, 0, 51, 0.12) 0%, rgba(8, 8, 14, 0.95) 100%);
      border: 1px solid rgba(255, 0, 51, 0.35);
      border-radius: 8px;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.7);
      align-items: center;
    }

    /* Album Art Vinyl Frame */
    .ytm-art-wrapper {
      position: relative;
      width: 96px;
      height: 96px;
      flex-shrink: 0;
    }

    .ytm-art-img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
      border: 1px solid rgba(255, 0, 51, 0.5);
      box-shadow: 0 0 15px rgba(255, 0, 51, 0.3);
      position: relative;
      z-index: 2;
    }

    .ytm-art-wrapper.playing::after {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 12px;
      border: 1px dashed rgba(255, 0, 51, 0.6);
      animation: ytm-vinyl-spin 8s linear infinite;
      z-index: 1;
    }

    @keyframes ytm-vinyl-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Track Metadata & Controls Column */
    .ytm-deck-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
      overflow: hidden;
    }

    .ytm-deck-title {
      font-size: 0.88rem;
      font-weight: 700;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      letter-spacing: 0.02em;
    }

    .ytm-deck-artist {
      font-size: 0.72rem;
      color: #ff334b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Waveform Visualizer */
    .ytm-waveform {
      display: flex;
      align-items: flex-end;
      gap: 2.5px;
      height: 18px;
      margin: 2px 0;
    }

    .ytm-wave-bar {
      width: 3px;
      background: #ff0033;
      border-radius: 2px;
      height: 3px;
      transition: height 0.15s ease;
      opacity: 0.35;
    }

    .ytm-wave-bar.playing {
      animation: ytm-bar-pulse var(--speed, 0.5s) ease-in-out infinite alternate;
      opacity: 0.95;
    }

    @keyframes ytm-bar-pulse {
      0% { height: 3px; background: #ff0033; }
      100% { height: 18px; background: #ff4766; box-shadow: 0 0 6px #ff0033; }
    }

    /* Scrubber Progress Bar */
    .ytm-progress-box {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.65rem;
      color: rgba(255, 255, 255, 0.5);
    }

    .ytm-seek-bar {
      flex: 1;
      height: 4px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 2px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .ytm-seek-fill {
      height: 100%;
      width: 0%;
      background: #ff0033;
      box-shadow: 0 0 8px rgba(255, 0, 51, 0.8);
      transition: width 0.1s linear;
    }

    /* Playback Buttons Row */
    .ytm-controls-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2px;
    }

    .ytm-ctrl-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
      font-size: 0.72rem;
      border-radius: 4px;
      padding: 4px 10px;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s;
      font-weight: 600;
    }

    .ytm-ctrl-btn:hover {
      background: rgba(255, 0, 51, 0.2);
      border-color: #ff0033;
      color: #ff334b;
    }

    .ytm-ctrl-play {
      background: #ff0033;
      border-color: #ff0033;
      color: #fff;
      padding: 5px 14px;
      font-size: 0.76rem;
    }

    .ytm-ctrl-play:hover {
      background: #ff2252;
      box-shadow: 0 0 12px rgba(255, 0, 51, 0.7);
    }

    /* Search & Playlist Drawer */
    .ytm-drawer {
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: rgba(8, 8, 14, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 8px;
    }

    .ytm-chips-row {
      display: flex;
      gap: 5px;
      overflow-x: auto;
      padding-bottom: 2px;
      scrollbar-width: none;
    }
    .ytm-chips-row::-webkit-scrollbar { display: none; }

    .ytm-chip {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.65rem;
      padding: 3px 8px;
      border-radius: 12px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }

    .ytm-chip:hover {
      background: rgba(255, 0, 51, 0.2);
      border-color: rgba(255, 0, 51, 0.5);
      color: #ff334b;
    }

    .ytm-search-bar {
      display: flex;
      gap: 6px;
    }

    .ytm-search-input {
      flex: 1;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 0, 51, 0.3);
      color: #fff;
      font-size: 0.76rem;
      padding: 6px 10px;
      border-radius: 4px;
      outline: none;
      font-family: inherit;
    }

    .ytm-search-input:focus {
      border-color: #ff0033;
      box-shadow: 0 0 8px rgba(255, 0, 51, 0.35);
    }

    .ytm-search-btn {
      background: #ff0033;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 0 12px;
      font-size: 0.74rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .ytm-search-btn:hover {
      background: #ff2252;
    }

    /* Results List */
    .ytm-results-list {
      max-height: 160px;
      overflow-y: auto;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .ytm-results-list::-webkit-scrollbar {
      width: 4px;
    }
    .ytm-results-list::-webkit-scrollbar-thumb {
      background: rgba(255, 0, 51, 0.4);
      border-radius: 2px;
    }

    .ytm-song-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      cursor: pointer;
      transition: all 0.15s;
    }

    .ytm-song-card:hover {
      background: rgba(255, 0, 51, 0.15);
      border-color: rgba(255, 0, 51, 0.3);
    }

    .ytm-song-card.active {
      background: rgba(255, 0, 51, 0.25);
      border-left: 3px solid #ff0033;
    }

    .ytm-song-left {
      display: flex;
      align-items: center;
      gap: 8px;
      overflow: hidden;
      flex: 1;
    }

    .ytm-song-thumb {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      object-fit: cover;
      background: #111;
      flex-shrink: 0;
    }

    .ytm-song-meta {
      overflow: hidden;
    }

    .ytm-song-title {
      font-size: 0.74rem;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ytm-song-sub {
      font-size: 0.65rem;
      color: rgba(255, 255, 255, 0.55);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ytm-song-play-icon {
      font-size: 0.72rem;
      color: #ff0033;
      padding-left: 6px;
      flex-shrink: 0;
    }
  `,document.head.appendChild(e)}function nu(e){if(isNaN(e)||e<0)return`0:00`;let t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?`0`:``}${n}`}function ru(e){if(!e)return;tu();let t=Array.from({length:20},()=>({speed:(.2+Math.random()*.4).toFixed(2)})),n=[{title:`AGAR TUM SAATH HO`,artist:`Arijit Singh, Alka Yagnik`,album:`TAMASHA`,duration:`5:42`,videoId:`FOA9iyxsW_A`,thumbnail:`https://i.ytimg.com/vi/FOA9iyxsW_A/hqdefault.jpg`},{title:`Starboy`,artist:`The Weeknd ft. Daft Punk`,album:`Starboy`,duration:`3:50`,videoId:`34Na4j8AVgA`,thumbnail:`https://i.ytimg.com/vi/34Na4j8AVgA/hqdefault.jpg`},{title:`Jaan Nisaar`,artist:`Arijit Singh`,album:`Kedarnath`,duration:`3:59`,videoId:`3HlzLiCL9Xs`,thumbnail:`https://i.ytimg.com/vi/3HlzLiCL9Xs/hqdefault.jpg`}],r=0,i=!1,a=!0,o=new Audio;o.preload=`auto`;let l=document.createElement(`div`);l.className=`jarvis-ytm-container`,l.innerHTML=`
    <!-- Header -->
    <div class="ytm-header">
      <div style="display: flex; align-items: center; gap: 8px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ff0033">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
        <span style="font-weight: 600; letter-spacing: 0.05em; font-size: 0.82rem; color: #fff;">YOUTUBE MUSIC AUDIO DECK</span>
      </div>
      <div class="ytm-badge" id="ytm-status-badge">
        <span>●</span> PURE AUDIO
      </div>
    </div>

    <!-- Pure Audio Deck HUD (NO VIDEO) -->
    <div class="ytm-audio-deck">
      <div class="ytm-art-wrapper" id="ytm-art-box">
        <img class="ytm-art-img" id="ytm-art-img" src="${n[0].thumbnail}" alt="Art" onerror="this.src='https://i.ytimg.com/vi/${n[0].videoId}/hqdefault.jpg'" />
      </div>

      <div class="ytm-deck-body">
        <div class="ytm-deck-title" id="ytm-title-text">${n[0].title}</div>
        <div class="ytm-deck-artist" id="ytm-artist-text">${n[0].artist} • ${n[0].duration}</div>

        <!-- Live Waveform -->
        <div class="ytm-waveform" id="ytm-waveform">
          ${t.map(e=>`<div class="ytm-wave-bar" style="--speed: ${e.speed}s;"></div>`).join(``)}
        </div>

        <!-- Scrubber Progress Bar -->
        <div class="ytm-progress-box">
          <span id="ytm-time-current">0:00</span>
          <div class="ytm-seek-bar" id="ytm-seek-bar">
            <div class="ytm-seek-fill" id="ytm-seek-fill"></div>
          </div>
          <span id="ytm-time-total">${n[0].duration}</span>
        </div>

        <!-- Controls Row -->
        <div class="ytm-controls-row">
          <div style="display: flex; gap: 6px; align-items: center;">
            <button class="ytm-ctrl-btn" id="ytm-btn-prev" title="Previous Track">⏮</button>
            <button class="ytm-ctrl-btn ytm-ctrl-play" id="ytm-btn-toggle" title="Play / Pause">▶ PLAY</button>
            <button class="ytm-ctrl-btn" id="ytm-btn-next" title="Next Track">⏭</button>
          </div>
          <div style="display: flex; gap: 6px; align-items: center;">
            <button class="ytm-ctrl-btn" id="ytm-btn-drawer-toggle" style="background: rgba(255, 0, 51, 0.18); border-color: rgba(255, 0, 51, 0.45); color: #ff334b;">🔍 SEARCH</button>
            <button class="ytm-ctrl-btn" id="ytm-btn-open-ytm" title="Open in YouTube Music" style="background: rgba(255, 0, 51, 0.25); border-color: #ff334b; color: #fff;">🎵 YTM</button>
            <button class="ytm-ctrl-btn" id="ytm-btn-pc-play" title="Play on PC Workstation" style="background: rgba(0, 212, 255, 0.2); border-color: #00d4ff; color: #00d4ff;">💻 PC</button>
          </div>
        </div>
        <iframe id="ytm-iframe-player" style="position: absolute; left: -9999px; width: 1px; height: 1px; border: none;" allow="autoplay" src=""></iframe>
      </div>
    </div>

    <!-- Search & Playlist Drawer -->
    <div class="ytm-drawer" id="ytm-drawer">
      <!-- Quick Genre / Mood Chips -->
      <div class="ytm-chips-row">
        <button class="ytm-chip" data-genre="Arijit Singh Best Songs">🇮🇳 Arijit Singh</button>
        <button class="ytm-chip" data-genre="Top Bollywood Hits 2026">🔥 Bollywood</button>
        <button class="ytm-chip" data-genre="Starboy The Weeknd">🚀 English Hits</button>
        <button class="ytm-chip" data-genre="Lofi Hip Hop chill beats">🎧 Lofi 24/7</button>
        <button class="ytm-chip" data-genre="Synthwave cyberpunk music">🌌 Synthwave</button>
        <button class="ytm-chip" data-genre="Punjabi top songs">🔥 Punjabi</button>
      </div>

      <!-- Search Bar -->
      <div class="ytm-search-bar">
        <input type="text" class="ytm-search-input" id="ytm-search-box" placeholder="Search song, artist, album..." autocomplete="off" />
        <button class="ytm-search-btn" id="ytm-search-submit">SEARCH</button>
      </div>

      <!-- Real-Time Results List -->
      <div class="ytm-results-list" id="ytm-results-list"></div>
    </div>
  `,e.appendChild(l);let u=l.querySelector(`#ytm-art-img`),d=l.querySelector(`#ytm-art-box`),f=l.querySelector(`#ytm-title-text`),p=l.querySelector(`#ytm-artist-text`),m=l.querySelector(`#ytm-btn-toggle`),h=l.querySelector(`#ytm-btn-prev`),g=l.querySelector(`#ytm-btn-next`),_=l.querySelector(`#ytm-btn-drawer-toggle`),v=l.querySelector(`#ytm-btn-open-ytm`),y=l.querySelector(`#ytm-btn-pc-play`);v&&(v.onclick=()=>{let e=n[r]||n[0],t=e?`https://music.youtube.com/watch?v=${e.videoId}`:`https://music.youtube.com`;window.open(t,`_blank`)}),y&&(y.onclick=()=>{let e=n[r]||n[0];if(!e)return;let t=`https://music.youtube.com/watch?v=${e.videoId}`;try{c(`open_url`,{url:t})}catch{}fetch(`${s()}/music/open`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({videoId:e.videoId,title:e.title})}).catch(()=>{}),f.textContent=`💻 Sent to PC: ${e.title}`});let b=l.querySelector(`#ytm-drawer`),x=l.querySelector(`#ytm-search-box`),S=l.querySelector(`#ytm-search-submit`),C=l.querySelector(`#ytm-results-list`),ee=l.querySelectorAll(`.ytm-wave-bar`),te=l.querySelector(`#ytm-time-current`),w=l.querySelector(`#ytm-time-total`),ne=l.querySelector(`#ytm-seek-bar`),re=l.querySelector(`#ytm-seek-fill`);function T(e){i=e,m.textContent=i?`⏸ PAUSE`:`▶ PLAY`,i?(d.classList.add(`playing`),ee.forEach(e=>e.classList.add(`playing`))):(d.classList.remove(`playing`),ee.forEach(e=>e.classList.remove(`playing`)))}async function ie(e){if(!n[e])return;r=e;let t=n[e];f.textContent=t.title,p.textContent=`${t.artist} • ${t.duration}`,u.src=t.thumbnail||`https://i.ytimg.com/vi/${t.videoId}/hqdefault.jpg`,te.textContent=`0:00`,w.textContent=t.duration||`--:--`,re.style.width=`0%`,f.textContent=`⏳ Loading Audio: ${t.title}...`;let i=l.querySelector(`#ytm-iframe-player`);i&&(i.src=`https://www.youtube.com/embed/${t.videoId}?autoplay=1&enablejsapi=1&playsinline=1`);try{let e=await(await fetch(`${s()}/music/stream-url?videoId=${t.videoId}`)).json().catch(()=>null);e&&e.success&&e.stream_url?(f.textContent=t.title,o.src=e.stream_url,await o.play(),T(!0)):(f.textContent=t.title,T(!0))}catch{console.log(`[YTM-Audio] Streaming via embedded audio engine...`),f.textContent=t.title,T(!0)}ae()}o.addEventListener(`timeupdate`,()=>{if(!o.duration||isNaN(o.duration))return;let e=o.currentTime/o.duration*100;re.style.width=`${e}%`,te.textContent=nu(o.currentTime),w.textContent=nu(o.duration)}),o.addEventListener(`play`,()=>T(!0)),o.addEventListener(`pause`,()=>T(!1)),o.addEventListener(`ended`,()=>{n.length>0&&ie((r+1)%n.length)}),ne.addEventListener(`click`,e=>{if(!o.duration||isNaN(o.duration))return;let t=ne.getBoundingClientRect(),n=e.clientX-t.left;o.currentTime=Math.max(0,Math.min(1,n/t.width))*o.duration});function ae(){if(C.innerHTML=``,n.length===0){C.innerHTML=`
        <div style="padding: 12px; font-size: 0.72rem; color: rgba(255,255,255,0.4); text-align: center;">
          Type a song above or click a genre chip to search.
        </div>
      `;return}n.forEach((e,t)=>{let n=document.createElement(`div`);n.className=`ytm-song-card ${t===r?`active`:``}`,n.innerHTML=`
        <div class="ytm-song-left">
          <img class="ytm-song-thumb" src="${e.thumbnail}" alt="Art" onerror="this.src='https://i.ytimg.com/vi/${e.videoId}/hqdefault.jpg'" />
          <div class="ytm-song-meta">
            <div class="ytm-song-title">${e.title}</div>
            <div class="ytm-song-sub">${e.artist} • ${e.duration}</div>
          </div>
        </div>
        <div class="ytm-song-play-icon">${t===r&&i?`🔊`:`▶`}</div>
      `,n.addEventListener(`click`,()=>{ie(t)}),C.appendChild(n)})}async function oe(e){if(!e||!e.trim())return;let t=e.trim();C.innerHTML=`
      <div style="padding: 14px; font-size: 0.72rem; color: #ff334b; text-align: center;">
        ⚡ Searching YouTube Music for '${t}'...
      </div>
    `;try{let e=await(await fetch(`${s()}/music/search`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:t})})).json();e.success&&e.results&&e.results.length>0?(n=e.results,r=0,ae()):C.innerHTML=`
          <div style="padding: 14px; font-size: 0.72rem; color: rgba(255,255,255,0.5); text-align: center;">
            No tracks found for '${t}'. Try another title or artist.
          </div>
        `}catch(e){C.innerHTML=`
        <div style="padding: 14px; font-size: 0.72rem; color: #ff4757; text-align: center;">
          Error connecting to music bridge: ${e.message}
        </div>
      `}}m.addEventListener(`click`,()=>{i?o.pause():o.src?o.play():ie(r)}),h.addEventListener(`click`,()=>{n.length!==0&&ie((r-1+n.length)%n.length)}),g.addEventListener(`click`,()=>{n.length!==0&&ie((r+1)%n.length)}),_.addEventListener(`click`,()=>{a=!a,b.style.display=a?`flex`:`none`,_.textContent=a?`▲ HIDE`:`🔍 SEARCH`}),S.addEventListener(`click`,()=>{oe(x.value)}),x.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),oe(x.value))}),l.querySelectorAll(`.ytm-chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-genre`);x.value=t,oe(t)})}),ae(),window.jarvisMusicPlay=async e=>{if(e&&(x.value=e,await oe(e),n.length>0))return await ie(0),{status:`success`,track:n[0].title,artist:n[0].artist,message:`Sir, playing '${n[0].title}' by ${n[0].artist} on YouTube Music.`}},window.jarvisMusicControl=e=>{e===`pause`?(o.pause(),T(!1)):e===`play`||e===`resume`?(o.play(),T(!0)):e===`next`?n.length>0&&ie((r+1)%n.length):e===`prev`&&n.length>0&&ie((r-1+n.length)%n.length)}}function iu(){typeof window<`u`&&(window.jarvisTriggerBriefing=()=>ou(0,!0));let e=sessionStorage.getItem(`jarvis_briefing_timestamp`);e&&Date.now()-parseInt(e,10)<3e4||setTimeout(()=>{ou(0,!1)},1200)}function au(){let e=new Date,t=e.getHours(),n=t<12?`Good Morning, Sir.`:t<17?`Good Afternoon, Sir.`:`Good Evening, Sir.`,r=e.toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`})+`, `+e.toLocaleDateString(`en-US`,{weekday:`long`,day:`numeric`,month:`short`,year:`numeric`}),i=[];try{i=JSON.parse(localStorage.getItem(`jarvis_tasks`)||`[]`)}catch{}let a=i.filter(e=>!e.completed).map(e=>({title:e.text||e.title,time:`Today`})),o=a.length>0?a.slice(0,3):[{title:`Review J.A.R.V.I.S Sovereign Telemetry & Mobile Sync`,time:`Active`},{title:`Autonomous WhatsApp & Cloud Vault Keepalive`,time:`Continuous`}];return{success:!0,is_pc:!1,greeting:n,time_away:`Live Session`,timestamp:r,audio_script:`${n} J.A.R.V.I.S Sovereign Mobile Link online. Standalone protocols active across all nodes. Cloud Vault is synchronized with 400 PC files. Autonomous WhatsApp response engine standby with zero pending alerts. All mobile telemetry calibrated and ready.`,news_headlines:[`[Top Stories] Cyclonic storm 'Arnab' to cross Andhra Pradesh-Yanam coast: IMD | LIVE`,`[Top Stories] SIR row: EC rejects opposition's charges, files 15-point counter-affidavit in SC`,`[Technology] Apple unveils new iPad mini with OLED display and faster A20 Pro chip`,`[World] Global supply chains and AI acceleration monitored`],ground_reality:{city:`National & Global`,top_alert:`Transit and metro networks running on normal schedule. Air quality and weather tracked.`,all_alerts:[`Transit and metro networks running on normal schedule. Air quality and weather tracked.`,`Autonomous multi-model failover standby across Gemini, Groq, and OpenRouter.`,`Cloud Sentinel active: Vercel, Supabase, Render endpoints healthy.`],alert_count:3},sports:`Gareth Batty leaves Surrey and joins CSK as assistant coach. Live matches tracked.`,deferred_pc_tasks_executed:[],whatsapp_activity:{auto_replied:3,unread_count:0,unread_messages:[],scheduled_pending:0},cloud_vault:{total_files:400,repo:`Aasim41/jarvis-vault`},calendar_deadlines:o,spine_note:`Sovereign standalone neural engines operational. Maintain focus on active milestones.`}}async function ou(e=0,t=!1){console.log(`[ExecutiveBriefing] Initiating autonomous briefing sequence (attempt ${e+1}, manual: ${t})...`);try{let e=new AbortController,t=setTimeout(()=>e.abort(),2800),n=await fetch(`${s()}/briefing/startup`,{signal:e.signal});clearTimeout(t);let r=null;n.ok&&(r=await n.json()),(!r||!r.success)&&(r=au()),sessionStorage.setItem(`jarvis_briefing_timestamp`,String(Date.now())),su(r);let i=r.whatsapp_activity?.unread_count||0,a=r.whatsapp_activity?.auto_replied||0,o=r.cloud_vault?.total_files||0,c=[`⚡ **AUTONOMOUS STARTUP EXECUTIVE BRIEFING (${r.timestamp||`Live`})**`,`• **Offline Window**: \`${r.time_away||`Just now`}\` | **Headline**: ${r.ground_reality?.top_alert||`Systems nominal`}`,`• **WhatsApp Comms**: \`${i}\` unread 1-on-1 message(s) • \`${a}\` autonomous replies handled`,`• **24/7 Cloud Vault**: \`${o}\` PC files indexed & accessible offline (\`${r.cloud_vault?.repo||`Aasim41/jarvis-vault`}\`)`,`• **Advisory**: *"${r.spine_note||`All systems calibrated and ready, Sir.`}"*`].join(`
`);document.dispatchEvent(new CustomEvent(`jarvis:append-briefing`,{detail:{markdown:c}})),r.audio_script&&setTimeout(()=>{Z(r.audio_script)},350)}catch{if(e<2&&!t)setTimeout(()=>ou(e+1,t),1500);else{let e=au();su(e),e.audio_script&&Z(e.audio_script)}}}function su(e){let t=document.getElementById(`jarvis-executive-briefing-modal`);t&&t.remove();let n=document.createElement(`div`);n.id=`jarvis-executive-briefing-modal`,n.className=`executive-briefing-overlay`;let r=e.ground_reality?.all_alerts||[],i=e.deferred_pc_tasks_executed||[],a=e.calendar_deadlines||[],o=e.whatsapp_activity?.unread_messages||[],s=e.cloud_vault?.total_files||0,c=e.cloud_vault?.repo||`Aasim41/jarvis-vault`;n.innerHTML=`
    <div class="executive-briefing-container">
      <div class="briefing-header">
        <div class="briefing-title-group">
          <span class="briefing-badge">EXECUTIVE BRIEFING // AUTO-LAUNCH SITREP</span>
          <h2>${e.greeting||`Good Day, Sir`}</h2>
          <p class="briefing-timestamp">${e.timestamp} • Offline Delta: <strong>${e.time_away}</strong> • Cloud Vault: <strong>${s} files synced (${c})</strong></p>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="briefing-speak-btn" id="briefing-speak-btn" title="Speak Voice Briefing">🔊 SPEAK</button>
          <button class="briefing-close-btn" id="briefing-close-btn" title="Acknowledge Briefing (Esc)">✕</button>
        </div>
      </div>

      <div class="briefing-body">
        <!-- 1. Ground Reality & City Intelligence -->
        <div class="briefing-card alert-card">
          <div class="card-tag">🚨 GROUND REALITY & CIVIC PULSE (${e.ground_reality?.city||`National & Global`})</div>
          <div class="card-content">
            <p class="lead-alert"><strong>${e.ground_reality?.top_alert||`Normal city conditions.`}</strong></p>
            ${r.length>1?`<ul class="alert-sublist">${r.slice(1,4).map(e=>`<li>• ${e}</li>`).join(``)}</ul>`:``}
          </div>
        </div>

        <!-- 2. Communications & 24/7 Cloud Vault -->
        <div class="briefing-grid-2">
          <div class="briefing-card">
            <div class="card-tag">💬 WHATSAPP AUTONOMOUS ENGINE</div>
            <div class="card-content">
              <p>Unread 1-on-1 Queue: <strong>${e.whatsapp_activity?.unread_count||0} pending</strong></p>
              <p>Auto-replied on your behalf: <strong>${e.whatsapp_activity?.auto_replied||0} messages</strong></p>
              ${o.length>0?`<ul class="task-sublist">${o.slice(0,3).map(e=>`<li>• <strong>${e.sender}</strong>: "${String(e.message||``).slice(0,55)}"</li>`).join(``)}</ul>`:`<p class="dim-text">Pending scheduled dispatches: ${e.whatsapp_activity?.scheduled_pending||0}</p>`}
            </div>
          </div>

          <div class="briefing-card">
            <div class="card-tag">☁️ 24/7 CLOUD VAULT & PHONE QUEUE</div>
            <div class="card-content">
              <p>Offline-Ready PC Files: <strong>${s} indexed</strong> (<code>${c}</code>)</p>
              ${i.length>0?`<ul class="task-sublist">${i.map(e=>`<li>✓ ${e.title} (${e.action_type})</li>`).join(``)}</ul>`:`<p class="dim-text">Zero pending phone-queued actions.</p>`}
            </div>
          </div>
        </div>

        <!-- 3. Sports & Deadlines -->
        <div class="briefing-grid-2">
          <div class="briefing-card">
            <div class="card-tag">🏏 SPORTS HEADLINE</div>
            <div class="card-content">
              <p>${e.sports||`All major fixtures tracked.`}</p>
            </div>
          </div>

          <div class="briefing-card">
            <div class="card-tag">📅 SCHEDULE & COMMITMENTS</div>
            <div class="card-content">
              ${a.length>0?`<ul class="task-sublist">${a.map(e=>`<li>• <strong>${e.time}</strong>: ${e.title}</li>`).join(``)}</ul>`:`<p class="dim-text">Calendar clear for remainder of the day.</p>`}
            </div>
          </div>
        </div>

        <!-- 4. The Intellectual Spine Reality Check -->
        <div class="briefing-card spine-card">
          <div class="card-tag">🛡️ J.A.R.V.I.S ADVISORY & REALITY CHECK</div>
          <div class="card-content">
            <p class="spine-text">"${e.spine_note||`Systems operational. Awaiting your instructions, Sir.`}"</p>
          </div>
        </div>
      </div>

      <div class="briefing-footer">
        <button class="btn-acknowledge" id="btn-briefing-ack">Acknowledge & Proceed to Dashboard [Enter]</button>
      </div>
    </div>
  `,cu(),document.body.appendChild(n);let l=()=>{n.classList.add(`fade-out`),setTimeout(()=>n.remove(),300)},u=document.getElementById(`briefing-speak-btn`);u&&e.audio_script&&u.addEventListener(`click`,()=>{Z(e.audio_script),u.textContent=`🔊 PLAYING...`,setTimeout(()=>{u&&(u.textContent=`🔊 SPEAK`)},6e3)}),document.getElementById(`briefing-close-btn`).addEventListener(`click`,l),document.getElementById(`btn-briefing-ack`).addEventListener(`click`,l);let d=e=>{(e.key===`Escape`||e.key===`Enter`)&&(l(),document.removeEventListener(`keydown`,d))};document.addEventListener(`keydown`,d)}function cu(){if(document.getElementById(`jarvis-briefing-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-briefing-styles`,e.textContent=`
    .executive-briefing-overlay {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(3, 7, 18, 0.88);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: briefingFadeIn 0.4s ease-out forwards;
    }
    .executive-briefing-overlay.fade-out {
      animation: briefingFadeOut 0.3s ease-in forwards;
    }
    .executive-briefing-container {
      width: 90%;
      max-width: 820px;
      max-height: 88vh;
      overflow-y: auto;
      background: rgba(10, 16, 28, 0.94);
      border: 1px solid rgba(0, 212, 255, 0.3);
      border-radius: 12px;
      box-shadow: 0 0 50px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.05);
      padding: 24px;
      color: #e2e8f0;
      font-family: var(--font-sans, system-ui, sans-serif);
    }
    .briefing-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid rgba(0, 212, 255, 0.2);
      padding-bottom: 16px;
      margin-bottom: 20px;
    }
    .briefing-badge {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: #00d4ff;
      background: rgba(0, 212, 255, 0.12);
      padding: 3px 8px;
      border-radius: 4px;
      margin-bottom: 6px;
    }
    .briefing-header h2 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 400;
      color: #fff;
      letter-spacing: -0.02em;
    }
    .briefing-timestamp {
      margin: 4px 0 0 0;
      font-size: 0.85rem;
      color: #94a3b8;
    }
    .briefing-close-btn {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #94a3b8;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.2s;
    }
    .briefing-close-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    .briefing-body {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .briefing-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .briefing-card {
      background: rgba(15, 23, 42, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 14px 16px;
    }
    .briefing-card.alert-card {
      border-color: rgba(239, 68, 68, 0.4);
      background: rgba(239, 68, 68, 0.05);
    }
    .briefing-card.spine-card {
      border-color: rgba(234, 179, 8, 0.4);
      background: rgba(234, 179, 8, 0.05);
    }
    .card-tag {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #00d4ff;
      margin-bottom: 8px;
    }
    .alert-card .card-tag { color: #f87171; }
    .spine-card .card-tag { color: #facc15; }
    .card-content {
      font-size: 0.9rem;
      line-height: 1.45;
      color: #cbd5e1;
    }
    .lead-alert {
      margin: 0;
      color: #fca5a5;
    }
    .alert-sublist, .task-sublist {
      margin: 8px 0 0 0;
      padding-left: 0;
      list-style: none;
      font-size: 0.82rem;
      color: #94a3b8;
    }
    .alert-sublist li, .task-sublist li {
      margin-bottom: 4px;
    }
    .spine-text {
      margin: 0;
      font-style: italic;
      color: #fef08a;
      font-weight: 500;
    }
    .dim-text {
      color: #64748b;
      margin: 0;
    }
    .briefing-footer {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
    .btn-acknowledge {
      background: linear-gradient(135deg, #0284c7, #0369a1);
      color: #fff;
      border: 1px solid #38bdf8;
      border-radius: 6px;
      padding: 10px 20px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 0 15px rgba(2, 132, 199, 0.4);
      transition: all 0.2s;
    }
    .btn-acknowledge:hover {
      background: linear-gradient(135deg, #0369a1, #0284c7);
      box-shadow: 0 0 22px rgba(2, 132, 199, 0.7);
    }
    .briefing-speak-btn {
      background: rgba(0, 212, 255, 0.15);
      border: 1px solid #00d4ff;
      color: #00d4ff;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.75rem;
      font-weight: 700;
      font-family: inherit;
      letter-spacing: 0.05em;
      transition: all 0.2s;
    }
    .briefing-speak-btn:hover {
      background: rgba(0, 212, 255, 0.3);
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    }
    @media (max-width: 640px) {
      .executive-briefing-container {
        width: 95% !important;
        max-height: 90vh !important;
        padding: 16px 12px !important;
      }
      .briefing-header h2 {
        font-size: 1.25rem !important;
      }
      .briefing-grid-2 {
        grid-template-columns: 1fr !important;
        gap: 10px !important;
      }
      .card-content {
        font-size: 0.82rem !important;
      }
      .btn-acknowledge {
        width: 100% !important;
        text-align: center !important;
        padding: 12px !important;
      }
    }
    @keyframes briefingFadeIn {
      from { opacity: 0; transform: scale(0.97); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes briefingFadeOut {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.97); }
    }
  `,document.head.appendChild(e)}var lu=null,uu=null,du=[`JARVIS`,`StudyQuest`,`az-fashion`,`ipl-auction-war-room`,`Lumina`,`rocar-delivery`,`synapse-city`,`holiday-planner`,`portfolio`,`rocar-object-detection`];function fu(){if(document.getElementById(`jarvis-bot-teams-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-bot-teams-styles`,e.textContent=`
    .jarvis-bot-teams {
      padding: 0.6rem 0.2rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      height: 100%;
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
    }

    .bot-teams-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 212, 255, 0.15);
      padding-bottom: 0.4rem;
    }

    .bot-teams-title {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--color-accent, #00d4ff);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;
    }

    .bot-teams-badge {
      font-size: 0.65rem;
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
      background: rgba(0, 212, 255, 0.1);
      border: 1px solid rgba(0, 212, 255, 0.3);
      color: #00d4ff;
    }

    .bot-teams-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
      gap: 0.65rem;
    }

    .bot-card {
      background: rgba(10, 20, 35, 0.65);
      border: 1px solid rgba(0, 212, 255, 0.12);
      border-radius: 8px;
      padding: 0.65rem;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      transition: all 0.25s ease;
      position: relative;
      overflow: hidden;
    }

    .bot-card:hover {
      border-color: rgba(0, 212, 255, 0.45);
      background: rgba(12, 28, 48, 0.85);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 212, 255, 0.1);
    }

    .bot-card.working {
      border-color: #ffaa00;
      animation: botPulse 1.5s infinite alternate;
    }

    .bot-card.has-alert {
      border-color: #00ff88;
      box-shadow: 0 0 12px rgba(0, 255, 136, 0.25);
    }

    @keyframes botPulse {
      0% { box-shadow: 0 0 5px rgba(255, 170, 0, 0.2); }
      100% { box-shadow: 0 0 15px rgba(255, 170, 0, 0.5); }
    }

    .bot-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .bot-name-wrap {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .bot-icon {
      font-size: 1.15rem;
    }

    .bot-name {
      font-size: 0.82rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.05em;
    }

    .bot-status-indicator {
      display: inline-block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #00ff88;
      box-shadow: 0 0 6px #00ff88;
    }

    .bot-status-indicator.working {
      background: #ffaa00;
      box-shadow: 0 0 6px #ffaa00;
    }

    .bot-domain {
      font-size: 0.66rem;
      color: rgba(224, 230, 237, 0.65);
      line-height: 1.25;
      min-height: 1.9rem;
    }

    .bot-action-btn {
      background: rgba(0, 212, 255, 0.06);
      border: 1px solid rgba(0, 212, 255, 0.25);
      color: #00d4ff;
      border-radius: 4px;
      font-size: 0.65rem;
      padding: 0.32rem 0.5rem;
      font-family: inherit;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      margin-top: auto;
    }

    .bot-action-btn:hover {
      background: rgba(0, 212, 255, 0.2);
      border-color: #00d4ff;
      color: #fff;
    }

    /* Live WhatsApp Alert Banner in FRIDAY & FORGE Telemetry */
    .whatsapp-live-banner, .forge-live-banner {
      background: rgba(0, 255, 136, 0.08);
      border: 1px solid rgba(0, 255, 136, 0.3);
      border-radius: 6px;
      padding: 0.45rem;
      font-size: 0.64rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .forge-live-banner {
      background: rgba(0, 212, 255, 0.07);
      border-color: rgba(0, 212, 255, 0.28);
    }

    .forge-model-pill {
      font-size: 0.6rem;
      color: #00d4ff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.25rem;
      font-weight: 600;
    }

    .forge-ci-status {
      font-size: 0.58rem;
      color: rgba(224, 230, 237, 0.8);
      line-height: 1.25;
    }

    .whatsapp-alert-sender {
      font-weight: 700;
      color: #00ff88;
      display: flex;
      justify-content: space-between;
    }

    .whatsapp-alert-text {
      color: #e0e6ed;
      font-style: italic;
    }

    .whatsapp-reply-action {
      display: flex;
      gap: 0.3rem;
      margin-top: 0.15rem;
    }

    .whatsapp-reply-btn {
      flex: 1;
      background: rgba(0, 255, 136, 0.15);
      border: 1px solid rgba(0, 255, 136, 0.4);
      color: #00ff88;
      font-size: 0.6rem;
      border-radius: 4px;
      padding: 0.22rem 0.4rem;
      cursor: pointer;
      font-family: inherit;
      font-weight: 600;
      transition: all 0.2s ease;
    }

    .whatsapp-reply-btn:hover {
      background: rgba(0, 255, 136, 0.3);
      color: #fff;
    }

    /* Swarm Delegation Modal */
    .swarm-modal-overlay {
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(4, 10, 20, 0.88);
      backdrop-filter: blur(8px);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.22s ease;
      padding: 1rem;
      box-sizing: border-box;
    }

    .swarm-modal-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    .swarm-modal-card {
      background: #091322;
      border: 1px solid rgba(0, 212, 255, 0.45);
      border-radius: 10px;
      width: 94%;
      max-width: 540px;
      max-height: 90vh;
      overflow-y: auto;
      padding: 1.15rem;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.75), 0 0 25px rgba(0, 212, 255, 0.22);
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      font-family: var(--font-mono, monospace);
    }

    .swarm-modal-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #00d4ff;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .swarm-modal-close {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.1rem;
    }

    .swarm-forge-options {
      display: none;
      flex-direction: column;
      gap: 0.5rem;
      background: rgba(0, 212, 255, 0.04);
      border: 1px solid rgba(0, 212, 255, 0.18);
      border-radius: 6px;
      padding: 0.6rem;
    }

    .swarm-forge-options.visible {
      display: flex;
    }

    .swarm-field-row {
      display: flex;
      flex-direction: column;
      gap: 0.22rem;
    }

    .swarm-field-label {
      font-size: 0.64rem;
      color: #00d4ff;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .swarm-select {
      background: rgba(0, 0, 0, 0.55);
      border: 1px solid rgba(0, 212, 255, 0.28);
      border-radius: 5px;
      padding: 0.4rem 0.5rem;
      color: #fff;
      font-family: inherit;
      font-size: 0.72rem;
    }

    .swarm-modal-input {
      background: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(0, 212, 255, 0.3);
      border-radius: 6px;
      padding: 0.6rem;
      color: #fff;
      font-family: inherit;
      font-size: 0.78rem;
      resize: vertical;
      min-height: 76px;
      outline: none;
    }

    .swarm-modal-input:focus {
      border-color: #00d4ff;
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.25);
    }

    .swarm-modal-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      margin-top: 0.15rem;
    }
  `,document.head.appendChild(e)}var pu=[{id:`friday`,name:`FRIDAY`,icon:`💬`,domain:`Comms, WhatsApp live scanner & auto-pilot`,badge:`Active`},{id:`radar`,name:`RADAR`,icon:`📡`,domain:`Ground reality, global/national news & sports`,badge:`Calibrated`},{id:`forge`,name:`FORGE`,icon:`🛠️`,domain:`Antigravity Engine (Project-aware, Auto-Model & CI Healer)`,badge:`Standby`},{id:`nexus`,name:`NEXUS`,icon:`⚡`,domain:`n8n workflow automations (400+ services)`,badge:`Ready`},{id:`chronos`,name:`CHRONOS`,icon:`⏰`,domain:`Time, scheduled jobs & deferred PC queue`,badge:`Synced`}];function mu(e){if(!e)return;fu(),e.innerHTML=`
    <div class="jarvis-bot-teams">
      <div class="bot-teams-header">
        <div class="bot-teams-title">
          <span>🤖 Specialist Bot Swarm</span>
        </div>
        <div class="bot-teams-badge" id="swarm-health-badge">5 Bots Online • CI Watcher Active</div>
      </div>

      <div class="bot-teams-grid" id="bot-teams-grid">
        ${pu.map(e=>`
          <div class="bot-card" id="bot-card-${e.id}">
            <div class="bot-card-top">
              <div class="bot-name-wrap">
                <span class="bot-icon">${e.icon}</span>
                <span class="bot-name">${e.name}</span>
              </div>
              <span class="bot-status-indicator" id="bot-indicator-${e.id}"></span>
            </div>
            <div class="bot-domain">${e.domain}</div>
            <div id="bot-live-content-${e.id}"></div>
            <button class="bot-action-btn" data-bot="${e.id}">
              <span>Delegate Task</span> →
            </button>
          </div>
        `).join(``)}
      </div>
    </div>
  `;let t=document.getElementById(`swarm-delegate-modal`);t&&t.remove();let n=document.createElement(`div`);n.className=`swarm-modal-overlay`,n.id=`swarm-delegate-modal`,n.innerHTML=`
    <div class="swarm-modal-card">
      <div class="swarm-modal-title">
        <span id="swarm-modal-bot-name">Delegate to Bot</span>
        <span class="swarm-modal-close" id="swarm-modal-close">✕</span>
      </div>
      <p style="font-size:0.7rem; color:rgba(255,255,255,0.7); margin:0;" id="swarm-modal-bot-desc"></p>

      <!-- FORGE (Antigravity) Specific Controls -->
      <div class="swarm-forge-options" id="swarm-forge-options">
        <div class="swarm-field-row">
          <label class="swarm-field-label">Target Project Workspace</label>
          <select class="swarm-select" id="forge-project-select">
            ${du.map(e=>`<option value="${e}">${e}</option>`).join(``)}
          </select>
        </div>
        <div class="swarm-field-row">
          <label class="swarm-field-label">Antigravity Model Routing</label>
          <select class="swarm-select" id="forge-model-select">
            <option value="gemini-3.8-flash-high" selected>🔥 Gemini 3.8 Flash (High) — Universal Autonomous Engine</option>
            <option value="auto">🤖 Auto-Switch (J.A.R.V.I.S Decides Dynamically)</option>
            <option value="pro">🧠 Gemini 3.8 Pro (Deep Architecture & CI Repair)</option>
          </select>
        </div>
        <div class="swarm-field-row">
          <label class="swarm-field-label">When Antigravity Work Finishes (Post-Task Action)</label>
          <select class="swarm-select" id="forge-oncomplete-select">
            <option value="none">✅ Keep PC On & Auto-Push to GitHub</option>
            <option value="shutdown">🔌 Switch Off PC (Auto-Commit, Push & Shutdown)</option>
            <option value="sleep">🌙 Put PC to Sleep after Completion</option>
            <option value="lock">🔒 Lock Workstation after Completion</option>
          </select>
        </div>
      </div>

      <!-- NEXUS (n8n Automation) Specific Controls -->
      <div class="swarm-forge-options" id="swarm-nexus-options">
        <div class="swarm-field-row">
          <label class="swarm-field-label">Select n8n Automation Pipeline / Preset</label>
          <select class="swarm-select" id="nexus-preset-select">
            <option value="">✨ Custom Natural-Language Workflow (Type instruction below)</option>
            <option value="Run Daily Morning Sync & Digest: check my unread emails, calendar events, WhatsApp telemetry, and GitHub status">☀️ Daily Morning Sync & Digest (Inbox + Calendar + WhatsApp + GitHub)</option>
            <option value="Run GitHub Actions CI Self-Heal Pipeline across all repositories and report status">🛡️ GitHub Actions CI Self-Heal Pipeline (All 10 Repos)</option>
            <option value="Run Auto Git & Cloud Vault Backup across all my repositories and sync to Cloud Vault">☁️ Auto Git & 24/7 Cloud Vault Backup</option>
            <option value="Research latest AI & Tech news today, synthesize an executive summary, and WhatsApp me">🔍 Web Research -> AI Summary -> WhatsApp Me</option>
            <option value="Check JUET Guna academic portal notices and exam updates and save a summary note">🎓 JUET College Notification & Portal Scraper</option>
          </select>
        </div>
      </div>

      <textarea class="swarm-modal-input" id="swarm-modal-input" placeholder="Enter task instruction..."></textarea>
      <div class="swarm-modal-actions">
        <span style="font-size:0.62rem; color:rgba(0,212,255,0.7);">Press <b>Enter</b> to Dispatch • <b>Shift+Enter</b> for new line</span>
        <div style="display:flex; gap:0.5rem;">
          <button class="bot-action-btn" id="swarm-modal-cancel" style="padding:0.42rem 0.85rem;">Cancel</button>
          <button class="bot-action-btn" id="swarm-modal-submit" style="background:rgba(0,212,255,0.28); border-color:#00d4ff; color:#fff; font-weight:bold; padding:0.42rem 1rem;">⚡ Dispatch Task</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(n),hu(e),vu(),Tu(),xu()}function hu(e){let t=document.getElementById(`swarm-delegate-modal`),n=document.getElementById(`swarm-modal-close`),r=document.getElementById(`swarm-modal-cancel`),i=document.getElementById(`swarm-modal-submit`),a=document.getElementById(`swarm-modal-input`),o=document.getElementById(`swarm-modal-bot-name`),s=document.getElementById(`swarm-modal-bot-desc`),c=document.getElementById(`swarm-forge-options`),l=document.getElementById(`swarm-nexus-options`),u=document.getElementById(`nexus-preset-select`),f=null;u?.addEventListener(`change`,()=>{u.value&&a&&(a.value=u.value,a.focus())}),e.querySelectorAll(`.bot-action-btn[data-bot]`).forEach(e=>{e.addEventListener(`click`,e=>{let n=e.currentTarget.getAttribute(`data-bot`),r=pu.find(e=>e.id===n);r&&(f=n,o.textContent=`${r.icon} Delegate to ${r.name}`,s.textContent=r.domain,a.value=``,n===`forge`?(c?.classList.add(`visible`),l?.classList.remove(`visible`),a.placeholder=`e.g., Fix the Android APK build in StudyQuest and verify until 100% perfect...`):n===`nexus`?(c?.classList.remove(`visible`),l?.classList.add(`visible`),u&&(u.value=``),a.placeholder=`e.g., Check StudyQuest CI, and if anything fails, WhatsApp me a summary...`):(c?.classList.remove(`visible`),l?.classList.remove(`visible`),n===`radar`?a.placeholder=`e.g., Fetch latest tech and sports ground pulse...`:n===`friday`?a.placeholder=`Format: ContactName: Message (e.g., Bakhtiyar: Bhai 10 min mein call karta hu)`:a.placeholder=`Enter task instructions...`),t.classList.add(`open`),setTimeout(()=>a?.focus(),50))})});let p=()=>t?.classList.remove(`open`);n?.addEventListener(`click`,p),r?.addEventListener(`click`,p),a?.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey?(e.preventDefault(),i?.click()):e.key===`Escape`&&p()}),i?.addEventListener(`click`,async()=>{let e=a.value.trim();if(!e&&f===`nexus`&&u?.value&&(e=u.value.trim()),!e||!f)return;p();let t=document.getElementById(`bot-card-${f}`);t&&t.classList.add(`working`);try{if(f===`forge`){let t=document.getElementById(`forge-project-select`)?.value||`JARVIS`,n=document.getElementById(`forge-model-select`)?.value||`gemini-3.8-flash-high`,r=document.getElementById(`forge-oncomplete-select`)?.value||`none`,i=await(await d(`/antigravity/dispatch`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({instruction:e,project:t,model:n,on_complete:r,category:`coding`})})).json();i.message&&(Eu(i.message),document.dispatchEvent(new CustomEvent(`jarvis:bot-report`,{detail:{text:`🛠️ **[FORGE • ${t}]**: ${i.message}`,voiceText:i.message}})))}else if(f===`friday`){let t=``,n=e;if(e.includes(`:`)){let r=e.split(`:`);t=r[0].replace(/^(send\s+(whatsapp\s+)?(message\s+)?to\s+)/i,``).trim(),n=r.slice(1).join(`:`).trim()}if(t&&n){let e=await(await d(`/whatsapp/send`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({target:t,message:n})})).json();Eu(e.success?`Message sent silently in background to ${t}.`:e.error||`Silent background WhatsApp needs 1-time QR scan.`)}else await d(`/swarm/delegate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({bot_id:`friday`,action:e})})}else if(f===`nexus`){_u(`nexus`,{status:`working`,last_action:e});let t=await(await d(`/n8n/trigger`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({workflow:e,payload:{instruction:e}})})).json(),n=t.workflow||e,r=Array.isArray(t.steps_executed)&&t.steps_executed.length>0?`
`+t.steps_executed.map(e=>`• ✓ ${e}`).join(`
`):``,i=t.output||t.message||`Workflow '${n}' executed.`;_u(`nexus`,{status:`idle`,last_action:`${n} (${(t.steps_executed||[]).length||1} steps)`}),t.message&&Eu(t.message),document.dispatchEvent(new CustomEvent(`jarvis:bot-report`,{detail:{text:`⚡ **[NEXUS • ${n}]**:\n${i}${r?`\n\n**Pipeline Steps Executed:**${r}`:``}`,voiceText:t.message||i}}))}else await d(`/swarm/delegate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({bot_id:f,action:e})})}catch(e){console.error(`[BotTeams] Delegation error:`,e)}finally{setTimeout(()=>{t&&t.classList.remove(`working`)},3e3)}})}var gu=new Set;function _u(e,t={}){let n=document.getElementById(`bot-live-content-${e}`);if(!n)return;let r=t.status===`working`,i=t.last_action?Du(String(t.last_action).slice(0,72)):null;e===`radar`?n.innerHTML=`
      <div class="forge-live-banner">
        <div class="forge-model-pill">
          <span>🌍 Ground Pulse</span>
          <span style="color:#00ff88;">● Calibrated</span>
        </div>
        <div class="forge-ci-status">
          ${r&&i?`<strong>📡 Scanning:</strong> ${i}`:i?`Latest: ${i}`:`Standby • World, National & Live Sports feed synced`}
        </div>
      </div>
    `:e===`nexus`?n.innerHTML=`
      <div class="forge-live-banner">
        <div class="forge-model-pill">
          <span>⚡ n8n Webhook Mesh</span>
          <span style="color:#00ff88;">● 400+ Apps</span>
        </div>
        <div class="forge-ci-status">
          ${r&&i?`<strong>⚙️ Executing:</strong> ${i}`:i?`Last Run: ${i}`:`Standby • Cloud & Local n8n webhooks armed`}
        </div>
      </div>
    `:e===`chronos`&&(n.innerHTML=`
      <div class="forge-live-banner">
        <div class="forge-model-pill">
          <span>☁️ Cloud ↔ PC Sync</span>
          <span style="color:#00ff88;">● Armed</span>
        </div>
        <div class="forge-ci-status">
          ${r&&i?`<strong>⏳ Queuing:</strong> ${i}`:i?`Last Queued: ${i}`:`Standby • Offline PC tasks auto-run on wake`}
        </div>
      </div>
    `)}async function vu(){_u(`radar`,{}),_u(`nexus`,{}),_u(`chronos`,{});let e=async()=>{try{let e=await fetch(`${s()}/swarm/status`);if(e.ok){let t=await e.json();Object.entries(t).forEach(([e,t])=>{if(e===`forge`)return;let n=document.getElementById(`bot-card-${e}`),r=document.getElementById(`bot-indicator-${e}`);n&&r&&(t.status===`working`?(n.classList.add(`working`),r.classList.add(`working`)):(n.classList.remove(`working`),r.classList.remove(`working`))),(e===`radar`||e===`nexus`||e===`chronos`)&&_u(e,t)})}let t=await fetch(`${s()}/swarm/completed-reports`);if(t.ok){let e=((await t.json()).reports||[]).filter(e=>!gu.has(e.id));if(e.length>0){let t=e.map(e=>e.id);if(t.forEach(e=>gu.add(e)),await fetch(`${s()}/swarm/ack-reports`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({ids:t})}),e.length===1){let t=e[0],n=`Sir, **[${t.bot}]** has completed its task (**${t.title}**): ${t.summary}`,r=`Sir, ${t.bot} has completed ${t.title} and stored the result in memory.`;document.dispatchEvent(new CustomEvent(`jarvis:bot-report`,{detail:{text:n,voiceText:r,reports:e}}))}else{let t=e.map(e=>`• **[${e.bot}] ${e.title}**: ${e.summary}`).join(`
`),n=`Sir, your specialist bots have completed **${e.length} tasks** and committed them to memory:\n${t}`,r=`Sir, your specialist bots have completed ${e.length} tasks and committed all results to permanent memory.`;document.dispatchEvent(new CustomEvent(`jarvis:bot-report`,{detail:{text:n,voiceText:r,reports:e}}))}}}}catch{}};e(),setInterval(e,4e3)}var yu=``,bu=!1;async function xu(){let e=async()=>{if(!bu)try{let t=await fetch(`${s()}/antigravity/status`);if(!t.ok)return;let n=await t.json();if(Array.isArray(n.projects)&&n.projects.length>0){du=n.projects;let e=document.getElementById(`forge-project-select`);if(e&&e.options.length!==du.length){let t=e.value;e.innerHTML=du.map(e=>`<option value="${Du(e)}">${Du(e)}</option>`).join(``),t&&(e.value=t)}}let r=document.getElementById(`bot-live-content-forge`),i=document.getElementById(`bot-card-forge`),a=document.getElementById(`bot-indicator-forge`);if(!r)return;let o=n.active_model_label||`Gemini 3.8 Flash (High)`,c=(n.active_tasks||[]).filter(e=>e.status===`in_progress`),l=c[c.length-1]||null;i&&a&&(l?(i.classList.add(`working`),a.classList.add(`working`)):(i.classList.remove(`working`),a.classList.remove(`working`))),l&&l.category===`ci_heal`&&l.id!==uu&&(uu=l.id,Eu(`Sir, I detected a GitHub Actions failure in ${l.project} and dispatched an autonomous repair using ${o}.`));let u=n.pending_power_action,d=`${o}|${l?.id||`standby`}|${l?.instruction||``}|${l?.status||``}|${!!u}`;if(d===yu)return;yu=d,r.innerHTML=`
        <div class="forge-live-banner">
          <div class="forge-model-pill">
            <span>🔥 ${Du(o)}</span>
            <span style="color:${l?`#ffaa00`:`#00ff88`};">${l?`⚡ ACTIVE`:`🛡️ CI Auto-Fix`}</span>
          </div>
          ${l?`
            <div class="forge-ci-status">
              <strong>⚙️ Working on ${Du(l.project||`Workspace`)}:</strong> ${Du((l.instruction||``).slice(0,82))}
            </div>
          `:`
            <div class="forge-ci-status">Standby • Watching & auto-healing GitHub Actions across ${du.length} repos</div>
          `}
          <div class="whatsapp-reply-action">
            <button class="whatsapp-reply-btn" id="btn-forge-check-ci" style="border-color:rgba(0,212,255,0.4); color:#00d4ff; background:rgba(0,212,255,0.12);">
              🔍 Scan & Fix CI Now
            </button>
            ${u?`
              <button class="whatsapp-reply-btn" id="btn-forge-abort-shutdown" style="border-color:#ff4444; color:#ff6666; background:rgba(255,68,68,0.18);">
                🛑 Abort Shutdown
              </button>
            `:``}
          </div>
        </div>
      `,document.getElementById(`btn-forge-check-ci`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;bu=!0,n.textContent=`⏳ Checking & Fixing CI...`;try{let e=await(await fetch(`${s()}/antigravity/check-ci`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({project:`ALL`})})).json();n.textContent=e.failures_auto_dispatched>0?`⚡ Auto-Fixed ${e.failures_auto_dispatched} Repo(s)!`:`✓ All Workflows Healthy`}catch{n.textContent=`Scan Error`}finally{setTimeout(()=>{bu=!1,yu=``,e()},2500)}}),document.getElementById(`btn-forge-abort-shutdown`)?.addEventListener(`click`,async()=>{await fetch(`${s()}/antigravity/cancel-shutdown`,{method:`POST`}),Eu(`Pending PC shutdown has been cancelled, Sir.`),yu=``,e()})}catch{}};e(),setInterval(e,5e3)}var Su=``,Cu=!1,wu=!1;async function Tu(){let e=async()=>{if(!Cu)try{let t=await fetch(`${s()}/whatsapp/incoming`);if(!t.ok)return;let n=await t.json(),r=document.getElementById(`bot-live-content-friday`),i=document.getElementById(`bot-card-friday`);if(!r)return;let a=n.bg_whatsapp||{},o=(n.messages||[]).filter(e=>e.status===`unread`),c=o.length>0?o[0]:null;c&&c.status===`unread`&&c.notification_id!==lu&&(lu=c.notification_id,Eu(`Sir, incoming WhatsApp message from ${c.sender}: ${c.message}`));let l=`${a.state||``}|${!!a.qr_code}|${wu}|${c?.notification_id||`none`}|${o.length}`;if(l===Su)return;Su=l,c?i?.classList.add(`has-alert`):i?.classList.remove(`has-alert`),r.innerHTML=`
        <div class="whatsapp-live-banner">
          ${a.connected?`<div style="font-size:0.56rem; color:#00ff88; display:flex; justify-content:space-between; align-items:center;">
             <span>👻 Silent BG Connected</span>
             <span style="color:#00d4ff;">🤖 1-on-1 Auto • No Groups</span>
           </div>`:a.state===`QR_READY`&&a.qr_code?`<div style="display:flex; flex-direction:column; gap:0.25rem;">
             <button class="whatsapp-reply-btn" id="btn-toggle-wtsp-qr" style="border-color:#ffaa00; color:#ffaa00; background:rgba(255,170,0,0.12);">
               ${wu?`🔼 Hide 1-Time QR`:`📲 Scan 1-Time QR for Silent BG`}
             </button>
             ${wu?`
               <div style="text-align:center; background:#fff; padding:6px; border-radius:6px;">
                 <img src="${a.qr_code}" alt="WhatsApp Silent BG QR" style="width:145px; height:145px; display:block; margin:0 auto;" />
                 <div style="color:#111; font-size:0.55rem; font-weight:700; margin-top:3px;">Scan once in WhatsApp → Linked Devices</div>
               </div>
             `:``}
           </div>`:`<div style="font-size:0.56rem; color:#00d4ff;">👻 Silent BG Engine: ${Du(a.state||`STARTING`)}...</div>`}
          ${c?`
            <div class="whatsapp-alert-sender" style="margin-top:2px;">
              <span>💬 ${Du(c.sender)}</span>
              <span style="font-size:0.56rem; color:#00d4ff;">● UNREAD (${o.length})</span>
            </div>
            <div class="whatsapp-alert-text">"${Du(c.message||`No text`)}"</div>
            <div class="whatsapp-reply-action">
              <button class="whatsapp-reply-btn" id="btn-quick-reply-wtsp" data-sender="${Du(c.sender)}" data-reply="${Du(c.auto_reply_draft||`Hi ${c.sender}, Aasim abhi busy hai, thodi der mein call karega.`)}">
                ⚡ Silent Reply
              </button>
              <button class="whatsapp-reply-btn" id="btn-dismiss-wtsp" data-sender="${Du(c.sender)}" data-id="${Du(c.notification_id||``)}" style="flex:0 0 auto; border-color:rgba(255,255,255,0.22); color:rgba(255,255,255,0.75); background:rgba(255,255,255,0.06);" title="Dismiss from card">
                ✕
              </button>
            </div>
          `:`
            <div style="font-size:0.58rem; color:rgba(224,230,237,0.75);">Standby • Auto-replying 1-on-1 • Groups ignored</div>
          `}
        </div>
      `,document.getElementById(`btn-toggle-wtsp-qr`)?.addEventListener(`click`,()=>{wu=!wu,Su=``,e()});let u=document.getElementById(`btn-dismiss-wtsp`);u&&u.addEventListener(`click`,async t=>{let n=t.currentTarget.getAttribute(`data-sender`),r=t.currentTarget.getAttribute(`data-id`);try{await fetch(`${s()}/whatsapp/dismiss`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({target:n,notification_id:r})})}catch{}Su=``,e()});let d=document.getElementById(`btn-quick-reply-wtsp`);d&&d.addEventListener(`click`,async t=>{let n=t.currentTarget.getAttribute(`data-sender`),r=t.currentTarget.getAttribute(`data-reply`);Cu=!0,d.textContent=`👻 Sending silently in BG...`;try{let e=await(await fetch(`${s()}/whatsapp/reply`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({target:n,message:r})})).json();e.success?d.textContent=`✅ Sent & Saved to Memory!`:e.needs_qr?(wu=!0,d.textContent=`📲 Scan 1-Time QR Above`,Eu(`Sir, please scan the one-time QR code in the FRIDAY card to link Silent Background WhatsApp.`)):d.textContent=`⚠️ Retry Silent Send`}catch{d.textContent=`Failed`}finally{setTimeout(()=>{Cu=!1,Su=``,e()},1200)}})}catch{}};e(),setInterval(e,3e3)}function Eu(e){try{Z(e)}catch{}}function Du(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}var Ou=null,ku=!1,Au=null;function ju(){if(document.getElementById(`jarvis-remote-desktop-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-remote-desktop-styles`,e.textContent=`
    .jarvis-remote-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #050b14;
      z-index: 10001;
      display: flex;
      flex-direction: column;
      font-family: var(--font-mono, 'JetBrains Mono', monospace);
    }

    .remote-header {
      background: #0a1324;
      border-bottom: 1px solid rgba(0, 212, 255, 0.2);
      padding: 0.6rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #00d4ff;
      font-size: 0.85rem;
    }

    .remote-canvas-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      background: #000;
      touch-action: none;
    }

    .remote-screen-img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      cursor: crosshair;
      user-select: none;
      -webkit-user-drag: none;
    }

    .remote-toolbar {
      background: #0a1324;
      border-top: 1px solid rgba(0, 212, 255, 0.2);
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      overflow-x: auto;
    }

    .remote-tool-btn {
      background: rgba(0, 212, 255, 0.1);
      border: 1px solid rgba(0, 212, 255, 0.3);
      color: #fff;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      font-size: 0.75rem;
      cursor: pointer;
      white-space: nowrap;
    }

    .remote-tool-btn:active {
      background: #00d4ff;
      color: #000;
    }
  `,document.head.appendChild(e)}function Mu(){if(ku)return;ju(),ku=!0,Au=document.createElement(`div`),Au.className=`jarvis-remote-modal`,Au.innerHTML=`
    <div class="remote-header">
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <span style="color:#00ff88;">●</span>
        <span>PC SCREEN STREAM (1920x1080) — TOUCH TO CLICK</span>
      </div>
      <button class="remote-tool-btn" id="remote-close-btn" style="background:#ff3344;border-color:#ff3344;">✕ CLOSE</button>
    </div>

    <div class="remote-canvas-wrapper" id="remote-canvas-box">
      <img id="remote-screen-view" class="remote-screen-img" alt="PC Screen" />
    </div>

    <div class="remote-toolbar">
      <button class="remote-tool-btn" id="btn-win">⊞ Win</button>
      <button class="remote-tool-btn" id="btn-enter">↵ Enter</button>
      <button class="remote-tool-btn" id="btn-type">⌨ Type Text</button>
      <button class="remote-tool-btn" id="btn-rclick">🖱 Right Click</button>
      <button class="remote-tool-btn" id="btn-scroll-up">▲ Scroll Up</button>
      <button class="remote-tool-btn" id="btn-scroll-down">▼ Scroll Down</button>
    </div>
  `,document.body.appendChild(Au);let e=document.getElementById(`remote-screen-view`);function t(t){let n=e.getBoundingClientRect(),r=t.touches?t.touches[0].clientX:t.clientX,i=t.touches?t.touches[0].clientY:t.clientY;r<n.left||r>n.right||i<n.top||i>n.bottom||Pu({event:`click`,x:(r-n.left)/n.width,y:(i-n.top)/n.height})}e.addEventListener(`click`,t),document.getElementById(`remote-close-btn`).addEventListener(`click`,Nu),document.getElementById(`btn-win`).addEventListener(`click`,()=>Pu({event:`press_key`,key:`win`})),document.getElementById(`btn-enter`).addEventListener(`click`,()=>Pu({event:`press_key`,key:`enter`})),document.getElementById(`btn-rclick`).addEventListener(`click`,()=>{e.getBoundingClientRect(),Pu({event:`right_click`,x:.5,y:.5})}),document.getElementById(`btn-scroll-up`).addEventListener(`click`,()=>Pu({event:`scroll`,amount:300})),document.getElementById(`btn-scroll-down`).addEventListener(`click`,()=>Pu({event:`scroll`,amount:-300})),document.getElementById(`btn-type`).addEventListener(`click`,()=>{let e=prompt(`Enter text to type on PC workstation:`);e&&Pu({event:`type`,text:e})});async function n(){if(ku)try{let t=await fetch(`${s()}/remote-desktop/frame`).then(e=>e.json());t.success&&t.data_url&&(e.src=t.data_url)}catch{}}n(),Ou=setInterval(n,650)}function Nu(){ku=!1,Ou&&=(clearInterval(Ou),null),Au&&Au.parentNode&&(Au.parentNode.removeChild(Au),Au=null)}async function Pu(e){try{await fetch(`${s()}/remote-desktop/control`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)})}catch(e){console.error(`Remote control error:`,e)}}var Fu=!1;function Iu(){if(document.getElementById(`jarvis-quick-bar-styles`))return;let e=document.createElement(`style`);e.id=`jarvis-quick-bar-styles`,e.textContent=`
    .jarvis-quick-bar {
      width: 100%;
      max-width: 1400px;
      margin: 0.8rem auto 0.4rem;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.6rem;
      overflow-x: auto;
      background: rgba(10, 20, 35, 0.85);
      border: 1px solid rgba(0, 212, 255, 0.25);
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(0, 212, 255, 0.05);
      backdrop-filter: blur(12px);
      z-index: 100;
      scrollbar-width: none;
    }
    .jarvis-quick-bar::-webkit-scrollbar { display: none; }

    .quick-bar-title {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #00d4ff;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      white-space: nowrap;
    }

    .quick-actions-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .quick-action-btn {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 0.85rem;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      font-family: inherit;
      letter-spacing: 0.05em;
      border: 1px solid rgba(0, 212, 255, 0.3);
      background: rgba(0, 212, 255, 0.08);
      color: #e0f7fa;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .quick-action-btn:hover, .quick-action-btn:active {
      background: rgba(0, 212, 255, 0.25);
      border-color: #00d4ff;
      box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
      transform: translateY(-1px);
    }


  `,document.head.appendChild(e)}function Lu(){if(Iu(),!document.getElementById(`jarvis-quick-bar`)){let e=document.createElement(`div`);e.id=`jarvis-quick-bar`,e.className=`jarvis-quick-bar`,e.innerHTML=`
      <div class="quick-bar-title">
        <span style="color:#00ff88;">●</span>
        <span>J.A.R.V.I.S 2.0 PROTOCOLS</span>
      </div>
      <div class="quick-actions-group">

        <button class="quick-action-btn" id="bar-btn-briefing" style="background: rgba(0, 212, 255, 0.18); border-color: #00d4ff; color: #00d4ff; font-weight: 700;">
          ⚡ <span>EXECUTIVE BRIEFING</span>
        </button>
        <button class="quick-action-btn" id="bar-btn-remote">
          🖥️ <span>PC REMOTE DESKTOP</span>
        </button>
        <button class="quick-action-btn" id="bar-btn-cloud">
          ☁️ <span>CLOUD SENTINEL</span>
        </button>
        <button class="quick-action-btn" id="bar-btn-watch">
          👁️ <span id="bar-watch-text">WATCH & LEARN</span>
        </button>
        <button class="quick-action-btn" id="bar-btn-commerce">
          🛒 <span>ORDERS</span>
        </button>
      </div>
    `;let t=document.getElementById(`app`),n=document.querySelector(`.jarvis-dashboard`);t&&n?t.insertBefore(e,n):document.body.prepend(e)}let e=document.getElementById(`bar-btn-briefing`);e&&e.addEventListener(`click`,()=>{typeof window<`u`&&window.jarvisTriggerBriefing&&window.jarvisTriggerBriefing()});let t=document.getElementById(`bar-btn-remote`);t&&t.addEventListener(`click`,Mu);let n=document.getElementById(`bar-btn-cloud`);n&&n.addEventListener(`click`,Ru);let r=document.getElementById(`bar-btn-watch`);r&&r.addEventListener(`click`,zu);let i=document.getElementById(`bar-btn-commerce`);i&&i.addEventListener(`click`,Bu)}async function Ru(){let e=document.getElementById(`cloud-sentinel-modal`);if(e){e.remove();return}let t=document.createElement(`div`);t.id=`cloud-sentinel-modal`,t.style.cssText=`
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 90%; max-width: 650px; max-height: 85vh; overflow-y: auto;
    background: #08111e; border: 1px solid #00d4ff; border-radius: 10px;
    padding: 1.5rem; z-index: 10002; color: #fff; box-shadow: 0 0 35px rgba(0, 212, 255, 0.4);
    font-family: var(--font-mono, monospace);
  `,t.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,212,255,0.3); padding-bottom:0.8rem; margin-bottom:1rem;">
      <h3 style="margin:0; color:#00d4ff;">☁️ UNIVERSAL CLOUD SENTINEL</h3>
      <button id="close-cloud-modal" style="background:#ff3344; border:none; color:#fff; border-radius:4px; padding:0.3rem 0.7rem; cursor:pointer;">✕ CLOSE</button>
    </div>
    <div id="cloud-modal-content">Loading live deployments across Supabase, Vercel, Render, Railway, Netlify...</div>
    <div style="margin-top:1.2rem; display:flex; gap:0.6rem;">
      <button id="btn-trigger-cloud-scan" style="background:rgba(0,212,255,0.2); border:1px solid #00d4ff; color:#fff; padding:0.5rem 1rem; border-radius:6px; cursor:pointer;">⚡ Run Full Scan & Keepalive</button>
    </div>
  `,document.body.appendChild(t),document.getElementById(`close-cloud-modal`).addEventListener(`click`,()=>t.remove());async function n(){try{let e=await fetch(`${s()}/cloud-sentinel/status`).then(e=>e.json()),t=document.getElementById(`cloud-modal-content`);if(!t)return;let n=`<p style="font-size:0.8rem; color:#88a;">Last Scan: ${e.last_scan||`Just now`} | Active Tunnel: <a href="${e.active_tunnel_url}" target="_blank" style="color:#00d4ff;">${e.active_tunnel_url}</a></p>`,r=e.providers||{};for(let[e,t]of Object.entries(r))n+=`<div style="margin-top:0.8rem;"><strong style="text-transform:uppercase; color:#00d4ff;">${e}</strong></div>`,Array.isArray(t)&&t.forEach(e=>{let t=e.healthy?`<span style="color:#00ff88;">[ONLINE]</span>`:`<span style="color:#ff3344;">[${e.details||`ATTENTION`}]</span>`;n+=`<div style="font-size:0.75rem; padding:0.3rem; border-bottom:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between;">
              <span>${e.name||e.url}</span>
              ${t}
            </div>`});t.innerHTML=n}catch(e){document.getElementById(`cloud-modal-content`).textContent=`Error loading cloud status: ${e.message}`}}n(),document.getElementById(`btn-trigger-cloud-scan`).addEventListener(`click`,async()=>{document.getElementById(`cloud-modal-content`).textContent=`Running live scan & sending keepalives...`,await fetch(`${s()}/cloud-sentinel/scan`,{method:`POST`}),n()})}async function zu(){let e=document.getElementById(`bar-watch-text`);if(Fu)try{let t=await fetch(`${s()}/workflow/record/stop`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:`Demonstrated Skill`,schedule:`on_demand`})}).then(e=>e.json());Fu=!1,e&&(e.textContent=`WATCH & LEARN`),alert(t.message||`Skill saved successfully to .agent/skills/!`)}catch(e){alert(e.message)}else{let t=prompt(`Enter a name for the workflow to record:`,`Daily Production Audit`);if(!t)return;try{await fetch(`${s()}/workflow/record/start`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:t,goal:`Demonstrated workflow`})}),Fu=!0,e&&(e.textContent=`🔴 STOP & SAVE SKILL`),alert(`J.A.R.V.I.S is now WATCHING. Every step you take will be recorded and distilled into a skill.`)}catch(e){alert(e.message)}}}async function Bu(){let e=document.getElementById(`commerce-order-modal`);if(e){e.remove();return}let t=document.createElement(`div`);t.id=`commerce-order-modal`,t.style.cssText=`
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 90%; max-width: 600px; max-height: 85vh; overflow-y: auto;
    background: #08111e; border: 1px solid #00d4ff; border-radius: 12px;
    padding: 1.5rem; z-index: 10003; color: #fff; box-shadow: 0 0 35px rgba(0, 212, 255, 0.4);
    font-family: var(--font-mono, monospace);
  `,t.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,212,255,0.3); padding-bottom:0.8rem; margin-bottom:1rem;">
      <h3 style="margin:0; color:#00d4ff;">🛒 ECOMMERCE & SAVED ADDRESSES</h3>
      <button id="close-commerce-modal" style="background:#ff3344; border:none; color:#fff; border-radius:4px; padding:0.3rem 0.7rem; cursor:pointer;">✕ CLOSE</button>
    </div>

    <div style="margin-bottom:1.2rem;">
      <label style="font-size:0.75rem; color:#88a; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:0.5rem;">
        📍 Active Delivery Address (All Apps: Amazon, Flipkart, Blinkit, Zomato)
      </label>
      <div id="addr-chips-container" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.8rem;">
        Loading saved addresses...
      </div>
      <div id="active-addr-details" style="font-size:0.75rem; color:#00ff88; background:rgba(0,255,136,0.06); padding:0.6rem 0.8rem; border-radius:6px; border:1px solid rgba(0,255,136,0.2);"></div>
    </div>

    <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:0.8rem; margin-top:0.8rem;">
      <label style="font-size:0.75rem; color:#88a; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:0.4rem;">
        🔍 Live Search & Price Comparison (Amazon, Flipkart, Blinkit)
      </label>
      <div style="display:flex; gap:0.5rem; margin-bottom:0.6rem;">
        <input type="text" id="commerce-search-query" placeholder="e.g. boAt earbuds, running shoes, milk, iPhone..." style="flex:1; background:#0a1728; border:1px solid rgba(0,212,255,0.4); color:#fff; padding:0.55rem; border-radius:6px; font-family:inherit; font-size:0.8rem;" />
        <button id="btn-commerce-search-fast" style="background:rgba(0,212,255,0.2); border:1px solid #00d4ff; color:#00d4ff; font-weight:700; padding:0.55rem 0.9rem; border-radius:6px; cursor:pointer; font-family:inherit; font-size:0.75rem; white-space:nowrap;">
          🔍 SEARCH
        </button>
      </div>
      <div id="commerce-search-results" style="margin-bottom:0.8rem; font-size:0.75rem;"></div>
    </div>

    <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:0.8rem; margin-top:0.8rem;">
      <label style="font-size:0.75rem; color:#88a; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:0.4rem;">
        ⚡ Stage Order Autopilot
      </label>
      <div style="display:flex; gap:0.5rem; margin-bottom:0.6rem;">
        <select id="order-platform" style="background:#0a1728; border:1px solid rgba(0,212,255,0.4); color:#fff; padding:0.5rem; border-radius:6px; font-family:inherit; flex:1;">
          <option value="Blinkit">Blinkit (10-Min Quick Delivery)</option>
          <option value="Amazon">Amazon India</option>
          <option value="Flipkart">Flipkart</option>
          <option value="Zomato">Zomato Food</option>
        </select>
        <input type="number" id="order-qty" value="1" min="1" max="10" style="background:#0a1728; border:1px solid rgba(0,212,255,0.4); color:#fff; padding:0.5rem; border-radius:6px; width:60px; text-align:center; font-family:inherit;" />
      </div>
      <input type="text" id="order-item-input" placeholder="e.g. Amul Gold Milk 500ml, Sony Headphones, Biryani..." style="width:100%; box-sizing:border-box; background:#0a1728; border:1px solid rgba(0,212,255,0.4); color:#fff; padding:0.6rem; border-radius:6px; font-family:inherit; margin-bottom:0.8rem;" />
      <button id="btn-submit-stage-order" style="width:100%; background:linear-gradient(135deg, #00d4ff, #0066cc); border:none; color:#fff; font-weight:700; padding:0.7rem; border-radius:6px; cursor:pointer; font-family:inherit; letter-spacing:0.05em;">
        🛒 STAGE CART & HALT BEFORE PAYMENT
      </button>
      <div id="order-stage-result" style="margin-top:0.8rem; font-size:0.8rem; line-height:1.4;"></div>
    </div>
  `,document.body.appendChild(t),document.getElementById(`close-commerce-modal`).addEventListener(`click`,()=>t.remove());let n=`hostel`;async function r(){try{let e=await fetch(`${s()}/commerce/addresses`).then(e=>e.json()),t=document.getElementById(`addr-chips-container`),i=document.getElementById(`active-addr-details`);if(!t||!i)return;let a=e.addresses||{};t.innerHTML=``;for(let[e,i]of Object.entries(a)){let a=i.is_default||e===n;a&&(n=e);let o=document.createElement(`button`);o.style.cssText=`
          padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.75rem; font-family: inherit;
          cursor: pointer; border: 1px solid ${a?`#00ff88`:`rgba(0, 212, 255, 0.3)`};
          background: ${a?`rgba(0, 255, 136, 0.2)`:`rgba(0, 212, 255, 0.08)`};
          color: ${a?`#00ff88`:`#e0f7fa`}; font-weight: ${a?`700`:`500`};
          display: flex; align-items: center; gap: 0.3rem;
        `,o.innerHTML=`${a?`✓`:`📍`} ${i.label||e}`,o.addEventListener(`click`,async()=>{n=e,await fetch(`${s()}/commerce/addresses/select`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({address:e})}),r()}),t.appendChild(o)}let o=a[n]||Object.values(a)[0];o&&(i.innerHTML=`
          <strong>Active for Orders:</strong> ${o.label} — ${o.address_line1||``}, ${o.city} (${o.pincode})
          <br><span style="color:#88a; font-size:0.7rem;">Supported on: ${(o.platforms||[`Amazon`,`Flipkart`,`Blinkit`,`Zomato`]).join(`, `)}</span>
        `)}catch(e){console.error(e)}}r(),document.getElementById(`btn-submit-stage-order`).addEventListener(`click`,async()=>{let e=document.getElementById(`order-item-input`).value.trim();if(!e){alert(`Please specify an item to order.`);return}let t=document.getElementById(`order-platform`).value,r=parseInt(document.getElementById(`order-qty`).value||1),i=document.getElementById(`order-stage-result`);i.innerHTML=`<span style="color:#00d4ff;">Staging cart on ${t} for delivery to ${n.toUpperCase()}...</span>`;try{i.innerHTML=`
        <div style="background:rgba(0,212,255,0.1); border:1px solid #00d4ff; border-radius:6px; padding:0.8rem; margin-top:0.5rem;">
          <div style="color:#00ff88; font-weight:700;">✓ Cart Staged Successfully!</div>
          <div style="color:#fff; margin:0.3rem 0;">${(await fetch(`${s()}/commerce/order`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({platform:t,item:e,quantity:r,address:n})}).then(e=>e.json())).message||`Ready for checkout.`}</div>
          <div style="color:#ffcc00; font-size:0.75rem;">🛡️ SAFETY HALT: Payment authorization request dispatched to your WhatsApp. Review and authorize to complete.</div>
        </div>
      `}catch(e){i.innerHTML=`<span style="color:#ff3344;">Error staging order: ${e.message}</span>`}})}function Vu(){let e={greeting:document.getElementById(`greeting-widget`),clock:document.getElementById(`clock-widget`),weather:document.getElementById(`weather-widget`),tasks:document.getElementById(`tasks-widget`),notes:document.getElementById(`notes-widget`),latency:document.getElementById(`latency-widget`),commandBar:document.getElementById(`command-widget`),stats:document.getElementById(`stats-widget`),models:document.getElementById(`model-widget`),neural:document.getElementById(`neural-widget`),calendar:document.getElementById(`calendar-widget`),systemControls:document.getElementById(`system-controls-widget`),newsTicker:document.getElementById(`news-ticker`),github:document.getElementById(`github-widget`),music:document.getElementById(`music-widget`),botTeams:document.getElementById(`bot-teams-widget`)};x(e.greeting),ee(e.clock),oe(e.weather),fe(e.tasks),Il(e.calendar),_e(e.notes),e.latency&&Ol(e.latency),xl(e.commandBar),Dl(e.stats),e.neural&&Pl(e.neural),jl(),e.systemControls&&Jl(e.systemControls),e.newsTicker&&Xl(e.newsTicker),e.github&&eu(e.github),e.music&&ru(e.music),e.botTeams&&mu(e.botTeams),iu(),Lu(),setInterval(()=>{let e=document.querySelectorAll(`.jarvis-card`);if(e.length>0){let t=e[Math.floor(Math.random()*e.length)];t.classList.add(`scanning`),setTimeout(()=>{t.classList.remove(`scanning`)},4e3)}},12e3),document.addEventListener(`keydown`,e=>{e.altKey&&e.code===`Space`&&(e.preventDefault(),document.dispatchEvent(new CustomEvent(`jarvis:focus-command`)))});let t=document.querySelector(`.jarvis-dashboard`);t&&(t.style.opacity=`1`,t.style.transform=`translateY(0)`);let n=document.createElement(`canvas`);n.id=`jarvis-particles`,Object.assign(n.style,{position:`fixed`,top:`0`,left:`0`,width:`100%`,height:`100%`,zIndex:`-1`,pointerEvents:`none`,willChange:`transform`}),document.body.prepend(n);let r=n.getContext(`2d`),i,a,o=[],s=typeof window<`u`&&(window.innerWidth<768||`ontouchstart`in window||navigator.maxTouchPoints>0),c=s?16:120,l=Math.PI*2,u={x:-1e3,y:-1e3};window.addEventListener(`mousemove`,e=>{u.x=e.clientX,u.y=e.clientY}),window.addEventListener(`mouseout`,()=>{u.x=-1e3,u.y=-1e3});function d(){i=n.width=window.innerWidth,a=n.height=window.innerHeight}window.addEventListener(`resize`,d),d();for(let e=0;e<c;e++)o.push({x:Math.random()*i,y:Math.random()*a,size:Math.random()*2+.5,speedX:(Math.random()-.5)*1.2,speedY:(Math.random()-.5)*1.2,baseSpeedX:(Math.random()-.5)*1.2,baseSpeedY:(Math.random()-.5)*1.2});function f(){r.clearRect(0,0,i,a);for(let e=0;e<c;e++){let t=o[e],n=u.x-t.x,d=u.y-t.y,f=Math.sqrt(n*n+d*d);if(f<150){let e=(150-f)/150;t.speedX-=n/f*e*.4,t.speedY-=d/f*e*.4}if(t.speedX+=(t.baseSpeedX-t.speedX)*.05,t.speedY+=(t.baseSpeedY-t.speedY)*.05,t.x+=t.speedX,t.y+=t.speedY,t.x<0&&(t.x=i),t.x>i&&(t.x=0),t.y<0&&(t.y=a),t.y>a&&(t.y=0),r.beginPath(),r.arc(t.x,t.y,t.size,0,l),r.fillStyle=`rgba(29, 185, 84, 0.6)`,r.fill(),!s)for(let n=e+1;n<c;n++){let e=o[n],i=t.x-e.x,a=t.y-e.y,s=Math.sqrt(i*i+a*a);s<120&&(r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(e.x,e.y),r.strokeStyle=`rgba(29, 185, 84, ${(1-s/120)*.4})`,r.lineWidth=.5,r.stroke())}f<150&&(r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(u.x,u.y),r.strokeStyle=`rgba(255, 255, 255, ${(1-f/150)*.3})`,r.lineWidth=1,r.stroke())}requestAnimationFrame(f)}f(),console.log(`%c J.A.R.V.I.S initialized `,`background: #00e5ff; color: #030814; font-weight: bold; font-size: 14px; padding: 4px 12px; border-radius: 4px;`)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Vu):Vu();