import "./list.css";
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/navbar/SearchItem";



const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    return (
        <div><Navbar />

            <div className="header">
                <div className="headerContainer">
                    <div className="headerList">
                        <div className="headerListItem active">
                            <FontAwesomeIcon icon={faBed} />
                            <span>Stays</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Flights</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car rentals</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faBed} />
                            <span>Attractions</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faTaxi} />
                            <span>Airport taxis</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ListContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="IsTitle">Search</h1>
                        <div className="isItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />

                        </div>
                        <div className="isItem">
                            <label>Check-In-Date</label>
                            <span>{`${format(date[0].startDate, "MM/dd/yyyy")}to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        </div>
                        <div className="isItem">
                            <label>Options</label>
                            <div className="isOptions">
                                <div className="isOptionItem">
                                    <span className="isOptinText">Min price <small>per night</small></span>
                                    <input type="number " className="isOptionInput" />
                                </div>
                                <div className="isOptionItem">
                                    <span className="isOptinText">Max price <small>per night</small></span>
                                    <input type="number " className="isOptionInput" />
                                </div>
                                <div className="isOptionItem">
                                    <span className="isOptinText">Adult</span>
                                    <input type="number " min={1} className="isOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="isOptionItem">
                                    <span className="isOptinText">Children</span>
                                    <input type="number " min={0} className="isOptionInput" placeholder={options.children} />
                                </div>
                                <div className="isOptionItem">
                                    <span className="isOptinText">Room</span>
                                    <input type="number " min={1} className="isOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>

                        <SearchItem/>


                    </div>
                </div>
            </div>
        </div>

    )

}

export default List;



