
import Navbar from "../Components/Navbar"
import Int from "../Components/Interior";

function Interior() {

  return (
    <div>
    <div className='text-center'>
      <Navbar className="fixed"></Navbar>
      <h1 className='flex flex-col md:flex-row text-4xl md:text-6xl justify-center text-slate-700 opacity-85  font-semibold mt-32 mb-32'>Enteriőr fotóim</h1>
      <div className="flex flex-col mr-5 ml-5 mt-10 mb-40  md:grid grid-cols-3 gap-10 content-center md:ml-20 md:mr-20 md:mt-20">
        <Int/>
      </div>
    </div>
    </div>
  )
}

export default Interior;