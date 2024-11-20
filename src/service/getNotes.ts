export const getNotes = async (userId: string, token: string) => {
  const headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`http://localhost:3000/home/${userId}}`, {
      method: "GET",
      headers: headersList,
    });
    return response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};
