// REVIEWED

import { Roboto_Mono as RobotoMono } from "next/font/google";
import Image from "next/image";

import slide09Module08 from "../../../../../slides/pcx-next-js-workshop-slide-09-module-08@2x.png";

// IMAGE AND FONT OPTIMIZATION.
// next/image extends img with size optimization, modern formats,
// lazy loading, and no layout shift. The static import above
// carries the intrinsic width and height, so the first Image needs
// no size props. The second Image uses a URL string, so the sizes
// are written by hand. Both reserve their space before loading.

// next/font self-hosts the font files. They ship as static assets
// from this deployment, so the browser sends no requests to Google.
// The font is scoped to where its className is applied.
const robotoMono = RobotoMono({ subsets: ["latin"] });

const ImageFontPage = function ImageFontPage() {
  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        14 Image and font
      </h2>
      <p className="mb-5 text-sm">
        Two renders of the same local file, one statically imported and one by
        URL with explicit sizes.
      </p>
      <Image
        src={slide09Module08}
        alt="Slide 09 Module 08, statically imported"
        className="mb-2"
      />
      <Image
        src="/pcx-next-js-workshop-slide-13-closing@2x.png"
        alt="Slide 13 Closing, by URL with explicit sizes"
        width={320}
        height={240}
        className="mb-5 object-cover"
      />
      <p className={`${robotoMono.className} text-sm`}>
        This line renders in Roboto Mono, self-hosted by next/font.
      </p>
    </main>
  );
};

export default ImageFontPage;
