
import { useState,useEffect } from 'react';
import './App.css';
import './components/style.css';
import { AiFillCheckCircle ,AiFillFire} from "react-icons/ai";
import { FcOk,FcLibrary,FcComboChart,FcAndroidOs,FcCamcorderPro} from "react-icons/fc";
import { FaGem ,FaDirections} from "react-icons/fa";
import { GiByzantinTemple,GiVolcano,GiTigerHead } from "react-icons/gi";
import { ImDatabase } from "react-icons/im";



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
      
       <h5 className='headings'><ul>
      
       <ImDatabase/>  Live Space</ul>
          </h5>
          <ul > <FcOk></FcOk> All NFTs on cyber either belong to or were minted bytheir space creator.</ul>
          
          <div className='container-fluid'>

            <div className='row tab-button justify-content-center'>
              <div className='col-auto ai'>
                <button className='active' onClick={()=>{
    setfirst(true);
    setsec(false);
    setthir(false);
    setfou(false);
    setfift(false);
    setsix(false);
    setsev(false);
    }} ><AiFillFire></AiFillFire> 24h Trending</button>
              </div>
              <div className='col-auto' ><button onClick={()=>{
 setfirst(false);
 setsec(true);
 setthir(false);
 setfou(false);
 setfift(false);
 setsix(false);
 setsev(false);

              }} ><FcCamcorderPro/> Latest Shows</button></div>
              <div className='col-auto'><button onClick={()=>{
                 setfirst(false);
                 setsec(false);
                 setthir(true);
                 setfou(false);
                 setfift(false);
                 setsix(false);
                 setsev(false);
              }} className='active'><FcComboChart/> Most Popular</button></div>
              <div className='col-auto'><button onClick={()=>{
                  setfirst(false);
                 setsec(false);
                 setthir(false);
                 setfou(true);
                 setfift(false);
                 setsix(false);
                 setsev(false);
                }} className='active'><FaGem></FaGem> In Genesis</button></div>
              <div className='col-auto' ><button onClick={()=>{
                setfirst(false);
                setsec(false);
                setthir(false);
                setfou(false);
                setfift(true);
                setsix(false);
                setsev(false);
              }} className='active'><FcLibrary/> In Temple</button></div>
              <div className='col-auto' ><button onClick={()=>{setfirst(false);
                 setsec(false);
                 setthir(false);
                 setfou(false);
                 setfift(false);
                 setsix(true);
                 setsev(false);}} className='active'><GiVolcano/> In Void</button></div>
              <div className='col-auto'><button onClick={()=>{
                setfirst(false);
                setsec(false);
                setthir(false); 
                setfou(false);
                setfift(false);
                setsix(false);
                setsev(true);
              }} className='active'><GiTigerHead/> #BAYC</button></div>
            </div>

            <div className='containts'>
            <div className='row content-justify-center'>
                      { first? <>
                       <h4 className='name'> 24h Trending</h4>
                        <div className='col-sm-4 col-12'>
                          <a href='https://en.wikipedia.org/wiki/Palolem_Beach'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-goa.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Palolem Beach, South Goa</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Palolem+beach,+Ourem+Road,+Mohanbagh,+Palolem,+Canacona,+South+Goa,+Goa/@15.0092269,73.9937454,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbe4508a74e02cf:0x3fa8ac67386e086!2m2!1d74.028765!2d15.0092296';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <a href='https://en.wikipedia.org/wiki/Shimla'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-shimla.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Shimla</h5>
                                            <p className="card-text">@0aS0cZx0</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Shimla,+Himachal+Pradesh/@31.1048098,77.1383837,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390578e3e35d6e67:0x1f7e7ff6ff9f54b7!2m2!1d77.1734033!2d31.1048145';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <a href='https://simple.wikipedia.org/wiki/Taj_Mahal'>

                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Taj Mahal</h5>
                                            <p className="card-text">@0x0sjd0x</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Taj+Mahal,+Dharmapuri,+Forest+Colony,+Tajganj,+Agra,+Uttar+Pradesh/@27.1751405,78.0071226,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39747121d702ff6d:0xdd2ae4803f767dde!2m2!1d78.0421422!2d27.1751448';
                                            }}
                                      > Direction <FaDirections/></button>
                                          </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                      <a href='https://en.wikipedia.org/wiki/Gateway_of_India'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-mumbai.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">The Gateway of India</h5>
                                            <p className="card-text">@S4nCsCKC</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Gateway+Of+India+Mumbai,+Apollo+Bandar,+Colaba,+Mumbai,+Maharashtra/@18.9219808,72.7996347,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!2m2!1d72.8346543!2d18.9219841';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                        <a href='https://en.wikipedia.org/wiki/Gadisar_Lake'>
                                    <div className="card">
                                
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Gadi Sagar Temple in Rajasthan</h5>
                                            <p className="card-text">@0n0CfSg</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Rajasthan/@27.0237993,74.182913,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396a3efaf7e30e37:0xb52b9b4506c088e5!2m2!1d74.2179326!2d27.0238036';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <a href='https://en.wikipedia.org/wiki/Golden_Templel'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-amritsar.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">The Golden Temple in Amritsar</h5>
                                            <p className="card-text">@8nsbva0x0</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Golden+Temple+Amritsar,+Golden+Temple,+Golden+Temple+Road,+Atta+Mandi,+Katra+Ahluwalia,+Amritsar,+Punjab/@31.620669,74.8407286,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x391963542e500067:0x71c08fc9c49abfb!2m2!1d74.8757482!2d31.6206738';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                      
                            
                      </> : 
                      <>
                      </>
                      
                      }

                    { second? <>
                      <h4 className='name'> Latest Shows</h4>
                      <div className='col-sm-4 col-12'>
                          <a href='https://en.wikipedia.org/wiki/Palolem_Beach'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-goa.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Palolem Beach, South Goa</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Palolem+beach,+Ourem+Road,+Mohanbagh,+Palolem,+Canacona,+South+Goa,+Goa/@15.0092269,73.9937454,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbe4508a74e02cf:0x3fa8ac67386e086!2m2!1d74.028765!2d15.0092296';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://us.123rf.com/450wm/thingass/thingass1404/thingass140400009/27307321-the-phrase-work-in-progress-typed-on-a-piece-of-graph-paper-and-pinned-to-a-cork-notice-board.jpg?ver=6" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://media.istockphoto.com/photos/work-in-progress-road-sign-picture-id155388466?k=20&m=155388466&s=612x612&w=0&h=6bdW6twAzWK1U6QV5-9PrF7WvMBOkUcG8LeUaiAinlE=" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>  
                            </> : 
                            <>
                            </>
                            
                            }

                    { third? <>
                      <h4 className='name'> Most Popular</h4>
                      <div className='col-sm-4 col-12'>
                      <a href='https://en.wikipedia.org/wiki/Gateway_of_India'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-mumbai.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">The Gateway of India</h5>
                                            <p className="card-text">@S4nCsCKC</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Gateway+Of+India+Mumbai,+Apollo+Bandar,+Colaba,+Mumbai,+Maharashtra/@18.9219808,72.7996347,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!2m2!1d72.8346543!2d18.9219841';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                        <a href='https://en.wikipedia.org/wiki/Gadisar_Lake'>
                                    <div className="card">
                                
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Gadi Sagar Temple in Rajasthan</h5>
                                            <p className="card-text">@0n0CfSg</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Rajasthan/@27.0237993,74.182913,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396a3efaf7e30e37:0xb52b9b4506c088e5!2m2!1d74.2179326!2d27.0238036';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <a href='https://en.wikipedia.org/wiki/Golden_Templel'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-amritsar.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">The Golden Temple in Amritsar</h5>
                                            <p className="card-text">@8nsbva0x0</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Golden+Temple+Amritsar,+Golden+Temple,+Golden+Temple+Road,+Atta+Mandi,+Katra+Ahluwalia,+Amritsar,+Punjab/@31.620669,74.8407286,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x391963542e500067:0x71c08fc9c49abfb!2m2!1d74.8757482!2d31.6206738';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <a href='https://en.wikipedia.org/wiki/Palolem_Beach'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-goa.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Palolem Beach, South Goa</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Palolem+beach,+Ourem+Road,+Mohanbagh,+Palolem,+Canacona,+South+Goa,+Goa/@15.0092269,73.9937454,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbe4508a74e02cf:0x3fa8ac67386e086!2m2!1d74.028765!2d15.0092296';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <a href='https://en.wikipedia.org/wiki/Shimla'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-shimla.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Shimla</h5>
                                            <p className="card-text">@0aS0cZx0</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Shimla,+Himachal+Pradesh/@31.1048098,77.1383837,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390578e3e35d6e67:0x1f7e7ff6ff9f54b7!2m2!1d77.1734033!2d31.1048145';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <a href='https://simple.wikipedia.org/wiki/Taj_Mahal'>

                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Taj Mahal</h5>
                                            <p className="card-text">@0x0sjd0x</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Taj+Mahal,+Dharmapuri,+Forest+Colony,+Tajganj,+Agra,+Uttar+Pradesh/@27.1751405,78.0071226,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39747121d702ff6d:0xdd2ae4803f767dde!2m2!1d78.0421422!2d27.1751448';
                                            }}
                                      > Direction <FaDirections/></button>
                                          </div>
                                    </div></a>
                          </div>  
                                                           
                            </> : 
                            <>
                            </>
                            
                            }


                    { fourth? <>
                      <h4 className='name'> In Genesis</h4>
                      <div className='col-sm-4 col-12'>
                      <a href='https://en.wikipedia.org/wiki/Gateway_of_India'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-mumbai.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">The Gateway of India</h5>
                                            <p className="card-text">@S4nCsCKC</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Gateway+Of+India+Mumbai,+Apollo+Bandar,+Colaba,+Mumbai,+Maharashtra/@18.9219808,72.7996347,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!2m2!1d72.8346543!2d18.9219841';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div> 
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://us.123rf.com/450wm/thingass/thingass1404/thingass140400009/27307321-the-phrase-work-in-progress-typed-on-a-piece-of-graph-paper-and-pinned-to-a-cork-notice-board.jpg?ver=6" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://us.123rf.com/450wm/thingass/thingass1404/thingass140400009/27307321-the-phrase-work-in-progress-typed-on-a-piece-of-graph-paper-and-pinned-to-a-cork-notice-board.jpg?ver=6" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>    
                            </> : 
                            <>
                            </>
                            
                            }


                        { fifth? <>
                          <h4 className='name'> In Temple</h4>
                          <div className='col-sm-4 col-12'>
                          <a href='https://simple.wikipedia.org/wiki/Taj_Mahal'>

                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Taj Mahal</h5>
                                            <p className="card-text">@0x0sjd0x</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Taj+Mahal,+Dharmapuri,+Forest+Colony,+Tajganj,+Agra,+Uttar+Pradesh/@27.1751405,78.0071226,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39747121d702ff6d:0xdd2ae4803f767dde!2m2!1d78.0421422!2d27.1751448';
                                            }}
                                      > Direction <FaDirections/></button>
                                          </div>
                                    </div></a>
                          </div> 
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://media.istockphoto.com/photos/work-in-progress-road-sign-picture-id155388466?k=20&m=155388466&s=612x612&w=0&h=6bdW6twAzWK1U6QV5-9PrF7WvMBOkUcG8LeUaiAinlE=" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://media.istockphoto.com/photos/work-in-progress-road-sign-picture-id155388466?k=20&m=155388466&s=612x612&w=0&h=6bdW6twAzWK1U6QV5-9PrF7WvMBOkUcG8LeUaiAinlE=" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>   
                                </> : 
                                <>
                                </>
                                
                                }


                                  { sixth? <>
                                    <h4 className='name'> In Void</h4>
                                    <div className='col-sm-4 col-12'>
                          <a href='https://en.wikipedia.org/wiki/Golden_Templel'>
                                    <div className="card">
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-amritsar.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">The Golden Temple in Amritsar</h5>
                                            <p className="card-text">@8nsbva0x0</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Golden+Temple+Amritsar,+Golden+Temple,+Golden+Temple+Road,+Atta+Mandi,+Katra+Ahluwalia,+Amritsar,+Punjab/@31.620669,74.8407286,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x391963542e500067:0x71c08fc9c49abfb!2m2!1d74.8757482!2d31.6206738';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://us.123rf.com/450wm/thingass/thingass1404/thingass140400009/27307321-the-phrase-work-in-progress-typed-on-a-piece-of-graph-paper-and-pinned-to-a-cork-notice-board.jpg?ver=6" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://us.123rf.com/450wm/thingass/thingass1404/thingass140400009/27307321-the-phrase-work-in-progress-typed-on-a-piece-of-graph-paper-and-pinned-to-a-cork-notice-board.jpg?ver=6" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>  
                                          </> : 
                                          <>
                                          </>
                                          
                                          }


                  {seventh? <>
                    
                    <h4 className='name'> #BAYC</h4>
                    <div className='col-sm-4 col-12'>
                        <a href='https://en.wikipedia.org/wiki/Gadisar_Lake'>
                                    <div className="card">
                                
                                          <img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Gadi Sagar Temple in Rajasthan</h5>
                                            <p className="card-text">@0n0CfSg</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/dir//Rajasthan/@27.0237993,74.182913,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396a3efaf7e30e37:0xb52b9b4506c088e5!2m2!1d74.2179326!2d27.0238036';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div></a>
                          </div>  
                          <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://media.istockphoto.com/photos/work-in-progress-road-sign-picture-id155388466?k=20&m=155388466&s=612x612&w=0&h=6bdW6twAzWK1U6QV5-9PrF7WvMBOkUcG8LeUaiAinlE=" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
                                       </div>
                                    </div>
                          </div>   <div className='col-sm-4 col-12'>
                          <div className="card">
                          <img src="https://media.istockphoto.com/photos/work-in-progress-road-sign-picture-id155388466?k=20&m=155388466&s=612x612&w=0&h=6bdW6twAzWK1U6QV5-9PrF7WvMBOkUcG8LeUaiAinlE=" className="card-img-top" alt="..."/>
                                   
                                          <div className="card-body">
                                            <h5 className="card-title">Work In Progress</h5>
                                            <p className="card-text">@0aXn0aS</p>
                                            <button className='bg-primary'
                                          type="button"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='';
                                            }}
                                      > Direction <FaDirections/></button>
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

