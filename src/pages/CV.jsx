import {useEffect} from 'react'
import {Email} from 'react-obfuscate-email'

const CV = () => {

    useEffect(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
            document.title = "Contact & CV :) Guus Hoeberechts"
      }, [])

  return (
    <>
    <div>
        <p>Contact me here:</p>
        <p><Email email="guus-99@live.nl">guus-99 [at] live [dot] nl &#10548;&#xFE0E;</Email></p>
        <p>or on ig <a href="https://www.instagram.com/guus.eh/" target="_blank" rel="noreferrer">@guus.eh &#10548;&#xFE0E;</a><br/></p>
    </div>
    <div style={{marginTop: "50px"}}>
        <h1>Curriculum Vitae</h1>
        <p><a href="./GuusHoeberechts_CV_jan2026.pdf" download>download detailed &#8595;&#xFE0E;</a></p>
        <br/>
        Guus Hoeberechts (1999)<br/>
        From Amsterdam (NL), based in Helsinki (FI) (for now)
        <br/><br/><br/>
        <h5>Education</h5>
        <div className="cv-grid">
            <div className="cv-grid-first">2017 – 2018</div>
            <div className="cv-grid-second">Royal Academy of Art (The Hague, NL)<br/><i>Preparatory year</i></div>

            <div className="cv-grid-first">2018 – 2022</div>
            <div className="cv-grid-second">Design Academy Eindhoven (Eindhoven, NL)<br/><i>BA Media & Culture, Communication Design</i></div>
        
            <div className="cv-grid-first">2022 – 2026</div>
            <div className="cv-grid-second">Aalto University, School of Arts (Helsinki, FI)<br/><i>MA New Media Design</i></div>
        </div>
        <br/><br/>
        <h5>Work Experience</h5>
         <div className="cv-grid">
            <div className="cv-grid-first">2025 – 2026</div>
            <div className="cv-grid-second">The Chatroom & The Dollhouse<br/><i>Web developer and co-designer</i></div>

            <div className="cv-grid-first">2022 – 2025</div>
            <div className="cv-grid-second">The Hmm, platform for internet cultures<br/><i>Medior multidisciplinary executive</i></div>

            <div className="cv-grid-first">2024 – 2025</div>
            <div className="cv-grid-second">FinnGen – Endpoint Browser<br/><i>Webdesigner and developer</i></div>

            <div className="cv-grid-first">2024 – 2025</div>
            <div className="cv-grid-second">Department of Visual Communication Design, Aalto University<br/><i>Teaching and research assistant</i></div>

            <div className="cv-grid-first">2024 – 2025</div>
            <div className="cv-grid-second">Contestations.AI: symposium on AI, human rights and warfare<br/><i>Web developer and coordinator/organisor</i></div>

            <div className="cv-grid-first">2023 & 2025</div>
            <div className="cv-grid-second">Ääniaalto, annual sound & new media festival<br/><i>Visual identity designer (2023), graphic designer (2023) and web developer (2023 & 2025)</i></div>
         </div>
        <br/><br/>
        <h5>Skills</h5>
        <div className="cv-grid">
            <div className="cv-grid-first">Tech</div>
            <div className="cv-grid-second">+ HTML, CSS, JavaScript – <i>intermediate</i><br/>
                + React – <i>intermediate</i><br/>
                + Svelte – <i>beginner</i></div>

            <div className="cv-grid-first">Software</div>
            <div className="cv-grid-second">+ Adobe Suite – <i>intermediate</i><br/>
                + Figma – <i>intermediate</i><br/>
                + Unity – <i>beginner</i><br/>
                + Blender – <i>beginner</i></div>

            <div className="cv-grid-first">Language</div>
            <div className="cv-grid-second">+ Dutch – <i>native</i><br/>
                + English – <i>fluent</i><br/>
                + Swedish – <i>notions</i><br/>
                + German – <i>notions</i></div>

            <div className="cv-grid-first">Hard skills</div>
            <div className="cv-grid-second">+ Creative coding<br/>
                + Web design<br/>
                + Graphic design<br/>
                + Conceptualisation<br/>
                + Research<br/>
                + Writing<br/>
                + Editing (text)</div>
        </div>
        <br/><br/>
        <p><a href="./GuusHoeberechts_CV_jan2026.pdf" download>download detailed &#8595;&#xFE0E;</a></p>

    </div>
    </>
  )
}

export default CV