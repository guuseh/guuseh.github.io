import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Menu = ({small}) => {
    const navigate = useNavigate();

    const [top, setTop] = useState(-400)
    const [open, setOpen] = useState(false)

    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0,
      h: 100,
      image: "",
    });

    const handleMouseEnter = (image, h) => {
      setTooltip((prev) => ({...prev, visible: true, image: image, h: h}))
    }
    const handleMouseLeave = () => {
      setTooltip((prev) => ({...prev, visible: false}))
    }
    const handleMouseMove = (e) => {
      setTooltip((prev) => ({
        ...prev,
        x: e.clientX + 15,
        y: e.clientY - tooltip.h/2,
      }))
    }

    const handleMenu = () => {
      if(open){
        setTop(-400)
        setOpen(false)
      }else if(!open){
        setTop(65)
        setOpen(true)
      }
      
    }

  return (
    <>
    {!small ?
    <div className="navigation">
        <div className="nav" onClick={() => navigate('odditype')} onMouseEnter={() => handleMouseEnter("./img/odditype/tooltip.gif", 200)} onMouseLeave={() => handleMouseLeave()} onMouseMove={(e) => handleMouseMove(e)}>odditype</div>
        <div className="nav" onClick={() => navigate('hyperlink')} onMouseEnter={() => handleMouseEnter("./img/hyperlink/hyperlink3.gif", 200)} onMouseLeave={() => handleMouseLeave()} onMouseMove={(e) => handleMouseMove(e)}>hyperlink//</div>
        <div className="nav" onClick={() => navigate('dollhouse')} onMouseEnter={() => handleMouseEnter("./img/dollhouse/entry.gif", 250)} onMouseLeave={() => handleMouseLeave()} onMouseMove={(e) => handleMouseMove(e)}>thedoll.house</div>
        <div className="nav" onClick={() => navigate('aaniaalto')} onMouseEnter={() => handleMouseEnter("./img/aaniaalto/glitch3.gif", 250)} onMouseLeave={() => handleMouseLeave()} onMouseMove={(e) => handleMouseMove(e)}>aaniaalto'23</div>
        <div className="nav" onClick={() => navigate('contestations')} onMouseEnter={() => handleMouseEnter("./img/contestations/tooltip.gif", 300)} onMouseLeave={() => handleMouseLeave()} onMouseMove={(e) => handleMouseMove(e)}>contestations.ai</div>
        <div className="nav" onClick={() => navigate('hypertext')} onMouseEnter={() => handleMouseEnter("./img/hypertext/tooltip.gif", 250)} onMouseLeave={() => handleMouseLeave()} onMouseMove={(e) => handleMouseMove(e)}>hypertext & the design process</div>
        <div className="nav" onClick={() => navigate('kurrent')} onMouseEnter={() => handleMouseEnter("./img/kurrent/tooltip.gif", 250)} onMouseLeave={() => handleMouseLeave()} onMouseMove={(e) => handleMouseMove(e)}>kurrent typeface</div>
        <div className="nav" onClick={() => navigate('thehmm')} onMouseEnter={() => handleMouseEnter("./img/thehmm/tooltip.gif", 250)} onMouseLeave={() => handleMouseLeave()} onMouseMove={(e) => handleMouseMove(e)}>the hmm</div>
        <div className="nav"><a href="https://www.guushoeberechts.nl/sony.html" target="_blank" rel="noreferrer">all works (kinda) &#10548;&#xFE0E;</a></div>
    </div>
    :
    <>
    <div className="icon" onClick={() => {handleMenu()}}>projects{!open?  <>&#10549;&#xFE0E;</> : <>&#10548;&#xFE0E;</>}</div>
    <div className="navigation" style={{top: top + "px"}}>
        <div className="nav" onClick={() => {navigate('odditype'); handleMenu()}}>odditype</div>
        <div className="nav" onClick={() => {navigate('hyperlink'); handleMenu()}}>hyperlink//</div>
        <div className="nav" onClick={() => {navigate('dollhouse'); handleMenu()}}>thedoll.house</div>
        <div className="nav" onClick={() => {navigate('aaniaalto'); handleMenu()}}>aaniaalto'23</div>
        <div className="nav" onClick={() => {navigate('contestations'); handleMenu()}}>contestations.ai</div>
        <div className="nav" onClick={() => {navigate('hypertext'); handleMenu()}}>hypertext & the design process</div>
        <div className="nav" onClick={() => {navigate('kurrent'); handleMenu()}}>kurrent typeface</div>
        <div className="nav" onClick={() => {navigate('thehmm'); handleMenu()}}>the hmm</div>
        <div className="nav"><a href="https://www.guushoeberechts.nl/sony.html" target="_blank" rel="noreferrer" style={{fontSize: "1.4rem"}}>all works (kinda) &#10548;&#xFE0E;</a></div>
    </div>
    </>
    }

    {tooltip.visible && (
      <div style={{
        position: "absolute",
        top: tooltip.y,
        left: tooltip.x,
        pointerEvents: "none",
        zIndex: 1000,
        filter: "drop-shadow(0px 0px 5px rgba(0,0,255,0.5))",
        maxWidth: "50vw",
        // border: "1px solid red",
        overflow: "hidden"
      }}><img src={tooltip.image} 
        style={{height: tooltip.h + "px", width: "auto"}}/></div>
    )
    }
    </>
  )
}

export default Menu