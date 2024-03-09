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
//After we fetch our data we want to store it into our useState setContact(result)
                setContact(result);
                console.log(contact);
            } catch (error) {
                console.log(error)
            }
        }
        getContact();
    }, [])
//In our return (render additional information for example: contact address, city, street and zipcode)
    return (
    contact.name ? ( <div>
        <h1>{contact.name}</h1>
    <p>Username: {contact.username}</p>
    <p>Email: {contact.email}</p>
    <address>
        Address: <br></br>
{/* Address's value is an object so we need to target the exact value. */}
        {contact.address.street} <br></br>
        {contact.address.suite} <br></br>
        {contact.address.city}<br></br>
        {contact.address.zipcode}
    </address>
    <p>Phone: {contact.phone}</p>
    <p>Website: {contact.website}</p>
    <p>
        <h4>Company:</h4>
{/* Address's value is an object so we need to target the exact value. */}
        <p>Name: {contact.company.name} </p>
        <p>Catch Phrase: {contact.company.catchPhrase}</p>
        <p>Company Jibberish: {contact.company.bs}</p>
    </p>
    <button onClick={()=>setSelectedContactId(null)}>Back to ContactList</button>
   </div>) : <div></div>
)
// Address's value is an object so we need to target the exact value.
//contact.address.city 
//contact.address.zipcode
/// Using a onClick () inside a button to render each contact 
}

export default SelectedContact