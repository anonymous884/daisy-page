
function setEmotion(emotion_a, emotion_b) {

    var emotion = ""
    var emotion_type = ""
    var emotions = [emotion_a, emotion_b]

    if (emotion_b == "none" || emotion_a == emotion_b) {
        emotion = emotion_a
        emotion_type = "primary"
    }
    else if (emotions.includes("joy") && emotions.includes("sadness")) {
        emotion = "bittersweetness"
        emotion_type = "mixed"
    }
    else if (emotions.includes("joy") && emotions.includes("surprise")) {
        emotion = "delight"
        emotion_type = "mixed"
    }
    else if (emotions.includes("joy") && emotions.includes("anger")) {
        emotion = "pride"
        emotion_type = "mixed"
    }
    else if (emotions.includes("sadness") && emotions.includes("surprise")) {
        emotion = "disappointment"
        emotion_type = "mixed"
    }
    else if (emotions.includes("sadness") && emotions.includes("anger")) {
        emotion = "envy"
        emotion_type = "mixed"
    }
    else if (emotions.includes("surprise") && emotions.includes("anger")) {
        emotion = "outrage"
        emotion_type = "mixed"
    }

    return [emotion, emotion_type]
}


function changeData() {
    var chart = Chart.getChart("eigenchart_canvas")
    var wave = document.getElementById("wave_display")

    var emotion_a = document.getElementById("emotion_a").value
    var emotion_b = document.getElementById("emotion_b").value
    var text_id = document.getElementById("texts").value
    var speaker_id = document.getElementById("speakers").value
    var scaler_a = parseFloat(document.getElementById("scaler_a").value).toFixed(2)
    var scaler_b = parseFloat(document.getElementById("scaler_b").value).toFixed(2)

    var emotion_and_type = setEmotion(emotion_a, emotion_b)
    var emotion = emotion_and_type[0]
    var emotion_type = emotion_and_type[1] 
    if (emotion_type == "primary") {
        scaler_b = (0.0).toFixed(1)
        var eigenvals = []
        for (let step = 0; step < 5; step++) {
            eigenvals.push(scaler_a*chartDecor.eigenvals[emotion][step])
        }
    }
    else {
        var eigenvals = []
        for (let step = 0; step < 5; step++) {
            eigenvals.push((scaler_a*chartDecor.eigenvals[emotion_a][step]) + (scaler_b*chartDecor.eigenvals[emotion_b][step]))
        }
    }

    var data = {
        labels: chartDecor.labels,
        datasets: [{
            label: "",
            data: eigenvals,
            fill: false,
            backgroundColor: `rgba(${chartDecor.rgb_vals[emotion]}, 0.2)`,
            borderColor: `rgb(${chartDecor.rgb_vals[emotion]})`,
            pointBackgroundColor: `rgb(0, 0, 0)`,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: `rgb(${chartDecor.rgb_vals[emotion]})`
            }
        ]
    }

    switch (emotion) {
        case "anger":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Anger"
            chart.config.options.plugins.title.color = 'rgb(255, 99, 132)'
            break
        case "sadness":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Sadness"
            chart.config.options.plugins.title.color = 'rgb(77, 75, 140)'
            break
        case "joy":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Joy"
            chart.config.options.plugins.title.color = 'rgb(100, 200, 110)' 
            break
        case "surprise":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Surprise"
            chart.config.options.plugins.title.color = 'rgb(86, 200, 250)'
            break

        case "bittersweetness":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Bittersweetness"
            chart.config.options.plugins.title.color = 'rgb(90, 140, 125)'
            break
        case "delight":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Delight"
            chart.config.options.plugins.title.color = 'rgb(90, 200, 180)'
            break
        case "pride":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Pride"
            chart.config.options.plugins.title.color = 'rgb(180, 150, 120)'
            break
        case "disappointment":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Disappointment"
            chart.config.options.plugins.title.color = 'rgb(120, 150, 200)'
            break
        case "envy":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Envy"
            chart.config.options.plugins.title.color = 'rgb(160, 80, 135)'
            break
        case "outrage":
            chart.config.data = data
            chart.config.options.plugins.title.text = "Outrage"
            chart.config.options.plugins.title.color = 'rgb(210, 125, 160)'
            break
    }

    wave.src = `assets/samples/daisy/${emotion}/spk=${speaker_id}--emo=${emotion}--txt=${text_id}--s_a=${scaler_a}--s_b=${scaler_b}.wav`

    console.log(wave.src)
    
    chart.update()
    
}