import React from 'react';

const ArrayToHTMLList = ({item}) => {
    const HTMLList = item.map((value) => <li>{value}</li>) 
    return (
        <React.Fragment>
            <ul>
                {HTMLList}
            </ul>
        </React.Fragment>
    );
}

export default function PropsInAction({name, age, address=null, city=null, country=null, books=[]}) {
    // Also you can use (props) as object parameter and then 
    // take many properties likep props.p1, props.t2 and so on
    console.log(name, age, address, city, country);
    
    return (
        <React.Fragment>
            <p>Your Name: {name}</p>
            <p>Your age: {age}</p>
            <p>Your address: {address}</p>
            <p>Your city: {city}</p>
            <p>Your country: {country}</p>
            <p>Your Books:</p>
            <ArrayToHTMLList item={books} />
        </React.Fragment>
    );
}