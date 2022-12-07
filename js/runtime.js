var now = new Date;
function createtime(){now.setTime(now.getTime()+1e3);
    /* e, t, a这3个参数与旅行者号相关 */
var e = new Date("02/27/2022 15:00:00"),    /* 这是时间单纯是凑出来的: 可能需要经常校正 */
    t = Math.trunc(234e8+(now-e)/1e3*17),
    a = (t/1496e5).toFixed(6),
    /* 以下参数与网站运行时间相关 */
    o = new Date("09/28/2018 10:25:12"),   /* 这是blog运行的起始时间 */
    r = (now-o)/1e3/60/60/24,
    i = Math.floor(r),
    n = (now-o)/1e3/60/60-24*i,
    s = Math.floor(n);
1 == String(s).length&&(s="0"+s);
var l = (now-o)/1e3/60-1440*i-60*s,
    g = Math.floor(l);1==String(g).length&&(g="0"+g);
var d = (now-o)/1e3-86400*i-3600*s-60*g,
    b = Math.round(d);1==String(b).length&&(b="0"+b);
let c = "";
    c = s<18&&s>=9?`<img class='boardsign' src='https://img.shields.io/badge/Coffee-Working%20(%E3%84%92o%E3%84%92)-1ade23?style=social&logo=Buy%20Me%20A%20Coffee' title='什么时候能够实现财富自由呀~'><br> Boyu's blog has been up and running for ${i} days ${s} hours ${g} minutes ${b} seconds <i id="heartbeat" class='fas fa-heartbeat'></i> <br> The distance of Voyager 1 from Earth is currently ${t} km, equivalent to ${a} AU 🚀 <br> 第一，生存是文明的第一需要；第二，文明不断增长和扩张，但宇宙中的物质总量保持不变 ✨ `:`<img class='boardsign' src='https://img.shields.io/badge/Coffee-Relaxing%20(o%EF%BE%9F%E2%96%BD%EF%BE%9F)o-6adea8?style=social&logo=coffeescript' title='下班了就该开开心心地玩耍~'><br> Boyu's blog has been up and running for ${i} days ${s} hours ${g} minutes ${b} seconds <i id="heartbeat" class='fas fa-heartbeat'></i> <br> The distance of Voyager 1 from Earth is currently ${t} km, equivalent to ${a} AU 🚀 <br> 第一，生存是文明的第一需要；第二，文明不断增长和扩张，但宇宙中的物质总量保持不变 ✨ `,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)}
    setInterval((()=>{createtime()}),1e3);
    /* 内容要修改，两个重复的部分都要修改 */
    /* 中间的长链接是social shields，可以直接输入浏览器中边看边改 */