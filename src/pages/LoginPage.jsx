import { Link } from "react-router-dom";
import InputArea from "../components/Header/InputArea";
import App from './../App';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
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
            <h1 className="text-xl font-bold">Flow</h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
              <button className="w-full bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-sm">
                Giriş yap
              </button>
              <p className="text-sm text-gray-400">
                Henuz Hesabın yok mu?
                <Link className="mx-2 text-white" to={'/register'}>Kaydol</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
