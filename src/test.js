//open child 1
window.dispatchEvent(new MessageEvent("message", {data:{component:"child-one", action:"changeComponent"}}));
//open grand child 1
window.dispatchEvent(new MessageEvent("message", {data:{component:"child-one", action:"openGrandChildOne"}}));
//send grand child 1 data
window.dispatchEvent(new MessageEvent("message", {data:{component:"grand-child-one", action:"setFoo", payload:['a','b','c']}}));

//open child 2
window.dispatchEvent(new MessageEvent("message", {data:{component:"child-two", action:"changeComponent"}}));
//open grand child 3
window.dispatchEvent(new MessageEvent("message", {data:{component:"child-two", action:"openGrandChildTwo"}}));
//send grand child 3 data
window.dispatchEvent(new MessageEvent("message", {data:{component:"grand-child-two", action:"setBar", payload:[1,2,3]}}));

