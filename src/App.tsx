/*import './App.css'
import { Card, CardBody } from './components/Card'
import { List } from './components/List'
import { Button } from './components/Button'
import { useState } from 'react'
import { Modal } from "./components/Modal"
*/

/*import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover'; */

import { Overlay } from './views/Overlay';

function App() {
  /*const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  */
  return (<>
    <Overlay />





    {/*  <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div> */}
  </>
  );


  /*const [data, setData] = useState(['Bulbasaur', 'Charmander', 'Squirtle'])
  const addMinion = () => setData([...data, 'Minion'])
  const deleteMinion = () => setData([...data.slice(0, -1)])
  const [open, setOpen] = useState(false)
   */

  // const [isLoading, setIsLoading] = useState(false)
  // const list = ['Bulbasaur', 'Charmander', 'Squirtle']

  // const handleClick = () => setIsLoading(!isLoading)
  // const handleSelect = (item: string) => {
  //   console.log("handleSelect", item)
  // }

  // return (
  //   <Card>
  //     <CardBody title='Hello' text="Este es el texto."></CardBody>
  //     {list.length !== 0 && (<List data={list} onSelect={handleSelect}></List>)}


  //     <Button isLoading={isLoading} onClick={handleClick}>Click me</Button>
  //   </Card>
  // )  

  return (
    <>
      <h1>Hi</h1>

      {/* <Card>
    <Button isLoading={true} onClick={addMinion}>Agregar</Button>
    <Button isLoading={false} onClick={deleteMinion}>Eliminar</Button>
    <List data={data} />
  </Card> */}

      {/* <button className="btn btn-danger" onClick={() => setOpen(true)}>
        Delete
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">

          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-danger w-full">Delete</button>
            <button
              className="btn btn-light w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal> */}
    </>)
}

export default App
