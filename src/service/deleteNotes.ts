export const deleteNotes = async ({
  userId,
  token,
  ids,
}: {
  userId: string;
  token: string;
  ids: string[];
}) => {
  const headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    ids: ids,
    userId: userId,
  });

  try {
    const response = await fetch("http://localhost:3000/deleteNotes", {
      method: "DELETE",
      body: bodyContent,
      headers: headersList,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
