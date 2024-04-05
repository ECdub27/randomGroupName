import { useState } from 'react'
import {generate} from 'random-words';
import './App.css';
import Lottie from 'react-lottie';
import jester from '../jester.json';
import texting from '../texting.json';


function App() {
  const [chatName, setChatName] = useState('Team 7')
  const generateRandomChatName = () =>{
    const chatNames = generate({exactly: 2, wordsPerString:1, formatter: (word, index) => {
      return index === 0
        ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
        : word;
    },
      });
  const groupChatendings = ['club', 'squad', 'team', 'crew', 'gang', 'group', 'buddies', 'friends', 'mates', 'pals', 'bros', 'sisters', 'squad', 'clique', 'posse', 'pack', 'tribe', 'family', 'unit', 'squadron', 'platoon', 'battalion', 'company', 'brigade', 'division', 'regiment', 'corps', 'army', 'force', 'squad', 'team', 'crew', 'gang', 'group', 'buddies', 'friends', 'mates', 'pals', 'bros', 'sisters', 'squad', 'clique', 'posse', 'pack', 'tribe', 'family', 'unit', 'squadron', 'platoon', 'battalion', 'company', 'brigade', 'division', 'regiment', 'corps', 'army', 'force']

  const randomGroupChatEndings = groupChatendings[Math.floor(Math.random() * groupChatendings.length)]
    if(Array.isArray(chatNames)){
      setChatName(`${chatNames.join('  ')} ${randomGroupChatEndings}`)
    } else {
      setChatName(chatNames)
    }

  }

  const defaultOptions = {
 loop: true,
 autoplay:true,
 animationData: jester,
  }

  const defaultOptions1 = {
    loop: true,
    autoplay:true,
    animationData: texting,
  }
  return (
    <>
      <div className='card'>
   <h1>Group Chat Name Generator</h1>
 <Lottie options={defaultOptions} width={400} height={400} /> 
   <p> Current Chat Name: {chatName} </p>
   <button onClick={generateRandomChatName}>Generate Chat Name</button> 
        </div>
        <Lottie options={defaultOptions1} width={400} height={400}/>
    </>
  )
}


export default App
