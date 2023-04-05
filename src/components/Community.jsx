import React from 'react'
import twitterava from "../assets/twitterava.png"
import telegramava from "../assets/telegramava.png";

const Community = () => {
  return (
    <div class={`w-full bg-right-bottom bg-no-repeat bg-auto overflow-hidden bg-gradient-to-b from-pink-100 via-Pinkss to-Grad `} id="community">
        <div class="md:grid md:grid-cols-3">
          <div class="flex justify-end pt-5 lg:pt-44"></div>
          <div class="flex justify-center pt-5 lg:pt-44">
            <h1 class="font-bold text-pink-600 bold  mx-7 text-5xl tracking-wider">
              {/* Roadmap */}
            </h1>
          </div>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-0 xl:gap-4 lg:space-y-0 md:px-40 p-5 mt-28 mb-20 text-xs">
          <div className=" md:w-3/4 max-w-md p-4 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-pink-600 sm:p-8 "style={{ width: '350px', height: '292px' }}>
            <div class="flex items-center justify-between">
              <h5 className="text-base font-bold leading-tight text-Subject tracking-tighter style={{ letterSpacing: '-0.04em' }}">
                Twitter
              </h5>
            </div>
            <div class="flow-root ">
              <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={twitterava}
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-2xl font-bold text-gray-900 truncate ">
                        Niziru Coin
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        @nizirucoin
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-8 text-bold font-inter text-left text-lg text-gray-600">
                    Lorem ipsum dolor sit amet
                  </div>
                  <div class="flex items-center space-x-4 mt-8">
                    <div class="flex-1 min-w-0">
                      <p class="font-bold text-3xl bg-clip-text text-coundowbox text-countdownborder truncate style={{ letterSpacing: '-0.04em'}} ">
                        650K
                      </p>
                      <p class="text-sm text-countdowbox truncate font-inter dark:text-countdowbox">
                        Followers
                      </p>
                    </div>
                    <div class="inline-flex items-center font-inter p-4 hover:text-white text-xs rounded-xl bg-gradient-to-br from-Subject to-countdownborder text-white tracking-widest">
                      Follow
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className=" md:w-3/4 max-w-md p-4 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-pink-600 sm:p-8 "style={{ width: '350px', height: '292px' }}>
            <div class="flex items-center justify-between">
            <h5 className="text-base font-bold leading-tight text-Subject tracking-tighter style={{ letterSpacing: '-0.04em' }}">
                Telegram
              </h5>
            </div>
            <div class="flow-root">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full"
                        src={telegramava}
                        alt="Telegram"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-2xl font-medium text-gray-900 truncate ">
                        Niziru Coin
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        @nizirucoin
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-8 text-bold font-inter text-left text-lg text-gray-600">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div class="flex items-center space-x-4 mt-8">
                    <div class="flex-1 min-w-0">
                      <p class="font-bold text-3xl bg-clip-text text-coundowbox text-countdownborder truncate style={{ letterSpacing: '-0.04em'}} ">
                        50K
                      </p>
                      <p class="text-sm text-countdowbox truncate font-inter dark:text-countdowbox">
                        Subscribers
                      </p>
                    </div>
                    <div class="inline-flex items-center font-inter p-4 hover:text-white text-xs rounded-xl bg-gradient-to-br from-Subject to-countdownborder text-white tracking-widest">
                      Subscribe
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-Subject  dark:border-gray-600 xl:p-8 ">
            <div class="flex justify-end items-baseline my-8">
              {/* <span class="mr-2 text-6xl font-sans  font-bold">
                Join Our Community
              </span> */}
            </div>
            <div class="md:flex md:justify-end flex justify-center items-baseline my-8">
            <span className="md:mr-2 text-4xl md:text-6xl font-bold -mt-7 text-left drop-shadow-lg shadow-white tracking-tighter" style={{ fontSize: "64px", letterSpacing: "-4%" }}>
            Join Our Community!
            </span>

            </div>

          </div>
        </div>
      </div>
  )
}

export default Community