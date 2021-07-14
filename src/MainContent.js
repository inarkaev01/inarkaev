import react, {useState} from 'react';
import Button from "./Button";
import Number from "./Number";
import React from "react";

function MainContent() {

    let [more, setMore] = useState(0);

    function moree(){
        setMore(more + 3)
    }
    function less(){
        if(more != 0){
            setMore(more - 2)
        }
    }
    function trash(){
        setMore(more = 0)
    }

    return (
        <div>
            <Number more={more}/>
            <Button moree={moree} less={less} trash={trash}/>

        </div>

    );
}

export default MainContent;