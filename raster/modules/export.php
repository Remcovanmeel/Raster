<?php 
    $session = json_decode($_POST['session']);
    $f = fopen('../cache/'.$session->sessionId.'.json','w');
    fwrite($f, json_encode($session));
    fclose($f);
?>