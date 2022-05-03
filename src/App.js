
import { useState,useEffect } from 'react';
import './App.css';
import './components/style.css';
import { AiFillCheckCircle } from "react-icons/ai";


function App() {
 
   return (
 
     <>
    <Nav></Nav>
 </>
  );
}


function Nav(){
  const [datas,setdatas] = useState("first");
  const [first,setfirst] = useState(true);
  const [second,setsec] = useState(false);
  const [third,setthir] = useState(false);
  const [fourth,setfou] = useState(false);
  const [fifth,setfift] = useState(false);
  const [sixth,setsix] = useState(false);
  const [seventh,setsev] = useState(false);

  /*
  if(datas==='first'){
    setfirst(true);
    setsec(false);
    setthir(false);
    setfou(false);
    setfift(false);
    setsix(false);
    setsev(false);
  }
  
  else if(datas=="second"){
    setfirst(false);
    setsec(true);
    setthir(false);
    setfou(false);
    setfift(false);
    setsix(false);
    setsev(false);
  }else if(datas=="third"){
    setfirst(false);
    setsec(false);
    setthir(true);
    setfou(false);
    setfift(false);
    setsix(false);
    setsev(false);
  }else if(datas=="fourth"){
    setfirst(false);
    setsec(false);
    setthir(false);
    setfou(true);
    setfift(false);
    setsix(false);
    setsev(false);
  }else if(datas=="fifth"){
    setfirst(false);
    setsec(false);
    setthir(false);
    setfou(false);
    setfift(true);
    setsix(false);
    setsev(false);
  }else if(datas=="sixth"){
    setfirst(false);
    setsec(false);
    setthir(false);
    setfou(false);
    setfift(false);
    setsix(true);
    setsev(false);
  }else if(datas=="seventh"){
    setfirst(false);
    setsec(false);
    setthir(false);
    setfou(false);
    setfift(false);
    setsix(false);
    setsev(true);
  } 
  */
  

 

  return(
    <>
      <div className='bg-light shadow-sm container'>
         
          <h5 className='headings'>
            Live Space
          </h5>
          <ul> <AiFillCheckCircle></AiFillCheckCircle> All NFTs on cyber either belong to or were minted bytheir space creator.</ul>

          <div className='container-fluid'>

            <div className='row tab-button justify-content-center'>
              <div className='col-auto'>
                <button className='active' onClick={()=>{
    setfirst(true);
    setsec(false);
    setthir(false);
    setfou(false);
    setfift(false);
    setsix(false);
    setsev(false);
    }} > first</button>
              </div>
              <div className='col-auto' ><button onClick={()=>{
 setfirst(false);
 setsec(true);
 setthir(false);
 setfou(false);
 setfift(false);
 setsix(false);
 setsev(false);

              }} > second</button></div>
              <div className='col-auto'><button onClick={()=>{
                 setfirst(false);
                 setsec(false);
                 setthir(true);
                 setfou(false);
                 setfift(false);
                 setsix(false);
                 setsev(false);
              }} className='active'> thirs</button></div>
              <div className='col-auto'><button onClick={()=>{
                  setfirst(false);
                 setsec(false);
                 setthir(false);
                 setfou(true);
                 setfift(false);
                 setsix(false);
                 setsev(false);
                }} className='active'> sandesh</button></div>
              <div className='col-auto' ><button onClick={()=>{
                setfirst(false);
                setsec(false);
                setthir(false);
                setfou(false);
                setfift(true);
                setsix(false);
                setsev(false);
              }} className='active'> sandesh</button></div>
              <div className='col-auto' ><button onClick={()=>{setfirst(false);
                 setsec(false);
                 setthir(false);
                 setfou(false);
                 setfift(false);
                 setsix(true);
                 setsev(false);}} className='active'> sandesh</button></div>
              <div className='col-auto'><button onClick={()=>{
                setfirst(false);
                setsec(false);
                setthir(false);
                setfou(false);
                setfift(false);
                setsix(false);
                setsev(true);
              }} className='active'> sandesh</button></div>
            </div>

            <div className='containts'>
            <div className='row content-justify-center'>
                      { first? <>
                      <div className='col-sm-4 col-12'>
                        <a href='https://www.google.com/search?gs_ssp=eJzj4tDP1TcwLso2MGD0Ys3MS8lMBAApGQTT&q=india&rlz=1C1CHBF_enIN975IN975&oq=india&aqs=chrome.1.69i57j46i67i433j35i39l2j0i67i433j69i60l3.5592j0j7&sourceid=chrome&ie=UTF-8'>
                                    <div class="card">
                                
                                          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                                    <div class="card">
                                          <img src="https://m.media-amazon.com/images/I/71hMEM1a9EL._SL1500_.jpg" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                          <div className='col-sm-4 col-12'>
                                    <div class="card">
                                          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                          <div className='col-sm-4 col-12'>
                                    <div class="card">
                                          <img src="https://m.media-amazon.com/images/I/71hMEM1a9EL._SL1500_.jpg" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                          <div className='col-sm-4 col-12'>
                                    <div class="card">
                                          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                          <div className='col-sm-4 col-12'>
                                    <div class="card">
                                          <img src="https://m.media-amazon.com/images/I/71hMEM1a9EL._SL1500_.jpg" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                      
                            
                      </> : 
                      <>
                      </>
                      
                      }

                    { second? <>
                      <div className='col-4'>
                                    <div class="card">
                                          <img src="https://m.media-amazon.com/images/I/71hMEM1a9EL._SL1500_.jpg" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                                  
                            </> : 
                            <>
                            </>
                            
                            }

                    { third? <>
                      <div className='col-4'>
                                    <div class="card">
                                          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                                  
                            </> : 
                            <>
                            </>
                            
                            }


                    { fourth? <>
                      <div className='col-4'>
                                    <div class="card">
                                          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                            </> : 
                            <>
                            </>
                            
                            }


                        { fifth? <>
                          <div className='col-4'>
                                    <div class="card">
                                          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                                </> : 
                                <>
                                </>
                                
                                }


                                  { sixth? <>
                                    <div className='col-4'>
                                    <div class="card">
                                          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                                          </> : 
                                          <>
                                          </>
                                          
                                          }


                  {seventh? <>
                    <div className='col-4'>
                                    <div class="card">
                                          <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..."/>
                                          <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                          </div>
                                    </div>
                          </div>  
                          </> : 
                          <>
                          </>
                          
                }
        </div>
            </div>
          </div>
          
      </div>
    </>
  );
}



export default App;

