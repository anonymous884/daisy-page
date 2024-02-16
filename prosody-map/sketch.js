let canvas_width = 500
let canvas_height = 500
let canvas_color = [255,255,255]

let img_width = 15
let img_height = 15

let datapoints = []


function preload() {
    proj_data = loadTable('assets/sample_data_for_grid_1k/metadata.csv', 'csv', 'header')
}

function setup() {
    createCanvas(canvas_width, canvas_height)
    background(color(canvas_color[0],canvas_color[1], canvas_color[2]))

    for (let row_idx = 0; row_idx < proj_data.getRowCount(); row_idx++) {
        let x = proj_data.getString(row_idx, 0)
        let y = proj_data.getString(row_idx, 1)
        let emo = proj_data.getString(row_idx, 2)
        let img_path = proj_data.getString(row_idx, 3)
        let wave_path = proj_data.getString(row_idx, 4)

        datapoints.push(
            new Datapoint(x, y, row_idx, img_path, img_width, img_height, emo, wave_path)
        )
        //break
    }
}




