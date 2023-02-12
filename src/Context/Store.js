import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import recData from "../data/data.json";

export let appContext = createContext();

export default function CounterContextProvider(props) {
  let videosData = recData.recProd;
  // const [t, i18n] = useTranslation();
  const [products, setProducts] = useState();
  const [favVideos, setFavVideos] = useState(() =>
    getLocalStorage("items", [])
  );

  const baseURL = "https://b3ly.herokuapp.com/api";

  useEffect(() => {
    const { data } = videosData;
    setProducts(data);
  }, []);

  useEffect(() => {
    // setLocalStorage("favProd", JSON.stringify([...new Set(favProducts)]));
    setLocalStorage("items", favVideos);
  }, [favVideos]);

  const addToFavorite = (product) => {
    const checkProductInCart = favVideos.find((item) => item.id === product.id);
    if (checkProductInCart) {
      onRemove(product);
    } else {
      setFavVideos([...favVideos, { ...product }]);
    }
  };

  let foundItems, index;
  const onRemove = (product) => {
    foundItems = favVideos.find((item) => item.id === product.id);

    const newFavtItems = favVideos.filter((item) => item.id !== product.id);
    setFavVideos(newFavtItems);
  };

  function setLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // catch possible errors:
      console.log(e.error);
    }
  }

  function getLocalStorage(key) {
    try {
      const data = window.localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      // if error, return initial value
      return [];
    }
  }

  return (
    <appContext.Provider
      value={{
        baseURL,
        videosData,
        // i18n,
        // t,
        addToFavorite,
        products,
        favVideos,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}
