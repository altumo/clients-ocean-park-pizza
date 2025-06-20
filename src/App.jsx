import './App.css'

function App() {
  const menuPages = [
    { id: 1, title: "Page 1", alt: "Menu Page 1 - Front Panel" },
    { id: 2, title: "Page 2", alt: "Menu Page 2 - Inside Left" },
    { id: 3, title: "Page 3", alt: "Menu Page 3 - Inside Middle" },
    { id: 4, title: "Page 4", alt: "Menu Page 4 - Inside Right" },
    { id: 5, title: "Page 5", alt: "Menu Page 5 - Outside Flap" },
    { id: 6, title: "Page 6", alt: "Menu Page 6 - Back Panel" }
  ]

  return (
    <>
      <div className="page_heading">
        <div className="container">
          <div className="span-24 heading">
            <div className="top_menu">
              <div id="contact_us_button" className="button green">
                Contact Us
              </div>
              
              <div id="download_pdf_menu_button" className="button blue">
                Download Menu
              </div>
            </div>
            
            <div className="top_bar"></div>
          </div>
        </div>
      </div>
      
      <div className="container page_container">
        <div className="span-24 container last menu_container">
          <h1>Ocean Park Pizza Menu</h1>
          
          <br />
          <br />
          
          {menuPages.map((page) => (
            <div key={page.id}>
              <h2>{page.title}</h2>
              <br />
              <img 
                className="menuImage" 
                src={`/images/menu/${page.id}.jpg`} 
                alt={page.alt} 
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App