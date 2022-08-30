import { Route, Routes, } from "react-router-dom";

import Koti from "./Koti";
import Kuvat from "./Kuvat";
import Yhteys from "./Yhteys";

const Content = () => {
    return (
        <div id="content-wrap">
            <Routes>
                <Route path="/" element={<Koti />} />
                <Route path="/kuvat" element={<Kuvat />} />
                <Route path="/yhteys" element={<Yhteys />} />
            </Routes>
        </div>
    )
}

export default Content;