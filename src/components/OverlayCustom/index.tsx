import { Children, ReactNode, useRef, useState } from "react"
import { Button, Overlay, Popover } from "react-bootstrap"
import { Placement } from "react-bootstrap/esm/types"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

interface OverlayCustomProps {
  children: ReactNode
  placement?: Placement
  width: string
}

export const OverlayCustom = ({ children, placement = "auto", width = "240px" }: OverlayCustomProps) => {

  const header = Children.toArray(children).find((child: any) => child.type === Header)
  const content = Children.toArray(children).find((child: any) => child.type === Content)
  const trigger = Children.toArray(children).find((child: any) => child.type === Trigger)

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(oldState => !oldState);
    //setTarget(event.target);
  };

  const handleClose = () => setShow(oldState => !oldState);

  const toggleOverlay = () => setShow(oldState => !oldState)

  return (<>

    {/*  <OverlayTrigger
      trigger="click"
      placement="auto"
      rootClose
      overlay={
        <>
          <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
              And here's some <strong>amazing</strong> content. It's very engaging.
              right?
            </Popover.Body>
          </Popover></>

      }
    >
      <div onClick={handleClose}>
        <Button variant="success">Click me to see</Button>
      </div>
    </OverlayTrigger> */}

    <>
      <OverlayTrigger
        trigger="click"
        delay={{ show: 250, hide: 400 }}
        show={show}
        onToggle={toggleOverlay}
        rootClose={true}
        placement={placement}
        overlay={
          <Popover id="popover-contained"
            style={{ width: `${width}`, minWidth: `${width}` }}
          >
            <Popover.Header>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">{header}</div>
                <div>
                  <button
                    className="btn btn-default"
                    onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg></button>
                </div>
              </div>
            </Popover.Header>
            <Popover.Body style={{ width: '100px' }}>
              {content}
            </Popover.Body>
          </Popover>
        }
      >
        <div className="d-inline">
          {trigger}
        </div>
      </OverlayTrigger>
    </>




  </>)


}

type HeaderProps = {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return <>{children}</>
}

type ContentProps = {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => {
  return <>{children}</>
}

type TriggerProps = {
  children: ReactNode
}

const Trigger = ({ children }: TriggerProps) => {
  return <>{children}</>
}

OverlayCustom.Header = Header
OverlayCustom.Content = Content
OverlayCustom.Trigger = Trigger
