var Canvas = document.getElementById("nCanvas");
var Ctx = Canvas.getContext("2d");

/////////////////////////////////////////////////////////////////////////////////
var gameWidth=590;
var gameHeight=443;
var choosechar=false;
var char=0;
var load_ing=true;
var show = false;
var title = true;
var menu = true;
var howtoplay = false;
var credit = false;
var option = false;
var pause = false;
var bgm = true;
var effect = true;
var quit = false;
var over = false;
var winner = false;
var loser = false;
var resume = false;
//stage//
var stage=0;
var posX=[0,10,20,30,40,50,60,70,80,90,100,
		  110,120,130,140,150,160,170,180,190,200,
		  
		  210,220,230,240,250,260,270,280,290,300,
		  310,320,330,340,350,360,370,380,390,400,
		  
		  410,420,430,440,450,460,470,480,490,
		  500,510,520,530,540,550,560,570,580,590
		  ];
var posY=[
		  ///stage 1++
		  [60,60,60,50,40,30,30,40,35,35,40,
		  40,40,50,60,65,80,90,90,85,85,
		  
		  85,85,85,95,100,105,110,115,120,170,
		  160,150,140,140,135,130,125,115,110,100,
		  
		  95,90,85,80,80,40,15,25,20,15,
		  15,20,20,20,15,15,15,15,15,15],
		  ///stage 2++
		  [90,90,85,85,85,80,85,85,85,85,85,
		  85,85,85,90,90,90,90,95,95,100,
		  
		  105,110,115,120,125,130,140,145,150,150,
		  145,145,145,145,145,145,150,150,155,160,
		  
		  165,160,145,140,130,125,120,115,110,105,
		  105,105,105,105,105,105,105,105,105,105],
		  ///stage 3
		  [70,70,70,70,70,70,70,70,75,75,80,
		  80,85,85,90,90,95,100,105,110,115,
		  
		  120,125,130,135,140,145,145,145,145,145,
		  138,125,115,105,100,100,95,95,95,95,
		  
		  95,100,100,105,105,100,95,90,90,85,
		  85,84,83,82,81,80,81,82,83,84],
		  ///stage 4++
		  [10,10,10,10,10,15,20,25,35,40,50,
		  60,60,70,70,75,80,90,85,80,70,
		  
		  70,65,60,60,55,50,50,55,60,60,
		  60,60,65,65,70,75,80,90,95,100,
		  
		  105,110,120,120,120,120,120,120,115,110,
		  110,105,100,100,95,90,90,80,80,80],
		  ///stage 5
		  [80,80,80,80,80,80,80,80,80,83,85,
		  95,95,100,105,105,110,110,110,110,115,
		  
		  120,120,135,135,135,300,300,300,300,300,
		  300,300,300,300,135,135,135,120,120,115,
		  110,110,110,110,105,105,100,95,95,
		  85,83,80,80,80,80,80,80,80,80,80]
			];
//hero//
var hanimate=false;
var delaya=0;
var hwalk=false;
var heroX=30;

var heroY=205;
var deltaX=0;
var hero_width=150;
var hero_height=150;
var hero_frameX=0;
var hero_frameY=0;
var heroDirection=1;
var speed=1;
var heroHP=100;
var bonusdamage=1;
//enemy//
var eanimate=false;
var ewalk=false;
var nEnemy=[1,2,3,4,1];
var hasHit=0;
var eActive=-1;
var enemyHP=[[100],[100,100],[100,100,100],[100,100,100,100],[100]];
var enemyX=[[500],[450,520],[400,480,540],[330,410,480,540],[500]];
var enemyY=[[184],[284,274],[284,274,250],[250,289,275,254],[200]];
var enemy_width=150;
var enemy_height=150;
var enemy_frameX=0;
var enemy_frameY=0;
var walk=0;
var enemyDirection=0;
var check=0;
//Item//
var item_type2=0;
var item_type3=0;
var itemX=0;
var itemY=0;
var nslot=2;
var slotX=0;
var slotY=0;
var slotAvialable=true;
var item_frame=0;
var c=0;
var nbox=0;
var boxX=0;
var boxY=0;
var ranBox=false;
var s2=false;
var s3=false;
var type=0;
var damage=10;
var poison=false;
var np=0;
//wind//
var nwind=0;
var windX=0;
var windY=0;
//time//
var count=0;
var remainTime=10;
var t1=0;
var t2=0;
//angle//
var angleX=0;
var angleY=0;
var angle_frameX=0;
var angle_width=50;
var angleX=0;
var angleY=0;
//bullet//
var bulletX=0;
var bulletY=0;
var ebulletX=0;
var ebulletY=0;
//turn//
var shoot=false;
var turnActive=true;
var hTurn=true;
var eTurn=false;
var time=10;
var y=0;
var up=true;
var delay=0;
var timePause=false;
var turn = 1;
var randomTurn = true;
//Projectile//
var a=5;
var angle=0;
var arrowPx=0;  
var arrowPy=0;
var tP=0;
var V=0;
var U=0;
var gP=10;
var Sy = new Array();
var Sx = new Array();
var plotX=0;
var shoot = false;
var step=7;
var pt=0;
var cal=false;
var showBullet=false;
var eshowBullet=false;
//key//
var isUpKey = false;
var isDownKey = false;
var isLeftKey = false;
var isRightKey = false;
var isSpaceKey = false;
var isZKey = true;
var isXKey = false;
var isCKey = false;
var isLeftClick = false;
//Collision//
var hit=false;
//loading//
var l=0;
var load_frame=0;
//hp//
var hp_frameX=0;
var o=0;
//power//
var pw_frameX=0;
//image//
var img_menu = new Image();
var img_howtoplay = new Image();
var img_credit = new Image();
var img_option = new Image();
var img_pause = new Image();
var img_pause2 = new Image();
var img_bgm = new Image();
var img_effect = new Image();
var img_char= new Image();
var img_BG = new Image();
var img_subBG = new Image();
var img_avatar1 = new Image();
var img_avatar2 = new Image();
var img_hero = new Image();
var img_enemy = new Image();
var img_wind = new Image();
var img_time = new Image();
var img_time1 = new Image();
var img_time2 = new Image();
var img_minioption = new Image();
var img_slot = new Image();
var img_bullet = new Image();
var img_angle = new Image();
var img_arrow = new Image();
var img_item1 = new Image();
var img_item2 = new Image();
var img_item3 = new Image();
var img_hp = new Image();
var img_pw = new Image();
var img_loading = new Image();
var img_over1 = new Image();
var img_over2 = new Image();
var img_win = new Image();
var img_loser = new Image();
var img_box = new Image();
var img_title =  new Image();
var img_back =  new Image();
var img_poison =  new Image();
var img_re =  new Image();
/////sound/////////////////////////////
var s_effect = new Audio();
var s_bgm = new Audio();
/////////////////////////////////////////////////////////////////////////////////
var fps = 50;
window.addEventListener('load',initial,false);
function initial()
{
	window.setInterval(gameLoop,1000/fps)
}
/////////////////////////////////////////////////////////////////////////////////
function gameLoop() {
    Ctx.clearRect(0, 0, 591, 443);
    if (menu == true) {
        if (title == true) {
            delay++;
            if (delay > 60) {
                delay = 0;
                title = false;
            }
            img_title.src = "images/title.png";
            img_bgm.src = "images/bgm.png";
            img_effect.src = "images/effect.png";
            img_pause.src = "images/pause.png";
            Ctx.drawImage(img_title, 0, 0, gameWidth, gameHeight);
        }
        else {
            document.addEventListener('mousedown', checkMouseDown, false);
            drawMenu();
        }
    }
    else if (choosechar == false) {
        delay++;
        img_char.src = "images/char.jpg";
        Ctx.drawImage(img_char, 0, 0, gameWidth, gameHeight);
        document.addEventListener('mousedown', checkMouseDown, false);
    }
    else if (load_ing == false && menu == false && choosechar == true) {

        document.addEventListener('mousedown', checkMouseDown, false);

        if (pause == false && over == false && loser == false && resume == false) {

            document.addEventListener('keydown', checkKeyDown, false);
            document.addEventListener('keyup', checkKeyUp, false);


            drawBackground();

            drawBullet();
            drawSubBg();

            drawAngle();


            drawEnemy();

            
            drawHP();
            drawEnemyHP();
            drawPower();
            drawAvatar();
            drawSlot();
            Turn();
            drawHero();

            drawItem();
            drawBox();
            checkComplete();
            drawMiniOption();
        }

        WinLose();
        drawResumeGame();
        if (pause == true) {
            img_pause2.src = "images/pause3.png";
            Ctx.drawImage(img_pause2, 0, 0, 590, 443, 0, 0, gameWidth, gameHeight);
        }
    }
    else if (load_ing == true) {
        Loading();
    }
    if (show == true) {
        document.getElementById("myVelocity").innerHTML = "V : " + V + "  | Angle : " + a + "  | hero HP : " + heroHP + "  | enemy HP : " + enemyHP[stage][0] + " " + enemyHP[stage][1] + " " + enemyHP[stage][2] + " " + enemyHP[stage][3];
        document.getElementById("howto1").innerHTML = bgm + " " + load_ing;
        document.getElementById("howto2").innerHTML = showBullet ;
        document.getElementById("howto3").innerHTML = "Press Spacebar to shot";
        document.getElementById("Turn").innerHTML = "Turn : " + turn + "  HeroX : " + heroX;
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawMenu() {
    if (menu == true && howtoplay == false && credit == false) { img_menu.src = "images/bg.png"; }
    else if (howtoplay == true) { img_menu.src = "images/howtoplay.png"; }
    else if (credit == true) { img_menu.src = "images/credit3.png"; }
    Ctx.drawImage(img_menu, 0, 0, gameWidth, gameHeight);
}
/////////////////////////////////////////////////////////////////////////////////
function drawBackground() {
    if (stage == 0) {
        img_BG.src = "images/s1.png";
    }
    if (stage == 1) {
        img_BG.src = "images/s2.png";
    }
    if (stage == 2) {
        img_BG.src = "images/s3.png";
    }
    if (stage == 3) {
        img_BG.src = "images/s4.png";
    }
    if (stage == 4) {
        img_BG.src = "images/s5.png";
    }

    Ctx.drawImage(img_BG, 0, 0, gameWidth, gameHeight);
}
/////////////////////////////////////////////////////////////////////////////////
function drawSubBg() {
    if (stage == 0)
        img_subBG.src = "images/11.png";
    if (stage == 1)
        img_subBG.src = "images/21.png";
    if (stage == 2)
        img_subBG.src = "images/31.png";
    if (stage == 3)
        img_subBG.src = "images/41.png";
    if (stage == 4)
        img_subBG.src = "images/51.png";
    Ctx.drawImage(img_subBG, 0, 0, 800, 276, 0, 239, gameWidth, 204);
}
function drawAvatar() {
    img_avatar1.src = "images/avatar.png";
    if (char == 0)
        img_avatar2.src = "images/h1.png";
    if (char == 1)
        img_avatar2.src = "images/h2.png";
    if (char == 2)
        img_avatar2.src = "images/h3.png";

    Ctx.drawImage(img_avatar1, 0, 0, 251, 183, 0, 443 - 70, 110, 80);
    Ctx.drawImage(img_avatar2, 0, 0, 150, 150, -40, 443 - 130, 180, 180);
}
/////////////////////////////////////////////////////////////////////////////////
function drawHero() {
    if (hanimate == false) {
        if (char == 0)
            img_hero.src = "images/h1.png";
        if (char == 1)
            img_hero.src = "images/h2.png";
        if (char == 2)
            img_hero.src = "images/h3.png";
    }
    if (hanimate == true) {
        if (showBullet == true) {
            if (char == 0)
                img_hero.src = "images/h1t.png";
            if (char == 1)
                img_hero.src = "images/h2t.png";
            if (char == 2)
                img_hero.src = "images/h3t.png";
            delaya++;
            if (delaya % 5 == 0) {
                hero_frameX++;
                if (hero_frameX > 4) {
                    hero_frameX = 0;
                    delaya = 0;
                    hanimate = false;
                }
            }
        }

    }
    if (hwalk == true && deltaX < 70) {
        if (heroDirection == 1) {
            if (char == 0)
                img_hero.src = "images/h1w.png";
            if (char == 1)
                img_hero.src = "images/h2w.png";
            if (char == 2)
                img_hero.src = "images/h3w.png";
        }
        else if (heroDirection == -1) {
            if (char == 0)
                img_hero.src = "images/h1wL.png";
            if (char == 1)
                img_hero.src = "images/h2wL.png";
            if (char == 2)
                img_hero.src = "images/h3wL.png";
        }
        delaya++;
        if (delaya % 5 == 0) {

            hero_frameX++;
            if (hero_frameX > 1) {
                hero_frameX = 0;
                delaya = 0;
            }
        }
    }
    Ctx.drawImage(img_hero, hero_width * hero_frameX, hero_height * hero_frameY, 150, 150, heroX, heroY, 70, 70);
}
/////////////////////////////////////////////////////////////////////////////////
function drawEnemy() {
    var e = stage;
    if (stage == 4) { e = 0; }

    for (var i = 0; i < posX.length; i++) {
        for (var j = 0; j <= e; j++) {
            if (enemyX[stage][j] + 35 > posX[i] && enemyX[stage][j] + 35 < posX[(i + 1)]) {
                enemyY[stage][j] = posY[stage][i] + 239 - 60;
            }
        }
    }

    for (var i = 0; i <= stage; i++) {
        if (enemyHP[stage][i] > 0) {

            if (eanimate == false || i != eActive) {
                if (stage == 0)
                    img_enemy.src = "images/e11.png";
                else if (stage == 1) {
                    if (i == 0) { img_enemy.src = "images/e21.png"; }
                    else if (i == 1) { img_enemy.src = "images/e22.png"; }
                }
                else if (stage == 2) {
                    if (i == 0) { img_enemy.src = "images/e31.png"; }
                    else if (i == 1) { img_enemy.src = "images/e32.png"; }
                    else if (i == 2) { img_enemy.src = "images/e33.png"; }
                }
                else if (stage == 3) {
                    if (i == 0) { img_enemy.src = "images/e41.png"; }
                    else if (i == 1) { img_enemy.src = "images/e42.png"; }
                    else if (i == 2) { img_enemy.src = "images/e43.png"; }
                    else if (i == 3) { img_enemy.src = "images/e44.png"; }
                }
                else if (stage == 4)
                    img_enemy.src = "images/e51.png";

            }

            else if (eanimate == true && i == eActive) {
                if (showBullet == true) {
                    if (stage == 0)
                        img_enemy.src = "images/e11t.png";
                    else if (stage == 1) {
                        if (i == 0) { img_enemy.src = "images/e21t.png"; }
                        else if (i == 1) { img_enemy.src = "images/e22t.png"; }
                    }
                    else if (stage == 2) {
                        if (i == 0) { img_enemy.src = "images/e31t.png"; }
                        else if (i == 1) { img_enemy.src = "images/e32t.png"; }
                        else if (i == 2) { img_enemy.src = "images/e33t.png"; }
                    }
                    else if (stage == 3) {
                        if (i == 0) { img_enemy.src = "images/e41t.png"; }
                        else if (i == 1) { img_enemy.src = "images/e42t.png"; }
                        else if (i == 2) { img_enemy.src = "images/e43t.png"; }
                        else if (i == 3) { img_enemy.src = "images/e44t.png"; }
                    }
                    else if (stage == 4)
                        img_enemy.src = "images/e51t.png";

                    delaya++;
                    if (delaya % 5 == 0) {
                        enemy_frameX++;
                        if (enemy_frameX > 4) {
                            enemy_frameX = 0;
                            delaya = 0;
                            eanimate = false;
                        }
                    }
                }
            }
            if (ewalk == true && i == eActive) {
                if (enemyDirection == -1) {
                    if (stage == 0)
                        img_enemy.src = "images/e11w.png";
                    else if (stage == 1) {
                        if (i == 0) { img_enemy.src = "images/e21w.png"; }
                        else if (i == 1) { img_enemy.src = "images/e22w.png"; }
                    }
                    else if (stage == 2) {
                        if (i == 0) { img_enemy.src = "images/e31w.png"; }
                        else if (i == 1) { img_enemy.src = "images/e32w.png"; }
                        else if (i == 2) { img_enemy.src = "images/e33w.png"; }
                    }
                    else if (stage == 3) {
                        if (i == 0) { img_enemy.src = "images/e41w.png"; }
                        else if (i == 1) { img_enemy.src = "images/e42w.png"; }
                        else if (i == 2) { img_enemy.src = "images/e43w.png"; }
                        else if (i == 3) { img_enemy.src = "images/e44w.png"; }
                    }
                    else if (stage == 4)
                        img_enemy.src = "images/e51w.png";
                }

                if (enemyDirection == 1 && i == eActive) {
                    if (stage == 0)
                        img_enemy.src = "images/e11wR.png";
                    else if (stage == 1) {
                        if (i == 0) { img_enemy.src = "images/e21wR.png"; }
                        else if (i == 1) { img_enemy.src = "images/e22wR.png"; }
                    }
                    else if (stage == 2) {
                        if (i == 0) { img_enemy.src = "images/e31wR.png"; }
                        else if (i == 1) { img_enemy.src = "images/e32wR.png"; }
                        else if (i == 2) { img_enemy.src = "images/e33wR.png"; }
                    }
                    else if (stage == 3) {
                        if (i == 0) { img_enemy.src = "images/e41wR.png"; }
                        else if (i == 1) { img_enemy.src = "images/e42wR.png"; }
                        else if (i == 2) { img_enemy.src = "images/e43wR.png"; }
                        else if (i == 3) { img_enemy.src = "images/e44wR.png"; }
                    }
                    else if (stage == 4)
                        img_enemy.src = "images/e51wR.png";
                }
                delaya++;
                if (delaya % 5 == 0) {

                    enemy_frameX++;
                    if (enemy_frameX > 1) {
                        enemy_frameX = 0;
                        delaya = 0;
                    }
                }
            }


            if (i == eActive) {
                Ctx.drawImage(img_enemy, enemy_width * enemy_frameX, enemy_height * enemy_frameY, 150, 150, enemyX[stage][i], enemyY[stage][i], 70, 70);
            }
            else {
                Ctx.drawImage(img_enemy, 0, 0, 150, 150, enemyX[stage][i], enemyY[stage][i], 70, 70);
            }
            if (poison == true && i == np) {
                img_poison.src = "images/ispoison.png";
                Ctx.drawImage(img_poison, 0, 0, 150, 150, enemyX[stage][np], enemyY[stage][np], 70, 70);
            }
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawTime() {
    t1 = time / 10;
    t2 = time % 10;

    if (t1 < 10) img_time1.src = "images/9.png";
    if (t1 < 9) img_time1.src = "images/8.png";
    if (t1 < 8) img_time1.src = "images/7.png";
    if (t1 < 7) img_time1.src = "images/6.png";
    if (t1 < 6) img_time1.src = "images/5.png";
    if (t1 < 5) img_time1.src = "images/4.png";
    if (t1 < 4) img_time1.src = "images/3.png";
    if (t1 < 3) img_time1.src = "images/2.png";
    if (t1 < 2) img_time1.src = "images/1.png";
    if (t1 < 1) img_time1.src = "images/0.png";

    if (t2 == 0) img_time2.src = "images/0.png";
    if (t2 == 9) img_time2.src = "images/9.png";
    if (t2 == 8) img_time2.src = "images/8.png";
    if (t2 == 7) img_time2.src = "images/7.png";
    if (t2 == 6) img_time2.src = "images/6.png";
    if (t2 == 5) img_time2.src = "images/5.png";
    if (t2 == 4) img_time2.src = "images/4.png";
    if (t2 == 3) img_time2.src = "images/3.png";
    if (t2 == 2) img_time2.src = "images/2.png";
    if (t2 == 1) img_time2.src = "images/1.png";

    img_time.src = "images/time.png";

    Ctx.drawImage(img_time, 0, 0, 154, 338, 480, 0, 30, 50);
    Ctx.drawImage(img_time1, 0, 0, 100, 100, 520, 15, 30, 30);
    Ctx.drawImage(img_time2, 0, 0, 100, 100, 550, 15, 30, 30);

}
/////////////////////////////////////////////////////////////////////////////////
function drawWind() {
    img_wind.src = "images/wind.png";
    Ctx.drawImage(img_wind, 0, 0, 210, 115, 350, 10, 70, 50);
}
/////////////////////////////////////////////////////////////////////////////////
function drawAngle() {
    if (hTurn == true && hwalk == false) {
        angle_frameX = a / 5;
        angleX = heroX + 20;
        angleY = heroY + 15;
        img_angle.src = "images/angle.png";
        Ctx.drawImage(img_angle, 50 * angle_frameX, 0, 50, 41, angleX, angleY, 70, 55);
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawHP() {
    if (heroHP > 0) {
        hp_frameX = heroHP / 10;
        img_hp.src = "images/HP.png";
        Ctx.drawImage(img_hp, 700 * hp_frameX, 0, 700, 53, 100, 410, 200, 15);
    }
    if (heroHP <= 0) {
        loser = true;
        time = 10;
        destroyBullet();
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawEnemyHP() {
    for (var i = 0; i < stage + 1; i++) {
        if (enemyHP[stage][i] > 0) {
            hp_frameX = enemyHP[stage][i] / 10;
            img_hp.src = "images/HP.png";
            Ctx.drawImage(img_hp, 700 * hp_frameX, 0, 700, 53, enemyX[stage][i], enemyY[stage][i] - 20, 50, 4);
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawPower() {
    if (eTurn == false) {
        pw_frameX = Math.floor(V / 10);
        img_pw.src = "images/Power.png";
        Ctx.drawImage(img_pw, 700 * pw_frameX, 0, 700, 53, 100, 427, 200, 15);
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawSlot() {
    img_slot.src = "images/itemslot.png";
    Ctx.drawImage(img_slot, 0, 0, 200, 54, 100, 350, 200, 54);
}
function drawItem() {
    c++;
    if (c % 20 == 0) {
        item_frame++;
        if (item_frame > 1) {
            item_frame = 0;
            c = 0;
        }
    }
    img_item1.src = "images/rock.png";
    if (isZKey == true) {
        Ctx.drawImage(img_item1, 30 * item_frame, 0, 30, 30, 140, 360, 30, 30);
    }
    else {
        Ctx.drawImage(img_item1, 0, 0, 30, 30, 140, 360, 30, 30);
    }
    if (s2 == true) {
        if (item_type2 == 1) { img_item2.src = "images/knife.png"; }
        if (item_type2 == 2) { img_item2.src = "images/poison.png"; }
        if (item_type2 == 3) { img_item2.src = "images/bomb.png"; }
        if (isXKey == true) {
            Ctx.drawImage(img_item2, 15 * item_frame, 0, 30, 30, 185, 360, 30, 30);
        }
        else {
            Ctx.drawImage(img_item2, 0, 0, 30, 30, 185, 360, 30, 30);
        }
    }
    if (s3 == true) {
        if (item_type3 == 1) { img_item3.src = "images/knife.png"; }
        if (item_type3 == 2) { img_item3.src = "images/poison.png"; }
        if (item_type3 == 3) { img_item3.src = "images/bomb.png"; }
        if (isCKey == true) {
            Ctx.drawImage(img_item3, 15 * item_frame, 0, 30, 30, 232, 360, 30, 30);
        }
        else {
            Ctx.drawImage(img_item3, 0, 0, 30, 30, 232, 360, 30, 30);
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawArrow() {
    if (winner == false) {
        if (up)
            y++;
        if (!up)
            y--;
        if (y < -5)
            up = true;
        if (y > 5)
            up = false;

        img_arrow.src = "images/turn.png";
        if (hTurn == true)
            Ctx.drawImage(img_arrow, 0, 0, 100, 100, heroX + 15, heroY - 70 + y, 50, 50);
        if (eTurn == true && enemyHP[stage][eActive]>0) {
            Ctx.drawImage(img_arrow, 0, 0, 100, 100, enemyX[stage][eActive], enemyY[stage][eActive] - 70 + y, 50, 50);
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function checkKey() {
    if (isUpKey == true) {
        isUpKey = false;
        a += 5;
        if (a > 90)
            a = 90;
    }
    if (isDownKey == true) {
        isDownKey = false;
        a -= 5;
        if (a < 5)
            a = 5;
    }
    if (isLeftKey == true) {
        deltaX += speed;
        heroX -= speed;
        if (deltaX >= 70) {
            heroX += speed;
            hwalk = false;
            hero_frameX = 0;
        }
        hwalk = true;
        heroDirection = -1;
        if (heroX + 20 < 0)
            heroX = -20;
    }
    if (isRightKey == true) {
        deltaX += speed;
        heroX += speed;
        if (deltaX >= 70) {
            heroX -= speed;
            hwalk = false;
            hero_frameX = 0;
        }
        hwalk = true;
        heroDirection = 1;
        if (heroX > 590 - 50) {
            heroX = 590 - 50;
            hwalk = false;
            hero_frameX = 0;
        }
        if (stage == 0 && heroX + 35 >= 280) {
            heroX = 280 - 35;
            hwalk = false;
            hero_frameX = 0;
        }
        if (stage == 4 && heroX + 35 >= 250) {
            heroX = 250 - 35;
            hwalk = false;
            hero_frameX = 0;
        }

    }
    if (isSpaceKey == true) {
        shoot = true;
        V = V + 1;
        if (V >= 100) {
            V = 100;
            isSpaceKey = false;
        }
    }
    if (isSpaceKey == false && shoot == true) {
        if (effect == true) { s_effect = new Audio("sounds/shoot.wav"); s_effect.play(); }
        showBullet = true;
        timePause = true;
        Projectile(V, fps, a);
        shoot = false;
        hanimate = true;
    }

    for (var i = 0; i < posX.length; i++) {
        if (heroX + 35 > posX[i] && heroX + 35 < posX[(i + 1)]) {
            heroY = posY[stage][i] + 239 - 60;
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
	function checkMouseDown(e) {
	    var m = e.which;

	    if (m == 1) {

	        if (menu == true && howtoplay == false && credit == false) {

	            if (e.pageX > 190 && e.pageX < 380 && e.pageY > 70 && e.pageY < 140) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                menu = false;
	            }
	            if (e.pageX > 190 && e.pageX < 380 && e.pageY > 180 && e.pageY < 240) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                howtoplay = true;

	            }
	            if (e.pageX > 190 && e.pageX < 380 && e.pageY > 290 && e.pageY < 360) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                credit = true;

	            }
	        }

	        else if (howtoplay == true) {
	            if (e.pageX > 510 && e.pageX < 580 && e.pageY > 400 && e.pageY < 430) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                howtoplay = false;
	            }
	        }
	        else if (credit == true) {
	            if (e.pageX > 510 && e.pageX < 580 && e.pageY > 400 && e.pageY < 430) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                credit = false;
	            }
	        }

	        /////in game
	        else if (menu == false && load_ing == false) {
	            if (e.pageX > 500 && e.pageX < 530 && e.pageY > 415 && e.pageY < 443) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                bgm = !bgm;
	                if (bgm == true) { img_bgm.src = "images/bgm.png"; s_bgm.play(); }
	                if (bgm == false) { img_bgm.src = "images/bgm2.png"; s_bgm.pause(); }
	            }
	            if (e.pageX > 530 && e.pageX < 560 && e.pageY > 415 && e.pageY < 443) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                effect = !effect;
	                if (effect == true) { img_effect.src = "images/effect.png"; }
	                if (effect == false) { img_effect.src = "images/effect2.png"; }
	            }
	            if (e.pageX > 560 && e.pageX < 590 && e.pageY > 415 && e.pageY < 443) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                pause = !pause;
	                s_bgm.pause();
	            }
	        }
	        if (pause == true && menu == false) {
	            if (e.pageX > 190 && e.pageX < 390 && e.pageY > 80 && e.pageY < 140) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                pause = !pause;
	                s_bgm.play();
	            }
	            if (e.pageX > 190 && e.pageX < 390 && e.pageY > 180 && e.pageY < 240) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                pause = !pause;
	                resetValue();
                    menu = false;
	            }
	            if (e.pageX > 190 && e.pageX < 390 && e.pageY > 270 && e.pageY < 335) {
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	                pause = !pause;
	                
	                resetValue();
	            }
	        }
	        else if (choosechar == false && menu == false && delay > 10) {
	            if (e.pageX > 0 && e.pageX < 196) {
	                char = 0;
	                choosechar = true;
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	            }
	            if (e.pageX > 196 && e.pageX < 392) {
	                char = 1;
	                choosechar = true;
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	            }
	            if (e.pageX > 392 && e.pageX < 590) {
	                char = 2;
	                choosechar = true;
	                if (effect == true) { s_effect = new Audio("sounds/choose.wav"); s_effect.play(); }
	            }
	            delay = 0;
	        }
	        if (resume == true && e.pageX > 230 && e.pageX < 360 && e.pageY > 250 && e.pageY < 360) {
	            for (var i = 0; i < stage; i++) {
	                enemyHP[stage][i] = 100;
	            }
	            
	            over = false;
	            winner = false;
	            loser = false;
	            resume = false;

	            //hero//
	            hanimate = false;
	            delaya = 0;
	            hwalk = false;
	            heroX = 30;
	            heroY = 205;
	            deltaX = 0;
	            hero_width = 150;
	            hero_height = 150;
	            hero_frameX = 0;
	            hero_frameY = 0;
	            heroDirection = 1;
	            speed = 1;
	            heroHP = 100;
	            bonusdamage = 1;
	            //enemy//
	            eanimate = false;
	            ewalk = false;
	            nEnemy = [1, 2, 3, 4, 1];
	            hasHit = 0;
	            enemyHP = [[100], [100, 100], [100, 100, 100], [100, 100, 100, 100], [100]];
	            enemyX = [[500], [450, 520], [400, 480, 540], [330, 410, 480, 540], [500]];
	            enemyY = [[184], [284, 274], [284, 274, 250], [250, 289, 275, 254], [200]];
	            enemy_width = 150;
	            enemy_height = 150;
	            enemy_frameX = 0;
	            enemy_frameY = 0;
	            walk = 0;
	            enemyDirection = 0;
	            check = 0;
	            //Item//
	            item_type2 = 0;
	            item_type3 = 0;
	            itemX = 0;
	            itemY = 0;
	            nslot = 2;
	            slotX = 0;
	            slotY = 0;
	            slotAvialable = true;
	            item_frame = 0;
	            c = 0;
	            nbox = 0;
	            boxX = 0;
	            boxY = 0;
	            ranBox = false;
	            s2 = false;
	            s3 = false;
	            type = 0;
	            damage = 10;
	            poison = false;
	            np = 0;
	            //time//
	            count = 0;
	            remainTime = 10;
	            t1 = 0;
	            t2 = 0;
	            //angle//
	            angleX = 0;
	            angleY = 0;
	            angle_frameX = 0;
	            angle_width = 50;
	            angleX = 0;
	            angleY = 0;
	            //bullet//
	            bulletX = 0;
	            bulletY = 0;
	            ebulletX = 0;
	            ebulletY = 0;
	            //turn//
	            shoot = false;
	            turnActive = true;
	            hTurn = true;
	            eTurn = false;
	            time = 10;
	            y = 0;
	            up = true;
	            delay = 0;
	            timePause = false;
	            turn = 1;
	            //Projectile//
	            a = 5;
	            angle = 0;
	            arrowPx = 0;
	            arrowPy = 0;
	            tP = 0;
	            V = 0;
	            U = 0;
	            gP = 10;
	            plotX = 0;
	            shoot = false;
	            step = 7;
	            pt = 0;
	            cal = false;
	            showBullet = false;
	            eshowBullet = false;
	            //key//
	            isUpKey = false;
	            isDownKey = false;
	            isLeftKey = false;
	            isRightKey = false;
	            isSpaceKey = false;
	            isZKey = true;
	            isXKey = false;
	            isCKey = false;
	            isLeftClick = false;
	            //Collision//
	            hit = false;
	            //loading//
	            l = 0;
	            load_frame = 0;
	            //hp//
	            hp_frameX = 0;
	            o = 0;
	            //power//
	            pw_frameX = 0;
	            s_bgm.play();
	        }
	    }
	}
//////////////////////////////////////////////////////////////////////////////////////////
function checkKeyDown(e) {
    var key = e.keyCode;
    if (key == 37 && isLeftKey == false) {
        isLeftKey = true;
    }
    if (key == 38 && isUpKey == false) {
        isUpKey = true;
    }
    if (key == 39) {
        isRightKey = true;
    }
    if (key == 40) {
        isDownKey = true;
    }
    if (key == 32) {
        isSpaceKey = true;
    }
    if (key == 90) {
        isZKey = true;
        isXKey = false;
        isCKey = false;
    }
    if (key == 88) {
        if (s2 == true) {
            isXKey = true;
            isZKey = false;
            isCKey = false;
        }
    }
    if (key == 67) {
        if (s3 == true) {
            isCKey = true;
            isZKey = false;
            isXKey = false;
        }
    }
}
function checkKeyUp(e) {

    var key = e.keyCode;
    
    if (key == 37) {
        isLeftKey = false;
        hwalk = false;
        hero_frameX = 0;
    }
    if (key == 38) {
        isUpKey = false;
    }
    if (key == 39) {
        isRightKey = false;
        hwalk = false;
        hero_frameX = 0;
    }
    if (key == 40) {
        isDownKey = false;
    }
    if (key == 32) {
        isSpaceKey = false;
    }

    if (key == 71) {//g
        heroHP = 10;
    }
    if (key == 72) {//h
        heroHP = 100;
    }
    if (key == 75) {//k
        enemyHP = [[10], [10, 10], [10, 10, 10], [10, 10, 10, 10], [10]];
    }
    if (key == 68) {//d
        if (bonusdamage == 1) { bonusdamage = 100; }
        else if (bonusdamage == 100) { bonusdamage = 1; }
    }
    if (key == 83) {//s
        s_bgm.pause();
    }
}
/////////////////////////////////////////////////////////////////////////////////
function Projectile(V, fps, a) {
    Sy = new Array();
    Sx = new Array();
    pt = (1 / fps);
    U = V;
    tP = Math.ceil((V / gP));
    tP = tP * fps;
    Sy[0] = 0;
    Sx[0] = 0;
    j = 1;
    var i = 1;
    i = 1;
    angle = Math.PI * (a / 180);
    for (i = 1; i < (tP * 2); i++) {
        if (i <= tP) {

            Sy[i] = Sy[i - 1] + (((V * Math.sin(angle) * (pt)) - 0.5 * gP * (pt) * (pt)));
            V = V - (gP / fps);
            Sx[i] = Sx[i - 1] + (U * Math.cos(angle) * (pt));
        }
        else {

            Sy[i] = Sy[i - 1 - (j * 2)]; 
            V = V + (gP / fps);
            Sx[i] = Sx[i - 1] + (U * Math.cos(angle) * (pt));
            j++;
        }
    }
    if (i >= tP * 2) {
        while (i < tP * 50) {
            Sy[i] = Sy[i - 1] - (((V * Math.sin(angle) * (pt)) - 0.5 * gP * (pt) * (pt)));
            V = V + (gP / fps);
            Sx[i] = Sx[i - 1] + (U * Math.cos(angle) * (pt));
            i++;

        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawBullet() {
    if (showBullet == true) {
        if (hTurn == true && nbox > 0) {
            collisionItem(bulletX + 20, bulletX, bulletY, bulletY + 20, boxX + 50, boxX, boxY, boxY + 50);
        }
        if (hTurn == true) {
            bulletX = angleX + 10 + Sx[plotX];
            bulletY = angleY + 10 - Sy[plotX];
            plotX = plotX + step;
            if (stage < 4) {
                for (var i = 0; i <= stage; i++) {
                    if (enemyHP[stage][i] > 0) {
                        check = i;
                        collisionPicture(bulletX + 20, bulletX, bulletY, bulletY + 20, enemyX[stage][i] + 60, enemyX[stage][i] + 10, enemyY[stage][i] + 10, enemyY[stage][i] + 60);
                    }
                }
            }
            else if (enemyHP[4][0] > 0) {
                check = 0;
                collisionPicture(bulletX + 20, bulletX, bulletY, bulletY + 20, enemyX[stage][0] + 60, enemyX[stage][0] + 10, enemyY[stage][0] + 10, enemyY[stage][0] + 60);
            }

            if (isZKey == true) { img_bullet.src = "images/rock.png"; type = 0; } //15x15
            if (isXKey == true && s2 == true) {
                if (item_type2 == 1) { img_bullet.src = "images/knife.png"; type = 1; }
                if (item_type2 == 2) { img_bullet.src = "images/poison.png"; type = 2; }
                if (item_type2 == 3) { img_bullet.src = "images/bomb.png"; type = 3; }
            }
            if (isCKey == true && s3 == true) {
                if (item_type3 == 1) { img_bullet.src = "images/knife.png"; type = 1; }
                if (item_type3 == 2) { img_bullet.src = "images/poison.png"; type = 2; }
                if (item_type3 == 3) { img_bullet.src = "images/bomb.png"; type = 3; }
            }
            Ctx.drawImage(img_bullet, 0, 0, 30, 30, bulletX, bulletY, 20, 20);
        }
        if (eTurn == true) {
            bulletX = enemyX[stage][eActive] + 10 - Sx[plotX];
            bulletY = enemyY[stage][eActive] + 10 - Sy[plotX];
            plotX = plotX + step;
            collisionPicture(bulletX + 20, bulletX, bulletY, bulletY + 20, heroX + 60, heroX + 10, heroY + 10, heroY + 60);
            img_bullet.src = "images/rock.png";

            Ctx.drawImage(img_bullet, 0, 0, 30, 30, bulletX, bulletY, 20, 20);
        }
        //if (!bulletX || !bulletY || bulletX > gameWidth || bulletY > gameHeight || bulletX - 15 < 0) {
        if (bulletX > gameWidth || bulletY > gameHeight || bulletX - 15 < 0) {
            destroyBullet();
        }
        /*for (var i = 0; i < posX.length; i++) {
            if (bulletY > (posY[stage][i] + 260)) {
                destroyBullet();
            }
        }*/
    }
}
/////////////////////////////////////////////////////////////////////////////////
function collisionItem(r1_right, r1_left, r1_top, r1_bottom, r2_right, r2_left, r2_top, r2_bottom) {
    if (r2_left > r1_right || r2_right < r1_left || r2_top > r1_bottom || r2_bottom < r1_top) {
    }
    else {
        if (nbox > 0 && hTurn == true) {
            if (effect == true) { s_effect = new Audio("sounds/catchbox.wav"); s_effect.play(); }
            nbox = 0;
            boxX = -50;
            boxY = -50;
            randomItem();
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function collisionPicture(r1_right, r1_left, r1_top, r1_bottom, r2_right, r2_left, r2_top, r2_bottom) {
    if (r2_left > r1_right || r2_right < r1_left || r2_top > r1_bottom || r2_bottom < r1_top)//not crash
    {
        hit = false;
    }
    else {
        hit = true;
    }
    if (hit == true) {
        if (hTurn == true) {
            if (type == 0) { damage = 10; enemyHP[stage][check] -= damage * bonusdamage; if (effect == true) { s_effect = new Audio("sounds/rock.wav"); s_effect.play(); } }
            if (type == 1) { damage = 20; enemyHP[stage][check] -= damage * bonusdamage; if (effect == true) { s_effect = new Audio("sounds/knife.wav"); s_effect.play(); } }
            if (type == 2) { damage = 10; enemyHP[stage][check] -= damage * bonusdamage; poison = true; np = check; if (effect == true) { s_effect = new Audio("sounds/poison.wav"); s_effect.play(); } }
            if (type == 3) {
                damage = 20;
                if (effect == true) { s_effect = new Audio("sounds/bomb.wav"); s_effect.play(); }
                if (stage == 4) {
                    enemyHP[stage][0] -= damage * bonusdamage;
                }
                else {
                    for (var i = 0; i < stage + 1; i++) {
                        enemyHP[stage][i] -= damage * bonusdamage;
                    }
                }
            }

            if (enemyHP[stage][check] <= 0) {
                if (effect == true) {
                    s_effect = new Audio("sounds/die.wav");
                    s_effect.play();
                }
            }
        }
        if (eTurn == true) {
            if (stage == 4)
                heroHP -= 20;
            else
                heroHP -= 10;

            if (effect == true) { s_effect = new Audio("sounds/rock.wav"); s_effect.play(); }

            if (heroHP <= 0) {
                if (effect == true) {
                    s_effect = new Audio("sounds/die.wav");
                    s_effect.play();
                }
            }
        }


        if (hTurn == true) {
            hTurn = false;
            eTurn = true;
            shoot = true;
            randomTurn = true;
        }
        else if (eTurn == true) {
            eTurn = false;
            hTurn = true;
        }
        hit = false;
        destroyBullet();
    }
}
/////////////////////////////////////////////////////////////////////////////////
function destroyBullet() {
    bulletX = 0;
    bulletY = 0;
    ebulletX = 0;
    ebulletY = 0;
    showBullet = false;
    V = 0;
    deltaX = 0;
    timePause = false;

    shoot = false;
    plotX = 0;

    time = 10;
    count = 0;
    turnActive = false;
    delay = 0;

    if (hTurn == true && showBullet == false) {
        hTurn = false;
        eTurn = true;
        shoot = true;
        randomTurn = true;
        if (isXKey == true && s2 == true) { isXKey = false; isZKey = true; s2 = false; }
        if (isCKey == true && s3 == true) { isCKey = false; isZKey = true; s3 = false; }
    }
    else if (eTurn == true && showBullet == false) {
        eTurn = false;
        hTurn = true;
    }

}
/////////////////////////////////////////////////////////////////////////////////
function Turn() {
    if (hTurn == true && showBullet == false) {
        checkKey();
        if (turn % 4 == 0) {
            ranBox = true;
        }
        if (poison == true) {
            enemyHP[stage][np] -= 10;
            poison = false;
            if (enemyHP[stage][eActive] <= 0) {
                hTurn = true;
                eTurn = false;
            }
        }
    }
    if (eTurn == true && showBullet == false) {
        for (var i = 0; i <= stage; i++) {
            if (enemyHP[stage][i] > 0) {
                AI();
                break;
            }
        }
    }
    if (turnActive == true) {
        if (hTurn == true) { drawTime(); }
        drawArrow();
        if (timePause == false) {
            count++;
            if (count % 60 == 0) {
                time--;
                count = 0;
                if (time <= 0) {
                    time = 10;
                    count = 0;
                    turnActive = false;
                    delay = 0;
                    if (hTurn == true && showBullet == false) {
                        
                        hTurn = false;
                        eTurn = true;
                        shoot = true;
                        randomTurn = true;
                    }
                    else if (eTurn == true && showBullet == false) {
                        eTurn = false;
                        hTurn = true;
                        if (poison == true) {
                            enemyHP[stage][np] -= 10;
                            poison = false;
                            if (enemyHP[stage][eActive] <= 0) {
                                hTurn = true;
                                eTurn = false;
                            }
                        }

                    }
                }
            }
        }
    }
    if (turnActive == false) {
        delay++;
        if (delay > 15) {
            turnActive = true;
            if (effect == true) { s_effect = new Audio("sounds/turn.wav"); s_effect.play(); }
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function AI() {
    if (randomTurn == true) {
        eActive = Math.floor(Math.random() * (stage + 1));
        while (enemyHP[stage][eActive] <= 0) {
            eActive++;
            if (eActive > stage) {
                eActive = 0;
            }
        }
        randomTurn = false;
    }

    if (stage == 4) { eActive = 0; }
    if (shoot == true && enemyHP[stage][eActive] > 0) {
        delay++;
        if (delay > 15 && delay < 60 && walk == 1) {
            if (stage == 0 || stage == 4) {
                if (enemyX[stage][eActive] < 400) { enemyDirection = 1; }
            }
            if (enemyX[stage][eActive] + 60 > 590) { enemyDirection = -1; }
            enemyX[stage][eActive] += enemyDirection;
            ewalk = true;
        }

        if (delay > 60) {
            if (effect == true) { s_effect = new Audio("sounds/shoot.wav"); s_effect.play(); }
            V = Math.floor((Math.random() * 50) + 15);
            eanimate = true;
            showBullet = true;
            timePause = true;
            var ea ;
            ea = Math.floor((Math.random() * 20) + 40);
            if (stage == 4) {
                V = Math.floor((Math.random() * 30) + 20);
                ea = Math.floor((Math.random() * 20) + 30); 
            }
            Projectile(V, fps, ea);
            shoot = false;
            delay = 0;
            turn++;
            walk = Math.floor(Math.random() * 10) % 2;
            enemyDirection = Math.floor(Math.random() * 2);
            if (enemyDirection == 0) { enemyDirection = -1; }
            ewalk = false;
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function Loading() {
    
    img_loading.src = "images/loading.png";
    drawBackground();
    Ctx.drawImage(img_loading, 250 * load_frame, 0, 250, 97, 170, 300, 250, 97);

    l++;
    if (l % 20 == 0) {
        load_frame++;
        if (load_frame == 8) {
            if (effect == true) { s_effect = new Audio("sounds/complete.wav"); s_effect.play(); }
            load_frame = 0;
            l = 0;
            load_ing = false;
            if (stage == 0) {
                s_bgm = new Audio("sounds/1.mp3");
            }
            if (stage == 1) {
                s_bgm = new Audio("sounds/2.mp3");
            }
            if (stage == 2) {
                s_bgm = new Audio("sounds/3.mp3");
            }
            if (stage == 3) {
                s_bgm = new Audio("sounds/4.mp3");
            }
            if (stage == 4) {
                s_bgm = new Audio("sounds/5.mp3");
            }
            s_bgm.loop = true;
            if (bgm == true) { s_bgm.play(); }
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawBox() {
    if (ranBox == true && turn % 4 == 0) {
        ranbox = false;
        turn++;
        nbox++;
        boxX = Math.floor((Math.random() * 400) + 100);
        boxY = Math.floor((Math.random() * 239));
    }
    if (nbox > 0) {
        img_box.src = "images/box.png";
        Ctx.drawImage(img_box, 0, 0, 150, 150, boxX, boxY, 50, 50);
    }
}
/////////////////////////////////////////////////////////////////////////////////
function randomItem() {
    if (s2 == false) {
        item_type2 = Math.floor((Math.random() * 3) + 1);
        s2 = true;
    }
    else if (s3 == false) {
        item_type3 = Math.floor((Math.random() * 3) + 1);
        s3 = true;
    }
}

/////////////////////////////////////////////////////////////////////////////////
function resetValue() {
    choosechar = false;
    load_ing = true;
    show = true;
    menu = true;
    howtoplay = false;
    credit = false;
    option = false;
    pause = false;
    bgm = true;
    effect = true;
    quit = false;
    over = false;
    winner = false;
    loser = false;
    resume = false;
    //stage//
    stage = 0;
    
    //hero//
    hanimate = false;
    delaya = 0;
    hwalk = false;
    heroX = 30;

    heroY = 205;
    deltaX = 0;
    hero_width = 150;
    hero_height = 150;
    hero_frameX = 0;
    hero_frameY = 0;
    heroDirection = 1;
    speed = 1;
    heroHP = 100;
    bonusdamage = 1;
    //enemy//
    eanimate = false;
    ewalk = false;
    nEnemy = [1, 2, 3, 4, 1];
    hasHit = 0;
    enemyHP = [[100], [100, 100], [100, 100, 100], [100, 100, 100, 100], [100]];
    enemyX = [[500], [450, 520], [400, 480, 540], [330, 410, 480, 540], [500]];
    enemyY = [[184], [284, 274], [284, 274, 250], [250, 289, 275, 254], [200]];
    enemy_width = 150;
    enemy_height = 150;
    enemy_frameX = 0;
    enemy_frameY = 0;
    walk = 0;
    enemyDirection = 0;
    check = 0;
    //Item//
    item_type2 = 0;
    item_type3 = 0;
    itemX = 0;
    itemY = 0;
    nslot = 2;
    slotX = 0;
    slotY = 0;
    slotAvialable = true;
    item_frame = 0;
    c = 0;
    nbox = 0;
    boxX = 0;
    boxY = 0;
    ranBox = false;
    s2 = false;
    s3 = false;
    type = 0;
    damage = 10;
    poison = false;
    np = 0;
    //time//
    count = 0;
    remainTime = 10;
    t1 = 0;
    t2 = 0;
    //angle//
    angleX = 0;
    angleY = 0;
    angle_frameX = 0;
    angle_width = 50;
    angleX = 0;
    angleY = 0;
    //bullet//
    bulletX = 0;
    bulletY = 0;
    ebulletX = 0;
    ebulletY = 0;
    //turn//
    shoot = false;
    turnActive = true;
    hTurn = true;
    eTurn = false;
    time = 10;
    y = 0;
    up = true;
    delay = 0;
    timePause = false;
    turn = 1;
    randomTurn = true;
    //Projectile//
    a = 5;
    angle = 0;
    arrowPx = 0;
    arrowPy = 0;
    tP = 0;
    V = 0;
    U = 0;
    gP = 10;
    Sy = new Array();
    Sx = new Array();
    plotX = 0;
    shoot = false;
    step = 7;
    pt = 0;
    cal = false;
    showBullet = false;
    eshowBullet = false;
    //key//
    isUpKey = false;
    isDownKey = false;
    isLeftKey = false;
    isRightKey = false;
    isSpaceKey = false;
    isZKey = true;
    isXKey = false;
    isCKey = false;
    isLeftClick = false;
    //Collision//
    hit = false;
    //loading//
    l = 0;
    load_frame = 0;
    //hp//
    hp_frameX = 0;
    o = 0;
    //power//
    pw_frameX = 0;

}
/////////////////////////////////////////////////////////////////////////////////
function drawMiniOption() {
    Ctx.drawImage(img_bgm, 0, 0, 160, 143, 500, 415, 20, 20);
    Ctx.drawImage(img_effect, 0, 0, 182, 148, 530, 415, 20, 20);
    Ctx.drawImage(img_pause, 0, 0, 157, 145, 560, 415, 20, 20);
}
/////////////////////////////////////////////////////////////////////////////////
function WinLose() {
    if (loser == true) {
        o++;
        if (o < 90) {
            Ctx.clearRect(0, 0, 591, 443);
            img_loser.src = "images/lose.png";
            Ctx.drawImage(img_loser, 0, 0, 550, 214, 20, 50, 550, 214);
        }
        else {

            count = 0;
            time = 10;
            resume = true;
            loser = false;
            s_bgm.pause();
        }
    }
    else if (winner == true) {
        o++;
        if (o < 90) {

            if (up)
                y++;
            if (!up)
                y--;
            if (y < -10)
                up = true;
            if (y > 10)
                up = false;

            img_win.src = "images/win.png";
            Ctx.drawImage(img_win, 0, 0, 550, 214, 20, 50 + y, 550, 214);
        }
        else {
            resetValue();
            menu = true;
            s_bgm.pause();
        }
    }
    else if (over == true) {
        o++;
        if (o < 90) {
            if (up)
                y++;
            if (!up)
                y--;
            if (y < -5)
                up = true;
            if (y > 5)
                up = false;

            img_over1.src = "images/over1.png";
            Ctx.drawImage(img_over1, 0, 0, 590, 443, 0, 0, 590, 443);
            img_over2.src = "images/over2.png";
            Ctx.drawImage(img_over2, 0, 0, 550, 214, 20, 50 + y, 550, 214);
        }
        else {
            resetValue();
            menu = true;
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function drawResumeGame() {
    if (resume == true) {
        count++;
        if (count % 60 == 0) {
            time--;
            { s_effect = new Audio("sounds/clock.wav"); s_effect.play(); }
            count = 0;
            if (time <= 0) {
                over = true;
                if (effect == true) { s_effect = new Audio("sounds/over.wav"); s_effect.play(); }
                resume = false;
                o = 0;
            }
        }

        t1 = time / 10;
        t2 = time % 10;

        if (t1 < 10) img_time1.src = "images/9.png";
        if (t1 < 9) img_time1.src = "images/8.png";
        if (t1 < 8) img_time1.src = "images/7.png";
        if (t1 < 7) img_time1.src = "images/6.png";
        if (t1 < 6) img_time1.src = "images/5.png";
        if (t1 < 5) img_time1.src = "images/4.png";
        if (t1 < 4) img_time1.src = "images/3.png";
        if (t1 < 3) img_time1.src = "images/2.png";
        if (t1 < 2) img_time1.src = "images/1.png";
        if (t1 < 1) img_time1.src = "images/0.png";

        if (t2 == 0) img_time2.src = "images/0.png";
        if (t2 == 9) img_time2.src = "images/9.png";
        if (t2 == 8) img_time2.src = "images/8.png";
        if (t2 == 7) img_time2.src = "images/7.png";
        if (t2 == 6) img_time2.src = "images/6.png";
        if (t2 == 5) img_time2.src = "images/5.png";
        if (t2 == 4) img_time2.src = "images/4.png";
        if (t2 == 3) img_time2.src = "images/3.png";
        if (t2 == 2) img_time2.src = "images/2.png";
        if (t2 == 1) img_time2.src = "images/1.png";

        img_re.src = "images/re.png";

        Ctx.clearRect(0, 0, 591, 443);
        Ctx.drawImage(img_time1, 0, 0, 100, 100, 200, 100, 100, 100);
        Ctx.drawImage(img_time2, 0, 0, 100, 100, 300, 100, 100, 100);
        Ctx.drawImage(img_re, 0, 0, 128, 117, 230, 250, 128, 117);
    }
}
/////////////////////////////////////////////////////////////////////////////////
function checkComplete() {
    if ((stage == 0 && enemyHP[stage][0] <= 0) || (stage == 1 && enemyHP[stage][0] <= 0 && enemyHP[stage][1] <= 0) || (stage == 2 && enemyHP[stage][0] <= 0 && enemyHP[stage][1] <= 0 && enemyHP[stage][2] <= 0) || (stage == 3 && enemyHP[stage][0] <= 0 && enemyHP[stage][1] <= 0 && enemyHP[stage][2] <= 0 && enemyHP[stage][3] <= 0)) {
        delay++;
        if (delay > 50) {
            Complete();
            delay = 0;
        }
    }
    if (enemyHP[4][0] <= 0 && winner == false) {
        winner = true;
        if (effect == true) { s_effect = new Audio("sounds/win.wav"); s_effect.play(); }
    }
}
/////////////////////////////////////////////////////////////////////////////////
function Complete() {
    nbox = 0;
    stage++;
    load_ing = true;
    s_bgm.pause();
    heroHP = 100;
    a = 5;
    hTurn = true;
    eTurn = false;
    TurnActive = false;
    showbullet = false;
    shoot = false;
}