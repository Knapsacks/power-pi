$(document).ready(function(){
//alert();
$("#submit").click(function(){
	//alert();
	var username=$("#username").val();
	var password=$("#password").val();
	$.ajax({
						type: "POST",
						url: 'login.php',
						data: {
							'id': username,
							'pass': password,
						},
						success: function(data){
							alert(data);
							if(data==1){
								window.location.replace("dashboard.html");
							}
							else{
								alert("Wrong Username or Password")
							}
						}
						});
	});
})