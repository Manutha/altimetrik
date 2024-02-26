import { Routes, Route, Navigate } from "react-router-dom";
import App from '../App';
import { FC } from "react";
import Contact from "../Contact"; 
import Services from "../Services";
import Filter from "../Filter";
import Gallery from "../Gallery";

const AppRoute: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
            <Route path="/filter" element={<Filter/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    )
}

export default AppRoute;
