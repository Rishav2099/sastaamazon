"use client";
import SearchResult from "@/component/SearchResult";
import { useSuperbase } from "@/lib/superbase/hooks/useSuperbase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { query } = useParams();
  const { filterData, getFilterData } = useSuperbase();

  useEffect(() => {
    getFilterData(query.toString());
  }, []);

  console.log(filterData);

  return <div>
    <SearchResult filterData={filterData} />
     </div>;
};

export default Page;
