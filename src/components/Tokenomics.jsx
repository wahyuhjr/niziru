import React from 'react'

const Tokenomics = () => {
  return (
    <div className={`w-full bg-left-bottom bg-no-repeat overflow-hidden bg-gradient-to-b from-pink-50 via-pink-50 to-pink-100`} id="tokenomics" >
        <div className="md:grid md:grid-cols-2  lg:-ml-72 mb-72">
          <div className="lg:flex lg:justify-center lg:ml-40 lg:pt-40 pt-20 text-center">
            <span className="text-Subject md:text-6xl text-5xl font-bold py-28 tracking-wider" style={{ fontSize: "64px", letterSpacing: "-4%" }}>
              Tokenomics
            </span>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-y-12 lg:pt-40 pt-20 tracking-wide">
            <div className="col-span-2 w-1/2">
              <span className="text-pink-400 font-bold text-xl md:text-4xl">$NZR</span>
              <br />
              <br />
              <span className="text-gray-600 opacity-60 font-inter text-md md:text-xl">
                Token Symbol
              </span>
            </div>
            <div className="col-span-2 w-3/4">
              <span className="text-pink-400 font-bold text-xl md:text-4xl">
                2% Usage Rewards
              </span>
              <br />
              <br />
              <span className="text-gray-600 opacity-60 font-inter text-sm md:text-xl">
                Thanks to User Transactions <br/> (DEFI Wallets Only!)
              </span>
            </div>
            <div className='lg:-ml-48'>
              <span className="text-pink-400 font-bold text-xl md:text-4xl">200,000+</span>
              <br />
              <br />
              <span className="text-gray-600 opacity-60 font-inter text-sm md:text-xl">
                Holders
              </span>
            </div>
            <div className='lg:-ml-48'>
              <span className="text-pink-600 font-bold text-xl md:text-4xl">
                $62.9 Millions
              </span>
              <br />
              <br />
              <span className="text-gray-600 opacity-60 font-inter text-sm md:text-xl">
                Market Cap
              </span>
            </div>
            <div className=" col-span-2 w-1/2">
              <div>
                <span className="text-pink-400 font-bold text-xl md:text-4xl">
                  100 Quadrillion
                </span>
                <br />
                <br />
                <span className="text-gray-600 opacity-60 font-inter text-sm md:text-xl">
                  Total Supply
                </span>
              </div>
            </div>
            <div className='lg:-ml-48'>
              <span className="text-pink-400 font-bold text-xl md:text-4xl">
                $0.0000006
              </span>
              <br />
              <br />
              <span className="text-gray-600 opacity-60 font-inter text-sm md:text-xl">
                Current Price
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Tokenomics