import { DisplayCard } from "@/components/card/displaycard";
import { AppNavbar } from "@/components/navbar";
import React from "react";

export default function Home(dragos) {
  return (
    <main>
      <AppNavbar />
      <DisplayCard />
    </main>
  );
}
