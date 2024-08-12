import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/008/687/818/original/food-delivery-logo-free-vector.jpg"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restrauntcard = (props) => {
  const { retData } = props;

  const getModifiedUrl = (templateUrl) => {
    return templateUrl.replace(
      /{width=}x{height=}/,
      "/58x58/filters:fill(FFF,true):format(webp)/"
    );
  };

  const modifiedUrl = getModifiedUrl(retData.viewSection.logoImage.templateUrl);

  return (
    <div className="retailer_card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="image-Logo" alt="Logo" src={modifiedUrl} />
      <h3>{retData.retailer.name}</h3>
      <h4>{retData.retailer.categories.join(", ")}</h4>
      <h4>{retData.services.join(",")}</h4>
      {retData.viewSection.deliveryEta &&
        retData.viewSection.deliveryEta.etaString && (
          <h4>{retData.viewSection.deliveryEta.etaString}</h4>
        )}
      <h4>{retData.viewSection.pickupDistanceString}</h4>
    </div>
  );
};
const retailer_data = [
  {
    retailer: {
      name: "Price Chopper",
      id: "282",
      slug: "price-chopper-ny",
      categories: ["grocery", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery", "pickup"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: "17383",
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/282/0aa75f91-ca2c-402b-a636-031480a52b30.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery by 10:20pm",
        textColor: "brandPrimaryRegular",
        iconVariant: "speed",
        etaVariant: "faster",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: "Pickup Available",
      pickupDistanceString: "Pickup 1.5mi",
      deliveryString: "Delivery",
      pickupString: "Pickup",
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString:
        "675 Poquonock Ave • 10 more locations",
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Stop & Shop",
      id: "235",
      slug: "stop-shop",
      categories: ["grocery", "readymeals", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery", "pickup"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: "9957",
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/235/80fb9e2f-334f-4f2c-8b9a-df612a862570.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery by 10:17pm",
        textColor: "brandPrimaryRegular",
        iconVariant: "speed",
        etaVariant: "faster",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: "Pickup Available",
      pickupDistanceString: "Pickup 2.9mi",
      deliveryString: "Delivery",
      pickupString: "Pickup",
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString:
        "1095 Kennedy Road • 83 more locations",
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "ALDI",
      id: "12",
      slug: "aldi",
      categories: ["grocery", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery", "pickup"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: "120895",
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: "Pickup Available",
      pickupDistanceString: "Pickup 5.6mi",
      deliveryString: "Delivery",
      pickupString: "Pickup",
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString:
        "200 Gateway Boulevard • 30 more locations",
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "ShopRite",
      id: "205",
      slug: "shoprite",
      categories: ["grocery", "readymeals", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Stop & Shop Express",
      id: "1853",
      slug: "stop-shop-express",
      categories: ["readymeals", "gifts", "grocery", "convenience"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1853/3536532f-668b-4b2c-bf70-63882ad235e7.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery by 10:02pm",
        textColor: "brandPrimaryRegular",
        iconVariant: "speed",
        etaVariant: "faster",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Costco",
      id: "5",
      slug: "costco",
      categories: ["grocery", "club", "readymeals", "gifts", "wholesale"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Price Rite",
      id: "163",
      slug: "pricerite",
      categories: ["grocery", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/163/71eaa7d3-391c-45d2-9c68-bb19c8fe3543.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Big Y World Class Market",
      id: "241",
      slug: "big-y",
      categories: ["grocery", "readymeals", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/241/43193e0a-f0f1-4a7f-b15f-e3cf09bb90cd.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Total Wine & More",
      id: "144",
      slug: "total-wine-more",
      categories: ["gifts", "alcohol"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/144/c42efdcb-47d4-4a4a-afb1-c1029be23af1.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "CVS®",
      id: "118",
      slug: "cvs",
      categories: ["convenience", "drug", "beauty", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/118/6ede4bd3-cc58-4e32-b10b-24ed1d656131.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery by 10:10pm",
        textColor: "brandPrimaryRegular",
        iconVariant: "speed",
        etaVariant: "faster",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "BJ's Wholesale Club",
      id: "26",
      slug: "bjs",
      categories: ["grocery", "club", "gifts", "wholesale"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/26/a5a10dd0-7bff-4b1e-975a-cc24fb51c4e0.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Big Y NOW",
      id: "1939",
      slug: "big-y-now",
      categories: ["readymeals", "gifts", "grocery", "convenience"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1939/3a8258a9-c913-40ae-a11e-652d91ef0581.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Walgreens",
      id: "1573",
      slug: "walgreens",
      categories: ["convenience", "drug", "beauty", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1573/230283d3-fcec-402b-856f-ca0292afddd9.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery by 10:12pm",
        textColor: "brandPrimaryRegular",
        iconVariant: "speed",
        etaVariant: "faster",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Lowe's",
      id: "1756",
      slug: "lowes-home-improvement",
      categories: ["gifts", "generalmerchandise"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1756/6b094a04-a5ee-45a2-a20c-159c35ad9dda.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Petco",
      id: "90",
      slug: "petco",
      categories: ["pet", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/90/e989cfbe-8f4c-4ee2-be6a-b2416407a00a.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "ALDI Express",
      id: "2527",
      slug: "aldi-express",
      categories: ["grocery", "convenience"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/2527/be9e5a7a-d56a-43a0-98dd-2c4f69323481.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Restaurant Depot",
      id: "449",
      slug: "restaurant-depot",
      categories: ["grocery", "gifts", "wholesale", "club"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/449/02fcb1ed-7a1e-41f0-bff9-9b6aac8be8a8.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Family Dollar",
      id: "1424",
      slug: "family-dollar",
      categories: ["generalmerchandise", "dollar", "gifts", "grocery"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1424/cec0f3bd-c2fe-4d14-a18e-856b6f97ee63.jpg",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Stew Leonard's",
      id: "302",
      slug: "stew-leonards",
      categories: ["grocery", "readymeals", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["pickup"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: "15671",
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/302/59681426-b3f0-4184-b9d8-43d12d5a6d80.png",
        __typename: "Image",
      },
      deliveryEta: null,
      pickupAvailableString: "Pickup Available",
      pickupDistanceString: "Pickup 14.4mi",
      deliveryString: null,
      pickupString: "Pickup",
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString:
        "3475 Berlin Turnpike • 2 more locations",
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Geissler's Supermarkets Inc.",
      id: "2698",
      slug: "geisslers-supermarkets-inc",
      categories: ["grocery"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/2698/3b867045-9935-4702-b799-638b50b83da3.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "The Fresh Market",
      id: "264",
      slug: "the-fresh-market",
      categories: ["grocery", "readymeals", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["pickup"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: "32409",
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/264/7ee72632-a7ba-44e4-b874-519f2f678551.png",
        __typename: "Image",
      },
      deliveryEta: null,
      pickupAvailableString: "Pickup Available",
      pickupDistanceString: "Pickup 11.1mi",
      deliveryString: null,
      pickupString: "Pickup",
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString:
        "315 West Main Street • 2 more locations",
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Sam's Club",
      id: "352",
      slug: "sams-club",
      categories: ["grocery", "club", "gifts", "wholesale"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/352/ea8710be-0cff-4d79-8c42-2c0ea3f516d5.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Staples",
      id: "1322",
      slug: "staples",
      categories: ["generalmerchandise", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1322/2b2234e3-0159-4624-800e-d1c58d5d7991.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Dollar Tree",
      id: "1425",
      slug: "dollar-tree",
      categories: ["generalmerchandise", "dollar", "gifts", "grocery"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1425/841f212e-4938-4245-9a31-62f61dd99d6b.jpg",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Sephora",
      id: "1493",
      slug: "sephora",
      categories: ["generalmerchandise", "beauty", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1493/c4c39b30-314c-4705-98b6-b33737eaf9cf.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Save A Lot",
      id: "366",
      slug: "savealot",
      categories: ["grocery", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/366/847acc79-f4b0-40d2-9ed1-e84938c43e7f.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Key Food",
      id: "39",
      slug: "key-food",
      categories: ["grocery", "readymeals", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/39/0d4e9ee3-1686-4711-8da3-b6f26da6019f.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Ctown Supermarkets",
      id: "482",
      slug: "ctown-supermarkets",
      categories: ["grocery", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/482/2a4a00d9-3798-4534-8f42-319b19485d82.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Big Lots",
      id: "1289",
      slug: "big-lots",
      categories: ["generalmerchandise", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1289/9f79fb62-4b6d-43d8-bd13-8fa60e3528fa.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "PetSmart",
      id: "2432",
      slug: "petsmart",
      categories: ["pet"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/2432/475b3500-342c-43c7-9f29-839d576ef062.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Michaels",
      id: "1379",
      slug: "michaels",
      categories: ["generalmerchandise", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1379/fd62851a-5de4-4d73-8abc-bffd80fef773.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Suffield Village Market",
      id: "1870",
      slug: "suffield-village-market",
      categories: ["readymeals", "gifts", "grocery"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1870/2f363f67-b65d-4a1a-b1ff-4da6b427064e.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Best Buy",
      id: "1366",
      slug: "best-buy",
      categories: ["generalmerchandise", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1366/d1487beb-780a-4dff-afe6-356b03287594.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Five Below",
      id: "1456",
      slug: "five-below",
      categories: ["generalmerchandise", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1456/4223a0d3-827b-43ae-b8a4-baf90b1c1eda.jpg",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "DICK'S Sporting Goods",
      id: "1618",
      slug: "dicks-sporting-goods",
      categories: ["generalmerchandise", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1618/a37b9c51-3e88-4042-9690-e28c85ca9517.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Bath & Body Works",
      id: "1684",
      slug: "bath-and-body-works",
      categories: ["generalmerchandise", "beauty", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1684/3c11d90b-cf0a-4827-90df-aaea05569792.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "7-Eleven",
      id: "1390",
      slug: "711",
      categories: ["convenience", "gifts", "grocery"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1390/579cb2af-b731-4cec-826d-bc1c1ecbf335.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery by 10:34pm",
        textColor: "brandPrimaryRegular",
        iconVariant: "speed",
        etaVariant: "faster",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "The Vitamin Shoppe®",
      id: "1373",
      slug: "vitamin-shoppe",
      categories: ["generalmerchandise", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1373/1da94693-c8ed-44f8-b405-cc92024f9ec5.jpg",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Target: Fast Delivery",
      id: "2843",
      slug: "target-fast-delivery",
      categories: ["grocery", "convenience"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/2843/7ae6a7f4-0e63-489a-9c4c-a4eede573394.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery by 10:02pm",
        textColor: "brandPrimaryRegular",
        iconVariant: "speed",
        etaVariant: "faster",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "BJ's Wholesale Club Liquor",
      id: "645",
      slug: "bjs-liquor",
      categories: ["gifts", "wholesale", "alcohol"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/645/31140265-2f99-4a29-809c-433973ecde7f.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "The Wine Shop",
      id: "1258",
      slug: "the-wine-shop",
      categories: ["gifts", "alcohol"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/1258/9c8f4b43-7f4d-429d-a6d1-d076e23c7b75.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Market 32",
      id: "316",
      slug: "market-32",
      categories: ["grocery", "gifts"],
      __typename: "RetailersRetailer",
    },
    services: ["pickup"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: "177567",
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/316/830a9d15-7162-4c45-9e07-ae84b69a8369.png",
        __typename: "Image",
      },
      deliveryEta: null,
      pickupAvailableString: "Pickup Available",
      pickupDistanceString: "Pickup 18.9mi",
      deliveryString: null,
      pickupString: "Pickup",
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString:
        "121 Farmington Avenue • 4 more locations",
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Finish Line",
      id: "2858",
      slug: "finish-line",
      categories: ["generalmerchandise"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/2858/dee6275e-3127-4c99-8ba9-43520636fb86.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Park Liquor Store",
      id: "2321",
      slug: "park-liquor-store",
      categories: ["alcohol"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: true,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/2321/ca2b3755-6c12-4056-b537-9018eddfe1e9.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
  {
    retailer: {
      name: "Kohl's",
      id: "2407",
      slug: "kohls",
      categories: ["gifts", "generalmerchandise"],
      __typename: "RetailersRetailer",
    },
    services: ["delivery"],
    alcoholAllowed: false,
    closestPickupRetailerLocationId: null,
    viewSection: {
      logoImage: {
        templateUrl:
          "https://www.instacart.com/image-server/{width=}x{height=}/www.instacart.com/assets/domains/warehouse/logo/2407/059742d1-be2f-4693-8fb1-ebd3a54399a1.png",
        __typename: "Image",
      },
      deliveryEta: {
        etaString: "Delivery",
        textColor: "systemGrayscale70",
        iconVariant: null,
        etaVariant: "regular",
        __typename: "RetailersResponseBackedDeliveryEtaSection",
      },
      pickupAvailableString: null,
      pickupDistanceString: null,
      deliveryString: "Delivery",
      pickupString: null,
      pickupStoreAttributes: [],
      addressWithMorePickupLocationsString: null,
      __typename: "RetailersResponseBackedAvailableRetailerUserlessSection",
    },
    __typename: "RetailersRetailerServicesUserless",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="retailer-container">
        {retailer_data.map((retailer) => (
          <Restrauntcard key={retailer.retailer.id} retData={retailer} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
