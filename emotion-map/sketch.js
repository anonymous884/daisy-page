let canvas_width = 1000
let canvas_height = 800
let canvas_color = [255,255,255]

var img_width = 500

var CLICKED_COUNT = 0
var emo_list = [
    "anger", "sadness", "joy", "surprise",
    "bittersweetness", "pride", "envy", "outrage", "disappointment", "delight"
]
var text_dict = {
    "Oh my god, what are the chances.": 1,
    "How do you know this.": 2,
    "You really did it again.": 3,
    "You are not attending the event.": 4,
    "He was so close to me.": 5,
    "We are running out of milk.": 6,
    "Let me tell you something.": 7,
    "That's exactly what happened.": 8,
    "Can you believe it.": 9,
    "Again, overall, not just for me.": 10
}
var active_emo = "-"
var ints2opac = {
    0.0: 0.25,
    0.25: 0.70,
    0.5: 0.75,
    0.75: 0.80,
    1.00: 0.85,
    1.25: 0.90,
    1.5: 0.95,
    1.75: 1.0,
}


function setup() {
    createCanvas(canvas_width, canvas_height)
    background(color(canvas_color[0],canvas_color[1], canvas_color[2]))


    CustomImage("assets/embedding-space/space-joy.png", img_width, ints2opac[0.0], "img_joy")
    CustomImage("assets/embedding-space/space-sadness.png", img_width, ints2opac[0.0], "img_sadness")
    CustomImage("assets/embedding-space/space-anger.png", img_width, ints2opac[0.0], "img_anger")
    CustomImage("assets/embedding-space/space-surprise.png", img_width, ints2opac[0.0], "img_surprise")
    
    CustomImage("assets/embedding-space/space-bittersweetness.png", img_width, ints2opac[0.0], "img_bittersweetness")
    CustomImage("assets/embedding-space/space-delight.png", img_width, ints2opac[0.0], "img_delight")
    CustomImage("assets/embedding-space/space-envy.png", img_width, ints2opac[0.0], "img_envy")
    CustomImage("assets/embedding-space/space-pride.png", img_width, ints2opac[0.0], "img_pride")
    CustomImage("assets/embedding-space/space-outrage.png", img_width, ints2opac[0.0], "img_outrage")
    CustomImage("assets/embedding-space/space-disappointment.png", img_width, ints2opac[0.0], "img_disappointment")

    Interface(canvas_width/2, canvas_height/8)

    // InteractiveImage("assets/embedding-space/space-sadness.png", 500, 150, 325, "sadness")
    // InteractiveImage("assets/embedding-space/space-anger.png", 500, 300, 320, "anger")
    // InteractiveImage("assets/embedding-space/space-surprise.png", 500, 180, 150, "surprise")

    // InteractiveImage("assets/embedding-space/space-bittersweetness.png", 500, 160, 260, "bittersweetness")
    // InteractiveImage("assets/embedding-space/space-delight.png", 500, 260, 130, "delight")
    // InteractiveImage("assets/embedding-space/space-envy.png", 500, 240, 350, "envy")
    // InteractiveImage("assets/embedding-space/space-pride.png", 500, 350, 275, "pride")
    // InteractiveImage("assets/embedding-space/space-outrage.png", 500, 310, 225, "outrage")
    // InteractiveImage("assets/embedding-space/space-disappointment.png", 500, 140, 200, "disappointment")

    // InteractiveText(500, 110)
}

// function draw() {

//     // Intensity indicator
//     //document.getElementById("intensity_info").intensity_info.innerHTML = "Intensity: " + document.getElementById("intensity_slider").intensity_slider.value()

//     // Emotion indicator
//     if (ACTIVE_EMOS["joy"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Joy"
//     }
//     else if (ACTIVE_EMOS["sadness"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Sadness"
//     }
//     else if (ACTIVE_EMOS["surprise"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Surprise"
//     }
//     else if (ACTIVE_EMOS["anger"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Anger"
//     }

//     else if (ACTIVE_EMOS["bittersweetness"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Bittersweetness"
//     }
//     else if (ACTIVE_EMOS["delight"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Delight"
//     }
//     else if (ACTIVE_EMOS["envy"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Envy"
//     }
//     else if (ACTIVE_EMOS["pride"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Pride"
//     }
//     else if (ACTIVE_EMOS["outrage"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Outrage"
//     }
//     else if (ACTIVE_EMOS["disappointment"] == 1) {
//         document.getElementById("emo_info").innerHTML = "Emotion: Disappointment"
//     }

//     else {
//         document.getElementById("emo_info").innerHTML = "Emotion: "
//     }
    

// }