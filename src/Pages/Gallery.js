
import Navbar from "../Components/Navbar"
import portre from '../img/slider/portre.jpg';
import enterior from '../img/slider/enterior.jpg';
import wedding from '../img/slider/wedding.jpg';


function Gallery() {

    return (
        <div>
            <div className='text-center'>
                <Navbar className="fixed"></Navbar>
                <h1 className='flex flex-col md:flex-row text-4xl md:text-6xl items-center justify-center text-slate-700 opacity-85  font-semibold mt-32 mb-32'>Galéria</h1>
                <div className="flex flex-col items-center md:flex-row  gap-5 content-center md:ml-20 md:mr-20 md:mt-20">
                    <div class="container">
                        <a href="/portrait">
                        <img src={portre} alt="Portré" width={1000} height={1000} class="image" />
                        <div class="overlay">
                            <div class="text">Portré</div>
                        </div>
                        </a>
                    </div>
                    <div class="container">
                        <a href="/wedding">
                        <img src={wedding} alt="Esküvő" width={1000} height={1000} class="image" />
                        <div class="overlay">
                            <div class="text">Esküvő</div>
                        </div>
                        </a>
                    </div>
                    <div class="container">
                        <a href="/interior">
                        <img src={enterior} alt="Enteriőr" width={1000} height={1000} class="image" />
                        <div class="overlay">
                            <div class="text">Enteriőr</div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;