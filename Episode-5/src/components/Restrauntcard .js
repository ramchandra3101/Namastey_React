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

export default Restrauntcard;
