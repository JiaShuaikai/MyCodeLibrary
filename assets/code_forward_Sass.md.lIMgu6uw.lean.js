import{_ as n,c as l,j as i,a as h,G as t,a5 as p,B as e,o as k}from"./chunks/framework.h-DYEFKW.js";const u=JSON.parse('{"title":"Sass备忘录","description":"","frontmatter":{},"headers":[],"relativePath":"code/forward/Sass.md","filePath":"code/forward/Sass.md","lastUpdated":null}'),d={name:"code/forward/Sass.md"};function r(E,s,o,c,g,y){const a=e("ArticleMetadata");return k(),l("div",null,[s[0]||(s[0]=i("h1",{id:"sass备忘录",tabindex:"-1"},[h("Sass备忘录 "),i("a",{class:"header-anchor",href:"#sass备忘录","aria-label":'Permalink to "Sass备忘录"'},"​")],-1)),t(a),s[1]||(s[1]=p(`<h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$defaultLinkColor: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#46EAC2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $defaultLinkColor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="字符串插值" tabindex="-1">字符串插值 <a class="header-anchor" href="#字符串插值" aria-label="Permalink to &quot;字符串插值&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$wk: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-webkit-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.rounded-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  #{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$wk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="extend继承样式" tabindex="-1">Extend继承样式 <a class="header-anchor" href="#extend继承样式" aria-label="Permalink to &quot;Extend继承样式&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ···</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.push-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @extend </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.button;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="嵌套" tabindex="-1">嵌套 <a class="header-anchor" href="#嵌套" aria-label="Permalink to &quot;嵌套&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    list-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="模块-片段" tabindex="-1">模块（片段） <a class="header-anchor" href="#模块-片段" aria-label="Permalink to &quot;模块（片段）&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// _base.scss</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$font-stack:    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Helvetica</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sans-serif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$primary-color: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#333</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//注意以下划线开头的 Sass 文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// styles.scss</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &#39;base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.inverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">base.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$primary-color;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="混合-mixins" tabindex="-1">混合(Mixins) <a class="header-anchor" href="#混合-mixins" aria-label="Permalink to &quot;混合(Mixins)&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@mixin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> heading-font</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sans-serif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> heading-font;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="import" tabindex="-1">@import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;@import&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &#39;./other_sass_file&#39;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &#39;/code&#39;, &#39;lists&#39;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 纯 CSS @imports</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;theme.css&quot;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url(theme);</span></span></code></pre></div><h3 id="字符串插值-1" tabindex="-1">字符串插值 <a class="header-anchor" href="#字符串插值-1" aria-label="Permalink to &quot;字符串插值&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$defaultLinkColor: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#46EAC2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $defaultLinkColor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="字符串插值-2" tabindex="-1">字符串插值 <a class="header-anchor" href="#字符串插值-2" aria-label="Permalink to &quot;字符串插值&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$defaultLinkColor: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#46EAC2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $defaultLinkColor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="字符串插值-3" tabindex="-1">字符串插值 <a class="header-anchor" href="#字符串插值-3" aria-label="Permalink to &quot;字符串插值&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$defaultLinkColor: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#46EAC2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $defaultLinkColor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="字符串插值-4" tabindex="-1">字符串插值 <a class="header-anchor" href="#字符串插值-4" aria-label="Permalink to &quot;字符串插值&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$defaultLinkColor: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#46EAC2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $defaultLinkColor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="字符串插值-5" tabindex="-1">字符串插值 <a class="header-anchor" href="#字符串插值-5" aria-label="Permalink to &quot;字符串插值&quot;">​</a></h3><div class="language-sass vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$defaultLinkColor: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#46EAC2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: $defaultLinkColor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,24))])}const F=n(d,[["render",r]]);export{u as __pageData,F as default};
