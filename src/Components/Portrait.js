import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const pictures = {
    "horizontal": [
      {id:1, image: '/images/portre/25min.jpg',width: 6000,height: 4000},
      {id:2, image: '/images/portre/hh3-min.jpg',width: 6016,height: 4016},
      {id:4, image: '/images/portre/m3-min.jpg',width: 6016,height: 4016},
      {id:5, image: '/images/portre/2min.jpg',width: 6000,height: 4000},
      {id:7, image: '/images/portre/p12-min.jpg',width: 6000,height: 4000},

    ],
    "vertical" : [
      {id:6, image: '/images/portre/jocixksz-min.jpg',width: 3799,height: 5688},
      {id:9, image: '/images/portre/lacicsipsz-min.jpg',width: 4000,height: 5718}
    ]
  }


const Portrait = () => {
    return (
        <Gallery className="img-wrap">
          {[...Array(pictures.vertical.length)].map((x, i) =>
            <Item
            original= {pictures.vertical[i].image}
            thumbnail= {pictures.vertical[i].image}
            width={pictures.vertical[i].width}
            height={pictures.vertical[i].height}
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={pictures.vertical[i].id} s>
                <motion.img ref={ref} onClick={open} src={pictures.vertical[i].image} alt="uploaded pic" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }} />
              </motion.div>
            )}
          </Item>
          )}
                    {[...Array(pictures.horizontal.length)].map((x, i) =>
            <Item
            original= {pictures.horizontal[i].image}
            thumbnail= {pictures.horizontal[i].image}
            width={pictures.horizontal[i].width}
            height={pictures.horizontal[i].height}
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={pictures.horizontal[i].id} s>
                <motion.img ref={ref} onClick={open} src={pictures.horizontal[i].image} alt="uploaded pic" 
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