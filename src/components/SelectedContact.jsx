// In this file we will be fetching individual contact list and render more information 
//https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/1  <-- example api fetch based off ID
import { useState, useEffect } from 'react'

// useEffect -> fetching api based off contact ID and then storing that contact in a useState
/// const [contact, setContact] = useState(null)
//useEffect(() => { async function fetchSelectedContact() { try{ const response = away fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)const result = away.response.json() setContact(result) --- catch error function }}fetchSelectedContact()},[])

function SelectedContact({setSelectedContactId, selectedContactId}){
    const [contact, setContact] = useState({})

    useEffect(() => {
        async function getContact(){
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
                console.log(contact);
            } catch (error) {
                console.log(error)
            }
        }
        getContact();
    }, [])

//After we fetch our data we want to store it into our useState setContact(result)
    return (

//In our return ( render additional information for example contact address, city, street, and zipcode)
    contact.name ? ( <div>
        <h1>{contact.name}</h1>
    <p>Username: {contact.username}</p>
    <p>Phone: {contact.phone}</p>
    <p>Website: {contact.website}</p>
    <address>
        Address: <br></br>
        {contact.address.street} <br></br>
        {contact.address.suite} <br></br>
        {contact.address.city}<br></br>
        {contact.address.zipcode}
    </address>
    <button onClick={()=>setSelectedContactId(null)}>Back to ContactList</button>
   </div>) : <div></div>
)
// Address's value is an object so we need to target the exact value.
//contact.address.city 
//contact.address.zipcode
/// Hint hint using a onClick () inside a button would help render each contact 
// setSelectedContactID(null)
}

export default SelectedContact