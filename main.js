    canvas=document.getElementById("my_canvas");
    ctx= canvas.getContext("2d");

    rover_width = 100;
    rover_height= 90;

    rover_X= 10;
    rover_Y= 10;

    rover_X2= 10;
    rover_Y2= 110;

    background_image= "abc.webp";
    rover_image= "download (1).png";
    rover_image2= "download.png";

    function add(){
        background_IMGtag = new Image();
        background_IMGtag.onload= upload_background;
        background_IMGtag.src= background_image;

        rover_IMGtag = new Image();
        rover_IMGtag.onload= upload_rover;
        rover_IMGtag.src= rover_image;

        rover_IMGtag2 = new Image();
        rover_IMGtag2.onload= upload_rover2;
        rover_IMGtag2.src= rover_image2;

    }

function upload_background(){
    ctx.drawImage(background_IMGtag, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_IMGtag, rover_X, rover_Y, rover_width, rover_height);
}

function upload_rover2(){
    ctx.drawImage(rover_IMGtag2, rover_X2, rover_Y2, rover_width, rover_height);
}

window.addEventListener("keydown", key_pressing1);

function key_pressing1(e){
    keypress= e.keyCode;
console.log(keypress);
    if(keypress == '38'){
        upp();
        console.log("up");
    }

    if(keypress == '40'){
        down();
        console.log("down");
    }

    if(keypress == '39'){
        right();
        console.log("right");
    }

    if(keypress == '37'){
        left();
        console.log("left");
    }

    if(keypress == '87'){
        upp2();
        console.log("up");
    }

    if(keypress == '83'){
        down2();
        console.log("down");
    }

    if(keypress == '68'){
        right2();
        console.log("right");
    }

    if(keypress == '65'){
        left2();
        console.log("left");
    }
}

// Car Racing game ADV-C84-Student-Project COMPLETE

//Car Racing game ADV-C85-Student-Project START

//car1 code start

function upp(){
    if(rover_Y >= 0){
        rover_Y = rover_Y-5;
        console.log("location of car1 y =" + rover_Y);
        upload_background();
        upload_rover(); 
        upload_rover2(); 
    }
    }
    
    function down(){
        if(rover_Y <= 500){
            rover_Y = rover_Y+5;
            console.log("location of car1 y =" + rover_Y);
            upload_background();
            upload_rover(); 
            upload_rover2(); 
        }
        }
    
        function left(){
            if(rover_X >= 0){
                rover_X = rover_X-5;
                console.log("location of car1 x =" + rover_X);
                upload_background();
                upload_rover();
                upload_rover2();  
            }
            }
    
            function right(){
                if(rover_X <= 700){
                    rover_X = rover_X+5;
                    console.log("location of car1 x =" + rover_X);
                    upload_background();
                    upload_rover();
                    upload_rover2();  
                }
                }

                //car1 code complete

                //cra2 code start

                function upp2(){
                    if(rover_Y2 >= 0){
                        rover_Y2 = rover_Y2-5;
                        console.log("location of car2 y =" + rover_Y2);
                        upload_background();
                        upload_rover2(); 
                        upload_rover(); 
                    }
                    }
                    
                    function down2(){
                        if(rover_Y2 <= 500){
                            rover_Y2 = rover_Y2+5;
                            console.log("location of car2 y =" + rover_Y2);
                            upload_background();
                            upload_rover2(); 
                            upload_rover(); 
                        }
                        }
                    
                        function left2(){
                            if(rover_X2 >= 0){
                                rover_X2 = rover_X2-5;
                                console.log("location of car2 x =" + rover_X2);
                                upload_background();
                                upload_rover2(); 
                                upload_rover(); 
                            }
                            }
                    
                            function right2(){
                                if(rover_X2 <= 700){
                                    rover_X2 = rover_X2+5;
                                    console.log("location of car2 x =" + rover_X2);
                                    upload_background();
                                    upload_rover2(); 
                                    upload_rover(); 
                                }
                                }

                                //car2 code complete

                                //if car1 win code start

                                if(rover_X2 >= 700){

                               console.log("Car_2 WON!!!!!!")
                                    document.getElementById("game_abc").innerHTML="Car_2 WON!!!!!!!!!!!!!!!!!!!!!!!!!!";

                                }

                                //if car1 win code complete

                                //if car2 win code start

                                if(rover_X >= 700){

                                    console.log("Car_1 WON!!!!!!")
                                         document.getElementById("game_abc").innerHTML="Car_1 WON!!!!!!!!!!!!!!!!!!!!!!!!!!";
     
                                     }

                                     //if car2 win code complete

                                     //Car Racing game ADV-C85-Student-Project complete

                                     //THE PROJECT HAS BEEN COMPLETED wwwooowww
