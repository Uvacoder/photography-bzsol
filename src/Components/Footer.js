import Facebook from "../img/social_media/Facebook.svg";
import Instagram from "../img/social_media/Instagram.svg";
import WhatsApp from "../img/social_media/WhatsApp.svg";
import GitHub from "../img/social_media/GitHub.svg"

const Footer = () => {
    return (
        <footer id="footer" className="bg-stone-800">
        <div className="container flex flex-col-reverse justify-between  pb-8 pt-8 px-auto mx-auto space-y-0 md:flex-row md:space-y-0">

          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              &copy; {new Date().getFullYear()} Svetz Ádám
            </div>

            <div>
            </div>

            <div className="flex justify-center space-x-4">

              <a href="https://facebook.com">
                <img src={Facebook} alt="Facebook page" className="h-8" />
              </a>

              <a href="https://instagram.com">
                <img src={Instagram} alt="Instagram site" className="h-8" />
              </a>

              <a href="https://whatsapp.com">
                <img src={WhatsApp} alt="WhatsApp profile" className="h-8" />
              </a>

              <a href="https://github.com/bzsol/svetzphotography">
                <img src={GitHub} alt="GitHub repository" className="h-8" />
              </a>

            </div>
          </div>
          <div className="flex flex-col justify-between">
          <div className="hidden text-white md:block relative pt-6" >
          &copy; {new Date().getFullYear()} Svetz Ádám
          </div>
          </div>
          </div>
      </footer>
  
    );
}
 
export default Footer;