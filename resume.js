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

    let education = this.add.image(572,990,'education');
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
    //this.add.button(1910, 920, 'project1', () => {window.open(`https://github.com/MrGREAT20?tab=repositories`)});

    //2010
    let project2 = this.add.image(2190, 920, 'project2');
    project2.setScale(0.4);

    let project3 = this.add.image(2470, 920, 'project3');
    project3.setScale(0.4);



    this.add.bitmapText(2800, 720,'carrier_command','Achievements',12);

    let cf = this.add.image(3000, 920, 'codeforces');
    cf.setScale(0.1)

    let cc = this.add.image(3250, 920, 'codechef');
    cc.setScale(0.1)

    let lc = this.add.image(3500, 920, 'leetcode');
    lc.setScale(0.1)

    //3750
    let icpc = this.add.image(3750, 920, 'icpc');
    icpc.setScale(0.15);

    let meta = this.add.image(4000, 920, 'meta');
    meta.setScale(0.15);


    
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