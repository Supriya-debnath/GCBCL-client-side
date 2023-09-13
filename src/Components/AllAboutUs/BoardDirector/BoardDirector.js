import React from 'react';
import img6 from '../../../Images/GCBCL TEAM.docx.png'
import img7 from '../../../Images/GCBCL TEAM2.docx.png'
// import img8 from '../../../Images/GCBCL TEAM.docx (4).png'
import img9 from '../../../Images/GCBCL TEAM.docx (5).png'

import img1 from '../../../Images/GCBCL TEAM.docx (6).png'
import img2 from '../../../Images/GCBCL TEAM.docx (7).png'
import img3 from '../../../Images/GCBCL TEAM.docx (8).png'
import img4 from '../../../Images/GCBCL TEAM.docx (9).png'

import img0 from '../../../Images/GCBCL TEAM.docx (10).png'


import './BoardDirector.css';
import { Container } from 'react-bootstrap';

const BoardDirector = () => {
    return (
        <div>
            <>
            <Container>
                <div className='board-title'>
                <h2>INTERNATIONAL CONSULTANT </h2>
                </div>

                <div className="row">
      
         <div className="col-lg-4">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}}  src={img7} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 
               </div>
             </div>
             <div className="team-text">
               <h4>K.Jayakishan</h4>
               <h6>Chief Excutive Officer</h6>
               <p className="transition">iDeCK, India</p>
             </div>
           </div>
         </div>
         <div className="col-lg-4">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}} src={img0} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                 
               </div>
             </div>
             <div className="team-text">
               <h4>Dr.  V.  Sathyanarayana </h4>
               <h6>Head – Corporate Affairs and Chief legal Council</h6>
               <p className="transition"> iDeCK., India</p>
             </div>
           </div>
         </div>
         <div className="col-lg-4">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}}  src={img9} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                
               </div>
             </div>
             <div className="team-text">
               <h4>Debashis Ghosh</h4>
               <h6>Executive Vice President</h6>
               <p className="transition">iDeCK., India </p>
             </div>
           </div>
         </div>

         </div>






         <div className='row'>
         <div className="col-lg-4">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}}  src={img1} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                
               </div>
             </div>
             <div className="team-text">
               <h4>Sundar Venkatesh</h4>
               <h6>Chief Executive Officer</h6>
               <p className="transition">ConnectED, Thailand</p>
             </div>
           </div>
         </div>

         <div className="col-lg-4">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}}  src={img2} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                
               </div>
             </div>
             <div className="team-text">
               <h4>Sumitha V Rao</h4>
               <h6>Senior Vice President</h6>
               <p className="transition">iDeCK., India </p>
             </div>
           </div>
         </div>

         <div className="col-lg-4">
           <div className="main-team transition">
             <div className="team-img">
               <img style={{height: 260}}  src={img3} className="img-fluid w-100" alt=""/>
               <div className="overly transition">
                
               </div>
             </div>
             <div className="team-text">
               <h4>Jon Barnes </h4>
               <h6>Managing Director </h6>
               <p className="transition">PPP Experts, UK </p>
             </div>
           </div>
         </div>


          </div>


            </Container>
        </>
        </div>
    );
};

export default BoardDirector;