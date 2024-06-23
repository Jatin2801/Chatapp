import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import axios from './axios';

function App() {

  const[messages,setMessages] = useState([]);

// // we will fetch all the messages once and then add new msgs as they come using below useEffect
useEffect(()=>{
axios.get('/messages/sync').then(response=>{
  setMessages(response.data)
})
},[])
 
useEffect(()=>{ // this will trigger only once page is loaded
  var pusher = new Pusher('97a29d2e7342b672ad5a', { // we got this code from pusher site in getting started of our project 
    cluster: 'ap2'
  });

  var channel = pusher.subscribe('messages');// this messages from pusher trigger in backend server file 
  channel.bind('inserted', function(newMesaage) {
    alert(JSON.stringify(newMesaage)); // as new data is given in DB
    setMessages([...messages,newMesaage]) // as new data is added store it in messages array with old ones still present 
  });
//cleanup 
return()=>{
  channel.unbind_all(); // as pusher creates new channel everytime useEffect is used we need this for optimi.
  channel.unsubscribe();
};

},[messages]) // we need messages as dependency here 

 console.log(messages)

  return (
    <div className="App">
      <div className='app_body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
