import React, { useState } from 'react'
import "./WhatsOnGridList.css"

import {events} from "../assets/data/whats-on.js"

const WhatsOnGridList = () => {
    const eventsList = events.map((item) => 
        <li className='grid-item' key={item.id}>
            <div>
                <picture>
                    <img src={item.imgId.Event_1} alt={item.title}/>
                </picture>
            </div>
            <div className='content'>
                <div>{item.venue}</div>
                <h3 className='heading-h3'>{item.title}</h3>
                <p className='text'>{item.description}</p>
                <a className='btn btn-primary margin-top-s' href={item.link}>{item.btnLabel}</a>
            </div>
        </li>
    )
    
    const [itemList, setItemList] = useState(eventsList);

    const sportsbarEvents = events.filter(item => 
        item.venue.toLowerCase() === "sportsbar"
    )

    const sportsbarList = sportsbarEvents.map((item) => 
        <li className='grid-item' key={item.id}>
            <div>
                <picture>
                    <img src={item.imgId.Event_1} alt={item.title}/>
                </picture>
            </div>
            <div className='content'>
                <div>{item.venue}</div>
                <h3 className='heading-h3'>{item.title}</h3>
                <p className='text'>{item.description}</p>
                <a className='btn btn-primary margin-top-s' href={item.link}>{item.btnLabel}</a>
            </div>
        </li>
    )

    const innaEvents = events.filter(item => 
        item.venue.toLowerCase() === "inna lounge"
    )

    const innaList = innaEvents.map((item) => 
        <li className='grid-item' key={item.id}>
            <div>
                <picture>
                    <img src={item.imgId.Event_1} alt={item.title}/>
                </picture>
            </div>
            <div className='content'>
                <div>{item.venue}</div>
                <h3 className='heading-h3'>{item.title}</h3>
                <p className='text'>{item.description}</p>
                <a className='btn btn-primary margin-top-s' href={item.link}>{item.btnLabel}</a>
            </div>
        </li>
    )

    const taylorsEvents = events.filter(item => 
        item.venue.toLowerCase() === "taylors rooftop"
    )

    const taylorsList = taylorsEvents.map((item) => 
        <li className='grid-item' key={item.id}>
            <div>
                <picture>
                    <img src={item.imgId.Event_1} alt={item.title}/>
                </picture>
            </div>
            <div className='content'>
                <div>{item.venue}</div>
                <h3 className='heading-h3'>{item.title}</h3>
                <p className='text'>{item.description}</p>
                <a className='btn btn-primary margin-top-s' href={item.link}>{item.btnLabel}</a>
            </div>
        </li>
    )

    const handleChange = (event) => {
        let selected = event.target.value;
        if(selected.toLowerCase() === "all"){
            setItemList(eventsList);
        } if(selected.toLowerCase() === "sportsbar"){
            setItemList(sportsbarList);
        } if(selected.toLowerCase() === "inna lounge"){
            setItemList(innaList);
        } if(selected.toLowerCase() === "taylors rooftop"){
            setItemList(taylorsList);
        }
    }

    return (
        <div className='whats-on-grid-list-container'>
        <div className='container'>
            <div className='row'>
                <div className='column'>
                    <div className='grid-container'>
                        <div className='filter-container margin-bottom-m'>
                            <label for="venue"></label>
                                <select className='text' name="venue" id="venue" onChange={handleChange}>
                                    <option value="All">All</option>
                                    <option value="Sportsbar">Sportsbar</option>
                                    <option value="Inna Lounge">Inna Lounge</option>
                                    <option value="Taylors Rooftop">Taylors Rooftop</option>
                                </select>
                        </div>
                        <ul>
                            {itemList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WhatsOnGridList
