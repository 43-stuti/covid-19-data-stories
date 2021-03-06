let a_recs = [];
let load_index = 0;
let tint_index = 0;
let a_run = 1;
let a_fast = 0;
let a_fast_n = 30;
let a_monoc = 1;
let a_mask = 1;
let images_prefix = '../images/';
let a_fps = 0.2;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  frameRate(a_fps);
  // background(0);
  background(255);
  sketch_ui();
}

function draw() {
  if (!a_run) return;
  load_next();
  tint_next();
}

function load_next() {
  if (load_index >= a_refs.length) {
    load_reset();
    return;
  }
  let rec = a_refs[load_index];
  load_index += 1;
  if (rec.h) {
    let arr = rec.h.split('/');
    let fname = arr[arr.length - 1];
    rec.fpath = images_prefix + fname;
    rec.himg = createImg(rec.fpath, 'image');
    load_image(rec);
  }
}

function tint_next() {
  if (tint_index >= a_recs.length) {
    tint_index = 0;
    if (tint_index >= a_recs.length) return;
  }
  let rec = a_recs[tint_index];
  tint_index += 1;
  tint(255, 10);
  // tint(255, 100);
  image(rec.img, 0, 0, width, height);
  show_text('msg', rec.d + ' ' + rec.e);
}

function load_reset() {
  removeElements();
  a_recs = [];
  load_index = 0;
  tint_index = 0;
  sketch_ui();
}
