import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const ArrowUpButton = () => {
	const [scroll, setScroll] = useState(true)
	const scrollY = 700
	const isShowUpButton = scroll < scrollY

	const scrollTo = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const handleScroll = () => setScroll(window.scrollY)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div
			onClick={scrollTo}
			className={
				!isShowUpButton
					? 'fixed top-[90%] right-[2%] text-[#777779] cursor-pointer hover:scale-110 ease-in duration-300'
					: 'hidden '
			}>
			<BsFillArrowUpCircleFill size={50} />
		</div>
	)
}

export default ArrowUpButton
