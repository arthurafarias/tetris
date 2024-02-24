(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(t){if(t.ep)return;t.ep=!0;const c=i(t);fetch(t.href,c)}})();const s=document.querySelector("canvas"),u=s.getContext("2d"),a=20,E=14,L=30;s.width=a*E;s.height=a*L;u.scale(a,a);const y=[[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,1,1,0]],[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[1,1,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]],o={block:x(),x:0,y:0},f=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0,0,0,0,0,1,1]];function O(){u.fillStyle="black",u.fillRect(0,0,s.width,s.height)}function R(){f.forEach((e,n)=>{e.forEach((i,r)=>{i===1&&(u.fillStyle="aqua",u.fillRect(r,n,1,1))})})}function v(){o.block.forEach((e,n)=>{e.forEach((i,r)=>{i===1&&(u.fillStyle="green",u.fillRect(o.x+r,o.y+n,1,1))})})}let m=0,h=100;function A(){O(),R(),v()}function b(e=0){S()&&(window.alert("Game Over"),I()),P(),e-m>h&&(m=e,k()&&M()),A(),window.requestAnimationFrame(b)}window.onkeydown=function(e){switch(e.code){case"ArrowDown":k()&&M();break;case"ArrowUp":B();break;case"ArrowLeft":D();break;case"ArrowRight":C();break}};b();function k(){if(o.y++,d())return o.y--,!0}function B(){if(o.block=p(o.block,90),d())return o.block=p(o.block,-90),!0}function C(){if(o.x++,d())return o.x--,!0}function D(){if(o.x--,d())return o.x++,!0}function d(){return o.block.find((e,n)=>e.find((i,r)=>{var t;return i!==0&&((t=f[o.y+n])==null?void 0:t[o.x+r])!==0}))}function M(){o.block.forEach((e,n)=>{e.forEach((i,r)=>{i===1&&(f[o.y+n][o.x+r]=1)})}),o.x=0,o.y=0,o.block=x()}function x(){return y[Math.floor(Math.random()*y.length)]}function p(e,n){const i=n*Math.PI/180,r=[[Math.cos(i),-Math.sin(i)],[Math.sin(i),Math.cos(i)]],t=structuredClone(e);for(let c=0;c<e.length;c++)for(let l=0;l<e[c].length;l++){const g=Math.round(c*r[0][0]+l*r[0][1]),w=Math.round(c*r[1][0]+l*r[1][1]);t[g-1+e.length][w]=e[c][l],console.log([c,l],[g,w])}return t}function P(){return f.forEach((e,n)=>{e.reduce((r,t)=>r+t)===e.length&&(f.splice(n,1),f.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0]),h=h/2)})}function S(){return f[0].reduce((e,n)=>e+n)>0}function I(){f.forEach((e,n)=>{e.forEach((i,r)=>{f[n][r]=0})})}
