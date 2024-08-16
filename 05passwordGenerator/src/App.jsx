import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [character, setCharacter] = useState(false)
    const [password, setPassword] = useState("")

    // useRef hook
    const passwordRef = useRef(null)
  
    const passwordGenerator = useCallback(() => {
          let pass = ""
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          if(number) str += '0123456789'
          if(character) str+= "!@#$%^&*(){}[]:';?/~"
  
          for (let i = 1; i <= length; i++) {
            let count = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(count)
          }
          setPassword(pass)
  
        },
      [length, number, character, setPassword])

    const copyPasswordToClipBoard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,20)  //optional
        window.navigator.clipboard.writeText(password)
    },[password])


    // useEffect hook
    useEffect(()=>{
        passwordGenerator()
    },
    [length, number, character, passwordGenerator])
  
  
    return (
      <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 p-4' style={{backgroundColor: '#1c2e3f'}}>
            <h1 className='text-white text-center text-xl'>Password Generator</h1>
            <div className='flex shadow-lg rounded-lg overflow-hidden my-4'>
                <input 
                type="text" 
                value={password}
                className='outline-none w-full py-1 px-3'
                style={{backgroundColor: 'white'}}
                placeholder='password'
                readOnly
                ref={passwordRef}
                />
                <button onClick={copyPasswordToClipBoard}>copy</button>
            </div>
            <div className='flex test-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="range"
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=>{setLength(e.target.value)}}
                    />
                    <label>Length: {length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="checkbox"
                    defaultChecked={number}
                    className='cursor-pointer'
                    onChange={()=>{
                        setNumber((prev) => !prev)
                    }}
                    />
                    <label>Numbers</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="checkbox"
                    defaultChecked={character}
                    className='cursor-pointer'
                    onChange={()=>{
                        setCharacter((prev) => !prev)
                    }}
                    />
                    <label>Character</label>
                </div>
            </div>
            
        </div>

        
      </>
    )
  }

export default App;