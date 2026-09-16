"use client";

import {
  useState,
} from "react";

import MockTestFilters from "./MockTestFilters";
import MockTestList from "./MockTestList";

export default function MockTestContent() {
  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState(0);

  return (
    <section className="mt-6">
      <MockTestFilters
        selectedFilter={
          selectedFilter
        }
        onChange={
          setSelectedFilter
        }
      />

      <MockTestList
        cid={1}
        uid={21}
        filter={
          selectedFilter
        }
      />
    </section>
  );
}