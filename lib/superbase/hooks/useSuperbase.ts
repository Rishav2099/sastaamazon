import { useState } from "react";
import { superbase } from "../product"; // Ensure the correct import path for superbase

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  // Add any other fields that your product contains
}

export const useSuperbase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterData, setFilterData] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [mensProduct, setMensProduct] = useState<Product[]>([]);
  const [WomensProduct, setWomensProduct] = useState<Product[]>([]);

  const getDataFromSuperbase = async () => {
    try {
      const { data, error } = await superbase.from("product").select("*");
      if (error) throw error;
      if (data) {
        setProducts(data as Product[]);
        console.log("All Products:", data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getFilterData = async (query: string) => {
    try {
      const { data, error } = await superbase
        .from("product")
        .select("*")
        .or(
          `title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`
        );
      if (error) throw error;
      if (data) {
        setFilterData(data as Product[]);
        console.log("Filtered Data:", data);
      }
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  const getSingleProduct = async (id: number) => {
    try {
      const { data, error } = await superbase
        .from("product")
        .select("*")
        .eq("id", id);
      if (data) {
        setSingleProduct(data[0] as Product);
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error fetching single product:", error);
    }
  };

  const getMensClothing = async () => {
    try {
      const { data, error } = await superbase
        .from("product")
        .select("*")
        .ilike("category", `men's clothing`);
      if (data) {
        setMensProduct(data as Product[]);
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error fetching men's clothing:", error);
    }
  };

  const getWomensClothing = async () => {
    try {
      const { data, error } = await superbase
        .from("product")
        .select("*")
        .ilike("category", `women's clothing`);
      if (data) {
        setWomensProduct(data as Product[]);
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error fetching women's clothing:", error);
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
