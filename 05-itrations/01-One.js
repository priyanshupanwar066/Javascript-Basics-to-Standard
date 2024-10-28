// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
if(element == 5){
    // console.log("5 is Best Number");
    
}
}

for (let i = 0; i <10; i++) {
    console.log(`Outer Loop Value ${i}`);
    for(let j= 0; j < 10; j++) {
    // console.log(`Inner Loop Value ${j} And Inner Loop`);
    // console.log(i + "*" + j ,' + ' + i*j);
    }
}



// break and continue

for (let i = 0; i < 20; i++) {
    if (i == 5){
        console.log(`Detected`);
        break;
        
    }
    console.log(`value of i is ${i}`);
}
