"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Rabbit } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const operators: Record<
  string,
  {
    name: string;
    designDescription: string;
    icon: string;
    iconDark?: string;
    stations: Record<
      string,
      {
        name: string;
        icon?: string;
        iconDark?: string;
        sign?: string;
        signDark?: string;
        downloadLink?: string;
      }
    >;
    font: string;
    fontLink: string;
  }
> = {
  tfs: {
    name: "Transport for Stepford/National Rail",
    designDescription: "Simple, yet unique to every station.",
    icon: "src/tfs-logo/light/icon.png",
    iconDark: "src/tfs-logo/dark/icon.png",
    stations: {
      SVC: {
        name: "Stepford Victoria",
        icon: "src/stations/SVC/icon.png",
      },
      SCN: {
        name: "Stepford Central",
        icon: "src/stations/SCN/icon.png",
      },
      SCE: {
        name: "Stepford East",
        icon: "src/stations/SCE/icon.png",
      },
      SHB: {
        name: "St. Helens Bridge",
        icon: "src/stations/SHB/icon.png",
      },
      BEN: {
        name: "Benton",
        icon: "src/stations/BEN/icon.png",
      },
      MGT: {
        name: "Morganstown",
        icon: "src/stations/MGT/icon.png",
      },
      LTC: {
        name: "Leighton City",
        icon: "src/stations/LTC/icon.png",
      },
      LYN: {
        name: "Llyn-by-the-Sea",
        icon: "src/stations/LYN/icon.png",
      },
    },
    font: "Instrument Sans",
    fontLink: "https://fonts.google.com/specimen/Instrument+Sans",
  },
  cn: {
    name: "Stepford Connect",
    designDescription: "Shines a light.",
    icon: "src/connect-icon.png",
    stations: {
      WHL: { name: "Woodhead Lane" },
      HTR: { name: "Houghton Rake" },
      WHF: { name: "Whitefield" },
      PBN: { name: "Port Benton" },
      BNB: { name: "Benton Bridge" },
      HHG: { name: "Hampton Hargate" },
      USL: { name: "Upper Staploe" },
      WTN: { name: "Water Newton" },
      RCP: { name: "Rocket Parade" },
      LTW: { name: "Leighton West" },
      EDG: { name: "Edgemead" },
      ALB: { name: "Aslockby" },
      CLB: { name: "Carnalea Bridge" },
      RLB: { name: "Rayleigh Bay" },
      FAY: { name: "Faymere" },
      WST: { name: "Westercoast" },
      MRC: { name: "Millcastle Racecourse" },
      MLC: { name: "Millcastle" },
      STL: { name: "Starryloch" },
    },
    font: "Public Sans",
    fontLink: "https://fonts.google.com/specimen/Public+Sans",
  },
  wl: {
    name: "Waterline",
    designDescription: "Angled.",
    icon: "src/waterline-icon.png",
    stations: {
      NRH: { name: "Newry Harbour" },
      NRY: { name: "Newry" },
      EDQ: { name: "Eden Quay" },
      FRD: { name: "Faraday Road" },
      WBN: { name: "West Benton" },
      CSP: { name: "Cambridge Street Parkway" },
      APK: { name: "Ashlan Park" },
      CON: {
        name: "Connolly",
        sign: "src/stations/_CON/_con.png",
        downloadLink:
          "https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/_CON",
      },
      SAW: { name: "Airport West" },
      JST: { name: "James Street" },
      FAR: { name: "Farleigh" },
      RDV: { name: "Rosedale Village" },
      EFD: { name: "Esterfield" },
      MGD: { name: "Morganstown Docks" },
      WNG: { name: "Whitney Green" },
      GNS: { name: "Greenslade" },
    },
    font: "Raleway",
    fontLink: "https://fonts.google.com/specimen/Raleway",
  },
  al: {
    name: "Airlink",
    designDescription: "The line is broken.",
    icon: "src/airlink-icon.png",
    stations: {
      EMJ: { name: "Elsemere Junction" },
      SAP: { name: "Airport Parkway" },
      SAC: { name: "Airport Central" },
      SAO: { name: "Airport Teminal 1" },
      SAX: { name: "Airport Teminal 2" },
      SAZ: { name: "Airport Teminal 3" },
    },
    font: "Red Hat Display",
    fontLink: "https://fonts.google.com/specimen/Red+Hat+Display",
  },
  ex: {
    name: "Stepford Express",
    designDescription: "Switching tracks.",
    icon: "src/express-icon.png",
    stations: {
      LSR: { name: "Leighton Stepford Road" },
      WYV: { name: "Westwyvern" },
      NSE: { name: "Northshore" },
    },
    font: "DM Mono",
    fontLink: "https://fonts.google.com/specimen/DM+Mono",
  },
  mt: {
    name: "Metro",
    designDescription: "Bubbles. (inspired by the current design)",
    icon: "src/metro-icon.png",
    stations: {
      WFD: { name: "Willowfield" },
      HPK: { name: "Hemdon Park" },
      BCY: { name: "Beechley" },
      FNQ: { name: "Financial Quarter" },
      CHP: { name: "City Hospital" },
      FWY: { name: "Four Ways" },
      SHS: { name: "Stepford High Street" },
      WFL: { name: "Whitefield Lido" },
      UFC: { name: "Stepford UFC" },
      NHW: { name: "New Harrow" },
      EMP: { name: "Elsemere Pond" },
      BRY: { name: "Berrily" },
      EBR: { name: "East Berrily" },
      BPK: { name: "Beaulieu Park" },
      AGP: { name: "Angel Pass" },
      CXN: { name: "Coxly Newtown" },
      BAR: { name: "Barton" },
      BDN: { name: "Bodin" },
      CLY: { name: "Coxly" },
    },
    font: "Montserrat",
    fontLink: "https://fonts.google.com/specimen/Montserrat",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="mb-auto p-4 px-8">
        <Alert variant="default" className="mb-4">
          <Info />
          <AlertTitle>
            This website is in no way affiliated with Stepford County Railway or
            it's management.
          </AlertTitle>
          <AlertDescription>
            If you need help in-game, please direct your inquiry to the correct
            channel in the{" "}
            <a
              href="https://discord.gg/scr"
              className="underline"
              target="_blank"
            >
              SCR Official Discord
            </a>
            .
          </AlertDescription>
        </Alert>

        <Alert variant="default" className="mb-4">
          <Rabbit />
          <AlertTitle>
            All of these signs are available for download in both SVG and PNG
            format!
          </AlertTitle>
          <AlertDescription>
            Simply click on the station sign you want, and you'll be taken to
            Github to download it.
          </AlertDescription>
        </Alert>

        <Alert variant="default" className="mb-4">
          <Info />
          <AlertTitle>This project is currently out of date.</AlertTitle>
          <AlertDescription>
            4 new stations were added in Version 2.3.0, they will be added soon.
          </AlertDescription>
        </Alert>

        <Accordion type="single" collapsible>
          <AccordionItem value="toc">
            <AccordionTrigger>Table of Contents</AccordionTrigger>
            <AccordionContent>
              {Object.entries(operators).map(([key, operator]) => (
                <div key={key}>
                  <a
                    href={`#${key}`}
                    className="ml-2 mt-2 mb-1 flex gap-2 items-center hover:underline"
                  >
                    <img
                      src={`https://github.com/valbuildr/scr-signs-concept/blob/main/${operator.icon}?raw=true`}
                      alt={operator.name}
                      className="h-6 w-6 object-scale-down dark:block hidden"
                    />
                    <img
                      src={`https://github.com/valbuildr/scr-signs-concept/blob/main/${
                        operator.iconDark ?? operator.icon
                      }?raw=true`}
                      alt={operator.name}
                      className="h-6 w-6 object-scale-down block dark:hidden"
                    />{" "}
                    <p>{operator.name}</p>
                  </a>

                  {Object.entries(operator.stations).map(([id, station]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="ml-8 mt-2 mb-1 flex gap-2 items-center hover:underline"
                    >
                      <img
                        src={`https://github.com/valbuildr/scr-signs-concept/blob/main/${
                          station.icon ?? operator.icon
                        }?raw=true`}
                        alt={station.name}
                        className="h-6 w-6 object-scale-down dark:block hidden"
                      />
                      <img
                        src={`https://github.com/valbuildr/scr-signs-concept/blob/main/${
                          station.iconDark ?? operator.iconDark ?? operator.icon
                        }?raw=true`}
                        alt={station.name}
                        className="h-6 w-6 object-scale-down block dark:hidden"
                      />{" "}
                      <p>
                        {station.name} ({id})
                      </p>
                    </a>
                  ))}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="border-y border-black/50 dark:border-white/50 divide-y divide-black/50 dark:divide-white/50 max-w-screen-sm mx-auto">
          {Object.entries(operators).map(([key, operator]) => (
            <div key={key} className="py-4">
              <div className="flex items-center justify-between" id={key}>
                <p className="text-3xl font-bold mb-2">
                  <a href={`#${key}`}>{operator.name}</a>
                </p>{" "}
                <a className="hover:underline" href="#">
                  back to top
                </a>
              </div>
              <p className="mb-4">{operator.designDescription}</p>

              <div className="space-y-2">
                {Object.entries(operator.stations).map(([id, station]) => (
                  <div key={id}>
                    <p className="text-2xl font-medium pb-1" id={id}>
                      <a href={`#${id}`}>
                        {station.name} ({id})
                      </a>
                    </p>
                    <a
                      href={
                        station.downloadLink ??
                        `https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/${id}`
                      }
                      target="_blank"
                    >
                      <img
                        className="w-full h-auto max-w-screen-sm sm:max-w-screen rounded-lg mx-auto dark:hidden block"
                        src={`https://github.com/valbuildr/scr-signs-concept/blob/main/${
                          station.sign ??
                          "src/stations/" + id + "/" + id.toLowerCase() + ".png"
                        }?raw=true`}
                        alt={station.name}
                      />
                      <img
                        className="w-full h-auto max-w-screen-sm sm:max-w-screen rounded-lg mx-auto hidden dark:block"
                        src={`https://github.com/valbuildr/scr-signs-concept/blob/main/${
                          station.signDark ??
                          station.sign ??
                          "src/stations/" + id + "/" + id.toLowerCase() + ".png"
                        }?raw=true`}
                        alt={station.name}
                      />
                    </a>
                  </div>
                ))}
              </div>

              <p className="text-black/50 dark:text-white/50 mt-2 text-sm">
                Font:{" "}
                <a
                  href={operator.fontLink}
                  className="hover:underline"
                  target="_blank"
                >
                  {operator.font}
                </a>
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const meta = {
  name: "SCR Platform Sign Redesign",
  hero: "/assets/project/scr-platform-sign-redesign/hero.png",
};
