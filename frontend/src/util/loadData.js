const loadData = async (setState, type, hash) => {
  const getUrl = (type) => {
    let url =
      "https://h3rb9c0ugl.execute-api.ap-northeast-2.amazonaws.com/develop/baminchan/";
    switch (type) {
      case "mainDish":
        return (url += "main");
      case "bestDish":
        return (url += "best");
      case "soupDish":
        return (url += "soup");
      case "sideDish":
        return (url += "side");
      case "detailDish":
        return (url += `detail${hash}`);
      case "details":
        return (url += "side");
      default:
        return;
    }
  };

  const response = await fetch(getUrl(type));
  const initialData = await response.json();

  if (type === "detailDish") {
    const dataBody = initialData.hash;
    console.log("⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️", dataBody);
    return setState(dataBody);
  }
  if (type !== "bestDish") {
    const dataBody = initialData.body;

    if (type === "details") {
      const dataBody = initialData.body;
      return setState(dataBody);
    }

    return setState([...dataBody, ...dataBody]);
  }
  const dataBody = initialData.body;
  setState(dataBody);
};

export default loadData;
