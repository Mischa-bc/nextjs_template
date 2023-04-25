'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion.js';
import { TitleText, TypingText } from '../components';


const World = () => (
  <section className={`${styles.paddings} relative z-index-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="People on the World" textStyles="text-center" />
      <TitleText 
        title = {<>
          Track friends around you and invite them to play together in the same world
        </>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img 
          src='/map.png'
          alt='map'
          className='w-full h-full object-cover'
        />
        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img 
            src='people-01.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img 
            src='people-03.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img 
            src='people-02.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className="absolute w-[196px] h-[150px] bottom-36 left-36 rounded-[24px] bg-cover bg-center" style={{ backgroundImage: `url('/planet-02.png')` }}>
          {/* <div className='absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent'>
            <div className=' absolute inset-0 z-20 bg-gradient-to-t from-red-500 to-purple-700 opacity-10'>
            </div>
          </div> */}
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;



