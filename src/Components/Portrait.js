import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const pictures = {
    "items": [
      {id:1, image: '/images/portre/25min.jpg',width: 6000,height: 4000},
      {id:2, image: '/images/portre/hh3-min.jpg',width: 6016,height: 4016},
      {id:3, image: '/images/portre/p3-min.jpg',width: 3945,height: 6015},
      {id:4, image: '/images/portre/m3-min.jpg',width: 6016,height: 4016},
      {id:5, image: '/images/portre/2min.jpg',width: 6000,height: 4000},
      {id:6, image: '/images/portre/jocixksz-min.jpg',width: 3799,height: 5688},
      {id:7, image: '/images/portre/p12-min.jpg',width: 6000,height: 4000},
      {id:8, image: '/images/portre/svetz1min.jpg',width: 4016,height: 6016},
      {id:9, image: '/images/portre/lacicsipsz-min.jpg',width: 4000,height: 5718}
    ]
  }


const Portrait = () => {
    return (
        <Gallery>
          {[...Array(pictures.items.length)].map((x, i) =>
            <Item
            original= {pictures.items[i].image}
            thumbnail= {pictures.items[i].image}
            width={pictures.items[i].width}
            height={pictures.items[i].height}
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={pictures.items[i].id} s>
                <motion.img ref={ref} onClick={open} src={pictures.items[i].image} alt="uploaded pic" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }} />
              </motion.div>
            )}
          </Item>
          )}
        </Gallery>
    );
}
 
export default Portrait;