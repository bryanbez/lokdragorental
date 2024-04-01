export const fetchAllDragos = async (isRented = "all") => {
  try {
    if (isRented !== "all") {
      const response = await fetch(
        `http://localhost:3000/api/drago?isRented=${isRented}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const alldragos = await response.json();
    }
    const response = await fetch("http://localhost:3000/api/drago", {
      next: {
        revalidate: 0,
      },
    });

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
  if (!dragoId) {
    return null;
  }
  // validation of drago id
  try {
    const response = await fetch(`http://localhost:3000/api/drago/${dragoId}`, {
      next: {
        revalidate: 0,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const drago = await response.json();

    return drago;
  } catch (err) {
    console.log(err);
  }
};

export const filterDragoRentStatus = async (rentStatus) => {
  if (!rentStatus) {
    return null;
  }
  try {
    const response = await fetch(
      `http://localhost:3000/api/drago/rentStatus/${rentStatus}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const alldragos = await response.json();
    return alldragos;
  } catch (err) {
    console.log(err);
  }
};

export const filterDragoLegCount = async (legCount) => {

  try {
    const response = await fetch(
      `http://localhost:3000/api/drago/legCount/${legCount}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const alldragos = await response.json();
   
    return alldragos;
  } catch (err) {
    console.log(err);
  }
}

export const fetchFieldNameURL = async (fieldName) => {
  // validation of fieldname
  return await fetchFieldName(fieldName);
};
