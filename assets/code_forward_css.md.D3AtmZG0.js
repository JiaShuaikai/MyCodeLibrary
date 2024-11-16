import{_ as t,c as n,j as a,a as e,G as l,a5 as p,B as h,o as k}from"./chunks/framework.h-DYEFKW.js";const m=JSON.parse('{"title":"css 备忘录","description":"","frontmatter":{},"headers":[],"relativePath":"code/forward/css.md","filePath":"code/forward/css.md","lastUpdated":null}'),r={name:"code/forward/css.md"};function d(o,s,c,E,g,y){const i=h("ArticleMetadata");return k(),n("div",null,[s[0]||(s[0]=a("h1",{id:"css-备忘录",tabindex:"-1"},[e("css 备忘录 "),a("a",{class:"header-anchor",href:"#css-备忘录","aria-label":'Permalink to "css 备忘录"'},"​")],-1)),l(i),s[1]||(s[1]=p(`<h3 id="css-自定义属性-变量" tabindex="-1">CSS 自定义属性（变量） <a class="header-anchor" href="#css-自定义属性-变量" aria-label="Permalink to &quot;CSS 自定义属性（变量）&quot;">​</a></h3><p>通过在 :root 伪类上设置自定义属性，然后在整个文档需要的地方使用，可以减少这样的重复性：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --main-bg-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">brown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>使用一个变量时用 var() 函数包裹以表示一个合法的属性值</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--main-bg-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="js-获取自定义值并修改" tabindex="-1">js 获取自定义值并修改 <a class="header-anchor" href="#js-获取自定义值并修改" aria-label="Permalink to &quot;js 获取自定义值并修改&quot;">​</a></h3><p>在 JavaScript 中获取或者修改 CSS 变量和操作普通 CSS 属性是一样的：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取一个 Dom 节点上的 CSS 变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPropertyValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--my-var&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取任意 Dom 节点上的 CSS 变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComputedStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(element).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPropertyValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--my-var&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改一个 Dom 节点上的 CSS 变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--my-var&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, jsVar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,8))])}const F=t(r,[["render",d]]);export{m as __pageData,F as default};
