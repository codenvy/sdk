/*
   Predefined greeting pages
*/

if (window['IDE'] && window['IDE']['config']) {
	window['IDE']['config'].greetings = {
	  // user anonymous
	  "anonymous": null,
  
	  // user authenticated
	  "authenticated": null,
  
	  // anonymous user in temporary workspace
	  "anonymous-workspace-temporary": "/ide/_app/greetings/temporary-workspace-rightpane-not-authenticated.html",

	  // anonymous user in temporary private workspace
	  "anonymous-workspace-temporary-private": "/ide/_app/greetings/temporary-private-workspace-rightpane-not-authenticated.html",
  
	  // authenticated user in temporary workspace
	  "authenticated-workspace-temporary": "/ide/_app/greetings/temporary-workspace-rightpane-authenticated.html",
  
	  // authenticated user in temporary private workspace
	  "authenticated-workspace-temporary-private": "/ide/_app/greetings/temporary-private-workspace-rightpane-authenticated.html",
  
	  // anonymous user, temporary workspace, google-mbs-client-android project
	  "anonymous-workspace-temporary-google-mbs-client-android": "/ide/_app/greetings/temporary-workspace-androidMBS-rightpane-not-authenticated.html",
  
	  // authenticated user, temporary workspace, google-mbs-client-android project
	  "authenticated-workspace-temporary-google-mbs-client-android": "/ide/_app/greetings/temporary-workspace-androidMBS-rightpane-authenticated.html"
	};
}

