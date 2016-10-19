<?php
// On vérifie si les champs sont vides
if(empty($_POST['name'])  		||
	empty($_POST['email']) 		||
	empty($_POST['message'])	||
	!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
{
	echo "Aucun arguments !";
	return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Crée le contenu du mail et l'envoie	
$to = 'saberpendradon@gmail.com';
$email_subject = "Formulaire envoyé par : $name";
$email_body = "Vous avez un nouveau message. \n\n".
"Description :\n \nName: $name \n ".
"Email : $email_address\n Message \n $message";
$headers = "From: contacts@gmail.com\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>