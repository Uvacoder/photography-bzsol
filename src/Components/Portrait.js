import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import pictures from "../pictures.json";

const Portrait = () => {
    return (
        <Gallery className="img-wrap">
          {[...Array(pictures.portraits.length)].map((x, i) =>
            <Item
            original= {pictures.portraits[i].image}
            thumbnail= {pictures.portraits[i].image}
            width={pictures.portraits[i].width}
            height={pictures.portraits[i].height}
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={pictures.portraits[i].id} s>
                <motion.img ref={ref} onClick={open} src={pictures.portraits[i].image} alt="uploaded pic" 
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