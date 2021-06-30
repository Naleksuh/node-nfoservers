const fetch = require('node-fetch');

function NFO_SendRequest(email, password, servicetype, servicename, controlpage, posttype){
	fetch("https://www.nfoservers.com/control/" + controlpage, {
    		"headers": {
        		"Content-Type": "application/x-www-form-urlencoded",
        		"Cookie": "email=" + email + ";password=" + password + ";cookietoken=a"
    		},
		"body": "cookietoken=a&name=" + servicename + "&typeofserver=" + servicetype + "&" + posttype,
		"method": "POST"
	});
}

function NFO_ShutDownVDS(email, password, service){
	NFO_SendRequest(email, password, "virtual", service, "virtcontrol.pl", "power=off");
}

function NFO_RestartVDS(email, password, service){
	NFO_SendRequest(email, password, "virtual", service, "virtcontrol.pl", "power=softoff_then_off_then_on");
}

function NFO_ReinstallVDS(email, password, service, newos){
	NFO_SendRequest(email, password, "virtual", service, "virtcontrol.pl", "install=" + newos + "&install_confirm=1");
}

function NFO_ChangeVNCPassword(email, password, service){
	NFO_SendRequest(email, password, "virtual", service, "virtserveraccess.pl", "changevnc=Change+VNC+password");
}
