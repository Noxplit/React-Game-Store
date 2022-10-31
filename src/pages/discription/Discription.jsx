import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import axios from 'axios';
import {GiRollingEnergy} from 'react-icons/gi'
import {FaConnectdevelop} from 'react-icons/fa'
import {AiFillWindows} from 'react-icons/ai'
import {BsClipboardData} from 'react-icons/bs'
import { Link } from 'react-router-dom';



export const Discription = () => {

  const discription = useSelector(state => state.cartSlice.discription)

  console.log(discription);
  const [discript, isDiscription] = useState('')
  console.log(discript);
  useEffect(() => {

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: {id: discription},
  headers: {
    'X-RapidAPI-Key': '406e13fe73mshba599c021ed7dc5p10dbe0jsnc04b14e8dc13',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  isDiscription(response.data);
}).catch(function (error) {
	console.error(error);
});
  },[])
  return (
    <div>
      <Header />
     <div className='p-4'>
      <div className='text-center text-3xl py-4'>{discript.title}</div>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-4  text-xl text-[#777779]'>
        <div className='flex gap-4 justify-center items-center'><GiRollingEnergy/>{discript.genre}</div>
        <div className='flex gap-4 justify-center items-center'><FaConnectdevelop/>{discript.developer}</div>
        <div className='flex gap-4 justify-center items-center'><AiFillWindows/>{discript.platform}</div>
        <div className='flex gap-4 justify-center items-center'><BsClipboardData/>{discript.release_date}</div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 '>{discript?.screenshots?.map(item => (
        <img src={item.image} alt="hello" className='rounded-2xl' />
      ))}</div>

      <div className='py-4 flex justify-center items-center flex-wrap  gap-4'>
      <div className='  rounded-2xl xl:max-w-[900px]'>{discript.description}</div>
        <div className='text-[#777779]   p-10 xl:max-w-[30%]   w-full   bg-[#262627] rounded-xl flex flex-col gap-2  text-lg  ' >
        <div >System Requirements:</div>
        <div>{discript?.minimum_system_requirements?.graphics}</div>
        <div>{discript?.minimum_system_requirements?.memory}</div>
        <div>{discript?.minimum_system_requirements?.os}</div>
        <div>{discript?.minimum_system_requirements?.processor}</div>
        <div>{discript?.minimum_system_requirements?.storage}</div>
        <a href={discript?.freetogame_profile_url}><div className='max-w-[200px]  py-2 text-white  bg-[#e58d27] rounded-2xl hover:scale-105 ease-in duration-300 text-center mt-10'><button>Watch Game</button></div></a>
        </div>
      <div>
        
      </div>
      </div>

      </div>
    </div>
  );
};
