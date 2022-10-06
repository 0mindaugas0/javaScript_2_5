let a;
a = 158;
let b;
b = 147;
let c;
c = 139;

let x;
x = 156.4746;
let y;
y = 461.4846;
let z;
z = 147.6532

let plotas1 = plotoSkaiciavimas (a, b, c);
console.log (plotas1);

let plotas2 = plotoSkaiciavimas (x, y, z);
console.log (plotas2);

function plotoSkaiciavimas (ilgis, plotis, aukstis){
    return 2 * ilgis * plotis + 2 * ilgis * aukstis + 2 * plotis * aukstis
}
