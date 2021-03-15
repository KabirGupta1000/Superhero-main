var Canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_width = 30;
block_height = 30;
player_object = "";
block_img_object = "";
function Player_Update() {
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;
    });
}
function Player_Update() {
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        Canvas.add(player_object);
    });
}
    function newImage(){
        fabric.Image.fromURL(get_Image , function(Img){
            block_img_object = Img;
            block_img_object.scaleToWidth(block_width);
            block_img_object.scaleToHeight(block_height);
            block_img_object.set({
                top : player_y,
                left : player_x
            });
            Canvas.add(block_img_object);

    });
}
window.addEventListener('keydown' , my_keydown);
function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress == '80'){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current width").innerHTML = block_height;
        document.getElementById("current height").innerHTML = block_width;
        }
    if(keypress == '70'){
        newImage('ironman_face.png')
        console.log("f");
    }
    if(keypress == '66'){
        newImage('spiderman_body.png')
        console.log("b");
    }
    if(keypress == '76'){
        newImage('hulk_legs.png')
        console.log("l");
    }
    if (keypress == '82'){
        newImage('thor_right_hand.png')
        console.log("r");
    }
    if (keypress == '72'){
        newImage('captain_america_left_hand.png')
        console.log("h");
    }
    if (keypress == '38'){
       up();
        console.log("up");
    }
    
}
function up(){
    if(player_y>0){
        player_y = player_y - block_height;
        Canvas.remove(player_object);
        Player_Update();
    }
}
function down(){
    if(player_y<480){
        player_y = player_y + block_height;
        Canvas.remove(player_object);
        Player_Update();
    }
}
function left(){
    if(player_x>0){
        player_x = player_x - block_width;
        Canvas.remove(player_object);
        Player_Update();
    }
}
function right(){
    if(player_x<800){
        player_x = player_x +block_height;
        Canvas.remove(player_object);
        Player_Update();
    }
}