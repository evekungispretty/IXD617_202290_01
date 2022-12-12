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



function makeUpload($file, $folder) {
    $filename = microtime(true) . "_" . $_FILES[$file]['name'];

    if (@move_uploaded_file(
        $_FILES[$file]['tmp_name'],
        $folder.$filename
    )) return ["result"=>$filename];
    else return [
        "error"=>"File Upload Failed",
        "filename"=>$filename
    ];
}


function makeStatement($data) {
    $conn = makeConn();
    $type = @$data->type;
    $params = @$data->params;

    switch($type) {
        case "users_all":
            return makeQuery($conn, "SELECT * FROM `track_house`", $params);
        case "animals_all":
            return makeQuery($conn, "SELECT * FROM `track_house_item`", $params);
        case "locations_all":
            return makeQuery($conn, "SELECT * FROM `track_locations`", $params);
            
        case "user_by_id":
            return makeQuery($conn, "SELECT id,name,email,username,img, date_create FROM `track_house` WHERE `id`=?", $params);
        case "animal_by_id":
            return makeQuery($conn, "SELECT * FROM `track_house_item` WHERE `id`=?", $params);
        case "location_by_id":
            return makeQuery($conn, "SELECT * FROM `track_locations` WHERE `id`=?", $params);
        case "animals_by_user_id":
            return makeQuery($conn, "SELECT * FROM `track_house_item` WHERE `user_id`=?", $params);        
        case "locations_by_animal_id":
            return makeQuery($conn, "SELECT * FROM `track_house_item` WHERE `id`=?", $params);

        


        
        case "recent_animal_locations":
            return makeQuery($conn, "SELECT *
            FROM `track_house_item` a
            JOIN (
                SELECT lg.*
                FROM `track_locations` lg
                WHERE lg.id = (
                    SELECT lt.id
                    FROM `track_locations` lt
                    WHERE lt.house_id = lg.house_id
                    ORDER BY lt.date_create DESC
                    LIMIT 1
                )
            ) l
            ON a.id = l.house_id
            WHERE `user_id`=?
            ORDER BY l.house_id, l.date_create DESC
            ", $params);




        // case "recent_animal_locations":
        //     return makeQuery($conn, "SELECT * 
        //     FROM `track_house_item` a
        //     JOIN ( SELECT * FROM `track_locations`) l
        //     ON a.id = l.animal_id
        //     WHERE `user_id`=?", $params);

        

        case "check_signin":
            return makeQuery($conn, "SELECT `id` FROM `track_house` WHERE `username`=? AND `password` = md5(?)", $params);

        case "check_user":
            $result = makeQuery($conn, "SELECT `id` FROM `track_house`
            WHERE `username`=? OR `email`=?
            ", [$params[0],$params[1]]);
            if (count($result['result']) > 0)
                return ["error"=>"Username or Email already exists"];


        case "sort_animal":
            $result = makeQuery($conn, "SELECT * 
                FROM `track_house_item`  WHERE `user_id`=?
                ORDER BY `$data->column` $data->dir ");

        /* INSERT */

        case "insert_user":
            $result = makeQuery($conn, "SELECT `id`
            FROM `track_house`
            WHERE `username`=? OR `email`=?
            ", [$params[0],$params[1]]);
            if (count($result['result']) > 0)
                return ["error"=>"Username or Email already exists"];

            $result = makeQuery($conn, "INSERT INTO
            `track_house`
            (
                `username`,
                `email`,
                `password`,
                `img`,
                `date_create`
            )
            VALUES
            (
                ?,
                ?,
                md5(?),
                'https://via.placeholder.com/400/?text=USER',
                NOW()
            )
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["id" => $conn->lastInsertId()];



        case "insert_animal":
            $result = makeQuery($conn, "INSERT INTO
            `track_house_item`
            (
                `user_id`,
                `name`,
                `type`,
                `floor`,
                `description`,
                `img`,
                `date_create`,
                `lat`,
                `lng`
            )
            VALUES
            (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                NOW(),
                ?,
                ?
            )
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];




        case "insert_location":
            $result = makeQuery($conn, "INSERT INTO
            `track_house_item`
            (
                `lat`,
                `lng`
            )
            VALUES
            (
                ?,
                ?
            )
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];

    

        // case "insert_location":
        //     $result = makeQuery($conn, "INSERT INTO
        //     `track_locations`
        //     (
        //         `house_id`,
        //         `lat`,
        //         `lng`,
        //         `icon`,
        //         `date_create`
        //     )
        //     VALUES
        //     (
        //         ?,
        //         ?,
        //         ?,
        //         'https://via.placeholder.com/400/?text=ICON',
        //         NOW()
        //     )
        //     ", $params, false);

        //     if (isset($result['error'])) return $result;
        //     return ["result"=>"Success"];






        /* UPDATE */

        case "update_user":
            $result = makeQuery($conn, "UPDATE
            `track_house`
            SET
                `img` = ?,
                `name` = ?,
                `username` = ?,
                `email` = ?
            WHERE `id` = ?
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];
            
        case "update_password":
            $result = makeQuery($conn, "UPDATE
            `track_house`
            SET
                `password` = md5(?)
            WHERE `id` = ?
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];

        case "update_animal":
            $result = makeQuery($conn, "UPDATE
            `track_house_item`
            SET
                `img`= ?,
                `name` = ?,
                `type` = ?,
                `floor` = ?,
                `description` = ?
            WHERE `id` = ?
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];


        
        /* UPLOAD */
        case "update_user_photo":
            $result = makeQuery($conn, "UPDATE
            `track_house`
            SET `img` = ?
            WHERE `id` = ?
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];

        // case "update_animal_photo":
        //     $result = makeQuery($conn, "UPDATE
        //     `track_house_item`
        //     SET `img` = ?
        //     WHERE `id` = ?
        //     ", $params, false);

        //     if (isset($result['error'])) return $result;
        //     return ["result"=>"Success"];


            
        /* DELETE */


        case "delete_animal":
            $result = makeQuery($conn, "DELETE FROM
            `track_house_item`
            WHERE `id` = ?
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];

        case "delete_location":
            $result = makeQuery($conn, "DELETE FROM
            `track_locations`
            WHERE `id` = ?
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];


        case "delete_location":
            $result = makeQuery($conn, "DELETE FROM
            `track_locations`
            WHERE `house_id` = ?
            ", $params, false);

            if (isset($result['error'])) return $result;
            return ["result"=>"Success"];


        case "check_signin":
            return makeQuery($conn, "SELECT `id` FROM `track_house` WHERE `username`=? AND `password` = md5(?)", $params);


        default:
            return ["error"=>"No Matched Type"];
    }
}

if (!empty($_FILES)) {
    $result = makeUpload("image","../upload/");
    die(json_encode($result));
}

$data = json_decode(file_get_Contents("php://input"));

die(
    json_encode(
        makeStatement($data),
        JSON_NUMERIC_CHECK
    )
);