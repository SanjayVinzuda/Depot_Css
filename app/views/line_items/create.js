 $('#notice').hide();
 if ($('#cart tr').length == 1) { $('#cart').show('blind', 1000); }

$('#cart').html("<%= escape_javascript render(@cart) %>");

$('#current_item').css({'background-color':'#334455'}).animate({'background-color':'#998877'}, 1000);



