//open child 1
window.dispatchEvent(new MessageEvent("message", {data:{component:"child-one", action:"changeComponent"}}));
//open grand child 1
window.dispatchEvent(new MessageEvent("message", {data:{component:"child-one", action:"openGrandChildOne"}}));
//send grand child 1 data
window.dispatchEvent(new MessageEvent("message", {data:{component:"grand-child-one", action:"setList", payload:['a','b','c']}}));

