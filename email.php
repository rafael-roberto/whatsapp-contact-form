<?php

    $destinatarioEmail = $_POST['wremetente'];
    $emailContato = $_POST['wemail'];
    $nomeContato = $_POST['wnome'];
    $telefoneContato = $_POST['wfone'];
    $textoWhatsApp = $_POST['wmensagem'];
    $telefoneWhatsApp = $_POST['wwhats'];
    $assuntoEmail = "Lead via WhatsApp: Contato de " . $nomeContato;
    $mensagemEmail = "Nome: " . $nomeContato . "\n\n" . "Telefone para contato: " . $telefoneContato . "\n\n" . "E-mail: " . $emailContato;

    $enviarEmail = mail($destinatarioEmail,'=?utf-8?B?'.base64_encode($assuntoEmail).'?=',$mensagemEmail);
    if (!$enviarEmail) {
        $erro = error_get_last()['message'];
        echo "<script type='text/javascript'>
        window.close();
        </script>";
    } else {
        echo "<script type='text/javascript'>
        location.href = 'https://api.whatsapp.com/send?phone=".$telefoneWhatsApp."&text=".$textoWhatsApp."';
        </script>";
    }

?>