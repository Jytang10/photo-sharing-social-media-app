export const getPeople = () => {

  const getPeople = fetch('http://localhost:3004/people')
                    .then(res => res.json())

  return {
    type:"GET_PEOPLE",
    payload: getPeople
  }
}