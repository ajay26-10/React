import React from 'react'

const Contact = () => {
  return (
    <>
    <div id="cnt" className="m-4 mt-[50px]">
        <p className="text-3xl font-bold">CONTACT</p>

            <div className="grid grid-flow-row text-xl">
                <div className="mt-4">
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Enter your Name" className="border w-[300px] rounded hover:ring-2 ring-black"/>
                </div>
                <div className="mt-4">
                    <p>Email</p>
                    <input type="text" name="email" placeholder="Enter your email address" className="border w-[300px] rounded hover:ring-2 ring-black"/>
                </div>
                <div className="mt-4">
                    <p>Subject</p>
                    <select className="w-[300px] rounded">
                        <option value="blockchain">Blockchain</option>
                        <option value="eth">Ethereum Hyperledger</option>
                        <option value="cryp">Cryptocurrency</option>
                    </select>
                </div>
                <div className="mt-4">
                    <p>Query</p>
                    <textarea rows="5" cols="50" placeholder="Enter your query" className="border rounded hover:ring-2 ring-black"></textarea>
                </div>

                <div className="mt-4">
                    <p>Upload Relevant Document</p>
                    <input type="file"/>
                </div>
            </div>
            <div className="mt-4">
            <button className="border border-zinc-900 rounded hover:ring-2 w-[75px] text-xl">Submit</button>
            <button className="border border-zinc-900 rounded hover:ring-2 w-[75px] text-xl">Reset</button>
            </div>

    </div>

    </>
  )
}

export default Contact