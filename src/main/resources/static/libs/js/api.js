const url1 = "http://api.marketstack.com/v1/eod?access_key=219b66d5ddbba739ae5b7d8dc9598be9&symbols=FER.BMEX";
const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=UFG.FRK&apikey=GADVTGDPHFS18TZV";

let llamarApi = async () => {
    let peticion = await fetch(url, {
        method : "GET",
    });

    // console.log(peticion);

    if (peticion.status === 200) {
        let datos = await peticion.json();
        // console.log(datos);
        // console.log(datos.data[0].open);
        // console.log(datos);

        let contador = 0;

        for (var key1 in datos){
            if (key1 == "Time Series (Daily)"){
                for (var key2 in datos[key1]){
                    const HTMLaCambiar = $("#tr"+contador);

                    HTMLaCambiar.html(`<td>${key2}</td>
                                <td>${datos[key1][key2]["4. close"]}</td>
                                <td>${datos[key1][key2]["1. open"]}</td>
                                <td>${datos[key1][key2]["2. high"]}</td>
                                <td>${datos[key1][key2]["3. low"]}</td>
                                <td>${datos[key1][key2]["5. volume"]}</td>`)

                    contador+=1;
                }
            }
        }

        // for (let i = 0; i<datos.data.length ; i++) {
        //     const HTMLaCambiar = $("#tr"+i);

        //     HTMLaCambiar.html(`<td>${datos.data[i].date.slice(0,10)}</td>
        //                         <td>${datos.data[i].close}</td>
        //                         <td>${datos.data[i].open}</td>
        //                         <td>${datos.data[i].high}</td>
        //                         <td>${datos.data[i].low}</td>
        //                         <td>${datos.data[i].volume}</td>`)
        // }

    } else {
        console.log("fallo");
        const HTMLaCambiar = $("#tr0");

        HTMLaCambiar.html(`<td>Se</td>
                            <td>ha llegado</td>
                            <td>al límite</td>
                            <td>de intentos</td>
                            <td>de la</td>
                            <td>API</td>`);
    };
};

llamarApi();

