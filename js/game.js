
var game = {
    music: "",
    background_image:"",
    levels: {

        start: {
            music: "../music/ve.mp3",
            color: "#e699ff",
            message: "Would you rather ?? ",
            choices: [
                {
                    text: "Start here",
                    nextLevel: "second",
                },
            ]
        },

        second: {
            color:"#ccdb46",
            background_image: "/img/greenhouse.jpg",
            music: "../music/[Free-scores.com]_grieg-edvard-morgenstimmung-5676.mp3",
            message: " Would you rather go into the past and meet your ancestors or go into the future and meet your great-great grandchildren?",
            choices: [
                {
                    text: "Meet your ancestors",
                    nextLevel: "open",
                    
                },
                {
                    text: "Meet your great-great grandchildren",
                    nextLevel: "leave",
                },
            ]
        },

        open: {
            color:"#ccdb46",
            music: "kirbyvictory.mp3",
            responseImage:"https://steemitimages.com/DQmRQEeG7Lbe6qfKU9LsTRDvGgkSvGDoyfSFKd2ZonAaXyM/gm.jpg",
            message: "While traveling back in time you got to to meet Whitney Houston and sang with her in on of her concerts",
            choices: [
                { 
                    text: "Yay!",
                    nextLevel: "three",
                },
            ]
        },
        
        leave: {
            color:"#ccdb46",
            music: "",
            responseImage:"",
            message: "While meeting your grandchildren you step on a lego while walking around in socks",
            choices: [
                {
                    text: "Damn",
                    nextLevel: "three",
                },
            ]
        },
        
        three: {
            color:"#ea48c4",
            music: "../music/careless_whispers.mp3",
            message:"Would you rather be able to talk with the animals or speak all foreign languages?",
            choices: [
                {
                    text: "Talk with animals",
                    nextLevel: "quick",
                    
                },
                
                {
                    text: "Speak all foreign languages",
                    nextLevel: "long",
                    
                },
            ]
        },
        
        quick: {
            color:"#ea48c4",
            music: "kirbyvictory.mp3",
            responseImage:"",
            message: "Okay Dr.Dolittle now you can open your own pet shop and make millions ",
            choices: [
                {
                    text: "Good for you",
                    nextLevel: "four",
                    
                },
                
            ]
        },
        
        long: {
            music:"../music/youstink.mp3",
            color:"#ea48c4",
            responseImage:"https://media.giphy.com/media/xgIE7sqLdaQta/giphy.gif",
            message: "Since you just traveled all over the world because you know every language you are now broke ",
            choices: [
                {
                    text: "Boy, now thats just crazy",
                    nextLevel: "four",
                },
                
            ]
        },
        
        four: {
            music: "../music/fallout.mp3",
            color:"#ff4d4d",
            message: "Would you rather lose your keys or your cell phone?",
            choices: [
                {
                    text: "Lose your keys",
                    nextLevel: "deli",
                    
                },
                
                {
                    text: "Lose your cell phone ",
                    nextLeverl: "oatmeal",
                    
                },
                
            ]
        },
        
        deli: {
            music: "../music/jjj.mp3",
            color:"#ff4d4d",
            responseImage:"https://media0.giphy.com/media/2xPPiPgwjVgSFmg5Ei/giphy.gif?cid=3640f6095c968b1e613248505126aaa2",
            message: "Okay so you're locked out of your apartment but you just got a 5% raise for a promotion, go celebrate ! ",
            choices: [
                {
                    text: "Don't risk it next time",
                    nextLevel: "five",
                },
                
            ]
        },
        
        oatmeal: {
            color:"#ff3333",
            music: "kirbyvictory.mp3",
            responseImage:"https://media.giphy.com/media/HsmYAhe5Wlkuk/giphy.gif",
            message: "Can you get a new phone ? NAH that was brand new, what are you doing still taking this quiz GO LOOK FOR IT !!",
            choices: [
                {
                    text: "Dummy ",
                    nextLevel: "five",
                },
                
            ]
        },
        
        five: {
            music: "../music/kahoot.mp3",
            color:"#d281e2",
            message: "Would you rather be in your pajamas or a suit all day?",
            choices: [
                {
                    text: "Pajamas ",
                    nextLevel: "old",
                },
                {
                    text: "Suit ",
                    nextLevel: "dishwasher",
                },
                
            ]
        },
        
        old: {
            music:"../music/gow.mp3",
            color:"	#d281e2",
            responseImage:"https://media1.giphy.com/media/12o0tOMUPNozPG/giphy.gif?cid=3640f6095c968bb34b3630582e7dbab1",
            message: "You may think that its very comfortable but how about that meeting with the CEO ?",
            choices: [
                {
                    text: "Sad :( ",
                    nextLevel: "six",
                },
            ]
        },
        
        dishwasher: {
            color:"#d281e2",
            music: "kirbyvictory.mp3",
            responseImage:"https://media1.giphy.com/media/7XULYpqQaZNBe/giphy.gif?cid=3640f6095c968bb34b3630582e7dbab1",
            message: "Okay looking sharp now lets go look for a job but avoid the club ",
            choices: [
                {
                    text: " #noGoldDiggersallowed",
                    nextLevel: "six",
                },
                
            ]
        },
        
        six: {
            music: "../music/Jeopardy Theme Song.mp3",
            color:"#669999",
            message: "Would you rather be 4’5” or 7’7 ? ",
            choices: [
                {
                    text: "Short Life ",
                    nextLevel: "walk",
                },
                {
                    text: "Long leg vibes ",
                    nextLevel: "drive",
                },
            ]
        },
        
        walk: {
            color:"#669999",
            music: "kirbyvictory.mp3",
            responseImage:"https://media3.giphy.com/media/hdEhU942MSM6Y/giphy.gif?cid=3640f6095c968cd570315461670280f0",
            message: "Being short gives you free rides at Coney Island but you will always get ID at the bar",
            choices: [
                {
                    text: "Its the short life ",
                    nextLevel: "seven",
                },
            ]
        }, 
        
        drive: {
            music:"../music/sadt.mp3",
            color:"#669999",
            responseImage:"https://media1.giphy.com/media/1zhIci7w4Kqug9hu7x/giphy.gif?cid=3640f6095c968e133253346d77006e30",
            message: "Start playing basket ball because the NBA is about to call you ",
            choices: [
                {
                    text: "Slam Dunk ",
                    nextLevel: "seven",
                },
            ]
        },
        
        seven: {
            color:"#00cc66",
            music: "Halo-Theme.mp3",
            message: "Would you rather ?",
            choices: [
                {
                    text: "Quick game of decisions",
                    nextLevel: "start",
                },
            ]
        },
    }
};