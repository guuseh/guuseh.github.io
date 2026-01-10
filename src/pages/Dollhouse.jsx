import {useEffect} from 'react'

const Dollhouse = () => {

useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        document.title = "thedoll.house & the chatroom :) Guus Hoeberechts"
  }, [])

  return (
    <div>
      <h5>online art exhibition – 2025</h5>
        <h1>thedoll.house (& The Chatroom)</h1>

        <p className="description">
        The Chatroom & <a href="https://thedoll.house" target="_blank" rel="noreferrer">thedoll.house&#10548;&#xFE0E;</a> is a hybrid art project which considers the duality of cuteness and distortion in the age of intelligent image-making, tracing how our desires for connection, attention, and recognition are displayed through digital avatars and physical relics alike.
        <br/><br/>
        The Dollhouse is online, a poetic webspace where tokens create a maze-like experience and artworks can be collected.
        <br/><br/>
        The Chatroom extends this dialogue into physical space, rendering what’s online as sculptural and performative forms, and meditating on dualities of presence, performance, and perception.
        <br/><br/>
        Curation by <a href="https://sarahkhadra.com/" target="_blank" rel="noreferrer">Sarah Khadra Hasni&#10548;&#xFE0E;</a>. WebDev by me :)
        </p>

        <img className="projectimg" src="./img/dollhouse/entry.gif" />
        <img className="projectimg" src="./img/dollhouse/projects1.gif" />
        <img className="projectimg" src="./img/dollhouse/projects2.gif" />
        <img className="projectimg" src="./img/dollhouse/exit.gif" />
    </div>
  )
}

export default Dollhouse