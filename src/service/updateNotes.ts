interface notesData {
  id: string;
  text: string | null;
}

export const updateNotes = async ({
  userId,
  token,
  notesData,
}: {
  userId: string;
  token: string;
  notesData: notesData;
}) => {
  console.log(notesData);
  const headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    userId: userId,
    notesData: notesData,
  });

  try {
    const response = await fetch("http://localhost:3000/updateNotes", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
