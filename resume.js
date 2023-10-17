let config = {
    type: Phaser.AUTO,

    scale:{

        mode: Phaser.Scale.FIT,
        width:(1.5)*(window.innerWidth),
        height:(1.5)*window.innerHeight,

        // width:800,
        // height:600,

    },
    // fps: {
    //     target: 120, // Set your desired frame rate here, e.g., 30, 60, 120, etc.
    //     forceSetTimeOut: true, // Use setTimeout for rendering (can help with older devices)
    // },
    backgroundColor: 0xffffcc,

    physics:{
        default: 'arcade', //engine we want in our game,
        arcade: {
            gravity:{
                y:100000, //more gravity means higher gravitational pull
            }
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

let game = new Phaser.Game(config);
let game_config = {
    player_speed: 150,
    tile_height: 40,
}
function preload(){
    this.load.image("ground", "Assests/topground.png");
    this.load.image("sky", "Assests/background.png");
    this.load.image("cloud", "Assests/cloud.png");
    this.load.spritesheet("character", "Assests/dude.png", {frameWidth:32, frameHeight:48});
    this.load.bitmapFont('carrier_command', 'Assests/fonts/bitmapFonts/carrier_command.png', 'Assests/fonts/bitmapFonts/carrier_command.xml');
    this.load.image("apple", "Assests/apple.png");
    this.load.image("education", "Assests/tree_board_uni_logo.png");
    this.load.image("language", "Assests/tree_board_langs.png");
    this.load.image("libraries", "Assests/tree_board_libraries.png");
    this.load.image("database", "Assests/tree_board_database.png");
    this.load.image("express", "Assests/tree_board_expressJs.png");
    this.load.image("project1", "Assests/tree_board_project1.png");
    this.load.image("project2", "Assests/tree_board_project2.png");
    this.load.image("project3", "Assests/tree_board_project3.png");
    this.load.image("codeforces", "Assests/tree_board_cf.png");
    this.load.image("codechef", "Assests/tree_board_cc.png");
    this.load.image("leetcode", "Assests/tree_board_lc.png");
    this.load.image("icpc", "Assests/tree_board_icpc.png");
    this.load.image("meta", "Assests/tree_board_meta.png");
    this.load.image("ray", "Assests/ray.png");
    this.load.image("drawings", "Assests/tree_drawings.png");
    //this.load.image("project1", "A")
}
function create(){
    W = game.config.width;
    H = game.config.height;

    //add tilesprites (basically platform or ground)
    // let ground = this.add.tileSprite(0, H-game_config.tile_height,5*W,game_config.tile_height,'ground');
    // ground.setOrigin(0,0);

    const platformGroup = this.physics.add.group();

  // Create a long platform using a loop
    for (let i = 0; i < 70; i++) {
        const platform = platformGroup.create(i * 80, H-game_config.tile_height, 'ground'); // 'platform' is the name of your platform image/sprite
        platform.setOrigin(0, 0);
        platform.body.allowGravity = false;
        platform.body.immovable = true;
    }

    const cloudCount = 20; // Adjust the number of clouds as needed

    for (let i = 0; i < cloudCount; i++) {
        const x = Phaser.Math.Between(0, 2*W);
        const y = Phaser.Math.Between(H-300, H * 0.6); // Adjust the height range as needed
        const cloud = this.add.image(x, y, 'cloud');
        const cloudScale = Phaser.Math.Between(50, 150) / 100; // Randomize cloud scale
        cloud.setScale(cloudScale);
        cloud.setAlpha(0.5); // Adjust the opacity as needed
        cloud.setDepth(1); // Ensure clouds are behind other game objects
    }








    //lets create the background
    let background = this.add.sprite(0,0,'sky');
    background.setOrigin(0,0);
    background.displayWidth = 2*W;
    background.displayHeight = H;
    background.depth = -2;
    

    let rays = [];
    for(let i = -10; i<=10; i++){
        let ray = this.add.sprite(W, H-10, 'ray')
        ray.displayHeight = 2*H;
        ray.setOrigin(0.5, 1);
        ray.alpha = 0.2;
        ray.angle = i*10;
        ray.depth = -1;
        rays.push(ray);
    }
    console.log(rays);
    this.tweens.add({
        targets: rays,
        props:{
            angle:{
                value: "+20",
            }
        },
        duration: 8000,
        repeat: -1
    })

    let education = this.add.image(620,990,'education');
    education.setScale(0.1);
    this.add.bitmapText(450, 850,'carrier_command','Education',12);



    let express = this.add.image(1025, 990, 'express');
    express.setScale(0.1);

    
    let languages = this.add.image(1225, 990, 'language');
    languages.setScale(0.1);
    this.add.bitmapText(1103, 850,'carrier_command','Skills',12);


    let libraries = this.add.image(1425, 990, 'libraries');
    libraries.setScale(0.1);

    let database = this.add.image(1625, 990, 'database');
    database.setScale(0.1);
    //this.add.bitmapText(1103, 850,'carrier_command','Skills',12);



    this.add.bitmapText(1850, 720,'carrier_command','Projects',12);

    //1910
    let project1 = this.add.image(1910, 920, 'project1');
    project1.setScale(0.3);
    const linkElement = document.createElement('a');
    linkElement.id = 'project1';
    linkElement.href = 'https://github.com/MrGREAT20?tab=repositories'; // Replace with your desired URL
    linkElement.target = '_blank'; // Open the link in a new tab/window
    linkElement.style.position = 'absolute';
    linkElement.style.top = '920px'; // Adjust this value
    linkElement.style.left = '2190px'; // Adjust this value
    linkElement.style.width = `${project1.displayWidth}px`;
    linkElement.style.height = `${project1.displayHeight}px`;
    linkElement.style.zIndex = '1'; // Make sure the link is on top of the image
    this.game.canvas.parentElement.appendChild(linkElement);
    project1.setInteractive();
    project1.on('pointerdown', () => {
    window.open(linkElement.href, linkElement.target);
    });

    //2010
    let project2 = this.add.image(2190, 920, 'project2');
    project2.setScale(0.4);
    const linkElement1 = document.createElement('a');
    linkElement1.id = 'project2';
    linkElement1.href = 'https://github.com/MrGREAT20/CricInfoScrapper'; // Replace with your desired URL
    linkElement1.target = '_blank'; // Open the link in a new tab/window
    linkElement1.style.position = 'absolute';
    linkElement1.style.top = '920px'; // Adjust this value
    linkElement1.style.left = '2190px'; // Adjust this value
    linkElement1.style.width = `${project2.displayWidth}px`;
    linkElement1.style.height = `${project2.displayHeight}px`;
    linkElement1.style.zIndex = '1'; // Make sure the link is on top of the image
    this.game.canvas.parentElement.appendChild(linkElement1);
    project2.setInteractive();
    project2.on('pointerdown', () => {
    window.open(linkElement1.href, linkElement1.target);
    });

    let project3 = this.add.image(2470, 920, 'project3');
    project3.setScale(0.4);
    const linkElement2 = document.createElement('a');
    linkElement2.id = 'project3';
    linkElement2.href = 'https://github.com/MrGREAT20/news_app'; // Replace with your desired URL
    linkElement2.target = '_blank'; // Open the link in a new tab/window
    linkElement2.style.position = 'absolute';
    linkElement2.style.top = '920px'; // Adjust this value
    linkElement2.style.left = '2190px'; // Adjust this value
    linkElement2.style.width = `${project3.displayWidth}px`;
    linkElement2.style.height = `${project3.displayHeight}px`;
    linkElement2.style.zIndex = '1'; // Make sure the link is on top of the image
    this.game.canvas.parentElement.appendChild(linkElement2);
    project3.setInteractive();
    project3.on('pointerdown', () => {
    window.open(linkElement2.href, linkElement2.target);
    });



    this.add.bitmapText(2800, 720,'carrier_command','Achievements',12);

    let project4 = this.add.image(3000, 920, 'codeforces');
    project4.setScale(0.1);
    const linkElement3 = document.createElement('a');
    linkElement3.id = 'project4';
    linkElement3.href = 'https://codeforces.com/profile/Great_20'; // Replace with your desired URL
    linkElement3.target = '_blank'; // Open the link in a new tab/window
    linkElement3.style.position = 'absolute';
    linkElement3.style.top = '920px'; // Adjust this value
    linkElement3.style.left = '2190px'; // Adjust this value
    linkElement3.style.width = `${project4.displayWidth}px`;
    linkElement3.style.height = `${project4.displayHeight}px`;
    linkElement3.style.zIndex = '1'; // Make sure the link is on top of the image
    this.game.canvas.parentElement.appendChild(linkElement3);
    project4.setInteractive();
    project4.on('pointerdown', () => {
    window.open(linkElement3.href, linkElement3.target);
    });


    let project5 = this.add.image(3250, 920, 'codechef');
    project5.setScale(0.1);
    const linkElement4 = document.createElement('a');
    linkElement4.id = 'project5';
    linkElement4.href = 'https://www.codechef.com/users/mrgreat_20'; // Replace with your desired URL
    linkElement4.target = '_blank'; // Open the link in a new tab/window
    linkElement4.style.position = 'absolute';
    linkElement4.style.top = '920px'; // Adjust this value
    linkElement4.style.left = '2190px'; // Adjust this value
    linkElement4.style.width = `${project5.displayWidth}px`;
    linkElement4.style.height = `${project5.displayHeight}px`;
    linkElement4.style.zIndex = '1'; // Make sure the link is on top of the image
    this.game.canvas.parentElement.appendChild(linkElement4);
    project5.setInteractive();
    project5.on('pointerdown', () => {
    window.open(linkElement4.href, linkElement4.target);
    });

    let project6 = this.add.image(3500, 920, 'leetcode');
    project6.setScale(0.1);
    const linkElement5 = document.createElement('a');
    linkElement5.id = 'project6';
    linkElement5.href = 'https://leetcode.com/Great123/'; // Replace with your desired URL
    linkElement5.target = '_blank'; // Open the link in a new tab/window
    linkElement5.style.position = 'absolute';
    linkElement5.style.top = '920px'; // Adjust this value
    linkElement5.style.left = '2190px'; // Adjust this value
    linkElement5.style.width = `${project6.displayWidth}px`;
    linkElement5.style.height = `${project6.displayHeight}px`;
    linkElement5.style.zIndex = '1'; // Make sure the link is on top of the image
    this.game.canvas.parentElement.appendChild(linkElement5);
    project6.setInteractive();
    project6.on('pointerdown', () => {
    window.open(linkElement5.href, linkElement5.target);
    });



    //3750
    let project7 = this.add.image(3750, 920, 'icpc');
    project7.setScale(0.15);
    const linkElement6 = document.createElement('a');
    linkElement6.id = 'project6';
    linkElement6.href = 'https://drive.google.com/file/d/15LT6ZY3RthjVFHL-5Qqzo-1rlagbzCOq/view'; // Replace with your desired URL
    linkElement6.target = '_blank'; // Open the link in a new tab/window
    linkElement6.style.position = 'absolute';
    linkElement6.style.top = '920px'; // Adjust this value
    linkElement6.style.left = '2190px'; // Adjust this value
    linkElement6.style.width = `${project7.displayWidth}px`;
    linkElement6.style.height = `${project7.displayHeight}px`;
    linkElement6.style.zIndex = '1'; // Make sure the link is on top of the image
    this.game.canvas.parentElement.appendChild(linkElement6);
    project7.setInteractive();
    project7.on('pointerdown', () => {
    window.open(linkElement6.href, linkElement6.target);
    });



    let project8 = this.add.image(4000, 920, 'meta');
    project8.setScale(0.15);
    const linkElement7 = document.createElement('a');
    linkElement7.id = 'project8';
    linkElement7.href = 'https://www.facebook.com/codingcompetitions/hacker-cup/2022/certificate/3286653384956061'; // Replace with your desired URL
    linkElement7.target = '_blank'; // Open the link in a new tab/window
    linkElement7.style.position = 'absolute';
    linkElement7.style.top = '920px'; // Adjust this value
    linkElement7.style.left = '2190px'; // Adjust this value
    linkElement7.style.width = `${project8.displayWidth}px`;
    linkElement7.style.height = `${project8.displayHeight}px`;
    linkElement7.style.zIndex = '1'; // Make sure the link is on top of the image
    this.game.canvas.parentElement.appendChild(linkElement7);
    project8.setInteractive();
    project8.on('pointerdown', () => {
    window.open(linkElement7.href, linkElement7.target);
    });


    let drawings = this.add.image(4400, 890, 'drawings');
    drawings.setScale(0.2);
    
    //lets add the character here
    //let player = this.add.sprite(100, H-140, 'character', 4); 
    //here we create our character as a NORMAL OBJECT but we want to use PHYSICS ENGINE on our CHARACTER

    this.player = this.physics.add.sprite(100, H-170, 'character', 4); 
    //Now we applied physics to our character, physics which we mentioned in the config object

    this.player.setCollideWorldBounds(true);

    

    //Now we will do player animation and movements

    this.anims.create({
        key:'left',
        frames:this.anims.generateFrameNumbers('character', {start:0, end:3}),
        frameRate: 10,
        repeat:-1 //means infinite
    });
    this.anims.create({
        key:'right',
        frames:this.anims.generateFrameNumbers('character', {start:5, end:8}),
        frameRate: 10,
        repeat:-1 //means infinite
    });
    this.anims.create({
        key:'middle',
        frames:[{key: 'character', frame:4}],
        frameRate: 10,
        repeat:-1 //means infinite
    })

    //keyboard
    this.cursors = this.input.keyboard.createCursorKeys(); //to listen to the keystrokes, you have to create this function




    

    // this.physics.add.existing(ground); //this means, we made our ground a REAL OBJECT
    // ground.body.allowGravity = false;  //we dont want our GROUND to fall lol, so we are not applying our gravity property on it
    // ground.body.immovable = true;
    
    //add a collision detection between player and ground
    this.physics.add.collider(platformGroup, this.player);

    let bmpText = this.add.bitmapText(10, H-200,'carrier_command','Start!',12);
    this.add.bitmapText(10, H-270, 'carrier_command', 'Click on Images for viewing', 10);
    this.add.bitmapText(10, H-250, 'carrier_command', 'Press -> to move Right', 10);
    this.add.bitmapText(10, H-230, 'carrier_command', 'Press <- to move Left', 10);
    //bmpText.inputEnabled = true;
    // bmpText.input.enableDrag();

    this.cameras.main.setBounds(0,-1*H,2*W,2*H);
    this.physics.world.setBounds(0,0,2*W,2*H);
    
    this.cameras.main.startFollow(this.player,true,true);
    this.cameras.main.setZoom(2);


}
function update(){
    if(this.cursors.left.isDown){
        this.player.setVelocity((-1)*(game_config.player_speed));
        this.player.anims.play('left', true);
    }
    else if(this.cursors.right.isDown){
        this.player.setVelocity(game_config.player_speed);
        this.player.anims.play('right', true);
    }
    else{
        this.player.setVelocity(0);
        this.player.anims.play('middle', true);
    }
    // this.player.update();
    // this.cameras.main.scrollX = (this.player.x - 160);
    //this.cameras.main.scrollX = (this.player.x - 160).clamp(0, this.physics.world.bounds.width - W);
    //console.log(this.player.x + " " + this.player.y);
}