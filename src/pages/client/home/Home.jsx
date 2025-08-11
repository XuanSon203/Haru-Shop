import React from "react";
import Carousels from "../../../components/carousels/Carousels";
import PopularField from "../../../components/field/PopularField";
import Blog from "../blog/Blog";
import Categroies from "../category/Categroies";

function Home() {
  return (
    <>
      <Carousels />
      <h1 className="text-center mt-4 "></h1>
      <PopularField />
      <h1 className="text-center mt-4 ">Bài viết sẩn phẩm và dịch vụ </h1>
      <Blog />
    </>
  );
}

export default Home;
