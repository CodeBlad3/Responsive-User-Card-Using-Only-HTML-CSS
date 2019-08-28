function processData(input) {
    let r = input.split("\n");
    var f = {};


    while (Number(r[0] > 0)) {

        f[r[1].split(" ")[0]] = r[1].split(" ")[1];
        r[0] = Number(r[0]) - 1;
        r.splice(1, 1);
    }
    r.splice(0, 1);
    console.log(f);

    for (let i = 0; i < Object.getOwnPropertyNames(f).length; i++) {
        console.log(f.hasOwnProperty(r[i]) == true ? r[i] + "=" + f[r[i]] : "Not found");
    }
}

let datos = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";

processData(datos);