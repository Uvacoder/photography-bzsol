import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import Navbar from "../Navbar";
import { Gallery, Item } from 'react-photoswipe-gallery'



function Wedding() {

  return (
    <div className='text-center'>
      <Navbar className="fixed"></Navbar>
      <h1 className=' text-4xl md:text-6xl text-slate-700 opacity-85  font-semibold mt-32 mb-32'>Esküvői fotók</h1>
      <div className="flex flex-col mr-5 ml-5 mt-10  md:grid grid-cols-3 gap-10 content-center md:ml-20 md:mr-20 md:mt-20">
        <Gallery>
          {[...Array(12)].map((x, i) =>
            <Item
            original= {`https://picsum.photos/id/${Math.floor(Math.random() * 300) + 1}/1920/1080`}
            thumbnail= {`https://picsum.photos/id/${Math.floor(Math.random() * 300) + 1}/1920/1080`}
            width="1920"
            height="1080"
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} s>
                <motion.img ref={ref} onClick={open} src={`https://picsum.photos/id/${Math.floor(Math.random() * 300) + 1}/1920/1080`} alt="uploaded pic" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }} />
              </motion.div>
            )}
          </Item>
          )}
        </Gallery>
      </div>
    </div>
  )
}

export default Wedding;