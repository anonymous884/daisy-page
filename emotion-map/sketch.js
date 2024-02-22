let canvas_width = 1000
let canvas_height = 800
let canvas_color = [255,255,255]

var img_width = 600

var polarize_checked = false

var CLICKED_COUNT = 0
var emo_list = [
    "anger", "sadness", "joy", "surprise",
    "bittersweetness", "pride", "envy", "outrage", "disappointment", "delight"
]
var text_dict = {
    "Oh my god, what are the chances.": 1,
    "How do you know this.": 2,
    // "You really did it again.": 3,
    // "You are not attending the event.": 4,
    // "He was so close to me.": 5,
    // "We are running out of milk.": 6,
    "Let me tell you something.": 7,
    "That's exactly what happened.": 8,
    // "Can you believe it.": 9,
    "Again, overall, not just for me.": 10
}
var active_emo = "sadness"
var ints2opac = {
    0.0: 0.25,
    0.25: 0.75,
    0.5: 0.75,
    0.75: 0.80,
    1.00: 0.85,
    1.25: 0.90,
    1.5: 0.95,
    1.75: 1.0,
}

var emo_colors = {
    'joy': '#ffe600',
    'sadness': '#1a66b2',
    'surprise': '#00af55',
    'anger': '#e3007d',
    'bittersweetness': '#8ca659',
    'delight': '#80ca2a',
    'disappointment': '#0d8b84',
    'envy': '#7e3398',
    'outrage': '#715869',
    'pride': '#f1733e',
    'polar joy': '#ff7300',
    'polar sadness': '#1a33b2',
    'neutral': '#607196'
}


function setup() {

    createCanvas(canvas_width, canvas_height)
    background(color(canvas_color[0],canvas_color[1], canvas_color[2]))

    let img_offset_x = -100
    let img_offset_y = -85

    let offset_y = 80
    let offset_x = 60

    CustomImage("assets/embedding-space/space-joy-v2.png", img_width, ints2opac[0.0], "img_joy", img_offset_x, img_offset_y)
    CustomImage("assets/embedding-space/space-sadness-v2.png", img_width, ints2opac[1.0], "img_sadness", img_offset_x, img_offset_y)
    CustomImage("assets/embedding-space/space-anger-v2.png", img_width, ints2opac[0.0], "img_anger", img_offset_x, img_offset_y)
    CustomImage("assets/embedding-space/space-surprise-v2.png", img_width, ints2opac[0.0], "img_surprise", img_offset_x, img_offset_y)
    
    CustomImage("assets/embedding-space/space-bittersweetness-v2.png", img_width, ints2opac[0.0], "img_bittersweetness", img_offset_x, img_offset_y)
    CustomImage("assets/embedding-space/space-delight-v2.png", img_width, ints2opac[0.0], "img_delight", img_offset_x, img_offset_y)
    CustomImage("assets/embedding-space/space-envy-v2.png", img_width, ints2opac[0.0], "img_envy", img_offset_x, img_offset_y)
    CustomImage("assets/embedding-space/space-pride-v2.png", img_width, ints2opac[0.0], "img_pride", img_offset_x, img_offset_y)
    CustomImage("assets/embedding-space/space-outrage-v2.png", img_width, ints2opac[0.0], "img_outrage", img_offset_x, img_offset_y)
    CustomImage("assets/embedding-space/space-disappointment-v2.png", img_width, ints2opac[0.0], "img_disappointment", img_offset_x, img_offset_y)

    Interface(canvas_width/2, canvas_height/8, offset_x, offset_y)

}