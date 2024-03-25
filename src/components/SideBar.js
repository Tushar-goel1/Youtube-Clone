import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  const isHomePage=useSelector((store)=>store.app.isHomePage);
  if(!isMenuOpen ||!isHomePage){
    return(
      <div className=" h-screen fixed mt-16">
        <Link to="/">
        <div className='mt-2 mb-5 text-center rounded-lg ml-0.5 hover:bg-gray-300'>
        <img className="h-7 w-6 ml-6"
           alt="home icon"
           src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
        />
        <p className='text-xs pt-2 '>Home</p>
        </div>
        </Link>
        <div className='mb-10 text-center rounded-lg ml-0.5 hover:bg-gray-300'>
        <img className="h-12 w-12 ml-3"
           alt="shorts"
           src="https://qph.cf2.quoracdn.net/main-qimg-c74aff21c115bb4fec316d43686321f2"
        />
        <p className='text-xs pt-1 '>shorts</p>
        </div>
        <div className='text-center mb-10 rounded-lg ml-0.5 hover:bg-gray-300'>
        <img className="h-8 w-8 ml-5"
           alt="subscription"
           src="https://static.thenounproject.com/png/4530414-200.png"
        />
        <p className='text-xs pt-2 '>Subscriptions</p>
        </div>
        <div className='text-center rounded-lg ml-0.5 hover:bg-gray-300'>
        <img className="h-8 w-8 ml-5"
           alt="You"
           src="https://static.thenounproject.com/png/1261644-200.png"
        />
        <p className='text-xs pt-2 '>You</p>
        </div>
      </div>
    )
  }

  return(
    <div className="w-56 pl-2 fixed h-full mt-16 overflow-scroll scrollbar-w-2  ">
      <ul className="border-b-2 pt-1 pb-3">
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-8 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="home icon"
           src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
        />
        <span>Home</span>
        </Link>
        </li>
        <li className='flex h-8 hover:bg-gray-300 rounded-lg mt-1 p-1'>
        <img className="h-5 w-5 mx-2 mt-1 mr-4"
           alt="shorts"
           src="https://cdn.pixabay.com/photo/2021/05/05/12/16/shorts-png-6230962_960_720.png"
        />
        <span className=''>Shorts</span>
        </li>
        <li className='flex h-8 hover:bg-gray-300 rounded-lg mt-1 p-1'>
        <img className="h-5 w-5 mx-2 mt-1 mr-4"
           alt="Subscription"
           src="https://static.thenounproject.com/png/4530414-200.png"
        />
        <span className=''>Subscription</span>
        </li>
      </ul>
      <h4 className="pt-2 font-bold pb-2">You </h4>
      <ul className="pl-1 border-b-2 pb-3">
        <li>History</li>
        <li>Like Videos</li>
        <li>Watch later</li>
        <li>Your Videos</li>
      </ul>
      <h4 className="pt-2 font-bold pb-2 pl-2">Explore</h4>
      <ul className="pl-1 border-b-2 pb-3 text-sm ">
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Trending icon"
           src="https://cdn-icons-png.flaticon.com/512/1946/1946485.png"
        />
        <span className='pt-0.5'>Trending</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Shopping icon"
           src="https://icons.veryicon.com/png/o/commerce-shopping/merchant-product-icon-library/shopping-32.png"
        />
        <span className='pt-0.5'>Shopping</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Music icon"
           src="https://cdn.iconscout.com/icon/free/png-256/free-music-1767802-1502382.png"
        />
        <span className='pt-0.5'>Music</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Movies icon"
           src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/movie-icon.png"
        />
        <span className='pt-0.5'>Movies</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1 pt-1.5'>
        <img className="h-4 w-5  mx-2 mr-4 mt-0.5 pt-0.5"
           alt="Live icon"
           src="https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png"
        />
        <span >Live</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Gaming icon"
           src="https://images.vexels.com/media/users/3/127792/isolated/preview/19ed433991134a2ad4fcf6bad060c7a6-gaming-joystick-icon.png"
        />
        <span className='pt-0.5' >Gaming</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="News icon"
           src="https://cdn.iconscout.com/icon/free/png-256/free-news-471-861784.png"
        />
        <span className='pt-0.5'>News</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Sports icon"
           src="https://cdn-icons-png.flaticon.com/512/453/453364.png"
        />
        <span className='pt-0.5'>Sports</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Learning icon"
           src="https://seekicon.com/free-icon-download/bulb-outline_1.png"
        />
        <span className='pt-0.5'>Learning</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Fashion &Beauty icon"
           src="https://www.shareicon.net/data/512x512/2016/04/24/754828_beauty_512x512.png"
        />
        <span className='pt-0.5'>Fashion & Beauty</span>
        </Link>
        </li>
        <li ><Link to="/" className='flex hover:bg-gray-300 rounded-lg h-9 p-1'>
        <img className="h-5 w-5  mx-2 mr-4 mt-0.5"
           alt="Podcasts icon"
           src="https://cdn-icons-png.flaticon.com/512/1508/1508572.png"
        />
        <span className='pt-0.5'>Podcasts</span>
        </Link>
        </li>
      </ul>
      <h4 className="pt-2 font-bold pb-2">More From YouTube </h4>
      <ul className="pl-1 border-b-2 pb-3">
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <ul className="pl-1 border-b-2  mt-4 pb-5">
        <li className='hover:bg-gray-300 rounded-lg h-8 p-1'>Settings</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>
      <div className='text-sm m-3'>
      <p>About Press Copyright </p>
      <p>Contact us Creaters</p>
      <p className='pb-3'> Advertise Developers</p>
      <p>Terms Privacy Policy & Safety</p>
      <p>How Youtube Works</p>
      <p>Text new features</p>
      </div>
      <footer className='h-10 mb-12 font-light text-xs ml-3'>@2024 Google LLC</footer>
    </div>
  )
}

export default SideBar