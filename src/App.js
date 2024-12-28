import './App.css';
import Header from './component/Header';
import Section from './component/Section';
import Content from './component/Content';
import Cards from './component/Cards';
import List from './component/List';
import Bigcard from './component/Bigcard';
import Accordian from './component/Accordian';
import Form from './component/Form';
import Icons from './component/Icons';
import Footer from './component/Footer';

import img1 from '../src/assests/nature1.jpg';
import img2 from '../src/assests/nature2.jpg';
import img3 from '../src/assests/nature3.jpg';


function App() {


  return (
    <>
    <Header aboutText="About"/>
    <Section img1={img1} img2={img2} img3={img3}/>
    <Content title="React Assignment 10 Components"/>
    <Cards title="Beautiful Picture"/>
    <List text="This is example text"/>
    <Bigcard  text="Beautiful Picture"/>
    <Accordian button="This ia Accordian #1"/>
    <Form text="User's name"/>
    <Icons text="Social Media Links"/>
    <Footer title="Component Assignment"/>
    </>
  );
}

export default App;
