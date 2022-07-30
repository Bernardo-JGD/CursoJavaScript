//async y await

async function funcionPromesaYAsync(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
    //await sólo se puede usar dentro de una función declarada con async
}

funcionPromesaYAsync();
