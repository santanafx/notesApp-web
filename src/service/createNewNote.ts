export const createNewNote = async ({
  userId,
  token,
  text,
}: {
  userId: string;
  token: string;
  text: string;
}) => {
  const headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    text: text,
    userId: userId,
  });

  try {
    const response = await fetch("http://localhost:3000/createNewNote", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
