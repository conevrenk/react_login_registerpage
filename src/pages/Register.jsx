import { Link} from "react-router-dom";
import InputArea from "../components/Header/InputArea";
import {  validate } from "../utils/helper";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";



const Register = () => {
  const { uploadUser } = useContext(UserContext);


  // form gönderilme olayı
  const handleSubmit = async(e) => {
    e.preventDefault();

    // form verisi oluşturma
    const form = new FormData(e.target);
    // form verilerini objeye çevirme
    const formData = Object.fromEntries(form.entries());

     // resmi stringe çevir
    const strImage = imageToString(formData.image);
     
    console.log(strImage)


    // form kotrol etme
    if (validate(formData) && strImage) {
      // kullanıcıya id verme
      formData.id = v4();

     
      // kullanıcının resmini objeye ekleme

      formData.image = strImage;
      // kullanıcıyı veritabanına ekleme
      uploadUser(formData)
    } else {
      toast.info("lütfen formu doldurunuz", { autoClose: 2000 });
    }
  };
  // resmi stringe çevirir
  const imageToString = async(file) => {
    // dosya tipini dogrulama
    if (file.type === "image/jpeg" || file.type === "image/png") {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          toast("resmi yüklemede hata oluştu")
          reject(null);
        };
      });
    } else {
      toast("Lütfen gecerli bir dosya tipi giriniz:jpg/png");
      return null;
    }
  };

 

  return (
    <section className="bg-gray-900">
      {/* orta alan */}
      <div className="h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <Link className="flex items-center mb-6 text-2xl ">
          <img
            className="rounded-full w-8 h-8 mr-2 mt-5 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlZj1MgQUZbBim5Wjrq3S66bnr9byHia-2w&s"
            alt=""
          />
          <span className="text-white mt-6 text-2xl font-semibold">Flow</span>
        </Link>
        <div className="w-full bg-gray-800 border-gray-700 rounded-lg shadow border sm:max-w-md text-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold">Yeni Hesap Oluştur</h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <InputArea
                label={"İsim"}
                holder={"örn:ahmet"}
                name={"name"}
                type={"text"}
              />
              <InputArea
                label={"Emailiniz"}
                holder={"deneme@sirket.com"}
                name={"email"}
                type={"email"}
              />
              <InputArea
                label={"Şifre"}
                holder={"......."}
                name={"pasword"}
                type={"pasword"}
              />
              <InputArea
                label={"Profil Fotorafı"}
                name={"image"}
                type={"file"}
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-sm">
                Kaydol
              </button>
              <p className="text-sm text-gray-400">
                Henuz Hesabın var mu?
                <Link className="mx-2 text-white" to={"/login"}>
                  Giriş yap
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
