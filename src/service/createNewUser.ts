export const createNewUser = async (email: string, password: string) => {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    email: email,
    password: password,
  });

  try {
    const response = await fetch("http://localhost:3000/createNewUser", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
