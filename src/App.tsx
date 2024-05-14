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
import { OverlayCustom } from './components/OverlayCustom';

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



    <OverlayCustom width="340px" placement='right'>
      <OverlayCustom.Header>
        <span>Áreas</span>
      </OverlayCustom.Header>
      <OverlayCustom.Content>
        <div className='bg-primary w-100'
        >contenido</div>
      </OverlayCustom.Content>
      <OverlayCustom.Trigger>
        <button className='btn btn-default'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
          </svg>
        </button>
      </OverlayCustom.Trigger>
    </OverlayCustom>


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
