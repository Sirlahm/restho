import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import Hero from "./components/HeroSection";
import Recipe from "./components/RecipeSection";
import MenuSection from "./components/MenuSection";
import ChefSection from "./components/ChefSection";
import Footer from "./components/Footer";
import ItemSection from "./components/ItemSection";

export default function Home() {
  return (
    <Box
      sx={{
        background: "#070707",
        position:"relative"
      }}
    >
      <TopBar />

        <Box
          width={{ xs: "100%", md: "90%" }}
          sx={{
            margin: "0 auto",
          }}
        >
          <Hero />
      </Box>
      <Recipe />
      <ItemSection />

      <MenuSection />
      <ChefSection />
      <Footer />
    </Box>
  );
}
