import React from  'react';
import './Content.scss';

import Card from './Card';

const Content = ({data, columns}) => {
    const   columsData = [],
            renderE =[];
    for (let o = 0; o < columns; o++) {
        let item = []
        for (let i = 0; i < Math.ceil(data.length / columns); i++) {
            if(data[i * columns + o] !== undefined) item.push(data[i * columns + o])
        }
        columsData.push(item)
    }
    for (let m = 0; m < columsData.length; m++) {
        renderE.push(
            <div key={m} className="container">
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