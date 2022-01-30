import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function App() {
  const [showFlashCards, setShowFlashCards] = useState(false)
  const [showBookApp, setShowBookApp] = useState(false)
  const [showLibraryDatabase, setShowLibraryDatabase] = useState(false)
  const [showSuperHeroDatabase, setShowSuperHeroDatabase] = useState(false)
  const handleShowFlashCards = () => setShowFlashCards(true)
  const handleCloseFlashCards = () => setShowFlashCards(false)
  const handleShowBookApp = () => setShowBookApp(true)
  const handleCloseBookApp = () => setShowBookApp(false)
  const handleShowLibraryDatabase = () => setShowLibraryDatabase(true)
  const handleCloseLibraryDatabase = () => setShowLibraryDatabase(false)
  const handleCloseSuperHeroDatabase = () => setShowSuperHeroDatabase(false)
  const handleShowSuperHeroDatabase = () => setShowSuperHeroDatabase(true)

  useEffect(() => {
    document.title = "Scott MacLeod"
  }, [])

  return (
    <div className="App">
      <header>
        <div id="navbar" className='navbar-brand'>
          <p className='nav-links'><a className='a-tags' href="#top">SCOTT MACLEOD</a></p>
          <p className='nav-links'><a className='a-tags' href="#portfolio">PORTFOLIO</a></p>
          <p className='nav-links'><a className='a-tags' href="#about">ABOUT</a></p>
          <p className='nav-links'><a className='a-tags' href="#contact">CONTACT</a></p>
        </div>
      </header>
      <div id="top">
        <div className="padding-section"></div>
        <div>
          <img id="profile-pic" src="https://imgur.com/AK6BmTc.png" alt="scott-macleod" />
        </div>
        <div><p id="name">SCOTT MACLEOD</p></div>
        <div><p id="job-titles">WEB DESIGNER</p></div>
      </div>
      <div id="portfolio">
        <div className="padding-section"></div>
        <p className='titles'>PORTFOLIO</p>
        <div id="portfolio-grid">
          <div className='portfolio-divs' onClick={handleShowFlashCards}>
            <h2 className='portfolio-titles'>MEMORY CARDS</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShowBookApp}>
            <h2 className='portfolio-titles'>BOOK APP</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShowLibraryDatabase}>
            <h2 className='portfolio-titles-two-words'>LIBRARY DATABASE</h2>
          </div>
          <div className='portfolio-divs' onClick={handleShowSuperHeroDatabase}>
            <h2 className='portfolio-titles-two-words'>SUPERHERO DATABASE</h2>
          </div>
        </div>
        <Modal centered show={showFlashCards} onHide={handleCloseFlashCards}>
          <Modal.Header closeButton>
            <Modal.Title>SIMPSONS MEMORY CARDS</Modal.Title>
          </Modal.Header>
          <Modal.Body id="flash-cards-modal">
            <img id="simpsons-card-game-image" src='https://imgur.com/s59ri2r.png' alt='simpsons-memory-card-game-screenshot' />
            <p className='portfolio-descriptions'>Shown here is a memory card game featuring characters from The Simpsons. Built with HTML, CSS, and Vanilla JavaScript, this card game was among my first projects. Click on a card to see what's beneath, then click another card to see if they match. The program will see if they match, and if they do the user gets a point! Play with one player or two, and if you want you can type your names in for a more personalized feel. If you want to start over just click the reset button.</p>
          </Modal.Body>
          <Modal.Footer>
            <Nav>
              <Nav.Item>
                <Nav.Link href="https://pages.git.generalassemb.ly/scottmacleod/FlashCards/" target="_blank"><Button>Live Site</Button></Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Footer>
        </Modal>

        <Modal centered show={showBookApp} onHide={handleCloseBookApp}>
          <Modal.Header closeButton>
            <Modal.Title>BOOK APP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="https://imgur.com/jNmX2Ns.png" alt="book-app-screenshot" />
            <p className='portfolio-descriptions'>People that like to read often don't know what to read next. Using React and data supplied by the Google Books API, I have created an app that will give random suggestions based on genre. On my app I have included sections where the user can log books that they have read or books that they want to read. I also included a section for people to write thoughts that they might have about an author or a book. Others can upvote or downvote the comments as they please.</p>
          </Modal.Body>
          <Modal.Footer>
          <Nav>
              <Nav.Item>
                <Nav.Link href="https://bookappscottmacleod.herokuapp.com/" target="_blank"><Button>Live Site</Button></Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Footer>
        </Modal>

        <Modal centered show={showLibraryDatabase} onHide={handleCloseLibraryDatabase}>
          <Modal.Header closeButton>
            <Modal.Title>LIBRARY DATABASE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img id="library-database-image" src="https://imgur.com/tYamvbC.png" alt="library-database-screenshot" />
            <p className='portfolio-descriptions'>Working with a team, we created a database that could be utilized by a library. Be sure and click on the books! The page goes to the "User" side, or the side that would be used by library patrons, but if you click "Administrative" at the top you can check out the features meant for administrations. Here the user can add, edit, or delete books as they see fit. This app was created using React and MongoDB.</p>
          </Modal.Body>
          <Modal.Footer>
          <Nav>
              <Nav.Item>
                <Nav.Link href="https://front-end-library.herokuapp.com/" target="_blank"><Button>Live Site</Button></Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Footer>
        </Modal>

        <Modal centered show={showSuperHeroDatabase} onHide={handleCloseSuperHeroDatabase}>
          <Modal.Header closeButton>
            <Modal.Title>SUPERHERO DATABASE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img id="superhero-database-image" src="https://imgur.com/o6vzGxc.png" alt='superhero-database-screenshot' />
            <p className='portfolio-descriptions'>This superhero database is a full stack application with the front end created using React, and Django for the backend. Users can choose to look at either superheroes or supervillains and add, create, edit, or delete as they please. Be sure to click on the superhero or supervillain for more details!</p>
          </Modal.Body>
          <Modal.Footer>
          <Nav>
            <Nav.Item>
              <Nav.Link href="https://superhero-database-app.herokuapp.com/" target="_blank"><Button>Live Site</Button></Nav.Link>
            </Nav.Item>
          </Nav>
          </Modal.Footer>
        </Modal>
      </div>
      <div id="about">
        <div className="padding-section"></div>
        <p className='titles'>ABOUT</p>
        <p id='about-me' className="about-me">
          I am a nerdy, fun, thoughtful guy from North Dakota. What I am 
          best at is tackling problems analytically. I am determined to find 
          a solution and am not satisfied until I do. I studied at General Assembly
          for 14 weeks where I worked on projects both alone and with a small team
          of my classmates. I look forward to seeing what I can do with programming!
        </p>
        <div>
          <em><p id="technical-skills-title">Technical Skills</p></em>
        </div>
        <div>
          <ul className="technical-skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
      </div>
      <div id='about-contact-divider'>

      </div>
      <div id="contact">
        <div className="padding-section"></div>
        <p className='titles'>CONTACT</p>
        <p id='contact-paragraph' className='about-me'>I love programming and would love to work with you! Reach out to me with any of the below links! Currently seeking career opportunities as a junior developer.</p>
        <h5 id="resume-line">View my resume here: <a id='resume-tag' target="_blank" href="https://docs.google.com/document/d/18o3JiEmESxsq8K9UFpj5rSiEIjnPeBYE/edit?usp=sharing&ouid=110742230443125215815&rtpof=true&sd=true">Resume</a></h5>
        <a class='btn btn-outline-dark btn-social mx-1' target="_blank" href="www.linkedin.com/in/scottmacleod1990">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </a>
        <a class='btn btn-outline-dark btn-social mx-1' target="_blank" href="https://github.com/Scotty1990/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </div>
      <div id='bottom'></div>
    </div>
  );
}

export default App;
