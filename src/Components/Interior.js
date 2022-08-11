import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import pictures from "../pictures.json";

const Interior = () => {
    return (
        <Gallery className="img-wrap">
          {[...Array(pictures.interior.length)].map((x, i) =>
            <Item
            original= {pictures.interior[i].image}
            thumbnail= {pictures.interior[i].image}
            width={pictures.interior[i].width}
            height={pictures.interior[i].height}
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={pictures.interior[i].id} s>
                <motion.img ref={ref} onClick={open} src={pictures.interior[i].image} alt="uploaded pic" 
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
 
export default Interior;