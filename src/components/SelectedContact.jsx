// In this file we will be fetching individual contact list and render more information 
//https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/1  <-- example api fetch based off ID

// useEffect -> fetching api based off contact ID and then storing that contact in a useState
/// const [contact, setContact] = useState(null)
//useEffect(() => { async function fetchSelectedContact() { try{ const response = away fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)const result = away.response.json() setContact(result) --- catch error function }}fetchSelectedContact()},[])


//After we fetch our data we want to store it into our useState setContact(result)

//In our return ( render additional information for example contact address, city, street, and zipcode)

// Keep in mind that address's value is an object so we need to target the exact value.
//contact.address.city 
//contact.address.zipcode
/// Hint hint using a onClick () inside a button would help render each contact 
// setSelectedContactID(null)