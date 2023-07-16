(function(windows){
	var byeSpeaker ={};
	var speakword = "Good Bye";
	 byeSpeaker.speak=function(names) {
  console.log(speakword + " " + names);
}
window.byeSpeaker=byeSpeaker;
})(window);