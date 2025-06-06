import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";
import Gallery1 from "./Gallery1";
import Counter from "./Counter";
import MovingDot from "./MovingDot";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List1 from "./List1";
import List2 from "./List2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";

function Atividade04() {
    return(
         <>
            <h1>Atividade 04</h1><br/><br/>
            <Toolbar /><br/><br/>
            <Gallery1 /><br/><br/>
            <Counter /><br/><br/>
            <Form /><br/><br/>
            <MovingDot /><br/><br/>
            <Form2 /><br/><br/>
            <Form3 /><br/><br/>
            <List1 /><br/><br/>
            <List2 /><br/><br/>
            <ShapeEditor /><br/><br/>
            <CounterList /><br/><br/>
            <Link to="/">Voltar</Link>
        </> 

    );
}

export default Atividade04;