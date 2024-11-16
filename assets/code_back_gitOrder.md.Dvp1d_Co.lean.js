import{_ as a,c as i,a5 as n,o as t}from"./chunks/framework.h-DYEFKW.js";const g=JSON.parse('{"title":"git 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"code/back/gitOrder.md","filePath":"code/back/gitOrder.md","lastUpdated":null}'),l={name:"code/back/gitOrder.md"};function e(p,s,h,c,o,d){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="git-常用命令" tabindex="-1"><strong>git</strong> 常用命令 <a class="header-anchor" href="#git-常用命令" aria-label="Permalink to &quot;**git** 常用命令&quot;">​</a></h1><h2 id="本地项目推送到github仓库中" tabindex="-1">本地项目推送到github仓库中 <a class="header-anchor" href="#本地项目推送到github仓库中" aria-label="Permalink to &quot;本地项目推送到github仓库中&quot;">​</a></h2><blockquote><p>在git命令界面依次下面命令</p></blockquote><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1：git init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2：git add .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3：git commit -m &quot;任意提交消息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4：git branch -m master main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5：git remote add origin 仓库地址的url</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6：git push -u origin main</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p><strong>如果第六步推送失败，执行下面命令强制推送</strong></p></div><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git push -u origin main --force</span></span></code></pre></div><h2 id="清空github仓库中所有文件及文件夹" tabindex="-1">清空github仓库中所有文件及文件夹 <a class="header-anchor" href="#清空github仓库中所有文件及文件夹" aria-label="Permalink to &quot;清空github仓库中所有文件及文件夹&quot;">​</a></h2><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把仓库克隆到本地</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1：git clone 仓库的url</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入本地仓库</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2：cd 你克隆仓库的名字</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除所有文件及文件夹</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3：git rm -r *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交操作消息</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4：git commit -m &#39;清空仓库&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送到仓库中</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5：git push</span></span></code></pre></div><h3 id="清除-dns-缓存-ipconfig-flushdns" tabindex="-1">清除 DNS 缓存 ipconfig /flushdns <a class="header-anchor" href="#清除-dns-缓存-ipconfig-flushdns" aria-label="Permalink to &quot;清除 DNS 缓存 ipconfig /flushdns&quot;">​</a></h3><h3 id="取消代理" tabindex="-1">取消代理 <a class="header-anchor" href="#取消代理" aria-label="Permalink to &quot;取消代理&quot;">​</a></h3><div class="language-git vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">git</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config --global --unset http.proxy </span></span>
<span class="line"><span>git config --global --unset https.proxy</span></span></code></pre></div>`,11)]))}const k=a(l,[["render",e]]);export{g as __pageData,k as default};
