import { getAllCategories } from "_/app/_services/categories.service";
import React from "react";
import MySwiper from "../MySwiper/MySwiper";

export default async function CategoriesSlider() {
  const allCategories = await getAllCategories();
  if (allCategories == null) {
    return;
  }
  return (
    <div className="m-4">
      <MySwiper
        slidesPerView={8}
        spaceBetween={20}
        imagesList={allCategories?.map((category) => category.image)}
        nameList={allCategories?.map((category) => category.slug)}
   />
    </div>
  );
}
