
import Navbar from "../Navbar"
import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import reklam from '../img/slider/pickwick.jpg';
import portre from '../img/slider/portre.jpg';
import enterior from '../img/slider/enterior.jpg';
import epulet from '../img/slider/epulet.jpg';

function Photos() {

  return (
    <div>
    <div className='text-center'>
      <Navbar className="fixed"></Navbar>
      <h1 className='flex flex-col md:flex-row text-4xl md:text-6xl justify-center text-slate-700 opacity-85  font-semibold mt-32 mb-32'>Hello</h1>
      <div className="flex flex-col mr-5 ml-5 mt-10 mb-40  md:grid grid-cols-2 gap-10 content-center md:ml-20 md:mr-20 md:mt-20">
        <Gallery>
        <Item
            original= {epulet}
            thumbnail= {epulet}
            width = "6000"
            height = "4000"
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={1} s>
                  
                <motion.img ref={ref} onClick={open} src={epulet} alt="uploaded pic" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }} />
              </motion.div>
            )}
          </Item>
          <Item
            original= {reklam}
            thumbnail= {reklam}
            width = "6000"
            height = "3953"
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={1} s>
                  
                <motion.img ref={ref} onClick={open} src={reklam} alt="uploaded pic" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }} />
              </motion.div>
            )}
          </Item>
          <Item
            original= {portre}
            thumbnail= {portre}
            width = "6000"
            height = "4000"
          >
            {({ ref, open }) => (
              <div className="items-center">
                <h1 className="absolute text-center text-4xl md:text-6xl text-slate-700 opacity-85  font-semibold ">Hello World!</h1>
              <motion.div className="img-wrap-reverse"
                layout
                whileHover={{ opacity: 0.4 }} key={1} s>
                 
                <motion.img ref={ref} onClick={open} src={portre} alt="uploaded pic" 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }} />
              </motion.div>
              </div>
            )}
          </Item>
          <Item
            original= {enterior}
            thumbnail= {enterior}
            width = "6000"
            height = "4000"
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={1} s>
                  
                <motion.img ref={ref} onClick={open} src={enterior} alt="uploaded pic" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }} />
              </motion.div>
            )}
          </Item>
        </Gallery>
      </div>
    </div>
    </div>
  )
}

export default Photos;