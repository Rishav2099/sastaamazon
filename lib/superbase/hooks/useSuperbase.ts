import { useState } from "react";
import { superbase } from "../product"; // Ensure the correct import path for superbase

export const useSuperbase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [mensProduct, setMensProduct] = useState<any>([]);
  const [WomensProduct, setWomensProduct] = useState<any>([]);

  const getDataFromSuperbase = async () => {
    try {
      let { data, error } = await superbase.from("product").select("*");
      if (error) throw error;
      if (data) {
        setProducts(data);
        console.log("All Products:", data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getFilterData = async (query: string) => {
    try {
      let { data, error } = await superbase
        .from("product")
        .select("*")
        .or(
          `title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`
        );
      if (error) throw error;
      if (data) {
        setFilterData(data); // Use setFilterData for filtered results
        console.log("Filtered Data:", data);
      }
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  const getSingleProduct = async (id: number) => {
    let { data, error } = await superbase
      .from("product")
      .select("*")
      .eq("id", id);
    if (data) {
      setSingleProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getMensClothing = async () => {
    let { data, error } = await superbase
      .from("product")
      .select("*")
      .ilike("category", `men's clothing`);
    if (data) {
      setMensProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getWomensClothing = async () => {
    let { data, error } = await superbase
      .from("product")
      .select("*")
      .ilike("category", `women's clothing`);
    if (data) {
      setWomensProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return {
    products,
    filterData,
    getFilterData,
    getDataFromSuperbase,
    getSingleProduct,
    singleProduct,
    getMensClothing,
    mensProduct,
    getWomensClothing,
    WomensProduct,
  };
};
