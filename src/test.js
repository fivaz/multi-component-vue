//open child 1
window.dispatchEvent(new MessageEvent("message", {data:{namespace:"child-one"}}));
//open grand child 1
window.dispatchEvent(new MessageEvent("message", {data:{namespace:"child-one", action:"openGrandChildOne"}}));
//send grand child 1 data
window.dispatchEvent(new MessageEvent("message", {data:{namespace:"child-one:grand-child-one", action:"setList", payload:['a','b','c']}}));

