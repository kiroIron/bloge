import React from "react";
import ImageThree from './Imges/card-1.png' ;
import ImageEight from './Imges/card-2.png';
import ImageFour from './Imges/card-3.png' ;
import ImageNine from './Imges/card-4.png';
import ImageTen from './Imges/card-5.png' ;
import ImageEleven from './Imges/card-6.png' ;
import ImageTwelve from './Imges/card-7.png' ;
import ImageThirteen from './Imges/card-8.png' ;
import ImageFourteen from './Imges/card-9.png' ;
import { Card} from "react-bootstrap";
import ImageFore from './Imges/Short Info (1).png'
import ImageFive from './Imges/Short Info (2).png'
import ImageSix from './Imges/Short Info (3).png'
import ImageSeven from './Imges/Short Info.png'
import Container_3 from './Imges/cont_3.png'
const SinglePage = () => {
  return (
    <>
    <div className=" container d-flex justify-content-center mt-2">
    <img src={Container_3} alt="cont_3" />
    </div>

      <br />

    <div className=" container">

<div className="row d-flex justify-content-between p-1">
<Card className="col-3.2 text-dark" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageThree} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageSeven} alt="user_comment" />
</Card>

<Card className="col-3.2 text-dark" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageEight} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageFive} alt="user_comment" />
</Card>


<Card className="col-3.2  text-dark " style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageNine} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageFive} alt="user_comment" />
</Card>

</div>

<div className="row d-flex justify-content-between p-1">
<Card className="col-3.2 text-dark" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageTen} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageFore} alt="user_comment" />
</Card>


<Card className="col-3.2 text-dark" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageEleven} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageSix} alt="user_comment" />
</Card>

<Card className="col-3.2 text-dark" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageTwelve} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageFive} alt="user_comment" />
</Card>

</div>
<div className="row d-flex justify-content-between p-1"> 
<Card className="col-3.2 text-dark" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageThirteen} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageSeven} alt="user_comment" />
</Card>

<Card className="col-3.2 text-dark " style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageFourteen} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageSix} alt="user_comment" />
</Card>

<Card className="col-3.2 text-dark" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ImageFour} />
    <Card.Title>Card Title</Card.Title>
      <h5>pSome quick example text to build on the card title and make up the bulk of
      the card's content.</h5>
    <img src={ImageFive} alt="user_comment" />
</Card>
      </div>



</div>
      
    </>
  );
};

export default SinglePage;
