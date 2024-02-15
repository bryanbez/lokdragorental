export const fetchAllDragos = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/drago");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const alldragos = await response.json();

    return alldragos;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleDrago = async (dragoId) => {
  // validation of drago id
  try {
    const response = await fetch(`http://localhost:3000/api/drago/${dragoId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const drago = await response.json();
    return drago;
  } catch (err) {
    console.log(err);
  }
};

export const fetchFieldNameURL = async (fieldName) => {
  // validation of fieldname
  return await fetchFieldName(fieldName);
};
