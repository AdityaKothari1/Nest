import {
  Introduction,
  Banners,
  Experties,
  Villaplot,
  ImageCarousel,
  Contactform,
  PropertyImageSlider,
} from "@/components";

export default function Home() {
  return (
    <>
      <Introduction />
      <Experties />
      <Villaplot />
      <PropertyImageSlider />
      <Banners />
      <ImageCarousel />
      <Contactform />
    </>
  );
}
