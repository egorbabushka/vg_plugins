(function(r,u,n,s,i,g,h){"use strict";const{FormText:f}=g.Forms;function y(){return React.createElement(f,null,"Hello, world!")}var l=[];const m=i.findByProps("sendBotMessage"),p=i.findByProps("sendMessage","receiveMessage"),v=async function(e,t){try{var T=`egorbabushka: ${e[0]}, ${e[1]}`;if(n.logger.log(T),e.length==2)var a=e[1].value;else var a=!1;const c="https://gptcustomapi.ieghorbabushka1.repl.co/v1/completion",d=JSON.stringify({content:e[0].value});n.logger.log(d),fetch(c,{method:"POST",headers:{"Content-Type":"text/plain"},body:d}).then(function(o){return o.json()}).then(function(o){return n.logger.log(`egorbabushka: ${a}`),a?p.sendMessage(t.channel.id,{content:o.choices[0].text}):m.sendBotMessage(t.channel.id,o.choices[0].text),{content:o.choices[0].text}})}catch(c){n.logger.error(c)}},b=function(){return h.before("sendMessage",p,function(e){try{s.toasts.open({content:JSON.stringify(e[1])});let t="# "+e[1].content.replaceAll(`
`,`
# `);e[1].content=t}catch(t){n.logger.error(t)}})},P=function(){return u.registerCommand({name:"Ask_ChatGPT",displayName:"Ask ChatGPT",displayDescription:"ask chatgpt",description:"",options:[{name:"prompt",description:"prompt",type:3,required:!0,displayName:"Prompt",displayDescription:"Prompt"},{name:"send",description:"send",type:5,required:!1,displayName:"IsSend",displayDescription:"Send reply of ChatGPT or not"}],execute:v,applicationId:"-1",inputType:1,type:1})};var M={onLoad:function(){s.toasts.open({content:"hello, world"}),l=[b(),P()]},onUnload:function(){s.toasts.open({content:"goodbye, test"});for(const e of l)e()},settings:y};return r.default=M,Object.defineProperty(r,"__esModule",{value:!0}),r})({},vendetta.commands,vendetta,vendetta.metro.common,vendetta.metro,vendetta.ui.components,vendetta.patcher);
