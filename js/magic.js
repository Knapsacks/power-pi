$(document).ready(function(){
   $('#button1').click(function(){
       $.ajax({
                url:"https://ebullience.herokuapp.com/login.php",
                data:{
                    "mac": "131996026774851",
                },
                cache: false,
                dataType: 'jsonp',
                success:function(json){
                    console.log(json);
                    $.each(json, function(key, val) {
                        console.log(val[3]);
                        if(val[2]=='0'){
                            var status='Discharging';
                        }
                        else{
                            var status='Charging';
                        }
                        $('#realtimedata').append("<tr><td>"+val[0]+"</td><td>"+val[1]+"%</td><td>"+status+"</td><td>"+val[3]+"</td></tr>");
                    });
                },
                error:function(){
                    alert("Please Try Again Later!");
                }
            });
   });
});