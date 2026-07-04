const bargraph = document.getElementById("bargraph") // select the canvas 
// draw the bargraph insdie a canvas (dreawing pad)
new Chart( bargraph , {
    type:"bar",
    data:{
        labels:["Mon","Tue","Wed","Thu","Fri","Sat" , "Sun"] ,
        // multiple data given
        datasets:[
            {
                label:"Study Hours" ,
                data:[2,4,3,5,6,1,6,4] , // assign the data into datalabels like monday : 2 hours study
                backgroundColor:"#2563EB" ,
                borderRadius: 6 
            },
            {
                label:"Practice Hours" ,
                data:[1,2,5,3,5,2,6,8] , // assign the data into datalabels like monday : 2 hours study
                backgroundColor:"#c4d6ff" ,
                borderRadius: 6 
            },
        ]
    },
    options:{
        responsive:true ,
        // when to start in y axis 
        scales:{
            y:{
                beginAtZero:true
            }
        }
    }
}
)

// roundcanvas pie chart 
const piechart = document.getElementById("roundgraph") 
new Chart( piechart , {
    type:"doughnut" ,
    data:{
        labels:["Completed" , "Remaining" , "Practicing"] ,
        datasets:[
            {
                label:"Taks",
                data:[4,5,7] ,
                backgroundColor:["#2563EB", "#dbeafe" , "#18377a"],
                
            }
        ] 
    } ,
    options:{
        responsive:true ,
        cutout:"65%"
    }
    
}

)
