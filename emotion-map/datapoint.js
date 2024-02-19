var opacity_hovered = "100%"
var opacity_outed = "20%"
var img_border_radius = "25%"


function Datapoint(x, y, row_idx, img_path, img_width, img_height, emo, wave_path) {
    
    function hovered() {
        this.style("opacity", opacity_hovered)
        this.textbox.style("display", "block")
    }
    function clicked() {
        //print(this.img_path)
        this.wave.play()
    }
    function outed() {
        this.style("opacity", opacity_outed)
        this.textbox.style("display", "none")
    }


    this.img = createImg(img_path, "data-" + row_idx)
    this.img.position(x - (img_width/2), y - (img_height/2))
    this.img.size(img_width, img_height)
    this.img.style("opacity", opacity_outed)
    this.img.style("border-radius", img_border_radius)

    this.img.img_path = img_path
    this.img.textbox = createElement("textarea", `emotion: ${emo}`)
    this.img.textbox.style("display", "none")
    this.img.textbox.elt.readonly = "yes"
    this.img.textbox.position(x, y)
    this.img.wave = loadSound(wave_path)

    this.img.mouseOver(hovered)
    this.img.mouseClicked(clicked)
    this.img.mouseOut(outed)
    

}