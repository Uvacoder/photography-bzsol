
import portre from '../img/slider/portre.jpg';
import enterior from '../img/slider/enterior.jpg';
import epulet from '../img/slider/epulet.jpg';

const Options = () => {
    return (
        <section className='max-w-fit mx-10 mt-60  px-5 items-center' id='services'>
        <div className="  items-center">
            <h2 className="text-4xl font-bold text-center mb-10">
                Elérhető szolgáltatások 📋
            </h2>
            <h4 className='text-2xl text-center text-slate-600'>A képre kattintva elérhető lesz az adott szolgáltatás galériája</h4>
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6 gap-10  content-center">
            <div>
                <a href='/gallery'>
                <h2 className='text-center font-bold text-3xl text-slate-800'>Épület fotózás</h2> 
                <img className='relative shadow-xl hover:grayscale-[90%]' width={800} height={800} src={epulet} alt="asd"></img>
                </a>
            
            </div>
            <div>
            <a href='/portrait'>
                <h2 className='text-center font-bold text-3xl text-slate-800'>Portré fotózás</h2> 
                <img className='relative shadow-xl hover:grayscale-[90%]' width={800} height={800} src={portre} alt="asd"></img>
                </a>
            </div>
            <div>
            <h2 className='text-center font-bold text-3xl text-slate-800'>Enteriőr fotózás</h2> 
            <img className='shadow-xl hover:grayscale-[90%]' width={800} height={800}  src={enterior} alt="asd"></img> 
            </div>
            

            </div>
            <div className="mt-8"></div>
        </div>

    </section>
    );
}
 
export default Options;