<?php

function makeConn() {
    include_once "auth.php";
    try {
        $conn = new PDO(...Auth());
        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        die('{"error":"'.$e->getMessage().'"}');
    }
}


function fetchAll($result) {
    $a = [];
    while($row = $result->fetch(\PDO::FETCH_OBJ)) $a[] = $row;
    return $a;
}



function makeQuery($conn,$prep,$params,$makeResults=true) {
    try {
        if (count($params)) {
            $stmt = $conn->prepare($prep);
            $stmt->execute($params);
        } else {
            $stmt = $conn->query($prep);
        }

        $result = $makeResults ? fetchAll($stmt) : [];

        return [
            "result"=>$result
        ];
    } catch (PDOException $e) {
        return ["error"=>"Query Failed: ".$e->getMessage()];
    }
}

function makeStatement($data) {
    $conn = makeConn();
    $type = @$data->type;
    $params = @$data->params;

    switch($type) {
        case "users_all":
            return makeQuery($conn, "SELECT * FROM `track_houses`", $params);
        case "houses_all":
            return makeQuery($conn, "SELECT * FROM `track_house_item`", $params);
        case "locations_all":
            return makeQuery($conn, "SELECT * FROM `track_locations`", $params);

        case "user_by_id":
            return makeQuery($conn, "SELECT * FROM `track_houses` WHERE `id`=?", $params);
        
        case "user_by_id":
            return makeQuery($conn, "SELECT * FROM `track_houses` WHERE `id`=?", $params);
    


        default:
            return ["error"=>"No Matched Type"];
    }
}

$data = json_decode(file_get_Contents("php://input"));

die(
    json_encode(
        makeQuery(
            makeConn(),
            "SELECT * FROM track_house WHERE user_id=4 AND type='dog'",
            []
        )
    )
);