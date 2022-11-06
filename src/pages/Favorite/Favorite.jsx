import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header';
import GameItemFav from '../../components/GameItem/GameItemFav/GameItemFav'

const Favorite = () => {


  const favorite = useSelector(state => state.favoriteSlice.favorite)
  return (
    <div>
      <Header/>
      
      <div className='grid  grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5'>
      {favorite.map((item,id) => (
        <GameItemFav key={item.title} game={item} id={id} />
      ))}
    </div>
    </div>
  )
}

export default Favorite