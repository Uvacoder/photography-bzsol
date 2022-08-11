import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import pictures from "../pictures.json";

const Architecture = () => {
    return (
        <Gallery className="img-wrap">
          {[...Array(pictures.architecture.length)].map((x, i) =>
            <Item
            original= {pictures.architecture[i].image}
            thumbnail= {pictures.architecture[i].image}
            width={pictures.architecture[i].width}
            height={pictures.architecture[i].height}
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={pictures.architecture[i].id} s>
                <motion.img ref={ref} onClick={open} src={pictures.architecture[i].image} alt="uploaded pic" 
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
 
export default Architecture;