 let locaTion= `delhi`;
 let key=`LN75KJBHKM33282Z2S7VU89W9`
 let date1= `2024-03-08`
 let date2= `2024-03-18`
 let count=1;

 const fieldValue= document.querySelector('#locationInput');
 const details= document.querySelector('#weatherDetails');

 function fetchData(){
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locaTion}/${date1}/${date2}?key=${key}`)
    .then(response=>{
        const dataArray=response.json();
        dataArray.then(data=>{
            details.innerHTML='';
            details.appendChild(createTable(data.days));
        })
    })
 }

function searchWeather(){
    locaTion=fieldValue.value;
    fetchData();
}

function createTable(days){
    const table= document.createElement('table');
    table.appendChild(createHead());
    days.forEach(ele=>{
        table.appendChild(createRow(ele));
    });
    return table;
}

function createRow(ele){
    const row= document.createElement('tr');
    row.appendChild(createCell(ele.datetime));
    console.log(convertToCelcius( ele.temp));
    row.appendChild(createCell(convertToCelcius( ele.tempmin)));
    row.appendChild(createCell(convertToCelcius( ele.tempmax)));
    row.appendChild(createCell(convertToCelcius( ele.temp)));
    row.appendChild(createCell( ele.description));
    return row;
}

function createHead(){
    const row= document.createElement('tr');
    row.appendChild(createCell('Date','th'));
    row.appendChild(createCell('Min Temp','th'));
    row.appendChild(createCell('Max Temp','th'));
    row.appendChild(createCell('Avg Temp','th'));
    row.appendChild(createCell('Description','th'));
    return row;
}

function createCell(str,type='td'){
    const cell= document.createElement(type);
    cell.innerHTML=str;
    const celsius= parseInt(str.toString().slice(0,2));
    if(count%5!=1){
        if (celsius < 15) {
            cell.style.backgroundColor='#add8e6';
        } else if (celsius >= 15 && celsius < 25) {
            cell.style.backgroundColor='#90ee90';
        } else if(celsius>=25&&celsius<90){
            cell.style.backgroundColor='#ffa500';
        }
    }
    count++;
        console.log(celsius);
    return cell;
}

function convertToCelcius(temp){
    let cel= (temp-32)*5/9;
    return `${cel.toString().slice(0,5)}°C`;
}
