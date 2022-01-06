import React, { useState } from "react"
import { FormControl, Form, InputGroup, Button, ToggleButton } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function TabSearch() {
let foodInput = "";
let history = useHistory();
const handleSubmit = (e) => {
e.preventDefault();
let foodName = foodInput.value;
let path = `/search?q=${foodName}`;
history.push(path);
};
const [show, setShow] = useState(true);
//        let searchs = document.getElementById('searchTab');
//         searchs.onClick = function() {
//                 searchs.classList.toggle('searchWidth');
//         }
return (
<>
        <div>
            {
                show?<FormControl type="search"
                ref={(input) => (foodInput = input)}
                placeholder="&#128269; Хайх"
                id="searchTab"
                className="me-2"
                aria-label="Search"></FormControl>
               :null
            }
        </div>
        <Button variant="outline-none" className="searchpng search" onClick={()=>setShow(!show)}>
                <img src="/icons/searchButton.svg" alt="" width={20} height={25} />
        </Button>
</>
);
}

export default TabSearch;