var listeclient = {
	"clients" : [{
	"email" : "aze",
	"password" : "032042"
}]
}

$ (document).ready(function(){

	$ ("#btnLogin").click(function () {
	// body...
		$.each(listeclient.clients,function(idx,elem){
			if ($("#email").val()==elem.email && $("#password").val()==elem.password) {
			location.href="#pagecompte";
			}
		})
	})
})