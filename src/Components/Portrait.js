import { motion } from 'framer-motion';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import pictures from "../pictures.json";

const Portrait = () => {
    return (
        <Gallery className="img-wrap">
          {[...Array(pictures.portrait.length)].map((x, i) =>
            <Item
            original= {pictures.portrait[i].image}
            thumbnail= {pictures.portrait[i].image}
            width={pictures.portrait[i].width}
            height={pictures.portrait[i].height}
          >
            {({ ref, open }) => (
              <motion.div className="img-wrap"
                layout
                whileHover={{ opacity: 1 }} key={pictures.portrait[i].id} s>
                <motion.img ref={ref} onClick={open} src={pictures.portrait[i].image} alt="uploaded pic" 
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