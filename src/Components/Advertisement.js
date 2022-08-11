import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import pictures from "../pictures.json";

const Advertisement = () => {
    return (
        <Gallery className="img-wrap">
          {[...Array(pictures.advertisement.length)].map((x, i) =>
            <Item
            original= {pictures.advertisement[i].image}
            thumbnail= {pictures.advertisement[i].image}
            width={pictures.advertisement[i].width}
            height={pictures.advertisement[i].height}
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={pictures.advertisement[i].id} s>
                <motion.img ref={ref} onClick={open} src={pictures.advertisement[i].image} alt="uploaded pic" 
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
 
export default Advertisement;