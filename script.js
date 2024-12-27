let myType = 'prognos'
let tupeMy = myType
tupeMy = 32
const ili = tupeMy > 22
console.log(ili)

let hipi = 'tury'
let holi = `tisyha ${hipi}`
console.log(holi)

let re = 65
console.log(typeof re)
re = String(re)
console.log(typeof re)
re = Number(re)
console.log(typeof re)

let uu = re
uu +=re
console.log(uu)

let list = '25'+('15' * '120')
list = Number(list)
console.log(list)
console.log(typeof list)

//list = String(list)
//console.log(typeof list)

let gig = list / 3000
console.log(gig)
console.log(typeof gig)

let nn = 150 - ++gig 
console.log(nn)
let data = gig <= nn
console.log(data)
console.log(typeof data)

let roli = 30
let dada = ' скорее всего '
let fafa = 'ну уж нет '

if( roli > 45) {
    console.log(dada)
} else{
    console.log(fafa)
}
let ttr = (92 === '92' || 50 < 100) ? 'истина' : 'нет';
console.log(ttr)

let joli = 0 
for ( ;joli < 5; joli++){
    console.log(joli);
    if (joli==3) break;
}
console.log(`ye ${joli}`)

let fc = 1
for(; fc<30;fc++){
    if(fc==15)continue;
    console.log(fc);
}

let noon = 3;
while(noon > 0){
    console.log(`число ${noon}`);
    noon--;
}
//прекратить работу цикла когда =1
for ( let non= 0; non < 4; non++) {
    for( let size = 0; size < 3; size++){
        if (size==3 ) break
        console.log(size)
    }
}
