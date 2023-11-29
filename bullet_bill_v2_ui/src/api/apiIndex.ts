// just to get started
export const apiCalls = () => {
  return ""
}


export const createBBUser = (body:any) => {
  const url = "http://localhost:8082/notePad/createUser";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify(body)
  };
  try{
    fetch(url, options)
      .then((response) => response)
      .then((data) => {
        console.log(data);
    });
  } catch(e) {
    console.log("fetch failed:::", e)
  }
}
