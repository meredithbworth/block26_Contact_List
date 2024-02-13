export default function ContactRow({setSelectedContactId, contact}) {
    return (
        <tr onClick={() => {setSelectedContactId(contact.id)}}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}
// { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" }