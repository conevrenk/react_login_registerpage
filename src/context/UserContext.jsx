import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3060";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState();

  const user_id = localStorage.getItem("token");

    // uygulama yüklendiğinde aktif kullanıcıyı çek
    useEffect(() => {
        if (user_id) {
            axios
            .get(`/users/${user_id}`)
            .then((res) => setActiveUser(res.data));  
        } else {
            navigate('/login')
        }
       
  }, []);

  // kullanıcıyı veritabanına ekler
  const uploadUser = (user) => {
    axios
      .post("/users", user)
      .then(() => {
        // kullanıcının id sinin local storage ekle
        localStorage.setItem("token", user.id);

        //   active usertateti günceller
        setActiveUser(user);

        // anasayfaya yönlendir
        navigate("/home");
        toast.success("Kayıt başarılı", { autoClose: 3000 });
      })
      .catch((err) => console.log(err));
    };
    console.log(activeUser)
  return (
    <UserContext.Provider value={{activeUser, uploadUser }}>
      {children}
    </UserContext.Provider>
  );
};
