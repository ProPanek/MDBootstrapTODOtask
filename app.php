<?php 
$title = $_POST["title"];
$description = $_POST["description"];


if(strlen($title) > 10 && strlen($title) < 255 && strlen($description) < 255){
    $object = (object) ['title' => $title, 'description' => $description, 'message' => 'wszystko się zgadza', 'status' => true ];
    echo json_encode($object);
}
else{
    $object = (object) ['message' => 'Za krótki tytuł, bądź też przekroczyłeś limit znaków', 'status' => false ];
    echo json_encode($object);
}
?>