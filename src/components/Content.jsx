import React from  'react';
import './Content.css';

import Card from './Card';



const Content = ({data, columns}) => {
    console.log('component total columns: ' + columns)
    const   columsData = [],
            renderE =[];

    // for (let i = 0; i < Math.ceil(data.length / columns); i++) {
    //     let item = []
    //     for (let o = 0; o < columns; o++) {
    //         console.log(i)
    //         if(data[i * columns + o] !== undefined) item.push(data[i * columns + o])
    //     }
    //     columsData.push(item)
    // }
    for (let o = 0; o < columns; o++) {
        let item = []
        for (let i = 0; i < Math.ceil(data.length / columns); i++) {
            console.log(i)
            if(data[i * columns + o] !== undefined) item.push(data[i * columns + o])
        }
        columsData.push(item)
    }

console.log(columsData)
    for (let m = 0; m < columsData.length; m++) {
        renderE.push(
            <div className="container">
                {
                    columsData[m].map(x => 
                    <Card 
                        key={x.id}
                        name={x.name}
                        image={x.image}
                        status={x.status}
                        origin={x.origin.name}
                        gender={x.gender}
                    />)
                }
            </div>
        )   
    }
    return renderE
};

export default Content;