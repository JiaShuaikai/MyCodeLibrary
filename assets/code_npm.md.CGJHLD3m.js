import{_ as p,c as l,a5 as e,j as i,a as n,G as t,B as h,o as k}from"./chunks/framework.h-DYEFKW.js";const m=JSON.parse('{"title":"npm包","description":"","frontmatter":{},"headers":[],"relativePath":"code/npm.md","filePath":"code/npm.md","lastUpdated":null}'),d={name:"code/npm.md"};function o(r,s,g,E,c,u){const a=h("Badge");return k(),l("div",null,[s[4]||(s[4]=e(`<h1 id="npm包" tabindex="-1">npm包 <a class="header-anchor" href="#npm包" aria-label="Permalink to &quot;npm包&quot;">​</a></h1><blockquote><p>本页展示个人开发的npm包</p></blockquote><h2 id="发布npm包的步骤和注意事项" tabindex="-1">发布npm包的步骤和注意事项 <a class="header-anchor" href="#发布npm包的步骤和注意事项" aria-label="Permalink to &quot;发布npm包的步骤和注意事项&quot;">​</a></h2><p>1、创建一个npm账号 如果你还没有npm账号，可以在npm官网上注册一个。在注册过程中，你需要提供用户名、密码和邮箱。</p><p>2、初始化你的npm包 在本地创建一个文件夹来承载你的npm包。打开命令行终端，并通过cd命令进入到该文件夹。然后运行以下命令初始化你的npm包：</p><div class="language-npm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm init</span></span></code></pre></div><blockquote><p>这个命令会引导你填写一些关于你的包的信息，比如名称、版本号、描述等。按照提示填写并确认这些信息。</p></blockquote><p><strong>配置package.json文件</strong> 在初始化步骤中，npm会自动生成一个package.json文件。你也可以手动创建该文件，并根据你的包的需求进行配置。</p><blockquote><p>其中一些重要的配置项包括：</p></blockquote><ul><li>“name”：你的包的名称，应该是唯一的。</li><li>“version”：你的包的版本号，遵循语义化版本规范。</li><li>“description”：对你的包的简要描述。</li><li>“main”：指定入口文件，即其他开发者在使用你的包时会引用的文件。</li><li>“keywords”：关键词数组，用于描述你的包。</li><li>“author&quot;和&quot;contributors”：作者和贡献者的信息。</li><li>“license”：选择适合你的包的开源许可证。</li></ul><p><strong>登录npm账号</strong> 在终端中输入以下命令登录你的npm账号：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm login</span></span></code></pre></div><p>按照提示输入你的用户名、密码和邮箱。</p><p><strong>发布npm包</strong> 登录成功后，运行以下命令将你的包发布到npm官方仓库中：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm publish</span></span></code></pre></div><p>更新npm包 如果你需要更新你的npm包，可以修改package.json文件中的版本号，并确保你的代码已经做出相应的修改。然后再次运行npm publish命令来发布新版本的包。</p><p>维护npm包 一旦你的包发布成功，你就需要维护它。这包括及时响应用户的反馈和问题，修复bug，以及不断改进和更新你的包。</p><h2 id="npm-login-没有出现-username-跳转cnpm注册的解决方法" tabindex="-1">npm login 没有出现 username,跳转cnpm注册的解决方法 <a class="header-anchor" href="#npm-login-没有出现-username-跳转cnpm注册的解决方法" aria-label="Permalink to &quot;npm login 没有出现 username,跳转cnpm注册的解决方法&quot;">​</a></h2><p>查看淘宝镜像</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm get registry</span></span></code></pre></div><p>如果不是<a href="https://registry.npmjs.org/" target="_blank" rel="noreferrer">https://registry.npmjs.org/</a> 重新设置</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm config set registry https://registry.npmjs.org/</span></span></code></pre></div><p>重新执行</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm login</span></span></code></pre></div><h2 id="如果开发一个npm包" tabindex="-1">如果开发一个npm包 <a class="header-anchor" href="#如果开发一个npm包" aria-label="Permalink to &quot;如果开发一个npm包&quot;">​</a></h2><ol><li>创建项目目录结构 <strong>确保你的项目目录结构类似于以下内容：</strong></li></ol><hr><p><img src="https://pic.imgdb.cn/item/668408b6d9c307b7e95abff7.png" alt="hh" title="图片"></p><ol start="2"><li>在项目根目录下运行以下命令初始化 package.json：<div class="language-npm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm init -y</span></span></code></pre></div></li><li>安装 TypeScript 和其他依赖 在项目根目录下运行以下命令：<div class="language-npm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install typescript --save-dev</span></span></code></pre></div></li><li>配置 tsconfig.json 在项目根目录下创建 tsconfig.json 文件，内容如下：</li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ljjkyyh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//包名</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//包的版本</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dist/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dist/index.d.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ljjk&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是一个关于全屏樱花开启和关闭的npm包&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//包的描述</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;typescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="5"><li>编写 TypeScript 代码<br> 在 src 目录下创建 index.ts</li></ol><blockquote><p>如果没有src请创建 这是一个九九乘法表的示例</p></blockquote><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateMultiplicationTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} * \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} = \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> table;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="6"><li>编译 TypeScript 代码<br> 在项目根目录下运行以下命令进行编译：</li></ol><div class="language-npm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  npx tsc</span></span></code></pre></div><blockquote><p>运行npx tsc后 项目中会多一个dist文件夹 并且目录下生成了 index.js 和 index.d.ts 文件。</p></blockquote><ol start="7"><li>发布到 npm<br> 在项目根目录下运行以下命令发布包：<div class="language-npm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">npm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm publish --access public</span></span></code></pre></div></li></ol><p>这样别人就可以用npm命令来安装你的包，并且使用了。 <br> 安装格式为:npm i 你的包名</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>这是一条信息，info后面的文字可修改</p></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>这是一个提示，tip后面的文字可修改</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>这是一条警告，warning后面的文字可修改</p></div><div class="danger custom-block"><p class="custom-block-title">危险</p><p>这是一个危险警告，danger后面的文字可修改</p></div><details class="details custom-block"><summary>点我查看代码</summary><p>这是一条详情，details后面的文字可修改</p></details>`,43)),i("ul",null,[i("li",null,[s[0]||(s[0]=n("VitePress ")),t(a,{type:"info",text:"default"})]),i("li",null,[s[1]||(s[1]=n("VitePress ")),t(a,{type:"tip",text:"^1.9.0"})]),i("li",null,[s[2]||(s[2]=n("VitePress ")),t(a,{type:"warning",text:"beta"})]),i("li",null,[s[3]||(s[3]=n("VitePress ")),t(a,{type:"danger",text:"caution"})])])])}const b=p(d,[["render",o]]);export{m as __pageData,b as default};
