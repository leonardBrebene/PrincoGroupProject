import NavbarCustom from "../components/Navbar";
import { Card, Form, Button, Accordion } from 'react-bootstrap';
import FormToAddAPalet from "../components/FormToAddAPallet";
import useFetch from '../components/useFetch';
import { useState, useEffect } from "react";


const MateriiPrime = () => {
    const { data, isPending, error, setData } = useFetch("http://localhost:8080/stocuriMateriiPrime");
    // useEffect(() => {

    //     if (isPending===false) {                     //ziua in care am inteles cum merge destructurarea
    //         setData(data)
    //     }
    //     console.log(data)
    // }, [isPending, setData, data])
    return (
        <>
            <NavbarCustom />
            Materii Prime

            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Adauga palet</Accordion.Header>
                    <Accordion.Body >
                        <FormToAddAPalet />
                    </Accordion.Body>
                </Accordion.Item>

                {data&&data.map(palet =>
                    
                    <Accordion.Item eventKey={palet.idIntrare} key={palet.idIntrare}>
                        <Accordion.Header>Paletul {palet.id} cu {palet.material} </Accordion.Header>
                        <Accordion.Body>
                         Acest palet a fost creat de {palet.userName} la {palet.dateOfCreate}
                        </Accordion.Body>
                    </Accordion.Item>
                )}



                <Accordion.Item eventKey="10">
                    <Accordion.Header>Paletul nr 5 din 21/12/09</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </>
    );
}

export default MateriiPrime;