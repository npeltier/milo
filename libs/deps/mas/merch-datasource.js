function m(l,t={},e){let a=document.createElement(l);e instanceof HTMLElement?a.appendChild(e):a.innerHTML=e;for(let[s,o]of Object.entries(t))a.setAttribute(s,o);return a}function $(l=1e3){return new Promise(t=>setTimeout(t,l))}var g="Network error",f=class{#t;constructor(t){this.#t=/^author-/.test(t);let e=`https://${t}.adobeaemcloud.com`,a=`${e}/adobe/sites`;this.cfFragmentsUrl=`${a}/cf/fragments`,this.cfSearchUrl=`${this.cfFragmentsUrl}/search`,this.cfPublishUrl=`${this.cfFragmentsUrl}/publish`,this.wcmcommandUrl=`${e}/bin/wcmcommand`,this.csrfTokenUrl=`${e}/libs/granite/csrf/token.json`,this.headers={Authorization:`Bearer ${sessionStorage.getItem("masAccessToken")??window.adobeid?.authorize?.()}`,pragma:"no-cache","cache-control":"no-cache"}}async getCsrfToken(){let t=await fetch(this.csrfTokenUrl,{headers:this.headers}).catch(a=>{throw new Error(`${g}: ${a.message}`)});if(!t.ok)throw new Error(`Failed to get CSRF token: ${t.status} ${t.statusText}`);let{token:e}=await t.json();return e}async searchFragment({path:t,query:e,variant:a}){let s={};t&&(s.path=t),e&&(s.fullText={text:encodeURIComponent(e),queryMode:"EXACT_WORDS"});let o=new URLSearchParams({query:JSON.stringify({filter:s})}).toString(),r=await fetch(`${this.cfSearchUrl}?${o}`,{headers:this.headers}).catch(c=>{throw new Error(`${g}: ${c.message}`)});if(!r.ok)throw new Error(`Search failed: ${r.status} ${r.statusText}`);let n=(await r.json()).items;return a&&(n=n.filter(c=>{let[h]=c.fields.find(d=>d.name==="variant")?.values;return h===a})),n}async getFragmentByPath(t){let e=this.#t?this.headers:{},a=await fetch(`${this.cfFragmentsUrl}?path=${t}`,{headers:e}).catch(o=>{throw new Error(`${g}: ${o.message}`)});if(!a.ok)throw new Error(`Failed to get fragment: ${a.status} ${a.statusText}`);let{items:s}=await a.json();if(!s||s.length===0)throw new Error("Fragment not found");return s[0]}async getFragment(t){let e=t.headers.get("Etag"),a=await t.json();return a.etag=e,a}async getFragmentById(t){let e=await fetch(`${this.cfFragmentsUrl}/${t}`,{headers:this.headers});if(!e.ok)throw new Error(`Failed to get fragment: ${e.status} ${e.statusText}`);return await this.getFragment(e)}async saveFragment(t){let{title:e,fields:a}=t,s=await fetch(`${this.cfFragmentsUrl}/${t.id}`,{method:"PUT",headers:{"Content-Type":"application/json","If-Match":t.etag,...this.headers},body:JSON.stringify({title:e,fields:a})}).catch(o=>{throw new Error(`${g}: ${o.message}`)});if(!s.ok)throw new Error(`Failed to save fragment: ${s.status} ${s.statusText}`);return await this.getFragment(s)}async copyFragmentClassic(t){let e=await this.getCsrfToken(),a=t.path.split("/").slice(0,-1).join("/"),s=new FormData;s.append("cmd","copyPage"),s.append("srcPath",t.path),s.append("destParentPath",a),s.append("shallow","false"),s.append("_charset_","UTF-8");let o=await fetch(this.wcmcommandUrl,{method:"POST",headers:{...this.headers,"csrf-token":e},body:s}).catch(y=>{throw new Error(`${g}: ${y.message}`)});if(!o.ok)throw new Error(`Failed to copy fragment: ${o.status} ${o.statusText}`);let r=await o.text(),h=new DOMParser().parseFromString(r,"text/html").getElementById("Message")?.textContent.trim();if(!h)throw new Error("Failed to extract new path from copy response");await $();let d=await this.getFragmentByPath(h);return d&&(d=await this.getFragmentById(d.id)),d}async publishFragment(t){let e=await fetch(this.cfPublishUrl,{method:"POST",headers:{"Content-Type":"application/json","If-Match":t.etag,...this.headers},body:JSON.stringify({paths:[t.path],filterReferencesByStatus:["DRAFT","UNPUBLISHED"],workflowModelId:"/var/workflow/models/scheduled_activation_with_references"})}).catch(a=>{throw new Error(`${g}: ${a.message}`)});if(!e.ok)throw new Error(`Failed to publish fragment: ${e.status} ${e.statusText}`);return await e.json()}async deleteFragment(t){let e=await fetch(`${this.cfFragmentsUrl}/${t.id}`,{method:"DELETE",headers:{"Content-Type":"application/json","If-Match":t.etag,...this.headers}}).catch(a=>{throw new Error(`${g}: ${a.message}`)});if(!e.ok)throw new Error(`Failed to delete fragment: ${e.status} ${e.statusText}`);return e}sites={cf:{fragments:{search:this.searchFragment.bind(this),getByPath:this.getFragmentByPath.bind(this),getById:this.getFragmentById.bind(this),save:this.saveFragment.bind(this),copy:this.copyFragmentClassic.bind(this),publish:this.publishFragment.bind(this),delete:this.deleteFragment.bind(this)}}}};var x="aem-bucket",F="publish-p22655-e155390",p={CATALOG:"catalog",AH:"ah",CCD_ACTION:"ccd-action",SPECIAL_OFFERS:"special-offers"},k={[p.CATALOG]:{title:{tag:"h3",slot:"heading-xs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{size:"l"}},[p.AH]:{title:{tag:"h3",slot:"heading-xxs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xxs"},ctas:{size:"s"}},[p.CCD_ACTION]:{title:{tag:"h3",slot:"heading-xs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{size:"l"}},[p.SPECIAL_OFFERS]:{name:{tag:"h4",slot:"detail-m"},title:{tag:"h4",slot:"detail-m"},backgroundImage:{tag:"div",slot:"bg-image"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{size:"l"}}};async function C(l,t,e,a){let s=l.fields.reduce((i,{name:n,multiple:c,values:h})=>(i[n]=c?h:h[0],i),{id:l.id});s.model=s.model;let{variant:o="catalog"}=s;e.setAttribute("variant",o);let r=k[o]??"catalog";if(s.mnemonicIcon?.forEach((i,n)=>{let c=s.mnemonicLink?.length>n?s.mnemonicLink[n]:"",h=s.mnemonicAlt?.length>n?s.mnemonicAlt[n]:"",d=m("merch-icon",{slot:"icons",src:i,alt:h,href:c,size:"l"});t(d)}),s.cardTitle&&r.title&&t(m(r.title.tag,{slot:r.title.slot},s.cardTitle)),s.backgroundImage&&r.backgroundImage&&t(m(r.backgroundImage.tag,{slot:r.backgroundImage.slot},`<img loading="lazy" src="${s.backgroundImage}" width="600" height="362">`)),s.prices&&r.prices){let i=s.prices,n=m(r.prices.tag,{slot:r.prices.slot},i);t(n)}if(s.description&&r.description){let i=m(r.description.tag,{slot:r.description.slot},s.description);t(i)}if(s.ctas){let i=m("div",{slot:"footer"},s.ctas),n=[];[...i.querySelectorAll("a")].forEach(c=>{let h=c.parentElement.tagName==="STRONG";if(a)c.classList.add("con-button"),h&&c.classList.add("blue"),n.push(c);else{let T=m("sp-button",{treatment:h?"fill":"outline",variant:h?"accent":"primary"},c);T.addEventListener("click",E=>{E.stopPropagation(),c.click()}),n.push(T)}}),i.innerHTML="",i.append(...n),t(i)}}var w=class{#t=new Map;clear(){this.#t.clear()}add(...t){t.forEach(e=>{let{path:a}=e;a&&this.#t.set(a,e)})}has(t){return this.#t.has(t)}get(t){return this.#t.get(t)}remove(t){this.#t.delete(t)}},u=new w,b=class extends HTMLElement{#t;cache=u;refs=[];path;consonant=!1;#e;static get observedAttributes(){return["source","path","consonant"]}attributeChangedCallback(t,e,a){this[t]=a}connectedCallback(){this.consonant=this.hasAttribute("consonant"),this.clearRefs();let t=this.getAttribute(x)??F;this.#t=new f(t),this.refresh(!1)}clearRefs(){this.refs.forEach(t=>{t.remove()})}async refresh(t=!0){this.path&&(this.#e&&!await Promise.race([this.#e,Promise.resolve(!1)])||(this.clearRefs(),this.refs=[],t&&this.cache.remove(this.path),this.#e=this.fetchData().then(()=>!0)))}async fetchData(){let t=u.get(this.path);if(t||(t=await this.#t.sites.cf.fragments.getByPath(this.path),u.add(t)),t){C(t,a=>{this.parentElement.appendChild(a),this.refs.push(a)},this.parentElement,this.consonant);return}}get updateComplete(){return this.#e??Promise.reject(new Error("datasource is not correctly configured"))}};customElements.define("merch-datasource",b);export{b as MerchDataSource};
