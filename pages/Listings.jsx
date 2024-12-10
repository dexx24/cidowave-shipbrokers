import React from "react";
import { Outlet } from "react-router-dom"

export default function Listings(){
    return(
        <div className="listings">
            <h3>Discover Our Latest Vessel Opportunities</h3>
            <h5>Browse a curated selection of ships for sale and charter</h5>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}