var opacity_clicked = "1.0"
var opacity_outed = "0.5"


function CustomImage(img_path, img_width, opacity, input_id, pos_x, pos_y) {

    this.obj = createDiv()

    this.obj.img = createImg(img_path)
    this.obj.img.id(input_id)
    this.obj.img.style("width", img_width)
    this.obj.img.position(pos_x, pos_y)
    this.obj.img.style("width", img_width + "px")
    this.obj.img.style("opacity", opacity)
}


function Interface(pos_x, pos_y, offset_x, offset_y) {

    function emo_dropdown_changed() {

        let emo_a = document.getElementById("emo_dropdown_a").value.toLowerCase()
        let emo_b = document.getElementById("emo_dropdown_b").value.toLowerCase()
        let emo = ""
        let active_emos = {}
        active_emos[emo_a] = 1
        active_emos[emo_b] = 1
        
        if (active_emos["joy"] == 1) {
            if (active_emos["sadness"] == 1) {
                emo = "Bittersweetness"
            }
            else if (active_emos["surprise"] == 1) {
                emo = "Delight"
            }
            else if (active_emos["anger"] == 1) {
                emo = "Pride"
            }
            else {
                emo = "Joy"
            }
        }
        else if (active_emos["sadness"] == 1) {
            if (active_emos["surprise"] == 1) {
                emo = "Disappointment"
            }
            else if (active_emos["anger"] == 1) {
                emo = "Envy"
            }
            else {
                emo = "Sadness"
            }
        }
        else if (active_emos["surprise"] == 1) {
            if (active_emos["anger"] == 1) {
                emo = "Outrage"
            }
            else {
                emo = "Surprise"
            }
        }
        else if (active_emos["anger"] == 1) {
            emo = "Anger"
        }
        
        document.getElementById("emo_header").textContent = "Select Emotion:  " + emo

        for (let i=0; i < 10; i++) {
            if (emo_list[i] != emo.toLowerCase()) {
                document.getElementById("img_" + emo_list[i]).style.opacity = 0.25
            }
            else {
                document.getElementById("img_" + emo_list[i]).style.opacity = ints2opac[document.getElementById("intensity_slider").value]
            }
        }

        active_emo = emo.toLowerCase()
        sample_emotion()
    }

    function intensity_slider_changed() {
        let ints = document.getElementById("intensity_slider").value
        document.getElementById("intensity_header").textContent = "Intensity:  " + ints
        if (active_emo != "-") {
            document.getElementById("img_" + active_emo).style.opacity = ints2opac[document.getElementById("intensity_slider").value]
        }
        sample_emotion()
    }

    function sample_emotion() {
        if (active_emo != "-") {
            let model_ = "rainbow"
            let spk_ = document.getElementById("spk_dropdown").value
            let emo_ = active_emo
            let alpha_ = document.getElementById("intensity_slider").value
            if (alpha_ == 1) {
                alpha_ = "1.0"
            }
            let txt_id_ = text_dict[document.getElementById("txt_dropdown").value]
            let wavepath = ""
            if (polarize_checked) {
                wavepath = "model=" + model_ + "-" + "spk=" + spk_ + "-" + "emo=" + emo_ + "-" + "s=-" + alpha_ + "-" + "txt=" + txt_id_ + ".wav"
            }
            else {
                wavepath = "model=" + model_ + "-" + "spk=" + spk_ + "-" + "emo=" + emo_ + "-" + "s=" + alpha_ + "-" + "txt=" + txt_id_ + ".wav"
            }
            console.log(wavepath)
            wavepath = "assets/waves/" + wavepath
            document.getElementById("waveplayer").src = wavepath

            // console.log(wavepath)
            // let wavepath_ = wavepath.split("/")[3]
            // let latent_coord = latent_coords[wavepath_]
            // let x = latent_coord[0]/5 - 100
            // let y = latent_coord[1]/5 + 100
            // this.coord.position(x, y)
            // console.log(x, y)
        }
    }

    function polarize_option_changed() {
        polarize_checked = this.checked()
        sample_emotion()
    }

    this.obj = createDiv()

    this.obj.emo_header = createP("Select Emotion: Sadness")
    this.obj.emo_header.id("emo_header")
    this.obj.emo_header.position(pos_x-offset_x, pos_y-offset_y)

    this.obj.emo_dropdown_a = createSelect()
    this.obj.emo_dropdown_a.id("emo_dropdown_a")
    this.obj.emo_dropdown_a.position(pos_x-offset_x, pos_y+40-offset_y)
    this.obj.emo_dropdown_a.option("-")
    this.obj.emo_dropdown_a.option("Sadness")
    this.obj.emo_dropdown_a.option("Joy")
    this.obj.emo_dropdown_a.option("Surprise")
    this.obj.emo_dropdown_a.option("Anger")
    this.obj.emo_dropdown_a.selected("Sadness")
    this.obj.emo_dropdown_a.changed(emo_dropdown_changed)

    this.plus_sign = createP("<b>+<b>")
    this.plus_sign.position(pos_x+95-offset_x, pos_y+25-offset_y)

    this.obj.emo_dropdown_b = createSelect()
    this.obj.emo_dropdown_b.id("emo_dropdown_b")
    this.obj.emo_dropdown_b.position(pos_x+120-offset_x, pos_y+40-offset_y)
    this.obj.emo_dropdown_b.option("-")
    this.obj.emo_dropdown_b.option("Sadness")
    this.obj.emo_dropdown_b.option("Joy")
    this.obj.emo_dropdown_b.option("Surprise")
    this.obj.emo_dropdown_b.option("Anger")
    this.obj.emo_dropdown_b.changed(emo_dropdown_changed)

    this.obj.polarize_option = createCheckbox()
    this.obj.polarize_option.id("polarize")
    this.obj.polarize_option.position(pos_x+215-offset_x, pos_y+40-offset_y)
    this.obj.polarize_option.changed(polarize_option_changed)

    this.obj.polarize_option.txt = createP("Polarize")
    this.obj.polarize_option.txt.position(pos_x+240-offset_x, pos_y+25-offset_y)
    

    this.obj.intensity_header = createP("Intensity: 1")
    this.obj.intensity_header.id("intensity_header")
    this.obj.intensity_header.position(pos_x-offset_x, pos_y+70-offset_y)

    this.obj.intensity_slider = createSlider(0.25, 1.75, 1, 0.75)
    this.obj.intensity_slider.id("intensity_slider")
    this.obj.intensity_slider.position(pos_x-offset_x, pos_y+110-offset_y)
    this.obj.intensity_slider.changed(intensity_slider_changed)

    this.obj.spk_header = createP("Select Speaker: ")
    this.obj.spk_header.id("spk_header")
    this.obj.spk_header.position(pos_x-offset_x, pos_y+145-offset_y)

    this.obj.spk_dropdown = createSelect()
    this.obj.spk_dropdown.id("spk_dropdown")
    this.obj.spk_dropdown.position(pos_x+140-offset_x, pos_y+160-offset_y)
    this.obj.spk_dropdown.option("0016")
    this.obj.spk_dropdown.option("0013")
    this.obj.spk_dropdown.option("0019")
    this.obj.spk_dropdown.option("0020")
    this.obj.spk_dropdown.selected("0016")
    this.obj.spk_dropdown.changed(sample_emotion)

    this.obj.txt_header = createP("Select Text: ")
    this.obj.txt_header.id("txt_header")
    this.obj.txt_header.position(pos_x-offset_x, pos_y+180-offset_y)

    this.obj.txt_dropdown = createSelect()
    this.obj.txt_dropdown.id("txt_dropdown")
    this.obj.txt_dropdown.position(pos_x+140-offset_x, pos_y+195-offset_y)
    this.obj.txt_dropdown.option("Oh my god, what are the chances.")
    this.obj.txt_dropdown.option("How do you know this.")
    // this.obj.txt_dropdown.option("You really did it again.")
    // this.obj.txt_dropdown.option("You are not attending the event.")
    // this.obj.txt_dropdown.option("He was so close to me.")
    // this.obj.txt_dropdown.option("We are running out of milk.")
    this.obj.txt_dropdown.option("Let me tell you something.")
    this.obj.txt_dropdown.option("That's exactly what happened.")
    // this.obj.txt_dropdown.option("Can you believe it.")
    this.obj.txt_dropdown.option("Again, overall, not just for me.")
    this.obj.txt_dropdown.selected("How do you know this.")
    this.obj.txt_dropdown.changed(sample_emotion)

    // this.obj.sample_button = createButton("Sample Emotion")
    // this.obj.sample_button.position(pos_x-offset_x, pos_y+275-offset_y)
    // this.obj.sample_button.mouseClicked(sample_emotion)

    // this.obj.sample_button.coord = createDiv()
    // this.obj.sample_button.coord.id("coord")
    // this.obj.sample_button.coord.position(0, 0)
    // this.obj.sample_button.coord.style("background-color", "#555")
    // this.obj.sample_button.coord.style("height", "12.5px")
    // this.obj.sample_button.coord.style("width", "12.5px")
    // this.obj.sample_button.coord.style("border-radius", "50%")

    this.obj.waveplayer = createAudio("")
    this.obj.waveplayer.id("waveplayer")
    this.obj.waveplayer.position(pos_x-offset_x, pos_y+300-offset_y)
    this.obj.waveplayer.showControls()

    // document.getElementById("waveplayer").src = "assets/waves/custom_texts/model=rainbow-spk=0016-emo=sadness-s=1.0-txt=1-n=2.wav"

    sample_emotion()
}


