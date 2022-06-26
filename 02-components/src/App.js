import React from 'react';
import Alert from './Alert'
import BorderedImageFrame from './BorderImageFrame';
import SumOfTwo from './SumOfTwo';
import {sayHello, sayGoodbye, foobar} from './funcs';





function PuppyImage() {
  return <img src={require('./puppy.jpeg')}/>
}



export default function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      {sayHello()}
      {sayGoodbye()}
      {foobar()}
      <BorderedImageFrame border="4px red solid" img={require('./puppy.jpeg')}/>
      <PuppyImage/>
      <Alert bgColor="red" message="Collision"/>
      <Alert bgColor="yellow" message="fuel low"/>
      <SumOfTwo number1={2} number2={3}/>
    </React.Fragment>
  )
}

